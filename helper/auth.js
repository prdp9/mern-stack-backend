import jwt from 'jsonwebtoken'

export const generateAccessToken = (user) => {
  return  jwt.sign(
        {
        email: user.email,
        userId: user._id

        },
    process.env.JWT_ACCESS_TOKEN_SECRET, 
    {
        expiresIn: '30m'
    }
)
}

export const generateRefreshToken = (user) => {
   return jwt.sign({
        email: user.email,
        userId: user._id

    },
    process.env.JWT_REFRESH_TOKEN_SECRET, 
    {
        expiresIn: '1w'
    })
}