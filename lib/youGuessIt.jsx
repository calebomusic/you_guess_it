import React from 'react';
import ReactDom from 'react-dom';

import GraphWidget from './graphWidget.jsx';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');

  ReactDom.render(<Demo />,
                  root);
});

const Demo = () => {
  return(<div>
          <GraphWidget graphId='foreignBorn'
                       options={foreignBornOptions}
                       question={QuestionOne}
                       beforeGuess={BeforeGuessOne}
                       answer={AnswerOne}/>
          <GraphWidget graphId='test'
                       options={mexicoAndOtherOptions}
                       question={QuestionTwo}
                       beforeGuess={BeforeGuessTwo}
                       answer={AnswerTwo}/>
        </div>)
}

const QuestionOne = () => {
  return(<div>
            <b>DEMO!
             </b>
           <br></br>
           <br></br>
            From 1860 to 2010, what percentage of Americans were foreign born?</div>)
};

const BeforeGuessOne = () => {
  return(<div>Show me how I did.</div>)
};

const AnswerOne = () => {
  return(<div>That percentage of Americans were foreign born.
      The proportion of foreign born Americans began falling in the 1920s, reaching as low as 4.7% in the 1970s,
       as <a href="https://en.wikipedia.org/wiki/National_Origins_Formula">The National Origins Formula</a> was introduced, enforcing immigration
      quotas. <a href="http://www.npr.org/2015/09/10/439114563/americas-forgotten-history-of-mexican-american-repatriation">The Mexican Repatriation</a> also happened which you can read about if you want to be sad.</div>)
};

const foreignBornData = [
               { year: 1860, percentage: 0.132 },
               { year: 1870, percentage: 0.144 },
               { year: 1880, percentage: 0.133 },
               { year: 1890, percentage: 0.148 },
               { year: 1900, percentage: 0.136},
               { year: 1910, percentage: 0.147 },
               { year: 1920, percentage: 0.132 },
               { year: 1930, percentage: 0.116 },
               { year: 1940, percentage: 0.088 },
               { year: 1950, percentage: 0.069 },
               { year: 1960, percentage: 0.054 },
               { year: 1970, percentage: 0.047},
               { year: 1980, percentage: 0.062},
               { year: 1990, percentage: 0.079},
               { year: 2000, percentage: 0.111},
               { year: 2010, percentage: 0.129}
             ];

const foreignBornOptions = {
  xAxisText: 'Year',
  yAxisText: 'Percentage foreign born',
  yMin: 0,
  yMax: 0.2,
  xMin: 1860,
  xMax: 2010,
  xAxisLabelFormat: 'd',
  yAxisLabelFormat: '.0%',
  data: foreignBornData,
  xKey: 'year',
  yKey: 'percentage'
};

const QuestionTwo = () => {
  return(<div>This graph shows the approximate number of unauthorized immigrants from Mexico from 1990 to 2014.
          <br></br>
          <br></br>
          How many were from countries other than Mexico?
        </div>)
};

const BeforeGuessTwo = () => {
  return(<div>Show me how I did.</div>)
};

const AnswerTwo = () => {
  return(<div>
          That many! Check out the documentation <a href='https://github.com/calebomusic/you_guess_it'>here</a>.
          <br></br>
          <br></br>
          Numbers from <a href='http://www.pewhispanic.org/2015/09/28/chapter-5-u-s-foreign-born-population-trends/'>The Pew Research Center</a>.
        </div>)
};

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
