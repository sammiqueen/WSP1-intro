import express from "express"

const router = express.Router()

router.get("/om", (request, response) => {
    const view = request.query.v

    response.render("om.njk", {
        message: `Hej på dig ${view}`,
    })
})

router.get("/",(request, response) => {
    response.render("index.njk", {
        title: "Hello World",
        message: `Välkommen!`
    })
})

router.get(`/watch`, (request, response) => {
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

router.get(`/ytub`, (request, response) =>{
    const ID = request.query.v
    
    response.render(`ytub.njk`,{
        title: `Youtube`,
        ID: ID,
    })
})

export default router