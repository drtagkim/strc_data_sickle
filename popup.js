const btn2=document.querySelector("#chooseFile"); //2
const btn3=document.querySelector("#myscript1"); //3
const btn4=document.querySelector("#myscript2"); //1
const btn1=document.querySelector("#scrollDown"); //4
const chkopt1=document.querySelector("#chkopt1");
const chkopt2=document.querySelector("#chkopt2");
const chkopt3=document.querySelector("#chkopt3");
const chkopt4=document.querySelector("#chkopt4");
const btn_auto=document.querySelector("#btn_auto");
const auto_msg=$("#auto_msg");
const n_auto=$("#n_auto");
//
btn_auto.disabled=true;
n_auto.disabled=true;
//
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
    window.close();
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

btn4.addEventListener('click',function(e){
    chrome.tabs.query({
        active:true,
        currentWindow:true
    },function(tabs){
        chrome.tabs.executeScript({
            file:'js/myscript2.js'
        });
    });
    window.close();
});
const chkauto=(obj)=> {
    let j=obj.checked||chkopt2.checked||chkopt3.checked||chkopt4.checked;
    if(j) {
        btn_auto.disabled=false;
        n_auto.disabled=false;
    } else {
        btn_auto.disabled=true;
        n_auto.disabled=true;
    }
}
chkopt1.addEventListener('click',function(e){
    chkauto(this);
    
});
chkopt2.addEventListener('click',function(e){
    chkauto(this);
});
chkopt3.addEventListener('click',function(e){
    chkauto(this);
});
chkopt4.addEventListener('click',function(e){
    chkauto(this);
});
