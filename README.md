# Converge Backend

## Overview

Converge Backend is the REST API server for the Converge app. It handles user authentication, event management, and friend relationships.

---

## Features

- User signup and login with encrypted passwords  
- CRUD operations for events (Create, Read, Update, Delete)  
- Friend management (add friends, list friends)  

---

## Tech Stack

- Node.js  
- Express.js  
- MongoDB with Mongoose  
- bcryptjs for password hashing  
- dotenv for environment variables  
- cors for Cross-Origin Resource Sharing  

---

## Getting Started

### Prerequisites

- Node.js installed  
- MongoDB connection string (in a `.env` file)  

### Installation

1. Clone the repo

```bash
git clone https://github.com/RealEthanSequeira/converge-backend.git
