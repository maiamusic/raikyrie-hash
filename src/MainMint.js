import {useState} from 'react' ; 
// package connect to blockchain like web3js
import { ethers, BigNumber} from 'ethers';
import RAIKYRIE from './Raikyrie.json';
import './App.css' ;
// import './App.scss';
import ms1 from './assets/samples/2140_cropped.png';

// contract
const RAIKYRIEAddress = "0x6595b7590a59B498104F33923f8A12d033917b4F";


const MainMint = ({accounts, setAccounts}) => {
    const [mintAmount, setMintAmount] = useState(1);
    const isConnected = Boolean(accounts[0]);
  


  
        async function connectAccount() {
            if (window.ethereum){
                const accounts = await window.ethereum.request({
                    method: "eth_requestAccounts",
                });
                setAccounts(accounts);
            }
        }
 


    async function handleMint(){
        if (window.ethereum){
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            // signs the transaction
            const signer = provider.getSigner();
            const contract = new ethers.Contract(
                RAIKYRIEAddress,
                RAIKYRIE.abi, 
                signer
            );
            try{
                const response = await contract.mint(BigNumber.from(mintAmount),{
                    value: ethers.utils.parseEther((0.0033 * mintAmount).toString()),
                });
                console.log('response: ' , response);
            }catch (err){
                console.log("error", err);
            }
        }

    }



    const handleDecrement = () => {
        if (mintAmount<=1) return;
        setMintAmount(mintAmount-1);
        };

    const handleIncrement = () => {
        if (mintAmount >= 5) return;
        setMintAmount(mintAmount+1);
    };
  
    return( 

    <div class="z-50 bg-black ">
        <div class="flex justify-center items-center content-center relative sm:-top-[34rem] md:-top-[42rem] lg:-top-[30rem] 2xl:-top-[41rem] z-50  " >

            {/* <div class="bg-gradient-to-t from-fsource to-fsource/0 h-96 w-full absolute left-0 bottom-0 top-0 "></div>  */}
            
            {/* <div class="box-content h-1/2 w-4/12 p-4 border-4 bg-white"> */}
            <div class="flex flex-col lg:flex-row bg-white items-stretch border-8 border-white rounded w-max-screen-lg  ">

                <div class="text-center p-8 font-Azonix lg:w-1/2 w-full px-8">
                    <img class="rounded-full mx-auto -mt-12 mb-8 border-8 border-white " src={ms1} width="100" height="100">
                    </img>

                    <h1 class="text-3xl text-black mb-2">Raikyrie</h1>

                    {/* <p class="text-lg mb-4 font-semibold font-Orbitron tracking-wider" >3333 total supply</p> */}

              
                    <p class="font-Orbitron mint-info text-neutral-500 ">You can only mint 5 Raikyries NFT in one transaction.</p>
                    {/* JAPANESE */}
                    
                
                    <p class=" -mb-4 font-Orbitron text-neutral-500 text-base inline-block "> 5枚につき </p>
                    {/* <p class="ml-1.5 font-Orbitron text-neutral-500 text-[18px] inline-block">0.0033 ETH 。</p> */}
                  
                    <p class=" -mb-1 font-Orbitron mint-info text-neutral-500 "> 別途ガス代がかかります。</p>
                    <p class=" -mb-4 font-Orbitron mint-info text-neutral-700 text-sm">Ethereum</p>
                    <p class=" mb-4 font-Orbitron mint-info text-neutral-500"> Network のウォレットを接続してください。</p>

            

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
                                
                                <div class=" mint-info-2 tracking-wide font-Orbitron text-lg drop-shadow-2xl  font-bold text-white ">
                                    Price: 
                                </div>
                                <div class="font-Orbitron text-lg ml-2 mr-8 text-black "> Ξ 0.0033</div>

                            
                            </div>
                            <div class="mint-btn-row flex flex-row items-center mt-10 justify-center">



                                <div class="rounded-[32px] relative flex items-center  bg-[#597689] text-xl justify-center mr-4 h-12 shadow-cyan-900/40 border-2 shadow-lg ">
                                    <button class=" cursor-pointer p-5 " onClick = {handleDecrement}>-</button>
                                {/* bg-text-cyan-700 */}
                                    <div>
                                        <input  readonly aria-readonly="true" id="mintInput" class= "  w-20 aria-readonly bg-transparent text-center pl-4 text-white " type= "number" value = {mintAmount} />
                                    </div>

                                    
                                    <button class=" cursor-pointer p-5 " onClick = {handleIncrement}>+</button>   

        
                                    
                                </div> 

                            
                                <button  onClick={handleMint} class="font-bold  border-4 shadow-neutral-100/40 shadow-lg rounded-[32px] cursor-pointer h-12 px-7 bg-white text-lg tracking-widest italic text-[#597689] mint-text hover:bg-neutral-100 "> Mint </button>


                            
                            
                            </div>

                            
                            {/* <div class="relative top-20 ">
                                <p class=" text-xl tracking-wide text-teal-700 font-bold " > {accounts} </p>
                            </div> */}


                        </div>



                                            
                            
                               //mt font size letterspacing fontfamily textshadow 0 3px 00000 color 
                         
                        ) : (   


                                <div class="flex-1 flex-col justify-center items-center mt-4  ">

                                    <button class="wallet-btn bg-black box box-border" onClick={connectAccount}> 
                                    <span class="wallet-text">Connect 
                                    </span>
                                    </button>

                                
                          
                                    <p class=" text-sm md:text-xl mint-info-2 tracking-wide font-Orbitron text-teal-700 drop-shadow-sm md:drop-shadow-lg font-md">You must be connected to mint. </p>
                                </div>

                                
                            
                        )}

                    </div>




                </div>
        


            </div>
        </div>

    </div>
            
    );

};

export default MainMint;