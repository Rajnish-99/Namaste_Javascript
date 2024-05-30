// function outer(b)
// {
//     // innner function makes a closure with the outer environment and b is a part of outer environment therefore this will work fine
//     var a =10;
//     function inner()
//     {
//         console.log(a,b,c);
//     }
//     let c =2000;
//     return inner;
// }

function outest()
{
    let d =1000;
    function outer(b)
{
    // innner function makes a closure with the outer environment and b is a part of outer environment therefore this will work fine
    var a =10;
    function inner()
    {
        console.log(a,b,c,d);
    }
    let c =2000;
    return inner;
}
return outer;
}
let a =1000;// this is new varibale in global scope 
console.log(a)
let ans = outest()("Ranuuddi"); // this is how calling done if the another function has the parameter
ans();