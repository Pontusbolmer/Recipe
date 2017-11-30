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
    login();
    compareIngrediens();
   //Loopar ut ingredienser
    pepparkakor();
    julskinka();
    janson();
    kal();
    kotbullar();
    prinskorv();
    risalamalta();
    sill();
    rodbetssallad();



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
        $("#submit").hide();
        $("#wlcmLogin").hide();
        $("#username").hide();
        $("#password").hide(); 
        $("#linkRecepies").show();
        $("#linkIngredients").show();
        $("#cardcontainer1").show();
        $("#cardcontainer2").show();
        $("#logout").show();
        $("#wlcm").show();
               
    };

    function showStartPage() {
        $("#logout").hide();
        $("#wlcm").hide();
        $("#cardcontainer1").hide();
        $("#cardcontainer2").hide();
        $("#linkRecepies").hide();
        $("#linkIngredients").hide();
        $("#banner").show();
        $("#wlcmLogin").show();
        
        
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
$(".addPepparkakor").click(function(){
    pepparkakor();
});
$(".addJulskinka").click(function(){
    julskinka();
});
$(".addJanson").click(function(){
    janson();
});
$(".addKottbullar").click(function(){
    kotbullar();
});
$(".addKal").click(function(){
    kal();
});
$(".addRodbetssallad").click(function(){
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
            $("#julskinkaLoop").append("<h2>" + val.recept  + "</h2>" );
            $.each(val.ingrediens, function(i, val){
            $("#julskinkaLoop").append("<li>" + val  + "</li>" );
            $(".addJulskinka").hide();
            
            });
            
        }  
    })
};
function janson(){
    
    $.each(recipes, function(i, val){
        if(val.recept === "janson" ){
            $("#jansonLoop").append("<h2>" + val.recept + "</h2>" );
            $.each(val.ingrediens, function(i, val){
            $("#jansonLoop").append("<li>" + val  + "</li>" );
            $("#jansonLoop").append("<button>" + "Delete"  + "</button>" );
            $(".addJanson").hide();
            });
        }    
    })
};
function kotbullar(){
        
    $.each(recipes, function(i, val){
        if(val.recept === "köttbullar" ){
            $("#kottbullarLoop").append("<h2>" + val.recept  + "</h2>" );
            $.each(val.ingrediens, function(i, val){
            $("#kottbullarLoop").append("<li>" + val  + "</li>" );
            $("#kottbullarLoop").append("<button>" + "Delete"  + "</button>" );
            $(".addKöttbullar").hide();
            });
        }  
    })
}
function kal(){
    
    $.each(recipes, function(i, val){
        if(val.recept === "kål" ){
            $("#kalLoop").append("<h2>" + val.recept + "</h2>" );
            $.each(val.ingrediens, function(i, val){
            $("#kalLoop").append("<li>" + val  + "</li>" );
            $("#kalLoop").append("<button>" + "Delete"  + "</button>" );
            $(".addKal").hide();
            });
        }  
    })
}
function rodbetssallad(){
    
    $.each(recipes, function(i, val){
        if(val.recept === "rödbetssallad" ){
            $("#rödbetssallad").append("<h2>" + val.recept  + "</h2>" );
            $.each(val.ingrediens, function(i, val){
            $("#rödbetssallad").append("<li>" + val  + "</li>" );
            $("#rödbetssallad").append("<button>" + "Delete"  + "</button>" );
            $(".addRödbetssallad").hide();
            });
        }  
    })
}
function sill(){
    
    $.each(recipes, function(i, val){
        if(val.recept === "sill" ){
            $("#sillLoop").append("<h2>" + val.recept + "</h2>" );
            $.each(val.ingrediens, function(i, val){
            $("#sillLoop").append("<li>" + val  + "</li>" );
            $(".addSill").hide();
            });
        }  
    })
}
function prinskorv(){
    
    $.each(recipes, function(i, val){
        if(val.recept === "prinskorv" ){
            $("#prinskorvLoop").append("<h2>" + val.recept  + "</h2>" );
            $.each(val.ingrediens, function(i, val){
            $("#prinskorvLoop").append("<li>" + val  + "</li>" );
            $("#prinskorvLoop").append("<button>" + "Delete"  + "</button>" );
            $(".addPrinskorv").hide();
            });
        }  
    })
}
function risalamalta(){
    
    $.each(recipes, function(i, val){
        if(val.recept === "risalamalta" ){
            $("#risalamaltaLoop").append("<h2>" + val.recept  + "</h2>" );
            $.each(val.ingrediens, function(i, val){
            $("#risalamaltaLoop").append("<li>" + val  + "</li>" );
            $("#risalamaltaLoop").append("<button class='deleteItem'>" + "Delete"  + "</button>" );
            $(".addRisalamalta").hide();
            });
        }  
    })
}

function pepparkakor(){
    
    $.each(recipes, function(i, val){
        if(val.recept === "pepparkakor" ){
            $("#pepparkakorLoop").append("<h2>" + val.recept  + "</h2>" );
            $.each(val.ingrediens, function(i, val){
            $("#pepparkakorLoop").append("<li>" + val  + "</li>" );
            $(".addPepparkakor").hide();
            });
        }  
    })
}


//Addera till inköpslistan SLUT//

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
