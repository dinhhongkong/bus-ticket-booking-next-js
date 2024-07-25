"use client"
import { createContext, useState, useContext } from 'react';

const CustomerContext = createContext();

export function CustomerProvider({ children }) {
  const [customerInfo, setCustomerInfo] = useState({
    name: '',
    phoneNumber: '',
    email: '',
  });

  const [tripInfo, setTripInfo] = useState(
    {
      departure: {
        id: 0,
        day: "2001-01-01",
        time: "00:00:00",
        price: 0,
        type: "",
        provinceStart: "",
        provinceEnd: "",
        disableSeat: [],
        selectedSeat: [],
        pickupId: 0,
        dropOffId: 0
      },
      destination: {
        id: 0,
        day: "2001-01-01",
        time: "00:00:00",
        price: 0,
        type: "",
        provinceStart: "",
        provinceEnd: "",
        disableSeat: [],
        selectedSeat: [],
        pickupId: 0,
        dropOffId: 0
      },
      isRoundTrip: false
    }
  )



  return (
    <CustomerContext.Provider value={{ customerInfo, setCustomerInfo, tripInfo, setTripInfo  }}>
      {children}
    </CustomerContext.Provider>
  );
}

export function useCustomerInfo() {
  return useContext(CustomerContext);
}