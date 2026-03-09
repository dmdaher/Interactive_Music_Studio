import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import DeepMindPanel from '@/components/devices/deepmind-12/DeepMindPanel';
import { allDeepMind12ControlIds, DEEPMIND_12_SECTIONS } from '@/data/panelLayouts/deepmind-12';

describe('DeepMindPanel', () => {
  const defaultProps = {
    panelState: {},
    displayState: { screenType: 'home' as const },
    highlightedControls: [] as string[],
  };

  it('renders every control from the data file', () => {
    const { container } = render(<DeepMindPanel {...defaultProps} />);

    for (const id of allDeepMind12ControlIds) {
      const el = container.querySelector(`[data-control-id="${id}"]`);
      expect(el, `Missing control: ${id}`).toBeInTheDocument();
    }
  });

  it('renders all section title labels', () => {
    render(<DeepMindPanel {...defaultProps} />);

    // Sections that should have visible labels (all except performance and voices which have wood cheeks)
    const labeledSections = DEEPMIND_12_SECTIONS.filter(
      (s) => s.customSlot !== 'performance' && s.customSlot !== 'voices'
    );

    for (const section of labeledSections) {
      const labels = screen.getAllByText(section.title);
      expect(labels.length, `Missing section label: ${section.title}`).toBeGreaterThanOrEqual(1);
    }
  });

  it('renders "DeepMind 12" branding text', () => {
    render(<DeepMindPanel {...defaultProps} />);
    const matches = screen.getAllByText('DeepMind 12');
    expect(matches.length).toBeGreaterThanOrEqual(1);
  });

  it('renders "tc electronic" and "KLARK TEKNIK" branding', () => {
    render(<DeepMindPanel {...defaultProps} />);
    expect(screen.getByText('tc electronic')).toBeInTheDocument();
    expect(screen.getByText('KLARK TEKNIK')).toBeInTheDocument();
  });

  it('renders LCD display element', () => {
    const { container } = render(<DeepMindPanel {...defaultProps} />);
    expect(container.querySelector('[data-control-id="lcd-display"]')).toBeInTheDocument();
  });

  it('renders keyboard', () => {
    const { container } = render(<DeepMindPanel {...defaultProps} />);
    expect(container.querySelector('[data-control-id="keyboard"]')).toBeInTheDocument();
  });

  it('has rounded-2xl panel corners', () => {
    const { container } = render(<DeepMindPanel {...defaultProps} />);
    const panel = container.querySelector('.rounded-2xl');
    expect(panel).toBeInTheDocument();
  });

  it('performance section controls are present', () => {
    const { container } = render(<DeepMindPanel {...defaultProps} />);
    expect(container.querySelector('[data-control-id="volume"]')).toBeInTheDocument();
    expect(container.querySelector('[data-control-id="portamento"]')).toBeInTheDocument();
    expect(container.querySelector('[data-control-id="pitch-wheel"]')).toBeInTheDocument();
    expect(container.querySelector('[data-control-id="mod-wheel"]')).toBeInTheDocument();
    expect(container.querySelector('[data-control-id="oct-up"]')).toBeInTheDocument();
    expect(container.querySelector('[data-control-id="oct-down"]')).toBeInTheDocument();
  });

  it('octave LEDs are present', () => {
    const { container } = render(<DeepMindPanel {...defaultProps} />);
    for (let i = -3; i <= 3; i++) {
      const id = `oct-led-${i}`;
      expect(container.querySelector(`[data-control-id="${id}"]`), `Missing ${id}`).toBeInTheDocument();
    }
  });

  it('arp/seq controls are present', () => {
    const { container } = render(<DeepMindPanel {...defaultProps} />);
    expect(container.querySelector('[data-control-id="arp-on-off"]')).toBeInTheDocument();
    expect(container.querySelector('[data-control-id="arp-rate"]')).toBeInTheDocument();
    expect(container.querySelector('[data-control-id="arp-gate-time"]')).toBeInTheDocument();
    expect(container.querySelector('[data-control-id="arp-chord"]')).toBeInTheDocument();
    expect(container.querySelector('[data-control-id="arp-poly-chord"]')).toBeInTheDocument();
    expect(container.querySelector('[data-control-id="arp-tap-hold"]')).toBeInTheDocument();
    expect(container.querySelector('[data-control-id="arp-edit"]')).toBeInTheDocument();
  });

  it('LFO 1 and LFO 2 waveform LEDs are present', () => {
    const { container } = render(<DeepMindPanel {...defaultProps} />);
    const waveforms = ['sine', 'triangle', 'square', 'ramp-up', 'ramp-down', 's-h'];
    for (const lfo of ['lfo1', 'lfo2']) {
      for (const wf of waveforms) {
        const id = `${lfo}-${wf}`;
        expect(container.querySelector(`[data-control-id="${id}"]`), `Missing ${id}`).toBeInTheDocument();
      }
    }
  });

  it('oscillator controls are present with subgroup structure', () => {
    const { container } = render(<DeepMindPanel {...defaultProps} />);
    // OSC 1
    expect(container.querySelector('[data-control-id="osc1-pitch-mod"]')).toBeInTheDocument();
    expect(container.querySelector('[data-control-id="osc1-pwm"]')).toBeInTheDocument();
    expect(container.querySelector('[data-control-id="osc1-saw"]')).toBeInTheDocument();
    expect(container.querySelector('[data-control-id="osc1-pulse"]')).toBeInTheDocument();
    // OSC 2
    expect(container.querySelector('[data-control-id="osc2-pitch-mod"]')).toBeInTheDocument();
    expect(container.querySelector('[data-control-id="osc2-tone-mod"]')).toBeInTheDocument();
    expect(container.querySelector('[data-control-id="osc2-pitch"]')).toBeInTheDocument();
    expect(container.querySelector('[data-control-id="osc2-level"]')).toBeInTheDocument();
    // Shared
    expect(container.querySelector('[data-control-id="noise-level"]')).toBeInTheDocument();
    expect(container.querySelector('[data-control-id="osc-edit"]')).toBeInTheDocument();
    expect(container.querySelector('[data-control-id="osc-sync"]')).toBeInTheDocument();
  });

  it('display section controls are present', () => {
    const { container } = render(<DeepMindPanel {...defaultProps} />);
    const displayControls = [
      'prog', 'fx-btn', 'global', 'compare', 'write',
      'bank-up', 'bank-down', 'inc-yes', 'dec-no',
      'data-entry', 'data-entry-fader',
    ];
    for (const id of displayControls) {
      expect(container.querySelector(`[data-control-id="${id}"]`), `Missing ${id}`).toBeInTheDocument();
    }
  });

  it('VCF section controls are present', () => {
    const { container } = render(<DeepMindPanel {...defaultProps} />);
    const vcfControls = ['vcf-freq', 'vcf-res', 'vcf-env', 'vcf-lfo', 'vcf-kybd', 'vcf-2pole', 'vcf-invert', 'vcf-edit'];
    for (const id of vcfControls) {
      expect(container.querySelector(`[data-control-id="${id}"]`), `Missing ${id}`).toBeInTheDocument();
    }
  });

  it('envelope ADSR controls are present', () => {
    const { container } = render(<DeepMindPanel {...defaultProps} />);
    expect(container.querySelector('[data-control-id="env-attack"]')).toBeInTheDocument();
    expect(container.querySelector('[data-control-id="env-decay"]')).toBeInTheDocument();
    expect(container.querySelector('[data-control-id="env-sustain"]')).toBeInTheDocument();
    expect(container.querySelector('[data-control-id="env-release"]')).toBeInTheDocument();
    expect(container.querySelector('[data-control-id="env-vca"]')).toBeInTheDocument();
    expect(container.querySelector('[data-control-id="env-vcf"]')).toBeInTheDocument();
    expect(container.querySelector('[data-control-id="env-mod"]')).toBeInTheDocument();
    expect(container.querySelector('[data-control-id="env-curves"]')).toBeInTheDocument();
  });

  it('all 12 voice LEDs are present', () => {
    const { container } = render(<DeepMindPanel {...defaultProps} />);
    for (let i = 1; i <= 12; i++) {
      const id = `voice-led-${i}`;
      expect(container.querySelector(`[data-control-id="${id}"]`), `Missing ${id}`).toBeInTheDocument();
    }
  });

  it('HPF controls are present', () => {
    const { container } = render(<DeepMindPanel {...defaultProps} />);
    expect(container.querySelector('[data-control-id="hpf-freq"]')).toBeInTheDocument();
    expect(container.querySelector('[data-control-id="hpf-boost"]')).toBeInTheDocument();
  });

  it('VCA controls are present', () => {
    const { container } = render(<DeepMindPanel {...defaultProps} />);
    expect(container.querySelector('[data-control-id="vca-level"]')).toBeInTheDocument();
    expect(container.querySelector('[data-control-id="vca-edit"]')).toBeInTheDocument();
  });

  it('poly section controls are present', () => {
    const { container } = render(<DeepMindPanel {...defaultProps} />);
    expect(container.querySelector('[data-control-id="unison-detune"]')).toBeInTheDocument();
    expect(container.querySelector('[data-control-id="poly-mod"]')).toBeInTheDocument();
    expect(container.querySelector('[data-control-id="poly-edit"]')).toBeInTheDocument();
  });

  it('data file has correct total control count', () => {
    // Performance: 13, ARP: 7, LFO1: 9, LFO2: 9, OSC: 11, Display: 12, Poly: 3, VCF: 8, VCA: 2, HPF: 2, Env: 8, Voices: 12 = 96
    expect(allDeepMind12ControlIds.length).toBe(96);
  });

  it('all control IDs are unique', () => {
    const uniqueIds = new Set(allDeepMind12ControlIds);
    expect(uniqueIds.size).toBe(allDeepMind12ControlIds.length);
  });
});
