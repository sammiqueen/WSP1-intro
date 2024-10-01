import express from "express"

const router = express.Router()

router.get("/", (request, response) => {
    const query = request.query.q || ""
    const names = [" John", " Jane", " Sammi", " Bagel"]
    let filterednames = names.filter((name) => name.toLowerCase().includes(query.toLowerCase()))


    response.render("search.njk", {
        title: "Google Impersonator v1.1",
        query,
        names: filterednames,
    })
})

export default router