'use client';

import { motion } from 'framer-motion';
import { DISPLAY_COLORS } from '@/lib/constants';
import { PopupType } from '@/types/display';

/**
 * POPUP screen — Multi-variant popup/overlay system (manual p.13-14, 16, 56).
 *
 * Sub-types:
 * - value: Floating parameter name + large value (auto-dismiss overlay, p.14)
 * - confirm: Message + OK/CANCEL buttons (p.56)
 * - rename: QWERTY keyboard for text input (p.16)
 * - dropdown: Scrollable option list with CANCEL/OK (p.16 REC STANDBY)
 * - numeric-input: Numeric keypad for direct value entry (p.13)
 */

interface PopupScreenProps {
  popupType?: PopupType;
  parameterName?: string;
  parameterValue?: string;
  message?: string;
  options?: string[];
  currentText?: string;
  selectedIndex?: number;
}

/** Value popup — floating overlay showing parameter + value */
function ValuePopup({
  parameterName = 'ZONE1',
  parameterValue = 'LEVEL',
  selectedIndex = 73,
}: {
  parameterName?: string;
  parameterValue?: string;
  selectedIndex?: number;
}) {
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <motion.div
        className="flex flex-col items-center rounded-lg px-6 py-4"
        style={{
          backgroundColor: `${DISPLAY_COLORS.border}90`,
          border: `2px solid ${DISPLAY_COLORS.active}60`,
          boxShadow: `0 4px 20px rgba(0,0,0,0.5)`,
        }}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.15 }}
      >
        <span className="text-[9px]" style={{ color: DISPLAY_COLORS.zoneMuted }}>
          {parameterName}
        </span>
        <span className="text-[9px]" style={{ color: DISPLAY_COLORS.text }}>
          {parameterValue}
        </span>
        <span
          className="text-[24px] font-bold mt-1"
          style={{ color: DISPLAY_COLORS.highlight }}
        >
          {selectedIndex}
        </span>
      </motion.div>
    </div>
  );
}

/** Confirm dialog — message + OK/CANCEL */
function ConfirmPopup({ message = 'Are you sure?' }: { message?: string }) {
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <motion.div
        className="flex flex-col items-center rounded-lg px-6 py-4 gap-3"
        style={{
          backgroundColor: `${DISPLAY_COLORS.border}90`,
          border: `2px solid ${DISPLAY_COLORS.active}40`,
          boxShadow: `0 4px 20px rgba(0,0,0,0.5)`,
          minWidth: 160,
        }}
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.15 }}
      >
        <span
          className="text-[10px] text-center"
          style={{ color: DISPLAY_COLORS.text }}
        >
          {message}
        </span>
        <div className="flex gap-4">
          <span
            className="text-[9px] px-3 py-1 rounded"
            style={{
              color: DISPLAY_COLORS.warning,
              border: `1px solid ${DISPLAY_COLORS.warning}60`,
            }}
          >
            CANCEL
          </span>
          <span
            className="text-[9px] px-3 py-1 rounded font-bold"
            style={{
              color: DISPLAY_COLORS.highlight,
              border: `1px solid ${DISPLAY_COLORS.highlight}60`,
            }}
          >
            OK
          </span>
        </div>
      </motion.div>
    </div>
  );
}

