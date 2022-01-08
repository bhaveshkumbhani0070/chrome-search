// console.log("background work");
// // chrome.action.onClicked.addListener(buttonClicked);
// // function buttonClicked() {
// //   console.log("buttonClicked");
// // }
// chrome.action.onClicked.addListener((tab) => {
//   chrome.scripting.executeScript({
//     target: { tabId: tab.id },
//     files: ["index.html"],
//   });
// });

// chrome.runtime.onInstalled.addListener((_reason) => {
//   chrome.tabs.create({
//     url: "index.html",
//   });
// });

// chrome.omnibox.onInputEntered.addListener((text) => {
//   // Encode user input for special characters , / ? : @ & = + $ #
//   var newURL = "https://www.google.com/search?q=" + encodeURIComponent(text);
//   chrome.tabs.create({ url: newURL });
// });
// chrome.app.runtime.onLaunched.addListener(function () {
//   // Center window on screen.
//   var screenWidth = screen.availWidth;
//   var screenHeight = screen.availHeight;
//   var width = 600;
//   var height = 400;

//   chrome.app.window.create("index.html", {
//     id: "window1",
//     outerBounds: {
//       width: width,
//       height: height,
//       left: Math.round((screenWidth - width) / 2),
//       top: Math.round((screenHeight - height) / 2),
//     },
//   });
// });

chrome.action.onClicked.addListener((tab) => {
  chrome.tabs.sendMessage(tab.id, "toggle");
  console.log("message sent");
});
