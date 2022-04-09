import React from 'react';


class FloatingMenu extends React.Component{
    constructor(props){
      super(props);
     
    }


    
      render(){
    
    
        return(
          <div className="floating-menu">
           <ul>
               <a href="./"><li><img src="../img/icons/house.png"/></li></a>
               <a href="./presentation"><li><img src="../img/icons/prez.png"/></li></a>
               <a href="./experience"><li><img src="../img/icons/parcours.png"/></li></a>
               <a href="./contact"><li><img src="../img/icons/message.png"/></li></a>
           </ul>
          </div>
         
        )
      }
    }

export default FloatingMenu;