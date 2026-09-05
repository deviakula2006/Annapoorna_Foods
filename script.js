/* =========================================================
   ANNAPURNA FOODS — CONFIG
   Centralized business contact details. This is the ONLY
   place these need to change.
   ========================================================= */
const CONFIG = {
  whatsappNumber: "917816080166",      // digits only, country code first, no + or spaces
  phoneNumber: "+917816080166",
  email: "annapoornafoods01@gmail.com",
  instagramUrl: "https://www.instagram.com/annapoorna.foods.01?utm_source=qr&igsi=MTg2M3Y3MGtxbm93bg==",
  whatsappChatUrl: "https://wa.me/message/P4GS6XVOI776L1",
  whatsappGroupUrl: "https://chat.whatsapp.com/JdH7L9CU1dHExJeKZtUXPt?s=cl&p=a&mlu=4&ilr=4",
  defaultWhatsappMessage: "Hello Annapurna Foods! I would like to know more about your products and place an order.",
};

function waLink(message){
  const msg = encodeURIComponent(message || CONFIG.defaultWhatsappMessage);
  return `https://wa.me/${CONFIG.whatsappNumber}?text=${msg}`;
}
function telLink(){ return `tel:${CONFIG.phoneNumber}`; }
function emailLink(){ return `mailto:${CONFIG.email}`; }

/* =========================================================
   PRODUCT DATA — 24 products, exact prices, three categories
   ========================================================= */
