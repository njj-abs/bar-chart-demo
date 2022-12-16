import { React } from 'react';
import Bar from './bar';

const BarChart = (context) => context.config.barData.map((data) =>
	<Bar key={ data.id } { ...{ ...context, data } }/>);

export default BarChart;
