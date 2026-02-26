'use client';

import { motion } from 'framer-motion';
import { DisplayState } from '@/types/display';
import { DISPLAY_COLORS } from '@/lib/constants';
import ZoneViewScreen from './ZoneViewScreen';
import KeyRangeScreen from './KeyRangeScreen';
import WriteScreen from './WriteScreen';
import MenuScreen from './MenuScreen';
import SceneSelectScreen from './SceneSelectScreen';
import MixerScreen from './MixerScreen';
import SceneEditScreen from './SceneEditScreen';
import ZoneEditScreen from './ZoneEditScreen';
import EffectsEditScreen from './EffectsEditScreen';
import ToneEditZoomScreen from './ToneEditZoomScreen';
import ToneEditProScreen from './ToneEditProScreen';
import PatternScreen from './PatternScreen';
import PianoRollScreen from './PianoRollScreen';
import GroupScreen from './GroupScreen';
import SongScreen from './SongScreen';
import RecStandbyScreen from './RecStandbyScreen';
import MicroscopeScreen from './MicroscopeScreen';
import SamplingScreen from './SamplingScreen';
import SamplePadScreen from './SamplePadScreen';
import WaveEditScreen from './WaveEditScreen';
import PadModeScreen from './PadModeScreen';
import MultisampleEditScreen from './MultisampleEditScreen';
import SystemSettingsScreen from './SystemSettingsScreen';
import ArpeggioScreen from './ArpeggioScreen';
import ChordMemoryScreen from './ChordMemoryScreen';
import MotionalPadScreen from './MotionalPadScreen';
import SceneChainScreen from './SceneChainScreen';
import SmfControlScreen from './SmfControlScreen';
import PopupScreen from './PopupScreen';
import FileBrowserScreen from './FileBrowserScreen';
import ImportWizardScreen from './ImportWizardScreen';
import ExportWizardScreen from './ExportWizardScreen';

interface DisplayScreenProps {
  displayState: DisplayState;
  highlighted?: boolean;
}

// Effect pill labels for status bar
const EFFECT_PILLS = ['IFX1', 'IFX2', 'CHO', 'REV'];

function StatusBar({ displayState }: { displayState: DisplayState }) {
  const tempo = displayState.tempo ?? 120;
  const beat = displayState.beatSignature ?? '4/4';

  return (
    <div
      className="flex items-center justify-between px-2 py-[3px] font-mono border-b flex-shrink-0"
      style={{
        borderColor: DISPLAY_COLORS.border,
        backgroundColor: `${DISPLAY_COLORS.header}10`,
      }}
    >
      {/* Left: hamburger + SCENE + effect pills */}
      <div className="flex items-center gap-1.5">
        <span className="text-[10px]" style={{ color: DISPLAY_COLORS.header }}>
          &#9776;
        </span>
        <span
          className="text-[10px] font-bold tracking-wider"
          style={{ color: DISPLAY_COLORS.header }}
        >
          SCENE
        </span>
        <div className="flex gap-0.5 ml-1">
          {EFFECT_PILLS.map((pill) => (
            <span
              key={pill}
              className="text-[11px] px-1 rounded"
              style={{
                color: DISPLAY_COLORS.zoneMuted,
                backgroundColor: `${DISPLAY_COLORS.border}50`,
              }}
            >
              {pill}
            </span>
          ))}
        </div>
      </div>

      {/* Right: time signature, tempo, transport status */}
      <div className="flex items-center gap-1.5">
        <span className="text-[10px]" style={{ color: DISPLAY_COLORS.text }}>
          {beat}
        </span>
        <span className="text-[10px]" style={{ color: DISPLAY_COLORS.highlight }}>
          &#9833;={tempo}
        </span>
        <span
          className="text-[11px] px-1 rounded"
          style={{
            color: DISPLAY_COLORS.zoneMuted,
            backgroundColor: `${DISPLAY_COLORS.border}50`,
          }}
        >
          STOP
        </span>
      </div>
    </div>
  );
}

