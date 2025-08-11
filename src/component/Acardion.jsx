import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function Acardion() {
  return (
    <div>
      <Accordion defaultExpanded sx={{ backgroundColor: '#272727', color: 'white' }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon  sx={{ color: 'white' }}/>}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography component="span">The largest and oldest Quotations Page on the Web with about 30 categories</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Sed in sem pellentesque, eleifend erat vitae, tincidunt turpis. Pellentesque augue elit, rutrum sit amet commodo vel, porta quis purus.
            Nullam faucibus, odio eu bibendum auctor, eros dolor aliquet purus, sit amet pellentesque neque est id tortor. In egestas, erat a dapibus dapibus,
            mi augue ornare lorem, nec pretium ligula purus nec tellus. Aenean a scelerisque nisi. Nullam pretium fermentum nunc, feugiat placerat urna rutrum eget.
            Nullam mattis justo consequat risus. Donec imperdiet enim id efficitur pharetra. Nam sollicitudin at est eget auctor. Ut sed ante quis nulla tincidunt auctor.
            Quisque accumsan pretium tincidunt. Etiam viverra ultrices est vitae suscipit. Pellentesque elementum purus non nisl pharetra consequat. Nunc in venenatis orci.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{ backgroundColor: '#272727', color: 'white' }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon  sx={{ color: 'white' }}/>}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography component="span">A huge collection of inspirational quotes, thoughts of greatest minds in history</Typography>
        </AccordionSummary>
        <AccordionDetails>
           <Typography>
            Sed in sem pellentesque, eleifend erat vitae, tincidunt turpis. Pellentesque augue elit, rutrum sit amet commodo vel, porta quis purus.
            Nullam faucibus, odio eu bibendum auctor, eros dolor aliquet purus, sit amet pellentesque neque est id tortor. In egestas, erat a dapibus dapibus,
            mi augue ornare lorem, nec pretium ligula purus nec tellus. Aenean a scelerisque nisi. Nullam pretium fermentum nunc, feugiat placerat urna rutrum eget.
            Nullam mattis justo consequat risus. Donec imperdiet enim id efficitur pharetra. Nam sollicitudin at est eget auctor. Ut sed ante quis nulla tincidunt auctor.
            Quisque accumsan pretium tincidunt. Etiam viverra ultrices est vitae suscipit. Pellentesque elementum purus non nisl pharetra consequat. Nunc in venenatis orci.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{ backgroundColor: '#272727', color: 'white' }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon  sx={{ color: 'white' }} />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography component="span">Quotations from the great works of literature</Typography>
        </AccordionSummary>
        <AccordionDetails>
           <Typography>
            Sed in sem pellentesque, eleifend erat vitae, tincidunt turpis. Pellentesque augue elit, rutrum sit amet commodo vel, porta quis purus.
            Nullam faucibus, odio eu bibendum auctor, eros dolor aliquet purus, sit amet pellentesque neque est id tortor. In egestas, erat a dapibus dapibus,
            mi augue ornare lorem, nec pretium ligula purus nec tellus. Aenean a scelerisque nisi. Nullam pretium fermentum nunc, feugiat placerat urna rutrum eget.
            Nullam mattis justo consequat risus. Donec imperdiet enim id efficitur pharetra. Nam sollicitudin at est eget auctor. Ut sed ante quis nulla tincidunt auctor.
            Quisque accumsan pretium tincidunt. Etiam viverra ultrices est vitae suscipit. Pellentesque elementum purus non nisl pharetra consequat. Nunc in venenatis orci.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{ backgroundColor: '#272727', color: 'white' }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon  sx={{ color: 'white' }} />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography component="span">Read quotes and sayings from famous people in history</Typography>
        </AccordionSummary>
        <AccordionDetails>
           <Typography>
            Sed in sem pellentesque, eleifend erat vitae, tincidunt turpis. Pellentesque augue elit, rutrum sit amet commodo vel, porta quis purus.
            Nullam faucibus, odio eu bibendum auctor, eros dolor aliquet purus, sit amet pellentesque neque est id tortor. In egestas, erat a dapibus dapibus,
            mi augue ornare lorem, nec pretium ligula purus nec tellus. Aenean a scelerisque nisi. Nullam pretium fermentum nunc, feugiat placerat urna rutrum eget.
            Nullam mattis justo consequat risus. Donec imperdiet enim id efficitur pharetra. Nam sollicitudin at est eget auctor. Ut sed ante quis nulla tincidunt auctor.
            Quisque accumsan pretium tincidunt. Etiam viverra ultrices est vitae suscipit. Pellentesque elementum purus non nisl pharetra consequat. Nunc in venenatis orci.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{ backgroundColor: '#272727', color: 'white' }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon  sx={{ color: 'white' }} />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography component="span">Collected quotes from Albert Einstein</Typography>
        </AccordionSummary>
        <AccordionDetails>
           <Typography>
            Sed in sem pellentesque, eleifend erat vitae, tincidunt turpis. Pellentesque augue elit, rutrum sit amet commodo vel, porta quis purus.
            Nullam faucibus, odio eu bibendum auctor, eros dolor aliquet purus, sit amet pellentesque neque est id tortor. In egestas, erat a dapibus dapibus,
            mi augue ornare lorem, nec pretium ligula purus nec tellus. Aenean a scelerisque nisi. Nullam pretium fermentum nunc, feugiat placerat urna rutrum eget.
            Nullam mattis justo consequat risus. Donec imperdiet enim id efficitur pharetra. Nam sollicitudin at est eget auctor. Ut sed ante quis nulla tincidunt auctor.
            Quisque accumsan pretium tincidunt. Etiam viverra ultrices est vitae suscipit. Pellentesque elementum purus non nisl pharetra consequat. Nunc in venenatis orci.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
