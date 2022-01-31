/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import DropDown from '../../Assets/Icons/DropDown';

export default function ControlledAccordions() {
  const [expanded, setExpanded] = React.useState<string | false>(false);

  const handleChange = (panel: string) => {
    return (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };
  };

  return (
    <div>
      <Accordion
        expanded={expanded === 'panel1'}
        onChange={handleChange('panel1')}>
        <AccordionSummary
          aria-controls="panel1bh-content"
          expandIcon={<DropDown />}
          id="panel1bh-header">
          <Typography sx={{ width: '33%', flexShrink: 1 }}>
            General settings
          </Typography>
        </AccordionSummary>
        <AccordionDetails />
      </Accordion>
    </div>
  );
}
