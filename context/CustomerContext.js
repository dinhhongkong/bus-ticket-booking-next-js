// contexts/CustomerContext.js
import { createContext, useState, useContext } from 'react';

const CustomerContext = createContext();

export function CustomerProvider({ children }) {
  const [customerInfo, setCustomerInfo] = useState({
    name: '',
    phone: '',
    email: '',
  });

  return (
    <CustomerContext.Provider value={{ customerInfo, setCustomerInfo }}>
      {children}
    </CustomerContext.Provider>
  );
}

export function useCustomerInfo() {
  return useContext(CustomerContext);
}