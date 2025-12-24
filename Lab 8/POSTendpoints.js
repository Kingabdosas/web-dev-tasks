const express = require("express");
const app = express();

app.use(express.json());

const posts = [];
let nextId = 1;


app.post("/posts", (req, res) => {
  const post = {
    id: nextId++,
    title: req.body.title,
    content: req.body.content
  };

  posts.push(post);
  console.log("Added post:", post);

  res.status(201).json(post);
});


app.get("/posts", (req, res) => {
  res.json(posts);
});


app.get("/posts/:id", (req, res) => {
  const id = Number(req.params.id);
  const post = posts.find(p => p.id === id);

  if (!post) {
    return res.status(404).json({ message: "Post not found" });
  }

  res.json(post);
});


app.put("/posts/:id", (req, res) => {
  const id = Number(req.params.id);
  const post = posts.find(p => p.id === id);

  if (!post) {
    return res.status(404).json({ message: "Post not found" });
  }

  post.title = req.body.title ?? post.title;
  post.content = req.body.content ?? post.content;

  res.json(post);
});


app.delete("/posts/:id", (req, res) => {
  const id = Number(req.params.id);
  const index = posts.findIndex(p => p.id === id);

  if (index === -1) {
    return res.status(404).json({ message: "Post not found" });
  }

  const deletedPost = posts.splice(index, 1);
  res.json(deletedPost[0]);
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
