
const express = require("express");
const app = express();
const http = require("http");
const { stripVTControlCharacters } = require("util");

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static("public"));
app.engine("ejs", require("ejs").renderFile);
app.set("view engine", "ejs");

app.get("/", (req, res)=>{
    var charcters = [];
    for(let i=0; i < 6; i++){
        characters.push({
            image: "./images/Game_of_Thrones_title_card.jpeg",
            name: "Character " + i,
            link: "#"
        })
    }
    response.render("home");
})

app.listen(3000, (err) =>{
    console.log("Listening on port 3000")
})