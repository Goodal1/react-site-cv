import React from 'react';
import ReactDOM from 'react-dom';
import { act } from 'react-dom/test-utils';

import XpItem from './XpItem';
import XpPopUp from './XpPopUp';

class Xp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      data: null,
      datesList: [],
      high: [],
      activeKey: null,
      currentItem: {
        date: 'date',
        title: 'placeholder titre',
        img: 'img',
        desc: 'desc',
      },
    };

    this.componentDidMount = this.componentDidMount.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  //Appel de l'api
  async componentDidMount() {
    const url = 'https://raw.githubusercontent.com/Goodal1/react-site-cv/master/src/components/Xp/data.json';
    const response = await fetch(url);
    const data = await response.json();

    let datesArray = [];
    const datesList = [];

    data.forEach((ele) => {
      datesArray.push(ele.date);
    });

    datesArray = datesArray
      .map((ele) => {
        return [...ele.split('-')];
      })
      .flat();
    datesArray = datesArray.map((ele) => {
      return parseInt(ele);
    });

    const datesMax = Math.max(...datesArray);
    const datesMin = Math.min(...datesArray);

    for (let i = datesMin; i < datesMax + 1; i++) {
      datesList.push(i);
    }

    datesList.reverse();

    this.setState({
      data: data,
      loading: false,
      datesArray: datesArray,
      datesList: datesList,
    });
  }

  //Affichage et remplissage de la popup
  handleClick(event) {
    let dataList = '';

    const high = Array.from(event.target.dataset.dateslist.split(','));
    const activeKey = parseInt(event.target.id);
    dataList = this.state.data[activeKey - 1];

    this.setState({
      high: high,
      activeKey: activeKey,
      currentItem: {
        title: dataList.titre,
        desc: dataList.desc,
      },
    });

    this.deployPopup();
  }

  deployPopup() {
    const popup = document.querySelector('.xp-popup');
    popup.style.display = 'block';
  }

  //Affichage html

  render() {
    return (
      <section className="xp">
        <div className="xp-container">
          <div className="xp-slider-container">
            {this.state.loading
              ? 'chargement'
              : this.state.data.map((ele) => {
                  const startDate = parseInt(Array.from(ele.date.split('-'))[0]);
                  const endDate = parseInt(Array.from(ele.date.split('-'))[1]);
                  const range = [];
                  for (let i = startDate; i < endDate + 1; i++) {
                    range.push(i);
                  }

                  return (
                    <XpItem
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
                      lien={ele.lien}
                      desc={ele.desc}
                      logo={ele.logo}
                    />
                  );
                })}
          </div>

          <div className="xp-image">
            <img src="img/wall.png" />
          </div>
          <XpPopUp title={this.state.currentItem.title} desc={this.state.currentItem.desc}></XpPopUp>
        </div>
      </section>
    );
  }
}

export default Xp;
