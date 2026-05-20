export const apiPlaceholders = {
  mediaService: ['POST /media/upload', 'POST /media/retry', 'GET /media/storage'],
  drService: ['GET /appointments', 'POST /dr/draft', 'POST /dr/submit'],
  stockService: ['POST /stock/validate', 'POST /stock/movement', 'GET /stock/history'],
  checklistMasterService: ['GET /checklists', 'POST /checklists', 'PUT /checklists/:id', 'POST /checklists/bulk']
};
