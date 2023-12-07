import { useState } from 'react';
import { UploadOutlined, UserOutlined, HomeFilled, TeamOutlined, SplitCellsOutlined, UserAddOutlined, LogoutOutlined, EditOutlined } from '@ant-design/icons';
import { Layout, Menu, theme, message } from 'antd';
const { Header, Content, Footer, Sider } = Layout;
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import axios from 'axios';
import { useCallback } from 'react';
import ProfileUserFormEdit from '../components/ProfileUserFormEdit';

import logo from '../assets/sma.png';
import profile from '../assets/default-user.jpg';

const Dashboard = () => {
  // eslint-disable-next-line
  const [percentage, setPercentage] = useState(50);
  const [user, setUser] = useState({
    name: Cookies.get('user_name'),
    photo: Cookies.get('user_photo'),
  });


  const navigate = useNavigate();
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const [isEdit, setIsEdit] = useState(false);

  const URL = import.meta.env.VITE_API_URL;

  const getUser = useCallback(async () => {
    try {
      const response = await axios.get(`${URL}/api/v1/users/${Cookies.get('user_id')}`);
      setUser(response?.data?.data);
      Cookies.set('user_photo', response?.data?.data?.photo);
      Cookies.set('user_name', response?.data?.data?.name);
    } catch (error) {
      console.log(error);
    }
  }, [URL]);


  const handleEdit = () => {
    setIsEdit(true);
  }

  const closepopup = () => {
    setIsEdit(false);
  };

  const onEdit = () => {
    getUser();
    setIsEdit(false);
  }

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
        <div className="demo-logo-vertical" style={{
          cursor: 'pointer',
        }}
          onClick={() => {
            navigate('/');
          }}
        >
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
          defaultSelectedKeys={['/dashboard']}
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
              key: '/kelolaprofile',
              icon: <UploadOutlined />,
              label: <Link to="/kelolaprofile">Profile</Link>,
            },
            {
              key: '/admin',
              icon: <UserAddOutlined />,
              label: <Link to="/admin">Admin</Link>,
            },
            {
              key: '/logout',
              icon: <LogoutOutlined />,
              label: <p>logout</p>,
              // make this on the bottom
              style: {
                position: 'absolute',
                bottom: 0,
              },
              onClick: () => {
                Cookies.remove('token');
                navigate('/login');
                message.success('Berhasil Logout');
              }
            },
          ]}
        />
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: '#6B8E23',
          }}
        >
          <div className="header-name-bar">
            <div className="logo-name-bar">
              <UserOutlined />
            </div>
            <div className="name-bar">{user?.name}</div>
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
            <div className="header-container-dashboard">
              <div className="header-dashboard">
                <div className="header-text-dashboard">
                  <div className="header-name-dashboard">
                    <h3>Dashboard</h3>
                  </div>
                  <div className="header-line-dashboard">
                    <hr className="line-header-dashboard" />
                    <hr className="line-sub-header-dashboard" />
                  </div>
                </div>
                <ProfileUserFormEdit open={isEdit} closepopup={closepopup} onEdit={onEdit} />
                <div className="profile-pengguna-dashboard">
                  <div className="profile-pengguna-text-dashboard">
                    <div>
                      <h5>Profil Pengguna</h5>
                    </div>
                  </div>
                  <div className="profile-pengguna-ubah-password-dashboard" style={
                    {
                      cursor: 'pointer',
                    }

                  }
                    onClick={handleEdit}
                  >
                    <div className="icon-lock-dashboard">
                      <EditOutlined />
                    </div>
                    <div>
                      <span className="text-ubah-password">Ubah gambar profile</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="content-container-dashboard">
              <div className="card-bio-dashboard">
                <div className="img-card-bio-dashboard">
                  <img className="image-card-bio-dashboard" src={user?.photo ? user?.photo : profile} alt="gambar user" />
                </div>
                <div className="bio-card-data-dashboard">
                  <hr />
                  <div className="name-card-bio-dashboard">
                    <span className="NAME">Nama</span>
                  </div>
                  <div className="value-name-card-bio-dashboard">
                    <span className="value-name">{user?.name}</span>
                  </div>
                </div>
              </div>
              <div className="container-card-data-content-dashboard">
                <div className="container-card-data-dashboard">
                  <div className="card-header-data-dashboard">
                    <span className="name-header-data-dashboard">2023/2024</span>
                    <span className="name-content-data-dashboard">Tahun Ajaran</span>
                  </div>
                  <div className="card-header-data-dashboard">
                    <span className="name-header-data-dashboard">2023/2024</span>
                    <span className="name-content-data-dashboard">Tahun Ajaran</span>
                  </div>
                  <div className="card-header-data-dashboard">
                    <span className="name-header-data-dashboard">2023/2024</span>
                    <span className="name-content-data-dashboard">Tahun Ajaran</span>
                  </div>
                  <div className="card-header-data-dashboard">
                    <span className="name-header-data-dashboard">2023/2024</span>
                    <span className="name-content-data-dashboard">Tahun Ajaran</span>
                  </div>
                </div>
                <div className="container-card-statistik-dashboard">
                  <div className="card-statistik-murid-dashboard">
                    <div className="header-statistik-murid-dashboard">
                      <h5>Statistik Data Murid</h5>
                    </div>
                    <div className="content-statistik-murid-laki-dashboard">
                      <span>Murid Laki-laki :</span>
                      <span>xx</span>
                      <div className="percentage-bar">
                        <div className="progress" style={{ width: `${percentage}%` }}>
                          {percentage}%
                        </div>
                      </div>
                    </div>

                    <div className="content-statistik-murid-perempuan-dashboard">
                      <span>Murid Perempuan :</span>
                      <span>xx</span>
                      <div className="percentage-bar">
                        <div className="progress" style={{ width: `${percentage}%` }}>
                          {percentage}%
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card-statistik-gurutendik-dashboard">
                    <div className="header-statistik-murid-dashboard">
                      <h5>Statistik Data Guru & Tendik</h5>
                    </div>
                    <div className="content-statistik-murid-laki-dashboard">
                      <span>Guru :</span>
                      <span>xx</span>
                      <div className="percentage-bar">
                        <div className="progress" style={{ width: `${percentage}%` }}>
                          {percentage}%
                        </div>
                      </div>
                    </div>

                    <div className="content-statistik-murid-perempuan-dashboard">
                      <span>Tendik :</span>
                      <span>xx</span>
                      <div className="percentage-bar">
                        <div className="progress" style={{ width: `${percentage}%` }}>
                          {percentage}%
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Content>
        <Footer
          style={{
            textAlign: 'center',
          }}
        >
          SMA 1 PULAU PANGGUNG ©2023 Created by Intelectual Explorers
        </Footer>
      </Layout>
    </Layout>
  );
};
export default Dashboard;
