import React from "react";
import LoginForm from "./components/LoginForm";
import SignUpForm from "./components/SignUpForm";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/signup" element={<SignUpForm />} />
      </Routes>
    </Router>
  );
};

export default App;
