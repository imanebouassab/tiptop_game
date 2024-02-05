// Login.jsx

import React from 'react';
import { Layout, Form, Input, Button, Checkbox } from 'antd';
import { motion } from 'framer-motion';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import MenuComponent from './MenuComponent';

const { Content } = Layout;

const Login = () => {
  const onFinish = (values) => {
    console.log('Received values:', values);
    // Ajoutez ici la logique de connexion
  };

  const containerVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <Layout>
      <MenuComponent />
      <Content style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        minHeight: '100vh',
        backgroundImage: 'url("https://media.istockphoto.com/id/1128432154/fr/vectoriel/feuille-de-th%C3%A9.jpg?s=1024x1024&w=is&k=20&c=Gjd9cgZZBHVQIR25X-UL4-GFkr9dYUq6I7QXOWxLDvY=")',
        backgroundSize: 'cover',
      }}>
        <motion.div
          style={{ background: '#fff', padding: 24, width: 300 }}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <h2 style={{ textAlign: 'center' }}>Connexion</h2>
          <Form
            name="normal_login"
            initialValues={{ remember: true }}
            onFinish={onFinish}
          >
            <Form.Item
              name="username"
              rules={[{ required: true, message: 'Veuillez saisir votre nom d\'utilisateur!' }]}
            >
              <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Nom d'utilisateur" />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[{ required: true, message: 'Veuillez saisir votre mot de passe!' }]}
            >
              <Input
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Mot de passe"
              />
            </Form.Item>
            <Form.Item>
              <Form.Item name="remember" valuePropName="checked" noStyle>
                <Checkbox>Se souvenir de moi</Checkbox>
              </Form.Item>
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit" style={{ width: '100%' }}>
                Connexion
              </Button>
            </Form.Item>
          </Form>
        </motion.div>
      </Content>
    </Layout>
  );
};

export default Login;
