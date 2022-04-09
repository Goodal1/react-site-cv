import React from 'react';
import XpTag from './XpTag';

class XpItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const tagList = this.props.tags.map((ele) => {
      return <XpTag content={ele} />;
    });

    const datesList = [];
    for (let i = this.props.startDate; i < this.props.endDate + 1; i++) {
      datesList.push(i);
    }

    return (
      <div className="xp-slider-item" id={this.props.id} onClick={this.props.clic.bind(this)} data-dateslist={datesList}>
        <p className="xp-date">
          {this.props.startDate}-{this.props.endDate}
        </p>
        <div className="xp-type">{this.props.type}</div>
        <h3>{this.props.titre}</h3>
        <p className="xp-boite">{this.props.boite}</p>

        <p className="xp-taglist"> {tagList}</p>
        <a className="xp-lien" href={this.props.lien}>
          En savoir plus
        </a>
      </div>
    );
  }
}

export default XpItem;
