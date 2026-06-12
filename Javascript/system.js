let count = 0;
let rate = 1;
const btn = document.getElementById("cookie-container");
const counter = document.getElementById("counter");
function update_counter() {
  counter.textContent = `${count} cookies eaten`;
}
counter.textContent = count;
const reset = document.getElementById("reset");
reset.addEventListener("click", () => {
  count = 0;
  counter.textcontent = 0;
  console.log(count);
  update_counter();
});
const clicker = document.getElementById("cookie")
clicker.addEventListener("click",(event)=>{
  count = count + rate;
  update_counter();
  const mousex = event.clientX
  const mousey = event.clientY
  console.log(mousex)
  let plusone = document.createElement("div");
  plusone.classList.add("plus-one");
  plusone.textContent = `+${rate}`;
  plusone.style.left = `${mousex}px`;
  plusone.style.top = `${mousey}px`;
  document.body.appendChild(plusone);
  setTimeout(() => {
    plusone.classList.add("fade");
  }, 200);

  setTimeout(() => {
    plusone.remove();
  }, 700);
  for (let i = 0; i < rate; i++) {
    setTimeout(spawnFallingCookie, i * 100); // stagger them
  }
}
  
);
let buildings_list = ["cursor","grandma","farm","mine"]
function spawnFallingCookie() {
  const fallingCookie = document.createElement("img");
  fallingCookie.src = "images/PerfectCookie (1).webp";
  fallingCookie.classList.add("falling-cookie");

  // Random horizontal position
  let cookieSection = document.getElementById("cookie-section");
  const randomX = Math.random() * 400; //change because the value is incorrect.//
  fallingCookie.style.left = `${randomX}px`;
  console.log(cookieSection.style.width)
  document.body.appendChild(fallingCookie);

  // Remove after animation ends
  fallingCookie.addEventListener("animationend", () => {
    fallingCookie.remove();
  });
}
