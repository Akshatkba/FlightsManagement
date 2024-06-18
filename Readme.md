# Welcome to Flights Service management

## Project Setup
- clone the project to your local
- execute `npm install` on the same path as of your root directory of the downloaded project
- Create a `.env` file in the root directory and add the following environment variable
   - `PORT=3000`
- Inside the `src/config` create a file `config.json` and add the following piece of json to it:
```
{
  "development": {
    "username": "<your db username>",
    "password": "<your password>",
    "database": "Flights_search_DB_Dev",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
```

- Once you've added your db config file as listed above, go to the src folder from your terminal and execute `npx sequelize db:create`