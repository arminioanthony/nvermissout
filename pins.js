// ============================================================
// PINS INVENTORY — one line per pin, from the pin board (IMG_5719).
//   name:  pin name (Claude's best ID — rename any that are off)
//   img:   filename inside assets/pins/
//   price: number like 25, or null = "Text for price"
//   tag:   small badge on the card (brand/type), "" = hidden
//
// Images: most are eBay stock photos; ones marked "board photo"
// in the comment are cropped from our own pin-board picture.
// Delete the line of any pin you don't want listed.
// ============================================================
const PINS = [
  { name: "Supreme Box Logo Pin Red", img: "supreme-box-logo-pin-red.jpg", price: null, tag: "" }, // board photo
  { name: "Supreme 666 Pin", img: "supreme-666-pin.jpg", price: null, tag: "" }, // board photo
  { name: "Supreme Don't Ask Me 4 Shit Pin", img: "supreme-dont-ask-me-4-shit-pin.jpg", price: null, tag: "" },
  { name: "Supreme Lush Pin Black FW19", img: "supreme-lush-button.jpg", price: null, tag: "" },
  { name: "Supreme Not Sorry Bear Pin Gold SS21", img: "gold-teddy-bear-pin.jpg", price: null, tag: "" },
  { name: "Supreme Fuck Em! Keychain", img: "supreme-fuck-em-keychain.jpg", price: null, tag: "keychain" }, // board photo
  { name: "Supreme I Love Power Violence Button Green", img: "supreme-i-love-power-violence-button.jpg", price: null, tag: "button" },
  { name: "Supreme I Make Shit Happen Pin SS19", img: "supreme-i-make-shit-happen-pin.jpg", price: null, tag: "" },
  { name: "Supreme One Two, Fuck You Pin", img: "supreme-one-two-fuck-you-pin.jpg", price: null, tag: "" }, // board photo
  { name: "Supreme Flower Pin White SS17", img: "supreme-flower-pin.jpg", price: null, tag: "" },
  { name: "BAPE Ape Head Pin Silver", img: "bape-ape-head-pin-silver.jpg", price: null, tag: "BAPE" }, // board photo
  { name: "Supreme Don't Be A Dick Pin SS17", img: "supreme-dont-be-a-dick-pin.jpg", price: null, tag: "" },
  { name: "Supreme Skull Beanie Pin", img: "supreme-skull-beanie-pin.jpg", price: null, tag: "" }, // board photo
  { name: "Supreme Sun Pin FW20", img: "supreme-flaming-sun-pin.jpg", price: null, tag: "" },
  { name: "Supreme Betty Boop Pin SS16", img: "supreme-betty-boop-pin.jpg", price: null, tag: "" },
  { name: "Supreme Drugs Pin FW24", img: "supreme-drugs-pin.jpg", price: null, tag: "" },
  { name: "Supreme Get Your Shit Together Pin", img: "supreme-get-your-shit-together-pin.jpg", price: null, tag: "" }, // board photo
  { name: "Supreme Sup Mini Pin", img: "supreme-sup-mini-pin.jpg", price: null, tag: "" }, // board photo
  { name: "Supreme I Never Promised You A Rose Garden Button", img: "supreme-rose-garden-button.jpg", price: null, tag: "button" },
  { name: "Supreme Shit Pin Red", img: "supreme-shit-pin-red.jpg", price: null, tag: "" }, // board photo
  { name: "Supreme Ace Of Spades Pin", img: "supreme-ace-of-spades-pin.jpg", price: null, tag: "" }, // board photo
  { name: "KITH Toronto Pin", img: "kith-toronto-pin.jpg", price: null, tag: "KITH" }, // board photo
  { name: "Supreme Don't Fuck Around Pin", img: "supreme-dont-fuck-around-pin.jpg", price: null, tag: "" }, // board photo
  { name: "Supreme Eat Me Button", img: "supreme-eat-me-button.jpg", price: null, tag: "button" }, // board photo
  { name: "Fuck Tha Police Shield Pin", img: "fuck-tha-police-shield-pin.jpg", price: null, tag: "" }, // board photo
  { name: "Supreme Middle Finger Pin", img: "supreme-middle-finger-pin.jpg", price: null, tag: "" }, // board photo
  { name: "Supreme ABCDEFUCKU Pin FW14", img: "abcdefucku-pin.jpg", price: null, tag: "" },
  { name: "Twin Towers Pewter Pin", img: "twin-towers-pewter-pin.jpg", price: null, tag: "" }, // board photo
  { name: "Supreme Automatic Rifle Pin Gold SS17", img: "supreme-ak-47-pin-gold.jpg", price: null, tag: "" },
  { name: "Supreme Toothpaste Pin", img: "supreme-toothpaste-pin.jpg", price: null, tag: "" }, // board photo
  { name: "Supreme Rent My Face Button Red", img: "supreme-rent-my-face-button-red.jpg", price: null, tag: "button" }, // board photo
  { name: "Supreme Rent My Face Button Black", img: "supreme-rent-my-face-button-black.jpg", price: null, tag: "button" }, // board photo
  { name: "Supreme Rap-A-Lot Records Pin SS17", img: "supreme-rap-a-lot-records-pin.jpg", price: null, tag: "collab" },

  // ---- PENDING ID — pulled from the site until we name them ----
  // { name: "Supreme Umbrella Man Pin", img: "supreme-umbrella-man-pin.jpg", price: null, tag: "" }, // board photo
  // { name: "Supreme Oval Logo Pin", img: "supreme-oval-logo-pin.jpg", price: null, tag: "" }, // board photo
  // { name: "Supreme Bull 'S' Pin", img: "supreme-bull-s-pin.jpg", price: null, tag: "" }, // board photo
  // { name: "Black Devil Pitchfork Pin", img: "black-devil-pitchfork-pin.jpg", price: null, tag: "" }, // board photo
  // { name: "Supreme Chrome Crown Pin", img: "supreme-chrome-crown-pin.jpg", price: null, tag: "" }, // board photo
  // { name: "Green Monster Pin", img: "green-monster-pin.jpg", price: null, tag: "" }, // board photo
  // { name: "Supreme Red Horse Pin", img: "supreme-red-horse-pin.jpg", price: null, tag: "" }, // board photo
  // { name: "Supreme KXVIH Bar Pin", img: "supreme-kxvih-bar-pin.jpg", price: null, tag: "" }, // board photo
  // { name: "Black Line-Art Circle Pin", img: "black-lineart-circle-pin.jpg", price: null, tag: "" }, // board photo — needs ID
];
