chrome.runtime.onInstalled.addListener(function(){
    chrome.storage.sync.set({
        "file_prefix":"strc_",
        "currentNum":1,
        "dateMarking":true,
        "myscript1":"",
        "myscript2":"",
        "n_auto_var":1,
        "automatic":true,
        "scripts":['js/myscript2.js','js/myscript1.js','js/content.js','js/scrolldown.js'],
        "scripts_order":[]
    },function(){
        console.log("install complete.");
    });
});
chrome.downloads.onChanged.addListener((d)=>{
    if('state' in d && d.state.current==='complete') {
        chrome.storage.sync.get(["n_auto_var","automatic","scripts"],(data)=>{
            if(data.n_auto_var>0 && data.automatic) {
                chrome.tabs.query({
                    active:true,
                    currentWindow:true
                },function(tabs){
                    let scripts=data.scripts;
                    alert(scripts);
                    //chrome.tabs.executeScript({file:'js/test.js'});
                    //chrome.tabs.executeScript({file:'js/test.js'});
                });
            } else {
                //init
                chrome.storage.sync.set({
                    "scripts_order":[]
                })
            }
        });
    }
});