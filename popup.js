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
const auto_opt_order1=$("#auto_opt_order1");
const auto_opt_order2=$("#auto_opt_order2");
const auto_opt_order3=$("#auto_opt_order3");
const auto_opt_order4=$("#auto_opt_order4");
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
//
btn_auto.addEventListener('click',(event)=>{
    let scripts=['js/myscript2.js','js/content.js','js/myscript1.js','js/scrolldown.js'];
    let script_order=[null,null,null,null];
    let n_auto_val=n_auto.val();
    if(chkopt1.checked) {
        script_order[auto_opt_order1.children("option:selected").val()]=scripts[0];
    }
    if(chkopt2.checked) {
        script_order[auto_opt_order2.children("option:selected").val()]=scripts[1];
    }
    if(chkopt3.checked) {
        script_order[auto_opt_order3.children("option:selected").val()]=scripts[2];
    }
    if(chkopt4.checked) {
        script_order[auto_opt_order4.children("option:selected").val()]=scripts[3];
    }
    script_order=script_order.filter((e1)=>{
        return e1!=null;
    });
    
    chrome.storage.sync.set({
        "n_auto_var":n_auto_val
    })
    chrome.tabs.query({
        active:true,
        currentWindow:true
    },function(tabs){
        for(s of script_order) {
                chrome.tabs.executeScript({
                    file:s
                });
        } 
    });
    chrome.storage.sync.set({"scripts":script_order});
    chrome.storage.sync.get("n_auto_var",(data)=>{
        let n_auto_var=data.n_auto_var;
        chrome.storage.sync.set({
            "n_auto_var":--n_auto_var,
            "automatic":true
        })
    });
});
