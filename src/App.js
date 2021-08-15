import { useEffect } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { MobileNav, Navbar } from "./Components";
import { auth, createUserProfileDocument } from "./firebase/firebase";
import { createStructuredSelector } from "reselect";
import { setCurrentUser } from "./redux/user/actions";

import {
  HomePage,
  ExplorePage,
  BookmarksPage,
  ProfilePage,
  LoginPage,
  SignUpPage,
} from "./Pages";
import { selectCurrentUser } from "./redux/user/Selectors";
import { connect } from "react-redux";

function App({ currentUser, setCurrentUser }) {
  return (
    <>
      <Navbar />
      <Switch>
        <main className="bg-gray-100 dark:bg-gray-900 pt-16">
          <Route exact path="/" component={HomePage} />
          <Route exact path="/explore" component={ExplorePage} />
          <Route exact path="/bookmarks" component={BookmarksPage} />
          <Route exact path="/profile" component={ProfilePage} />
          <MobileNav />
        </main>
      </Switch>
    </>
  );
}
export const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

export const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
