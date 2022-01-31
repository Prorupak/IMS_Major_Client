/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { NavLink } from 'react-router-dom';
import style from 'styled-components';
import { styled } from '@mui/material/styles';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import MuiAccordionSummary, {
  AccordionSummaryProps
} from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import { FaAngleDown } from 'react-icons/fa';

// const InventroryDetails = {};

export const StyledLink = style(NavLink)`
  display: flex;
  align-items: center;
  font-family: 'Poppins', sans-serif;
  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  line-height: 20px;
  color: #f7f7fc;
`;

const Wrapper = style.div`
  padding: 0 10px;
`;

const Accordions = style(Accordion)`
  background-color: #000;
`;

export const Icons = style.img`
  min-height: 34px;
  min-width: 34px;
`;

const AccordionSummary = styled((props: AccordionSummaryProps) => {
  return <MuiAccordionSummary {...props} />;
})(({ theme }) => {
  return {
    '& .MuiButtonBase-root-MuiAccordionSummary-root.Mui-expanded': {
      minHeight: 0
    },
    flexDirection: 'row',
    '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
      minHeight: 0,
      transform: 'rotate(180deg)',
      margin: 0
    },
    '& .MuiAccordionSummary-content': {
      minHeight: '34px',
      marginLeft: theme.spacing(1),
      margin: '0px'
    }
  };
});

// eslint-disable-next-line object-curly-newline
const SideBar = ({ children, icons, label, details, ...rest }: any) => {
  const [expanded, setExpanded] = React.useState<string | false>(false);

  const handleChange = (panel: string) => {
    return (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };
  };

  console.log(details);
  return (
    <>
      <Wrapper>
        <Accordions
          expanded={expanded === 'panel1'}
          onChange={handleChange('panel1')}
          sx={{
            backgroundColor: '#345b63',
            color: '#fff',
            border: 'none',
            boxShadow: 'none',
            margin: 0
          }}>
          <AccordionSummary
            aria-controls="panel1bh-content"
            expandIcon={<FaAngleDown style={{ color: '#fff' }} />}
            id="panel1bh-header"
            sx={{
              display: 'flex',
              alignItems: 'center',
              padding: 0,
              minHeight: 0,
              margin: 0
            }}>
            <StyledLink to="/" {...rest}>
              {children}
              <Icons src={icons} />
              <Typography>{label}</Typography>
            </StyledLink>
          </AccordionSummary>
          <AccordionDetails sx={{ margin: 0 }}>
            {details}
            <Typography>Dash</Typography>
          </AccordionDetails>
        </Accordions>
      </Wrapper>
    </>
  );
};

export default SideBar;