const PRODUCTS = [
  // ---------------- SWEETS ----------------
  {
    id: "sunnundalu", name: "Sunnundalu", category: "sweets",
    catLabel: "Traditional Sweet", img: "images/sunnundalu.jpg",
    desc: "Roasted urad dal and jaggery, shaped by hand.",
    startAt: 130,
    prices: [["250g", 130], ["500g", 250], ["1kg", 500]],
    about: {
      what: "Sunnundalu is a classic Andhra sweet made from roasted black gram (urad dal) ground with jaggery and shaped into soft, round laddus.",
      tradition: "A staple of festive and family kitchens across Andhra Pradesh, often prepared for celebrations and passed down through generations.",
      taste: "Nutty, lightly sweet and soft, with a gentle graininess from the roasted dal.",
      loved: ["Traditional Andhra preparation", "Made with roasted urad dal and jaggery", "Handmade in small batches", "Soft, nostalgic festive flavour"]
    }
  },
  {
    id: "kobbari-kova", name: "Kobbari Kova", category: "sweets",
    catLabel: "Traditional Sweet", img: "images/kobbari-kova.jpg",
    desc: "Rich coconut kova, slow-prepared the traditional way.",
    startAt: 200,
    prices: [["250g", 200], ["500g", 400], ["1kg", 750]],
    about: {
      what: "Kobbari Kova is a coconut-based sweet, slow-cooked to a rich, fudge-like texture.",
      tradition: "A festive favourite in Andhra homes, prized for the effort and patience its preparation demands.",
      taste: "Rich, milky and deeply coconutty, with a soft melt-in-the-mouth texture.",
      loved: ["Traditional home-style preparation", "Rich coconut flavour", "Made in small batches", "A festive-kitchen favourite"]
    }
  },
  {
    id: "rava-laddu", name: "Rava Laddu", category: "sweets",
    catLabel: "Traditional Sweet", img: "images/rava-laddu.jpg",
    desc: "Semolina laddus with ghee, roasted to a light crunch.",
    startAt: 90,
    prices: [["250g", 90], ["500g", 180], ["1kg", 350]],
    about: {
      what: "Rava Laddu is a semolina (rava) sweet, roasted in ghee and bound with jaggery or sugar into round laddus.",
      tradition: "A familiar sight at Andhra celebrations and everyday festive occasions alike.",
      taste: "Light, slightly crunchy and fragrant with roasted ghee.",
      loved: ["Roasted semolina and ghee", "Light, festive texture", "Handmade in small batches", "A comforting, familiar sweet"]
    }
  },
  {
    id: "kobbari-undalu", name: "Kobbari Undalu", category: "sweets",
    catLabel: "Traditional Sweet", img: "images/kobbari-undalu.jpg",
    desc: "Bite-sized coconut laddus, simple and homely.",
    startAt: 8,
    prices: [["1 piece", 8], ["12 pieces", 95]],
    about: {
      what: "Kobbari Undalu are small coconut laddus, rolled by hand into bite-sized portions.",
      tradition: "A simple, homely sweet often prepared for everyday occasions and small celebrations.",
      taste: "Sweet, coconutty and soft, with a satisfying bite-sized form.",
      loved: ["Simple, homely coconut sweet", "Hand-rolled in small batches", "Easy bite-sized portions", "A familiar festive taste"]
    }
  },
  {
    id: "boorelu", name: "Boorelu", category: "sweets",
    catLabel: "Traditional Sweet", img: "images/boorelu.jpg",
    desc: "Deep-fried dumplings filled with sweet coconut and dal.",
    startAt: 50,
    prices: [["5 pieces", 50], ["10 pieces", 95], ["20 pieces", 180]],
    about: {
      what: "Boorelu are traditional sweet dumplings — a soft outer coating filled with a sweetened lentil and coconut mixture, then deep-fried.",
      tradition: "A festive Andhra classic, especially popular during Sankranti and other family celebrations.",
      taste: "Crisp on the outside, soft and sweet within, with a fragrant coconut filling.",
      loved: ["Traditional festive preparation", "Sweet coconut and dal filling", "Handmade in small batches", "Crisp outside, soft inside"]
    }
  },

  // ---------------- SNACKS ----------------
  {
    id: "bellam-gavvalu", name: "Bellam Gavvalu", category: "snacks",
    catLabel: "Traditional Snack", img: "images/bellam-gavvalu.jpg",
    desc: "Shell-shaped crisps coated in rich jaggery syrup.",
    startAt: 80, hasFlour: true,
    priceSets: {
      godhuma: [["250g", 90], ["500g", 180], ["1kg", 350]],
      maida: [["250g", 80], ["500g", 160], ["1kg", 315]],
    },
    about: {
      what: "Bellam Gavvalu are shell-shaped fried snacks coated in a rich jaggery syrup, giving a crisp, sweet finish.",
      tradition: "A beloved traditional Andhra sweet-snack, carrying the nostalgic flavour of homemade festive kitchens.",
      taste: "Crisp texture with rich jaggery sweetness — nostalgic and comforting.",
      loved: ["Traditional Andhra preparation", "Rich jaggery-based sweetness", "Handmade in small batches", "Crisp, festive and nostalgic"]
    }
  },
  {
    id: "karam-gavvalu", name: "Karam Gavvalu", category: "snacks",
    catLabel: "Traditional Snack", img: "images/karam-gavvalu.jpg",
    desc: "The spiced, savoury version of our shell-shaped gavvalu.",
    startAt: 60, hasFlour: true,
    priceSets: {
      godhuma: [["250g", 70], ["500g", 140], ["1kg", 270]],
      maida: [["250g", 60], ["500g", 120], ["1kg", 235]],
    },
    about: {
      what: "Karam Gavvalu is the savoury, spiced counterpart to our jaggery gavvalu — the same shell-shaped crisp, seasoned instead with traditional spices.",
      tradition: "A favourite tea-time snack across Andhra households.",
      taste: "Crisp, spiced and moreish — perfect alongside a cup of chai.",
      loved: ["Traditional Andhra preparation", "Savoury, spiced coating", "Handmade in small batches", "A classic chai-time snack"]
    }
  },
  {
    id: "bellam-diamonds", name: "Bellam Diamonds", category: "snacks",
    catLabel: "Traditional Snack", img: "images/bellam-diamonds.jpg",
    desc: "Diamond-cut crisps glazed in jaggery.",
    startAt: 80, hasFlour: true,
    priceSets: {
      godhuma: [["250g", 90], ["500g", 180], ["1kg", 350]],
      maida: [["250g", 80], ["500g", 160], ["1kg", 315]],
    },
    about: {
      what: "Bellam Diamonds are diamond-cut fried crisps coated in a glossy jaggery glaze.",
      tradition: "A festive-kitchen classic, shaped and prepared the traditional way.",
      taste: "Crunchy with a rich jaggery sweetness in every bite.",
      loved: ["Traditional diamond-cut shape", "Rich jaggery glaze", "Handmade in small batches", "Crisp, festive sweetness"]
    }
  },
  {
    id: "karam-diamonds", name: "Karam Diamonds", category: "snacks",
    catLabel: "Traditional Snack", img: "images/karam-diamonds.jpg",
    desc: "Diamond-cut crisps with a savoury, spiced coating.",
    startAt: 60, hasFlour: true,
    priceSets: {
      godhuma: [["250g", 70], ["500g", 140], ["1kg", 270]],
      maida: [["250g", 60], ["500g", 120], ["1kg", 235]],
    },
    about: {
      what: "Karam Diamonds are the savoury version of our diamond-cut crisps, seasoned with traditional spice.",
      tradition: "A dependable everyday snack in Andhra homes, easy to share and always welcome with tea.",
      taste: "Crisp, spiced and satisfyingly crunchy.",
      loved: ["Traditional diamond-cut shape", "Savoury, spiced coating", "Handmade in small batches", "A reliable everyday snack"]
    }
  },
  {
    id: "kajjikaya", name: "Kajjikaya", category: "snacks",
    catLabel: "Traditional Snack", img: "images/kajjikaya.jpg",
    desc: "Golden fried pastries with a sweet, spiced filling.",
    startAt: 10,
    prices: [["1 piece", 10]],
    about: {
      what: "Kajjikaya is a traditional fried pastry with a sweetened filling, folded and crimped by hand before frying.",
      tradition: "A festive-season favourite, especially around Sankranti, prepared in Andhra kitchens for generations.",
      taste: "Crisp golden shell with a sweet, fragrant filling inside.",
      loved: ["Traditional festive pastry", "Hand-folded and crimped", "Prepared in small batches", "Crisp outside, sweet within"]
    }
  },
  {
    id: "jantukulu", name: "Jantukulu", category: "snacks",
    catLabel: "Traditional Snack", img: "images/jantukulu.jpg",
    desc: "Crisp, ridged rice-flour snack with a savoury crunch.",
    startAt: 80,
    prices: [["250g", 80], ["500g", 160], ["1kg", 315]],
    about: {
      what: "Jantukulu is a traditional crisp snack with a distinctive ridged shape and a satisfying crunch.",
      tradition: "A well-loved tea-time snack found in traditional Andhra kitchens.",
      taste: "Crisp and savoury, with a light, crunchy bite.",
      loved: ["Traditional shape and texture", "Savoury, crisp bite", "Handmade in small batches", "A classic tea-time favourite"]
    }
  },
  {
    id: "boondi", name: "Boondi", category: "snacks",
    catLabel: "Traditional Snack", img: "images/boondi.jpg",
    desc: "Tiny fried gram-flour drops, seasoned and crunchy.",
    startAt: 80,
    prices: [["250g", 80], ["500g", 160], ["1kg", 315]],
    about: {
      what: "Boondi is made from tiny fried gram-flour drops, seasoned for a savoury, crunchy snack.",
      tradition: "A familiar, versatile snack found across South Indian households.",
      taste: "Light, crisp and savoury, with a satisfying crunch in every handful.",
      loved: ["Fine, crisp texture", "Savoury seasoning", "Made in small batches", "A versatile everyday snack"]
    }
  },
  {
    id: "karapusa", name: "Karapusa", category: "snacks",
    catLabel: "Traditional Snack", img: "images/karapusa.jpg",
    desc: "Spiced, crunchy mixture perfect for any time of day.",
    startAt: 80,
    prices: [["250g", 80], ["500g", 160], ["1kg", 315]],
    about: {
      what: "Karapusa is a spiced, crunchy savoury mixture, traditionally prepared for everyday snacking.",
      tradition: "A staple snack in Andhra kitchens, often kept on hand for guests and tea-time.",
      taste: "Crisp, spiced and moreish.",
      loved: ["Traditional spiced mixture", "Crisp, crunchy texture", "Handmade in small batches", "Great for any time of day"]
    }
  },
  {
    id: "roasted-moong-dal", name: "Roasted Moong Dal", category: "snacks",
    catLabel: "Traditional Snack", img: "images/roasted-moong-dal.jpg",
    desc: "Lightly roasted and seasoned split moong dal.",
    startAt: 70,
    prices: [["250g", 70], ["500g", 140], ["1kg", 270]],
    about: {
      what: "Roasted Moong Dal is split moong dal, roasted and lightly seasoned for a simple, crunchy snack.",
      tradition: "A light, everyday snack found in traditional South Indian kitchens.",
      taste: "Nutty, light and crisp.",
      loved: ["Lightly roasted, not fried", "Simple, nutty flavour", "Prepared in small batches", "A light everyday snack"]
    }
  },
  {
    id: "roasted-senagapappu", name: "Roasted Senagapappu", category: "snacks",
    catLabel: "Traditional Snack", img: "images/roasted-senagapappu.jpg",
    desc: "Roasted Bengal gram, seasoned for a nutty crunch.",
    startAt: 70,
    prices: [["250g", 70], ["500g", 140], ["1kg", 270]],
    about: {
      what: "Roasted Senagapappu is roasted Bengal gram (chana dal), seasoned simply for everyday snacking.",
      tradition: "A traditional, humble snack that has always had a place in Andhra kitchens.",
      taste: "Nutty and crisp with a light seasoning.",
      loved: ["Roasted, not deep-fried", "Simple, nutty crunch", "Prepared in small batches", "A humble, familiar snack"]
    }
  },
  {
    id: "palli-pakodi", name: "Palli Pakodi", category: "snacks",
    catLabel: "Traditional Snack", img: "images/palli-pakodi.jpg",
    desc: "Crunchy peanut fritters coated in a spiced gram-flour batter.",
    startAt: 100,
    prices: [["250g", 100], ["500g", 200], ["1kg", 400]],
    about: {
      what: "Palli Pakodi is made from peanuts coated in a spiced gram-flour batter and fried until crisp.",
      tradition: "A well-loved snack for gatherings and tea-time across Andhra homes.",
      taste: "Crunchy, nutty and spiced.",
      loved: ["Peanuts in a spiced batter", "Crisp, crunchy bite", "Handmade in small batches", "A gathering-time favourite"]
    }
  },
  {
    id: "gorimitilu", name: "Gorimitilu", category: "snacks",
    catLabel: "Traditional Snack", img: "images/gorimitilu.jpg",
    desc: "Traditional ring-shaped rice snack, crisp and savoury.",
    startAt: 6,
    prices: [["1 piece", 6]],
    about: {
      what: "Gorimitilu is a traditional ring-shaped rice-based snack, shaped by hand and fried to a crisp finish.",
      tradition: "A distinctive Andhra snack shape, prepared in traditional home kitchens.",
      taste: "Crisp and savoury, with a satisfying bite.",
      loved: ["Traditional ring shape", "Hand-shaped in small batches", "Crisp, savoury bite", "A distinctive Andhra classic"]
    }
  },
  {
    id: "buttakaja", name: "Buttakaja", category: "snacks",
    catLabel: "Traditional Snack", img: "images/buttakaja.jpg",
    desc: "A traditional fried snack, crisp and made in small batches.",
    startAt: 5,
    prices: [["1 piece", 5]],
    about: {
      what: "Buttakaja is a traditional fried snack, prepared following the family's own recipe.",
      tradition: "A regional favourite that has long held a place in home kitchens.",
      taste: "Crisp and satisfying, best enjoyed fresh.",
      loved: ["Traditional family recipe", "Freshly fried in small batches", "Crisp, homely texture", "A regional favourite"]
    }
  },
  {
    id: "chhalgutti", name: "Challa Gutti", category: "snacks",
    catLabel: "Traditional Snack", img: "images/challa-gutti.jpg",
    desc: "A traditional fried snack, prepared the homemade way.",
    startAt: 100,
    prices: [["250g", 100], ["500g", 200], ["1kg", 400]],
    about: {
      what: "Chhalgutti is a traditional fried snack, prepared following the family's own recipe.",
      tradition: "A homely snack that has held a place in the family's traditional kitchen.",
      taste: "Crisp and savoury, best enjoyed fresh.",
      loved: ["Traditional family recipe", "Freshly prepared in small batches", "Crisp, homely texture", "A traditional favourite"]
    }
  },

  // ---------------- PODIS ----------------
  {
    id: "karam-podi", name: "Karam Podi", category: "podis",
    catLabel: "Traditional Podi", img: "images/karam-podi.jpg",
    desc: "Classic spiced red chilli podi for everyday meals.",
    startAt: 150,
    prices: [["250g", 150], ["500g", 300], ["1kg", 600]],
    about: {
      what: "Karam Podi is a classic Andhra spice powder made from red chillies and lentils, ground the traditional way.",
      tradition: "A staple condiment on every Andhra dining table, mixed with ghee or oil and eaten with rice or idli.",
      taste: "Bold, spiced and deeply savoury.",
      loved: ["Traditional Andhra recipe", "Bold, everyday flavour", "Freshly prepared in small batches", "A staple table condiment"]
    }
  },
  {
    id: "kakarakai-podi", name: "Kakarakai Podi", category: "podis",
    catLabel: "Traditional Podi", img: "images/kakarakai-podi.jpg",
    desc: "A traditional podi prepared with bitter gourd.",
    startAt: 160,
    prices: [["250g", 160], ["500g", 320], ["1kg", 640]],
    about: {
      what: "Kakarakai Podi is a traditional spice powder prepared using bitter gourd (kakarakaya), following the family's recipe.",
      tradition: "A distinctive regional podi, valued for its unique flavour profile.",
      taste: "Savoury and aromatic with the character of the bitter gourd.",
      loved: ["Traditional bitter gourd recipe", "Distinctive, aromatic flavour", "Freshly prepared in small batches", "A regional specialty"]
    }
  },
  {
    id: "vellulli-karam-podi", name: "Vellulli Karam Podi", category: "podis",
    catLabel: "Traditional Podi", img: "images/vellulli-karam-podi.jpg",
    desc: "Garlic and red chilli podi with a bold, punchy flavour.",
    startAt: 160,
    prices: [["250g", 160], ["500g", 320], ["1kg", 640]],
    about: {
      what: "Vellulli Karam Podi combines garlic with red chilli in a traditional spice powder.",
      tradition: "A favourite among those who love an extra layer of garlic in their podi.",
      taste: "Bold, garlicky and spiced.",
      loved: ["Garlic and red chilli blend", "Bold, punchy flavour", "Freshly prepared in small batches", "Loved for its garlicky kick"]
    }
  },
  {
    id: "kandhi-podi", name: "Kandhi Podi", category: "podis",
    catLabel: "Traditional Podi", img: "images/kandhi-podi.jpg",
    desc: "Toor dal-based podi with a comforting, earthy flavour.",
    startAt: 160,
    prices: [["250g", 160], ["500g", 320], ["1kg", 640]],
    about: {
      what: "Kandhi Podi is made using toor dal (red gram) as its base, ground with traditional spices.",
      tradition: "A comforting, everyday podi found across Andhra kitchens.",
      taste: "Earthy, nutty and mildly spiced.",
      loved: ["Toor dal base", "Comforting, earthy flavour", "Freshly prepared in small batches", "An everyday household staple"]
    }
  },
  {
    id: "munagaku-podi", name: "Munagaku Podi", category: "podis",
    catLabel: "Traditional Podi", img: "images/munagaku-podi.jpg",
    desc: "Drumstick leaf podi, earthy and traditionally prepared.",
    startAt: 160,
    prices: [["250g", 160], ["500g", 320], ["1kg", 640]],
    about: {
      what: "Munagaku Podi is prepared using drumstick leaves (moringa), ground with traditional spices into a fine podi.",
      tradition: "A traditional preparation valued for bringing greens into the everyday meal in podi form.",
      taste: "Earthy and aromatic with a distinct leafy character.",
      loved: ["Drumstick leaf base", "Earthy, aromatic flavour", "Freshly prepared in small batches", "A traditional leafy podi"]
    }
  },
  {
    id: "karivepaaku-podi", name: "Karivepaaku Podi", category: "podis",
    catLabel: "Traditional Podi", img: "images/karivepaaku-podi.jpg",
    desc: "Curry leaf podi, fragrant and full of flavour.",
    startAt: 160,
    prices: [["250g", 160], ["500g", 320], ["1kg", 640]],
    about: {
      what: "Karivepaaku Podi is made from curry leaves, ground with traditional spices into a fragrant powder.",
      tradition: "A favourite for its aroma, often mixed with rice or ghee for a simple, satisfying meal.",
      taste: "Fragrant, savoury and full of curry-leaf character.",
      loved: ["Curry leaf base", "Fragrant, savoury flavour", "Freshly prepared in small batches", "A simple, satisfying staple"]
    }
  },
];

