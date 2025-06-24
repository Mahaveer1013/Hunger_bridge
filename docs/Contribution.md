# Contribution Guidelines

Thank you for considering contributing to Hunger Bridge! We welcome all forms of contributions from the community.

## Repository Structure
This is a monorepo containing both frontend and backend:
- **Frontend**: `/frontend` (Next.js application)
- **Backend**: `/backend` (Node.js API server)

## How to Contribute

> **Please use [GitHub Issues](https://github.com/Mahaveer1013/Hunger_bridge/issues) for discussions and brainstorming before making any changes or modifications. Start working only after your idea or proposal has been approved by the maintainers.**

### 1. Reporting Issues
- **Check existing issues** in the [issue tracker](https://github.com/Mahaveer1013/Hunger_bridge/issues) before creating a new one.
- **Specify the area** your issue relates to:
  - `[Frontend]` – UI, components, client-side functionality
  - `[Backend]` – API, database, server logic
- **Include the following in your report:**
  - Detailed description of the issue
  - Steps to reproduce
  - Screenshots (for frontend issues)
  - API responses/errors (for backend issues)

### 2. Code Contributions

#### Development Setup
```bash
# Clone the repository
git clone https://github.com/Mahaveer1013/Hunger_bridge.git
cd Hunger_bridge

# Install dependencies for both frontend and backend
cd frontend && npm install && cd ..
cd backend && npm install && cd ..

# Create your own .env file(s) from the provided .env.example and add your credentials
cp frontend/.env.example frontend/.env
cp backend/.env.example backend/.env
```

Make sure to give proper values in .env files

#### Running the Applications
Open **two terminal windows**:

**Frontend:**
```bash
cd frontend
npm run dev
```

**Backend:**
```bash
cd backend
npm run dev
```

#### Contribution Flow
1. **Fork** the repository
2. **Create a feature branch**
   ```bash
   git checkout -b feature/your-feature
   ```
3. **Make your changes** in the appropriate folder
4. **Write tests** if applicable
5. **Update documentation** as needed
6. **Push to your fork**
   ```bash
   git push origin feature/your-feature
   ```
7. **Open a Pull Request**
   - Clearly indicate the affected components

### 3. Coding Standards

#### Frontend (`/frontend`)
- Follow **Next.js** best practices
- Use **Tailwind CSS** for styling
- Write all components in **TypeScript**
- Use a **component-based architecture**
- Place new components in the `/components` folder (create nested-folders as per needs)

#### Backend (`/backend`)
- Follow **RESTful API** conventions
- Implement **proper error handling**
- Add **JSDoc comments** for complex functions
- Use **environment variables** for configuration
- Place new routes in the `/routes` folder

### 4. Testing
- **Frontend:**
  - Use **Jest** + **React Testing Library** (`/frontend/tests`)
- **Backend:**
  - Use **Jest** + **Supertest** (`/backend/tests`)
- **Include tests** for new features
- **Update tests** when modifying existing code

### 5. Commit Message Convention
- Prefix your commits with:
  - `feat:` for frontend changes
  - `api:` for backend changes
  - `docs:` for documentation updates
  - `fix:` for bug fixes

**Example:**
```
feat: add new donation form component
api: implement food donation endpoint
docs: update contribution guidelines
fix: correct typo in login page
```

## First-Time Contributors
- Look for issues labeled **good first issue** to get started!

## Need Help?
- Join our **Discussions** or reach out to maintainers [@Mahaveer1013](https://github.com/Mahaveer1013)
