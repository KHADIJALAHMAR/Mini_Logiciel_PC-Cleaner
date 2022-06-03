const express = require('express');
const router = express.Router();
const TraitementController= require('../controller/TraitementController')



router.route('/getsize')
.get(TraitementController.getSizeFolder);



module.exports = router;