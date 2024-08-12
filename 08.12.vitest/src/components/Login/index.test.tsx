// LoginComponent.test.tsx
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom"; // Provides extra matchers
import LoginComponent from ".";

describe("LoginComponent", () => {
  test("renders the login form", () => {
    render(<LoginComponent />);

    // Check if the inputs and button are rendered
    expect(screen.getByLabelText(/Username/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Password/i)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /Login/i })).toBeInTheDocument();
  });

  test("shows error message when submitting empty form", () => {
    render(<LoginComponent />);

    // Click the submit button
    fireEvent.click(screen.getByRole("button", { name: /Login/i }));

    // Check for error messages
    expect(screen.getByText(/Username is required/i)).toBeInTheDocument();
    expect(screen.getByText(/Password is required/i)).toBeInTheDocument();
  });

  test("shows error message when username is empty", () => {
    render(<LoginComponent />);

    // Fill the password input
    fireEvent.change(screen.getByLabelText(/Password/i), {
      target: { value: "password123" },
    });

    // Click the submit button
    fireEvent.click(screen.getByRole("button", { name: /Login/i }));

    // Check for error messages
    expect(screen.getByText(/Username is required/i)).toBeInTheDocument();
    expect(screen.queryByText(/Password is required/i)).not.toBeInTheDocument();
  });

  test("shows error message when password is empty", () => {
    render(<LoginComponent />);

    // Fill the username input
    fireEvent.change(screen.getByLabelText(/Username/i), {
      target: { value: "user123" },
    });

    // Click the submit button
    fireEvent.click(screen.getByRole("button", { name: /Login/i }));

    // Check for error messages
    expect(screen.queryByText(/Username is required/i)).not.toBeInTheDocument();
    expect(screen.getByText(/Password is required/i)).toBeInTheDocument();
  });

  test("does not show error message when inputs are filled", () => {
    render(<LoginComponent />);

    // Fill both inputs
    fireEvent.change(screen.getByLabelText(/Username/i), {
      target: { value: "user123" },
    });
    fireEvent.change(screen.getByLabelText(/Password/i), {
      target: { value: "password123" },
    });

    // Click the submit button
    fireEvent.click(screen.getByRole("button", { name: /Login/i }));

    // Check that error messages are not present
    expect(screen.queryByText(/Username is required/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/Password is required/i)).not.toBeInTheDocument();
  });

  test("updates input values correctly", () => {
    render(<LoginComponent />);

    const usernameInput = screen.getByLabelText(/Username/i);
    const passwordInput = screen.getByLabelText(/Password/i);

    // Change the username and password inputs
    fireEvent.change(usernameInput, { target: { value: "newUser" } });
    fireEvent.change(passwordInput, { target: { value: "newPassword" } });

    fireEvent.click(screen.getByRole("button", { name: /Login/i }));

    // Verify that the input values have been updated
    expect(usernameInput).toHaveValue("newUser");
    expect(passwordInput).toHaveValue("newPassword");
  });
});
