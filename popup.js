let selectedOption = document.querySelector('input[name="option"]:checked').value;
chrome.storage.sync.set({ "option": selectedOption });

if (selectedOption !== 'normal') {
  chrome.tabs.insertCSS(null, { file: "override.css" });
}