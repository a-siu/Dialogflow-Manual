const functionName = (dialogflowResponse) => {
  const userInput = dialogflowResponse.queryResult.queryText;
  // Your logic here based on userInput
};

// Initialize the Dialogflow client
const dialogflow = require('dialogflow');

const sessionClient = new dialogflow.SessionsClient();

// Replace 'YOUR_PROJECT_ID' and 'YOUR_SESSION_ID' with actual values
const projectId = 'YOUR_PROJECT_ID';
const sessionId = 'YOUR_SESSION_ID';
const sessionPath = sessionClient.sessionPath(projectId, sessionId);

// The text query request
const textQueryParams = {
  session: sessionPath,
  queryInput: {
    text: {
      text: 'Say something to me', // user's input
      languageCode: 'en-US',
    },
  },
};

// Send the text query and handle response
sessionClient.sendTextQuery(textQueryParams)
  .then((responses) => {
    if (responses && responses[0] && responses[0].queryResult) {
      functionName(responses[0].queryResult);
    }
  })
  .catch((err) => {
    console.error('Error :' + err);
  });