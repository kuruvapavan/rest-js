function show(...args){
    let add=1;
    for(let i of args){
        add += i;
    }
    console.log("addition =" +add);

}
show(4+5+6+7+8+9);