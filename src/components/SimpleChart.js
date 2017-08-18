import React, { Component } from 'react'
import _ from 'lodash';
import { ResizableBox } from 'react-resizable';
//
import { Chart, Axis, Series, Tooltip, Line } from 'react-charts';

class SimpleChart extends Component {

  // constructor -> inital state using makeData
  constructor() {
    super();
    this.state = {
      data: makeData()
    };
    console.log(this.state.data);
  }

  render() {
    const { data } = this.state;

    return (
      <div>
        <button
          onClick={() =>
            this.setState({
              data: makeData()  // set data to new data returned by makeData()
            })}
        >
          Randomize Data
        </button>

        <br />
        <br />

        {_.range(1).map((d, i) =>
          <ResizableBox key={i} width={500} height={300}>
            <Chart data={data}>
              <Axis primary type="linear" position="bottom" />
              <Axis type="linear" position="left" />
              <Series type={Line} showPoints={false} />
              <Tooltip />
            </Chart>
          </ResizableBox>
        )}

        <br />
        <br />
      </div>
    )
  }
}

export default SimpleChart;

function makeData() {
  return _.map(_.range(1), d =>
    makeSeries()
  );
}

function makeSeries() {
  const startDate = new Date();

  const length = 30;
  const max = 100;

  return _.map(_.range(length), ( d, i ) => ({
    // x: d * multiplier,
    x: d * i,
    y: d * i * (Math.random() * 2),
    r: Math.round(Math.random() * 5)
  }));
}