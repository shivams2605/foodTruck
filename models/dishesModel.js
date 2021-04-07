const db = require('../db/dbConnection');

const dishesSchema = db.Schema({
    name: { type: String, required: true },
    category: { type: String, required: true },
    type: { type: String, required: true },
    review: { type: Array, required: false }
});
const dishesReviewSchema = db.Schema({
    name: { type: String, required: true },
    review:{ type: String, required: true }
});
module.exports.dishesModel = db.model('dishes_tbl', dishesSchema);
module.exports.dishesReview = db.model('dishes_review_tbl', dishesReviewSchema);