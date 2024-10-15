import React, { useEffect } from 'react';
import Message from './Components/Message';
import MessagesServices from './Services/services';
import SimpleForm from './Components/InputForm';

function App() {
  const [message, setMessage] = React.useState('');
  const fetchMessage = async () => {  
    const response =  await MessagesServices.fetchMessage()
    setMessage(response.data);

  }
  useEffect(() => {
    fetchMessage();
  }, []);

  return (
    <div>
      <h1>React and Express Monorepo</h1>
      <span>
        Message from Events js <Message message={message} />
      </span>
      <SimpleForm />
    </div>
  );
}

export default App;
