import React, { Component } from 'react';
import SearchBar from './components/SearchBar'
import { Container, Row, Col } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { toast } from "react-toastify"
import axios from 'axios'
import NavBar from './components/NavBar';
import MovieCard from './components/MovieCard';
import DetailModal from './components/DetailModal';

class App extends Component {

  state = {
    searchOptions: ['TitleName', 'Actors'],
    detailModal: false,
    results: [],
    selectedTitle: {},
    searchInput: '',
    searchBy: '',
    isLoading: false
  }

  // componentDidMount() {
  //   this.searchMovies()
  // }

  searchMovies = async () => {
    const { searchInput } = this.state
    const searchBy = 'TitleName'
    const payload = {
      params: {
        searchBy,
        searchInput
      }
    }

    const res = await axios.get(`/api/titles`, payload)
    const results = res.data
    console.log(res)
    if (results.searchSuccess) {
      this.setState({ results: res.data.data })
    } else {
      console.log(results.message)
      this.setState({ message: results.message })
      return toast.error(results.message)
    }


    // axios.get(`/api/titles`, payload).then((res) => {
    //   console.log(res)
    //   this.setState({ results: res.data })
    // })
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  selectTitle = (selectedMovie) => {
    this.setState({ selectedTitle: selectedMovie }, this.toggleModal)
  }
  toggleModal = () => {
    const { detailModal } = this.state
    this.setState({ detailModal: !detailModal });
  }


  render() {
    const { searchOptions, isLoading, searchBy, results, detailModal, selectedTitle } = this.state
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
              disabled={true}
              searchOptions={searchOptions}
              searchBy={searchBy}
              handleInputChange={this.handleInputChange}
              handleSearch={this.searchMovies}
            />

          </Col>
        </Row>
        <Row>
          {(results.length > 0) ?
            results.map((element, i) => (
              <MovieCard key={i} results={element} toggleModal={() => { this.selectTitle(element) }} />))
            : (this.state.searched && !isLoading) ? <MovieCard /> : ""}
        </Row>
        <DetailModal modal={detailModal} selectedTitle={selectedTitle} size="xl" toggle={this.toggleModal} />
      </Container >
    );
  }
}

export default App;
