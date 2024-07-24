"use client"
import { createContext, useState, useContext } from 'react';

const CustomerContext = createContext();

export function CustomerProvider({ children }) {
  const [customerInfo, setCustomerInfo] = useState({
    name: '',
    phoneNumber: '',
    email: '',
    idTrip: 0,
    departureDay: "2001-01-01",
    price: 0,
    departureTime: "00:00:00",
    busType: "",
    departureProvince: "",
    destProvince: "",
    selectedSeat: []
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