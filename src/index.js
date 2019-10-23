import React from 'react';
import { render } from "react-dom";

import Button from './lib'

import { FaAngleRight, FaAngleLeft } from 'react-icons/fa';
import {ThemeProvider, createGlobalStyle}  from 'styled-components';
import Color from 'color';

const onClick = (e) => {
  console.log("clicked: ", e);
}

const buttonsArray = [{
  text: 'Regular',
  props: {
    appearance:'default'
  }
}, {
  text: 'Small',
  props: {
    size: 'small'
  }
}, {
  text: 'Large',
  props: {
    size: 'large'
  }
}, {
  text: 'Primary',
  props: {
    appearance:'primary'
  }
}, {
  text: 'Secondary',
  props: {
    appearance: 'secondary'
  }
}, {
  text: 'OnClick',
  props: {
    onClick
  }
}, {
  text: 'Subtle'
},{
  text: 'With Before Icon',
  props: {
    beforeIcon: <FaAngleLeft/>
  }
}, {
  text: 'With After Icon',
  props: {
    afterIcon: <FaAngleRight/>
  }
}, {
  text: 'I have loader!',
  props: {
    appearance: 'primary'
  }
}, {
  text: 'I have a custom title',
  props: {
    appearance: "default",
    title: "UHULLL"
  }
}];

const ResetCSS = createGlobalStyle`
  body {
    padding: 0;
    margin: 0;
  }

  body * {
    box-sizing: border-box;
  }
`
class App extends React.Component {

  state = {
    isLoading: false,
    disabled: false,
    singleLoading: true,
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

  randomizeATheme = () => {
    const newTheme = {...this.state.theme}
    function random256(){
      return Math.floor(Math.random() * 256)
    }
    function getRandomColor() {
      return Color.rgb(random256(), random256(), random256()).string()
    }
    newTheme.primary = getRandomColor()
    newTheme.primaryContrast = Color(newTheme.primary).negate().string();
    newTheme.secondary = getRandomColor()
    newTheme.secondaryContrast = Color(newTheme.secondary).negate().string();
    newTheme.default = getRandomColor()
    newTheme.defaultContrast = Color(newTheme.default).negate().string()
    newTheme.primaryDark = Color(newTheme.primary).darken(0.4).string()
    newTheme.primaryContrastDark = Color(newTheme.primaryDark).negate().string()
    newTheme.secondaryDark = getRandomColor()
    newTheme.secondaryContrastDark = Color(newTheme.secondaryDark).negate().string()
    newTheme.defaultDark = getRandomColor()
    newTheme.defaultContrastDark = Color(newTheme.defaultDark).negate().string()
    this.setState({
      theme: newTheme
    });
  }


  render() {
    const bodyBackground = this.state.theme.mode === 'dark' ? 'rgb(105, 105, 105)' : 'rgba(238, 238, 238, 0.81)'
    return (
      <ThemeProvider theme={{...this.state.theme, primaryContrastDark: '#2b324c', primaryDark: '#ebebeb', secondaryDark: 'red', secondaryContrastDark: 'blue'}}>
        <React.Fragment>
          <ResetCSS/>
          <div style={{padding: '20px',margin: 0, width: '100vw', height: '100%', transition: 'background-color .5s ease-out', backgroundColor: bodyBackground}}>
            <h2>Button Component Module</h2>
            <div style={{display:'flex', justifyContent: 'space-around', width: '70%', flexWrap: 'wrap'}}>
              <div>
                <label htmlFor='isLoading'>Loading</label>
                <input type='checkbox' id='isLoading' onChange={this.onChangeBasicProps}></input>
              </div>
              <div>
                <label htmlFor='disabled'>Disabled</label>
                <input type='checkbox' id='disabled' onChange={this.onChangeBasicProps}></input>
              </div>
              <div>
                <label htmlFor='light'>Light Theme</label>
                <input type='radio' id='light' name='theme' onChange={this.onChangeTheme}></input>
              </div>
              <div>
                <label htmlFor='dark'>Dark Theme</label>
                <input type='radio' id='dark' name='theme' onChange={this.onChangeTheme}></input>
              </div>
              <div>
                <label htmlFor='random'>Random Theme</label>
                <input type='radio' id='random' name='theme' onChange={e => this.randomizeATheme()}></input>
              </div>
            </div>
            <div style={{marginTop: '3em'}}>
              {
                buttonsArray.map((button,index) => {
                  return (
                    <React.Fragment key={index}>
                      <Button isLoading={this.state.isLoading} disabled={this.state.disabled} {...button.props}>
                        {button.text}
                      </Button>
                      <br/>
                    </React.Fragment>
                  )
                })
              }
            </div>
          </div>
        </React.Fragment>
      </ThemeProvider>
    )
  }
}

render(<App />, document.getElementById("root"));
