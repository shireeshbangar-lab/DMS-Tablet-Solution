# DMS Tablet Solution Prototype

React + TypeScript + Tailwind CSS prototype for enterprise automotive DMS workflows.

## Modules
- Media handling with upload validation dashboard and storage/network indicators.
- Direct Reception tablet workflow with appointment states and checklist progress.
- Embedded photo/checklist concepts integrated in DR screen.
- Stock movement entry with MAP+quantity inline validation UX.
- CFD notes with diagram annotation workspace and print/export simulation.
- Configurable checklist master with CRUD/filter/pagination placeholders.

## Suggested Folder Structure
- `src/components` reusable UI widgets (cards, tables, badges, dialogs)
- `src/layouts` shell layouts (sidebar, topbar, breadcrumbs)
- `src/pages` feature module pages
- `src/services` API clients and integration placeholders
- `src/data` mock data and factories
- `src/types` domain types
- `src/hooks` reusable state hooks

## State Management
- Local component state for form-driven screens.
- Scalable path: Zustand/Redux Toolkit for cross-module state (auth/session, uploads queue, offline sync).
- React Query (future) for server-state cache, retries, optimistic updates.

## API Integration Placeholders
- `services/mediaService.ts` for upload/retry/compression endpoints.
- `services/drService.ts` for appointments/checklist autosave/submission.
- `services/stockService.ts` for movement validation/posting/approval.
- `services/checklistMasterService.ts` for CRUD, filters, bulk import.

## Scalable Architecture Recommendations
- Feature-sliced frontend modules with typed contracts.
- API gateway/BFF for old DMS integration.
- Event queue for offline media uploads and DR drafts.
- Object storage tiering for media lifecycle (hot/warm/cold).
- Audit log service for stock and approval actions.

## Run
```bash
npm install
npm run dev
```
