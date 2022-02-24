import { Router } from 'express'
import * as turtlesCtrl from '../controllers/turtles.js'
const router = Router()

/* GET users listing. */
router.get('/', turtlesCtrl.index)

export {
  router
}
