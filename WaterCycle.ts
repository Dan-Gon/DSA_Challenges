const aqueousCycler = (hours: number) =>{
    let waterAmt: number = 0.5;
    return Math.floor(hours * waterAmt);
}
console.log(aqueousCycler(10))