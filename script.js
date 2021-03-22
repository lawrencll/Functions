var wrap = document.body.querySelector(".wrapper")
var dragon = document.createElement("div");
var win = document.createElement("div");
var draghealth = 0;
dragon.innerHTML="Dragon Damage:" + draghealth;
wrap.appendChild(dragon);

function attackType(damage, type){
  
  if(type === "fire"){
    damage = damage - 1;
  }
  else if(type === "ice"){
    damage = damage + 1;
  }
  else{
    damage;
  }
  
  var draghealth = damage + damage;
 
  wrap.appendChild(dragon);
  
}

document.body.querySelector(".fire").addEventListener("click", function(){
  
  attackType(3, "fire");                                                      
})

document.body.querySelector(".ice").addEventListener("click", function(){
  
  attackType(1, "ice");                                                      
})

document.body.querySelector(".poison").addEventListener("click", function(){
  
  attackType(4, "poison");                                                      
})

//if(draghealth == 10){
  //win.innerHTML="You Win!"
//}