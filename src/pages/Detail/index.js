import { React, Component, Row, Col, connect, Image } from "libraries"
import BaseContainer from "containers/BaseContainer";
import { getAllMovie } from "modules";
import { MovieDetail } from "components";

class Detail extends Component {
    constructor(props) {
        super(props)
        this.state = {
            params: {
                t: ''
            }
        }
    }

    componentDidMount() {
        this.setState({
            params: {
                t: this.props.match.params.title
            }
        }, () => {
            this.props.getAllMovie(this.state.params, 'detail')
        })
    }

    render() {
        return (
          <BaseContainer>
            <Row>
              <Col lg="4" className="mb-4">
                <Image
                  src={this.props.movieDetail.Poster}
                  rounded
                  width="100%"
                />
              </Col>
              <Col lg="8">
                <MovieDetail movieDetail={this.props.movieDetail} />
              </Col>
            </Row>
          </BaseContainer>
        );
    }
}

const mapStateToProps = (state) => {
  return {
    movieDetail: state.movie.detail,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getAllMovie: (params, type) => dispatch(getAllMovie(params, type)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Detail);