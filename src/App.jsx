import './App.css';
import { useState } from 'react';
import { Generator } from './components/Generator/Generator';
import { QRsList } from './components/QRsList/QRsList.jsx';
import { QRItem } from './components/QRItem/QRItem.jsx';
import { Author } from './components/Author/Author.jsx';
import { NoQRs } from './components/NoQRs/NoQRs.jsx';
import { Logo } from './components/Logo/Logo.jsx';

function App() {
  const [savedQRs, setSavedQRs] = useState(() => {
    let qrs = localStorage.getItem('qrs_v1');

    if (qrs) {
      return JSON.parse(qrs);
    }

    return [];
  });

  return (
    <>
      <Logo />

      {savedQRs.length > 0 ? (
        <QRsList>
          {savedQRs.map((qr, index) => (
            <QRItem
              key={index}
              qr={qr}
            />
          ))}
        </QRsList>
      ) : (
        <NoQRs />
      )}

      <Author
        authorName={'Joshua'}
        authorLink={'https://github.com/ElJoshua08'}
      />
      <Generator
        savedQRs={savedQRs}
        setSavedQRs={setSavedQRs}
      />
    </>
  );
}

export default App;
