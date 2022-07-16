import { Request, Response } from 'express'
import MailerService from '../services/mailer.service'

export default class DocumentController {
  private mailerService = new MailerService()

  public async sendEmail (_req: Request, res: Response): Promise<Response> {
    try {
      const info = await this.mailerService.sendEmail({
        from: `"Correo de prueba " <${this.mailerService.getEmailAcount}>`, // sender address
        to: 'agabrielv1799@gmail.com', // list of receivers
        subject: 'Prueba email', // Subject line
        text: 'Hello world?' // plain text bod
      })

      return res.status(200).json({
        ok: true,
        info
      })
    } catch (error) {
      console.log(error)

      return res.status(500).json({
        ok: false,
        error
      })
    }
  }
}
