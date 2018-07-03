import React, { Component } from "react";
import HotelStats from './HotelStats'
import 'bootstrap/dist/css/bootstrap.css';
import EmployeeStats from "./EmployeeStats";


export default class App extends Component {

    render() {
        return (
            <div className="container">
                    <HotelStats/>
                    <EmployeeStats/>
            </div>
        );
    }
}
