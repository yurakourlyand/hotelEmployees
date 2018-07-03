import React, {Component} from "react";
import axios from 'axios';
import * as _ from 'lodash';
import moment from 'moment'
import HotelEmployeeElement from "./HotelEmployeeElement";


export default class EmployeeStats extends Component {


    state = {
        bookingStats: {},
        employees: {},
        loading: true,
    };


    bookingStatsURL = 'https://interview-booking-api.herokuapp.com/api/bookings';


    componentWillMount() {
        this.fetchBookingStats();
    }


    componentDidMount() {
    }


    mapEmployeesFromBookings = () => {
        let employees = {};
        _.forEach(this.state.bookingStats, booking => {
            let checkInDate = moment(booking.checkInDate, 'DD-MM-YYYY');
            let checkOutDate = moment(booking.checkOutDate, 'DD-MM-YYYY');
            let hours = checkOutDate.diff(checkInDate, 'hours');
            let empId = booking.employee.id;
            if (this.state.employees[empId]) {
                employees[empId].hoursSold = this.state.employees[empId].hoursSold + hours
            } else {
                employees[empId] = booking.employee;
                employees[empId].hoursSold = hours;
            }
        });
        let sortedAndLimitedArray = _.take(
            _.sortBy(_.values(employees), 'hoursSold')
                .reverse(), 3);

        this.setState({employees: sortedAndLimitedArray});
    };


    fetchBookingStats = () => {
        this.setState({loading: true});
        axios.get(this.bookingStatsURL).then(stats => {
            this.setState({bookingStats: stats.data})
        }).catch(err => {
            console.error(err)
        }).then(() => {
            this.mapEmployeesFromBookings();
            this.setState({loading: false});

        })
    };


    render() {
        return (
            (this.state.employees)
                ? <div className="flex-column row" style={styles.container}>
                    <h5 style={{color: 'white'}}>Employee stats</h5>
                    <div className="col-lg-3 col-sm-5">
                        {this.state.employees && _.map(this.state.employees, e => {
                            return (
                                <HotelEmployeeElement employee={e}/>
                            )
                        })}
                    </div>


                </div>
                : <div>Loading</div>
        );
    }
}


const styles = {
    container: {
        marginTop: 20,
        paddingTop: 20,
        paddingBottom: 20,
    }
};
