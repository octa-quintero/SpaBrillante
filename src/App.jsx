import React from 'react';
import BaseLayout from "./screens/BaseLayout/BaseLayout.jsx";
import {BrowserRouter} from "react-router-dom";
import './App.css';

function App() {
  return (
      <div>
        <BrowserRouter>
          <BaseLayout/>
        </BrowserRouter>
      </div>
  );
}
export default App;
