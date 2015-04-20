Template.teams.helpers
teams: -> Teams.find()
creating: -> Session.get 'creating'

Template.teams.events
"click .create": (e, tpl) ->
e.preventDefault()
Session.set 'creating', true

"submit form.form-create": (e, tpl) ->
e.preventDefault()
team = {name: tpl.$("input[name='name']").val()}
if team.name.length
Teams.insert team
Session.set 'creating', false
