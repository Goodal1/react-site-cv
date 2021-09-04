import React from 'react';

class XpFriseItem extends React.Component {
 

    render() {
      // console.log(this.props.range)
      // console.log(this.props.date)

      const color = this.props.range.includes(this.props.date.toString())?'highlighted':'';

      return (
        <li key={this.props.date}  className={color}>{this.props.date}</li>
  
      )}
  
  }
  
  export default XpFriseItem;