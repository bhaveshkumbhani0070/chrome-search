let shown = false;

const mouse_condition = (e) => {
  return e.clientY <= 0;
};
const condition = (e) => e.code === "Space" && e.target === document.body;

// const on_mouse_move = (e) => {
//   if (!condition(e)) return;
//   step();
// };
const on_mouseout = (e) => {
  if (!mouse_condition(e)) return;
  step();
};
const on_key_down = (e) => {
  if (!condition(e)) return;
  step();
  e.preventDefault();
  e.stopImmediatePropagation();
  return false;
};

const step = () => {
  if (shown) return;
  show();
  shown = true;
};
const show = () => {
  // const d = document.createElement("div");
  // d.style =
  //   "position: fixed; bottom: 20px; right: 20px; background: pink; font-size: 2em; padding: 1em;";
  // d.innerText = "Tah-dah!";
  // document.body.append(d);
  // chrome.runtime.getURL("index.html");
  // chrome.tabs.create({ url: chrome.runtime.getURL("index.html") });
  // window.open(
  //   "index.html",
  //   "extension_popup",
  //   "width=300,height=400,status=no,scrollbars=yes,resizable=no"
  // );
  // chrome.tabs.create({
  //   url: "index.html",
  // });
  console.log("show popup");
  var element = document.createElement("div");
  element.style.textAlign = "center";
  element.style.width = "100%";
  element.style.position = "fixed";
  element.style.top = "0px";
  element.style.left = "0px";
  element.style.right = "0px";
  element.style.bottom = "0px";
  element.style.zIndex = "9000000000000000000";

  var iframe = document.createElement("iframe");
  iframe.style.background = "white";
  iframe.style.height = "400px";
  iframe.style.width = "800px";
  iframe.style.right = "50%";
  iframe.style.zIndex = "9000000000000000000";
  iframe.style.border = "0px";
  iframe.src = chrome.runtime.getURL("index.html");

  element.appendChild(iframe); // appends the iframe (element2) to div (element)
  document.body.appendChild(element);
};
window.onload = function () {
  // this.addEventListener("mousemove", on_mouse_move);
  this.addEventListener("mouseout", on_mouseout);
  this.addEventListener("keydown", on_key_down);
};
