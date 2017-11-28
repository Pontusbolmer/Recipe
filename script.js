

// Fetches recipes + ingredients and stores in recipes array
function fetch(){

var recipes = [];

fetch("./recipes.json")
.then(function(response) 
{
    return response.json();
})
.then(function(recipesJson)
{
    recipes = recipesJson;
});}





/** funktion som hämtar alla recepet  */
function getRecipes () {
    


   
}





/*  recepet funktion slutar här */