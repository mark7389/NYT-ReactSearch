import React, {Component} from "react";
import SearchForm from "../SearchForm";
import API from "../../util/API";
import Results from "../Results";
class Search extends Component {
    state={
        title:"",
        start:"",
        end:"",
        articles:[]
    }

    handleFormSubmit = (e) =>{
            e.preventDefault();

            console.log(this.state);
            API.get(this.state).then(res=>{
                this.setState({articles:res.data.dataArray});
                console.log(this.state.articles);
            });

    }
    handleSave = (e)=>{

            const ArticleIndex = e.target.id;
            API.save(this.state.articles[ArticleIndex]).then(res=>{

                console.log(res);
            })

    }

    handleInputChange = (e)=>{
        const name = e.target.name;
        const value = e.target.value;

        this.setState({
            [name]:value
        })

    }

    render(){

        
           return (<div>
            {this.state.articles.length ? (<Results articles={this.state.articles} onClick={this.handleSave}/>) :
            (<SearchForm onChange={this.handleInputChange} onSubmit={this.handleFormSubmit} />)}
            </div>
            )

    }




}

export default Search;