const CATEGORY_META = {
  sweets: { label: "Sweets" },
  snacks: { label: "Snacks" },
  podis: { label: "Podis" },
};

/* =========================================================
   INIT — run after DOM ready
   ========================================================= */
document.addEventListener("DOMContentLoaded", () => {
  wireContactLinks();
  wireRevealAnimations();
  renderProductGrid("all");
  wireMenuTabs();
  wireNavbar();
  wireMobileMenu();
  wireModals();
  document.getElementById("year").textContent = new Date().getFullYear();
});

/* Wire every element carrying data-wa / data-tel / data-ig so the
   owner only has to edit CONFIG above. */
function wireContactLinks(){
  document.querySelectorAll("[data-wa]").forEach(el => {
    const msg = el.getAttribute("data-wa") || "";
    el.href = waLink(msg || undefined);
    el.target = "_blank";
    el.rel = "noopener";
  });
  document.querySelectorAll("[data-tel]").forEach(el => { el.href = telLink(); });
  document.querySelectorAll("[data-email]").forEach(el => { el.href = emailLink(); });
  document.querySelectorAll("[data-ig]").forEach(el => { el.href = CONFIG.instagramUrl; el.target = "_blank"; el.rel = "noopener"; });
  document.querySelectorAll("[data-wa-chat]").forEach(el => { el.href = CONFIG.whatsappChatUrl; el.target = "_blank"; el.rel = "noopener"; });
  document.querySelectorAll("[data-wa-group]").forEach(el => { el.href = CONFIG.whatsappGroupUrl; el.target = "_blank"; el.rel = "noopener"; });
}

