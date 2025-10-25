// All recipe data (from your spreadsheet)

const recipes = [
  {
    id: "smoothie",
    name: "Spinach, Avocado Smoothie with Banana",
    quickInfo: {
      time: "~10 min",
      servings: "Makes ~3 glasses",
      vibe: "Cold, filling, clean",
    },
    tags: ["Spinach + basil", "Coconut milk", "Chia", "No drama breakfast"],
    blurb:
      "Spinach + basil + avocado + banana blended with coconut milk, lemon, chia, and ice. Topped with soaked falooda (subza) seeds.",
    ingredients: [
      "1 cup roughly chopped spinach (palak)",
      "1/4 cup roughly chopped basil",
      "1/4 cup coconut milk (nariyal ka doodh)",
      "1/4 cup roughly chopped avocado",
      "1/2 cup roughly chopped bananas",
      "1/2 tbsp lemon juice",
      "1 tbsp chia seeds",
      "2 tbsp soaked falooda seeds (subza)",
      "1 cup water",
      "20 ice-cubes",
    ],
    steps: [
      "In a mixer add spinach, basil, coconut milk, avocado, banana, lemon juice, chia seeds, soaked falooda seeds.",
      "Add 1 cup water and ~20 ice cubes.",
      "Blend till smooth.",
      "Pour equal quantities into 3 individual glasses.",
      "Serve immediately.",
    ],
  },

  {
    id: "papaya",
    name: "Papaya Orange Drink",
    quickInfo: {
      time: "~5 min",
      servings: "Hydrating",
      vibe: "Vitamin C Boost",
    },
    tags: ["Orange + papaya", "No added sugar", "Coconut milk finish"],
    blurb:
      "Fresh orange juice + ripe papaya + thick coconut milk over crushed ice. Summer in a glass.",
    ingredients: [
      "2 cups fresh orange juice",
      "2 cups roughly chopped papaya",
      "1/2 cup thick coconut milk (nariyal ka doodh)",
      "Crushed ice (for serving)",
    ],
    steps: [
      "Combine orange juice, papaya, and coconut milk in a blender. Blend till smooth.",
      "Place crushed ice in each glass.",
      "Pour the drink over ice.",
      "Serve immediately.",
    ],
  },

  {
    id: "pulses",
    name: "Mixed Pulses With Vegetables",
    quickInfo: {
      time: "~25 min",
      servings: "Protein bowl",
      vibe: "Bright lemon + chili garlic paste",
    },
    tags: ["Moong / kala chana / masoor", "Garlic", "Cauliflower", "High protein"],
    blurb:
      "Moong, kala chana, and masoor tossed with onions, blanched cauliflower, baby onions, garlic, and a Kashmiri chili–coriander–cumin paste. Finish with lemon.",
    ingredients: [
      "1 cup cooked moong (whole green gram)",
      "1/2 cup cooked kala chana (brown chickpeas)",
      "1 cup cooked masoor (whole red lentil)",
      "1 cup sliced onions",
      "1 cup blanched cauliflower",
      "1/4 cup blanched baby onion",
      "1 cup chopped garlic (lehsun)",
      "1 tbsp oil",
      "2 tsp lemon juice",
      "Salt to taste",
      "Masala paste (blend with ~1/4 cup water):",
      "• 8 garlic cloves",
      "• 5 to 6 whole dry Kashmiri red chillies",
      "• 2 tsp coriander (dhania) seeds",
      "• 2 tsp cumin seeds (jeera)",
      "• 1-inch piece ginger (adrak)",
      "Garnish:",
      "• 1 tbsp chopped coriander (dhania)",
    ],
    steps: [
      "Blend garlic, Kashmiri red chillies, coriander seeds, cumin seeds, and ginger with ~1/4 cup water into a smooth paste.",
      "Heat oil in a pan. Add onions, cauliflower, baby onions, garlic. Sauté.",
      "Add moong, kala chana, masoor, and the chili-coriander-cumin paste. Toss.",
      "Season with salt and lemon juice.",
      "Top with chopped coriander and serve.",
    ],
  },

  {
    id: "peanut",
    name: "Peanut Tikki",
    quickInfo: {
      time: "Quick stovetop",
      servings: "About 8 tikkis",
      vibe: "Savory peanut cutlets",
    },
    tags: ["Peanut + besan", "Pan seared", "Green chutney side"],
    blurb:
      "Ground peanuts + besan + atta + spices + lemon. Pan-toast into little tikkis and eat hot with chutney.",
    ingredients: [
      "1 cup coarsely ground roasted peanuts",
      "1/4 cup besan (Bengal gram flour)",
      "5 tbsp whole wheat flour (gehun ka atta)",
      "1 1/2 tsp finely chopped green chillies",
      "1 tbsp lemon juice",
      "Salt to taste",
      "1 tsp warm oil for kneading",
      "2 1/2 tsp oil for greasing and cooking",
    ],
    steps: [
      "Combine peanuts, besan, wheat flour, green chillies, lemon juice, salt in a bowl. Mix well.",
      "Add 1 tsp warm oil and knead again.",
      "Divide into 8 equal portions and shape each into a flat tikki.",
      "Heat a non-stick tava (griddle), grease with a little oil.",
      "Cook each tikki with a little oil until golden and cooked on both sides.",
      "Serve hot with green chutney.",
    ],
  },
];

// --- DOM HOOKS ---
const gridEl = document.getElementById("recipe-grid");
const panelEl = document.getElementById("detail-panel");
const panelInnerEl = document.getElementById("detail-inner");
const closeBtn = document.getElementById("close-detail");

// render recipe cards in the grid
function renderCards() {
  gridEl.innerHTML = recipes
    .map((r) => {
      // choose fun bg class
      let bgClass = "card-bg-green";
      if (r.id === "papaya") bgClass = "card-bg-orange";
      if (r.id === "pulses") bgClass = "card-bg-red";
      if (r.id === "peanut") bgClass = "card-bg-brown";

      return `
        <article class="recipe-card ${bgClass}" data-id="${r.id}">
          <div>
            <div class="recipe-headline">${r.name}</div>

            <div class="recipe-meta-row">
              <span class="meta-pill">${r.quickInfo.time}</span>
              <span class="meta-pill">${r.quickInfo.vibe}</span>
              <span class="meta-pill">${r.quickInfo.servings}</span>
            </div>

            <p class="recipe-blurb">${r.blurb}</p>
          </div>

          <div class="recipe-footer-row">
            <div>
              ${r.tags
                .slice(0, 2)
                .map((t) => `<span class="meta-pill">${t}</span>`)
                .join(" ")}
            </div>
            <button class="view-btn" data-id="${r.id}">View</button>
          </div>
        </article>
      `;
    })
    .join("");
}

// open detail drawer
function openDetail(id) {
  const r = recipes.find((x) => x.id === id);
  if (!r) return;

  panelInnerEl.innerHTML = `
    <h2 class="detail-title">${r.name}</h2>

    <div class="detail-tags">
      <div class="detail-pill">${r.quickInfo.time}</div>
      <div class="detail-pill">${r.quickInfo.servings}</div>
      <div class="detail-pill">${r.quickInfo.vibe}</div>
      ${r.tags
        .map(
          (t) => `<div class="detail-pill">${t.replace(/</g,"&lt;")}</div>`
        )
        .join("")}
    </div>

    <div class="detail-block">
      <h3>Ingredients</h3>
      <ul class="detail-list">
        ${r.ingredients
          .map(
            (ing) =>
              `<li>${ing
                .replace(/</g, "&lt;")
                .replace(/>/g, "&gt;")}</li>`
          )
          .join("")}
      </ul>
    </div>

    <div class="detail-block">
      <h3>Steps</h3>
      <ol class="detail-list">
        ${r.steps
          .map(
            (step) =>
              `<li>${step
                .replace(/</g, "&lt;")
                .replace(/>/g, "&gt;")}</li>`
          )
          .join("")}
      </ol>
    </div>
  `;

  panelEl.classList.remove("hidden");
  // scroll to top of panel content so user starts at title
  panelEl.scrollTop = 0;
}

// close detail
function closeDetail() {
  panelEl.classList.add("hidden");
}

// click handling (card or button -> open detail)
gridEl.addEventListener("click", (e) => {
  const card = e.target.closest("[data-id]");
  if (!card) return;
  const id = card.getAttribute("data-id");
  openDetail(id);
});

// close button
closeBtn.addEventListener("click", closeDetail);
// clicking backdrop outside card also closes
panelEl.addEventListener("click", (e) => {
  if (e.target.id === "detail-panel") {
    closeDetail();
  }
});

// run on load
renderCards();
