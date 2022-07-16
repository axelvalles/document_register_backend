export interface CustomerDto {
    address: string
    email: string
    full_name: string
    phone: number
    post_code: number
}

export interface TitleDto extends CustomerDto {
    body_style: string
    color: string
    fuel_type: string
    isNew: string
    make: string
    model: string
    prev_title_img: string
    vin: string
    year: string
}

export interface InsuranceDto extends CustomerDto {
    body_style: string
    color: string
    prev_insurance_img: string
    type: string
    vin: string
}

export interface TemporaryPermitDto extends CustomerDto {
    color: string
    make: string
    model: string
    vin: string
    year: string
}
