// ============================================================
// SNEAKER INVENTORY — edit this list to add/remove/change pairs.
//   name:  shown on the card and in text/email prefills
//   img:   filename inside assets/sneakers/
//   size:  US men's size shown on the card badge
//   price: number like 450, or null = "Text for price"
//   tag:   short label shown on the card (model family / collab)
// ============================================================
const SNEAKERS = [
  { name: "Air Jordan 1 Retro High OG 'Banned' (Bred) 2016", img: "aj1-banned-2016.jpg", size: "10.5", price: null, tag: "AJ1" },
  { name: "Air Jordan 1 Retro High OG 'Shattered Backboard' 2015", img: "aj1-shattered-backboard-2015.jpg", size: "10.5", price: null, tag: "AJ1" },
  { name: "Fragment Design x Air Jordan 1 Retro High OG 2014", img: "aj1-fragment-2014.jpg", size: "10.5", price: null, tag: "Fragment" },
  { name: "Travis Scott x Air Jordan 1 Low 'Medium Olive'", img: "ts-aj1-low-medium-olive.jpg", size: "10.5", price: null, tag: "Travis Scott" },
  { name: "Travis Scott x Air Jordan 1 Low 'Reverse Mocha'", img: "ts-aj1-low-reverse-mocha.jpg", size: "10.5", price: null, tag: "Travis Scott" },
  { name: "Travis Scott x Air Jordan 1 Low 'Black Olive' (W)", img: "ts-aj1-low-black-olive-w.jpg", size: "10.5", price: null, tag: "Travis Scott" },
  { name: "Travis Scott x Air Jordan 1 Low 'Velvet Brown'", img: "ts-aj1-low-velvet-brown.jpg", size: "10.5", price: null, tag: "Travis Scott" },
  { name: "Fragment x Travis Scott x Air Jordan 1 Low", img: "ts-aj1-low-fragment.jpg", size: "10.5", price: null, tag: "Travis Scott" },
  { name: "Fragment x Travis Scott x Air Jordan 1 Low 'Sail Military Blue'", img: "ts-aj1-low-fragment-military-blue.jpg", size: "10.5", price: null, tag: "Travis Scott" },
  { name: "Nike SB Dunk Low Supreme 'Rammellzee'", img: "sb-dunk-supreme-rammellzee.jpg", size: "10.5", price: null, tag: "Nike SB" },
  { name: "Nike SB Dunk Low April Skateboards", img: "sb-dunk-april.jpg", size: "10.5", price: null, tag: "Nike SB" },
  { name: "Nike SB Dunk Low Yuto Horigome (1st pair)", img: "sb-dunk-yuto.jpg", size: "10.5", price: null, tag: "Nike SB" },
  { name: "Nike SB Dunk Low Travis Scott", img: "sb-dunk-travis-scott.jpg", size: "10.5", price: null, tag: "Nike SB" },
  { name: "Nike SB Dunk Low Parra", img: "sb-dunk-parra.jpg", size: "10.5", price: null, tag: "Nike SB" },
  { name: "Nike Air Max 1 atmos 'Elephant' 2017", img: "am1-atmos-elephant.jpg", size: "10.5", price: null, tag: "Air Max" },
  { name: "Nike Air Max 1 SP Concepts 'Mellow'", img: "am1-concepts-mellow.jpg", size: "10.5", price: null, tag: "Air Max" },
  { name: "Union LA x Air Jordan 1 Retro High 'Storm Blue'", img: "aj1-union-storm-blue.jpg", size: "10", price: null, tag: "Union" },
  { name: "Union LA x Air Jordan 1 Retro High 'Black Toe'", img: "aj1-union-black-toe.jpg", size: "10", price: null, tag: "Union" },
  { name: "Virgil Abloh Archive x Air Jordan 1 Retro High 'Alaska'", img: "aj1-vaa-alaska.jpg", size: "10.5", price: null, tag: "Off-White" },
  { name: "Nike Vomero Premium 'Black Volt'", img: "vomero-premium-black-volt.jpg", size: "10.5", price: null, tag: "Nike" },
  { name: "Trophy Room x Air Jordan 1 Retro Low OG 'Rookie Card – Away'", img: "trophy-room-aj1-low-away.jpg", size: "10.5", price: null, tag: "Trophy Room" },
  { name: "Air Jordan 1 Retro Low OG 'Chicago' (2025)", img: "aj1-low-og-chicago-2025.jpg", size: "10.5", price: null, tag: "AJ1" },
  { name: "Air Jordan 1 Retro Low OG 'Banned' (2026)", img: "aj1-low-og-banned-2026.jpg", size: "10.5", price: null, tag: "AJ1" },
  { name: "Union LA x Nike Dunk Low 'Passport Pack – Argon'", img: "union-dunk-low-argon.jpg", size: "10.5", price: null, tag: "Union" },
];
