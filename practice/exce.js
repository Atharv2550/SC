let age = 1;

try{
    if(age<18){
        throw new Error("Age is Must above 18")
    }
    console.log("Age is "+age)
}
catch(e){
    console.log(e.message)
}
finally{
    console.log("Executed finally")
}