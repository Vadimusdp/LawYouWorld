import React from 'react';
import photo from '../../components/rezume/img/photo_2022-05-21_16-48-07.jpg';
import Image from '../../UI/image/Image';
const isMobile = (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) ? true : false

function Aside(props) {
    // const isMobile = window.screen.width < 1200

    return (
            <aside class={isMobile ? "sidebarMobile" : "sidebar"} id="sidebar">
            <div className={isMobile ? 'sidebarContactsMobile' : 'sidebarContacts'} id="sidebarContacts">
            <div class={"Photo"}>
                <Image 
                    src={photo}
                    className={isMobile ? 'photoMobile' : 'photo'}
                    width={'auto'}
                    height={170}
                />
                {/* <img src={photo} alt="User photo" class="photo" id="photo"> */}
            </div>
                <div className={isMobile ? 'contactsMobile' : "contacts"} id="contacts">
                    {/* <h3 className="sidebar_title_position" id="sidebar_title_position">Front-End Developer</h3> */}
                    <h3 className="sidebar_title">Contacts</h3>
                    <p> <span class="contact_text">C: </span><a href="tel:+380673382609" class="contact_link">+38 067 338 26 09</a></p>
                    <p> <span class="contact_text">E: </span><a href="mailto:vadimusdp@gmail.com" class="contact_link">vadimusdp@gmail.com</a></p>
                </div>
            </div>
            <div class="tech_skills">
                <h3 class="sidebar_title">Tech Skills</h3>
                <ul class="tech_skills_list">
                    <li class="sidebar_list"><span class="sidebar_list_text">1C</span></li>
                    <li class="sidebar_list"><span class="sidebar_list_text">HTML5</span></li>
                    <li class="sidebar_list"><span class="sidebar_list_text">CSS3</span></li>
                    <li class="sidebar_list"><span class="sidebar_list_text">GIT</span></li>
                    <li class="sidebar_list"><span class="sidebar_list_text">JavaScript</span></li>
                    <li class="sidebar_list"><span class="sidebar_list_text">React.js</span></li>
                    <li class="sidebar_list"><span class="sidebar_list_text">Node.js</span></li>
                </ul>
            </div>
            <div class="soft_skills">
                <h3 class="sidebar_title">Soft Skills</h3>
                <ul class="tech_skills_list">
                    <li class="sidebar_list"><span class="sidebar_list_text">Scrum</span></li>
                    <li class="sidebar_list"><span class="sidebar_list_text">Agile</span></li>
                    <li class="sidebar_list"><span class="sidebar_list_text">GTD</span></li>
                    <li class="sidebar_list"><span class="sidebar_list_text">Teamwork</span></li>
                    <li class="sidebar_list"><span class="sidebar_list_text">Slack</span></li>
                    <li class="sidebar_list"><span class="sidebar_list_text">Jira</span></li>
                    <li class="sidebar_list"><span class="sidebar_list_text">Confluens</span></li>
                    <li class="sidebar_list"><span class="sidebar_list_text">Bitrix24</span></li>
                </ul>
            </div>
            
        </aside>        
        // </div>
    );
}

export default Aside;