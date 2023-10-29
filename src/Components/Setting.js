import * as React from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AccordionSummary from '@mui/material/AccordionSummary';
import Button from '@mui/material/Button';
import { Stack } from '@mui/material';

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&:before': {
    display: 'none',
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

const colorTheme = [
  {
    name: "White",
    value: "#fff",
  },
  {
    name: "Black",
    value: "#000",
  },
];

export default function Setting() {
  const [expanded, setExpanded] = React.useState('panel1');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography sx={{ width: '50%', flexShrink: 0, textAlign: "start" }}>
            General settings
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          {/* Add cloth type selection (T-shirt/Hoodie) */}
          <div>
            <Button variant="outlined">T-shirt</Button>
            <Button variant="outlined">Hoodie</Button>
          </div>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography sx={{ width: '50%', flexShrink: 0, textAlign: "start" }}>
            Select a color
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          {/* Add color selection */}
          <div>
            {colorTheme.map((elem, index) => {
              return (
                <button key={index}>{elem.name}</button>
              );
            })}
          </div>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography sx={{ width: '50%', flexShrink: 0, textAlign: "start" }}>
            Add Text
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          {/* Add text input field */}
          <input type="text" placeholder="Add text here" />
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography sx={{ width: '50%', flexShrink: 0, textAlign: "start" }}>
            Upload an Image
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <input type="file" accept="image/*" />
        </AccordionDetails>
      </Accordion>
      <Stack>
        <Button variant="outlined" onClick={() => alert('Apply clicked')}>Apply</Button>
        <Button variant="outlined" onClick={() => alert('Clear clicked')}>Clear</Button>
      </Stack>
    </div>
  );
}
