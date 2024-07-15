const cats = ["Milo", "Otis", "Garfield"];
console.log(cats);

function destructivelyAppendCat(name){
   cats.push(name);
   console.log(cats);

}

function destructivelyPrependCat(name){
    cats.pop();
    cats.unshift(name);
    console.log(cats);    
}
function destructivelyRemoveLastCat(){
    cats.shift();
    cats.pop();
    console.log(cats);
}

function destructivelyRemoveFirstCat(){
    cats.push("Garfield");
    cats.shift();

}

function appendCat(name){
     cats.unshift("Milo");
     let newCats = [...cats, name];
     console.log(newCats);
     return newCats;

}
function prependCat(name){
    return [name,...cats];
}
function removeLastCat(){ 

    return cats.slice(0,2); 
}
    function removeFirstCat(){
       return cats.slice(1);
    }
 