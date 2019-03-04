import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Home from './pages/Home';
import './App.css';
class App extends Component {
	
	// constructor(props){
	// 	super(props);

		// this.state = {
		// 	numero: 0
		// };

		// this.updateNumero = this.updateNumero.bind(this);
	// }
	// 	setInterval(() =>{
	// 		this.setState({
	// 			numero: this.state.numero + 1
	// 		});
	// 	}, 1000)
	// }

	// updateNumero(){
	// 	this.setState({
	// 		numero: this.state.numero + 1
	// 	});
	// }




	render() {
    return (
        <MuiThemeProvider>
			<Home></Home>
        </MuiThemeProvider>
    	);
	}
}

export default App;
