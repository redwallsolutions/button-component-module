import React from 'react';
import { render } from "react-dom";

import Button from './lib'

import { FaAngleRight } from 'react-icons/fa';

const onClick = (e) => {
  console.log("clicked: ", e);
}

const App = () => (
  <React.Fragment>
    <Button onClick={onClick}>
      Default
    </Button>
    <Button appearance='primary'>
      Primary
    </Button>
    <Button size='small'>
      Size Small
    </Button>
    <Button size='large'>
      Size Large
    </Button>
    <Button disabled={true}>
      Disabled
    </Button>
    <Button disabled={true} appearance='primary' onClick={onClick}>
      Disabled Primary
    </Button>
    <Button loading={true}>
      Loading
    </Button>
    <Button loading={true} appearance='primary' onClick={onClick}>
      Loading Primary
    </Button>
    <Button afterIcon={<FaAngleRight/>}>Text Icon</Button>
    <Button afterIcon={<FaAngleRight/>} appearance='primary'/>
    <Button afterIcon={<FaAngleRight/>} isCircle={true}/>
    <Button afterIcon={<FaAngleRight/>} isCircle={true} appearance='primary'/>
    <Button afterIcon={<FaAngleRight/>} isCircle={true} size='large'/>
    <Button afterIcon={<FaAngleRight/>} isCircle={true} appearance='primary' size='small'/>
    <Button afterIcon={<FaAngleRight/>} isCircle={true} size='large'>With Text </Button>
    <Button afterIcon={<FaAngleRight/>} isCircle={true} appearance='primary' size='small'/>
  </React.Fragment>
);

render(<App />, document.getElementById("root"));
