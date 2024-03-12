import { fireEvent, render, screen } from "@testing-library/react"
import Contact from "../Contact"
import "@testing-library/jest-dom";
import Header from "../Header";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";

it("should load Header with login button", () => {
    render(<BrowserRouter>
        <Provider store={appStore}>
            <Header />
        </Provider>
    </BrowserRouter>
    )
    const loginBtn = screen.getByRole("button", { name: "Login" });
    expect(loginBtn).toBeInTheDocument();
})
it("should load Header with cart item to be o", () => {
    render(<BrowserRouter>
        <Provider store={appStore}>
            <Header />
        </Provider>
    </BrowserRouter>
    )
    const cartItems = screen.getByText("Cart- 2");
    expect(cartItems).toBeInTheDocument();
})
it("should check toggle of login button", () => {
    render(<BrowserRouter>
        <Provider store={appStore}>
            <Header />
        </Provider>
    </BrowserRouter>
    )
    const loginBtn = screen.getByRole("button", { name: "Login" });
    fireEvent.click(loginBtn)
    const logoutBtn = screen.getByRole("button", { name: "Logout" });
    expect(logoutBtn).toBeInTheDocument();
})