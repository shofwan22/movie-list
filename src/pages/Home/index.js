import { React, Component, Row, Col, connect, $ } from "libraries";
import { getAllMovie } from "modules"
import BaseContainer from "containers/BaseContainer"
import { CardMovie, SearchMovie } from "components/molecules";

class Home extends Component {
    constructor(props) {
      super(props)
      this.state = {
        params: {
          s: "",
          page: 1,
        }
      }

      this.handleSearch = this.handleSearch.bind(this)
      this.handleScroll = this.handleScroll.bind(this)
    }

    handleSearch(data) {
      this.setState({
        params: {
          s: data,
          page: this.state.params.page,
        },
      }, () => {
        this.props.getAllMovie(this.state.params, 'search');
      });
    }

    handleScroll() {
      $(window).scroll(
        function () {
          if (
            $(window).scrollTop() ===
            $(document).height() - $(window).height()
          ) {
            if (this.props.movieList.length > 5) {
              this.setState({
                params: {
                  s: this.state.params.s,
                  page: this.state.params.page + 1,
                },
              });
              this.props.getAllMovie(this.state.params, "scroll");
            }
          }
        }.bind(this)
      );
    }

    componentDidMount() {
      this.handleScroll()
    }

    render() {
        return (
          <BaseContainer>
            <div className="mb-4">
              <SearchMovie parentCallback={(data) => this.handleSearch(data)}/>
            </div>
            <Row>
              {
                this.props.movieList &&
                this.props.movieList.map((item, i) => {
                  return (
                    <Col key={i} lg="3" className="mb-4">
                      <CardMovie data={item} />
                    </Col>
                  );
                })
              }
            </Row>
          </BaseContainer>
        );
    }
}

const mapStateToProps = state => {
  return {
    movieList: state.movie.items
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getAllMovie: (params, type) => dispatch(getAllMovie(params, type))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)