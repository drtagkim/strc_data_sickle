let btn1=document.querySelector("#scrollDown");
let btn2=document.querySelector("#chooseFile"); 

btn1.addEventListener('click',function(e){
    chrome.tabs.query({active:true,currentWindow:true},function(tabs){
        chrome.tabs.executeScript({file:'js/scrolldown.js'})
    });
});

btn2.addEventListener('click',function(e){
    var content;
    var file_date;
    chrome.tabs.query({
        active:true,
        currentWindow:true
    },function(tabs){
        chrome.tabs.executeScript(
            {file:'js/content.js'}
        );
    });
});