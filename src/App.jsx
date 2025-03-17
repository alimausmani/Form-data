
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Form from './form/Form'; 
import FormDetail from './form/FormDetail';
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="/FormDetail" element={<FormDetail />} />
      </Routes>
    </Router>
  );
};

export default App;