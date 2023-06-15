  
// import the function sum from the app.js file
const { sum } = require('./app.js');

// start your first test
test('adds 14 + 9 to equal 23', () => {
//inside the test we call our sum function with 2 numbers
    let total = sum(14, 9);

    // we expect the sum of those 2 numbers to be 23
    expect(total).toBe(23);
});


test("One euro should be 1.206 dollars", function(){
    //import the function from app.js
    const { fromEuroToDollar } = require('./app.js')

    // use the function like its suppoed to be used
    const dollars = fromEuroToDollar(3.5)

    // if 1 euro are 1.206 dollars, then 3.5 euros should be (3.5 * 1.2)
    const expected = 3.5 * 1.2; 

  
    // this is the comparison for the unit test
     expect(fromEuroToDollar(3.5)).toBe(4.2); //1 euro are 1.2 dolares, then 3.5 euros should be = (3.5 * 1.2)
})

test("one dollar should be (127.9/1.2) yens",() => {
    //import the funtion from app.js
    const { fromDollarToYen } = require('./app.js')

    //using the funtion 
    const yens = fromDollarToYen(12)
    //if 1 dollar is (127.9/1.2)yens then 12 dollars should be 12*(127.9/1.2)
    const expected = 12*(127.9/1.2)
    //comparison for unit test
    expect(fromDollarToYen(12)).toBe(1279);// 12 dollars should be 1279 yens
})
test("one yen should be (0.8/127.9)pounds", ()=>{
    //import the funtion fron app.js
    const { fromYenToPound} = require('./app.js')
    //use the funtion
    const pounds = fromYenToPound(1279)
    //if one yen is (0.8/127.9)pounds then 1279 yens should be 1279*(0.8/127.9)
    const expected = 1279*(0.8/127.9)
    //comparison for unit test
    expect(fromYenToPound(1279)).toBe(8);//1279 yens should be 8 pounds
})