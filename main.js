import "./style.css";

// data for page
const dataPage = {
  //top data with Label and options
  nav: {
    ziele: {
      label: "Ziele:",
      options: [
        {
          label: "Lesen",
          type: "checkbox",
          name: "lesen",
        },
        {
          label: "Fokus",
          type: "checkbox",
          name: "fokus",
        },
        {
          label: "Wortschatz",
          type: "checkbox",
          name: "wortschatz",
        },
        {
          label: "Schreiben",
          type: "checkbox",
          name: "schreiben",
        },
      ],
    },
    niveau: {
      label: "Niveau:",
      options: [
        {
          label: "Leicht",
          type: "checkbox",
          name: "leicht",
        },
        {
          label: "Mittel",
          type: "checkbox",
          name: "mittel",
        },
        {
          label: "Schwer",
          type: "checkbox",
          name: "schwer",
        },
      ],
    },
  },
  // data for cards with title, description, icon, background, goals
  main: {
    cards: [
      {
        title: "Mehr Abwechslung, mehr Erfolg",
        description:
          "Erhalte hier mehr Übungsempfehlungen aus über 10 Jahren Erfahrung und aus mehr als 25.000 virtuellen Klassenstunden. Du vervolgst mehrere Ziele? Ergänze dein Förderprogramm bis zu 18 Wochen im Voraus mit wenigen Klicks.",
        icon: "bar_chart",
        background: "#3dd2fe",
        goals: [""],
      },
      {
        title: "PURES LESEN",
        description: "Lesenkompetenz | Schwer | 3 Wochen",
        icon: "bar_chart",
        background:
          "linear-gradient(54deg, rgba(56,200, 251,1) 25%, rgba(26, 129, 221,1) 50%",
        textContent: "rgba(26, 129, 221,1)",
        goals: ["lesen"],
      },
      {
        title: "RELAX & FOKUS",
        description: "Konzentration | Leicht | 3 Wochen",
        icon: "bar_chart",
        background: "#1576d9",
        goals: ["fokus", "lesen"],
      },
      {
        title: "WORTSCHATZ",
        description: "Neue Wörter | Leicht | 3 Wochen",
        icon: "bar_chart",
        background:
          "linear-gradient(54deg, rgba(235, 78,122,1) 25%, rgba(174, 35, 208,1) 50%",
        textContent: "rgba(174, 35, 208,1)",
        goals: ["wortschatz", "schreiben"],
      },

      {
        title: "20 MINUTEN",
        description: "Lesenkompetenz | MITTEL | 3 Wochen",
        icon: "bar_chart",
        background: "#a61ddc",
        goals: ["wortschatz", "schreiben"],
      },
      {
        title: "LEVEL UP",
        description: "Lesenkompetenz | MITTEL | 6 Wochen",
        icon: "bar_chart",
        background: "#23bf4a",
        goals: ["lesen", "schreiben"],
      },
      {
        title: "WORTSCHATZ & FOKUS",
        description: "Lesenkompetenz | MITTEL | 6 Wochen",
        icon: "bar_chart",
        background: "#f28606",
        goals: ["fokus", "wortschatz"],
      },
      {
        title: "GENAU LESEN",
        description: "Text | MITTEL | 3 Wochen",
        icon: "bar_chart",
        background: "#fdce19",
        goals: ["lesen", "fokus"],
      },
    ],
  },
};
// create page
const app = document.querySelector("#app");

// title
const h3 = document.createElement("p");
h3.classList.add("title");
h3.textContent = "Trainingspläne (7)";
app.appendChild(h3);

//create nav /top
const nav = document.createElement("nav");
nav.classList.add("nav");
app.appendChild(nav);

const ziele = document.createElement("label");
ziele.classList.add("label");
const spanZiele = document.createElement("span");
spanZiele.textContent = dataPage.nav.ziele.label;
ziele.appendChild(spanZiele);
nav.appendChild(ziele);

const niveau = document.createElement("label");
niveau.classList.add("label", "niveau");
const spanNiveau = document.createElement("span");
spanNiveau.textContent = dataPage.nav.niveau.label;
niveau.appendChild(spanNiveau);
nav.appendChild(niveau);

const zieleOptions = document.createElement("div");
zieleOptions.classList.add("options");
dataPage.nav.ziele.options.map((option) => {
  const label = document.createElement("label");
  label.classList.add("label_checkbox");
  label.textContent = option.label;
  zieleOptions.appendChild(label);

  const input = document.createElement("input");
  input.classList.add("input_checkbox");
  input.setAttribute("type", option.type);
  input.setAttribute("name", option.name);
  label.appendChild(input);
});

ziele.appendChild(zieleOptions);

const niveauOptions = document.createElement("div");
niveauOptions.classList.add("options");
dataPage.nav.niveau.options.map((option) => {
  const label_niveau = document.createElement("label");
  label_niveau.classList.add("label_checkbox");
  label_niveau.textContent = option.label;
  niveauOptions.appendChild(label_niveau);

  const input = document.createElement("input");
  input.classList.add("input_checkbox");
  input.setAttribute("type", option.type);
  input.setAttribute("name", option.name);
  label_niveau.appendChild(input);
});

niveau.appendChild(niveauOptions);

// main
const main = document.createElement("div");
main.classList.add("main_container");
app.appendChild(main);

// create cards
const cards = document.createElement("div");
cards.classList.add("cards");
main.appendChild(cards);

dataPage.main.cards.map((card) => {
  const cardItem = document.createElement("div");
  cardItem.classList.add("card");
  if (card.goals.join(" ").length > 0) {
    cardItem.classList.add(...card.goals);
  }
  // cardItem.setAttribute("data-goals", card.goals);

  cardItem.style.background = card.background;
  cards.appendChild(cardItem);

  const flex = document.createElement("div");
  flex.classList.add("flex");
  cardItem.appendChild(flex);

  const cardTitle = document.createElement("p");
  cardTitle.classList.add("card__title");
  cardTitle.textContent = card.title;
  flex.appendChild(cardTitle);

  const cardDescription = document.createElement("p");
  cardDescription.classList.add("card__description");
  cardDescription.textContent = card.description;
  flex.appendChild(cardDescription);

  const cardIcon = document.createElement("i");
  cardIcon.classList.add("material-icons");
  cardIcon.textContent = card.icon;
  cardIcon.style.color = card.background;
  cardIcon.style.color = card.textContent;
  cardItem.appendChild(cardIcon);
});

// filter cards by goals

const checked = document.querySelectorAll("input[type=checkbox]");

checked.forEach((item) => {
  item.addEventListener("change", (e) => {
    const checkboxes = [...checked].filter((checkbox) => checkbox.checked);
    console.log(checkboxes);
    const checkedValues = checkboxes.map((checkbox) => checkbox.name);
    console.log(checkedValues);
    const cards = document.querySelectorAll(".card");
    console.log(cards);
    cards.forEach((card) => {
      const goals = card.classList.value.split(" ").slice(1);
      console.log(goals);
      if (goals.length > 0) {
        const isMatch = checkedValues.every((goal) => goals.includes(goal));
        console.log(isMatch);
        if (isMatch) {
          card.style.display = "block";
        } else {
          card.style.display = "none";
        }
      } else if (checkedValues.length > 0 && goals.length === 0) {
        card.style.display = "none";
      } else {
        card.style.display = "block";
      }
    });
  });
});
