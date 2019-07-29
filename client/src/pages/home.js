import React, { Component } from 'react';
import SearchBar from '../components/SearchBar'
import { Container, Row, Col } from 'reactstrap';
import axios from 'axios'
import MovieCard from '../components/MovieCard';
import DetailModal from '../components/DetailModal';

class Home extends Component {

    state = {
        selected: 'cast',
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

    searchMovies = async (e) => {
        e.preventDefault()
        this.setState({ isLoading: true })
        const { searchInput } = this.state
        const searchBy = 'TitleName'
        const payload = {
            params: {
                searchBy,
                searchInput
            }
        }
        try {
            const res = await axios.get(`/api/titles`, payload)
            const results = res.data
            console.log(res)
            if (results.searchSuccess) {
                this.setState({ results: res.data.data, omdb: results.omdbData, isLoading: false })
            } else {
                console.log(results.message)
                this.setState({ message: results.message, results: [], omdb: {}, isLoading: false }
                    , () => { setTimeout(() => this.setState({ message: null }), 3000) })
            }
        } catch (err) {
            console.log(err)

        }
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

    selectCategory = (event) => {
        // event.preventDefault();
        const { name } = event.target
        this.setState({ selected: name })
    }

    render() {
        const { searchOptions, selected, isLoading, searchBy, results, omdb, detailModal, selectedTitle } = this.state
        return (
            <Container>
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
                    <Col className="d-flex justify-content-center">
                        {(results.length > 0) ?
                            results.map((element, i) => (
                                <MovieCard key={i} results={element} omdb={omdb} toggleModal={() => { this.selectTitle(element) }} />))
                            : omdb ? <MovieCard omdb={omdb} toggleModal={() => { this.selectTitle(omdb) }} /> : null}
                        {/* {this.state.message ?
              <Jumbotron>{this.state.message}</Jumbotron> : null} */}
                    </Col>

                </Row>
                <DetailModal selected={selected} results={results} modal={detailModal} selectedTitle={selectedTitle} size="xl" toggle={this.toggleModal} selectCategory={this.selectCategory} />
            </Container >
        );
    }
}

export default Home;
