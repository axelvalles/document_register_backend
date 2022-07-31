import { NextFunction, Request, Response } from 'express'
import { z } from 'zod'

const MAX_FILE_SIZE = 500000
const ACCEPTED_IMAGE_TYPES = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp']

const titleSchema = z.object({
  address: z.string().trim().min(1),
  bodyStyle: z.string().trim().min(1),
  color: z.string().trim().min(1),
  email: z.string().trim().email(),
  fuelType: z.string().trim().min(1),
  fullName: z.string().trim().min(1),
  isNew: z.string().trim().min(1),
  model: z.string().trim().min(1),
  phone: z.string().trim().min(1),
  postCode: z.string().trim().min(1),
  prevTitleImg: z.any()
    .refine((file) => file?.size <= MAX_FILE_SIZE, 'Max file size is 5MB.')
    .refine(
      (file) => ACCEPTED_IMAGE_TYPES.includes(file?.mimetype),
      '.jpg, .jpeg, .png and .webp files are accepted.'
    ),
  vin: z.string().trim().min(1),
  year: z.string().trim().min(1)
})

const insuranceSchema = z.object({
  address: z.string().trim().min(1),
  bodyStyle: z.string().trim().min(1),
  color: z.string().trim().min(1),
  email: z.string().trim().min(1),
  fullName: z.string().trim().min(1),
  phone: z.string().trim().min(1),
  postCode: z.string().trim().min(1),
  prevInsuranceImg: z.any()
    .refine((file) => file?.size <= MAX_FILE_SIZE, 'Max file size is 5MB.')
    .refine(
      (file) => ACCEPTED_IMAGE_TYPES.includes(file?.mimetype),
      '.jpg, .jpeg, .png and .webp files are accepted.'
    ),
  vin: z.string().trim().min(1),
  model: z.string().trim().min(1)
})

const temporaryPermitSchema = z.object({
  address: z.string().trim().min(1),
  color: z.string().trim().min(1),
  email: z.string().trim().email(),
  fullName: z.string().trim().min(1),
  model: z.string().trim().min(1),
  phone: z.string().trim().min(1),
  postCode: z.string().trim().min(1),
  vin: z.string().trim().min(1),
  year: z.string().trim().min(1)
})

const validatorTitle = async (req: Request, res: Response, next: NextFunction) => {
  try {
    await titleSchema.parseAsync(req.body)
    return next()
  } catch (error: any) {
    if (error.name === 'ZodError') {
      return res.status(400).json({
        ok: false,
        message: 'bad request',
        error
      })
    }

    return res.status(500).json({
      ok: false
    })
  }
}

const validatorInsurance = async (req: Request, res: Response, next: NextFunction) => {
  try {
    await insuranceSchema.parseAsync(req.body)
    return next()
  } catch (error: any) {
    if (error.name === 'ZodError') {
      return res.status(400).json({
        ok: false,
        message: 'bad request',
        error
      })
    }

    return res.status(500).json({
      ok: false
    })
  }
}

const validatorTemporaryPermit = async (req: Request, res: Response, next: NextFunction) => {
  try {
    await temporaryPermitSchema.parseAsync(req.body)
    return next()
  } catch (error: any) {
    if (error.name === 'ZodError') {
      return res.status(400).json({
        ok: false,
        message: 'bad request',
        error
      })
    }

    return res.status(500).json({
      ok: false
    })
  }
}

export {
  validatorTitle,
  validatorInsurance,
  validatorTemporaryPermit
}
