# food-delivery-server-goit

#products:
GET:

- https://localhost:8080/products/5c705139a107d12848ee4037
- https://localhost:8080/products/?category="soup,main"
- https://localhost:8080/products/?ids="5c70da16f6020c1b84859706,5c70da4df6020c1b84859707,5c705139a107d12848ee4037"

POST:

- https://localhost:8080/products raw:
  {
  "sku": 1120002,
  "name": "Пицца Маргарита",
  "description": "Пожалуй, самая популярная в мире, даже меню любой пиццерии начинается, как правило, именно с неё. Состав этой пиццы необычайно прост, её основные ингредиенты: сыр моцарелла, спелые помидоры и листья свежего базилика, которые придают ей неповторимый вкус и аромат.",
  "price": "80",
  "currency": "UAN",
  "creatorId": "5c7049226c32f60844f274eb",
  "categories": ["pizza"],
  "likes": 12
  }

PUT:

- https://localhost:8080/products/5c70da6df6020c1b84859708 raw: {"price": "200"}

#users:
GET:

- https://localhost:8080/users/5c6ffd096df7301f04f1e1de

POST:

- https://localhost:8080/users raw:
  {
  "firstName": "Elon",
  "lastName": "Musk",
  "phone": "vcgdfcxxfzsd",
  "nickName": "Tesla",
  "location": "USA",
  "password": "0987654321",
  "email": "tesla@mail.com"
  }

#orders:
GET:

- https://localhost:8080/orders/5c7047dfd7f59e0eb0b42e7b

POST:

- https://localhost:8080/orders raw:
  {
  "creator": "5c70355143d2602aa0c29e54",
  "productsList": [
  {
  "product": "1234567",
  "type": "XL",
  "itemsCount": 2
  }
  ],
  "deliveryType": "delivery",
  "deliveryAdress": "Kharkov",
  "sumToPay": 500,
  "status": "inProgress"
  }
