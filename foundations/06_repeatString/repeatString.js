const repeatString = function(string, iterationTimes) {
    let index = 0;
    let returnString = "";
    while(index<iterationTimes){
        returnString += string;
        index++;
    }
    return returnString;
};

// Do not edit below this line
module.exports = repeatString;
