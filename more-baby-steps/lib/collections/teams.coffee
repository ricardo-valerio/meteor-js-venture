@Teams = new Mongo.Collection('teams')

# First note the @ symbol. In coffeescript this means "this" -
# so it's like going this.Teams. We need to do this so that the
# rest of the app has access to Teams as a global variable.
# We can't write window.Teams because the 'window' object is only
# available and used in the browser. In the server environment
# (Node) there is no 'window' object (it has an object called
# 'global' that replaces it). So luckily we can use 'this' as
# this resolves to 'window' in the browser and 'global' in Node.
# Secondly you can see we pass 'teams' as a parameter. This is
# the name of the collection (table) that is created in Mongo.
# We don't really need to worry about this in our code - we will
# always use the variable name 'Teams'. But if you're looking
# through the database be aware the collection is called 'teams'.

