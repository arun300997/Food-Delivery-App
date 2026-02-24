import User from "./User";
import UserClass from "./UserClass"
import React from "react";
import userContext from "../utils/UserContext";

class About extends React.Component {

    constructor(props){
        super(props);
    }

    render() {
        return (
        <div>
           <userContext.Consumer> 
                {({loggedInUser}) => (
                    <h1>{loggedInUser}</h1>)}
            </userContext.Consumer>
            {/* <User name = {"Arun"}/> */}
            <UserClass name = {"Gayatri"}/>
        </div>
    )
    }
}

export default About;