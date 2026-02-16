const sumAll = function(startRange, endRange) {
    if(Number.isInteger(startRange) && Number.isInteger(endRange) &&
       startRange >= 0 && endRange >= 0)
    {
    let sum = 0;
    let index = startRange;
    if(startRange < endRange)
    {
    while((index <= endRange)){
        sum += index;
        index++;
    }
    }
    else {
    while((index >= endRange)){
        sum += index;
        index--;
    }
    }
        return sum;
    }
    else
    {
        return "ERROR"
    }
};

// Do not edit below this line
module.exports = sumAll;
