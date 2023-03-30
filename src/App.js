import { Route, Routes } from "react-router-dom";
import Calendar from './pages/Calendar';
import HomePage from './pages/HomePage';
import TodayPage from './pages/TodayPages';
import TodoPage from './pages/TodoPage';

function App() {
  return (
    <Routes>
      <Route exect path="/" element={<HomePage />} />
      <Route path="/todo" element={<TodoPage />} />
      <Route path="/today" element={<TodayPage />} />
      <Route path="/calendar" element={<Calendar />} />
    </Routes>
  );
}

export default App;
