import { Router } from 'express'
import DocumentController from '../controllers/document.controller'
import formidableMiddleware from '../middlewares/formidable.middlewares'
import { validatorInsurance, validatorTemporaryPermit, validatorTitle } from '../middlewares/validator.middleware'

export default class DocumentRouter {
  private router = Router()
  private documentController = new DocumentController()

  constructor () {
    this.initRoutes()
  }

  private initRoutes () {
    this.router.post('/title', formidableMiddleware, validatorTitle, (req, res) => this.documentController.titleRequest(req, res))
    this.router.post('/insurance', formidableMiddleware, validatorInsurance, (req, res) => this.documentController.insuranceRequest(req, res))
    this.router.post('/temporary-permit', formidableMiddleware, validatorTemporaryPermit, (req, res) => this.documentController.temporaryPermitRequest(req, res))
  }

  public getRouter () {
    return this.router
  }
}
