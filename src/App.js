import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Title, { hola } from './components/Title';
class App extends Component {
	render() {
    return (
        <section>
			<div>
            	<div>
					<Title></Title>
    				<button>Crear cuenta gratuita</button>
				<div>
                	<ul>
                		<li>
                			<h3>Calificaciones con emociones</h3>
                    		<p>Califica tus lugares con experiencias, no con números</p>
            			</li>
                		<li>
                    		<h3>Calificaciones con emociones</h3>
                			<p>Califica tus lugares con experiencias, no con números</p>
                		</li>
                		<li>
                    		<h3>Calificaciones con emociones</h3>
                			<p>Califica tus lugares con experiencias, no con números</p>
                		</li>
            		</ul>
            		</div>
            	</div>
        	</div>
        </section>
    	);
	}
}

export default App;
