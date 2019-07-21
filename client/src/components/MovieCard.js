import React from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';

const MovieCard = (props) => {
    console.log(props.results)
    const { TitleName, ReleaseYear } = props.results
    const storyLine = props.results.Storylines[0].Description
    return (
        <div>
            <Card>
                <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
                <CardBody>
                    <CardTitle>{TitleName}</CardTitle>
                    <CardSubtitle>`Released in ${ReleaseYear}`</CardSubtitle>
                    <CardText>{storyLine ? storyLine : ''}</CardText>
                    <Button>Button</Button>
                </CardBody>
            </Card>
        </div>
    );
};

export default MovieCard;