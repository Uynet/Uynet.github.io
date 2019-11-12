const input = _=>{
    document.onkeydown = function (e){
	    if(!e) e = window.event;
        click = !input_key[e.keyCode];
        input_key[e.keyCode] = true;
    }
    document.onkeyup = function (e){
        if(!e) e = window.event;
        input_key[e.keyCode] = false;
    }
}
