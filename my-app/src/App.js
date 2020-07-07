import React, { Component } from 'react';
import Intro from './components/intro/Intro'
import Navbar from './components/navbar/Navbar'
class App extends Component {
    state = {  }
    render() { 
        return (
            <div>
                {/* <div className="website-name-container">
                    <h1 className="website-name">Daniel Himchan Yun</h1>
                </div> */}
                <Navbar />
                <main className="container">
                <Intro />
                </main>
                
            </div>
        );
    }
}
 
export default App;