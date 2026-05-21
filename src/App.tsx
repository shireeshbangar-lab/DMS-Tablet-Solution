import { NavLink, Route, Routes } from 'react-router-dom';
import { DashboardPage, MediaPage, DRPage, StockPage, CFDPage, ChecklistMasterPage } from './pages';

const links = [
  ['/', 'Appointments', '📅'],
  ['/media', 'Media', '🖼️'],
  ['/dr', 'Checklists', '☑️'],
  ['/stock', 'Stock', '📦'],
  ['/master', 'Master Data', '🗂️']
];

export default function App() {
  return <div className='min-h-screen bg-[#f2f4f8] text-slate-900'>
    <div className='flex min-h-screen'>
      <aside className='w-64 bg-[#02122d] text-slate-200 hidden md:flex flex-col'>
        <div className='px-6 pt-8 pb-5 border-b border-slate-700/40'>
          <h1 className='text-3xl font-extrabold tracking-tight'>DMS PRO</h1>
          <p className='text-xs mt-1 text-slate-400'>Automotive Intelligence</p>
        </div>
        <nav className='p-4 space-y-2'>
          {links.map(([to, label, Icon]) => <NavLink key={to} to={to} className={({isActive}) => `flex items-center gap-3 px-4 py-3 rounded-md text-sm ${isActive ? 'bg-[#1a2b4a] text-white' : 'text-slate-400 hover:bg-[#0b1f40] hover:text-slate-100'}`}>
            <span className='text-sm'>{Icon}</span>
            {label}
          </NavLink>)}
        </nav>
      </aside>
      <main className='flex-1 p-5 md:p-6'>
        <header className='flex items-center justify-between border-b border-slate-200 pb-4 mb-4'>
          <div className='flex items-center gap-3'>
            <button className='w-9 h-9 rounded-lg border border-slate-300 bg-white grid place-content-center'>☰</button>
            <h2 className='text-3xl font-bold'>Inventory Management</h2>
          </div>
          <div className='flex items-center gap-4 text-slate-600'>
            <button>🔔</button>
            <button>⚙️</button>
          </div>
        </header>
        <Routes>
          <Route path='/' element={<DashboardPage />} />
          <Route path='/media' element={<MediaPage />} />
          <Route path='/dr' element={<DRPage />} />
          <Route path='/stock' element={<StockPage />} />
          <Route path='/cfd' element={<CFDPage />} />
          <Route path='/master' element={<ChecklistMasterPage />} />
        </Routes>
      </main>
    </div>
  </div>;
}
