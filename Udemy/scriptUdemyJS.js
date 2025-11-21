// promo data
const promoData = {
    text: "New-learner offer | Courses from E£259.99. Ends in 5h 56m 33s.",
    buttonText: "Click to redeem"
};

// hero data
const heroData = {
    headline: "Jump into learning — for less",
    subtext: "If you're new to Udemy, we've got good news: For a limited time, courses start at just E£259.99 for new learners!",
    buttonText: "Sign up now",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
};

// partners data
const partnersData = [
    "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Volkswagen_logo_2019.svg/600px-Volkswagen_logo_2019.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Samsung_Logo.svg/2560px-Samsung_Logo.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Cisco_logo_blue_2016.svg/1200px-Cisco_logo_blue_2016.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Vimeo_Logo_2021.svg/2560px-Vimeo_Logo_2021.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Procter_%26_Gamble_logo.svg/1200px-Procter_%26_Gamble_logo.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/HP_logo_2012.svg/1024px-HP_logo_2012.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Citi.svg/1200px-Citi.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Ericsson_logo.svg/1200px-Ericsson_logo.svg.png"
];

// categories data
const categoriesData = [
    { 
        title: "Generative AI", 
        learners: "1M+ learners", 
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=500&q=60" 
    },
    { 
        title: "IT Certifications", 
        learners: "14.4M+ learners", 
        image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=500&q=60" 
    },
    { 
        title: "Data Science", 
        learners: "8M+ learners", 
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=500&q=60" 
    }
];

// dark promo data
const aiPromoData = {
    headline: "Reimagine your career in the AI era",
    desc: "Future-proof your skills with Personal Plan. Get access to a variety of fresh content from real-world experts.",
    features: ["Learn AI and more", "Prep for a certification", "Practice with AI coaching", "Advance your career"],
    buttonText: "Learn more",
    price: "Starting at E£204.00/month",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=800&q=80"
};

// course data
const coursesData = [
    { 
        title: "The AI Engineer Course 2025: Complete Bootcamp", 
        author: "365 Careers", 
        rating: "4.6", 
        reviews: "(10,801)", 
        price: "E£349.99", 
        badge: "Bestseller", 
        image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=500&q=60" 
    },
    { 
        title: "Intro to AI Agents and Agentic AI", 
        author: "365 Careers", 
        rating: "4.4", 
        reviews: "(895)", 
        price: "E£349.99", 
        badge: "Bestseller", 
        image: "https://images.unsplash.com/photo-1617791160505-6f00504e3519?auto=format&fit=crop&w=500&q=60" 
    },
    { 
        title: "Artificial Intelligence (AI) Foundations for Developers", 
        author: "Rahul Rajat Singh", 
        rating: "5.0", 
        reviews: "(21)", 
        price: "E£349.99", 
        badge: "Highest Rated", 
        image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=500&q=60" 
    },
    { 
        title: "The Complete Guide To AI Powered Salesforce", 
        author: "Matt Gerry", 
        rating: "4.8", 
        reviews: "(74)", 
        price: "E£349.99", 
        badge: "Hot & New", 
        image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=500&q=60" 
    }
];

// render logic

// render Promo
document.getElementById('promo-bar').innerHTML = `<span>${promoData.text}</span><button class="promo-btn">${promoData.buttonText}</button>`;

// render Nav
const navLinks = ["Udemy Business", "Teach on Udemy"];
const navContainer = document.getElementById('nav-links');
navLinks.forEach(t => navContainer.innerHTML += `<a href="#" class="nav-link">${t}</a>`);
navContainer.innerHTML += `
    <a href="#" class="nav-link">🛒</a>
    <a href="#" class="btn-auth">Log in</a>
    <a href="#" class="btn-auth btn-black">Sign up</a>
    <a href="#" class="nav-link">🌐</a>
`;

// render Hero
document.getElementById('hero-content').innerHTML = `
    <img src="${heroData.image}" class="hero-banner-img" alt="Hero">
    <div class="hero-card">
        <h1>${heroData.headline}</h1>
        <p>${heroData.subtext}</p>
        <br>
        <button class="promo-btn btn-black" style="width:100%; padding:12px;">${heroData.buttonText}</button>
    </div>
`;

// render Partners 
const partnersContainer = document.getElementById('partners-container');
partnersContainer.innerHTML = ''; 
partnersData.forEach(logoUrl => {
    partnersContainer.innerHTML += `<img src="${logoUrl}" alt="Partner Logo">`;
});

// render Categories
const catContainer = document.getElementById('categories-container');
categoriesData.forEach(c => {
    catContainer.innerHTML += `
        <div class="cat-card">
            <div class="cat-image"><img src="${c.image}"></div>
            <div class="cat-info"><span class="cat-title">${c.title}</span><span class="cat-learners">${c.learners}</span></div>
        </div>
    `;
});

// render Dark Promo
const fList = aiPromoData.features.map(f => `<li><span style="background:rgba(255,255,255,0.2); border-radius:50%; padding:2px;">➤</span> ${f}</li>`).join('');
document.getElementById('ai-promo-container').innerHTML = `
    <div class="dark-content">
        <h2>${aiPromoData.headline}</h2>
        <p>${aiPromoData.desc}</p>
        <ul class="feature-list">${fList}</ul>
        <button class="btn-white">${aiPromoData.buttonText}</button>
        <div style="margin-top:10px; font-size:12px; color:#ddd;">${aiPromoData.price}</div>
    </div>
    <div class="dark-image">
        <img src="${aiPromoData.image}">
    </div>
`;

// render courses
const tabContainer = document.getElementById('course-tabs');
["Artificial Intelligence (AI)", "Python", "Microsoft Excel", "AI Agents", "Digital Marketing"].forEach((t,i) => {
    tabContainer.innerHTML += `<div class="tab ${i===0?'active':''}">${t}</div>`;
});

const courseContainer = document.getElementById('courses-container');
coursesData.forEach(c => {
    courseContainer.innerHTML += `
        <div class="course-card">
            <div class="course-img-wrapper"><img src="${c.image}"></div>
            <div class="course-title">${c.title}</div>
            <div class="course-author">${c.author}</div>
            <div class="course-rating"><span>${c.rating}</span><span>⭐⭐⭐⭐⭐</span><span style="font-weight:400; color:#6a6f73">${c.reviews}</span></div>
            <div class="course-price">${c.price}</div>
            <div class="badge">${c.badge}</div>
        </div>
    `;
});