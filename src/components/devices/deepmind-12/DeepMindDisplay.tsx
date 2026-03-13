'use client';

import { motion } from 'framer-motion';

// DeepMind 12 LCD color palette
const LCD = {
  background: '#3A6E5C',
  text: '#0A2A1C',
  pixel: '#1A3A2C',
  glow: '#5BA87A',
} as const;

interface DeepMindDisplayProps {
  highlighted?: boolean;
}

/**
 * Simple ADSR envelope SVG for the bottom envelope displays.
 * Each envelope has slightly different shape to look realistic.
 */
function EnvelopeSVG({
  label,
  attack,
  decay,
  sustain,
  release,
}: {
  label: string;
  attack: number;
  decay: number;
  sustain: number;
  release: number;
}) {
  // Build ADSR path within a 80x22 viewBox
  const w = 80;
  const h = 22;
  const pad = 2;
  const bottom = h - pad;
  const top = pad + 2;
  const sustainY = top + (bottom - top) * (1 - sustain);

  // Segment widths (proportional)
  const totalSeg = attack + decay + 0.3 + release;
  const aW = ((attack / totalSeg) * (w - pad * 2));
  const dW = ((decay / totalSeg) * (w - pad * 2));
  const sW = ((0.3 / totalSeg) * (w - pad * 2));
  const rW = ((release / totalSeg) * (w - pad * 2));

  const x0 = pad;
  const x1 = x0 + aW;
  const x2 = x1 + dW;
  const x3 = x2 + sW;
  const x4 = x3 + rW;

  const d = `M ${x0} ${bottom} L ${x1} ${top} L ${x2} ${sustainY} L ${x3} ${sustainY} L ${x4} ${bottom}`;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1 }}>
      <svg
        width="80"
        height="22"
        viewBox={`0 0 ${w} ${h}`}
        style={{ display: 'block' }}
      >
        <path
          d={d}
          fill="none"
          stroke={LCD.text}
          strokeWidth={1.5}
          strokeLinejoin="round"
          strokeLinecap="round"
        />
        {/* Dot markers at each ADSR point */}
        <circle cx={x0} cy={bottom} r={1.2} fill={LCD.text} />
        <circle cx={x1} cy={top} r={1.2} fill={LCD.text} />
        <circle cx={x2} cy={sustainY} r={1.2} fill={LCD.text} />
        <circle cx={x3} cy={sustainY} r={1.2} fill={LCD.text} />
        <circle cx={x4} cy={bottom} r={1.2} fill={LCD.text} />
      </svg>
      <span
        style={{
          fontFamily: 'monospace',
          fontSize: 8,
          color: LCD.text,
          letterSpacing: '0.5px',
          lineHeight: 1,
        }}
      >
        {label}
      </span>
    </div>
  );
}

