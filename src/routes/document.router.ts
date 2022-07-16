import { Router } from 'express'
import DocumentController from '../controllers/document.controller'

export default class DocumentRouter {
  private router = Router()
  private documentController = new DocumentController()

  constructor () {
    this.initRoutes()
  }

  private initRoutes () {
    this.router.post('/create-document', (req, res) => this.documentController.sendEmail(req, res))
    this.router.get('/', (req, res) => {
      res.send('hola')
    })
  }

  public getRouter () {
    return this.router
  }
}
