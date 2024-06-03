import User from "../models/User.js"

export const getUser = async (req, res) => {
    console.log("req obj", req.user.userId)

    try {
        const user = await User.findById(req.user.userId).select("-password")

        if(!user) {
            return res.status(404).json({
                message: 'User not found!'
            })
        }

        return res.status(200).json(user)

    } catch (error) {
        console.log('Error fetching user', error)
        return res.status(500).json({
            message: 'Failed to fetch user'
        })
        
    }
}