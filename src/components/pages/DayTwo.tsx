import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setFormData } from '../../store/FormSlice';
import { TextInput, SubmitButton } from '../shared/Button';

const FormPage: React.FC = () => {
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const validateName = (name: string) => {
    return name.length >= 3;
  };

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePhoneNumber = (phoneNumber: string) => {
    return phoneNumber.length >= 10;
  };

  const handleContinue = () => {
    dispatch(setFormData({ name, email, phoneNumber }));
  };

  const isFormValid =
    validateName(name) &&
    validateEmail(email) &&
    validatePhoneNumber(phoneNumber);

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <div style={{ maxWidth: '400px', padding: '16px', border: '1px solid #ccc', borderRadius: '4px' }}>
        <TextInput
          label="Name"
          value={name}
          onChange={setName}
          error={!validateName(name)}
        />
        <TextInput
          label="Email"
          value={email}
          onChange={setEmail}
          type="email"
          error={!validateEmail(email)}
        />
        <TextInput
          label="Phone Number"
          value={phoneNumber}
          onChange={setPhoneNumber}
          error={!validatePhoneNumber(phoneNumber)}
        />
        <SubmitButton onClick={handleContinue} disabled={!isFormValid}>
          Continue
        </SubmitButton>
      </div>
    </div>
  );
};

export default FormPage;
