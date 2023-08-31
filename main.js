import "./style.css";

const dataPage = {
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
          name: "focus",
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
  main: {
    cards: [
      {
        title: "Mehr Abwechslung, mehr Erfolg",
        description:
          "Erhalte hier mehr Übungsempfehlungen aus über 10 Jahren Erfahrung und aus mehr als 25.000 virtuellen Klassenstunden. Du vervolgst mehrere Ziele? Ergänze dein Förderprogramm bis zu 18 Wochen im Voraus mit wenigen Klicks.",
        icon: "bar_chart",
        background: "#3dd2fe",
      },
      {
        title: "PURES LESEN",
        description: "Lesenkompetenz | Schwer | 3 Wochen",
        icon: "bar_chart",
        background:
          "linear-gradient(54deg, rgba(56,200, 251,1) 25%, rgba(26, 129, 221,1) 50%",
        textContent: "rgba(26, 129, 221,1)",
        goals: ["Lesen"],
      },
      {
        title: "RELAX & FOCUS",
        description: "Konzentration | Leicht | 3 Wochen",
        icon: "bar_chart",
        background: "#1576d9",
        goals: ["Fokus", "Lesen"],
      },
      {
        title: "WORTSCHATZ",
        description: "Neue Wörter | Leicht | 3 Wochen",
        icon: "bar_chart",
        background:
          "linear-gradient(54deg, rgba(235, 78,122,1) 25%, rgba(174, 35, 208,1) 50%",
        textContent: "rgba(174, 35, 208,1)",
        goals: ["Wortschatz", "Schreiben"],
      },

      {
        title: "20 MINUTEN",
        description: "Lesenkompetenz | MITTEL | 3 Wochen",
        icon: "bar_chart",
        background: "#a61ddc",
        goals: ["Wortschatz", "Schreiben"],
      },
      {
        title: "LEVEL UP",
        description: "Lesenkompetenz | MITTEL | 6 Wochen",
        icon: "bar_chart",
        background: "#23bf4a",
        goals: ["Lesen", "Schreiben"],
      },
      {
        title: "WORTSCHATZ & FOCUS",
        description: "Lesenkompetenz | MITTEL | 6 Wochen",
        icon: "bar_chart",
        background: "#f28606",
        goals: ["Fokus", "Wortschatz"],
      },
      {
        title: "GENAU LESEN",
        description: "Text | MITTEL | 3 Wochen",
        icon: "bar_chart",
        background: "#fdce19",
        goals: ["Lesen", "Fokus"],
      },
    ],
  },
};

const app = document.querySelector("#app");
// title
const h3 = document.createElement("p");
h3.classList.add("title");
h3.textContent = "Trainingspläne (7)";
app.appendChild(h3);

//nav
const nav = document.createElement("nav");
nav.classList.add("nav");
app.appendChild(nav);

const ziele = document.createElement("label");
ziele.classList.add("label", "ziele");
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