/* =========================================================
   PRODUCT GRID RENDERING
   ========================================================= */
/* Returns the <img> for a product, or a same-size fallback panel
   (no image file) for a product whose real photo hasn't been
   supplied yet — keeps the card layout identical either way. */
const PENDING_ICON = `<svg viewBox="0 0 24 24" fill="none"><path d="M4 20c0-8 6-15 16-16-1 10-8 16-16 16Z" stroke="currentColor" stroke-width="1.3"/><path d="M12 3l7 3v6c0 5-3 8-7 9-4-1-7-4-7-9V6l7-3Z" stroke="currentColor" stroke-width="1.3" opacity="0.6"/></svg>`;

function pcImageMarkup(p){
  if (p.img){
    return `<img src="${p.img}" alt="${p.name} — ${p.catLabel}" loading="lazy" width="600" height="600">`;
  }
  return `<div class="pc-image-pending" role="img" aria-label="${p.name} — photograph coming soon">${PENDING_ICON}</div>`;
}

function renderProductGrid(filter){
  const grid = document.getElementById("productGrid");
  const empty = document.getElementById("menuEmpty");
  grid.innerHTML = "";
  const items = filter === "all" ? PRODUCTS : PRODUCTS.filter(p => p.category === filter);

  if (!items.length){ empty.style.display = "block"; return; }
  empty.style.display = "none";

  items.forEach((p, i) => {
    const card = document.createElement("article");
    card.className = "product-card reveal-card";
    card.innerHTML = `
      <div class="pc-image">
        ${pcImageMarkup(p)}
        <span class="pc-badge">${p.catLabel}</span>
      </div>
      <div class="pc-body">
        <h3 class="pc-name">${p.name}</h3>
        <p class="pc-desc">${p.desc}</p>
        <span class="pc-price">Starts at ₹${p.startAt}</span>
        <div class="pc-actions">
          <button type="button" class="pc-btn-price" data-price-id="${p.id}">View Prices</button>
          <button type="button" class="pc-btn-about" data-about-id="${p.id}">About</button>
        </div>
      </div>
    `;
    grid.appendChild(card);
  });

  grid.querySelectorAll("[data-price-id]").forEach(btn => {
    btn.addEventListener("click", () => openPriceModal(btn.getAttribute("data-price-id")));
  });
  grid.querySelectorAll("[data-about-id]").forEach(btn => {
    btn.addEventListener("click", () => openAboutModal(btn.getAttribute("data-about-id")));
  });

  // (re)observe new cards for reveal animation
  observeEls(grid.querySelectorAll(".reveal-card"));
}

