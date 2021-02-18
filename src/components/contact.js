import React from 'react'
import '../styles/cont.css';

class Contact extends React.Component{
    render(){
        return(
            <div className="conta">
                <br/><br/>
                <h1>Contact me</h1>
                <div>If you wish to contact me send the message here</div>
                <div className="content">
                <div className="leftx">
                    <h2>Send a Message here</h2><br/><br/>
                    <input className="Name" type="text" placeholder="Name.."/>
                    <input className="Email" type="text" placeholder="Email.."/>
                    <textarea placeholder="Message" className="Message"></textarea><br/>
                    <input className="Submit" type="submit" value="Send"/>
                </div>
                <div className="rightx">
                <h2>Contact Info.</h2><br/><br/>
                <dl>
                    <dt>EMAIL</dt>
                        <dd>maji.sayak@gmail.com</dd>
                    <dt>LINKEDIN</dt>
                        <dd>https://www.linkedin.com/in/sayak-maji-6645571a1/</dd>
                    <dt>GITHUB</dt>
                        <dd>https://github.com/GeekyGeek3371</dd>
                </dl>
                </div>
                </div><br/><br/><br/>
                
            </div>
            
        )
    }
}
export default Contact;
