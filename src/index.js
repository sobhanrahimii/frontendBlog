import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { SidebarProvider } from "./context/sidebarContext";
import { BlogsProvider } from "./context/blogsContext";
import { UserProvider } from "./context/userContext";
import { CommentsProvider } from "./context/commentsContext";
import { I18nextProvider } from "react-i18next";
import i18next from "i18next";
import global_en from "./locale/en/global.json";
import global_fa from "./locale/fa/global.json";
import { Provider } from "react-redux";
import store from "./slice/store";

i18next.init({
  lng: "fa",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
  resources: {
    en: {
      global: global_en,
    },
    fa: {
      global: global_fa,
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <I18nextProvider i18n={i18next}>
      <SidebarProvider>
        <BlogsProvider>
          <UserProvider>
            <CommentsProvider>
              <Provider store={store}>
                <App />
              </Provider>
            </CommentsProvider>
          </UserProvider>
        </BlogsProvider>
      </SidebarProvider>
    </I18nextProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
