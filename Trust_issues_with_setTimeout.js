console.log("Start")

function xyz(){
    console.log("function is executed");
}

var b = function (){
    console.log("function without name is called");
}
xyz();
b();


setTimeout(function c(){
    console.log("Callback");
},0);

console.log("end");