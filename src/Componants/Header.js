import React from 'react'
import "./Header.css"

export default function Header() {
  const mnBtn=document.getElementsByClassName("menu-btn")
  function menuClick(){
    console.log("click");
    mnBtn.classList.toggle( )
    
  }
  // const mnBtn=document.getElementsByClassName("menu-btn")
  // mnBtn.addEventListner("click",()=>{
  // mnBtn.classList.toggle("active")
  // });
  return (
    <div className='header'>
        <a herf="#" className='brand'>mathamatics</a>
        <div className='menu-btn' onClick={menuClick}></div>
        <div className='navigation'>
            <div className="navigation-items">
                <a href='/' >Home</a>
                <a href='/about'>About</a>
                <a herf="">Contact</a>
                <a href='/solution'>Solutions</a>
            </div>
        </div>
    </div>
  )
}
