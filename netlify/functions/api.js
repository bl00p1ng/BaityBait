const handler = async (event) => {
    try {
        return {
            statusCode: 200,
            body: JSON.stringify({
                api: process.env.API_KEY
            }),
        }
    } catch (error) {
        return {
            statusCode: 500, body: error.toString()
        }
    }
}

module.exports = { handler }
  