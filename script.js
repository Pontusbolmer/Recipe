

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


function getRecipes () {
    var main = document.querySelector("#main");  
    var productDiv = document.createElement("div"); 
    productDiv.setAttribute("id", "div" + i);


}