    var it = 0;
    const size = urls.length-1;
    const loc = window.location.pathname;
    const dir = loc.substring(0, loc.lastIndexOf('/'));
    const displayWidth = document.getElementById("display").width;
    const displayHeight = document.getElementById("display").height;
    const displayRes = "height="+displayHeight+" width="+displayWidth;
    
    // for local files, activate in browser console
    var local = 0;
    const localFileType = 
        [".jpg",
        ".gif",
        ".jpg",
        ".jpg",
        ".jpeg"];

function initialize(){
    
}

function loadImg(){
    //document.getElementById("display").src = dir+"/images/2.gif";
    document.getElementById("display").src = dir+"/images/loading.gif";
    
    var srcPath;
    if(local){
        srcPath = dir+"/images/"+it+localFileType[it];
    }
    
    document.getElementById("display").src = srcPath;
    document.getElementById("source").innerHTML = "<span>Source: </span><a>"+srcPath+"</a>";
    
    if (it == size){
        document.getElementById("next_button").classList.add("disabled");
    }else if(it == 0){
        document.getElementById("back_button").classList.add("disabled");
    }else{
        // There's probably a better wy of removing class="disabled"
        var disabledList = document.getElementsByClassName("disabled");
        if(disabledList.length){disabledList[0].classList.remove("disabled");}
    }
}

function nextImage() {
    if(it < size){
        ++it;
        loadImg();
    }
}

function previousImage() {
    if(it > 0){
        --it;
        loadImg();
    }
}
