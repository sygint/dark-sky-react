import fetch from "node-fetch";

export async function handler(event) {
  // Only allow POST
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  const errorGen = msg => ({ statusCode: 500, body: msg });
  
  try {
    const { latitude, longitude } = JSON.parse(event.body);

    if (!latitude) {
      return errorGen("Missing latitude");
    }

    if (!longitude) {
      return errorGen("Missing longitude");
    }
    
    const response = await fetch(`https://api.darksky.net/forecast/${process.env.API_KEY}/${latitude},${longitude}`);
    const weatherDetails = await response.json();

    return {
      statusCode: 200,
      body: JSON.stringify(weatherDetails)
    };
  } catch (err) {
    console.log(err); // output to netlify function log
    return {
      statusCode: 500,
      body: JSON.stringify({ msg: err.message }) // Could be a custom message or object i.e. JSON.stringify(err)
    };
  }
}
