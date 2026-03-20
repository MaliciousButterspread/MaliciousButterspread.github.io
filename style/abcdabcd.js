// $(".menu-btn").on("click", function() {
//     let name = $(this).text().trim();
//     if (name === "ABOUT") {
//         window.location.href = "abt.html";
//     }
//     if (name === "HOW?") {
//         window.location.href = "haw.html";
//     }
// });

$(document).ready(function() {
    $(".menu-btn").on("click", function() {
        let name = $(this).text().trim();
        console.log("clicked:", name);
        if (name === "HOME") {
            window.location.assign("../index.html");
            // window.location.href = "index.html";
            // reference https://stackoverflow.com/questions/503093/how-do-i-redirect-to-another-webpage/506004#506004
            // also from here https://stackoverflow.com/questions/1034621/get-the-current-url-with-javascript/1034642#1034642
        }
        if (name === "ABOUT") {
            window.location.assign("../abt.html");
        }
        if (name === "HOW?") {
            window.location.assign("../haw.html");
        }
    });
        $(".recipe-btn").on("click", function() {
        let recipeName = $(this).find(".big").text();
        recipeName = recipeName.replace(/^\d+\s*/, "");

        if (recipeName === "Tiramisu") {
            window.location.assign("recipes/tiramisu.html");
        }
        if (recipeName === "Pandoro") {
            window.location.assign("recipes/pandoro.html");
        }
        if (recipeName === "Panna Cotta") {
            window.location.assign("recipes/pannacotta.html");
        }
        if (recipeName === "Lemon Ricotta Cake") {
            window.location.assign("recipes/lemonricotta.html");
        }
        if (recipeName === "Torta Caprese") {
            window.location.assign("recipes/tortacaprese.html");
        }
        if (recipeName === "Biscotti") {
            window.location.assign("recipes/biscotti.html");
        }
    });
    $(".abtruready, .hawruready").on("click", function() {
        window.location.assign("index.html");
    });
    // how???
    $(document).ready(function() {
    const recipes = {
        "Tiramisu": {
            title: "TIRAMISU",
            ingredients: [
                "1. Sugar 100g",
                "2. Mascarpone Cheese* 350g",
                "3. Espresso* 100ml",
                "4. Savoiardi* around 10-15 pieces",
                "5. Cocoa Powder* 30g",
                "6. Orange* 1",
                "* optional or substitutable!"
            ],
            tools: [
                "1. Bowl",
                "2. Container",
                "3. Refrigerator",
                "4. Grinder"
            ],
            serving: "2 to 3",
            time: "30 Minutes"
        },
        "Pandoro": {
            title: "PANDORO",
            ingredients: [
                "1. All Purpose Flour 400g",
                "2. Milk 60g*",
                "3. Dry yeast 6-7g",
                "4. Pinch of salt*",
                "5. Vanilla extract 1tsp*",
                "6. Non salted butter 160g*",
                "7. Sugar 120g",
                "8. Eggs 3",
                "9. Lemon 1*",
                "* optional or substitutable!"
            ],
            tools: [
                "1. Bowl",
                "2. Mixer",
                "3. Oven"
            ],
            serving: "5 to 6",
            time: "30 Minutes Mixing + <br>6.5 hours Rising + <br>40 Minutes Baking"
        },
        "Panna Cotta": {
            title: "PANNA COTTA",
            ingredients: [
                "1. Cream 500ml",
                "2. Sugar 300g*",
                "3. Gelatin 7-8g",
                "4. Vanilla extract 2tsp*",
                "5. Pinch of salt*",
                "* optional or substitutable!"
            ],
            tools: [
                "1. Pot",
                "2. Mold",
                "3. Refrigerator"
            ],
            serving: "4 to 5",
            time: "30 Minutes Mixing + 4 hours Chilling"
        },
        "Lemon Ricotta Cake": {
            title: "LEMON RICOTTA CAKE",
            ingredients: [
                "1. Ricotta 250g",
                "2. Sugar 150g",
                "3. Eggs 3",
                "4. Flour 150g",
                "5. Baking Powder 1 tsp",
                "6. Lemon 1*",
                "* optional or substitutable!"
            ],
            tools: [
                "1. Bowl",
                "2. Whisk",
                "3. Cake Pan",
                "4. Oven"
            ],
            serving: "You alone to 8",
            time: "15 Minutes Mixing + <br>40 Minutes Baking"
        },
        "Torta Caprese": {
            title: "TORTA CAPRESE",
            ingredients: [
                "1. Dark Chocolate 200g*",
                "2. Butter 120g",
                "3. Sugar 150g",
                "4. Eggs 4",
                "5. Almond Flour 200g*",
                "6. Cocoa Powder 20g*",
                "7. Pinch of salt*",
                "* optional or substitutable!"
            ],
            tools: [
                "1. Bowl",
                "2. Saucepan",
                "3. Cake Pan",
                "4. Oven"
            ],
            serving: "4 to 5",
            time: "20 Minutes Prep + <br>35 Minutes Baking"
        },
        "Biscotti": {
            title: "BISCOTTI",
            ingredients: [
                "1. Flour 250g",
                "2. Sugar 150g",
                "3. Eggs 2",
                "4. Baking Powder 1 tsp",
                "5. Pinch of salt",
                "6. Almonds 120g*",
                "7. Vanilla 1 tsp*",
                "* optional or substitutable!"
            ],
            tools: [
                "1. Bowl",
                "2. Baking Tray",
                "3. Oven"
            ],
            serving: "10 to 14",
            time: "15 Minutes Mixing + <br>45 Minutes Baking"
        }
    };
//     $(".recipe-btn").on("click", function() {
//         let name = $(this).find(".big").text();
//         name = name.replace(/^\d+\s*/, "");
//              // Reference from here https://stackoverflow.com/questions/10003683/how-can-i-extract-a-number-from-a-string-in-javascript
//         let data = recipes[name];
//         if (!data) return;
//         $("#recipe-title").text(data.title);
//         $("#ingredients-list").html("");
//                 // https://stackoverflow.com/questions/1910794/what-is-the-difference-between-jquery-text-and-html
//         data.ingredients.forEach(item => {
//             $("#ingredients-list").append("<div>" + item + "</div>");
//         });
//         $("#tools-list").html("");
//         data.tools.forEach(item => {
//             $("#tools-list").append("<div>" + item + "</div>");
//         });
//                 // https://stackoverflow.com/questions/9329446/loop-for-each-over-an-array-in-javascript
//         $("#serving").text(data.serving);
//         $("#time").html(data.time);
//         // basically not my code lmao
//     });
// });
    // ref https://api.jquery.com/mouseenter/
    //https://api.jquery.com/focusin/
    function renderRecipePreview(name) {
        // Reuse the same lookup logic
        const data = recipes[name];
        if (!data) return;
        $(".right .recipe-title").first().text(data.title);
        //https://api.jquery.com/category/selectors/
        const $ingredientsList = $(".right .ingredients .list").first();
        $ingredientsList.html("");
        //https://stackoverflow.com/questions/1910794/what-is-the-difference-between-jquery-text-and-html
        data.ingredients.forEach(item => {
            $ingredientsList.append("<div>" + item + "</div>");
        });
        //https://stackoverflow.com/questions/9329446/loop-for-each-over-an-array-in-javascript
        const $toolsList = $(".right .tools .list").first();
        //https://api.jquery.com/html/
        $toolsList.html("");
        data.tools.forEach(item => {
            // Reference (.append()): https://api.jquery.com/append/
            $toolsList.append("<div>" + item + "</div>");
        });
        //https://api.jquery.com/text/
        //https://stackoverflow.com/questions/1910794/what-is-the-difference-between-jquery-text-and-html
        $(".right .serving").first().text(data.serving);
        $(".right .time").first().html(data.time);
    }
    $(".recipe-btn").on("mouseenter focusin", function() {
        let name = $(this).find(".big").text();
        name = name.replace(/^\d+\s*/, "");
        // Reference from here https://stackoverflow.com/questions/10003683/how-can-i-extract-a-number-from-a-string in-javascript
        renderRecipePreview(name);
    });
    $(".recipe-btn").on("click", function() {
        let name = $(this).find(".big").text();
        name = name.replace(/^\d+\s*/, "");
        // Reference from here https://stackoverflow.com/questions/10003683/how-can-i-extract-a-number-from-a-string-in-javascript
        renderRecipePreview(name);
    });

});
}); 