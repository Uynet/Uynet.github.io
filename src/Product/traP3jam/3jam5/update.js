const update = _=>{
  ctx.restore();
  ctx.save();
      /*update Entity object */
      for(i=0;i<Entities.length;i++){
        Entities[i].update();
        if(Entities[i].size>800){
            Entities.splice(i,1);
        }
  }
}
