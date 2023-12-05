CREATE DATABASE boissons;

CREATE TABLE boissons (
    boissons_id SERIAL PRIMARY KEY,
    nom VARCHAR(50),
    saveur VARCHAR(50),
    createur VARCHAR(50),
    date_de_sortie VARCHAR(100)
);
