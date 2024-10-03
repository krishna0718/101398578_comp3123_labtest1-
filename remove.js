const fs = require('fs');
const path = require('path');

const logsDir = path.join(__dirname, 'Logs');

const remove = () => {
    if (fs.existsSync(logsDir)) {
        const files = fs.readdirSync(logsDir);
        
        if (files.length > 0) {
            console.log("deleting log files:");
            files.forEach(file => {
                console.log(`delete files...${file}`);  
                fs.unlinkSync(path.join(logsDir, file)); 
            });
        }
        
        fs.rmdirSync(logsDir);
        console.log('Deleted directory:', logsDir);
    } else {
        console.log("Logs directory does not exist, nothing to remove.");
    }
};

remove();
