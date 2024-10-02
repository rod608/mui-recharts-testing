import Accordion from "@mui/material/Accordion";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Button from "@mui/material/Button";

export default function MyAccordion() {
  return (
    <div>
      <Accordion defaultExpanded>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          Pokémon 1
        </AccordionSummary>
        <AccordionDetails>
          Pikachu is an Electric-type Pokémon introduced in Generation I. It
          evolves from Pichu when leveled up with high friendship and evolves
          into Raichu when exposed to a Thunder Stone.
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          Pokémon 2
        </AccordionSummary>
        <AccordionDetails>
          Charmander is a Fire-type Pokémon introduced in Generation I. It
          evolves into Charmeleon starting at level 16, which evolves into
          Charizard starting at level 36.
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3-content"
          id="panel3-header"
        >
          Pokémon Actions
        </AccordionSummary>
        <AccordionDetails>
          Bulbasaur is a dual-type Grass/Poison Pokémon introduced in Generation
          I. It evolves into Ivysaur starting at level 16, which evolves into
          Venusaur starting at level 32.
        </AccordionDetails>
        <AccordionActions>
          <Button>Cancel</Button>
          <Button>Agree</Button>
        </AccordionActions>
      </Accordion>
    </div>
  );
}
