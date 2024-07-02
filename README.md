# Holiday Booking API

## Setup and Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/Meghana2119/Holiday-booking-api.git
    cd holiday-booking-api
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Set up environment variables:
    Create a `.env` file in the `config` directory and add the following:
    ```plaintext
    DB_HOST=localhost
    DB_USER=root
    DB_PASSWORD=password
    DB_NAME=holiday_booking
    PORT=3000
    ```

4. Create the MySQL database and tables:
    Run the provided SQL script in your MySQL environment to create the database and tables.

5. Start the server:
    ```bash
    npm start
    ```

## Endpoints

### GET /destinations
Retrieve a list of available holiday destinations.

### POST /bookings
Create a new holiday booking.
- **Request Body:**
    ```json
    {
      "userId": 1,
      "destinationId": 2,
      "bookingDate": "2024-07-01",
      "status": "confirmed"
    }
    ```

### GET /bookings/:bookingId
Retrieve details of a specific booking.

### GET /bookings/user/:userId
Retrieve all bookings for a specific user.

## Error Handling
- Appropriate HTTP response codes and error messages are returned for various error scenarios.

## Testing (Optional)
Testing is essential for ensuring the quality and reliability of the API. You can use tools like Postman or automated testing frameworks to test the API endpoints.

### Example Test
1. Start the server.
2. Use Postman to send a GET request to `http://localhost:3000/destinations` and verify the response.

## License
This project is licensed under the MIT License - see the LICENSE file for details.
# holiday-booking-api
# holiday-booking-api
