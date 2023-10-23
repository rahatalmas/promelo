import "./PressCard.css";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
const PressCard = () => {
  return (
    <>
      <a>
        <div className="pressCard">
          <q className="pressCard-row1">
            Pomelo raises $20m to combine credit and international money
            transfers. Pomelo raises $20m to combine credit and international
            money transfers Pomelo raise
          </q>
          <div className="pressCard-row2">
            <img className="pressCard-img" src="./assets/pressCard.png" />
            <div>
              <p>
                the name of the card holder is john, who have earned 10 and etc.
              </p>
              <div style={{display:"flex",alignItems:"center",justifyContent:"space-between"}}>
              <h3>Finovate</h3>  <span><ArrowForwardIcon/></span>
              </div>
            </div>
          </div>
        </div>
      </a>
    </>
  );
};

export default PressCard;
