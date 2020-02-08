import React from 'react';

import { userService, authenticationService, sensorService } from '../_services';

class HomePage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            currentUser: authenticationService.currentUserValue,
            users: null,
            sensors: null
        };
    }

    componentDidMount() {
        sensorService.getSensorInfo().then(sensors => this.setState({sensors}));
    }

    createTable(){
        let table = [];
        let styles = {padding:'0 15px 0 15px'};
        let sens = this.state.sensors;
        // Outer loop to create parent
        table.push(<tr>{
            [<td style={styles}>username</td>,
            <td style={styles}>latitude</td>,
            <td style={styles}>longitude</td>,
            <td style={styles}>temperature</td>]
        }</tr>);
        for (let i = 1; i < sens.length; i++) {
            let children = [];
            //Inner loop to create children
            children.push(<td style={styles}>{sens[i]['username']}</td>);
            children.push(<td style={styles}>{sens[i]['latitude']}</td>);
            children.push(<td style={styles}>{sens[i]['longitude']}</td>);
            children.push(<td style={styles}>{sens[i]['temperature']}</td>);
            //Create the parent and add the children
            table.push(<tr>{children}</tr>)
        }
        return table
    }


    render() {
        const { currentUser, users, sensors } = this.state;
        return (
            <div>
                <h1>Hi {currentUser.name}!</h1>
                <p>You're logged in with React & JWT!!</p>
                <h3>Current data:</h3>
                {sensors &&
                    <table>
                        <tbody>
                            {this.createTable()}
                        </tbody>
                    </table>
                }
            </div>
        );
    }
}

export { HomePage };
