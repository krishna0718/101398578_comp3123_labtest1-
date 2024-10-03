const delayedSuccess = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ message: 'delayed success!' });
        }, 500);
    });
}


const delayedException = () => {
    return new Promise((_, reject) => {
        setTimeout(() => {
            reject({ error: 'delayed exception!' });
        }, 500);
    });
}


delayedSuccess()
    .then(result => console.log(result))  
    .catch(error => console.error(error));


delayedException()
    .then(result => console.log(result))
    .catch(error => console.error(error));




