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
  id: "bellam-kommulu",
  name: "Bellam Kommulu",
  category: "sweets",
  catLabel: "Traditional Sweet",
  img: "images/bellam_kommulu.jpg",
  desc: "Traditional jaggery sweet, freshly prepared in the homemade style.",
  startAt: 100,
  prices: [["250g", 100]],
  about: {
    what: "Bellam Kommulu is a traditional jaggery-based sweet prepared in the homemade style.",
    tradition: "A traditional Andhra sweet enjoyed as part of festive and family occasions.",
    taste: "Rich jaggery sweetness with a comforting traditional flavour.",
    loved: [
      "Traditional Andhra preparation",
      "Made with jaggery",
      "Freshly prepared in small batches",
      "Homemade festive flavour"
    ]
  }
},
{
  id: "thokkudu-laddu",
  name: "Thokkudu Laddu",
  category: "sweets",
  catLabel: "Traditional Sweet",
  img: "images/thokkuladdu.jpg",
  desc: "A traditional Andhra laddu, rich, festive and handmade.",
  startAt: 120,
  prices: [
    ["250g", 120],
    ["500g", 240],
    ["1kg", 480]
  ],
  about: {
    what: "Thokkudu Laddu is a traditional Andhra laddu prepared with care and shaped into a rich, festive sweet.",
    tradition: "A cherished traditional sweet associated with Andhra festive and family celebrations.",
    taste: "Rich, aromatic and satisfying with a traditional homemade texture.",
    loved: [
      "Traditional Andhra sweet",
      "Handmade in small batches",
      "Rich festive flavour",
      "Perfect for celebrations and gifting"
    ]
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
  id: "chakodi",
  name: "Chakodi",
  category: "snacks",
  catLabel: "Traditional Snack",
  img: "images/chekodi.jpg",
  desc: "Crispy traditional Andhra chakodi with a satisfying savoury crunch.",
  startAt: 80,
  prices: [
    ["250g", 80],
    ["500g", 160],
    ["1kg", 290]
  ],
  about: {
    what: "Chakodi is a traditional Andhra savoury snack known for its crisp texture and distinctive shape.",
    tradition: "A much-loved homemade snack prepared for festivals, guests and everyday tea-time.",
    taste: "Crispy, savoury and crunchy with a satisfying bite.",
    loved: [
      "Traditional Andhra snack",
      "Crispy homemade texture",
      "Freshly prepared in small batches",
      "Perfect for tea-time and sharing"
    ]
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
  loadCart();
  wireContactLinks();
  wireRevealAnimations();
  renderProductGrid("all");
  wireMenuTabs();
  wireMenuSearch();
  wireNavbar();
  wireMobileMenu();
  wireModals();
  wireModalQtyButtons();
  wireCart();
  wireCheckout();
  updateCartCount();
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
function getStartingPriceLabel(p) {
  const rows = p.hasFlour
    ? p.priceSets.godhuma
    : p.prices;

  if (!rows || !rows.length) return "";

  const [quantity, price] = rows[0];
  const hasMore = rows.length > 1;

  return `
    <div class="pc-price-row">
      <span class="pc-qty-chip">${quantity}</span>
      <span class="pc-price-main">
        <span class="pc-price-value">₹${price}</span>
        ${hasMore ? `<span class="pc-price-hint">onwards</span>` : ``}
      </span>
    </div>
  `;
}

// function renderProductGrid(filter){
//   const grid = document.getElementById("productGrid");
//   const empty = document.getElementById("menuEmpty");
//   grid.innerHTML = "";
//   const items = filter === "all" ? PRODUCTS : PRODUCTS.filter(p => p.category === filter);

//   if (!items.length){ empty.style.display = "block"; return; }
//   empty.style.display = "none";

//   items.forEach((p, i) => {
//     const card = document.createElement("article");
//     card.className = "product-card reveal-card";
//     card.innerHTML = `
//       <div class="pc-image">
//         ${pcImageMarkup(p)}
//         <span class="pc-badge">${p.catLabel}</span>
//       </div>
//       <div class="pc-body">
//         <h3 class="pc-name">${p.name}</h3>
//         <p class="pc-desc">${p.desc}</p>
//         <span class="pc-price">${getStartingPriceLabel(p)}</span>
//         <div class="pc-actions">
//           <button type="button" class="pc-btn-price" data-price-id="${p.id}">Add to Cart</button>
//           <button type="button" class="pc-btn-about" data-about-id="${p.id}">About</button>
//         </div>
//       </div>
//     `;
//     grid.appendChild(card);
//   });

//   grid.querySelectorAll("[data-price-id]").forEach(btn => {
//     btn.addEventListener("click", () => openPriceModal(btn.getAttribute("data-price-id")));
//   });
//   grid.querySelectorAll("[data-about-id]").forEach(btn => {
//     btn.addEventListener("click", () => openAboutModal(btn.getAttribute("data-about-id")));
//   });

//   // (re)observe new cards for reveal animation
//   observeEls(grid.querySelectorAll(".reveal-card"));
// }


let activeMenuFilter = "all";
let menuSearchQuery = "";

function renderProductGrid(filter = activeMenuFilter, searchQuery = menuSearchQuery) {

  const grid = document.getElementById("productGrid");
  const empty = document.getElementById("menuEmpty");

  if (!grid) return;

  activeMenuFilter = filter;
  menuSearchQuery = searchQuery;

  grid.innerHTML = "";

  const query = searchQuery.trim().toLowerCase();

  let items = PRODUCTS.filter(p => {

    /* CATEGORY FILTER */
    const matchesCategory =
      filter === "all" ||
      p.category === filter;

    if (!matchesCategory) return false;

    /* SEARCH FILTER */
    if (!query) return true;

    const searchableText = [
      p.name,
      p.category,
      p.catLabel,
      p.desc,
      p.about?.what,
      p.about?.tradition,
      p.about?.taste,
      ...(p.about?.loved || [])
    ]
      .filter(Boolean)
      .join(" ")
      .toLowerCase();

    return searchableText.includes(query);
  });

  if (!items.length) {
    if (empty) {
      empty.innerHTML = `
        <div class="search-empty-content">
          <div class="search-empty-icon">⌕</div>
          <h3>No items found</h3>
          <p>
            We couldn't find anything matching
            "<strong>${searchQuery}</strong>".
          </p>
          <button
            type="button"
            class="btn btn-outline-dark"
            id="clearSearchEmpty"
          >
            Show All Items
          </button>
        </div>
      `;

      empty.style.display = "block";

      const clearEmpty =
        document.getElementById("clearSearchEmpty");

      if (clearEmpty) {
        clearEmpty.addEventListener("click", () => {
          const input = document.getElementById("menuSearch");

          if (input) {
            input.value = "";
          }

          menuSearchQuery = "";

          renderProductGrid(activeMenuFilter, "");
          updateSearchClearButton();
        });
      }
    }

    return;
  }

  if (empty) {
    empty.style.display = "none";
  }

  items.forEach((p) => {

    const card = document.createElement("article");

    card.className = "product-card reveal-card";

    card.innerHTML = `
      <div class="pc-image">
        ${pcImageMarkup(p)}

        <span class="pc-badge">
          ${p.catLabel}
        </span>
      </div>

      <div class="pc-body">

        <h3 class="pc-name">
          ${p.name}
        </h3>

        <p class="pc-desc">
          ${p.desc}
        </p>

        ${getStartingPriceLabel(p)}

        <div class="pc-actions">

          <button
            type="button"
            class="pc-btn-price"
            data-price-id="${p.id}"
          >
            View Prices
          </button>

          <button
            type="button"
            class="pc-btn-about"
            data-about-id="${p.id}"
          >
            About
          </button>

        </div>

      </div>
    `;

    grid.appendChild(card);
  });

  /* PRICE BUTTONS */

  grid.querySelectorAll("[data-price-id]").forEach(btn => {

    btn.addEventListener("click", () => {

      openPriceModal(
        btn.getAttribute("data-price-id")
      );

    });

  });

  /* ABOUT BUTTONS */

  grid.querySelectorAll("[data-about-id]").forEach(btn => {

    btn.addEventListener("click", () => {

      openAboutModal(
        btn.getAttribute("data-about-id")
      );

    });

  });

  /* REVEAL ANIMATION */

  observeEls(
    grid.querySelectorAll(".reveal-card")
  );
}

/* Shows/hides the little "×" clear button in the search bar
   depending on whether there's any text in the search input. */
function updateSearchClearButton(){
  const input = document.getElementById("menuSearch");
  const clear = document.getElementById("menuSearchClear");

  if (!input || !clear) return;

  clear.hidden = !input.value.trim();
}

/* Wires the menu search input + its clear button. Typing filters
   the product grid (via renderProductGrid's existing search
   logic) while keeping whatever category tab is active. */
function wireMenuSearch(){
  const input = document.getElementById("menuSearch");
  const clear = document.getElementById("menuSearchClear");

  if (!input || !clear) return;

  input.addEventListener("input", () => {
    menuSearchQuery = input.value.trim().toLowerCase();

    updateSearchClearButton();

    renderProductGrid(activeMenuFilter, menuSearchQuery);
  });

  clear.addEventListener("click", () => {
    input.value = "";
    menuSearchQuery = "";

    updateSearchClearButton();

    renderProductGrid(activeMenuFilter, "");

    input.focus();
  });

  updateSearchClearButton();
}

function wireMenuTabs(){

  const tabs =
    document.querySelectorAll(".menu-tab");

  tabs.forEach(tab => {

    tab.addEventListener("click", () => {

      tabs.forEach(t =>
        t.classList.remove("active")
      );

      tab.classList.add("active");

      activeMenuFilter =
        tab.getAttribute("data-filter");

      renderProductGrid(
        activeMenuFilter,
        menuSearchQuery
      );

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
      const cartOverlay = document.getElementById("cartOverlay");
      if (cartOverlay && cartOverlay.classList.contains("open")) closeCart();
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

/* State for the product/price modal's in-progress selection —
   which variant (size, and flour where relevant) and quantity
   the customer currently has selected, before adding to cart. */
let modalProduct = null;
let modalVariantIndex = 0;
let modalQty = 1;

function getProductVariants(p){
  return p.hasFlour ? p.priceSets[currentFlour] : p.prices;
}

function openPriceModal(id){
  const p = PRODUCTS.find(x => x.id === id);
  if (!p) return;
  currentFlour = "godhuma";
  modalProduct = p;
  modalVariantIndex = 0;
  modalQty = 1;

  const overlay = document.getElementById("priceModal");
  setModalImage(overlay, p);
  overlay.querySelector(".modal-badge").textContent = p.catLabel;
  overlay.querySelector(".modal-title").textContent = p.name;

  const flourWrap = overlay.querySelector(".flour-select-wrap");
  const select = overlay.querySelector(".flour-select");
  if (p.hasFlour){
    flourWrap.style.display = "block";
    select.value = "godhuma";
    select.onchange = () => {
      currentFlour = select.value;
      modalVariantIndex = 0;

      // Same rule as switching size: a fresh flour type means a
      // fresh selection, so quantity goes back to 1 instead of
      // silently carrying over from the previous choice.
      modalQty = 1;
      renderQtyStepper();

      renderVariantSelect(p);
      updateModalAddButton(p);
    };
  } else {
    flourWrap.style.display = "none";
  }

  renderVariantSelect(p);
  renderQtyStepper();
  updateModalAddButton(p);

  openModal(overlay);
}

/* Renders the list of selectable sizes/variants for the current
   product. A product with only one price option is shown as a
   single, non-interactive row instead of a fake selector. */
function renderVariantSelect(p){
  const overlay = document.getElementById("priceModal");
  const wrap = overlay.querySelector("#variantSelect");
  const rows = getProductVariants(p);
  const single = rows.length === 1;

  wrap.innerHTML = rows.map(([qty, price], i) => `
    <button type="button"
      class="variant-option ${i === modalVariantIndex ? "selected" : ""} ${single ? "single" : ""}"
      data-variant-index="${i}" ${single ? "disabled aria-disabled=\"true\"" : ""}
      aria-pressed="${i === modalVariantIndex}">
      <span class="vo-size">${qty}</span>
      <span class="vo-price">₹${price}</span>
    </button>
  `).join("");

  if (!single){
    wrap.querySelectorAll(".variant-option").forEach(btn => {
      btn.addEventListener("click", () => {
        modalVariantIndex = parseInt(btn.getAttribute("data-variant-index"), 10);

        // Switching size/weight starts a fresh selection — any quantity
        // chosen for the previous size shouldn't silently carry over
        // (e.g. picking "2" for 500g, then tapping 1kg, should not add
        // 2 x 1kg by surprise).
        modalQty = 1;
        renderQtyStepper();

        renderVariantSelect(p);
        updateModalAddButton(p);
      });
    });
  }
}

function renderQtyStepper(){
  document.getElementById("qtyValue").textContent = modalQty;
}

function updateModalAddButton(p){
  const rows = getProductVariants(p);
  const [ , price ] = rows[modalVariantIndex];
  const total = price * modalQty;
  document.getElementById("modalAddPrice").textContent = `₹${total}`;
}

/* Wires the quantity stepper and Add to Cart button inside the
   price modal. These elements are static in the DOM (unlike the
   variant list, which is rebuilt per product), so they're wired
   once on init rather than on every openPriceModal() call. */
function wireModalQtyButtons(){
  document.getElementById("qtyMinus").addEventListener("click", () => {
    if (!modalProduct || modalQty <= 1) return;
    modalQty--;
    renderQtyStepper();
    updateModalAddButton(modalProduct);
  });
  document.getElementById("qtyPlus").addEventListener("click", () => {
    if (!modalProduct) return;
    modalQty++;
    renderQtyStepper();
    updateModalAddButton(modalProduct);
  });
  document.getElementById("modalAddToCartBtn").addEventListener("click", () => {
    if (!modalProduct) return;
    const rows = getProductVariants(modalProduct);
    const [variantLabel, price] = rows[modalVariantIndex];
    const variant = modalProduct.hasFlour
      ? `${variantLabel} (${currentFlour === "godhuma" ? "Godhuma Flour" : "Maida"})`
      : variantLabel;

    addToCart({
      id: modalProduct.id,
      name: modalProduct.name,
      variant,
      price,
      quantity: modalQty,
      image: modalProduct.img || ""
    });

    // The modal's quantity is only a TEMPORARY selection for the next
    // add — it must never be confused with (or leak into) the cart's
    // own stored quantity for that line. Reset it back to the minimum
    // right after the item is committed to the cart, so if the modal
    // stays open the customer starts their next selection fresh instead
    // of seeing the previous quantity (e.g. "3") still sitting there.
    modalQty = 1;
    renderQtyStepper();
    updateModalAddButton(modalProduct);
  });
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

/* =========================================================
   SHOPPING CART — single source of truth for cart state,
   persisted to localStorage. No backend, no accounts: this is
   just a structured list that gets turned into a WhatsApp
   message at checkout.
   ========================================================= */
const CART_STORAGE_KEY = "annapurnaCart";
let cart = [];

function loadCart(){
  try{
    const raw = localStorage.getItem(CART_STORAGE_KEY);
    const parsed = raw ? JSON.parse(raw) : [];
    cart = Array.isArray(parsed) ? parsed : [];
  } catch (e){
    cart = [];
  }
}

function saveCart(){
  try{ localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart)); }
  catch (e){ /* localStorage unavailable — cart just won't persist across reloads */ }
}

function findCartItem(cartId){
  return cart.find(item => item.cartId === cartId);
}

/* A cart line is uniquely identified by product id + variant, so
   "Kobbari Kova 250g" and "Kobbari Kova 500g" are separate lines,
   while adding the same product + variant twice just increases
   the quantity on the existing line. */
function makeCartId(id, variant){
  return `${id}__${variant}`;
}

function addToCart({ id, name, variant, price, quantity, image }){
  const cartId = makeCartId(id, variant);
  const existing = findCartItem(cartId);
  if (existing){
    existing.quantity += quantity;
  } else {
    cart.push({ cartId, id, name, variant, price, quantity, image });
  }
  saveCart();
  updateCartCount();
  renderCart();
  showToast(name, variant);
}

function removeFromCart(cartId){
  cart = cart.filter(item => item.cartId !== cartId);
  saveCart();
  updateCartCount();
  renderCart();
}

function updateQuantity(cartId, newQty){
  const item = findCartItem(cartId);
  if (!item) return;
  if (newQty < 1){ removeFromCart(cartId); return; }
  item.quantity = newQty;
  saveCart();
  updateCartCount();
  renderCart();
}

function clearCart(){
  cart = [];
  saveCart();
  updateCartCount();
  renderCart();
}

function calculateCartTotal(){
  return cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
}

function getCartCount(){
  return cart.reduce((sum, item) => sum + item.quantity, 0);
}

/* Keeps every visible cart indicator (navbar badge, mobile sticky
   bar) in sync. Called after every cart mutation. */
function updateCartCount(){
  const count = getCartCount();
  const total = calculateCartTotal();

  const badge = document.getElementById("cartBadge");
  if (badge){
    badge.textContent = count;
    badge.style.display = count > 0 ? "flex" : "none";
  }

  const mcbCount = document.getElementById("mcbCount");
  const mcbTotal = document.getElementById("mcbTotal");
  const bar = document.getElementById("mobileCartBar");
  if (mcbCount) mcbCount.textContent = `${count} item${count === 1 ? "" : "s"}`;
  if (mcbTotal) mcbTotal.textContent = `₹${total}`;
  if (bar) bar.classList.toggle("visible", count > 0);

  document.body.classList.toggle("has-mobile-cart", count > 0);
}

function cartItemImageMarkup(item){
  if (item.image){
    return `<img src="${item.image}" alt="${item.name}">`;
  }
  return `<div class="ci-image-pending" aria-hidden="true">${PENDING_ICON}</div>`;
}

/* Rebuilds the cart drawer's item list and subtotal, or shows the
   empty-cart state when there's nothing to show. */
function renderCart(){
  const list = document.getElementById("cartItems");
  const emptyState = document.getElementById("cartEmptyState");
  const footer = document.getElementById("cartFooter");
  if (!list) return;

  if (cart.length === 0){
    list.innerHTML = "";
    list.style.display = "none";
    emptyState.style.display = "flex";
    footer.style.display = "none";
    return;
  }

  list.style.display = "flex";
  emptyState.style.display = "none";
  footer.style.display = "block";

  list.innerHTML = cart.map(item => `
    <div class="cart-item" data-cart-id="${item.cartId}">
      <div class="ci-image">${cartItemImageMarkup(item)}</div>
      <div class="ci-body">
        <h4 class="ci-name">${item.name}</h4>
        <span class="ci-variant">${item.variant}</span>
        <div class="ci-row">
          <div class="qty-stepper sm">
            <button type="button" class="qty-btn" data-action="dec" aria-label="Decrease quantity of ${item.name}">−</button>
            <span class="qty-value">${item.quantity}</span>
            <button type="button" class="qty-btn" data-action="inc" aria-label="Increase quantity of ${item.name}">+</button>
          </div>
          <span class="ci-total">₹${item.price * item.quantity}</span>
        </div>
      </div>
      <button type="button" class="ci-remove" aria-label="Remove ${item.name} from cart">
        <svg viewBox="0 0 24 24" fill="none"><path d="M4 7h16M9 7V5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2M10 7l1 13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1l1-13" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>
      </button>
    </div>
  `).join("");

  document.getElementById("cartSubtotal").textContent = `₹${calculateCartTotal()}`;
}

/* Event delegation for cart-item controls: the list is rebuilt on
   every render, so we wire one listener on the container instead
   of re-binding per-item buttons each time. */
function wireCartItemEvents(){
  const list = document.getElementById("cartItems");
  list.addEventListener("click", e => {
    const qtyBtn = e.target.closest(".qty-btn");
    const removeBtn = e.target.closest(".ci-remove");
    if (qtyBtn){
      const wrap = qtyBtn.closest("[data-cart-id]");
      const cartId = wrap.getAttribute("data-cart-id");
      const item = findCartItem(cartId);
      if (!item) return;
      const delta = qtyBtn.getAttribute("data-action") === "inc" ? 1 : -1;
      updateQuantity(cartId, item.quantity + delta);
    } else if (removeBtn){
      const wrap = removeBtn.closest("[data-cart-id]");
      removeFromCart(wrap.getAttribute("data-cart-id"));
    }
  });
}

// function openCart(){
//   renderCart();
//   document.getElementById("cartOverlay").classList.add("open");
//   document.body.style.overflow = "hidden";
// }
// function closeCart(){
//   document.getElementById("cartOverlay").classList.remove("open");
//   document.body.style.overflow = "";
// }
function openCart(){
  const priceModal = document.getElementById("priceModal");
  const aboutModal = document.getElementById("aboutModal");
  const checkoutModal = document.getElementById("checkoutModal");
  const cartOverlay = document.getElementById("cartOverlay");

  // Close any currently open modal
  [priceModal, aboutModal, checkoutModal].forEach(modal => {
    if (modal) {
      modal.classList.remove("open");
    }
  });

  // Render latest cart contents
  renderCart();

  // Open cart drawer
  if (cartOverlay) {
    cartOverlay.classList.add("open");
  }

  // Keep page locked while cart is open
  document.body.style.overflow = "hidden";
}

function closeCart(){
  const cartOverlay = document.getElementById("cartOverlay");

  if (cartOverlay) {
    cartOverlay.classList.remove("open");
  }

  document.body.style.overflow = "";
}

/* Wires every trigger that opens or closes the cart drawer. */
function wireCart(){
  document.getElementById("cartToggleBtn").addEventListener("click", openCart);
  document.getElementById("mcbViewCartBtn").addEventListener("click", openCart);
  document.getElementById("cartCloseBtn").addEventListener("click", closeCart);
  document.querySelector("#cartOverlay .cart-backdrop").addEventListener("click", closeCart);
  document.getElementById("cartContinueBtn").addEventListener("click", closeCart);
  document.getElementById("cartCheckoutBtn").addEventListener("click", () => {
    closeCart();
    openCheckout();
  });
  document.getElementById("cartEmptyExploreBtn").addEventListener("click", () => {
    closeCart();
    document.getElementById("menu").scrollIntoView({ behavior: "smooth" });
  });
  document.getElementById("toastViewCartBtn").addEventListener("click", () => {
    document.getElementById("cartToast").classList.remove("show");
    openCart();
  });
  wireCartItemEvents();
}

/* =========================================================
   ADD-TO-CART TOAST
   ========================================================= */
let toastTimer = null;
function showToast(name, variant){
  const toast = document.getElementById("cartToast");
  document.getElementById("toastSubtitle").textContent = `${name} • ${variant}`;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), 3200);
}

/* =========================================================
   CHECKOUT — collects the details needed to prepare the
   WhatsApp order message. No payment, no account, no server:
   this only formats data that's already in the cart.
   ========================================================= */
function buildOrderSummaryHTML(){
  return cart.map(item => `
    <div class="summary-row">
      <div class="summary-main">
        <span class="summary-name">${item.name}</span>
        <span class="summary-meta">${item.variant} · Qty ${item.quantity} · ₹${item.price} each</span>
      </div>
      <span class="summary-total">₹${item.price * item.quantity}</span>
    </div>
  `).join("");
}

function openCheckout(){
  if (cart.length === 0) return;
  document.getElementById("checkoutSummary").innerHTML = buildOrderSummaryHTML();
  document.getElementById("checkoutTotal").textContent = `₹${calculateCartTotal()}`;
  clearCheckoutErrors();
  openModal(document.getElementById("checkoutModal"));
}
function closeCheckout(){
  closeModal(document.getElementById("checkoutModal"));
}

function clearCheckoutErrors(){
  ["ckName", "ckPhone", "ckAddress"].forEach(id => {
    document.getElementById(id + "Error").textContent = "";
    document.getElementById(id).classList.remove("invalid");
  });
}
function setFieldError(id, message){
  document.getElementById(id + "Error").textContent = message;
  document.getElementById(id).classList.add("invalid");
}

/* Basic, non-punitive validation: just enough to make sure the
   owner receives a usable name, contact number and address. Not
   strict about phone formatting so normal Indian numbers (with
   or without +91, spaces or dashes) are all accepted. */
function validateCheckout(){
  let valid = true;
  clearCheckoutErrors();

  const name = document.getElementById("ckName").value.trim();
  const phone = document.getElementById("ckPhone").value.trim();
  const address = document.getElementById("ckAddress").value.trim();

  if (!name){
    setFieldError("ckName", "Please enter your name.");
    valid = false;
  }

  const phoneDigits = phone.replace(/\D/g, "");
  if (!phone){
    setFieldError("ckPhone", "Please enter your phone number.");
    valid = false;
  } else if (phoneDigits.length < 10 || phoneDigits.length > 13){
    setFieldError("ckPhone", "Please enter a valid phone number.");
    valid = false;
  }

  if (!address){
    setFieldError("ckAddress", "Please enter your delivery address.");
    valid = false;
  }

  return valid;
}

/* Turns the current cart + customer details into a readable,
   line-broken WhatsApp message using the real product prices
   already in PRODUCTS/cart — never a hard-coded total. */
function generateWhatsAppMessage(customer){
  const lines = [];
  lines.push("Hello Annapurna Foods! 👋");
  lines.push("");
  lines.push("I would like to place an order.");
  lines.push("");
  lines.push("━━━━━━━━━━━━━━━━━━");
  lines.push("🛍️ ORDER DETAILS");
  lines.push("━━━━━━━━━━━━━━━━━━");

  cart.forEach((item, i) => {
    lines.push("");
    lines.push(`${i + 1}. ${item.name}`);
    lines.push(`   Size: ${item.variant}`);
    lines.push(`   Quantity: ${item.quantity}`);
    lines.push(`   Unit Price: ₹${item.price}`);
    lines.push(`   Item Total: ₹${item.price * item.quantity}`);
  });

  lines.push("");
  lines.push("━━━━━━━━━━━━━━━━━━");
  lines.push("💰 ORDER SUMMARY");
  lines.push("━━━━━━━━━━━━━━━━━━");
  lines.push("");
  lines.push(`TOTAL: ₹${calculateCartTotal()}`);
  lines.push("");
  lines.push("━━━━━━━━━━━━━━━━━━");
  lines.push("👤 CUSTOMER DETAILS");
  lines.push("━━━━━━━━━━━━━━━━━━");
  lines.push("");
  lines.push(`Name: ${customer.name}`);
  lines.push("");
  lines.push(`Phone: ${customer.phone}`);
  lines.push("");
  lines.push("📍 Delivery Address:");
  lines.push(customer.address);

  if (customer.note){
    lines.push("");
    lines.push("📝 Note:");
    lines.push(customer.note);
  }

  lines.push("");
  lines.push("Thank you! 🙏");

  return lines.join("\n");
}

function submitCheckout(e){
  e.preventDefault();
  if (!validateCheckout()) return;

  const customer = {
    name: document.getElementById("ckName").value.trim(),
    phone: document.getElementById("ckPhone").value.trim(),
    address: document.getElementById("ckAddress").value.trim(),
    note: document.getElementById("ckNote").value.trim()
  };

  const message = generateWhatsAppMessage(customer);
  window.open(waLink(message), "_blank", "noopener");

  closeCheckout();
  clearCart();
  document.getElementById("checkoutForm").reset();
}

function wireCheckout(){
  document.getElementById("checkoutForm").addEventListener("submit", submitCheckout);
  document.getElementById("checkoutBackBtn").addEventListener("click", () => {
    closeCheckout();
    openCart();
  });
}
