# The Wild Oasis Project

Project Requirements

    - The users of the app are hotel employees; they must be logged into the app to perform tasks.
    - New users can only be signed up within the application to ensure that only actual hotel employees can create accounts.
    - Users should be able to upload an avatar, and change their name and password.
    - The app needs a table view displaying all cabins, showing the cabin's photo, name, capacity, price, and current discount.
    - Users should be able to update or delete a cabin and create new cabins.
    - The app needs a table view displaying all bookings, including arrival and departure dates, status, paid amount, and details on cabins and guests.
    - The booking status can be "unconfirmed," "checked in," or "checked out." The table should be filterable by this status.
    - Other booking data includes: number of guests, number of nights, guest observations, whether they booked breakfast, and the breakfast price.
    - Users should be able to delete, check in, or check out a booking as the guests arrive (no editing necessary for now).
    - Bookings may not have been paid yet upon guest arrival; upon check-in, users need to accept payments outside the app and then confirm that payment has been received in the app.
    - Upon checking in, guests should have the option to add breakfast for the entire stay, if they hadn’t already.
    - Guest data should include full name, email, national ID, nationality, and country flag for easy identification.
    - The initial app screen should be a dashboard, to display important information for 7, 30, and 90 days:
       - A list of guests checking in and out on the current day, with the ability for users to perform these tasks from the dashboard.
       - Statistics on recent booking sales, check-ins, and occupancy rate.
       - A chart showing all daily hotel sales, including total and extras sales.
       - A chart showing statistics on stay durations, an important metric for the hotel.
    - Users should be able to define a few application-wide settings such as breakfast price, minimum and maximum nights per booking, and maximum guests per booking.
    - The app needs a dark mode.

Features and Pages

    - Bookings
    - Cabins
    - Guests
    - Dashboard
    - Check-in and out
    - App settings
    - Authentication

Necessary Pages

    - Dashboard: /dashboard
    - Bookings: /bookings
    - Cabins: /cabins
    - Booking Check-in
    - User Sign Up: /users
    - Login: /login
    - Account Settings: /account

Technical Decisions

Client-Side Rendering (CSR) with Plain React

    - Single-Page Applications (SPAs)
    - All HTML is rendered on the client.
    - JavaScript must be downloaded before apps start running, which can affect performance.
    - One perfect use case: apps used internally as tools within companies, entirely hidden behind a login.

Server-Side Rendering (SSR) with Framework (Next.js or Remix)

    - Used to build Multi-page Applications (MPAs).
    - Some HTML can be rendered on the server.
    - More performance-efficient as less JavaScript needs to be downloaded.
    - The React team is increasingly moving in this direction.

Technology Decisions

    - Routing: React Router
    - Styling: Styled Components, a popular method of writing component-scoped CSS directly within JavaScript.
    - State Management: React Query for remote state management, featuring caching, automatic re-fetching, prefetching, and offline support. Alternatives include SWR and RTK Query, with React Query being the most popular.
    - UI State Management: Minimal usage; will use the Context API.
    - Form Management: React Hook Form, which simplifies handling of large forms including manual state creation and error management.
    - Other Technologies: React Icons, React Hot Toast, Recharts, date-fns, Supabase.