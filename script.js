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


//Här börjar login

    var user = "test"
    var password = "password"

    if (sessionStorage.ourUser != null) {
        showMemberPage();
    } else {
        showStartPage();
    }

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
        console.log("showMemberPage");
       
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
//Här slutar login

//Här är compare funktionen i Ingredienser

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
});
