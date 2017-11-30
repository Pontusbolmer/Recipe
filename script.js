var recipes = [];

// fetches json recipes and ingredients array.
fetch("recipes.json")
    .then(function (response) {
        return response.json();
    })
    .then(function (recipesJson) {
        recipes = recipesJson;
    });

$(document).ready(function () {
    login()
    compareIngrediens()

//Här börjar login
    function login(){
    var user = "test"
    var password = "password"

    if (sessionStorage.ourUser != null) {
        showMemberPage();
    } else {
        showStartPage();
    };

    $("#login").click(function () {
        if ($("#username").val() == user && $("#password").val() == password) {
            sessionStorage.ourUser = user;
            console.log ("inloggad" + sessionStorage.ourUser);
            showMemberPage();
        }
    });

    $("#logout").click(function () {
        sessionStorage.removeItem("ourUser");
        location.reload();
        showStartPage();

        
    });
    
    function showMemberPage() {
        $("#linkRecepies").show();
        $("#linkIngredients").show();
        $("#cardcontainer1").show();
        $("#cardcontainer2").show();
        $("#submit").hide();
        $("#logout").show();
        $("#submit").hide();
        $("#wlcm").show();
        $("#wlcmLogin").hide();
        $("#username").hide();
        $("#password").hide();        
    };

    function showStartPage() {
        $("#banner").show();
        $("#logout").hide();
        $("#wlcmLogin").show();
        $("#wlcm").hide();
        $("#cardcontainer1").hide();
        $("#cardcontainer2").hide();
        $("#linkRecepies").hide();
        $("#linkIngredients").hide();
    };
    }
        //Här slutar login

        //Här är compare funktionen i Ingredienser
        function compareIngrediens(){
        var lista = {};
        for(var temp of recipes) {
        for(value of temp.ingrediens) {
        if(lista[value]) lista[value]++;
        else lista[value] = 1;
        }
        }
        $("#main").append("<ul></ul>");
        for(var key in lista) {
        $("#main ul").append("<li>" + key + " " + lista[key] + "x" + "</li>");

        }
        };
        // Stänger Pontus

//Adderar till inköpslistan
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
                var itemtoRemove = val.ingrediens;
                recipes.splice($.inArray(itemtoRemove, arr),1);
            });
               
          
            $(".addRisalamalta").hide();
            });
        }  
    })
}


//Addera till inköpslistan SLUT//


});
