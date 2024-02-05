import React from 'react';
import { Layout, Button, Row, Col, Carousel } from 'antd';
import MenuComponent from './MenuComponent';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faEnvelope } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope as farEnvelope } from '@fortawesome/free-regular-svg-icons';

const { Content, Footer } = Layout;

const Participation = () => {
  return (
    <Layout>
      <MenuComponent />
      <Content style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        backgroundImage: 'url("https://recipes.net/wp-content/uploads/2020/12/9-Herbal-Tea-Benefits-and-Best-Types-to-Drink.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}>
        <div style={{ textAlign: 'center', maxWidth: '600px' }}>
          <h1>Participez au Jeu et Gagnez des Prix Incroyables !</h1>
          <p>Entrez le code à 10 chiffres pour avoir une chance de remporter des cadeaux exceptionnels. Ne manquez pas l'opportunité de vivre une expérience unique !</p>
          <Link to="/inscription">
            <Button type="primary" size="large" style={{ marginTop: '20px' }}>
              Inscrivez-vous maintenant
            </Button>
          </Link>
        </div>
        <div style={{ textAlign: 'center', maxWidth: '600px', marginTop: '20px' }}>
          <p>Vous avez déjà un compte ? Connectez-vous</p>
          <Link to="/login">
            <Button type="primary" size="large" style={{ marginTop: '10px' }}>
              Connectez-vous
            </Button>
          </Link>
        </div>
      </Content>
      
        
        <div style={{ textAlign: 'center', maxWidth: '1000px' }}>
          
        <h1>UNE MAISON DE THÉ OUVERTE SUR LE MONDE</h1>
        </div>
        <br />

        <Row gutter={[16, 16]} justify="center">
          <Col xs={24} sm={12} md={12} lg={12} xl={12}>
            {/* Contenu existant */}
            <img src="https://www.palaisdesthes.com/media/wysiwyg/maison-de-the/notre-histoire/1-img-desktop.webp" alt="Image" style={{ maxWidth: '100%' }} />
          </Col>
          <Col xs={24} sm={12} md={12} lg={12} xl={12}>
            {/* Contenu existant */}
            <p>
              Palais des Thés est une Maison de Thé fondée en 1986 par François-Xavier Delmas.
              À l’époque, le monde du thé est dominé par des maisons familiales établies depuis de nombreuses années. Nouveau venu, François-Xavier décide de se lancer avec ses propres moyens.

              Pour lui, connaître le thé, c’est aller le chercher directement dans les pays de thés, auprès de celles et ceux qui le font au quotidien. De ses rencontres, ses voyages et découvertes naît alors une certitude : cette nouvelle Maison de Thé doit être un lieu d'initiation et de transmission, où chacun puisse, à son rythme, apprendre à aimer le thé.

              Une certitude qui depuis toujours, guide toutes nos actions.
            </p>
          </Col>
        </Row>
        <Footer style={{
        marginTop: '10px',
        background: '#2f2f2f',
        color: '#ffffff',
        padding: '10px 0',
        textAlign: 'center',
        fontSize: 'small',
      }}>

        {/* Section des réseaux sociaux */}
        <div style={{ marginTop: '20px' }}>
          <br />
          <br/>
          <br />
          <br/>

          {/* Section des liens */}
          <div style={{ marginTop: '20px' }}>
            <Row gutter={[16, 16]} justify="center">
              {/* Colonne 1 : Retrouvez-nous */}
              <Col xs={24} sm={8} md={8} lg={8} xl={8}>
                <h2 style={{ color: '#ffffff', fontSize: 'small' }}>Retrouvez-nous</h2>
                <ul style={{ listStyleType: 'none', padding: '0' }}>
                  <li>
                    <FontAwesomeIcon icon={farEnvelope} size="2x" style={{ margin: '0 10px', color: '#888888' }} />
                    <Link to="/contact" style={{ color: '#ffffff', textDecoration: 'none' }}>Par courriel</Link>
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faFacebook} size="2x" style={{ margin: '0 10px', color: '#3b5998' }} />
                    <Link to="/facebook" style={{ color: '#ffffff', textDecoration: 'none' }}>Facebook</Link>
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faInstagram} size="2x" style={{ margin: '0 10px', color: '#c32aa3' }} />
                    <Link to="/instagram" style={{ color: '#ffffff', textDecoration: 'none' }}>Instagram</Link>
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faTwitter} size="2x" style={{ margin: '0 10px', color: '#00acee' }} />
                    <Link to="/twitter" style={{ color: '#ffffff', textDecoration: 'none' }}>Twitter</Link>
                  </li>
                </ul>
              </Col>

              {/* Colonne 2 : Qui sommes-nous */}
              <Col xs={24} sm={8} md={8} lg={8} xl={8}>
                <h2 style={{ color: '#ffffff', fontSize: 'small' }}>À propos</h2>
                <ul style={{ listStyleType: 'none', padding: '0' }}>
                  <li><Link to="/faq" style={{ color: '#ffffff', textDecoration: 'none' }}>Qui sommes-nous</Link></li>
                  {/* Ajoutez ici des informations sur votre entreprise */}
                </ul>
              </Col>

              {/* Colonne 3 : Info pratique */}
              <Col xs={24} sm={8} md={8} lg={8} xl={8}>
                <h2 style={{ color: '#ffffff', fontSize: 'small' }}>Info pratique</h2>
                <ul style={{ listStyleType: 'none', padding: '0' }}>
                  <li><Link to="/conditions" style={{ color: '#ffffff', textDecoration: 'none' }}>Conditions Générales de Vente</Link></li>
                  <li><Link to="/privacy" style={{ color: '#ffffff', textDecoration: 'none' }}>Politique de confidentialité</Link></li>
                </ul>
              </Col>
            </Row>
          </div>
        </div>
      </Footer>
    </Layout>
  );
};

export default Participation;
