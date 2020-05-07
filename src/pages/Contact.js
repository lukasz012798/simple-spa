import React, { Component } from "react";
import { Prompt } from "react-router-dom";
import "./../styles/Contact.css";

class Contact extends Component {
  state = {
    value: "",
    isSent: false,
  };

  handleChange = (e) => {
    this.setState({
      value: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.value.length < 10)
      alert("Wiadomość musi mieć co najmniej 10 znaków");
    else {
      this.setState({
        value: "",
        isSent: true,
      });
      setTimeout(() => {
        this.setState({
          isSent: false,
        });
      }, 3000);
    }
  };

  render() {
    return (
      <div className="contact">
        <form onSubmit={this.handleSubmit}>
          <h3>Napisz do nas!</h3>
          <textarea
            onChange={this.handleChange}
            value={this.state.value}
            placeholder={"Wpisz wiadomość"}
          ></textarea>
          <button>Wyślij</button>
          {this.state.isSent && <p>Wiadomość została wysłana. Dziękujemy!</p>}
        </form>
        <Prompt
          when={this.state.value !== ""}
          message="Masz uzupełniony formularz. Czy napewno chcesz opuścić tę stronę?"
        />
      </div>
    );
  }
}

export default Contact;
