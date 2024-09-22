import axios from "axios";

export const getData = async (url) => {
  try {
    const res = await axios.get(url).then((res) => res.data);
    return res
  } catch (error) {
    console.log(error)
  }
};
