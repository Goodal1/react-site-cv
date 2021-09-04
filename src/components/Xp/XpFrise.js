import React from 'react';
import XpFriseItem from './XpFriseItem';



class XpFrise extends React.Component{
    constructor(props){
      super(props);
      this.state={
        range:[]
      };

      this.componentDidMount = this.componentDidMount.bind(this);

    }

    async componentDidMount(){
      const range=this.props.high;
      
      this.setState({
        range:range
      })

    }
    
      render(){
       
        return(
            <div className="xp-frise-container">
                {this.props.list.map((ele)=>{return <XpFriseItem key={ele} date={ele} range={this.props.high}/>})}
            </div>
            
         
        )
      }
    }

export default XpFrise;