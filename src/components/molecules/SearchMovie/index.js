import { InputGroup, FormControl, React, useState } from "libraries"

const SearchMovie = ({parentCallback}) => {
    const [search, setSearch] = useState()

    const handleChange = (e) => {
      e.preventDefault()
      setSearch(e.target.value)
      parentCallback(e.target.value);
    }
    return (
      <InputGroup onChange={handleChange}>
        <InputGroup.Text>Search</InputGroup.Text>
        <FormControl
          placeholder="Search Movie..."
          aria-label="Search Movie..."
          aria-describedby="basic-addon1"
          value={search}
        />
      </InputGroup>
    );
}

export default SearchMovie