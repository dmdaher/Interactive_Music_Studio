import { PanelControl, PanelState, ButtonState } from '@/types/panel';

export function getControlById(controls: PanelControl[], id: string): PanelControl | undefined {
  return controls.find(c => c.id === id);
}

export function getDefaultButtonState(): ButtonState {
  return { active: false, ledOn: false };
}

export function createInitialPanelState(controlIds: string[]): PanelState {
  const state: PanelState = {};
  for (const id of controlIds) {
    state[id] = getDefaultButtonState();
  }
  return state;
}

export function applyStateChanges(current: PanelState, changes: Partial<PanelState>): PanelState {
  const next = { ...current };
  for (const [id, change] of Object.entries(changes)) {
    if (change) {
      next[id] = { ...next[id], ...change };
    }
  }
  return next;
}

export function buildCumulativeState(
  initialState: PanelState,
  steps: { panelStateChanges: Partial<PanelState> }[],
  upToIndex: number
): PanelState {
  let state = { ...initialState };
  for (let i = 0; i <= upToIndex; i++) {
    state = applyStateChanges(state, steps[i].panelStateChanges);
  }
  return state;
}
