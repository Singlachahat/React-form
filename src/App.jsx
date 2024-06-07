// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Form from './components/Form.jsx';
import Success from './components/Success.jsx';

function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Form />} />
          <Route path="/success" element={<Success />} />
        </Routes>
    </Router>
  );
}

export default App;



