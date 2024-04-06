/*
notes :
fuction :

function cal(year) {
  const currentYear = 2024;
  const age = currentYear - year;
  return age;
}
cal(199);

const fact = ["lisbon is capital of portugal", "2015", "true"];

notes:
flexbox:
layout placing object wherever we want.
css grid : perfect for creating bigger and two dimensionla layouts
*/

const initialFacts = [
  {
    id: 1,
    text: "React is being developed by Meta (formerly facebook)",
    source: "https://opensource.fb.com/",
    category: "technology",
    votesInteresting: 24,
    votesMindblowing: 9,
    votesFalse: 4,
    createdIn: 2021,
  },
  {
    id: 2,
    text: "Millennial dads spend 3 times as much time with their kids than their fathers spent with them. In 1982, 43% of fathers had never changed a diaper. Today, that number is down to 3%",
    source:
      "https://www.mother.ly/parenting/millennial-dads-spend-more-time-with-their-kids",
    category: "society",
    votesInteresting: 11,
    votesMindblowing: 2,
    votesFalse: 0,
    createdIn: 2019,
  },
  {
    id: 3,
    text: "Lisbon is the capital of Portugal",
    source: "https://en.wikipedia.org/wiki/Lisbon",
    category: "society",
    votesInteresting: 8,
    votesMindblowing: 3,
    votesFalse: 1,
    createdIn: 2015,
  },
];
const CATEGORIES = [
  { name: "technology", color: "#3b82f6" },
  { name: "science", color: "#16a34a" },
  { name: "finance", color: "#ef4444" },
  { name: "society", color: "#eab308" },
  { name: "entertainment", color: "#db2777" },
  { name: "health", color: "#14b8a6" },
  { name: "history", color: "#f97316" },
  { name: "news", color: "#8b5cf6" },
];

//selecting dom elements

const btn = document.querySelector(".btn-open");
const form = document.querySelector(".fact-form");
const factsList = document.querySelector(".facts-list");

// create DOM elements: Render facts in List.
factsList.innerHTML = ""; // removing the html elements of fact-list using DOM
// factsList.insertAdjacentHTML("afterbegin", <li>jeevan</li>);

//loding data from database
loadFacts();

async function loadFacts() {
  const res = await fetch(
    "https://ourdmwjlsinoyisztvmu.supabase.co/rest/v1/facts",
    {
      headers: {
        apikey:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im91cmRtd2psc2lub3lpc3p0dm11Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTE3ODQ1NzcsImV4cCI6MjAyNzM2MDU3N30.QwpBG4QVhbUN9JoHBsdF4ynhu7cAKpL7I2kL3XmPkag",
        authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im91cmRtd2psc2lub3lpc3p0dm11Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTE3ODQ1NzcsImV4cCI6MjAyNzM2MDU3N30.QwpBG4QVhbUN9JoHBsdF4ynhu7cAKpL7I2kL3XmPkag",
      },
    }
  );
  const data = await res.json();
  createFactsList(data);
}

function createFactsList(dataArray) {
  const htmlArr = dataArray.map(
    (fact) => `<li class="fact">
    <p>
    ${fact.text}
    <a
      class="source"
      href=${fact.source}
      target="_blank"
      >source</a>
  </p>
  
  <span class="tag" style="background-color: ${
    CATEGORIES.find((cat) => cat.name === "society").color
  }">${fact.category}
  </span></li>`
  );

  console.log(htmlArr);
  const html = htmlArr.join("");
  factsList.insertAdjacentHTML("afterbegin", html);
}

//toggle form visibility
btn.addEventListener("click", function () {
  if (form.classList.contains("hidden")) {
    form.classList.remove("hidden");
    btn.textContent = "close"; // changing the context of the button using javascript
  } else {
    form.classList.add("hidden");
    btn.textContent = " share a fact";
  }
});
// creating dom elements dynamically, loding the data from the supabase and rendering it

//-------------------------------------***-REACT-***--------------------------------------

/*
REACT:
Javascript library for building user interface.
``

*/
