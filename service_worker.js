chrome.runtime.onMessage.addListener(function(data, sender, sendResponse) {
    chrome.downloads.download(
        {
            url: "https://www.google.com",
            saveAs: true,
            method: "GET",
            filename: "index.html"
        });
});
