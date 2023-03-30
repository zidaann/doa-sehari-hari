import axios from "axios";
// import { json } from "stream/consumers";

const baseUrl = `https://doa-doa-api-ahmadramadhan.fly.dev/api`;
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
      const { data } = await axios.get(`${baseUrl}/doa/${keyword}`);
      console.log(data);
    } catch (e) {
      console.log(e);
    }
  };
}
export default DataSource;
