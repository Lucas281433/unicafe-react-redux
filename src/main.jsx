import ReactDOM from "react-dom/client";
import { createStore } from "redux";
import reducer from "./reducer";
import {
  ButtonGroup,
  Button,
  Stack,
  Card,
  CardContent,
  CardMedia,
} from "@mui/material";

import "./index.css";
import image from "./assets/coffee-shop.jpg"

const store = createStore(reducer);

/**
 * App component, which renders a card with buttons to increment
 * good, ok, and bad stats, and a button to reset the stats.
 *
 * The component also renders a coffee shop image.
 *
 * @returns {React.ReactElement} The App component.
 */
const App = () => {

  /**
   * Dispatches an action to increment the good stat.
   */
  const good = () => {
    store.dispatch({
      type: "GOOD",
    });
  };


  /**
   * Dispatches an action to increment the ok stat.
   */
  const ok = () => {
   store.dispatch({
      type: "OK",
    });
  };

  /**
   * Dispatches an action to increment the bad stat.
   */
  const bad = () => {
    store.dispatch({
      type: "BAD",
    });
  };

  /**
   * Dispatches an action to reset the stats to zero.
   */
  const zero = () => {
    store.dispatch({
      type: "ZERO",
    });
  };

  return (
    <Stack
      direction="column"
      justifyContent="center"
      alignItems="center"
      sx={{ minHeight: "100vh" }}
    >
      <Card className="card">
        <CardContent>
          <div>
            <h1 className="title text">
              Unicafe
            </h1>
            <ButtonGroup>
              <Button
                variant="contained"
                className="button-good"
                onClick={good}
              >
                good
              </Button>
              <Button
                variant="contained"
                className="button-ok"
                onClick={ok}
              >
                ok
              </Button>
              <Button
                variant="contained"
                className="button-bad"
                onClick={bad}
              >
                bad
              </Button>
              <Button variant="contained" onClick={zero}>
                reset stats
              </Button>
            </ButtonGroup>
          </div>
        </CardContent>
        <CardMedia
          component="img"
          height="300"
          width="200"
          image={image}
        />
        <CardContent>
          <Stack
            direction="column"
            justifyContent="center"
            alignItems="center"
            spacing={2}
          >
            <div className="text">Good: {store.getState().good}</div>
            <div className="text">Ok: {store.getState().ok}</div>
            <div className="text">Bad: {store.getState().bad}</div>
          </Stack>
        </CardContent>
      </Card>
    </Stack>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

const renderApp = () => {
  root.render(<App />);
};

renderApp();
store.subscribe(renderApp);
