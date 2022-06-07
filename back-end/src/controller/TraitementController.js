const express = require("express");
const fastFolderSize = require("fast-folder-size");
const { history } = require("../models/index");
// const res = require("express/lib/response");
const fs = require("fs");
const path = require("path");
const MyFolder = "C:/Users/Youcode/AppData/Local/Temp";
const Director = "C:/Users/Youcode/Desktop/douaa";

const getSizeFolder = async (req, res) => {
  let result = "";
  fastFolderSize(MyFolder, (err, bytes) => {
    if (err) {
      throw err;
    }
    result = bytes / 2000 + "KB";
    console.log("res :", res);
    res.json(result);
    if (result) {
      history
        .create({ time_at: new Date().toGMTString(), size: result })
        .then((response) => {
          res.json({ message: "history saved", result });
        });
    }
  });
};
const remove = (Directory) => {
  fs.unlink(Directory, function (err) {
    if (err) {
      console.error(err);
      console.log("File can't removed found");
      getFilesInDirectory(Directory);
    } else {
      console.log("File Delete Successfuly ");
    }
  });
};

function getFilesInDirectory(dir = "C:/Users/Youcode/Desktop/douaa") {
  console.log("\nFiles present in directory:");
  let files = fs.readdirSync(dir);
  files.forEach((file) => {
    console.log("file : ", file);
    remove(dir + "\\" + file);
  });
}
const findHistory = async (req, res) => {
  console.log("hahahahs");
  history
    .findAll({
      limit: 1,
      order: [["createdAt", "DESC"]],
    })
    .then((resault) => {
      res.json(resault);
    });
};

module.exports = {
  getSizeFolder,
  getFilesInDirectory,
  findHistory,
};
