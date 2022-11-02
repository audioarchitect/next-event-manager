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

This application was built using React and Next.js. Next.js uses file-based routing, so the main entry point to the events dashboard is found at /pages/events/index.js. In this component, I used React Query to fetch and cache the data from the server and handle mutations. 

All of the UI components for the summary, filters, and table sections can be found in the /components directory. 

For the UI, I used Tailwind CSS and the Daisy-UI component library. I probably would not select Daisy-UI for a production build, but I used it because it was a free library that utilized Tailwind. 

Some additional logic can be found in /services/event-services.js

## Backend

This application implements a basic REST API that allows for events to be listed, created, and updated. You can view the API files at /pages/api/index.js and /pages/api/eventId.js. I used SQLite for the DB, and Prisma as an ORM for working with the DB. You can view the DB schema at /prisma/schema.prisma

The DB also contains a User table, in which I inserted 4 users which have been assigned as owners. However, I did not expose any endpoints to access Users.  

## Comments
I had to make some sacrifices due to time constraints. For one, I only supported assigning a single user as an Event owner. I had tried to support multiple users, but was having issues and in order to not spent too much time, I switched to single User, which allowed me not to need an additional Event_User join table. I would have liked for the domains and subdomains to have structured in the DB, rather than just string fields, but I felt this was good enough for this exercise. I also would have liked to have fetched the list of Users to be used in the UI, but I just ended up hard coding this, along with the domain and subdomain names in /utils/ui-schema.js. In a production app, I would not hard code any of these things in the front-end. 
