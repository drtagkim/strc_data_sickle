//
function clearMemory(objURL) {
    if (window.__Xr_objURL_forCreatingFile__) {
        window.URL.revokeObjectURL(window.__Xr_objURL_forCreatingFile__);
    }
    window.__Xr_objURL_forCreatingFile__ = objURL;
}
function writeFile(data) {
    var blob;
    blob=new Blob([data],{type:'text/plain'});
    objURL=window.URL.createObjectURL(blob);
    clearMemory(objURL);
    chrome.storage.sync.get("dateMarking",function(data){
        if(data.dateMarking) {
            chrome.storage.sync.get("file_prefix",function(data){
                var prefix=data.file_prefix;
                var a = document.createElement('a');
                var file_date=new Date();
                file_date=file_date.toGMTString();
                a.href = objURL;
                a.download=prefix+"("+file_date+").html";
                a.click();
            });
        } else {
            chrome.storage.sync.get("currentNum",function(data){
                var cn=data.currentNum;
                chrome.storage.sync.get("file_prefix",function(data){
                    var prefix=data.file_prefix;
                    var a = document.createElement('a');
                    a.href = objURL;
                    a.download=prefix+("000000000000"+cn).slice(-6)+".html";
                    a.click();
                    cn=cn+1;
                    chrome.storage.sync.set({
                        "currentNum":cn
                    },function(){});
                });
            });
        }
    });
    chrome.storage.sync.get("file_prefix",function(data){
        
        //file name setting
        
        
        
    });
}
content=document.body.innerHTML;

writeFile(content);