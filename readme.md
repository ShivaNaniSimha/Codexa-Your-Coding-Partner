# CodeXA - Your Ultimate Coding Platform
**CodeXA** is a feature-rich, AI-powered platform designed to help you master data structures and algorithms, prepare for technical interviews, and compete with fellow programmers. With a seamless user experience and a powerful set of tools, CodeXA is your one-stop solution for all things coding.

## ✨ Key Features

- **Extensive Problem Library:** Solve a wide variety of DSA problems with detailed editorials and multiple test cases.
- **AI-Powered Doubt Assistance:** Get instant help with your coding questions from our intelligent AI assistant.
- **AI Mock Interviews:** Practice for technical interviews with a realistic AI-powered mock interview experience.
- **Live Contests:** Participate in coding contests and compete with a global community of programmers.
- **Real-time Leaderboards:** Track your progress and see how you stack up against the competition.
- **Personalized Dashboards:** Visualize your coding journey with heatmaps, submission history, and performance analytics.
- **Video Solutions:** Understand complex problems with detailed video explanations.
- **Discussion Forums:** Engage with the community, ask questions, and share your knowledge.
- **Secure Authentication:** Robust user authentication with email verification and Google OAuth.
- **Admin Panel:** A comprehensive admin dashboard to manage users, problems, and platform analytics.

## 🚀 Tech Stack

### Frontend

- **Framework:** React.js
- **UI Library:** Tailwind CSS, DaisyUI
- **State Management:** Redux Toolkit
- **Routing:** React Router
- **Form Management:** React Hook Form, Zod
- **Code Editor:** Monaco Editor
- **API Client:** Axios
- **Real-time Communication:** Socket.IO Client
- **Styling:** CSS, GSAP, Motion
- **Build Tool:** Vite

### Backend

- **Framework:** Express.js
- **Database:** MongoDB (with Mongoose)
- **Real-time Communication:** Socket.IO
- **Authentication:** JWT, bcrypt, Google Auth Library
- **AI Integration:** Google Generative AI (Gemini)
- **File Storage:** Cloudinary, Multer
- **Payment Gateway:** Razorpay
- **Caching:** Redis
- **Email Service:** Nodemailer
- **API Validation:** Validator.js

## 🛠️ Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- MongoDB instance (local or cloud)
- Git

### Installation & Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/gopaljha16/codexa.git
   cd codexa
   ```

2. **Setup Backend:**
   ```bash
   cd backend
   npm install
   ```
   - Create a `.env` file in the `backend` directory and add the necessary environment variables (see `.env.example` for reference).
   - Start the backend server:
     ```bash
     npm start
     ```

3. **Setup Frontend:**
   ```bash
   cd ../frontend
   npm install
   ```
   - Create `.env.development` and `.env.production` files in the `frontend` directory and add the necessary environment variables.
   - Start the frontend development server:
     ```bash
     npm run dev
     ```

4. **Open your browser** and navigate to `http://localhost:5173` (or the port specified by Vite).

## 🤝 Contributing

We welcome contributions from the community! If you'd like to contribute, please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature-name`).
3. Make your changes and commit them (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature/your-feature-name`).
5. Open a pull request.

Please make sure to update tests as appropriate.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

---

Made with ❤️ by the CodeXA Team
