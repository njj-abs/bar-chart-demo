import { React } from 'react';
import { pick } from '@laufire/utils/collection';

const maxWidth = 100;

const getStyle = ({ data, config: { barData, xLabel, barValue }}) =>
	(data.population * (maxWidth - (xLabel.width + barValue.width))) / Math
		.max(...pick(barData, 'population'));

// eslint-disable-next-line max-lines-per-function
const Bar = (context) => {
	const { data: { stateName, population },
		config: { xLabel, barValue }} = context;

	return <div className="container">
		<div
			className="xLabel"
			style={ {
				width: `${ xLabel.width }%`,
			} }
		>{ stateName }</div>
		<div
			className="bar"
			style={ {
				width: `${ getStyle(context) }%`,
			} }
		/>
		<div
			className="value"
			style={ {
				width: `${ barValue.width }%`,
			} }
		>{ population }</div>
	</div>;
};

export default Bar;
