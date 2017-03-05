import React from 'react';
import ReactDom from 'react-dom';

import GraphWidget from './graphWidget.jsx';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');


});

const mexicoAndOtherOptions = {
  xAxisText: 'Year',
  yAxisText: 'Population in millions',
  yMin: 0,
  yMax: 10,
  xKey: 'year',
  yKey: 'population',
  xMin: 1990,
  xMax: 2014,
  xAxisLabelFormat: 'd',
  yAxisLabelFormat: '',
  xTicks: 6,
  yTicks: 5,
  guessDist: 2,
  data: otherImmigrationData,
  otherData: [ mexicanImmigrationData ]
};
