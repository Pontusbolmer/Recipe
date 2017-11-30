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

    var user = "test"
    var password = "password"

    if (sessionStorage.ourUser != null) {
        showMemberPage();
    } else {
        showStartPage();
    }

    $("#login").click(function () {
        if ($(".user").val() == user && $("#password").val() == password) {
            showMemberPage();
        } else {            
            showForgotPage();
        }
    });

    $("#logout").click(function () {
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
        $("#wlcm_login").hide();
        
        $("#username").hide();
        $("#password").hide(); 
        sessionStorage.ourUser = $(".user").val();
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

});