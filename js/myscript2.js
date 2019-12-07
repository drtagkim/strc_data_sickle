chrome.storage.sync.get("myscript2",function(data){
    try {
        let objs=document.querySelectorAll(data.myscript2);
        objs.forEach(function(item){
            item.click();
        });
    } catch(e) {
        alert("Check option. "+data.myscript2);
    }
});