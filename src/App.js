import React from "react";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import Container from "./components/Container";
import { facilities } from "./constants/facilities";
import { formattedDate } from "./utils/formattedData";
import {useStyles} from './styles';
import {config} from './constants/config';

function App() {
  const classes = useStyles();

  const [currentFacility, setCurrentFacility] = React.useState({});
  const [selectedDate, setSelectedDate] = React.useState(
    new Date().setHours(0, 0, 0, 0)
  );

  const result =
    (selectedDate - new Date(currentFacility.date)) / 1000 / 60 / 60;

  const handleDateChange = (date) => {
    setSelectedDate(date.setHours(0, 0, 0, 0));
  };

  return (
    <div className={classes.app}>
      <Container>
        <div className={classes.selectContainer}>
          <FormControl variant="outlined" className={classes.select}>
            <InputLabel>{config.selectTitle}</InputLabel>
            <Select
              value={currentFacility.id}
              onChange={(evt) => {
                setCurrentFacility(
                  facilities.find(
                    (facility) => facility.id === evt.target.value
                  )
                );
              }}
              label={config.selectTitle}
            >
              {facilities.map((facility) => {
                return (
                  <MenuItem key={facility.id} value={facility.id}>
                    {facility.name}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
          <p className={classes.date}>{`${config.dateCommissioning} ${
            currentFacility.date ? formattedDate(currentFacility.date) : ""
          }`}</p>
        </div>
        <div className={classes.contentContainer}>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker
              style={{ width: "100%" }}
              autoOk
              disableToolbar
              variant="inline"
              format="dd.MM.yyyy"
              margin="normal"
              id="date-picker-inline"
              label={config.dateSelectorTitle}
              value={selectedDate}
              onChange={handleDateChange}
              KeyboardButtonProps={{
                "aria-label": "change date",
              }}
            />
          </MuiPickersUtilsProvider>
          <p className={classes.result}>{`${config.resultText[0]} ${
            !isNaN(result) ? result + config.resultText[1] : ""
          }`}</p>
        </div>
      </Container>
    </div>
  );
}

export default App;
