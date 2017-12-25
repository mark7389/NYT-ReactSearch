import React from "react";
import {Link} from "react-router-dom";
import "./Results.css"
const Results = props =>{

      return (
        <div className="row">  
            {props.articles.map((article, i)=>{

                    return( 
                    <div className="section" key={i}>
                         
                            <div><h1>{article.title}</h1>
                            <p>{article.description}</p>
                            <button className="btn" id={i} onClick={props.onClick}>Save</button>
                            <a className="btn" href={article.url}>view</a></div>
                    </div>
                    )
                    })
            }
        </div>)



}

export default Results;