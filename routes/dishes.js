const express = require('express');
const router = express.Router();
const dishesCtrl = require('../controllers/dishes.controller.js');

router.get('/',(_,res)=>{
	res.send('Welcome to food court Healthy Chtakara..!!!');
});

router.post('/addDishes',dishesCtrl.createDishes);

router.get('/dishes',dishesCtrl.getAllDishes);

router.get('/dishes/name/:name',dishesCtrl.getDishesByName);

router.get('/dishes/category/:category',dishesCtrl.getDishesByCategory);

router.get('/dishes/type/:type',dishesCtrl.getDishesByType);

router.put('/updateDishes/:name',dishesCtrl.updateDishes);

router.delete('/deleteDishes/:name',dishesCtrl.deleteDishes);

router.post('/addReview',dishesCtrl.createReview);

module.exports = router;