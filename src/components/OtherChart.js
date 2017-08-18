import React from 'react';
import { ResizableBox } from 'react-resizable';
import { Chart, Axis, Series, Line } from 'react-charts';

const OtherChart = ({data}) => (
    <ResizableBox height={300} width={300}>
        <Chart data={data}>
            <Axis primary type="linear" position="bottom" />
            <Axis type="linear" position="left" />
            <Series type={Line} showPoints={false} />
        </Chart>
    </ResizableBox>
);

export default OtherChart;