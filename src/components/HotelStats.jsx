import React, {Component} from "react";
import axios from 'axios';
import HotelStatsElement from './HotelStatsElement';


export default class HotelStats extends Component {


    state = {
        hotelStats: {},
        loading: true,
    };

    hotelStatsURL = 'https://interview-booking-api.herokuapp.com/api/booking-snapshot';


    componentWillMount() {
        this.fetchHotelStats();
    }


    componentDidMount() {
        this.setState({loading: false})
    }


    fetchHotelStats = () => {
        this.setState({loading: true});
        axios.get(this.hotelStatsURL).then(stats => {
            this.setState({hotelState: stats.data})
        }).catch(err => {
            console.error(err)
        }).then(() => {
            this.setState({loading: false});
        })
    };


    render() {
        return (
            (this.state.hotelState)
                ? <div className="row" style={styles.container}>
                    <HotelStatsElement
                        number={this.state.hotelState.availableRooms}
                        text="Rooms Available"
                    />
                    <HotelStatsElement
                        number={this.state.hotelState.reservedRooms}
                        text="Reserved Rooms"
                    />
                    <HotelStatsElement
                        number={this.state.hotelState.checkedIn}
                        text="Checked In"
                    />
                </div>
                : <div>Loading</div>


        );
    }
}


const styles = {
    container: {
        marginTop: 20,
        borderColor: '#3b4448',
        borderWidth: 1,
        borderBottomStyle: 'solid',
        paddingTop: 20,
        paddingBottom: 20,
    }
};
