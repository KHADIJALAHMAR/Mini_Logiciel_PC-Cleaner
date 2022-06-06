const express = require('express');
const router = express.Router();
const TraitementController= require('../controller/TraitementController')



router.route('/getsize')
.get(TraitementController.getSizeFolder);

router.route('/nettoyer')
.get(TraitementController.getFilesInDirectory);


module.exports = router;