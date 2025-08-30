$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 20,
    nav: false,
    dots: false,
    autoplay: true,
    autoplayTimeout: 2000,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 3
        },
        1000: {
            items: 4
        }
    }
})

function toggleChat() {
    const chat = document.getElementById("chatbot");
    chat.style.display = chat.style.display === "none" ? "flex" : "none";
}

function sendMessage() {
    const input = document.getElementById("userInput");
    const msg = input.value.trim();
    if (!msg) return;

    const chatlog = document.getElementById("chatlog");

    // Append user message
    chatlog.innerHTML += `<div class="chat-msg chat-user"><strong>You:</strong> ${msg}</div>`;

    // Basic responses
    let response = "I'm not sure how to answer that.";
    const msgLower = msg.toLowerCase();

    if (msgLower.includes("product") || msgLower.includes("offer")) {
        response = "We offer a variety of fashion and tech products. Stay tuned for updates!";
    } else if (msgLower.includes("discount")) {
        response = "Yes! We offer seasonal discounts. Check our home page for promotions.";
    }
    else if (msgLower.includes("payment methods")) {
        response = "We accept credit cards, PayPal, UPI, and net banking.";
    }
    else if (msgLower.includes("return policy")) {
        response = "Our return policy allows free returns within 30 days of purchase.";
    }
    else if (msgLower.includes("contact")) {
        response = "You can reach us at support@example.com.";
    } else if (msgLower.includes("shipping") || msgLower.includes("delivery")) {
        response = "We offer free worldwide shipping on all orders!";
    } else if (msgLower.includes("hello") || msgLower.includes("hi")) {
        response = "Hello! How can I help you today?";
    }

    // Append bot response
    setTimeout(() => {
        chatlog.innerHTML += `<div class="chat-msg chat-bot"><strong>Bot:</strong> ${response}</div>`;
        chatlog.scrollTop = chatlog.scrollHeight;
    }, 500);

    input.value = '';
    chatlog.scrollTop = chatlog.scrollHeight;
}
// 

const translations = {
    en: {
        dir: "ltr",
        brandName: "Comforty",
        cartBtn: "Cart",
        allCategories: "All Categories",
        navHome: "Home", navShop: "Shop", navProduct: "Product", navPages: "Pages", navAbout: "About",
        contactTxt: "Contact:(808) 555-0111",
        welcomeText: "WELCOME TO CHAIRY",
        heroTitle: "Best Furniture Collection For Your Interior",
        shopNowBtn: "Shop Now →",
        discountTxt: "Discount",
        clientHeading: "What Our Clients Say About Us",
        footerBrand: "Chairy",
        footerDesc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi sapiente iste facilis cum, inventore recusandae doloremque animi officia",
        footerCat: "Category",
        footerSupport: "Support",
        footerNewsletter: "News Letter",
        copyTxt: "© Copyright All Rights Reserved",

        shopHeading: "Features Product",
        productHeading: "Our Product",
        nav21: "All",
        nav22: "Newest", nav23: "Trending", nav24: "Best Seller", nav25: "Featured", chatAI: "Chat with us",navV:"Virtual Chairs"
    },
    fr: {
        dir: "ltr",
        brandName: "Confort",
        cartBtn: "Panier",
        allCategories: "Toutes catégories",
        navHome: "Accueil", navShop: "Boutique", navProduct: "Produit", navPages: "Pages", navAbout: "À propos",
        contactTxt: "Contact:(808) 555-0111",
        welcomeText: "BIENVENUE CHEZ CHAIRY",
        heroTitle: "Meilleure collection de meubles pour votre intérieur",
        shopNowBtn: "Acheter maintenant →",
        discountTxt: "Remise",
        clientHeading: "Ce que nos clients disent de nous",
        footerBrand: "Chairy",
        footerDesc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi sapiente iste faciliscum, inventore recusandae doloremque animi officia",
        footerCat: "Catégorie",
        footerSupport: "Support",
        footerNewsletter: "Bulletin",
        copyTxt: "© Copyright Tous droits réservés",

        shopHeading: "Caractéristiques du produit",
        productHeading: "Notre produit",
        nav21: "Tout",
        nav22: "Le plus récent", nav23: "Tendance", nav24: "Meilleur vendeur", nav25: "En vedette", chatAI: "Discutez avec nous",navV:"Chaises virtuelles"
    },
    es: {
        dir: "ltr",
        brandName: "Comodidad",
        cartBtn: "Carrito",
        allCategories: "Todas las categorías",
        navHome: "Inicio", navShop: "Tienda", navProduct: "Producto", navPages: "Páginas", navAbout: "Acerca de",
        contactTxt: "Contacto:(808) 555-0111",
        welcomeText: "BIENVENIDO A CHAIRY",
        heroTitle: "La mejor colección de muebles para tu interior",
        shopNowBtn: "Comprar ahora →",
        discountTxt: "Descuento",
        clientHeading: "Lo que nuestros clientes dicen de nosotros",
        footerBrand: "Chairy",
        footerDesc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi sapiente iste faciliscum, inventore recusandae doloremque animi officia",
        footerCat: "Categoría",
        footerSupport: "Soporte",
        footerNewsletter: "Boletín",
        copyTxt: "© Copyright Todos los derechos reservados",

        shopHeading: "Características del producto",
        productHeading: "Nuestro producto",
        nav21: "Toda",
        nav22: "El más nuevo", nav23: "Tendencia", nav24: "Mejor vendedor", nav25: "Presentado", chatAI: "Chatea con nosotros",navV:"Sillas virtuales"
    }
};

function changeLanguage(lang) {
    document.documentElement.setAttribute("dir", translations[lang].dir);
    Object.keys(translations[lang]).forEach(key => {
        const el = document.getElementById(key);
        if (el) el.innerText = translations[lang][key];
    });
}

document.getElementById("languageSelect").addEventListener("change", function () {
    changeLanguage(this.value);
});

// Default: English
changeLanguage("er");
