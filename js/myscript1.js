chrome.storage.sync.get("myscript1",function(data){
    let obj=document.querySelector(data.myscript1);
    try {
        let obj=document.querySelector(data.myscript1);
        obj.click();
    } catch(e) {
        alert("Check option.");
    }
});