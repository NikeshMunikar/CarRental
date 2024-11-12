class ErrorHandler extends Error {
//      message parameter represents the error message
// statusCode represents the HTTP status code associated with the error.
      constructor(message, statusCode) {
            super(message);
            this.statusCode = statusCode

            Error.captureStackTrace(this, this.constructor)
      }
}

module.exports = ErrorHandler;