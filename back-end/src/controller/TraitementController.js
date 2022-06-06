const express = require("express");
const fastFolderSize = require("fast-folder-size");
const{ history} =require('../models/index');
// const res = require("express/lib/response");
const fs = require("fs");
const path = require("path");
const MyFolder = "C:/Users/Youcode/AppData/Local/Temp";

const getSizeFolder = async (req, res) => {
  let result = "";
  fastFolderSize(MyFolder, (err, bytes) => {
    if (err) {
      throw err;
    }
    result = bytes / 2000 + "KB";
    console.log("res :", res);
    res.json( result );
    if(result){
      history.create({ time_at: new Date().toGMTString(), size: result } ).then(
        (response) => {
          res.json({ message: "history saved", result });
        }
      );
    }
  });
};

function getFilesInDirectory() {
  console.log("\nFiles present in directory:");
  let files = fs.readdirSync("C:/Users/Youcode/Desktop/khadija");
  files.forEach((file) => {
    console.log("file : ", file);
    fs.unlink("C:/Users/Youcode/Desktop/khadija" + "\\" + file, function (err) {
      if (err) {
        console.error(err);
        console.log("File not found");
      } else {
        console.log("File Delete Successfuly ", new Date());
      }
    });
  });
}

module.exports = {
  getSizeFolder,
  getFilesInDirectory,
};
