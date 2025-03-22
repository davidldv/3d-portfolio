import { useState } from 'react';

interface AlertParams {
  show: boolean;
  text: string;
  type?: string; 
}

const useAlert = () => {
  const [alert, setAlert] = useState({ show: false, text: '', type: 'danger' });

  const showAlert = ({ text, type = 'danger' }: AlertParams) => setAlert({ show: true, text, type });
  // @ts-ignore
  const hideAlert = (prop: boolean) => setAlert({ show: false, text: '', type: 'danger' });

  return { alert, showAlert, hideAlert };
};

export default useAlert;