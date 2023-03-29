import axios from "axios";
import { json } from "stream/consumers";

class DataSource {
  static searchMovie = async (keyword) => {
    // return fetch(`https://sports-api.dicoding.dev/teams/search?t=${keyword}`)
    //   .then((response) => {
    //     return response.json();
    //   })
    //   .then((responseJson) => {
    //     if (responseJson.teams) {
    //       // console.log(responseJson.teams);
    //       return Promise.resolve(responseJson.teams);
    //     } else {
    //       return Promise.reject(`${keyword} is not found`);
    //     }
    //   });
    try {
      //   const datas = await axios.get(
      //     `https://sports-api.dicoding.dev/teams/search?t=${keyword}`
      //   );

      console.log(datas);
    } catch (e) {
      console.log(e);
    }
  };
}
export default DataSource;
