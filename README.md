# 13express

* * The server.js file requires the basic npm packages, express and path.

* * The  htmlRoutes.js file should include two routes:

* * * A GET Route to /survey which should display the survey page (app.get 'survey')

* * * A default, catch-all route that leads to home.html which displays the home page. (app.get '/')

* * Your apiRoutes.js file should contain two routes:

* * * A GET route with the url /api/friends. This will be used to display a JSON of all possible friends. (app.get '/api/friends')

* * * A POST routes /api/friends. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic. (app.post '/api/friends')

* * Save data in app/data/friend.js as an array of objects.