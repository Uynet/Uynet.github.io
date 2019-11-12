let easeout = (t) => {
  return (t-1)*(t-1)+1;
}

let ease = function*(){
    let t = 0;
  while(t<1){
    t += 0.1;
    yield easeout(t);
  }
}
