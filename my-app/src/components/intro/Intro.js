import React, { Component } from 'react';
import Navbar from '../navbar/Navbar';

class Intro extends Component {

    state = {
        imageUrl: 'https://picsum.photos/200',
        state: 1
      }

    renderAnotherPic = flag =>{
        if(flag == 1){
            this.setState({ imageUrl : 'https://picsum.photos/100' })
            this.setState({ state : 0 })
        }
        else{
            this.setState({ imageUrl : 'https://picsum.photos/200' })
            this.setState({ state : 1 })
        }
    }

    render() { 
        return (
            <div className="body-container">
                <img src={this.state.imageUrl} alt=""/>
                <p>Daniel Himchan Yun</p>
                <button className="btn btn-primary"onClick={ () => this.renderAnotherPic(this.state.state)}>Another pic</button>
            </div>
        );
    }
}
 
export default Intro;
