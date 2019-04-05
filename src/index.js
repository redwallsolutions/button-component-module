import React from 'react';
import { render } from "react-dom";

import Button from './lib'

import { FaAngleRight, FaAngleLeft } from 'react-icons/fa';
import {ThemeProvider} from 'styled-components';

const onClick = (e) => {
  console.log("clicked: ", e);
}

const buttonsArray = [{
  text: 'Regular',
  props: {}
}, {
  text: 'Small',
  props: {}
}, {
  text: 'Large',
  props: {}
}, {
  text: 'Primary',
  props: {}
}, {
  text: 'Secondary',
  props: {}
}, {
  text: 'OnClick',
  props: {
    onClick
  }
}];

class App extends React.Component {

  state = {
    loading: false,
    disabled: false,
    theme: {
      mode: 'light'
    }
  }

  onChangeBasicProps = (input) => {
    this.setState({
      [input.target.id]: input.target.checked
    });
  }

  onChangeTheme = (input) => {
    this.setState({
      theme:{
        mode: input.target.id
      }
    });

  }


  render() {
    return (
      <ThemeProvider theme={this.state.theme}>
        <React.Fragment>
          <h2>Button Component Module</h2>
          <div style={{display:'flex'}}>
            <div>
              <label htmlFor='loading'>Loading...</label>
              <input type='checkbox' id='loading' onChange={this.onChangeBasicProps}></input>
            </div>
            <div>
              <label htmlFor='disabled'>Disabled...</label>
              <input type='checkbox' id='disabled' onChange={this.onChangeBasicProps}></input>
            </div>
            <div>
              <label htmlFor='light'>Theme Light</label>
              <input type='radio' id='light' name='theme' onChange={this.onChangeTheme}></input>
            </div>
            <div>
              <label htmlFor='dark'>Theme Dark</label>
              <input type='radio' id='dark' name='theme' onChange={this.onChangeTheme}></input>
            </div>
          </div>
          <div>
            {
              buttonsArray.map((button,index) => {
                return (
                  <Button key={index} loading={this.state.loading} disabled={this.state.disabled} {...button.props}>
                    {button.text}
                  </Button>
                )
              })
            }
          </div>
        </React.Fragment>
      </ThemeProvider>
    )
  }
}

render(<App />, document.getElementById("root"));
