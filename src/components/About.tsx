// import React from 'react'

// const About = () => {
//   return (
//     <div id='about' className='container mx-auto px-4 sm:px-6 lg:px-8 pt-20 sm:pt-24 lg: pt-32'>
// <div className='grid gap-10 md:grid-cols-2 md:gap-20 items-center'>
//         <div>
//           <h2 className='text-4xl md:text-5xl'>About Me</h2>
//           <p className='text-gray-300 pt-2'>
//           I am a student at GIAIC, pursuing a course in Artificial Intelligencs, web 3.0 & Metaverse. Passionate about technology and constantly learning new skills to stay up-to-date with the latest innovations.
//           <br />
//           My academic journey includes qualifications shown on the right
//           </p>
//         </div>
//         <div>
//           <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-400 text-lg sm:text-xl md:text-2xl'>
//             <div className='space-y-2'>
//               <h2>B.com</h2>
//               <h2>Intermediate</h2>
//               <h2>Matriculation</h2>
//             </div>
//             <div className='space-y-2'>
//               <h2>One Year Post Graduate Certificate In Accounting</h2>
        
//             </div>
//           </div>
//         </div>
//       </div>

//     </div>
//   )
// }

// export default About
import React from 'react';

const About = () => {
  return (
    <div id='about' className='container mx-auto px-4 sm:px-6 lg:px-8 pt-20 sm:pt-24 lg:pt-32'>
      <div className='grid gap-10 md:grid-cols-2 md:gap-20 items-center'>
        
        {/* Left Column: About Text */}
        <div>
          <h2 className='text-3xl sm:text-4xl md:text-5xl font-bold text-white'>About Me</h2>
          <p className='text-gray-300 pt-4 text-base sm:text-lg md:text-xl'>
            I am a student at GIAIC, pursuing a course in Artificial Intelligence, Web 3.0 & Metaverse. 
            Passionate about technology and constantly learning new skills to stay up-to-date with the latest innovations.
            <br />
            My academic journey includes qualifications shown on the right.
          </p>
        </div>
        
        {/* Right Column: Education Qualifications */}
        <div>
          <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-400 text-lg sm:text-xl md:text-2xl'>
            <div className='space-y-2'>
              <h2>B.com</h2>
              <h2>Intermediate</h2>
              <h2>Matriculation</h2>
            </div>
            <div className='space-y-2'>
              <h2>One Year Post Graduate Certificate In Accounting</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
