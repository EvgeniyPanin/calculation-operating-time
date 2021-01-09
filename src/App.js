import "./App.css";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
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
import {formattedDate} from './utils/formattedData';

const useStyles = makeStyles((theme) => ({
  select: {
    width: "40%",
  },
  selectContainer: {
    display: "flex",
    marginBottom: 30,
  },
  date: {
    marginLeft: "3%",
  },
  result: {
    marginTop: 40,
    fontSize: 18,
  },
}));

function App() {
  const classes = useStyles();

  const [currentFacility, setCurrentFacility] = React.useState(
    () => facilities[0]
  );
  const [selectedDate, setSelectedDate] = React.useState(new Date());

  const result = (Math.ceil(
    Math.abs(
      selectedDate.getTime() - new Date(currentFacility.date).getTime()
    ) /
      (1000 * 3600 * 24) - 1) * 24
  )

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <div className="App">
      <Container>
        <div className={classes.selectContainer}>
          <FormControl variant="outlined" className={classes.select}>
            <InputLabel>Выберите средство</InputLabel>
            <Select
              value={currentFacility.id}
              onChange={(evt) => {
                setCurrentFacility(
                  facilities.find(
                    (facility) => facility.id === evt.target.value
                  )
                );
              }}
              label="Выберите средство"
            >
              {facilities.map((facility) => {
                return <MenuItem value={facility.id}>{facility.name}</MenuItem>;
              })}
            </Select>
          </FormControl>
          <p
            className={classes.date}
          >{`Дата ввода: ${formattedDate(currentFacility.date)}`}</p>
        </div>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <KeyboardDatePicker
            autoOk
            disableToolbar
            variant="inline"
            format="dd.MM.yyyy"
            margin="normal"
            id="date-picker-inline"
            label="Выберите дату для подсчета наработки"
            value={selectedDate}
            onChange={handleDateChange}
            KeyboardButtonProps={{
              "aria-label": "change date",
            }}
          />
        </MuiPickersUtilsProvider>
        <p className={classes.result}>{`Наработка на выбранную дату: ${result} ч.`}</p>
      </Container>
    </div>
  );
}

export default App;
