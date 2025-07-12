    
const listItems = document.querySelectorAll('.list li');
const mainImage = document.getElementById('mainImage');
const sds = document.getElementById('onload')

listItems.forEach(item => {

  item.addEventListener('click', () => {
    const imgSrc = item.getAttribute('data-img');
    sds.style.display = 'none'
    mainImage.src = imgSrc;
    mainImage.style.display = 'block';
    
  });
});



const cars = [
  {
    name: "Audi R8",
    emoji: "🔥",
    model: "R8 V10 Performance Quattro",
    year: 2023,
    mileage: "12,000 km (used)",
    engineType: "5.2L V10 Naturally Aspirated",
    features: [
      "Virtual cockpit",
      "Magnetic ride suspension",
      "Nappa leather sports seats",
      "Bang & Olufsen audio",
      "Carbon fiber trim"
    ],
    pricing: "$160,000 USD ≈ ₦240,000,000"
  },
  {
    name: "Chevrolet Camaro",
    emoji: "🔥",
    model: "Camaro SS Coupe",
    year: 2022,
    mileage: "15,000 km (used)",
    engineType: "6.2L V8 Naturally Aspirated",
    features: [
      "Recaro performance seats",
      "Heads-up display",
      "Brembo performance brakes",
      "Touchscreen infotainment with Apple CarPlay/Android Auto",
      "Dual-mode exhaust system"
    ],
    pricing: "$50,000 USD ≈ ₦75,000,000"
  },

  {
  name: "Toyota Hilux",
  emoji: "🛻",
  model: "Hilux Double Cab 4x4",
  year: 2022,
  mileage: "18,000 km (used)",
  engineType: "2.8L 4-Cylinder Turbo Diesel",
  features: [
    "All-terrain tires",
    "Rear differential lock",
    "Touchscreen infotainment",
    "Reverse camera",
    "Air conditioning"
  ],
  pricing: "$45,000 USD ≈ ₦67,500,000"
},

{
  name: "Mercedes-Benz SLS AMG",
  emoji: "🦅",
  model: "SLS AMG Gullwing Coupe",
  year: 2015,
  mileage: "20,000 km (used)",
  engineType: "6.2L V8 Naturally Aspirated",
  features: [
    "Gullwing doors",
    "AMG Performance suspension",
    "COMAND infotainment system",
    "Nappa leather interior",
    "Carbon ceramic brakes"
  ],
  pricing: "$180,000 USD ≈ ₦270,000,000"
},

{
  name: "Toyota Corolla",
  emoji: "🚗",
  model: "Corolla LE",
  year: 2021,
  mileage: "25,000 km (used)",
  engineType: "1.8L 4-Cylinder Petrol",
  features: [
    "Touchscreen display",
    "Rearview camera",
    "Lane departure alert",
    "Automatic climate control",
    "Bluetooth connectivity"
  ],
  pricing: "$25,000 USD ≈ ₦37,500,000"
},

{
  name: "Toyota Innova",
  emoji: "🚐",
  model: "Innova Crysta ZX",
  year: 2022,
  mileage: "22,000 km (used)",
  engineType: "2.4L 4-Cylinder Diesel",
  features: [
    "Captain seats (7-seater)",
    "Touchscreen infotainment with Android Auto/Apple CarPlay",
    "Automatic climate control",
    "Rear AC vents",
    "Reverse parking camera"
  ],
  pricing: "$35,000 USD ≈ ₦52,500,000"
},

{
  name: "BMW M1 Coupe",
  emoji: "🏁",
  model: "M1 E82 Coupe",
  year: 2011,
  mileage: "30,000 km (used)",
  engineType: "3.0L Inline-6 Twin-Turbo",
  features: [
    "Rear-wheel drive",
    "6-speed manual transmission",
    "M Sport suspension",
    "Xenon headlights",
    "Harman Kardon sound system"
  ],
  pricing: "$75,000 USD ≈ ₦112,500,000"
},

{
  name: "BMW M2 Coupe",
  emoji: "🚘",
  model: "M2 Competition F87",
  year: 2021,
  mileage: "15,000 km (used)",
  engineType: "3.0L Inline-6 Twin-Turbo (S55)",
  features: [
    "M Sport adaptive suspension",
    "Dual-clutch automatic transmission",
    "Carbon fiber interior trim",
    "Wireless Apple CarPlay",
    "Harman Kardon premium audio"
  ],
  pricing: "$68,000 USD ≈ ₦102,000,000"
}




];
const particular = document.getElementById('particulars');

// Reusable function to display any car by index
function showCarDetails(index) {
  const car = cars[index];
  particular.innerHTML = `
    <ul>
      <h1>${car.name}</h1>
      <li><strong>Model:</strong> ${car.model}</li>
      <li><strong>Year:</strong> ${car.year}</li>
      <li><strong>Mileage:</strong> ${car.mileage}</li>
      <li><strong>Engine Type:</strong> ${car.engineType}</li>
      <li><strong>Features:</strong>
        <ul>
          ${car.features.map(f => `<li>${f}</li>`).join("")}
        </ul>
      </li>
      <li><strong>Pricing:</strong> ${car.pricing}</li>
    </ul>
  `;
}

// Add listeners to each button
document.getElementById('audi').addEventListener('click', () => showCarDetails(0));
document.getElementById('camaro').addEventListener('click', () => showCarDetails(1));
document.getElementById('pickup').addEventListener('click', () => showCarDetails(2));
document.getElementById('amg').addEventListener('click', () => showCarDetails(3));
document.getElementById('corolla').addEventListener('click', () => showCarDetails(4));
document.getElementById('innova').addEventListener('click', () => showCarDetails(5));
document.getElementById('bmw').addEventListener('click', () => showCarDetails(6));
document.getElementById('bmwm').addEventListener('click', () => showCarDetails(7));
