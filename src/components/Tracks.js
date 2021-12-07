//this file get all the images and sample audio of the albums and display them
import React, { Component } from 'react';

class Tracks extends Component{
    state = { playing: false, audio: null, playingPreviewURL: null};

    //allow to play music when the clck the pic
    playAudio = previewUrl => () => {
        const audio = new Audio(previewUrl);
        // if else state that pevent other music to play at the same time
        // this will also will automatical pause and play the next song you play
        if (!this.state.playing) {
            audio.play();
            this.setState({ playing: true, audio, playingPreviewUrl: previewUrl });
          } else {
            this.state.audio.pause();
      
            if (this.state.playingPreviewUrl === previewUrl) {
              this.setState({ playing: false });
            } else {
                audio.play();
                this.setState({ audio, playingPreviewUrl: previewUrl });
              }
        }
    }

    //will display play, pause symbol, or n/a if there is no audio
    trackIcon = track => {
        if(!track.preview_url){
            return <span> n/a </span>
        }
        if ( 
            this.state.playing && 
            this.state.playingPreviewUrl === track.preview_url
        ){
            return <span>| |</span>;
        }
        return <span>&#9654;</span>;
    }

    render(){
        const { tracks } = this.props;
        return(
            <div>
                {
                    tracks.map(track => {
                        const { id, name, album, preview_url } = track;
                    
                        return(
                            <div 
                                key = {id} 
                                onClick={this.playAudio(preview_url)} 
                                className='track'
                            >
                                <img 
                                    src={album.images[0].url} 
                                    alt='track-image' 
                                    className='track-image' 
                                />
                                <p className = 'track-text'>{ name }</p>
                                <p className ='track-icon'>{this.trackIcon(track)}</p>
                            </div>

                        )

                    })
                }
            </div>
        )
    }
}

export default Tracks;

