const lowerCaseWords = (mixedArrays) =>{
    return new Promise((resolve,rejected) => {
        if(!Array.isArray(mixedArrays)){
            reject(new Error("This is not the correct array"));
            return
        }
        const filteredArray = mixedArrays
        .filter(item => typeof item === 'string')
        .map(word => word.toLowerCase());
        resolve(filteredArray);

    });
}

const mixedArrays = ['PIZZA',10,true,25,false,'Wings'];
lowerCaseWords(mixedArrays)
    .then(result => console.log("It returns strings in LowerCase",result))
    .catch(error => console.error(error));
  
