const input = _=>{
    document.onkeydown = function (e){
	    if(!e) e = window.event;
        click_key[e.keyCode] = !input_key[e.keyCode]; 
        input_key[e.keyCode] = true;
    console.log(input_key[37]);
    }
    document.onkeyup = function (e){
        if(!e) e = window.event;
        click_key[e.keyCode] = false;
        input_key[e.keyCode] = false;
    }
}
