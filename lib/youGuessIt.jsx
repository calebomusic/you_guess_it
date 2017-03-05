import React from 'react';
import ReactDom from 'react-dom';

import GraphWidget from './graphWidget.jsx';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');

  ReactDom.render(<GraphWidget graphId='test'
                               options={mexicoAndOtherOptions}/>,
                             root);
});

const mexicanImmigrationData = [
  { year: 1990, population: 2.0 },
  { year: 1995, population: 2.9 },
  { year: 2000, population: 4.5 },
  { year: 2007, population: 6.9 },
  { year: 2009, population: 6.4 },
  { year: 2014, population: 5.8 }
];

const otherImmigrationData = [
  { year: 1990, population: 1.5 },
  { year: 1995, population: 2.8 },
  { year: 2000, population: 4.1 },
  { year: 2007, population: 5.3 },
  { year: 2009, population: 5.0 },
  { year: 2014, population: 5.3 }
];

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
