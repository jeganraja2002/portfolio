var menu = document.getElementById("dropmenu");
var button1 = document.getElementById("button1");
var button2 = document.getElementById("button2");
var fade = document.getElementById("fade");
let count = 0;
fade.classList.remove("body_after");
button2.classList.remove("d-lg-none");

fade.addEventListener("click", () => {
  menu.classList.remove("d-sms-block", "d-mdm-block");
  menu.classList.add("d-sms-none", "d-mdm-none");
  fade.classList.remove("body_after");
  button2.classList.remove("d-lg-none");
  button1.classList.add("d-lg-none");
});

anchor.addEventListener("click", () => {
  menu.classList.remove("d-sms-block", "d-mdm-block");
  menu.classList.add("d-sms-none", "d-mdm-none");
  fade.classList.remove("body_after");
  button2.classList.remove("d-lg-none");
  button1.classList.add("d-lg-none");
});

anchor1.addEventListener("click", () => {
  menu.classList.remove("d-sms-block", "d-mdm-block");
  menu.classList.add("d-sms-none", "d-mdm-none");
  fade.classList.remove("body_after");
  button2.classList.remove("d-lg-none");
  button1.classList.add("d-lg-none");
});

anchor2.addEventListener("click", () => {
  menu.classList.remove("d-sms-block", "d-mdm-block");
  menu.classList.add("d-sms-none", "d-mdm-none");
  fade.classList.remove("body_after");
  button2.classList.remove("d-lg-none");
  button1.classList.add("d-lg-none");
});

anchor3.addEventListener("click", () => {
  menu.classList.remove("d-sms-block", "d-mdm-block");
  menu.classList.add("d-sms-none", "d-mdm-none");
  fade.classList.remove("body_after");
  button2.classList.remove("d-lg-none");
  button1.classList.add("d-lg-none");
});

anchor4.addEventListener("click", () => {
  menu.classList.remove("d-sms-block", "d-mdm-block");
  menu.classList.add("d-sms-none", "d-mdm-none");
  fade.classList.remove("body_after");
  button2.classList.remove("d-lg-none");
  button1.classList.add("d-lg-none");
});

function drop() {
  window.navigator.vibrate([10]);
  menu.classList.remove("d-sms-none", "d-mdm-none");
  menu.classList.remove("d-sm-none", "d-md-none");
  menu.classList.add("d-sms-block", "d-mdm-block");
  button2.classList.add("d-lg-none");
  button1.classList.remove("d-lg-none");
  fade.classList.add("body_after");
}

function minin() {
  window.navigator.vibrate([10]);
  button1.classList.add("d-lg-none");
  button2.classList.remove("d-lg-none");
  menu.classList.remove("d-sms-block", "d-mdm-block");
  menu.classList.add("d-sms-none", "d-mdm-none");
  fade.classList.remove("body_after");
}

//...................... dark and light........................

var body = document.getElementById("body");

var body_light = document.getElementById("body");

var light = document.getElementById("light");
var dark = document.getElementById("dark");

light.classList.remove("d-lg-none");
dark.classList.remove("d-lg-none");
const gif = document.querySelector(".gif-img");
gif.style.height = colors6.offsetHeight + "px";

