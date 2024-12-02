import express from 'express'
const router = express.Router()

import {
    getUserByUuid,
    getAllUsers,
    createUser,
    updateUser,
    deleteUser,
} from '../controllers/user'
import verifyToken from '../../../middleware/verifyToken'

router.get('/', getAllUsers)
router.get('/:uuid', getUserByUuid)
router.post('/', createUser)
router.put('/:uuid', verifyToken, updateUser)
router.delete('/:uuid', verifyToken, deleteUser)

export default router
