import "./App.css";

import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Root from "./router/Router";
import Authentication from "./layout/authentication/Authentication";
import Login from "./page/common/Login";
import { QueryClient, QueryClientProvider } from "react-query";
import { ToastContainer } from "react-toastify";
import { URL } from "./utils/constants";
export const queryClient = new QueryClient({
  defaultOptions: {
    queries: { refetchOnWindowFocus: false },
  },
});
function App() {
  return (
    <div>
      <ToastContainer />
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Routes>
            <Route>
              <Route path={URL.LOGIN} element={<Login />} />
              <Route element={<Authentication />}>
                <Route path="/*" element={<Root />} />
              </Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </div>
  );
}

export default App;
