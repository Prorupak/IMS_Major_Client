
import React from 'react';
import { BsTrash } from 'react-icons/bs';
import { Icon as Icons, SmallIcon, Text } from 'Themes/utilityThemes';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { TextField } from '@mui/material';

import { useInput } from 'Hooks/useInput';
import Icon from 'Assets/Icons/Icon';
import { useLocation, useNavigate, useParams } from 'react-router';
import axios from 'axios';
import { CategoryContext } from 'context/CategoryContext';

const Grid = styled(motion.div).attrs({})`
  display: grid;
  grid-template-areas:
    'left right'
    'bottom bottom';
  grid-template-columns: fit-content auto;
  grid-template-rows: 100% auto;
  .image {
    grid-area: right;
  }
`;

const Top = styled(motion.div).attrs({})`
  display: flex;
  flex-flow: column;
  /* align-items: center; */
  gap: var(--spacing-20);

  padding: var(--spacing-15);
  padding-right: var(--spacing-40);
`;

const ItemWrapper = styled(motion.div).attrs({})`
  display: flex;
  align-items: center;
  min-height: 10px;
  grid-area: left;
  gap: 100px;
`;

const Error = styled(motion.div)<{ error: any }>`
  display: ${({ error }) => (error ? 'flex' : 'none')};
  align-items: center;
  justify-content: space-between;
  width: 20%;
  padding: var(--spacing-10);
  margin: 0 var(--spacing-5);
  max-width: 50%;
  height: fit-content;
  max-height: 300px;
  background: var(--color-error-back);
`;

const UpdateCategories = () => {
  const { updateData } = React.useContext(CategoryContext);

  const [values, setValues] = React.useState<any[]>([]);
  const [multiple, setMultiple] = React.useState<any>({});
  const { id } = useParams();
  console.log('id', id);

  const fetchData = async () => {
    try {
      const res = await axios.get(`http://localhost:9001/api/categories/${id}`);
      setValues([res.data]);
    } catch (error) {
      console.log(error);
    }
  };

  const multipleItem = values.map((item: any) => item.multipleItems);

  React.useEffect(() => {
    fetchData();
    // eslint-disable-next-line array-callback-return
    multipleItem.map((item: any) => {
      if (Array.isArray(item)) {
        setMultiple({ item });
      }
    });
    return () => {};
  }, [id]);
  console.log('values===>', values);
  console.log('multiple===>', multiple);

  const catRef = React.useRef({} as HTMLInputElement);
  const desRef = React.useRef({} as HTMLInputElement);

  const category = useInput(
    values.length > 0 ? values.map((item: any) => item.name) : ''
  );
  console.log('category', category.value);
  const [validCategory, setValidCategory] = React.useState(false);

  const description = useInput('');

  React.useEffect(() => {
    catRef.current.focus();
    desRef.current.focus();
  }, []);

  const [error, setError] = React.useState(false);

  const Cdata = {
    name: category.value,
    description: description.value,
    id
  };

  console.log('Cdata', Cdata);

  React.useEffect(() => {
    updateData(Cdata);
  }, [category.value, description.value, id]);

  // const handleInputChange = (e: any, index: any) => {
  //   // const { name, value } = e.target;
  //   const list = [...inputList];
  //   list[index][e.target.name] = ;
  //   setInputList(list);
  // };

  return (
    <>
      <Grid>
        {error ? (
          <Error error={error}>
            <p>error</p>
            <Icons
              onClick={() => setError(!error)}
              src={Icon.Close}
              style={{ height: '10px', width: '10px' }}
            />
          </Error>
        ) : null}
        <Top>
          <ItemWrapper>
            <Text textColor="var(--color-required)" width="10%">
              Category Name*
            </Text>
            <TextField
              ref={catRef}
              defaultValue={values.map((item: any) => item.name)}
              label={null}
              //     placeholder={values?.name}
              // {...category.inputAttrs}
              onChange={category.inputAttrs.onChange}
              size="small"
              sx={{ width: '820px' }}
              value={category.value || values.map((item: any) => item.name)}
              variant="standard"
            />
          </ItemWrapper>
          <ItemWrapper>
            <Text textColor="var(--color-primary-dark)" width="10%">
              Description
            </Text>
            <TextField
              ref={desRef}
              aria-label="minimum height"
              // {...description.inputAttrs}
              label={null}
              minRows={2}
              onChange={description.inputAttrs.onChange}
              style={{
                width: '820px'
              }}
              value={values.map((item: any) => item.description)}
              variant="standard"
            />
          </ItemWrapper>
        </Top>
      </Grid>
    </>
  );
};

export default UpdateCategories;





























