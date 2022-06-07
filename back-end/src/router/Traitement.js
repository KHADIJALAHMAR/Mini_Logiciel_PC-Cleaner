const express = require('express');
const router = express.Router();
const TraitementController= require('../controller/TraitementController')



router.route('/getsize')
.get(TraitementController.getSizeFolder);

router.route('/nettoyer')
.get(TraitementController.nettoyer);


router.route('/history')
.get(TraitementController.findHistory);


router.route('/Allhistory')
.get(TraitementController.getAllhistory);


module.exports = router;