function ToneSelectScreen({
  items,
  selectedIndex = 0,
  title,
}: {
  items: { label: string; value?: string; selected?: boolean }[];
  selectedIndex?: number;
  title?: string;
}) {
  const categories = ['Piano', 'Organ', 'Keys', 'Strings', 'Synth'];
  const zoneLabel = title?.replace(/^TONE (?:SELECT|LIST)\s*-?\s*/, '').trim() ?? '';

  return (
    <div className="flex flex-col h-full font-mono">
      {/* Zone indicator + category tabs */}
      <div
        className="px-2 py-1 border-b"
        style={{ borderColor: `${DISPLAY_COLORS.border}60` }}
      >
        {zoneLabel && (
          <span className="text-[10px] mr-2" style={{ color: DISPLAY_COLORS.header }}>
            {zoneLabel}
          </span>
        )}
        <div className="flex gap-1 mt-0.5">
          {categories.map((cat, i) => (
            <span
              key={cat}
              className="text-[11px] px-1.5 py-0.5 rounded"
              style={{
                color: i === 0 ? DISPLAY_COLORS.highlight : DISPLAY_COLORS.zoneMuted,
                backgroundColor: i === 0 ? `${DISPLAY_COLORS.active}25` : 'transparent',
                border: `1px solid ${i === 0 ? DISPLAY_COLORS.active + '40' : DISPLAY_COLORS.border + '40'}`,
              }}
            >
              {cat}
            </span>
          ))}
        </div>
      </div>

      {/* Tone list */}
      <div className="flex-1 overflow-auto">
        {items.map((item, index) => {
          const isSelected = item.selected ?? index === selectedIndex;
          return (
            <div
              key={`${item.label}-${index}`}
              className="flex items-center justify-between px-2 py-[3px]"
              style={{
                backgroundColor: isSelected ? `${DISPLAY_COLORS.active}20` : 'transparent',
                borderLeft: isSelected ? `2px solid ${DISPLAY_COLORS.active}` : '2px solid transparent',
                borderBottom: `1px solid ${DISPLAY_COLORS.border}20`,
              }}
            >
              <div className="flex items-center gap-1.5">
                <span className="text-[11px] w-14" style={{ color: DISPLAY_COLORS.zoneMuted }}>
                  Z-Core PR-A
                </span>
                <span
                  className="text-[11px]"
                  style={{
                    color: isSelected ? DISPLAY_COLORS.highlight : DISPLAY_COLORS.text,
                  }}
                >
                  {String(index + 1).padStart(4, '0')}:{item.label}
                </span>
              </div>
              {item.value && (
                <span className="text-[10px]" style={{ color: DISPLAY_COLORS.zoneMuted }}>
                  {item.value}
                </span>
              )}
            </div>
          );
        })}
      </div>

      {/* Footer */}
      <div
        className="flex items-center justify-between px-2 py-1 border-t"
        style={{ borderColor: `${DISPLAY_COLORS.border}60` }}
      >
        <span className="text-[11px]" style={{ color: DISPLAY_COLORS.zoneMuted }}>
          PAGE 1/{Math.max(1, Math.ceil(items.length / 6))}
        </span>
        <div className="flex gap-2">
          <span
            className="text-[11px] px-1.5 py-0.5 rounded border"
            style={{ color: DISPLAY_COLORS.warning, borderColor: `${DISPLAY_COLORS.warning}60` }}
          >
            CANCEL
          </span>
          <span
            className="text-[11px] px-1.5 py-0.5 rounded border font-bold"
            style={{ color: DISPLAY_COLORS.highlight, borderColor: `${DISPLAY_COLORS.highlight}60` }}
          >
            OK
          </span>
        </div>
      </div>
    </div>
  );
}

