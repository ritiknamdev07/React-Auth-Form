import React from "react";
import LoginForm from "./components/LoginForm";
import SignUpForm from "./components/SignUpForm";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPractice from "./components/LoginPractice";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        {/* <Route path="/" element={<LoginForm />} />
        <Route path="/signup" element={<SignUpForm />} /> */}
        <Route index element={<LoginPractice />} />
      </Routes>
    </Router>
  );
};

export default App;
