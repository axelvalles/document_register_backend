import { Request, Response } from 'express'
import { Mailer } from '../services/mailer.service'

export default class DocumentController {
  private mailer = new Mailer()

  public async sendEmail (_req: Request, res: Response): Promise<Response> {
    try {
      const info = await this.mailer.sendEmail({
        from: `"Correo de prueba " <${this.mailer.getEmailAcount()}>`, // sender address
        to: 'customer@example.com', // list of receivers
        subject: 'Prueba email', // Subject line
        text: 'Hello world?' // plain text bod
      })

      return res.status(200).json({
        ok: true,
        info
      })
    } catch (error) {
      return res.status(500).json({
        ok: false,
        error
      })
    }
  }
}
