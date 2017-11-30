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


    // Jonatan Funktion

    $(".jansons-ingredienser").show();


    showStartPage();

    $.each(recipes, function (i, val) {
        if (val.recept === "janson") {
            $(".jansons-ingredienser").append("<li>" + val.recept + "</li>")
            $(".jansons-ingredienser").append("<li>" + val.ingrediens + "</li>")
            $(".jansons-ingredienser").append("<li>" + val.image + "</li>")
        }
    });



    function showStartPage() {
        $(".jansons-ingredienser").show();


    };



});