const fs = require('fs');
const path = require('path');

const logsDir = path.join(__dirname, 'Logs');

const createLogFiles = () => {
    if (!fs.existsSync(logsDir)) {
        fs.mkdirSync(logsDir);
        console.log('Logs directory has been created at:', logsDir);
    }

    process.chdir(logsDir);

    for (let i = 0; i < 10; i++) {  
        const logFileName = `log${i}.txt`;  
        fs.writeFileSync(logFileName, `This is log file number ${i}`);
        console.log( logFileName);
    }
};

createLogFiles();
