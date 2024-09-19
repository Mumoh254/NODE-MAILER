import { useState } from 'react';
import axios from 'axios'; 
import './App.css';

function App() {
  const [email, setEmail] = useState('');

  const sendEmail = async (e) => {
    e.preventDefault();
    console.log(email);

    const data = {
      email
    };

    try {
      const response = await axios.post('http://localhost:8000/api/sendmail', data);
      console.log(response.data);
    } catch (error) {
      console.error('Error sending email:', error);
    }
  };

  return (
    <div className='--centre--all'>
      <div className='card'>
        <form onSubmit={sendEmail} className='--form-control'>
          <input
            type='email'
            placeholder='Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button type='submit'>SEND</button>
        </form>
      </div>
    </div>
  );
}

export default App;
