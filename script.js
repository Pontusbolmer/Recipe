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

    findRecipes(ingredient); 
    loopRecipe();
    loopAllIngredients();
    loopOneRecipe();

//function that loop recipe + ingredients in list. examplecode
function loopRecipe(){

    $("#container").append("<ul class='list'></ul>")

       
            $.each(recipes.recept, function(i, val){
                $(".list").append("<h3>" + val.recept + "</h3>")
                $(".list").append("<li>" + val.ingrediens + "</li>")
            });
}


// function that find matching recipes from 1 ingredient in the loopAllIngredient function
//need to swap ingredient to actual clicked ingredient from loopAllIngredients();
function findRecipes(ingredient) {
    // Create empty array - if no 'recept'`s are found we return empty array
    var results = [];
    // For each recipe
    for (var i = 0; i < recipes.length; i++) {
      // If recipe's ingredients includes the 'ingredient' append recipe to result
      if (recipes[i].ingrediens.includes(ingredient)) {
        results.push(recipes[i].recept)
      }
    }
    // Return results
    console.log(results);
    return results
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

    //borde kunna loopa lista för att loopa alla ingredienser !oklar!
    var lista = key + " " + several[key] + "x";
    console.log(lista);

  }
    

//loops one targeted recipe and the ingredients
function loopOneRecipe(){

    $("#container").append("<ul class='list2'></ul>")
    
           
                $.each(recipes, function(i, val){
                    $(".list2").append("<h3>" + val.recept + "</h3>")
                    $(".list2").append("<li>" + val.ingrediens + "</li>")
                    console.log(val.recept);
                });


                // försök på att lista även ingredienserna !oklar!
                /*
                $.each(recipes, function(i, val){
                    $(".list2").append("<h3>" + val.recept + "</h3>")
                    // $??(".li").each(val.ingrediens, function(i, val)) {
                    //   $??.append("<li>" + val "</li>)
                    // }
                    $(".list2").append("<li>" + val.ingrediens + "</li>")
                    console.log(val.recept);
                });*/
}
});




/*potential searchbar
function loopOneRecipe(recipe){
    return recipes.find(r => r.recept === recipe)
  }
  
  //inputfield to take text then val(); instead of 'sill'
  var searched = loopOneRecipe('sill')
  console.log(searched)*/
  
