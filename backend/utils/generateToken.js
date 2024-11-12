
// creating and saving token in cookie
// user represents the user object for whom the token is being generated. 
// statusCode is the HTTP status code to be sent in the response, 
// res is the response object.
const sendToken = (user, statusCode, res) => {
      const token = user.getJWTToken();

      //Options for cookie
      const options = {
            expires: new Date(Date.now() + process.env.COOKIE_EXPIRE * 24 * 60 * 60 * 100),

            httpOnly: true,
      };

      res.status(statusCode).cookie("token", token, options).json({
            success: true,
            user,
            token
      });
};

module.exports = sendToken;