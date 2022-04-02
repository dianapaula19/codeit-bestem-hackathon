let selectedOption = chrome.storage.sync.get(["option"]);

console.log(selectedOption);

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.status === "Loading" && selectedOption !== "normal") {
    chrome.tabs.insertCSS(tabId, {file: 'override.css'}, () => {
      console.log("Inserted");
    });
  }
})