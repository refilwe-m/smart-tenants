import { Route, Routes, BrowserRouter as Router } from "react-router-dom";

import { AppLayout, MyAlerts, MyMeter, Profile } from "../components";
import { MyHome } from "../components/my-home";
import { Electronics } from "../components/pages/electronics";

export const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route>
          <Route
            path="/alerts"
            element={<AppLayout children={<MyAlerts />} />}
          />
          <Route path="/home" element={<AppLayout children={<MyHome />} />} />
          <Route path="/meter" element={<AppLayout children={<MyMeter />} />} />
          <Route
            path="/profile"
            element={<AppLayout children={<Profile />} />}
          />
          <Route
            path="/electronics"
            element={<AppLayout children={<Electronics />} />}
          />
          <Route
            path="*"
            element={
              <AppLayout
                children={
                  <h1 className="text-3xl text-white">
                    Oops Page doesn't exist
                  </h1>
                }
              />
            }
          />
        </Route>
        path=""
      </Routes>
    </Router>
  );
};
