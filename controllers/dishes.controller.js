const { dishesModel , dishesReview } = require('../models/dishesModel');
exports.createDishes = async (req, res) => {
	if(req.body.name && req.body.category && req.body.type){
		const dishesData = new dishesModel({
	        name: req.body.name,
	        category: req.body.category,
	        type: req.body.type
	    });
	    dishesData.save()
	        .then(data => {
	            res.json({ok:true,data});
	    	}).catch(err => {
	            res.status(500).send({
	                message: err.message || "Some error occurred while adding dishes."
	        });
	    });
	}
	else{	
		res.send({message:"Name, category and type are mandatory fields"})
	}
};
exports.getAllDishes = async (req, res) => {
	const allDishes=[];
	const dishes = await dishesModel.find()
	.then(data => {
            	//res.json({ok:true,data});
            	for(let i=0;i<data.length;i++){
            		allDishes.push(data[i]);
            	}
    	}).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while getting dishes."
        });
    });
    const reviews = await dishesReview.find()
	.then(data => {
        for(let i=0;i<allDishes.length;i++){
        	for(let j=0;j<data.length;j++){
          		if(allDishes[i].name === data[j].name){
            		allDishes[i].review.push(data[j]);
          		}
       		}
       	}
	}).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while getting reviews."
    	});
	});
	res.json({ok:true,allDishes});
};
exports.getDishesByName = async (req, res) => {
	const {name}= req.params;
	const dishes = await dishesModel.find({name:name})
	.then(data => {
            	res.json({ok:true,data});
    	}).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while getting dishes."
        });
    });
};
exports.getDishesByCategory = async (req, res) => {
	const {category}= req.params;
	const dishes = await dishesModel.find({category:category})
	.then(data => {
            	res.json({ok:true,data});
    	}).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while getting dishes."
        });
    });
};
exports.getDishesByType = async (req, res) => {
	const {type}= req.params;
	const dishes = await dishesModel.find({type:type})
	.then(data => {
            	res.json({ok:true,data});
    	}).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while getting dishes."
        });
    });
};
exports.updateDishes = async (req, res) => {
	if(req.body.name && req.body.category && req.body.type){
		const {name}= req.params;
		const dishes = await dishesModel.updateMany({name:name},{name:req.body.name,category: req.body.category,type: req.body.type})
		.then(data => {
			data.n ? res.json({ok:true,data}):res.send({message:"No Record Found"});
	    	}).catch(err => {
	            res.status(500).send({
	                message: err.message || "Some error occurred while updating dishes."
	        });
	    });
	}
	else{	
		res.send({message:"Name and age is mandatory"})
	}
};
exports.deleteDishes = async (req, res) => {
	const {name}= req.params;
	const dishes = await dishesModel.deleteMany({name:name})
	.then(data => {
		data.n ? res.json({ok:true,data}):res.send({message:"No Record Found"});
    	}).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while deleting dishes."
        });
    });
};
exports.createReview = async (req, res) => {
	if(req.body.name && req.body.review ){
		const dishesReviewData = new dishesReview({
	        name: req.body.name,
	        review: req.body.review
	    });
	    dishesReviewData.save()
	        .then(data => {
	            res.json({ok:true,data});
	    	}).catch(err => {
	            res.status(500).send({
	                message: err.message || "Some error occurred while adding dishes."
	        });
	    });
	}
	else{	
		res.send({message:"Name, category and type are mandatory fields"})
	}
};

