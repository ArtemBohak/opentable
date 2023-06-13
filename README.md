OpenTable
==============

OpenTable is a sample project that demonstrates the implementation of a restaurant reservation system using React.js, Node.js, and Prisma ORM. It provides a user-friendly interface for users to browse restaurants, make reservations, and manage their bookings.

Please note that this is a demo project and is not currently hosted online. You can clone the repository and run it locally to explore the functionality.

Features
--------

-   Browse a list of restaurants with detailed information such as name, location, cuisine type, and average rating.
-   Search for restaurants based on various criteria like location and cuisine.
-   View individual restaurant details including the menu, opening hours, and customer reviews.
-   Make reservations for a specific date, time, and party size.
-   Manage reservations by viewing, modifying, or canceling bookings.

Used technologies
--------

-   HTML/CSS/SCSS/CSS modules
-   JS/TypeScript
-   React
-   Next.js
-   Prisma ORM (postgresql)

Demo
----

As mentioned earlier, the OpenTable Demo project is not currently hosted online. However, you can follow the instructions below to run it locally on your machine.
Here is the small [video]() presenting the functionality

Getting Started
---------------

To run the OpenTable Demo locally, follow these steps:

1.  Clone the repository:

    ```bash

    git clone https://github.com/ArtemBohak/opentable.git
    ```

2.  Navigate into the project directory:

    ```bash

    cd opentable
    ```

3.  Install the dependencies for the client:

    ```bash

    cd client
    npm install
    ```

4.  Set up the database using Prisma:
    -   Create a `.env` file in the `server` directory and provide your database connection URL. You can use the `.env.example` file as a template.
        DATABASE_URL should be a [connecting url](https://www.prisma.io/docs/concepts/database-connectors/postgresql) to your postgresql database. JWT_SECRET should be a random string.
        
        ```.env.example
        DATABASE_URL="(postgresql://USER:PASSWORD@HOST:PORT/DATABASE)?schema=public"
        NODE_ENV="development"
        JWT_SECRET=(randomString)
        ```
    
    -   Run the database migration to create the necessary tables:

        ```bash

        npx prisma migrate dev
        ```

    -   Seed the database with sample data:

        ```bash

        npx prisma db seed
        ```

5.  Start the client and server concurrently:

    ```bash

    npm run dev
    ```

6.  Open your web browser and visit `http://localhost:3000` to see the OpenTable in action. Wait a little bit until the project is ready.


Contact
-------

If you have any questions or want to reach out, you can contact the project maintainer:

Artem Bohak\
Email: <abogak3@gmail.com>
