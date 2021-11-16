import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Countdown from '../views/Countdown';
import OpeningDay from '../views/OpeningDay';

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
      </Switch>
    </>
  );
}
