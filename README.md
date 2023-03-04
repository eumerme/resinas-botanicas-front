# resinas-botanicas-front

Resinas Botânicas Frontend is a test ecommerce application currently under development. To use the backend, please visit [this repository](https://github.com/eumerme/resinas-botanicas-back) and follow the instructions in the README.md file.

[About](#about) |
[Technologies](#technologies) |
[Installation Guide](#installation-guide) |
[How to Run](#how-to-run) |
[Functionalities](#functionalities) |
[Checkout](#checkout)

## About

This project is a simple application that meets the needs of Resinas Botânicas virtual store (@resinasbotanicas on Instagram).

## Technologies

React | axios | bootstrap | react-hook-form | react-query | react-toastify | styled-components | yup | eslint | prettier

## Installation Guide

- Clone this repository
- Run `npm i` to install all dependencies

## How to Run

- Create a `.env` file as in `.env.example` file
- Run `npm start` to start the local server

## Functionalities

- User registration and login: allows users to create an account and login to access the site.
- Homepage: features a carousel of images that lead to respective categories, along with the six most recently added products, to highlight the most popular items.
- Categories: lists all products within their respective categories for easy user navigation.
- Product details: displays detailed images of the product, description, name, price, and quantity in stock.
- Shopping cart: enables users to add or remove products, view saved products, and see the total purchase and product amount.
- Checkout: [TEST] offers integrated payment via Stripe. For more information, please see the [checkout](#checkout) section. (_under construction_)
- Profile: allows users to view and update their profile information, for a personalized experience on the site. (_under construction_)
- Purchase history: will provide a history of the users' previous purchases, so they can keep track of their transactions. (_under construction_)

### Checkout

Use any of these test cards to simulate a payment.

| Payment                 | Card number         |
| ----------------------- | ------------------- |
| Succeeds                | 4242 4242 4242 4242 |
| Requires authentication | 4000 0025 0000 3155 |
| Declined                | 4000 0000 0000 9995 |
