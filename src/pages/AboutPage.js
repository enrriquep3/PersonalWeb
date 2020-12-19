import React from 'react';
import Hero from '../components/Hero';
import Content from '../components/Content';
import "./styles.css";
import RadarChart from '../assets/images/radar.jpg'

import Pdf from '../assets/images/resume.pdf';

function AboutPage(props) {

    return(
        <div>
            <Hero title={props.title} />

            <Content>
            <p>Hello there, my name is Enrrique Pimentel. I'm a creative, hard worker Web Developer with experience in  JavaScript,  Node Js, HTML5, React,  MongoDB, MySQL</p>


            <p>I'm constantly learning new technologies and improving myself. Currently those things include gaining more experience with React, Redux, and Node Js</p>

            <p>My latest project, E-Shop App, is a E-commerce App. You can check it out <a href="https://devgrub.com" target="_blank" rel="noopener noreferrer">here</a></p>

            <p>Check out my <a href = {Pdf} target = "_blank" rel="noopener noreferrer">resume</a></p>

            <p>I am passionate to build, create and develop new ideas into products and services. Let's Create Great Things! </p>

            </Content>
            <img className="radarChart" src={RadarChart} alt="RadarChart"/>
        </div>
    );

}

export default AboutPage;