import React from 'react';
import OtherChart from './OtherChart';
import _ from 'lodash';

const data = [_.map(_.range(5), (d) => {
    return {
        x: d * Math.round(Math.random(10)),
        y: d * 2,
        r: Math.round(Math.random(4)),
    };
})];

const data2 = [[{x:-1,y:-1},{x: 2, y: 2}]];

const App = () => (
    <OtherChart data={[eqToPoints(5,0)]} />
);

export default App;


function point( x, y ) {
    return {
        x,
        y,
    };
}
// y = mx + b;
// y === (2)(-5) + 0 === -10



function eqToPoints( m, b ){

    return [ point( -5, (m*-5) + b ), point( 5, (m*5) + b ) ];
}