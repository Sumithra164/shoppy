import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Loginpage from './components/loginpage';
import Forget from './components/forget';
import Layout from './components/shared/layout';
import Design from './components/prac/design';
import Dashboard from './components/dashboard';
import Products from './components/products';
import Favorites from './components/favorites';
import Pricing from './components/pricing';
import Contact from './components/contact';
import Team from './components/team';
import Table from './components/table';
import AddContact from './components/AddContact';
import OrderLists from './components/OrderLists';
import Invoice from './components/invoice';
import Calender from './components/calender';
import Todo from './components/todo';
import Inbox from './components/inbox';
import Stock from './components/stock';
import Settings from './components/settings';
import UIElementsPage from './components/UIElementsPage';
import AddMember from './components/AddMember';
import Aregistration from './components/aregistration';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/loginpage" element={<Loginpage />} />
        <Route path="/forget" element={<Forget />} />
        <Route path="/aregistration" element={<Aregistration />} />
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="products" element={<Products />} />
          <Route path="favorites" element={<Favorites />} />
          <Route path="pricing" element={<Pricing />} />
          <Route path="contact" element={<Contact />} />
          <Route path="team" element={<Team />} />
          <Route path="table" element={<Table />} />
          <Route path="AddContact" element={<AddContact />} />
          <Route path="OrderLists" element={<OrderLists />} />
          <Route path="invoice" element={<Invoice />} />
          <Route path="calender" element={<Calender />} />
          <Route path="todo" element={<Todo />} />
          <Route path="stock" element={<Stock />} />
          <Route path="settings" element={<Settings />} />
          <Route path="UIElementsPage" element={<UIElementsPage />} />
          <Route path="AddMember" element={<AddMember />} />
          <Route path="design" element={<Design />}>
            <Route index element={<Inbox />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
