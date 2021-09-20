
import './App.css';
import 'antd/dist/antd.css';
import Home from './pages/Home';
import AppliedJobs from "./pages/AppliedJobs";
import PostJob from "./pages/PostJob";
import Profile from "./pages/Profile";
import JobInfo from "./pages/JobInfo";
import { BrowserRouter, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route path="/" exact component={Home} />
        <Route path="/AppliedJobs" exact component={AppliedJobs} />
        <Route path="/PostJob" exact component={PostJob} />
        <Route path="/Profile" exact component={Profile} />
        <Route path="/JobInfo" exact component={JobInfo} />

        
      </BrowserRouter>
    </div>
  );
}

export default App;
