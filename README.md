# foodTruck


npm i // to install node_modules

npm start // to start server, it will automatically connects to the database


#API Urls:

localhost:4041\addDishes                \\ Type : POST    \\ to add dishes

localhost:4041/dishes                    \\ Type : GET     \\ to get all dishes(with reviews)

localhost:4041/dishes/name/:name          \\ Type : GET     \\ to filter dishes by name

localhost:4041/dishes/category/:category   \\ Type : GET     \\ to filter dishes by category

localhost:4041/dishes/type/:type            \\ Type : GET     \\ to filter dishes by type

localhost:4041/updateDishes/:name            \\ Type : PUT     \\ to update dishes (select by name)

localhost:4041/deleteDishes/:name             \\ Type : DELETE  \\ to delete dishes (select by name)

localhost:4041/addReview                       \\ Type : POST    \\ to add review 


#required Json Structure for:

1) addDishes:  {"name" : "", "category": "", "type": ""}

2) updateDishes:  {"name" : "", "category": "", "type": ""}

3) addReview : {"name": "Chicken Biryani","review":""}
