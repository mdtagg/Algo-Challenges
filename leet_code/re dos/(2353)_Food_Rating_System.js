

const FoodRatings = function(food, cuisines,ratings) {
    foodMap = {}
    itemMap = new Map()
    
    for(let i = 0;i < cuisines.length;i++) {

        itemMap.set(food[i],cuisines[i])

        if(!foodMap[cuisines[i]]) {
            foodMap[cuisines[i]] = {[food[i]] : ratings[i],"highest":[0,]}
        }
        else {
            foodMap[cuisines[i]] = {...foodMap[cuisines[i]], [food[i]] : ratings[i]}
        }

        if(foodMap[cuisines[i]]["highest"][0] < ratings[i]) {
            foodMap[cuisines[i]]["prevHighest"] = foodMap[cuisines[i]]["highest"]
            foodMap[cuisines[i]]["highest"] = [ratings[i],[food[i]]]
        }
        else if(foodMap[cuisines[i]]["highest"][0] === ratings[i]) {
            // foodMap[cuisines[i]]["highest"] = [ratings[i],[...foodMap[cuisines[i]]["highest"][1],food[i]]]
        }
    }
}

FoodRatings.prototype.changeRating = function(food,newRating) {

//issues is here. need to figure out what to do when value is lower

    let category = itemMap.get(food)
    // let foodRating = foodMap[category][food]
    const [ highestRating, highestFoods ] = foodMap[category]["highest"]

    foodMap[category][food] = newRating

    if(foodMap[category][food] > highestRating) {
        foodMap[cuisines[i]]["prevHighest"] = foodMap[cuisines[i]]["highest"]
        foodMap[category]["highest"] = [newRating,[food]]
    }
    else if(foodMap[category][food] === highestRating) {
        foodMap[category]["highest"] = [newRating,[...highestFoods,food]]
    }else {
        foodMap[category[i]]["highest"] = prevHighest.pop()
    }

}

FoodRatings.prototype.highestRated = function(cuisine) {

    let highestFood = foodMap[cuisine]["highest"][1]

    if(highestFood.length === 1) return highestFood[0]

    highestFood.sort()
    return highestFood[0]
}

const foods = ["kimchi","miso", "sushi", "moussaka", "ramen", "bulgogi"]
const cuisines = ["korean", "japanese", "japanese", "greek", "japanese", "korean"]
const ratings = [9,12, 8, 15, 14, 7]

const obj = new FoodRatings(foods,cuisines,ratings)

obj.highestRated('japanese')
obj.changeRating('sushi',16)
obj.changeRating('sushi',1)
obj.highestRated('japanese')
obj.changeRating('ramen',16)
console.log(obj.highestRated('japanese'))

/*
function FoodData(name, cuisine, rating) {
    this.name = name;
    this.cuisine = cuisine;
    this.rating = rating;
}

class FoodRatings {

    constructor(foods, cuisines, ratings) {
        //Map<string, FoodData>
        this.foodNameToFoodData = new Map();
        this.cuisineNameToHeapifiedFoodData = new Map();

        for (let i = 0; i < foods.length; ++i) {
            let currentFood = new FoodData(foods[i], cuisines[i], ratings[i]);
            this.foodNameToFoodData.set(foods[i], currentFood);
            if (!this.cuisineNameToHeapifiedFoodData.has(cuisines[i])) {
                this.cuisineNameToHeapifiedFoodData.set(cuisines[i],
                        new MaxPriorityQueue({compare: (x, y) => (x.rating === y.rating) ? x.name.localeCompare(y.name) : (y.rating - x.rating)}));
            }
            this.cuisineNameToHeapifiedFoodData.get(cuisines[i]).enqueue(currentFood);
        }
    }

    changeRating(food, newRating) {
        let toUpdate = this.foodNameToFoodData.get(food);
        let updated = new FoodData(toUpdate.name, toUpdate.cuisine, newRating);
        this.foodNameToFoodData.set(food, updated);
        this.cuisineNameToHeapifiedFoodData.get(toUpdate.cuisine).enqueue(updated);
    }

    highestRated(cuisine) {
        let highestRatedFoodForCuisine = "";
        while (true) {
            let food = this.cuisineNameToHeapifiedFoodData.get(cuisine).front();
            if (food.rating !== this.foodNameToFoodData.get(food.name).rating) {
                this.cuisineNameToHeapifiedFoodData.get(cuisine).dequeue();
            } else {
                highestRatedFoodForCuisine = food.name;
                break;
            }
        }
        return highestRatedFoodForCuisine;
    }
}




const FoodRatings = function(food, cuisines,ratings) {
    foodMap = {}
    itemMap = new Map()
    
    for(let i = 0;i < cuisines.length;i++) {

        itemMap.set(food[i],cuisines[i])

        if(!foodMap[cuisines[i]]) {
            foodMap[cuisines[i]] = {[food[i]] : ratings[i],"highest":[0,]}
        }
        else {
            foodMap[cuisines[i]] = {...foodMap[cuisines[i]], [food[i]] : ratings[i]}
        }
        if(foodMap[cuisines[i]]["highest"][0] < ratings[i]) {
            foodMap[cuisines[i]]["highest"] = [ratings[i],[food[i]]]
        }
        else if(foodMap[cuisines[i]]["highest"][0] === ratings[i]) {
            foodMap[cuisines[i]]["highest"] = [ratings[i],[...foodMap[cuisines[i]]["highest"][1],food[i]]]
        }
    }
}

FoodRatings.prototype.changeRating = function(food,newRating) {

//issues is here. need to figure out what to do when value is lower
    let category = itemMap.get(food)
    foodMap[category][food] = newRating

    if(foodMap[category][food] > foodMap[category]["highest"][0]) {
        foodMap[category]["highest"] = [newRating,[food]]
    }
    else if(foodMap[category][food] === foodMap[category]["highest"][0]) {
        foodMap[category]["highest"] = [newRating,[...foodMap[category]["highest"][1],food]]
    }
}

FoodRatings.prototype.highestRated = function(cuisine) {

    let highestFood = foodMap[cuisine]["highest"][1]

    if(highestFood.length === 1) return highestFood[0]
    highestFood.sort()
    return highestFood[0]
}
*/
