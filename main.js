let tips = ["Fight for it.", "I have no idea"];

const addBtn = document.querySelector(".add");
const resetBtn = document.querySelector(".clean");
const showBtn = document.querySelector(".showAdvice");
const optionsBtn = document.querySelector(".showOptions");

const input = document.querySelector("input");
const h2 = document.querySelector("h2");

addBtn.addEventListener("click", e => {
  e.preventDefault();
  let newTip = input.value;
  if (newTip != "") {
    tips.push(newTip);
    console.log(tips);
    alert(`You've added: "${newTip}"`);
    input.value = "";
  } else {
    alert("Fill the input!");
  }
});

resetBtn.addEventListener("click", e => {
  e.preventDefault();
  tips = [];
  console.log(tips);
});

optionsBtn.addEventListener("click", e => {
  e.preventDefault();
  alert(`Your advices: ${tips.join("- - -")}`);
});

showBtn.addEventListener("click", e => {
  e.preventDefault();
  const index = Math.floor(Math.random() * tips.length);
  console.log(tips[index]);
  h2.textContent = `${tips[index]}`;
});
