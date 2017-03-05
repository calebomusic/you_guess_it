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
        <div className={'question-' + this.props.graphId}>
          {this.props.question()}
        </div>

        <div id={this.props.graphId}></div>
        <div id={'beforeGuess-' + this.props.graphId}
             className={'beforeGuessComplete-' + this.props.graphId}>
          {this.props.beforeGuess()}
        </div>
        <div className="hidden"
             id={'answer-' + this.props.graphId}>
            {this.props.answer()}
        </div>
      </div>
    )
  }
}

export default GraphWidget;
