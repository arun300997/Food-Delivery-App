import User from "./User";
import UserClass from "./UserClass"
import React from "react";

class About extends React.Component {

    constructor(props){
        super(props);
    }

    render() {
        return (
        <div>
            <h2>About Us</h2>
            {/* <User name = {"Arun"}/> */}
            <UserClass name = {"Gayatri"}/>
        </div>
    )
    }
}

export default About;