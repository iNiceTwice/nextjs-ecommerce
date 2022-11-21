
# Populum Ecommerse Clone
 
I just cloned by my self the original page with a few fixes like performance and UI.

   


![main page](https://i.imgur.com/DtMZjrP.png)


## Features

- Full responsive UI
- Fully interactive shopping cart
- Cart persist in time
- Login in and Sign up system
- Token-Cookie based authorization
- Checkout with Mercado Pago SDK
- Customizable subscription bundle
- Manage subscriptions in /profile (only with account)
- One click sharing to facebook, email or messenger


## Demo

https://ecommerce-clone-mp.vercel.app

## API Reference

#### Get all products

```http
  GET /api/products/all
```

 | Description                |
 | :------------------------- |
 | **Return**: All products. |

 ![all products](https://i.imgur.com/kCPa4lv.png)

#### Get product

```http
  GET /api/products/${query}
```
| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `category`| `string` | **Required**. id of item to fetch as: "tincture"|

![product](https://i.imgur.com/lKCerZp.png)

#### Get user

```http
  GET /api/user/find
```
| API KEY     | Description                       |
| :------- | :-------------------------------- |
| token (cookies) |**Return**: all user data|

#### Create user

```http
  POST /api/user/create
```
| Body | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| name, email, password| `object` | **Required**. All body is required.|

![register page](https://i.imgur.com/Ah88LVY.png)

#### Check if user is logged

```http
  GET /api/auth
```
| API KEY     | Description                       |
| :------- | :-------------------------------- |
| token (cookies) |**Return**: auth: boolean, payload: user data |

#### Login user

```http
  POST /api/auth
```
| Body | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| email, password| `object` | **Required**. All body is required.|

#### Add subscription

```http
  PUT /api/subscriptions/add
```
| API KEY | Item format | Type     | Description                       |
| :------ | :-------- | :------- | :-------------------------------- |
| Token (cookies) | bundle_id, item: product, quatity | `Array` | **Required**. All body is required.|

![subscriptions](https://i.imgur.com/2DkaQyU.png)

#### Remove subscription bundle

```http
  DELETE /api/subscriptions/${delete_id}
```
| API KEY | Params | Type     | Description                       |
| :------ | :-------- | :------- | :-------------------------------- |
| Token (cookies) | bundle_id | `Array` | **Required**. bundle_id to delete.|

#### Payment - Once

```http
  POST /api/payments/one-purchase
```
| Body | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| products: Array, payerData: shipping data | `object` | **Required**. All body is required.|


```http
  POST /api/payments/subscription
```
| Body | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| totalCost: Number, payerData: shipping data | `object` | **Required**. All body is required.|

![checkout](https://i.imgur.com/TMxNN5G.png)
## Appendix

Checkout only will work with Mercado Pago test accounts, see more at [Test accounts](shorturl.at/abgIV)

You'll pay with test cards, see more at [Test cards](shorturl.at/brtX7)

For real purchases you will need a real MP account with their api token