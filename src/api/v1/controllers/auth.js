import { User } from '../../../db/models'
import bcrypt from 'bcrypt'
import { validPassword } from '../../../utils/validPassword'
import { checkPassword } from '../../../utils/validPassword'
import { generateToken } from '../../../utils/generateToken'

export const registerUser = async (req, res, next) => {
    const { username, email, password } = req.body
    let existingUser

    // check if user already exists
    try {
        existingUser = await User.findOne({ where: { email } })
    } catch (error) {
        return res.status(401).json({ error: 'Registration failed' })
    }

    if (existingUser) {
        return res.status(401).json({
            error: 'User already exist! Login Instead',
        })
    }

    // create new user
    // const hashPassword = await bcrypt.hash(password, 10)
    const newUser = await User.create({
        username,
        email,
        password,
    })

    return res.status(201).json({ msg: 'Successfully created a new user' })
}

export const loginUser = async (req, res, next) => {
    const { email, password } = req.body

    try {
        const user = await User.findOne({
            where: { email: email },
            includes: ['logins', 'notes'],
        })

        if (!user) {
            console.log('CHECK IF USER EXIST')
            return res.status(404).json({ error: 'Cannot find existing user' })
        }
        // const validPassword = await validPassword(password, user.password)

        if (!user.validPassword(password)) {
            console.log('CHECK IF USERS PASSWORD IS VALID')
            return res.status(404).json({ error: 'Password does not match' })
        }

        console.log('valid')

        const token = generateToken(user.uuid)
        res.cookie('access_token', token, {
            httpOnly: true,
            expiresIn: '30m',
        })
        res.status(201).json({
            msg: 'User successfully logged in.',
            user: {
                uuid: user.uuid,
                username: user.username,
                email: user.email,
            },
        })
    } catch (error) {
        res.status(401).json({ error: 'fail to login' })
    }
}

export const logoutUser = async (req, res, next) => {
    let token = req.cookies.access_token
    console.log('DELETE TOKEN', token)
    try {
        res.clearCookie('access_token')
        res.json({ msg: 'You are logged out.' })
    } catch (err) {
        console.log(err)
    }
}

export const getUserDetails = async (req, res, next) => {
    let user_token = req.user
    console.log('REQ USER_ID', user_token)

    try {
        const user = await User.scope('withoutPassword').findOne({
            where: { id: user_token.id },
            include: ['logins', 'notes'],
        })
        return res.status(200).json({ user })
    } catch (err) {
        console.log(err)

        return res.status(401).json({ msg: 'User not found' })
    }
}