export default function DeepMindDisplay({ highlighted = false }: DeepMindDisplayProps) {
  return (
    <motion.div
      style={{
        width: 340,
        height: 204,
        boxSizing: 'border-box' as const,
        flexShrink: 0,
        position: 'relative',
        borderRadius: 6,
        overflow: 'hidden',
        // Recessed dark frame / bezel
        border: highlighted
          ? '2px solid rgba(0,170,255,0.6)'
          : '3px solid #1A1A1A',
        boxShadow: highlighted
          ? '0 0 16px 4px rgba(0, 170, 255, 0.5), inset 0 2px 6px rgba(0,0,0,0.6)'
          : 'inset 0 2px 6px rgba(0,0,0,0.6), 0 1px 3px rgba(0,0,0,0.4)',
        background: '#111',
      }}
      animate={{
        boxShadow: highlighted
          ? '0 0 16px 4px rgba(0, 170, 255, 0.5), inset 0 2px 6px rgba(0,0,0,0.6)'
          : 'inset 0 2px 6px rgba(0,0,0,0.6), 0 1px 3px rgba(0,0,0,0.4)',
      }}
      transition={{ duration: 0.3 }}
    >
      {/* LCD panel area */}
      <div
        style={{
          position: 'absolute',
          inset: 3,
          borderRadius: 3,
          backgroundColor: LCD.background,
          display: 'flex',
          flexDirection: 'column',
          padding: '4px 8px',
          gap: 0,
          // Backlight glow
          boxShadow: `inset 0 0 20px ${LCD.glow}40, inset 0 0 60px ${LCD.glow}18`,
        }}
      >
        {/* Scanline overlay */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            borderRadius: 3,
            pointerEvents: 'none',
            zIndex: 2,
            backgroundImage: `repeating-linear-gradient(
              0deg,
              transparent,
              transparent 1px,
              rgba(0,0,0,0.04) 1px,
              rgba(0,0,0,0.04) 2px
            )`,
          }}
        />

        {/* Pixel grid texture overlay */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            borderRadius: 3,
            pointerEvents: 'none',
            zIndex: 2,
            backgroundImage: `repeating-linear-gradient(
              90deg,
              transparent,
              transparent 1px,
              rgba(0,0,0,0.02) 1px,
              rgba(0,0,0,0.02) 2px
            )`,
          }}
        />

        {/* Row 1: Program bank/number + name + category */}
        <div
          style={{
            display: 'flex',
            alignItems: 'baseline',
            justifyContent: 'space-between',
            fontFamily: 'monospace',
            color: LCD.text,
            lineHeight: 1.2,
            position: 'relative',
            zIndex: 1,
          }}
        >
          <span style={{ fontSize: 12, fontWeight: 'bold', letterSpacing: '0.5px' }}>
            A-24 Up In Clouds RD
          </span>
        </div>

        {/* Row 2: Category */}
        <div
          style={{
            fontFamily: 'monospace',
            fontSize: 10,
            color: LCD.text,
            letterSpacing: '1px',
            marginTop: 1,
            position: 'relative',
            zIndex: 1,
          }}
        >
          Category: AMBIENT
        </div>

        {/* Row 3: SEQ / MIDI / BPM status line */}
        <div
          style={{
            fontFamily: 'monospace',
            fontSize: 9,
            color: LCD.pixel,
            letterSpacing: '0.5px',
            marginTop: 2,
            position: 'relative',
            zIndex: 1,
          }}
        >
          SEQ MIDI BPM:140.0
        </div>

        {/* Divider line */}
        <div
          style={{
            height: 1,
            backgroundColor: LCD.text,
            opacity: 0.3,
            marginTop: 2,
            marginBottom: 2,
            position: 'relative',
            zIndex: 1,
          }}
        />

        {/* Row 4: Parameter control label + value area */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            fontFamily: 'monospace',
            color: LCD.text,
            fontSize: 11,
            position: 'relative',
            zIndex: 1,
          }}
        >
          <span style={{ fontWeight: 'bold' }}>POLY UNI</span>
          <span style={{ fontSize: 9, color: LCD.pixel }}>VOICE MODE</span>
        </div>

        {/* Parameter visualization — simple bar graphic */}
        <div
          style={{
            marginTop: 1,
            marginBottom: 1,
            height: 12,
            display: 'flex',
            alignItems: 'center',
            gap: 2,
            position: 'relative',
            zIndex: 1,
          }}
        >
          {/* Small bar visualization */}
          {Array.from({ length: 16 }).map((_, i) => (
            <div
              key={i}
              style={{
                width: 4,
                height: i < 8 ? 10 : 6,
                backgroundColor: i < 8 ? LCD.text : `${LCD.text}40`,
                borderRadius: 1,
              }}
            />
          ))}
          <span
            style={{
              fontFamily: 'monospace',
              fontSize: 9,
              color: LCD.text,
              marginLeft: 'auto',
            }}
          >
            8 VOICES
          </span>
        </div>

        {/* Divider line */}
        <div
          style={{
            height: 1,
            backgroundColor: LCD.text,
            opacity: 0.2,
            marginBottom: 3,
            position: 'relative',
            zIndex: 1,
          }}
        />

        {/* Row 5: Envelope visualizations */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            flex: 1,
            position: 'relative',
            zIndex: 1,
          }}
        >
          <EnvelopeSVG label="VCA ENV" attack={0.15} decay={0.25} sustain={0.7} release={0.3} />
          <EnvelopeSVG label="VCF ENV" attack={0.1} decay={0.35} sustain={0.4} release={0.2} />
          <EnvelopeSVG label="MOD ENV" attack={0.3} decay={0.2} sustain={0.5} release={0.25} />
        </div>

        {/* Row 6: Current parameter name/value at bottom */}
        <div
          style={{
            fontFamily: 'monospace',
            fontSize: 9,
            color: LCD.text,
            textAlign: 'center',
            marginTop: 2,
            letterSpacing: '0.5px',
            position: 'relative',
            zIndex: 1,
          }}
        >
          DETUNE: +/-0.0cents
        </div>
      </div>
    </motion.div>
  );
}
