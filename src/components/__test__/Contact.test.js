import { render, screen } from "@testing-library/react"
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe("Contact component", () => {

    test("tests wether the component is rendering", () => {
        render(<Contact/>);
    
        const heading = screen.getByRole("heading");
    
        expect(heading).toBeInTheDocument();
    
    })
    
    it("tests wether the component is rendering", () => {
        render(<Contact/>);
    
        const inputBoxes = screen.getAllByRole("textbox");
    
        expect(inputBoxes.length).toBe(3);
    
    })


})
