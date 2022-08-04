import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import Article from "./components/Articles/Article/Article";
import Details from "./components/Articles/Details";
import { QueryClient, QueryClientProvider } from "react-query";
import Articles from "./components/Articles/Articles";

const queryClient = new QueryClient()


ReactDOM.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
  
 <QueryClientProvider client={queryClient}>
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      {/* <Route path="/article/:articleId" element={<Article/>} /> */}
      {/* <Route path="/details/:articleId"  element={<Details/>}/> */}
      <Route path="/details"  element={<Details/>}/>

      {/* <Route path="/details"  element={<Details/>}/> */}

      {/* </Route> */}
      {/* <Route path="article" element={<Article />} /> */}
      {/* <Route path="article">
          <Route path=":id" element={<Details />} />
      </Route> */}
      {/* </Route> */}
    </Routes>
  </BrowserRouter>
  </QueryClientProvider>,

  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
