import { InputGroup, FormControl, React } from "libraries"

const SearchMovie = () => {
    return (
      <InputGroup>
        <InputGroup.Text>Search</InputGroup.Text>
        <FormControl
          placeholder="Search Movie..."
          aria-label="Search Movie..."
          aria-describedby="basic-addon1"
        />
      </InputGroup>
    );
}

export default SearchMovie