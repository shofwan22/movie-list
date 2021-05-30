import { React, Card, Button, useState, withRouter } from "libraries"
import { ModalPoster } from "components/molecules"

const CardMovie = (props) => {
    const [modalPoster, setModalPoster] = useState(false)

    const goDetail = (path) => {
      const url = `/detail/${path}`
      props.history.push(url)
    }

    return (
      <Card className="cardmovie">
        <Card.Img
          variant="top"
          width="286"
          height="180"
          src={props.data.Poster}
          onClick={() => setModalPoster(true)}
        />
        <Card.Body className="cardmovie-body">
          <Card.Title className="cardmovie-title">{props.data.Title}</Card.Title>
          <Card.Text className="cardmovie-text">Release : {props.data.Year}</Card.Text>
          <Button variant="dark" block onClick={() => goDetail(props.data.Title)}>
            Detail
          </Button>
        </Card.Body>

        <ModalPoster
          show={modalPoster}
          onHide={() => setModalPoster(false)}
          image={props.data.Poster}
        />
      </Card>
    );
}

export default withRouter(CardMovie)