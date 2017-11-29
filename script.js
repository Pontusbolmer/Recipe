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
    
    //Funktion Skriva ut recept för att handla
    $(".addJulskinka").click(function(){
        julskinka();
    });
    $(".addJanson").click(function(){
        janson();
    });
    $(".addKöttbullar").click(function(){
        kötbullar();
    });
    $(".addKal").click(function(){
        kal();
    });
    $(".addRödbetssallad").click(function(){
        rödbetssallad();
    });
    $(".addSill").click(function(){
        sill();
    });
    $(".addPrinskorv").click(function(){
        prinskorv();
    });
    $(".addRisalamalta").click(function(){
        risalamalta();
    });


    function julskinka(){
   
        $.each(recipes, function(i, val){
            if(val.recept === "julskinka" ){
                $("#shoppingList").append("<h2>" + val.recept  + "</h2>" );
                $.each(val.ingrediens, function(i, val){
                $("#shoppingList").append("<li>" + val  + "</li>" );
                $("#shoppingList").append("<button>" + "Delete"  + "</button>" );
                $(".addJulskinka").hide();
                
                });
                
            }  
        })
    };
    function janson(){
        
        $.each(recipes, function(i, val){
            if(val.recept === "janson" ){
                $("#shoppingList").append("<h2>" + val.recept  + "</h2>" );
                $.each(val.ingrediens, function(i, val){
                $("#shoppingList").append("<li>" + val  + "</li>" );
                $("#shoppingList").append("<button>" + "Delete"  + "</button>" );
                $(".addJanson").hide();
                });
            }    
        })
    };
    function kötbullar(){
            
        $.each(recipes, function(i, val){
            if(val.recept === "köttbullar" ){
                $("#shoppingList").append("<h2>" + val.recept  + "</h2>" );
                $("#shoppingList").append("<li>" + val.ingrediens  + "</li>" );
                $("#shoppingList").append("<button>" + "Delete"  + "</button>" );
                $(".addKöttbullar").hide();
            }  
        })
    }
    function kal(){
        
        $.each(recipes, function(i, val){
            if(val.recept === "kål" ){
                $("#shoppingList").append("<h2>" + val.recept  + "</h2>" );
                $.each(val.ingrediens, function(i, val){
                $("#shoppingList").append("<li>" + val  + "</li>" );
                $("#shoppingList").append("<button>" + "Delete"  + "</button>" );
                $(".addKal").hide();
                });
            }  
        })
    }
    function rödbetssallad(){
        
        $.each(recipes, function(i, val){
            if(val.recept === "rödbetssallad" ){
                $("#shoppingList").append("<h2>" + val.recept  + "</h2>" );
                $.each(val.ingrediens, function(i, val){
                $("#shoppingList").append("<li>" + val  + "</li>" );
                $("#shoppingList").append("<button>" + "Delete"  + "</button>" );
                $(".addRödbetssallad").hide();
                });
            }  
        })
    }
    function sill(){
        
        $.each(recipes, function(i, val){
            if(val.recept === "sill" ){
                $("#shoppingList").append("<h2>" + val.recept  + "</h2>" );
                $.each(val.ingrediens, function(i, val){
                $("#shoppingList").append("<li>" + val  + "</li>" );
                $("#shoppingList").append("<button>" + "Delete"  + "</button>" );
                $(".addSill").hide();
                });
            }  
        })
    }
    function prinskorv(){
        
        $.each(recipes, function(i, val){
            if(val.recept === "prinskorv" ){
                $("#shoppingList").append("<h2>" + val.recept  + "</h2>" );
                $.each(val.ingrediens, function(i, val){
                $("#shoppingList").append("<li>" + val  + "</li>" );
                $("#shoppingList").append("<button>" + "Delete"  + "</button>" );
                $(".addPrinskorv").hide();
                });
            }  
        })
    }
    function risalamalta(){
        
        $.each(recipes, function(i, val){
            if(val.recept === "risalamalta" ){
                $("#shoppingList").append("<h2>" + val.recept  + "</h2>" );
                $.each(val.ingrediens, function(i, val){
                $("#shoppingList").append("<li>" + val  + "</li>" );
                $("#shoppingList").append("<button class='deleteItem'>" + "Delete"  + "</button>" );
                $(".deleteItem").click(function(){
                    var itemtoRemove = ingrediens;
                    val.ingrediens.splice($.inArray(itemtoRemove, val.ingrediens),1);
                });
                   
              
                $(".addRisalamalta").hide();
                });
            }  
        })
    }
});


//Funktion Skriva ut recept för att handla SLUT

 
};




/*potential searchbar
function loopOneRecipe(recipe){
    return recipes.find(r => r.recept === recipe)
  }
  
  //inputfield to take text then val(); instead of 'sill'
  var searched = loopOneRecipe('sill')
  console.log(searched)*/
  
