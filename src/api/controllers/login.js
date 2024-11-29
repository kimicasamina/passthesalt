import { Login } from '../../db/models'

export const getAllLogins = async (req, res, next) => {

    try {
        const logins = await Login.findAll({
            include: ['user']
            
        })
        return res.json({ logins })
    } catch (error) {
        console.log(error)
        return res.status(500).json({ error: 'Something went wrong' })
    }
}

export const getLoginByUuid = async (req, res, next) => {
    const { loginUuid } = req.params.loginUuid
    try {
        const login = await Login.findOne({
            where: { uuid: loginUuid },
            include: ['user']
        })
        return res.json({ login })
    } catch (error) {
        console.log(error)
        return res.status(500).json({ error: 'Something went wrong' })
    }
}

export const createNewLogin = async (req, res, next) => {
    const { userUuid, name, email, password, website } = req.body
    try {
const login = await Login.create({ 
    name, email, password, website,
    user_id: user.id })
    console.log(user)
    console.log(login)
    return res.json(login)
    } catch (error) {
        console.log(error)
        return res.status(500).json({ error: error.message })
    }
}

export const updateLogin = async (req, res, next) => {
    const uuid = req.params.uuid
    try {
    const login = await Login.findOne({ where: { uuid }, include: ['user'] })
    login.name = req.body.name 
    login.email = req.body.email 
    login.password = req.body.password
    login.website = req.body.website

    await login.save()
    return res.json(login)
    } catch (error) {
        console.log(error)
        return res.status(500).json({ error: error.message })
    }
}

export const deleteLogin = async (req, res, next) => {
    const uuid = req.params.uuid
    try {
    const login = await Login.findOne({ where: { uuid }, include: ['user'] })
    const deletedLogin = await login.destroy()
    return res.json({login: deleteLogin})
    } catch (error) {
        console.log(error)
        return res.status(500).json({ error: error.message })
    }
}


