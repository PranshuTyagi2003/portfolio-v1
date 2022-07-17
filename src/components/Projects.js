import React from 'react'
import Project from './Projectapi'

const Projects = () => {
  return (
    <>
    <div className="project-main" id='projects'>
    <h1 className='project-title row'>Some Projects Made by Me:</h1>
    {Project.map((singleProject) => {
      const {id, image, name, desc, btn1, btn2} = singleProject;

      return (
        <>
        
    <div className="project col-lg-4 col-sm-12" key={id}>
    <div><img src={image} alt="coding" className='project-image'/></div>
      <div className="project-name text-center">{name}</div>
      <div className="project-desc text-center">{desc}</div>
      <a href={btn1} className='project-btn'><button className="btn btn-primary proj-btn">View</button></a>
      <a href={btn2} className='project-btn'><button className="btn btn-primary proj-btn">Source Code</button></a>
    </div>
    

        </>
      )
    })}
    <a href="https://github.com/PranshuTyagi2003?tab=repositories" target="_blank"> <p className='projects-more'>To see more projects, check my Github Repositries <i class="fa fa-brands fa-github"></i></p></a>
    </div>
    </>
  )
}

export default Projects
