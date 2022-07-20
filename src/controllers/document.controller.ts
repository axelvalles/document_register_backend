import dayjs from 'dayjs'
import fs from 'fs'
import { Request, Response } from 'express'
import { InsuranceDto, TemporaryPermitDto, TitleDto } from '../config/interfaces/document.interface'
import MailerService from '../services/mailer.service'
import TemplateService from '../services/template.service'

export default class DocumentController {
  private mailerService = new MailerService()
  private templeteService = new TemplateService()

  public async titleRequest (req: Request<{}, {}, TitleDto>, res: Response): Promise<Response> {
    try {
      const { email, fullName, phone, prevTitleImg } = req.body

      const customerEmailInfo = await this.mailerService.sendEmail({
        from: `"SafeEngine Team" <${this.mailerService.getEmailAcount}>`, // sender address
        to: email, // list of receivers
        subject: 'Petición de título', // Subject line
        html: this.templeteService.generateTemplate(
          {
            template: 'customer-email',
            context: { fullName, phone, type: 'título' }
          })
      })

      const adminEmailInfo = await this.mailerService.sendEmail({
        from: `"SafeEngine Team" <${this.mailerService.getEmailAcount}>`, // sender address
        to: process.env.ADMIN_EMAIL, // list of receivers
        subject: 'Nueva Petición de título', // Subject line
        attachments: [
          {
            content: fs.createReadStream(prevTitleImg.filepath),
            filename: prevTitleImg.newFilename

          }
        ],
        html: this.templeteService.generateTemplate(
          {
            template: 'admin-email-title',
            context: { ...req.body, date: dayjs(new Date()).format('DD/MM/YYYY-hh:mm') }
          })
      })

      return res.status(200).json({
        ok: true,
        customerEmailInfo,
        adminEmailInfo
      })
    } catch (error) {
      console.log(error)

      return res.status(500).json({
        ok: false,
        error
      })
    }
  }

  public async insuranceRequest (req: Request<{}, {}, InsuranceDto>, res: Response): Promise<Response> {
    try {
      const { email, fullName, phone, prevInsuranceImg } = req.body

      const customerEmailInfo = await this.mailerService.sendEmail({
        from: `"SafeEngine Team" <${this.mailerService.getEmailAcount}>`, // sender address
        to: email, // list of receivers
        subject: 'Petición de seguro', // Subject line
        html: this.templeteService.generateTemplate(
          {
            template: 'customer-email',
            context: { fullName, phone, type: 'seguro' }
          })
      })

      const adminEmailInfo = await this.mailerService.sendEmail({
        from: `"SafeEngine Team" <${this.mailerService.getEmailAcount}>`, // sender address
        to: process.env.ADMIN_EMAIL, // list of receivers
        subject: 'Nueva Petición de seguro', // Subject line
        attachments: [
          {
            content: fs.createReadStream(prevInsuranceImg.filepath),
            filename: prevInsuranceImg.newFilename

          }
        ],
        html: this.templeteService.generateTemplate(
          {
            template: 'admin-email-insurance',
            context: { ...req.body, date: dayjs(new Date()).format('DD/MM/YYYY-hh:mm') }
          })
      })

      return res.status(200).json({
        ok: true,
        customerEmailInfo,
        adminEmailInfo
      })
    } catch (error) {
      console.log(error)

      return res.status(500).json({
        ok: false,
        error
      })
    }
  }

  public async temporaryPermitRequest (req: Request<{}, {}, TemporaryPermitDto>, res: Response): Promise<Response> {
    try {
      const { email, fullName, phone } = req.body

      const customerEmailInfo = await this.mailerService.sendEmail({
        from: `"SafeEngine Team" <${this.mailerService.getEmailAcount}>`, // sender address
        to: email, // list of receivers
        subject: 'Petición de permiso temporal', // Subject line
        html: this.templeteService.generateTemplate(
          {
            template: 'customer-email',
            context: { fullName, phone, type: 'permiso temporal' }
          })
      })

      const adminEmailInfo = await this.mailerService.sendEmail({
        from: `"SafeEngine Team" <${this.mailerService.getEmailAcount}>`, // sender address
        to: process.env.ADMIN_EMAIL, // list of receivers
        subject: 'Nueva Petición de permiso temporal', // Subject line

        html: this.templeteService.generateTemplate(
          {
            template: 'admin-email-temporary-permit',
            context: { ...req.body, date: dayjs(new Date()).format('DD/MM/YYYY-hh:mm') }
          })
      })

      return res.status(200).json({
        ok: true,
        customerEmailInfo,
        adminEmailInfo
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
