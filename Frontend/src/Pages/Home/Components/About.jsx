import React from 'react'
import college from '../../../assets/college.png'
function About() {
  return (
    <>
      <div className='mt-56'>
          <p className='text-7xl text-white font-semibold text-center'>About Us</p>
          <div className='flex mx-28 mt-16 justify-center items-center gap-12'>
            <div className='border-2 border-sky-900 p-3 h-full'>
              <div className='h-auto w-100 bg-sky-900 bg-opacity-50 p-8 relative clip-path-slant-left'>
                <p className='absolute px-8 pr-12 py-3 top-0 left-0 text-3xl clip-path-slant-right font-semibold font-poppins text-white bg-sky-500 bg-opacity-70'>K.S.Rangasamy College of Technology</p>
                <p className='text-sky-400 font-poppins text-2xl leading-10 mt-16 text-justify'>
                  Established in 1994 near Tiruchengode, K.S.Rangasamy College of Technology (KSRCT) is part of the esteemed K.S.R. Educational Institutions. With a sprawling 300-acre campus 
                  and cutting-edge facilities, KSRCT offers a premier learning environment. It boasts the
                  ninth-largest student intake among self-financing engineering colleges in Tamil Nadu
                  (AICTE approved).
                </p>
              </div>
            </div>
            <img className='w-1/2 border-2 border-sky-900 p-3' src={college} alt="" />
          </div>
      </div>
      <div className='mt-28'>
          <div className='flex flex-row-reverse mx-28 mt-16 justify-center items-center gap-12'>
            <div className='border-2 border-sky-900 p-3 h-full'>
              <div className='h-auto w-100 bg-sky-900 bg-opacity-50 p-8 relative clip-path-slant-left'>
                <p className='absolute px-8 pr-12 py-3 top-0 left-0 text-3xl clip-path-slant-right font-semibold font-poppins text-white bg-sky-500 bg-opacity-70'>K.S.Rangasamy College of Technology</p>
                <p className='text-sky-400 font-poppins text-2xl leading-10 mt-16 text-justify'>
                  Established in 1994 near Tiruchengode, K.S.Rangasamy College of Technology (KSRCT) is part of the esteemed K.S.R. Educational Institutions. With a sprawling 300-acre campus 
                  and cutting-edge facilities, KSRCT offers a premier learning environment. It boasts the
                  ninth-largest student intake among self-financing engineering colleges in Tamil Nadu
                  (AICTE approved).
                </p>
              </div>
            </div>
            <img className='w-1/2 border-2 border-sky-900 p-3' src={college} alt="" />
          </div>
      </div>
    </>
  )
}

export default About