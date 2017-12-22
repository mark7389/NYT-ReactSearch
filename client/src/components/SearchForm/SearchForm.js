import React from "react";
import "./SearchForm.css";

const SearchFrom = props => {


            return (

                <div className="row">
                    <form className="col s12">
                        <div className="row">
                            <div className="input-field col s8">
                                <label htmlFor="a_title">Title:</label>
        
                                <input placeholder="Title" name="title" id="a_title" type="text"  onChange={props.onChange} />
                            </div>
                            <div className="input-field col s8">
                                <label htmlFor="s_date">Start Date:</label>
        
                                <input placeholder="Start Date" name="start" id="s_date" type="date"  onChange={props.onChange} />
                                
                            </div>
                            <div className="input-field col s8">
                                <label htmlFor="e_date">End Date:</label>
        
                                <input placeholder="End Date" type="date" name="end" id="e_date"  onChange={props.onChange} />
                            </div>
                            <br/>
                            <button className="btn waves-effect waves-light" type="submit" name="action" onClick={props.onSubmit}>Submit
                                <i className="material-icons right">send</i>
                            </button>
                        </div>
                    </form>
                </div>


            )




}

export default SearchFrom;