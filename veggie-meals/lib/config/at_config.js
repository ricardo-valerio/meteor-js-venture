//Routes
AccountsTemplates.configureRoute('signIn', {
    name: 'signin',
    layoutTemplate: 'signInLayout'
});


// Options
AccountsTemplates.configure({
    defaultLayout: 'signInLayout',
    overrideLoginErrors: true,
    showLabels: false,

    forbidClientAccountCreation: true,
    homeRoutePath: '/feed',

    negativeValidation: true,
    positiveValidation:true,
    negativeFeedback: true,
    positiveFeedback:false,
    showValidating: true,

    texts: {
        title: {
            signIn: ""
        },
        errors: {
            mustBeLoggedIn: "Must be Logged In!"
        }
    }
});
