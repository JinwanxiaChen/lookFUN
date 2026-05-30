import { HashRouter, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Layout from '@/components/Layout';
import Splash from '@/pages/Splash';
import CitySelection from '@/pages/CitySelection';
import Login from '@/pages/Login';
import Explore from '@/pages/Explore';
import SearchPage from '@/pages/SearchPage';
import ActivityDetail from '@/pages/ActivityDetail';
import CapsuleDetail from '@/pages/CapsuleDetail';
import MyActivities from '@/pages/MyActivities';
import Profile from '@/pages/Profile';
import RegistrationConfirm from '@/pages/RegistrationConfirm';

export default function App() {
  return (
    <HashRouter>
      <AnimatePresence mode="wait">
        <Routes>
          {/* Routes without layout */}
          <Route path="/splash" element={<Splash />} />
          <Route path="/city" element={<CitySelection />} />
          <Route path="/login" element={<Login />} />

          {/* Routes with layout */}
          <Route
            path="/explore"
            element={
              <Layout>
                <Explore />
              </Layout>
            }
          />
          <Route
            path="/search"
            element={
              <Layout showFooter={false}>
                <SearchPage />
              </Layout>
            }
          />
          <Route
            path="/activity/:id"
            element={
              <Layout showFooter={false}>
                <ActivityDetail />
              </Layout>
            }
          />
          <Route
            path="/capsule/:id"
            element={
              <Layout showFooter={false}>
                <CapsuleDetail />
              </Layout>
            }
          />
          <Route
            path="/my-activities"
            element={
              <Layout>
                <MyActivities />
              </Layout>
            }
          />
          <Route
            path="/profile"
            element={
              <Layout>
                <Profile />
              </Layout>
            }
          />
          <Route
            path="/register/:id"
            element={
              <Layout showFooter={false}>
                <RegistrationConfirm />
              </Layout>
            }
          />

          {/* Default redirect */}
          <Route path="*" element={<Splash />} />
        </Routes>
      </AnimatePresence>
    </HashRouter>
  );
}
