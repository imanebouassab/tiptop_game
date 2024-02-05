import React from 'react';
import { Layout, Button, Row, Col, Form, Input } from 'antd';
import MenuComponent from './MenuComponent';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

const { Content } = Layout;

const Imane = () => {
  const onFinish = (values) => {
    // Gérer la soumission du formulaire ici
    console.log('Received values:', values);
  };

  return (
    <Layout>
      <MenuComponent />
      <Content style={{
        background: 'url("https://preview.colorlib.com/theme/foodera/img/home/banner.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '600px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
        textAlign: 'center',
        padding: '100px 20px',
      }}>
        <h1 style={{ fontSize: '3em', marginBottom: '20px' }}>Découvrez la saveur exceptionnelle</h1>
        <p style={{ fontSize: '1.2em', marginBottom: '40px' }}>Commandez maintenant et profitez de la meilleure cuisine.</p>
        <Button type="primary" size="large" style={{ width: '200px' }}>Commander maintenant</Button>
      </Content>

      <Content style={{ padding: '50px' }}>
        <Row gutter={[16, 16]}>
          <Col span={8}>
            <div style={{ textAlign: 'center' }}>
              <img src="https://preview.colorlib.com/theme/foodera/img/home/chef1.png" alt="Chef 1" style={{ maxWidth: '100%' }} />
              <h3>Chef Expert</h3>
              <p>Des chefs experts cuisinent avec passion pour vous apporter les meilleurs plats.</p>
            </div>
          </Col>
          <Col span={8}>
            <div style={{ textAlign: 'center' }}>
              <img src="https://preview.colorlib.com/theme/foodera/img/home/chef2.png" alt="Chef 2" style={{ maxWidth: '100%' }} />
              <h3>Cuisson parfaite</h3>
              <p>Nos plats sont préparés avec soin pour garantir une cuisson parfaite et une saveur exceptionnelle.</p>
            </div>
          </Col>
          <Col span={8}>
            <div style={{ textAlign: 'center' }}>
              <img src="https://preview.colorlib.com/theme/foodera/img/home/chef3.png" alt="Chef 3" style={{ maxWidth: '100%' }} />
              <h3>Ingrédients frais</h3>
              <p>Nous utilisons des ingrédients frais et de qualité pour chaque plat que nous servons.</p>
            </div>
          </Col>
        </Row>
      </Content>

      <Content style={{ background: '#f5f5f5', padding: '50px' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '40px' }}>Nos Spécialités</h2>
        {/* Ajoutez ici des sections pour afficher différents types de nourriture */}
      </Content>

      <Content style={{ padding: '50px' }}>
        <Row gutter={[16, 16]}>
          <Col span={12}>
            <h2 style={{ marginBottom: '30px' }}>Inscrivez-vous pour recevoir nos offres spéciales</h2>
            <Form onFinish={onFinish}>
              <Row gutter={[16, 16]}>
                <Col span={12}>
                  <Form.Item name="name">
                    <Input placeholder="Nom" />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item name="email" rules={[{ type: 'email', message: 'Veuillez entrer une adresse e-mail valide' }]}>
                    <Input placeholder="E-mail" />
                  </Form.Item>
                </Col>
              </Row>
              <Row gutter={[16, 16]}>
                <Col span={12}>
                  <Form.Item name="phone">
                    <Input placeholder="Téléphone" />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item>
                    <Button type="primary" htmlType="submit" style={{ width: '100%' }}>
                      S'inscrire
                    </Button>
                  </Form.Item>
                </Col>
              </Row>
            </Form>
          </Col>
        </Row>
      </Content>
    </Layout>
  );
};

export default imane;
