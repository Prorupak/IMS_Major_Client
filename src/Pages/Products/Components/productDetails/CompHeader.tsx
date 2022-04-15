/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */

import { ToggleContext } from 'Hooks/useToggle';
import React from 'react';
import { useLocation, useNavigate } from 'react-router';
import styled from 'styled-components';
import { Button, Menu as MenuAntd, PageHeader } from 'antd';
import useDelete from 'Hooks/useDelete';

const StyledMenuAntd = styled(MenuAntd)`
  && {
    .ant-menu-horizontal {
      padding: var(--spacing-5) var(--spacing-10);
      font-size: var(--font-size-14);
      background-color: red;
    }
  }
  position: relative;
  left: -10px;
  bottom: -3px;
`;
const CompHeader = ({ current, handleClicked, info }: any) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  console.log('location.pathName', location.pathname);

  // console.log('compheader', info)

  const { id } = info

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const { handleDelete } = useDelete(
    `http://localhost:9001/api/categories/${id}`
  );



  const onNavigate = () => {
    navigate(`/product/${id}`, { state: { lol: location.pathname } });
  }

  return (
    <>
      <PageHeader
        className="site-page-header-responsive"
        onBack={() => window.history.back()}
        style={{
          position: 'relative',
          zIndex: 1,
          padding: '10px',
        }}
        title="Title"
        avatar={{
          src: 'https://gw.alipayobjects.com/zos/rmsportal/nxkuOJlFJuAUhzlMTCEe.png',
          alt: 'avatar',
        }}
        extra={[
          <Button 
            size="small"
            style={{
              borderRadius: "5px"
            }}
            key="2">Edit</Button>,
          <Button 
            size="small"
            style={{
              borderRadius: "5px"
            }}
            key="1" type="primary">
            Adjust Stock
          </Button>,
        ]}
        footer={
      <StyledMenuAntd
        mode="horizontal"
        onClick={handleClicked}
        selectedKeys={[current]}
        style={{
          fontSize: '13px',
          lineHeight: '20px'
        }}>
        <MenuAntd.Item key="overview" style={{ padding: '10px' }}>
          Overview
        </MenuAntd.Item>
        <MenuAntd.Item key="transaction" style={{ padding: '10px' }}>
          Transactions
        </MenuAntd.Item>
        <MenuAntd.Item key="history" style={{ padding: '10px' }}>
          History
        </MenuAntd.Item>
      </StyledMenuAntd>
    }
      >
      </PageHeader>

    </>
  );
};

export default CompHeader;































