// TODO: Change the values and operators below to test your algorithm meets all conditions
var x = 50;
var expression1 = x < 25;
var expression2 = x > 50;

// TODO: Write Your JavaScript Code Here


if(expression1 && expression2){
    console.log('ture✅ true✅');
}


else if(expression1){
    console.log('true✅ false❌');
}


else if(expression2){
    console.log('false❌ true✅');
}


else{
    console.log('false❌ false❌');
}

switch (expression1 && expression2)
{
    case (x > 25 && x < 50):
        console.log('ture');
        break;
    case (x < 25 && x > 50):
        console.log('false');
        break;
}



 
