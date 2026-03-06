import { fireEvent, render, screen } from "@testing-library/react";
import Header from "../Header";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";

it("Should load the header component with a login button", () => {
    render (
    <BrowserRouter>
    <Provider store={appStore}>
    <Header/>
    </Provider>
    </BrowserRouter>
);

const loginButton = screen.getByRole("button", {name: "Login"});

expect(loginButton).toBeInTheDocument();
    
})

it("Should check for logout button", () => {
    render (
    <BrowserRouter>
    <Provider store={appStore}>
    <Header/>
    </Provider>
    </BrowserRouter>
);

const loginButton = screen.getByRole("button", {name: "Login"});

fireEvent.click(loginButton);

const logoutButton = screen.getByRole("button", {name: "Logout"});

expect(logoutButton).toBeInTheDocument();

// expect(loginButton).toBeInTheDocument();
    
})