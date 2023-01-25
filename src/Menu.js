import React from 'react';
import {useState} from 'react' ;
import {Link} from 'react-router-dom';
import logo from './assets/icons/logo.png';
import mainAudio from './assets/audio/themeAudio.webm';
import mainAudio1 from './assets/audio/themeAudio.mp3';
import {Howl, Howler} from 'howler';

import './App.css';
import './expansiveScreen.css';

import playButton from './assets/icons/play-audio.svg';
import pauseButton from './assets/icons/pause-audio.svg';



let sound = new Howl({
    src: [mainAudio, mainAudio1],
    autoplay: false,
    loop: true,
    volume: 5.0,

 
}

);


const Menu=()=>{

        const [isPlaying, setIsPlaying] = useState(false);
        const [isMobile, setisMobile] = useState(true);


 



        // toggleRenderedAudio = () => {
        //     if(sound.playing()){
        //         sound.pause();
        //         return(<div> <img src={playButton}></img></div>)
        //     }else{
        //         sound.play();
        //         return(<div> <img src={pauseButton}></img></div>)
        //     }
        // }



    
    return( 
        <div class="flex relative  z-auto min-h-screen flex flex-col transition-all duration-200 overflow-hidden selection:bg-[#ff5a1d]">

                
            {/* NAV */} 

            
            <div class=" flex z-50 absolute justify-end top-0 right-0 bg-transparent min-w-full " onClick={()=>{
                                        sound.pause();
                                        setIsPlaying(false);
                                     
                                    }}>
                    
                <div class="flex justify-between p-3.5 md:justify-around md:left-1.5 items-center md:p-8  w-full fixed  "> 

                    {/* MOBILE */}
                    <div class="invisible">
                    <Link to ="/" class="header__logo " onClick={()=>{
                                        sound.pause();
                                        setIsPlaying(false);
                                     
                                    }}>
                        <div class="w-20 lg:w-32 ">
                            <img class="" src={logo}></img>
                        </div>
                    </Link> 
                    </div>
                    {/* <div class="md:invisible visible md:hidden float-right">

                        <Link to ='/mint' class="text-white temp-disabled-link disabled cursor-not-allowed" onClick={()=>{
                                        sound.pause();
                                        setIsPlaying(false);
                                     
                                    }}>
                            <button class="navMint   hover:text-defaultdark hover:bg-neutral-300
                        ">
                                MINT
                            </button>
                        </Link>

                    </div>   */}



                    {/* LINK */}
                    <div class="flex right-0 top-5  w-[50vw] bg-black bg-opacity-75 justify-around items-center   mx-auto hidden md:flex " onClick={()=>{
                                        sound.pause();
                                        setIsPlaying(false);
                                     
                                    }} >
                            
                     
                    
                            <Link  to ='/shinnverse'  class="text-white">
                                <button class="font-body p-[5px] disabled hover:text-neutral-900 hover:bg-neutral-300  w-28   " onClick={()=>{
                                        sound.pause();
                                        setIsPlaying(false);
                                    
                                     
                                    }}> 
                                SHINNVERSE
                                </button>

                            </Link>



                 
                    
                            <Link to = '/mint' class="text-white  cursor-not-allowed temp-disabled-link ">
                                <button class="font-body p-[5px] disabled hover:text-defaultdark hover:bg-neutral-300 w-20 "onClick={()=>{
                                        sound.pause();
                                        setIsPlaying(false);
                                     
                                    }}>
                                MINT 
                                </button>
                               

                            </Link>

          


                            <Link to = '/the-pilgrimage' class="text-white cursor-not-allowed temp-disabled-link">
                                <button class="font-body p-[5px] disabled hover:text-defaultdark hover:bg-neutral-300 " onClick={()=>{
                                        sound.pause();
                                        setIsPlaying(false);
                                     
                                    }} >
                                THE PILGRIMAGE
                                </button> 

                                <sup class="-top-2 tracking-wide ">SOON</sup>
                            </Link>
                            <Link to ='/license' class="text-white">
                                <button class="font-body p-[5px] disabled hover:text-defaultdark hover:bg-neutral-300 " onClick={()=>{
                                        sound.pause();
                                        setIsPlaying(false);
                                     
                                    }}>
                                    TERMS & CONDITIONS
                                </button>
                            </Link>
                            



                    </div>


                    <div class="flex hidden sm:flex  text-white float-right  items-center justify-end ">
                        <a href="https://twitter.com/raikyrieNFT" class="inline-block transition-all duration-350 hover:opacity-60 " rel="noopener noreferrer" target="_blank">
                            <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 sm:h-8 sm:w-8 mr-5" fill="currentcolor"><title>Twitter</title><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"></path></svg>
                        </a>


                        <a href="" class="inline-block transition-all duration-350 hover:opacity-60 disabled cursor-not-allowed opacity-30 temp-disabled-link" rel="noopener noreferrer" target="_blank">
                            <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 sm:h-8 sm:w-8 mr-5" fill="currentcolor"><title>Discord</title><path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z"></path></svg>
                        </a>

                        <a href="https://opensea.io/collection/raikyrie" class="inline-block transition-all duration-350 hover:opacity-60 cursor-not-allowed opacity-30 temp-disabled-link " rel="noopener noreferrer" target="_blank">
                            <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 sm:h-8 sm:w-8" fill="currentcolor"><title>OpenSea</title><path d="M12 0C5.374 0 0 5.374 0 12s5.374 12 12 12 12-5.374 12-12S18.629 0 12 0ZM5.92 12.403l.051-.081 3.123-4.884a.107.107 0 0 1 .187.014c.52 1.169.972 2.623.76 3.528-.088.372-.335.876-.614 1.342a2.405 2.405 0 0 1-.117.199.106.106 0 0 1-.09.045H6.013a.106.106 0 0 1-.091-.163zm13.914 1.68a.109.109 0 0 1-.065.101c-.243.103-1.07.485-1.414.962-.878 1.222-1.548 2.97-3.048 2.97H9.053a4.019 4.019 0 0 1-4.013-4.028v-.072c0-.058.048-.106.108-.106h3.485c.07 0 .12.063.115.132-.026.226.017.459.125.67.206.42.636.682 1.099.682h1.726v-1.347H9.99a.11.11 0 0 1-.089-.173l.063-.09c.16-.231.391-.586.621-.992.156-.274.308-.566.43-.86.024-.052.043-.107.065-.16.033-.094.067-.182.091-.269a4.57 4.57 0 0 0 .065-.223c.057-.25.081-.514.081-.787 0-.108-.004-.221-.014-.327-.005-.117-.02-.235-.034-.352a3.415 3.415 0 0 0-.048-.312 6.494 6.494 0 0 0-.098-.468l-.014-.06c-.03-.108-.056-.21-.09-.317a11.824 11.824 0 0 0-.328-.972 5.212 5.212 0 0 0-.142-.355c-.072-.178-.146-.339-.213-.49a3.564 3.564 0 0 1-.094-.197 4.658 4.658 0 0 0-.103-.213c-.024-.053-.053-.104-.072-.152l-.211-.388c-.029-.053.019-.118.077-.101l1.32.357h.01l.173.05.192.054.07.019v-.783c0-.379.302-.686.679-.686a.66.66 0 0 1 .477.202.69.69 0 0 1 .2.484V6.65l.141.039c.01.005.022.01.031.017.034.024.084.062.147.11.05.038.103.086.165.137a10.351 10.351 0 0 1 .574.504c.214.199.454.432.684.691.065.074.127.146.192.226.062.079.132.156.19.232.079.104.16.212.235.324.033.053.074.108.105.161.096.142.178.288.257.435.034.067.067.141.096.213.089.197.159.396.202.598a.65.65 0 0 1 .029.132v.01c.014.057.019.12.024.184a2.057 2.057 0 0 1-.106.874c-.031.084-.06.17-.098.254-.075.17-.161.343-.264.502-.034.06-.075.122-.113.182-.043.063-.089.123-.127.18a3.89 3.89 0 0 1-.173.221c-.053.072-.106.144-.166.209-.081.098-.16.19-.245.278-.048.058-.1.118-.156.17-.052.06-.108.113-.156.161-.084.084-.15.147-.208.202l-.137.122a.102.102 0 0 1-.072.03h-1.051v1.346h1.322c.295 0 .576-.104.804-.298.077-.067.415-.36.816-.802a.094.094 0 0 1 .05-.03l3.65-1.057a.108.108 0 0 1 .138.103z"></path></svg>
                        </a>
                        

                    </div>



                </div>
                
            </div>

        

            {/* 1ST DIV */}

            {/* MD SCREEN */}
            <main class="flex-1 " >
                
                {/* STAGE-1 - DIV - 1 */}
                <div class=" md:block hidden min-h-screen justify-center " onClick={()=>{
                                        sound.pause();
                                        setIsPlaying(false);
                                     
                                    }}>
                    <div class="absolute w-full h-screen bg-[#00f4cf] " ></div> 
                    <Link to ='/shinnverse' >
                    

                
                        <div class="relative text-center text-white p-40 place-content-center flex flex-col items-center justify-center h-screen ">
            
                                <div class="flex parth">
                                    <Link to="/shinnverse">

                                        <h2 data-text="R A I K Y R I E" class="font-Azonix text-white  2xl:text-8xl  xl:text-7xl lg:text-6xl text-4xl mb-12 p-2 cursor-pointer" >R A I K Y R I E </h2>
                                    </Link>
                                </div>

                                <div class=" cursor-pointer md:text-xl text-black animate-pulse">
                                    Click Anywhere To Continue
                                </div>
    
                        </div>
                    </Link>             

                </div>

                {/* MOBILE  */}
                
                <div class="  md:hidden visible  min-h-screen justify-center " onClick={()=>{
                                        sound.pause();
                                        setIsPlaying(false);
                                     
                                    }}>
                    <div class="absolute w-full h-screen bg-[#00f4cf] "></div> 
                        <Link to ='/shinnverse' >
                            
                        
                        
                                <div class="relative text-center text-white  place-content-center flex flex-col items-center justify-center h-screen ">

                                        <div class="flex px-40">
                                            <Link to="/shinnverse">

                                                <h2  class="font-Azonix text-[#d03800] text-5xl hover:text-white  mb-2 p-2 cursor-pointer" >R A I K Y R I E </h2>
                                            </Link>
                                        </div>

                                        <div class=" cursor-pointer text-lg text-black animate-pulse mt-4 ">
                                            Click Anywhere To Continue
                                        </div>
            
                                </div>

                               

                           
                                                            
                        </Link>             

                </div>


                {/* footer */}



                    <div class="flex flex-col w-full h-auto relative border-box text-black font-bold bg-[#00f4cf] border-1 border-white md:border-none"   >
                                
                                <div class="px-8 bottom-8 fixed md:visible invisible">
                                
                                {isPlaying ? (
                                    <button onClick={()=>{
                                       
                                        sound.pause();
                                        setIsPlaying(false);
                                        console.log("pauseAudio");
                                    }}>
                                        <img class="w-8" src={pauseButton}>
                                            
                                        </img>
                                    </button>
                               
                                )
                                    
                                    : (
                                        <button onClick={()=>{
                                            sound.play();
                                            setIsPlaying(true);
                                            console.log("playAudio");
                                        }}>
                                            <img class="w-8" src={playButton}>

                                            </img>                                   
                                        </button>

                                    )}
                                </div>

                                <div class="flex flex-row min-w-full justify-center pt-28 pb-4 ">
                               
                                    © 2022 KOINON STUDIOS
                         

                                </div>

                            


                    </div>




            </main>  



        </div> 




    )

    };





export default Menu;