export default function DisplayScreen({ displayState, highlighted = false }: DisplayScreenProps) {
  const renderScreen = () => {
    switch (displayState.screenType) {
      case 'zone-view':
        return displayState.zones ? (
          <ZoneViewScreen
            zones={displayState.zones}
            sceneName={displayState.sceneName}
            sceneNumber={displayState.sceneNumber}
            viewMode={displayState.zoneViewMode}
          />
        ) : null;

      case 'key-range':
        return (
          <KeyRangeScreen
            zoneNumber={displayState.selectedIndex ?? 1}
            lowNote={displayState.parameterName ?? 'C2'}
            highNote={displayState.parameterValue ?? 'C6'}
            selectedField={undefined}
          />
        );

      case 'write':
        return (
          <WriteScreen
            confirmText={displayState.confirmText}
            sceneName={displayState.sceneName}
            sceneNumber={displayState.sceneNumber}
          />
        );

      case 'tone-select':
        return (
          <ToneSelectScreen
            items={
              displayState.menuItems?.map((item) => ({
                label: item.label,
                value: item.value,
                selected: item.selected,
              })) ?? []
            }
            selectedIndex={displayState.selectedIndex}
            title={displayState.title}
          />
        );

      case 'menu':
      case 'effect':
        return (
          <MenuScreen
            items={
              displayState.menuItems?.map((item) => ({
                label: item.label,
                value: item.value,
                selected: item.selected,
              })) ?? []
            }
            selectedIndex={displayState.selectedIndex}
          />
        );

      case 'mixer':
        return displayState.zones ? (
          <MixerScreen
            zones={displayState.zones}
            viewMode={displayState.mixerViewMode}
            selectedZone={displayState.selectedIndex}
          />
        ) : null;

      case 'scene-edit':
        return (
          <SceneEditScreen
            activeTab={displayState.activeTab}
            parameters={displayState.menuItems}
            selectedIndex={displayState.selectedIndex}
          />
        );

      case 'zone-edit':
        return (
          <ZoneEditScreen
            zones={displayState.zones}
            activeTab={displayState.activeTab}
            category={displayState.zoneEditCategory}
            selectedIndex={displayState.selectedIndex}
          />
        );

      case 'effects-edit':
        return (
          <EffectsEditScreen
            zones={displayState.zones}
            activeTab={displayState.activeTab}
            selectedIndex={displayState.selectedIndex}
          />
        );

      case 'tone-edit-zoom':
        return (
          <ToneEditZoomScreen
            toneType={displayState.toneEditData?.toneType}
            activeTab={displayState.activeTab}
            selectedIndex={displayState.selectedIndex}
            activePartials={displayState.toneEditData?.activePartials}
            selectedPartial={displayState.toneEditData?.selectedPartial}
          />
        );

      case 'tone-edit-pro':
        return (
          <ToneEditProScreen
            toneType={displayState.toneEditData?.toneType}
            activeTab={displayState.activeTab}
            parameters={displayState.menuItems}
            selectedIndex={displayState.selectedIndex}
            selectedPartial={displayState.toneEditData?.selectedPartial}
          />
        );

      case 'pattern':
        return (
          <PatternScreen
            viewMode={displayState.sequencerData?.viewMode}
            selectedTrack={displayState.sequencerData?.selectedTrack}
            selectedVariation={displayState.sequencerData?.selectedVariation}
          />
        );

      case 'piano-roll':
        return (
          <PianoRollScreen
            selectedIndex={displayState.selectedIndex}
            currentMeasure={displayState.sequencerData?.currentMeasure}
          />
        );

      case 'group':
        return (
          <GroupScreen
            selectedIndex={displayState.selectedIndex}
          />
        );

      case 'song':
        return (
          <SongScreen
            selectedIndex={displayState.selectedIndex}
          />
        );

      case 'rec-standby':
        return (
          <RecStandbyScreen
            selectedIndex={displayState.selectedIndex}
            recMode={displayState.sequencerData?.recMode}
            selectedTrack={displayState.sequencerData?.selectedTrack}
          />
        );

      case 'microscope':
        return (
          <MicroscopeScreen
            selectedIndex={displayState.selectedIndex}
          />
        );

      case 'sampling':
        return (
          <SamplingScreen
            selectedIndex={displayState.selectedIndex}
          />
        );

      case 'sample-pad':
        return (
          <SamplePadScreen
            selectedIndex={displayState.selectedIndex}
            activeTab={displayState.activeTab}
          />
        );

      case 'wave-edit':
        return (
          <WaveEditScreen
            selectedIndex={displayState.selectedIndex}
          />
        );

      case 'pad-mode':
        return (
          <PadModeScreen
            selectedIndex={displayState.selectedIndex}
          />
        );

      case 'multisample-edit':
        return (
          <MultisampleEditScreen
            selectedIndex={displayState.selectedIndex}
            activeTab={displayState.activeTab}
          />
        );

      case 'system-settings':
        return (
          <SystemSettingsScreen
            selectedIndex={displayState.selectedIndex}
            activeTab={displayState.activeTab}
          />
        );

      case 'arpeggio':
        return (
          <ArpeggioScreen
            selectedIndex={displayState.selectedIndex}
          />
        );

      case 'chord-memory':
        return (
          <ChordMemoryScreen
            selectedIndex={displayState.selectedIndex}
          />
        );

      case 'motional-pad':
        return (
          <MotionalPadScreen
            selectedIndex={displayState.selectedIndex}
          />
        );

      case 'scene-chain':
        return (
          <SceneChainScreen
            selectedIndex={displayState.selectedIndex}
          />
        );

      case 'smf-control':
        return (
          <SmfControlScreen
            selectedIndex={displayState.selectedIndex}
          />
        );

      case 'popup':
        return (
          <PopupScreen
            popupType={displayState.popupData?.popupType}
            parameterName={displayState.parameterName}
            parameterValue={displayState.parameterValue}
            message={displayState.popupData?.message}
            options={displayState.popupData?.options}
            currentText={displayState.popupData?.currentText}
            selectedIndex={displayState.selectedIndex}
          />
        );

      case 'file-browser':
        return (
          <FileBrowserScreen
            selectedIndex={displayState.selectedIndex}
            activeTab={displayState.activeTab}
          />
        );

      case 'import-wizard':
        return (
          <ImportWizardScreen
            selectedIndex={displayState.selectedIndex}
            activeTab={displayState.activeTab}
          />
        );

      case 'export-wizard':
        return (
          <ExportWizardScreen
            selectedIndex={displayState.selectedIndex}
            activeTab={displayState.activeTab}
          />
        );

      case 'home':
      default:
        return <SceneSelectScreen displayState={displayState} />;
    }
  };

  const headerTitle = displayState.screenType === 'home'
    ? undefined
    : displayState.title ?? screenTitle(displayState.screenType);
  const showBackArrow = displayState.screenType !== 'home';
  const showDispMode = displayState.screenType === 'zone-view' && displayState.zoneViewMode;

  return (
    <motion.div
      className="relative overflow-hidden rounded-lg w-full flex flex-col"
      data-display="true"
      style={{
        aspectRatio: '16 / 9',
        maxHeight: '100%',
        backgroundColor: DISPLAY_COLORS.background,
        boxShadow: highlighted
          ? `0 0 16px 4px rgba(0, 170, 255, 0.5), inset 0 0 30px rgba(0, 20, 60, 0.5)`
          : `0 0 8px 1px rgba(40, 60, 120, 0.3), inset 0 0 30px rgba(0, 20, 60, 0.5)`,
        border: highlighted
          ? '2px solid rgba(0,170,255,0.6)'
          : `2px solid ${DISPLAY_COLORS.border}`,
      }}
      animate={{
        boxShadow: highlighted
          ? `0 0 16px 4px rgba(0, 170, 255, 0.5), inset 0 0 30px rgba(0, 20, 60, 0.5)`
          : `0 0 8px 1px rgba(40, 60, 120, 0.3), inset 0 0 30px rgba(0, 20, 60, 0.5)`,
      }}
      transition={{ duration: 0.3 }}
    >
      {/* LCD bezel - outer dark ring */}
      <div
        className="absolute inset-0 pointer-events-none z-0 rounded-lg"
        style={{
          boxShadow:
            'inset 0 0 8px 2px rgba(0,0,0,0.6), inset 0 2px 4px rgba(0,0,0,0.4)',
        }}
      />

      {/* Scanline overlay effect */}
      <div
        className="absolute inset-0 pointer-events-none z-10"
        style={{
          background:
            'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.06) 2px, rgba(0,0,0,0.06) 4px)',
        }}
      />

      {/* Subtle screen glow gradient */}
      <div
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          background:
            'radial-gradient(ellipse at center, rgba(40, 80, 140, 0.08) 0%, transparent 70%)',
        }}
      />

      {/* Persistent status bar — all screens */}
      <div className="relative z-20">
        <StatusBar displayState={displayState} />
      </div>

      {/* Header bar — shown on non-home screens */}
      {headerTitle && (
        <div
          className="relative z-20 flex items-center justify-between px-2 py-0.5 border-b flex-shrink-0"
          style={{
            borderColor: DISPLAY_COLORS.border,
            backgroundColor: `${DISPLAY_COLORS.header}10`,
          }}
        >
          <div className="flex items-center gap-1.5">
            {showBackArrow && (
              <span className="text-[11px]" style={{ color: DISPLAY_COLORS.header }}>
                &#9664;
              </span>
            )}
            <span
              className="text-[11px] font-mono font-bold tracking-wider"
              style={{ color: DISPLAY_COLORS.header }}
            >
              {headerTitle}
            </span>
          </div>
          <div className="flex items-center gap-1.5">
            {showDispMode && (
              <span className="text-[10px] font-mono" style={{ color: DISPLAY_COLORS.text }}>
                DISP: {displayState.zoneViewMode}
              </span>
            )}
            {displayState.statusText && (
              <span
                className="text-[10px] font-mono"
                style={{ color: DISPLAY_COLORS.text }}
              >
                {displayState.statusText}
              </span>
            )}
          </div>
        </div>
      )}

      {/* Screen content - flex-1 to fill remaining space */}
      <div className="relative z-20 flex-1 min-h-0 overflow-auto">
        {renderScreen()}
      </div>
    </motion.div>
  );
}