function wireMenuTabs(){
  const tabs = document.querySelectorAll(".menu-tab");
  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      tabs.forEach(t => t.classList.remove("active"));
      tab.classList.add("active");
      renderProductGrid(tab.getAttribute("data-filter"));
    });
  });
}

/* Jump to menu + pre-filter, used by category cards */
function goToCategory(cat){
  const tabs = document.querySelectorAll(".menu-tab");
  tabs.forEach(t => t.classList.toggle("active", t.getAttribute("data-filter") === cat));
  renderProductGrid(cat);
  document.getElementById("menu").scrollIntoView({ behavior: "smooth" });
}
window.goToCategory = goToCategory;

/* =========================================================
   NAVBAR — sticky transition
   ========================================================= */
function wireNavbar(){
  const nav = document.getElementById("navbar");
  const announce = document.querySelector(".announce");

  const onScroll = () => {
    if (window.scrollY > 100) {
      nav.classList.add("scrolled");
      announce.classList.add("scrolled");
    } else {
      nav.classList.remove("scrolled");
      announce.classList.remove("scrolled");
    }
  };

  onScroll();

  window.addEventListener("scroll", onScroll, { passive: true });
}

/* =========================================================
   MOBILE MENU
   ========================================================= */
function wireMobileMenu(){
  const menu = document.getElementById("mobileMenu");
  const openBtn = document.getElementById("hamburgerBtn");
  const closeBtn = document.getElementById("mmClose");
  const backdrop = menu.querySelector(".mm-backdrop");

  const open = () => { menu.classList.add("open"); document.body.style.overflow = "hidden"; };
  const close = () => { menu.classList.remove("open"); document.body.style.overflow = ""; };

  openBtn.addEventListener("click", open);
  closeBtn.addEventListener("click", close);
  backdrop.addEventListener("click", close);
  menu.querySelectorAll("a").forEach(a => a.addEventListener("click", close));
  document.addEventListener("keydown", e => { if (e.key === "Escape") close(); });
}

