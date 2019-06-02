import React, { Component } from "react";
import ContactCard from "../contactCard/contactCard";
import "./contactTable.css";

class ContactInfo extends Component {
  // state = {  }

  componentWillUnmount() {
    console.log("Counter - Unmount");
  }

  render() {
    const { data } = this.props;
    console.log("Contact Card - Rendered");
    return (
      <ul className="contactCard">
        {data.map((d, index) => (
          <li key={index}>
            <ContactCard
              id={d.id}
              firstName={d.first_name}
              lastName={d.last_name}
              email={d.email}
              avatar={d.avatar}
              onDelete={this.props.onDelete}
            />
          </li>
        ))}
      </ul>
    );
  }
}

export default ContactInfo;
