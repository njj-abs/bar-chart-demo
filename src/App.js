import { React } from 'react';
import './App.scss';
import BarChart from './components/barChart/index';

const App = (context) =>
	<div className="App">
		<BarChart { ...context }/>
	</div>;

export default App;
