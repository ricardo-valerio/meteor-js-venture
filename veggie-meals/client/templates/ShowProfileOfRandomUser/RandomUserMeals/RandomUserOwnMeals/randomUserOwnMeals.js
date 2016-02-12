if (Meteor.isClient){

    /***********************************************************
    *     Rendered
    ***********************************************************/
    Template.randomUserOwnMeals.onRendered(function () {
    });


    /***********************************************************
    *     Helpers
    ***********************************************************/
    Template.randomUserOwnMeals.helpers({
        user_id: function() {
            return Meteor.userId();
        }
    });


    /***********************************************************
    *     Events
    ***********************************************************/
    Template.randomUserOwnMeals.events({
    });

}

