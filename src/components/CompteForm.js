
import React, { useState } from 'react';

function CompteForm({ onAjouter }) {
    const [compte, setCompte] = useState({
        solde: '',
        dateCreation: '',
        type: 'COURANT'
    });

    const handleChange = (e) => {
        setCompte({
            ...compte,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const nouveauCompte = {
            id: Date.now(),
            ...compte,
            solde: Number(compte.solde)
        };

        onAjouter(nouveauCompte);

        alert('Compte ajouté avec succès !');

        setCompte({
            solde: '',
            dateCreation: '',
            type: 'COURANT'
        });
    };

    return (
        <div className="container mt-4">
            <h2>Ajouter un Compte</h2>

            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label>Solde</label>
                    <input
                        type="number"
                        name="solde"
                        className="form-control"
                        value={compte.solde}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="mb-3">
                    <label>Date de Création</label>
                    <input
                        type="date"
                        name="dateCreation"
                        className="form-control"
                        value={compte.dateCreation}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="mb-3">
                    <label>Type</label>
                    <select
                        name="type"
                        className="form-select"
                        value={compte.type}
                        onChange={handleChange}
                    >
                        <option value="COURANT">Courant</option>
                        <option value="EPARGNE">Épargne</option>
                    </select>
                </div>

                <button type="submit" className="btn btn-primary">
                    Ajouter
                </button>
            </form>
        </div>
    );
}

export default CompteForm;
