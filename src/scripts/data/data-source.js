import axios from "axios";
// import { async } from "regenerator-runtime";
// import { json } from "stream/consumers";

const baseUrl = `https://doa-doa-api-ahmadramadhan.fly.dev/api`;

const getDoa = async () => {
  try {
    const { data } = await axios.get(`${baseUrl}`);
    console.log(data);
  } catch (e) {
    console.log(e);
  }
};

export default getDoa;
