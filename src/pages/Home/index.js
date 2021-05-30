import { React, Component, Row, Col } from "libraries";
import BaseContainer from "containers/BaseContainer"
import CardMovie from "components/molecules/CardMovie";
import SearchMovie from "components/molecules/SearchMovie";

class Home extends Component {
    render() {
        return (
          <BaseContainer>
            <div className="mb-4">
              <SearchMovie />
            </div>
            <Row>
              <Col lg="3">
                <CardMovie />
              </Col>
              <Col lg="3">
                <CardMovie />
              </Col>
              <Col lg="3">
                <CardMovie />
              </Col>
              <Col lg="3">
                <CardMovie />
              </Col>
            </Row>
          </BaseContainer>
        );
    }
}

export default Home