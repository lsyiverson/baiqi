import React from 'react';
import ReactDOM from 'react-dom';
import Home from '../home/pages/home.jsx';

module.exports = function(rootNode) {
  return ReactDOM.render(<Home/>, rootNode);
};