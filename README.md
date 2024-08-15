# Slacky, a Slack Clone

## Overview

This project is a simplified clone of Slack, built to practice and demonstrate skills in Node.js, TypeScript, and GraphQL. The application focuses on real-time messaging, channel management, and user interactions, providing a hands-on experience with modern web technologies.

## Features

- **Real-time Messaging**: Users can send and receive messages in real-time.
- **Channel Management**: Create and join channels for different topics or teams.
- **GraphQL API**: Efficient data fetching and real-time updates with GraphQL subscriptions.
- **TypeScript**: Strongly typed codebase for improved developer experience and maintainability.
- (maybe) **User Authentication**: Basic user authentication with session management.

## Technologies Used

- **Node.js**: Backend runtime environment.
- **Express**: Web framework for building the server.
- **TypeScript**: Type-safe development.
- **GraphQL**: API for querying and mutating data.
- **Apollo Server**: GraphQL server implementation.
- **WebSocket**: Real-time communication between client and server.
- **React**: Frontend library for building user interfaces.
- **Apollo Client**: GraphQL client for data fetching.
- **SQLite**: Lightweight relational database for storing messages and user data.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)

### Installation

1. Install the dependencies:
    ```bash
    npm install
    ```

2. Set up environment variables:

    Create a `.env` file in the root directory and add the following:

    ```bash
    PORT=5050
    DATABASE_URL=./dev.db
    ```

3. Start the development server:
    ```bash
    npm run dev
    ```

4. Open your browser and navigate to `http://localhost:5050`.

### Running the Client

The frontend is a simple React app that connects to the GraphQL API.

1. Install the dependencies:
    ```bash
    npm install
    ```

3. Start the development server:
    ```bash
    npm start
    ```

4. Open your browser and navigate to `http://localhost:3000`.

## Project Structure

```bash
├── client          # React frontend
│   ├── src
│   ├── public
│   └── package.json
├── src             # Node.js backend
│   ├── resolvers   # GraphQL resolvers
│   ├── schema      # GraphQL schema
│   ├── models      # Database models
│   ├── server.ts   # Server entry point
│   └── utils       # Utility functions
├── .env            # Environment variables
├── package.json
└── README.md