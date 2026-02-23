import { describe, it, expect } from 'vitest';
import {
  getDefaultButtonState,
  createInitialPanelState,
  applyStateChanges,
  buildCumulativeState,
} from '@/lib/panelMapping';

describe('getDefaultButtonState', () => {
  it('returns {active: false, ledOn: false}', () => {
    const state = getDefaultButtonState();
    expect(state).toEqual({ active: false, ledOn: false });
  });
});

describe('createInitialPanelState', () => {
  it('creates state for all provided IDs', () => {
    const ids = ['zone-1', 'zone-2', 'menu'];
    const state = createInitialPanelState(ids);
    expect(Object.keys(state)).toHaveLength(3);
    expect(state['zone-1']).toEqual({ active: false, ledOn: false });
    expect(state['zone-2']).toEqual({ active: false, ledOn: false });
    expect(state['menu']).toEqual({ active: false, ledOn: false });
  });

  it('handles empty array', () => {
    const state = createInitialPanelState([]);
    expect(Object.keys(state)).toHaveLength(0);
  });
});

describe('applyStateChanges', () => {
  it('merges changes into current state', () => {
    const current = createInitialPanelState(['zone-1', 'zone-2']);
    const changes = { 'zone-1': { active: true, ledOn: true } };
    const result = applyStateChanges(current, changes);
    expect(result['zone-1'].active).toBe(true);
    expect(result['zone-1'].ledOn).toBe(true);
  });

  it('preserves untouched controls', () => {
    const current = createInitialPanelState(['zone-1', 'zone-2']);
    const changes = { 'zone-1': { active: true, ledOn: true } };
    const result = applyStateChanges(current, changes);
    expect(result['zone-2']).toEqual({ active: false, ledOn: false });
  });

  it('partially updates a control', () => {
    const current = { 'zone-1': { active: false, ledOn: false } };
    const changes = { 'zone-1': { active: true } };
    const result = applyStateChanges(current, changes);
    expect(result['zone-1'].active).toBe(true);
    expect(result['zone-1'].ledOn).toBe(false);
  });
});

describe('buildCumulativeState', () => {
  const initialState = createInitialPanelState(['zone-1', 'zone-2', 'menu']);

  const steps = [
    { panelStateChanges: { 'zone-1': { active: true, ledOn: true } } },
    { panelStateChanges: { menu: { active: true } } },
    { panelStateChanges: { 'zone-2': { active: true, ledOn: true }, menu: { active: false } } },
  ];

  it('accumulates changes through step 0', () => {
    const state = buildCumulativeState(initialState, steps, 0);
    expect(state['zone-1'].active).toBe(true);
    expect(state['zone-1'].ledOn).toBe(true);
    expect(state['menu'].active).toBe(false);
  });

  it('accumulates changes through step 1', () => {
    const state = buildCumulativeState(initialState, steps, 1);
    expect(state['zone-1'].active).toBe(true);
    expect(state['menu'].active).toBe(true);
  });

  it('accumulates changes through all steps', () => {
    const state = buildCumulativeState(initialState, steps, 2);
    expect(state['zone-1'].active).toBe(true);
    expect(state['zone-2'].active).toBe(true);
    expect(state['zone-2'].ledOn).toBe(true);
    expect(state['menu'].active).toBe(false);
  });
});
