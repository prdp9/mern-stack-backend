import jwt from 'jsonwebtoken'

// authGuard middleware

export const authGuard = (req, res, next) => {
    // check for authorization access token from headers

    let token = req.headers['authorization']

    if (!token) {
        res.status(401).json({
            message: 'Access token required'
        })
    }

    token = token.split(" ")[1]

    console.log(token)

    try {
        const isValid = jwt.verify(token, process.env.JWT_ACCESS_TOKEN_SECRET)
        //if access token date expires then check for refresh token
        console.log('is Valid', isValid)
        req.user = isValid
        next()

    } catch (error) {
        res.status(403).json({
            message: 'Access Denied'
        })
    }
}