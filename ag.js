function storeinput(){
    const inputarry=[];
    const input1=document.getElementById("sub");
    const input2=document.getElementById("name");
    const value1=input1.value;
    const value2=input2.value;
    inputarry.push(value1);
    inputarry.push(value2);
    console.log(inputarry);
}