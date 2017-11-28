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

   

});


