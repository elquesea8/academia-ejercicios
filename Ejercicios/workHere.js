var billionaires = require('./billionaires.json');
/*
    Get the names of the billionaires that are in their 20s
*/

let twentyYearOldBillionaires = billionaires.filter(Element =>{
    if(Element.demographics.age>=20&&Element.demographics.age<=29){
        return Element.name;
    }
});
    
    
    
/*
    create a new object with the billionairse year, name and worth rounded to the newarest integer
    {
        year: 1996,
        name: Bernardo Garza Sada,
        worth: 2
    }
*/

let roundedWorth = billionaires.map(Element =>{
    return{
        year: Element.year,
        name: Element.name,
        worth: Math.round(Element. worth)
    }
})

/*
    sum the rounded worth of all the billionaires
*/

let aggregatedWorth = billionaires.reduce((prev, curr) => {
    return prev + Math.round(curr.wealth);
    }, 0);
 console.log(aggregatedWorth)

/*
    find the the richest billionaire, make sure the result is in an array
*/

let richest = null;

/*
    find the poorest billioanire, make sure the result is in an array
*/

let poorest = null;

/*
    make a new array containing the richest and the poorest billionaire
*/

let richAndPoor = null;

module.exports = {
    twentyYearOldBillionaires,
    roundedWorth,
    aggregatedWorth,
    richest,
    poorest,
    richAndPoor
};