import React from 'react';
import { Layout, Menu } from 'antd';
import {
  MailOutlined,
  HomeOutlined,
  UserAddOutlined,
  LoginOutlined,
} from '@ant-design/icons';
import { Link } from 'react-router-dom';

const { Header } = Layout;

const MenuComponent = () => {
  return (
    <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
        <Menu.Item key="1" icon={<HomeOutlined />}>
          <Link to="/index">Accueil</Link>
        </Menu.Item>
        <Menu.Item key="2" icon={<MailOutlined />}>
          <Link to="/participation">Participation</Link>
        </Menu.Item>
        <Menu.Item key="5" icon={<MailOutlined />}>
          <Link to="/contact">Contact</Link>
        </Menu.Item>

        <Menu.Item key="group1" icon={<UserAddOutlined />} style={{ marginLeft: 'auto' }}>
          <Link to="/inscription">Inscription</Link>
        </Menu.Item>
        <Menu.Item key="group1" icon={<LoginOutlined />}>
          <Link to="/login">Connexion</Link>
        </Menu.Item>
      </Menu>
    </Header>
  );
};

export default MenuComponent;
