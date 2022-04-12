import React from "react";
import { Icon as Icons, Item, SmallIcon, Text } from "Themes/utilityThemes";
import styled from "styled-components";
import { motion } from "framer-motion";
import {
  Autocomplete,
  Checkbox,
  Chip,
  createFilterOptions,
  Divider,
  FormControl,
  InputLabel,
  ListSubheader,
  MenuItem,
  Select,
  TextareaAutosize,
  TextField,
} from "@mui/material";

import { useForm } from 'react-hook-form';

import Icon from "Assets/Icons/Icon";
import useFetch from "Hooks/useFetch";
import { ReactHookForm } from 'context/ReactHookForms'
import { IProductsDetails } from "Interfaces/Interfaces";
import TopSection from "./Components/TopSection";
import MiddleSection from "./Components/MiddleSection";
import TrackSection from "./Components/TrackSection";
import BottomSection from "./Components/BottomSection";
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';

import { Upload, message, Button, Modal } from 'antd';

const { Dragger } = Upload;


const Wrapper = styled(motion.div).attrs({})`
 position: relative;
 left: 0;
 display: flex;
`;

const Grid = styled(motion.div).attrs({})`
 /* display: grid;
  grid-template-areas:
    'left right'
    'mid mid'
    'bottom bottom';
  grid-template-columns: fit-content auto;
  grid-template-rows: 100% auto; */
 display: flex;
 flex-flow: column;
 .image {
  grid-area: right;
 }
`;

const Top = styled(motion.div).attrs({})`
 display: flex;
 gap: 100px;
 padding: var(--spacing-15);
 padding-right: var(--spacing-40);
`;

const Middle = styled(motion.div).attrs({})`
 grid-area: mid;
 display: flex;
 justify-content: space-between;
 width: 100%;
 margin-top: var(--spacing-20);
 gap: var(--spacing-10);
 padding: var(--spacing-15);
 padding-right: var(--spacing-40);
`;

const Bottom = styled(motion.div).attrs({})`
 grid-area: bottom;
 display: flex;
 justify-content: space-between;
 width: 100%;
 margin-top: var(--spacing-20);

 gap: var(--spacing-10);
 padding: var(--spacing-15);
 padding-right: var(--spacing-40);
`;

const Track = styled(motion.div).attrs({})`
 grid-area: bottom;
 display: flex;
 /* flex-flow: column; */
 justify-content: space-between;
 width: 100%;
 margin-top: var(--spacing-20);
 gap: 140px;
 padding: var(--spacing-15);
 /* padding-right: var(--spacing-40); */
`;

const SelectWrapper = styled(motion.div).attrs({})`
 /* display: flex; */
 position: absolute;
 right: 0.5px;
`;

const LeftSection = styled(motion.div).attrs({})`
 display: flex;
 flex-flow: column;
 gap: var(--spacing-20);
`;

const RightSection = styled(motion.div).attrs({})`
 display: flex;
 flex-flow: column;
 gap: var(--spacing-20);
`;

const ItemWrapper = styled(motion.div).attrs({})<{ gap: any }>`
 position: relative;
 display: flex;
 align-items: center;
 min-height: 10px;
 grid-area: left;
 gap: ${({ gap }) => gap};
`;

const CheckBoxWrapper = styled.div`
 display: flex;
 align-items: center;
 margin: 0 235px;
 .terms-content {
  font-size: var(--fSize-8);
  color: var(--color-placeholder);
 }
`;

const Error = styled(motion.div)<{ error: any }>`
 display: ${({ error }) => (error ? "flex" : "none")};
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

const filter = createFilterOptions();



const ProductsForm = () => {

  const { register, handleSubmit, errors, setValue, getValues, Controller, control } = React.useContext(ReactHookForm);

  const [loading, setLoading] = React.useState(false);

  const [track, setTrack] = React.useState(true);




 // setValue(brand as typeof brandName);

  function getBase64({ file }: any) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = error => reject(error);
    });
  }

  function beforeUpload({ file }: any) {
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
    if (!isJpgOrPng) {
      message.error('You can only upload JPG/PNG file!');
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
      message.error('Image must smaller than 2MB!');
    }
    return isJpgOrPng && isLt2M;
  }

  const onChange = (info: any) => {
    console.log('info', info);
    const { status } = info.file;
    if (status === 'uploading') {
      setLoading(true);
      console.log(info.file, info.fileList);
      return;
    }
    if (status === 'done') {
      setLoading(false);
      message.success(`${info.file.name} file uploaded successfully.`);
    } else if (status === 'error') {
      setLoading(false);
      message.error(`${info.file.name} file upload failed.`);
    }
  }

  const props = {
    name: 'file',
    multiple: true,
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    onDrop({ e }: any) {
      console.log('Dropped files', e.dataTransfer.files);
    },
  };

  return (
    <>
      <Grid>
        <Top>
          <LeftSection>
          <TopSection />
          </LeftSection>
          <RightSection>
            <Controller
              control={control}
              name="image"
              render={({ field }: any) => (
                <Dragger {...props}
                  defaultFileList={[]}
                  {...field}
                  maxCount={5}
                  showUploadList={{ removeIcon: true }}
                  listType="picture-card"
                  style={{
                    width: "300px",
                    height: "30px",
                  }}
                  className="upload-list-inline" beforeUpload={beforeUpload}>
                  <p className="ant-upload-drag-icon">
                    {loading ? (
                      <LoadingOutlined />) : (
                      <img src={Icon.Drag} alt="" style={{
                        width: "60px",
                        height: "60px",
                      }} />
                    )}
                  </p>
                  <Item fontSize="12px" fontWeight="300" >Drag Image(s)</Item> <br />
                  <Item fontSize="12px" fontWeight="300" >or</Item> <br />
                  <Item fontSize="12px" fontWeight="300" color="var(--color-secondary)">Browse Images</Item>
                  <br />
                  <Item fontSize="12px" fontWeight="300" color="var(--color-placeholder)" lineHigh="0px"  >
                    <Icons src={Icon.Iicn} style={{
                      marginRight: "3px",
                    }} />
                    You can add up to 5 images, each not exceeding 2MB.
                  </Item>
                </Dragger>

              )}
            />
          </RightSection>
        </Top>
        <Divider />
        <Middle>

          <MiddleSection />
        </Middle>
        <Divider
          sx={{
            margin: "20px 0px",
          }}
        />
        <Bottom>
          <BottomSection />
        </Bottom>
        <CheckBoxWrapper
          style={{
            margin: "0",
          }}
        >
          <Checkbox
            aria-describedby="cNote"
            checked={track}
            onChange={(e: any) => {
              setTrack(!track);
            }}
            size="small"
            value={track}
          />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <p
              className="terms-content"
              style={{
                fontSize: "16px",
              }}
            >
              Track Inventory for this product
            </p>
            <Item color="#777777" fontSize="11px" fontWeight="400" margin="0px">
              You cannot enable/disable inventory tracking once you've created
              transactions for this item.
            </Item>
          </div>
        </CheckBoxWrapper>
        <Track>
          <TrackSection track={track} />
        </Track>
      </Grid>
    </>
  );
};

export default ProductsForm;
