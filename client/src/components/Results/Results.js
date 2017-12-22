import React from "react";
import {Link} from "react-router-dom";
import "./Results.css"
const Results = props =>{

      return (
        <div className="row">  
            {props.articles.map(article=>{

                    return( 
                    <div className="section" key={article._id}>
                        {!article.saved ? (
                            <div><h1>{article.title}</h1>
                            <p>{article.description}</p>
                            <button className="btn" id={article._id} onClick={props.onClick}>Save</button>
                            <a className="btn" href={article.url}>view</a></div>) :
                           (<div><h1>{article.title}</h1>
                            <p>{article.description}</p>
                            <button className="btn" id={article._id} onClick={props.onClick}>Delete</button>
                            <a className="btn" href={article.url}>view</a></div>) }
                    </div>
                    )
                    })
            }
        </div>)



}

export default Results;