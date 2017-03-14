chrome.tabs.onUpdated.addListener(function(tabId , info) {
    if (info.status == "complete") {
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
            chrome.tabs.sendMessage(tabs[0].id, {method: "run"}, function(response) {
            });
        });
    }
});
