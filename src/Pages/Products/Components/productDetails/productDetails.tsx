/* eslint-disable react/display-name */
/* eslint-disable react/no-multi-comp */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/order */
// import svg icon form ../../../../Assets/Icons/Close.svg

import React from 'react';
// import Close from '../../../../Assets/Icons/Close.svg';
import { Chip } from '@mui/material';
import { Item, Divider, Heading } from '../../../../Themes/utilityThemes';
import { DataGrid } from '@mui/x-data-grid';
import * as Element from '../../../../Styles/Elements.ProductDetails';
import Icon from 'Assets/Icons/Icon';
import { motion } from 'framer-motion';
import Image from 'Assets/Image/Image';

interface ChipData {
  key: number;
  label: string;
}

const ProductDetails = () => {
  const [chipData, setChipData] = React.useState<readonly ChipData[]>([
    { key: 0, label: 'Red' },
    { key: 1, label: 'Blue' },
    { key: 2, label: 'Cyan' },
    { key: 3, label: 'Cyan' },
    { key: 4, label: 'Cyan' },
    { key: 5, label: 'Cyan' },
    { key: 6, label: 'Cyan' },
    { key: 7, label: 'Cyan' },
    { key: 7, label: 'Cyan' },
    { key: 7, label: 'Cyan' },
    { key: 7, label: 'Cyan' },
    { key: 7, label: 'Cyan' },
    { key: 7, label: 'Cyan' },
    { key: 7, label: 'Cyan' },
    { key: 7, label: 'Cyan' },
    { key: 7, label: 'Cyan' },
    { key: 7, label: 'Cyan' },
    { key: 7, label: 'Cyan' },
    { key: 7, label: 'Cyan' },
    { key: 7, label: 'Cyan' },
    { key: 7, label: 'Cyan' },
    { key: 7, label: 'Cyan' },
    { key: 7, label: 'Cyan' },
    { key: 7, label: 'Cyan' },
    { key: 7, label: 'Cyan' },
    { key: 7, label: 'Cyan' },
    { key: 7, label: 'Cyan' },
    { key: 7, label: 'Cyan' }
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

  const columns = [
    { field: 'id', headerName: 'ID', width: 5 },
    {
      renderCell: () => {
        return (
          <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
            <>
              <img alt="icon" src={Image.Profile} />
              <p>hello</p>
            </>
          </div>
        );
      },
      field: 'summary',
      headerName: 'Items Summary',
      width: 200,
      editable: false
    },
    {
      field: 'sellingPrice',
      headerName: 'Selling Price',
      width: 120,
      editable: true
    },
    {
      field: 'stockInHand',
      headerName: 'Stock In Hand',
      type: 'number',
      width: 130,
      editable: true
    }
  ];

  const rows = [
    {
      id: 1,
      summary: '',
      sellingPrice: 120,
      stockInHand: 10
    },
    {
      id: 1,
      summary: 'Jon',
      sellingPrice: 120,
      stockInHand: 10
    },
    {
      id: 1,
      summary: 'Jon',
      sellingPrice: 120,
      stockInHand: 10
    },
    {
      id: 1,
      summary: 'Jon',
      sellingPrice: 120,
      stockInHand: 10
    },
    {
      id: 1,
      summary: 'Jon',
      sellingPrice: 120,
      stockInHand: 10
    },
    {
      id: 1,
      summary: 'Jon',
      sellingPrice: 120,
      stockInHand: 10
    },
    {
      id: 1,
      summary: 'Jon',
      sellingPrice: 120,
      stockInHand: 10
    },
    {
      id: 1,
      summary: 'Jon',
      sellingPrice: 120,
      stockInHand: 10
    },
    {
      id: 1,
      summary: 'Jon',
      sellingPrice: 120,
      stockInHand: 10
    },
    {
      id: 1,
      summary: 'Jon',
      sellingPrice: 120,
      stockInHand: 10
    }
  ];

  return (
    <>
      <Element.Grid>
        <Element.Header>
          <Heading>
            Electronics
            {/* {products.data.map((item: any) => {
              return <p>{item.name}</p>;
            })} */}
          </Heading>
          <Item>3 Item(s)</Item>
        </Element.Header>
        <Element.Content>
          <Element.Wrapper>
            <Element.Headings>
              <Item>Unit</Item>
              <Item>brand</Item>
              <Item>color</Item>
            </Element.Headings>
            <Element.Data>
              <Item>30</Item>
              <Item>Xiaomi, Samsung, Dell, HP, Apple</Item>
              <Item>
                <Element.ColorWrapper>
                  <Element.Colors>
                    {chipData.map((data) => {
                      // let icon;
                      return (
                        <motion.div
                          whileHover={{ scale: 1.1, rotate: 0.5 }}
                          whileTap={{ scale: 0.9 }}>
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
                        </motion.div>
                      );
                    })}
                  </Element.Colors>
                </Element.ColorWrapper>
              </Item>
            </Element.Data>
          </Element.Wrapper>
          <Divider />
        </Element.Content>
        <Element.Body>
          <div style={{ margin: '10px 0', height: '55vh', width: '100%' }}>
            <div style={{ height: '55vh', width: '100%' }}>
              <DataGrid columns={columns} rows={rows} />
            </div>
          </div>
        </Element.Body>
      </Element.Grid>
    </>
  );
};

export default ProductDetails;
