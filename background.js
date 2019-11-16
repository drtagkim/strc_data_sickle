chrome.runtime.onInstalled.addListener(function(){
    chrome.storage.sync.set({
        "file_prefix":"strc_",
        "currentNum":1,
        "dateMarking":true,
        "myscript1":""
    },function(){
        console.log("install complete.");
    });
});