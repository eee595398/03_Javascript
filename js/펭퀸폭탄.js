

(function(){document.getElementById("pe").addEventListener("keydown",function(e){

    const pe = document.createElement("pe");

    const key = e.keyCode;

    let y = parseInt(pe.style.top || 0, 10);
    
    let x = parseInt(pe.style.left || 0, 10);
    
    
    
    
    if (key === 37 /* LEFT */) {
    
    pe.style.left = x - 50 + "px";
    
    }
    
    if (key === 38 /* TOP */) {
    
    pe.style.top = y - 50 + "px";
    
    }
    
    if (key === 39 /* RIGHT */) {
    
    pe.style.left = x + 50 + "px";
    
    }
    
    if (key === 40 /* BOTTOM */) {
    
     pe.style.top = y + 50 + "px";
    
    }


    pe.setAttribute("scr","이미지/boom.png");




});

})();