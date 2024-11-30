import crypto from 'crypto'

const algorithm = 'aes-256-cbc' //Using AES encryption
const key = crypto.randomBytes(32)
const iv = crypto.randomBytes(16)

export const encrypt = (password) => {
    console.log('Encryption...')
    let cipher = crypto.createCipheriv('aes-256-cbc', Buffer.from(key), iv)
    let encrypted = cipher.update(password)
    encrypted = Buffer.concat([encrypted, cipher.final()])
    return { iv: iv.toString('hex'), password: encrypted.toString('hex') }
}

export const decrypt = (encryptedData) => {
    console.log('Decryption...', encryptedData)
    let iv = Buffer.from(encryptedData.iv, 'hex')
    let encryptedPassword = Buffer.from(encryptedData.password, 'hex')
    let decipher = crypto.createDecipheriv('aes-256-cbc', Buffer.from(key), iv)
    let decrypted = decipher.update(encryptedPassword)
    decrypted = Buffer.concat([decrypted, decipher.final()])
    return decrypted.toString()
}
