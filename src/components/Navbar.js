import React from 'react'
import '../styles/navv.css';
import ava from '../assets/avatar.png'
class Navbar extends React.Component{
    render(){
        return(
            <div className="bg-div">
               <div class="logo-img">
                <img className="logo-img" src={ava}  ALT="align box"></img>
                <h3 className="usrnm">Sayak Maji</h3>
               </div> 
                <nav>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About me</a></li>
                        <li><a href="#">My skills</a></li>
                        <li><a href="#">Work</a></li>
                        <li><a href="#">Contact</a></li>
                        
                    </ul>
                </nav>
            </div>
        )
    }
}
export default Navbar;