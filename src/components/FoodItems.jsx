
     const foodCategory = [
        {id:1, src: "/images/alfredo_pasta.jpg", alt: "pasta", category: "Pasta", description: "Our pasta is made fresh daily and served with your choice of sauce."},
        { id:2, src: "/images/ceaser_salad.jpg", alt: "ceaser salad", category: "Salad", description: "Our salads are made with the freshest ingredients and served with your choice of dressing." },
        { id:3, src: "/images/pizza.jpg", alt: "pizza", category: "Pizza", description: "Our pizzas are made with hand-tossed dough and topped with the freshest ingredients." },
        { id:4, src: "/images/burger.jpg", alt: "burger", category: "Burgers", description: "Our burgers are made with 100% beef and served with your choice of toppings." },
        { id:5, src: "/images/sandwich.jpg", alt: "sandwiches", category: "Sandwiches", description: "Our sandwiches are made with fresh bread and served with your choice of fillings." },
        { id:6, src: "/images/steak.jpg", alt: "steak", category: "Steak", description: "Our steaks are cooked to perfection and served with your choice of sides." },
        { id:7, src: "/images/chicken_wings.jpg", alt: "chicken", category: "Chicken", description: "Our chicken dishes are made with fresh chicken and served with your choice of sides." },
        { id:8, src: "/images/fennel_soup.jpg", alt: "soup", category: "Soup", description: "Our soups are made with fresh ingredients and served with your choice of bread." },
        { id:9, src: "/images/dessert_icecream.jpg", alt: "dessert", category: "Desserts", description: "Our desserts are made with the finest ingredients and served with your choice of toppings." },
        { id:10, src: "/images/coffee_latte.jpg", alt: "drinks", category: "Drinks", description: "Our drinks are made with the finest ingredients and served with your choice of toppings." },
    ];

     const foodItems = {
    Pasta: [
        { name: "Spaghetti Carbonara", src: "/images/carbonara.jpg", description: "Creamy spaghetti with bacon and cheese.", price: 12.99 },
        { name: "Penne Arrabbiata", src: "/images/arrabbiata.jpg", description: "Spicy tomato-based pasta with a rich tomato sauce.",  price: 11.99 },
        { name: "Fettuccine Alfredo", src: "/images/alfredo.jpg", description: "Classic Alfredo sauce over fettuccine pasta.", price: 13.99 },
        { name: "Lasagna", src: "/images/lasagna.jpg", description: "Layered pasta with beef, cheese, and tomato sauce.", price: 14.99 },
        { name: "Seafood Linguine", src: "/images/seafood_linguine.jpg", description: "Fresh shrimp and mussels in a white wine sauce.", price: 15.99 }
      ],
      Salad: [
        { name: "Greek Salad", src: "/images/greek_salad.jpg", description: "Fresh salad with feta cheese, olives, and tomatoes.", price: 8.99 },
        { name: "Chicken Caesar Salad", src: "/images/chicken_caesar.jpg", description: "Grilled chicken, romaine lettuce, and Caesar dressing.", price: 9.99 },
        { name: "Caprese Salad", src: "/images/caprese.jpg", description: "Mozzarella, tomatoes, basil, and balsamic glaze.", price: 7.99 },
        { name: "Cobb Salad", src: "/images/cobb_salad.jpg", description: "Chopped greens with turkey, bacon, egg, and avocado.", price: 10.99 },
        { name: "Asian Sesame Salad", src: "/images/asian_sesame.jpg", description: "Crispy greens with sesame dressing and crispy wontons.", price: 8.99 }
      ],
      Pizza: [
        { name: "Margherita Pizza", src: "/images/margherita.jpg", description: "Classic tomato, mozzarella, and basil pizza.", price: 10.99 },
        { name: "BBQ Chicken Pizza", src: "/images/bbq_pizza.jpg", description: "Grilled chicken, BBQ sauce, and red onions.", price: 12.99 },
        { name: "Pepperoni Pizza", src: "/images/pepperoni.jpg", description: "Loaded with spicy pepperoni and melted cheese.", price: 11.99 },
        { name: "Veggie Supreme", src: "/images/veggie_pizza.jpg", description: "Bell peppers, onions, olives, and mushrooms.", price: 12.99 },
        { name: "Meat Lovers Pizza", src: "/images/meat_lovers.jpg", description: "Pepperoni, sausage, bacon, and ham.", price: 13.99 }
      ],
      Burgers: [
        { name: "Classic Cheeseburger", src: "/images/cheeseburger.jpg", description: "Beef patty with cheese, lettuce, and tomato.", price: 9.99 },
        { name: "BBQ Bacon Burger", src: "/images/bbq_burger.jpg", description: "Grilled burger with BBQ sauce and crispy bacon.", price: 10.99 },
        { name: "Mushroom Swiss Burger", src: "/images/mushroom_burger.jpg", description: "Sautéed mushrooms with melted Swiss cheese.", price: 10.99 },
        { name: "Vegan Burger", src: "/images/vegan_burger.jpg", description: "Plant-based patty with vegan mayo and greens.", price: 11.99 },
        { name: "Double Stack Burger", src: "/images/double_burger.jpg", description: "Two beef patties with melted cheese and sauce.", price: 12.99 }
      ],
      Sandwiches: [
        { name: "Grilled Cheese Sandwich", src: "/images/grilled_cheese.jpg", description: "Crispy bread with melted cheese inside.", price: 7.99 },
        { name: "Club Sandwich", src: "/images/club_sandwich.jpg", description: "Layers of turkey, ham, bacon, and fresh veggies.", price: 8.99 },
        { name: "Philly Cheesesteak", src: "/images/philly_cheesesteak.jpg", description: "Thinly sliced beef with melted cheese on a hoagie roll.", price: 9.99 },
        { name: "Chicken Avocado Sandwich", src: "/images/chicken_avocado.jpg", description: "Grilled chicken, fresh avocado, and creamy dressing.", price: 9.99 },
        { name: "Tuna Melt", src: "/images/tuna_melt.jpg", description: "Tuna salad topped with melted cheese on toasted bread.", price: 8.99 }
      ],
      
      Steak: [
        { name: "Ribeye Steak", src: "/images/ribeye.jpg", description: "Juicy ribeye steak cooked to perfection.", price: 19.99 },
        { name: "Filet Mignon", src: "/images/filet_mignon.jpg", description: "Tender filet mignon with garlic butter.", price: 21.99 },
        { name: "T-Bone Steak", src: "/images/tbone.jpg", description: "Grilled T-bone steak with rosemary seasoning.", price: 22.99 },
        { name: "Sirloin Steak", src: "/images/sirloin.jpg", description: "Lean sirloin steak with a smoky crust.", price: 18.99 },
        { name: "Steak Diane", src: "/images/diane.jpg", description: "Pan-seared steak with a creamy mushroom sauce.", price: 20.99 }
      ],
      Chicken: [
        { name: "Grilled Chicken Breast", src: "/images/grilled_chicken.jpg", description: "Healthy grilled chicken with lemon butter.", price: 15.99 },
        { name: "Buffalo Wings", src: "/images/buffalo_wings.jpg", description: "Spicy wings coated in buffalo sauce.", price: 12.99 },
        { name: "Chicken Tenders", src: "/images/tenders.jpg", description: "Crispy fried chicken strips with dip.", price: 13.99 },
        { name: "Honey Garlic Chicken", src: "/images/honey_garlic.jpg", description: "Chicken glazed with honey garlic sauce.", price: 14.99 },
        { name: "Fried Chicken", src: "/images/fried_chicken.jpg", description: "Classic fried chicken with Alfredo sauce.", price: 16.99 }
      ],
      Soup: [
        { name: "Tomato Basil Soup", src: "/images/tomato_soup.jpg", description: "Rich tomato soup with fresh basil.", price: 6.99 },
        { name: "Chicken Noodle Soup", src: "/images/noodle_soup.jpg", description: "Classic soup with chicken and vegetables.", price: 7.99 },
        { name: "Minestrone", src: "/images/minestrone.jpg", description: "Italian vegetable soup with pasta.", price: 8.99 },
        { name: "French Onion Soup", src: "/images/onion_soup.jpg", description: "Caramelized onions in beef broth with melted cheese.", price: 9.99 },
        { name: "Clam Chowder", src: "/images/clam_chowder.jpg", description: "Creamy seafood soup with clams and potatoes.", price: 10.99 }
      ],
      Desserts: [
        { name: "Chocolate Lava Cake", src: "/images/lava_cake.jpg", description: "Warm chocolate cake with a gooey center.", price: 5.99 },
        { name: "New York Cheesecake", src: "/images/cheesecake.jpg", description: "Creamy cheesecake with a graham cracker crust.", price: 6.99 },
        { name: "Tiramisu", src: "/images/tiramisu.jpg", description: "Italian dessert with espresso-soaked layers.", price: 7.99 },
        { name: "Apple Pie", src: "/images/apple_pie.jpg", description: "Classic apple pie with a golden crust.", price: 8.99 },
        { name: "Ice Cream Sundae", src: "/images/ice_cream.jpg", description: "Vanilla ice cream with chocolate drizzle and nuts.", price: 9.99 }
      ], 
      Drinks: [
        { name: "Cappuccino", src: "/images/cappuccino.jpg", description: "Rich espresso with frothy milk.", price: 3.99 },
        { name: "Iced Lemonade", src: "/images/lemonade.jpg", description: "Refreshing lemonade with fresh lemon slices.", price: 4.99 },
        { name: "Strawberry Smoothie", src: "/images/smoothie.jpg", description: "Creamy smoothie with fresh strawberries.", price: 5.99 },
        { name: "Mango Lassi", src: "/images/mango_lassi.jpg", description: "Indian mango yogurt drink.", price: 6.99 },
        { name: "Hot Chocolate", src: "/images/hot_chocolate.jpg", description: "Warm cocoa with marshmallows.", price: 3.99 }
      ]
    };  


export  {foodCategory, foodItems};
