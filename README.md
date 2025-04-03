# IMF Gadget API 🚀

A secure API to manage IMF gadgets, featuring inventory tracking, self-destruct mechanisms, and decommissioning.

## 🌟 Features
- 📌 **Add Gadgets** (`POST /api/gadgets`)
- 📌 **Get All Gadgets** (`GET /api/gadgets`)
- 📌 **Update Gadget Status** (`PATCH /api/gadgets/:id`)
- 📌 **Decommission Gadget** (`DELETE /api/gadgets/:id`)
- 📌 **Self-Destruct Gadget** (`POST /api/gadgets/:id/self-destruct`)

## 📦 Tech Stack
- **Node.js** + **Express.js**
- **PostgreSQL** with **Prisma ORM**
- **Render** for Deployment
- **Postman** for API Testing

## 🚀 Setup & Installation
1. Clone the repository:
   ```sh
   git clone https://github.com/Aniket-1604/IMF-Gadget-API.git
   cd IMF-Gadget-API
