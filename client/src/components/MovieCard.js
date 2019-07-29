import React from 'react';
import { Button, Media } from 'reactstrap';

const MovieCard = (props) => {
    const { Poster, Title, Year, Plot } = props.omdb
    let TitleName = ''
    let ReleaseYear = ''
    let storyLine = ''
    if (props.results) {
        TitleName = props.results.TitleName
        ReleaseYear = props.results.ReleaseYear
        storyLine = props.results.Storylines
    }

    return (
        // className='pt-5 col-md-6'
        <div className='pt-5 pb-5' >
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
            <Media style={{ padding: '.5em', background: 'rgb(255, 255, 255,.8)' }}>
                <Media right href="#">
                    <Media object data-src={Poster} src={Poster} alt="Generic placeholder image" />
                </Media>
                <Media body className='pl-3'>
                    <Media heading>
                        {props.results ? TitleName : Title} Released in {ReleaseYear || Year}
                    </Media>
                    {storyLine ? storyLine.map((el, i) => (
                        <p key={i}>{el.Description}</p>
                    )) : (<p>{Plot}</p>)}
                    <div className="d-flex justify-content-end">
                        <Button onClick={props.toggleModal}>See More</Button>
                    </div>

                </Media>
            </Media>
        </div>
    );
};

export default MovieCard;