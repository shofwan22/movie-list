import { Container, React } from "libraries"
import { Header } from "components/organisms"

const BaseContainer = ({ children }) => {
    return (
      <div>
        <Header />
        <Container fluid className="mt-4">{children}</Container>
      </div>
    );
}

export default BaseContainer