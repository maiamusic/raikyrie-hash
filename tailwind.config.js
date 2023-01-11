/** @type {import('tailwindcss').Config} */

const { redirect } = require('react-router-dom');



module.exports = {
  

  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    './src/**/*.{html,js}', 
  
  ],
  theme: {
    extend: {
      fontFamily:{
        IBMPlex: ['ibm-plex-mono'],
        AvantGarde: ['AvantGarde-Demi2'],
        Azonix: ['Azonix'],
        EuroStyle: ['EuroStyle'],
        Orbitron: ['Orbitron'],
        LightNovel: ['07LightNovelPOP'],
        
        
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'defaultdark': "#080d23",
        'white': "#e2f3f5",
        'darkgreen' : "#445325",
        'midnight': '#121063',
        'tahiti': '#3ab7bf',
        'fsource': '#0a081b',
        'ssource':'#0a081b',
        'mint': "#2A3D45",
        'mint-light' : "#E1E4E4",
        'bridge': '#bc6c25', 
        
       
      },
        
       
      backgroundColor: {
        'background': 
      
        '#222328',


        'about': 
        '#EAFDCF',

        'about2':
        '#364958',

    
        
      },
      keyframes:{
        blink:{
          '0%' : {
            opacity: '0',
           
          },
          
          '20%':{
            opacity:'1',
           
          },

          '40%': {
            opacity:'0',
          },

          '100%':{
            opacity: '0',
    
            
          }

        },
        slide:{
          '0%' : {
          
            transform: 'translateX(0)'},
          

          '100%': {

            transform: 'translateX(-100%)'},

          },

        fadeIn:{
          '0%': { 

            opacity: '0',
          },
          '100%': { 
 
            opacity: '1',

           },
          
        },
      
        },

        
      
      animation:{
        'blinker' :'blink 3s infinite ',
        'slideAnim' : 'slide linear infinite',
        'fadeinLoader' : 'fadeIn ease-in-out 1' ,

      },

      animationDelay:{

        '1000' : '1000ms',
        '2000' : '2000ms',
        '3000' : '3000ms',
      },

      animationDuration:{
        "3s" : "3s",
      },

    },
  },

  plugins: [
    require("tailwindcss-animation-delay"),
    require("tailwindcss-animate"),
  ],
}

