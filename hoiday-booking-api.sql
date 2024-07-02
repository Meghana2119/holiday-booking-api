CREATE DATABASE holiday_booking;

USE holiday_booking;

CREATE TABLE destinations (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    price DECIMAL(10, 2) NOT NULL
);

CREATE TABLE bookings (
    id INT AUTO_INCREMENT PRIMARY KEY,
    userId INT NOT NULL,
    destinationId INT NOT NULL,
    bookingDate DATE NOT NULL,
    status VARCHAR(50) NOT NULL,
    FOREIGN KEY (destinationId) REFERENCES destinations(id)
);
