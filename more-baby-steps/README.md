[file-structure-understanding-tutorial](http://www.webtempest.com/meteorjs-setup-structure)

Remember how Meteor combines all your javascript? So what if you want jQuery to load first? Luckily anything in a folder called 'lib' is loaded first. Also the deeper the folder, the higher up the position it will be loaded. So /client/lib will be loaded before /lib. Files within the folders are loaded by alphabetical order. You don't really HAVE to structure it like this - you could put your css in your views folder if you wanted - Meteor will find them.

Also note that Meteor includes jQuery by default...so don't put it in your app at all.


---

meteor add coffeescript

---

When we define a collection, we want both the server and client to know about it. This means we should define it in a folder outside of the 'client' and 'server' folders. We will put it in lib/collections as a file called 'teams.coffee': 

![server-client](https://cloud.githubusercontent.com/assets/184383/5019453/dceb9088-6b13-11e4-9d2e-f8a5f1f80bea.jpg)

---

meteor remove autopublish

why?:

 Autopublish makes it so you don't have to publish or subscribe anything - it publishes everything! So it forces Minimongo to completely mimic Mongo (same as going Meteor.publish 'teams', -> Team.find() but for every collection you create). This is done to help speed up creating an app. But since you will almost always never want this functionality in a real app I chose to remove this sorcery so you can learn how to publish and subscribe properly. 

---
