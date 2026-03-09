'use client';

import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { PanelState } from '@/types/panel';
import { DisplayState } from '@/types/display';
import { PANEL_COLORS } from '@/lib/constants';
import {
  DEEPMIND_12_SECTIONS,
  DeepMindSection,
  DeepMindControl,
} from '@/data/panelLayouts/deepmind-12';

import Slider from '@/components/controls/Slider';
import Knob from '@/components/controls/Knob';
import PanelButton from '@/components/controls/PanelButton';
import Wheel from '@/components/controls/Wheel';
import ValueDial from '@/components/controls/ValueDial';
import LEDIndicator from '@/components/controls/LEDIndicator';

// Panel dimensions matching constants.ts
const PANEL_W = 4200;
const PANEL_H = 620;

// DeepMind 12 specific colors
const DM_COLORS = {
  woodGrain: 'linear-gradient(180deg, #8B4513 0%, #6B3410 25%, #7A3D12 50%, #5C2D0E 75%, #8B4513 100%)',
  sectionLabel: '#7DD3FC', // light blue/cyan
  lcdBackground: '#001830',
  lcdText: '#4AC8FF',
  lcdScanline: 'rgba(0,180,255,0.03)',
  divider: 'rgba(100,180,255,0.15)',
} as const;

interface DeepMindPanelProps {
  panelState: PanelState;
  displayState: DisplayState;
  highlightedControls: string[];
  onButtonClick?: (id: string) => void;
}

