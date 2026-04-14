# 🚀 Docker Multi-Tech Hands-On Repository

This repository contains hands-on implementations of Docker across multiple backend technologies including **Node.js, Python, Django, and Flask**. It demonstrates how to containerize applications and run them in isolated environments.

## 📦 Tech Stack
- Node.js
- Python
- Django
- Flask
- Docker
- Docker Compose
- Environment Variables (`.env`)

## 📁 Project Structure
Docker/
├── Hand-On/
├── Node/
├── Python/
├── django-notes-app/
├── two-tier-flask-app/
├── .env
└── README.md

## 🐳 Features
- Containerization of multiple backend technologies
- Separate Docker setup for each project
- Multi-container architecture (Flask + database)
- Use of `.env` for configuration
- Practical Docker workflows and commands

## ⚙️ Prerequisites
- Docker
- Docker Compose (optional)
- Git

## 🚀 Getting Started

### Clone the repository
```bash
git clone https://github.com/dixitshubham93/Docker.git
cd Docker
```

### Run Projects

**Flask App (Two-Tier)**
```bash
cd two-tier-flask-app
docker-compose up --build
```

**Django App**
```bash
cd django-notes-app
docker build -t django-app .
docker run -p 8000:8000 django-app
```

**Node App**
```bash
cd Node
docker build -t node-app .
docker run -p 3000:3000 node-app
```

## 🔐 Environment Variables
```env
PORT=3000
MONGO_URL=mongodb://mongo:27017/mydatabase
```

## 🧠 What You Learn
- Writing Dockerfiles
- Building and running containers
- Multi-service architecture
- Environment management
- Debugging Docker issues

## 📌 Use Case
- Docker practice and learning
- Backend containerization
- DevOps fundamentals
- Interview preparation

## 🤝 Contributing
Contributions are welcome to improve Docker setups, add services, or optimize builds.

## 📬 Author
**Shubham Dixit** — [GitHub](https://github.com/dixitshubham93)

## ⭐ Support
If you find this useful, consider giving it a star ⭐
