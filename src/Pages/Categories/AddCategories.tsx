import PageTips from 'Components/shared/PageTips';
import { motion } from 'framer-motion';
import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Icon as Icons, Title } from 'Themes/utilityThemes';

import Icon from 'Assets/Icons/Icon';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import usePost from 'Hooks/usePost';
import { useLocation, useParams } from 'react-router';
import { ICategories } from 'Interfaces/Interfaces';
import { QuickCreate } from 'Components/main/Navbar/QuickCreate/Elements.QuickCreate';
import { CategoryContext } from 'context/CategoryContext';
import usePut from 'Hooks/usePut';
import CategoryForm from './CategoryForm';
import UpdateCategories from './UpdateCategories';

const Form = styled.form`
  height: 100vh;
`;

const Grid = styled(motion.div).attrs({})`
  display: grid;
  grid-template-areas:
    'header'
    'content'
    'footer';
  grid-template-rows: 45px auto 55px;
  grid-template-columns: 100%;
  height: 100vh;
`;

const Header = styled(motion.div).attrs({})`
  grid-area: header;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid rgba(0, 0, 0, 0.07);
  padding: 0 var(--spacing-15);

  .rightSection {
    display: flex;
    align-items: center;
    gap: var(--spacing-10);
  }
`;

const Content = styled(motion.div).attrs({})`
  grid-area: content;
  min-height: 100%;
  background-color: #fbfafa;
`;

const Hr = styled.hr`
  height: var(--spacing-18);
  color: rgba(0, 0, 0, 0.3);
`;

const Footer = styled(motion.div).attrs({})`
  position: sticky;
  bottom: 0;
  display: flex;
  align-items: center;
  gap: var(--spacing-10);
  padding: 0 var(--spacing-15);
  grid-area: footer;
  border-top: 1px solid rgba(0, 0, 0, 0.07);
`;

const AddCategories = ({ children }: any) => {
  const location = useLocation();
  const { id } = useParams();

  const { data, update } = React.useContext(CategoryContext);

  const PData = {
    name: data.name,
    description: data.description,
    multipleItems: data.multipleItems
  };

  console.log('datPData===>', PData);

  // const { id } = update;

  // console.log('id', id);

  const UData = {
    name: update.name,
    description: update.description,
    multipleItems: update.multipleItems
  };

  const { handleSubmit } = usePost(
    'http://localhost:9001/api/categories',
    PData,
    '/details'
  );
  const { handleSubmit: handlePut } = usePut(
    `http://localhost:9001/api/categories/${id}`,
    id ? UData : PData,
    '/details'
  );

  // const id = update;
  // console.log('update', update);

  return (
    <Form onSubmit={id ? handlePut : handleSubmit}>
      <Grid>
        <Header>
          <Title>New Product Category</Title>
          <div className="rightSection">
            <PageTips />
            <Hr />
            <Link to="/category/details">
              <Icons src={Icon.Close} />
            </Link>
          </div>
        </Header>
        <Content>{children}</Content>
        <Footer>
          <Button
            color="primary"
            // disabled={!postData.name}
            size="small"
            sx={{
              boxShadow: 'none',
              borderRadius: '6px',
              backgroundColor: 'var(--color-secondary)',
              '&:hover': {
                boxShadow: 'none'
              }
            }}
            type="submit"
            variant="contained">
            {id ? 'Update' : 'Save'}
          </Button>
          <Link to="/category/details">
            <Button
              color="primary"
              size="small"
              sx={{
                boxShadow: 'none',
                borderRadius: '6px',
                background: '#f5f5f5',
                border: '1px solid #e0e0e0',
                color: 'var(--color-primary-dark)',
                '&:hover': {
                  boxShadow: 'none'
                }
              }}
              variant="contained">
              Cancel
            </Button>
          </Link>
        </Footer>
      </Grid>
    </Form>
  );
};

export default AddCategories;















































