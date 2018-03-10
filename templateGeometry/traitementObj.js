function setPosition(id1, valx, valy, valz) {
    //console.log(id);
    var object = sac3DObject.getObjectById(id1);
    object.position.set(valx, valy, valz);
}

function setScale(id2, val) {
    var object = sac3DObject.getObjectById(id2);
    object.scale.set(val, val, val);
}

function setColor(id3, val) {
    var object = sac3DObject.getObjectById(id3);
    object.material.color.setHex(val.replace("#", "0x"));
}

function deleteElement(id3) {
  console.log(id3);
  console.log(sac3DObject);
    var object = sac3DObject.getObjectById(id3);
    object.geometry.dispose();
    sac3DObject.remove(object);
   // console.log(sac3DObject.children.length);
    /*if ((id3 == 0) && (sac3DObject.children.length !== 0)) {
        menuUpdate(id3);
    } else if (id3 > 0) {
        menuUpdate(id3 - 1);
    } else {
        menuP.close();
    }*/
}

function positionScene(axe,number){
  var x = camera.position.x
  var y = camera.position.y
  var z = camera.position.z
  switch(axe){
    case "x":
      camera.position.set(number, y, z);
      break;
    case "y":
      camera.position.set(x, number, z);
      break;
    case "z":
      camera.position.set(x, y, number);
      break;
    default:
      camera.position.set(x, y, z);
      break;
  }
}

function rotateScene(mode){
  if(mode=="on"){
    animation="on";
  }else if(mode=="off"){
    animation="off;"
  }
}
