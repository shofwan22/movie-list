import { React, Component } from "libraries";

class Anagram extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataAnagram: ["kita", "atik", "tika", "aku", "kia", "makan", "kua"],
    };

    this.sortWord = this.sortWord.bind(this);
    this.handleAnagram = this.handleAnagram.bind(this);
    this.showAnagram = this.showAnagram.bind(this);
  }

  sortWord = (word) => {
    if (!word) {
      return;
    }

    word = word.split("").sort().join("");
    return word;
  };

  handleAnagram = (data) => {
    var result = {};

    data.forEach((dt) => {
      const sortedWord = this.sortWord(dt);
      if (result[sortedWord]) {
        return result[sortedWord].push(dt);
      }
      result[sortedWord] = [dt];
    });

    return result;
  };

  showAnagram = () => {
    const groupedAnagrams = this.handleAnagram(this.state.dataAnagram);
    var result = ""
    for (const sortedWord in groupedAnagrams) {
      console.log(groupedAnagrams[sortedWord].toString());
      if (result)
        result = result + " === " + groupedAnagrams[sortedWord].toString()
      else
        result = groupedAnagrams[sortedWord].toString()
    }

    console.log('result = ', result)
    return result
  };

  render() {
    return (
      <div>
        <h1>Anagram</h1>
        <p>Data Strings = {this.state.dataAnagram.toString()}</p>
        <h2>Output</h2>
        {this.showAnagram()}
      </div>
    );
  }
}

export default Anagram;
