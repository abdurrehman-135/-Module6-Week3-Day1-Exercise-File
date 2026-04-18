import React, { Component } from "react";
import { NodeGroup } from "react-move";
import {
  getAppendedData,
  getInitialData,
  getTruncatedData,
  getUpdatedData
} from "./helpers";
import "./barchart.css";

const barHeight = 25;
const barPadding = 2;
const barColour = "#348AA7";
const chartOffsetTop = 10;
const chartOffsetBottom = 10;
const widthScale = d => d * 5;

function BarGroup(props) {
  const width = widthScale(props.state.value);
  const yMid = barHeight * 0.5;

  return (
    <g className="bar-group" transform={`translate(0, ${props.state.y})`}>
      <rect
        y={barPadding * 0.5}
        width={width}
        height={barHeight - barPadding}
        style={{ fill: barColour, opacity: props.state.opacity }}
      />
      <text
        className="value-label"
        x={width - 6}
        y={yMid}
        alignmentBaseline="middle"
      >
        {props.state.value.toFixed(0)}
      </text>
      <text
        className="name-label"
        x="-6"
        y={yMid}
        alignmentBaseline="middle"
        style={{ opacity: props.state.opacity }}
      >
        {props.data.name}
      </text>
    </g>
  );
}

class BarChart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: getInitialData()
    };

    this.handleAdd = this.handleAdd.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
  }

  handleAdd() {
    this.setState({
      data: getAppendedData(this.state.data)
    });
  }

  handleRemove() {
    this.setState({
      data: getTruncatedData(this.state.data)
    });
  }

  handleUpdate() {
    this.setState({
      data: getUpdatedData(this.state.data)
    });
  }

  startTransition(d, i) {
    return { value: 0, y: i * barHeight, opacity: 0 };
  }

  enterTransition(d) {
    return { value: [d.value], opacity: [1], timing: { duration: 250 } };
  }

  updateTransition(d, i) {
    return { value: [d.value], y: [i * barHeight], timing: { duration: 300 } };
  }

  leaveTransition() {
    return { y: [-barHeight], opacity: [0], timing: { duration: 250 } };
  }

  render() {
    const chartHeight = Math.max(this.state.data.length * barHeight, barHeight);
    const svgHeight = chartHeight + chartOffsetTop + chartOffsetBottom;

    return (
      <div>
        <div id="menu">
          <button onClick={this.handleAdd}>Add item</button>
          <button onClick={this.handleRemove}>Remove item</button>
          <button onClick={this.handleUpdate}>Update values</button>
        </div>

        <svg width="800" height={svgHeight}>
          <g className="chart" transform={`translate(100,${chartOffsetTop})`}>
            <NodeGroup
              data={this.state.data}
              keyAccessor={d => d.name}
              start={this.startTransition}
              enter={this.enterTransition}
              update={this.updateTransition}
              leave={this.leaveTransition}
            >
              {nodes => (
                <g>
                  {nodes.map(({ key, data, state }) => (
                    <BarGroup key={key} data={data} state={state} />
                  ))}
                </g>
              )}
            </NodeGroup>
          </g>
        </svg>
      </div>
    );
  }
}

export default BarChart;
