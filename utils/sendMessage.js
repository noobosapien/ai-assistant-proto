import axios from "axios";

export default async function sendMessage(query) {
  try {
    let config = {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,DELETE,PATCH,POST,PUT",
        "Content-Type": "application/json",
      },
    };

    const request = JSON.stringify({
      user_id: 1,
      content: query,
    });

    console.log(request);

    const result = await axios.post(
      "http://127.0.0.1:8000/api/chat/",
      request,
      config
    );

    return result.data;
  } catch (e) {
    console.log(e);
  }
}
