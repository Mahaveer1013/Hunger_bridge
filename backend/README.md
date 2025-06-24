# Backend - Bridging Hunger with Humanity

## Setup
1. Install dependencies:
   ```bash
   npm install
   ```
2. Create a `.env` file in the backend directory with the following variables:
   ```env
   PORT=5000
   MONGODB_URI=mongodb://localhost:27017/hunger_bridge
   JWT_SECRET=your_jwt_secret
   ```
3. Start the server:
   ```bash
   npm run dev
   ```

## API Overview
- **Auth**
  - `POST /api/auth/register` - Register a new user
  - `POST /api/auth/login` - Login and receive JWT
  - `GET /api/auth/profile` - Get current user profile (JWT required)
- **Donations**
  - `POST /api/donations` - Create a new donation (venue only)
  - `GET /api/donations` - List all donations
  - `PATCH /api/donations/:id/status` - Update donation status (volunteer/NGO)

## User Roles
- Venue
- NGO
- Volunteer

## Notes
- All endpoints return JSON.
- Use JWT in `Authorization: Bearer <token>` header for protected routes.
