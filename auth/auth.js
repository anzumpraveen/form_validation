const jwt = require("jsonwebtoken")

const generatToken = (data) => {
    const token = jwt.sign(data, "Praveen@123")
    return token
}
const accessToken = (req, res, next) => {
    console.log(req.headers);
    const token = req.headers.cookie.split("=")[1]
    const decoded = jwt.verify(token, "Praveen@123")
    req.data = decoded
    next()  

}

module.exports = {generatToken, accessToken}