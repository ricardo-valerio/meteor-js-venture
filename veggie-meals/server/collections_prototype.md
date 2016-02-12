/**********************************************************
*     Users Collection
**********************************************************/

{ // start of document
  "_id": "giqgs2168efyu2",
  "username": "Ricardo",
  "avatar": "avatar.png",
  "birthday": "20 August 1990",
  "country_name": "Portugal",
  "country_code": "pt",
  "bio": "My Life is like a black hole, full of nothing and everything at the same time!",
  "number_of_days_within_a_veggie_life": 1,
  "meals": {
     // local datetime to keep track
     // of the limit - 4 mealSelfies
     "12 July 2015": [
         {
            // each meal info
            "_id": "1",
            "title": "my awesome lunch!",
            "description": "Check how it looks delicious! My Mom did it for me ...",
            "category": "breakfast", // breakfast, lunch, snack, dinner
            "image_name": "7616sugs56wftf7672.png",
            "datetime_uploaded": "012-04-23T18:25:43.511Z",
            "it_has_ingredients": true,
            "ingredients": ["tomato", "apples", "..."], // optional
            "it_has_recipe": true,
            "recipe": ["first prepare the apples", "then cut the tomato in half", "..."], //optional
            "number_of_likes": 123,
            "number_of_comments": 31,
          },
          {
            // Lunch
          },
          {
            // Snack
          },
          {
            // Dinner
          }
      ] // end of meals of the day 12 July 2015
  }, // end of meals
  "feelings": [
      {
        "_id": "iugs8sr3eii3gyi3eg",
        "title": "the tile of this awesome feeling...",
        "post": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio eveniet sunt tempora error, perferendis, qui. Voluptatibus reprehenderit molestias aliquam excepturi, ipsum nihil vitae officia velit omnis dolore, qui quo facilis.",
        "datetime": "012-04-23T18:25:43.511Z"
      },
      {
        // each feeling info
      },
      {
        // each feeling info
      }
  ],

  //-------------------------------------- LOVED STUFF

  "meals_loved": [
      {
        "user_id": "87343kbf2fvfwf",
        "meal_id": "kbegeigy56"
      },
      {
        // another loved meal
      },
      {
        // another loved meal
      }
  ],
  "feelings_loved": [
      {
        "user_id": "87343kbf2fvfwf",
        "feeling_id": "kbegeigy56"

      },
      {
        // another loved feeling
      },
      {
        // another loved feeling
      }
  ],
  "restaurants_loved": [
      {
        "user_id": "87343kbf2fvfwf",
        "restaurant_id": "kbegeigy56"

      },
      {
        // another loved restaurant
      },
      {
        // another loved restaurant
      }
  ],

  //-------------------------------------- COMMENT STUFF
  "meals_commented": [
      {
        "user_id": "uhsuho3rou3hro3hr",
        "meal_id:": "7tw9dtw9dwtd9ddw",
        "comment": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione laudantium commodi iusto quaerat ipsum eos fuga voluptatum quibusdam iste, amet dicta sint cupiditate in illum perspiciatis ex, cumque odit nostrum.",
        "datetime": "012-04-23T18:25:43.511Z"
      },
      {
        // each commented meal info
      },
      {
        // each commented meal info
      }
  ],
  "feelings_commented": [
      {
        "user_id": "uhsuho3rou3hro3hr",
        "feeling_id:": "7tw9dtw9dwtd9ddw",
        "comment": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione laudantium commodi iusto quaerat ipsum eos fuga voluptatum quibusdam iste, amet dicta sint cupiditate in illum perspiciatis ex, cumque odit nostrum.",
        "datetime": "012-04-23T18:25:43.511Z"
      },
      {
        // each commented feeling info
      },
      {
        // each commented feeling info
      }
  ],
  "restaurants_commented": [
      {
        "restaurant_id": "uhsuho3rou3hro3hr",
        "comment": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione laudantium commodi iusto quaerat ipsum eos fuga voluptatum quibusdam iste, amet dicta sint cupiditate in illum perspiciatis ex, cumque odit nostrum.",
        "datetime": "012-04-23T18:25:43.511Z"
      },
      {
        // each commented restaurant info
      },
      {
        // each commented restaurant info
      }
  ]
} // end of document

