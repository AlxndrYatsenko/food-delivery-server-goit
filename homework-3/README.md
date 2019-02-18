# food-delivery-server-goit

#products:
GET:

- localhost:4000/products/gUvhOj8sv
- localhost:4000/products/?category=soup,main
- localhost:4000/products/?ids=19112831,19112832,19112835

POST:

- localhost:4000/products raw:
  {"sku": 1120004,
  "name": "Полента",
  "description": "Полента (итал. polenta) — итальянское блюдо (каша) из кукурузной муки, аналог мамалыги.",
  "price": "95",
  "currency": "UAN",
  "creatorId": 1,
  "created": "07-02-19",
  "modified": "07-02-19",
  "categories": "main"
  }

PUT:

- localhost:4000/products/19112831 raw: {"price": "200"}

#users:
GET:

- localhost:4000/users/0kQbKfylc
  POST:
- localhost:4000/users raw: {"username": "someName","phone": "063 222 222 222", "password": "12345", "email": "yor@gmail.com"}
