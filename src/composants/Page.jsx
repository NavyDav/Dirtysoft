import React from 'react';
import '../style/Page.css';
import Logo from './logo/LOGODS.png';
import LoupeIcon from './logo/loupe 1.png'
import Panier from './logo/Basket 2 1.png'
import Profil from './logo/login 1.png'
import Carou from './Caroussel/Caroussel.png'



export default function Page() {
    return (
      <div>
        <div className="topnav">
          <div className='dirty'>
            <img src={Logo} alt="Logo" />
          </div>
          <div className="search-container">
            <form action="/action_page.php">
              <input type="text" placeholder="Vous recherchez ?" name="search" />
              <button type="submit">
                <img src={LoupeIcon} alt="Loupe" />
              </button>
            </form>
          </div>
        </div>
  
        <div className='nav2'>
          <h1 className='vents'>TOP VENTE</h1>
          <div className='mini'>
          <img src={Panier} alt="Logo" />
          <img src={Profil} alt="Logo" />
          </div>
        </div>

        <div className='caroussel'>
        <img src={Carou} alt="Logo" />

        </div>
        <svg xmlns="http://www.w3.org/2000/svg" width="253" height="260" viewBox="0 0 253 260" fill="none">
  <g filter="url(#filter0_d_14_7)">
    <path d="M4 25C4 11.1929 15.1929 0 29 0H224C237.807 0 249 11.1929 249 25V227C249 240.807 237.807 252 224 252H29C15.1929 252 4 240.807 4 227V25Z" fill="white" fill-opacity="0.5" shape-rendering="crispEdges"/>
    <path d="M4.5 25C4.5 11.469 15.469 0.5 29 0.5H224C237.531 0.5 248.5 11.469 248.5 25V227C248.5 240.531 237.531 251.5 224 251.5H29C15.469 251.5 4.5 240.531 4.5 227V25Z" stroke="black" shape-rendering="crispEdges"/>
  </g>
  <defs>
    <filter id="filter0_d_14_7" x="0" y="0" width="253" height="260" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
      <feOffset dy="4"/>
      <feGaussianBlur stdDeviation="2"/>
      <feComposite in2="hardAlpha" operator="out"/>
      <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
      <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_14_7"/>
      <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_14_7" result="shape"/>
    </filter>
  </defs>
</svg>


<svg xmlns="http://www.w3.org/2000/svg" width="253" height="55" viewBox="0 0 253 55" fill="none">
  <g filter="url(#filter0_d_15_9)">
    <path d="M4 23.5C4 10.5213 14.5213 0 27.5 0H225.5C238.479 0 249 10.5213 249 23.5C249 36.4787 238.479 47 225.5 47H27.5C14.5213 47 4 36.4787 4 23.5Z" fill="#FC0BAA" fill-opacity="0.15" shape-rendering="crispEdges"/>
    <path d="M4.5 23.5C4.5 10.7975 14.7975 0.5 27.5 0.5H225.5C238.203 0.5 248.5 10.7975 248.5 23.5C248.5 36.2025 238.203 46.5 225.5 46.5H27.5C14.7974 46.5 4.5 36.2025 4.5 23.5Z" stroke="black" shape-rendering="crispEdges"/>
  </g>
  <defs>
    <filter id="filter0_d_15_9" x="0" y="0" width="253" height="55" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
      <feOffset dy="4"/>
      <feGaussianBlur stdDeviation="2"/>
      <feComposite in2="hardAlpha" operator="out"/>
      <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
      <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_15_9"/>
      <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_15_9" result="shape"/>
    </filter>
  </defs>
</svg>


      </div>
    );
  }