food-delivery-server-goit
#signup:
POST:

localhost:4000/signup raw: { "username": "Ivan", "telephone": "063 777 77 77", "password": "12345", "email": "ivan@gmail.com" }

#products: 
GET:

https://localhost:4000/products/gUvhOj8sv
https://localhost:4000/products/?category=soup,main
https://localhost:4000/products/?ids="19112831,19112832,19112835"

POST:

https://localhost:4000/products raw: { "sku": 1120004, "name": "Полента", "description": "Полента (итал. polenta) — итальянское блюдо (каша) из кукурузной муки, аналог мамалыги.", "price": "95", "currency": "UAN", "creatorId": 1, "created": "07-02-19", "modified": "07-02-19", "categories": "main" }

PUT:

https://localhost:4000/products/19112831 raw: {"price": "200"}


#users:
GET:

https://localhost:4000/users/0kQbKfylc
POST:

https://localhost:4000/users raw: { "username": "someName", "phone": "063 222 222 222", "password": "12345", "email": "yor@gmail.com" }


#orders:
POST:

https://localhost:4000/orders raw: { "user": "0kQbKfylc", "products": ["19112831", "19112835", "19112834"], "deliveryType": "delivery", "deliveryAdress": "avenue" }


#images: 
POST:

https://localhost:4000/images form-data: { file: userId: 0kQbKfylc }
