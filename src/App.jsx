import React from 'react';
import './index.css';

function App() {
  return (
    <div className="App">
      <header className="mt-10 px-36   text-black flex justify-between items-center">
        <h1 className="text-3xl font-sans  font-bold text-violet-600">Talk Business</h1>
        <nav className='flex  '>
          <ul className="flex gap-10 space-x-4 items-center font-semibold">
            <li><a href="#" className="hover:underline">Home</a></li>
            <li><a href="#" className="hover:underline">About</a></li>
            <li><a href="#" className="hover:underline">Contact</a></li>
            <li><a href="#" className="hover:underline">Systems</a></li>
          </ul>
          <button className='px-5 py-4 ml-10 text-violet-600 w-[150px] border-2 border-violet-600 rounded-[150px]'>Contact us</button>
        </nav>
      </header>
      <main className="text-center mt-[143px]">
        <h1 className="text-5xl  font-bold mb-[30px]  ">Become a better <br /> business with us.</h1>
        <p className='font-normal  text-xl  mb-[31px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br /> Nullam turpis tortor, ultricies ut justo eu.</p>
        <button className='w-[200px] pt-[10px] pr-[40px] pb-[15px] pl-[40px] bg-violet-600 rounded-[150px]  text-white   '>Our busines</button>
        <img className='w-full mt-[132px]' src="./imgs/main_img.png" alt="" />
      </main>

      <content className="text-center">
        <h1 className='mt-32 text-xl  text-5xl  font-bold mb-[197px]'>Here is what’s happening in <br /> the world of talk business.</h1>

        <div className='flex align-center justify-center gap-40 font-bold  text-xl  mb-[68px]'>
          <div>
            <p className='text-left text-violet-600 mb-3'>MAY 2021</p>
            <p className='text-left'>Agile focused <br /> business services <br /> and more.</p>
          </div>
          <img src="./imgs/content_1.png" alt="" />
        </div>

        <div className='flex align-center justify-center gap-40 font-bold  text-xl  mb-[68px]'>
          <div>
            <p className='text-left text-violet-600 mb-3'>JUN 2021</p>
            <p className='text-left'>Agile focused <br /> business services <br /> and more.</p>
          </div>
          <img src="./imgs/content_2.png" alt="" />
        </div>

        <div className='flex align-center justify-center gap-40 font-bold  text-xl  mb-[68px]'>
          <div>
            <p className='text-left text-violet-600 mb-3'>JUL 2021</p>
            <p className='text-left'>Agile focused <br /> business services <br /> and more.</p>
          </div>
          <img src="./imgs/content_3.png" alt="" />
        </div>
      </content>
     <footer className='bg-violet-950 w-full h-[500px]'>
        <h1 className="text-teal-50 text-5xl ml-[64px]">Let’s start working to build a brighter future.</h1>
        <a className=' text-teal-50 text-2xl ml-[900px] mt-[46px] border border-solid border-[2px] pr-[100px] border-r-0 py-[25px] pl-[26px]' href="#">Join our mailing list</a>
        <button className='text-teal-50 text-2xl mt-[46px] border border-solid border-[2px] border-l-0 py-[25px] pr-[32px]'>Submit</button>
        <p className='text-teal-50 mt-[67px] ml-[64px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />Elementum posuere eget elementum vulputate elementum <br /> viverra sapien tellus aenean.</p>
        <div className=' mt-[20px] text-fuchsia-100'>
        <a className='ml-[64px]' href="#">Fb</a>
        <a className='ml-[15px]' href="#">In</a>
        <a className='ml-[15px]' href="#">Tw</a>
        <a className='ml-[15px]' href="#">Ln</a>
        </div>
        <div className='mt-[64px]'>
        <a className='ml-[67px] text-teal-50 text-2xl' href="#">New Business</a>
        <a className='ml-[1000px] text-teal-50 ' href="#">Copyright 2021. All rights reserved.</a>
        </div>
     </footer>
    </div>
  );
}


export default App ;