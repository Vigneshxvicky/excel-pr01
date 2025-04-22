import React from 'react'
// import Header from './component/Header'
import Body from './component/Body'
const Home = () => {
  return (
    <>

    {/* <Header/> */}
    <div className="w-full bg-[#006A71] backdrop-blur-md py-4 shadow">
      <h2 className="text-5xl font-extrabold mb-6 text-center bg-[#48A6A7] bg-clip-text text-transparent drop-shadow-lg tracking-widest font-montserrat uppercase">
       Excel Pro
      </h2>
    </div>
    <Body/>
    </>
  )
}

export default Home