function darklight() {
  count++;
  window.navigator.vibrate([10]);

  body_light.classList.remove("body");
  body_light.classList.add("body2");

  colors.classList.add("borders");
  colors1.classList.add("borders");
  colors3.classList.add("borders");
  colors4.classList.add("borders");
  colors5.classList.add("borders");
  colors6.classList.add("borders");
  colors8.classList.add("borders", "git1");
  colors9.classList.add("borders");
  colors14.classList.add("borders");
  colors15.classList.add("borders");
  colors16.classList.add("borders");
  colors17.classList.add("borders");
  colors18.classList.add("borders");
  colors23.classList.add("borders");
  colors25.classList.add("borders");
  colors27.classList.add("borders");
  colors29.classList.add("borders");
  colors31.classList.add("borders");
  colors33.classList.add("borders");
  colors35.classList.add("borders");
  colors37.classList.add("borders");

  colors19.classList.add("project-watch1");
  colors20.classList.add("project-watch1");
  colors21.classList.add("project-watch1");
  colors22.classList.add("project-watch1");
  colors24.classList.add("project-watch1");
  colors26.classList.add("project-watch1");
  colors28.classList.add("project-watch1");
  colors30.classList.add("project-watch1");
  colors32.classList.add("project-watch1");
  colors34.classList.add("project-watch1");
  colors36.classList.add("project-watch1");
  colors38.classList.add("project-watch1");

  // img...........

  imgchange.src = "img/b.gif";

  // anchor.....

  anchor.classList.add("a1");
  anchor1.classList.add("a1");
  anchor2.classList.add("a1");
  anchor3.classList.add("a1");
  anchor4.classList.add("a1");
  anchor5.classList.add("cv1");

  animation.classList.add("animation_iconr");
  animation1.classList.add("animation_iconr");

  // cursor......

  cursor.classList.add("cursordark");
  cursor2.classList.add("cursor2dark");

  colors.classList.remove("border");
  colors1.classList.remove("border");
  colors3.classList.remove("border");
  colors4.classList.remove("border");
  colors5.classList.remove("border");
  colors6.classList.remove("border");
  colors8.classList.remove("border", "git");
  colors9.classList.remove("border");

  colors14.classList.remove("border");

  colors15.classList.remove("border");
  colors16.classList.remove("border");
  colors17.classList.remove("border");
  colors18.classList.remove("border");
  colors23.classList.remove("border");
  colors25.classList.remove("border");
  colors27.classList.remove("border");
  colors29.classList.remove("border");
  colors31.classList.remove("border");
  colors33.classList.remove("border");
  colors35.classList.remove("border");
  colors37.classList.remove("border");

  colors19.classList.remove("project-watch");
  colors20.classList.remove("project-watch");
  colors21.classList.remove("project-watch");
  colors22.classList.remove("project-watch");
  colors24.classList.remove("project-watch");
  colors26.classList.remove("project-watch");
  colors28.classList.remove("project-watch");
  colors30.classList.remove("project-watch");
  colors32.classList.remove("project-watch");
  colors34.classList.remove("project-watch");
  colors36.classList.remove("project-watch");
  colors38.classList.remove("project-watch");

  //anchor...

  anchor.classList.remove("a");
  anchor1.classList.remove("a");
  anchor2.classList.remove("a");
  anchor3.classList.remove("a");
  anchor4.classList.remove("a");
  anchor5.classList.remove("cv");

  animation.classList.remove("animation_icon");
  animation1.classList.remove("animation_icon");

  // cursor......

  cursor.classList.remove("cursor");
  cursor2.classList.remove("cursor2");

  // input color....

  light.classList.add("d-lg-none");
  dark.classList.remove("d-lg-none");
}

