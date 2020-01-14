const headers = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "Content-Type"
};

exports.handler = async (event, context) => {
  // Check HTTP Method
  if (!event.body || event.httpMethod !== "POST") {
    return {
      statusCode: 400,
      headers,
      body: JSON.stringify({ status: "invalid http method" })
    };
  }

  // Parse Data
  const data = JSON.parse(event.body);

  // Validate Data
  if (!data.paramOne || !data.paramTwo) {
    return {
      statusCode: 400,
      headers,
      body: JSON.stringify({ status: "missing information" })
    };
  }

  // Do Something
  try {
    // here

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ status: "success" })
    };
  } catch (error) {
    console.error(error);

    return {
      statusCode: 400,
      headers,
      body: JSON.stringify({ status: error })
    };
  }
};
