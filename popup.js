let btn1=document.querySelector("#scrollDown");
let btn2=document.querySelector("#chooseFile");
let btn3=document.querySelector("#myscript1");

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

btn3.addEventListener('click',function(e){
    chrome.tabs.query({
        active:true,
        currentWindow:true
    },function(tabs){
        chrome.tabs.executeScript({
            file:'js/myscript1.js'
        });
    });
    window.close();
});