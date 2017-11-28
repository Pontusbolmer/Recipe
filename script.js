var recipes = [];

// fetches json recipes and ingredients array.
fetch("recipes.json")
.then(function(response) 
{
    return response.json();
})
.then(function(recipesJson)
{
    recipes = recipesJson;
});


$(document).ready(function () {

    loopRecipe();

//function that loop recipe + ingredients in lists. examplecode
function loopRecipe(){

    $("#container").append("<ul class='list'></ul>")

       
            $.each(recipes.recept, function(i, val){
                $(".list").append("<h3>" + val.recept + "</h3>")
                $(".list").append("<li>" + val.ingrediens + "</li>")
            });
}


// function that find matching recipes from 1 ingredient in the loopAllIngredient function
function findRecipes(){





}

// loops out all ingredients in a list and show copies ex: milk x3 instead of milk 3 times
function loopAllIngredients(){





}

//loops one targeted recipe and the ingredients
function loopOneRecipe(){




}

});
