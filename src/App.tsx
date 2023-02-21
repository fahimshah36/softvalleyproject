import "antd/dist/reset.css";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Login from "./auth/Login";
import Layouts from "./components/Layouts";
import {ConfigProvider} from "antd";
import Leads from "./pages/Leads/page/Leads";

function App() {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "25aae2",
        },
      }}
    >
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Layouts />}>
            <Route path="/home" element={<Leads />}></Route>
          </Route>
        </Routes>
      </Router>
    </ConfigProvider>
  );
}

export default App;
