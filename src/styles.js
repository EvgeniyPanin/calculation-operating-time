import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  app: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
  },
  select: {
    width: "50%",
  },
  selectContainer: {
    display: "flex",
    marginBottom: 30,
    alignItems: "center",
  },
  date: {
    marginLeft: "3%",
    marginTop: 0,
    marginBottom: 0,
    fontSize: 18,
  },
  result: {
    fontSize: 18,
  },
  contentContainer: {
    minHeight: "11vw",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
}));
