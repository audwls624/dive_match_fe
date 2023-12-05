import React, {useState, useEffect} from 'react';
import api from './api'

const App = () => {
  const [certificates, setCertificates] = useState([]);
  const [formData, setFormData] = useState({
    id: '',
    name: ''
  });

  const fetchCertificates = async () => {
    const response = await api.get('/api/user/certificates/');
    setCertificates(response.data);
  }

  useEffect(() => {
    fetchCertificates();
  }, []);

  const handleInputChange = (event) => {
    const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
    setFormData({
      ...formData,
      [event.target.name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    // await api.post()
  }
}

export default App;
