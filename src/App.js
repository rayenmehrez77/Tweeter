import { useEffect, useState } from "react";
import { Redirect, Route, Switch, withRouter } from "react-router-dom";
import { MobileNav, Navbar } from "./Components";

import {
  HomePage,
  ExplorePage,
  BookmarksPage,
  ProfilePage,
  LoginPage,
  SignUpPage,
} from "./Pages";
import { getCurrentUser } from "./services/AuthService";

function App() {
  const user = getCurrentUser();
  console.log(user);

  return (
    <>
      <Navbar />
      <Switch>
        <main className="bg-gray-100 dark:bg-gray-900 pt-16">
          <Route
            exact
            path="/"
            render={() => (user ? <HomePage /> : <Redirect to="/login" />)}
          />
          <Route exact path="/explore" component={ExplorePage} />
          <Route exact path="/bookmarks" component={BookmarksPage} />
          <Route exact path="/profile" component={ProfilePage} />
          <Route exact path="/profile" component={ProfilePage} />
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/signup" component={SignUpPage} />
          <MobileNav />
        </main>
      </Switch>
    </>
  );
}

export default withRouter(App);
