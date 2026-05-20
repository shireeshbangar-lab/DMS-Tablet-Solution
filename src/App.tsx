import { NavLink, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import { DashboardPage, MediaPage, DRPage, StockPage, CFDPage, ChecklistMasterPage } from './pages';

const links = [
  ['/', 'Overview'], ['/media', 'Media Handling'], ['/dr', 'DR Workflow'], ['/stock', 'Stock Movement'], ['/cfd', 'CFD Notes'], ['/master', 'Checklist Master']
];

export default function App() {
  const [dark, setDark] = useState(false);
  const [role, setRole] = useState('Service Advisor');
  return <div className={dark ? 'dark' : ''}><div className='min-h-screen flex bg-slate-100 dark:bg-slate-950'>
    <aside className='w-72 hidden md:flex flex-col gap-2 p-4 border-r border-slate-200 dark:border-slate-800'>
      <h1 className='text-xl font-bold mb-2'>Automotive DMS</h1>
      {links.map(([to,label])=><NavLink key={to} to={to} className='card py-2'>{label}</NavLink>)}
    </aside>
    <main className='flex-1 p-4 md:p-6 space-y-4'>
      <header className='card flex items-center justify-between sticky top-4 z-10'>
        <div><p className='text-xs text-slate-500'>GRP → Tablet UI → Legacy DMS</p><p className='font-semibold'>Enterprise Direct Reception Workspace</p></div>
        <div className='flex gap-2'>
          <select value={role} onChange={e=>setRole(e.target.value)} className='px-2 py-1 rounded border bg-transparent'><option>Service Advisor</option><option>Supervisor</option><option>Admin</option></select>
          <button className='px-3 py-1 rounded bg-slate-800 text-white dark:bg-slate-100 dark:text-slate-900' onClick={()=>setDark(!dark)}>{dark?'Light':'Dark'}</button>
        </div>
      </header>
      <Routes>
        <Route path='/' element={<DashboardPage role={role} />} />
        <Route path='/media' element={<MediaPage />} />
        <Route path='/dr' element={<DRPage />} />
        <Route path='/stock' element={<StockPage />} />
        <Route path='/cfd' element={<CFDPage />} />
        <Route path='/master' element={<ChecklistMasterPage />} />
      </Routes>
    </main>
  </div></div>;
}
