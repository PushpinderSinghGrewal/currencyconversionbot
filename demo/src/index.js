import React, {Component} from 'react';
import {render} from 'react-dom';

import ReactBotUI from '../../src';
import './demo.css';

class Demo extends Component {
  constructor(props) {
    super(props);
    this.handleToggle = this.handleToggle.bind(this);
  }

  handleToggle() {
    if (this.chat) {
      this.chat.handleToggle();
    }
  }

  render() {
    return (
      <div>

        <button onClick={this.handleToggle}></button>
        <div id="bar" style={{marginTop:'-20px',height:'90px',backgroundColor:'#3B5998'}} >
          <div style={{color:'white'}}><h1 style={{fontSize:'30px',paddingLeft:'240px',paddingTop:'20px'}}> Currency Conversion </h1>

          </div>




        </div>
        <ReactBotUI dialogflow={
          {accessToken: 'f17a002742964563b69c0ff02f146a63'}}
          dialogHeightMax={450}
          isUserHidden={false}
          isVisible={true}
          ref={el => this.chat = el} />
      </div>
    );
  }
}

render(<Demo/>, document.querySelector('#demo'))
