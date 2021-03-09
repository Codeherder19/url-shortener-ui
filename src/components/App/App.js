import React, { Component } from 'react';
import './App.css';
import { getUrls } from '../../apiCalls';
import { addUrl } from '../../fetchPost';
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

  updateUrls = (url) => {
  addUrl(url)
    .then(response => {
      if (response.ok) {
        return response.json();
      }
    })
    .then(() => this.setState({ urls: [...this.state.urls, url] }));
}

  render() {
    return (
      <main className="App">
        <header>
          <h1>URL Shortener</h1>
          <UrlForm updateUrls={url => this.updateUrls(url)}/>
        </header>
        {this.state.urls.length &&
        <UrlContainer urls={this.state.urls}/>}
      </main>
    );
  }
}

export default App;
