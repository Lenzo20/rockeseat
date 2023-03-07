# API Currency Conversion

Conveter moedas em tempo real
Suporta apenas (BRL, USD, EUR, JPY)

Usando Banco de dados MONGODB de banco principal e Redis para cache

## Start projeto

 yarn // Baixar depedencias e tals
 yarn dev // subir server
 
 ### Rotas
 
 ver todos os usuarios
- Get: <http://localhost:8081/User>

cadrasto
- Post: <http://localhost:8081/User>
requisitos de cadrasto

{ originCurrency, originValue, destinationCurrency }
