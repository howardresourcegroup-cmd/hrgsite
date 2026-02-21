# Tech Support Lead Funnel Site Setup Instructions

## Prerequisites
- Node.js (v14 or higher)
- NPM (v6 or higher)
- PostgreSQL

## Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/howardresourcegroup-cmd/hrgsite.git
   ```

2. Navigate into the directory:
   ```bash
   cd hrgsite
   ```

3. Install the required dependencies:
   ```bash
   npm install
   ```

4. Set up the database:
   - Create a new PostgreSQL database.
   - Update the database configuration in the `.env` file.

5. Run database migrations:
   ```bash
   npm run migrate
   ```

## Running the Application
To start the application, use:
```bash
npm start
```

The application will run on `http://localhost:3000`.

## Testing
To run tests, execute:
```bash
npm test
```

## Additional Information
Refer to the project documentation for more details on configuration and usage.