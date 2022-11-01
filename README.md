## How to Run

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000/events](http://localhost:3000/events) to view the events dashboard

You can search event descriptions with the search field, and filter by domain, sub-domain, and user using the dropdown buttons. You can filter viewing of resolved events using the toggle. 

You can also create a new Event or edit an existing one. When editing an existing Event, you can mark it as resolved. 

You can test the events API endpoint at: [http://localhost:3000/api/events](http://localhost:3000/api/events).


## Frontend

This application was built using React and Next.js. Next.js uses file-based routing, so the main entry point to the events dashboard is found at /pages/events/index.js. In this component, I used React Query to fetch and cache the data from the 

## Backend

This application also implements a basic REST API that allows for events to be listed, created, and updated. You can view the API files at /pages/api/index.js and /pages/api/eventId.js. I used SQLite for the DB, and Prisma as an ORM for working with the DB. You can view the DB schema at /prisma/schema.prisma

