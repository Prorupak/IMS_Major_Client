/* eslint-disable operator-linebreak */
/* eslint-disable react/no-array-index-key */
/* eslint-disable indent */
/* eslint-disable react/jsx-curly-newline */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
/* eslint-disable prefer-object-spread */
/* eslint-disable react/no-multi-comp */
/* eslint-disable react/display-name */
import React from 'react';
import { BsTrash } from 'react-icons/bs';
import { TiPlus } from 'react-icons/ti';
import { Icon as Icons, SmallIcon, Text } from 'Themes/utilityThemes';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import {
  Autocomplete,
  Checkbox,
  Chip,
  TextareaAutosize,
  TextField
} from '@mui/material';

import { useInput } from 'Hooks/useInput';
import Icon from 'Assets/Icons/Icon';
import { useLocation, useNavigate, useParams } from 'react-router';
import useFetch from 'Hooks/useFetch';
import axios from 'axios';
import { CategoryContext } from 'context/CategoryContext';
import AddCategories from './AddCategories';

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

const Wrapper = styled(motion.div).attrs({})`
  display: flex;
  flex-flow: column;
  gap: var(--spacing-15);
`;

const AddAttributes = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: var(--spacing-5);
  .attrs {
    font-size: var(--fSize-7);
  }
`;

const ContentWrapper = styled.div`
  /* position: relative;
  left: 11px; */
  display: flex;
  align-items: center;
  gap: var(--spacing-40);
`;

const Trash = styled(BsTrash)`
  cursor: pointer;
  position: relative;
  top: 10px;
  right: 15px;
`;

const ItemWrapper = styled(motion.div).attrs({})`
  display: flex;
  align-items: center;
  min-height: 10px;
  grid-area: left;
  gap: 100px;
`;

const CheckBoxWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 3px 0;
  .terms-content {
    font-size: var(--fSize-6);
    color: var(--color-placeholder);
  }
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

  const [checked, setChecked] = React.useState(true);
  const [values, setValues] = React.useState<any[]>([]);
  const [multiple, setMultiple] = React.useState<any>({});
  const { id } = useParams();

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
  const attrsRef = React.useRef({} as HTMLInputElement);
  const optionsRef = React.useRef({} as HTMLInputElement);

  const category = useInput('');
  const [validCategory, setValidCategory] = React.useState(false);

  const attrs = useInput('');

  const option = useInput([]);

  const description = useInput('');

  const [inputList, setInputList] = React.useState([
    {
      attribute: attrs.value,
      option: option.value
    }
  ]);

  React.useEffect(() => {
    catRef.current.focus();
    desRef.current.focus();
    attrsRef.current.focus();
    optionsRef.current.focus();
  }, []);

  const [error, setError] = React.useState(false);

  console.log('attrs', attrs.value);
  console.log('options', option.value);

  const Cdata = {
    name: category.value,
    description: description.value,
    multipleItems: {
      attribute: attrs.value,
      options: option.value
    },
    id
  };

  React.useEffect(() => {
    updateData(Cdata);
  }, [category.value, description.value, attrs.value, option.value, id]);

  const handleRemoveClick = (index: any) => {
    const list = [...inputList];
    list.splice(index, 1);
    setInputList(list);
  };

  const handleAddClick = () => {
    setInputList([
      ...inputList,
      {
        attribute: attrs.value,
        option: option.value
      }
    ]);
  };

  // const handleInputChange = (e: any, index: any) => {
  //   // const { name, value } = e.target;
  //   const list = [...inputList];
  //   list[index][e.target.name] = ;
  //   setInputList(list);
  // };

  return (
    <AddCategories>
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
              //     placeholder={values?.name}
              //     {...category.inputAttrs.onChange}
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
              //     {...description.inputAttrs}
              aria-label="minimum height"
              minRows={2}
              onChange={description.inputAttrs.onChange}
              style={{
                width: '820px'
              }}
              value={
                description.value || values.map((item: any) => item.description)
              }
              variant="standard"
            />
          </ItemWrapper>
          <ItemWrapper style={{ alignItems: 'start' }}>
            <Text
              style={{ position: 'relative', top: '10px' }}
              textColor="var(--color-required)"
              width="10%">
              Multiple Items?*
            </Text>
            <Wrapper>
              <CheckBoxWrapper>
                <Checkbox
                  aria-describedby="cNote"
                  onChange={(e: any) => {
                    setChecked(!checked);
                  }}
                  size="small"
                  value={checked}
                />
                <p className="terms-content">Create attributes and options</p>
              </CheckBoxWrapper>
              {checked
                ? inputList.map((x, i) => {
                    return (
                      <>
                        <ContentWrapper>
                          <ItemWrapper
                            style={{
                              display: 'flex',
                              flexDirection: 'column',
                              alignItems: 'start',
                              gap: '10px'
                            }}>
                            <Text textColor="var(--color-required)" width="10%">
                              Attribute*
                            </Text>
                            <TextField
                              ref={attrsRef}
                              // {...attrs.inputAttrs}
                              aria-label="minimum height"
                              onChange={attrs.inputAttrs.onChange}
                              size="small"
                              style={{
                                width: '370px'
                              }}
                              value={
                                // eslint-disable-next-line operator-linebreak
                                attrs.value ||
                                values.map((item: any) =>
                                  item.multipleItems.map(
                                    (items: any) => items.attribute
                                  )
                                )
                              }
                              variant="outlined"
                            />
                          </ItemWrapper>
                          <ItemWrapper
                            style={{
                              display: 'flex',
                              flexDirection: 'column',
                              alignItems: 'start',
                              gap: '10px'
                            }}>
                            <Text textColor="var(--color-required)" width="10%">
                              options*
                            </Text>

                            <Autocomplete
                              // defaultValue={[top100Films[13].title]}
                              freeSolo
                              id="tags-filled"
                              multiple
                              onChange={
                                (e: any, value: any) =>
                                  option.setValue((state: any) => value)
                                // eslint-disable-next-line react/jsx-curly-newline
                              }
                              options={[
                                values.map((item: any) =>
                                  item.multipleItems.map(
                                    (items: any) => items.options
                                  )
                                )
                              ]}
                              renderInput={(params: any) => (
                                <TextField
                                  ref={optionsRef}
                                  {...params}
                                  size="small"
                                  style={{
                                    width: '370px'
                                  }}
                                  variant="outlined"
                                />
                              )}
                              renderTags={(value: any, getTagProps: any) =>
                                option.value.map((opt: any, index: any) => (
                                  <Chip
                                    label={
                                      opt ||
                                      values.map((item: any) =>
                                        item.multipleItems.map(
                                          (items: any) => items.options
                                        )
                                      )
                                    }
                                    // {...option.inputAttrs}
                                    sx={{
                                      background:
                                        'var(--color-secondary-light)',
                                      color: 'var(--color-primary-dark)'
                                    }}
                                    variant="outlined"
                                    {...getTagProps({ index })}
                                  />
                                ))
                              }
                            />
                          </ItemWrapper>
                          {inputList.length !== 1 && (
                            <Trash
                              color="var(--color-required)"
                              onClick={handleRemoveClick}
                              size={18}
                            />
                          )}
                        </ContentWrapper>
                      </>
                    );
                  })
                : null}
              {checked && (
                <AddAttributes onClick={handleAddClick}>
                  <TiPlus color="var(--color-secondary)" />
                  <p className="attrs">Add More Attributes</p>
                </AddAttributes>
              )}
            </Wrapper>
          </ItemWrapper>
        </Top>
      </Grid>
    </AddCategories>
  );
};

export default UpdateCategories;

