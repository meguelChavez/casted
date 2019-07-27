import React from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, Label, Media
} from 'reactstrap';

const MovieCard = (props) => {
    console.log(props.results)
    const { Poster, Title, Year, Genre, Plot } = props.omdb
    console.log('psoter', Poster)
    const { TitleName, ReleaseYear, Genres } = props.results
    const storyLine = props.results.Storylines
    return (
        // className='pt-5 col-md-6'
        <div className='pt-5' >
            {/* <Card>
                {Poster ?
                    <CardImg src={Poster} alt="Card image cap" />
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
            </Card> */}
            <Media>
                <Media right href="#">
                    <Media object data-src={Poster} src={Poster} alt="Generic placeholder image" />
                </Media>
                <Media body className='pl-3'>
                    <Media heading>
                        {TitleName || Title} Released in {ReleaseYear || Year}
                    </Media>
                    {storyLine ? storyLine.map((el, i) => (
                        <p key={i}>{el.Description}</p>
                    )) : Plot}
                    <div className="d-flex justify-content-end">
                        <Button onClick={props.toggleModal}>See More</Button>
                    </div>

                </Media>
            </Media>
        </div>
    );
};

export default MovieCard;