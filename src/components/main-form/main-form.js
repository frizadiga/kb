import React from 'react';
import './submit-survey-form.scss';

import Button from '../button';

const data = {
  locations: [
    {
      id: 0,
      name: 'Lokasi tempat tinggal',
    }, {
      id: 1,
      name: 'DKI Jakarta',
    },
  ],
};

const SubmitSurveyForm = () => {
  const handleChange = (e) => {
    window.alert(e.target.value);
  };

  return (
    <div className="submit-job-form">
      <p className="title">Jadwalkan survey untuk pengecekan ukuran.</p>
      <form>
        <select onChange={handleChange}>
          {
            data.locations.map(item => (
              <option
                key={item.id}
                value={item.id}
              >
                {item.name}
              </option>
            ))
          }
        </select>
        <input type="text" placeholder="Alamat tinggal" />
        <select onChange={handleChange}>
          <option value="no-data">Waktu perjanjian survey</option>
        </select>
        <input type="text" placeholder="Masukan nama anda" />
        <input type="text" placeholder="No kontak" />
        <Button
          type="submit"
          to="/thank-you"
          style={{
            padding: 25,
            backgroundColor: '#f5a623',
            color: 'white',
            fontSize: 20,
            fontWeight: 'bold',
          }}
        >
          Konfirmasi Pemesanan
        </Button>
      </form>
    </div>
  );
};

export default SubmitSurveyForm;
