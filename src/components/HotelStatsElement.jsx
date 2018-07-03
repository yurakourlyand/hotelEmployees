import React, {PureComponent} from "react";


export default class HotelStatsElement extends PureComponent {

    render() {
        return (
            <div className="col" style={styles.hotelStatsElementContainer}>
                <div style={styles.hotelStatsElementHeader}>{this.props.number}</div>
                <div style={styles.hotelStatsElementText}>{this.props.text}</div>
            </div>
        );
    };
}

const styles = {
    hotelStatsElementContainer: {
        borderWidth: 1,
        borderColor: 'white',
    },
    hotelStatsElementHeader: {
        color: 'white',
        fontSize: 24,
    },
    hotelStatsElementText: {
        margin: 0,
        padding: 0,
    },
}
