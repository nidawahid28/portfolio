import React from 'react'

const Skills = () => {
  return (
    <div id='skills'className='container pt-32'>
      <div className='grid md:grid-cols-2 gap-20 items-center'>
        <div>
          <h2 className='text-4xl md:text-5xl'>Technologies I Work With</h2>
          <p className='text-gray-300 pt-2'>
            I have a solid foundation in web development, specializing in HTML, CSS and JAVASCRIPT. My experience extends to using frameworks like Next.js to create dynamic and user-friendly applications. I am also proficient in Tailwind CSS for efficient styling and design. With a passion for learning, I stay updated on the latest technologies to enhance my skill set and contribute effectively to projects.
          </p>
        </div>
        <div>
          <div className='grid grid-cols-2 text-gray-400 text-3xl sm:text-4xl'>
            <div className='space-y-2'>
              <h2>HTML</h2>
              <h2>CSS</h2>
              <h2>JAVASCRIPT</h2>
            </div>
            <div className='space-y-2'>
              <h2>TAILWIND CSS</h2>
              <h2>TYPESCRIPT</h2>
              <h2>NEXT.JS</h2>
            </div>
          </div>
        </div>
      </div>
   
     
        
    </div>
  )
}

export default Skills