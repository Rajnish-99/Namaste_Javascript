// making scalable using the constructor function

function Counter()
{
    var count =0;
    this.incrementcounter = function(){
        count++;
        console.log(count);
    }

    this.decrementcounter = function()
    { 
        count --;
        console.log(count);
    }
 
    

}

var counter1 = new Counter();
    // new is used to create using constructor function
    counter1.incrementcounter();
    counter1.decrementcounter();
    counter1.decrementcounter();
    counter1.decrementcounter();