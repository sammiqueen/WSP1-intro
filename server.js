import express, { request, response } from "express" //ESM
import nunjucks from "nunjucks" 
import morgan from "morgan"

import indexRouter from "./routes/index.js"
import searchRouter from "./routes/search.js"
import calculatorRouter from "./routes/calculator.js"

const app = express()

nunjucks.configure("views", {
    autoescape: true,
    express: app,  
})

app.use(express.static("public"))
app.use(morgan("dev"))

app.use(`/`, indexRouter)
app.use("/search", searchRouter)
app.use("/calculator", calculatorRouter)

app.use((request, response) => {
    response.status(404).render(`404.njk`, {
        title: `404 - Not Found`,
    })
})

app.listen(3000, () => {
    console.log("Server is running on http://localhost:3000")
})