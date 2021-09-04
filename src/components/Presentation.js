import React from 'react';
import ReactDOM from 'react-dom';

class Presentation extends React.Component {


    render() {

const bubblesArray =[];
for(let i=0; i<50;i++){
    const topMin = -100;
    const topMax = 0;

    const leftMin = 0;
    const leftMax = 100;

    const imgMin = 1;
    const imgMax=8;

    const speedMin=3;
    const speedMax =11;

    const topRandom = Math.floor(Math.random() * (topMax - topMin + 1)) + topMin;
    const leftRandom = Math.floor(Math.random() * (leftMax - leftMin + 1)) + leftMin;
    const imgRandom = Math.floor(Math.random() * (imgMax - imgMin + 1)) + imgMin;
    const speedRandom = Math.random() * (speedMax - speedMin + 1) + speedMin;
    
    bubblesArray.push({top:topRandom+'%',left:leftRandom+'%',src:`../img/icons/${imgRandom}.png`, animation:`makeItRain ${speedRandom}s ease-out infinite`})
}

const bubbles = bubblesArray.map((ele)=> {return <li style={ele}> <img src={ele.src}/></li>})

      return (
        <section className="prez-banner">
            <div className="prez-banner-bg">
             <div className="prez-text">
               <div> 
                <h2>Lorem ipsum <b>dolor</b> sit amet</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
               </div> 
               
             </div>
             <div className="prez-icones">
                <ul>
                   {bubbles}
                </ul>
            </div>
            </div>
            
        </section>
      );
    }
  }

  export default Presentation;

