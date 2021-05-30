import { React, Card, Button, useState } from "libraries"
import ModalPoster from "components/molecules/ModalPoster"

const CardMovie = () => {
    const [modalPoster, setModalPoster] = useState(false)

    return (
      <Card>
        <Card.Img
          variant="top"
          width="286"
          height="180"
          src="https://m.media-amazon.com/images/M/MV5BMTdjZTliODYtNWExMi00NjQ1LWIzN2MtN2Q5NTg5NTk3NzliL2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg"
          onClick={() => setModalPoster(true)}
        />
        <Card.Body>
          <Card.Title>Batman: The Killing Joke</Card.Title>
          <Card.Text>Release : 2016</Card.Text>
          <Button variant="dark" block>
            Detail
          </Button>
        </Card.Body>

        <ModalPoster
          show={modalPoster}
          onHide={() => setModalPoster(false)}
          image="https://m.media-amazon.com/images/M/MV5BMTdjZTliODYtNWExMi00NjQ1LWIzN2MtN2Q5NTg5NTk3NzliL2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg"
        />
      </Card>
    );
}

export default CardMovie