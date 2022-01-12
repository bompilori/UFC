// TODO: Write Your JavaScript Code Here
function isEqual(x,y)
{
    if(x === y)
    {
        console.log('They are equal in type and value');
    }
    else if(x==y)
    {
        console.log('They are equal in value');
    }
    else
    {
        console.log('They are not equal');
    }
    return;
}
//logs equal in type and value
isEqual(10,10);
//los equal in value
isEqual('10',10);

var isEqualTakeTwo = function(x,y)
{
    if(x === y)
    {
        console.log('They are equal in type and value');
    }
    else if(x = y)
    {
        console.log('they are equal in value');
    }
    else
    {
        console.log('they are not equal');
    }
    return;
}

// not equal value
isEqualTakeTwo(10,true);