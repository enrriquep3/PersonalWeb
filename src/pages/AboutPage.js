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
            <p>Hi, my name is Enrrique Pimentel. I'm a creative, problem solver and hard working Web Developer with experience in  JavaScript,  Node Js, HTML5, React,  MongoDB, MySQL.</p>


            <p>I'm constantly learning new technologies and improving myself. Currently those things include gaining more experience with ES6, React, Hooks, Redux, and Node.</p>

            <p>My latest project, Covid-19 Tracker. You can check it out <a href="https://covid-tracker-indol-delta.vercel.app/" target="_blank" rel="noopener noreferrer">here</a>.</p>

            <p>Check out my <a href = {Pdf} target = "_blank" rel="noopener noreferrer">resume</a>.</p>

            <p>I am passionate to build, create and develop new ideas into products and services. Let's Create Great Things! </p>

            </Content>
            <img className="radarChart" src={RadarChart} alt="RadarChart"/>
        </div>
    );

}

export default AboutPage;
