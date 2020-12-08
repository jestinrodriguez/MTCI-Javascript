// Given 2 arrays, create a function 
//that let's a user know (true/false) 
//whether these two arrays contain any common items



// For example:

// const array1 = ['a', 'b', 'c', 'x'];
// const array2 = ['z', 'y', 'i'];
// should return false

//-----------------

// const array1 = ['a', 'b', 'c', 'x'];
// const array2 = ['z', 'y', 'x'];
// should return true

// 2 parameters - arrays -  no size limit
// return true or false

// brute approach - O(n^2)
// O(a*b) - time complexity
// O(1) - space complexity
// Nested loops



//  const array1 = ['a', 'b', 'c', 'x'];
//  const array2 = ['z', 'y', 'x'];

// function containsCommonItem(arr1,arr2){
//     for (let i =0; i<arr1.length; i++){
//         for (let j = 0; i<arr2.length; j++){

//             if(arr1[i] === arr2[j]){
//                 return true;
//             }
//         }
//     }
//     return false;
// }

// comtainsCommonItem(array1,array2);



//  const array1 = ['a', 'b', 'c', 'x'];
//  const array2 = ['z', 'y', 'x'];


// array1 ==> obj {
// a: true,
// b: true,
// c: true,
// x: true
//}

// array2[index] === obj.properties



// assuming there are always 2 parameters
 const array1 = ['a', 'b', 'c', 'x'];
 const array2 = ['z', 'y', 'x'];

function containsCommonItem2(arr1,arr2){

    // loop through first array and create object where 
    // properties === items in the array

    let map = {};
    for (let i =0; i < arr1.length; i++){
        if(!map[array1[i]]){ // if item does not exist add it
            const item = arr1[1];
            map[item] = true;
            // {
            // a: true;
            // }
        }
    } 


    //console.log(map)


    // loop through second array and check if item in second array
    // exists on created object
       
    for ( let j = 0; j < arr2.length; j++){
        if(map[arr2[j]]){ // if it contains that value in map
            return true;
        }
    }

    return false;

    // O(a+b) Time complexity
    // O(a) Space Complexity

}

containsCommonItem2(array1,array2);


function containsCommonItem3(arr1,arr2){ 
    return arr1.some(item => arr2.includes(item))
}

