import React from 'react';
import { render } from "react-dom";

import Button from './lib'

const App = () => (
  <Button>
    Teste
  </Button>
);

render(<App />, document.getElementById("root"));
