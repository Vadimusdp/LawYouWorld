import React from 'react';
import { Link } from 'react-router-dom';
const isMobile = (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) ? true : false

function MainContent(props) {
    // const isMobile = window.screen.width < 1200

    return (
        <div class={isMobile ? 'main_contentMobile' : "main_content"} id="main_content">
           <div class="about">
               {/* <h3 class="about_position" id="about_position">Front-End Developer</h3> */}
               {/* <h1 class="about_name" id="about_name">Donetskyy Vadim</h1> */}
               <p class="about_description">Citizenship: Ukrainian</p>
               <p class="about_description">Place of residence: Vinnytsia</p>
               <p class="about_description">Gender: male</p>
               <p class="about_description">Education: Higher</p>
               <p class="about_description">Date of birth: 01.01.1981</p>
               <p class="about_description">Marital status: married</p>
           </div>
           <div class="projects">
                <h2 class="title">Projects</h2>
                <ol class="list">
                    <li class="projects_item"><a href="https://granary.systems/"><span class="project_text">https://granary.systems/</span></a>.........  [<span class="project_text"> 1С </span>]</li>
                    <li class="projects_item"><Link to="/Main"><span class="project_text">Law You World</span></Link>........................[<span class="project_text">HTML5, CSS, JS, React.js </span>]</li>
                </ol>
           </div>
           <div class="works">
               <h2 class="title">Work Experience</h2>
               <div class="work">
                    <h3 class="work_title">1C software, <span class="work_selection">LLC "Principle", individual entrepreneur</span></h3>
                    <h5 class="period">2016-2022 <span class="period_selection">|</span> Ukraine</h5>
                    <ul class="list">
                        <li class="work_item"><span class="work_item_text">1C programming</span></li>
                        <li class="work_item"><span class="work_item_text">development of technical documentation</span></li>
                        <li class="work_item"><span class="work_item_text">implementation of ready-made software</span></li>
                        <li class="work_item"><span class="work_item_text">user training</span></li>
                        <li class="work_item"><span class="work_item_text">support and maintenance of implemented application solutions</span></li>
                    </ul>               
                </div>
               <div class="work">
                    <h3 class="work_title">Accountant of <span class="work_selection">OJSC "Ukrnafta"</span></h3>
                    <h5 class="period">2006-2016 <span class="period_selection">|</span> Ukraine</h5>
                    <ul class="list">
                        <li class="work_item"><span class="work_item_text">accounting for the sale of petroleum products</span></li>
                        <li class="work_item"><span class="work_item_text">reporting</span></li>
                        <li class="work_item"><span class="work_item_text">inventory</span></li>
                    </ul>               
                </div>
               <div class="work">
                    <h3 class="work_title">Manager, <span class="work_selection">LLC "Podillyaagroinvest" and others</span></h3>
                    <h5 class="period">2003-2006 <span class="period_selection">|</span> Ukraine</h5>
                    <ul class="list">
                        <li class="work_item"><span class="work_item_text">sale of goods</span></li>
                        <li class="work_item"><span class="work_item_text">customer consultation</span></li>
                    </ul>
               </div>
           </div>
           <div class="education">
                <h2 class="title">Education</h2>
                <div>
                    <h3 class="education_place">Vinnytsia National Technical University</h3>
                    <p class="specialty">accountant-economist</p>
                    <h5 class="education_period">2003 - 2005 <span class="period_selection">|</span> Ukraine</h5>
                </div>
                <div>
                    <h3 class="education_place">Vinnytsia State Agrarian University</h3>
                    <p class="specialty">agronomist</p>
                    <h5 class="education_period">1998 - 2003 <span class="period_selection">|</span> Ukraine</h5>
                </div>
           </div>
        </div>
    );
}

export default MainContent;