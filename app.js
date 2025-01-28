// import Express
import express from "express";

// Instantiate express application
const app = express();

// serve static files from public
app.use(express.static('public'));

//define a port number for our servers
const PORT = 3000;

//define a default route for our home page
app.get("/", (req, res) => {

    // send our home page as a response
    res.sendFile(`${import.meta.dirname}/views/home.html`);
})

// tell the server to listen on our port
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`)
});

