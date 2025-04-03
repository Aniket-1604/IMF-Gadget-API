# IMF Gadget API 

A secure API to manage IMF gadgets, featuring inventory tracking, self-destruct mechanisms, and decommissioning.

##  Features
-  **Add Gadgets** (`POST /api/gadgets`)
-  **Get All Gadgets** (`GET /api/gadgets`)
-  **Update Gadget Status** (`PATCH /api/gadgets/:id`)
-  **Decommission Gadget** (`DELETE /api/gadgets/:id`)
-  **Self-Destruct Gadget** (`PATCH /api/gadgets/:id/self-destruct`)

##  Tech Stack
- **Node.js** + **Express.js**
- **PostgreSQL** with **Prisma ORM**
- **Render** for Deployment
- **Postman** for API Testing

## Hosted On
- https://imf-gadget-api-xvqn.onrender.com

## Postman Documentation
- https://documenter.getpostman.com/view/43688967/2sB2cSh44k

##  Setup & Installation
1. Clone the repository:
   ```sh
   git clone https://github.com/Aniket-1604/IMF-Gadget-API.git
   cd IMF-Gadget-API
2. Install dependencies:
   ```sh
   npm install
3. Set up environment variables (.env):
   ```sh
   DATABASE_URL=<your_database_url>
   PORT=3000
4. Run the app:
   ```sh
   npm start


