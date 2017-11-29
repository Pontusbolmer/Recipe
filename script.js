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
    loopAllIngredients();
    loopOneRecipe();

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
function loopAllIngredients() {
    // Find all ingredients
    var result = []
    recipes.forEach(function(recipe) {
      result.push(recipe.ingrediens)
    })
  
   //merges all the arrays with ingredients to one big array
    var ingredients = [].concat.apply([], result)
  
    // Return object of with ingredients as key and the count as value.
    // Allows us to do several.lök to print 5 or several.senap to print 3
    var several = {}
    ingredients.forEach(function(ingredient) {
      several[ingredient] = (several[ingredient] || 0) + 1
    })
  
    console.log(several)
    return several

    var lista = key + " " + several[key] + "x";
    console.log(lista);

  }
    

    

  



//loops one targeted recipe and the ingredients
function loopOneRecipe(){

    $("#container").append("<ul class='list2'></ul>")
    
           
                $.each(recipes.recept, function(i, val){
                    $(".list2").append("<h3>" + val.recept[0] + "</h3>")
                    $(".list2").append("<li>" + val.ingrediens + "</li>")
                    console.log(val.recept[0]);
                });


}

});