function screenTitle(screenType: string): string {
  switch (screenType) {
    case 'home':
      return 'SCENE SELECT';
    case 'zone-view':
      return 'ZONE VIEW';
    case 'key-range':
      return 'KEY RANGE';
    case 'write':
      return 'SCENE WRITE';
    case 'menu':
      return 'MENU';
    case 'tone-select':
      return 'TONE LIST';
    case 'effect':
      return 'EFFECTS';
    case 'mixer':
      return 'MIXER';
    case 'scene-edit':
      return 'SCENE EDIT';
    case 'zone-edit':
      return 'ZONE EDIT';
    case 'effects-edit':
      return 'EFFECTS EDIT';
    case 'tone-edit-zoom':
      return 'TONE EDIT ZOOM';
    case 'tone-edit-pro':
      return 'TONE EDIT PRO';
    case 'pattern':
      return 'PATTERN';
    case 'piano-roll':
      return 'PIANO ROLL';
    case 'group':
      return 'GROUP';
    case 'song':
      return 'SONG';
    case 'rec-standby':
      return 'REC STANDBY';
    case 'microscope':
      return 'MICROSCOPE';
    case 'sampling':
      return 'SAMPLING STANDBY';
    case 'sample-pad':
      return 'SAMPLE PAD';
    case 'wave-edit':
      return 'WAVE EDIT';
    case 'pad-mode':
      return 'PAD MODE';
    case 'multisample-edit':
      return 'MULTISAMPLE EDIT';
    case 'system-settings':
      return 'SYSTEM';
    case 'arpeggio':
      return 'ARPEGGIO';
    case 'chord-memory':
      return 'CHORD MEMORY';
    case 'motional-pad':
      return 'MOTIONAL PAD';
    case 'scene-chain':
      return 'SCENE CHAIN';
    case 'smf-control':
      return 'SMF CONTROL';
    case 'popup':
      return 'POPUP';
    case 'file-browser':
      return 'FILE BROWSER';
    case 'import-wizard':
      return 'IMPORT';
    case 'export-wizard':
      return 'EXPORT';
    default:
      return 'FANTOM-08';
  }
}
