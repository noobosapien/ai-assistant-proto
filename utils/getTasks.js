import axios from "axios";

export default async function getTasks() {
  try {
    let config = {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,DELETE,PATCH,POST,PUT",
      },
    };
    const result = await axios.get("http://127.0.0.1:8000/api/tasks/", config);

    return result.data;
  } catch (e) {
    console.log(e);
  }
}