/** Rename screen — QWERTY keyboard */
function RenamePopup({ currentText = 'S12 HIT' }: { currentText?: string }) {
  const rows = [
    ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'],
    ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
    ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
    ['Z', 'X', 'C', 'V', 'B', 'N', 'M'],
  ];

  return (
    <div className="flex flex-col h-full">
      {/* Current text display */}
      <div
        className="flex items-center justify-between px-2 py-1 flex-shrink-0"
        style={{
          borderBottom: `1px solid ${DISPLAY_COLORS.border}40`,
          backgroundColor: `${DISPLAY_COLORS.border}15`,
        }}
      >
        <span className="text-[10px] font-bold" style={{ color: DISPLAY_COLORS.highlight }}>
          {currentText}
        </span>
      </div>

      {/* Keyboard rows */}
      <div className="flex-1 flex flex-col justify-center gap-0.5 px-1 py-1">
        {rows.map((row, rowIdx) => (
          <div key={rowIdx} className="flex justify-center gap-0.5">
            {rowIdx === 3 && (
              <span
                className="text-[7px] px-1.5 py-1 rounded"
                style={{
                  color: DISPLAY_COLORS.zoneMuted,
                  backgroundColor: `${DISPLAY_COLORS.border}30`,
                }}
              >
                Shift
              </span>
            )}
            {row.map((key) => (
              <motion.span
                key={key}
                className="text-[8px] px-1.5 py-1 rounded text-center"
                style={{
                  minWidth: 16,
                  color: DISPLAY_COLORS.text,
                  backgroundColor: `${DISPLAY_COLORS.border}25`,
                  border: `1px solid ${DISPLAY_COLORS.border}30`,
                }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.05, delay: rowIdx * 0.02 }}
              >
                {key}
              </motion.span>
            ))}
          </div>
        ))}

        {/* Bottom row: special keys */}
        <div className="flex justify-center gap-0.5 mt-0.5">
          <span
            className="text-[7px] px-2 py-1 rounded"
            style={{
              color: DISPLAY_COLORS.zoneMuted,
              backgroundColor: `${DISPLAY_COLORS.border}30`,
            }}
          >
            !@#$
          </span>
          <span
            className="text-[7px] px-4 py-1 rounded"
            style={{
              color: DISPLAY_COLORS.text,
              backgroundColor: `${DISPLAY_COLORS.border}25`,
              border: `1px solid ${DISPLAY_COLORS.border}30`,
            }}
          >
            Space
          </span>
          <span
            className="text-[7px] px-1 py-1 rounded"
            style={{
              color: DISPLAY_COLORS.zoneMuted,
              backgroundColor: `${DISPLAY_COLORS.border}30`,
            }}
          >
            &lt;
          </span>
          <span
            className="text-[7px] px-1 py-1 rounded"
            style={{
              color: DISPLAY_COLORS.zoneMuted,
              backgroundColor: `${DISPLAY_COLORS.border}30`,
            }}
          >
            &gt;
          </span>
          <span
            className="text-[6px] px-1 py-1 rounded"
            style={{
              color: DISPLAY_COLORS.warning,
              backgroundColor: `${DISPLAY_COLORS.border}30`,
            }}
          >
            Back Space
          </span>
          <span
            className="text-[6px] px-1 py-1 rounded"
            style={{
              color: DISPLAY_COLORS.warning,
              backgroundColor: `${DISPLAY_COLORS.border}30`,
            }}
          >
            Clear All
          </span>
        </div>
      </div>

      {/* Footer: CANCEL / OK */}
      <div
        className="flex items-center justify-end gap-3 px-2 py-1 flex-shrink-0"
        style={{
          borderTop: `1px solid ${DISPLAY_COLORS.border}40`,
          backgroundColor: `${DISPLAY_COLORS.border}15`,
        }}
      >
        <span
          className="text-[8px] px-2 py-0.5 rounded"
          style={{
            color: DISPLAY_COLORS.warning,
            border: `1px solid ${DISPLAY_COLORS.warning}60`,
          }}
        >
          CANCEL
        </span>
        <span
          className="text-[8px] px-2 py-0.5 rounded font-bold"
          style={{
            color: DISPLAY_COLORS.highlight,
            border: `1px solid ${DISPLAY_COLORS.highlight}60`,
          }}
        >
          OK
        </span>
      </div>
    </div>
  );
}

/** Dropdown — scrollable option list */
function DropdownPopup({
  options = ['NONE', '1 MEAS', '2 MEAS', 'WAIT NOTE'],
  selectedIndex = 0,
}: {
  options?: string[];
  selectedIndex?: number;
}) {
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <motion.div
        className="flex flex-col rounded-lg overflow-hidden"
        style={{
          backgroundColor: `${DISPLAY_COLORS.border}95`,
          border: `2px solid ${DISPLAY_COLORS.active}40`,
          boxShadow: `0 4px 20px rgba(0,0,0,0.5)`,
          minWidth: 120,
        }}
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.12 }}
      >
        {/* Close button */}
        <div className="flex justify-end px-1.5 pt-1">
          <span className="text-[8px]" style={{ color: DISPLAY_COLORS.zoneMuted }}>
            ✕
          </span>
        </div>

        {/* Options */}
        {options.map((opt, i) => {
          const isSelected = i === selectedIndex;
          return (
            <div
              key={opt}
              className="px-3 py-[3px]"
              style={{
                backgroundColor: isSelected ? `${DISPLAY_COLORS.active}25` : 'transparent',
              }}
            >
              <span
                className="text-[9px]"
                style={{
                  color: isSelected ? DISPLAY_COLORS.highlight : DISPLAY_COLORS.text,
                  fontWeight: isSelected ? 'bold' : 'normal',
                }}
              >
                {opt}
              </span>
            </div>
          );
        })}

        {/* Footer */}
        <div className="flex justify-end gap-2 px-2 py-1.5">
          <span
            className="text-[8px] px-2 py-0.5 rounded"
            style={{
              color: DISPLAY_COLORS.warning,
              border: `1px solid ${DISPLAY_COLORS.warning}50`,
            }}
          >
            CANCEL
          </span>
          <span
            className="text-[8px] px-2 py-0.5 rounded font-bold"
            style={{
              color: DISPLAY_COLORS.highlight,
              border: `1px solid ${DISPLAY_COLORS.highlight}50`,
            }}
          >
            OK
          </span>
        </div>
      </motion.div>
    </div>
  );
}

