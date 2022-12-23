<div class="flex relative z-auto min-h-screen flex flex-col  ">
                
                    
                    
    {/* NAV */} 
    <div class=" flex z-50 absolute justify-end top-0 right-0 bg-transparent min-w-full">
            
            <div class="flex justify-around left-1.5 items-center p-4 md:p-8 transition-all w-full fixed  "> 

                {/* FIRST NAV ITEM */}
                <a class="header__logo items-start float-left " base href="/shinnverse">
                    <img class="w-24 lg:w-32 " src={logo}></img>
                </a>
            
                
                <div class="flex right-0 top-5  w-[50vw] bg-black bg-opacity-75 justify-around items-center invisible sm:visible mx-auto " >
                    <Link to ='/shinnverse' class="text-white">
                        <button class="font-body p-[5px] disabled  hover:text-neutral-900 hover:bg-neutral-300   "> 
                        SHINNVERSE
                        </button>

                    </Link>


                    <Link to = '/mint' class="text-white">
                        <button class="font-body p-[5px] disabled  hover:text-defaultdark hover:bg-neutral-300 bg-teal-400 w-20">
                        MINT 
                        </button>
                    </Link>



                    <Link to = '/the-pilgrimage' class="text-white cursor-not-allowed temp-disabled-link">
                        <button class="font-body p-[5px] disabled  hover:text-defaultdark hover:bg-neutral-300  temp-disabled-link  ">
                        THE PILGRIMAGE
                        </button> 
                    </Link>
                    <Link to ='/license' class="text-white">
                        <button class="font-body p-[5px] disabled  hover:text-defaultdark hover:bg-neutral-300 ">
                            TERMS & CONDITIONS
                        </button>
                    </Link>



                </div>


                {/* CONNECTED */}
                <div class="flex md:visible invisible bg-black w-full items-center  ">
                    <p>dsdsd</p>
                </div>

                <div class=" flex items-center justify-center ">
                    <button  onClick={handleMint} class="font-bold font-Orbitron border-4 
                    hover:border-[#597689] shadow-neutral-100/40 shadow-lg rounded-[32px] cursor-pointer h-16 w-max px-14 bg-white text-base md:text-lg tracking-widest text-black mint-text hover:bg-neutral-100 "> 
                        MINT YOUR RAIKYRIE
                    </button>
                </div>


                <div class="flex hidden text-white float-right  place-items-center justify-end ">
                    <a href="https://twitter.com/raikyrieNFT" class="inline-block transition-all duration-350 hover:opacity-60 " rel="noopener noreferrer" target="_blank">
                        <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 sm:h-8 sm:w-8 mr-5" fill="currentcolor"><title>Twitter</title><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"></path></svg>
                    </a>


                    <a href="" class="inline-block transition-all duration-350 hover:opacity-60 disabled opacity-30 temp-disabled-link" rel="noopener noreferrer" target="_blank">
                        <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 sm:h-8 sm:w-8 mr-5" fill="currentcolor"><title>Discord</title><path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z"></path></svg>
                    </a>

                    <a href="https://opensea.io/collection/raikyrie" class="inline-block transition-all duration-350 hover:opacity-60" rel="noopener noreferrer" target="_blank">
                        <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 sm:h-8 sm:w-8" fill="currentcolor"><title>OpenSea</title><path d="M12 0C5.374 0 0 5.374 0 12s5.374 12 12 12 12-5.374 12-12S18.629 0 12 0ZM5.92 12.403l.051-.081 3.123-4.884a.107.107 0 0 1 .187.014c.52 1.169.972 2.623.76 3.528-.088.372-.335.876-.614 1.342a2.405 2.405 0 0 1-.117.199.106.106 0 0 1-.09.045H6.013a.106.106 0 0 1-.091-.163zm13.914 1.68a.109.109 0 0 1-.065.101c-.243.103-1.07.485-1.414.962-.878 1.222-1.548 2.97-3.048 2.97H9.053a4.019 4.019 0 0 1-4.013-4.028v-.072c0-.058.048-.106.108-.106h3.485c.07 0 .12.063.115.132-.026.226.017.459.125.67.206.42.636.682 1.099.682h1.726v-1.347H9.99a.11.11 0 0 1-.089-.173l.063-.09c.16-.231.391-.586.621-.992.156-.274.308-.566.43-.86.024-.052.043-.107.065-.16.033-.094.067-.182.091-.269a4.57 4.57 0 0 0 .065-.223c.057-.25.081-.514.081-.787 0-.108-.004-.221-.014-.327-.005-.117-.02-.235-.034-.352a3.415 3.415 0 0 0-.048-.312 6.494 6.494 0 0 0-.098-.468l-.014-.06c-.03-.108-.056-.21-.09-.317a11.824 11.824 0 0 0-.328-.972 5.212 5.212 0 0 0-.142-.355c-.072-.178-.146-.339-.213-.49a3.564 3.564 0 0 1-.094-.197 4.658 4.658 0 0 0-.103-.213c-.024-.053-.053-.104-.072-.152l-.211-.388c-.029-.053.019-.118.077-.101l1.32.357h.01l.173.05.192.054.07.019v-.783c0-.379.302-.686.679-.686a.66.66 0 0 1 .477.202.69.69 0 0 1 .2.484V6.65l.141.039c.01.005.022.01.031.017.034.024.084.062.147.11.05.038.103.086.165.137a10.351 10.351 0 0 1 .574.504c.214.199.454.432.684.691.065.074.127.146.192.226.062.079.132.156.19.232.079.104.16.212.235.324.033.053.074.108.105.161.096.142.178.288.257.435.034.067.067.141.096.213.089.197.159.396.202.598a.65.65 0 0 1 .029.132v.01c.014.057.019.12.024.184a2.057 2.057 0 0 1-.106.874c-.031.084-.06.17-.098.254-.075.17-.161.343-.264.502-.034.06-.075.122-.113.182-.043.063-.089.123-.127.18a3.89 3.89 0 0 1-.173.221c-.053.072-.106.144-.166.209-.081.098-.16.19-.245.278-.048.058-.1.118-.156.17-.052.06-.108.113-.156.161-.084.084-.15.147-.208.202l-.137.122a.102.102 0 0 1-.072.03h-1.051v1.346h1.322c.295 0 .576-.104.804-.298.077-.067.415-.36.816-.802a.094.094 0 0 1 .05-.03l3.65-1.057a.108.108 0 0 1 .138.103z"></path></svg>
                    </a>
                    
                    

                </div>

            </div>
            
    </div>




    {/* above md */}

    <div class="visible ">
        {/* BACKGROUND */} 
        <div class="z-1 flex flex-col justify-center items-center relative h-screen bg-cover bg-background "></div>

            <div class=""></div>     

            {/* BLACK OVERLAY */}
            {/* <div class="absolute top-0 h-screen w-full bg-black/20 " ></div>  */}

            {/* MINT TITLES // LARGE */}
        
            <div class="lg:block hidden mintTitle w-full relative object-cover"></div>  


            {/* MINT TITLES // SMALL  */}
            {/* <div class="mintTitle w-full relative object-cover"></div>   */}


            <div class="running bottom-0 absolute opacity-40 ">
                <div class="looper">
                    <div class="looper__innerList " data-animate="true ">
                    
                        <div class="tracking-wide text-7xl w-max will-change-transform  flex direction-reverse duration-3s animate-slideAnim" >
                            <h3> ステージ 1 >>> </h3>
                        </div>
                        <div class="tracking-wide text-7xl w-max will-change-transform flex direction-reverse duration-3s animate-slideAnim" >
                            <h3> ステージ 1 >>> </h3>
                        </div>



                        <div class="tracking-wide text-7xl w-max will-change-transform flex direction-reverse duration-3s animate-slideAnim" >
                            <h3> ステージ 1 >>> </h3>
                        </div>
                        
                        <div class="tracking-wide text-7xl w-max will-change-transform flex direction-reverse duration-3s animate-slideAnim" >
                            <h3> ステージ 1 >>> </h3>
                        </div>

                        <div class="tracking-wide text-7xl w-max will-change-transform flex direction-reverse duration-3s animate-slideAnim" >
                            <h3> ステージ 1 >>> </h3>
                        </div>

                        <div class="tracking-wide text-7xl w-max will-change-transform flex direction-reverse duration-3s animate-slideAnim " >
                            <h3> ステージ 1 >>> </h3>
                        </div>

                        <div class="tracking-wide text-7xl w-max will-change-transform flex direction-reverse duration-3s animate-slideAnim invisible " >
                            <h3> ステージ 1 >>> </h3>
                        </div>

                

                    




                    

                    </div>
                </div>
            </div>   


            {/* SIDENOTE */}
            <div class="italic absolute font-Azonix hover:animate-pulse text-[50px] z-2 right-[120px] bottom-[190px] text-white z-50">世界征服</div>
            <div class="italic absolute hover:animate-pulse font-Azonix text-[30px] z-2 right-[290px] bottom-[290px] text-white -rotate-90">上に上昇</div>
        
        
            {/* MINT-SQUARE */}
            <div class="w-[276px] h-[266px] absolute right-[50px] flex flex-col  bottom-[140px] justify-start items-center ">
                <div class="globe w-[230px] h-[212px] bg-cover mr-auto flex flex-col items-center justify-center mt-4 rounded-lg">
                </div>

        
            </div>

            

        
            {/* CENTER */}

            {/* sm:-top-[34rem] md:-top-[42rem] lg:-top-[37rem] */}
        
                
                <div class=" flex z-50 relative place-content-center justify-center " >

                    {/* <div class="bg-gradient-to-t from-fsource to-fsource/0 h-96 w-full absolute left-0 bottom-0 top-0 "></div>  */}
                    
                    {/* <div class="box-content h-1/2 w-4/12 p-4 border-4 bg-white"> */}
                    <div class="flex flex-col lg:flex-row bg-white border-8 border-white rounded w-max-screen-lg  ">

                        <div class="text-center p-8 font-Azonix lg:w-1/2 w-full px-8">
                            <img class="rounded-full mx-auto -mt-12 mb-8 border-8 border-white " src={ms1} width="100" height="100">
                            </img>

                            <h1 class="text-3xl text-black mb-2">Raikyrie</h1>

                            {/* <p class="text-lg mb-4 font-semibold font-Orbitron tracking-wider" >3333 total supply</p> */}

                    
                            {/* <p class="font-Orbitron mint-info text-neutral-500 ">You can only mint 10 Raikyries NFT in one transaction.</p> */}
                            {/* JAPANESE */}
                            
                        
                            {/* <p class=" -mb-4 font-Orbitron text-neutral-500 text-base inline-block "> 10枚につき </p> */}
                            {/* <p class="ml-1.5 font-Orbitron text-neutral-500 text-[18px] inline-block">0.0033 ETH 。</p> */}
                        
                            <p class=" -mb-1 font-Orbitron mint-info text-neutral-500 "> 別途ガス代がかかります。</p>
                            <p class=" -mb-4 font-Orbitron mint-info text-neutral-700 text-sm">Ethereum</p>
                            <p class=" mb-4 font-Orbitron mint-info text-neutral-500"> Network のウォレットを接続してください。</p>



                            <p class=" mt-8 font-Orbitron mint-info text-neutral-500"> Please connect to an Ethereum wallet</p>
                    

                            {/* MINT PRICE INFO */}

                        {/* 
                            <div class="grid grid-cols">
                                <div class="text-center rounded-xl bg-mint"> 
                                    <p class="font-Orbitron uppercase tracking-wider text-sm mb-1 ">Price</p>
                                    <p class="text-white text-lg">0.00375Ξ</p>
                                </div>
                            </div>  */}
                            

                        </div>

                        <div class="flex flex-col justify-center items-center text-center rounded font-Azonix w-full lg:w-1/2 lg:pt-0 pt-4 lg:px-12 bg-mint-light ">


                            

                            <div>
                                {isConnected ? (
                                

                                <div>
                                    
                                    
                                    {/* <div class="font-Orbitron text-2xl text-black">3333/3333</div>
                                    */}
                                    <div class="mt-4">
                                        <a href="https://goerli.etherscan.io/address/0x6595b7590a59B498104F33923f8A12d033917b4F">0x6595b7590a5...</a>
                                    </div>



                                    
                                    <div class="mint-info-row flex flex-row items-center justify-center mt-9 ">
                                        
                                        <div class=" mint-info-2 tracking-wider font-Orbitron text-lg drop-shadow-2xl  font-sm text-black ">
                                            PRICE : 
                                        </div>
                                        <div class="font-Orbitron text-lg ml-2 mr-8 text-black "> Ξ 0.0033</div>

                                    
                                    </div>
                                    <div class="mint-btn-row flex flex-row items-center mt-10 justify-center ">



                                        <div class="rounded-[32px] relative flex items-center  bg-[#597689] text-xl justify-center mr-4 h-12 shadow-cyan-900/40 border-2 shadow-lg ">
                                            <button class=" cursor-pointer p-5 " onClick = {handleDecrement}>-</button>
                                        {/* bg-text-cyan-700 */}
                                            <div>
                                                <input  readonly aria-readonly="true" id="mintInput" class= "  w-20 aria-readonly bg-transparent text-center pl-4 text-white " type= "number" value = {mintAmount} />
                                            </div>

                                            
                                            <button class=" cursor-pointer p-5 " onClick = {handleIncrement}>+</button>   

                
                                            
                                        </div> 

                                    
                                    
                                    </div>

                                    <div class="mint-info-row flex flex-row items-center justify-center mt-9 ">
                                        
                                    
                                        <div class="font-sans text-lg ml-2 mr-8 text-black ">  MINT {mintAmount} RAIKYRIE FOR Ξ {valueTotal} </div> 

                                    
                                    </div>



                                    <div class=" flex flex-row items-center mt-10 mb-16 justify-center mx-0">
                                    <button  onClick={handleMint} class="font-bold font-Orbitron border-4 
                                    hover:border-[#597689] shadow-neutral-100/40 shadow-lg rounded-[32px] cursor-pointer h-16 w-max px-14 bg-white text-base md:text-lg tracking-widest text-black mint-text hover:bg-neutral-100 "> 
                                        MINT YOUR RAIKYRIE
                                    </button>
                                    </div>

                                    
                                    {/* <div class="relative top-20 ">
                                        <p class=" text-xl tracking-wide text-teal-700 font-bold " > {accounts} </p>
                                    </div> */}


                                </div>



                                                    
                                    
                                    //mt font size letterspacing fontfamily textshadow 0 3px 00000 color 
                                
                                ) : (   


                                        <div class="flex-1 flex-col justify-center items-center mt-4  ">
                                            
                                            <div class="mb-8">
                                                <button class="wallet-btn bg-black box box-border" onClick={connectAccount}> 
                                                <span class="wallet-text tracking-widest text-base "> Connect
                                                </span>
                                                </button>
                                            </div>

                                        
                                
                                            <p class=" text-sm lg:text-xl mint-info-2 tracking-wide font-Orbitron text-teal-700 drop-shadow-sm md:drop-shadow-lg font-md">You must be connected to mint. </p>
                                        </div>

                                        
                                    
                                )}

                            </div>




                        </div>
                


                    </div>
                </div>
            

                <div class="top-[-5px] absolute w-full bg-bottom  ">
                            <video class="video-background w-full h-screen absolute object-cover overflow-hidden " autoplay="autoplay"  loop playsinline="" muted="" type="video/mp4">
                                 <source src={background} type="video/mp4"/>  
                            </video>
                            <div class="relative top-0 h-screen w-full bg-black/40"></div> 
                    </div> 
        

        




    </div>



    {/* below md*/}
    {/* <div class="visible md:invisible">
        <div class="z-1 flex flex-col justify-center items-center absolute h-screen bg-cover w-[100vw] overflow-y-hidden">
            <img class="absolute absolute top-[5px]" src={mintTitle}/> 
            <div class="w-[370px] h-[400px] flex flex-col justify-start items-center">

            </div>
        </div>

    </div> */}


</div>  