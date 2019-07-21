import React from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, Label
} from 'reactstrap';

const MovieCard = (props) => {
    console.log(props.results)
    const { TitleName, ReleaseYear, Genres } = props.results
    const storyLine = props.results.Storylines[0].Description
    return (
        <div>
            <Card>
                {props.image ?
                    <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
                    : null}
                <CardBody>
                    <CardTitle>{TitleName}</CardTitle>
                    <CardSubtitle>Released in {ReleaseYear}</CardSubtitle>
                    <CardText>{storyLine ? storyLine : ''}</CardText>
                    <Label>Genres</Label>
                    <ul>
                        {Genres.map(el => (<li>{el}</li>))}
                    </ul>
                    <Button onClick={props.toggleModal}>See More</Button>
                </CardBody>
            </Card>
        </div>
    );
};

export default MovieCard;