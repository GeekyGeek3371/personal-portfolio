import React from 'react'

import '../styles/home.css';
import bg from '../assets/bg.jpg';

class Homepage extends React.Component{
    render(){
        return(
            <div className="fluid-container">
                <div className="Intro">
                    <div class="left">
                    {/* <source src="../assets/bacc.mp4" type="video/mp4"/> */}
                        <h1>About me</h1>
                        <div>Hello!</div>
                        <div>I am Sayak Maji. I am an aspiring fullstack Web developer. Welcome to my page!</div>
                        <div> Here you will see all my personal projects along with my experiences and skills.</div>
                        <div> I love breaking down complex problems into simpler ones and tackling them one at a time. </div>
                        {/* <div>I also </div> */}
                        <div class="btn">
                            <form action="https://drive.google.com/file/d/1mG4wWar6pFv4wdjUwZvBGdsC8zfKg1Eb/view?usp=sharing">
                            <input type="submit" class="resume" value="Download resume"/>
                            </form>
                        </div>
                    </div>
                    <div class="right">
                        <img src={bg} alt="nothing"/>
                        {/* <div className="credential">
                            <h2>SAYAK MAJI</h2>
                        </div> */}
                    </div>
                </div>
            </div>
        )
    }
}
export default Homepage;