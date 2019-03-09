## Домашнее задание

1.  Auth

    **Логин**

    - `POST https://localhost:8080/auth/login`

    ```
    {
    "password": "1234567890",
    "email": "trump@mail.com"
    }
    ```

    **Логаут**

    - В контроллере пока что ничего делать не нужно

    **Получение текущего пользователя**

    - `GET https://localhost:8080/autn/current`


    ```

    	 {"token": "token"	}


    	 ```

    **Регистрация текущего пользователя**

    - `POST https://localhost:8080/register`

    ```
     {
    	"firstName": "Elon",
    	"lastName": "Musk",
    	"phone": "333333333333333",
    	"nickName": "Tesla",
    	"location": "USA",
    	"password": "password",
    	"email":"tesla@mail.com"
     }
    	 ```

2.  Ingredients

    **Добавление ингридиента для товара**

    - `POST https://localhost:8080/ingredients`

    ```
     {
      "name": "tomato",
      "description": "Some vegitable"
     }
    ```

3.  Comments

    **Создание коментария**

    - `POST https://localhost:8080/comments`

    ```
     {
      "product": "5c70da4df6020c1b84859707",
      "author": "5c7d8e6b084fa923607d56d1",
      "text": "This pizza was the best",
      "mark": 5,
     }
    ```

    **Получение коментария**

    - `GET https://localhost:8080/comments/?productId="5c70da4df6020c1b84859707"&token=<token>`
