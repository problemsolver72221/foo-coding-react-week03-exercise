import React, { Component } from "react";

class ContactCard extends Component {
  // state = {  }

  componentDidUpdate(prevProps, prevState) {
    console.log("prevProps", prevProps);
    console.log("prevState", prevState);
    console.log("component updated");
  }

  componentWillUnmount() {
    console.log("Contact - Unmount");
  }

  render() {
    const { id, firstName, lastName, email, avatar } = this.props;
    return (
      <div>
        <p>
          <span>
            <b>Id:</b>
          </span>{" "}
          {id}
        </p>
        <p>
          <span>
            <b>First Name:</b>
          </span>{" "}
          {firstName}
        </p>
        <p>
          <span>
            <b>Last Name:</b>
          </span>{" "}
          {lastName}
        </p>
        <p>
          <span>
            <b>E-mail:</b>
          </span>{" "}
          {email}
        </p>
        <img src={avatar} alt="avatar" />
        <button onClick={() => this.props.onDelete(id)}>Delete</button>
      </div>
    );
  }
}

export default ContactCard;
