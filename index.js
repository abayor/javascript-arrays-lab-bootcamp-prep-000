const app = "I don't do much."
 var kittens = ['Milo', 'Otis', 'Garfield'];
 
 function destructivelyAppendKitten(name){
 //kittens = ['Milo', 'Otis', 'Garfield']
  kittens.push("Ralph")
}

function destructivelyPrependKitten(name){
  kittens.unshift("Bob")
}

function destructivelyRemoveLastKitten(){
  kittens.pop()
}

function destructivelyRemoveFirstKitten(){
  kittens.shift()
}
/*
function appendKitten(name) {
  var newArray = [
    kittens[0],
    kittens[1],
    kittens[2],
    name
  ];
  return newArray;
};*/
function appendKitten(name){
  var newArray = new Kittens[]
   newArray.push("Broom")
   return newArray
   
}

function prependKitten(name){
    kittens.pop("Broom")
}
