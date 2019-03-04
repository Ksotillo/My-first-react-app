import React, {Component} from "react";

export default class Title extends React.Component{
    render(){
        return (
            <div>
                <h1>{this.props.title}</h1>
                <p>Descubre lugares de manera simple</p>
            </div>
        );
    }
}

export function hola() {
    return "Hola";
}