/** Numeric input — keypad for direct value entry */
function NumericInputPopup({
  parameterName = 'LEVEL',
  parameterValue = '73',
}: {
  parameterName?: string;
  parameterValue?: string;
}) {
  const keys = [
    ['7', '8', '9'],
    ['4', '5', '6'],
    ['1', '2', '3'],
    ['+/-', '0', '.'],
  ];

  return (
    <div className="flex flex-col items-center justify-center h-full">
      <motion.div
        className="flex flex-col rounded-lg overflow-hidden"
        style={{
          backgroundColor: `${DISPLAY_COLORS.border}95`,
          border: `2px solid ${DISPLAY_COLORS.active}40`,
          boxShadow: `0 4px 20px rgba(0,0,0,0.5)`,
          minWidth: 110,
        }}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.12 }}
      >
        {/* Parameter + current value */}
        <div className="px-3 py-1.5" style={{ borderBottom: `1px solid ${DISPLAY_COLORS.border}40` }}>
          <span className="text-[7px]" style={{ color: DISPLAY_COLORS.zoneMuted }}>
            {parameterName}
          </span>
          <div
            className="text-[12px] font-bold text-right mt-0.5"
            style={{ color: DISPLAY_COLORS.highlight }}
          >
            {parameterValue}
          </div>
        </div>

        {/* Keypad */}
        <div className="flex flex-col gap-0.5 p-1.5">
          {keys.map((row, rowIdx) => (
            <div key={rowIdx} className="flex gap-0.5 justify-center">
              {row.map((key) => (
                <span
                  key={key}
                  className="text-[9px] px-2 py-1 rounded text-center"
                  style={{
                    minWidth: 24,
                    color: DISPLAY_COLORS.text,
                    backgroundColor: `${DISPLAY_COLORS.border}30`,
                    border: `1px solid ${DISPLAY_COLORS.border}40`,
                  }}
                >
                  {key}
                </span>
              ))}
            </div>
          ))}
        </div>

        {/* Footer */}
        <div
          className="flex justify-end gap-2 px-2 py-1.5"
          style={{ borderTop: `1px solid ${DISPLAY_COLORS.border}40` }}
        >
          <span
            className="text-[8px] px-2 py-0.5 rounded"
            style={{
              color: DISPLAY_COLORS.warning,
              border: `1px solid ${DISPLAY_COLORS.warning}50`,
            }}
          >
            CANCEL
          </span>
          <span
            className="text-[8px] px-2 py-0.5 rounded font-bold"
            style={{
              color: DISPLAY_COLORS.highlight,
              border: `1px solid ${DISPLAY_COLORS.highlight}50`,
            }}
          >
            OK
          </span>
        </div>
      </motion.div>
    </div>
  );
}

export default function PopupScreen({
  popupType = 'value',
  parameterName,
  parameterValue,
  message,
  options,
  currentText,
  selectedIndex = 0,
}: PopupScreenProps) {
  switch (popupType) {
    case 'value':
      return (
        <ValuePopup
          parameterName={parameterName}
          parameterValue={parameterValue}
          selectedIndex={selectedIndex}
        />
      );
    case 'confirm':
      return <ConfirmPopup message={message} />;
    case 'rename':
      return <RenamePopup currentText={currentText} />;
    case 'dropdown':
      return <DropdownPopup options={options} selectedIndex={selectedIndex} />;
    case 'numeric-input':
      return (
        <NumericInputPopup
          parameterName={parameterName}
          parameterValue={parameterValue}
        />
      );
    default:
      return (
        <ValuePopup
          parameterName={parameterName}
          parameterValue={parameterValue}
          selectedIndex={selectedIndex}
        />
      );
  }
}
