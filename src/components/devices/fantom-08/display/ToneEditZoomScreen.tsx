'use client';

import { motion } from 'framer-motion';
import { ToneType } from '@/types/display';
import { DISPLAY_COLORS } from '@/lib/constants';
import { TabSidebar } from './shared/ParameterTabEditor';

/**
 * TONE EDIT ZOOM tabs per tone type — from Reference Manual p.59-63.
 * Each tone type has a unique set of tabs and graphical layout.
 */
const ZOOM_TABS: Record<ToneType, readonly string[]> = {
  'Z-CORE': [
    'COMMON', 'STRUCTURE', 'KEYBOARD', 'OSC', 'Pitch', 'PITCH ENV',
    'FILTER', 'FILTER ENV', 'AMP', 'AMP ENV', 'LFO Dest', 'LFO1', 'LFO2',
    'STEP LFO1', 'STEP LFO2', 'PARTIAL EQ', 'OUTPUT', 'CONTROL',
    'MATRIX CTRL', 'MFX', 'MFX CTRL',
  ],
  'DRUM': [
    'KIT', 'KEY PARAM', 'KEY EQ', 'INST COMMON', 'INST WAVE',
    'INST PITCH', 'INST FILTER', 'INST AMP', 'PITCH ENV',
  ],
  'SN-A': ['COMMON', 'INST', 'MFX', 'MFX CTRL'],
  'VTW': ['WHEEL', 'OVERDRIVE', 'ROTARY', 'MFX', 'MFX CTRL'],
  'SN-AP': ['COMMON', 'INST', 'MFX', 'MFX CTRL'],
  'SN-EP': ['COMMON', 'INST', 'MFX', 'MFX CTRL'],
  'JP8': ['GENERAL', 'LFO/MOD', 'OSC', 'VCF', 'VCA', 'ENV1', 'ENV2', 'KBD', 'MFX'],
};

const TONE_TYPE_LABELS: Record<ToneType, string> = {
  'Z-CORE': 'Z-CORE',
  'DRUM': 'DRUM',
  'SN-A': 'SN-A',
  'VTW': 'VTW',
  'SN-AP': 'SN-AP',
  'SN-EP': 'SN-EP',
  'JP8': 'JP8',
};

/** Tone types that have a dedicated ZOOM screen (Z-Core, Drum, VTW, JP8).
 *  SN-A/SN-AP/SN-EP only have a single edit view — no ZOOM/PRO distinction. */
const ZOOM_CAPABLE_TYPES: ToneType[] = ['Z-CORE', 'DRUM', 'VTW', 'JP8'];

interface ToneEditZoomScreenProps {
  toneType?: ToneType;
  activeTab?: string;
  selectedIndex?: number;
  activePartials?: boolean[];
  selectedPartial?: number;
}

/** Partial switches — shown for Z-Core (P1-P4) and Drum (Wave1-4) */
function PartialSwitches({
  toneType,
  activePartials = [true, true, true, true],
  selectedPartial = 0,
}: {
  toneType: ToneType;
  activePartials: boolean[];
  selectedPartial: number;
}) {
  const labels =
    toneType === 'DRUM'
      ? ['Wave1', 'Wave2', 'Wave3', 'Wave4']
      : ['P1', 'P2', 'P3', 'P4'];
  const count = toneType === 'Z-CORE' || toneType === 'DRUM' ? 4 : 0;
  if (count === 0) return null;

  return (
    <div
      className="flex items-center gap-1 px-2 py-0.5 flex-shrink-0"
      style={{
        borderBottom: `1px solid ${DISPLAY_COLORS.border}30`,
      }}
    >
      {labels.slice(0, count).map((label, i) => {
        const isActive = activePartials[i] ?? true;
        const isSelected = i === selectedPartial;
        return (
          <span
            key={label}
            className="text-[8px] font-mono px-1.5 py-px rounded"
            style={{
              color: isSelected
                ? DISPLAY_COLORS.highlight
                : isActive
                  ? DISPLAY_COLORS.text
                  : DISPLAY_COLORS.zoneMuted,
              backgroundColor: isSelected
                ? `${DISPLAY_COLORS.active}25`
                : isActive
                  ? `${DISPLAY_COLORS.border}30`
                  : 'transparent',
              border: `1px solid ${isSelected ? DISPLAY_COLORS.active + '50' : 'transparent'}`,
              opacity: isActive ? 1 : 0.4,
            }}
          >
            {isActive ? 'ON' : 'OFF'} {label}
          </span>
        );
      })}
    </div>
  );
}

