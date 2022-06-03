const fastFolderSize = require('fast-folder-size')
;

const getSizeFolder = async ()=>{
    let result = ""
    console.log('hello');
    fastFolderSize ('C:/Users/Youcode/AppData/Local/Temp', (err, bytes) => {
                if (err) {
                  throw err
                }
                result = bytes;
                console.log(bytes)
                return result ;
            })}


module.exports ={
    getSizeFolder

}


