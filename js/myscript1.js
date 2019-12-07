chrome.storage.sync.get("myscript1",function(data){
    try {
        let obj=document.querySelector(data.myscript1);
        obj.click();
    } catch(e) {
        alert("Check option. "+data.myscript1);

    }
});