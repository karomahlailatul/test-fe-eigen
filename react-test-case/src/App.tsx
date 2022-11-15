import React, { Fragment } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";

import "antd/dist/antd.min.css";

import { Layout } from "antd";
const { Content } = Layout;

const App = () => {
  return (
    <Fragment>
      <BrowserRouter>
        <Layout>
          <Content  style={{ padding: '0 100px' }}>
            <Routes>
              <Route path="*" element={<Home />} />
            </Routes>
          </Content>
        </Layout>
      </BrowserRouter>
    </Fragment>
  );
};

export default App;
