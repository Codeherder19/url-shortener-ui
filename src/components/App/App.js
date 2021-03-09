import React, { Component } from 'react';
import './App.css';
import { getUrls } from '../../apiCalls';
import UrlContainer from '../UrlContainer/UrlContainer';
import UrlForm from '../UrlForm/UrlForm';

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      urls: []
    }
  }

  componentDidMount() {
    this.fetchUrls()
  }

  fetchUrls = () => {
    getUrls()
    .then(response => {
      if (response.ok) {
          return response.json()
        }
      })
      .then(data => this.setState({ urls: data.urls }));
  }

  render() {
    return (
      <main className="App">
        <header>
          <h1>URL Shortener</h1>
          <UrlForm />
        </header>
        {this.state.urls.length &&
        <UrlContainer urls={this.state.urls}/>}
      </main>
    );
  }
}

export default App;
