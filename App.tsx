import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ConfigProvider } from "antd";
import { Home } from "./components/Home/Home";
import { Login } from "./components/Login/Login";
import { CaseRentsForm } from "./components/CaseRentsForm/CaseRentsForm";
import { Protocolist } from "./components/Protocolist/Protocolist";
import { CaseRentsFinished } from "./components/CaseRentsFinished/CaseRentsFinished";
import { CreateArchivo } from "./components/archivo/CreateArchivo";
import { LendBook } from "./components/archivo/LendBook";
import { Reports } from "./components/archivo/Reports"



export const App = () => {
  return (
    <ConfigProvider
      theme={{
        components: {
          Layout: {
            headerBg: "#22075E",
            triggerBg: "#fff",
            triggerColor: "#000",
          },
          Tabs: {
            inkBarColor: "#9957C2",
            itemActiveColor: "#9957C2",
            itemSelectedColor: "#9957C2",
            itemHoverColor: "#9957C2",
          },
          Input: {
            activeBorderColor: "#9957C2",
            hoverBorderColor: "#9957C2",
          },
          Button: {
            defaultActiveBg: "#9957C2",
            defaultActiveColor: "#fff",
            defaultBg: "#9957C2",
            defaultColor: "#fff",
            defaultHoverBg: "#9957C2",
            defaultHoverBorderColor: "#9957C2",
            defaultHoverColor: "#FFF",
          },
        },
      }}
    >
      <Router>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/CaseRentsForm" element={<CaseRentsForm />} />
          <Route path="/Protocolist" element={<Protocolist />} />
          <Route path="/CaseRentsFinished" element={<CaseRentsFinished />} />
          <Route path="/CreateArchivo" element={<CreateArchivo />} />
          <Route path="/LendBook" element={<LendBook />} />
          <Route path="/Reports" element={<Reports />} />
        </Routes>
      </Router>
    </ConfigProvider>
  );
};
