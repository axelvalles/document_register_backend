import dayjs from 'dayjs'
import { InsuranceDto, TemporaryPermitDto, TitleDto } from '../config/interfaces/document.interface'

export default class TemplateService {
  public templateTitle (data:TitleDto) {
    const date = dayjs(new Date()).format('DD/MM/YYYY-hh:mm')
    return `
<div>
<h3>Petición proceso título</h3>
<h4>fecha:  ${date}</h4>
<strong>Datos cliente</strong>
<ul>
    <li>Dirección:  ${data.address}</li>
    <li>email:  ${data.email}</li>
    <li>Nombre:  ${data.fullName}</li>
    <li>telefono:  ${data.phone}</li>
    <li>zip:  ${data.postCode}</li>
</ul>
<strong>Datos proceso</strong>
<ul>
    <li>bodyStyle:  ${data.bodyStyle}</li>
    <li>color:  ${data.color}</li>
    <li>fuelType:  ${data.fuelType}</li>
    <li>isNew:  ${data.isNew}</li>
    <li>model:  ${data.model}</li>
    <li>vin:  ${data.vin}</li>
    <li>year:  ${data.year}</li>
</ul>
</div>`
  }

  public templateInsurance (data: InsuranceDto) {
    const date = dayjs(new Date()).format('DD/MM/YYYY-hh:mm')
    return `
<div>
<h3>Petición proceso título</h3>
<h4>fecha:  ${date}</h4>
<strong>Datos cliente</strong>
<ul>
<li>Dirección:  ${data.address}</li>
<li>email:  ${data.email}</li>
<li>Nombre:  ${data.fullName}</li>
<li>telefono:  ${data.phone}</li>
<li>zip:  ${data.postCode}</li>
</ul>
<strong>Datos proceso</strong>
<ul>
    <li>bodyStyle:  ${data.bodyStyle}</li>
    <li>color:  ${data.color}</li>
    <li>vin:  ${data.vin}</li>
</ul>
</div>
`
  }

  public templateCustomer (data: { type: string, fullName: string, phone: number }) {
    return `
<div>
<h3><strong>Proceso de  ${data.type}</strong></h3>
<p>
    Hola! <i><strong> ${data.fullName}</strong></i> es de nuestro agrado el
    poder informarte que tus datos han sido procesados correctamente, en unos
    momentos te contactaremos a 
    <i> ${data.phone}</i> para poder continuar con el procedimiento de tu documento
</p>
<hr />
<p>Para mas Informacion o contacto puedes escribirnos via Whatsapp : ${process.env.ADMIN_PHONE}</p>
<p>O enviar un correo electronico a: ${process.env.ADMIN_EMAIL}</p>
<strong> Nos alegrara el poder ayudarte !! </strong>
</div>`
  }

  public templateTemporaryPermit (data: TemporaryPermitDto) {
    const date = dayjs(new Date()).format('DD/MM/YYYY-hh:mm')
    return `
<div>
<h3>Petición proceso título</h3>
<h4>fecha: ${date}</h4>
<strong>Datos cliente</strong>
<ul>
<li>Dirección:  ${data.address}</li>
<li>email:  ${data.email}</li>
<li>Nombre:  ${data.fullName}</li>
<li>telefono:  ${data.phone}</li>
<li>zip:  ${data.postCode}</li>
</ul>
<strong>Datos proceso</strong>
<ul>
    <li>color:  ${data.color}</li>
    <li>model:  ${data.model}</li>
    <li>vin:  ${data.vin}</li>
    <li>year:  ${data.year}</li>
</ul>
</div>`
  }
}
