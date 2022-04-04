/* eslint-disable no-confusing-arrow */
/* eslint-disable react/jsx-curly-newline */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable react/no-array-index-key */
import React from 'react';
import { TreeItem, TreeView } from '@mui/lab';
import { Link, NavLink } from 'react-router-dom';
import { MdChevronRight, MdKeyboardArrowDown } from 'react-icons/md';
import styled from 'styled-components';
import { Box } from '@mui/system';
import Icon from '../../../Assets/Icons/Icon';

const StyledNav = styled.nav`
  position: relative;
`;

const DashSection = styled.div`
  position: relative;
`;

const ContentWrapper = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  gap: var(--spacing-5);
  padding: var(--spacing-8) var(--spacing-15);

  /* & > a:not(.activeLink): hover {
    color: var(--color-primary);
  } */

  /* &:hover {
    background-color: #1d2c38;
  } */
  &:focus-visible {
    background-color: #1d2c38;
  }
`;

const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  color: #fff;
  gap: var(--spacing-5);
`;

const StyledNavLink = styled(NavLink).attrs({
  className: `${({ isActive }: any) =>
    [isActive ? 'active' : null].filter(Boolean).join(' ')}`,
  style: ({ isActive }: any) => ({
    color: isActive ? '#fff' : '#fff'
  }),
  '&.active': {
    background: '#fff'
  }
})`
  display: flex;
  align-items: center;
  color: #fff;
  gap: var(--spacing-5);
`;

const MapWrapper = styled.div<{ toggle: boolean }>`
  cursor: pointer;
  position: relative;
  display: flex;
  align-items: center;
  /* padding: var(--spacing-8) var(--spacing-15); */
  padding: ${({ toggle }) =>
    toggle ? 'var(--spacing-8) var(--spacing-15)' : '16px var(--spacing-15)'};
  /* gap: var(--spacing-50); */
  width: 100%;
  .treeView {
    position: absolute;
    top: 8px;
  }
`;

const ListItemIcon = styled.img`
  width: 24px;
  height: 24px;
`;

const Button = styled(NavLink)``;

const PurchaseWrapper = styled.div``;

const IntWrapper = styled.div``;

const DocumentWrapper = styled.div``;

const StyledTreeView = styled(TreeView)`
  .MuiTreeView-root {
    height: 0px;
  }
  .MuiTreeItem-group {
    display: flex;
    gap: 15px;
    padding: 0;
    margin-left: 0;
    &:focus {
      background-color: #1d2c38;
    }
  }
  .MuiTreeItem-content {
    padding: 0;
    margin-left: 0;
    display: flex;
    gap: 15px;
    flex-direction: row-reverse;
  }

  .MuiTreeItem-content .MuiTreeItem-label {
    padding: 0 0 0 17px;
  }
  // padding to second child
  .MuiTreeItem-content .MuiTreeItem-label {
  }

  .MuiTreeItem-content.Mui-selected {
    background: none;
    &:hover {
      background: none;
    }
  }
  .MuiTreeItem-content.Mui-selected.Mui-focused {
    background: none;
    &:hover {
      background-color: none;
    }
  }
`;

const StyledTreeItem = styled(TreeItem)`
  .MuiTreeItem-content .MuiTreeItem-iconContainer {
    /* display: none; */
  }
  /* .MuiTreeItem-content .MuiTreeItem-label {
    font-size: 5px;
  } */
`;

