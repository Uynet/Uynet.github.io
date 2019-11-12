class Effect{
  constructor(){
    //振動
    this.shake = function*(depthX,depthY){
      while(Math.abs(depthX) + Math.abs(depthY)>0.1){
        ctx.translate(depthX*2*(Math.random()-0.5),depthY*2*(Math.random()-0.5));
        depthX*=(-0.6-0.2*Math.random())
        depthY*=(-0.6-0.2*Math.random())
        yield;
      }
    }
    this.rot = function*(){
      while(0){
        yield;
      }
    }
    return;
  }
}

const EffectHandlerGetter = _=>{
  if(EffectHandler == undefined){
    EffectHandler = new Effect();
  }
  return EffectHandler;
}

