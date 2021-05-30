import { React, Card, ListGroup } from "libraries"

const MovieDetail = (props) => {
    return (
      <Card border="dark">
        <Card.Header className="detailmovie-header">
          {props.movieDetail.Title} ({props.movieDetail.Year})
        </Card.Header>
        <Card.Body>
          <ListGroup>
            <ListGroup.Item>
              Rated : {props.movieDetail.Rated}
            </ListGroup.Item>
            <ListGroup.Item>
              Released : {props.movieDetail.Released}
            </ListGroup.Item>
            <ListGroup.Item>
              Runtime : {props.movieDetail.Runtime}
            </ListGroup.Item>
            <ListGroup.Item>
              Genre : {props.movieDetail.Genre}
            </ListGroup.Item>
            <ListGroup.Item>
              Writer : {props.movieDetail.Writer}
            </ListGroup.Item>
            <ListGroup.Item>
              Actors : {props.movieDetail.Actors}
            </ListGroup.Item>
            <ListGroup.Item>
              Plot : {props.movieDetail.Plot}
            </ListGroup.Item>
            <ListGroup.Item>
              Language : {props.movieDetail.Language}
            </ListGroup.Item>
            <ListGroup.Item>
              Country : {props.movieDetail.Country}
            </ListGroup.Item>
            <ListGroup.Item>
              Awards : {props.movieDetail.Awards}
            </ListGroup.Item>
            <ListGroup.Item>
              IMDB Rating : {props.movieDetail.imdbRating}
            </ListGroup.Item>
          </ListGroup>
        </Card.Body>
      </Card>
    );
}

export default MovieDetail