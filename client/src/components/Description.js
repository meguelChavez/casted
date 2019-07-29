import React from 'react'
import { Label, Row, Container } from 'reactstrap'

const Description = (props) => {
    const Genres = props.selectedTitle.Genres || props.selectedTitle.Genre
    let genres = ''
    if (props.results.length > 0) {

        genres = Genres.join(', ')
    }

    return (
        <Container>
            <Row>
                <Label>Story Line</Label>
                <div> {props.selectedTitle.Storylines ? props.selectedTitle.Storylines.map((el, i) => (
                    <p key={i}>{el.Description}</p>
                )) : (<p>props.selectedTitle.Plot</p>)}
                </div>
            </Row>
            <Row>
                <Label>Genres</Label>
            </Row>
            <Row>
                <p>{genres || Genres}</p>
            </Row>

        </Container>
    )
}

export default Description