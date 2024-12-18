import React from 'react';
import "../styles/errorpage.scss"
import Layout from '../components/Layout.jsx';
import { Link } from 'react-router-dom';

function ErrorPage() {
  return (
    <Layout>
      <section className="errorpage">
        <h1>404</h1>
        <p>Oups! La page que vous demandez n'existe pas.</p>
        <Link to="/" className="errorpage__link">Retouner sur la page d'accueil</Link>
      </section>
    </Layout>
  );
};

export default ErrorPage;