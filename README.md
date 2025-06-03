# 🌦️ Weather App

A **responsive weather forecasting** web application built using **HTML**, **CSS**, and **JavaScript**. It fetches real-time weather data from the **OpenWeatherMap API** and displays the current weather for a searched city with dynamic visuals.

---

## 🚀 Tech Stack

| Frontend | API | Containerization |
| --- | --- | --- |
| HTML5, CSS3, JavaScript | [OpenWeatherMap](https://openweathermap.org/) | Docker, NGINX |

---

## 🔧 Features

- 🔍 Search by city name
- 🌡️ Live temperature updates
- 💧 Humidity display
- 🌬️ Wind speed info
- 🌥️ Weather icons based on condition
- ❗ User-friendly error messages
- 📱 Fully responsive design

---

## 📁 Folder Structure

docker/
├── index.html
├── style.css
├── script.js
├── images/
│   ├── clear.png
│   ├── clouds.png
│   ├── drizzle.png
│   ├── humidity.png
│   ├── mist.png
│   ├── rain.png
│   ├── snow.png
│   ├── search.png
│   └── wind.png
├── .gitignore
├── Dockerfile
└── [README.md](http://readme.md/)

---

## 🚀 Getting Started (with Docker)

Follow these steps to run this Weather App using Docker:

> 🔑 Don’t forget to replace the default API key in script.js with your own OpenWeatherMap API key.
> 
1. **Clone this repository:**
    
    ```bash
    git clone https://github.com/sanjeetha77/weather-app-with-docker.git
    cd weather-app-with-docker
    ```
    
2. **Build the Docker image:**
    
    ```bash
    docker build -t weather-app .
    ```
    
3. **Run the Docker container:**
    
    ```bash
    docker run -d -p 8080:80 --name weather weather-app
    ```
    
4. **Open the app in your browser:**
    
    [http://localhost:8080](http://localhost:8080/)
    

---

## 📸 Screenshots

![WhatsApp Image 2025-06-03 at 2 06 53 PM (1)](https://github.com/user-attachments/assets/0af17773-a90b-4c1a-b840-ebd47a357d00)
![WhatsApp Image 2025-06-03 at 2 06 53 PM](https://github.com/user-attachments/assets/24d5cb8a-4bc7-4303-af12-82f38316d5fb)
