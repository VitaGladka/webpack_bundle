import "../css/contacts.css";
import references from "./refs.js";
const { contactsSection } = references;

const game = ["камень", "ножницы", "бумага"];
function createButtons(arr) {
  return arr.map((el) => {
    const button = document.createElement("button");
    button.textContent = el;
    button.dataset.key = el;

    return button;
  });
}
const buttons = createButtons(game);
// console.log(buttons);
contactsSection.append(...buttons);

const result = document.createElement("p");
contactsSection.append(result);

contactsSection.addEventListener("click", (evt) => {
  let index = Math.round(Math.random() * (game.length - 1));
  console.log(index);
  let user = evt.target.dataset.key;
  //   console.log(user);
  let computer = game[index];
  //   console.log(computer);
  console.log(`user: ${user} - computer: ${computer}`);

  let msg;
  if (user === computer) {
    msg = "ничья";
  } else {
    (user === "ножницы" && computer === "бумага") ||
    (user === "бумага" && computer === "камень") ||
    (user === "камень" && computer === "ножницы")
      ? (msg = "User выиграл")
      : (msg = "Computer выиграл");
  }

  result.textContent = msg;
});
