const generateGraph = require("./generateGraph.js");
import React from 'react';

class GraphWidget extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    generateGraph(this.props.graphId, this.props.options);
  }

  render() {
    return(
      <div id={'graphWidget-' + props.graphId}>
        <div className={'before-' + props.graphId}>

        </div>
        <div id={'beforeGuess-' + props.graphId}
             className={'beforeGuessComplete-' + props.graphId}>

        </div>
        <div className="hidden"
             id={'answerText-' + props.graphId}>

        </div>
      </div>
    )
  }
}

export default GraphWidget;
