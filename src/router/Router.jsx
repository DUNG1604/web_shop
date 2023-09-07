import { Route, Routes } from "react-router-dom";
import Home from "../page/common/Home";

const Root = () => {
  return (
    <Routes>
      <Route path="" element={<Home />} />
    </Routes>
  );
};
export default Root;
