import { Request, Response, NextFunction } from 'express'
import formidable from 'formidable'

const formidableMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const form = formidable({ multiples: true, keepExtensions: true })

  if (!req.headers['content-type']?.includes('multipart/form-data')) {
    return res.status(400).json({
      ok: false,
      message: 'bad request'
    })
  }

  form.parse(req, (err, fields, files) => {
    if (err) {
      next(err)
    }

    req.body = { ...fields, ...files }

    next()
  })
}

export default formidableMiddleware
