import React, { useState, useCallback, useEffect } from 'react';
import { UploadOutlined, UserOutlined, HomeFilled, TeamOutlined, SplitCellsOutlined, UserAddOutlined } from '@ant-design/icons';
import { Layout, Menu, Button, theme } from 'antd';
const { Header, Content, Footer, Sider } = Layout;
import { Link } from 'react-router-dom';

import logo from '../assets/sma.png';
import MuridForm from '../components/MuridForm';
import TableMurid from '../components/TableMurid';
import TablePost from '../components/TablePost';
import PostForm from '../components/PostForm';
import axios from 'axios';

const KelolaPost = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const [users, setUsers] = useState([]);
  const [open, openchange] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [user, setUser] = useState({});
  const URL = import.meta.env.VITE_API_URL;
  const getUsers = useCallback(async () => {
    try {
      const response = await axios.get(`${URL}/api/v1/beritas`);
      setUsers(response?.data?.data);
    } catch (error) {
      console.log(error);
    }
  }, [URL]);

  const handleEdit = (user) => {
    setIsEdit(true);
    setUser(user);
  };

  const functionopenpopup = () => {
    openchange(true);
  };
  const closepopup = () => {
    openchange(false);
    setIsEdit(false);
  };

  const onCreate = () => {
    getUsers();
    openchange(false);
  };

  const onEdit = () => {
    getUsers();
    setIsEdit(false);
  };

  useEffect(() => {
    getUsers();
  }, [getUsers]);
  return (
    <Layout>
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
      >
        <div className="demo-logo-vertical">
          <div className="image-sidebar-sekolah">
            <img className="logo-sidebar" src={logo} alt="logo sekolah" />
          </div>
          <div className="name-sidebar-sekolah">
            <h5 className="logo-sidebar-name">SMA N 1 PULAU PANGGUNG</h5>
          </div>
        </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['/postingan']}
          items={[
            {
              key: '/dashboard',
              icon: <HomeFilled />,
              label: <Link to="/dashboard">Dashboard</Link>,
            },
            {
              key: '/guruandtendik',
              icon: <UserOutlined />,
              label: <Link to="/guruandtendik">Guru & Tendik</Link>,
            },
            {
              key: '/murid',
              icon: <TeamOutlined />,
              label: <Link to="/murid">Murid</Link>,
            },
            {
              key: '/kelas',
              icon: <SplitCellsOutlined />,
              label: <Link to="/kelas">Kelas</Link>,
            },
            {
              key: '/postingan',
              icon: <UploadOutlined />,
              label: <Link to="/postingan">Postingan</Link>,
            },
            {
              key: '/admin',
              icon: <UserAddOutlined />,
              label: <Link to="/admin">Admin</Link>,
            },
          ]}
        />
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            marginBottom: 100,
            background: '#6B8E23',
          }}
        >
          <div className="header-name-bar">
            <div className="logo-name-bar">
              <UserOutlined />
            </div>
            <div className="name-bar">susanti</div>
          </div>
          <div className="sub-header-name-bar">
            <div className="name-section-bar">Data Postingan</div>
          </div>
        </Header>
        <Content
          style={{
            margin: '24px 16px 0',
          }}
        >
          <div
            style={{
              padding: 24,
              minHeight: 'calc(100vh - 112px)',
              background: colorBgContainer,
            }}
          >
            <PostForm open={open} closepopup={closepopup} functionopenpopup={functionopenpopup} onCreate={onCreate} />
            <TablePost data={users} setUser={handleEdit} getUsers={getUsers} />
          </div>
        </Content>
        <Footer
          style={{
            textAlign: 'center',
          }}
        >
          Ant Design ©2023 Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};
export default KelolaPost;
