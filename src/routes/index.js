import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Countdown from '../views/Countdown';
import OpeningDay from '../views/OpeningDay';
import Schedule from '../views/Schedule';

export default function Routes() {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <Countdown />
        </Route>
        <Route exact path="/openingday">
          <OpeningDay />
        </Route>
        <Route
          exact
          path="/schedule"
          component={() => {
            window.location.href = 'https://www.mlb.com/schedule';
            return null;
          }}
        />
        <Route
          exact
          path="/tickets"
          component={Schedule(() => {
            window.location.href = 'https://www.mlb.com/tickets';
            return null;
          })}
        />
      </Switch>
    </>
  );
}
