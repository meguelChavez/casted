import React, { Component } from 'react';
import SearchBar from './components/SearchBar'
import { Container, Row, Col } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import axios from 'axios'
import NavBar from './components/NavBar';

class App extends Component {

  state = {
    searchOptions: ['TitleName', 'Actors'],
    searchInput: '',
    searchBy: '',
    isLoading: false
  }

  // componentDidMount() {
  //   this.searchMovies()
  // }

  searchMovies = () => {
    const { searchBy, searchInput } = this.state
    const payload = {
      params: {
        searchBy,
        searchInput
      }
    }
    axios.get(`/api/titles`, payload).then((res) => {
      console.log(res)
      this.setState({ results: res.data })
    })
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  render() {
    const { searchOptions, isLoading, searchBy } = this.state
    return (
      <Container>
        <NavBar />
        <Row>
          <Col sm="12" md={{ size: 8, offset: 2 }}>
            <h1 id="searchLabel" className="align-middle">Search A Movie By Title</h1>
          </Col>
        </Row>
        <Row>
          <Col sm="12" md={{ size: 8, offset: 2 }}>
            <SearchBar
              loading={isLoading}
              searchOptions={searchOptions}
              searchBy={searchBy}
              handleInputChange={this.handleInputChange}
              handleSearch={this.searchMovies}
            />

          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;
