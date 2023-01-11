import React, { useState } from 'react';
// import {Link, WithRouter} from 'react-router-dom';
import {Link as LinkDom} from 'react-router-dom';



import {Link, animateScroll as scroll} from 'react-scroll'
import logo from './assets/icons/logo.png';
import background from './assets/background/ACAbackground_update.mp4';
import ava_about from './assets/background/ganko.png';
import ms1 from './assets/samples/2140_cropped.png';
import ms2B from './assets/samples/3271_cropped.png';
import none from './assets/icons/icon_none.png'
import arrowb from './assets/icons/arrow_bottom2.png';


import './App.css';

// footer

import TrojanShinnevolform from "./assets/background/Trojan.png";




// const NavBar = () => {
class NavBar extends React.Component {
        

    constructor(props) {
        super(props);
        this.scrollToTop = this.scrollToTop.bind(this);
        this.state={active: false};
      }


    scrollToTop() {
        scroll.scrollToTop();
      }

    



    render(){
        return( 
            
            <div class="flex relative  z-auto min-h-screen flex flex-col transition-all duration-200 overflow-hidden selection:bg-[#ff5a1d] ">

            
                {/* NAV */}      
            
                <div class=" flex z-50 absolute top-0 right-0 left-0  bg-transparent min-w-full z-50 ">
                        
                    <div class="flex justify-between p-3.5 md:justify-around md:left-1.5 items-center md:p-8  w-full fixed  "> 

                        {/* MOBILE */}
                       <LinkDom to ="/" class="header__logo " >
                            <div class="w-20 lg:w-32">
                                <img class="" src={logo}></img>
                            </div>
                        </LinkDom> 
                        <div class="md:invisible visible md:hidden float-right">

                            <LinkDom to ='/mint' class="text-white temp-disabled-link disabled cursor-not-allowed ">
                                <button class="navMint   hover:text-defaultdark hover:bg-neutral-300
                            ">
                                    MINT
                                </button>
                            </LinkDom>

                        </div>  

                  
                    
                        {/* LINK */}
                        <div class="flex right-0 top-5  w-[50vw] bg-black bg-opacity-75 justify-around items-center   mx-auto hidden md:flex " >
                            
                                <LinkDom to ='/shinnverse'  class="text-white">
                                    <button class="font-body p-[5px] disabled hover:text-neutral-900 hover:bg-neutral-300 bg-teal-400 w-28   "> 
                                    SHINNVERSE
                                    </button>

                                </LinkDom>


                               
                                <LinkDom to = '/mint' class="text-white temp-disabled-link disabled cursor-not-allowed " >
                                    <button class="font-body p-[5px] hover:text-defaultdark hover:bg-neutral-300 w-20 " >
                                    MINT 
                                    </button>
                                </LinkDom>

                                    
                   

        

                                <LinkDom to = '/the-pilgrimage' class="text-white cursor-not-allowed temp-disabled-link">
                                    <button class="font-body p-[5px] disabled hover:text-defaultdark hover:bg-neutral-300   " >
                                    THE PILGRIMAGE
                                    </button> 
                                    <sup class="-top-2 tracking-wide ">SOON</sup>

                                </LinkDom>
                                <LinkDom to ='/license' class="text-white">
                                    <button class="font-body p-[5px] disabled hover:text-defaultdark hover:bg-neutral-300 ">
                                        TERMS & CONDITIONS
                                    </button>
                                </LinkDom>
                                
                        
                

                        </div>

                        


                        <div class="flex hidden sm:flex  text-white float-right  items-center justify-end ">
                            <a href="https://twitter.com/raikyrieNFT" class="inline-block transition-all duration-350 hover:opacity-60 " rel="noopener noreferrer" target="_blank">
                                <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 sm:h-8 sm:w-8 mr-5" fill="currentcolor"><title>Twitter</title><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"></path></svg>
                            </a>


                            <a href="" class="inline-block transition-all duration-350 hover:opacity-60 disabled cursor-not-allowed opacity-30 temp-disabled-link" rel="noopener noreferrer" target="_blank">
                                <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 sm:h-8 sm:w-8 mr-5" fill="currentcolor"><title>Discord</title><path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z"></path></svg>
                            </a>

                            <a href="https://opensea.io/collection/raikyrie" class="inline-block transition-all duration-350 hover:opacity-60 opacity-30 temp-disabled-link " rel="noopener noreferrer" target="_blank">
                                <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 sm:h-8 sm:w-8" fill="currentcolor"><title>OpenSea</title><path d="M12 0C5.374 0 0 5.374 0 12s5.374 12 12 12 12-5.374 12-12S18.629 0 12 0ZM5.92 12.403l.051-.081 3.123-4.884a.107.107 0 0 1 .187.014c.52 1.169.972 2.623.76 3.528-.088.372-.335.876-.614 1.342a2.405 2.405 0 0 1-.117.199.106.106 0 0 1-.09.045H6.013a.106.106 0 0 1-.091-.163zm13.914 1.68a.109.109 0 0 1-.065.101c-.243.103-1.07.485-1.414.962-.878 1.222-1.548 2.97-3.048 2.97H9.053a4.019 4.019 0 0 1-4.013-4.028v-.072c0-.058.048-.106.108-.106h3.485c.07 0 .12.063.115.132-.026.226.017.459.125.67.206.42.636.682 1.099.682h1.726v-1.347H9.99a.11.11 0 0 1-.089-.173l.063-.09c.16-.231.391-.586.621-.992.156-.274.308-.566.43-.86.024-.052.043-.107.065-.16.033-.094.067-.182.091-.269a4.57 4.57 0 0 0 .065-.223c.057-.25.081-.514.081-.787 0-.108-.004-.221-.014-.327-.005-.117-.02-.235-.034-.352a3.415 3.415 0 0 0-.048-.312 6.494 6.494 0 0 0-.098-.468l-.014-.06c-.03-.108-.056-.21-.09-.317a11.824 11.824 0 0 0-.328-.972 5.212 5.212 0 0 0-.142-.355c-.072-.178-.146-.339-.213-.49a3.564 3.564 0 0 1-.094-.197 4.658 4.658 0 0 0-.103-.213c-.024-.053-.053-.104-.072-.152l-.211-.388c-.029-.053.019-.118.077-.101l1.32.357h.01l.173.05.192.054.07.019v-.783c0-.379.302-.686.679-.686a.66.66 0 0 1 .477.202.69.69 0 0 1 .2.484V6.65l.141.039c.01.005.022.01.031.017.034.024.084.062.147.11.05.038.103.086.165.137a10.351 10.351 0 0 1 .574.504c.214.199.454.432.684.691.065.074.127.146.192.226.062.079.132.156.19.232.079.104.16.212.235.324.033.053.074.108.105.161.096.142.178.288.257.435.034.067.067.141.096.213.089.197.159.396.202.598a.65.65 0 0 1 .029.132v.01c.014.057.019.12.024.184a2.057 2.057 0 0 1-.106.874c-.031.084-.06.17-.098.254-.075.17-.161.343-.264.502-.034.06-.075.122-.113.182-.043.063-.089.123-.127.18a3.89 3.89 0 0 1-.173.221c-.053.072-.106.144-.166.209-.081.098-.16.19-.245.278-.048.058-.1.118-.156.17-.052.06-.108.113-.156.161-.084.084-.15.147-.208.202l-.137.122a.102.102 0 0 1-.072.03h-1.051v1.346h1.322c.295 0 .576-.104.804-.298.077-.067.415-.36.816-.802a.094.094 0 0 1 .05-.03l3.65-1.057a.108.108 0 0 1 .138.103z"></path></svg>
                            </a>
                            
                            

                        </div>

    

                    </div>


                </div>
                

            

                {/* 1ST DIV */}
                <main class="flex-1 ">
                    {/* STAGE-1 - DIV - 1 */}
                    <div class=" visible min-h-screen justify-center bg-cover bg-center bg-no-repeat  ">
                        <div class="top-[-15px] xl:top-[-5px] absolute w-full bg-bottom  ">
                            <video class="video-background w-full h-screen absolute object-cover overflow-hidden " autoplay="autoplay"  loop playsinline="" muted="" type="video/mp4">
                                 <source src={background} type="video/mp4"/>  
                            </video>
                            <div class="relative top-0 h-screen w-full bg-black/40"></div> 
                        </div> 

                        {/* BLACK OVERLAY */}
                         <div class="absolute top-0 h-screen w-full bg-black/20 "></div> 

                        {/* BLACK GRADIENT */}
                        {/* <div class="bg-gradient-to-t from-black/10 to-black/10 h-screen bottom-0 left-0 right-0 z-50 fixed"></div>   */}
                    
                        {/* TITLE FRONTPAGE */}

                        <div class="relative text-center text-white  md:p-40 place-content-center flex flex-col items-center justify-center h-screen text-center ">

                            
                            <Link to="featured" spy={true} smooth={true} offset={10} duration={500}>
                                <h1 class=" hero glitch layers lg:text-[8rem] text-[4rem] mb-6 ml-4 hover:text-[#1fbba6] transition-all duration-350 cursor-pointer text-center place-self-center " data-text="銃使">
                                    <span class="xl:text-[11rem] md:text-[9rem] text-[5rem]  ">銃使</span> 
                                </h1>
                            </Link>


                            
                            <br/>
                        
                            <div class="flex w-full mx-auto  justify-center ">
                                <h2 class="font-Azonix text-white lg:text-2xl md:text-base text-sm mb-6 p-4 md:p-2 cursor-default   " >Our Land, Shinorechi, the City Of Ruins</h2>

                                    <div class="mt-5 md:visible invisible md:block hidden">
                                        <span class="font-Azonix mr-2 text-5xl  animation-delay-200 transition-all duration-400 animate-blinker">.</span>

                                        <span class="font-Azonix mr-2 text-5xl  animation-delay-400 transition-all duration-400 animate-blinker">.</span>

                                        <span class="font-Azonix mr-2 text-5xl  animation-delay-800 transition-all duration-400 animate-blinker">.</span>
                                    </div>
                            </div>

                            
                        
                            

                            <br/>
                            <a href="" class="inline-block transition-all duration-350 hover:opacity-60">
                                {/* <svg xmlns="http://www.w3.org/2000/svg" fill="white" width="40" height="40" viewBox="0 0 24 24" role="img">
                                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                                </svg>
                                <title> Twitter </title> */}
                                <img class="" src={arrowb}></img>


                            </a>
                            

                    



                        </div>
                        


                    </div>





                    {/* 2ND DIV */}
                    
                    <div class="relative min-h-full justify-center  ">
                        
                        {/* trojan */}
                            <div class=" background__trojan"></div>

                        
                        <div class="flex flex-col lg:flex-row  justify-between items-center relative -top-4 w-full  " id="featured" >
                                    
                                
                                {/* shinnverse */}
                                <section class="flex h-[600px] lg:w-3/5 mr-10 relative z-30 ">


                                    
                                    <div class=" pt-4 md:pt-[133px] md:ml-[59px] md:mr-[17px]  mx-auto h-full lg:h-screen  ">

                                        <div class="titleTrack">
                                            <h2 class=" text-white font-Orbitron text-2xl md:text-4xl tracking-wider " >The 
                                            <br/>Shinnverse</h2>
                                        </div>
                                        <div> 
                                            <div class="pb-2 md:pb-9 font-EuroStyle text-white text-xl md:text-2xl tracking-wide font-[550]   ">
                                                <p>
                                                The Shinn Universe is the story of Raikyries, who are filled with hope of the dangers ahead.
                                                <br/>
                                                who feel they are reputable to join forces with humans besieged by the evil incarnate to save mankind from further destruction.

                                        
                                                </p>

                                            </div>
                                        </div>
                                        

                                    </div>
                                </section>
                            {/*  sm:max-w-[120px] */}
                                {/* series */}
                                <section class="flex h-full w-full lg:w-2/5 md:h-screen flex flex-col z-30   ">

                                    {/* WHOLE SERIES BOX */}
                                    <div class="split-two flex flex-col relative  md:pt-20 md:pb-20 mx-auto  ">                    
                                        <div class="pb-3 text-white font-Orbitron text-xl md:text-2xl ">Series</div>
                                        
                                        {/* COLUMN 1 */}
                                        {/* flex box-content justify-between bg-white/70 border rounded-tr-xl mt-2 2xl:h-16 h-14 w-64 md:w-80 2xl:w-96 p-2 mt-1.5 rounded-lg */}
                                        <div>
                                        <div class="flex box-content justify-between bg-white/70 border rounded-tr-xl mt-2 2xl:h-16 h-14 w-64 md:w-80 2xl:w-96 p-2 mt-1.5 rounded-lg  ">
                                            
                                            {/* FRONTAL */}
                                            <div class="flex">
                                                <div class="leftBoxRaikyrie m-1 pl-1 pr-4 pt-0.5 pb-0.5" > 

                                                    <img class="ms1 object-contain max-w-full max-h-full rounded-md" src={ms1}></img>

                                                </div>

                                                <div class="flex flex-col justify-center text-black font-EuroStyle text-base xl:text-lg "> 
                                                    <div class="tracking-widest font-bold">
                                                    RAIKYRIE 
                                                    </div>
                                                    
                                                    <div class="font-medium text-md">
                                                    Jan 2023, 3,333 CC0 NFT 
                                                    </div>
                                                </div>
                                                                                                        
                                            </div>
                                        
                                            {/* BACK */}
                                            <div class="flex">
                                                <div class="flex justify-center items-center h-14 w-14 m-1.5">
                                                    <div class=""> 
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="black" class="w-8 sm:w-14 h-8">
                                                            <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
                                                        </svg>


                                                    </div>
                                                </div>
                                            </div>
                                            

                                        

                                        </div>
                                        </div>
                                        

                                        {/* COLUMN2 */}
                                        <div class="flex box-content justify-between bg-white/70 border rounded-tr-xl mt-2 2xl:h-16 h-12 w-64 md:w-80 2xl:w-96 p-2 mt-1.5 rounded-lg opacity-40 ">
                                                
                                                {/* FRONTAL */}
                                                <div class="flex">
                                                    <div class="leftBoxRaikyrie m-1 pl-1 pr-4 pt-0.5 pb-0.5" > 

                                                        <img class="ms1 object-contain max-w-full max-h-full rounded-md" src={none}></img>

                                                    </div>

                                                    <div class=" flex flex-col justify-center text-black font-EuroStyle text-sm md:text-base 2xl:text-lg"> 
                                                        <div class="tracking-widest font-bold">
                                                            <div class="inline-block">
                                                            STORM RAIKYRIE
                                                            </div>
                                                            <div class="font-base inline-block">
                                                            「MERGE」
                                                            </div>
                                                        </div>
                                                        
                                                        
                                                        <div class="text-md font-medium  ">
                                                        March 2023
                                                        </div>
                                                    </div>
                                                                                                            
                                                </div>
                                            
                                                {/* BACK */}
                                                <div class="flex">
                                                    <div class="flex justify-center items-center h-14 w-14 m-1.5">
                                                        <div class=""> 
                                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="black" class="w-8 sm:w-14 h-8">
                                                                <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
                                                            </svg>


                                                        </div>
                                                    </div>
                                                </div>
                                        </div>


                                            {/* COLUMN  3*/}
                                        <div class="flex box-content justify-between bg-white/70 border rounded-tr-xl mt-2 2xl:h-16 h-10 w-64 md:w-80 2xl:w-96 p-2 mt-1.5 rounded-lg  opacity-40  ">
                                            
                                            {/* FRONTAL */}
                                            <div class="flex">
                                                <div class="leftBoxRaikyrie m-1 pl-1 pr-4 pt-0.5 pb-0.5" > 

                                                    <img class="ms1 object-contain max-w-full max-h-full rounded-md" src={none}></img>

                                                </div>

                                                <div class="flex flex-col justify-center text-black font-EuroStyle text-base xl:text-lg "> 
                                                    <div class="tracking-widest font-bold ">
                                                    FALLONS 
                                                    </div>
                                                    
                                                    <div class="text-md font-medium">
                                                    2023 - 2024
                                                    </div>
                                                </div>
                                                                                                            
                                            </div>
                                            
                                            {/* BACK */}
                                            <div class="flex">
                                                <div class="flex justify-center items-center h-14 w-14 m-1.5">
                                                    <div class=""> 
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="black" class="w-8 sm:w-14 h-8">
                                                            <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
                                                        </svg>


                                                    </div>
                                                </div>
                                            </div>
                                        </div>


                                        {/* COLUMN 4 */}
                                        <div class="flex box-content justify-between bg-white/70 border rounded-tr-xl mt-2 2xl:h-16 h-10 w-64 md:w-80 2xl:w-96 p-2 mt-1.5 rounded-lg  opacity-40  ">
                                            
                                            {/* FRONTAL */}
                                            <div class="flex">
                                                <div class="leftBoxRaikyrie m-1 pl-1 pr-4 pt-0.5 pb-0.5" > 

                                                    <img class="ms1 object-contain max-w-full max-h-full rounded-md" src={none}></img>

                                                </div>

                                                <div class="flex flex-col justify-center text-black font-EuroStyle text-base xl:text-lg "> 
                                                    <div class="tracking-widest font-bold">
                                                    THE CAPSULE
                                                    </div>
                                                    
                                                    <div class="text-md font-medium text-md">
                                                    2024
                                                    </div>
                                                </div>
                                                                                                            
                                            </div>
                                            
                                            {/* BACK */}
                                            <div class="flex">
                                                <div class="flex justify-center items-center h-14 w-14 m-1.5">
                                                    <div class=""> 
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="black" class="w-8 sm:w-14 h-8">
                                                            <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
                                                        </svg>


                                                    </div>
                                                </div>
                                            </div>
                                        </div>



                                        {/* COLUMN 5 */}
                                        <div class="flex box-content justify-between bg-white/70 border rounded-tr-xl mt-2 2xl:h-16 h-10 w-64 md:w-80 2xl:w-96 p-2 mt-1.5 rounded-lg  opacity-40">
                                            
                                            {/* FRONTAL */}
                                            <div class="flex">
                                                <div class="leftBoxRaikyrie m-1 pl-1 pr-4 pt-0.5 pb-0.5" > 

                                                    <img class="ms1 object-contain max-w-full max-h-full rounded-md" src={none}></img>

                                                </div>

                                                <div class="flex flex-col justify-center text-black font-EuroStyle text-base xl:text-lg "> 
                                                    <div class="tracking-widest font-bold">
                                                    TROJAN SHINN
                                                    </div>
                                                    
                                                    <div class="text-md font-medium text-md">
                                                    2024 - 2025
                                                    </div>
                                                </div>
                                                                                                            
                                            </div>
                                            
                                            {/* BACK */}
                                            <div class="flex">
                                                <div class="flex justify-center items-center h-14 w-14 m-1.5">
                                                    <div class=""> 
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="black" class="w-8 sm:w-14 h-8">
                                                            <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
                                                        </svg>


                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="mt-2">
                                        *Timeline subject to change, depending on market circumstances.
                                        </div>



                                    </div>



                                </section>

                            
                                                            






                        </div>
                    </div>




       

                    {/* 3RD DIV */}

                    <div class=" flex div-about z-30 min-h-screen visible mx-auto  w-full top-0  bg-about2 bg-cover bg-center relative   ">
                                    
                            
                                    {/* BLACK GRADIENT */}
                                    <div class="bg-gradient-to-t from-defaultdark to-defaultdark/0 h-96 absolute -bottom-4 left-0 right-0 w-full fixed "></div>
                                
                                    {/* BLACK OVERLAY */}
                                    <div class="absolute top-0 h-full w-screen bg-black/40 -z-10"></div>
        
        
                                    <div class="relative flex flex-col lg:flex-row min-h-screen w-full mx-auto lg:m-12 lg:ml-14 justify-center">
        
                                        {/* <div class="relative max-w-full">
                                    
                                            <h1 class="pt-12 md:pt-20 font-Azonix md:text-[130px]  text-[#2dd4bf]  ">
                                            About 
                                            </h1>
        
                                            <div class="flex ava-image-wrapper md:bottom-0 block ml-[10rem] absolute w-[55vh]    ">
                                                    <div class="max-w-[1030px] block ">
                                                        <img alt role="presentation" aria-hidden="true" src={ava_about} class="max-w-full block static -ml-8 h-auto"></img>
                                                    </div>
                                            </div>
                                        </div> */}
        
                                            <section class="flex lg:w-2/5  mr-10 md:ml-0 ">
                                                
        
                                                <div class=""> 
                                                    
                                                        <h1 class="pt-12 md:pt-15 md:text-[4em] text-[2em] text-[#2dd4bf] font-Azonix  "> About</h1>
                                                 
        
                                                        
                                                        <div class="flex flex-col w-full pt-8 z-50 min-h-screen">
        
        
                                                            <h1 class=" pt-6 text-base pb-4 text-[#EFE6DD] font-bold font-Orbitron">「 FAQ 」</h1>
                                    
                                                        
                                                            
        
                                                            <div class="shadow-md flex mb-[20px]">
        
                                                                <div class=" overflow-hidden border border-2 border-white-200  ">
                                                                <label class="">
                                                                    <input class="absolute opacity-0 peer" type="checkbox"/>
                                                                   
                                                                    <h4 class="p-2 sm:p-5 text-white text-left text-sm md:text-base bg-transparent hover:bg-bridge/25 inline-block cursor-pointer w-auto uppercase focus:outline-none">
                                                                    How many NFTs will be available? </h4>
                                                                    
                                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 inline-block float-right mt-5 mr-2 cursor-pointer peer-checked:rotate-90">
                                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
                                                                    </svg>
        
                                                                    <div class=" text-base md:text-xl tracking-wider  overflow-hidden bg-transparent max-h-0 peer-checked:max-h-screen px-[10px] md:px-[30px] ml-[calc(0.01rem_+_30px)] sm:ml-[calc(1.25rem_+_50px)]  md:mb-[10px] border-l-4 border-l-white border-double"><p> 
                                                                        There'll be 3,333 unique Raikyrie Angels residing in Shinnverse. This is the 1st out of 5 phases as shown on the Series Roadmap. All Raikyrie Holders reserve early exclusive rights to mint an NFT.
                                                                        </p></div>
                                                                    
                                                                </label>
                                                                </div>
                                                                
                                                            </div>

                                                            <div class="shadow-md flex mb-[20px]">
        
                                                                    <div class=" overflow-hidden border border-2 border-white-200  ">
                                                                    <label class="">
                                                                        <input class="absolute opacity-0 peer" type="checkbox"/>
                                                                    
                                                                        <h4 class="p-2 sm:p-5 text-white text-left text-sm md:text-base bg-transparent hover:bg-bridge/25 inline-block cursor-pointer w-auto uppercase focus:outline-none">
                                                                        What Is The Mint Price? </h4>
                                                                        
                                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 inline-block float-right mt-5 mr-2 cursor-pointer peer-checked:rotate-90">
                                                                        <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
                                                                        </svg>

                                                                        <div class=" text-base md:text-xl tracking-wider  overflow-hidden bg-transparent max-h-0 peer-checked:max-h-screen px-[10px] md:px-[30px] ml-[calc(0.01rem_+_30px)] sm:ml-[calc(1.25rem_+_50px)]  md:mb-[10px] border-l-4 border-l-white border-double"><p> Price is 0.0045 ETH, Maximum limit of 2 Raikyries per person. </p></div>
                                                                        
                                                                    </label>
                                                                    </div>
        
                                                            </div>
                                                            
                                                            
                                                            
        
                                                            <div class="shadow-md flex mb-[20px]">
        
                                                                <div class=" overflow-hidden border border-2 border-white-200 w-full ">
                                                                <label class="">
                                                                    <input class="absolute opacity-0 peer" type="checkbox"/>
                                                                
                                                                    <h4 class="p-2 sm:p-5 text-white text-left text-sm md:text-base bg-transparent hover:bg-bridge/25 inline-block cursor-pointer w-auto uppercase focus:outline-none">
                                                                        How Do I Mint?
                                                                    </h4>
                                                                    
                                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 inline-block float-right mt-5 mr-2 cursor-pointer peer-checked:rotate-90">
                                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
                                                                    </svg>
        
                                                                    <div class=" text-base md:text-xl tracking-wider  overflow-hidden bg-transparent max-h-0 peer-checked:max-h-screen px-[10px] md:px-[30px] ml-[calc(0.01rem_+_30px)] sm:ml-[calc(1.25rem_+_50px)]  md:mb-[10px] border-l-4 border-l-white border-double">
                                                                        
                                                                   
                                                                            <p>
                                                                               
                                                                                Mint can be found on 
                                                                                    <div>
                                                                                    <a href="https://raikyrie.xyz/mint" title="raikyrie.xyz/mint"    >
                                                                                        <span class=" font-bold text-[#d03800] underline" >raikyrie.xyz/mint</span>
                                                                                    </a>
                                                                                    </div>
                                                                                
        
                                                                                    <p>
                                                                                  Stay tuned as the mint portal will be opened an hour prior to when we make an announcement on twitter.
                                                                                  </p>
                                                                            </p>
                                                                       
                                                                     
        
        
                                                                  
                                                                    </div>
                                                                    
                                                                </label>
                                                                </div>
                                                                
                                                            </div>
        

                                                            <div class="shadow-md flex mb-[20px]">
        
                                                                <div class=" overflow-hidden border border-2 border-white-200 w-full ">
                                                                <label class="">
                                                                    <input class="absolute opacity-0 peer" type="checkbox"/>
                                                                
                                                                    <h4 class="p-2 sm:p-5 text-white text-left text-sm md:text-base bg-transparent hover:bg-bridge/25 inline-block cursor-pointer w-auto uppercase focus:outline-none">
                                                                    When Is Reveal?
                                                                    </h4>
                                                                    
                                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 inline-block float-right mt-5 mr-2 cursor-pointer peer-checked:rotate-90">
                                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
                                                                    </svg>
        
                                                                    <div class="text-base md:text-xl tracking-wider  overflow-hidden bg-transparent max-h-0 peer-checked:max-h-screen px-[10px] md:px-[30px] ml-[calc(0.01rem_+_30px)] sm:ml-[calc(1.25rem_+_50px)]  md:mb-[10px] border-l-4 border-l-white border-double"><p>
        
                                                                    Raikyries will reveal immediately after fully minting out.
        
                                                                   

                                                                    </p>
        
                                                                    </div>
                                                                    
                                                                </label>
                                                                </div>
                                                                
                                                            </div>
        
        
                                                        
        
                                                            
        
                                                            <div class="shadow-md flex mb-[20px]">
        
                                                                <div class=" overflow-hidden border border-2 border-white-200 w-full ">
                                                                <label class="">
                                                                    <input class="absolute opacity-0 peer" type="checkbox"/>
                                                                
                                                                    <h4 class="p-2 sm:p-5 text-white text-left text-sm md:text-base bg-transparent hover:bg-bridge/25 inline-block cursor-pointer w-auto uppercase focus:outline-none">
                                                                    Why start an NFT collection?
                                                                    </h4>
                                                                    
                                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 inline-block float-right mt-5 mr-2 cursor-pointer peer-checked:rotate-90">
                                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
                                                                    </svg>
        
                                                                    <div class="text-base md:text-xl tracking-wider  overflow-hidden bg-transparent max-h-0 peer-checked:max-h-screen px-[10px] md:px-[30px] ml-[calc(0.01rem_+_30px)] sm:ml-[calc(1.25rem_+_50px)]  md:mb-[10px] border-l-4 border-l-white border-double"><p>
        
                                                                    The ACA was launched with two primary goals in mind : 
                                                                    
                                                                    <p>
                                                                    1. We wanted to create an NFT collection that are beginner friendly for users to join. And we hope we can be that starting point to encourage people across the world to join us on our journey.
                                                                    </p>
                                                                    
                                                                    <p>
                                                                    2. To have people enjoy
                                                                    watching their angels companion slowly evolve overtime while we take the Raikyrie's holders on a ride through the course of its lore, 
                                                                    and anything that is incorporated within the Shinnverse.
                                                                    </p>
                                                                
                                                                    
                    {/*                                                 
                                                                
                                                                    The Pilgrimage makes up a mechanic that grants access to hidden messages for Rebel Hunts, Clan building, Market priority, utilities, NFTs and team positions.
        
                                                                    Ranks are only disclosed once someone reaches them. 
        
                                                                    */}
                                                                    </p>
        
                                                                    </div>
                                                                    
                                                                </label>
                                                                </div>
                                                                
                                                            </div>
        
                            
                                                            {/* presale */}
                                                            {/* <div class="shadow-md flex mb-[20px]">
        
                                                                <div class=" overflow-hidden border border-2 border-white-200 w-full ">
                                                                <label class="">
                                                                    <input class="absolute opacity-0 peer" type="checkbox"/>
                                                                
                                                                    <h4 class="p-2 sm:p-5 text-white text-left text-sm md:text-base bg-transparent hover:bg-bridge/25 inline-block cursor-pointer w-auto uppercase focus:outline-none">
                                                                    Is there a presale or whitelist?
        
                                                                    </h4>
                                                                    
                                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 inline-block float-right mt-5 mr-2 cursor-pointer peer-checked:rotate-90">
                                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
                                                                    </svg>
        
                                                                    <div class="text-base md:text-xl tracking-wider overflow-hidden bg-transparent max-h-0 peer-checked:max-h-screen px-[10px] md:px-[30px] ml-[calc(0.01rem_+_30px)] sm:ml-[calc(1.25rem_+_50px)]  md:mb-[10px] border-l-4 border-l-white border-double"><p>
                                                                     No. We've decided to take this route to create an organic enviroment where everyone is able to mint their Raikyries however as they choose. As we have quietly observed for the past 6 months
                                                                     of some of the drawbacks that came under a presale system. We think this is the best approach to keeping the public's best interest in mind.
            
                                                                    
                                                
                                                                    </p>
                                                                
                                                                    </div>
                                                                    
                                                                </label>
                                                                </div>
                                                                
                                                            </div> */}
        
                                            
                                            
        
                                                        </div>
        
                                                </div>
                                                
        
        
        
        
                                            </section>
        
                                            {/* TABLET/PC - IMAGE */}
                                            
                                            {/* <div class="overflow-hidden self-center content-center	"> 
                                                    <div class="lg:block hidden max-w-[1030px] "><img class="bottom-8 -ml-[4em] w-[58vh] absolute max-w-full block " src={ava_about}></img></div>
                                                    
                                            </div> */}
        
                                            <div >
                                                <div class=" xl:block hidden justify-center self-center items-center flex relative z-auto -bottom-28 ">
                                                    <img class="w-[60vh] " src={ava_about}></img>
                                                </div>
                                            </div>
        
        
        
                                    
                                            <div class="flex float-right z-50 ml-auto justify-end ">
                                                {/* COLUMN-RIGHT-ABOUT */}
                                                {/* w-[100vw] lg:w-[40vw] pt-28 text-[#CACFD6] items-start */}
                                                <div class="flex flex-col mx-12 lg:mx-auto w-full lg:w-[30vw] pt-28 text-[#CACFD5]  h-full block  ">
                        
                                                    <img  src={logo }  class="w-24 md:w-44 logo_raikyrie transition-all duration-450  hover:opacity-60  " alt="RAIKYRIES" ></img>
        
                                                    <div class="tracking-wide font-Orbitron  pt-6 pb-2 md:pt-8 md:pb-4   font-bold text-xl lg:text-2xl text-[#EFE6DD] ">Companion For Life</div>
        
                                                    <div class="md:text-xl text-base ">
                                                        {/* <div class="pb-6">Raikyrie is a collection of 3,333 bioengineered androids set in the apocalyptic world on the Ethereum blockchain, as they navigate through the land across timelines that has changed forever. 
                                                                    The Shinnverse consist of two different timelines that sets 7 years apart. The angel avatars are trait-rich with distinctive features, each attributable to the world & times in which they represent.</div> */}
        
        
                                                        <div class="pb-4 ">
                                                        Taken place in a dystopian society where a virus known as the TROJAN SHINNS has taken over the cities, forcing humans to seek outside of their shelther to survive, the lack of preparation
                                                        cause the human race to the brink of extinction.
                                                        </div>
        
                                                        <div class="pb-4 ">For decades, Raikyries and Humans have peacefully coexist while respecting each other differences. 
                                                        As an intelligent being with facial features closely resemble a human, they can morph into 4 different forms which grants them superhuman abilities in times of need, making them a formidable candidate against enemies.
                    
                                                        </div>
        
                                                        <div class="pb-6">
                                                            Some Raikyries venture into dangerous territories beyond the city, with a goal in mind, to eradicate potential threats to the human race. 
                                                            
        
                                                            <br class="lg-block"></br>
                                                           
                                                            <span class="tracking-wide font-bold"> TROJAN SHINNS</span> lurks in the darkness, hidden from plain sight. They transform into its microscopic form as they prepare to unleash its deadly contagion, passing through systems and machines at ease.
                                                        </div>
        
                                                    </div>
        
        
                                     
        
                                                </div>
                                            </div>
                                                                    
        
                                                {/* MOBILE */}
                                               <div class="flex overflow-hidden block lg:hidden w-full min-h-screen items-center justify-center" >
                                                    <img class="  w-[55vh]  absolute max-w-full  " src={ava_about}>
                                                    </img>
                                            
                                            </div> 
        
                                    </div>
                                    
        
        
                            </div>
   

                    {/* footer */}

                
                        <div class=" footer-div  bottom-0 top-0 min-w-full h-auto footer  relative bg-black  "   >
                            {/* add -z-50  later */}
                           
                                    <div class="absolute fixed right-[4%] bottom-[92%] shadow-indigo-300/40 shadow-lg bg-black/70 p-2 border hover:bg-neutral-700 ">
                                        <Link to ='/shinnverse' onClick={this.scrollToTop}  class="text-white">                                  
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="hover:bg-neutral-700 cursor-pointer w-6 h-6">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l7.5-7.5 7.5 7.5m-15 6l7.5-7.5 7.5 7.5" />
                                            </svg>

                                        </Link>
                                    </div>

                                    <div class="flex flex-col xl:flex-row min-w-full  md:p-10  min-w-full justify-between items-center h-auto -top-4  md:pt-15">
                                        

              
                                        <section class="legal-logo  ">
                                            <div class="section-block-1 w-[120px]  ">
                                                <img src={TrojanShinnevolform}></img>
                                            </div>
                                        </section>
                                    
                                        
                                        
                                        <section class="w-full flex flex-col ">
                                            
                                            <div class="flex md:section-block-2 tracking-wide text-[16px] md:text-[18px] justify-center place-content-center mt-20 " > 

                                            Copyright © Koinon Studios Inc. All rights reserved. 
                                            
                                            </div>
                                
                                


                                            <p class=" flex  section-block-2 tracking-wide w-full  justify-center "> 
                                            
                                            {/* <a class="text-sm md:text-xl " href="https://etherscan.io/address/0xE0e603bd6522343ADc62FEe7C0904e903f71A2Ca#code"> <p class="text-center">0xE0e603bd6522343ADc62FEe7C0904e903f71A2Ca</p>   </a> */}
                                            
                                              

                                                <LinkDom to="/provenance" class="text-sm md:text-base"  ><p class="text-center  " id="underline" >Provenance
                                                <sup class="-top-2 tracking-wide " id="non-underline">SOON</sup>
                                                </p>
                                                </LinkDom>
                                                    
                                              

                                                
                                            </p> 
                                            
                                        </section>


                                        <section class="">
                                                


                                                <p class=" w-[120px] md:w-min section-block-2 tracking-wide text-xl text-[16px] md:text-[18px]  ">
                                                CONTACT US AT

                                                </p>

                                                <p class="tracking-wide brightness-200 text-sm md:text-xl"> 
                                                KOINONSTUDIOS@SHINNVERSE.COM

                                                </p>
                                        </section>


                                    </div>
         
                                    

                        </div>



                </main>  



            </div>        
            
        );
    };


};

export default NavBar;


