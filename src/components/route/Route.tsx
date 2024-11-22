import { lazy, Suspense, useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary';
import TopNav from '../topNav';
import Sidebar from '../sidebar';
import SkeletonLoader from '../skeletonLoader';
import ErrorFallBack from '../errorFallBack';
import Dashboard from '../../pages/dashboard';
import useStyles from './styles';
import { Paths } from '../../enums';



const UserAcquisition = lazy(() => import('../userAcquisition'));
const TransactionVolume = lazy(() => import('../transactionVolume'));
// const MerchantTracker = lazy(() => import('./components/Dashboard/MerchantTracker'));

function RouteApp(): JSX.Element {
  const { switchContainer } = useStyles();
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const updateMobileView = () => {
    setIsMobile(window.innerWidth <= 768);
  };

  useEffect(() => {
    updateMobileView();
    window.addEventListener('resize', updateMobileView);
    return () => window.removeEventListener('resize', updateMobileView);
  }, []);

  return (
    <Router>
      <div className={switchContainer}>
        <TopNav toggleSidebar={toggleSidebar} isMobile={isMobile} username="Admin Tom" />
        <div>
           <Sidebar isOpen={isSidebarOpen} isMobile={isMobile} toggleSidebar={toggleSidebar} username="Admin Tom" />
           <div style={{ marginLeft: isSidebarOpen ? '250px' : '0' }}>
            <Routes>
              <Route path={Paths.DASHBOARD} element={<Dashboard />} />
              <Route
                path={Paths.USERACQUISITION}
                element={
                  <ErrorBoundary
                    FallbackComponent={ErrorFallBack}
                    onReset={() => window.location.replace(Paths.DASHBOARD)}
                  >
                    <Suspense fallback={<SkeletonLoader />}>
                      <UserAcquisition />
                    </Suspense>
                  </ErrorBoundary>
                }
              />
              <Route
                path={Paths.TRANSACTIONVALUME}
                element={
                  <Suspense fallback={<SkeletonLoader />}>
                    <TransactionVolume />
                  </Suspense>
                }
              />
            </Routes>
           </div>
        </div>
      </div>
    </Router>
  );
}

export default RouteApp;
