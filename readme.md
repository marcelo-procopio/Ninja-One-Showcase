# Device Management Test Suite

## Overview

This test suite is designed for testing a device management web application using TestCafe. It includes various test cases to validate API interactions, UI elements, and overall application functionality. The suite covers operations such as adding, renaming, and deleting devices, as well as comparing API data with UI data.

## Features

- **Compare API data with UI**: Verify that data from the API matches the information displayed on the UI.
- **Add New Device**: Test the functionality for adding a new device and ensure it is displayed correctly.
- **Rename Device**: Verify the renaming of a device and ensure the changes are reflected in the UI.
- **Delete Device**: Test the deletion of a device and ensure it is removed from the UI.

## Prerequisites

- Node.js (version 14.x or later)
- TestCafe

## Setup

1. **Clone the Repository**

   ```bash
   git clone https://github.com/marcelo-procopio/Ninja-One-Showcase.git
   cd device-management-tests
   ```

2. **Install Dependencies**

   ```bash
   npm install
   ```

3. **Configuration**

   Clone the Client-app repo: https://github.com/Yastrenky/devices-clientapp
   Clone the Server-app repo: https://github.com/NinjaRMM/devicesTask_serverApp

   Execute npm install in both servers.

   (for the client server the npm command need to be changed to be ran in a windows Machine.
   use : "start": "set PORT=3001 && react-scripts --openssl-legacy-provider start" in the scripts)


   Ensure that the API server and the application server are running on `http://localhost:3000` and `http://localhost:3001`, respectively.



## Test Suite Structure

- **`page_objects`**: Contains Page Object Model classes for interacting with the API and UI.
  - **`apiPage.js`**: Defines methods for API interactions.
  - **`uiPage.js`**: Defines methods for interacting with UI elements.
  - **`uiElements.js`**: Contains selectors for UI elements.
  - **`uiActions.js`**: Contains methods for actions on UI elements.

- **`tests`**: Contains test specifications.
  - **`deviceTests.js`**: Main test file that includes test cases for comparing API data with UI, adding, renaming, and deleting devices.

## Running Tests

1. **Run All Tests**

   ```bash
   npm run tests
   ```



## Test Cases

### 1. Compare API Data with UI and Check Options

- **Description**: Fetch device data from the API and compare each device's details with the UI. Verify the presence of edit and delete buttons.

### 2. Add a New Device and Verify Its Display

- **Description**: Add a new device through the UI and ensure it is displayed with correct details.

### 3. Rename the First Device and Verify the Change

- **Description**: Rename the first device through the API and verify that the change is reflected in the UI.

### 4. Delete the Last Device and Verify Its Removal

- **Description**: Delete the last device through the API and ensure it is removed from the UI.