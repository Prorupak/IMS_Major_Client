/* eslint-disable import/no-unresolved */
/* eslint-disable import/order */
import React from 'react';
import { Chip, ListItem } from '@mui/material';
import {
  Item,
  Divider,
  Heading,
  Wrapper,
  ItemWrapper
} from '../../../../Themes/utilityThemes';
// import axios from 'axios';
// import Context from '../../../../contexts/context';
// import { GET_PRODUCTS } from '../../../../constants/actionTypes';
import * as Element from '../../../../Styles/Elements.ProductDetails';
import Icon from 'Assets/Icons/Icon';

interface ChipData {
  key: number;
  label: string;
}

const ProductDetails = () => {
  // const { products, productsDispatch } = React.useContext(Context);
  // const fetchData = async () => {
  //   try {
  //     const { data } = await axios.get('http://localhost:9001/api/products');
  //     console.log('category CSP===', data);
  //     productsDispatch({ type: GET_PRODUCTS, payload: { data } });
  //   } catch (error) {
  //     console.log('error', error);
  //   }
  // };

  // React.useEffect(() => {
  //   fetchData();
  // }, []);

  const [chipData, setChipData] = React.useState<readonly ChipData[]>([
    { key: 0, label: 'Red' },
    { key: 1, label: 'Blue' },
    { key: 2, label: 'Cyan' },
    { key: 2, label: 'Cyan' },
    { key: 2, label: 'Cyan' },
    { key: 2, label: 'Cyan' },
    { key: 2, label: 'Cyan' }
  ]);

  const handleDelete = (chipToDelete: ChipData) => {
    return () => {
      setChipData((chips) => {
        return chips.filter((chip) => {
          return chip.key !== chipToDelete.key;
        });
      });
    };
  };

  return (
    <>
      <Element.Grid>
        <Element.Header>
          <Heading>Category Name</Heading>
          <Item>3 Item(s)</Item>
          <Divider />
        </Element.Header>
        <Element.Content>
          <Wrapper>
            <ItemWrapper>
              <Item>Unit</Item>
              <Item>30</Item>
            </ItemWrapper>
            <ItemWrapper>
              <Item>brand</Item>
              <Item>Xiaomi</Item>
            </ItemWrapper>
            <ItemWrapper>
              <Item>color</Item>
              <Element.ColorWrapper>
                <Element.Colors>
                  {chipData.map((data) => {
                    // let icon;
                    return (
                      <ListItem key={data.key}>
                        <Chip
                          color="primary"
                          icon={Icon.Close}
                          label={data.label}
                          onDelete={
                            data.label === 'React'
                              ? undefined
                              : handleDelete(data)
                          }
                          size="small"
                          sx={{
                            backgroundColor: 'var(--color-secondary)',
                            borderRadius: '7px'
                          }}
                        />
                      </ListItem>
                    );
                  })}
                </Element.Colors>
              </Element.ColorWrapper>
            </ItemWrapper>
          </Wrapper>
        </Element.Content>
        <Element.Body>body</Element.Body>
      </Element.Grid>
    </>
  );
};

export default ProductDetails;
