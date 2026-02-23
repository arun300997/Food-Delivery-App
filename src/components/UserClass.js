import React from "react";
import {GIT_USERS_URL} from "../utils/constants";

class UserClass extends React.Component {
    constructor (props) {
        super(props);

        this.state = {
            userInfo: {
                name: "Dummy Name",
                location: "Dummy Location"
            }
        }
    }

    async componentDidMount() {
        const data = await fetch(GIT_USERS_URL);
        const json = await data.json();
        console.log(json);
        this.setState({
            userInfo: json,
        })
        
    }

    render() {
         const {name, location} = this.state.userInfo;
         return (
        <div className="user-card">
            <h1>Name: {name}</h1>
            <h2>Location: {location}</h2>
            <h3>Contact: 1234567890</h3>

        </div>
    )
    }}

    export default UserClass;