export default function DeepMindPanel({
  panelState,
  displayState,
  highlightedControls,
  onButtonClick,
}: DeepMindPanelProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  // ── Render a single control from data ──
  function renderControl(ctrl: DeepMindControl) {
    const state = panelState[ctrl.id];
    const highlighted = highlightedControls.includes(ctrl.id);

    switch (ctrl.type) {
      case 'slider':
        return (
          <Slider
            key={ctrl.id}
            id={ctrl.id}
            label={ctrl.label}
            value={state?.value ?? 64}
            highlighted={highlighted}
          />
        );
      case 'knob':
        return (
          <Knob
            key={ctrl.id}
            id={ctrl.id}
            label={ctrl.label}
            value={state?.value ?? 64}
            highlighted={highlighted}
            size="md"
          />
        );
      case 'button':
        return (
          <PanelButton
            key={ctrl.id}
            id={ctrl.id}
            label={ctrl.label}
            variant="function"
            size={ctrl.size ?? 'sm'}
            labelPosition="above"
            active={state?.active ?? false}
            hasLed={ctrl.hasLed ?? false}
            ledOn={state?.ledOn ?? false}
            ledColor={PANEL_COLORS.ledOn}
            highlighted={highlighted}
            onClick={() => onButtonClick?.(ctrl.id)}
          />
        );
      case 'wheel':
        return (
          <Wheel
            key={ctrl.id}
            id={ctrl.id}
            label={ctrl.label}
            value={state?.value ?? 64}
            highlighted={highlighted}
          />
        );
      case 'dial':
        return (
          <ValueDial
            key={ctrl.id}
            id={ctrl.id}
            label={ctrl.label}
            highlighted={highlighted}
            size="sm"
          />
        );
      case 'led':
        return (
          <LEDIndicator
            key={ctrl.id}
            id={ctrl.id}
            on={state?.ledOn ?? false}
            color={PANEL_COLORS.ledOn}
            highlighted={highlighted}
          />
        );
      default:
        return null;
    }
  }

  // ── Get controls by type from a section ──
  function getControls(section: DeepMindSection, type: DeepMindControl['type']) {
    return section.controls.filter((c) => c.type === type);
  }

  // ── Get controls by id list ──
  function getControlsById(section: DeepMindSection, ids: string[]) {
    return ids.map((id) => section.controls.find((c) => c.id === id)).filter(Boolean) as DeepMindControl[];
  }

  // ── PERFORMANCE custom slot ──
  function renderPerformanceSlot(section: DeepMindSection) {
    const knobs = getControls(section, 'knob');
    const buttons = getControls(section, 'button');
    const leds = getControls(section, 'led');
    const wheels = getControls(section, 'wheel');

    return (
      <div className="flex h-full">
        {/* Left wood cheek */}
        <div
          className="flex-shrink-0 rounded-l-xl"
          style={{
            width: 28,
            background: DM_COLORS.woodGrain,
            boxShadow: 'inset -2px 0 4px rgba(0,0,0,0.4), 2px 0 6px rgba(0,0,0,0.3)',
          }}
        />

        <div className="flex flex-col items-center justify-between py-3 px-2 flex-1">
          {/* Knobs */}
          <div className="flex gap-2">
            {knobs.map(renderControl)}
          </div>

          {/* Octave buttons */}
          <div className="flex gap-1.5 mt-1">
            {buttons.map(renderControl)}
          </div>

          {/* Octave LEDs */}
          <div className="flex gap-1 mt-1">
            {leds.map(renderControl)}
          </div>

          {/* Wheels */}
          <div className="flex gap-3 mt-2">
            {wheels.map(renderControl)}
          </div>
        </div>
      </div>
    );
  }

  // ── LFO waveform custom slot ──
  function renderLfoSlot(section: DeepMindSection) {
    const sliders = getControls(section, 'slider');
    const buttons = getControls(section, 'button');
    const leds = getControls(section, 'led');

    return (
      <div className="flex flex-col items-center justify-between h-full py-3 px-1">
        {/* Sliders row */}
        <div className="flex gap-3">
          {sliders.map(renderControl)}
        </div>

        {/* Waveform LEDs in a row */}
        <div className="flex flex-col items-center gap-1 mt-2">
          <div className="flex gap-2">
            {leds.map((led) => (
              <div key={led.id} className="flex flex-col items-center gap-0.5">
                {renderControl(led)}
                <span className="text-[7px] text-gray-500">{led.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Edit button */}
        <div className="mt-1">
          {buttons.map(renderControl)}
        </div>
      </div>
    );
  }

  // ── DISPLAY custom slot ──
  function renderDisplaySlot(section: DeepMindSection) {
    const buttons = getControls(section, 'button');
    const dials = getControls(section, 'dial');
    const sliders = getControls(section, 'slider');

    // Split buttons into functional groups
    const topRow = ['prog', 'fx-btn', 'global'];
    const midRow = ['compare', 'write', 'mod-matrix'];
    const navRow = ['bank-up', 'bank-down', 'inc-yes', 'dec-no'];

    const topButtons = getControlsById(section, topRow);
    const midButtons = getControlsById(section, midRow);
    const navButtons = getControlsById(section, navRow);

    return (
      <div className="flex flex-col items-center h-full py-2 px-2">
        {/* Branding */}
        <div className="flex items-center gap-2 mb-1">
          <span className="text-[8px] tracking-[0.15em] text-gray-600 font-medium">
            tc electronic
          </span>
          <span className="text-[7px] text-gray-700">|</span>
          <span className="text-[8px] tracking-[0.15em] text-gray-600 font-medium">
            KLARK TEKNIK
          </span>
        </div>

        {/* LCD Display */}
        <div
          className="relative rounded-md overflow-hidden mb-2"
          style={{
            width: 220,
            height: 80,
            backgroundColor: DM_COLORS.lcdBackground,
            border: '2px solid #003060',
            boxShadow: 'inset 0 2px 8px rgba(0,0,0,0.8), 0 0 12px rgba(0,100,200,0.15)',
          }}
          data-control-id="lcd-display"
        >
          {/* Scanlines */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage: `repeating-linear-gradient(0deg, ${DM_COLORS.lcdScanline} 0px, transparent 1px, transparent 3px)`,
            }}
          />

          {/* Display content */}
          <div className="relative z-10 flex flex-col items-center justify-center h-full p-2">
            <span
              className="text-[10px] font-bold tracking-wider"
              style={{ color: DM_COLORS.lcdText }}
            >
              {displayState?.sceneName ?? 'DeepMind 12'}
            </span>
            <span
              className="text-[8px] tracking-wide mt-1"
              style={{ color: `${DM_COLORS.lcdText}99` }}
            >
              {displayState?.sceneNumber ?? 'A001'}
            </span>
          </div>

          {/* Glow overlay */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: 'radial-gradient(ellipse at 50% 40%, rgba(0,120,255,0.08) 0%, transparent 70%)',
            }}
          />
        </div>

        {/* "DeepMind 12" title */}
        <div className="mb-2">
          <span
            className="text-[11px] font-bold tracking-[0.2em]"
            style={{ color: '#8ECFFF' }}
          >
            DeepMind 12
          </span>
        </div>

        {/* Top row buttons (Prog, FX, Global) */}
        <div className="flex gap-1.5 mb-1">
          {topButtons.map(renderControl)}
        </div>

        {/* Mid row buttons (Compare, Write) */}
        <div className="flex gap-1.5 mb-1">
          {midButtons.map(renderControl)}
        </div>

        {/* Nav row (Bank Up/Down, +/Yes, -/No) */}
        <div className="flex gap-1 mb-1">
          {navButtons.map(renderControl)}
        </div>

        {/* Data entry row */}
        <div className="flex items-center gap-2 mt-1">
          {dials.map(renderControl)}
          {sliders.map(renderControl)}
        </div>
      </div>
    );
  }

  // ── VOICES custom slot ──
  function renderVoicesSlot(section: DeepMindSection) {
    const leds = getControls(section, 'led');

    return (
      <div className="flex h-full">
        <div className="flex flex-col items-center justify-center py-3 px-2 flex-1">
          {/* 6×2 grid of voice LEDs */}
          <div className="grid grid-cols-6 gap-x-2 gap-y-3">
            {leds.map((led) => (
              <div key={led.id} className="flex flex-col items-center gap-0.5">
                {renderControl(led)}
                <span className="text-[6px] text-gray-600">{led.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right wood cheek */}
        <div
          className="flex-shrink-0 rounded-r-xl"
          style={{
            width: 28,
            background: DM_COLORS.woodGrain,
            boxShadow: 'inset 2px 0 4px rgba(0,0,0,0.4), -2px 0 6px rgba(0,0,0,0.3)',
          }}
        />
      </div>
    );
  }

  // ── Standard section (no custom slot) ──
  function renderStandardSection(section: DeepMindSection) {
    const sliders = getControls(section, 'slider');
    const buttons = getControls(section, 'button');
    const knobs = getControls(section, 'knob');

    // If section has subGroups, render grouped
    if (section.subGroups && section.subGroups.length > 0) {
      return (
        <div className="flex flex-col h-full py-3 px-1">
          <div className="flex gap-2 flex-1">
            {section.subGroups.map((group, gi) => {
              const groupControls = getControlsById(section, group.controlIds);
              const groupSliders = groupControls.filter((c) => c.type === 'slider');
              const groupButtons = groupControls.filter((c) => c.type === 'button');

              return (
                <div key={gi} className="flex flex-col items-center">
                  {group.label && (
                    <span className="text-[7px] font-bold text-gray-500 tracking-wider mb-1 uppercase">
                      {group.label}
                    </span>
                  )}
                  <div className="flex gap-2">
                    {groupSliders.map(renderControl)}
                  </div>
                  {groupButtons.length > 0 && (
                    <div className="flex gap-1 mt-2">
                      {groupButtons.map(renderControl)}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      );
    }

    // Default: all sliders in a row, buttons below
    return (
      <div className="flex flex-col items-center justify-between h-full py-3 px-1">
        {/* Knobs */}
        {knobs.length > 0 && (
          <div className="flex gap-2">
            {knobs.map(renderControl)}
          </div>
        )}

        {/* Sliders */}
        {sliders.length > 0 && (
          <div className="flex gap-2">
            {sliders.map(renderControl)}
          </div>
        )}

        {/* Buttons */}
        {buttons.length > 0 && (
          <div className="flex gap-1 mt-2 flex-wrap justify-center">
            {buttons.map(renderControl)}
          </div>
        )}
      </div>
    );
  }

  // ── Render a section based on its customSlot ──
  function renderSectionContent(section: DeepMindSection) {
    switch (section.customSlot) {
      case 'performance':
        return renderPerformanceSlot(section);
      case 'lfo-waveforms':
        return renderLfoSlot(section);
      case 'display':
        return renderDisplaySlot(section);
      case 'voices':
        return renderVoicesSlot(section);
      default:
        return renderStandardSection(section);
    }
  }

  // ── 49-key keyboard ──
  function renderKeyboard() {
    // 49 keys: C2 to C6 (4 octaves)
    const octaves = 4;
    const whiteKeysPerOctave = 7;
    const totalWhiteKeys = octaves * whiteKeysPerOctave + 1; // +1 for top C

    const blackKeyPattern = [1, 1, 0, 1, 1, 1, 0]; // C#, D#, -, F#, G#, A#, -
    const whiteKeyWidth = PANEL_W / totalWhiteKeys;
    const blackKeyWidth = whiteKeyWidth * 0.6;

    const whiteKeys: React.ReactElement[] = [];
    const blackKeys: React.ReactElement[] = [];

    for (let i = 0; i < totalWhiteKeys; i++) {
      whiteKeys.push(
        <div
          key={`w-${i}`}
          style={{
            width: whiteKeyWidth - 1,
            height: 80,
            backgroundColor: '#f5f0e8',
            border: '1px solid #999',
            borderRadius: '0 0 3px 3px',
            boxShadow: 'inset 0 -4px 6px rgba(0,0,0,0.1), 0 2px 3px rgba(0,0,0,0.2)',
          }}
        />
      );
    }

    let whiteIndex = 0;
    for (let oct = 0; oct < octaves; oct++) {
      for (let n = 0; n < 7; n++) {
        if (blackKeyPattern[n]) {
          const leftPos = (whiteIndex + 1) * whiteKeyWidth - blackKeyWidth / 2;
          blackKeys.push(
            <div
              key={`b-${oct}-${n}`}
              className="absolute"
              style={{
                width: blackKeyWidth,
                height: 50,
                left: leftPos,
                top: 0,
                backgroundColor: '#1a1a1a',
                borderRadius: '0 0 2px 2px',
                boxShadow: '0 3px 4px rgba(0,0,0,0.4), inset 0 -2px 3px rgba(60,60,60,0.3)',
                background: 'linear-gradient(to bottom, #2a2a2a 0%, #111 80%, #000 100%)',
              }}
            />
          );
        }
        whiteIndex++;
      }
    }

    return (
      <div className="relative w-full" style={{ height: 80 }} data-control-id="keyboard">
        <div className="flex">{whiteKeys}</div>
        {blackKeys}
      </div>
    );
  }

  // ── Vertical divider ──
  function Divider() {
    return (
      <div
        className="flex-shrink-0"
        style={{
          width: 1,
          background: DM_COLORS.divider,
          margin: '8px 0',
        }}
      />
    );
  }

  return (
    <div ref={containerRef} className="w-full h-full overflow-x-auto">
      <motion.div
        className="relative rounded-2xl overflow-hidden select-none"
        style={{
          width: PANEL_W,
          minWidth: PANEL_W,
          height: PANEL_H,
          backgroundColor: '#1e1e22',
          backgroundImage:
            'repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(255,255,255,0.005) 2px, rgba(255,255,255,0.005) 3px)',
          boxShadow:
            '0 0 0 1px rgba(80,80,80,0.3), 0 2px 0 0 rgba(255,255,255,0.04) inset, 0 -2px 0 0 rgba(0,0,0,0.4) inset, 0 8px 32px rgba(0,0,0,0.6)',
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Top bezel highlight */}
        <div
          className="absolute top-0 left-0 right-0 h-[1px] pointer-events-none z-30"
          style={{
            background:
              'linear-gradient(90deg, transparent 5%, rgba(255,255,255,0.06) 30%, rgba(255,255,255,0.1) 50%, rgba(255,255,255,0.06) 70%, transparent 95%)',
          }}
        />

        <div className="relative z-10 flex flex-col h-full">
          {/* Main panel row: all sections */}
          <div className="flex items-stretch flex-1 min-h-0">
            {DEEPMIND_12_SECTIONS.map((section, idx) => (
              <div key={section.id} className="flex">
                {/* The section itself */}
                <div
                  className="flex flex-col"
                  style={{ flexGrow: section.flexGrow, minWidth: 0 }}
                >
                  {/* Section title label */}
                  {section.customSlot !== 'performance' &&
                    section.customSlot !== 'voices' && (
                      <div className="text-center pt-1.5 pb-0.5">
                        <span
                          className="text-[9px] font-bold tracking-[0.2em] uppercase"
                          style={{ color: DM_COLORS.sectionLabel }}
                        >
                          {section.title}
                        </span>
                      </div>
                    )}

                  {/* Section content */}
                  <div className="flex-1 min-h-0">
                    {renderSectionContent(section)}
                  </div>
                </div>

                {/* Divider between sections (not after last) */}
                {idx < DEEPMIND_12_SECTIONS.length - 1 && <Divider />}
              </div>
            ))}
          </div>

          {/* Keyboard (bottom) */}
          <div className="flex-shrink-0">
            {renderKeyboard()}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
