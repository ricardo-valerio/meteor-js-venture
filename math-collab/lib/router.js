Router.configure({
   layoutTemplate: 'appLayout',
   notFoundTemplate: 'notFound'
});


Router.route('/', function() {
    this.render("texEditor");
}, {
     name: "index"
   }
);


Router.route('/inbox', function() {
    this.render("inboxMessages");
}, {
     name: "inbox"
   }
);

Router.route('/bazinga', function() {
    this.render("bazinga");
}, {
     name: "bazinga"
   }
);
