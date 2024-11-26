// src/hooks/useContactInfo.js
import { useState, useEffect } from 'react';
import axios from 'axios';

const useContactInfo = () => {
  const [contactInfo, setContactInfo] = useState({
    email: '',
    phone: '',
    youtube: '',
    linkedin: '',
    instagram: '',
  });

  useEffect(() => {
    const fetchContactInfo = async () => {
      try {
        const response = await axios.get(
          'https://sheets.googleapis.com/v4/spreadsheets/1u0J_BUI80HVtT8znRsaShOWzZYK-NzMZ40aK7gKtZJU/values:batchGet?ranges=contact&key=AIzaSyD_yKv_VQnArFPkiCGZyK_d1B0kI-O8cBk'
        );
        const contactData = response.data.valueRanges[0].values;
        const contactInfo = {};
        contactData.forEach((row) => {
          if (row[0] && row[1]) {
            contactInfo[row[0].toLowerCase()] = row[1];
          }
        });
        setContactInfo(contactInfo);
      } catch (error) {
        console.log('Error fetching contact info', error);
      }
    };

    fetchContactInfo();
  }, []);

  return contactInfo;
};

export default useContactInfo;
