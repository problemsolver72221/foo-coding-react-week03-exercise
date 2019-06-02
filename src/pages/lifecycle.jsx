import React, { Component } from "react";
import axios from "axios";
import { handleJson } from "../utils/handleJson";
import ContactTable from "../components/contactTable/contactTable";

class LifeCycle extends Component {
  state = {
    //initialize response and error props
    response: [],
    error: ""
  };

  constructor() {
    super();
    console.log("App - Constructor");
  }

  async componentDidMount() {
    await this.fetchData();
    console.log("App - Mounted");
  }

  // Fetch data from endpoint:

  async fetchData() {
    // simple error handling - try to change api url inside get method to see.
    try {
      const apiCall = await axios.get("https://reqres.in/api/users");
      const response = handleJson(apiCall);
      this.setState({ response });
    } catch (error) {
      console.error(error);
      this.setState({ error: error.message });
    }
  }

  handleDelete = cardId => {
    console.log(cardId, "delete");
    const contacts = this.state.response.filter(c => c.id !== cardId);
    this.setState({ response: contacts });
  };

  render() {
    const { response, error } = this.state;
    console.log("App - Rendered");
    return (
      <div>
        <h3 style={{ marginLeft: "10px" }}>Life cycle</h3>
        <div>
          <ContactTable data={response} onDelete={this.handleDelete} />
          {error ? (
            <p
              style={{
                backgroundColor: "red",
                fontSize: "18px",
                fontWeight: 700,
                color: "white"
              }}
            >
              {error}
            </p>
          ) : null}
        </div>
      </div>
    );
  }
}

export default LifeCycle;
