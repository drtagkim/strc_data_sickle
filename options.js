var filePrefix=document.querySelector("#filePrefix");
var updateButton=document.querySelector("#updateButton");
var setButton=document.querySelector("#setButton");
//setting
chrome.storage.sync.get("file_prefix",function(data){     
    filePrefix.value=data.file_prefix;
});
chrome.storage.sync.get("dateMarking",function(data){
    let chk=$("#chkMarking");
    chk.attr("checked",data.dateMarking);
});
chrome.storage.sync.get("currentNum",function(data){
    let txt=$("#currentNum");
    txt.val(data.currentNum);
});

//event
updateButton.addEventListener("click",function(e){
    chrome.storage.sync.set({
        "file_prefix":filePrefix.value
    },function(){
        let msg1=$("#msg1");
        msg1.text("Prefix updated.");
        msg1.fadeOut(1000,function(){
            location.reload();
        });
    });
});
setButton.addEventListener("click",function(e){
    let txt=$("#currentNum");
    let cn=parseInt(txt.val());
    chrome.storage.sync.set({
        "currentNum":cn
    },function(){
        let msg2=$("#msg2");
        msg2.text("Number updated");
        msg2.fadeOut(1000,function(){
            location.reload();
        });
    });
});
//Checkboxes
var chkMarking=$("#chkMarking");
chkMarking.on("click",function(){
    let value=$(this).is(":checked");
    chrome.storage.sync.set({
        "dateMarking":value
    },function(){});
});
