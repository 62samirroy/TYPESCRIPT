
// let num2:any;
// num2=5;
// num2="Samir";
// num2=true;
// if(typeof num2==="number")
// {
//     console.log(num2+5);
// }

async function fatchdata():Promise<unknown> {
    const responce=await fetch("https:/api.example.com/data");
    const data= await responce.json();
    return data;
}

async function prossesdata() {
    
    const responce=await fatchdata();
    if(responce==="object")
    {
        // Performance.operations.on.the.responce.object;
        console.log(responce);
        
        
    }
    else{
        console.log("Error");
    }
} 
prossesdata();