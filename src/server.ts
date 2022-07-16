import express from 'express'
import helmet from 'helmet'
import cors from 'cors'
import DocumentRouter from './routes/document.router'
// import { sequelize } from './database/conecction'

class Server {
  private app: express.Application = express()
  private port: string = process.env.PORT || '8000'
  private documentRouter = new DocumentRouter()

  constructor () {
    this.settings()
    this.middlewares()
    this.routes()
  }

  //   private async dbConnection () {
  //     try {
  //       await sequelize.sync({ force: true })
  //       console.error(('All models were synchronized successfully!!! '))
  //     } catch (error) {
  //       console.error(('Unable to connect to the database: '), error)
  //     }
  //   }

  private routes () {
    this.app.use('/api', this.documentRouter.getRouter())
  }

  private settings () {

  }

  private middlewares () {
    this.app.use(express.json())
    this.app.use(helmet())
    this.app.use(cors())
  }

  public async listen () {
    this.app.listen(this.port)
    console.error((`server is runing on port ${this.port}`))
    console.log(`http://127.0.0.1:${this.port}/`)
  }
}

export { Server }
