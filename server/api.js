var recipes_map = {
    '1': {
        "id": "1",
        "title": "Cookies",
        "description": "Delicious, crisp on the outside, chewy on the outside, oozing with chocolatey goodness cookies. The best kind",
        "ingredients": [
            {
                "amount": "1",
                "amountUnits": "packet",
                "ingredientName": "Chips Ahoy"
            }
        ],
        "instructions": "1. Go buy a packet of Chips Ahoy\n2. Heat it up in an oven\n3. Enjoy warm cookies\n4. Learn how to bake cookies from somewhere else"
    },
    '2': {
        id: 2,
        'title': 'Recipe 2',
        'description': 'Description 2',
        'instructions': 'Instruction 2',
        ingredients: [
            {amount: 13, amountUnits: 'pounds', ingredientName: 'Awesomeness'}
        ]
    }
};

exports.getAll = function(req, res){
    var recipes = [];

    for (var key in recipes_map) {
        recipes.push(recipes_map[key]);
    }

    // Simulate delay in server
    setTimeout(function() {
        res.send(recipes);
    }, 500);
};


