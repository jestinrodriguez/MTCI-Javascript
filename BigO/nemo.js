// O(n) - Linear Time
//  Linear for loops, while loops through n items
// n depends on the number of inputs 

const nemo =['nemo'];

const everyone = ['dory', 'bruce', 'marlin', 'nigel', 'squirt', 
                    'gill', 'bloat'];

const large = new Array(100).fill('nemo');
 
function findNemo(array){
    for (let i = 0; i < array.length; i++){
        console.log('running')
        if (array [i] ===  'nemo'){
            console.log('FOUND NEMO')
            break; // break out of loop is nemo is found
        }
    }
}

findNemo(large); 


// other way of looping in JS

const findNemo2 = array =>{
    array.forEach(fish=>{
        if (fish === 'nemo'){
            console.log('Found nemo');
        }
    })
}



const findNemo3 = array =>{
    for(let fish of array){
        if (fish === 'nemo'){
            console.log('Found nemo');
        }
    }
}