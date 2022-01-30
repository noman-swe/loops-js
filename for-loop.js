
for(var i = 1; i < 10; i++) {
    console.log('Go ' + i + ' step');
}




// for(var n = 1; n <= 20 ; n++){
//     console.log( 'Number ' + n);
// }

//do while loop
// let result = '';
// let i = 0;

// do {
//   i = i + 1;
//   result = result + i;
// } while (i < 5);

// console.log(result);

// var num;

// do {
//     console.log('Inside the Loop');
//     num = prompt('Enter the number: ');
// } while(num < 10);

// console.log('Outside the Loop');


/*
do{
    var name = 'shibly';
}while( name == true)
{
    console.log("Bike kina dew..")
};
*/

//while loop

// var num = 1;
// while(num < 5){
//      console.log('my no $ ' + num);
//      num++;
// }


//array & loop
var arrName = ['Masud', 'Mehedi', 'Manik', 'Bashir', 'Ammu'];
arrName.push('Fahim'); 
arrName.push('Afik');
arrName.unshift('Shafiq');
for(var i = 0; i < arrName.length; i++){
    console.log("Name: " + arrName[i]);
}