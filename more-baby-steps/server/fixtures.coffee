if Teams.find().count() == 0
  [
    {
      name: 'Barcelona'
      yearFoundation: 1928
    }
    {
      name: 'Santarém'
      yearFoundation: 1956
    }
  ].forEach (data) -> Teams.insert(data)


# Things to note:

# forEach() is not supported by all browsers, but
# since this is run on the server all we care
# about is whether Node supports it, which it does
# Why don't we just pass the array to 'insert'
# instead of looping over it? If you pass the
# array then Meteor would insert only ONE team,
# with the data being the whole array.
# Upon saving that file Meteor should automagically
# restart itself. To be safe lets make sure our
# code has worked and the data is there. Go to the
# console and type:
