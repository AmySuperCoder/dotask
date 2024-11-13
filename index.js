const express = require("express")
//Setup express
const app = express()

const PORT = process.env.PORT || 3000

function doWork (task) {
    return `Task Complete: ${task}`
}

//configure your doors so that it knows what to listen to aka routes verbs
app.get("/doWork", (req, res) => {
    //input
const task = req.query.task;
    //do work
    const result = doWork(task)

    //output
    //server output
    console.log(result)


    //client output
    res.json({
        message: result
    })
})


console.log(doWork(`Learning express`));

app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`))