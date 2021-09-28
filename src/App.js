import { Redirect, Route, Switch, withRouter, useHistory } from "react-router-dom";
import { MobileNav, Navbar } from "./Components";
import { useEffect } from "react"; 

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
  console.log(user)

    if(!user) {
      return (
        <>
        <Switch>
          <main className="bg-gray-100 dark:bg-gray-900">
            <Route exact path="/login" component={LoginPage} />
            <Route exact path="/signup" component={SignUpPage} />
            <MobileNav />
          </main>
        </Switch>
      </>
      )
    }
   

  return (
    <>
      <Navbar /> 
      <Switch>
        <main className="bg-gray-100 dark:bg-gray-900 pt-16">
          <Route
            exact
            path="/"
            component={HomePage}
          />
          <Route exact path="/explore" component={ExplorePage} />
          <Route exact path="/bookmarks" component={BookmarksPage} />
          <Route exact path="/profile" component={ProfilePage} />
          <MobileNav />
        </main>
      </Switch>
    </>
  );
}

export default App;
