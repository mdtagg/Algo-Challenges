

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
    let foodRating = foodMap[category][food]
    const { highestRating, highestFoods } = foodMap[category]["highest"]

    foodRating = newRating

    if(foodRating > highestRating) {
        foodMap[category]["highest"] = [newRating,[food]]
    }
    else if(foodRating === highestRating) {
        foodMap[category]["highest"] = [newRating,[...highestFoods,food]]
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

obj.changeRating('sushi',16)
obj.changeRating('ramen',16)
console.log(obj.highestRated('japanese'))

/*
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
