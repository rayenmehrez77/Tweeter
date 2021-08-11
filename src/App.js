import { Route, Switch } from "react-router-dom";
import { MobileNav, Navbar } from "./Components";
import {
  HomePage,
  ExplorePage,
  BookmarksPage,
  ProfilePage,
  LoginPage,
  SignUpPage,
} from "./Pages";

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <main className="bg-gray-100 dark:bg-gray-900 pt-16">
          <Route exact path="/" component={HomePage} />
          <Route exact path="/explore" component={ExplorePage} />
          <Route exact path="/bookmarks" component={BookmarksPage} />
          <Route exact path="/profile" component={ProfilePage} />
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/signup" component={SignUpPage} />
          <MobileNav />
        </main>
      </Switch>
    </>
  );
}

export default App;