function darklight1() {
  count = 0;
  window.navigator.vibrate([10]);

  body_light.classList.add("body");
  body_light.classList.remove("body2");

  colors.classList.remove("borders");
  colors1.classList.remove("borders");
  colors3.classList.remove("borders");
  colors4.classList.remove("borders");
  colors5.classList.remove("borders");
  colors6.classList.remove("borders");
  colors8.classList.remove("borders", "git1");
  colors9.classList.remove("borders");
  colors14.classList.remove("borders");

  colors15.classList.remove("borders");
  colors16.classList.remove("borders");
  colors17.classList.remove("borders");
  colors18.classList.remove("borders");
  colors23.classList.remove("borders");
  colors25.classList.remove("borders");
  colors27.classList.remove("borders");
  colors29.classList.remove("borders");
  colors31.classList.remove("borders");
  colors3.classList.remove("borders");

  colors19.classList.remove("project-watch1");
  colors20.classList.remove("project-watch1");
  colors21.classList.remove("project-watch1");
  colors22.classList.remove("project-watch1");
  colors24.classList.remove("project-watch1");
  colors26.classList.remove("project-watch1");
  colors28.classList.remove("project-watch1");
  colors30.classList.remove("project-watch1");
  colors32.classList.remove("project-watch1");
  colors34.classList.remove("project-watch1");
  colors36.classList.remove("project-watch1");
  colors38.classList.remove("project-watch1");

  // img..........

  imgchange.src = "img/a.gif";

  // anchor.....

  anchor.classList.remove("a1");
  anchor1.classList.remove("a1");
  anchor2.classList.remove("a1");
  anchor3.classList.remove("a1");
  anchor4.classList.remove("a1");
  anchor5.classList.remove("cv1");

  animation.classList.remove("animation_iconr");
  animation1.classList.remove("animation_iconr");

  // cursor....

  cursor.classList.remove("cursordark");
  cursor2.classList.remove("cursor2dark");

  colors.classList.add("border");
  colors1.classList.add("border");
  colors3.classList.add("border");
  colors4.classList.add("border");
  colors5.classList.add("border");
  colors6.classList.add("border");
  colors8.classList.add("border", "git");
  colors9.classList.add("border");
  colors14.classList.add("border");
  colors15.classList.add("border");
  colors16.classList.add("border");
  colors17.classList.add("border");
  colors18.classList.add("border");
  colors23.classList.add("border");
  colors25.classList.add("border");
  colors27.classList.add("border");
  colors29.classList.add("border");
  colors31.classList.add("border");
  colors33.classList.add("border");
  colors35.classList.add("border");
  colors37.classList.add("border");

  colors19.classList.add("project-watch");
  colors20.classList.add("project-watch");
  colors21.classList.add("project-watch");
  colors22.classList.add("project-watch");
  colors24.classList.add("project-watch");
  colors26.classList.add("project-watch");
  colors28.classList.add("project-watch");
  colors30.classList.add("project-watch");
  colors32.classList.add("project-watch");
  colors34.classList.add("project-watch");
  colors36.classList.add("project-watch");
  colors38.classList.add("project-watch");

  // anchor.....

  anchor.classList.add("a");
  anchor1.classList.add("a");
  anchor2.classList.add("a");
  anchor3.classList.add("a");
  anchor4.classList.add("a");
  anchor5.classList.add("cv");

  animation.classList.add("animation_icon");
  animation1.classList.add("animation_icon");

  // cursor......

  cursor.classList.add("cursor");
  cursor2.classList.add("cursor2");

  // input color...

  light.classList.remove("d-lg-none");
  dark.classList.add("d-lg-none");
}

var cursor = document.querySelector("#cursor");
var cursor2 = document.querySelector("#cursor2");

document.addEventListener("mousemove", function (e) {
  cursor.classList.remove("d-none");
  cursor2.classList.remove("d-none");

  cursor.style.left = e.clientX + "px";
  cursor.style.top = e.clientY + "px";
  cursor2.style.left = e.clientX + "px";
  cursor2.style.top = e.clientY + "px";
});

var apend = document.getElementById("home-bg");

function lines() {
  let widthAnimation = document.querySelector("#AnimationWidth");
  let jegan = widthAnimation.offsetWidth;

  const arr = ["circle", "circle1"];
  const arr1 = ["circles", "circles1"];
  let rotateCircle = Math.floor(Math.random() * arr.length);
  let rotateCircle1 = Math.floor(Math.random() * arr1.length);

  let e = document.createElement("div");
  e.setAttribute(
    "class",
    `bi bi-star-fill ${count == 0 ? arr[rotateCircle] : arr1[rotateCircle1]}`
  );
  apend.appendChild(e);

  let f1 = jegan >= 768 && jegan <= 1024 ? 15 : 10;
  let f2 = jegan >= 768 && jegan <= 1024 ? 30 : 20;
  let width = Math.floor(Math.random() * (f2 - f1) + f1);
  let left = Math.random() * jegan;
  let dur = Math.random() * 3;

  e.style.fontSize = 2 + width + "px";
  e.style.left = left + "px";
  e.style.animationDuration = 2 + dur + "s";

  setTimeout(function () {
    apend.removeChild(e);
  }, 5000);
}
setInterval(function () {
  lines();
}, 200);

var arrow = document.getElementById("ups");

window.addEventListener("scroll", () => {
  let scroll = window.pageYOffset;

  if (scroll > 150) {
    arrow.classList.remove("up");
    arrow.classList.add("up1");
  } else {
    arrow.classList.add("up");
    arrow.classList.remove("up1");
  }
});

let scroll = window.pageYOffset;

if (scroll > 150) {
  arrow.classList.remove("up");
  arrow.classList.add("up1");
} else {
  arrow.classList.add("up");
  arrow.classList.remove("up1");
}
