import DataSource from "../data/data-source.js";
import "../../components/search-bar.js";

const main = () => {
  const searchElement = document.querySelector("search-bar");
  //   const buttonSearch = document.querySelector("#btn-search");

  const onButtonSearchClicked = async () => {
    try {
      const result = await DataSource.searchMovie(searchElement.value);
      renderResult(result);
    } catch (message) {
      fallbackResult(message);
    }
  };

  const renderResult = (results) => {
    // clubListElement.clubs = results;
    console.log(results);
  };

  const fallbackResult = (message) => {
    // clubListElement.renderError(message);
    console.log(message);
  };

  searchElement.clickEvent = onButtonSearchClicked;
};

export default main;
