# foodTruck

## Pre Requirements:
1) Node Installed or download and install from : https://nodejs.org/en/download/
2) Postman : to test Local API's : download and install from : https://www.postman.com/downloads/

## Commands to execute the code:
#### open terminal and navidate to code folder and execute following commands:

npm i // to install node_modules

npm start // to start server, it will automatically connects to mongo cloud database from db\dbconnection.js (update URL variable to change database connection)


## API Urls:

localhost:4041/addDishes ---------------\\ Method : POST ------\\ to add dishes

localhost:4041/dishes -------------------\\ Method : GET --------\\ to get all dishes(with reviews)

localhost:4041/dishes/name/:name ----------\\ Method : GET --------\\ to filter dishes by name

localhost:4041/dishes/category/:category ----\\ Method : GET --------\\ to filter dishes by category

localhost:4041/dishes/type/:type --------------\\ Method : GET --------\\ to filter dishes by type

localhost:4041/updateDishes/:name --------------\\ Method : PUT ---------\\ to update dishes (select by name)

localhost:4041/deleteDishes/:name ---------------\\ Method : DELETE -------\\ to delete dishes (select by name)

localhost:4041/addReview --------------------------\\ Method : POST ---------\\ to add review 


## Required Json Structure for:

1) addDishes:  {"name" : "", "category": "", "type": ""}

2) updateDishes:  {"name" : "", "category": "", "type": ""}

3) addReview : {"name": "","review":""}
