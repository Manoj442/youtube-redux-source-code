import React, { Component } from 'react';
import {StyledSearch} from './StyledSearch';
import {connect} from 'react-redux';
import {searchVideo} from './../../store/actions/AllAction';
class SearchComponent extends Component {   
    constructor(props) {
        super(props)    
        this.state = {
             value:''
        }
    }
    handleSubmit=(event)=>{
        event.preventDefault();
        this.props.onSearch(this.state.value);        
    }
    handleChange=(event)=>{
        this.setState({
            value:event.target.value
        })
     }
    render() {
        return (  
            <form onSubmit={this.handleSubmit}>
                 <StyledSearch action={{ icon: 'search' }} placeholder='Search' 
                 value={this.state.value}
                onChange={this.handleChange}/>  
            </form>                                                                                  
        )
    }
}
const mapDispatchToProps=(dispatch)=>{
    return{
        onSearch:searchedText=>{dispatch(searchVideo(searchedText))}
    }
}
export default connect(null,mapDispatchToProps)(SearchComponent);
