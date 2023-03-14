import { useState, lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary';
import { FeelBack, Loading } from './components';
import { AuthLayout, LogLayout, MainLayout } from './layouts';
import { Dashboard, Login, PageNotFound, SystemUsers, CreateUser, UpdateUser, Order, CreateOrder, RecentOrders, DraftOrders, OrderSummery, CreateBulkOrder, Payment, PricingPlan, Profile } from './pages';
import AuthGuard from './hooks/AuthGuard';
import { Helmet } from 'react-helmet';


function App() {

  return (
    <BrowserRouter>
      <ErrorBoundary
        FallbackComponent={FeelBack}
        onReset={() => {
          // reset the state of your app so the error doesn't happen again
        }}
      >
        <main className="main">
          <div className="container-fluid">
            <Suspense fallback={<Loading />}>
              <Routes>
                <Route element={<AuthLayout />}>
                  <Route path="/" element={<Login />} />
                  <Route path="/login" element={<Login />} />
                </Route>
                <Route element={<AuthGuard />}>
                  <Route element={<MainLayout />}>
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/system-users" element={<SystemUsers />} />
                    <Route path="/create-user" element={<CreateUser />} />
                    <Route path="/update-user/:id" element={<UpdateUser />} />
                    //order
                    <Route path="/order" element={<CreateOrder />} />
                    <Route path="/recent-orders" element={<RecentOrders />} />
                    <Route path="/draft-orders" element={<DraftOrders />} />
                    <Route path="/order-summary" element={<OrderSummery />} />
                    <Route path="/bulk-order" element={<CreateBulkOrder />} />
                    //payment
                    <Route path="/payment" element={<Payment />} />
                    <Route path="/pricing-plan" element={<PricingPlan />} />
                    //profile
                    <Route path="/profile" element={<Profile />} />
                  </Route>
                </Route>
                <Route element={<LogLayout />}>
                  <Route path="*" element={<PageNotFound />} />
                </Route>
              </Routes>
            </Suspense>
          </div>
        </main>
      </ErrorBoundary>
    </BrowserRouter>
  )
}

export default App
