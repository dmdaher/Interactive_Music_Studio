'use client';

import { motion } from 'framer-motion';
import { DISPLAY_COLORS } from '@/lib/constants';

/**
 * SYSTEM SETTINGS screen — Global settings editor (manual p.164).
 *
 * Layout:
 * - Left sidebar: 17 category tabs (GENERAL, KEYBOARD, PEDAL, WHEEL 1/2,
 *   S1/S2, SLIDER, KNOB, USB, MIDI, SOUND, SYNC/TEMPO, SEQUENCER,
 *   CLICK, NOTE PAD, CONTROL, LICENSE, INFO)
 * - Right: Parameter list with label/value pairs
 * - Bottom: scroll arrows
 */

const SYSTEM_TABS = [
  'GENERAL', 'KEYBOARD', 'PEDAL', 'WHEEL 1/2', 'S1/S2', 'SLIDER',
  'KNOB', 'USB', 'MIDI', 'SOUND', 'SYNC/TEMPO', 'SEQUENCER',
  'CLICK', 'NOTE PAD', 'CONTROL', 'LICENSE', 'INFO',
];

/** Demo parameters per tab */
const TAB_PARAMS: Record<string, { label: string; value: string }[]> = {
  GENERAL: [
    { label: 'Auto Off', value: 'OFF' },
    { label: 'USB Driver', value: 'GENERIC' },
    { label: 'File Verify', value: 'OFF' },
    { label: 'LCD Brightness', value: '20' },
    { label: 'LED Brightness', value: 'MAX' },
    { label: 'WHEEL LED Brightness', value: 'MAX' },
    { label: 'Zone Sw Indicator', value: 'ON' },
    { label: 'Zone Int/Ext Control', value: 'BASIC' },
    { label: 'Encoder Speed', value: 'FAST' },
  ],
  KEYBOARD: [
    { label: 'Keyboard Velocity', value: 'REAL' },
    { label: 'Keyboard Velocity Curve', value: 'MEDIUM' },
    { label: 'Keyboard Velocity Curve Offset', value: '0' },
    { label: 'Arpeggio Trigger', value: 'OFF' },
    { label: 'Arpeggio Switch Mode', value: 'OFF/ON' },
    { label: 'Chord Memory Switch Mode', value: 'OFF/ON' },
  ],
  MIDI: [
    { label: 'Device ID', value: '17' },
    { label: 'Scene Control Channel', value: '1' },
    { label: 'USB-MIDI Thru', value: 'OFF' },
    { label: 'Remote Keyboard Switch', value: 'OFF' },
    { label: 'Transmit Program Change', value: 'ON' },
    { label: 'Transmit Bank Select', value: 'ON' },
    { label: 'Soft Through', value: 'OFF' },
  ],
};

interface SystemSettingsScreenProps {
  selectedIndex?: number;
  activeTab?: string;
}

export default function SystemSettingsScreen({
  selectedIndex = 0,
  activeTab = 'GENERAL',
}: SystemSettingsScreenProps) {
  const params = TAB_PARAMS[activeTab] ?? TAB_PARAMS['GENERAL'];

  return (
    <div className="flex h-full font-mono">
      {/* Left sidebar: category tabs */}
      <div
        className="flex flex-col flex-shrink-0 overflow-auto"
        style={{
          width: 68,
          borderRight: `1px solid ${DISPLAY_COLORS.border}40`,
          backgroundColor: `${DISPLAY_COLORS.border}10`,
        }}
      >
        {SYSTEM_TABS.map((tab) => {
          const isActive = tab === activeTab;
          return (
            <div
              key={tab}
              className="px-1.5 py-[3px]"
              style={{
                backgroundColor: isActive ? `${DISPLAY_COLORS.active}20` : 'transparent',
                borderLeft: isActive
                  ? `2px solid ${DISPLAY_COLORS.active}`
                  : '2px solid transparent',
                borderBottom: `1px solid ${DISPLAY_COLORS.border}15`,
              }}
            >
              <span
                className="text-[7px] leading-tight"
                style={{
                  color: isActive ? DISPLAY_COLORS.highlight : DISPLAY_COLORS.zoneMuted,
                }}
              >
                {tab}
              </span>
            </div>
          );
        })}
      </div>

      {/* Right: parameter list */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Tab header */}
        <div
          className="px-2 py-[3px] flex-shrink-0"
          style={{
            borderBottom: `1px solid ${DISPLAY_COLORS.border}30`,
            backgroundColor: `${DISPLAY_COLORS.border}15`,
          }}
        >
          <span className="text-[8px] font-bold" style={{ color: DISPLAY_COLORS.header }}>
            {activeTab}
          </span>
        </div>

        {/* Parameters */}
        <div className="flex-1 overflow-auto">
          {params.map((param, index) => {
            const isSelected = index === selectedIndex;
            return (
              <motion.div
                key={param.label}
                className="flex items-center justify-between px-2 py-[3px]"
                style={{
                  backgroundColor: isSelected ? `${DISPLAY_COLORS.active}15` : 'transparent',
                  borderLeft: isSelected
                    ? `2px solid ${DISPLAY_COLORS.active}`
                    : '2px solid transparent',
                  borderBottom: `1px solid ${DISPLAY_COLORS.border}10`,
                }}
                initial={{ opacity: 0, x: 4 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.1, delay: index * 0.02 }}
              >
                <span
                  className="text-[8px]"
                  style={{
                    color: isSelected ? DISPLAY_COLORS.text : DISPLAY_COLORS.zoneMuted,
                  }}
                >
                  {param.label}
                </span>
                <span
                  className="text-[8px] font-bold"
                  style={{
                    color: isSelected ? DISPLAY_COLORS.highlight : DISPLAY_COLORS.text,
                  }}
                >
                  {param.value}
                </span>
              </motion.div>
            );
          })}
        </div>

        {/* Footer scroll indicators */}
        <div
          className="flex items-center justify-center gap-2 px-2 py-0.5 flex-shrink-0"
          style={{
            borderTop: `1px solid ${DISPLAY_COLORS.border}40`,
            backgroundColor: `${DISPLAY_COLORS.border}15`,
          }}
        >
          <span className="text-[8px]" style={{ color: DISPLAY_COLORS.zoneMuted }}>
            &#9650;
          </span>
          <span className="text-[8px]" style={{ color: DISPLAY_COLORS.zoneMuted }}>
            &#9660;
          </span>
        </div>
      </div>
    </div>
  );
}
