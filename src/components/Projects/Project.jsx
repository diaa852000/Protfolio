import React from 'react'
import { Link } from 'react-router-dom'

import weather from "../../assest/images/weatherapp.jpg" 
import ecommerce from "../../assest/images/ecommerce.jpg" 
import landing from "../../assest/images/landingpage.jpg"
import interiorDesign from "../../assest/images/landingTwo.jpg"
import netflix from "../../assest/images/netflix.jpg"

import FadeIn from '../FadeIn/FadeIn'

const Project = () => {
    const myProjects = [
        {
            "name": "weather app", 
            "link":"https://netflix-v2-82d4b.web.app/",
            "image": netflix
        },
        {
            "name": "weather app", 
            "link":"https://tourmaline-tartufo-952345.netlify.app/",
            "image": weather
        },
        {
            "name": "landing page", 
            "link":"https://ephemeral-muffin-905136.netlify.app/",
            "image": landing

        },
        {
            "name": "UI Ecommerce", 
            "link": "https://654088a0a77e1d5606978874--melodic-moonbeam-064e47.netlify.app/",
            "image": ecommerce
        },
        {
            "name": "Interior Design", 
            "link": "https://radiant-gumption-7b9b5c.netlify.app/",
            "image": interiorDesign
        },

    ]

    return (
        <div id='projects'>
            <div className='max-w-[1240px] mx-auto py-6 flex flex-col lg:flex-row flex-wrap justify-evenly items-center '>
                {myProjects.map((project, index ) => (
                    <FadeIn key={index} delay={(index + 1) * 0.1} direction={index >= 2 ? "left" : "right"}>
                        <div className='text-white flex flex-col'>
                        <Link to={project.link}>
                            <div className='w-72'>
                                <img src={project.image} alt={project.name} className='object-cover object-center rounded-md hover:scale-95 transition-all ease-in-out duration-300 hover:rotate-2'/>
                            </div>
                        </Link>
                        <Link to={project.link} className='text-center mt-2 text-lg font-semibold capitalize'>
                            {project.name}                            
                        </Link>
                    </div>

                    </FadeIn>
                ))}
            </div>
        </div>
    )
}

export default Project