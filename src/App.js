
import React, { useState, useEffect } from 'react';
import CompteList from './components/CompteList';
import CompteForm from './components/CompteForm';

function App() {
    const [comptes, setComptes] = useState([]);

    useEffect(() => {
        const savedComptes = JSON.parse(localStorage.getItem('comptes')) || [];
        setComptes(savedComptes);
    }, []);

    const ajouterCompte = (nouveauCompte) => {
        const updatedComptes = [...comptes, nouveauCompte];
        setComptes(updatedComptes);
        localStorage.setItem('comptes', JSON.stringify(updatedComptes));
    };

    return (
        <div>
            <CompteForm onAjouter={ajouterCompte} />
            <CompteList comptes={comptes} />
        </div>
    );
}

export default App;
