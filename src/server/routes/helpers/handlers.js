module.exports = {
  ping: ping,
  success: success,
  error: error,
  conversation: {
    validation: conversationValidation
  }
};

function ping (req, res) {
  res.status(200).send({ message: 'OK' });
}

function success (res, status) {
  var status = status || 200;
  return function (response) {
    res.status(status).send({ data: response });
  };
}

function error (res, status) {
  var status = status || 500;
  return function (response) {
    if ( response.errors ) {
      for ( var error in response.errors ) {
        delete response.errors[error].properties;
      }

      response = response.errors;
    } else {
      response = response || "Something went wrong with your request. " +
                 "Sorry, but we don't have more information than that.";
    }
    res.status(status).send({ errors: response });
  };
}

function conversationValidation (response) {
  var sender = response[0], recipient = response[1], msg = response[2];
  var err = 'The recipient or sender id is incorrect or missing.';

  return ( !sender || !recipient ) ? Promise.reject(err) : Promise.resolve(msg);
}
