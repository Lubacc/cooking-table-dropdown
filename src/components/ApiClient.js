import React, { Component } from 'react';

class ApiClient extends Component {
  constructor(baseUrl) {
    this.baseUrl = baseUrl;
  }

  async listAll() {
    // return all data from json
  }

  async search(str) {
    // return filtered data matching the search string
  }

  render() {
    return <div></div>;
  }
}

export default ApiClient;
