import express from "express"

const router = express.Router()

router.get("/", (request, response) => {

    const n1 = parseInt(request.query.n1)
    const n2 = parseInt(request.query.n2)
    const symbol = request.query.symbol
    let answer

    switch (symbol) {
        case "add" :
            answer = n1 + n2;
            break;
        
        case "sub" :
            answer = n1 - n2;
            break;
        
        case "mul" :
            answer = n1 * n2;
            break;
        
        case "div" :
            answer = n1 / n2;
            break;
    }

    response.render("calculator.njk", {
        title: "Calculator",
        answer: answer,
    })
})

export default router