/** Z-Core ZOOM — graphical synth architecture (manual p.59) */
function ZCoreZoomView() {
  return (
    <div className="flex flex-col items-center justify-center flex-1 gap-1 px-2">
      <div className="flex items-center gap-1">
        <ArchBlock label="OSC" color={DISPLAY_COLORS.active} delay={0.05} />
        <Arrow />
        <ArchBlock label="FILTER" color={DISPLAY_COLORS.active} delay={0.1} />
        <Arrow />
        <ArchBlock label="AMP" color={DISPLAY_COLORS.active} delay={0.15} />
        <Arrow />
        <ArchBlock label="MFX" color={DISPLAY_COLORS.header} delay={0.2} />
      </div>
      <div className="flex items-center gap-2 mt-1">
        <ArchBlock label="LFO" color={DISPLAY_COLORS.warning} delay={0.25} small />
        <ArchBlock label="PITCH ENV" color={DISPLAY_COLORS.warning} delay={0.3} small />
        <ArchBlock label="FILTER ENV" color={DISPLAY_COLORS.warning} delay={0.35} small />
        <ArchBlock label="AMP ENV" color={DISPLAY_COLORS.warning} delay={0.4} small />
      </div>
    </div>
  );
}

/** Drum ZOOM — drum architecture (manual p.60) */
function DrumZoomView() {
  return (
    <div className="flex flex-col items-center justify-center flex-1 gap-1.5 px-2">
      <div className="flex items-center gap-1">
        <ArchBlock label="Inst" color={DISPLAY_COLORS.active} delay={0.05} />
        <Arrow />
        <ArchBlock label="Filter" color={DISPLAY_COLORS.active} delay={0.1} />
        <Arrow />
        <ArchBlock label="Amp" color={DISPLAY_COLORS.active} delay={0.15} />
        <Arrow />
        <ArchBlock label="Key EQ" color={DISPLAY_COLORS.header} delay={0.2} />
      </div>
      <div className="flex items-center gap-1 mt-1">
        <ArchBlock label="Pitch Env" color={DISPLAY_COLORS.warning} delay={0.25} small />
        <ArchBlock label="Filter Env" color={DISPLAY_COLORS.warning} delay={0.3} small />
        <ArchBlock label="Amp Env" color={DISPLAY_COLORS.warning} delay={0.35} small />
      </div>
      <div className="flex items-center gap-1 mt-0.5">
        {['Comp1', 'Comp2', 'Comp3'].map((label, i) => (
          <ArchBlock key={label} label={label} color={DISPLAY_COLORS.header} delay={0.4 + i * 0.05} small />
        ))}
      </div>
    </div>
  );
}

