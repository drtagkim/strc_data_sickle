chrome.runtime.onInstalled.addListener(function(){
    chrome.storage.sync.set({
        "file_prefix":"strc_",
        "currentNum":1,
        "dateMarking":true,
        "myscript1":"",
        "myscript2":"",
        "n_auto_var":3,
        "automatic":false,
        "scripts":[],
    },function(){
        console.log("install complete.");
    });
});
chrome.downloads.onChanged.addListener((d)=>{
    if('state' in d && d.state.current==='complete') {
        chrome.storage.sync.get(["n_auto_var","automatic","scripts"],(data)=>{
            let n_auto_var=data.n_auto_var;
            if(n_auto_var>0 && data.automatic) {
                chrome.tabs.query({
                    active:true,
                    currentWindow:true
                },function(tabs){
                    let scripts=data.scripts;
                    for(s of scripts) {
                        chrome.tabs.executeScript({file:s});
                    }
                });
                console.log("[Automatic mode] Auto var:"+n_auto_var);
                chrome.storage.sync.set({
                    "n_auto_var":--n_auto_var
                })
            } else {
                //init
                chrome.storage.sync.set({
                    "automatic":false
                })
            }
        });
    }
});