# Holiday Booking API

## Setup and Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/Meghana2119/Holiday-booking-api.git
    cd holiday-booking-api
    ```

2. Install dependencies:
    ```bash
    npm install, ipm init 
    ```

3. Set up environment variables:
    Create a `.env` file in the `config` directory and add the following:
    ```plaintext
    DB_HOST=localhost
    DB_USER=root(yourUserName)
    DB_PASSWORD=password(yourPassword)
    DB_NAME=holiday_booking
    PORT=port number
    ```

4. Create the MySQL database and tables:
    Run the provided SQL script in your MySQL environment to create the database and tables.(hoilday.booking-api.sql)

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

## Testing 
Testing is essential for ensuring the quality and reliability of the API. You can use tools like Postman,automated testing frameworks to test the API endpoints or jest.

### Example Test
1. Start the server.
2. Use Postman to send a GET request to `http://localhost:3000/destinations` and verify the response.

## License
This project is licensed under the MN License.
# holiday-booking-api
# holiday-booking-api
