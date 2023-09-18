// document.querySelectorAll(".card").forEach((clicked_element, index) => {
//   console.log(clicked_element);
//   clicked_element.addEventListener("click", (clicked_element) => {
//     document.querySelector(
//       "." + clicked_element.target.classList[0]
//     ).style.cssText = "rotate: -1 0 0 180deg;";
//     console.log(clicked_element.target.classList[0]);
//   });
// });
const num_0 = "../img/number-0-svgrepo-com.svg";
const num_1 = "../img/number-1-svgrepo-com.svg";
const num_2 = "../img/number-2-svgrepo-com.svg";
const num_3 = "../img/number-3-svgrepo-com.svg";
const num_4 = "../img/number-4-svgrepo-com.svg";
const num_5 = "../img/number-5-svgrepo-com.svg";
const num_6 = "../img/number-6-svgrepo-com.svg";
const num_7 = "../img/number-7-svgrepo-com.svg";
const num_8 = "../img/number-8-svgrepo-com.svg";
const num_9 = "../img/number-9-svgrepo-com.svg";

let counter_after = "000000";

let flip_control_screen = document.querySelector(".flip_control");
flip_control_screen.textContent = "000000";
let counter = 0;
addEventListener("wheel", (event) => {
  if (counter !== "999999") {
    counter++;
  }
  counter_before = counter_after;
  let counter_string = "000000" + counter;
  counter_after = counter_string.slice(-6);
  flip_control_screen.textContent = counter_string.slice(-6);
  counter_before_array = counter_before.split("");
  console.log(counter_before_array);
});
