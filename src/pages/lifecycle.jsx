import React, { Component } from "react";
import axios from "axios";
import { handleJson } from "../utils/handleJson";
import ContactTable from "../components/contactTable/contactTable";

class LifeCycle extends Component {
  state = {
    //initialize response and error props
    response: [],
    expressContent: [],
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

  // Fetch data from remote endpoint:

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

  // With "getLocalExpressData()" function you can get data from your local express server.
  // Make sure to run the server first to get the results.
  // In order to connect to Express from React, you need to add proxy on your React package.json as it follows:
  // "proxy": "http://localhost:5000"
  // By doing this, you let React know that you will use this proxy on http requests.
  // After setting the proxy, you will only include the endpoints instead of full url.
  // For example, to get the data from "http://localhost:5000/api/todos",
  // you can make the call to the "/api/todos" as seen below.
  // Click the "Get Express Data on console.log()" button on the page to see your Express response on console.

  async getLocalExpressData() {
    try {
      const expressContent = await axios.get("/api/todos");
      console.log(expressContent);
    } catch (error) {
      console.error(error);
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
        <button onClick={this.getLocalExpressData}>
          Get Express Data on console.log()
        </button>
      </div>
    );
  }
}

export default LifeCycle;