/** VTW Organ ZOOM — harmonic bars / drawbar display (manual p.61) */
function VtwZoomView({ sectionTab = 'WHEEL' }: { sectionTab: string }) {
  if (sectionTab === 'WHEEL') {
    // Harmonic drawbar display
    const barHeights = [80, 60, 70, 45, 55, 40, 35, 50, 30]; // Representative heights
    const barLabels = ["16'", "5⅓'", "8'", "4'", "2⅔'", "2'", "1⅗'", "1⅓'", "1'"];
    return (
      <div className="flex flex-col items-center justify-center flex-1 px-3">
        <span className="text-[8px] mb-1" style={{ color: DISPLAY_COLORS.header }}>
          Harmonic bars
        </span>
        <div className="flex items-end gap-1 h-16">
          {barHeights.map((h, i) => (
            <motion.div
              key={i}
              className="flex flex-col items-center"
              initial={{ height: 0 }}
              animate={{ height: h * 0.6 }}
              transition={{ duration: 0.2, delay: i * 0.03 }}
            >
              <div
                className="w-2.5 rounded-t"
                style={{
                  height: h * 0.6,
                  backgroundColor: i === 2 ? DISPLAY_COLORS.highlight : `${DISPLAY_COLORS.active}80`,
                  border: `1px solid ${DISPLAY_COLORS.active}40`,
                }}
              />
              <span className="text-[6px] mt-0.5" style={{ color: DISPLAY_COLORS.zoneMuted }}>
                {barLabels[i]}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    );
  }
  // OVERDRIVE / ROTARY / MFX sections — show parameter knobs
  return (
    <div className="flex flex-col items-center justify-center flex-1 px-2">
      <span className="text-[9px] font-bold mb-1" style={{ color: DISPLAY_COLORS.header }}>
        {sectionTab}
      </span>
      <div className="flex items-center gap-3">
        <KnobDisplay label="Param 1" value="0" delay={0.05} />
        <KnobDisplay label="Param 2" value="100" delay={0.1} />
      </div>
    </div>
  );
}

/** JP8 Model ZOOM — Jupiter-8 synth architecture (manual p.63) */
function Jp8ZoomView() {
  return (
    <div className="flex flex-col items-center justify-center flex-1 gap-1.5 px-2">
      <span
        className="text-[12px] font-bold tracking-wider"
        style={{ color: DISPLAY_COLORS.header }}
      >
        JUPITER-8
      </span>
      <div className="flex items-center gap-1">
        <div className="flex flex-col items-center gap-0.5">
          <ArchBlock label="VCO-1" color={DISPLAY_COLORS.active} delay={0.05} />
          <ArchBlock label="VCO-2" color={DISPLAY_COLORS.active} delay={0.1} />
        </div>
        <Arrow />
        <ArchBlock label="HPF" color={DISPLAY_COLORS.active} delay={0.15} />
        <Arrow />
        <ArchBlock label="VCF" color={DISPLAY_COLORS.active} delay={0.2} />
        <Arrow />
        <ArchBlock label="VCA" color={DISPLAY_COLORS.active} delay={0.25} />
        <Arrow />
        <ArchBlock label="MFX" color={DISPLAY_COLORS.header} delay={0.3} />
      </div>
      <div className="flex items-center gap-2 mt-0.5">
        <ArchBlock label="LFO" color={DISPLAY_COLORS.warning} delay={0.35} small />
        <ArchBlock label="ENV-1" color={DISPLAY_COLORS.warning} delay={0.4} small />
        <ArchBlock label="ENV-2" color={DISPLAY_COLORS.warning} delay={0.45} small />
      </div>
      {/* KEY MODE selector */}
      <div className="flex items-center gap-1 mt-1">
        {['POLY', 'SOLO', 'UNISON', 'SL-UNI'].map((mode, i) => (
          <span
            key={mode}
            className="text-[7px] px-1 py-px rounded"
            style={{
              color: i === 0 ? DISPLAY_COLORS.highlight : DISPLAY_COLORS.zoneMuted,
              backgroundColor: i === 0 ? `${DISPLAY_COLORS.active}20` : 'transparent',
              border: `1px solid ${i === 0 ? DISPLAY_COLORS.active + '40' : DISPLAY_COLORS.border + '30'}`,
            }}
          >
            {mode}
          </span>
        ))}
      </div>
    </div>
  );
}

/** Fallback for tone types without a dedicated ZOOM screen (SN-A, SN-AP, SN-EP).
 *  These types use a single edit view — the PRO screen is the only edit screen. */
function NoZoomView({ toneType }: { toneType: ToneType }) {
  return (
    <div className="flex flex-col items-center justify-center flex-1 px-2 gap-1">
      <span className="text-[10px] font-bold" style={{ color: DISPLAY_COLORS.header }}>
        {TONE_TYPE_LABELS[toneType]}
      </span>
      <span className="text-[9px] text-center" style={{ color: DISPLAY_COLORS.zoneMuted }}>
        Use TONE EDIT PRO screen
      </span>
    </div>
  );
}

/** Small architecture block used in ZOOM view diagrams */
function ArchBlock({
  label,
  color,
  delay = 0,
  small = false,
}: {
  label: string;
  color: string;
  delay?: number;
  small?: boolean;
}) {
  return (
    <motion.div
      className={`flex items-center justify-center rounded ${small ? 'px-1 py-px' : 'px-1.5 py-0.5'}`}
      style={{
        backgroundColor: `${color}20`,
        border: `1px solid ${color}50`,
      }}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.15, delay }}
    >
      <span
        className={`font-mono font-bold ${small ? 'text-[7px]' : 'text-[8px]'}`}
        style={{ color }}
      >
        {label}
      </span>
    </motion.div>
  );
}

/** Arrow connector */
function Arrow() {
  return (
    <span className="text-[9px]" style={{ color: DISPLAY_COLORS.zoneMuted }}>
      →
    </span>
  );
}

/** Knob display for VTW sub-screens */
function KnobDisplay({
  label,
  value,
  delay = 0,
}: {
  label: string;
  value: string;
  delay?: number;
}) {
  return (
    <motion.div
      className="flex flex-col items-center gap-0.5"
      initial={{ opacity: 0, y: 4 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.12, delay }}
    >
      <div
        className="w-6 h-6 rounded-full flex items-center justify-center"
        style={{
          backgroundColor: `${DISPLAY_COLORS.border}40`,
          border: `1px solid ${DISPLAY_COLORS.border}60`,
        }}
      >
        <span className="text-[8px] font-bold" style={{ color: DISPLAY_COLORS.text }}>
          {value}
        </span>
      </div>
      <span className="text-[7px]" style={{ color: DISPLAY_COLORS.zoneMuted }}>
        {label}
      </span>
    </motion.div>
  );
}

/** Renders the graphical content area based on tone type */
function ZoomContent({
  toneType,
  sectionTab,
}: {
  toneType: ToneType;
  sectionTab?: string;
}) {
  switch (toneType) {
    case 'Z-CORE':
      return <ZCoreZoomView />;
    case 'DRUM':
      return <DrumZoomView />;
    case 'VTW':
      return <VtwZoomView sectionTab={sectionTab ?? 'WHEEL'} />;
    case 'JP8':
      return <Jp8ZoomView />;
    case 'SN-A':
    case 'SN-AP':
    case 'SN-EP':
    default:
      return <NoZoomView toneType={toneType} />;
  }
}

export default function ToneEditZoomScreen({
  toneType = 'Z-CORE',
  activeTab,
  selectedIndex = 0,
  activePartials = [true, true, true, true],
  selectedPartial = 0,
}: ToneEditZoomScreenProps) {
  const tabs = ZOOM_TABS[toneType] ?? ZOOM_TABS['Z-CORE'];
  const defaultTab = tabs[0];

  return (
    <div className="flex flex-col h-full font-mono">
      {/* Partial switches for Z-Core / Drum */}
      {(toneType === 'Z-CORE' || toneType === 'DRUM') && (
        <PartialSwitches
          toneType={toneType}
          activePartials={activePartials}
          selectedPartial={selectedPartial}
        />
      )}

      {/* Main content: tab sidebar + graphical area */}
      <div className="flex flex-1 min-h-0">
        {/* Left: Tab sidebar */}
        <TabSidebar
          tabs={tabs}
          activeTab={activeTab ?? defaultTab}
          width={68}
          fontSize="text-[9px]"
        />

        {/* Right: Graphical zoom content */}
        <ZoomContent toneType={toneType} sectionTab={activeTab} />
      </div>

      {/* Footer — E-knob hints (varies by tone type) */}
      <div
        className="flex items-center justify-between px-2 py-0.5 flex-shrink-0"
        style={{
          borderTop: `1px solid ${DISPLAY_COLORS.border}40`,
          backgroundColor: `${DISPLAY_COLORS.border}15`,
        }}
      >
        <div className="flex gap-2">
          <span className="text-[9px]" style={{ color: DISPLAY_COLORS.zoneMuted }}>
            E1:Tab
          </span>
          <span className="text-[9px]" style={{ color: DISPLAY_COLORS.zoneMuted }}>
            E2:Cursor
          </span>
        </div>
        <div className="flex gap-2">
          <span className="text-[9px]" style={{ color: DISPLAY_COLORS.zoneMuted }}>
            To PRO
          </span>
          <span className="text-[9px]" style={{ color: DISPLAY_COLORS.zoneMuted }}>
            UTILITY
          </span>
        </div>
      </div>
    </div>
  );
}
