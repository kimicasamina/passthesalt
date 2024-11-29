import bcrypt from 'bcrypt'

export const validPassword = async (password, hashPassword) => {
    const isPasswordMatch = bcrypt.compareSync(password, hashPassword)

    return isPasswordMatch
}
