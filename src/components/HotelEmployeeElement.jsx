import React, {PureComponent} from "react";

export default class HotelEmployeeElement extends PureComponent {

    render() {
      let e = this.props.employee;
        return (
            <div style={styles.elementBox}>
                <div>
                    <img style={styles.avatarImage}
                         src={e.profileImageUrl}
                         alt="imgNotFound"
                    />
                </div>
                <div style={styles.nameText}>
                    {e.firstName + " " + e.lastName[0].toUpperCase()}.
                </div>
                <div style={styles.hoursText}>
                    {e.hoursSold} hours
                </div>
            </div>
        );
    };
}

const styles = {
    avatarImage: {
        borderRadius: '50%',
        width: 35,
        height: 35,
    },
    elementBox: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        margin: 20,
    },
    nameText: {
        color: 'white',
        fontSize: 16,
    },
    hoursText: {
        fontSize: 13,
    },

};
