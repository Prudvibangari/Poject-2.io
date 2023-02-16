var mainheading=document.getElementById('main-heading');
var increasefont=document.getElementById('incfont');
var decreasefont=document.getElementById('decfont');

var initialfontsize=window.getComputedStyle(mainheading).fontSize;
initialfontsize=parseInt(initialfontsize.substring(0,(initialfontsize.length - 2)));

increasefont.addEventListener('click',function(){
    initialfontsize += 10;
    mainheading.style.fontSize=initialfontsize+"px";
})
decreasefont.addEventListener('click',function(){
    initialfontsize -= 10;
    mainheading.style.fontSize=initialfontsize+"px";
})