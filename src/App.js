import { Route, Switch } from "react-router-dom";
import { Navbar } from "./Components";
import { HomePage, ExplorePage, BookmarksPage, ProfilePage } from "./Pages";

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <main className="bg-gray-100 pt-16">
          <Route exact path="/" component={HomePage} />
          <Route exact path="/explore" component={ExplorePage} />
          <Route exact path="/bookmarks" component={BookmarksPage} />
          <Route exact path="/profile" component={ProfilePage} />
        </main>
      </Switch>
    </>
  );
}

export default App;
