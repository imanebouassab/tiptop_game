import React, { useState } from 'react';
import { Layout, Typography, Button, Input, Form, Modal } from 'antd';
import { Row, Col } from 'antd';
import { motion } from 'framer-motion';
import MenuComponent from './MenuComponent';
import congratulationImage from '../img/1.gif'; // Adjust the path according to your file structure
import backgroundImage from '../img/10.jpg'; // Adjust the path according to your file structure
import './Participation.css';

const { Content } = Layout;
const { Title, Paragraph } = Typography;

const ParticipationPage = () => {
  const [code, setCode] = useState('');
  const [modalVisible, setModalVisible] = useState(false);

  const onCodeSubmit = () => {
    // Add logic to check the code and determine if the user wins
    // For demonstration purposes, let's assume the code is correct
    const isCodeCorrect = true;

    if (isCodeCorrect) {
      setModalVisible(true);
    } else {
      // Add logic for handling incorrect code
      console.log('Incorrect code entered');
    }
  };

  const handleModalOk = () => {
    // Add logic for any actions needed when the user clicks OK in the modal
    setModalVisible(false);
  };

  const handleModalCancel = () => {
    // Add logic for any actions needed when the user clicks Cancel in the modal
    setModalVisible(false);
  };

  return (
    <Layout>
      <MenuComponent />

      <Content style={{
        background: `url(${backgroundImage})`, // Set the background image
        backgroundSize: 'cover', // Adjust as needed
        backgroundPosition: 'center', // Adjust as needed
        padding: '50px',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        <Row justify="center">
          <Col xs={24} sm={22} md={20} lg={18} xl={16}>

            <motion.div
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              style={{ textAlign: 'center', background: 'white', padding: '30px', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}
            >
              <Title level={2} style={{ color: '#2C3E50' }}>Participer au Jeu de Concours</Title>
              <Paragraph style={{ color: '#7F8C8D', fontSize: '16px', marginBottom: '20px' }}>
                Plongez dans l'aventure captivante de notre jeu de concours et tentez votre chance pour remporter des prix exceptionnels! Entrez le code à 10 chiffres ci-dessous et découvrez si vous êtes le prochain gagnant. Ne manquez pas cette opportunité passionnante!
              </Paragraph>

              <Form onFinish={onCodeSubmit}>
                <Form.Item
                  name="code"
                  rules={[{ required: true, message: 'Veuillez saisir le code à 10 chiffres!' }]}
                >
                  <Input placeholder="Entrez le code à 10 chiffres" onChange={(e) => setCode(e.target.value)} />
                </Form.Item>
                <Form.Item>
                  <Button type="primary" htmlType="submit" style={{ width: '100%', marginTop: '20px', background: '#3498DB', border: 'none' }}>
                    Participer au jeu
                  </Button>
                </Form.Item>
              </Form>

              {/* Modal for congratulations */}
              <Modal
                title="Félicitations!"
                visible={modalVisible}
                onOk={handleModalOk}
                onCancel={handleModalCancel}
              >
                <p>Vous avez gagné un cadeau!</p>
                <h1> Votre cadeaux est </h1>
                <img src={congratulationImage} alt="Félicitations" />
                {/* You can customize the content of the modal based on your requirements */}
              </Modal>
            </motion.div>
          </Col>
        </Row>
      </Content>
    </Layout>
  );
};

export default ParticipationPage;
