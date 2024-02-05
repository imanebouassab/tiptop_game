import React from 'react';
import { Layout, Typography, Space, Input, Button } from 'antd';
import { HomeOutlined, MailOutlined, PhoneOutlined, SendOutlined } from '@ant-design/icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Row } from 'react-bootstrap';
import MenuComponent from './MenuComponent';



import './Contact.css'; // Créez un fichier CSS séparé pour les styles personnalisés

const { Content } = Layout;
const { Title, Text } = Typography;

const Contact = () => {

  const handleSendMessage = () => {
    // Ajoutez ici la logique pour envoyer un message
    console.log('Message sent!');
  };

  return (
    <Layout>
      <MenuComponent />
      <Content className="contact-content">
        <div className="contact-container">
          <Title level={2}>Contactez-nous</Title>

          <Row gutter={16} justify="center">
            {/* Informations de contact */}
            <Col className="contact-info" xs={24} sm={24} md={12} lg={12} xl={12}>
              <Space direction="vertical">
                <div>
                  <HomeOutlined className="icon" />
                  <Text strong>Adresse:</Text>
                  <Text>123 Rue de la République, 75001 Paris, France</Text>
                </div>

                <div>
                  <MailOutlined className="icon" />
                  <Text strong>E-mail:</Text>
                  <Text>contact@tiptop.com</Text>
                </div>

                <div>
                  <PhoneOutlined className="icon" />
                  <Text strong>Téléphone:</Text>
                  <Text>0909090909</Text>
                </div>
              </Space>
            </Col>

            {/* Carte (remplacée par la balise iframe pour Google Maps) */}
            <Col className="map-container" xs={24} sm={24} md={12} lg={12} xl={12}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2625.5339262195153!2d2.5188014!3d48.848028199999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e60d8bfb01e62f%3A0xb34379c73eaf467b!2s123%20Rue%20de%20la%20R%C3%A9publique%2C%2093160%20Bry-sur-Marne!5e0!3m2!1sfr!2sfr!4v1704723167337!5m2!1sfr!2sfr"
                width="100%"
                height="300"
                style={{ border: '1px solid #d9d9d9', borderRadius: 4 }}
                allowFullScreen=""
                loading="lazy"
                title="Google Maps"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </Col>
          </Row>

          {/* Formulaire de contact */}
          <Title level={3} className="form-title">
            Envoyez-nous un message
          </Title>
          <Row className="form-row" gutter={16} justify="center">
            <Col xs={24} sm={24} md={12} lg={12} xl={12}>
              <Input placeholder="Nom" className="input-field" />
            </Col>
            <Col xs={24} sm={24} md={12} lg={12} xl={12}>
              <Input placeholder="E-mail" className="input-field" />
            </Col>
          </Row>
          <Row className="form-row" gutter={16} justify="center">
            <Col xs={24} sm={24} md={12} lg={12} xl={12}>
              <Input.TextArea placeholder="Message" rows={4} className="input-field" />
            </Col>
          </Row>
          <Row className="form-row" gutter={16} justify="center">
            <Col xs={24} sm={24} md={12} lg={12} xl={12}>
              <Button type="primary" icon={<SendOutlined />} onClick={handleSendMessage}>
                Envoyer
              </Button>
            </Col>
          </Row>
        </div>
      </Content>
    </Layout>
  );
};

export default Contact;
