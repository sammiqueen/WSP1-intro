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
    response.render("index.njk", {
        message: "Hemsidan!",
        title: "Hem",
    })
})

app.listen(3000, () => {
    console.log("Server is running on http://localhost:3000")
})