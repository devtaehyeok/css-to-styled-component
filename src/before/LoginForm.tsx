import React from "react";
import "./LoginForm.css";

interface FormElements extends HTMLFormControlsCollection {
  email: HTMLInputElement;
  password: HTMLInputElement;
}
interface LoginFormElement extends HTMLFormElement {
  readonly elements: FormElements;
}

export default function LoginForm({
  handleSubmit
}: {
  handleSubmit: (event: React.FormEvent<LoginFormElement>) => void;
}) {
  return (
    <form id="login-form" onSubmit={handleSubmit}>
      <label>
        Email:
        <input
          className="input"
          id="email"
          type="email"
          placeholder="me@you.com"
        />
      </label>
      <label>
        Password:
        <input className="input" id="password" type="password" />
      </label>
      <button type="submit">Log In</button>
    </form>
  );
}
