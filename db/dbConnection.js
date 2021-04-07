const mongoose=require('mongoose');
mongoose.set('useUnifiedTopology', true);

const url="mongodb+srv://Shivam2605:foodTruckDb@cluster0.zg9hh.mongodb.net/foodTruck?retryWrites=true&w=majority";

mongoose.connect(url,{useNewUrlParser:true},function(err){
    if(err){
        console.log('Error in connection');
    }
    else{
        console.log('Connected!');
    }
});
module.exports=mongoose;