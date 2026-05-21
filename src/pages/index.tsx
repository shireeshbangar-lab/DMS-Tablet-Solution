const chip = 'px-2 py-1 rounded text-[10px] font-bold tracking-wide';

export const DashboardPage = () => <div className='grid md:grid-cols-4 gap-4'>
  {['Pending Appointments', 'Uploads Today', 'Checklist Completion', 'Stock Approval Queue'].map((k, i) => <div key={k} className='card'><p className='text-sm text-slate-500'>{k}</p><p className='text-3xl font-bold'>{[28, 124, '65%', 7][i]}</p></div>)}
</div>;

export const MediaPage = () => <div className='grid lg:grid-cols-[1.8fr_1fr] gap-4'>
  <section className='space-y-4'>
    <div className='rounded-xl border-2 border-dashed border-slate-300 bg-white p-10 text-center'>
      <div className='w-12 h-12 rounded-xl bg-slate-100 mx-auto mb-3 grid place-content-center text-2xl'>☁️</div>
      <h3 className='text-3xl font-semibold'>Tap to Upload or Drag & Drop</h3>
      <p className='text-slate-500 mt-1'>High-resolution vehicle photos (JPEG, PNG). Recommended 1920×1080px.</p>
      <div className='mt-5 flex justify-center gap-3'>
        <button className='px-5 py-2 rounded bg-[#0a1731] text-white font-semibold'>Select Files</button>
        <button className='px-5 py-2 rounded border border-slate-300 font-semibold'>Import from Phone</button>
      </div>
    </div>
    <div className='rounded-xl bg-[#1d2b49] text-white p-4 flex items-center gap-3'>
      <span className='bg-white/20 rounded px-2 py-1 text-xs'>Uploading 3/10 photos...</span>
      <div className='flex-1 h-2 rounded-full bg-white/25'><div className='h-2 rounded-full bg-white w-[65%]' /></div>
      <span className='text-sm font-semibold'>65%</span>
    </div>
    <div>
      <h3 className='text-3xl font-bold mb-3'>Photo Gallery</h3>
      <div className='grid grid-cols-2 md:grid-cols-4 gap-3'>{['FRONT LEFT 3/4', 'INTERIOR DASHBOARD', 'REAR EXTERIOR', 'WHEEL DETAIL'].map((txt, i) => <div key={txt} className='rounded-xl h-28 bg-gradient-to-r from-slate-300 to-slate-500 relative overflow-hidden'><span className='absolute bottom-2 left-2 text-[10px] font-bold text-white bg-black/50 px-2 rounded'>{txt}</span><span className='absolute top-2 right-2 text-white text-xs'>#{i + 1}</span></div>)}</div>
    </div>
  </section>
  <aside className='space-y-4'>
    <div className='card'><h4 className='font-bold text-slate-700'>MEDIA STATUS CHECKLIST</h4><ul className='mt-3 text-sm space-y-3'><li>✅ <b>4 Mandatory Photos Uploaded</b><p className='text-slate-500'>Front, rear, side, and dash views confirmed.</p></li><li>🛑 <b>Missing: VIN Plate Photo</b><p className='text-slate-500'>Required for legal compliance and stock registration.</p></li><li>ℹ️ <b>Optional: Service Log PDF</b><p className='text-slate-500'>Adds credibility for resale listing.</p></li></ul><button className='w-full mt-4 py-2 rounded bg-[#0a1731] text-white font-semibold'>Generate Stock Report</button></div>
    <div className='card'><h4 className='font-semibold'>Cloud Storage</h4><p className='text-sm mt-2 text-slate-500'>Estimated usage: 12.4 MB2.0 TB Total</p></div>
  </aside>
</div>;

export const DRPage = () => <div className='grid lg:grid-cols-[1.4fr_.8fr] gap-4'>
  <section className='space-y-3'>
    <div className='flex items-center gap-2 text-xl font-semibold'>☑️ Multi-Point Inspection Checklist</div>
    <div className='h-2 rounded-full bg-slate-200'><div className='h-2 rounded-full bg-[#0a1731] w-[65%]' /></div>
    <div className='space-y-3'>
      <div className='bg-slate-100 border rounded-xl p-4 text-slate-400 font-bold flex justify-between'>Engine & Fluids <span className={chip + ' bg-slate-200'}>PENDING</span></div>
      <div className='bg-white border rounded-xl p-4'>
        <div className='font-bold text-2xl flex justify-between'>Tires & Brakes <span className={chip + ' bg-red-100 text-red-700'}>CRITICAL</span></div>
        <div className='mt-3 border border-red-200 bg-red-50 rounded-lg p-3 flex items-center justify-between'>
          <div><p className='font-bold text-red-700'>Rear Brake Pad Wear</p><p className='text-sm text-red-500'>Less than 3mm remaining on both sides.</p></div>
          <div className='flex gap-1 text-xs font-bold'><button className='px-3 py-1 border rounded bg-white'>OK</button><button className='px-3 py-1 border rounded bg-white'>WARN</button><button className='px-3 py-1 rounded bg-red-600 text-white'>CRIT</button></div>
        </div>
      </div>
      <div className='bg-slate-100 border rounded-xl p-4 text-slate-400 font-bold flex justify-between'>Interior <span className={chip + ' bg-slate-200'}>PENDING</span></div>
    </div>
  </section>
  <aside className='card space-y-4'>
    <div className='h-40 bg-slate-200 rounded-lg grid place-content-center text-slate-400'>Vehicle diagram</div>
    <div className='h-48 bg-slate-200 rounded-lg grid place-content-center text-slate-400'>Damage mapping</div>
    <div><h4 className='font-bold text-sm tracking-wide text-slate-500'>ANNOTATIONS</h4><div className='mt-2 space-y-2 text-sm'><div className='p-2 rounded border-l-4 border-red-500 bg-slate-50'>#1 Deep dent on front-left quarter panel</div><div className='p-2 rounded border-l-4 border-yellow-500 bg-slate-50'>#2 Paint scuff on rear bumper corner</div></div></div>
    <div className='grid grid-cols-2 gap-2'><button className='py-2 border rounded font-semibold'>Print Preview</button><button className='py-2 rounded bg-[#0a1731] text-white font-semibold'>Next Section</button></div>
  </aside>
</div>;

export const StockPage = () => <div className='card'>Stock placeholder</div>;
export const CFDPage = () => <div className='card'>CFD placeholder</div>;
export const ChecklistMasterPage = () => <div className='card'>Checklist master placeholder</div>;
