const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ArticleSchema = new Schema({


        title:{type:String,
                required:true,
                unique: true},
        date: {type:Date, default:Date.now},
        url: {type: String,
            required:true
            },
        saved:{type:Boolean, default:false},
        description:{type:String}

        
});



const Article = mongoose.model("Article", ArticleSchema);

module.exports = Article;
