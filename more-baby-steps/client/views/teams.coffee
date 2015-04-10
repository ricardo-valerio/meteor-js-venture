Template.teams.helpers
  congrats : "Yaaaay"
#  teamsArray : [
#            {
#              name: 'Team 1'
#              yearFoundation: 1928
#            }
#            {
#              name: 'Team 2'
#              yearFoundation: 1956
#            }
#          ]
  teamsArray : -> Teams.find()
