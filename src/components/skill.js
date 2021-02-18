import React from 'react';
import '../styles/skill.css';

class Skills extends React.Component{
    render(){
        return(
            <div className="skills">
                <div class="lefty">
                    <h1>Skills</h1>
                    <p>HTML</p>
                    90%
                    <div class="containers">
                        <div class="skills html"></div>
                    </div><br/>

                    <p>CSS</p>
                    80%
                    <div class="containers">
                        <div class="skills css"></div>
                    </div><br/>

                    <p>JavaScript</p>
                    65%
                    <div class="containers">
                        <div class="skills js"></div>
                    </div><br/>

                    <p>PHP</p>
                    60%
                    <div class="containers">
                        <div class="skills php"></div>
                    </div><br/>

                    <p>Python</p>
                    65%
                    <div class="containers">
                        <div class="skills python"></div>
                    </div><br/>

                    <p>C/C++</p>
                    65%
                    <div class="containers">
                        <div class="skills c"></div>
                    </div><br/>

                    <p>ReactJS</p>
                    65%
                    <div class="containers">
                        <div class="skills react"></div>
                    </div><br/>

                    <p>React native</p>
                    65%
                    <div class="containers">
                        <div class="skills native"></div>
                    </div><br/>
                </div>

                <div class="righty">
                    <h1>Experiences</h1>
                    <dl>
                        <dt><h2>SAMSUNG PRISM STUDENT PROGRAMME</h2></dt>
                            <dd>Building Bluetooth Device specific information dataset using web crawling</dd>
                            <dd> Beautiful Soup, Python </dd>
                            <dd> Sep 2020 - Present </dd>
                        <dt><h2>IEEE PES STUDENT CHAPTER VIT</h2></dt>
                            <dd>Core Committee member</dd>
                            <dd> May 2019 - February 2020 (10 months) </dd>
                    </dl><br/><br/>
                    <h1>Achievements</h1>
                    <dl>
                        <dt><h2>Philips Code to Care Hackathon</h2></dt>
                            <dd>top 9/4000</dd>
                            <dd> 2020 </dd>
                        <dt><h2>ZS Prize Hackathon</h2></dt>
                            <dd>top 50/33420</dd>
                            <dd>2021</dd>
                        <dt><h2>Competitive coding profile</h2></dt>
                            <dd>3 star in Codechef</dd>
                    </dl>
                </div>
            </div>
        )
    }
}

export default Skills;