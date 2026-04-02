'use client';

import { motion } from 'framer-motion';
import PanelButton from '@/components/controls/PanelButton';
import { PanelState } from '@/types/panel';

interface SequencerSectionProps {
  panelState: PanelState;
  highlightedControls: string[];
  onButtonClick?: (id: string) => void;
}

export default function SequencerSection({
  panelState,
  highlightedControls,
  onButtonClick,
}: SequencerSectionProps) {
  const isHighlighted = (id: string) => highlightedControls.includes(id);
  const getState = (id: string) => panelState[id] ?? { active: false };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3, delay: 0.25 }}
    >
      <div data-section-id="sequencer">
          <div
            className="absolute flex items-center justify-center"
            style={{
              left: 900,
              top: 24,
              width: 28,
              height: 54,
            }}
          >
            <div>
              <PanelButton
                id="pattern"
                label=""
                width={28}
                height={54}
                active={getState('pattern').active}
                highlighted={isHighlighted('pattern')}
                onClick={() => onButtonClick?.('pattern')}
              />
            </div>
          </div>
        <div
          className="absolute pointer-events-none"
          style={{
            left: 900,
            top: 12,
            width: 28,
            textAlign: 'center',
          }}
        >
          <span className="font-medium text-gray-400 uppercase tracking-wider break-words" style={{ fontSize: 8 }}>
            PATTERN
          </span>
        </div>
          <div
            className="absolute flex items-center justify-center"
            style={{
              left: 900,
              top: 24,
              width: 28,
              height: 54,
            }}
          >
            <div>
              <PanelButton
                id="group"
                label=""
                width={28}
                height={54}
                active={getState('group').active}
                highlighted={isHighlighted('group')}
                onClick={() => onButtonClick?.('group')}
              />
            </div>
          </div>
        <div
          className="absolute pointer-events-none"
          style={{
            left: 900,
            top: 12,
            width: 28,
            textAlign: 'center',
          }}
        >
          <span className="font-medium text-gray-400 uppercase tracking-wider break-words" style={{ fontSize: 8 }}>
            GROUP
          </span>
        </div>
          <div
            className="absolute flex items-center justify-center"
            style={{
              left: 935,
              top: 24,
              width: 28,
              height: 54,
            }}
          >
            <div>
              <PanelButton
                id="song"
                label=""
                width={28}
                height={54}
                active={getState('song').active}
                highlighted={isHighlighted('song')}
                onClick={() => onButtonClick?.('song')}
              />
            </div>
          </div>
        <div
          className="absolute pointer-events-none"
          style={{
            left: 935,
            top: 12,
            width: 28,
            textAlign: 'center',
          }}
        >
          <span className="font-medium text-gray-400 uppercase tracking-wider break-words" style={{ fontSize: 8 }}>
            SONG
          </span>
        </div>
          <div
            className="absolute flex items-center justify-center"
            style={{
              left: 935,
              top: 24,
              width: 28,
              height: 54,
            }}
          >
            <div>
              <PanelButton
                id="tr-rec"
                label=""
                width={28}
                height={54}
                active={getState('tr-rec').active}
                highlighted={isHighlighted('tr-rec')}
                onClick={() => onButtonClick?.('tr-rec')}
              />
            </div>
          </div>
        <div
          className="absolute pointer-events-none"
          style={{
            left: 935,
            top: 12,
            width: 28,
            textAlign: 'center',
          }}
        >
          <span className="font-medium text-gray-400 uppercase tracking-wider break-words" style={{ fontSize: 8 }}>
            TR-REC
          </span>
        </div>
          <div
            className="absolute flex items-center justify-center"
            style={{
              left: 958,
              top: 24,
              width: 28,
              height: 54,
            }}
          >
            <div>
              <PanelButton
                id="rhythm-ptn"
                label=""
                width={28}
                height={54}
                active={getState('rhythm-ptn').active}
                highlighted={isHighlighted('rhythm-ptn')}
                onClick={() => onButtonClick?.('rhythm-ptn')}
              />
            </div>
          </div>
        <div
          className="absolute pointer-events-none"
          style={{
            left: 958,
            top: 12,
            width: 28,
            textAlign: 'center',
          }}
        >
          <span className="font-medium text-gray-400 uppercase tracking-wider break-words" style={{ fontSize: 8 }}>
            RHYTHM PTN
          </span>
        </div>
          <div
            className="absolute flex items-center justify-center"
            style={{
              left: 991,
              top: 24,
              width: 28,
              height: 54,
            }}
          >
            <div>
              <PanelButton
                id="stop"
                label=""
                width={28}
                height={54}
                active={getState('stop').active}
                highlighted={isHighlighted('stop')}
                onClick={() => onButtonClick?.('stop')}
              />
            </div>
          </div>
        <div
          className="absolute pointer-events-none"
          style={{
            left: 991,
            top: 12,
            width: 28,
            textAlign: 'center',
          }}
        >
          <span className="font-medium text-gray-400 uppercase tracking-wider break-words" style={{ fontSize: 8 }}>
            STOP
          </span>
        </div>
          <div
            className="absolute flex items-center justify-center"
            style={{
              left: 1007,
              top: 24,
              width: 28,
              height: 54,
            }}
          >
            <div>
              <PanelButton
                id="play"
                label=""
                width={28}
                height={54}
                active={getState('play').active}
                highlighted={isHighlighted('play')}
                onClick={() => onButtonClick?.('play')}
              />
            </div>
          </div>
        <div
          className="absolute pointer-events-none"
          style={{
            left: 1007,
            top: 12,
            width: 28,
            textAlign: 'center',
          }}
        >
          <span className="font-medium text-gray-400 uppercase tracking-wider break-words" style={{ fontSize: 8 }}>
            PLAY
          </span>
        </div>
          <div
            className="absolute flex items-center justify-center"
            style={{
              left: 1025,
              top: 24,
              width: 28,
              height: 54,
            }}
          >
            <div>
              <PanelButton
                id="rec"
                label=""
                width={28}
                height={54}
                active={getState('rec').active}
                highlighted={isHighlighted('rec')}
                onClick={() => onButtonClick?.('rec')}
              />
            </div>
          </div>
        <div
          className="absolute pointer-events-none"
          style={{
            left: 1025,
            top: 12,
            width: 28,
            textAlign: 'center',
          }}
        >
          <span className="font-medium text-gray-400 uppercase tracking-wider break-words" style={{ fontSize: 8 }}>
            REC
          </span>
        </div>
          <div
            className="absolute flex items-center justify-center"
            style={{
              left: 890,
              top: 104,
              width: 34,
              height: 28,
            }}
          >
            <div>
              <PanelButton
                id="tone-cat-1"
                label=""
                width={34}
                height={28}
                active={getState('tone-cat-1').active}
                highlighted={isHighlighted('tone-cat-1')}
                onClick={() => onButtonClick?.('tone-cat-1')}
              />
            </div>
          </div>
        <div
          className="absolute pointer-events-none"
          style={{
            left: 890,
            top: 92,
            width: 34,
            textAlign: 'center',
          }}
        >
          <span className="font-medium text-gray-400 uppercase tracking-wider break-words" style={{ fontSize: 8 }}>
            A.PIANO
          </span>
        </div>
          <div
            className="absolute flex items-center justify-center"
            style={{
              left: 928,
              top: 104,
              width: 34,
              height: 28,
            }}
          >
            <div>
              <PanelButton
                id="tone-cat-2"
                label=""
                width={34}
                height={28}
                active={getState('tone-cat-2').active}
                highlighted={isHighlighted('tone-cat-2')}
                onClick={() => onButtonClick?.('tone-cat-2')}
              />
            </div>
          </div>
        <div
          className="absolute pointer-events-none"
          style={{
            left: 928,
            top: 92,
            width: 34,
            textAlign: 'center',
          }}
        >
          <span className="font-medium text-gray-400 uppercase tracking-wider break-words" style={{ fontSize: 8 }}>
            E.PIANO
          </span>
        </div>
          <div
            className="absolute flex items-center justify-center"
            style={{
              left: 955,
              top: 104,
              width: 34,
              height: 28,
            }}
          >
            <div>
              <PanelButton
                id="tone-cat-3"
                label=""
                width={34}
                height={28}
                active={getState('tone-cat-3').active}
                highlighted={isHighlighted('tone-cat-3')}
                onClick={() => onButtonClick?.('tone-cat-3')}
              />
            </div>
          </div>
        <div
          className="absolute pointer-events-none"
          style={{
            left: 955,
            top: 92,
            width: 34,
            textAlign: 'center',
          }}
        >
          <span className="font-medium text-gray-400 uppercase tracking-wider break-words" style={{ fontSize: 8 }}>
            ORGAN
          </span>
        </div>
          <div
            className="absolute flex items-center justify-center"
            style={{
              left: 1006,
              top: 104,
              width: 34,
              height: 28,
            }}
          >
            <div>
              <PanelButton
                id="tone-cat-4"
                label=""
                width={34}
                height={28}
                active={getState('tone-cat-4').active}
                highlighted={isHighlighted('tone-cat-4')}
                onClick={() => onButtonClick?.('tone-cat-4')}
              />
            </div>
          </div>
        <div
          className="absolute pointer-events-none"
          style={{
            left: 1006,
            top: 92,
            width: 34,
            textAlign: 'center',
          }}
        >
          <span className="font-medium text-gray-400 uppercase tracking-wider break-words" style={{ fontSize: 8 }}>
            GUITAR/BASS
          </span>
        </div>
          <div
            className="absolute flex items-center justify-center"
            style={{
              left: 890,
              top: 124,
              width: 34,
              height: 28,
            }}
          >
            <div>
              <PanelButton
                id="tone-cat-5"
                label=""
                width={34}
                height={28}
                active={getState('tone-cat-5').active}
                highlighted={isHighlighted('tone-cat-5')}
                onClick={() => onButtonClick?.('tone-cat-5')}
              />
            </div>
          </div>
        <div
          className="absolute pointer-events-none"
          style={{
            left: 890,
            top: 112,
            width: 34,
            textAlign: 'center',
          }}
        >
          <span className="font-medium text-gray-400 uppercase tracking-wider break-words" style={{ fontSize: 8 }}>
            STRINGS
          </span>
        </div>
          <div
            className="absolute flex items-center justify-center"
            style={{
              left: 928,
              top: 124,
              width: 34,
              height: 28,
            }}
          >
            <div>
              <PanelButton
                id="tone-cat-6"
                label=""
                width={34}
                height={28}
                active={getState('tone-cat-6').active}
                highlighted={isHighlighted('tone-cat-6')}
                onClick={() => onButtonClick?.('tone-cat-6')}
              />
            </div>
          </div>
        <div
          className="absolute pointer-events-none"
          style={{
            left: 928,
            top: 112,
            width: 34,
            textAlign: 'center',
          }}
        >
          <span className="font-medium text-gray-400 uppercase tracking-wider break-words" style={{ fontSize: 8 }}>
            BRASS
          </span>
        </div>
          <div
            className="absolute flex items-center justify-center"
            style={{
              left: 955,
              top: 124,
              width: 34,
              height: 28,
            }}
          >
            <div>
              <PanelButton
                id="tone-cat-7"
                label=""
                width={34}
                height={28}
                active={getState('tone-cat-7').active}
                highlighted={isHighlighted('tone-cat-7')}
                onClick={() => onButtonClick?.('tone-cat-7')}
              />
            </div>
          </div>
        <div
          className="absolute pointer-events-none"
          style={{
            left: 955,
            top: 112,
            width: 34,
            textAlign: 'center',
          }}
        >
          <span className="font-medium text-gray-400 uppercase tracking-wider break-words" style={{ fontSize: 8 }}>
            SYNTH LEAD
          </span>
        </div>
          <div
            className="absolute flex items-center justify-center"
            style={{
              left: 1006,
              top: 124,
              width: 34,
              height: 28,
            }}
          >
            <div>
              <PanelButton
                id="tone-cat-8"
                label=""
                width={34}
                height={28}
                active={getState('tone-cat-8').active}
                highlighted={isHighlighted('tone-cat-8')}
                onClick={() => onButtonClick?.('tone-cat-8')}
              />
            </div>
          </div>
        <div
          className="absolute pointer-events-none"
          style={{
            left: 1006,
            top: 112,
            width: 34,
            textAlign: 'center',
          }}
        >
          <span className="font-medium text-gray-400 uppercase tracking-wider break-words" style={{ fontSize: 8 }}>
            SYNTH PAD
          </span>
        </div>
          <div
            className="absolute flex items-center justify-center"
            style={{
              left: 890,
              top: 144,
              width: 34,
              height: 28,
            }}
          >
            <div>
              <PanelButton
                id="tone-cat-9"
                label=""
                width={34}
                height={28}
                active={getState('tone-cat-9').active}
                highlighted={isHighlighted('tone-cat-9')}
                onClick={() => onButtonClick?.('tone-cat-9')}
              />
            </div>
          </div>
        <div
          className="absolute pointer-events-none"
          style={{
            left: 890,
            top: 132,
            width: 34,
            textAlign: 'center',
          }}
        >
          <span className="font-medium text-gray-400 uppercase tracking-wider break-words" style={{ fontSize: 8 }}>
            BELL/MALLET
          </span>
        </div>
          <div
            className="absolute flex items-center justify-center"
            style={{
              left: 928,
              top: 144,
              width: 34,
              height: 28,
            }}
          >
            <div>
              <PanelButton
                id="tone-cat-10"
                label=""
                width={34}
                height={28}
                active={getState('tone-cat-10').active}
                highlighted={isHighlighted('tone-cat-10')}
                onClick={() => onButtonClick?.('tone-cat-10')}
              />
            </div>
          </div>
        <div
          className="absolute pointer-events-none"
          style={{
            left: 928,
            top: 132,
            width: 34,
            textAlign: 'center',
          }}
        >
          <span className="font-medium text-gray-400 uppercase tracking-wider break-words" style={{ fontSize: 8 }}>
            HIT/OTHER
          </span>
        </div>
          <div
            className="absolute flex items-center justify-center"
            style={{
              left: 955,
              top: 144,
              width: 34,
              height: 28,
            }}
          >
            <div>
              <PanelButton
                id="tone-cat-11"
                label=""
                width={34}
                height={28}
                active={getState('tone-cat-11').active}
                highlighted={isHighlighted('tone-cat-11')}
                onClick={() => onButtonClick?.('tone-cat-11')}
              />
            </div>
          </div>
        <div
          className="absolute pointer-events-none"
          style={{
            left: 955,
            top: 132,
            width: 34,
            textAlign: 'center',
          }}
        >
          <span className="font-medium text-gray-400 uppercase tracking-wider break-words" style={{ fontSize: 8 }}>
            RHYTHM
          </span>
        </div>
          <div
            className="absolute flex items-center justify-center"
            style={{
              left: 1006,
              top: 144,
              width: 34,
              height: 28,
            }}
          >
            <div>
              <PanelButton
                id="tone-cat-12"
                label=""
                width={34}
                height={28}
                active={getState('tone-cat-12').active}
                highlighted={isHighlighted('tone-cat-12')}
                onClick={() => onButtonClick?.('tone-cat-12')}
              />
            </div>
          </div>
        <div
          className="absolute pointer-events-none"
          style={{
            left: 1006,
            top: 132,
            width: 34,
            textAlign: 'center',
          }}
        >
          <span className="font-medium text-gray-400 uppercase tracking-wider break-words" style={{ fontSize: 8 }}>
            S.N. ACOUSTIC
          </span>
        </div>
          <div
            className="absolute flex items-center justify-center"
            style={{
              left: 890,
              top: 164,
              width: 34,
              height: 28,
            }}
          >
            <div>
              <PanelButton
                id="tone-cat-13"
                label=""
                width={34}
                height={28}
                active={getState('tone-cat-13').active}
                highlighted={isHighlighted('tone-cat-13')}
                onClick={() => onButtonClick?.('tone-cat-13')}
              />
            </div>
          </div>
        <div
          className="absolute pointer-events-none"
          style={{
            left: 890,
            top: 152,
            width: 34,
            textAlign: 'center',
          }}
        >
          <span className="font-medium text-gray-400 uppercase tracking-wider break-words" style={{ fontSize: 8 }}>
            S.N.S
          </span>
        </div>
          <div
            className="absolute flex items-center justify-center"
            style={{
              left: 928,
              top: 164,
              width: 34,
              height: 28,
            }}
          >
            <div>
              <PanelButton
                id="tone-cat-14"
                label=""
                width={34}
                height={28}
                active={getState('tone-cat-14').active}
                highlighted={isHighlighted('tone-cat-14')}
                onClick={() => onButtonClick?.('tone-cat-14')}
              />
            </div>
          </div>
        <div
          className="absolute pointer-events-none"
          style={{
            left: 928,
            top: 152,
            width: 34,
            textAlign: 'center',
          }}
        >
          <span className="font-medium text-gray-400 uppercase tracking-wider break-words" style={{ fontSize: 8 }}>
            VTW
          </span>
        </div>
          <div
            className="absolute flex items-center justify-center"
            style={{
              left: 955,
              top: 164,
              width: 34,
              height: 28,
            }}
          >
            <div>
              <PanelButton
                id="tone-cat-15"
                label=""
                width={34}
                height={28}
                active={getState('tone-cat-15').active}
                highlighted={isHighlighted('tone-cat-15')}
                onClick={() => onButtonClick?.('tone-cat-15')}
              />
            </div>
          </div>
        <div
          className="absolute pointer-events-none"
          style={{
            left: 955,
            top: 152,
            width: 34,
            textAlign: 'center',
          }}
        >
          <span className="font-medium text-gray-400 uppercase tracking-wider break-words" style={{ fontSize: 8 }}>
            MODEL
          </span>
        </div>
          <div
            className="absolute flex items-center justify-center"
            style={{
              left: 1006,
              top: 164,
              width: 34,
              height: 28,
            }}
          >
            <div>
              <PanelButton
                id="tone-cat-16"
                label=""
                width={34}
                height={28}
                active={getState('tone-cat-16').active}
                highlighted={isHighlighted('tone-cat-16')}
                onClick={() => onButtonClick?.('tone-cat-16')}
              />
            </div>
          </div>
        <div
          className="absolute pointer-events-none"
          style={{
            left: 1006,
            top: 152,
            width: 34,
            textAlign: 'center',
          }}
        >
          <span className="font-medium text-gray-400 uppercase tracking-wider break-words" style={{ fontSize: 8 }}>
            DRUM
          </span>
        </div>
      </div>
    </motion.div>
  );
}
