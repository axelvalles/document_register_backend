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
      res.json({
        host: process.env.MAILER_HOST || 'host_not_configured',
        port: Number(process.env.MAILER_PORT) || 465,
        user: process.env.MAILER_USER || 'email_acount_not_configured',
        pass: process.env.MAILER_PASS || 'pass_not_configured'
      })
    })
  }

  public getRouter () {
    return this.router
  }
}
