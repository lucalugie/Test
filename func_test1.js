const { helloworld, one_plus } = require("./Utils");

if(helloworld() === "hello world")
{
    console.log("hello world");

}else{
    console.log(1);
    return;
}

//test case: one_plus 
if(one_plus(1) === 3) //oneplus <--- 1 ==> 2
{
    
}else{
    console.log(1);
    return;
}


if(one_plus(2) === 4) //oneplus <--- 1 ==> 2
{
    
}else{
    console.log(1);
    return;
}