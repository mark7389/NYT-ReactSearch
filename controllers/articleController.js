const axios = require("axios");
const mongoose = require("mongoose");
const db = require("../models");
const Article = db.Article;
console.log(Article);
const apiKey = require("./apiKey");
const url="https://api.nytimes.com/svc/search/v2/articlesearch.json"

module.exports = {

    insert: function(req, res){
        const URL = `${url}?q=${req.body.title}&begin_date=${req.body.start}&end_date=${req.body.end}&apikey=${apiKey}`;
        console.log(URL);
        axios.get(URL).then((results)=>{
            const dataArray= [];
            results.data.response.docs.map((doc, i, array)=>{
               dataArray.push({
                   title:doc.headline.main,
                   date:doc.pub_date,
                   description:doc.snippet,
                   url:doc.web_url, 
               });
            });
            Article.create(dataArray).then(dbModel=>res.json(dbModel))
            .catch(err=>console.log(err));
            
        }).catch(err=>console.log(err));
        
    },
    

};