import ejs from 'ejs'
import path from 'path'

export default class TemplateService {
  private templatesPath = path.join(__dirname, '../templates')

  public generateTemplate ({ template, context }: { template: string, context: object }): string {
    let response = ''

    ejs.renderFile(path.join(this.templatesPath, `${template}.ejs`), context, (error, data) => {
      if (error) {
        console.log(error)
      } else {
        response = data
      }
    })

    return response
  }
}
