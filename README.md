# Asynchronous Email Queue System

A backend-focused system for handling email tasks asynchronously using a job queue architecture. Tasks are offloaded to background workers to improve performance, scalability, and reliability.

---

## Features

- Asynchronous email processing using Redis queue
- Background worker for handling jobs
- Retry mechanism for failed tasks
- Queue wait time and processing time metrics
- REST API for submitting email jobs
- Simple React frontend for triggering requests

---

## Tech Stack

- Backend: Node.js, Express.js  
- Queue System: Redis, BullMQ  
- Frontend: React, Axios  
- Deployment (optional): AWS EC2 / Render  

---

##  Architecture

Client (React)  
↓  
Express API → Adds Job to Queue (Redis)  
↓  
Worker (BullMQ) → Processes Job  

---

##  Setup Instructions

### 1. Clone the repository
```bash
git clone https://github.com/harshi-ram/email-processing.git
cd your-repo-name
```
### 2. Install dependencies (at client and server folders each)
```bash
npm install
```
### 3. Start Redis
At the Redis folder after installing Redis, run
```bash
redis-server.exe
```
### 4. Run backend
```bash
cd server
node server.js
```
### 5. Start the worker
```bash
node queue/worker.js
```
### 6. Run frontend
```bash
cd client
npm start
```