/* =========================================================
   MODALS — Price + About
   ========================================================= */
let currentFlour = "godhuma";

function wireModals(){
  document.querySelectorAll(".modal-overlay").forEach(overlay => {
    overlay.addEventListener("click", e => { if (e.target === overlay) closeModal(overlay); });
    overlay.querySelector(".modal-close").addEventListener("click", () => closeModal(overlay));
  });
  document.addEventListener("keydown", e => {
    if (e.key === "Escape"){
      document.querySelectorAll(".modal-overlay.open").forEach(o => closeModal(o));
    }
  });
}

function openModal(overlay){
  overlay.classList.add("open");
  document.body.style.overflow = "hidden";
}
function closeModal(overlay){
  overlay.classList.remove("open");
  document.body.style.overflow = "";
}

/* Sets the modal's photo, or — when a product has no photo yet —
   hides the <img> and shows an inline "photo coming soon" banner
   in its place (built at runtime, no fake image file). */
function setModalImage(overlay, p){
  const img = overlay.querySelector(".modal-image");
  let pending = overlay.querySelector(".modal-image-pending");
  if (p.img){
    img.src = p.img;
    img.alt = p.name;
    img.style.display = "";
    if (pending) pending.style.display = "none";
  } else {
    img.style.display = "none";
    if (!pending){
      pending = document.createElement("div");
      pending.className = "modal-image-pending";
      pending.setAttribute("role", "img");
      img.insertAdjacentElement("afterend", pending);
    }
    pending.setAttribute("aria-label", `${p.name} — photograph coming soon`);
    pending.innerHTML = PENDING_ICON;
    pending.style.display = "";
  }
}

