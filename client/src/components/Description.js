import React from 'react'
import { Label, Row, Container } from 'reactstrap'

const Description = (props) => {
    const { Genres } = props.selectedTitle
    const genres = Genres.join(', ')
    return (
        <Container>
            <Row>
                <Label>Story Line</Label>
                <div> {props.selectedTitle.Storylines ? props.selectedTitle.Storylines.map(el => (
                    <p>{el.Description}</p>
                )) : ""}
                </div>
            </Row>
            <Row>
                <Label>Genres</Label>
            </Row>
            <Row>
                <p>{genres}</p>
            </Row>

        </Container>
    )
}

export default Description