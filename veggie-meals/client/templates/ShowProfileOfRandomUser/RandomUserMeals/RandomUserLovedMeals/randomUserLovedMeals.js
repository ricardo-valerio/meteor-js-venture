if (Meteor.isClient){

    /***********************************************************
    *     Rendered
    ***********************************************************/
    Template.randomUserLovedMeals.onRendered(function () {
    });


    /***********************************************************
    *     Helpers
    ***********************************************************/
    Template.randomUserLovedMeals.helpers({
        user_id: function() {
            return Meteor.userId();
        }
    });


    /***********************************************************
    *     Events
    ***********************************************************/
    Template.randomUserLovedMeals.events({
    });

}

