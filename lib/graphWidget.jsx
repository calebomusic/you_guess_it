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
      <div id={'graphWidget-' + this.props.graphId}>
        <div className={'before-' + this.props.graphId}>

        </div>

        <div id={this.props.graphId}></div>
        <div id={'beforeGuess-' + this.props.graphId}
             className={'beforeGuessComplete-' + this.props.graphId}>

        </div>
        <div className="hidden"
             id={'answerText-' + this.props.graphId}>

        </div>
      </div>
    )
  }
}

export default GraphWidget;
