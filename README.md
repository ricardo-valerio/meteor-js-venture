# meteor-js-venture :rocket:


[http://docs.meteor.com/#/full/quickstart](http://docs.meteor.com/#/full/quickstart)

### Principles of Meteor

* **Data on the Wire**

 	Meteor doesn't send HTML over the network. The server sends data and lets the client render it.

* **One Language**

	Meteor lets you write both the client and the server parts of your application in JavaScript.

* **Database Everywhere**

	You can use the same methods to access your database from the client or the server.

* **Latency Compensation**

 	On the client, Meteor prefetches data and simulates models to make it look like server method calls return instantly.

* **Full Stack Reactivity**

   	In Meteor, realtime is the default. All layers, from database to template, update themselves automatically when necessary.

* **Embrace the Ecosystem**

	Meteor is open source and integrates with existing open source tools and frameworks.

* **Simplicity Equals Productivity**

	The best way to make something seem simple is to have it actually be simple. Meteor's main functionality has clean, classically beautiful APIs.

---

### Developer Resources

* [Stack Overflow](http://stackoverflow.com/questions/tagged/meteor)

    The best place to ask (and answer!) technical questions is on Stack Overflow. Be sure to add the meteor tag to your question.

* [Forums](https://forums.meteor.com/)

    Visit the Meteor discussion forums to announce projects, get help, talk about the community, or discuss changes to core.

* [The Meteor Manual](http://manual.meteor.com/)

    In-depth articles about the core components of Meteor can be found on the Meteor Manual. The first article is about Tracker, our transparent reactivity framework. More articles (covering topics like Blaze, Unibuild, and DDP) are coming soon!

---

### Structuring your application

A Meteor application is a mix of client-side JavaScript that runs inside a web browser or PhoneGap mobile app, server-side JavaScript that runs on the Meteor server inside a Node.js container, and all the supporting HTML templates, CSS rules, and static assets. Meteor automates the packaging and transmission of these different components, and **it is quite flexible about how you choose to structure those components in your file tree**.



### Special Directories

By default, any JavaScript files in your Meteor folder are bundled and sent to the client and the server. **However, the names of the files and directories inside your project can affect their load order, where they are loaded, and some other characteristics**. Here is a list of file and directory names that are treated specially by Meteor:


* **client**

	Any directory named client is not loaded on the server. Similar to wrapping your code in `if (Meteor.isClient) { ... }`. All files loaded on the client are automatically concatenated and minified when in production mode. In development mode, JavaScript and CSS files are not minified, to make debugging easier. (CSS files are still combined into a single file for consistency between production and development, because changing the CSS file's URL affects how URLs in it are processed.)

	HTML files in a Meteor application are treated quite a bit differently from a server-side framework. Meteor scans all the HTML files in your directory for three top-level elements: `<head>`, `<body>`, and `<template>`. The head and body sections are separately concatenated into a single head and body, which are transmitted to the client on initial page load.

* **server**

    Any directory named server is not loaded on the client. Similar to wrapping your code in `if (Meteor.isServer) { ... }`, except the client never even receives the code. Any sensitive code that you don't want served to the client, such as code containing passwords or authentication mechanisms, should be kept in the server directory.

    Meteor gathers all your JavaScript files, excluding anything under the client, public, and private subdirectories, and loads them into a Node.js server instance. In Meteor, your server code runs in a single thread per request, not in the asynchronous callback style typical of Node. We find the linear execution model a better fit for the typical server code in a Meteor application.

* **public**

    All files inside a top-level directory called public are served as-is to the client. When referencing these assets, do not include `public/` in the URL, write the URL as if they were all in the top level. For example, reference `public/bg.png` as `<img src='/bg.png' />`. This is the best place for favicon.ico, robots.txt, and similar files.

* **private**

    All files inside a top-level directory called private are only accessible from server code and can be loaded via the Assets API. This can be used for private data files and any files that are in your project directory that you don't want to be accessible from the outside.

* **client/compatibility**

    This folder is for compatibility JavaScript libraries that rely on variables declared with var at the top level being exported as globals. Files in this directory are executed without being wrapped in a new variable scope. These files are executed before other client-side JavaScript files.

* **tests**

    Any directory named tests is not loaded anywhere. Use this for any local test code.



---

### Files outside special directories

All JavaScript files outside special directories are loaded on both the client and the server. That's the place for model definitions and other functions. Meteor provides the variables Meteor.isClient and Meteor.isServer so that your code can alter its behavior depending on whether it's running on the client or the server.

CSS and HTML files outside special directories are loaded on the client only, and cannot be used from server code.


---

### Example File Structure

The file structure of your Meteor app is very flexible. Here is an example layout that takes advantage of some of the special folders mentioned above.

		lib/                      # common code like collections and utilities
		lib/methods.js            # Meteor.methods definitions
		lib/constants.js          # constants used in the rest of the code

		client/compatibility      # legacy libraries that expect to be global
		client/lib/               # code for the client to be loaded first
		client/lib/helpers.js     # useful helpers for your client code
		client/body.html          # content that goes in the <body> of your HTML
		client/head.html          # content for <head> of your HTML: <meta> tags, etc
		client/style.css          # some CSS code
		client/<feature>.html     # HTML templates related to a certain feature
		client/<feature>.js       # JavaScript code related to a certain feature

		server/lib/permissions.js # sensitive permissions code used by your server
		server/publications.js    # Meteor.publish definitions

		public/favicon.ico        # app icon

		settings.json             # configuration data to be passed to meteor --settings
		mobile-config.js          # define icons and metadata for Android/iOS


> You can also model your directory structure after the example apps.
> Run meteor create --example todos and explore the directories to see where all
> the files in a real app could go.


---

### File Load Order

It is best to write your application in such a way that it is insensitive to the order in which files are loaded, for example by using Meteor.startup, or by moving load order sensitive code into packages, which can explicitly control both the load order of their contents and their load order with respect to other packages. However, sometimes load order dependencies in your application are unavoidable.

There are several load ordering rules. They are applied sequentially to all applicable files in the application, in the priority given below:

1. HTML template files are always loaded before everything else
2. Files beginning with main. are loaded last
3. Files inside any lib/ directory are loaded next
4. Files with deeper paths are loaded next
5. Files are then loaded in alphabetical order of the entire path

		nav.html
		main.html
		client/lib/methods.js
		client/lib/styles.js
		lib/feature/styles.js
		lib/collections.js
		client/feature-y.js
		feature-x.js
		client/main.js


For example, the files above are arranged in the correct load order. `main.html` is loaded second because HTML templates are always loaded first, even if it begins with main.
Since rule 1 has priority over rule 2. However, it will be loaded after `nav.html` because rule 2 has priority over rule 5.

`client/lib/styles.js` and `lib/feature/styles.js` have identical load order up to rule 4; however, since `client` comes before `lib` alphabetically, it will be loaded first.

---

### Data and security

In Meteor, the client and server share the same database API. The same exact application code — like validators and computed properties — can often run in both places. But while code running on the server has direct access to the database, code running on the client does not. This distinction is the basis for Meteor's data security model.

> By default, a new Meteor app includes the `autopublish` and `insecure` packages, which
> together mimic the effect of each client having **full read/write access to the server's database. These are useful prototyping tools, but typically not appropriate for production applications. When you're ready, just remove the packages**.


Every Meteor client includes an in-memory database cache. **To manage the client cache, the server publishes sets of JSON documents, and the client subscribes to those sets.** As documents in a set change, the server patches each client's cache.

> Today most Meteor apps use `MongoDB` as their database because it is the best
> supported, though support for other databases is coming in the future. The `Mongo.
> Collection` class is used to declare Mongo collections and to manipulate them. Thanks to `minimongo`, Meteor's client-side Mongo emulator, `Mongo.Collection` can be used from
> both client and server code.

```javascript
		// declare collections
		// this code should be included in both the client and the server
		Rooms = new Mongo.Collection("rooms");
		Messages = new Mongo.Collection("messages");
		Parties = new Mongo.Collection("parties");

		// server: populate collections with some initial documents
		Rooms.insert({name: "Conference Room A"});
		var myRooms = Rooms.find({}).fetch();
		Messages.insert({text: "Hello world", room: myRooms[0]._id});
		Parties.insert({name: "Super Bowl Party"});
```


Each document set is defined by a publish function on the server. The publish function runs each time a new client subscribes to a document set. The data in a document set can come from anywhere, but the common case is to publish a database query.

```javascript
		// server: publish all room documents
		Meteor.publish("all-rooms", function () {
		  return Rooms.find(); // everything
		});

		// server: publish all messages for a given room
		Meteor.publish("messages", function (roomId) {
		  check(roomId, String);
		  return Messages.find({room: roomId});
		});

		// server: publish the set of parties the logged-in user can see.
		Meteor.publish("parties", function () {
		  return Parties.find({$or: [{"public": true},
		                             {invited: this.userId},
		                             {owner: this.userId}]});
		});
```

Publish functions can provide different results to each client. In the last example, a logged in user can only see Party documents that are public, that the user owns, or that the user has been invited to.

Once subscribed, the client uses its cache as a fast local database, dramatically simplifying client code. Reads never require a costly round trip to the server. And they're limited to the contents of the cache: a query for every document in a collection on a client will only return documents the server is publishing to that client.

```javascript
		// client: start a parties subscription
		Meteor.subscribe("parties");

		// client: return array of Parties this client can read
		return Parties.find().fetch(); // synchronous!
```

Sophisticated clients can turn subscriptions on and off to control how much data is kept in the cache and manage network traffic. When a subscription is turned off, all its documents are removed from the cache unless the same document is also provided by another active subscription.

When the client changes one or more documents, it sends a message to the server requesting the change. The server checks the proposed change against a set of allow/deny rules you write as JavaScript functions. The server only accepts the change if all the rules pass.

```javascript
		// server: don't allow client to insert a party
		Parties.allow({
		  insert: function (userId, party) {
		    return false;
		  }
		});

		// client: this will fail
		var party = { ... };
		Parties.insert(party);
```

If the server accepts the change, it applies the change to the database and automatically propagates the change to other clients subscribed to the affected documents. If not, the update fails, the server's database remains untouched, and no other client sees the update.

---

### Authentication and user accounts

Meteor includes `Meteor Accounts`, a state-of-the-art authentication system. It features secure password login using the bcrypt algorithm, and integration with external services including `Facebook, GitHub, Google, Meetup, Twitter, and Weibo`. Meteor Accounts defines a `Meteor.users` collection where developers can store application-specific user data.

Meteor also includes pre-built forms for common tasks like `login, signup, password change, and password reset emails`. You can add `Accounts UI` to your app with just one line of code. The accounts-ui package even provides a configuration wizard that walks you through the steps to set up the external login services you're using in your app.

---

### Input validation

Meteor allows your methods and publish functions to take arguments of any JSON type. (In fact, Meteor's wire protocol supports `EJSON`, an extension of JSON which also supports other common types like dates and binary buffers.) JavaScript's dynamic typing means you don't need to declare precise types of every variable in your app, but it's usually helpful to ensure that the arguments that clients are passing to your methods and publish functions are of the type that you expect.

Meteor provides a lightweight library for checking that arguments and other values are the type you expect them to be. Simply start your functions with statements like `check(username, String)` or `check(office, {building: String, room: Number})`. The check call will throw an error if its argument is of an unexpected type.

Meteor also provides an easy way to make sure that all of your methods and publish functions validate all of their arguments. Just run `meteor add audit-argument-checks` and any method or publish function which skips checking any of its arguments will fail with an exception.


---

### Templates

The easiest way to get data into templates is by defining helper functions in JavaScript. Define helpers with the `Template.templateName.helpers({ ... })` function. Putting it all together:

```html
	<!-- in myapp.html -->
	<body>
	  <h1>Today's weather!</h1>
	  {{> forecast}}
	</body>

	<template name="forecast">
	  <div>It'll be {{prediction}} tonight</div>
	</template>
```

```javascript
	// in client/myapp.js: reactive helper function
	Template.forecast.helpers({
	  prediction: function () {
	    return Session.get("weather");
	  }
	});
```
```javascript
		// in the JavaScript console
		Session.set("weather", "cloudy");

		Session.set("weather", "cool and dry");
```

To iterate over an array or database cursor, use {{#each}}:

```html
	<!-- in myapp.html -->
	<template name="players">
	  {{#each topScorers}}
	    <div>{{name}}</div>
	  {{/each}}
	</template>
```

```javascript
	// in myapp.js
	Template.players.helpers({
	  topScorers: function () {
	    return Users.find({score: {$gt: 100}}, {sort: {score: -1}});
	  }
	});
```

In this case, the data is coming from a database query. When the database cursor is passed to `{{#each}}`, it will wire up all of the machinery to efficiently add and move DOM nodes as new results enter the query.

Helpers can take arguments, and they receive the current template context data in this. Note that some block helpers change the current context (notably `{{#each}}` and `{{#with}}`):


```javascript
	// in a JavaScript file
	Template.players.helpers({
	  leagueIs: function (league) {
	    return this.league === league;
	  }
	});
```

```html
	<!-- in a HTML file -->
	<template name="players">
	  {{#each topScorers}}
	    {{#if leagueIs "junior"}}
	      <div>Junior: {{name}}</div>
	    {{/if}}
	    {{#if leagueIs "senior"}}
	      <div>Senior: {{name}}</div>
	    {{/if}}
	  {{/each}}
	</template>
```

Helpers can also be used to pass in constant data.

```javascript
	// Works fine with {{#each sections}}
	Template.report.helpers({
	  sections: ["Situation", "Complication", "Resolution"]
	});
```

Finally, you can use the events function on a template to attach event handlers. The object passed into events is documented at Event Maps. The this argument to the event handler will be the data context of the element that triggered the event.

```html
	<!-- myapp.html -->
	<template name="scores">
	  {{#each player}}
	    {{> playerScore}}
	  {{/each}}
	</template>

	<template name="playerScore">
	  <div>{{name}}: {{score}}
	    <span class="give-points">Give points</span>
	  </div>
	</template>
```

```javascript
	// myapp.js
	Template.playerScore.events({
	  'click .give-points': function () {
	    Users.update(this._id, {$inc: {score: 2}});
	  }
	});
```
