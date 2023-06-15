// we declare the function with the exact name "fromEuroToDollar"
const fromEuroToDollar = function(valueInEuro){
    // convert the given valueInEuro to dollars
    let valueInDollar = valueInEuro * 1.2;
    //return the dollar value
    return valueInDollar;
}

const fromDollarToYen = function(valueInDollar){
    //convert the given valueInDollar to Yen with given data.
    let valueInYen = (valueInDollar/1.2)*127.9; 
    //return the Yen value
    return valueInYen;
}

const fromYenToPound = function(valueInYen){
    //convert the given valueInYen to Pound with given data.
    let valueInPound = (valueInYen/127.9)*0.8;
    // return valueInPound
    return valueInPound;
}

// this is my function that sums two numbers
const sum = (a,b) => {
    return a + b
}

// just a console log for ourselves.
console.log(sum(7,3))

// export the function to be used on other files 
// (similar to the keyword `export` when using webpack)
// we include fromEuroToDollar here as well because it needs to be exported
module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound }

