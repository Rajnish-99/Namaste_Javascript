// major adv of closures is that it helps in data hiding and encapsulation 

// example is below 
function checks()
{
    var counter =0;
    function increcounter()  // return function inrecounter // this can also be used in returning the value
    {
        counter++;
        console.log(counter);
    }
    return increcounter; // either this way of returning
}
checks()();
checks()();

var piku = checks();
piku();
piku();