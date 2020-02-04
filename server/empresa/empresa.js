const event = require('../Json/empresas.json').Empresas;

class Empresa{
  Fedex(){
    return(event[0])
  }
  CorreosDelEcuador(){
    return(event[1])
  }
  ServiEntrega(){
    return(event[2])
  }
}

module.exports =Empresa;