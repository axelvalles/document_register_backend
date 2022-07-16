import nodemailer, { SentMessageInfo, Transporter } from 'nodemailer'
import Mail from 'nodemailer/lib/mailer'

export default class MailerService {
  public host: string = process.env.MAILER_HOST || 'host_not_configured'
  public port: number = Number(process.env.MAILER_PORT) || 465
  public user: string = process.env.MAILER_USER || 'email_acount_not_configured'
  private pass: string = process.env.MAILER_PASS || 'pass_not_configured'
  private transporter: Transporter<SentMessageInfo> = nodemailer.createTransport(
    {
      host: this.host,
      port: this.port,
      secure: true,
      auth: {
        user: this.user, // generated ethereal user
        pass: this.pass // generated ethereal password
      }
    }
  )

  public async sendEmail (mailOptions: Mail.Options) {
    return this.transporter.sendMail(mailOptions)
  }

  public get getTransporter () {
    return this.transporter
  }

  public get getEmailAcount () {
    return this.user
  }
}
