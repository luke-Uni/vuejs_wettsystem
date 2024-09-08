# Soccer Bets - Frontend

## Overview

This project is a Vue.js-based frontend for a Soccer Betting application. It allows users to create teams, events, and interact with the system through a user-friendly interface. The application communicates with a backend API to send and retrieve team and event data, and features custom styles for a responsive and intuitive design.

## Features

- **Create Events**: Users can input team details (Team A and Team B) and generate an event.
- **Create Teams**: Users can add a team with attributes like name, power, and form.
- **Token Authentication**: Secure API communication using a token-based system.
- **Interactive Buttons**: Visual feedback when buttons are clicked.
- **Real-time API Communication**: All actions are immediately posted to a backend server.

## How to Use

1. **Event Creation**:
    - Fill in the names of Team A and Team B.
    - Provide a valid token.
    - Click the "Create Event" button to send the event details to the backend API.
  
2. **Team Creation**:
    - Input the team name, basic power, and current form.
    - Provide a valid token for authentication.
    - Click the submit button to send the team data to the backend API.

3. **View Teams**:
    - A list of teams will be retrieved from the backend API (functionality not yet implemented).

## API Integration

### Event Creation

- **API Endpoint**: `POST /events/{teamA}/{teamB}`
- **Headers**: Requires a token in the header for authentication.
- **Payload**: The request body includes random data to satisfy the API's body requirement.
- **Response**: The API returns the HTTP status of the request, which is logged to the console.

### Team Creation

- **API Endpoint**: `POST /teams`
- **Headers**: Requires a token in the header for authentication.
- **Payload**:
    ```json
    {
      "name": "Team Name",
      "basicPower": "Team Power",
      "currentForm": "Team Form"
    }
    ```
- **Response**: The API returns the HTTP status of the request, which is logged to the console.

## Setup

### Requirements

- **Vue.js**: This application uses Vue.js as the frontend framework.
- **Axios**: For making HTTP requests to the backend API.
  

1. Clone the repository:
```bash
git clone <repository-url>

```
2. Install the dependencies:


```bash
npm install
```

3. Start the development server:


```bash
npm run serve
```

4. Open your browser and navigate to http://localhost:8080.



## File Structure

- **`src/components/`**: Contains the Vue components that handle event creation, team creation, and other UI elements.
- **`src/assets/`**: Stores the CSS styles and static resources for the app.
- **`src/App.vue`**: The main application file.
- **`src/router/index.js`**: Handles the routing for the application (not fully implemented).

## Styling

The app uses SCSS for styling with scoped styles to prevent interference between components. The design focuses on a clean and simple user experience, with button hover effects and responsive layout adjustments.

### Custom Styles

- **Responsive Buttons**: Buttons provide feedback upon hover and click.
- **Fixed Footer**: The footer remains fixed at the bottom of the page.
- **Interactive Header**: The header contains buttons that toggle between different modes of interaction (e.g., creating a team or event).
