let shown = false;

const condition = (e) => e.clientY == 0 && e.movementY < -1;
const on_mouse_move = (e) => {
  if (!condition(e)) return;
  step();
};

const step = () => {
  if (shown) return;
  show();
  // shown = true;
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
  var iframe = document.createElement("iframe");
  iframe.style.background = "white";
  iframe.style.height = "400px";
  iframe.style.width = "800px";
  iframe.style.position = "fixed";
  iframe.style.top = "0px";
  iframe.style.right = "50%";
  iframe.style.zIndex = "9000000000000000000";
  iframe.style.border = "0px";
  iframe.src = chrome.runtime.getURL("index.html");

  document.body.appendChild(iframe);
};
window.onload = function () {
  this.addEventListener("mousemove", on_mouse_move);
};
