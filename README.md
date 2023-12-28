# Express.js Server with MongoDB

This project is a simple Express.js server integrated with MongoDB, providing endpoints for user search, age-based sorting, and pagination. The server is deployed on Heroku.

Live URL: [https://nice-erin-sparrow-slip.cyclic.app/](https://nice-erin-sparrow-slip.cyclic.app/)

## Table of Contents
- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
- [API Endpoints](#api-endpoints)
- [Deployment](#deployment)
- [License](#license)

## Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/try/download/community)

## Getting Started

1. Clone the repository:

   ```bash
   git clone https://gitlab.com/your-username/your-repository.git
   cd your-repository
  
    npm install
    npm start

```bash
`API Endpoints`
GET /api/users?name=John
GET /api/users/sort?order=asc
GET /api/users/page?page=1&limit=10



