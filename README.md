# That-Idea Frontend

This is the frontend repository for **That-Idea**, a platform where users can share their ideas, pitch their concepts, and engage with other users through likes and comments. Built with **React**, this frontend provides an intuitive and seamless user experience.

## Tech Stack
- **React.js** - Frontend framework
- **Vite** - Fast build tool for React
- **Tailwind CSS** - Styling framework for UI design
- **ShadCN** - UI components for a modern look
- **Firebase Auth** - Used for authentication (Google Login)
- **Firebase Storage** - Used for storing media (images, documents, etc.)
- **Axios** - For API requests
- **React Router** - For client-side navigation

## Features
- **User Authentication**: Secure login via Firebase Google Auth.
- **Idea Posting**: Users can share their ideas with titles, descriptions, and media.
- **Like System**: Engage with other users through likes.
- **Search & Filter**: Users can search for specific ideas using keywords.
- **Responsive UI**: Mobile-friendly interface built with Tailwind CSS.

## Installation & Setup

### Prerequisites
Make sure you have the following installed:
- [Node.js](https://nodejs.org/)

### Steps to Set Up
1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/that-idea-frontend.git
   cd that-idea-frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a **.env** file and add the required environment variables:
   ```env
   VITE_MODE = development
   # FIREBASE
   VITE_API_KEY=
   VITE_AUTH_DOMAIN=
   VITE_PROJECT_ID=
   VITE_STORAGE_BUCKET=
   VITE_MESSAGE_SENDER_ID=
   VITE_APP_ID=

   VITE_BACKEND_URL = 
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```


## Contributing
1. Fork the repository.
2. Create a feature branch: `git checkout -b feature-name`
3. Commit your changes: `git commit -m "Added a new feature"`
4. Push to the branch: `git push origin feature-name`
5. Submit a pull request.

## License
This project is licensed under the MIT License.

## Contact
For any queries or suggestions, feel free to reach out:
- **Developer**: Harshit Parmar
- **Email**: parmarharshit441@gmail.com
- **LinkedIn**: [Your Profile](https://www.linkedin.com/in/harshit-parmar-47253b282)

