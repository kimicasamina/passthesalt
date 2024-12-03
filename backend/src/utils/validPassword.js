import bcrypt from 'bcrypt'

export const validPassword = async (password, hashPassword) => {
    const isValid = bcrypt.compareSync(password, hashPassword)

    return isValid
}
