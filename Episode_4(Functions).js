var x =1;
a();
b();

console.log(x);

function a(){
    var x =10; // local memory and console will look in the local memory 
    console.log(x);
}

function b(){
    var x =100;
    console.log(x);
}