// log all pairs of array



const boxes = ['a','b','c','d','e'];


function logAllPairsofArray(array){

    for (let i = 0 ; i < array.length; i++){

        for(let j = 0; j < array.length; j++){
    
            // logging out the item in the array not the index
            console.log(array[i],array[j]);
        }
    }
}

logAllPairsofArray(boxes);


