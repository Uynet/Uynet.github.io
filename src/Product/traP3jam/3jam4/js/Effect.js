class Effect{
  constructor(){
    this.shake = function*(depthX,depthY){
      while(Math.abs(depthX) + Math.abs(depthY)>0.1){
        ctx.translate(depthX*2*(Math.random()-0.5),depthY*2*(Math.random()-0.5));
        depthX*=(-0.6-0.2*Math.random())
        depthY*=(-0.6-0.2*Math.random())
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