interface Props {
  toggle: boolean;
  toggleHandle: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

const Sidebar: React.FC<Props> = ({ toggle, toggleHandle }) => {
  console.log('value===', toggle);
  // react-checkbox-tree
  const [checked, setChecked] = React.useState([]);
  const [expanded, setExpanded] = React.useState([]);
  return (
    <StyledNav>
      <StyledNavLink className="activeLink" to="/dashboard">
        <DashSection>
          <MapWrapper toggle={toggle}>
            <ListItemIcon
              src={Icon.Dashboard}
              style={toggle ? { position: 'absolute', top: '15px' } : {}}
            />
            {toggle ? (
              <ContentWrapper style={{ margin: '0 0 0 15px' }}>
                <StyledLink to="/dashboard">Dashboard</StyledLink>
              </ContentWrapper>
            ) : null}
          </MapWrapper>
        </DashSection>
      </StyledNavLink>
      <MapWrapper toggle={toggle}>
        <ListItemIcon
          src={Icon.Inventory}
          style={toggle ? { position: 'absolute', top: '16px' } : {}}
        />
        {toggle ? (
          <ContentWrapper>
            <StyledTreeView
              aria-label="file system navigator"
              defaultCollapseIcon={<MdKeyboardArrowDown />}
              defaultExpandIcon={<MdChevronRight />}
              multiSelect
              sx={{
                flexGrow: 1,
                maxWidth: 400,
                overflowY: 'auto'
              }}>
              <StyledTreeItem label="Inventory" nodeId="1">
                <StyledNavLink to="/products">
                  <StyledTreeItem
                    label="Products"
                    nodeId="2"
                    sx={{
                      paddingTop: '5px',
                      '&:hover': {
                        backgroundColor: '#7cc4ff'
                      }
                    }}
                  />
                </StyledNavLink>
                <StyledNavLink to="/details">
                  <StyledTreeItem
                    label="Categories"
                    nodeId="3"
                    sx={{
                      paddingTop: '5px',
                      fontSize: '14px'
                    }}
                  />
                </StyledNavLink>
                <StyledTreeItem
                  label="Adjust Inventory"
                  nodeId="4"
                  sx={{
                    paddingTop: '5px',
                    fontSize: '8px'
                  }}
                />
              </StyledTreeItem>
            </StyledTreeView>
          </ContentWrapper>
        ) : null}
      </MapWrapper>
      <MapWrapper toggle={toggle}>
        <ListItemIcon
          src={Icon.SalesSide}
          style={toggle ? { position: 'absolute', top: '16px' } : {}}
        />
        {toggle ? (
          <ContentWrapper>
            <StyledTreeView
              aria-label="file system navigator"
              defaultCollapseIcon={<MdKeyboardArrowDown />}
              defaultExpandIcon={<MdChevronRight />}
              multiSelect
              sx={{
                flexGrow: 1,
                maxWidth: 400,
                overflowY: 'auto'
              }}>
              <StyledTreeItem label="Sales" nodeId="1">
                <StyledNavLink to="/customer">
                  <StyledTreeItem
                    label="Customer"
                    nodeId="2"
                    sx={{
                      paddingTop: '5px'
                    }}
                  />
                </StyledNavLink>
                <StyledNavLink to="/SalesOrder">
                  <StyledTreeItem
                    label="Sales Order"
                    nodeId="3"
                    sx={{
                      paddingTop: '5px'
                    }}
                  />
                </StyledNavLink>
                <StyledNavLink to="/SalesInvoice">
                  <StyledTreeItem
                    label="Customer Payment"
                    nodeId="4"
                    sx={{
                      paddingTop: '5px'
                    }}
                  />
                </StyledNavLink>
              </StyledTreeItem>
            </StyledTreeView>
          </ContentWrapper>
        ) : null}
      </MapWrapper>
      <PurchaseWrapper>
        <MapWrapper toggle={toggle}>
          <ListItemIcon
            // className={toggle ? 'treeView' : 'NTreeView'}
            src={Icon.PurchaseSide}
            style={toggle ? { position: 'absolute', top: '16px' } : {}}
          />
          {toggle ? (
            <ContentWrapper>
              <StyledTreeView
                aria-label="file system navigator"
                defaultCollapseIcon={<MdKeyboardArrowDown />}
                defaultExpandIcon={<MdChevronRight />}
                multiSelect
                sx={{
                  flexGrow: 1,
                  maxWidth: 400,
                  overflowY: 'auto'
                }}>
                <StyledTreeItem label="Purchases" nodeId="1">
                  <StyledNavLink to="/vendor">
                    <StyledTreeItem
                      label="Vendor"
                      nodeId="2"
                      sx={{
                        paddingTop: '5px'
                      }}
                    />
                  </StyledNavLink>
                  <StyledNavLink to="/PurchaseOrder">
                    <StyledTreeItem
                      label="Purchase Order"
                      nodeId="3"
                      sx={{
                        paddingTop: '5px'
                      }}
                    />
                  </StyledNavLink>
                  <StyledNavLink to="/bills">
                    <StyledTreeItem
                      label="Bills"
                      nodeId="4"
                      sx={{
                        paddingTop: '5px'
                      }}
                    />
                  </StyledNavLink>
                </StyledTreeItem>
              </StyledTreeView>
            </ContentWrapper>
          ) : null}
        </MapWrapper>
      </PurchaseWrapper>
      <IntWrapper>
        <MapWrapper toggle={toggle}>
          <ListItemIcon
            src={Icon.Reports}
            style={toggle ? { position: 'absolute', top: '15px' } : {}}
          />
          {toggle ? (
            <ContentWrapper style={{ margin: '0 0 0 15px' }}>
              <StyledLink to="/Reports">Reports</StyledLink>
            </ContentWrapper>
          ) : null}
        </MapWrapper>
      </IntWrapper>
      <DocumentWrapper>
        <MapWrapper toggle={toggle}>
          <ListItemIcon
            src={Icon.Documents}
            style={toggle ? { position: 'absolute', top: '16px' } : {}}
          />
          {toggle ? (
            <ContentWrapper style={{ margin: '0 0 0 15px' }}>
              <StyledLink to="/documents">Document</StyledLink>
            </ContentWrapper>
          ) : null}
        </MapWrapper>
      </DocumentWrapper>
    </StyledNav>
  );
};

export default Sidebar;
















