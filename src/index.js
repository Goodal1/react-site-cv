import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './mediaqueries.css';
import App from './App';



ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);







  const slides = Array.from(document.querySelectorAll('.xp-slider-item'));
slides.forEach(ele => ele.addEventListener('click',function(){
  console.log(this)
}))



//XPSLIDER








// function fetchSliderData(url){
//     const endpoint = url;
//     fetch(endpoint).then(blob => blob.json())
//                    .then(data => {
//                         xp.push(...data.experience)
//                         form.push(...data.formation)
//                                 }
//                             )
//                    .then(()=>{
//                         buildSlider('xp',xp);
//                         buildSlider('form',form);
//                         animateSlider('xp');
//                         yearsHighlight('xp');
//                         yearsHighlight('form')
                        

//                    })
    
// }



              




// function buildSlider(id,bdd){
//     const sliderContainer = document.querySelector(`.${id}-slider-container`);
//     for (var i = 0; i < bdd.length; i++) {
//         const date = `<p class="${id}-date">${bdd[i].date}</p>`;
//         const titre = `<h3>${bdd[i].titre}</h3>`;
//         const boite = `<p class="${id}-boite">${bdd[i].boite}</p>`;
//         const lien = `<p class="${id}-lien">En savoir plus</p>`;
//         const tagsList = Array.from(bdd[i].tags.split(','));
//         const tags = tagsList.map(tag => `<span class="${id}-tag">${tag}</span>`).join('');
    
//         const textnode = document.createElement('div');
//         textnode.innerHTML=`${date}${titre}${boite}${tags}${lien}`;
//         sliderContainer.appendChild(textnode);
//         textnode.dataset.experience = `${id}${i+1}`;
//         }
// }




// function animateSlider(id){
//         const sliderContainer = document.querySelector(`.${id}-slider-container`);
//         const sliderLinks = document.querySelectorAll(`.${id}-slider-container .xp-lien`);
//         let startSlide;
//         let scrollLeft;
//         let drag = false;
        
//         sliderContainer.addEventListener('mousedown', function(e){
//             drag=true;
//             startSlide = e.x-sliderContainer.offsetLeft;
//             scrollLeft = sliderContainer.scrollLeft;
//             sliderContainer.classList.add('active');
//             this.style.cursor='grabbing';
//             e.preventDefault();
//         });

//         sliderContainer.addEventListener('mouseup', function(e){
//             e.preventDefault();
//             sliderContainer.classList.remove('active');
//             this.style.cursor='';
//             setTimeout(function(){drag=false}, 50);
            
//         });

//         sliderContainer.addEventListener('mouseleave', function(){
//             drag=false;
//             this.style.cursor='';
//         });

//         sliderContainer.addEventListener('mousemove',function(e){
//             if(drag){
//                 let walk = e.x-sliderContainer.offsetLeft;
//                 const scroll=startSlide-walk;
//                 sliderContainer.scrollLeft=scrollLeft+scroll;
//             } else{}

//         sliderLinks.forEach(ele=>ele.addEventListener('click',function(e){
          
//                 const cible = this.parentNode.dataset.experience;
//                 document.querySelector(`.pop-${cible}`).style.display='block';
            

//         }))
        
            
//         })
//     }

// function yearsHighlight(id){
//     const xps = document.querySelectorAll(`.${id}-slider-container div`);

//         xps.forEach(ele=>ele.addEventListener('mouseover',function(e){
//             const cible = this.dataset.experience;
//             const targets = document.querySelectorAll(`.${cible}`);
//             targets.forEach(ele => {
//                 ele.classList.add('active');
//             })

//         }))

//         xps.forEach(ele=>ele.addEventListener('mouseout',function(e){
//             const cible = this.dataset.experience;
//             const targets = document.querySelectorAll(`.${cible}`);
//             targets.forEach(ele => {
//                 ele.classList.remove('active');
//             })

//         }))
// }

// function showPopups(id){
//     const xps = document.querySelectorAll(`.${id}-slider-container div`);

        

// }
    
// function closePopups(){
//     const closes = document.querySelectorAll('.xp-close');
//     closes.forEach(ele => ele.addEventListener('click', function(){
//         this.parentNode.style.display='none';
//     }))
// }

// closePopups();







  
       
