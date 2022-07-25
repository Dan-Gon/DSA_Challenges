
const WPSF = (l,w,h) =>{
    return 2*(l*w) + 2 * (l * h) + 2 * (h * w);
}
console.log("Your answer is: " + WPSF(2,3,4) + " SQFT");