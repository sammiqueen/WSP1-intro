import express, { request, response } from "express" //ESM
import nunjucks from "nunjucks" 

const app = express()

nunjucks.configure("views", {
    autoescape: true,
    express: app,  
})

app.use(express.static("public"))

app.get("/om", (request, response) => {
    response.render("om.njk", {
        message: "Om Mig :3",
    })
})

app.get("/",(request, response) => {
    const name = request.query.name
    console.log(request.query)
    response.render("index.njk", {
        title: "Hello World",
        message: `name = ${name}`
    })
})

app.get(`/watch`, (request, response) => {
    const movieID = request.query.v
    console.log(movieID)

    const movies = {
        "test": {
            title: "shrek 2",
            year: 1994
        }
    }

    response.render(`watch.njk`, {
        title: `Watch`,
        movie: movies[movieID]
    })
})

app.get(`/ytub`, (request, response) =>{
    const ID = request.query.v
    
    response.render(`ytub.njk`,{
        title: `Youtube`,
        ID: ID,
    })
})

app.listen(3000, () => {
    console.log("Server is running on http://localhost:3000")
})