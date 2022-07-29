import { File as FormidableFile } from 'formidable'
export interface CustomerDto {
    address: string
    email: string
    fullName: string
    phone: number
    postCode: number
}

export interface TitleDto extends CustomerDto {
    bodyStyle: string
    color: string
    fuelType: string
    isNew: string
    make: string
    model: string
    prevTitleImg: FormidableFile
    vin: string
    year: string
}

export interface InsuranceDto extends CustomerDto {
    bodyStyle: string
    color: string
    prevInsuranceImg: FormidableFile
    type: string
    vin: string
}

export interface TemporaryPermitDto extends CustomerDto {
    color: string
    model: string
    vin: string
    year: string
}
