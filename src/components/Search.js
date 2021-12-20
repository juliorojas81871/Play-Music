//This file handle the searches of the music program
import React, { Component } from 'react';

class Search extends Component {
    state = { artistQuery: ''};
    updateArtistQuery = event => {
        this.setState({artistQuery: event.target.value});
    }
    // when the user hit enter, it will be equivalent of clicking the search button 
    handleKeyPress = event => {
        if (event.key === 'Enter'){
            this.searchArtist();
        }
    }
    //get the pass app callback
    searchArtist = () => {
        this.props.searchArtist(this.state.artistQuery);
    }

    render(){
        return(
            <div>
                <input 
                    onChange ={this.updateArtistQuery} 
                    onKeyPress = {this.handleKeyPress}
                    placeholder ='Search for an Artist' 
                />
                <button onClick={this.searchArtist}>Search</button>
            </div>
        )
    }
}
export default Search;