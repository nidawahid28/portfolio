// import React from 'react';
// import { FiMail } from "react-icons/fi";
// import { BsTelephone } from "react-icons/bs";

// const Contact = () => {
//   return (
//     <div id='contact' className='pt-32 container'>
//       <div className='grid md:grid-cols-2 gap-10'>
//       <div className='space-y-8'>
//         <h2 className='text-5xl'>Contact Us</h2>
//         <div className='flex gap-3 items-center'>
//         <FiMail size={30}/> xyz@gmail.com
//         </div>

//         <div className='flex gap-3 items-center'>
//         <BsTelephone size={30}/> 0341000000
//         </div>
//       </div>
//       <div className='space-y-8'>
//         <div className='flex flex-col gap-1'>
//           <label htmlFor="name">Name</label>
//           <input type="text" 
//           className='h-[40px] bg-transparent border border-gray-400'
//           id='name'/>
//         </div>

//         <div className='flex flex-col gap-1'>
//           <label htmlFor="email">Email</label>
//           <input type="text" 
//           className='h-[40px] bg-transparent border border-ac'
//           id='email'/>
//         </div>
//         <div className='flex flex-col gap-1'>
//           <label htmlFor="message">Message</label>
//           <textarea 
//           className='h-[40px] bg-transparent border border-gray-400'
//           id='message' rows={10}></textarea>
//         </div>
//         <button className='bg-gray-500 p-2 px-6'>Send</button>
//       </div>

//       </div>
//     </div>
//   )
// }

// export default Contact
import React from 'react';
import { FiMail } from "react-icons/fi";
import { BsTelephone } from "react-icons/bs";

const Contact = () => {
  return (
    <div id='contact' className='pt-20 sm:pt-32 container mx-auto px-4'>
      <div className='grid gap-10 md:grid-cols-2'>
        {/* Left Column: Contact Information */}
        <div className='space-y-8'>
          <h2 className='text-4xl sm:text-5xl font-bold'>Contact Us</h2>
          
          <div className='flex items-center gap-3 text-gray-300'>
            <FiMail size={30} />
            <span>xyz@gmail.com</span>
          </div>

          <div className='flex items-center gap-3 text-gray-300'>
            <BsTelephone size={30} />
            <span>0341000000</span>
          </div>
        </div>

        {/* Right Column: Contact Form */}
        <div className='space-y-8'>
          <div className='flex flex-col gap-1'>
            <label htmlFor="name" className='text-gray-300'>Name</label>
            <input 
              type="text" 
              className='h-10 bg-transparent border border-gray-400 p-2 focus:outline-none focus:border-blue-500'
              id='name'
              placeholder='Enter your name'
            />
          </div>

          <div className='flex flex-col gap-1'>
            <label htmlFor="email" className='text-gray-300'>Email</label>
            <input 
              type="email" 
              className='h-10 bg-transparent border border-gray-400 p-2 focus:outline-none focus:border-blue-500'
              id='email'
              placeholder='Enter your email'
            />
          </div>

          <div className='flex flex-col gap-1'>
            <label htmlFor="message" className='text-gray-300'>Message</label>
            <textarea 
              className='bg-transparent border border-gray-400 p-2 focus:outline-none focus:border-blue-500'
              id='message' 
              rows={6} 
              placeholder='Your message here...'
            ></textarea>
          </div>

          <button className='bg-gray-500 text-white p-2 px-6 rounded-md hover:bg-gray-600 transition'>
            Send
          </button>
        </div>
      </div>
    </div>
  );
}

export default Contact;
