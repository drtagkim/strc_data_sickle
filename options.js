var filePrefix=document.querySelector("#filePrefix");
var updateButton=document.querySelector("#updateButton");
var setButton=document.querySelector("#setButton");
var updateScript1Button=document.querySelector("#updatescript1");
var clearSCript1Button=document.querySelector("#clearscript1");
var updateScript2Button=document.querySelector("#updatescript2");
var clearSCript2Button=document.querySelector("#clearscript2");
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
chrome.storage.sync.get("myscript1",function(data){
    let txt=$("#myscriptarea1");
    txt.val(data.myscript1);
});
chrome.storage.sync.get("myscript2",function(data){
    let txt=$("#myscriptarea2");
    txt.val(data.myscript1);
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
updateScript1Button.addEventListener("click",function(e){
    let txt=$("#myscriptarea1");
    let content=txt.val();
    chrome.storage.sync.set({
        "myscript1":content
    },function(){
        let msg3=$("#msg3");
        msg3.text("Script updated");
        msg3.fadeOut(1000,function(){
            location.reload();
        });
    });
});
clearSCript1Button.addEventListener("click",function(e){
    let obj=$("#myscriptarea1");
    obj.val("");
});
updateScript2Button.addEventListener("click",function(e){
    let txt=$("#myscriptarea2");
    let content=txt.val();
    chrome.storage.sync.set({
        "myscript2":content
    },function(){
        let msg3=$("#msg4");
        msg3.text("Script updated");
        msg3.fadeOut(1000,function(){
            location.reload();
        });
    });
});
clearSCript2Button.addEventListener("click",function(e){
    let obj=$("#myscriptarea2");
    obj.val("");
});
//Checkboxes
var chkMarking=$("#chkMarking");
chkMarking.on("click",function(){
    let value=$(this).is(":checked");
    chrome.storage.sync.set({
        "dateMarking":value
    },function(){});
});
