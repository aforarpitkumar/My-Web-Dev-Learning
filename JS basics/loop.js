let sum = 0;

let n = 1;
let m = 5; 

for ( n; n<=m; n++ ) {

    sum = sum + n;
    //console.log(sum);
}

// console.log(sum);
// console.log(n);

let newsum = 0;

let x = 5;

while (  x > 0){

    newsum = newsum +x;
    x--;

}

//console.log(newsum);
let array1 = [2,3,6];

let array2 = [];

// for (let i =0; i<array1.length; i++){

// array2.push(array1[i]*2)

// }

console.log(array2)

let i = 0;

while ( i  < array1.length){

array2.push(array1[i]*2);
i++;
}

console.log(array2)




var dfg =[];

array1.forEach(element => {

    if ( element == 6){

        return;

    }

dfg.push(element);
    
});

console.log(dfg);

