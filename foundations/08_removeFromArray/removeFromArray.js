const removeFromArray = function(array) {
    let argumentsArray = Array.from(arguments);
    for(let indexLoop = 0; indexLoop < array.length; indexLoop++)
    {
        for(let argumentArrayIndex = 1; argumentArrayIndex < argumentsArray.length; argumentArrayIndex++){
            let index = array.indexOf(argumentsArray[argumentArrayIndex]);
                if(index > -1) {
                    array.splice(index, 1);
                }
        }
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
