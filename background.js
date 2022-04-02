let state = false;

chrome.browserAction.onClicked.addListener(function(tab) {
  if (!state) {
    chrome.tabs.insertCSS(null, { file: "override.css" });
    state = !state;
    return;
  }
  state = !state;
});
