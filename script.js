var recipes = [];

// fetches json recipes and ingredients array.
fetch("./recipes.json")
.then(function(response)
{
    return response.json();
})
.then(function(recipesJson)
{
    recipes = recipesJson;
});

console.log(recipes);

function getRecipes () {
    var main = document.querySelector("#main");  
    var productDiv = document.createElement("div"); 
    productDiv.setAttribute("id", "div" + i);


}