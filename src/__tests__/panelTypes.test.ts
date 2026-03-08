import { describe, it, expect } from 'vitest';

describe('Panel type system', () => {
  it('structural layout data compiles correctly', async () => {
    const types = await import('@/types/panel');
    const layout: types.PanelLayout = {
      deviceId: 'test',
      layoutMode: 'structural',
      rows: [
        { sections: ['nav'], height: 'auto' },
        { sections: ['left', 'center', 'right'], stretch: 'center', gap: 8 },
      ],
      sections: [
        {
          id: 'nav',
          label: 'Navigation',
          controlLayout: { type: 'flex-row', gap: 4 },
          controls: [{ id: 'btn1', type: 'button', label: 'Test', section: 'nav' }],
        },
        {
          id: 'left',
          label: 'Left',
          controlLayout: { type: 'flex-col', gap: 8 },
          controls: [],
        },
        {
          id: 'center',
          label: 'Center',
          controlLayout: { type: 'absolute', width: 300, height: 300 },
          controls: [],
        },
        {
          id: 'right',
          label: 'Right',
          controlLayout: { type: 'grid', columns: 2, gap: 4 },
          controls: [],
        },
      ],
      dimensions: { width: 900, height: 1200 },
    };
    expect(layout.layoutMode).toBe('structural');
    expect(layout.rows).toHaveLength(2);
    expect(layout.sections).toHaveLength(4);
  });
});
