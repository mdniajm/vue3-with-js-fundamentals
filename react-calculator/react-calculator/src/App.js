import React, { useState } from 'react';

function App() {
  const [birthDate, setBirthDate] = useState('');
  const [age, setAge] = useState('');

  const handleInputChange = (event) => {
    setBirthDate(event.target.value);
  };

  const calculateAge = (birthDate) => {
    const today = new Date();
    const birthDateObj = new Date(birthDate);
    let age = today.getFullYear() - birthDateObj.getFullYear();
    const monthDiff = today.getMonth() - birthDateObj.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDateObj.getDate())) {
      age--;
    }
    const month = (today.getMonth() + 12 - birthDateObj.getMonth()) % 12;
    const dayDiff = today.getDate() - birthDateObj.getDate();
    const day = dayDiff < 0 ? daysInMonth(today.getMonth(), today.getFullYear()) - birthDateObj.getDate() + today.getDate() : dayDiff;
    const hour = today.getHours() - birthDateObj.getHours();
    const minute = today.getMinutes() - birthDateObj.getMinutes();
    const second = today.getSeconds() - birthDateObj.getSeconds();

    return {
      age: age,
      month: month,
      day: day,
      hour: hour,
      minute: minute,
      second: second
    };
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const ageObj = calculateAge(birthDate);
    setAge(ageObj);
  };

  const daysInMonth = (month, year) => {
    return new Date(year, month + 1, 0).getDate();
  };

  return (
    <div className="age-calculator">
      <h1>Age Calculator</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Birthdate:
          <input type="date" value={birthDate} onChange={handleInputChange} />
        </label>
        <button type="submit">Calculate Age</button>
      </form>
      {age && (
        <div>
          <p>Your age is {age.age} years, {age.month} months, {age.day} days, {age.hour} hours, {age.minute} minutes, and {age.second} seconds old.</p>
        </div>
      )}
    </div>
  );
}

export default App;
