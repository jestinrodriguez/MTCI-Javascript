function printFirstItemThenFirstHalThenSayHi100Times(items){
    console.log(items[0]); // O(1)

    // floor - to get a whole number
    var middleIndex = Math.floor(items.length/2); //O(1)
    var index = 0; // O(1)

    while (index < middleIndex){ // O(n)
        console.log(items[index]);// O(n)
        index++;// O(n)
    }

    for (var i = 0; i < 100; i++){// O(n)
        console.log('hi'); // O(n)
    }

} 

//Big O 3 + 5n -> my answer

// correct answer
// O(1 + n/2 + 100)
// O(n + 1)
// O(n) 


// 2 for loops not together

//for loop O(n)

//for loop O(n)

// Big O(2n) = O(n)