function openPriceModal(id){
  const p = PRODUCTS.find(x => x.id === id);
  if (!p) return;
  currentFlour = "godhuma";

  const overlay = document.getElementById("priceModal");
  setModalImage(overlay, p);
  overlay.querySelector(".modal-badge").textContent = p.catLabel;
  overlay.querySelector(".modal-title").textContent = p.name;

  const flourWrap = overlay.querySelector(".flour-select-wrap");
  const select = overlay.querySelector(".flour-select");
  if (p.hasFlour){
    flourWrap.style.display = "block";
    select.value = "godhuma";
    select.onchange = () => { currentFlour = select.value; renderPriceTable(p); };
  } else {
    flourWrap.style.display = "none";
  }

  renderPriceTable(p);

  const waBtn = overlay.querySelector(".modal-wa-btn");
  waBtn.href = waLink(`Hello Annapurna Foods! I would like to order ${p.name}. Could you share more details?`);

  openModal(overlay);
}

function renderPriceTable(p){
  const overlay = document.getElementById("priceModal");
  const table = overlay.querySelector(".price-table");
  const rows = p.hasFlour ? p.priceSets[currentFlour] : p.prices;
  table.innerHTML = rows.map(([qty, price]) => `<tr><td>${qty}</td><td>₹${price}</td></tr>`).join("");
}

function openAboutModal(id){
  const p = PRODUCTS.find(x => x.id === id);
  if (!p) return;

  const overlay = document.getElementById("aboutModal");
  setModalImage(overlay, p);
  overlay.querySelector(".modal-badge").textContent = p.catLabel;
  overlay.querySelector(".modal-title").textContent = p.name;
  overlay.querySelector(".about-what").textContent = p.about.what;
  overlay.querySelector(".about-tradition").textContent = p.about.tradition;
  overlay.querySelector(".about-taste").textContent = p.about.taste;
  overlay.querySelector(".about-list").innerHTML = p.about.loved.map(l => `<li>${l}</li>`).join("");

  openModal(overlay);
}

/* =========================================================
   SCROLL REVEAL ANIMATIONS
   ========================================================= */
let observer;
function wireRevealAnimations(){
  observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting){
        entry.target.classList.add("in-view");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -60px 0px" });

  observeEls(document.querySelectorAll(".reveal-up"));
}
function observeEls(list){
  list.forEach(el => observer.observe(el));
}
