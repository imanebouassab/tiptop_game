import React from 'react';
import { Layout, Typography, Form, Input, Button, Checkbox, Space, Select, DatePicker } from 'antd';
import { UserAddOutlined, LockOutlined, MailOutlined } from '@ant-design/icons';
import MenuComponent from './MenuComponent';

const { Content } = Layout;
const { Title } = Typography;
const { Option } = Select;

const Inscription = () => {
  const onFinish = (values) => {
    console.log('Received values:', values);
    // Add your registration logic here
  };

  return (
    <Layout>
      <MenuComponent />
      <br></br>
      <br></br>
      <br></br>
      <br></br>

      
      <div style={{ textAlign: 'left', maxWidth: '800px', margin: '0 auto', padding: '0 16px' }}>
        <p>
          Si vous vous connectez pour la première fois sur notre site internet,<br></br> merci de créer un compte avec la même
          adresse email que celle renseignée en boutique.
          <br />
          * Champs obligatoires
        </p>
      </div>

      <Content
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '100vh',
          background: 'url("2056810823.jpg") center/cover no-repeat fixed',
        }}
      >
        <div style={{ background: '#f4f4f4', padding: 24, width: '80%', maxWidth: '400px', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
          <Title level={2} style={{ textAlign: 'center', marginBottom: '24px', color: '#3498DB', fontFamily: 'Arial, sans-serif' }}>Inscription</Title>
          <Form
            name="inscription_form"
            initialValues={{ remember: true }}
            onFinish={onFinish}
            layout="vertical"
          >
            <Form.Item
              name="username"
              label="Nom d'utilisateur"
              rules={[
                { required: true, message: 'Veuillez saisir votre nom d\'utilisateur!' },
              ]}
            >
              <Space>
                <UserAddOutlined style={{ marginRight: '8px' }} />
                <Input placeholder="Nom d'utilisateur" />
              </Space>
            </Form.Item>
            <Form.Item
              name="email"
              label="E-mail"
              rules={[
                { required: true, message: 'Veuillez saisir votre adresse e-mail!' },
                { type: 'email', message: 'Adresse e-mail invalide!' },
              ]}
            >
              <Space>
                <MailOutlined style={{ marginRight: '8px' }} />
                <Input placeholder="E-mail" />
              </Space>
            </Form.Item>
            <Form.Item
              name="gender"
              label="Sexe"
              rules={[{ required: true, message: 'Veuillez sélectionner votre sexe!' }]}
            >
              <Select placeholder="Sélectionner le sexe">
                <Option value="male">Homme</Option>
                <Option value="female">Femme</Option>
              </Select>
            </Form.Item>
            <Form.Item
              name="phone"
              label="Téléphone"
              rules={[
                { required: true, message: 'Veuillez saisir votre numéro de téléphone!' },
                { pattern: /^[0-9]{10}$/, message: 'Numéro de téléphone invalide!' },
              ]}
            >
              <Input placeholder="Téléphone" />
            </Form.Item>
            <Form.Item
              name="dob"
              label="Date de naissance"
              rules={[{ required: true, message: 'Veuillez saisir votre date de naissance!' }]}
            >
              <DatePicker style={{ width: '100%' }} placeholder="Sélectionner la date" />
            </Form.Item>
            <Form.Item
              name="password"
              label="Mot de passe"
              rules={[{ required: true, message: 'Veuillez saisir votre mot de passe!' }]}
            >
              <Space>
                <LockOutlined style={{ marginRight: '8px' }} />
                <Input.Password placeholder="Mot de passe" />
              </Space>
            </Form.Item>
            <Form.Item
              name="confirmPassword"
              label="Confirmez le mot de passe"
              dependencies={['password']}
              hasFeedback
              rules={[
                { required: true, message: 'Veuillez confirmer votre mot de passe!' },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue('password') === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject('Les deux mots de passe ne correspondent pas!');
                  },
                }),
              ]}
            >
              <Space>
                <LockOutlined style={{ marginRight: '8px' }} />
                <Input.Password placeholder="Confirmez le mot de passe" />
              </Space>
            </Form.Item>
            <Form.Item>
              <Form.Item name="remember" valuePropName="checked" noStyle>
                <Checkbox>Je souhaite recevoir des notifications par e-mail</Checkbox>
              </Form.Item>
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit" style={{ width: '100%', background: '#3498DB', border: 'none' }}>
                S'inscrire
              </Button>
            </Form.Item>
          </Form>
        </div>
      </Content>
    </Layout>
  );
};

export default Inscription;
