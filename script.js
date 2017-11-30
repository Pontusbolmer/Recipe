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

    $(".loginButton").click(function () {
        if ($(".user").val() == user && $(".password").val() == password) {

            showMemberPage();

        } else {

            showForgotPage();
        }

    });

    $(".logoutButton").click(function () {
        showMainPage();
    });

    function showMemberPage() {
        $("#linkRecepies").show();
        $("#linkIngredients").show();
        $("#cardholder1").show();
        $("#cardholder2").show();
        

        $("#main").hide();
        $("#member").show();
        $("#submit").hide();
        $("#logout").show();
        $("#username").hide();
        $("#password").hide();
        $("#forgot").hide();
        // $(".namn").text($(".user").val());  
        sessionStorage.ourUser = $(".user").val();

    };

    function showForgotPage() {
        $("#forgot").show();
        $("#main").hide();
        $("#member").hide();
    };

    function showMainPage() {
        $(".logoutButton").hide();
        $("#forgot").hide();
        $("#main").show();
        $("#member").hide();
        $(".loginButton").show();
        $(".user").show();
        $(".password").show();
    };

    function showStartPage() {
        $(".logoutButton").hide();
        $("#banner").show();
        $("#cardcontainer1").hide();
        $("#cardcontainer2").hide();
        $("#linkRecepies").hide();
        $("#linkIngredients").hide();
    };

});