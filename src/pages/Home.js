import React, {Component} from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import { Card, CardText, CardMedia, CardTitle } from 'material-ui/Card';

import { indigo400 } from 'material-ui/styles/colors';

import Title, { hola } from '../components/Title';
import data from '../request/places';
import Benefit from '../components/Benefits';
import  PlaceCard  from "../components/places/PlaceCard";

export default class Home extends Component{

    places(){
		return data.places.map((place, index) =>{
			return(
                <PlaceCard place={place} index={index}/>
			);
		});
    }


    render(){
        return(
            <>
        <div className="App-background">
            <div style={{"width":"80%", "margin": "0 auto"}}>
                <div className="header-main">
                    <Title></Title>
                    {/* <h2>{this.state.numero}</h2> */}

                    {/* <button onClick={( ()=> this.updateNumero() )}>Crear cuenta gratuita</button> */}
                    {/* <button onClick={ this.updateNumero }>Crear cuenta gratuita</button> */}
                    <RaisedButton label="Crear cuenta gratuita" secondary={true}/>

                    <img className="header-illustration" src={process.env.PUBLIC_URL + '/images/place.png'} height='300' alt='Un lugar para ti y los tuyos'/>
                </div>
            </div>
        </div>
            <Benefit></Benefit>
            <div style={{'backgroundColor': indigo400, 'padding': '50px', color: 'white'}}>
                <h3 style={{fontSize: '2.3em', }}>Sitios Populares</h3>
                    <div className="row">
                        {this.places()}
                    </div>
            </div>
            </>
        );
    }
}