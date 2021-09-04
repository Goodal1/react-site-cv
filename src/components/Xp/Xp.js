import React from 'react';
import ReactDOM from 'react-dom';
import { act } from 'react-dom/test-utils';

import XpItem from './XpItem';
import XpPopUp from './XpPopUp';


class Xp extends React.Component {
  constructor(props){
    super(props);
    this.state={
      loading:true,
      data:null,
      datesList:[],
      high:[],
      activeKey:null
    }

    this.componentDidMount = this.componentDidMount.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.createPopUp = this.createPopUp.bind(this);
    
  }

  handleClick(event){
    const high=Array.from(event.target.dataset.dateslist.split(','));
    const activeKey = parseInt(event.target.id);
    console.log(this);
    this.setState({
      high:high,
      activeKey:activeKey
    });
    this.createPopUp(activeKey)
  }

  async createPopUp(index){
    const dataList = this.state.data[index-1];
  }

 
   async componentDidMount(){
      const url = 'https://raw.githubusercontent.com/Goodal1/sitecv/main/js/data2.json';
      const response = await fetch(url);
      const data = await response.json();

      let datesArray = [];
      const datesList =[];

      data.forEach(ele => { datesArray.push(ele.date)});

      datesArray = datesArray.map((ele)=> {return [...ele.split('-')]}).flat();
      datesArray = datesArray.map((ele)=> {return parseInt(ele)})
      

      const datesMax = Math.max(...datesArray);
      const datesMin = Math.min(...datesArray);

      for(let i=datesMin; i<datesMax+1;i++){
         datesList.push(i)
       }

       datesList.reverse();


      this.setState({
        data:data, 
        loading:false,
        datesArray:datesArray,
        datesList:datesList,
      });
      
  }
                

    render() {
     


      return (
        <section className="xp">
        
       <div className="xp-container">
       <div className="xp-slider-container">
          {this.state.loading?
          'chargement': 
          this.state.data.map((ele)=>{

            const startDate = parseInt(Array.from(ele.date.split('-'))[0]);
            const endDate = parseInt(Array.from(ele.date.split('-'))[1]);
            const range=[];
            for(let i=startDate; i<endDate+1;i++){range.push(i)};

            return <XpItem
                        clic={this.handleClick}
                        key={ele.id}
                        id={ele.id}
                        type={ele.type}
                        startDate={startDate}
                        endDate={endDate}
                        range={range}
                        titre={ele.titre}
                        boite={ele.boite}
                        tags={Array.from(ele.tags.split(','))}
                    />
        })
          
          }
        </div>
        
       <div><img src="img/wall.png"/></div>
       </div>

        
</section>
      );
    }
  }



    export default Xp;
    




