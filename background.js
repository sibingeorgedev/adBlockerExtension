chrome.runtime.onInstalled.addListener(() => {
    chrome.declarativeNetRequest.updateDynamicRules({
        addRules: [{
            "id": 1,
            "priority": 1,
            "action": { "type": "block" },
            "condition": {
                "urlFilter": "||ads.example.com^",
                "resourceTypes": ["script", "image", "stylesheet"]
            }
        }],
        removeRuleIds: [1]
    });
});
