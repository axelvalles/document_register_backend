import { Router } from 'express'
import DocumentController from '../controllers/document.controller'

class DocumentRouter {
  private router = Router()
  private documentController = new DocumentController()

  constructor () {
    this.initRoutes()
  }

  private initRoutes () {
    this.router.post('/create-document', this.documentController.sendEmail)
  }

  public getRouter () {
    return this.router
  }
}

export default DocumentRouter
