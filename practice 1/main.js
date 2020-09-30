    const urls = 
        ["https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/delish-homemade-pizza-horizontal-1542312378.png",
        "https://www.kingarthurbaking.com/sites/default/files/recipe_legacy/1418-3-large.jpg",
        "https://image.shutterstock.com/image-photo/pepperoni-pizza-on-wooden-board-260nw-562149826.jpg","https://imagesvc.meredithcorp.io/v3/mm/image?q=85&c=sc&poi=face&w=3264&h=1709&url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F4563133.jpg","https://img.sndimg.com/food/image/upload/v1/img/recipes/35/80/5/f8tRhe2XSlutilxCgkeM_easy%20peezy%20pizza%20dough%20SITE-3.jpg"];

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
    loadImg();
}

function loadImg(){
    //document.getElementById("display").src = dir+"/images/2.gif";
    document.getElementById("display").src = dir+"/images/loading.gif";
    
    var srcPath;
    if(local){
        srcPath = dir+"/images/"+it+localFileType[it];
    }else{
       srcPath = urls[it];
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
