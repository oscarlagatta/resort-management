
![Wild Oasis Logo](/public/logo-dark.png)


## Requirements

### User Authentication and Management
- **Access Control:** Only hotel employees can use the app, requiring login credentials to access functionalities.
- **Account Creation:** Employee accounts are created internally to ensure authenticity.
- **Profile Customization:** Employees can upload avatars, change their names, and reset passwords.

### Cabin Management
- **Cabin Listings:** Display cabins in a table with photos, names, capacities, prices, and current discounts.
- **Cabin Operations:** Employees can add, update, or delete cabin information.

### Booking Management
- **Booking Overview:** Show all bookings in a table, including details like arrival and departure dates, booking status, payment status, and detailed guest and cabin information.
- **Status Filters:** Filter bookings by status ('unconfirmed', 'checked in', 'checked out').
- **Booking Adjustments:** No editing of bookings; only delete, check in, or check out functions are available as guests arrive.
- **Payment Handling:** Manage payments received outside the app and confirm them within the app.
- **Breakfast Option:** Guests can add breakfast for their entire stay upon check-in if not pre-booked.

### Guest Information
- **Guest Details:** Store and display information such as full name, email, national ID, nationality, and country flag.

### Dashboard and Reporting
- **Initial Screen:** The dashboard shows crucial information for the day, 30 days, and 90 days.
    - **Daily Activities:** List and manage daily guest check-ins and check-outs directly from the dashboard.
    - **Sales and Occupancy Statistics:** Include recent booking sales and occupancy rates.
    - **Revenue Charts:** Display charts of daily hotel sales (total and extras).
    - **Duration Statistics:** Analyze guest stay durations through graphical representations.

### Application Settings
- **Configurable Settings:** Allow modification of settings like breakfast price, minimum and maximum nights per booking, and maximum number of guests per booking.
- **Appearance:** Implement a dark mode for user interface preference.



## Features

### Authentication
- **Login/Logout:** Secure authentication system for hotel employees.
- **User Registration:** Restricted to internal sign-ups within the application.
- **Profile Management:** Users can upload avatars, and change their names and passwords.

### Cabins
- **Cabin Management:** Add, update, or delete cabin listings.
- **Display:** View all cabins in a table format with details such as photo, name, capacity, price, and current discounts.

### Bookings
- **Booking Operations:** Create, view, and delete bookings. Perform check-ins and check-outs.
- **Booking Details:** Manage details like guest numbers, nights, observations, and breakfast options.
- **Payment Tracking:** Track payments at check-in, confirm receipt of payments made outside the app.
- **Status Filtering:** Filter bookings by status (unconfirmed, checked in, checked out).

### Dashboard
- **Daily Overview:** Display guests checking in and out on the current day.
- **Sales and Occupancy Statistics:** Visualize booking sales, occupancy rates, and other important metrics.
- **Charts:** Graphical representations of hotel sales and stay durations.

### Settings
- **Application Settings:** Define application-wide settings such as breakfast price and booking rules.
- **Dark Mode:** Toggle between light and dark themes for the app.

## Pages

- **Dashboard:** `/dashboard`
- **Bookings:** `/bookings`
- **Cabins:** `/cabins`
- **Booking Check-in:** Manage check-in processes.
- **User Sign Up:** `/users`
- **Login:** `/login`
- **Account Settings:** `/account`

## Technology Stack

- **Framework:** React.
- **Routing:** React Router.
- **Styling:** Styled Components for scoped CSS within JavaScript components.
- **State Management:** React Query for remote data management; Context API for UI state.
- **Form Management:** React Hook Form for efficient form handling.
- **Additional Tools:** React Icons, React Hot Toast, Recharts, date-fns, and Supabase for backend integration.