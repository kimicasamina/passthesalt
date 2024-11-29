import express from 'express'
const router = express.Router()

import { getAllLogins, createNewLogin, updateLogin, deleteLogin, getLoginByUuid } from '../controllers/login'

router.get('/', getAllLogins)
router.post('/', createNewLogin)
router.put('/:uuid', updateLogin)
router.put('/:uuid', getLoginByUuid)
router.delete('/:uuid', deleteLogin)

export default router