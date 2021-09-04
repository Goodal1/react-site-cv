import React from 'react';

class XpTag extends React.Component{
    render(){
      return(
        <span className="xp-tag">{this.props.content}</span>
      )
    }
  }

export default XpTag