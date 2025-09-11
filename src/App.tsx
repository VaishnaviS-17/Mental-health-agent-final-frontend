import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Homepage from './components/Homepage';
import ChatPage from './components/Chatpage';
import DiaryPage from './components/DiaryPage';
import AboutPage from './components/AboutPage';
import ResourcesPage from './components/ResourcesPage';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/chat" element={<ChatPage />} />
        <Route path="/diary" element={<DiaryPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/resources" element={<ResourcesPage />} />
      </Routes>
    </Router>
  );
}

export default App;










