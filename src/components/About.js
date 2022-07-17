import React from 'react'

const About = () => {
  return (
    <div className='about text-center' id='about'>
    <div className="about-title">About Me</div>
    <div className="about-main row">
      <div className="about-image col-lg-6 col-sm-12 my-5">
        <img src="https://www.allianceplast.com/wp-content/uploads/no-image.png" alt="my-pic"/>
      </div>
      <div className="intro col-lg-6 col-sm-12">
        <div className="my-3 text-center"><h1 className='about-name'>Pranshu Tyagi</h1></div>
        <div className="about-myself text-center">Full Stack Web-developer. Has knowledge about Data Science, Machine Learning, Computer Vision and many more things. </div>
        <div className="about-interests text-center"><h1>Interests</h1>Loves to play sports, travel, solving challenges and to talk to people of differnet thinking...</div>
      </div>
    </div>
    </div>
  )
}

export default About
