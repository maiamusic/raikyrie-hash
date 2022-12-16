import React from 'react';
import {Link} from 'react-router-dom';
import logo from '../assets/icons/logo.png';


import evolKraken from "../assets/background/Trojan.png";


import '../App.css';








const License = () => {
  


    return( 
               
<div class="selection:bg-teal-800">

 
    {/* NAV */} 
   

    <div class=" flex z-50 absolute justify-end top-0 right-0 bg-transparent min-w-full " >
            
        <div class="flex justify-around left-1.5 items-center p-4 md:p-8 transition-all w-full fixed  "> 

            {/* FIRST NAV ITEM */}
            <a class="header__logo items-start float-left " base href="/shinnverse">
                <img class="w-32 " src={logo}></img>
            </a>
        
            
            <div class="flex right-0 top-5  w-[50vw] bg-black bg-opacity-75 justify-around items-center invisible sm:visible mx-auto " >
                <Link to ='/shinnverse' class="text-white">
                    <button class="font-body p-[5px] disabled hover:text-neutral-900 hover:bg-neutral-300   "> 
                    SHINNVERSE
                    </button>

                </Link>


                <Link to = '/mint' class="text-white">
                    <button class="font-body p-[5px] disabled hover:text-defaultdark hover:bg-neutral-300 w-20">
                    MINT 
                    </button>
                </Link>


            


                {/* <Link to ='/about-us' class="text-white">
                    <button class="font-body p-[5px] disabled  hover:text-defaultdark hover:bg-neutral-300 ">
                    ABOUT
                    </button>
                </Link > */}

                <Link to = '/the-pilgrimage' class="text-white cursor-not-allowed temp-disabled-link">
                    <button class="font-body p-[5px] disabled cursor-not-allowed hover:text-defaultdark hover:bg-neutral-400  temp-disabled-link ">
                    THE PILGRIMAGE
                    </button> 
                </Link>
                <Link to ='/license' class="text-white">
                    <button class="font-body p-[5px] disabled hover:text-defaultdark hover:bg-neutral-300 bg-teal-400 w-40 ">
                        TERMS & CONDITIONS
                    </button>
                </Link>



            </div>


            <div class="flex hidden sm:flex  text-white float-right  place-items-center justify-end ">
                <a href="https://twitter.com/raikyrieNFT" class="inline-block transition-all duration-350 hover:opacity-60 "  rel="noopener noreferrer" target="_blank">
                    <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 sm:h-8 sm:w-8 mr-5" fill="currentcolor"><title>Twitter</title><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"></path></svg>
                </a>


                <a href="" class="inline-block transition-all duration-350 hover:opacity-60 disabled cursor-not-allowed opacity-30 temp-disabled-link"  rel="noopener noreferrer" target="_blank">
                    <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 sm:h-8 sm:w-8 mr-5" fill="currentcolor"><title>Discord</title><path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z"></path></svg>
                </a>

                <a href="https://opensea.io/collection/raikyrie" class="inline-block transition-all duration-350 hover:opacity-60"  rel="noopener noreferrer" target="_blank">
                    <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 sm:h-8 sm:w-8" fill="currentcolor"><title>OpenSea</title><path d="M12 0C5.374 0 0 5.374 0 12s5.374 12 12 12 12-5.374 12-12S18.629 0 12 0ZM5.92 12.403l.051-.081 3.123-4.884a.107.107 0 0 1 .187.014c.52 1.169.972 2.623.76 3.528-.088.372-.335.876-.614 1.342a2.405 2.405 0 0 1-.117.199.106.106 0 0 1-.09.045H6.013a.106.106 0 0 1-.091-.163zm13.914 1.68a.109.109 0 0 1-.065.101c-.243.103-1.07.485-1.414.962-.878 1.222-1.548 2.97-3.048 2.97H9.053a4.019 4.019 0 0 1-4.013-4.028v-.072c0-.058.048-.106.108-.106h3.485c.07 0 .12.063.115.132-.026.226.017.459.125.67.206.42.636.682 1.099.682h1.726v-1.347H9.99a.11.11 0 0 1-.089-.173l.063-.09c.16-.231.391-.586.621-.992.156-.274.308-.566.43-.86.024-.052.043-.107.065-.16.033-.094.067-.182.091-.269a4.57 4.57 0 0 0 .065-.223c.057-.25.081-.514.081-.787 0-.108-.004-.221-.014-.327-.005-.117-.02-.235-.034-.352a3.415 3.415 0 0 0-.048-.312 6.494 6.494 0 0 0-.098-.468l-.014-.06c-.03-.108-.056-.21-.09-.317a11.824 11.824 0 0 0-.328-.972 5.212 5.212 0 0 0-.142-.355c-.072-.178-.146-.339-.213-.49a3.564 3.564 0 0 1-.094-.197 4.658 4.658 0 0 0-.103-.213c-.024-.053-.053-.104-.072-.152l-.211-.388c-.029-.053.019-.118.077-.101l1.32.357h.01l.173.05.192.054.07.019v-.783c0-.379.302-.686.679-.686a.66.66 0 0 1 .477.202.69.69 0 0 1 .2.484V6.65l.141.039c.01.005.022.01.031.017.034.024.084.062.147.11.05.038.103.086.165.137a10.351 10.351 0 0 1 .574.504c.214.199.454.432.684.691.065.074.127.146.192.226.062.079.132.156.19.232.079.104.16.212.235.324.033.053.074.108.105.161.096.142.178.288.257.435.034.067.067.141.096.213.089.197.159.396.202.598a.65.65 0 0 1 .029.132v.01c.014.057.019.12.024.184a2.057 2.057 0 0 1-.106.874c-.031.084-.06.17-.098.254-.075.17-.161.343-.264.502-.034.06-.075.122-.113.182-.043.063-.089.123-.127.18a3.89 3.89 0 0 1-.173.221c-.053.072-.106.144-.166.209-.081.098-.16.19-.245.278-.048.058-.1.118-.156.17-.052.06-.108.113-.156.161-.084.084-.15.147-.208.202l-.137.122a.102.102 0 0 1-.072.03h-1.051v1.346h1.322c.295 0 .576-.104.804-.298.077-.067.415-.36.816-.802a.094.094 0 0 1 .05-.03l3.65-1.057a.108.108 0 0 1 .138.103z"></path></svg>
                </a>
                
                

            </div>

        </div>
        
    </div>




    {/* BACKGROUND  */}



    {/* CONTAINER */}


    <div class="container">
       
        

        <div class="flex-col flex  tracking-[.015em] pt-2 md:pt-4 pb-2 md:pb-2 text-lg mx-2 md:mx-12  ">
        
            <div class="font-bold md:font-extrabold md:text-3xl text-xl pt-10 ">
                <div class="Terms_title text-white pt-10 pb-2 md:pt-20 md:pb-4 ">
                    TERMS & CONDITIONS
                </div>
                
            </div>


            {/* PARAGRAPH */}

            <div >
                <div class="Terms_content text-xl ">
                    <p class="mb-2  font-bold " ></p>
                    RAIKYRIE (hereon referred to as “ACA (Codename for RAIKYRIE) ”) website is provided to you in accordance with the following terms and conditions (“Terms”). It is important that you read the terms carefully, as by using the website you automatically agree to be bound by the terms and conditions set forth herein.
                    
                    <p class="mb-2  "></p>
                    <div class="font-bold text-yellow-400 font-[sans-serif]">

                    DISCLAIMER AND LIMITATION OF LIABILITY

                </div>
            
                <p class="mb-2 "></p>
                THE WEBSITE IS DISCLAIMED AND AS AVAILABLE WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE IMPLIED WARRANTIES OF SUCCESSFUL QUALITY, FITNESS FOR A PARTICULAR PURPOSE AND NON-INFRINGEMENT IS PROVIDED.
                <p></p>
                The Company does not warrant that the functionality of the Website will be uninterrupted or error-free, that defects will be corrected, that the Website or the server providing the Website will be free of viruses or anything else that may be harmful or destructive. YOU EXPRESSLY AGREE AT YOUR USE OF THE WEBSITE AT YOUR RISK.
                <p class="mb-2 "></p>
                ACA DISCLAIMS ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF QUALITY, MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NON-INFRINGEMENT TO THE FULLEST EXTENT PERMITTED BY APPLICABLE LAW. THERE ARE NO IMPLIED WARRANTIES. ACA WILL NOT BE LIABLE FOR ANY DAMAGES OF ANY KIND ARISING FROM THE PRODUCT, INCLUDING BUT NOT LIMITED TO DIRECT, INDIRECT, INCIDENTAL, PUNITIVE AND CONSEQUENTIAL DAMAGES, LOSS OF PROFITS, PROFITS, OPPORTUNITIES, OR DATA.
                <p class="mb-2 "></p>
                This disclaimer applies without limitation. Any damage or injury resulting from any failure of performance, error, omission, interruption, deletion, defect, delay in operation or transmission, computer virus, communication line failure, theft or destruction, or unauthorized access, alteration or use of the records, breach of contract, tort, negligence or other cause of action (including out-of-contract liability). If you are not satisfied with the website, your sole remedy is to stop using the website. or for any other cause of action (including out-of-contract liability). If you are not satisfied with the website, your sole remedy is to stop using the website or for any other cause of action (including out-of-contract liability).
                <p class="mb-2 "></p>
                In addition to the foregoing general disclaimer, ACA specifically disclaims liability and you hereby waive and waive all claims arising out of or relating to the blockchain or related technology. This includes digital wallet (including but not limited to MetaMask) or similar technology or related services, transfer or loss of NFTs, or where ownership or control of NFTs cannot be demonstrated, and markets for the purchase, sale or transfer of NFTs or other platforms.
                <p class="mb-2 "></p>
                ACA recognizes that any data you provide to us is very sensitive and should be particularly sensitive to the processing of such data. We would like to inform you that there are inherent security risks in transmitting data such as email, address or other personal information through the website. This is because it is impossible to fully protect against unauthorized access by third parties. ACA does not sell personal information to third parties. ACA shall not be liable for any damages resulting from such security risks or any related omissions on our part. Nevertheless, ACA must use commercially reasonable methods to protect your data.
                <p class="mb-2 "></p>
                For the sake of clarity, in no event shall ACA be liable to you or any third party for any indirect, consequential, punitive, incidental, special or punitive damages, including loss of profit, loss of goodwill, loss of credit or loss of reputation. not supported. ACA is not liable for damages of any kind resulting from your inability to use the website or the inability to use any product or service offered through the website.
                <p class="mb-2 "></p>
                Notwithstanding the foregoing, if ACA is found to be liable (i) with respect to any loss, damage or cause of action (contractual, out-of-contract or otherwise) arising out of or in connection with these Terms or Features or the Web; The functionality of the Site or its content, or your use or inability to use, our liability shall not exceed the amount paid for use or access. or (ii) for any product sold through the site. The company’s liability is strictly limited to the selling price of that product. 
                <p class="mb-2  "></p>

                <div class="font-bold text-yellow-400 text-xl font-[sans-serif]"  >
                GOVERNING LAW AND DISPUTE RESOLUTION
                </div>
            
                <p class="mb-2 "></p>
                These Terms and Conditions are governed by the laws of the United States of America without regard to the conflict of laws provisions and regardless of where you reside or where you access, use, or order products from the website.
                <p class="mb-2 "></p>
                As a condition of your use of the Website, you and we agree to all disputes, claims and causes of action (collectively, “Claim”) arising out of or in connection with the Website (other than small claims court claims, where applicable). For the full and final settlement of such claims subject to the United States Arbitration Act (FAA), including additional procedures for consumer-related disputes.
                <p class="mb-2 "></p>
                You understand and agree that you waive any right to sue or go to court to assert or defend your rights under these Terms. YOU AND WE ALSO AGREE THAT (A) ALL CLAIMS WILL BE RESOLVED INDIVIDUALLY AND NOT AS PLUGENT OR CLASS REPRESENTATIVE. If you are a member of a for-purpose class, class or representative proceeding on behalf of another person and not through any class action, (B) the parties waive all rights to a trial by jury if the claim is brought in court. and (C) you or we may seek a court order with respect to intellectual property infringement. There is no judge or jury involved in arbitration.
                <p class="mb-2 "></p>
                Although court review of arbitral awards may be limited, the arbitrator reserves the right to award the same damages and remedies as the courts, including injunctive relief or statutory damages. Notwithstanding the foregoing, either party may seek temporary or urgent equitable relief in any court of competent jurisdiction to enforce its rights. We both waive all rights to a jury trial. and (C) you or we may seek a court order with respect to intellectual property infringement.
                <p class="mb-2 "></p>
                There is no judge or jury involved in arbitration. Although court review of arbitral awards may be limited, the arbitrator reserves the right to award the same damages and remedies as the courts, including injunctive relief or statutory damages. Notwithstanding the foregoing, either party may seek temporary or urgent equitable relief in any court of competent jurisdiction to enforce its rights. Including injunctive relief or legal damages.
                <p class="mb-2 "></p>
                These Terms (along with other policies on ACA website) contain the entire agreement between the parties and supersede all prior oral and written agreements. No oral amendments, express or implied, shall change the terms of this Agreement. Neither party will rely on any representations or promises relating to the subject matter of this Agreement except as contained in the four corners of this Agreement.
                <p class="mb-2 "></p>
                These Terms and any other agreements relating to the Website do not constitute a joint venture, partnership, agent, employment or fiduciary relationship between the parties except as expressly stated. Neither the parties nor their agents have the power to bind the other, and the parties’ relationship is that of a buyer and seller or independent contractor under certain circumstances.
                <p class="mb-2 "></p>
                These Terms shall become effective and binding for the benefit of the parties’ successors, assigns, heirs, executors and administrators. However, you may not assign or delegate any rights or obligations under this Agreement without the written consent of the Company. Any attempt to do so is void.
                <p class="mb-2 "></p>
                If any provision of these Terms is invalid or unenforceable, the remainder of these Terms will remain in full force and effect. If any provision is invalid or unenforceable with respect to a particular situation, it shall remain in full force and effect in all other circumstances.
                <p class="mb-2 "></p>

                <p class="mb-2 "></p>
            </div>




            </div>
         


            
        </div>
        
    </div>





    
    



</div>



    );


};

export default License;