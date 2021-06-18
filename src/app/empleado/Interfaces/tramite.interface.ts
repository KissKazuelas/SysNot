export interface TramiteInterface {
  id: string,
  data: TramiteData,
}

interface TramiteData {
  abogadoUID: string,
  clientId: string,
  initDate:string,
  name: string,
  ultimoMovimiento: string,
  status: boolean
}
