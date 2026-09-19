/**
 * The GIR-derived widget VOCABULARY for AgsAudio-8.0.
 *
 * GENERATED — do not edit. Provenance: AgsAudio-8.0 — dropped empty base(s): Ags.Soundcard Ags.Sequencer Ags.SoundServer Ags.Countable Ags.Seekable Ags.Tactable Ags.Mutable Ags.PluginController — prop(s) no TypeScript value satisfies: AgsAudio.ApplySF2MidiLocale.synth AgsAudio.ApplySF2MidiLocale.synth-template AgsAudio.ApplySFZInstrument.synth AgsAudio.ApplySFZInstrument.synth-template AgsAudio.AudioContainerManager.audio-container AgsAudio.AudioFileManager.audio-file AgsAudio.AudioUnitDevin.audio-unit-port AgsAudio.AudioUnitDevout.audio-unit-port AgsAudio.Automation.control-key AgsAudio.AutomationControlNameKeyManager.control-name-key AgsAudio.BasePlugin.plugin-so AgsAudio.BasePlugin.ui-plugin-so AgsAudio.BasePlugin.uuid AgsAudio.Buffer.data AgsAudio.CoreAudioDevin.core-audio-port AgsAudio.CoreAudioDevout.core-audio-port AgsAudio.GstreamerDevin.gstreamer-port AgsAudio.GstreamerDevout.gstreamer-port AgsAudio.JackDevin.jack-port AgsAudio.JackDevout.jack-port AgsAudio.LinkChannel.error AgsAudio.Lv2TurtleParser.ui-plugin AgsAudio.Lv2Worker.handle AgsAudio.Lv2Worker.response-data AgsAudio.Lv2Worker.work-data AgsAudio.MidiBuilder.file AgsAudio.MidiParser.file AgsAudio.OscMessage.message AgsAudio.OscResponse.packet AgsAudio.OscXmlrpcMessage.query AgsAudio.PluginPort.default-value AgsAudio.PluginPort.lower-value AgsAudio.PluginPort.upper-value AgsAudio.Program.control-key AgsAudio.ProgramControlNameKeyManager.control-name-key AgsAudio.PulseDevin.pulse-port AgsAudio.PulseDevout.pulse-port AgsAudio.SF2MidiLocaleLoader.synth AgsAudio.SF2MidiLocaleLoader.synth-template AgsAudio.SFZInstrumentLoader.synth AgsAudio.SFZInstrumentLoader.synth-template AgsAudio.SetBacklog.scope AgsAudio.Sndfile.file AgsAudio.Track.smf-buffer
 *
 * 369 instantiable GTypes (of which 0 concrete widgets), 372 declarations, 7 enum nick unions, 0 slot candidates.
 *
 * Module-scoped exports only. There is no `JSX` namespace here, no tag spelling and
 * no `on<Signal>` prop name: those are DIALECT, and every framework answers them
 * differently. The shape to avoid is the GLOBAL AUGMENT — a `declare global` on
 * `React.JSX` collides with every other library on a shared tag — while a
 * module-scoped `JSX` behind a `jsxImportSource` does not. This package is used by
 * projects that want nothing to do with JSX, so it emits neither; a consumer declaring
 * a module-scoped namespace over these names is doing it right.
 *
 * Three things this is and `ConstructorProps` is not: WRITABLE-only (measured on
 * Gtk-4.0, `ConstructorProps` offers 150 read-only properties across 68 classes as
 * settable, and GTK's failure mode for writing one is exit 0), OPTIONAL, and keyed
 * by the name GObject actually REGISTERED — the dashed spelling `g_object_set`,
 * GtkBuilder XML and Blueprint all use.
 *
 * Signal handler types are not re-derived: `X.SignalSignatures`, which this package
 * already emits for every class with the parent chain, every implemented interface
 * and the `notify::` keys folded in, is what `Widgets[G]['signals']` points at.
 */

import type Ags from '@girs/ags-8.0';
import type AgsAudio from './agsaudio-8.0.js';
import type GLib from '@girs/glib-2.0';
import type GObject from '@girs/gobject-2.0';
import type Soup from '@girs/soup-3.0';
import type { AgsApplicationContextConstructOnly, AgsApplicationContextProps, AgsConcurrencyProviderConstructOnly, AgsConcurrencyProviderProps, AgsConnectableConstructOnly, AgsConnectableProps, AgsControllerConstructOnly, AgsControllerProps, AgsConversionConstructOnly, AgsConversionProps, AgsFileLinkConstructOnly, AgsFileLinkProps, AgsFunctionConstructOnly, AgsFunctionProps, AgsMainLoopConstructOnly, AgsMainLoopProps, AgsPluginConstructOnly, AgsPluginProps, AgsServiceProviderConstructOnly, AgsServiceProviderProps, AgsTaskConstructOnly, AgsTaskProps, AgsThreadConstructOnly, AgsThreadProps } from '@girs/ags-8.0/vocabulary';
import type { GObjectConstructOnly, GObjectProps } from '@girs/gobject-2.0/vocabulary';

// ---------------------------------------------------------------------------
// Enum nicks — the string vocabulary GObject registered, from GIR's `glib:nick`.
//
// Not derived from the member name. Substituting underscores for dashes is not a law:
// some nicks keep an underscore the substitution would have replaced, and only the
// attribute knows which. Gtk-4.0 and Adw-1 contradict no derivation at all, which is
// how a derived nick passes review and breaks elsewhere.
// Re-measure with `scripts/check-nick-derivation.mjs` in ts-for-gir.
// ---------------------------------------------------------------------------

export type AgsPitchTypeModeNick = 'pitch-type-fluid-interpolate-none' | 'pitch-type-fluid-interpolate-linear' | 'pitch-type-fluid-interpolate-4th-order' | 'pitch-type-fluid-interpolate-7th-order' | 'pitch-type-interpolate-2x-alias' | 'pitch-type-interpolate-4x-alias' | 'pitch-type-interpolate-16x-alias';
export type AgsSF2SynthUtilLoopModeNick = 'loop-none' | 'loop-standard' | 'loop-release' | 'loop-pingpong';
export type AgsSFZSynthUtilLoopModeNick = 'loop-none' | 'loop-standard' | 'loop-release' | 'loop-pingpong';
export type AgsSoundKeyFormatNick = 'sound-key-format-16th' | 'sound-key-format-256th';
export type AgsSoundScopeNick = 'sound-scope-playback' | 'sound-scope-sequencer' | 'sound-scope-notation' | 'sound-scope-wave' | 'sound-scope-midi' | 'sound-scope-last';
export type AgsSynthKeyModeNick = 'synth-key-1-1' | 'synth-key-2-2' | 'synth-key-4-4' | 'synth-key-8-8' | 'synth-key-16-16';
export type AgsSynthOscillatorModeNick = 'synth-oscillator-sin' | 'synth-oscillator-sawtooth' | 'synth-oscillator-triangle' | 'synth-oscillator-square' | 'synth-oscillator-impulse' | 'synth-oscillator-last';

// ---------------------------------------------------------------------------
// Property surfaces — one interface per GIR DECLARATION, mirroring GIR's own
// inheritance rather than flattening per widget.
//
// The interfaces are load-bearing, not tidiness: `GtkBox` declares four properties
// of its own and `orientation` is not among them — it lives on `Gtk.Orientable`,
// because GObject installs interface properties on the implementor at runtime while
// GIR keeps them once, on the interface.
// ---------------------------------------------------------------------------

export interface AgsAccelerationProps extends GObjectProps {
    /**
     * The acceleration's name.
     * @since 3.0.0
     * @default NULL
     */
    'acceleration-name'?: string;
    /**
     * Acceleration offset x.
     * @since 3.0.0
     * @default 0
     */
    x?: number;
    /**
     * Acceleration value y.
     * @since 3.0.0
     * @default 0.000000
     */
    y?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AgsAccelerationConstructOnly = GObjectConstructOnly;

export interface AgsAddAudioProps extends AgsTaskProps, AgsConnectableProps {
    /**
     * The assigned #AgsAudio
     * @since 3.0.0
     */
    audio?: AgsAudio.Audio;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AgsAddAudioConstructOnly = AgsTaskConstructOnly | AgsConnectableConstructOnly;

export interface AgsAddAudioSignalProps extends AgsTaskProps {
    /**
     * The assigned #AgsAudioSignal
     * @since 3.0.0
     */
    'audio-signal'?: AgsAudio.AudioSignal;
    /**
     * The audio signal's flags.
     * @since 3.0.0
     * @default 0
     */
    'audio-signal-flags'?: number;
    /**
     * The assigned #AgsRecallID
     * @since 3.0.0
     */
    'recall-id'?: AgsAudio.RecallID;
    /**
     * The assigned #AgsRecycling
     * @since 3.0.0
     */
    recycling?: AgsAudio.Recycling;
    /**
     * The assigned #AgsSoundcard
     * @since 3.0.0
     */
    soundcard?: GObject.Object;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AgsAddAudioSignalConstructOnly = AgsTaskConstructOnly;

export interface AgsAddNoteProps extends AgsTaskProps {
    /**
     * The assigned #AgsAudio
     * @since 3.0.0
     */
    audio?: AgsAudio.Audio;
    /**
     * The assigned audio channel
     * @since 3.0.0
     * @default 0
     */
    'audio-channel'?: number;
    /**
     * The assigned #AgsNote
     * @since 3.0.0
     */
    note?: AgsAudio.Note;
    /**
     * The notation's use-selection-list.
     * @since 3.0.0
     * @default FALSE
     */
    'use-selection-list'?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AgsAddNoteConstructOnly = AgsTaskConstructOnly;

export interface AgsAddSoundcardProps extends AgsTaskProps {
    /**
     * The assigned #AgsSoundcard
     * @since 3.0.0
     */
    soundcard?: GObject.Object;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AgsAddSoundcardConstructOnly = AgsTaskConstructOnly;

export interface AgsAlsaDevinProps extends GObjectProps, AgsConnectableProps {
    /**
     * Beats per minute
     * @since 3.13.2
     * @default 120.000000
     */
    bpm?: number;
    /**
     * The buffer size
     * @since 3.13.2
     * @default 2048
     */
    'buffer-size'?: number;
    /**
     * tact
     * @since 3.13.2
     * @default 1.000000
     * @deprecated use AgsFrameClock instead
     */
    'delay-factor'?: number;
    /**
     * The alsa soundcard indentifier
     * @since 3.13.2
     * @default hw:0,0
     */
    device?: string;
    /**
     * The dsp channel count
     * @since 3.13.2
     * @default 2
     */
    'dsp-channels'?: number;
    /**
     * The precision of the buffer
     * @since 3.13.2
     * @default 16
     */
    format?: number;
    /**
     * The pcm channel count
     * @since 3.13.2
     * @default 2
     */
    'pcm-channels'?: number;
    /**
     * The samplerate
     * @since 3.13.2
     * @default 44100
     */
    samplerate?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AgsAlsaDevinConstructOnly = GObjectConstructOnly | AgsConnectableConstructOnly;

export interface AgsAlsaDevoutProps extends GObjectProps, AgsConnectableProps {
    /**
     * Beats per minute
     * @since 3.13.2
     * @default 120.000000
     */
    bpm?: number;
    /**
     * The buffer size
     * @since 3.13.2
     * @default 2048
     */
    'buffer-size'?: number;
    /**
     * tact
     * @since 3.13.2
     * @default 1.000000
     * @deprecated use AgsFrameClock instead
     */
    'delay-factor'?: number;
    /**
     * The alsa soundcard indentifier
     * @since 3.13.2
     * @default hw:0,0
     */
    device?: string;
    /**
     * The dsp channel count
     * @since 3.13.2
     * @default 2
     */
    'dsp-channels'?: number;
    /**
     * The precision of the buffer
     * @since 3.13.2
     * @default 16
     */
    format?: number;
    /**
     * The pcm channel count
     * @since 3.13.2
     * @default 2
     */
    'pcm-channels'?: number;
    /**
     * The samplerate
     * @since 3.13.2
     * @default 44100
     */
    samplerate?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AgsAlsaDevoutConstructOnly = GObjectConstructOnly | AgsConnectableConstructOnly;

export interface AgsAlsaMidiinProps extends GObjectProps, AgsConnectableProps {
    /**
     * Beats per minute
     * @since 3.13.2
     * @default 120.000000
     */
    bpm?: number;
    /**
     * tact
     * @since 3.13.2
     * @default 1.000000
     */
    'delay-factor'?: number;
    /**
     * The alsa sequencer indentifier
     * @since 3.13.2
     * @default hw:0,0
     */
    device?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AgsAlsaMidiinConstructOnly = GObjectConstructOnly | AgsConnectableConstructOnly;

export interface AgsApplyBpmProps extends AgsTaskProps {
    /**
     * The bpm to apply to scope.
     * @since 3.0.0
     * @default 120.000000
     */
    bpm?: number;
    /**
     * The assigned #GObject as scope.
     * @since 3.0.0
     */
    scope?: GObject.Object;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AgsApplyBpmConstructOnly = AgsTaskConstructOnly;

export interface AgsApplyPresetsProps extends AgsTaskProps {
    /**
     * The count of buffer-size to apply.
     * @since 3.0.0
     * @default 0
     */
    'buffer-size'?: number;
    /**
     * The count of format to apply.
     * @since 3.0.0
     * @default 0
     */
    format?: number;
    /**
     * The count of pcm-channels to apply.
     * @since 3.0.0
     * @default 0
     */
    'pcm-channels'?: number;
    /**
     * The count of samplerate to apply.
     * @since 3.0.0
     * @default 0
     */
    samplerate?: number;
    /**
     * The assigned #GObject
     * @since 3.0.0
     */
    scope?: GObject.Object;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AgsApplyPresetsConstructOnly = AgsTaskConstructOnly;

export interface AgsApplySF2MidiLocaleProps extends AgsTaskProps {
    /**
     * The synth to apply.
     * @since 3.16.0
     */
    synth?: never;
    /**
     * The synth template to apply.
     * @since 3.16.0
     */
    'synth-template'?: never;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AgsApplySF2MidiLocaleConstructOnly = AgsTaskConstructOnly;

export interface AgsApplySF2SynthProps extends AgsTaskProps {
    /**
     * The base-note to ramp up from.
     * @since 3.4.0
     * @default -48.000000
     */
    'base-note'?: number;
    /**
     * The count of channels to apply.
     * @since 3.4.0
     * @default 0
     */
    count?: number;
    /**
     * The frame count of audio signal to apply.
     * @since 3.4.0
     * @default 0
     */
    'requested-frame-count'?: number;
    'sf2-synth-generator'?: AgsAudio.SF2SynthGenerator;
    /**
     * The assigned #AgsChannel
     * @since 3.4.0
     */
    'start-channel'?: AgsAudio.Channel;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AgsApplySF2SynthConstructOnly = AgsTaskConstructOnly;

export interface AgsApplySFZInstrumentProps extends AgsTaskProps {
    /**
     * The synth to apply.
     * @since 3.17.0
     */
    synth?: never;
    /**
     * The synth template to apply.
     * @since 3.17.0
     */
    'synth-template'?: never;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AgsApplySFZInstrumentConstructOnly = AgsTaskConstructOnly;

export interface AgsApplySFZSynthProps extends AgsTaskProps {
    /**
     * The base-note to ramp up from.
     * @since 3.4.0
     * @default -48.000000
     */
    'base-note'?: number;
    /**
     * The count of channels to apply.
     * @since 3.4.0
     * @default 0
     */
    count?: number;
    /**
     * The frame count of audio signal to apply.
     * @since 3.4.0
     * @default 0
     */
    'requested-frame-count'?: number;
    'sfz-synth-generator'?: AgsAudio.SFZSynthGenerator;
    /**
     * The assigned #AgsChannel
     * @since 3.4.0
     */
    'start-channel'?: AgsAudio.Channel;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AgsApplySFZSynthConstructOnly = AgsTaskConstructOnly;

export interface AgsApplySequencerLengthProps extends AgsTaskProps {
    /**
     * The assigned #GObject as scope.
     * @since 3.0.0
     */
    scope?: GObject.Object;
    /**
     * The sequencer length to apply to scope.
     * @since 3.0.0
     * @default 0.000000
     */
    'sequencer-length'?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AgsApplySequencerLengthConstructOnly = AgsTaskConstructOnly;

export interface AgsApplySoundConfigProps extends AgsTaskProps {
    /**
     * The assigned sound config data as string.
     * @since 3.0.0
     * @default NULL
     */
    'config-data'?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AgsApplySoundConfigConstructOnly = AgsTaskConstructOnly;

export interface AgsApplySynthProps extends AgsTaskProps {
    /**
     * The base-note to ramp up from.
     * @since 3.0.0
     * @default -48.000000
     */
    'base-note'?: number;
    /**
     * The count of channels to apply.
     * @since 3.0.0
     * @default 0
     */
    count?: number;
    /**
     * The frame count of audio signal to apply.
     * @since 3.3.0
     * @default 0
     */
    'requested-frame-count'?: number;
    /**
     * The assigned #AgsChannel
     * @since 3.0.0
     */
    'start-channel'?: AgsAudio.Channel;
    /**
     * The assigned #AgsSynthGenerator
     * @since 3.0.0
     */
    'synth-generator'?: AgsAudio.SynthGenerator;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AgsApplySynthConstructOnly = AgsTaskConstructOnly;

export interface AgsApplyTactProps extends AgsTaskProps {
    /**
     * The assigned #GObject as scope.
     * @since 3.0.0
     */
    scope?: GObject.Object;
    /**
     * The tact to apply to scope.
     * @since 3.0.0
     * @default 0.000000
     */
    tact?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AgsApplyTactConstructOnly = AgsTaskConstructOnly;

export interface AgsAudioProps extends GObjectProps, AgsConnectableProps {
    /**
     * The absolute key lower.
     * @since 3.0.0
     * @default 0
     */
    'absolute-key'?: number;
    /**
     * The audio channels count.
     * @since 3.0.0
     * @default 0
     */
    'audio-channels'?: number;
    /**
     * The audio end mapping.
     * @since 3.0.0
     * @default 0
     */
    'audio-end-mapping'?: number;
    /**
     * The name of audio object.
     * @since 3.0.0
     * @default NULL
     */
    'audio-name'?: string;
    /**
     * The audio start mapping.
     * @since 3.0.0
     * @default 0
     */
    'audio-start-mapping'?: number;
    /**
     * The #AgsAutomation it contains.
     * @since 3.0.0
     */
    automation?: AgsAudio.Automation[];
    /**
     * The bpm.
     * @since 3.0.0
     * @default 120.000000
     */
    bpm?: number;
    /**
     * The buffer length.
     * @since 3.0.0
     * @default 2048
     */
    'buffer-size'?: number;
    /**
     * The #GObject implementing #AgsCursor interface.
     * @since 3.0.0
     */
    cursor?: GObject.Object[];
    /**
     * The denominator of time signature.
     * @since 3.0.0
     * @default 4
     */
    denominator?: number;
    /**
     * The format.
     * @since 3.0.0
     * @default 16
     */
    format?: number;
    /**
     * The assigned #AgsAudioFile acting as default sink.
     * @since 3.0.0
     */
    'input-audio-file'?: GObject.Object;
    /**
     * The assigned #AgsMidiFile acting as default sink.
     * @since 3.0.0
     */
    'input-midi-file'?: GObject.Object;
    /**
     * The input pads count.
     * @since 3.0.0
     * @default 0
     */
    'input-pads'?: number;
    /**
     * The assigned #AgsSequencer acting as default source.
     * @since 3.0.0
     */
    'input-sequencer'?: GObject.Object;
    /**
     * The assigned #AgsSoundcard acting as default source.
     * @since 3.0.0
     */
    'input-soundcard'?: GObject.Object;
    /**
     * Is minor.
     * @since 3.0.0
     * @default FALSE
     */
    'is-minor'?: boolean;
    /**
     * The key relative to octave.
     * @since 3.0.0
     * @default 0
     */
    key?: number;
    /**
     * The audio's loop end.
     * @since 3.0.0
     * @default 0
     */
    'loop-end'?: bigint | number;
    /**
     * The audio's loop start.
     * @since 3.0.0
     * @default 0
     */
    'loop-start'?: bigint | number;
    /**
     * The maximum audio channels count.
     * @since 3.0.0
     * @default 0
     */
    'max-audio-channels'?: number;
    /**
     * The maximum input pads count.
     * @since 3.0.0
     * @default 0
     */
    'max-input-pads'?: number;
    /**
     * The maximum output pads count.
     * @since 3.0.0
     * @default 0
     */
    'max-output-pads'?: number;
    /**
     * The #AgsMidi it contains.
     * @since 3.0.0
     */
    midi?: AgsAudio.Midi[];
    /**
     * The MIDI channel.
     * @since 3.0.0
     * @default 0
     */
    'midi-channel'?: number;
    /**
     * The MIDI end mapping.
     * @since 3.0.0
     * @default 0
     */
    'midi-end-mapping'?: number;
    /**
     * The MIDI group.
     * @since 7.0.0
     * @default 0
     */
    'midi-group'?: number;
    /**
     * The MIDI start mapping.
     * @since 3.0.0
     * @default 0
     */
    'midi-start-mapping'?: number;
    /**
     * The minimum audio channels count.
     * @since 3.0.0
     * @default 0
     */
    'min-audio-channels'?: number;
    /**
     * The minimum input pads count.
     * @since 3.0.0
     * @default 0
     */
    'min-input-pads'?: number;
    /**
     * The minimum output pads count.
     * @since 3.0.0
     * @default 0
     */
    'min-output-pads'?: number;
    /**
     * The #AgsNotation it contains.
     * @since 3.0.0
     */
    notation?: AgsAudio.Notation[];
    /**
     * The numerator of time signature.
     * @since 3.0.0
     * @default 4
     */
    numerator?: number;
    /**
     * The octave lower.
     * @since 3.0.0
     * @default 0
     */
    octave?: number;
    /**
     * The audio's offset.
     * @since 3.0.0
     * @default 0
     */
    offset?: bigint | number;
    /**
     * The assigned #AgsAudioFile acting as default sink.
     * @since 3.0.0
     */
    'output-audio-file'?: GObject.Object;
    /**
     * The assigned #AgsMidiFile acting as default sink.
     * @since 3.0.0
     */
    'output-midi-file'?: GObject.Object;
    /**
     * The output pads count.
     * @since 3.0.0
     * @default 0
     */
    'output-pads'?: number;
    /**
     * The assigned #AgsSequencer acting as default source.
     * @since 3.0.0
     */
    'output-sequencer'?: GObject.Object;
    /**
     * The assigned #AgsSoundcard acting as default sink.
     * @since 3.0.0
     */
    'output-soundcard'?: GObject.Object;
    /**
     * The #AgsRecall it contains in play-context.
     * @since 3.0.0
     */
    play?: AgsAudio.Recall[];
    /**
     * The assigned #AgsPlaybackDomain.
     * @since 3.0.0
     */
    'playback-domain'?: AgsAudio.PlaybackDomain;
    /**
     * The assigned #GList-struct containing #AgsPreset information.
     * @since 3.0.0
     */
    preset?: AgsAudio.Preset[];
    /**
     * The #AgsRecall it contains in recall-context.
     * @since 3.0.0
     */
    recall?: AgsAudio.Recall[];
    /**
     * The #AgsRecallContainer it contains in container-context.
     * @since 3.0.0
     */
    'recall-container'?: AgsAudio.RecallContainer[];
    /**
     * The assigned #AgsRecallID.
     * @since 3.0.0
     */
    'recall-id'?: AgsAudio.RecallID[];
    /**
     * The assigned #AgsRecyclingContext.
     * @since 3.0.0
     */
    'recycling-context'?: AgsAudio.RecyclingContext[];
    /**
     * The samplerate.
     * @since 3.0.0
     * @default 44100
     */
    samplerate?: number;
    /**
     * The assigned #GList-struct containing #AgsSF2SynthGenerator information.
     * @since 3.4.0
     */
    'sf2-synth-generator'?: AgsAudio.SF2SynthGenerator[];
    /**
     * The assigned #GList-struct containing #AgsSFZSynthGenerator information.
     * @since 3.4.0
     */
    'sfz-synth-generator'?: AgsAudio.SFZSynthGenerator[];
    /**
     * The sharp/flats count.
     * @since 3.0.0
     * @default 0
     */
    'sharp-flats'?: number;
    /**
     * The assigned #GList-struct containing #AgsSynthGenerator information.
     * @since 3.0.0
     */
    'synth-generator'?: AgsAudio.SynthGenerator[];
    /**
     * The #AgsWave it contains.
     * @since 3.0.0
     */
    wave?: AgsAudio.Wave[];
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AgsAudioConstructOnly = GObjectConstructOnly | AgsConnectableConstructOnly;

export interface AgsAudioApplicationContextProps extends AgsApplicationContextProps, AgsConcurrencyProviderProps, AgsConnectableProps, AgsServiceProviderProps, AgsSoundProviderProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AgsAudioApplicationContextConstructOnly = AgsApplicationContextConstructOnly | AgsConcurrencyProviderConstructOnly | AgsConnectableConstructOnly | AgsServiceProviderConstructOnly | AgsSoundProviderConstructOnly;

export interface AgsAudioContainerProps extends GObjectProps, AgsConnectableProps {
    /**
     * The audio channel to be read.
     * @since 3.0.0
     * @default 0
     */
    'audio-channel'?: number;
    /**
     * The containing #AgsAudioSignal.
     * @since 3.0.0
     */
    'audio-signal'?: AgsAudio.AudioSignal[];
    /**
     * The buffer size to be used.
     * @since 3.0.0
     * @default 0
     */
    'buffer-size'?: number;
    /**
     * The audio channel count of this file.
     * @since 3.0.0
     * @default 0
     */
    'file-audio-channels'?: number;
    /** @default 0 */
    'file-frame-count'?: number;
    /**
     * The samplerate of this file.
     * @since 3.0.0
     * @default 0
     */
    'file-samplerate'?: number;
    /**
     * The assigned filename.
     * @since 3.0.0
     * @default NULL
     */
    filename?: string;
    /**
     * The format to be used.
     * @since 3.0.0
     * @default 0
     */
    format?: number;
    /**
     * The assigned instrument.
     * @since 3.0.0
     * @default NULL
     */
    instrument?: string;
    /**
     * The assigned preset.
     * @since 3.0.0
     * @default NULL
     */
    preset?: string;
    /**
     * The assigned sample.
     * @since 3.0.0
     * @default NULL
     */
    sample?: string;
    /**
     * The samplerate to be used.
     * @since 3.0.0
     * @default 0
     */
    samplerate?: number;
    /**
     * The assigned soundcard.
     * @since 3.0.0
     */
    soundcard?: GObject.Object;
    /**
     * The containing #AgsWave.
     * @since 3.0.0
     */
    wave?: AgsAudio.Wave[];
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AgsAudioContainerConstructOnly = GObjectConstructOnly | AgsConnectableConstructOnly;

export interface AgsAudioContainerManagerProps extends GObjectProps {
    /**
     * The #GList-struct containing #AgsAudioContainer.
     * @since 3.4.0
     */
    'audio-container'?: never;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AgsAudioContainerManagerConstructOnly = GObjectConstructOnly;

export interface AgsAudioFileProps extends GObjectProps, AgsConnectableProps {
    /**
     * The audio channel to be read.
     * @since 3.0.0
     * @default 0
     */
    'audio-channel'?: number;
    /**
     * The containing #AgsAudioSignal.
     * @since 3.0.0
     */
    'audio-signal'?: AgsAudio.AudioSignal[];
    /**
     * The buffer size to be used.
     * @since 3.0.0
     * @default 0
     */
    'buffer-size'?: number;
    /**
     * The audio channel count of this file.
     * @since 3.0.0
     * @default 0
     */
    'file-audio-channels'?: number;
    /** @default 0 */
    'file-frame-count'?: number;
    /**
     * The samplerate of this file.
     * @since 3.0.0
     * @default 0
     */
    'file-samplerate'?: number;
    /**
     * The assigned filename.
     * @since 3.0.0
     * @default NULL
     */
    filename?: string;
    /**
     * The format to be used.
     * @since 3.0.0
     * @default 0
     */
    format?: number;
    /**
     * The samplerate to be used.
     * @since 3.0.0
     * @default 0
     */
    samplerate?: number;
    /**
     * The assigned sound resource.
     * @since 5.3.0
     */
    'sound-resource'?: GObject.Object;
    /**
     * The assigned soundcard.
     * @since 3.0.0
     */
    soundcard?: GObject.Object;
    /**
     * The containing #AgsWave.
     * @since 3.0.0
     */
    wave?: AgsAudio.Wave[];
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AgsAudioFileConstructOnly = GObjectConstructOnly | AgsConnectableConstructOnly;

export interface AgsAudioFileLinkProps extends AgsFileLinkProps, AgsPluginProps {
    /**
     * The assigned audio channel.
     * @since 3.0.0
     * @default 0
     */
    'audio-channel'?: number;
    /**
     * The assigned instrument.
     * @since 3.0.0
     * @default NULL
     */
    instrument?: string;
    /**
     * The assigned preset.
     * @since 3.0.0
     * @default NULL
     */
    preset?: string;
    /**
     * The assigned sample.
     * @since 3.0.0
     * @default NULL
     */
    sample?: string;
    /**
     * The assigned timestamp.
     * @since 3.0.0
     */
    timestamp?: GObject.Object;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AgsAudioFileLinkConstructOnly = AgsFileLinkConstructOnly | AgsPluginConstructOnly;

export interface AgsAudioFileManagerProps extends GObjectProps {
    /**
     * The #GList-struct containing #AgsAudioFile.
     * @since 3.4.0
     */
    'audio-file'?: never;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AgsAudioFileManagerConstructOnly = GObjectConstructOnly;

export interface AgsAudioLoopProps extends AgsThreadProps, AgsConnectableProps, AgsMainLoopProps {
    /**
     * An #AgsAudio to add for playback.
     * @since 3.0.0
     */
    'play-audio'?: AgsAudio.PlaybackDomain[];
    /**
     * An #AgsChannel to add for playback.
     * @since 3.0.0
     */
    'play-channel'?: AgsAudio.Playback[];
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AgsAudioLoopConstructOnly = AgsThreadConstructOnly | AgsConnectableConstructOnly | AgsMainLoopConstructOnly;

export interface AgsAudioSignalProps extends GObjectProps, AgsConnectableProps {
    /**
     * The attack to be used.
     * @since 3.0.0
     * @default 0
     */
    attack?: number;
    /**
     * The buffer size to be used.
     * @since 3.0.0
     * @default 0
     */
    'buffer-size'?: number;
    /**
     * Damping of timbre.
     * @since 3.0.0
     */
    damping?: Ags.Complex;
    /**
     * The assigned #AgsAudioSignal default template.
     * @since 5.0.0
     */
    'default-template'?: AgsAudio.AudioSignal;
    /**
     * The delay to be used.
     * @since 3.0.0
     * @default 0.000000
     */
    delay?: number;
    /**
     * The first frame of stream.
     * @since 3.0.0
     * @default 0
     */
    'first-frame'?: number;
    /**
     * The format to be used.
     * @since 3.0.0
     * @default 0
     */
    format?: number;
    /**
     * The initial size of audio data.
     * @since 3.0.0
     * @default 0
     */
    'frame-count'?: number;
    /**
     * The assigned input #AgsSoundcard.
     * @since 3.0.0
     */
    'input-soundcard'?: GObject.Object;
    /**
     * The input soundcard channel.
     * @since 3.0.0
     * @default 0
     */
    'input-soundcard-channel'?: number;
    /**
     * The last frame of stream.
     * @since 3.0.0
     * @default 0
     */
    'last-frame'?: number;
    /**
     * The length of the stream.
     * @since 3.0.0
     * @default 0
     */
    length?: number;
    /**
     * The loop end of stream.
     * @since 3.0.0
     * @default 0
     */
    'loop-end'?: number;
    /**
     * The loop start of stream.
     * @since 3.0.0
     * @default 0
     */
    'loop-start'?: number;
    /**
     * The assigned #AgsNote providing default settings.
     * @since 3.0.0
     */
    note?: AgsAudio.Note[];
    /**
     * The note 256th attack to be used.
     * @since 6.2.0
     * @default 0
     */
    'note-256th-attack'?: number;
    /**
     * The assigned output #AgsSoundcard providing default settings.
     * @since 3.0.0
     */
    'output-soundcard'?: GObject.Object;
    /**
     * The output soundcard channel.
     * @since 3.0.0
     * @default 0
     */
    'output-soundcard-channel'?: number;
    /**
     * The assigned #AgsRecallID providing context.
     * @since 3.0.0
     */
    'recall-id'?: AgsAudio.RecallID;
    /**
     * The assigned #AgsRecycling linking tree.
     * @since 3.0.0
     */
    recycling?: AgsAudio.Recycling;
    /**
     * The assigned #AgsAudioSignal realtime template.
     * @since 3.0.0
     */
    'rt-template'?: AgsAudio.AudioSignal;
    /**
     * The samplerate to be used.
     * @since 3.0.0
     * @default 0
     */
    samplerate?: number;
    /**
     * The timbre's end frame.
     * @since 3.0.0
     * @default 0
     */
    'timbre-end'?: number;
    /**
     * The timbre's start frame.
     * @since 3.0.0
     * @default 0
     */
    'timbre-start'?: number;
    /**
     * Vibration of timbre.
     * @since 3.0.0
     */
    vibration?: Ags.Complex;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AgsAudioSignalConstructOnly = GObjectConstructOnly | AgsConnectableConstructOnly;

export interface AgsAudioThreadProps extends AgsThreadProps, AgsConnectableProps {
    /**
     * The assigned #AgsAudio.
     * @since 3.0.0
     */
    audio?: AgsAudio.Audio;
    /**
     * The assigned default soundcard.
     * @since 3.0.0
     */
    'default-output-soundcard'?: GObject.Object;
    /**
     * The processing state.
     * @since 3.11.0
     * @default FALSE
     */
    processing?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AgsAudioThreadConstructOnly = AgsThreadConstructOnly | AgsConnectableConstructOnly;

export interface AgsAudioTreeDispatcherProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AgsAudioTreeDispatcherConstructOnly = GObjectConstructOnly;

export interface AgsAudioUnitClientProps extends GObjectProps, AgsConnectableProps {
    /**
     * The assigned #AgsAudioUnitServer.
     * @since 3.0.0
     */
    'audio-unit-server'?: AgsAudio.AudioUnitServer;
    /**
     * The audio-unit client name.
     * @since 3.0.0
     * @default NULL
     */
    'client-name'?: string;
    /**
     * The assigned devices.
     * @since 3.0.0
     */
    device?: GObject.Object[];
    /**
     * The assigned ports.
     * @since 3.0.0
     */
    port?: AgsAudio.AudioUnitPort[];
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AgsAudioUnitClientConstructOnly = GObjectConstructOnly | AgsConnectableConstructOnly;

export interface AgsAudioUnitDevinProps extends GObjectProps, AgsConnectableProps {
    /**
     * The assigned #AgsAudioUnitClient
     * @since 3.0.0
     */
    'audio-unit-client'?: AgsAudio.AudioUnitClient;
    /**
     * The assigned #AgsAudioUnitPort
     * @since 3.0.0
     */
    'audio-unit-port'?: never;
    /**
     * Beats per minute
     * @since 3.0.0
     * @default 120.000000
     */
    bpm?: number;
    /**
     * The buffer size
     * @since 3.0.0
     * @default 940
     */
    'buffer-size'?: number;
    /**
     * tact
     * @since 3.0.0
     * @default 1.000000
     */
    'delay-factor'?: number;
    /**
     * The audio unit soundcard indentifier
     * @since 3.0.0
     * @default ags-audio-unit-devin-0
     */
    device?: string;
    /**
     * The dsp channel count
     * @since 3.0.0
     * @default 2
     */
    'dsp-channels'?: number;
    /**
     * The precision of the buffer
     * @since 3.0.0
     * @default 16
     */
    format?: number;
    /**
     * The pcm channel count
     * @since 3.0.0
     * @default 2
     */
    'pcm-channels'?: number;
    /**
     * The samplerate
     * @since 3.0.0
     * @default 44100
     */
    samplerate?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AgsAudioUnitDevinConstructOnly = GObjectConstructOnly | AgsConnectableConstructOnly;

export interface AgsAudioUnitDevoutProps extends GObjectProps, AgsConnectableProps {
    /**
     * The assigned #AgsAudioUnitClient
     * @since 3.0.0
     */
    'audio-unit-client'?: AgsAudio.AudioUnitClient;
    /**
     * The assigned #AgsAudioUnitPort
     * @since 3.0.0
     */
    'audio-unit-port'?: never;
    /**
     * Beats per minute
     * @since 3.0.0
     * @default 120.000000
     */
    bpm?: number;
    /**
     * The buffer size
     * @since 3.0.0
     * @default 940
     */
    'buffer-size'?: number;
    /**
     * tact
     * @since 3.0.0
     * @default 1.000000
     */
    'delay-factor'?: number;
    /**
     * The audio unit soundcard indentifier
     * @since 3.0.0
     * @default ags-audio-unit-devout-0
     */
    device?: string;
    /**
     * The dsp channel count
     * @since 3.0.0
     * @default 2
     */
    'dsp-channels'?: number;
    /**
     * The precision of the buffer
     * @since 3.0.0
     * @default 16
     */
    format?: number;
    /**
     * The pcm channel count
     * @since 3.0.0
     * @default 2
     */
    'pcm-channels'?: number;
    /**
     * The samplerate
     * @since 3.0.0
     * @default 44100
     */
    samplerate?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AgsAudioUnitDevoutConstructOnly = GObjectConstructOnly | AgsConnectableConstructOnly;

export interface AgsAudioUnitPortProps extends GObjectProps, AgsConnectableProps {
    /**
     * The assigned #AgsAudioUnitClient.
     * @since 3.0.0
     */
    'audio-unit-client'?: AgsAudio.AudioUnitClient;
    /**
     * The assigned #AgsAudioUnitDevout.
     * @since 3.0.0
     */
    'audio-unit-device'?: GObject.Object;
    /**
     * The core audio soundcard indentifier
     * @since 3.0.0
     * @default hw:0
     */
    'port-name'?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AgsAudioUnitPortConstructOnly = GObjectConstructOnly | AgsConnectableConstructOnly;

export interface AgsAudioUnitServerProps extends GObjectProps, AgsConnectableProps {
    /**
     * The audio unit client list.
     * @since 3.0.0
     */
    'audio-unit-client'?: AgsAudio.AudioUnitClient[];
    /**
     * The default audio unit client.
     * @since 3.0.0
     */
    'default-audio-unit-client'?: AgsAudio.AudioUnitClient;
    /**
     * The default soundcard.
     * @since 3.0.0
     */
    'default-soundcard'?: GObject.Object;
    /**
     * The input audio unit client.
     * @since 3.0.0
     */
    'input-audio-unit-client'?: AgsAudio.AudioUnitClient;
    /**
     * The assigned URL.
     * @since 3.0.0
     * @default NULL
     */
    url?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AgsAudioUnitServerConstructOnly = GObjectConstructOnly | AgsConnectableConstructOnly;

export interface AgsAutomationProps extends GObjectProps {
    /**
     * The acceleration list.
     * @since 3.0.0
     */
    acceleration?: AgsAudio.Acceleration[];
    /**
     * The assigned #AgsAudio
     * @since 3.0.0
     */
    audio?: AgsAudio.Audio;
    /**
     * The effect's assigned channel type.
     * @since 3.0.0
     */
    'channel-type'?: GObject.GType;
    /**
     * The effect's assigned control key.
     * @since 5.4.0
     */
    'control-key'?: never;
    /**
     * The effect's assigned control name.
     * @since 3.0.0
     * @default NULL
     */
    'control-name'?: string;
    /**
     * The effect's default-value.
     * @since 3.0.0
     * @default 0.000000
     */
    'default-value'?: number;
    /**
     * The effect's line.
     * @since 3.0.0
     * @default 0
     */
    line?: number;
    /**
     * The effect's lower.
     * @since 3.0.0
     * @default 0.000000
     */
    lower?: number;
    /**
     * The assigned #AgsPort
     * @since 3.0.0
     */
    port?: AgsAudio.Port;
    /**
     * The effect's steps.
     * @since 3.0.0
     * @default 0
     */
    steps?: number;
    /**
     * The automation's timestamp.
     * @since 3.0.0
     */
    timestamp?: Ags.Timestamp;
    /**
     * The effect's upper.
     * @since 3.0.0
     * @default 0.000000
     */
    upper?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AgsAutomationConstructOnly = GObjectConstructOnly;

export interface AgsAutomationControlNameKeyManagerProps extends GObjectProps {
    /**
     * The #GHashTable-struct containing gpointer of key.
     * @since 5.4.0
     */
    'control-name-key'?: never;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AgsAutomationControlNameKeyManagerConstructOnly = GObjectConstructOnly;

export interface AgsBasePluginProps extends GObjectProps {
    /**
     * The assigned effect.
     * @since 3.0.0
     * @default NULL
     */
    effect?: string;
    /**
     * The assigned effect-index.
     * @since 3.0.0
     * @default 0
     */
    'effect-index'?: number;
    /**
     * The assigned filename.
     * @since 3.0.0
     * @default NULL
     */
    filename?: string;
    /**
     * The assigned #GList-struct containing #AgsPluginPort
     * @since 3.0.0
     */
    'plugin-port'?: AgsAudio.PluginPort[];
    /**
     * The assigned plugin.so
     * @since 3.0.0
     */
    'plugin-so'?: never;
    /**
     * The assigned ui-effect.
     * @since 3.0.0
     * @default NULL
     */
    'ui-effect'?: string;
    /**
     * The assigned ui-effect-index.
     * @since 3.0.0
     * @default 0
     */
    'ui-effect-index'?: number;
    /**
     * The assigned UI filename.
     * @since 3.0.0
     * @default NULL
     */
    'ui-filename'?: string;
    /**
     * The assigned ui-plugin.
     * @since 3.0.0
     */
    'ui-plugin'?: AgsAudio.BasePlugin;
    /**
     * The assigned ui_plugin.so
     * @since 3.0.0
     */
    'ui-plugin-so'?: never;
    /**
     * The assigned AgsUUID
     * @since 3.0.0
     */
    uuid?: never;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AgsBasePluginConstructOnly = GObjectConstructOnly;

export interface AgsBufferProps extends GObjectProps {
    /**
     * Buffer's audio data buffer size.
     * @since 3.0.0
     * @default 2048
     */
    'buffer-size'?: number;
    /**
     * Buffer's audio data.
     * @since 3.0.0
     */
    data?: never;
    /**
     * Buffer's audio data format.
     * @since 3.0.0
     * @default 16
     */
    format?: number;
    /**
     * Buffer's audio data samplerate.
     * @since 3.0.0
     * @default 44100
     */
    samplerate?: number;
    /**
     * Buffer's selection x0 offset.
     * @since 3.0.0
     * @default 0
     */
    'selection-x0'?: bigint | number;
    /**
     * Buffer's selection x1 offset.
     * @since 3.0.0
     * @default 0
     */
    'selection-x1'?: bigint | number;
    /**
     * Buffer's x offset.
     * @since 3.0.0
     * @default 0
     */
    x?: bigint | number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AgsBufferConstructOnly = GObjectConstructOnly;

export interface AgsCancelAudioProps extends AgsTaskProps {
    /**
     * The assigned #AgsAudio
     * @since 3.0.0
     */
    audio?: AgsAudio.Audio;
    /**
     * The effects sound-scope.
     * @since 3.0.0
     * @default -1
     */
    'sound-scope'?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AgsCancelAudioConstructOnly = AgsTaskConstructOnly;

export interface AgsCancelChannelProps extends AgsTaskProps {
    /**
     * The assigned #AgsChannel
     * @since 3.0.0
     */
    channel?: AgsAudio.Channel;
    /**
     * The effects sound-scope.
     * @since 3.0.0
     * @default -1
     */
    'sound-scope'?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AgsCancelChannelConstructOnly = AgsTaskConstructOnly;

export interface AgsChannelProps extends GObjectProps, AgsConnectableProps {
    /**
     * The nth absolute key.
     * @since 3.0.0
     * @default 0
     */
    'absolute-key'?: number;
    /**
     * The assigned #AgsAudio aligning channels.
     * @since 3.0.0
     */
    audio?: AgsAudio.Audio;
    /**
     * The buffer size.
     * @since 3.0.0
     * @default 0
     */
    'buffer-size'?: number;
    /**
     * The format.
     * @since 3.0.0
     * @default 0
     */
    format?: number;
    /**
     * The assigned input #AgsSoundcard.
     * @since 3.0.0
     */
    'input-soundcard'?: GObject.Object;
    /**
     * The input soundcard channel.
     * @since 3.0.0
     * @default 0
     */
    'input-soundcard-channel'?: number;
    /**
     * The nth key.
     * @since 3.0.0
     * @default 0
     */
    key?: number;
    /**
     * The assigned link as #AgsChannel.
     * @since 3.0.0
     */
    link?: AgsAudio.Channel;
    /**
     * The nth midi note.
     * @since 3.0.0
     * @default 0
     */
    'midi-note'?: number;
    /**
     * The note frequency.
     * @since 3.0.0
     * @default 8.175799
     */
    'note-frequency'?: number;
    /**
     * The assigned note key representing this channel.
     * @since 3.0.0
     * @default NULL
     */
    'note-key'?: string;
    /**
     * The nth octave.
     * @since 3.0.0
     * @default 0
     */
    octave?: number;
    /**
     * The assigned output #AgsSoundcard.
     * @since 3.0.0
     */
    'output-soundcard'?: GObject.Object;
    /**
     * The output soundcard channel.
     * @since 3.0.0
     * @default 0
     */
    'output-soundcard-channel'?: number;
    /**
     * The containing #AgsRecall in play-context.
     * @since 3.0.0
     */
    play?: AgsAudio.Recall[];
    /**
     * The assigned #AgsPlayback.
     * @since 3.0.0
     */
    playback?: AgsAudio.Playback;
    /**
     * The containing #AgsRecall in recall-context.
     * @since 3.0.0
     */
    recall?: AgsAudio.Recall[];
    /**
     * The containing #AgsRecallContainer.
     * @since 3.0.0
     */
    'recall-container'?: AgsAudio.RecallContainer[];
    /**
     * The assigned #AgsRecallID.
     * @since 3.0.0
     */
    'recall-id'?: AgsAudio.RecallID[];
    /**
     * The containing #AgsRecyclingContext.
     * @since 3.0.0
     */
    'recycling-context'?: AgsAudio.RecyclingContext[];
    /**
     * The samplerate.
     * @since 3.0.0
     * @default 0
     */
    samplerate?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AgsChannelConstructOnly = GObjectConstructOnly | AgsConnectableConstructOnly;

export interface AgsChannelThreadProps extends AgsThreadProps, AgsConnectableProps {
    /**
     * The assigned #AgsChannel.
     * @since 3.0.0
     */
    channel?: AgsAudio.Channel;
    /**
     * The assigned default soundcard.
     * @since 3.0.0
     */
    'default-output-soundcard'?: GObject.Object;
    /**
     * The processing state.
     * @since 3.11.0
     * @default FALSE
     */
    processing?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AgsChannelThreadConstructOnly = AgsThreadConstructOnly | AgsConnectableConstructOnly;

export interface AgsClearAudioSignalProps extends AgsTaskProps {
    /**
     * The assigned #AgsAudioSignal
     * @since 3.0.0
     */
    'audio-signal'?: AgsAudio.AudioSignal;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AgsClearAudioSignalConstructOnly = AgsTaskConstructOnly;

export interface AgsClearBufferProps extends AgsTaskProps {
    /**
     * The assigned #AgsSoundcard or #AgsSequencer
     * @since 3.0.0
     */
    device?: GObject.Object;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AgsClearBufferConstructOnly = AgsTaskConstructOnly;

export interface AgsCoreAudioClientProps extends GObjectProps, AgsConnectableProps {
    /**
     * The core-audio client name.
     * @since 3.0.0
     * @default NULL
     */
    'client-name'?: string;
    /**
     * The assigned #AgsCoreAudioServer.
     * @since 3.0.0
     */
    'core-audio-server'?: AgsAudio.CoreAudioServer;
    /**
     * The assigned devices.
     * @since 3.0.0
     */
    device?: GObject.Object[];
    /**
     * The assigned ports.
     * @since 3.0.0
     */
    port?: AgsAudio.CoreAudioPort[];
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AgsCoreAudioClientConstructOnly = GObjectConstructOnly | AgsConnectableConstructOnly;

export interface AgsCoreAudioDevinProps extends GObjectProps, AgsConnectableProps {
    /**
     * Beats per minute
     * @since 3.0.0
     * @default 120.000000
     */
    bpm?: number;
    /**
     * The buffer size
     * @since 3.0.0
     * @default 2048
     */
    'buffer-size'?: number;
    /**
     * The assigned #AgsCoreAudioClient
     * @since 3.0.0
     */
    'core-audio-client'?: AgsAudio.CoreAudioClient;
    /**
     * The assigned #AgsCoreAudioPort
     * @since 3.0.0
     */
    'core-audio-port'?: never;
    /**
     * tact
     * @since 3.0.0
     * @default 1.000000
     * @deprecated use AgsFrameClock instead
     */
    'delay-factor'?: number;
    /**
     * The core audio soundcard indentifier
     * @since 3.0.0
     * @default ags-core-audio-devin-0
     */
    device?: string;
    /**
     * The dsp channel count
     * @since 3.0.0
     * @default 2
     */
    'dsp-channels'?: number;
    /**
     * The precision of the buffer
     * @since 3.0.0
     * @default 4294967280
     */
    format?: number;
    /**
     * The pcm channel count
     * @since 3.0.0
     * @default 2
     */
    'pcm-channels'?: number;
    /**
     * The samplerate
     * @since 3.0.0
     * @default 44100
     */
    samplerate?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AgsCoreAudioDevinConstructOnly = GObjectConstructOnly | AgsConnectableConstructOnly;

export interface AgsCoreAudioDevoutProps extends GObjectProps, AgsConnectableProps {
    /**
     * Beats per minute
     * @since 3.0.0
     * @default 120.000000
     */
    bpm?: number;
    /**
     * The buffer size
     * @since 3.0.0
     * @default 2048
     */
    'buffer-size'?: number;
    /**
     * The assigned #AgsCoreAudioClient
     * @since 3.0.0
     */
    'core-audio-client'?: AgsAudio.CoreAudioClient;
    /**
     * The assigned #AgsCoreAudioPort
     * @since 3.0.0
     */
    'core-audio-port'?: never;
    /**
     * tact.
     * @since 3.0.0
     * @default 1.000000
     * @deprecated use AgsFrameClock instead
     */
    'delay-factor'?: number;
    /**
     * The core audio soundcard indentifier
     * @since 3.0.0
     * @default ags-core-audio-devout-0
     */
    device?: string;
    /**
     * The dsp channel count
     * @since 3.0.0
     * @default 2
     */
    'dsp-channels'?: number;
    /**
     * The precision of the buffer
     * @since 3.0.0
     * @default 4294967280
     */
    format?: number;
    /**
     * The pcm channel count
     * @since 3.0.0
     * @default 2
     */
    'pcm-channels'?: number;
    /**
     * The samplerate
     * @since 3.0.0
     * @default 44100
     */
    samplerate?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AgsCoreAudioDevoutConstructOnly = GObjectConstructOnly | AgsConnectableConstructOnly;

export interface AgsCoreAudioMidiinProps extends GObjectProps, AgsConnectableProps {
    /**
     * Beats per minute
     * @since 3.0.0
     * @default 120.000000
     */
    bpm?: number;
    /**
     * The assigned #AgsCoreAudioClient
     * @since 3.0.0
     */
    'core-audio-client'?: AgsAudio.CoreAudioClient;
    /**
     * The assigned #AgsCoreAudioPort
     * @since 3.0.0
     */
    'core-audio-port'?: AgsAudio.CoreAudioPort;
    /**
     * tact
     * @since 3.0.0
     * @default 1.000000
     */
    'delay-factor'?: number;
    /**
     * The core audio sequencer indentifier
     * @since 3.0.0
     * @default hw:0
     */
    device?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AgsCoreAudioMidiinConstructOnly = GObjectConstructOnly | AgsConnectableConstructOnly;

export interface AgsCoreAudioPortProps extends GObjectProps, AgsConnectableProps {
    /**
     * The buffer size
     * @since 7.3.6
     * @default 2048
     */
    'buffer-size'?: number;
    /**
     * The assigned #AgsCoreAudioClient.
     * @since 3.0.0
     */
    'core-audio-client'?: AgsAudio.CoreAudioClient;
    /**
     * The assigned #AgsCoreAudioDevout.
     * @since 3.0.0
     */
    'core-audio-device'?: GObject.Object;
    /**
     * The precision of the buffer
     * @since 7.3.6
     * @default 4294967280
     */
    format?: number;
    /**
     * The pcm channel count
     * @since 7.3.6
     * @default 2
     */
    'pcm-channels'?: number;
    /**
     * The core audio soundcard indentifier
     * @since 3.0.0
     * @default NULL
     */
    'port-name'?: string;
    /**
     * The samplerate
     * @since 7.3.6
     * @default 44100
     */
    samplerate?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AgsCoreAudioPortConstructOnly = GObjectConstructOnly | AgsConnectableConstructOnly;

export interface AgsCoreAudioServerProps extends GObjectProps, AgsConnectableProps {
    /**
     * The core audio client list.
     * @since 3.0.0
     */
    'core-audio-client'?: AgsAudio.CoreAudioClient[];
    /**
     * The default core audio client.
     * @since 3.0.0
     */
    'default-core-audio-client'?: AgsAudio.CoreAudioClient;
    /**
     * The default soundcard.
     * @since 3.0.0
     */
    'default-soundcard'?: GObject.Object;
    /**
     * The assigned URL.
     * @since 3.0.0
     * @default NULL
     */
    url?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AgsCoreAudioServerConstructOnly = GObjectConstructOnly | AgsConnectableConstructOnly;

export interface AgsCropNoteProps extends AgsTaskProps {
    /**
     * Crop notation by absolute position.
     * @since 3.0.0
     * @default FALSE
     */
    absolute?: boolean;
    /**
     * The assigned #AgsAudio
     * @since 3.0.0
     */
    audio?: AgsAudio.Audio;
    /**
     * Crop notation do resize.
     * @since 3.0.0
     * @default FALSE
     */
    'do-resize'?: boolean;
    /**
     * Crop notation in place.
     * @since 3.0.0
     * @default FALSE
     */
    'in-place'?: boolean;
    /**
     * The assigned #AgsNotation
     * @since 3.0.0
     */
    notation?: AgsAudio.Notation;
    /**
     * The assigned #AgsNote
     * @since 3.0.0
     */
    selection?: AgsAudio.Note[];
    /**
     * Crop notation by x-crop amount.
     * @since 3.0.0
     * @default 0
     */
    'x-crop'?: number;
    /**
     * Crop notation with x padding.
     * @since 3.0.0
     * @default 0
     */
    'x-padding'?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AgsCropNoteConstructOnly = AgsTaskConstructOnly;

export interface AgsDssiManagerProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AgsDssiManagerConstructOnly = GObjectConstructOnly;

export interface AgsDssiPluginProps extends AgsBasePluginProps {
    /** @default NULL */
    program?: string;
    /**
     * The assigned unique-id.
     * @since 3.0.0
     * @default 0
     */
    'unique-id'?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AgsDssiPluginConstructOnly = AgsBasePluginConstructOnly;

export interface AgsExportOutputProps extends AgsTaskProps {
    /**
     * The assigned #AgsExportThread
     * @since 3.0.0
     */
    'export-thread'?: AgsAudio.ExportThread;
    /**
     * The assigned filename.
     * @since 3.0.0
     * @default NULL
     */
    filename?: string;
    /**
     * Format to use.
     * @since 3.0.0
     * @default 0
     */
    format?: number;
    /**
     * Do output the audio export live.
     * @since 3.0.0
     * @default FALSE
     */
    'live-performance'?: boolean;
    /**
     * The assigned #AgsSoundcard
     * @since 3.0.0
     */
    soundcard?: GObject.Object;
    /**
     * Tic offset of output as end tic of it.
     * @since 3.0.0
     * @default 0
     */
    tic?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AgsExportOutputConstructOnly = AgsTaskConstructOnly;

export interface AgsExportThreadProps extends AgsThreadProps, AgsConnectableProps {
    /**
     * The assigned #AgsAudioFile.
     * @since 3.0.0
     */
    'audio-file'?: AgsAudio.AudioFile;
    /**
     * The assigned #AgsSoundcard.
     * @since 3.0.0
     */
    soundcard?: GObject.Object;
    /**
     * The tic.
     * @since 3.0.0
     * @default 0
     */
    tic?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AgsExportThreadConstructOnly = AgsThreadConstructOnly | AgsConnectableConstructOnly;

export interface AgsFifooutProps extends GObjectProps, AgsConnectableProps {
    /**
     * Beats per minute
     * @since 3.0.0
     * @default 120.000000
     */
    bpm?: number;
    /**
     * The buffer size
     * @since 3.0.0
     * @default 2048
     */
    'buffer-size'?: number;
    /**
     * tact
     * @since 3.0.0
     * @default 1.000000
     */
    'delay-factor'?: number;
    /**
     * The fifo soundcard indentifier
     * @since 3.0.0
     * @default /dev/null
     */
    device?: string;
    /**
     * The dsp channel count
     * @since 3.0.0
     * @default 2
     */
    'dsp-channels'?: number;
    /**
     * The precision of the buffer
     * @since 3.0.0
     * @default 16
     */
    format?: number;
    /**
     * The pcm channel count
     * @since 3.0.0
     * @default 2
     */
    'pcm-channels'?: number;
    /**
     * The samplerate
     * @since 3.0.0
     * @default 44100
     */
    samplerate?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AgsFifooutConstructOnly = GObjectConstructOnly | AgsConnectableConstructOnly;

export interface AgsFreeSelectionProps extends AgsTaskProps {
    /**
     * The assigned #AgsNotation
     * @since 3.0.0
     */
    notation?: AgsAudio.Notation;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AgsFreeSelectionConstructOnly = AgsTaskConstructOnly;

export interface AgsFrequencyMapProps extends GObjectProps {
    /**
     * The attack to be used.
     * @since 3.0.0
     * @default 0
     */
    attack?: number;
    /**
     * The buffer size to be used.
     * @since 3.0.0
     * @default 0
     */
    'buffer-size'?: number;
    /**
     * The initial size of audio data.
     * @since 3.0.0
     * @default 0
     */
    'frame-count'?: number;
    /**
     * The freq to be used.
     * @since 3.0.0
     * @default 440.000000
     */
    freq?: number;
    /**
     * The oscillator mode to be used.
     * @since 3.0.0
     * @default 0
     */
    'oscillator-mode'?: number;
    /**
     * The samplerate to be used.
     * @since 3.0.0
     * @default 0
     */
    samplerate?: number;
    /**
     * The the window count of total z-indexes.
     * @since 3.0.0
     * @default 0
     */
    'window-count'?: number;
    /**
     * The z-index as position of this frequency map.
     * @since 3.0.0
     * @default 0
     */
    'z-index'?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AgsFrequencyMapConstructOnly = GObjectConstructOnly;

export interface AgsFrequencyMapManagerProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AgsFrequencyMapManagerConstructOnly = GObjectConstructOnly;

export interface AgsFxAnalyseAudioProps extends AgsRecallAudioProps, AgsConnectableProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AgsFxAnalyseAudioConstructOnly = AgsRecallAudioConstructOnly | AgsConnectableConstructOnly;

export interface AgsFxAnalyseAudioProcessorProps extends AgsRecallAudioRunProps, AgsConnectableProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AgsFxAnalyseAudioProcessorConstructOnly = AgsRecallAudioRunConstructOnly | AgsConnectableConstructOnly;

export interface AgsFxAnalyseAudioSignalProps extends AgsRecallAudioSignalProps, AgsConnectableProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AgsFxAnalyseAudioSignalConstructOnly = AgsRecallAudioSignalConstructOnly | AgsConnectableConstructOnly;

export interface AgsFxAnalyseChannelProps extends AgsRecallChannelProps, AgsConnectableProps {
    /**
     * The beats per minute.
     * @since 3.3.0
     */
    frequency?: AgsAudio.Port;
    /**
     * The beats per minute.
     * @since 3.3.0
     */
    magnitude?: AgsAudio.Port;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AgsFxAnalyseChannelConstructOnly = AgsRecallChannelConstructOnly | AgsConnectableConstructOnly;

export interface AgsFxAnalyseChannelProcessorProps extends AgsRecallChannelRunProps, AgsConnectableProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AgsFxAnalyseChannelProcessorConstructOnly = AgsRecallChannelRunConstructOnly | AgsConnectableConstructOnly;

export interface AgsFxAnalyseRecyclingProps extends AgsRecallRecyclingProps, AgsConnectableProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AgsFxAnalyseRecyclingConstructOnly = AgsRecallRecyclingConstructOnly | AgsConnectableConstructOnly;

export interface AgsFxBufferAudioProps extends AgsRecallAudioProps, AgsConnectableProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AgsFxBufferAudioConstructOnly = AgsRecallAudioConstructOnly | AgsConnectableConstructOnly;

export interface AgsFxBufferAudioProcessorProps extends AgsRecallAudioRunProps, AgsConnectableProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AgsFxBufferAudioProcessorConstructOnly = AgsRecallAudioRunConstructOnly | AgsConnectableConstructOnly;

export interface AgsFxBufferAudioSignalProps extends AgsRecallAudioSignalProps, AgsConnectableProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AgsFxBufferAudioSignalConstructOnly = AgsRecallAudioSignalConstructOnly | AgsConnectableConstructOnly;

export interface AgsFxBufferChannelProps extends AgsRecallChannelProps, AgsConnectableProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AgsFxBufferChannelConstructOnly = AgsRecallChannelConstructOnly | AgsConnectableConstructOnly;

export interface AgsFxBufferChannelProcessorProps extends AgsRecallChannelRunProps, AgsConnectableProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AgsFxBufferChannelProcessorConstructOnly = AgsRecallChannelRunConstructOnly | AgsConnectableConstructOnly;

export interface AgsFxBufferRecyclingProps extends AgsRecallRecyclingProps, AgsConnectableProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AgsFxBufferRecyclingConstructOnly = AgsRecallRecyclingConstructOnly | AgsConnectableConstructOnly;

export interface AgsFxDssiAudioProps extends AgsFxNotationAudioProps, AgsConnectableProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AgsFxDssiAudioConstructOnly = AgsFxNotationAudioConstructOnly | AgsConnectableConstructOnly;

export interface AgsFxDssiAudioProcessorProps extends AgsFxNotationAudioProcessorProps, AgsConnectableProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AgsFxDssiAudioProcessorConstructOnly = AgsFxNotationAudioProcessorConstructOnly | AgsConnectableConstructOnly;

export interface AgsFxDssiAudioSignalProps extends AgsFxNotationAudioSignalProps, AgsConnectableProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AgsFxDssiAudioSignalConstructOnly = AgsFxNotationAudioSignalConstructOnly | AgsConnectableConstructOnly;

export interface AgsFxDssiChannelProps extends AgsFxNotationChannelProps, AgsConnectableProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AgsFxDssiChannelConstructOnly = AgsFxNotationChannelConstructOnly | AgsConnectableConstructOnly;

export interface AgsFxDssiChannelProcessorProps extends AgsFxNotationChannelProcessorProps, AgsConnectableProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AgsFxDssiChannelProcessorConstructOnly = AgsFxNotationChannelProcessorConstructOnly | AgsConnectableConstructOnly;

export interface AgsFxDssiRecyclingProps extends AgsFxNotationRecyclingProps, AgsConnectableProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AgsFxDssiRecyclingConstructOnly = AgsFxNotationRecyclingConstructOnly | AgsConnectableConstructOnly;

export interface AgsFxEnvelopeAudioProps extends AgsRecallAudioProps, AgsConnectableProps {
    /**
     * The LFO enabled port.
     * @since 3.3.0
     */
    'lfo-enabled'?: AgsAudio.Port;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AgsFxEnvelopeAudioConstructOnly = AgsRecallAudioConstructOnly | AgsConnectableConstructOnly;

export interface AgsFxEnvelopeAudioProcessorProps extends AgsRecallAudioRunProps, AgsConnectableProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AgsFxEnvelopeAudioProcessorConstructOnly = AgsRecallAudioRunConstructOnly | AgsConnectableConstructOnly;

export interface AgsFxEnvelopeAudioSignalProps extends AgsRecallAudioSignalProps, AgsConnectableProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AgsFxEnvelopeAudioSignalConstructOnly = AgsRecallAudioSignalConstructOnly | AgsConnectableConstructOnly;

export interface AgsFxEnvelopeChannelProps extends AgsRecallChannelProps, AgsConnectableProps {
    /**
     * The attack.
     * @since 3.3.0
     */
    attack?: AgsAudio.Port;
    /**
     * The decay.
     * @since 3.3.0
     */
    decay?: AgsAudio.Port;
    /**
     * The fixed length.
     * @since 3.3.0
     */
    'fixed-length'?: AgsAudio.Port;
    /**
     * The ratio.
     * @since 3.3.0
     */
    ratio?: AgsAudio.Port;
    /**
     * The release.
     * @since 3.3.0
     */
    release?: AgsAudio.Port;
    /**
     * The sustain.
     * @since 3.3.0
     */
    sustain?: AgsAudio.Port;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AgsFxEnvelopeChannelConstructOnly = AgsRecallChannelConstructOnly | AgsConnectableConstructOnly;

export interface AgsFxEnvelopeChannelProcessorProps extends AgsRecallChannelRunProps, AgsConnectableProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AgsFxEnvelopeChannelProcessorConstructOnly = AgsRecallChannelRunConstructOnly | AgsConnectableConstructOnly;

export interface AgsFxEnvelopeRecyclingProps extends AgsRecallRecyclingProps, AgsConnectableProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AgsFxEnvelopeRecyclingConstructOnly = AgsRecallRecyclingConstructOnly | AgsConnectableConstructOnly;

export interface AgsFxEq10AudioProps extends AgsRecallAudioProps, AgsConnectableProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AgsFxEq10AudioConstructOnly = AgsRecallAudioConstructOnly | AgsConnectableConstructOnly;

export interface AgsFxEq10AudioProcessorProps extends AgsRecallAudioRunProps, AgsConnectableProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AgsFxEq10AudioProcessorConstructOnly = AgsRecallAudioRunConstructOnly | AgsConnectableConstructOnly;

export interface AgsFxEq10AudioSignalProps extends AgsRecallAudioSignalProps, AgsConnectableProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AgsFxEq10AudioSignalConstructOnly = AgsRecallAudioSignalConstructOnly | AgsConnectableConstructOnly;

export interface AgsFxEq10ChannelProps extends AgsRecallChannelProps, AgsConnectableProps {
    /**
     * The peak 112Hz port.
     * @since 3.3.0
     */
    'peak-112hz'?: AgsAudio.Port;
    /**
     * The peak 14336Hz port.
     * @since 3.3.0
     */
    'peak-14336hz'?: AgsAudio.Port;
    /**
     * The peak 1792Hz port.
     * @since 3.3.0
     */
    'peak-1792hz'?: AgsAudio.Port;
    /**
     * The peak 224Hz port.
     * @since 3.3.0
     */
    'peak-224hz'?: AgsAudio.Port;
    /**
     * The peak 28Hz port.
     * @since 3.3.0
     */
    'peak-28hz'?: AgsAudio.Port;
    /**
     * The peak 3584Hz port.
     * @since 3.3.0
     */
    'peak-3584hz'?: AgsAudio.Port;
    /**
     * The peak 448Hz port.
     * @since 3.3.0
     */
    'peak-448hz'?: AgsAudio.Port;
    /**
     * The peak 56Hz port.
     * @since 3.3.0
     */
    'peak-56hz'?: AgsAudio.Port;
    /**
     * The peak 7168Hz port.
     * @since 3.3.0
     */
    'peak-7168hz'?: AgsAudio.Port;
    /**
     * The peak 896Hz port.
     * @since 3.3.0
     */
    'peak-896hz'?: AgsAudio.Port;
    /**
     * The pressure port.
     * @since 3.3.0
     */
    pressure?: AgsAudio.Port;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AgsFxEq10ChannelConstructOnly = AgsRecallChannelConstructOnly | AgsConnectableConstructOnly;

export interface AgsFxEq10ChannelProcessorProps extends AgsRecallChannelRunProps, AgsConnectableProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AgsFxEq10ChannelProcessorConstructOnly = AgsRecallChannelRunConstructOnly | AgsConnectableConstructOnly;

export interface AgsFxEq10RecyclingProps extends AgsRecallRecyclingProps, AgsConnectableProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AgsFxEq10RecyclingConstructOnly = AgsRecallRecyclingConstructOnly | AgsConnectableConstructOnly;

export interface AgsFxFMSynthAudioProps extends AgsFxNotationAudioProps, AgsConnectableProps {
    /**
     * The chorus delay.
     * @since 3.15.0
     */
    'chorus-delay'?: AgsAudio.Port;
    /**
     * The chorus depth.
     * @since 3.15.0
     */
    'chorus-depth'?: AgsAudio.Port;
    /**
     * The chorus enabled.
     * @since 3.15.0
     */
    'chorus-enabled'?: AgsAudio.Port;
    /**
     * The chorus input volume.
     * @since 3.15.0
     */
    'chorus-input-volume'?: AgsAudio.Port;
    /**
     * The chorus lfo frequency.
     * @since 3.15.0
     */
    'chorus-lfo-frequency'?: AgsAudio.Port;
    /**
     * The chorus lfo oscillator.
     * @since 3.15.0
     */
    'chorus-lfo-oscillator'?: AgsAudio.Port;
    /**
     * The chorus mix.
     * @since 3.15.0
     */
    'chorus-mix'?: AgsAudio.Port;
    /**
     * The chorus output volume.
     * @since 3.15.0
     */
    'chorus-output-volume'?: AgsAudio.Port;
    /**
     * The chorus pitch type.
     * @since 4.0.0
     */
    'chorus-pitch-type'?: AgsAudio.Port;
    /**
     * The high pass enabled.
     * @since 3.15.0
     */
    'high-pass-enabled'?: AgsAudio.Port;
    /**
     * The high pass filter gain.
     * @since 3.15.0
     */
    'high-pass-filter-gain'?: AgsAudio.Port;
    /**
     * The high pass q-lin.
     * @since 3.15.0
     */
    'high-pass-q-lin'?: AgsAudio.Port;
    /**
     * The low pass enabled.
     * @since 3.15.0
     */
    'low-pass-enabled'?: AgsAudio.Port;
    /**
     * The low pass filter gain.
     * @since 3.15.0
     */
    'low-pass-filter-gain'?: AgsAudio.Port;
    /**
     * The low pass q-lin.
     * @since 3.15.0
     */
    'low-pass-q-lin'?: AgsAudio.Port;
    /**
     * The noise gain.
     * @since 3.15.0
     */
    'noise-gain'?: AgsAudio.Port;
    /**
     * The pitch tuning.
     * @since 3.15.0
     */
    'pitch-tuning'?: AgsAudio.Port;
    /**
     * The pitch type.
     * @since 4.0.0
     */
    'pitch-type'?: AgsAudio.Port;
    /**
     * The sequencer enabled.
     * @since 3.15.0
     */
    'sequencer-enabled'?: AgsAudio.Port;
    /**
     * The sequencer sign.
     * @since 3.15.0
     */
    'sequencer-sign'?: AgsAudio.Port;
    /**
     * The synth-0 key.
     * @since 3.15.0
     */
    'synth-0-key'?: AgsAudio.Port;
    /**
     * The synth-0 LFO depth.
     * @since 3.15.0
     */
    'synth-0-lfo-depth'?: AgsAudio.Port;
    /**
     * The synth-0 LFO frequency.
     * @since 3.15.0
     */
    'synth-0-lfo-frequency'?: AgsAudio.Port;
    /**
     * The synth-0 lfo-oscillator.
     * @since 3.15.0
     */
    'synth-0-lfo-oscillator'?: AgsAudio.Port;
    /**
     * The synth-0 LFO tuning.
     * @since 3.15.0
     */
    'synth-0-lfo-tuning'?: AgsAudio.Port;
    /**
     * The synth-0 octave.
     * @since 3.15.0
     */
    'synth-0-octave'?: AgsAudio.Port;
    /**
     * The synth-0 oscillator.
     * @since 3.15.0
     */
    'synth-0-oscillator'?: AgsAudio.Port;
    /**
     * The synth-0 phase.
     * @since 3.15.0
     */
    'synth-0-phase'?: AgsAudio.Port;
    /**
     * The synth-0 volume.
     * @since 3.15.0
     */
    'synth-0-volume'?: AgsAudio.Port;
    /**
     * The synth-1 key.
     * @since 3.15.0
     */
    'synth-1-key'?: AgsAudio.Port;
    /**
     * The synth-1 LFO depth.
     * @since 3.15.0
     */
    'synth-1-lfo-depth'?: AgsAudio.Port;
    /**
     * The synth-1 LFO frequency.
     * @since 3.15.0
     */
    'synth-1-lfo-frequency'?: AgsAudio.Port;
    /**
     * The synth-1 lfo-oscillator.
     * @since 3.15.0
     */
    'synth-1-lfo-oscillator'?: AgsAudio.Port;
    /**
     * The synth-1 LFO tuning.
     * @since 3.15.0
     */
    'synth-1-lfo-tuning'?: AgsAudio.Port;
    /**
     * The synth-1 octave.
     * @since 3.15.0
     */
    'synth-1-octave'?: AgsAudio.Port;
    /**
     * The synth-1 oscillator.
     * @since 3.15.0
     */
    'synth-1-oscillator'?: AgsAudio.Port;
    /**
     * The synth-1 phase.
     * @since 3.15.0
     */
    'synth-1-phase'?: AgsAudio.Port;
    /**
     * The synth-1 volume.
     * @since 3.15.0
     */
    'synth-1-volume'?: AgsAudio.Port;
    /**
     * The synth-2 key.
     * @since 3.15.0
     */
    'synth-2-key'?: AgsAudio.Port;
    /**
     * The synth-2 LFO depth.
     * @since 3.15.0
     */
    'synth-2-lfo-depth'?: AgsAudio.Port;
    /**
     * The synth-2 LFO frequency.
     * @since 3.15.0
     */
    'synth-2-lfo-frequency'?: AgsAudio.Port;
    /**
     * The synth-2 lfo-oscillator.
     * @since 3.15.0
     */
    'synth-2-lfo-oscillator'?: AgsAudio.Port;
    /**
     * The synth-2 LFO tuning.
     * @since 3.15.0
     */
    'synth-2-lfo-tuning'?: AgsAudio.Port;
    /**
     * The synth-2 octave.
     * @since 3.15.0
     */
    'synth-2-octave'?: AgsAudio.Port;
    /**
     * The synth-2 oscillator.
     * @since 3.15.0
     */
    'synth-2-oscillator'?: AgsAudio.Port;
    /**
     * The synth-2 phase.
     * @since 3.15.0
     */
    'synth-2-phase'?: AgsAudio.Port;
    /**
     * The synth-2 volume.
     * @since 3.15.0
     */
    'synth-2-volume'?: AgsAudio.Port;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AgsFxFMSynthAudioConstructOnly = AgsFxNotationAudioConstructOnly | AgsConnectableConstructOnly;

export interface AgsFxFMSynthAudioProcessorProps extends AgsFxNotationAudioProcessorProps, AgsConnectableProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AgsFxFMSynthAudioProcessorConstructOnly = AgsFxNotationAudioProcessorConstructOnly | AgsConnectableConstructOnly;

export interface AgsFxFMSynthAudioSignalProps extends AgsFxNotationAudioSignalProps, AgsConnectableProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AgsFxFMSynthAudioSignalConstructOnly = AgsFxNotationAudioSignalConstructOnly | AgsConnectableConstructOnly;

export interface AgsFxFMSynthChannelProps extends AgsFxNotationChannelProps, AgsConnectableProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AgsFxFMSynthChannelConstructOnly = AgsFxNotationChannelConstructOnly | AgsConnectableConstructOnly;

export interface AgsFxFMSynthChannelProcessorProps extends AgsFxNotationChannelProcessorProps, AgsConnectableProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AgsFxFMSynthChannelProcessorConstructOnly = AgsFxNotationChannelProcessorConstructOnly | AgsConnectableConstructOnly;

export interface AgsFxFMSynthRecyclingProps extends AgsFxNotationRecyclingProps, AgsConnectableProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AgsFxFMSynthRecyclingConstructOnly = AgsFxNotationRecyclingConstructOnly | AgsConnectableConstructOnly;

export interface AgsFxFactoryProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AgsFxFactoryConstructOnly = GObjectConstructOnly;

export interface AgsFxHighPassAudioProps extends AgsRecallAudioProps, AgsConnectableProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AgsFxHighPassAudioConstructOnly = AgsRecallAudioConstructOnly | AgsConnectableConstructOnly;

export interface AgsFxHighPassAudioProcessorProps extends AgsRecallAudioRunProps, AgsConnectableProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AgsFxHighPassAudioProcessorConstructOnly = AgsRecallAudioRunConstructOnly | AgsConnectableConstructOnly;

export interface AgsFxHighPassAudioSignalProps extends AgsRecallAudioSignalProps, AgsConnectableProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AgsFxHighPassAudioSignalConstructOnly = AgsRecallAudioSignalConstructOnly | AgsConnectableConstructOnly;

export interface AgsFxHighPassChannelProps extends AgsRecallChannelProps, AgsConnectableProps {
    /**
     * The enabled port.
     * @since 3.14.0
     */
    enabled?: AgsAudio.Port;
    /**
     * The filter gain port.
     * @since 3.13.0
     */
    'filter-gain'?: AgsAudio.Port;
    /**
     * The q-lin port.
     * @since 3.13.0
     */
    'q-lin'?: AgsAudio.Port;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AgsFxHighPassChannelConstructOnly = AgsRecallChannelConstructOnly | AgsConnectableConstructOnly;

export interface AgsFxHighPassChannelProcessorProps extends AgsRecallChannelRunProps, AgsConnectableProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AgsFxHighPassChannelProcessorConstructOnly = AgsRecallChannelRunConstructOnly | AgsConnectableConstructOnly;

export interface AgsFxHighPassRecyclingProps extends AgsRecallRecyclingProps, AgsConnectableProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AgsFxHighPassRecyclingConstructOnly = AgsRecallRecyclingConstructOnly | AgsConnectableConstructOnly;

export interface AgsFxLadspaAudioProps extends AgsRecallAudioProps, AgsConnectableProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AgsFxLadspaAudioConstructOnly = AgsRecallAudioConstructOnly | AgsConnectableConstructOnly;

export interface AgsFxLadspaAudioProcessorProps extends AgsRecallAudioRunProps, AgsConnectableProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AgsFxLadspaAudioProcessorConstructOnly = AgsRecallAudioRunConstructOnly | AgsConnectableConstructOnly;

export interface AgsFxLadspaAudioSignalProps extends AgsRecallAudioSignalProps, AgsConnectableProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AgsFxLadspaAudioSignalConstructOnly = AgsRecallAudioSignalConstructOnly | AgsConnectableConstructOnly;

export interface AgsFxLadspaChannelProps extends AgsRecallChannelProps, AgsConnectableProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AgsFxLadspaChannelConstructOnly = AgsRecallChannelConstructOnly | AgsConnectableConstructOnly;

export interface AgsFxLadspaChannelProcessorProps extends AgsRecallChannelRunProps, AgsConnectableProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AgsFxLadspaChannelProcessorConstructOnly = AgsRecallChannelRunConstructOnly | AgsConnectableConstructOnly;

export interface AgsFxLadspaRecyclingProps extends AgsRecallRecyclingProps, AgsConnectableProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AgsFxLadspaRecyclingConstructOnly = AgsRecallRecyclingConstructOnly | AgsConnectableConstructOnly;

export interface AgsFxLfoAudioProps extends AgsRecallAudioProps, AgsConnectableProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AgsFxLfoAudioConstructOnly = AgsRecallAudioConstructOnly | AgsConnectableConstructOnly;

export interface AgsFxLfoAudioProcessorProps extends AgsRecallAudioRunProps, AgsConnectableProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AgsFxLfoAudioProcessorConstructOnly = AgsRecallAudioRunConstructOnly | AgsConnectableConstructOnly;

export interface AgsFxLfoAudioSignalProps extends AgsRecallAudioSignalProps, AgsConnectableProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AgsFxLfoAudioSignalConstructOnly = AgsRecallAudioSignalConstructOnly | AgsConnectableConstructOnly;

export interface AgsFxLfoChannelProps extends AgsRecallChannelProps, AgsConnectableProps {
    /**
     * The enable control of LFO.
     * @since 3.8.0
     */
    enabled?: AgsAudio.Port;
    /**
     * The depth of LFO.
     * @since 3.8.0
     */
    'lfo-depth'?: AgsAudio.Port;
    /**
     * The freq of LFO.
     * @since 3.8.0
     */
    'lfo-freq'?: AgsAudio.Port;
    /**
     * The phase of LFO.
     * @since 3.8.0
     */
    'lfo-phase'?: AgsAudio.Port;
    /**
     * The tuning of LFO.
     * @since 3.8.0
     */
    'lfo-tuning'?: AgsAudio.Port;
    /**
     * The wave of LFO.
     * @since 3.8.0
     */
    'lfo-wave'?: AgsAudio.Port;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AgsFxLfoChannelConstructOnly = AgsRecallChannelConstructOnly | AgsConnectableConstructOnly;

export interface AgsFxLfoChannelProcessorProps extends AgsRecallChannelRunProps, AgsConnectableProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AgsFxLfoChannelProcessorConstructOnly = AgsRecallChannelRunConstructOnly | AgsConnectableConstructOnly;

export interface AgsFxLfoRecyclingProps extends AgsRecallRecyclingProps, AgsConnectableProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AgsFxLfoRecyclingConstructOnly = AgsRecallRecyclingConstructOnly | AgsConnectableConstructOnly;

export interface AgsFxLowPassAudioProps extends AgsRecallAudioProps, AgsConnectableProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AgsFxLowPassAudioConstructOnly = AgsRecallAudioConstructOnly | AgsConnectableConstructOnly;

export interface AgsFxLowPassAudioProcessorProps extends AgsRecallAudioRunProps, AgsConnectableProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AgsFxLowPassAudioProcessorConstructOnly = AgsRecallAudioRunConstructOnly | AgsConnectableConstructOnly;

export interface AgsFxLowPassAudioSignalProps extends AgsRecallAudioSignalProps, AgsConnectableProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AgsFxLowPassAudioSignalConstructOnly = AgsRecallAudioSignalConstructOnly | AgsConnectableConstructOnly;

export interface AgsFxLowPassChannelProps extends AgsRecallChannelProps, AgsConnectableProps {
    /**
     * The enabled port.
     * @since 3.14.0
     */
    enabled?: AgsAudio.Port;
    /**
     * The filter gain port.
     * @since 3.13.0
     */
    'filter-gain'?: AgsAudio.Port;
    /**
     * The q-lin port.
     * @since 3.13.0
     */
    'q-lin'?: AgsAudio.Port;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AgsFxLowPassChannelConstructOnly = AgsRecallChannelConstructOnly | AgsConnectableConstructOnly;

export interface AgsFxLowPassChannelProcessorProps extends AgsRecallChannelRunProps, AgsConnectableProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AgsFxLowPassChannelProcessorConstructOnly = AgsRecallChannelRunConstructOnly | AgsConnectableConstructOnly;

export interface AgsFxLowPassRecyclingProps extends AgsRecallRecyclingProps, AgsConnectableProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AgsFxLowPassRecyclingConstructOnly = AgsRecallRecyclingConstructOnly | AgsConnectableConstructOnly;

export interface AgsFxLv2AudioProps extends AgsFxNotationAudioProps, AgsConnectableProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AgsFxLv2AudioConstructOnly = AgsFxNotationAudioConstructOnly | AgsConnectableConstructOnly;

export interface AgsFxLv2AudioProcessorProps extends AgsFxNotationAudioProcessorProps, AgsConnectableProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AgsFxLv2AudioProcessorConstructOnly = AgsFxNotationAudioProcessorConstructOnly | AgsConnectableConstructOnly;

export interface AgsFxLv2AudioSignalProps extends AgsFxNotationAudioSignalProps, AgsConnectableProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AgsFxLv2AudioSignalConstructOnly = AgsFxNotationAudioSignalConstructOnly | AgsConnectableConstructOnly;

export interface AgsFxLv2ChannelProps extends AgsFxNotationChannelProps, AgsConnectableProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AgsFxLv2ChannelConstructOnly = AgsFxNotationChannelConstructOnly | AgsConnectableConstructOnly;

export interface AgsFxLv2ChannelProcessorProps extends AgsFxNotationChannelProcessorProps, AgsConnectableProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AgsFxLv2ChannelProcessorConstructOnly = AgsFxNotationChannelProcessorConstructOnly | AgsConnectableConstructOnly;

export interface AgsFxLv2RecyclingProps extends AgsFxNotationRecyclingProps, AgsConnectableProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AgsFxLv2RecyclingConstructOnly = AgsFxNotationRecyclingConstructOnly | AgsConnectableConstructOnly;

export interface AgsFxModularSynthAudioProps extends AgsFxNotationAudioProps, AgsConnectableProps {
    /**
     * The amplifier 0 amp-0 gain.
     * @since 8.2.0
     */
    'amplifier-0-amp-0-gain'?: AgsAudio.Port;
    /**
     * The amplifier 0 amp-1 gain.
     * @since 8.2.0
     */
    'amplifier-0-amp-1-gain'?: AgsAudio.Port;
    /**
     * The amplifier 0 amp-2 gain.
     * @since 8.2.0
     */
    'amplifier-0-amp-2-gain'?: AgsAudio.Port;
    /**
     * The amplifier 0 amp-3 gain.
     * @since 8.2.0
     */
    'amplifier-0-amp-3-gain'?: AgsAudio.Port;
    /**
     * The amplifier 0 filter gain.
     * @since 8.2.0
     */
    'amplifier-0-filter-gain'?: AgsAudio.Port;
    /**
     * The chorus delay.
     * @since 8.2.0
     */
    'chorus-delay'?: AgsAudio.Port;
    /**
     * The chorus depth.
     * @since 8.2.0
     */
    'chorus-depth'?: AgsAudio.Port;
    /**
     * The chorus enabled.
     * @since 8.2.0
     */
    'chorus-enabled'?: AgsAudio.Port;
    /**
     * The chorus input volume.
     * @since 8.2.0
     */
    'chorus-input-volume'?: AgsAudio.Port;
    /**
     * The chorus lfo frequency.
     * @since 8.2.0
     */
    'chorus-lfo-frequency'?: AgsAudio.Port;
    /**
     * The chorus lfo oscillator.
     * @since 8.2.0
     */
    'chorus-lfo-oscillator'?: AgsAudio.Port;
    /**
     * The chorus mix.
     * @since 8.2.0
     */
    'chorus-mix'?: AgsAudio.Port;
    /**
     * The chorus output volume.
     * @since 8.2.0
     */
    'chorus-output-volume'?: AgsAudio.Port;
    /**
     * The chorus pitch type.
     * @since 8.2.0
     */
    'chorus-pitch-type'?: AgsAudio.Port;
    /**
     * The low-pass-0-cut-off-frequency.
     * @since 8.2.0
     */
    'low-pass-0-cut-off-frequency'?: AgsAudio.Port;
    /**
     * The low-pass-0-filter-gain.
     * @since 8.2.0
     */
    'low-pass-0-filter-gain'?: AgsAudio.Port;
    /**
     * The low-pass-0-no-clip.
     * @since 8.2.0
     */
    'low-pass-0-no-clip'?: AgsAudio.Port;
    /**
     * The synth 0 env-0 attack.
     * @since 8.2.0
     */
    'synth-0-env-0-attack'?: AgsAudio.Port;
    /**
     * The synth 0 env-0 decay.
     * @since 8.2.0
     */
    'synth-0-env-0-decay'?: AgsAudio.Port;
    /**
     * The synth 0 env-0 frequency.
     * @since 8.2.0
     */
    'synth-0-env-0-frequency'?: AgsAudio.Port;
    /**
     * The synth 0 env-0 gain.
     * @since 8.2.0
     */
    'synth-0-env-0-gain'?: AgsAudio.Port;
    /**
     * The synth 0 env-0 release.
     * @since 8.2.0
     */
    'synth-0-env-0-release'?: AgsAudio.Port;
    /**
     * The synth 0 env-0 sends.
     * @since 8.2.0
     */
    'synth-0-env-0-sends'?: AgsAudio.Port;
    /**
     * The synth 0 env-0 sustain.
     * @since 8.2.0
     */
    'synth-0-env-0-sustain'?: AgsAudio.Port;
    /**
     * The synth 0 env-1 attack.
     * @since 8.2.0
     */
    'synth-0-env-1-attack'?: AgsAudio.Port;
    /**
     * The synth 0 env-1 decay.
     * @since 8.2.0
     */
    'synth-0-env-1-decay'?: AgsAudio.Port;
    /**
     * The synth 0 env-1 frequency.
     * @since 8.2.0
     */
    'synth-0-env-1-frequency'?: AgsAudio.Port;
    /**
     * The synth 0 env-1 gain.
     * @since 8.2.0
     */
    'synth-0-env-1-gain'?: AgsAudio.Port;
    /**
     * The synth 0 env-1 release.
     * @since 8.2.0
     */
    'synth-0-env-1-release'?: AgsAudio.Port;
    /**
     * The synth 0 env-1 sends.
     * @since 8.2.0
     */
    'synth-0-env-1-sends'?: AgsAudio.Port;
    /**
     * The synth 0 env-1 sustain.
     * @since 8.2.0
     */
    'synth-0-env-1-sustain'?: AgsAudio.Port;
    /**
     * The synth 0 lfo-0 depth.
     * @since 8.2.0
     */
    'synth-0-lfo-0-depth'?: AgsAudio.Port;
    /**
     * The synth 0 lfo-0 frequency.
     * @since 8.2.0
     */
    'synth-0-lfo-0-frequency'?: AgsAudio.Port;
    /**
     * The synth 0 lfo-0 oscillator.
     * @since 8.2.0
     */
    'synth-0-lfo-0-oscillator'?: AgsAudio.Port;
    /**
     * The synth 0 lfo-0 sends.
     * @since 8.2.0
     */
    'synth-0-lfo-0-sends'?: AgsAudio.Port;
    /**
     * The synth 0 lfo-0 tuning.
     * @since 8.2.0
     */
    'synth-0-lfo-0-tuning'?: AgsAudio.Port;
    /**
     * The synth 0 lfo-1 depth.
     * @since 8.2.0
     */
    'synth-0-lfo-1-depth'?: AgsAudio.Port;
    /**
     * The synth 0 lfo-1 frequency.
     * @since 8.2.0
     */
    'synth-0-lfo-1-frequency'?: AgsAudio.Port;
    /**
     * The synth 0 lfo-1 oscillator.
     * @since 8.2.0
     */
    'synth-0-lfo-1-oscillator'?: AgsAudio.Port;
    /**
     * The synth 0 lfo-1 sends.
     * @since 8.2.0
     */
    'synth-0-lfo-1-sends'?: AgsAudio.Port;
    /**
     * The synth 0 lfo-1 tuning.
     * @since 8.2.0
     */
    'synth-0-lfo-1-tuning'?: AgsAudio.Port;
    /**
     * The synth 0 noise frequency.
     * @since 8.2.0
     */
    'synth-0-noise-frequency'?: AgsAudio.Port;
    /**
     * The synth 0 noise gain.
     * @since 8.2.0
     */
    'synth-0-noise-gain'?: AgsAudio.Port;
    /**
     * The synth 0 noise sends.
     * @since 8.2.0
     */
    'synth-0-noise-sends'?: AgsAudio.Port;
    /**
     * The synth-0 osc-0 key.
     * @since 8.2.0
     */
    'synth-0-osc-0-key'?: AgsAudio.Port;
    /**
     * The synth-0 osc-0 octave.
     * @since 8.2.0
     */
    'synth-0-osc-0-octave'?: AgsAudio.Port;
    /**
     * The synth-0 osc-0 oscillator.
     * @since 8.2.0
     */
    'synth-0-osc-0-oscillator'?: AgsAudio.Port;
    /**
     * The synth-0 osc-0 phase.
     * @since 8.2.0
     */
    'synth-0-osc-0-phase'?: AgsAudio.Port;
    /**
     * The synth-0 osc-0 volume.
     * @since 8.2.0
     */
    'synth-0-osc-0-volume'?: AgsAudio.Port;
    /**
     * The synth-0 osc-1 key.
     * @since 8.2.0
     */
    'synth-0-osc-1-key'?: AgsAudio.Port;
    /**
     * The synth-0 osc-1 octave.
     * @since 8.2.0
     */
    'synth-0-osc-1-octave'?: AgsAudio.Port;
    /**
     * The synth-0 osc-1 oscillator.
     * @since 8.2.0
     */
    'synth-0-osc-1-oscillator'?: AgsAudio.Port;
    /**
     * The synth-0 osc-1 phase.
     * @since 8.2.0
     */
    'synth-0-osc-1-phase'?: AgsAudio.Port;
    /**
     * The synth-0 osc-1 volume.
     * @since 8.2.0
     */
    'synth-0-osc-1-volume'?: AgsAudio.Port;
    /**
     * The synth 0 pitch tuning.
     * @since 8.2.0
     */
    'synth-0-pitch-tuning'?: AgsAudio.Port;
    /**
     * The synth 0 volume.
     * @since 8.2.0
     */
    'synth-0-volume'?: AgsAudio.Port;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AgsFxModularSynthAudioConstructOnly = AgsFxNotationAudioConstructOnly | AgsConnectableConstructOnly;

export interface AgsFxModularSynthAudioProcessorProps extends AgsFxNotationAudioProcessorProps, AgsConnectableProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AgsFxModularSynthAudioProcessorConstructOnly = AgsFxNotationAudioProcessorConstructOnly | AgsConnectableConstructOnly;

export interface AgsFxModularSynthAudioSignalProps extends AgsFxNotationAudioSignalProps, AgsConnectableProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AgsFxModularSynthAudioSignalConstructOnly = AgsFxNotationAudioSignalConstructOnly | AgsConnectableConstructOnly;

export interface AgsFxModularSynthChannelProps extends AgsFxNotationChannelProps, AgsConnectableProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AgsFxModularSynthChannelConstructOnly = AgsFxNotationChannelConstructOnly | AgsConnectableConstructOnly;

export interface AgsFxModularSynthChannelProcessorProps extends AgsFxNotationChannelProcessorProps, AgsConnectableProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AgsFxModularSynthChannelProcessorConstructOnly = AgsFxNotationChannelProcessorConstructOnly | AgsConnectableConstructOnly;

export interface AgsFxModularSynthRecyclingProps extends AgsFxNotationRecyclingProps, AgsConnectableProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AgsFxModularSynthRecyclingConstructOnly = AgsFxNotationRecyclingConstructOnly | AgsConnectableConstructOnly;

export interface AgsFxNotationAudioProps extends AgsRecallAudioProps, AgsConnectableProps {
    /**
     * The beats per minute.
     * @since 3.3.0
     */
    bpm?: AgsAudio.Port;
    /**
     * The notation's delay.
     * @since 3.3.0
     */
    delay?: AgsAudio.Port;
    /**
     * The notation's duration.
     * @since 3.3.0
     */
    duration?: AgsAudio.Port;
    /**
     * Do loop.
     * @since 3.3.0
     */
    loop?: AgsAudio.Port;
    /**
     * The notation's loop-end.
     * @since 3.3.0
     */
    'loop-end'?: AgsAudio.Port;
    /**
     * The notation's loop-start.
     * @since 3.3.0
     */
    'loop-start'?: AgsAudio.Port;
    /**
     * The tact segmentation.
     * @since 3.3.0
     */
    tact?: AgsAudio.Port;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AgsFxNotationAudioConstructOnly = AgsRecallAudioConstructOnly | AgsConnectableConstructOnly;

export interface AgsFxNotationAudioProcessorProps extends AgsRecallAudioRunProps, AgsConnectableProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AgsFxNotationAudioProcessorConstructOnly = AgsRecallAudioRunConstructOnly | AgsConnectableConstructOnly;

export interface AgsFxNotationAudioSignalProps extends AgsRecallAudioSignalProps, AgsConnectableProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AgsFxNotationAudioSignalConstructOnly = AgsRecallAudioSignalConstructOnly | AgsConnectableConstructOnly;

export interface AgsFxNotationChannelProps extends AgsRecallChannelProps, AgsConnectableProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AgsFxNotationChannelConstructOnly = AgsRecallChannelConstructOnly | AgsConnectableConstructOnly;

export interface AgsFxNotationChannelProcessorProps extends AgsRecallChannelRunProps, AgsConnectableProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AgsFxNotationChannelProcessorConstructOnly = AgsRecallChannelRunConstructOnly | AgsConnectableConstructOnly;

export interface AgsFxNotationRecyclingProps extends AgsRecallRecyclingProps, AgsConnectableProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AgsFxNotationRecyclingConstructOnly = AgsRecallRecyclingConstructOnly | AgsConnectableConstructOnly;

export interface AgsFxPatternAudioProps extends AgsRecallAudioProps, AgsConnectableProps {
    /**
     * Selected bank index 0.
     * @since 3.3.0
     */
    'bank-index-0'?: AgsAudio.Port;
    /**
     * Selected bank index 1.
     * @since 3.3.0
     */
    'bank-index-1'?: AgsAudio.Port;
    /**
     * The beats per minute.
     * @since 3.3.0
     */
    bpm?: AgsAudio.Port;
    /**
     * The pattern's delay.
     * @since 3.3.0
     */
    delay?: AgsAudio.Port;
    /**
     * The pattern's duration.
     * @since 3.3.0
     */
    duration?: AgsAudio.Port;
    /**
     * Do loop.
     * @since 3.3.0
     */
    loop?: AgsAudio.Port;
    /**
     * The pattern's loop-end.
     * @since 3.3.0
     */
    'loop-end'?: AgsAudio.Port;
    /**
     * The pattern's loop-start.
     * @since 3.3.0
     */
    'loop-start'?: AgsAudio.Port;
    /**
     * The tact segmentation.
     * @since 3.3.0
     */
    tact?: AgsAudio.Port;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AgsFxPatternAudioConstructOnly = AgsRecallAudioConstructOnly | AgsConnectableConstructOnly;

export interface AgsFxPatternAudioProcessorProps extends AgsRecallAudioRunProps, AgsConnectableProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AgsFxPatternAudioProcessorConstructOnly = AgsRecallAudioRunConstructOnly | AgsConnectableConstructOnly;

export interface AgsFxPatternAudioSignalProps extends AgsRecallAudioSignalProps, AgsConnectableProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AgsFxPatternAudioSignalConstructOnly = AgsRecallAudioSignalConstructOnly | AgsConnectableConstructOnly;

export interface AgsFxPatternChannelProps extends AgsRecallChannelProps, AgsConnectableProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AgsFxPatternChannelConstructOnly = AgsRecallChannelConstructOnly | AgsConnectableConstructOnly;

export interface AgsFxPatternChannelProcessorProps extends AgsRecallChannelRunProps, AgsConnectableProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AgsFxPatternChannelProcessorConstructOnly = AgsRecallChannelRunConstructOnly | AgsConnectableConstructOnly;

export interface AgsFxPatternRecyclingProps extends AgsRecallRecyclingProps, AgsConnectableProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AgsFxPatternRecyclingConstructOnly = AgsRecallRecyclingConstructOnly | AgsConnectableConstructOnly;

export interface AgsFxPeakAudioProps extends AgsRecallAudioProps, AgsConnectableProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AgsFxPeakAudioConstructOnly = AgsRecallAudioConstructOnly | AgsConnectableConstructOnly;

export interface AgsFxPeakAudioProcessorProps extends AgsRecallAudioRunProps, AgsConnectableProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AgsFxPeakAudioProcessorConstructOnly = AgsRecallAudioRunConstructOnly | AgsConnectableConstructOnly;

export interface AgsFxPeakAudioSignalProps extends AgsRecallAudioSignalProps, AgsConnectableProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AgsFxPeakAudioSignalConstructOnly = AgsRecallAudioSignalConstructOnly | AgsConnectableConstructOnly;

export interface AgsFxPeakChannelProps extends AgsRecallChannelProps, AgsConnectableProps {
    /**
     * The beats per minute.
     * @since 3.3.0
     */
    peak?: AgsAudio.Port;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AgsFxPeakChannelConstructOnly = AgsRecallChannelConstructOnly | AgsConnectableConstructOnly;

export interface AgsFxPeakChannelProcessorProps extends AgsRecallChannelRunProps, AgsConnectableProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AgsFxPeakChannelProcessorConstructOnly = AgsRecallChannelRunConstructOnly | AgsConnectableConstructOnly;

export interface AgsFxPeakRecyclingProps extends AgsRecallRecyclingProps, AgsConnectableProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AgsFxPeakRecyclingConstructOnly = AgsRecallRecyclingConstructOnly | AgsConnectableConstructOnly;

export interface AgsFxPlaybackAudioProps extends Omit<AgsRecallAudioProps, 'filename'>, AgsConnectableProps {
    /**
     * The beats per minute.
     * @since 3.3.0
     */
    bpm?: AgsAudio.Port;
    /**
     * The capture mode.
     * @since 3.3.0
     */
    'capture-mode'?: AgsAudio.Port;
    /**
     * The playback's delay.
     * @since 3.3.0
     */
    delay?: AgsAudio.Port;
    /**
     * The do-export switch.
     * @since 3.3.0
     */
    'do-export'?: AgsAudio.Port;
    /**
     * The playback's duration.
     * @since 3.3.0
     */
    duration?: AgsAudio.Port;
    /**
     * The file's audio channel count.
     * @since 3.3.0
     */
    'file-audio-channels'?: AgsAudio.Port;
    /**
     * The file's buffer size.
     * @since 3.3.0
     */
    'file-buffer-size'?: AgsAudio.Port;
    /**
     * The file's format.
     * @since 3.3.0
     */
    'file-format'?: AgsAudio.Port;
    /**
     * The file's samplerate.
     * @since 3.3.0
     */
    'file-samplerate'?: AgsAudio.Port;
    /**
     * The filename to export.
     * @since 3.3.0
     */
    filename?: AgsAudio.Port;
    /**
     * Do loop.
     * @since 3.3.0
     */
    loop?: AgsAudio.Port;
    /**
     * The playback's loop-end.
     * @since 3.3.0
     */
    'loop-end'?: AgsAudio.Port;
    /**
     * The playback's loop-start.
     * @since 3.3.0
     */
    'loop-start'?: AgsAudio.Port;
    /**
     * The tact segmentation.
     * @since 3.3.0
     */
    tact?: AgsAudio.Port;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AgsFxPlaybackAudioConstructOnly = AgsRecallAudioConstructOnly | AgsConnectableConstructOnly;

export interface AgsFxPlaybackAudioProcessorProps extends AgsRecallAudioRunProps, AgsConnectableProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AgsFxPlaybackAudioProcessorConstructOnly = AgsRecallAudioRunConstructOnly | AgsConnectableConstructOnly;

export interface AgsFxPlaybackAudioSignalProps extends AgsRecallAudioSignalProps, AgsConnectableProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AgsFxPlaybackAudioSignalConstructOnly = AgsRecallAudioSignalConstructOnly | AgsConnectableConstructOnly;

export interface AgsFxPlaybackChannelProps extends AgsRecallChannelProps, AgsConnectableProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AgsFxPlaybackChannelConstructOnly = AgsRecallChannelConstructOnly | AgsConnectableConstructOnly;

export interface AgsFxPlaybackChannelProcessorProps extends AgsRecallChannelRunProps, AgsConnectableProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AgsFxPlaybackChannelProcessorConstructOnly = AgsRecallChannelRunConstructOnly | AgsConnectableConstructOnly;

export interface AgsFxPlaybackRecyclingProps extends AgsRecallRecyclingProps, AgsConnectableProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AgsFxPlaybackRecyclingConstructOnly = AgsRecallRecyclingConstructOnly | AgsConnectableConstructOnly;

export interface AgsFxRavenSynthAudioProps extends AgsFxNotationAudioProps, AgsConnectableProps {
    /**
     * The amplifier 0 amp-0 gain.
     * @since 7.7.0
     */
    'amplifier-0-amp-0-gain'?: AgsAudio.Port;
    /**
     * The amplifier 0 amp-1 gain.
     * @since 7.7.0
     */
    'amplifier-0-amp-1-gain'?: AgsAudio.Port;
    /**
     * The amplifier 0 amp-2 gain.
     * @since 7.7.0
     */
    'amplifier-0-amp-2-gain'?: AgsAudio.Port;
    /**
     * The amplifier 0 amp-3 gain.
     * @since 7.7.0
     */
    'amplifier-0-amp-3-gain'?: AgsAudio.Port;
    /**
     * The amplifier 0 filter gain.
     * @since 7.7.0
     */
    'amplifier-0-filter-gain'?: AgsAudio.Port;
    /**
     * The amplifier 1 amp-0 gain.
     * @since 7.7.0
     */
    'amplifier-1-amp-0-gain'?: AgsAudio.Port;
    /**
     * The amplifier 1 amp-1 gain.
     * @since 7.7.0
     */
    'amplifier-1-amp-1-gain'?: AgsAudio.Port;
    /**
     * The amplifier 1 amp-2 gain.
     * @since 7.7.0
     */
    'amplifier-1-amp-2-gain'?: AgsAudio.Port;
    /**
     * The amplifier 1 amp-3 gain.
     * @since 7.7.0
     */
    'amplifier-1-amp-3-gain'?: AgsAudio.Port;
    /**
     * The amplifier 1 filter gain.
     * @since 7.7.0
     */
    'amplifier-1-filter-gain'?: AgsAudio.Port;
    /**
     * The chorus delay.
     * @since 7.7.0
     */
    'chorus-delay'?: AgsAudio.Port;
    /**
     * The chorus depth.
     * @since 7.7.0
     */
    'chorus-depth'?: AgsAudio.Port;
    /**
     * The chorus enabled.
     * @since 7.7.0
     */
    'chorus-enabled'?: AgsAudio.Port;
    /**
     * The chorus input volume.
     * @since 7.7.0
     */
    'chorus-input-volume'?: AgsAudio.Port;
    /**
     * The chorus lfo frequency.
     * @since 7.7.0
     */
    'chorus-lfo-frequency'?: AgsAudio.Port;
    /**
     * The chorus lfo oscillator.
     * @since 7.7.0
     */
    'chorus-lfo-oscillator'?: AgsAudio.Port;
    /**
     * The chorus mix.
     * @since 7.7.0
     */
    'chorus-mix'?: AgsAudio.Port;
    /**
     * The chorus output volume.
     * @since 7.7.0
     */
    'chorus-output-volume'?: AgsAudio.Port;
    /**
     * The chorus pitch type.
     * @since 7.7.0
     */
    'chorus-pitch-type'?: AgsAudio.Port;
    /**
     * The low-pass-0-cut-off-frequency.
     * @since 7.7.0
     */
    'low-pass-0-cut-off-frequency'?: AgsAudio.Port;
    /**
     * The low-pass-0-filter-gain.
     * @since 7.7.0
     */
    'low-pass-0-filter-gain'?: AgsAudio.Port;
    /**
     * The low-pass-0-no-clip.
     * @since 7.7.0
     */
    'low-pass-0-no-clip'?: AgsAudio.Port;
    /**
     * The low-pass-1-cut-off-frequency.
     * @since 7.7.0
     */
    'low-pass-1-cut-off-frequency'?: AgsAudio.Port;
    /**
     * The low-pass-1-filter-gain.
     * @since 7.7.0
     */
    'low-pass-1-filter-gain'?: AgsAudio.Port;
    /**
     * The low-pass-1-no-clip.
     * @since 7.7.0
     */
    'low-pass-1-no-clip'?: AgsAudio.Port;
    /**
     * The noise gain.
     * @since 7.7.0
     */
    'noise-gain'?: AgsAudio.Port;
    /**
     * The pitch tuning.
     * @since 7.7.0
     */
    'pitch-tuning'?: AgsAudio.Port;
    /**
     * The pitch type.
     * @since 7.7.0
     */
    'pitch-type'?: AgsAudio.Port;
    /**
     * The synth-0 key.
     * @since 7.7.0
     */
    'synth-0-key'?: AgsAudio.Port;
    /**
     * The synth-0 LFO depth.
     * @since 7.7.0
     */
    'synth-0-lfo-depth'?: AgsAudio.Port;
    /**
     * The synth-0 LFO frequency.
     * @since 7.7.0
     */
    'synth-0-lfo-frequency'?: AgsAudio.Port;
    /**
     * The synth-0 lfo-oscillator.
     * @since 7.7.0
     */
    'synth-0-lfo-oscillator'?: AgsAudio.Port;
    /**
     * The synth-0 LFO tuning.
     * @since 7.7.0
     */
    'synth-0-lfo-tuning'?: AgsAudio.Port;
    /**
     * The synth-0 octave.
     * @since 7.7.0
     */
    'synth-0-octave'?: AgsAudio.Port;
    /**
     * The synth-0 oscillator.
     * @since 7.7.0
     */
    'synth-0-oscillator'?: AgsAudio.Port;
    /**
     * The synth-0 phase.
     * @since 7.7.0
     */
    'synth-0-phase'?: AgsAudio.Port;
    /**
     * The synth-0 sequencer tuning 0.
     * @since 7.7.0
     */
    'synth-0-seq-tuning-0'?: AgsAudio.Port;
    /**
     * The synth-0 sequencer tuning 1.
     * @since 7.7.0
     */
    'synth-0-seq-tuning-1'?: AgsAudio.Port;
    /**
     * The synth-0 sequencer tuning 10.
     * @since 7.7.0
     */
    'synth-0-seq-tuning-10'?: AgsAudio.Port;
    /**
     * The synth-0 sequencer tuning 11.
     * @since 7.7.0
     */
    'synth-0-seq-tuning-11'?: AgsAudio.Port;
    /**
     * The synth-0 sequencer tuning 12.
     * @since 7.7.0
     */
    'synth-0-seq-tuning-12'?: AgsAudio.Port;
    /**
     * The synth-0 sequencer tuning 13.
     * @since 7.7.0
     */
    'synth-0-seq-tuning-13'?: AgsAudio.Port;
    /**
     * The synth-0 sequencer tuning 14.
     * @since 7.7.0
     */
    'synth-0-seq-tuning-14'?: AgsAudio.Port;
    /**
     * The synth-0 sequencer tuning 15.
     * @since 7.7.0
     */
    'synth-0-seq-tuning-15'?: AgsAudio.Port;
    /**
     * The synth-0 sequencer tuning 2.
     * @since 7.7.0
     */
    'synth-0-seq-tuning-2'?: AgsAudio.Port;
    /**
     * The synth-0 sequencer tuning 3.
     * @since 7.7.0
     */
    'synth-0-seq-tuning-3'?: AgsAudio.Port;
    /**
     * The synth-0 sequencer tuning 4.
     * @since 7.7.0
     */
    'synth-0-seq-tuning-4'?: AgsAudio.Port;
    /**
     * The synth-0 sequencer tuning 5.
     * @since 7.7.0
     */
    'synth-0-seq-tuning-5'?: AgsAudio.Port;
    /**
     * The synth-0 sequencer tuning 6.
     * @since 7.7.0
     */
    'synth-0-seq-tuning-6'?: AgsAudio.Port;
    /**
     * The synth-0 sequencer tuning 7.
     * @since 7.7.0
     */
    'synth-0-seq-tuning-7'?: AgsAudio.Port;
    /**
     * The synth-0 sequencer tuning 8.
     * @since 7.7.0
     */
    'synth-0-seq-tuning-8'?: AgsAudio.Port;
    /**
     * The synth-0 sequencer tuning 9.
     * @since 7.7.0
     */
    'synth-0-seq-tuning-9'?: AgsAudio.Port;
    /**
     * The synth-0 sequencer tuning lfo-frequency.
     * @since 7.7.0
     */
    'synth-0-seq-tuning-lfo-frequency'?: AgsAudio.Port;
    /**
     * The synth-0 sequencer tuning pingpong.
     * @since 7.7.0
     */
    'synth-0-seq-tuning-pingpong'?: AgsAudio.Port;
    /**
     * The synth-0 sequencer volume 0.
     * @since 7.7.0
     */
    'synth-0-seq-volume-0'?: AgsAudio.Port;
    /**
     * The synth-0 sequencer volume 1.
     * @since 7.7.0
     */
    'synth-0-seq-volume-1'?: AgsAudio.Port;
    /**
     * The synth-0 sequencer volume 10.
     * @since 7.7.0
     */
    'synth-0-seq-volume-10'?: AgsAudio.Port;
    /**
     * The synth-0 sequencer volume 11.
     * @since 7.7.0
     */
    'synth-0-seq-volume-11'?: AgsAudio.Port;
    /**
     * The synth-0 sequencer volume 12.
     * @since 7.7.0
     */
    'synth-0-seq-volume-12'?: AgsAudio.Port;
    /**
     * The synth-0 sequencer volume 13.
     * @since 7.7.0
     */
    'synth-0-seq-volume-13'?: AgsAudio.Port;
    /**
     * The synth-0 sequencer volume 14.
     * @since 7.7.0
     */
    'synth-0-seq-volume-14'?: AgsAudio.Port;
    /**
     * The synth-0 sequencer volume 15.
     * @since 7.7.0
     */
    'synth-0-seq-volume-15'?: AgsAudio.Port;
    /**
     * The synth-0 sequencer volume 2.
     * @since 7.7.0
     */
    'synth-0-seq-volume-2'?: AgsAudio.Port;
    /**
     * The synth-0 sequencer volume 3.
     * @since 7.7.0
     */
    'synth-0-seq-volume-3'?: AgsAudio.Port;
    /**
     * The synth-0 sequencer volume 4.
     * @since 7.7.0
     */
    'synth-0-seq-volume-4'?: AgsAudio.Port;
    /**
     * The synth-0 sequencer volume 5.
     * @since 7.7.0
     */
    'synth-0-seq-volume-5'?: AgsAudio.Port;
    /**
     * The synth-0 sequencer volume 6.
     * @since 7.7.0
     */
    'synth-0-seq-volume-6'?: AgsAudio.Port;
    /**
     * The synth-0 sequencer volume 7.
     * @since 7.7.0
     */
    'synth-0-seq-volume-7'?: AgsAudio.Port;
    /**
     * The synth-0 sequencer volume 8.
     * @since 7.7.0
     */
    'synth-0-seq-volume-8'?: AgsAudio.Port;
    /**
     * The synth-0 sequencer volume 9.
     * @since 7.7.0
     */
    'synth-0-seq-volume-9'?: AgsAudio.Port;
    /**
     * The synth-0 sequencer volume lfo-frequency.
     * @since 7.7.0
     */
    'synth-0-seq-volume-lfo-frequency'?: AgsAudio.Port;
    /**
     * The synth-0 sequencer volume pingpong.
     * @since 7.7.0
     */
    'synth-0-seq-volume-pingpong'?: AgsAudio.Port;
    /**
     * The synth-0 sync attack-0.
     * @since 7.7.0
     */
    'synth-0-sync-attack-0'?: AgsAudio.Port;
    /**
     * The synth-0 sync attack-1.
     * @since 7.7.0
     */
    'synth-0-sync-attack-1'?: AgsAudio.Port;
    /**
     * The synth-0 sync attack-2.
     * @since 7.7.0
     */
    'synth-0-sync-attack-2'?: AgsAudio.Port;
    /**
     * The synth-0 sync attack-3.
     * @since 7.7.0
     */
    'synth-0-sync-attack-3'?: AgsAudio.Port;
    /**
     * The synth-0 sync enabled.
     * @since 7.7.0
     */
    'synth-0-sync-enabled'?: AgsAudio.Port;
    /**
     * The synth-0 sync phase-0.
     * @since 7.7.0
     */
    'synth-0-sync-phase-0'?: AgsAudio.Port;
    /**
     * The synth-0 sync phase-1.
     * @since 7.7.0
     */
    'synth-0-sync-phase-1'?: AgsAudio.Port;
    /**
     * The synth-0 sync phase-2.
     * @since 7.7.0
     */
    'synth-0-sync-phase-2'?: AgsAudio.Port;
    /**
     * The synth-0 sync phase-3.
     * @since 7.7.0
     */
    'synth-0-sync-phase-3'?: AgsAudio.Port;
    /**
     * The synth-0 sync relative attack factor 0.
     * @since 7.7.0
     */
    'synth-0-sync-relative-attack-factor-0'?: AgsAudio.Port;
    /**
     * The synth-0 sync relative attack factor 1.
     * @since 7.7.0
     */
    'synth-0-sync-relative-attack-factor-1'?: AgsAudio.Port;
    'synth-0-sync-relative-attack-factor-2'?: AgsAudio.Port;
    /**
     * The synth-0 sync relative attack factor 3.
     * @since 7.7.0
     */
    'synth-0-sync-relative-attack-factor-3'?: AgsAudio.Port;
    /**
     * The synth-0 volume.
     * @since 7.7.0
     */
    'synth-0-volume'?: AgsAudio.Port;
    /**
     * The synth-1 key.
     * @since 7.7.0
     */
    'synth-1-key'?: AgsAudio.Port;
    /**
     * The synth-1 LFO depth.
     * @since 7.7.0
     */
    'synth-1-lfo-depth'?: AgsAudio.Port;
    /**
     * The synth-1 LFO frequency.
     * @since 7.7.0
     */
    'synth-1-lfo-frequency'?: AgsAudio.Port;
    /**
     * The synth-1 lfo-oscillator.
     * @since 7.7.0
     */
    'synth-1-lfo-oscillator'?: AgsAudio.Port;
    /**
     * The synth-1 LFO tuning.
     * @since 7.7.0
     */
    'synth-1-lfo-tuning'?: AgsAudio.Port;
    /**
     * The synth-1 octave.
     * @since 7.7.0
     */
    'synth-1-octave'?: AgsAudio.Port;
    /**
     * The synth-1 oscillator.
     * @since 7.7.0
     */
    'synth-1-oscillator'?: AgsAudio.Port;
    /**
     * The synth-1 phase.
     * @since 7.7.0
     */
    'synth-1-phase'?: AgsAudio.Port;
    /**
     * The synth-1 sequencer tuning 0.
     * @since 7.7.0
     */
    'synth-1-seq-tuning-0'?: AgsAudio.Port;
    /**
     * The synth-1 sequencer tuning 1.
     * @since 7.7.0
     */
    'synth-1-seq-tuning-1'?: AgsAudio.Port;
    /**
     * The synth-1 sequencer tuning 10.
     * @since 7.7.0
     */
    'synth-1-seq-tuning-10'?: AgsAudio.Port;
    /**
     * The synth-1 sequencer tuning 11.
     * @since 7.7.0
     */
    'synth-1-seq-tuning-11'?: AgsAudio.Port;
    /**
     * The synth-1 sequencer tuning 12.
     * @since 7.7.0
     */
    'synth-1-seq-tuning-12'?: AgsAudio.Port;
    /**
     * The synth-1 sequencer tuning 13.
     * @since 7.7.0
     */
    'synth-1-seq-tuning-13'?: AgsAudio.Port;
    /**
     * The synth-1 sequencer tuning 14.
     * @since 7.7.0
     */
    'synth-1-seq-tuning-14'?: AgsAudio.Port;
    /**
     * The synth-1 sequencer tuning 15.
     * @since 7.7.0
     */
    'synth-1-seq-tuning-15'?: AgsAudio.Port;
    /**
     * The synth-1 sequencer tuning 2.
     * @since 7.7.0
     */
    'synth-1-seq-tuning-2'?: AgsAudio.Port;
    /**
     * The synth-1 sequencer tuning 3.
     * @since 7.7.0
     */
    'synth-1-seq-tuning-3'?: AgsAudio.Port;
    /**
     * The synth-1 sequencer tuning 4.
     * @since 7.7.0
     */
    'synth-1-seq-tuning-4'?: AgsAudio.Port;
    /**
     * The synth-1 sequencer tuning 5.
     * @since 7.7.0
     */
    'synth-1-seq-tuning-5'?: AgsAudio.Port;
    /**
     * The synth-1 sequencer tuning 6.
     * @since 7.7.0
     */
    'synth-1-seq-tuning-6'?: AgsAudio.Port;
    /**
     * The synth-1 sequencer tuning 7.
     * @since 7.7.0
     */
    'synth-1-seq-tuning-7'?: AgsAudio.Port;
    /**
     * The synth-1 sequencer tuning 8.
     * @since 7.7.0
     */
    'synth-1-seq-tuning-8'?: AgsAudio.Port;
    /**
     * The synth-1 sequencer tuning 9.
     * @since 7.7.0
     */
    'synth-1-seq-tuning-9'?: AgsAudio.Port;
    /**
     * The synth-1 sequencer tuning lfo-frequency.
     * @since 7.7.0
     */
    'synth-1-seq-tuning-lfo-frequency'?: AgsAudio.Port;
    /**
     * The synth-1 sequencer tuning pingpong.
     * @since 7.7.0
     */
    'synth-1-seq-tuning-pingpong'?: AgsAudio.Port;
    /**
     * The synth-1 sequencer volume 0.
     * @since 7.7.0
     */
    'synth-1-seq-volume-0'?: AgsAudio.Port;
    /**
     * The synth-1 sequencer volume 1.
     * @since 7.7.0
     */
    'synth-1-seq-volume-1'?: AgsAudio.Port;
    /**
     * The synth-1 sequencer volume 10.
     * @since 7.7.0
     */
    'synth-1-seq-volume-10'?: AgsAudio.Port;
    /**
     * The synth-1 sequencer volume 11.
     * @since 7.7.0
     */
    'synth-1-seq-volume-11'?: AgsAudio.Port;
    /**
     * The synth-1 sequencer volume 12.
     * @since 7.7.0
     */
    'synth-1-seq-volume-12'?: AgsAudio.Port;
    /**
     * The synth-1 sequencer volume 13.
     * @since 7.7.0
     */
    'synth-1-seq-volume-13'?: AgsAudio.Port;
    /**
     * The synth-1 sequencer volume 14.
     * @since 7.7.0
     */
    'synth-1-seq-volume-14'?: AgsAudio.Port;
    /**
     * The synth-1 sequencer volume 15.
     * @since 7.7.0
     */
    'synth-1-seq-volume-15'?: AgsAudio.Port;
    /**
     * The synth-1 sequencer volume 2.
     * @since 7.7.0
     */
    'synth-1-seq-volume-2'?: AgsAudio.Port;
    /**
     * The synth-1 sequencer volume 3.
     * @since 7.7.0
     */
    'synth-1-seq-volume-3'?: AgsAudio.Port;
    /**
     * The synth-1 sequencer volume 4.
     * @since 7.7.0
     */
    'synth-1-seq-volume-4'?: AgsAudio.Port;
    /**
     * The synth-1 sequencer volume 5.
     * @since 7.7.0
     */
    'synth-1-seq-volume-5'?: AgsAudio.Port;
    /**
     * The synth-1 sequencer volume 6.
     * @since 7.7.0
     */
    'synth-1-seq-volume-6'?: AgsAudio.Port;
    /**
     * The synth-1 sequencer volume 7.
     * @since 7.7.0
     */
    'synth-1-seq-volume-7'?: AgsAudio.Port;
    /**
     * The synth-1 sequencer volume 8.
     * @since 7.7.0
     */
    'synth-1-seq-volume-8'?: AgsAudio.Port;
    /**
     * The synth-1 sequencer volume 9.
     * @since 7.7.0
     */
    'synth-1-seq-volume-9'?: AgsAudio.Port;
    /**
     * The synth-1 sequencer volume lfo-frequency.
     * @since 7.7.0
     */
    'synth-1-seq-volume-lfo-frequency'?: AgsAudio.Port;
    /**
     * The synth-1 sequencer volume pingpong.
     * @since 7.7.0
     */
    'synth-1-seq-volume-pingpong'?: AgsAudio.Port;
    /**
     * The synth-1 sync attack-0.
     * @since 7.7.0
     */
    'synth-1-sync-attack-0'?: AgsAudio.Port;
    /**
     * The synth-1 sync attack-1.
     * @since 7.7.0
     */
    'synth-1-sync-attack-1'?: AgsAudio.Port;
    /**
     * The synth-1 sync attack-2.
     * @since 7.7.0
     */
    'synth-1-sync-attack-2'?: AgsAudio.Port;
    /**
     * The synth-1 sync attack-3.
     * @since 7.7.0
     */
    'synth-1-sync-attack-3'?: AgsAudio.Port;
    /**
     * The synth-1 sync enabled.
     * @since 7.7.0
     */
    'synth-1-sync-enabled'?: AgsAudio.Port;
    /**
     * The synth-1 sync phase-0.
     * @since 7.7.0
     */
    'synth-1-sync-phase-0'?: AgsAudio.Port;
    /**
     * The synth-1 sync phase-1.
     * @since 7.7.0
     */
    'synth-1-sync-phase-1'?: AgsAudio.Port;
    /**
     * The synth-1 sync phase-2.
     * @since 7.7.0
     */
    'synth-1-sync-phase-2'?: AgsAudio.Port;
    /**
     * The synth-1 sync phase-3.
     * @since 7.7.0
     */
    'synth-1-sync-phase-3'?: AgsAudio.Port;
    /**
     * The synth-1 sync relative attack factor 0.
     * @since 7.7.0
     */
    'synth-1-sync-relative-attack-factor-0'?: AgsAudio.Port;
    /**
     * The synth-1 sync relative attack factor 1.
     * @since 7.7.0
     */
    'synth-1-sync-relative-attack-factor-1'?: AgsAudio.Port;
    /**
     * The synth-1 sync relative attack factor 2.
     * @since 7.7.0
     */
    'synth-1-sync-relative-attack-factor-2'?: AgsAudio.Port;
    /**
     * The synth-1 sync relative attack factor 3.
     * @since 7.7.0
     */
    'synth-1-sync-relative-attack-factor-3'?: AgsAudio.Port;
    /**
     * The synth-1 volume.
     * @since 7.7.0
     */
    'synth-1-volume'?: AgsAudio.Port;
    /**
     * The vibrato enabled.
     * @since 7.7.0
     */
    'vibrato-enabled'?: AgsAudio.Port;
    /**
     * The vibrato gain.
     * @since 7.7.0
     */
    'vibrato-gain'?: AgsAudio.Port;
    /**
     * The vibrato LFO depth.
     * @since 7.7.0
     */
    'vibrato-lfo-depth'?: AgsAudio.Port;
    /**
     * The vibrato LFO freq.
     * @since 7.7.0
     */
    'vibrato-lfo-freq'?: AgsAudio.Port;
    /**
     * The vibrato tuning.
     * @since 7.7.0
     */
    'vibrato-tuning'?: AgsAudio.Port;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AgsFxRavenSynthAudioConstructOnly = AgsFxNotationAudioConstructOnly | AgsConnectableConstructOnly;

export interface AgsFxRavenSynthAudioProcessorProps extends AgsFxNotationAudioProcessorProps, AgsConnectableProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AgsFxRavenSynthAudioProcessorConstructOnly = AgsFxNotationAudioProcessorConstructOnly | AgsConnectableConstructOnly;

export interface AgsFxRavenSynthAudioSignalProps extends AgsFxNotationAudioSignalProps, AgsConnectableProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AgsFxRavenSynthAudioSignalConstructOnly = AgsFxNotationAudioSignalConstructOnly | AgsConnectableConstructOnly;

export interface AgsFxRavenSynthChannelProps extends AgsFxNotationChannelProps, AgsConnectableProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AgsFxRavenSynthChannelConstructOnly = AgsFxNotationChannelConstructOnly | AgsConnectableConstructOnly;

export interface AgsFxRavenSynthChannelProcessorProps extends AgsFxNotationChannelProcessorProps, AgsConnectableProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AgsFxRavenSynthChannelProcessorConstructOnly = AgsFxNotationChannelProcessorConstructOnly | AgsConnectableConstructOnly;

export interface AgsFxRavenSynthRecyclingProps extends AgsFxNotationRecyclingProps, AgsConnectableProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AgsFxRavenSynthRecyclingConstructOnly = AgsFxNotationRecyclingConstructOnly | AgsConnectableConstructOnly;

export interface AgsFxSF2SynthAudioProps extends AgsFxNotationAudioProps, AgsConnectableProps {
    /**
     * The chorus delay.
     * @since 3.16.0
     */
    'chorus-delay'?: AgsAudio.Port;
    /**
     * The chorus depth.
     * @since 3.16.0
     */
    'chorus-depth'?: AgsAudio.Port;
    /**
     * The chorus enabled.
     * @since 3.16.0
     */
    'chorus-enabled'?: AgsAudio.Port;
    /**
     * The chorus input volume.
     * @since 3.16.0
     */
    'chorus-input-volume'?: AgsAudio.Port;
    /**
     * The chorus lfo frequency.
     * @since 3.16.0
     */
    'chorus-lfo-frequency'?: AgsAudio.Port;
    /**
     * The chorus lfo oscillator.
     * @since 3.16.0
     */
    'chorus-lfo-oscillator'?: AgsAudio.Port;
    /**
     * The chorus mix.
     * @since 3.16.0
     */
    'chorus-mix'?: AgsAudio.Port;
    /**
     * The chorus output volume.
     * @since 3.16.0
     */
    'chorus-output-volume'?: AgsAudio.Port;
    /**
     * The chorus's pitch type.
     * @since 4.0.0
     */
    'chorus-pitch-type'?: AgsAudio.Port;
    /**
     * The synth key.
     * @since 3.16.0
     */
    'synth-key'?: AgsAudio.Port;
    /**
     * The synth octave.
     * @since 3.16.0
     */
    'synth-octave'?: AgsAudio.Port;
    /**
     * The synth's pitch type.
     * @since 4.0.0
     */
    'synth-pitch-type'?: AgsAudio.Port;
    /**
     * The synth volume.
     * @since 3.16.0
     */
    'synth-volume'?: AgsAudio.Port;
    /**
     * The vibrato enabled.
     * @since 5.2.0
     */
    'vibrato-enabled'?: AgsAudio.Port;
    /**
     * The vibrato gain.
     * @since 5.2.0
     */
    'vibrato-gain'?: AgsAudio.Port;
    /**
     * The vibrato LFO depth.
     * @since 5.2.0
     */
    'vibrato-lfo-depth'?: AgsAudio.Port;
    /**
     * The vibrato LFO freq.
     * @since 5.2.0
     */
    'vibrato-lfo-freq'?: AgsAudio.Port;
    /**
     * The vibrato tuning.
     * @since 5.2.0
     */
    'vibrato-tuning'?: AgsAudio.Port;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AgsFxSF2SynthAudioConstructOnly = AgsFxNotationAudioConstructOnly | AgsConnectableConstructOnly;

export interface AgsFxSF2SynthAudioProcessorProps extends AgsFxNotationAudioProcessorProps, AgsConnectableProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AgsFxSF2SynthAudioProcessorConstructOnly = AgsFxNotationAudioProcessorConstructOnly | AgsConnectableConstructOnly;

export interface AgsFxSF2SynthAudioSignalProps extends AgsFxNotationAudioSignalProps, AgsConnectableProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AgsFxSF2SynthAudioSignalConstructOnly = AgsFxNotationAudioSignalConstructOnly | AgsConnectableConstructOnly;

export interface AgsFxSF2SynthChannelProps extends AgsFxNotationChannelProps, AgsConnectableProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AgsFxSF2SynthChannelConstructOnly = AgsFxNotationChannelConstructOnly | AgsConnectableConstructOnly;

export interface AgsFxSF2SynthChannelProcessorProps extends AgsFxNotationChannelProcessorProps, AgsConnectableProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AgsFxSF2SynthChannelProcessorConstructOnly = AgsFxNotationChannelProcessorConstructOnly | AgsConnectableConstructOnly;

export interface AgsFxSF2SynthRecyclingProps extends AgsFxNotationRecyclingProps, AgsConnectableProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AgsFxSF2SynthRecyclingConstructOnly = AgsFxNotationRecyclingConstructOnly | AgsConnectableConstructOnly;

export interface AgsFxSFZSynthAudioProps extends AgsFxNotationAudioProps, AgsConnectableProps {
    /**
     * The chorus delay.
     * @since 3.17.0
     */
    'chorus-delay'?: AgsAudio.Port;
    /**
     * The chorus depth.
     * @since 3.17.0
     */
    'chorus-depth'?: AgsAudio.Port;
    /**
     * The chorus enabled.
     * @since 3.17.0
     */
    'chorus-enabled'?: AgsAudio.Port;
    /**
     * The chorus input volume.
     * @since 3.17.0
     */
    'chorus-input-volume'?: AgsAudio.Port;
    /**
     * The chorus lfo frequency.
     * @since 3.17.0
     */
    'chorus-lfo-frequency'?: AgsAudio.Port;
    /**
     * The chorus lfo oscillator.
     * @since 3.17.0
     */
    'chorus-lfo-oscillator'?: AgsAudio.Port;
    /**
     * The chorus mix.
     * @since 3.17.0
     */
    'chorus-mix'?: AgsAudio.Port;
    /**
     * The chorus output volume.
     * @since 3.17.0
     */
    'chorus-output-volume'?: AgsAudio.Port;
    'chorus-pitch-type'?: AgsAudio.Port;
    /**
     * The synth key.
     * @since 3.17.0
     */
    'synth-key'?: AgsAudio.Port;
    /**
     * The synth octave.
     * @since 3.17.0
     */
    'synth-octave'?: AgsAudio.Port;
    /**
     * The synth's pitch type.
     * @since 4.0.0
     */
    'synth-pitch-type'?: AgsAudio.Port;
    /**
     * The synth volume.
     * @since 3.17.0
     */
    'synth-volume'?: AgsAudio.Port;
    /**
     * The vibrato enabled.
     * @since 5.2.0
     */
    'vibrato-enabled'?: AgsAudio.Port;
    /**
     * The vibrato gain.
     * @since 5.2.4
     */
    'vibrato-gain'?: AgsAudio.Port;
    /**
     * The vibrato LFO depth.
     * @since 5.2.0
     */
    'vibrato-lfo-depth'?: AgsAudio.Port;
    /**
     * The vibrato LFO freq.
     * @since 5.2.0
     */
    'vibrato-lfo-freq'?: AgsAudio.Port;
    /**
     * The vibrato tuning.
     * @since 5.2.0
     */
    'vibrato-tuning'?: AgsAudio.Port;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AgsFxSFZSynthAudioConstructOnly = AgsFxNotationAudioConstructOnly | AgsConnectableConstructOnly;

export interface AgsFxSFZSynthAudioProcessorProps extends AgsFxNotationAudioProcessorProps, AgsConnectableProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AgsFxSFZSynthAudioProcessorConstructOnly = AgsFxNotationAudioProcessorConstructOnly | AgsConnectableConstructOnly;

export interface AgsFxSFZSynthAudioSignalProps extends AgsFxNotationAudioSignalProps, AgsConnectableProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AgsFxSFZSynthAudioSignalConstructOnly = AgsFxNotationAudioSignalConstructOnly | AgsConnectableConstructOnly;

export interface AgsFxSFZSynthChannelProps extends AgsFxNotationChannelProps, AgsConnectableProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AgsFxSFZSynthChannelConstructOnly = AgsFxNotationChannelConstructOnly | AgsConnectableConstructOnly;

export interface AgsFxSFZSynthChannelProcessorProps extends AgsFxNotationChannelProcessorProps, AgsConnectableProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AgsFxSFZSynthChannelProcessorConstructOnly = AgsFxNotationChannelProcessorConstructOnly | AgsConnectableConstructOnly;

export interface AgsFxSFZSynthRecyclingProps extends AgsFxNotationRecyclingProps, AgsConnectableProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AgsFxSFZSynthRecyclingConstructOnly = AgsFxNotationRecyclingConstructOnly | AgsConnectableConstructOnly;

export interface AgsFxSeqSynthAudioProps extends AgsFxNotationAudioProps, AgsConnectableProps {
    /**
     * The chorus delay.
     * @since 7.5.0
     */
    'chorus-delay'?: AgsAudio.Port;
    /**
     * The chorus depth.
     * @since 7.5.0
     */
    'chorus-depth'?: AgsAudio.Port;
    /**
     * The chorus enabled.
     * @since 7.5.0
     */
    'chorus-enabled'?: AgsAudio.Port;
    /**
     * The chorus input volume.
     * @since 7.5.0
     */
    'chorus-input-volume'?: AgsAudio.Port;
    /**
     * The chorus lfo frequency.
     * @since 7.5.0
     */
    'chorus-lfo-frequency'?: AgsAudio.Port;
    /**
     * The chorus lfo oscillator.
     * @since 7.5.0
     */
    'chorus-lfo-oscillator'?: AgsAudio.Port;
    /**
     * The chorus mix.
     * @since 7.5.0
     */
    'chorus-mix'?: AgsAudio.Port;
    /**
     * The chorus output volume.
     * @since 7.5.0
     */
    'chorus-output-volume'?: AgsAudio.Port;
    /**
     * The chorus pitch type.
     * @since 7.5.0
     */
    'chorus-pitch-type'?: AgsAudio.Port;
    /**
     * The noise gain.
     * @since 7.5.0
     */
    'noise-gain'?: AgsAudio.Port;
    /**
     * The pitch tuning.
     * @since 7.5.0
     */
    'pitch-tuning'?: AgsAudio.Port;
    /**
     * The pitch type.
     * @since 7.5.0
     */
    'pitch-type'?: AgsAudio.Port;
    /**
     * The synth-0 key.
     * @since 7.5.0
     */
    'synth-0-key'?: AgsAudio.Port;
    /**
     * The synth-0 LFO depth.
     * @since 7.5.0
     */
    'synth-0-lfo-depth'?: AgsAudio.Port;
    /**
     * The synth-0 LFO frequency.
     * @since 7.5.0
     */
    'synth-0-lfo-frequency'?: AgsAudio.Port;
    /**
     * The synth-0 lfo-oscillator.
     * @since 7.5.0
     */
    'synth-0-lfo-oscillator'?: AgsAudio.Port;
    /**
     * The synth-0 LFO tuning.
     * @since 7.5.0
     */
    'synth-0-lfo-tuning'?: AgsAudio.Port;
    /**
     * The synth-0 octave.
     * @since 7.5.0
     */
    'synth-0-octave'?: AgsAudio.Port;
    /**
     * The synth-0 oscillator.
     * @since 7.5.0
     */
    'synth-0-oscillator'?: AgsAudio.Port;
    /**
     * The synth-0 phase.
     * @since 7.5.0
     */
    'synth-0-phase'?: AgsAudio.Port;
    /**
     * The synth-0 sequencer tuning 0.
     * @since 7.5.0
     */
    'synth-0-seq-tuning-0'?: AgsAudio.Port;
    /**
     * The synth-0 sequencer tuning 1.
     * @since 7.5.0
     */
    'synth-0-seq-tuning-1'?: AgsAudio.Port;
    /**
     * The synth-0 sequencer tuning 2.
     * @since 7.5.0
     */
    'synth-0-seq-tuning-2'?: AgsAudio.Port;
    /**
     * The synth-0 sequencer tuning 3.
     * @since 7.5.0
     */
    'synth-0-seq-tuning-3'?: AgsAudio.Port;
    /**
     * The synth-0 sequencer tuning 4.
     * @since 7.5.0
     */
    'synth-0-seq-tuning-4'?: AgsAudio.Port;
    /**
     * The synth-0 sequencer tuning 5.
     * @since 7.5.0
     */
    'synth-0-seq-tuning-5'?: AgsAudio.Port;
    /**
     * The synth-0 sequencer tuning 6.
     * @since 7.5.0
     */
    'synth-0-seq-tuning-6'?: AgsAudio.Port;
    /**
     * The synth-0 sequencer tuning 7.
     * @since 7.5.0
     */
    'synth-0-seq-tuning-7'?: AgsAudio.Port;
    /**
     * The synth-0 sequencer tuning lfo-frequency.
     * @since 7.5.0
     */
    'synth-0-seq-tuning-lfo-frequency'?: AgsAudio.Port;
    /**
     * The synth-0 sequencer tuning pingpong.
     * @since 7.5.0
     */
    'synth-0-seq-tuning-pingpong'?: AgsAudio.Port;
    /**
     * The synth-0 sequencer volume 0.
     * @since 7.5.0
     */
    'synth-0-seq-volume-0'?: AgsAudio.Port;
    /**
     * The synth-0 sequencer volume 1.
     * @since 7.5.0
     */
    'synth-0-seq-volume-1'?: AgsAudio.Port;
    /**
     * The synth-0 sequencer volume 2.
     * @since 7.5.0
     */
    'synth-0-seq-volume-2'?: AgsAudio.Port;
    /**
     * The synth-0 sequencer volume 3.
     * @since 7.5.0
     */
    'synth-0-seq-volume-3'?: AgsAudio.Port;
    /**
     * The synth-0 sequencer volume 4.
     * @since 7.5.0
     */
    'synth-0-seq-volume-4'?: AgsAudio.Port;
    /**
     * The synth-0 sequencer volume 5.
     * @since 7.5.0
     */
    'synth-0-seq-volume-5'?: AgsAudio.Port;
    /**
     * The synth-0 sequencer volume 6.
     * @since 7.5.0
     */
    'synth-0-seq-volume-6'?: AgsAudio.Port;
    /**
     * The synth-0 sequencer volume 7.
     * @since 7.5.0
     */
    'synth-0-seq-volume-7'?: AgsAudio.Port;
    /**
     * The synth-0 sequencer volume lfo-frequency.
     * @since 7.5.0
     */
    'synth-0-seq-volume-lfo-frequency'?: AgsAudio.Port;
    /**
     * The synth-0 sequencer volume pingpong.
     * @since 7.5.0
     */
    'synth-0-seq-volume-pingpong'?: AgsAudio.Port;
    /**
     * The synth-0 sync attack-0.
     * @since 7.5.0
     */
    'synth-0-sync-attack-0'?: AgsAudio.Port;
    /**
     * The synth-0 sync attack-1.
     * @since 7.5.0
     */
    'synth-0-sync-attack-1'?: AgsAudio.Port;
    /**
     * The synth-0 sync attack-2.
     * @since 7.5.0
     */
    'synth-0-sync-attack-2'?: AgsAudio.Port;
    /**
     * The synth-0 sync attack-3.
     * @since 7.5.0
     */
    'synth-0-sync-attack-3'?: AgsAudio.Port;
    /**
     * The synth-0 sync enabled.
     * @since 7.5.0
     */
    'synth-0-sync-enabled'?: AgsAudio.Port;
    /**
     * The synth-0 sync LFO frequency.
     * @since 7.5.0
     */
    'synth-0-sync-lfo-frequency'?: AgsAudio.Port;
    /**
     * The synth-0 sync LFO oscillator.
     * @since 7.5.0
     */
    'synth-0-sync-lfo-oscillator'?: AgsAudio.Port;
    /**
     * The synth-0 sync phase-0.
     * @since 7.5.0
     */
    'synth-0-sync-phase-0'?: AgsAudio.Port;
    /**
     * The synth-0 sync phase-1.
     * @since 7.5.0
     */
    'synth-0-sync-phase-1'?: AgsAudio.Port;
    /**
     * The synth-0 sync phase-2.
     * @since 7.5.0
     */
    'synth-0-sync-phase-2'?: AgsAudio.Port;
    /**
     * The synth-0 sync phase-3.
     * @since 7.5.0
     */
    'synth-0-sync-phase-3'?: AgsAudio.Port;
    /**
     * The synth-0 sync relative attack factor.
     * @since 7.5.0
     */
    'synth-0-sync-relative-attack-factor'?: AgsAudio.Port;
    /**
     * The synth-0 volume.
     * @since 7.5.0
     */
    'synth-0-volume'?: AgsAudio.Port;
    /**
     * The synth-1 key.
     * @since 7.5.0
     */
    'synth-1-key'?: AgsAudio.Port;
    /**
     * The synth-1 LFO depth.
     * @since 7.5.0
     */
    'synth-1-lfo-depth'?: AgsAudio.Port;
    /**
     * The synth-1 LFO frequency.
     * @since 7.5.0
     */
    'synth-1-lfo-frequency'?: AgsAudio.Port;
    /**
     * The synth-1 lfo-oscillator.
     * @since 7.5.0
     */
    'synth-1-lfo-oscillator'?: AgsAudio.Port;
    /**
     * The synth-1 LFO tuning.
     * @since 7.5.0
     */
    'synth-1-lfo-tuning'?: AgsAudio.Port;
    /**
     * The synth-1 octave.
     * @since 7.5.0
     */
    'synth-1-octave'?: AgsAudio.Port;
    /**
     * The synth-1 oscillator.
     * @since 7.5.0
     */
    'synth-1-oscillator'?: AgsAudio.Port;
    /**
     * The synth-1 phase.
     * @since 7.5.0
     */
    'synth-1-phase'?: AgsAudio.Port;
    /**
     * The synth-1 sequencer tuning 0.
     * @since 7.5.0
     */
    'synth-1-seq-tuning-0'?: AgsAudio.Port;
    /**
     * The synth-1 sequencer tuning 1.
     * @since 7.5.0
     */
    'synth-1-seq-tuning-1'?: AgsAudio.Port;
    /**
     * The synth-1 sequencer tuning 2.
     * @since 7.5.0
     */
    'synth-1-seq-tuning-2'?: AgsAudio.Port;
    /**
     * The synth-1 sequencer tuning 3.
     * @since 7.5.0
     */
    'synth-1-seq-tuning-3'?: AgsAudio.Port;
    /**
     * The synth-1 sequencer tuning 4.
     * @since 7.5.0
     */
    'synth-1-seq-tuning-4'?: AgsAudio.Port;
    /**
     * The synth-1 sequencer tuning 5.
     * @since 7.5.0
     */
    'synth-1-seq-tuning-5'?: AgsAudio.Port;
    /**
     * The synth-1 sequencer tuning 6.
     * @since 7.5.0
     */
    'synth-1-seq-tuning-6'?: AgsAudio.Port;
    /**
     * The synth-1 sequencer tuning 7.
     * @since 7.5.0
     */
    'synth-1-seq-tuning-7'?: AgsAudio.Port;
    /**
     * The synth-1 sequencer tuning lfo-frequency.
     * @since 7.5.0
     */
    'synth-1-seq-tuning-lfo-frequency'?: AgsAudio.Port;
    /**
     * The synth-1 sequencer tuning pingpong.
     * @since 7.5.0
     */
    'synth-1-seq-tuning-pingpong'?: AgsAudio.Port;
    /**
     * The synth-1 sequencer volume 0.
     * @since 7.5.0
     */
    'synth-1-seq-volume-0'?: AgsAudio.Port;
    /**
     * The synth-1 sequencer volume 1.
     * @since 7.5.0
     */
    'synth-1-seq-volume-1'?: AgsAudio.Port;
    /**
     * The synth-1 sequencer volume 2.
     * @since 7.5.0
     */
    'synth-1-seq-volume-2'?: AgsAudio.Port;
    /**
     * The synth-1 sequencer volume 3.
     * @since 7.5.0
     */
    'synth-1-seq-volume-3'?: AgsAudio.Port;
    /**
     * The synth-1 sequencer volume 4.
     * @since 7.5.0
     */
    'synth-1-seq-volume-4'?: AgsAudio.Port;
    /**
     * The synth-1 sequencer volume 5.
     * @since 7.5.0
     */
    'synth-1-seq-volume-5'?: AgsAudio.Port;
    /**
     * The synth-1 sequencer volume 6.
     * @since 7.5.0
     */
    'synth-1-seq-volume-6'?: AgsAudio.Port;
    /**
     * The synth-1 sequencer volume 7.
     * @since 7.5.0
     */
    'synth-1-seq-volume-7'?: AgsAudio.Port;
    /**
     * The synth-1 sequencer volume lfo-frequency.
     * @since 7.5.0
     */
    'synth-1-seq-volume-lfo-frequency'?: AgsAudio.Port;
    /**
     * The synth-1 sequencer volume pingpong.
     * @since 7.5.0
     */
    'synth-1-seq-volume-pingpong'?: AgsAudio.Port;
    /**
     * The synth-1 sync attack-0.
     * @since 7.5.0
     */
    'synth-1-sync-attack-0'?: AgsAudio.Port;
    /**
     * The synth-1 sync attack-1.
     * @since 7.5.0
     */
    'synth-1-sync-attack-1'?: AgsAudio.Port;
    /**
     * The synth-1 sync attack-2.
     * @since 7.5.0
     */
    'synth-1-sync-attack-2'?: AgsAudio.Port;
    /**
     * The synth-1 sync attack-3.
     * @since 7.5.0
     */
    'synth-1-sync-attack-3'?: AgsAudio.Port;
    /**
     * The synth-1 sync enabled.
     * @since 7.5.0
     */
    'synth-1-sync-enabled'?: AgsAudio.Port;
    /**
     * The synth-1 sync LFO frequency.
     * @since 7.5.0
     */
    'synth-1-sync-lfo-frequency'?: AgsAudio.Port;
    /**
     * The synth-1 sync LFO oscillator.
     * @since 7.5.0
     */
    'synth-1-sync-lfo-oscillator'?: AgsAudio.Port;
    /**
     * The synth-1 sync phase-0.
     * @since 7.5.0
     */
    'synth-1-sync-phase-0'?: AgsAudio.Port;
    /**
     * The synth-1 sync phase-1.
     * @since 7.5.0
     */
    'synth-1-sync-phase-1'?: AgsAudio.Port;
    /**
     * The synth-1 sync phase-2.
     * @since 7.5.0
     */
    'synth-1-sync-phase-2'?: AgsAudio.Port;
    /**
     * The synth-1 sync phase-3.
     * @since 7.5.0
     */
    'synth-1-sync-phase-3'?: AgsAudio.Port;
    /**
     * The synth-1 sync relative attack factor.
     * @since 7.5.0
     */
    'synth-1-sync-relative-attack-factor'?: AgsAudio.Port;
    /**
     * The synth-1 volume.
     * @since 7.5.0
     */
    'synth-1-volume'?: AgsAudio.Port;
    /**
     * The vibrato enabled.
     * @since 7.5.0
     */
    'vibrato-enabled'?: AgsAudio.Port;
    /**
     * The vibrato gain.
     * @since 7.5.0
     */
    'vibrato-gain'?: AgsAudio.Port;
    /**
     * The vibrato LFO depth.
     * @since 7.5.0
     */
    'vibrato-lfo-depth'?: AgsAudio.Port;
    /**
     * The vibrato LFO freq.
     * @since 7.5.0
     */
    'vibrato-lfo-freq'?: AgsAudio.Port;
    /**
     * The vibrato tuning.
     * @since 7.5.0
     */
    'vibrato-tuning'?: AgsAudio.Port;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AgsFxSeqSynthAudioConstructOnly = AgsFxNotationAudioConstructOnly | AgsConnectableConstructOnly;

export interface AgsFxSeqSynthAudioProcessorProps extends AgsFxNotationAudioProcessorProps, AgsConnectableProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AgsFxSeqSynthAudioProcessorConstructOnly = AgsFxNotationAudioProcessorConstructOnly | AgsConnectableConstructOnly;

export interface AgsFxSeqSynthAudioSignalProps extends AgsFxNotationAudioSignalProps, AgsConnectableProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AgsFxSeqSynthAudioSignalConstructOnly = AgsFxNotationAudioSignalConstructOnly | AgsConnectableConstructOnly;

export interface AgsFxSeqSynthChannelProps extends AgsFxNotationChannelProps, AgsConnectableProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AgsFxSeqSynthChannelConstructOnly = AgsFxNotationChannelConstructOnly | AgsConnectableConstructOnly;

export interface AgsFxSeqSynthChannelProcessorProps extends AgsFxNotationChannelProcessorProps, AgsConnectableProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AgsFxSeqSynthChannelProcessorConstructOnly = AgsFxNotationChannelProcessorConstructOnly | AgsConnectableConstructOnly;

export interface AgsFxSeqSynthRecyclingProps extends AgsFxNotationRecyclingProps, AgsConnectableProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AgsFxSeqSynthRecyclingConstructOnly = AgsFxNotationRecyclingConstructOnly | AgsConnectableConstructOnly;

export interface AgsFxStarSynthAudioProps extends AgsFxNotationAudioProps, AgsConnectableProps {
    /**
     * The chorus delay.
     * @since 7.4.0
     */
    'chorus-delay'?: AgsAudio.Port;
    /**
     * The chorus depth.
     * @since 7.4.0
     */
    'chorus-depth'?: AgsAudio.Port;
    /**
     * The chorus enabled.
     * @since 7.4.0
     */
    'chorus-enabled'?: AgsAudio.Port;
    /**
     * The chorus input volume.
     * @since 7.4.0
     */
    'chorus-input-volume'?: AgsAudio.Port;
    /**
     * The chorus lfo frequency.
     * @since 7.4.0
     */
    'chorus-lfo-frequency'?: AgsAudio.Port;
    /**
     * The chorus lfo oscillator.
     * @since 7.4.0
     */
    'chorus-lfo-oscillator'?: AgsAudio.Port;
    /**
     * The chorus mix.
     * @since 7.4.0
     */
    'chorus-mix'?: AgsAudio.Port;
    /**
     * The chorus output volume.
     * @since 7.4.0
     */
    'chorus-output-volume'?: AgsAudio.Port;
    /**
     * The chorus pitch type.
     * @since 7.4.0
     */
    'chorus-pitch-type'?: AgsAudio.Port;
    /**
     * The noise gain.
     * @since 7.4.0
     */
    'noise-gain'?: AgsAudio.Port;
    /**
     * The pitch tuning.
     * @since 7.4.0
     */
    'pitch-tuning'?: AgsAudio.Port;
    /**
     * The pitch type.
     * @since 7.4.0
     */
    'pitch-type'?: AgsAudio.Port;
    /**
     * The synth-0 key.
     * @since 7.4.0
     */
    'synth-0-key'?: AgsAudio.Port;
    /**
     * The synth-0 LFO depth.
     * @since 7.4.0
     */
    'synth-0-lfo-depth'?: AgsAudio.Port;
    /**
     * The synth-0 LFO frequency.
     * @since 7.4.0
     */
    'synth-0-lfo-frequency'?: AgsAudio.Port;
    /**
     * The synth-0 lfo-oscillator.
     * @since 7.4.0
     */
    'synth-0-lfo-oscillator'?: AgsAudio.Port;
    /**
     * The synth-0 LFO tuning.
     * @since 7.4.0
     */
    'synth-0-lfo-tuning'?: AgsAudio.Port;
    /**
     * The synth-0 octave.
     * @since 7.4.0
     */
    'synth-0-octave'?: AgsAudio.Port;
    /**
     * The synth-0 oscillator.
     * @since 7.4.0
     */
    'synth-0-oscillator'?: AgsAudio.Port;
    /**
     * The synth-0 phase.
     * @since 7.4.0
     */
    'synth-0-phase'?: AgsAudio.Port;
    /**
     * The synth-0 sync attack-0.
     * @since 7.4.0
     */
    'synth-0-sync-attack-0'?: AgsAudio.Port;
    /**
     * The synth-0 sync attack-1.
     * @since 7.4.0
     */
    'synth-0-sync-attack-1'?: AgsAudio.Port;
    /**
     * The synth-0 sync attack-2.
     * @since 7.4.0
     */
    'synth-0-sync-attack-2'?: AgsAudio.Port;
    /**
     * The synth-0 sync attack-3.
     * @since 7.4.0
     */
    'synth-0-sync-attack-3'?: AgsAudio.Port;
    /**
     * The synth-0 sync enabled.
     * @since 7.4.0
     */
    'synth-0-sync-enabled'?: AgsAudio.Port;
    /**
     * The synth-0 sync LFO frequency.
     * @since 7.4.0
     */
    'synth-0-sync-lfo-frequency'?: AgsAudio.Port;
    /**
     * The synth-0 sync LFO oscillator.
     * @since 7.4.0
     */
    'synth-0-sync-lfo-oscillator'?: AgsAudio.Port;
    /**
     * The synth-0 sync phase-0.
     * @since 7.4.0
     */
    'synth-0-sync-phase-0'?: AgsAudio.Port;
    /**
     * The synth-0 sync phase-1.
     * @since 7.4.0
     */
    'synth-0-sync-phase-1'?: AgsAudio.Port;
    /**
     * The synth-0 sync phase-2.
     * @since 7.4.0
     */
    'synth-0-sync-phase-2'?: AgsAudio.Port;
    /**
     * The synth-0 sync phase-3.
     * @since 7.4.0
     */
    'synth-0-sync-phase-3'?: AgsAudio.Port;
    /**
     * The synth-0 sync relative attack factor.
     * @since 7.4.0
     */
    'synth-0-sync-relative-attack-factor'?: AgsAudio.Port;
    /**
     * The synth-0 volume.
     * @since 7.4.0
     */
    'synth-0-volume'?: AgsAudio.Port;
    /**
     * The synth-1 key.
     * @since 7.4.0
     */
    'synth-1-key'?: AgsAudio.Port;
    /**
     * The synth-1 LFO depth.
     * @since 7.4.0
     */
    'synth-1-lfo-depth'?: AgsAudio.Port;
    /**
     * The synth-1 LFO frequency.
     * @since 7.4.0
     */
    'synth-1-lfo-frequency'?: AgsAudio.Port;
    /**
     * The synth-1 lfo-oscillator.
     * @since 7.4.0
     */
    'synth-1-lfo-oscillator'?: AgsAudio.Port;
    /**
     * The synth-1 LFO tuning.
     * @since 7.4.0
     */
    'synth-1-lfo-tuning'?: AgsAudio.Port;
    /**
     * The synth-1 octave.
     * @since 7.4.0
     */
    'synth-1-octave'?: AgsAudio.Port;
    /**
     * The synth-1 oscillator.
     * @since 7.4.0
     */
    'synth-1-oscillator'?: AgsAudio.Port;
    /**
     * The synth-1 phase.
     * @since 7.4.0
     */
    'synth-1-phase'?: AgsAudio.Port;
    /**
     * The synth-1 sync attack-0.
     * @since 7.4.0
     */
    'synth-1-sync-attack-0'?: AgsAudio.Port;
    /**
     * The synth-1 sync attack-1.
     * @since 7.4.0
     */
    'synth-1-sync-attack-1'?: AgsAudio.Port;
    /**
     * The synth-1 sync attack-2.
     * @since 7.4.0
     */
    'synth-1-sync-attack-2'?: AgsAudio.Port;
    /**
     * The synth-1 sync attack-3.
     * @since 7.4.0
     */
    'synth-1-sync-attack-3'?: AgsAudio.Port;
    /**
     * The synth-1 sync enabled.
     * @since 7.4.0
     */
    'synth-1-sync-enabled'?: AgsAudio.Port;
    /**
     * The synth-1 sync LFO frequency.
     * @since 7.4.0
     */
    'synth-1-sync-lfo-frequency'?: AgsAudio.Port;
    /**
     * The synth-1 sync LFO oscillator.
     * @since 7.4.0
     */
    'synth-1-sync-lfo-oscillator'?: AgsAudio.Port;
    /**
     * The synth-1 sync phase-0.
     * @since 7.4.0
     */
    'synth-1-sync-phase-0'?: AgsAudio.Port;
    /**
     * The synth-1 sync phase-1.
     * @since 7.4.0
     */
    'synth-1-sync-phase-1'?: AgsAudio.Port;
    /**
     * The synth-1 sync phase-2.
     * @since 7.4.0
     */
    'synth-1-sync-phase-2'?: AgsAudio.Port;
    /**
     * The synth-1 sync phase-3.
     * @since 7.4.0
     */
    'synth-1-sync-phase-3'?: AgsAudio.Port;
    /**
     * The synth-1 sync relative attack factor.
     * @since 7.4.0
     */
    'synth-1-sync-relative-attack-factor'?: AgsAudio.Port;
    /**
     * The synth-1 volume.
     * @since 7.4.0
     */
    'synth-1-volume'?: AgsAudio.Port;
    /**
     * The vibrato enabled.
     * @since 7.4.0
     */
    'vibrato-enabled'?: AgsAudio.Port;
    /**
     * The vibrato gain.
     * @since 7.4.0
     */
    'vibrato-gain'?: AgsAudio.Port;
    /**
     * The vibrato LFO depth.
     * @since 7.4.0
     */
    'vibrato-lfo-depth'?: AgsAudio.Port;
    /**
     * The vibrato LFO freq.
     * @since 7.4.0
     */
    'vibrato-lfo-freq'?: AgsAudio.Port;
    /**
     * The vibrato tuning.
     * @since 7.4.0
     */
    'vibrato-tuning'?: AgsAudio.Port;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AgsFxStarSynthAudioConstructOnly = AgsFxNotationAudioConstructOnly | AgsConnectableConstructOnly;

export interface AgsFxStarSynthAudioProcessorProps extends AgsFxNotationAudioProcessorProps, AgsConnectableProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AgsFxStarSynthAudioProcessorConstructOnly = AgsFxNotationAudioProcessorConstructOnly | AgsConnectableConstructOnly;

export interface AgsFxStarSynthAudioSignalProps extends AgsFxNotationAudioSignalProps, AgsConnectableProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AgsFxStarSynthAudioSignalConstructOnly = AgsFxNotationAudioSignalConstructOnly | AgsConnectableConstructOnly;

export interface AgsFxStarSynthChannelProps extends AgsFxNotationChannelProps, AgsConnectableProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AgsFxStarSynthChannelConstructOnly = AgsFxNotationChannelConstructOnly | AgsConnectableConstructOnly;

export interface AgsFxStarSynthChannelProcessorProps extends AgsFxNotationChannelProcessorProps, AgsConnectableProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AgsFxStarSynthChannelProcessorConstructOnly = AgsFxNotationChannelProcessorConstructOnly | AgsConnectableConstructOnly;

export interface AgsFxStarSynthRecyclingProps extends AgsFxNotationRecyclingProps, AgsConnectableProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AgsFxStarSynthRecyclingConstructOnly = AgsFxNotationRecyclingConstructOnly | AgsConnectableConstructOnly;

export interface AgsFxSynthAudioProps extends AgsFxNotationAudioProps, AgsConnectableProps {
    /**
     * The chorus delay.
     * @since 3.14.0
     */
    'chorus-delay'?: AgsAudio.Port;
    /**
     * The chorus depth.
     * @since 3.14.0
     */
    'chorus-depth'?: AgsAudio.Port;
    /**
     * The chorus enabled.
     * @since 3.14.0
     */
    'chorus-enabled'?: AgsAudio.Port;
    /**
     * The chorus input volume.
     * @since 3.14.0
     */
    'chorus-input-volume'?: AgsAudio.Port;
    /**
     * The chorus lfo frequency.
     * @since 3.14.0
     */
    'chorus-lfo-frequency'?: AgsAudio.Port;
    /**
     * The chorus lfo oscillator.
     * @since 3.14.0
     */
    'chorus-lfo-oscillator'?: AgsAudio.Port;
    /**
     * The chorus mix.
     * @since 3.14.0
     */
    'chorus-mix'?: AgsAudio.Port;
    /**
     * The chorus output volume.
     * @since 3.14.0
     */
    'chorus-output-volume'?: AgsAudio.Port;
    /**
     * The chorus pitch type.
     * @since 4.0.0
     */
    'chorus-pitch-type'?: AgsAudio.Port;
    /**
     * The high pass enabled.
     * @since 3.14.0
     */
    'high-pass-enabled'?: AgsAudio.Port;
    /**
     * The high pass filter gain.
     * @since 3.14.0
     */
    'high-pass-filter-gain'?: AgsAudio.Port;
    /**
     * The high pass q-lin.
     * @since 3.14.0
     */
    'high-pass-q-lin'?: AgsAudio.Port;
    /**
     * The low pass enabled.
     * @since 3.14.0
     */
    'low-pass-enabled'?: AgsAudio.Port;
    /**
     * The low pass filter gain.
     * @since 3.14.0
     */
    'low-pass-filter-gain'?: AgsAudio.Port;
    /**
     * The low pass q-lin.
     * @since 3.14.0
     */
    'low-pass-q-lin'?: AgsAudio.Port;
    /**
     * The noise gain.
     * @since 3.14.0
     */
    'noise-gain'?: AgsAudio.Port;
    /**
     * The pitch tuning.
     * @since 3.14.0
     */
    'pitch-tuning'?: AgsAudio.Port;
    /**
     * The pitch type.
     * @since 4.0.0
     */
    'pitch-type'?: AgsAudio.Port;
    /**
     * The sequencer enabled.
     * @since 3.14.0
     */
    'sequencer-enabled'?: AgsAudio.Port;
    /**
     * The sequencer sign.
     * @since 3.14.0
     */
    'sequencer-sign'?: AgsAudio.Port;
    /**
     * The synth-0 key.
     * @since 3.14.0
     */
    'synth-0-key'?: AgsAudio.Port;
    /**
     * The synth-0 octave.
     * @since 3.14.0
     */
    'synth-0-octave'?: AgsAudio.Port;
    /**
     * The synth-0 oscillator.
     * @since 3.14.0
     */
    'synth-0-oscillator'?: AgsAudio.Port;
    /**
     * The synth-0 phase.
     * @since 3.14.0
     */
    'synth-0-phase'?: AgsAudio.Port;
    /**
     * The synth-0 sync attack-0.
     * @since 3.14.0
     */
    'synth-0-sync-attack-0'?: AgsAudio.Port;
    /**
     * The synth-0 sync attack-1.
     * @since 3.14.0
     */
    'synth-0-sync-attack-1'?: AgsAudio.Port;
    /**
     * The synth-0 sync attack-2.
     * @since 3.14.0
     */
    'synth-0-sync-attack-2'?: AgsAudio.Port;
    /**
     * The synth-0 sync enabled.
     * @since 3.14.0
     */
    'synth-0-sync-enabled'?: AgsAudio.Port;
    /**
     * The synth-0 sync LFO frequency.
     * @since 3.14.0
     */
    'synth-0-sync-lfo-frequency'?: AgsAudio.Port;
    /**
     * The synth-0 sync LFO oscillator.
     * @since 3.14.0
     */
    'synth-0-sync-lfo-oscillator'?: AgsAudio.Port;
    /**
     * The synth-0 sync phase-0.
     * @since 3.14.0
     */
    'synth-0-sync-phase-0'?: AgsAudio.Port;
    /**
     * The synth-0 sync phase-1.
     * @since 3.14.0
     */
    'synth-0-sync-phase-1'?: AgsAudio.Port;
    /**
     * The synth-0 sync phase-2.
     * @since 3.14.0
     */
    'synth-0-sync-phase-2'?: AgsAudio.Port;
    /**
     * The synth-0 sync relative attack factor.
     * @since 3.14.0
     */
    'synth-0-sync-relative-attack-factor'?: AgsAudio.Port;
    /**
     * The synth-0 volume.
     * @since 3.14.0
     */
    'synth-0-volume'?: AgsAudio.Port;
    /**
     * The synth-1 key.
     * @since 3.14.0
     */
    'synth-1-key'?: AgsAudio.Port;
    /**
     * The synth-1 octave.
     * @since 3.14.0
     */
    'synth-1-octave'?: AgsAudio.Port;
    /**
     * The synth-1 oscillator.
     * @since 3.14.0
     */
    'synth-1-oscillator'?: AgsAudio.Port;
    /**
     * The synth-1 phase.
     * @since 3.14.0
     */
    'synth-1-phase'?: AgsAudio.Port;
    /**
     * The synth-1 sync attack-0.
     * @since 3.14.0
     */
    'synth-1-sync-attack-0'?: AgsAudio.Port;
    /**
     * The synth-1 sync attack-1.
     * @since 3.14.0
     */
    'synth-1-sync-attack-1'?: AgsAudio.Port;
    /**
     * The synth-1 sync attack-2.
     * @since 3.14.0
     */
    'synth-1-sync-attack-2'?: AgsAudio.Port;
    /**
     * The synth-1 sync enabled.
     * @since 3.14.0
     */
    'synth-1-sync-enabled'?: AgsAudio.Port;
    /**
     * The synth-1 sync LFO frequency.
     * @since 3.14.0
     */
    'synth-1-sync-lfo-frequency'?: AgsAudio.Port;
    /**
     * The synth-1 sync LFO oscillator.
     * @since 3.14.0
     */
    'synth-1-sync-lfo-oscillator'?: AgsAudio.Port;
    /**
     * The synth-1 sync phase-0.
     * @since 3.14.0
     */
    'synth-1-sync-phase-0'?: AgsAudio.Port;
    /**
     * The synth-1 sync phase-1.
     * @since 3.14.0
     */
    'synth-1-sync-phase-1'?: AgsAudio.Port;
    /**
     * The synth-1 sync phase-2.
     * @since 3.14.0
     */
    'synth-1-sync-phase-2'?: AgsAudio.Port;
    /**
     * The synth-1 sync relative attack factor.
     * @since 3.14.0
     */
    'synth-1-sync-relative-attack-factor'?: AgsAudio.Port;
    /**
     * The synth-1 volume.
     * @since 3.14.0
     */
    'synth-1-volume'?: AgsAudio.Port;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AgsFxSynthAudioConstructOnly = AgsFxNotationAudioConstructOnly | AgsConnectableConstructOnly;

export interface AgsFxSynthAudioProcessorProps extends AgsFxNotationAudioProcessorProps, AgsConnectableProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AgsFxSynthAudioProcessorConstructOnly = AgsFxNotationAudioProcessorConstructOnly | AgsConnectableConstructOnly;

export interface AgsFxSynthAudioSignalProps extends AgsFxNotationAudioSignalProps, AgsConnectableProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AgsFxSynthAudioSignalConstructOnly = AgsFxNotationAudioSignalConstructOnly | AgsConnectableConstructOnly;

export interface AgsFxSynthChannelProps extends AgsFxNotationChannelProps, AgsConnectableProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AgsFxSynthChannelConstructOnly = AgsFxNotationChannelConstructOnly | AgsConnectableConstructOnly;

export interface AgsFxSynthChannelProcessorProps extends AgsFxNotationChannelProcessorProps, AgsConnectableProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AgsFxSynthChannelProcessorConstructOnly = AgsFxNotationChannelProcessorConstructOnly | AgsConnectableConstructOnly;

export interface AgsFxSynthRecyclingProps extends AgsFxNotationRecyclingProps, AgsConnectableProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AgsFxSynthRecyclingConstructOnly = AgsFxNotationRecyclingConstructOnly | AgsConnectableConstructOnly;

export interface AgsFxTremoloAudioProps extends AgsRecallAudioProps, AgsConnectableProps {
    /**
     * The tremolo's enabled port.
     * @since 5.2.0
     */
    'tremolo-enabled'?: AgsAudio.Port;
    /**
     * The tremolo's gain port.
     * @since 5.2.0
     */
    'tremolo-gain'?: AgsAudio.Port;
    /**
     * The tremolo's lfo-depth port.
     * @since 5.2.0
     */
    'tremolo-lfo-depth'?: AgsAudio.Port;
    /**
     * The tremolo's lfo-freq port.
     * @since 5.2.0
     */
    'tremolo-lfo-freq'?: AgsAudio.Port;
    /**
     * The tremolo's tuning port.
     * @since 5.2.0
     */
    'tremolo-tuning'?: AgsAudio.Port;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AgsFxTremoloAudioConstructOnly = AgsRecallAudioConstructOnly | AgsConnectableConstructOnly;

export interface AgsFxTremoloAudioProcessorProps extends AgsRecallAudioRunProps, AgsConnectableProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AgsFxTremoloAudioProcessorConstructOnly = AgsRecallAudioRunConstructOnly | AgsConnectableConstructOnly;

export interface AgsFxTremoloAudioSignalProps extends AgsRecallAudioSignalProps, AgsConnectableProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AgsFxTremoloAudioSignalConstructOnly = AgsRecallAudioSignalConstructOnly | AgsConnectableConstructOnly;

export interface AgsFxTremoloChannelProps extends AgsRecallChannelProps, AgsConnectableProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AgsFxTremoloChannelConstructOnly = AgsRecallChannelConstructOnly | AgsConnectableConstructOnly;

export interface AgsFxTremoloChannelProcessorProps extends AgsRecallChannelRunProps, AgsConnectableProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AgsFxTremoloChannelProcessorConstructOnly = AgsRecallChannelRunConstructOnly | AgsConnectableConstructOnly;

export interface AgsFxTremoloRecyclingProps extends AgsRecallRecyclingProps, AgsConnectableProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AgsFxTremoloRecyclingConstructOnly = AgsRecallRecyclingConstructOnly | AgsConnectableConstructOnly;

export interface AgsFxTwoPassAliaseAudioProps extends AgsRecallAudioProps, AgsConnectableProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AgsFxTwoPassAliaseAudioConstructOnly = AgsRecallAudioConstructOnly | AgsConnectableConstructOnly;

export interface AgsFxTwoPassAliaseAudioProcessorProps extends AgsRecallAudioRunProps, AgsConnectableProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AgsFxTwoPassAliaseAudioProcessorConstructOnly = AgsRecallAudioRunConstructOnly | AgsConnectableConstructOnly;

export interface AgsFxTwoPassAliaseAudioSignalProps extends AgsRecallAudioSignalProps, AgsConnectableProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AgsFxTwoPassAliaseAudioSignalConstructOnly = AgsRecallAudioSignalConstructOnly | AgsConnectableConstructOnly;

export interface AgsFxTwoPassAliaseChannelProps extends AgsRecallChannelProps, AgsConnectableProps {
    /**
     * The first pass amount.
     * @since 3.8.0
     */
    'a-amount'?: AgsAudio.Port;
    /**
     * The first pass phase.
     * @since 3.8.0
     */
    'a-phase'?: AgsAudio.Port;
    /**
     * The second pass amount.
     * @since 3.8.0
     */
    'b-amount'?: AgsAudio.Port;
    /**
     * The second pass phase.
     * @since 3.8.0
     */
    'b-phase'?: AgsAudio.Port;
    /**
     * The enable control of two pass aliase.
     * @since 3.8.0
     */
    enabled?: AgsAudio.Port;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AgsFxTwoPassAliaseChannelConstructOnly = AgsRecallChannelConstructOnly | AgsConnectableConstructOnly;

export interface AgsFxTwoPassAliaseChannelProcessorProps extends AgsRecallChannelRunProps, AgsConnectableProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AgsFxTwoPassAliaseChannelProcessorConstructOnly = AgsRecallChannelRunConstructOnly | AgsConnectableConstructOnly;

export interface AgsFxTwoPassAliaseRecyclingProps extends AgsRecallRecyclingProps, AgsConnectableProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AgsFxTwoPassAliaseRecyclingConstructOnly = AgsRecallRecyclingConstructOnly | AgsConnectableConstructOnly;

export interface AgsFxVolumeAudioProps extends AgsRecallAudioProps, AgsConnectableProps {
    /**
     * The muted port.
     * @since 3.3.0
     */
    muted?: AgsAudio.Port;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AgsFxVolumeAudioConstructOnly = AgsRecallAudioConstructOnly | AgsConnectableConstructOnly;

export interface AgsFxVolumeAudioProcessorProps extends AgsRecallAudioRunProps, AgsConnectableProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AgsFxVolumeAudioProcessorConstructOnly = AgsRecallAudioRunConstructOnly | AgsConnectableConstructOnly;

export interface AgsFxVolumeAudioSignalProps extends AgsRecallAudioSignalProps, AgsConnectableProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AgsFxVolumeAudioSignalConstructOnly = AgsRecallAudioSignalConstructOnly | AgsConnectableConstructOnly;

export interface AgsFxVolumeChannelProps extends AgsRecallChannelProps, AgsConnectableProps {
    /**
     * The muted port.
     * @since 3.3.0
     */
    muted?: AgsAudio.Port;
    /**
     * The volume port.
     * @since 3.3.0
     */
    volume?: AgsAudio.Port;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AgsFxVolumeChannelConstructOnly = AgsRecallChannelConstructOnly | AgsConnectableConstructOnly;

export interface AgsFxVolumeChannelProcessorProps extends AgsRecallChannelRunProps, AgsConnectableProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AgsFxVolumeChannelProcessorConstructOnly = AgsRecallChannelRunConstructOnly | AgsConnectableConstructOnly;

export interface AgsFxVolumeRecyclingProps extends AgsRecallRecyclingProps, AgsConnectableProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AgsFxVolumeRecyclingConstructOnly = AgsRecallRecyclingConstructOnly | AgsConnectableConstructOnly;

export interface AgsFxWahWahAudioProps extends AgsRecallAudioProps, AgsConnectableProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AgsFxWahWahAudioConstructOnly = AgsRecallAudioConstructOnly | AgsConnectableConstructOnly;

export interface AgsFxWahWahAudioProcessorProps extends AgsRecallAudioRunProps, AgsConnectableProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AgsFxWahWahAudioProcessorConstructOnly = AgsRecallAudioRunConstructOnly | AgsConnectableConstructOnly;

export interface AgsFxWahWahAudioSignalProps extends AgsRecallAudioSignalProps, AgsConnectableProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AgsFxWahWahAudioSignalConstructOnly = AgsRecallAudioSignalConstructOnly | AgsConnectableConstructOnly;

export interface AgsFxWahWahChannelProps extends AgsRecallChannelProps, AgsConnectableProps {
    /**
     * The attack.
     * @since 5.2.0
     */
    'wah-wah-attack'?: AgsAudio.Port;
    /**
     * The decay.
     * @since 5.2.0
     */
    'wah-wah-decay'?: AgsAudio.Port;
    /**
     * The enabled switch.
     * @since 5.2.0
     */
    'wah-wah-enabled'?: AgsAudio.Port;
    /**
     * The fixed length.
     * @since 5.2.0
     */
    'wah-wah-fixed-length'?: AgsAudio.Port;
    /**
     * The length mode.
     * @since 5.2.0
     */
    'wah-wah-length-mode'?: AgsAudio.Port;
    /**
     * The lfo_depth.
     * @since 5.2.0
     */
    'wah-wah-lfo-depth'?: AgsAudio.Port;
    /**
     * The lfo_freq.
     * @since 5.2.0
     */
    'wah-wah-lfo-freq'?: AgsAudio.Port;
    /**
     * The ratio.
     * @since 5.2.0
     */
    'wah-wah-ratio'?: AgsAudio.Port;
    /**
     * The release.
     * @since 5.2.0
     */
    'wah-wah-release'?: AgsAudio.Port;
    /**
     * The sustain.
     * @since 5.2.0
     */
    'wah-wah-sustain'?: AgsAudio.Port;
    /**
     * The tuning.
     * @since 5.2.0
     */
    'wah-wah-tuning'?: AgsAudio.Port;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AgsFxWahWahChannelConstructOnly = AgsRecallChannelConstructOnly | AgsConnectableConstructOnly;

export interface AgsFxWahWahChannelProcessorProps extends AgsRecallChannelRunProps, AgsConnectableProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AgsFxWahWahChannelProcessorConstructOnly = AgsRecallChannelRunConstructOnly | AgsConnectableConstructOnly;

export interface AgsFxWahWahRecyclingProps extends AgsRecallRecyclingProps, AgsConnectableProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AgsFxWahWahRecyclingConstructOnly = AgsRecallRecyclingConstructOnly | AgsConnectableConstructOnly;

export interface AgsGenericRecallChannelRunProps extends AgsRecallChannelRunProps, AgsConnectableProps {
    /**
     * The type of child #AgsRecall.
     * @since 3.0.0
     */
    'generic-recall-recycling-child-type'?: GObject.GType;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AgsGenericRecallChannelRunConstructOnly = AgsRecallChannelRunConstructOnly | AgsConnectableConstructOnly;

export interface AgsGenericRecallRecyclingProps extends AgsRecallRecyclingProps, AgsConnectableProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AgsGenericRecallRecyclingConstructOnly = AgsRecallRecyclingConstructOnly | AgsConnectableConstructOnly;

export interface AgsGstreamerClientProps extends GObjectProps, AgsConnectableProps {
    /**
     * The gstreamer client name.
     * @since 3.6.0
     * @default NULL
     */
    'client-name'?: string;
    /**
     * The assigned devices.
     * @since 3.6.0
     */
    device?: GObject.Object[];
    /**
     * The assigned #AgsGstreamerServer.
     * @since 3.6.0
     */
    'gstreamer-server'?: AgsAudio.GstreamerServer;
    /**
     * The assigned ports.
     * @since 3.6.0
     */
    port?: AgsAudio.GstreamerPort[];
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AgsGstreamerClientConstructOnly = GObjectConstructOnly | AgsConnectableConstructOnly;

export interface AgsGstreamerDevinProps extends GObjectProps, AgsConnectableProps {
    /**
     * Beats per minute
     * @since 3.6.0
     * @default 120.000000
     */
    bpm?: number;
    /**
     * The buffer size
     * @since 3.6.0
     * @default 940
     */
    'buffer-size'?: number;
    /**
     * tact
     * @since 3.6.0
     * @default 1.000000
     * @deprecated use AgsFrameClock instead
     */
    'delay-factor'?: number;
    /**
     * The gstreamer soundcard indentifier
     * @since 3.6.0
     * @default ags-gstreamer-devin-0
     */
    device?: string;
    /**
     * The dsp channel count
     * @since 3.6.0
     * @default 2
     */
    'dsp-channels'?: number;
    /**
     * The precision of the buffer
     * @since 3.6.0
     * @default 16
     */
    format?: number;
    /**
     * The assigned #AgsGstreamerClient
     * @since 3.6.0
     */
    'gstreamer-client'?: AgsAudio.GstreamerClient;
    /**
     * The assigned #AgsGstreamerPort
     * @since 3.6.0
     */
    'gstreamer-port'?: never;
    /**
     * The pcm channel count
     * @since 3.6.0
     * @default 2
     */
    'pcm-channels'?: number;
    /**
     * The samplerate
     * @since 3.6.0
     * @default 44100
     */
    samplerate?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AgsGstreamerDevinConstructOnly = GObjectConstructOnly | AgsConnectableConstructOnly;

export interface AgsGstreamerDevoutProps extends GObjectProps, AgsConnectableProps {
    /**
     * Beats per minute
     * @since 3.6.0
     * @default 120.000000
     */
    bpm?: number;
    /**
     * The buffer size
     * @since 3.6.0
     * @default 2048
     */
    'buffer-size'?: number;
    /**
     * tact
     * @since 3.6.0
     * @default 1.000000
     * @deprecated use AgsFrameClock instead
     */
    'delay-factor'?: number;
    /**
     * The gstreamer soundcard indentifier
     * @since 3.6.0
     * @default ags-gstreamer-devout-0
     */
    device?: string;
    /**
     * The dsp channel count
     * @since 3.6.0
     * @default 2
     */
    'dsp-channels'?: number;
    /**
     * The precision of the buffer
     * @since 3.6.0
     * @default 16
     */
    format?: number;
    /**
     * The assigned #AgsGstreamerClient
     * @since 3.6.0
     */
    'gstreamer-client'?: AgsAudio.GstreamerClient;
    /**
     * The assigned #AgsGstreamerPort
     * @since 3.6.0
     */
    'gstreamer-port'?: never;
    /**
     * The pcm channel count
     * @since 3.6.0
     * @default 2
     */
    'pcm-channels'?: number;
    /**
     * The samplerate
     * @since 3.6.0
     * @default 44100
     */
    samplerate?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AgsGstreamerDevoutConstructOnly = GObjectConstructOnly | AgsConnectableConstructOnly;

export interface AgsGstreamerFileProps extends GObjectProps, AgsConnectableProps, AgsSoundResourceProps {
    /**
     * The audio channels to be used.
     * @since 3.6.0
     * @default 0
     */
    'audio-channels'?: number;
    /**
     * The buffer size to be used.
     * @since 3.6.0
     * @default 0
     */
    'buffer-size'?: number;
    /**
     * The assigned filename.
     * @since 3.6.0
     * @default NULL
     */
    filename?: string;
    /**
     * The format to be used.
     * @since 3.6.0
     * @default 0
     */
    format?: number;
    /**
     * The samplerate to be used.
     * @since 3.6.0
     * @default 0
     */
    samplerate?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AgsGstreamerFileConstructOnly = GObjectConstructOnly | AgsConnectableConstructOnly | AgsSoundResourceConstructOnly;

export interface AgsGstreamerPortProps extends GObjectProps, AgsConnectableProps {
    /**
     * The assigned #AgsGstreamerClient.
     * @since 3.6.0
     */
    'gstreamer-client'?: AgsAudio.GstreamerClient;
    /**
     * The assigned #AgsGstreamerDevout.
     * @since 3.6.0
     */
    'gstreamer-devin'?: AgsAudio.GstreamerDevin;
    /**
     * The assigned #AgsGstreamerDevout.
     * @since 3.6.0
     */
    'gstreamer-devout'?: AgsAudio.GstreamerDevout;
    /**
     * The gstreamer soundcard indentifier
     * @since 3.6.0
     * @default NULL
     */
    'port-name'?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AgsGstreamerPortConstructOnly = GObjectConstructOnly | AgsConnectableConstructOnly;

export interface AgsGstreamerServerProps extends GObjectProps, AgsConnectableProps {
    /**
     * The default gstreamer client.
     * @since 3.6.0
     */
    'default-gstreamer-client'?: AgsAudio.GstreamerClient;
    /**
     * The default soundcard.
     * @since 3.6.0
     */
    'default-soundcard'?: GObject.Object;
    /**
     * The gstreamer client list.
     * @since 3.6.0
     */
    'gstreamer-client'?: AgsAudio.GstreamerClient[];
    /**
     * The assigned URL.
     * @since 3.6.0
     * @default NULL
     */
    url?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AgsGstreamerServerConstructOnly = GObjectConstructOnly | AgsConnectableConstructOnly;

export interface AgsInputProps extends AgsChannelProps, AgsConnectableProps {
    /**
     * The file containing audio data.
     * @since 3.0.0
     */
    'file-link'?: Ags.FileLink;
    /**
     * The synth generators assigned with this input.
     * @since 3.0.0
     */
    'synth-generator'?: AgsAudio.SynthGenerator[];
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AgsInputConstructOnly = AgsChannelConstructOnly | AgsConnectableConstructOnly;

export interface AgsIpatchProps extends GObjectProps, AgsConnectableProps, AgsSoundContainerProps {
    /**
     * The assigned filename.
     * @since 3.0.0
     * @default NULL
     */
    filename?: string;
    /**
     * The assigned mode.
     * @since 3.0.0
     * @default NULL
     */
    mode?: string;
    /**
     * The assigned soundcard.
     * @since 3.0.0
     */
    soundcard?: GObject.Object;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AgsIpatchConstructOnly = GObjectConstructOnly | AgsConnectableConstructOnly | AgsSoundContainerConstructOnly;

export interface AgsIpatchDLS2ReaderProps extends GObjectProps, AgsConnectableProps {
    /**
     * The assigned #AgsIpatch
     * @since 3.0.0
     */
    ipatch?: AgsAudio.Ipatch;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AgsIpatchDLS2ReaderConstructOnly = GObjectConstructOnly | AgsConnectableConstructOnly;

export interface AgsIpatchGigReaderProps extends GObjectProps, AgsConnectableProps {
    /**
     * The assigned #AgsIpatch
     * @since 3.0.0
     */
    ipatch?: AgsAudio.Ipatch;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AgsIpatchGigReaderConstructOnly = GObjectConstructOnly | AgsConnectableConstructOnly;

export interface AgsIpatchSF2ReaderProps extends GObjectProps, AgsConnectableProps {
    /**
     * The assigned #AgsIpatch
     * @since 3.0.0
     */
    ipatch?: AgsAudio.Ipatch;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AgsIpatchSF2ReaderConstructOnly = GObjectConstructOnly | AgsConnectableConstructOnly;

export interface AgsIpatchSampleProps extends GObjectProps, AgsConnectableProps, AgsSoundResourceProps {
    /**
     * The buffer size to be used.
     * @since 3.0.0
     * @default 0
     */
    'buffer-size'?: number;
    /**
     * The format to be used.
     * @since 3.0.0
     * @default 0
     */
    format?: number;
    /**
     * The assigned output #IpatchSample.
     * @since 3.0.0
     */
    sample?: GObject.Object;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AgsIpatchSampleConstructOnly = GObjectConstructOnly | AgsConnectableConstructOnly | AgsSoundResourceConstructOnly;

export interface AgsJackClientProps extends GObjectProps, AgsConnectableProps {
    /**
     * The JACK client name.
     * @since 3.0.0
     * @default NULL
     */
    'client-name'?: string;
    /**
     * The assigned devices.
     * @since 3.0.0
     */
    device?: GObject.Object[];
    /**
     * The assigned #AgsJackServer.
     * @since 3.0.0
     */
    'jack-server'?: AgsAudio.JackServer;
    /**
     * The assigned ports.
     * @since 3.0.0
     */
    port?: AgsAudio.JackPort[];
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AgsJackClientConstructOnly = GObjectConstructOnly | AgsConnectableConstructOnly;

export interface AgsJackDevinProps extends GObjectProps, AgsConnectableProps {
    /**
     * Beats per minute
     * @since 3.0.0
     * @default 120.000000
     */
    bpm?: number;
    /**
     * The buffer size
     * @since 3.0.0
     * @default 940
     */
    'buffer-size'?: number;
    /**
     * tact
     * @since 3.0.0
     * @default 1.000000
     * @deprecated use AgsFrameClock instead
     */
    'delay-factor'?: number;
    /**
     * The jack soundcard indentifier
     * @since 3.0.0
     * @default ags-jack-devin-0
     */
    device?: string;
    /**
     * The dsp channel count
     * @since 3.0.0
     * @default 2
     */
    'dsp-channels'?: number;
    /**
     * The precision of the buffer
     * @since 3.0.0
     * @default 16
     */
    format?: number;
    /**
     * The assigned #AgsJackClient
     * @since 3.0.0
     */
    'jack-client'?: AgsAudio.JackClient;
    /**
     * The assigned #AgsJackPort
     * @since 3.0.0
     */
    'jack-port'?: never;
    /**
     * The pcm channel count
     * @since 3.0.0
     * @default 2
     */
    'pcm-channels'?: number;
    /**
     * The samplerate
     * @since 3.0.0
     * @default 44100
     */
    samplerate?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AgsJackDevinConstructOnly = GObjectConstructOnly | AgsConnectableConstructOnly;

export interface AgsJackDevoutProps extends GObjectProps, AgsConnectableProps {
    /**
     * Beats per minute
     * @since 3.0.0
     * @default 120.000000
     */
    bpm?: number;
    /**
     * The buffer size
     * @since 3.0.0
     * @default 2048
     */
    'buffer-size'?: number;
    /**
     * tact
     * @since 3.0.0
     * @default 1.000000
     * @deprecated use AgsFrameClock instead
     */
    'delay-factor'?: number;
    /**
     * The jack soundcard indentifier
     * @since 3.0.0
     * @default ags-jack-devout-0
     */
    device?: string;
    /**
     * The dsp channel count
     * @since 3.0.0
     * @default 2
     */
    'dsp-channels'?: number;
    /**
     * The precision of the buffer
     * @since 3.0.0
     * @default 16
     */
    format?: number;
    /**
     * The assigned #AgsJackClient
     * @since 3.0.0
     */
    'jack-client'?: AgsAudio.JackClient;
    /**
     * The assigned #AgsJackPort
     * @since 3.0.0
     */
    'jack-port'?: never;
    /**
     * The pcm channel count
     * @since 3.0.0
     * @default 2
     */
    'pcm-channels'?: number;
    /**
     * The samplerate
     * @since 3.0.0
     * @default 44100
     */
    samplerate?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AgsJackDevoutConstructOnly = GObjectConstructOnly | AgsConnectableConstructOnly;

export interface AgsJackMidiinProps extends GObjectProps, AgsConnectableProps {
    /**
     * Beats per minute
     * @since 3.0.0
     * @default 120.000000
     */
    bpm?: number;
    /**
     * tact
     * @since 3.0.0
     * @default 1.000000
     */
    'delay-factor'?: number;
    /**
     * The JACK sequencer indentifier
     * @since 3.0.0
     * @default NULL
     */
    device?: string;
    /**
     * The assigned #AgsJackClient
     * @since 3.0.0
     */
    'jack-client'?: AgsAudio.JackClient;
    /**
     * The assigned #AgsJackPort
     * @since 3.0.0
     */
    'jack-port'?: AgsAudio.JackPort;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AgsJackMidiinConstructOnly = GObjectConstructOnly | AgsConnectableConstructOnly;

export interface AgsJackPortProps extends GObjectProps, AgsConnectableProps {
    /**
     * The assigned #AgsJackClient.
     * @since 3.0.0
     */
    'jack-client'?: AgsAudio.JackClient;
    /**
     * The JACK port name.
     * @since 3.0.0
     * @default NULL
     */
    'port-name'?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AgsJackPortConstructOnly = GObjectConstructOnly | AgsConnectableConstructOnly;

export interface AgsJackServerProps extends GObjectProps, AgsConnectableProps {
    /**
     * The default jack client.
     * @since 3.0.0
     */
    'default-jack-client'?: AgsAudio.JackClient;
    /**
     * The default soundcard.
     * @since 3.0.0
     */
    'default-soundcard'?: GObject.Object;
    /**
     * The input jack client.
     * @since 3.0.0
     */
    'input-jack-client'?: AgsAudio.JackClient;
    /**
     * The jack client list.
     * @since 3.0.0
     */
    'jack-client'?: AgsAudio.JackClient[];
    /**
     * The assigned URL.
     * @since 3.0.0
     * @default NULL
     */
    url?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AgsJackServerConstructOnly = GObjectConstructOnly | AgsConnectableConstructOnly;

export interface AgsLadspaConversionProps extends AgsConversionProps {
    /**
     * The lower to be used.
     * @since 3.0.0
     * @default 0.000000
     */
    lower?: number;
    /**
     * The samplerate to be used.
     * @since 3.0.0
     * @default 0
     */
    samplerate?: number;
    /**
     * The step count to be used.
     * @since 3.0.0
     * @default 0.000000
     */
    'step-count'?: number;
    /**
     * The upper to be used.
     * @since 3.0.0
     * @default 0.000000
     */
    upper?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AgsLadspaConversionConstructOnly = AgsConversionConstructOnly;

export interface AgsLadspaManagerProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AgsLadspaManagerConstructOnly = GObjectConstructOnly;

export interface AgsLadspaPluginProps extends AgsBasePluginProps {
    /**
     * The assigned unique-id.
     * @since 3.0.0
     * @default 0
     */
    'unique-id'?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AgsLadspaPluginConstructOnly = AgsBasePluginConstructOnly;

export interface AgsLinkChannelProps extends AgsTaskProps {
    /**
     * The assigned #AgsChannel
     * @since 3.0.0
     */
    channel?: AgsAudio.Channel;
    /**
     * The assigned #GError-struct
     * @since 3.0.0
     */
    error?: never;
    /**
     * The assigned #AgsChannel link
     * @since 3.0.0
     */
    link?: AgsAudio.Channel;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AgsLinkChannelConstructOnly = AgsTaskConstructOnly;

export interface AgsLv2ConversionProps extends AgsConversionProps {
    /**
     * The lower to be used.
     * @since 3.0.0
     * @default 0.000010
     */
    lower?: number;
    /**
     * The step count to be used.
     * @since 3.0.0
     * @default 1025.000000
     */
    'step-count'?: number;
    /**
     * The upper to be used.
     * @since 3.0.0
     * @default 1.000000
     */
    upper?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AgsLv2ConversionConstructOnly = AgsConversionConstructOnly;

export interface AgsLv2EventManagerProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AgsLv2EventManagerConstructOnly = GObjectConstructOnly;

export interface AgsLv2LogManagerProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AgsLv2LogManagerConstructOnly = GObjectConstructOnly;

export interface AgsLv2ManagerProps extends GObjectProps {
    /**
     * The assigned locale.
     * @since 3.0.0
     * @default NULL
     */
    locale?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AgsLv2ManagerConstructOnly = GObjectConstructOnly;

export interface AgsLv2OptionManagerProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AgsLv2OptionManagerConstructOnly = GObjectConstructOnly;

export interface AgsLv2PluginProps extends AgsBasePluginProps {
    /**
     * The assigned doap name.
     * @since 3.0.0
     * @default NULL
     */
    'doap-name'?: string;
    /**
     * The assigned foaf homepage.
     * @since 3.0.0
     * @default NULL
     */
    'foaf-homepage'?: string;
    /**
     * The assigned foaf mbox.
     * @since 3.0.0
     * @default NULL
     */
    'foaf-mbox'?: string;
    /**
     * The assigned foaf name.
     * @since 3.0.0
     * @default NULL
     */
    'foaf-name'?: string;
    /**
     * The assigned manifest.
     * @since 3.0.0
     */
    manifest?: Ags.Turtle;
    /**
     * The assigned pname.
     * @since 3.0.0
     * @default NULL
     */
    pname?: string;
    /**
     * The assigned preset.
     * @since 3.0.0
     */
    preset?: AgsAudio.Lv2Preset[];
    /**
     * The assigned turtle.
     * @since 3.0.0
     */
    turtle?: Ags.Turtle;
    /**
     * The assigned ui-uri.
     * @since 3.0.0
     * @default NULL
     */
    'ui-uri'?: string;
    /**
     * The assigned uri.
     * @since 3.0.0
     * @default NULL
     */
    uri?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AgsLv2PluginConstructOnly = AgsBasePluginConstructOnly;

export interface AgsLv2PresetProps extends GObjectProps {
    /**
     * The assigned applies to.
     * @since 3.0.0
     * @default NULL
     */
    'applies-to'?: string;
    /**
     * The assigned bank.
     * @since 3.0.0
     * @default NULL
     */
    bank?: string;
    /**
     * The assigned lv2 plugin.
     * @since 3.0.0
     */
    'lv2-plugin'?: AgsAudio.Lv2Plugin;
    /**
     * The assigned manifest.
     * @since 3.0.0
     */
    manifest?: Ags.Turtle;
    /**
     * The preset label.
     * @since 3.0.0
     * @default NULL
     */
    'preset-label'?: string;
    /**
     * The assigned turtle.
     * @since 3.0.0
     */
    turtle?: Ags.Turtle;
    /**
     * The assigned uri.
     * @since 3.0.0
     * @default NULL
     */
    uri?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AgsLv2PresetConstructOnly = GObjectConstructOnly;

export interface AgsLv2PresetManagerProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AgsLv2PresetManagerConstructOnly = GObjectConstructOnly;

export interface AgsLv2TurtleParserProps extends GObjectProps {
    /**
     * The assigned #GList-struct containing #AgsLv2Plugin.
     * @since 3.0.0
     */
    plugin?: AgsAudio.Lv2Plugin[];
    /**
     * The assigned #GList-struct containing #AgsLv2Preset.
     * @since 3.0.0
     */
    preset?: AgsAudio.Lv2Preset[];
    /**
     * The assigned #GList-struct containing #AgsTurtle.
     * @since 3.0.0
     */
    turtle?: Ags.Turtle[];
    'ui-plugin'?: never;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AgsLv2TurtleParserConstructOnly = GObjectConstructOnly;

export interface AgsLv2TurtleScannerProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AgsLv2TurtleScannerConstructOnly = GObjectConstructOnly;

export interface AgsLv2UriMapManagerProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AgsLv2UriMapManagerConstructOnly = GObjectConstructOnly;

export interface AgsLv2UridManagerProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AgsLv2UridManagerConstructOnly = GObjectConstructOnly;

export interface AgsLv2WorkerProps extends GObjectProps, AgsConnectableProps {
    /**
     * The assigned #LV2_Handle-struct
     * @since 3.0.0
     */
    handle?: never;
    /**
     * The assigned #GList-struct containing #AgsLv2WorkerResponseData-struct
     * @since 3.0.0
     */
    'response-data'?: never;
    /**
     * The assigned work data
     * @since 3.0.0
     */
    'work-data'?: never;
    /**
     * The work size.
     * @since 3.0.0
     * @default 0
     */
    'work-size'?: number;
    /**
     * The assigned worker-thread.
     * @since 3.0.0
     */
    'worker-thread'?: Ags.WorkerThread;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AgsLv2WorkerConstructOnly = GObjectConstructOnly | AgsConnectableConstructOnly;

export interface AgsLv2WorkerManagerProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AgsLv2WorkerManagerConstructOnly = GObjectConstructOnly;

export interface AgsLv2uiManagerProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AgsLv2uiManagerConstructOnly = GObjectConstructOnly;

export interface AgsLv2uiPluginProps extends AgsBasePluginProps {
    /**
     * The assigned GUI turtle.
     * @since 3.0.0
     */
    'gui-turtle'?: Ags.Turtle;
    /**
     * The assigned GUI URI.
     * @since 3.0.0
     * @default NULL
     */
    'gui-uri'?: string;
    /**
     * The assigned LV2 plugin.
     * @since 3.0.0
     */
    'lv2-plugin'?: AgsAudio.Lv2Plugin;
    /**
     * The assigned manifest.
     * @since 3.0.0
     */
    manifest?: Ags.Turtle;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AgsLv2uiPluginConstructOnly = AgsBasePluginConstructOnly;

export interface AgsMarkerProps extends GObjectProps {
    /**
     * The marker's data.
     * @since 6.14.0
     * @default NULL
     */
    'marker-data'?: string;
    /**
     * The marker's name.
     * @since 5.1.0
     * @default NULL
     */
    'marker-name'?: string;
    /**
     * Marker offset x.
     * @since 5.1.0
     * @default 0
     */
    x?: number;
    /**
     * Marker value y.
     * @since 5.1.0
     * @default 0.000000
     */
    y?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AgsMarkerConstructOnly = GObjectConstructOnly;

export interface AgsMidiProps extends GObjectProps {
    /**
     * The assigned #AgsAudio
     * @since 3.0.0
     */
    audio?: AgsAudio.Audio;
    /**
     * The midi's audio-channel.
     * @since 3.0.0
     * @default 0
     */
    'audio-channel'?: number;
    /**
     * The midi's timestamp.
     * @since 3.0.0
     */
    timestamp?: Ags.Timestamp;
    /**
     * The assigned #AgsTrack
     * @since 3.0.0
     */
    track?: AgsAudio.Track[];
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AgsMidiConstructOnly = GObjectConstructOnly;

export interface AgsMidiBuilderProps extends GObjectProps {
    /**
     * The file to parse data from.
     * @since 3.0.0
     */
    file?: never;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AgsMidiBuilderConstructOnly = GObjectConstructOnly;

export interface AgsMidiFileProps extends GObjectProps {
    /**
     * The assigned filename to perform input/output on.
     * @since 3.0.0
     * @default NULL
     */
    filename?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AgsMidiFileConstructOnly = GObjectConstructOnly;

export interface AgsMidiParserProps extends GObjectProps {
    /**
     * The file to parse data from.
     * @since 3.0.0
     */
    file?: never;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AgsMidiParserConstructOnly = GObjectConstructOnly;

export interface AgsMoveNoteProps extends AgsTaskProps {
    /**
     * Move notation by absolute position.
     * @since 3.0.0
     * @default FALSE
     */
    absolute?: boolean;
    /**
     * The assigned #AgsAudio
     * @since 3.0.0
     */
    audio?: AgsAudio.Audio;
    /**
     * Move notation from x offset.
     * @since 3.0.0
     * @default 0
     */
    'first-x'?: number;
    /**
     * Move notation with x padding.
     * @since 3.0.0
     * @default 0
     */
    'first-y'?: number;
    /**
     * Move notation by move-x amount.
     * @since 3.0.0
     * @default 0
     */
    'move-x'?: number;
    /**
     * Move notation by move-y amount.
     * @since 3.0.0
     * @default 0
     */
    'move-y'?: number;
    /**
     * The assigned #AgsNotation
     * @since 3.0.0
     */
    notation?: AgsAudio.Notation;
    /**
     * Move notation by relative position.
     * @since 3.0.0
     * @default FALSE
     */
    relative?: boolean;
    /**
     * The assigned #AgsNote
     * @since 3.0.0
     */
    selection?: AgsAudio.Note[];
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AgsMoveNoteConstructOnly = AgsTaskConstructOnly;

export interface AgsNotationProps extends GObjectProps {
    /**
     * The assigned #AgsAudio
     * @since 3.0.0
     */
    audio?: AgsAudio.Audio;
    /**
     * The effect's audio-channel.
     * @since 3.0.0
     * @default 0
     */
    'audio-channel'?: number;
    /**
     * The assigned #AgsNote
     * @since 3.0.0
     */
    note?: AgsAudio.Note[];
    /**
     * The notation's timestamp.
     * @since 3.0.0
     */
    timestamp?: Ags.Timestamp;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AgsNotationConstructOnly = GObjectConstructOnly;

export interface AgsNoteProps extends GObjectProps {
    /**
     * Envelope attack.
     * @since 3.0.0
     */
    attack?: Ags.Complex;
    /**
     * Envelope decay.
     * @since 3.0.0
     */
    decay?: Ags.Complex;
    /**
     * Feed note x as 256th.
     * @since 6.1.0
     * @default FALSE
     */
    'feed-x-256th'?: boolean;
    /**
     * The note's frequency.
     * @since 3.0.0
     * @default 0.000000
     */
    frequency?: number;
    /**
     * The note's name.
     * @since 3.0.0
     * @default NULL
     */
    'note-name'?: string;
    /**
     * Envelope ratio.
     * @since 3.0.0
     */
    ratio?: Ags.Complex;
    /**
     * Envelope release.
     * @since 3.0.0
     */
    release?: Ags.Complex;
    /**
     * Note realtime attack.
     * @since 3.0.0
     * @default 0
     */
    'rt-attack'?: number;
    /**
     * Note realtime offset.
     * @since 3.0.0
     * @default 0
     */
    'rt-offset'?: bigint | number;
    /**
     * The stream's attack.
     * @since 3.0.0
     * @default 0.000000
     */
    'stream-attack'?: number;
    /**
     * The stream's delay.
     * @since 3.0.0
     * @default 0.000000
     */
    'stream-delay'?: number;
    /**
     * The stream's frame count.
     * @since 3.0.0
     * @default 0
     */
    'stream-frame-count'?: bigint | number;
    /**
     * Envelope sustain.
     * @since 3.0.0
     */
    sustain?: Ags.Complex;
    /**
     * Note offset x0.
     * @since 3.0.0
     * @default 0
     */
    x0?: number;
    /**
     * Note offset x0 as 256th.
     * @since 6.1.0
     * @default 0
     */
    'x0-256th'?: number;
    /**
     * Note offset x1.
     * @since 3.0.0
     * @default 0
     */
    x1?: number;
    /**
     * Note offset x1 as 256th.
     * @since 6.1.0
     * @default 0
     */
    'x1-256th'?: number;
    /**
     * Note offset y.
     * @since 3.0.0
     * @default 0
     */
    y?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AgsNoteConstructOnly = GObjectConstructOnly;

export interface AgsOpenFileProps extends AgsTaskProps {
    /**
     * The assigned #AgsAudio
     * @since 3.0.0
     */
    audio?: AgsAudio.Audio;
    /**
     * As open files create #AgsChannel.
     * @since 3.0.0
     * @default FALSE
     */
    'create-channels'?: boolean;
    /**
     * The assigned #GSList-struct providing filename as string
     * @since 3.0.0
     */
    filename?: string[];
    /**
     * As open files overwrite #AgsChannel.
     * @since 3.0.0
     * @default FALSE
     */
    'overwrite-channels'?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AgsOpenFileConstructOnly = AgsTaskConstructOnly;

export interface AgsOpenSF2InstrumentProps extends AgsTaskProps {
    /**
     * The assigned #AgsAudio
     * @since 3.0.0
     */
    audio?: AgsAudio.Audio;
    /**
     * The assigned filename.
     * @since 3.0.0
     * @default NULL
     */
    filename?: string;
    /**
     * The assigned instrument.
     * @since 3.0.0
     * @default NULL
     */
    instrument?: string;
    /**
     * The assigned #AgsIpatch
     * @since 3.0.0
     */
    ipatch?: AgsAudio.Ipatch;
    /**
     * The assigned preset.
     * @since 3.0.0
     * @default NULL
     */
    preset?: string;
    /**
     * The assigned start-pad.
     * @since 3.0.0
     * @default 0
     */
    'start-pad'?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AgsOpenSF2InstrumentConstructOnly = AgsTaskConstructOnly;

export interface AgsOpenSF2SampleProps extends AgsTaskProps {
    /**
     * The nth audio channel.
     * @since 3.0.0
     * @default 0
     */
    'audio-channel'?: number;
    /**
     * The assigned #AgsChannel
     * @since 3.0.0
     */
    channel?: AgsAudio.Channel;
    /**
     * The assigned filename.
     * @since 3.0.0
     * @default NULL
     */
    filename?: string;
    /**
     * The assigned instrument.
     * @since 3.0.0
     * @default NULL
     */
    instrument?: string;
    /**
     * The assigned #AgsIpatchSample
     * @since 3.0.0
     */
    'ipatch-sample'?: AgsAudio.IpatchSample;
    /**
     * The assigned preset.
     * @since 3.0.0
     * @default NULL
     */
    preset?: string;
    /**
     * The assigned sample.
     * @since 3.0.0
     * @default NULL
     */
    sample?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AgsOpenSF2SampleConstructOnly = AgsTaskConstructOnly;

export interface AgsOpenSFZFileProps extends AgsTaskProps {
    /**
     * The assigned #AgsAudio
     * @since 3.4.0
     */
    audio?: AgsAudio.Audio;
    /**
     * The assigned filename.
     * @since 3.4.0
     * @default NULL
     */
    filename?: string;
    /**
     * The assigned #AgsSFZFile
     * @since 3.4.0
     */
    'sfz-file'?: AgsAudio.SFZFile;
    /**
     * The assigned start-pad.
     * @since 3.4.0
     * @default 0
     */
    'start-pad'?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AgsOpenSFZFileConstructOnly = AgsTaskConstructOnly;

export interface AgsOpenSingleFileProps extends AgsTaskProps {
    /**
     * The audio channel.
     * @since 3.0.0
     * @default 0
     */
    'audio-channel'?: number;
    /**
     * The assigned #AgsChannel
     * @since 3.0.0
     */
    channel?: AgsAudio.Channel;
    /**
     * The assigned filename.
     * @since 3.0.0
     * @default NULL
     */
    filename?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AgsOpenSingleFileConstructOnly = AgsTaskConstructOnly;

export interface AgsOpenWaveProps extends AgsTaskProps {
    /**
     * The assigned #AgsAudio
     * @since 3.0.0
     */
    audio?: AgsAudio.Audio;
    /**
     * The assigned #AgsAudioFile
     * @since 3.0.0
     */
    'audio-file'?: AgsAudio.AudioFile;
    /**
     * The assigned filename.
     * @since 3.0.0
     * @default NULL
     */
    filename?: string;
    /**
     * The assigned start-pad.
     * @since 3.0.0
     * @default 0
     */
    'start-pad'?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AgsOpenWaveConstructOnly = AgsTaskConstructOnly;

export interface AgsOscActionControllerProps extends AgsOscControllerProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AgsOscActionControllerConstructOnly = AgsOscControllerConstructOnly;

export interface AgsOscBuilderProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AgsOscBuilderConstructOnly = GObjectConstructOnly;

export interface AgsOscClientProps extends GObjectProps {
    /**
     * The domain to lookup server.
     * @since 3.0.0
     * @default NULL
     */
    domain?: string;
    /**
     * The IPv4 address as string of the server.
     * @since 3.0.0
     * @default NULL
     */
    ip4?: string;
    /**
     * The IPv6 address as string of the server.
     * @since 3.0.0
     * @default NULL
     */
    ip6?: string;
    /**
     * The server port to connect.
     * @since 3.0.0
     * @default 9000
     */
    'server-port'?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AgsOscClientConstructOnly = GObjectConstructOnly;

export interface AgsOscConfigControllerProps extends AgsOscControllerProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AgsOscConfigControllerConstructOnly = AgsOscControllerConstructOnly;

export interface AgsOscConnectionProps extends GObjectProps {
    /**
     * The IPv4 address as string of the server connection.
     * @since 3.0.0
     * @default NULL
     */
    ip4?: string;
    /**
     * The IPv6 address as string of the server connection.
     * @since 3.0.0
     * @default NULL
     */
    ip6?: string;
    /**
     * The assigned #AgsOscServer.
     * @since 3.0.0
     */
    'osc-server'?: AgsAudio.OscServer;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AgsOscConnectionConstructOnly = GObjectConstructOnly;

export interface AgsOscControllerProps extends GObjectProps {
    /**
     * The context path provided.
     * @since 3.0.0
     * @default NULL
     */
    'context-path'?: string;
    /**
     * The assigned #AgsOscServer
     * @since 3.0.0
     */
    'osc-server'?: AgsAudio.OscServer;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AgsOscControllerConstructOnly = GObjectConstructOnly;

export interface AgsOscExportControllerProps extends AgsOscControllerProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AgsOscExportControllerConstructOnly = AgsOscControllerConstructOnly;

export interface AgsOscFrontControllerProps extends AgsOscControllerProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AgsOscFrontControllerConstructOnly = AgsOscControllerConstructOnly;

export interface AgsOscInfoControllerProps extends AgsOscControllerProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AgsOscInfoControllerConstructOnly = AgsOscControllerConstructOnly;

export interface AgsOscMessageProps extends GObjectProps {
    /**
     * The immediately switch.
     * @since 3.0.0
     * @default FALSE
     */
    immediately?: boolean;
    /**
     * The message data.
     * @since 3.0.0
     */
    message?: never;
    /**
     * The size of message in bytes.
     * @since 3.0.0
     * @default 0
     */
    'message-size'?: number;
    /**
     * The assigned #AgsOscConnection.
     * @since 3.0.0
     */
    'osc-connection'?: AgsAudio.OscConnection;
    /**
     * The time value's fraction.
     * @since 3.0.0
     * @default 0
     */
    'tv-fraction'?: number;
    /**
     * The time value in seconds.
     * @since 3.0.0
     * @default 0
     */
    'tv-sec'?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AgsOscMessageConstructOnly = GObjectConstructOnly;

export interface AgsOscMeterControllerProps extends AgsOscControllerProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AgsOscMeterControllerConstructOnly = AgsOscControllerConstructOnly;

export interface AgsOscNodeControllerProps extends AgsOscControllerProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AgsOscNodeControllerConstructOnly = AgsOscControllerConstructOnly;

export interface AgsOscParserProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AgsOscParserConstructOnly = GObjectConstructOnly;

export interface AgsOscRenewControllerProps extends AgsOscControllerProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AgsOscRenewControllerConstructOnly = AgsOscControllerConstructOnly;

export interface AgsOscResponseProps extends GObjectProps {
    /**
     * The error message.
     * @since 3.0.0
     * @default NULL
     */
    'error-message'?: string;
    /**
     * The assigned #AgsOscMessage
     * @since 3.0.0
     */
    'osc-message'?: AgsAudio.OscMessage;
    /**
     * The response packet.
     * @since 3.0.0
     */
    packet?: never;
    /**
     * The response packet's size.
     * @since 3.0.0
     * @default 0
     */
    'packet-size'?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AgsOscResponseConstructOnly = GObjectConstructOnly;

export interface AgsOscServerProps extends GObjectProps {
    /**
     * The assigned #AgsOscConnection providing default settings.
     * @since 3.0.0
     */
    connection?: AgsAudio.OscConnection[];
    /**
     * The assigned #AgsOscController providing default settings.
     * @since 3.0.0
     */
    controller?: AgsAudio.OscController[];
    /**
     * The domain to use.
     * @since 3.0.0
     * @default NULL
     */
    domain?: string;
    /**
     * The assigned #AgsOscFrontController.
     * @since 3.0.0
     */
    'front-controller'?: AgsAudio.OscFrontController;
    /**
     * The IPv4 address as string of the server.
     * @since 3.0.0
     * @default NULL
     */
    ip4?: string;
    /**
     * The IPv6 address as string of the server.
     * @since 3.0.0
     * @default NULL
     */
    ip6?: string;
    /**
     * The server port to use.
     * @since 3.0.0
     * @default 9000
     */
    'server-port'?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AgsOscServerConstructOnly = GObjectConstructOnly;

export interface AgsOscStatusControllerProps extends AgsOscControllerProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AgsOscStatusControllerConstructOnly = AgsOscControllerConstructOnly;

export interface AgsOscWebsocketConnectionProps extends AgsOscConnectionProps {
    /**
     * The current login.
     * @since 3.0.0
     * @default NULL
     */
    login?: string;
    /**
     * The resource ID from a redirect.
     * @since 3.0.0
     * @default NULL
     */
    'resource-id'?: string;
    /**
     * The assigned #AgsSecurityContext.
     * @since 3.0.0
     */
    'security-context'?: Ags.SecurityContext;
    /**
     * The current security token.
     * @since 3.0.0
     * @default NULL
     */
    'security-token'?: string;
    /**
     * The assigned #SoupMessage.
     * @since 3.0.0
     */
    'websocket-connection'?: Soup.WebsocketConnection;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AgsOscWebsocketConnectionConstructOnly = AgsOscConnectionConstructOnly;

export interface AgsOscXmlrpcControllerProps extends AgsControllerProps {
    /**
     * The assigned #AgsOscXmlrpcServer
     * @since 3.0.0
     */
    'osc-xmlrpc-server'?: AgsAudio.OscXmlrpcServer;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AgsOscXmlrpcControllerConstructOnly = AgsControllerConstructOnly;

export interface AgsOscXmlrpcMessageProps extends AgsOscMessageProps {
    /**
     * The current query.
     * @since 3.0.0
     */
    query?: never;
    /**
     * The assigned #SoupMessage.
     * @since 4.0.0
     */
    'server-msg'?: Soup.ServerMessage;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AgsOscXmlrpcMessageConstructOnly = AgsOscMessageConstructOnly;

export interface AgsOscXmlrpcServerProps extends AgsOscServerProps {
    /**
     * The assigned #AgsOscXmlrpcController.
     * @since 3.0.0
     */
    'osc-xmlrpc-controller'?: Ags.Controller;
    /**
     * The assigned #AgsServer.
     * @since 3.0.0
     */
    'xmlrpc-server'?: Ags.Server;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AgsOscXmlrpcServerConstructOnly = AgsOscServerConstructOnly;

export interface AgsOssDevinProps extends GObjectProps, AgsConnectableProps {
    /**
     * Beats per minute
     * @since 3.13.2
     * @default 120.000000
     */
    bpm?: number;
    /**
     * The buffer size
     * @since 3.13.2
     * @default 2048
     */
    'buffer-size'?: number;
    /**
     * tact
     * @since 3.13.2
     * @default 1.000000
     * @deprecated use AgsFrameClock instead
     */
    'delay-factor'?: number;
    /**
     * The soundcard indentifier
     * @since 3.13.2
     * @default /dev/dsp
     */
    device?: string;
    /**
     * The dsp channel count
     * @since 3.13.2
     * @default 2
     */
    'dsp-channels'?: number;
    /**
     * The precision of the buffer
     * @since 3.13.2
     * @default 16
     */
    format?: number;
    /**
     * The pcm channel count
     * @since 3.13.2
     * @default 2
     */
    'pcm-channels'?: number;
    /**
     * The samplerate
     * @since 3.13.2
     * @default 44100
     */
    samplerate?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AgsOssDevinConstructOnly = GObjectConstructOnly | AgsConnectableConstructOnly;

export interface AgsOssDevoutProps extends GObjectProps, AgsConnectableProps {
    /**
     * Beats per minute
     * @since 3.13.2
     * @default 120.000000
     */
    bpm?: number;
    /**
     * The buffer size
     * @since 3.13.2
     * @default 2048
     */
    'buffer-size'?: number;
    /**
     * tact
     * @since 3.13.2
     * @default 1.000000
     * @deprecated use AgsFrameClock instead
     */
    'delay-factor'?: number;
    /**
     * The OSS soundcard indentifier
     * @since 3.13.2
     * @default /dev/dsp
     */
    device?: string;
    /**
     * The dsp channel count
     * @since 3.13.2
     * @default 2
     */
    'dsp-channels'?: number;
    /**
     * The precision of the buffer
     * @since 3.13.2
     * @default 16
     */
    format?: number;
    /**
     * The pcm channel count
     * @since 3.13.2
     * @default 2
     */
    'pcm-channels'?: number;
    /**
     * The samplerate
     * @since 3.13.2
     * @default 44100
     */
    samplerate?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AgsOssDevoutConstructOnly = GObjectConstructOnly | AgsConnectableConstructOnly;

export interface AgsOssMidiinProps extends GObjectProps, AgsConnectableProps {
    /**
     * Beats per minute
     * @since 3.13.2
     * @default 120.000000
     */
    bpm?: number;
    /**
     * tact
     * @since 3.13.2
     * @default 1.000000
     */
    'delay-factor'?: number;
    /**
     * The OSS sequencer indentifier
     * @since 3.13.2
     * @default /dev/midi00
     */
    device?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AgsOssMidiinConstructOnly = GObjectConstructOnly | AgsConnectableConstructOnly;

export interface AgsOutputProps extends AgsChannelProps, AgsConnectableProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AgsOutputConstructOnly = AgsChannelConstructOnly | AgsConnectableConstructOnly;

export interface AgsPatternProps extends GObjectProps, AgsConnectableProps {
    /**
     * The pattern's channel.
     * @since 3.3.0
     */
    channel?: AgsAudio.Channel;
    /**
     * Selected bank 0.
     * @since 3.0.0
     * @default 0
     */
    'first-index'?: number;
    /**
     * Position of pattern.
     * @since 3.0.0
     * @default 0
     */
    offset?: number;
    /**
     * The pattern's port.
     * @since 3.0.0
     */
    port?: AgsAudio.Port;
    /**
     * Selected bank 1.
     * @since 3.0.0
     * @default 0
     */
    'second-index'?: number;
    /**
     * The pattern's timestamp.
     * @since 3.0.0
     */
    timestamp?: Ags.Timestamp;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AgsPatternConstructOnly = GObjectConstructOnly | AgsConnectableConstructOnly;

export interface AgsPlaybackProps extends GObjectProps {
    /**
     * The assigned audio channel.
     * @since 3.0.0
     * @default 0
     */
    'audio-channel'?: number;
    /**
     * The assigned channel.
     * @since 3.0.0
     */
    channel?: AgsAudio.Channel;
    /**
     * The assigned note.
     * @since 3.0.0
     */
    'play-note'?: AgsAudio.Note;
    /**
     * The parent playback domain.
     * @since 3.0.0
     */
    'playback-domain'?: AgsAudio.PlaybackDomain;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AgsPlaybackConstructOnly = GObjectConstructOnly;

export interface AgsPlaybackDomainProps extends GObjectProps {
    /**
     * The assigned #AgsAudio.
     * @since 3.0.0
     */
    audio?: GObject.Object;
    /**
     * The assigned input playback.
     * @since 3.0.0
     */
    'input-playback'?: AgsAudio.Playback[];
    /**
     * The assigned output playback.
     * @since 3.0.0
     */
    'output-playback'?: AgsAudio.Playback[];
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AgsPlaybackDomainConstructOnly = GObjectConstructOnly;

export interface AgsPluginPortProps extends GObjectProps {
    /**
     * The default value.
     * @since 3.0.0
     */
    'default-value'?: never;
    /**
     * The lower value.
     * @since 3.0.0
     */
    'lower-value'?: never;
    /**
     * The assigned port-index.
     * @since 3.0.0
     * @default 0
     */
    'port-index'?: number;
    /**
     * The port's name.
     * @since 3.0.0
     * @default NULL
     */
    'port-name'?: string;
    /**
     * The port's symbol.
     * @since 3.0.0
     * @default NULL
     */
    'port-symbol'?: string;
    /**
     * The number of scale steps.
     * @since 3.0.0
     * @default 0
     */
    'scale-steps'?: number;
    /**
     * The upper value.
     * @since 3.0.0
     */
    'upper-value'?: never;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AgsPluginPortConstructOnly = GObjectConstructOnly;

export interface AgsPortProps extends GObjectProps, AgsConnectableProps {
    /**
     * The port's automation.
     * @since 3.0.0
     */
    automation?: AgsAudio.Automation[];
    /**
     * The port's channel type.
     * @since 5.4.0
     */
    'channel-type'?: GObject.GType;
    /**
     * The assigned plugin control port.
     * @since 3.0.0
     * @default NULL
     */
    'control-port'?: string;
    /**
     * The port's conversion object.
     * @since 3.0.0
     */
    conversion?: Ags.Conversion;
    /**
     * The port's line.
     * @since 5.4.0
     * @default 0
     */
    line?: number;
    /**
     * The assigned plugin.
     * @since 3.0.0
     * @default NULL
     */
    'plugin-name'?: string;
    /**
     * The plugin-port.
     * @since 3.0.0
     */
    'plugin-port'?: AgsAudio.PluginPort;
    /**
     * Specify port data as pointer.
     * @since 3.0.0
     * @default FALSE
     */
    'port-value-is-pointer'?: boolean;
    /**
     * The port's data array length.
     * @since 3.0.0
     * @default 1
     */
    'port-value-length'?: number;
    /**
     * The port's data type size.
     * @since 3.0.0
     * @default 8
     */
    'port-value-size'?: number;
    /**
     * The port's data type.
     * @since 3.0.0
     */
    'port-value-type'?: GObject.GType;
    /**
     * The assigned plugin identifier.
     * @since 3.0.0
     * @default NULL
     */
    specifier?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AgsPortConstructOnly = GObjectConstructOnly | AgsConnectableConstructOnly;

export interface AgsPresetProps extends GObjectProps {
    /**
     * The #AgsAudio belonging to.
     * @since 3.0.0
     */
    audio?: GObject.Object;
    /**
     * The end audio channel to apply.
     * @since 3.0.0
     * @default 0
     */
    'audio-channel-end'?: number;
    /**
     * The start audio channel to apply.
     * @since 3.0.0
     * @default 0
     */
    'audio-channel-start'?: number;
    /**
     * The end pad to apply.
     * @since 3.0.0
     * @default 0
     */
    'pad-end'?: number;
    /**
     * The start pad to apply.
     * @since 3.0.0
     * @default 0
     */
    'pad-start'?: number;
    /**
     * The preset name.
     * @since 3.0.0
     * @default NULL
     */
    'preset-name'?: string;
    /**
     * The preset's scope.
     * @since 3.0.0
     * @default NULL
     */
    scope?: string;
    /**
     * The end x to apply.
     * @since 3.0.0
     * @default 0
     */
    'x-end'?: number;
    /**
     * The start x to apply.
     * @since 3.0.0
     * @default 0
     */
    'x-start'?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AgsPresetConstructOnly = GObjectConstructOnly;

export interface AgsProgramProps extends GObjectProps {
    /**
     * The effect's assigned control key.
     * @since 5.4.0
     */
    'control-key'?: never;
    /**
     * The program's control-name.
     * @since 5.1.0
     * @default NULL
     */
    'control-name'?: string;
    /**
     * The assigned #AgsMarker
     * @since 5.1.0
     */
    marker?: AgsAudio.Marker[];
    /**
     * The program's timestamp.
     * @since 5.1.0
     */
    timestamp?: Ags.Timestamp;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AgsProgramConstructOnly = GObjectConstructOnly;

export interface AgsProgramControlNameKeyManagerProps extends GObjectProps {
    /**
     * The #GHashTable-struct containing gpointer of key.
     * @since 5.4.0
     */
    'control-name-key'?: never;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AgsProgramControlNameKeyManagerConstructOnly = GObjectConstructOnly;

export interface AgsPulseClientProps extends GObjectProps, AgsConnectableProps {
    /**
     * The pulseaudio client name.
     * @since 3.0.0
     * @default NULL
     */
    'client-name'?: string;
    /**
     * The assigned devices.
     * @since 3.0.0
     */
    device?: GObject.Object[];
    /**
     * The assigned ports.
     * @since 3.0.0
     */
    port?: AgsAudio.PulsePort[];
    /**
     * The assigned #AgsPulseServer.
     * @since 3.0.0
     */
    'pulse-server'?: AgsAudio.PulseServer;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AgsPulseClientConstructOnly = GObjectConstructOnly | AgsConnectableConstructOnly;

export interface AgsPulseDevinProps extends GObjectProps, AgsConnectableProps {
    /**
     * Beats per minute
     * @since 3.0.0
     * @default 120.000000
     */
    bpm?: number;
    /**
     * The buffer size
     * @since 3.0.0
     * @default 2048
     */
    'buffer-size'?: number;
    /**
     * tact
     * @since 3.0.0
     * @default 1.000000
     * @deprecated use AgsFrameClock instead
     */
    'delay-factor'?: number;
    /**
     * The pulse soundcard indentifier
     * @since 3.0.0
     * @default ags-pulse-devin-0
     */
    device?: string;
    /**
     * The dsp channel count
     * @since 3.0.0
     * @default 2
     */
    'dsp-channels'?: number;
    /**
     * The precision of the buffer
     * @since 3.0.0
     * @default 16
     */
    format?: number;
    /**
     * The pcm channel count
     * @since 3.0.0
     * @default 2
     */
    'pcm-channels'?: number;
    /**
     * The assigned #AgsPulseClient
     * @since 3.0.0
     */
    'pulse-client'?: AgsAudio.PulseClient;
    /**
     * The assigned #AgsPulsePort
     * @since 3.0.0
     */
    'pulse-port'?: never;
    /**
     * The samplerate
     * @since 3.0.0
     * @default 44100
     */
    samplerate?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AgsPulseDevinConstructOnly = GObjectConstructOnly | AgsConnectableConstructOnly;

export interface AgsPulseDevoutProps extends GObjectProps, AgsConnectableProps {
    /**
     * Beats per minute
     * @since 3.0.0
     * @default 120.000000
     */
    bpm?: number;
    /**
     * The buffer size
     * @since 3.0.0
     * @default 2048
     */
    'buffer-size'?: number;
    /**
     * tact
     * @since 3.0.0
     * @default 1.000000
     * @deprecated use AgsFrameClock instead
     */
    'delay-factor'?: number;
    /**
     * The pulse soundcard indentifier
     * @since 3.0.0
     * @default ags-pulse-devout-0
     */
    device?: string;
    /**
     * The dsp channel count
     * @since 3.0.0
     * @default 2
     */
    'dsp-channels'?: number;
    /**
     * The precision of the buffer
     * @since 3.0.0
     * @default 16
     */
    format?: number;
    /**
     * The pcm channel count
     * @since 3.0.0
     * @default 2
     */
    'pcm-channels'?: number;
    /**
     * The assigned #AgsPulseClient
     * @since 3.0.0
     */
    'pulse-client'?: AgsAudio.PulseClient;
    /**
     * The assigned #AgsPulsePort
     * @since 3.0.0
     */
    'pulse-port'?: never;
    /**
     * The samplerate
     * @since 3.0.0
     * @default 44100
     */
    samplerate?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AgsPulseDevoutConstructOnly = GObjectConstructOnly | AgsConnectableConstructOnly;

export interface AgsPulsePortProps extends GObjectProps, AgsConnectableProps {
    /**
     * The pulse soundcard indentifier
     * @since 3.0.0
     * @default NULL
     */
    'port-name'?: string;
    /**
     * The assigned #AgsPulseClient.
     * @since 3.0.0
     */
    'pulse-client'?: AgsAudio.PulseClient;
    /**
     * The assigned #AgsPulseDevout.
     * @since 3.0.0
     */
    'pulse-devin'?: AgsAudio.PulseDevin;
    /**
     * The assigned #AgsPulseDevout.
     * @since 3.0.0
     */
    'pulse-devout'?: AgsAudio.PulseDevout;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AgsPulsePortConstructOnly = GObjectConstructOnly | AgsConnectableConstructOnly;

export interface AgsPulseServerProps extends GObjectProps, AgsConnectableProps {
    /**
     * The default pulse client.
     * @since 3.0.0
     */
    'default-pulse-client'?: AgsAudio.PulseClient;
    /**
     * The default soundcard.
     * @since 3.0.0
     */
    'default-soundcard'?: GObject.Object;
    /**
     * The pulse client list.
     * @since 3.0.0
     */
    'pulse-client'?: AgsAudio.PulseClient[];
    /**
     * The assigned URL.
     * @since 3.0.0
     * @default NULL
     */
    url?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AgsPulseServerConstructOnly = GObjectConstructOnly | AgsConnectableConstructOnly;

export interface AgsRecallProps extends GObjectProps, AgsConnectableProps {
    /**
     * The nth audio channel.
     * @since 3.0.0
     * @default 0
     */
    'audio-channel'?: number;
    /**
     * The #AgsPort doing automation.
     * @since 3.0.0
     */
    'automation-port'?: AgsAudio.Port[];
    /**
     * The buffer size.
     * @since 3.0.0
     * @default 0
     */
    'buffer-size'?: number;
    /**
     * The child #AgsRecall.
     * @since 3.0.0
     */
    child?: AgsAudio.Recall[];
    /**
     * The type of child #AgsRecall.
     * @since 3.0.0
     */
    'child-type'?: GObject.GType;
    /**
     * The plugin's effect.
     * @since 3.0.0
     * @default NULL
     */
    effect?: string;
    /**
     * The effect's index.
     * @since 3.0.0
     * @default 0
     */
    'effect-index'?: number;
    /**
     * The plugin's filename.
     * @since 3.0.0
     * @default NULL
     */
    filename?: string;
    /**
     * The format.
     * @since 3.0.0
     * @default 0
     */
    format?: number;
    /**
     * The assigned soundcard.
     * @since 3.0.0
     */
    'input-soundcard'?: GObject.Object;
    /**
     * The input soundcard channel.
     * @since 3.0.0
     * @default -1
     */
    'input-soundcard-channel'?: number;
    /**
     * The nth line.
     * @since 3.0.0
     * @default 0
     */
    line?: number;
    /**
     * The MIDI version 1 control change to port specifier.
     * @since 7.0.0
     */
    'midi1-cc-to-port-specifier'?: GLib.HashTable;
    /**
     * The MIDI version 1 control change to value.
     * @since 7.0.0
     */
    'midi1-cc-to-value'?: GLib.HashTable;
    /**
     * The MIDI version 1 control change to port specifier.
     * @since 7.0.0
     */
    'midi2-cc-to-port-specifier'?: GLib.HashTable;
    /**
     * The MIDI version 1 control change to value.
     * @since 7.0.0
     */
    'midi2-cc-to-value'?: GLib.HashTable;
    /**
     * The assigned soundcard.
     * @since 3.0.0
     */
    'output-soundcard'?: GObject.Object;
    /**
     * The output soundcard channel.
     * @since 3.0.0
     * @default -1
     */
    'output-soundcard-channel'?: number;
    /**
     * The nth pad.
     * @since 3.0.0
     * @default 0
     */
    pad?: number;
    /**
     * The parent #AgsRecall.
     * @since 3.0.0
     */
    parent?: AgsAudio.Recall;
    /**
     * The assigned #AgsPort
     * @since 3.0.0
     */
    port?: AgsAudio.Port[];
    /**
     * The #AgsRecallContainer packed into.
     * @since 3.0.0
     */
    'recall-container'?: AgsAudio.RecallContainer;
    /**
     * The #AgsRecallDependency.
     * @since 3.0.0
     */
    'recall-dependency'?: AgsAudio.RecallDependency[];
    /**
     * The #AgsRecallID running in.
     * @since 3.0.0
     */
    'recall-id'?: AgsAudio.RecallID;
    /**
     * The samplerate.
     * @since 3.0.0
     * @default 0
     */
    samplerate?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AgsRecallConstructOnly = GObjectConstructOnly | AgsConnectableConstructOnly;

export interface AgsRecallAudioProps extends AgsRecallProps, AgsConnectableProps {
    /**
     * The assigned audio.
     * @since 3.0.0
     */
    audio?: AgsAudio.Audio;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AgsRecallAudioConstructOnly = AgsRecallConstructOnly | AgsConnectableConstructOnly;

export interface AgsRecallAudioRunProps extends AgsRecallProps, AgsConnectableProps {
    /**
     * The assigned audio.
     * @since 3.0.0
     */
    audio?: AgsAudio.Audio;
    /**
     * The recall audio belonging to.
     * @since 3.0.0
     */
    'recall-audio'?: AgsAudio.RecallAudio;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AgsRecallAudioRunConstructOnly = AgsRecallConstructOnly | AgsConnectableConstructOnly;

export interface AgsRecallAudioSignalProps extends AgsRecallProps, AgsConnectableProps {
    /**
     * The destination audio signal
     * @since 3.0.0
     */
    destination?: AgsAudio.AudioSignal;
    /**
     * The source audio signal
     * @since 3.0.0
     */
    source?: AgsAudio.AudioSignal;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AgsRecallAudioSignalConstructOnly = AgsRecallConstructOnly | AgsConnectableConstructOnly;

export interface AgsRecallChannelProps extends AgsRecallProps, AgsConnectableProps {
    /**
     * The assigned destination channel.
     * @since 3.0.0
     */
    destination?: AgsAudio.Channel;
    /**
     * The associated recall within audio context.
     * @since 3.0.0
     */
    'recall-audio'?: AgsAudio.RecallAudio;
    /**
     * The assigned source channel.
     * @since 3.0.0
     */
    source?: AgsAudio.Channel;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AgsRecallChannelConstructOnly = AgsRecallConstructOnly | AgsConnectableConstructOnly;

export interface AgsRecallChannelRunProps extends AgsRecallProps, AgsConnectableProps {
    /**
     * The channel to do output to.
     * @since 3.0.0
     */
    destination?: AgsAudio.Channel;
    /**
     * The audio context of this recall.
     * @since 3.0.0
     */
    'recall-audio'?: AgsAudio.RecallAudio;
    /**
     * The audio run context of this recall.
     * @since 3.0.0
     */
    'recall-audio-run'?: AgsAudio.RecallAudioRun;
    /**
     * The channel context of this recall.
     * @since 3.0.0
     */
    'recall-channel'?: AgsAudio.RecallChannel;
    /**
     * The channel to do input from.
     * @since 3.0.0
     */
    source?: AgsAudio.Channel;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AgsRecallChannelRunConstructOnly = AgsRecallConstructOnly | AgsConnectableConstructOnly;

export interface AgsRecallContainerProps extends GObjectProps, AgsConnectableProps {
    /**
     * The associated recall within audio context.
     * @since 3.0.0
     */
    'recall-audio'?: AgsAudio.RecallAudio;
    /**
     * The associated recall within dynamic audio context.
     * @since 3.0.0
     */
    'recall-audio-run'?: AgsAudio.Recall[];
    /**
     * The associated recall type within dynamic audio context.
     * @since 3.0.0
     */
    'recall-audio-run-type'?: GObject.GType;
    /**
     * The associated recall type within audio context.
     * @since 3.0.0
     */
    'recall-audio-type'?: GObject.GType;
    /**
     * The associated recall within channel context.
     * @since 3.0.0
     */
    'recall-channel'?: AgsAudio.Recall[];
    /**
     * The associated recall within dynamic channel context.
     * @since 3.0.0
     */
    'recall-channel-run'?: AgsAudio.Recall[];
    /**
     * The associated recall type within dynamic channel context.
     * @since 3.0.0
     */
    'recall-channel-run-type'?: GObject.GType;
    /**
     * The associated recall type within channel context.
     * @since 3.0.0
     */
    'recall-channel-type'?: GObject.GType;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AgsRecallContainerConstructOnly = GObjectConstructOnly | AgsConnectableConstructOnly;

export interface AgsRecallDependencyProps extends GObjectProps {
    /**
     * The dependency.
     * @since 3.0.0
     */
    dependency?: AgsAudio.Recall;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AgsRecallDependencyConstructOnly = GObjectConstructOnly;

export interface AgsRecallIDProps extends GObjectProps {
    /**
     * The dynamic run context belonging to.
     * @since 3.0.0
     */
    'recycling-context'?: GObject.Object;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AgsRecallIDConstructOnly = GObjectConstructOnly;

export interface AgsRecallRecyclingProps extends AgsRecallProps, AgsConnectableProps {
    /**
     * The assigned destination recycling.
     * @since 3.0.0
     * @default 0
     */
    'audio-channel'?: number;
    /**
     * The assigned destination audio signal.
     * @since 3.0.0
     */
    'child-destination'?: AgsAudio.AudioSignal;
    /**
     * The assigned source audio signal.
     * @since 3.0.0
     */
    'child-source'?: AgsAudio.AudioSignal[];
    /**
     * The assigned destination recycling.
     * @since 3.0.0
     */
    destination?: AgsAudio.Recycling;
    /**
     * The assigned source recycling.
     * @since 3.0.0
     */
    source?: AgsAudio.Recycling;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AgsRecallRecyclingConstructOnly = AgsRecallConstructOnly | AgsConnectableConstructOnly;

export interface AgsRecyclingProps extends GObjectProps, AgsConnectableProps {
    /**
     * The containing #AgsAudioSignal.
     * @since 3.0.0
     */
    'audio-signal'?: AgsAudio.AudioSignal[];
    /**
     * The buffer size.
     * @since 3.0.0
     * @default 0
     */
    'buffer-size'?: number;
    /**
     * The assigned #AgsChannel.
     * @since 3.0.0
     */
    channel?: AgsAudio.Channel;
    /**
     * The format.
     * @since 3.0.0
     * @default 0
     */
    format?: number;
    /**
     * The assigned input soundcard.
     * @since 3.0.0
     */
    'input-soundcard'?: GObject.Object;
    /**
     * The input soundcard channel.
     * @since 3.0.0
     * @default 0
     */
    'input-soundcard-channel'?: number;
    /**
     * The assigned next #AgsRecycling.
     * @since 3.0.0
     */
    next?: AgsAudio.Recycling;
    /**
     * The assigned output soundcard acting as default sink.
     * @since 3.0.0
     */
    'output-soundcard'?: GObject.Object;
    /**
     * The output soundcard channel.
     * @since 3.0.0
     * @default 0
     */
    'output-soundcard-channel'?: number;
    /**
     * The assigned parent #AgsRecycling.
     * @since 3.0.0
     */
    parent?: AgsAudio.Recycling;
    /**
     * The assigned prev #AgsRecycling.
     * @since 3.0.0
     */
    prev?: AgsAudio.Recycling;
    /**
     * The samplerate.
     * @since 3.0.0
     * @default 0
     */
    samplerate?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AgsRecyclingConstructOnly = GObjectConstructOnly | AgsConnectableConstructOnly;

export interface AgsRecyclingContextProps extends GObjectProps {
    /**
     * The child recycling contexts.
     * @since 3.0.0
     */
    child?: AgsAudio.RecyclingContext[];
    /**
     * Boundary length.
     * @since 3.0.0
     * @default 0
     */
    length?: bigint | number;
    /**
     * The parent recycling context within tree.
     * @since 3.0.0
     */
    parent?: AgsAudio.RecyclingContext;
    /**
     * The assigned #AgsRecallID.
     * @since 3.0.0
     */
    'recall-id'?: AgsAudio.RecallID;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AgsRecyclingContextConstructOnly = GObjectConstructOnly;

export interface AgsRemoveAudioProps extends AgsTaskProps {
    /**
     * The assigned #AgsAudio
     * @since 3.0.0
     */
    audio?: AgsAudio.Audio;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AgsRemoveAudioConstructOnly = AgsTaskConstructOnly;

export interface AgsRemoveAudioSignalProps extends AgsTaskProps {
    /**
     * The assigned #AgsAudioSignal
     * @since 3.0.0
     */
    'audio-signal'?: AgsAudio.AudioSignal;
    /**
     * The assigned #AgsRecycling
     * @since 3.0.0
     */
    recycling?: AgsAudio.Recycling;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AgsRemoveAudioSignalConstructOnly = AgsTaskConstructOnly;

export interface AgsRemoveNoteProps extends AgsTaskProps {
    /**
     * The assigned #AgsAudio
     * @since 3.0.0
     */
    audio?: AgsAudio.Audio;
    /**
     * The assigned audio channel
     * @since 3.0.0
     * @default 0
     */
    'audio-channel'?: number;
    /**
     * The assigned #AgsNote
     * @since 3.0.0
     */
    note?: AgsAudio.Note;
    /**
     * The notation's use-selection-list.
     * @since 3.0.0
     * @default FALSE
     */
    'use-selection-list'?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AgsRemoveNoteConstructOnly = AgsTaskConstructOnly;

export interface AgsRemoveSoundcardProps extends AgsTaskProps {
    /**
     * The assigned #AgsSoundcard
     * @since 3.0.0
     */
    soundcard?: GObject.Object;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AgsRemoveSoundcardConstructOnly = AgsTaskConstructOnly;

export interface AgsResetFxAnalyseProps extends AgsTaskProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AgsResetFxAnalyseConstructOnly = AgsTaskConstructOnly;

export interface AgsResetFxPeakProps extends AgsTaskProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AgsResetFxPeakConstructOnly = AgsTaskConstructOnly;

export interface AgsResetNoteProps extends AgsTaskProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AgsResetNoteConstructOnly = AgsTaskConstructOnly;

export interface AgsResetRecallStagingProps extends AgsTaskProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AgsResetRecallStagingConstructOnly = AgsTaskConstructOnly;

export interface AgsResizeAudioProps extends AgsTaskProps {
    /**
     * The assigned #AgsAudio
     * @since 3.0.0
     */
    audio?: AgsAudio.Audio;
    /**
     * The count of audio channels to apply to audio.
     * @since 3.0.0
     * @default 0
     */
    'audio-channels'?: number;
    /**
     * The count of input pads to apply to audio.
     * @since 3.0.0
     * @default 0
     */
    'input-pads'?: number;
    /**
     * The count of output pads to apply to audio.
     * @since 3.0.0
     * @default 0
     */
    'output-pads'?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AgsResizeAudioConstructOnly = AgsTaskConstructOnly;

export interface AgsSF2LoaderProps extends GObjectProps {
    /**
     * The assigned audio.
     * @since 3.0.0
     */
    audio?: AgsAudio.Audio;
    /**
     * The audio container opened.
     * @since 3.0.0
     */
    'audio-container'?: AgsAudio.AudioContainer;
    /**
     * The filename to open.
     * @since 3.0.0
     * @default NULL
     */
    filename?: string;
    /**
     * The instrument to open.
     * @since 3.0.0
     * @default NULL
     */
    instrument?: string;
    /**
     * The preset to open.
     * @since 3.0.0
     * @default NULL
     */
    preset?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AgsSF2LoaderConstructOnly = GObjectConstructOnly;

export interface AgsSF2MidiLocaleLoaderProps extends GObjectProps {
    /**
     * The assigned audio.
     * @since 3.16.0
     */
    audio?: AgsAudio.Audio;
    /**
     * The audio container opened.
     * @since 3.16.0
     */
    'audio-container'?: AgsAudio.AudioContainer;
    /**
     * The bank to open.
     * @since 3.16.0
     * @default -1
     */
    bank?: number;
    /**
     * The filename to open.
     * @since 3.16.0
     * @default NULL
     */
    filename?: string;
    /**
     * The program to open.
     * @since 3.16.0
     * @default -1
     */
    program?: number;
    /**
     * The assigned synth.
     * @since 3.16.0
     */
    synth?: never;
    /**
     * The assigned synth template.
     * @since 3.16.0
     */
    'synth-template'?: never;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AgsSF2MidiLocaleLoaderConstructOnly = GObjectConstructOnly;

export interface AgsSF2SynthGeneratorProps extends AgsFunctionProps {
    /**
     * The attack to be used.
     * @since 3.4.11
     * @default 0
     */
    attack?: number;
    /**
     * The bank to be used.
     * @since 3.4.0
     * @default 0
     */
    bank?: number;
    /**
     * The base key to be used.
     * @since 3.4.0
     * @default -48.000000
     */
    'base-key'?: number;
    /**
     * The buffer size to be used.
     * @since 3.4.0
     * @default 2048
     */
    'buffer-size'?: number;
    /**
     * The delay to be used.
     * @since 3.4.11
     * @default 0.000000
     */
    delay?: number;
    /**
     * The assigned filename.
     * @since 3.4.0
     * @default NULL
     */
    filename?: string;
    /**
     * The format to be used.
     * @since 3.4.0
     * @default 16
     */
    format?: number;
    /**
     * The frame count to be used.
     * @since 3.4.0
     * @default 0
     */
    'frame-count'?: number;
    /**
     * The assigned instrument.
     * @since 3.4.0
     * @default NULL
     */
    instrument?: string;
    /**
     * The loop end to be used.
     * @since 3.4.0
     * @default 0
     */
    'loop-end'?: number;
    /**
     * The loop start to be used.
     * @since 3.4.0
     * @default 0
     */
    'loop-start'?: number;
    /**
     * The pitch type to be used.
     * @since 3.9.0
     * @default ags-fluid-4th-order
     */
    'pitch-type'?: string;
    /**
     * The assigned preset.
     * @since 3.4.0
     * @default NULL
     */
    preset?: string;
    /**
     * The program to be used.
     * @since 3.4.0
     * @default 0
     */
    program?: number;
    /**
     * The samplerate to be used.
     * @since 3.4.0
     * @default 44100
     */
    samplerate?: number;
    /**
     * The tuning to be used.
     * @since 3.4.0
     * @default 0.000000
     */
    tuning?: number;
    /**
     * The volume to be used.
     * @since 3.4.11
     * @default 1.000000
     */
    volume?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AgsSF2SynthGeneratorConstructOnly = AgsFunctionConstructOnly;

export interface AgsSFZFileProps extends GObjectProps, AgsConnectableProps, AgsSoundContainerProps {
    /**
     * The assigned filename.
     * @since 3.0.0
     * @default NULL
     */
    filename?: string;
    /**
     * The containing groups.
     * @since 3.0.0
     */
    group?: AgsAudio.SFZGroup[];
    /**
     * The assigned mode.
     * @since 3.0.0
     * @default NULL
     */
    mode?: string;
    /**
     * The containing regions.
     * @since 3.0.0
     */
    region?: AgsAudio.SFZRegion[];
    /**
     * The containing samples.
     * @since 3.0.0
     */
    sample?: AgsAudio.SFZSample[];
    /**
     * The assigned soundcard.
     * @since 3.0.0
     */
    soundcard?: GObject.Object;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AgsSFZFileConstructOnly = GObjectConstructOnly | AgsConnectableConstructOnly | AgsSoundContainerConstructOnly;

export interface AgsSFZGroupProps extends GObjectProps, AgsConnectableProps {
    /**
     * The nth group.
     * @since 3.0.0
     * @default -1
     */
    'nth-group'?: number;
    /**
     * The region assigned with.
     * @since 3.0.0
     */
    region?: AgsAudio.SFZRegion[];
    /**
     * The sample assigned with.
     * @since 3.0.0
     */
    sample?: AgsAudio.SFZSample;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AgsSFZGroupConstructOnly = GObjectConstructOnly | AgsConnectableConstructOnly;

export interface AgsSFZInstrumentLoaderProps extends GObjectProps {
    /**
     * The assigned audio.
     * @since 3.17.0
     */
    audio?: AgsAudio.Audio;
    /**
     * The audio container opened.
     * @since 3.17.0
     */
    'audio-container'?: AgsAudio.AudioContainer;
    /**
     * The filename to open.
     * @since 3.17.0
     * @default NULL
     */
    filename?: string;
    /**
     * The assigned synth.
     * @since 3.17.0
     */
    synth?: never;
    /**
     * The assigned synth template.
     * @since 3.17.0
     */
    'synth-template'?: never;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AgsSFZInstrumentLoaderConstructOnly = GObjectConstructOnly;

export interface AgsSFZLoaderProps extends GObjectProps {
    /**
     * The assigned audio.
     * @since 3.0.0
     */
    audio?: AgsAudio.Audio;
    /**
     * The audio container opened.
     * @since 3.0.0
     */
    'audio-container'?: AgsAudio.AudioContainer;
    /**
     * The filename to open.
     * @since 3.0.0
     * @default NULL
     */
    filename?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AgsSFZLoaderConstructOnly = GObjectConstructOnly;

export interface AgsSFZRegionProps extends GObjectProps, AgsConnectableProps {
    /**
     * The group assigned with.
     * @since 3.0.0
     */
    group?: AgsAudio.SFZGroup;
    /**
     * The nth region.
     * @since 3.0.0
     * @default -1
     */
    'nth-region'?: number;
    /**
     * The sample assigned with.
     * @since 3.0.0
     */
    sample?: AgsAudio.SFZSample;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AgsSFZRegionConstructOnly = GObjectConstructOnly | AgsConnectableConstructOnly;

export interface AgsSFZSampleProps extends GObjectProps, AgsConnectableProps, AgsSoundResourceProps {
    /**
     * The audio channels to be used.
     * @since 3.0.0
     * @default 0
     */
    'audio-channels'?: number;
    /**
     * The buffer size to be used.
     * @since 3.0.0
     * @default 0
     */
    'buffer-size'?: number;
    /**
     * The filename to be used.
     * @since 3.0.0
     * @default NULL
     */
    filename?: string;
    /**
     * The format to be used.
     * @since 3.0.0
     * @default 0
     */
    format?: number;
    /**
     * The group assigned with.
     * @since 3.0.0
     */
    group?: AgsAudio.SFZGroup;
    /**
     * The loop end to be used.
     * @since 3.0.0
     * @default 0
     */
    'loop-end'?: number;
    /**
     * The loop start to be used.
     * @since 3.0.0
     * @default 0
     */
    'loop-start'?: number;
    /**
     * The region assigned with.
     * @since 3.0.0
     */
    region?: AgsAudio.SFZRegion;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AgsSFZSampleConstructOnly = GObjectConstructOnly | AgsConnectableConstructOnly | AgsSoundResourceConstructOnly;

export interface AgsSFZSynthGeneratorProps extends AgsFunctionProps {
    /**
     * The attack to be used.
     * @since 3.4.11
     * @default 0
     */
    attack?: number;
    /**
     * The base key to be used.
     * @since 3.4.0
     * @default -48.000000
     */
    'base-key'?: number;
    /**
     * The buffer size to be used.
     * @since 3.4.0
     * @default 2048
     */
    'buffer-size'?: number;
    /**
     * The delay to be used.
     * @since 3.4.11
     * @default 0.000000
     */
    delay?: number;
    /**
     * The assigned filename.
     * @since 3.4.0
     * @default NULL
     */
    filename?: string;
    /**
     * The format to be used.
     * @since 3.4.0
     * @default 16
     */
    format?: number;
    /**
     * The frame count to be used.
     * @since 3.4.0
     * @default 0
     */
    'frame-count'?: number;
    /**
     * The loop end to be used.
     * @since 3.4.0
     * @default 0
     */
    'loop-end'?: number;
    /**
     * The loop start to be used.
     * @since 3.4.0
     * @default 0
     */
    'loop-start'?: number;
    /**
     * The pitch type to be used.
     * @since 3.9.0
     * @default ags-fluid-4th-order
     */
    'pitch-type'?: string;
    /**
     * The samplerate to be used.
     * @since 3.4.0
     * @default 44100
     */
    samplerate?: number;
    /**
     * The tuning to be used.
     * @since 3.4.0
     * @default 0.000000
     */
    tuning?: number;
    /**
     * The volume to be used.
     * @since 3.4.11
     * @default 1.000000
     */
    volume?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AgsSFZSynthGeneratorConstructOnly = AgsFunctionConstructOnly;

export interface AgsSeekSoundcardProps extends AgsTaskProps {
    /**
     * The offset to seek.
     * @since 3.0.0
     * @default 0
     */
    offset?: bigint | number;
    /**
     * The assigned #AgsSoundcard
     * @since 3.0.0
     */
    soundcard?: GObject.Object;
    /**
     * Whence either AGS_SEEK_SET, AGS_SEEK_CUR or AGS_SEEK_END
     * @since 3.0.0
     * @default 1
     */
    whence?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AgsSeekSoundcardConstructOnly = AgsTaskConstructOnly;

export interface AgsSequencerThreadProps extends AgsThreadProps, AgsConnectableProps {
    /**
     * The assigned #AgsSequencer.
     * @since 3.0.0
     */
    sequencer?: GObject.Object;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AgsSequencerThreadConstructOnly = AgsThreadConstructOnly | AgsConnectableConstructOnly;

export interface AgsSetAudioChannelsProps extends AgsTaskProps {
    /**
     * The count of audio channels to apply to soundcard.
     * @since 3.0.0
     * @default 0
     */
    'audio-channels'?: number;
    /**
     * The assigned #AgsSoundcard instance.
     * @since 3.0.0
     */
    soundcard?: GObject.Object;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AgsSetAudioChannelsConstructOnly = AgsTaskConstructOnly;

export interface AgsSetBacklogProps extends AgsTaskProps {
    /**
     * The backlog to apply to scope.
     * @since 6.2.0
     * @default TRUE
     */
    'has-backlog'?: boolean;
    /**
     * The assigned #GObject as scope.
     * @since 6.2.0
     */
    scope?: never;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AgsSetBacklogConstructOnly = AgsTaskConstructOnly;

export interface AgsSetBufferSizeProps extends AgsTaskProps {
    /**
     * The buffer size to apply to scope.
     * @since 3.0.0
     * @default 0
     */
    'buffer-size'?: number;
    /**
     * The assigned #GObject as scope.
     * @since 3.0.0
     */
    scope?: GObject.Object;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AgsSetBufferSizeConstructOnly = AgsTaskConstructOnly;

export interface AgsSetDeviceProps extends AgsTaskProps {
    /**
     * The device to set.
     * @since 3.0.0
     * @default NULL
     */
    device?: string;
    /**
     * The assigned #AgsSoundcard or #AgsSequencer instance.
     * @since 3.0.0
     */
    scope?: GObject.Object;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AgsSetDeviceConstructOnly = AgsTaskConstructOnly;

export interface AgsSetFormatProps extends AgsTaskProps {
    /**
     * The format to apply to scope.
     * @since 3.0.0
     * @default 0
     */
    format?: number;
    /**
     * The assigned #GObject as scope.
     * @since 3.0.0
     */
    scope?: GObject.Object;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AgsSetFormatConstructOnly = AgsTaskConstructOnly;

export interface AgsSetMutedProps extends AgsTaskProps {
    /**
     * The muted to set to scope.
     * @since 3.0.0
     * @default FALSE
     */
    muted?: boolean;
    /**
     * The assigned #GObject as scope.
     * @since 3.0.0
     */
    scope?: GObject.Object;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AgsSetMutedConstructOnly = AgsTaskConstructOnly;

export interface AgsSetPresetsProps extends AgsTaskProps {
    /**
     * The buffer size to apply to scope.
     * @since 5.3.1
     * @default 0
     */
    'buffer-size'?: number;
    /**
     * The format to apply to scope.
     * @since 5.3.1
     * @default 0
     */
    format?: number;
    /**
     * The samplerate to apply to scope.
     * @since 5.3.1
     * @default 0
     */
    samplerate?: number;
    /**
     * The assigned #GObject as scope.
     * @since 5.3.1
     */
    scope?: GObject.Object;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AgsSetPresetsConstructOnly = AgsTaskConstructOnly;

export interface AgsSetSamplerateProps extends AgsTaskProps {
    /**
     * The samplerate to apply to scope.
     * @since 3.0.0
     * @default 0
     */
    samplerate?: number;
    /**
     * The assigned #GObject as scope.
     * @since 3.0.0
     */
    scope?: GObject.Object;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AgsSetSamplerateConstructOnly = AgsTaskConstructOnly;

export interface AgsSndfileProps extends GObjectProps, AgsConnectableProps, AgsSoundResourceProps {
    /**
     * The audio channels to be used.
     * @since 3.0.0
     * @default 0
     */
    'audio-channels'?: number;
    /**
     * The buffer size to be used.
     * @since 3.0.0
     * @default 0
     */
    'buffer-size'?: number;
    /**
     * The assigned output #SNDFILE-struct.
     * @since 3.0.0
     */
    file?: never;
    /**
     * The format to be used.
     * @since 3.0.0
     * @default 0
     */
    format?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AgsSndfileConstructOnly = GObjectConstructOnly | AgsConnectableConstructOnly | AgsSoundResourceConstructOnly;

export interface AgsSoundContainerProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AgsSoundContainerConstructOnly = GObjectConstructOnly;

export interface AgsSoundProviderProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AgsSoundProviderConstructOnly = GObjectConstructOnly;

export interface AgsSoundResourceProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AgsSoundResourceConstructOnly = GObjectConstructOnly;

export interface AgsSoundcardThreadProps extends AgsThreadProps, AgsConnectableProps {
    /**
     * The assigned #AgsSoundcard.
     * @since 3.0.0
     */
    soundcard?: GObject.Object;
    /**
     * The soundcard capability.
     * @since 3.0.0
     * @default 0
     */
    'soundcard-capability'?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AgsSoundcardThreadConstructOnly = AgsThreadConstructOnly | AgsConnectableConstructOnly;

export interface AgsStartAudioProps extends AgsTaskProps {
    /**
     * The assigned #AgsAudio
     * @since 3.0.0
     */
    audio?: AgsAudio.Audio;
    /**
     * The effects sound-scope.
     * @since 3.0.0
     * @default -1
     */
    'sound-scope'?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AgsStartAudioConstructOnly = AgsTaskConstructOnly;

export interface AgsStartChannelProps extends AgsTaskProps {
    /**
     * The assigned #AgsChannel
     * @since 3.0.0
     */
    channel?: AgsAudio.Channel;
    /**
     * The effects sound-scope.
     * @since 3.0.0
     * @default -1
     */
    'sound-scope'?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AgsStartChannelConstructOnly = AgsTaskConstructOnly;

export interface AgsStartSequencerProps extends AgsTaskProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AgsStartSequencerConstructOnly = AgsTaskConstructOnly;

export interface AgsStartSoundcardProps extends AgsTaskProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AgsStartSoundcardConstructOnly = AgsTaskConstructOnly;

export interface AgsStopSequencerProps extends AgsTaskProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AgsStopSequencerConstructOnly = AgsTaskConstructOnly;

export interface AgsStopSoundcardProps extends AgsTaskProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AgsStopSoundcardConstructOnly = AgsTaskConstructOnly;

export interface AgsStopThreadProps extends AgsTaskProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AgsStopThreadConstructOnly = AgsTaskConstructOnly;

export interface AgsSwitchBufferFlagProps extends AgsTaskProps {
    /**
     * The assigned #AgsSoundcard or #AgsSequencer
     * @since 3.0.0
     */
    device?: GObject.Object;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AgsSwitchBufferFlagConstructOnly = AgsTaskConstructOnly;

export interface AgsSynthGeneratorProps extends AgsFunctionProps {
    /**
     * The attack to be used.
     * @since 3.0.0
     * @default 0
     */
    attack?: number;
    /**
     * The buffer size to be used.
     * @since 3.0.0
     * @default 2048
     */
    'buffer-size'?: number;
    /**
     * The delay to be used.
     * @since 3.0.0
     * @default 0.000000
     */
    delay?: number;
    /**
     * If %TRUE compute FM synth, otherwise not.
     * @since 3.0.0
     * @default FALSE
     */
    'do-fm-synth'?: boolean;
    /**
     * If %TRUE compute LFO amplification, otherwise not.
     * @since 3.0.0
     * @default FALSE
     */
    'do-lfo'?: boolean;
    /**
     * The fm LFO depth to be used.
     * @since 3.0.0
     * @default 1.000000
     */
    'fm-lfo-depth'?: number;
    /**
     * The fm LFO frequency to be used.
     * @since 3.0.0
     * @default 6.000000
     */
    'fm-lfo-frequency'?: number;
    /**
     * The frame count to be used.
     * @since 3.0.0
     * @default 0
     */
    'fm-lfo-oscillator'?: number;
    /**
     * The fm tuning to be used.
     * @since 3.0.0
     * @default 0.000000
     */
    'fm-tuning'?: number;
    /**
     * The format to be used.
     * @since 3.0.0
     * @default 16
     */
    format?: number;
    /**
     * The frame count to be used.
     * @since 3.0.0
     * @default 0
     */
    'frame-count'?: number;
    /**
     * The frequency to be used.
     * @since 3.0.0
     * @default 440.000000
     */
    frequency?: number;
    /**
     * The LFO depth to be used.
     * @since 3.0.0
     * @default 1.000000
     */
    'lfo-depth'?: number;
    /**
     * The loop end to be used.
     * @since 3.0.0
     * @default 0
     */
    'loop-end'?: number;
    /**
     * The loop start to be used.
     * @since 3.0.0
     * @default 0
     */
    'loop-start'?: number;
    /**
     * The oscillator to be used.
     * @since 3.0.0
     * @default 0
     */
    oscillator?: number;
    /**
     * The phase to be used.
     * @since 3.0.0
     * @default 0.000000
     */
    phase?: number;
    /**
     * The samplerate to be used.
     * @since 3.0.0
     * @default 44100
     */
    samplerate?: number;
    /**
     * The assigned timestamp.
     * @since 3.0.0
     */
    timestamp?: GObject.Object;
    /**
     * The tuning to be used.
     * @since 3.0.0
     * @default 0.000000
     */
    tuning?: number;
    /**
     * The volume to be used.
     * @since 3.0.0
     * @default 1.000000
     */
    volume?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AgsSynthGeneratorConstructOnly = AgsFunctionConstructOnly;

export interface AgsTicDeviceProps extends AgsTaskProps {
    /**
     * The assigned #GObject as device.
     * @since 3.0.0
     */
    device?: GObject.Object;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AgsTicDeviceConstructOnly = AgsTaskConstructOnly;

export interface AgsTogglePatternBitProps extends AgsTaskProps {
    /**
     * The bit.
     * @since 3.0.0
     * @default 0
     */
    bit?: number;
    /**
     * The index-i.
     * @since 3.0.0
     * @default 0
     */
    'index-i'?: number;
    /**
     * The index-j.
     * @since 3.0.0
     * @default 0
     */
    'index-j'?: number;
    /**
     * The line.
     * @since 3.0.0
     * @default 0
     */
    line?: number;
    /**
     * The assigned #AgsPattern
     * @since 3.0.0
     */
    pattern?: AgsAudio.Pattern;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AgsTogglePatternBitConstructOnly = AgsTaskConstructOnly;

export interface AgsTrackProps extends GObjectProps {
    /**
     * Track's SMF buffer.
     * @since 3.0.0
     */
    'smf-buffer'?: never;
    /**
     * Track's x offset.
     * @since 3.0.0
     * @default 0
     */
    x?: bigint | number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AgsTrackConstructOnly = GObjectConstructOnly;

export interface AgsVDSP256ManagerProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AgsVDSP256ManagerConstructOnly = GObjectConstructOnly;

export interface AgsVector256ManagerProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AgsVector256ManagerConstructOnly = GObjectConstructOnly;

export interface AgsWasapiDevinProps extends GObjectProps, AgsConnectableProps {
    /**
     * Beats per minute
     * @since 3.0.0
     * @default 120.000000
     */
    bpm?: number;
    /**
     * The buffer size
     * @since 3.0.0
     * @default 940
     */
    'buffer-size'?: number;
    /**
     * tact
     * @since 3.0.0
     * @default 1.000000
     */
    'delay-factor'?: number;
    /**
     * The core audio soundcard indentifier
     * @since 3.0.0
     * @default ags-wasapi-devin-0
     */
    device?: string;
    /**
     * The dsp channel count
     * @since 3.0.0
     * @default 2
     */
    'dsp-channels'?: number;
    /**
     * The precision of the buffer
     * @since 3.0.0
     * @default 16
     */
    format?: number;
    /**
     * The pcm channel count
     * @since 3.0.0
     * @default 2
     */
    'pcm-channels'?: number;
    /**
     * The samplerate
     * @since 3.0.0
     * @default 44100
     */
    samplerate?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AgsWasapiDevinConstructOnly = GObjectConstructOnly | AgsConnectableConstructOnly;

export interface AgsWasapiDevoutProps extends GObjectProps, AgsConnectableProps {
    /**
     * Beats per minute
     * @since 3.0.0
     * @default 120.000000
     */
    bpm?: number;
    /**
     * The buffer size
     * @since 3.0.0
     * @default 940
     */
    'buffer-size'?: number;
    /**
     * tact
     * @since 3.0.0
     * @default 1.000000
     */
    'delay-factor'?: number;
    /**
     * The core audio soundcard indentifier
     * @since 3.0.0
     * @default ags-wasapi-devout-0
     */
    device?: string;
    /**
     * The dsp channel count
     * @since 3.0.0
     * @default 2
     */
    'dsp-channels'?: number;
    /**
     * The precision of the buffer
     * @since 3.0.0
     * @default 16
     */
    format?: number;
    /**
     * The pcm channel count
     * @since 3.0.0
     * @default 2
     */
    'pcm-channels'?: number;
    /**
     * The samplerate
     * @since 3.0.0
     * @default 44100
     */
    samplerate?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AgsWasapiDevoutConstructOnly = GObjectConstructOnly | AgsConnectableConstructOnly;

export interface AgsWaveProps extends GObjectProps {
    /**
     * The assigned #AgsAudio
     * @since 3.0.0
     */
    audio?: AgsAudio.Audio;
    /**
     * The assigned #AgsBuffer
     * @since 3.0.0
     */
    buffer?: AgsAudio.Buffer[];
    /**
     * The audio buffer's buffer size.
     * @since 3.0.0
     * @default 2048
     */
    'buffer-size'?: number;
    /**
     * The audio buffer's format.
     * @since 3.0.0
     * @default 16
     */
    format?: number;
    /**
     * The wave's line.
     * @since 3.0.0
     * @default 0
     */
    line?: number;
    /**
     * The audio buffer's samplerate.
     * @since 3.0.0
     * @default 44100
     */
    samplerate?: number;
    /**
     * The wave's timestamp.
     * @since 3.0.0
     */
    timestamp?: Ags.Timestamp;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AgsWaveConstructOnly = GObjectConstructOnly;

export interface AgsWaveLoaderProps extends GObjectProps {
    /**
     * The assigned audio.
     * @since 3.0.0
     */
    audio?: AgsAudio.Audio;
    /**
     * The audio file opened.
     * @since 3.0.0
     */
    'audio-file'?: AgsAudio.AudioFile;
    /**
     * The filename to open.
     * @since 3.0.0
     * @default NULL
     */
    filename?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AgsWaveLoaderConstructOnly = GObjectConstructOnly;

// ---------------------------------------------------------------------------
// The GType-keyed widget map.
//
// Keyed by GType because that is also the GtkBuilder XML key and the typelib key. A
// consumer maps GTypes to tags in ITS convention — kebab for JSX intrinsics, Pascal
// for a Vue `GlobalComponents`, the class itself for a renderer whose element type
// is the class. None of those is baked in here.
//
// `slotCandidates` is a candidate list and never an answer: derived from methods
// taking exactly one widget argument. The GIR cannot tell adoption from reference —
// `set_title_widget` parents its argument and `set_activatable_widget` does not, and
// both are `void f(GtkWidget*)` at `transfer-ownership="none"`. Curation decides;
// this is what notices when a release adds a candidate.
// ---------------------------------------------------------------------------

export interface Widgets {

}

/**
 * Every GType this namespace can create AND put on screen. A consumer derives its own
 * tag map. For everything a UI file can instantiate — layout managers, event
 * controllers, cell renderers, `GtkSizeGroup` — read `DECLS` below.
 */
export type WidgetGType = keyof Widgets;

// ---------------------------------------------------------------------------
// Child holders — the same shape, for objects that CARRY a widget without being one.
//
// `GtkListItem`, `GtkListHeader`, `GtkColumnViewCell` and `AdwToggle` descend from
// `GObject.Object` and hold a widget through `set_child`/`get_child`. A renderer places
// them exactly like a container, so they belong in the vocabulary; a check asking "is
// this a widget" must still be able to say no. Hence a sibling table rather than four
// more rows in `Widgets`: concatenate them when you mean both.
// ---------------------------------------------------------------------------

export interface ChildHolders {

}

/** Every GType this namespace holds a child in without it being a widget. */
export type ChildHolderGType = keyof ChildHolders;

/** The writable, optional, GObject-keyed property surface of one GType. */
export type PropsOf<G extends WidgetGType> = Widgets[G]['props'];

/** The signal table this package already emits, reached by GType. */
export type SignalsOf<G extends WidgetGType> = Widgets[G]['signals'];

/** The instance type — what a `ref`-shaped prop should infer. */
export type InstanceOf<G extends WidgetGType> = Widgets[G]['class'];

/** Property names that can only be set at construction. */
export type ConstructOnlyOf<G extends WidgetGType> = Widgets[G]['constructOnly'];

/** Candidate child slots — see the note above; curation decides. */
export type SlotCandidatesOf<G extends WidgetGType> = keyof Widgets[G]['slotCandidates'];

/**
 * The same facts as runtime data, for a consumer that CHECKS them.
 *
 * Types are erased, so a spec that asks the installed GTK whether every property
 * here is a writable ParamSpec, every signal resolvable by `GObject.signal_lookup`
 * and every nick resolvable through an enum lookup cannot read the interfaces
 * above. Emitted headlessly with no GTK present, which is exactly why the checking
 * belongs to the consumer and the DATA belongs here.
 */
export const PROVENANCE: {
    readonly namespace: string;
    readonly version: string;
    /** The version the LIBRARY states, or null where it states none. Never the namespace's. */
    readonly libraryVersion: string | null;
    readonly childHolders: number;
    readonly droppedBases: readonly string[];
    readonly inlinedBases: readonly string[];
    /** `<decl>.<prop>` for every property printed `never` because TypeScript has no value for it. */
    readonly unsettableProps: readonly string[];
    /**
     * `<decl>.<prop>: <Ns>.<Name>` for every property printed `never` because the model
     * could not resolve its type across a namespace boundary — two independently released
     * GIRs disagreeing, which is what the main emitter answers `never` for as well.
     */
    readonly unresolvedProps: readonly string[];
    /**
     * `c:identifier-prefixes` from the GIR, verbatim and in order — `['G']` for Gio.
     *
     * The C prefix a type REFERENCE needs: resolving `Gio.Icon` means producing `GIcon`,
     * and nothing else in this package states that `Gio` spells itself `G`. Carried rather
     * than derived because GIR carries it, and a derivation over the `DECLS` keys is wrong
     * wherever the C prefix is not a prefix of the type NAMES: gdkx11-4.0 and gdkwayland-4.0
     * both state `Gdk` while every key they declare begins `GdkX11`/`GdkWayland`.
     *
     * Empty where the GIR states none — 17 of the 627 emitting namespaces — because
     * inventing the namespace name there is a confident wrong answer in place of a missing
     * one. A LIST because 20 of them state more than one, which no single string expresses.
     */
    readonly identifierPrefixes: readonly string[];
    /**
     * Sibling vocabularies this one's DECLARATIONS come from, as import specifiers.
     *
     * A chain link with no `OWN_PROPS` row is ambiguous on its own — `GtkSeparator` has no
     * settable property, `GApplication` has its properties in another package — and this
     * list is what tells the two apart. Enum and bitfield NUMBERS are not here: those are
     * carried in this file, because a `PROP_ENUMS` row naming a foreign GType gives a
     * consumer nothing to load and a `.ui` file using the property never names its owner.
     */
    readonly requiredVocabularies: readonly string[];
};

/** Declaration GType -> its own settable properties, as GObject registered them. */
export const OWN_PROPS: Readonly<Record<string, readonly string[]>>;

/**
 * Declaration GType -> the signals it registers itself, never its parents'.
 *
 * Keyed like `OWN_PROPS`, so both are read at every link of a `DECLS` chain. An
 * abstract base has no `Widgets` row and still owns signals — `GtkWidget` owns 13.
 */
export const OWN_SIGNALS: Readonly<Record<string, readonly string[]>>;

/**
 * Instantiable GType -> every declaration its members come from, self first.
 *
 * The key set is what a UI description file can NAME: every registered, non-abstract
 * class this namespace declares. GtkBuilder resolves a `<object class="…">` through
 * `g_type_from_name`, which knows nothing about widgets, so this is wider than
 * `Widgets` by design — `GtkSizeGroup`, `GtkTextTag`, every `GtkEventController`
 * and every `GtkCellRenderer` are here and are not widgets.
 *
 * `Widgets` and `CHILD_HOLDERS` are the narrower questions and answer them unchanged.
 */
export const DECLS: Readonly<Record<string, readonly string[]>>;

/** The GTypes in `DECLS` that hold a widget without being one — see `ChildHolders`. */
export const CHILD_HOLDERS: readonly string[];

/** Enum GType -> the nicks this surface offers. */
export const ENUM_NICKS: Readonly<Record<string, readonly string[]>>;

/**
 * `<enum GType>.<nick>` -> the integer GObject registers for it, from GIR's `value`.
 *
 * Position in `ENUM_NICKS` is NOT this number. Counting is wrong on 6 of the 137 enums a
 * GTK 4 vocabulary carries -- 112 in Gtk-4.0 and 25 in Adw-1: `GtkResponseType` runs -1 to -11, `GtkTextWindowType` starts
 * at 1, `GtkOrdering` and `GtkConstraintRelation` are -1/0/1, `GtkAlign` has two names
 * on one value, and `GtkConstraintStrength.required` is 1001001000 where counting says 0.
 *
 * Read from the same GIR as the nicks, deliberately. A consumer reading the numbers off an
 * installed typelib instead has two provenances for one table, and then cannot tell a
 * missing number from a host older than the vocabulary.
 */
export const ENUM_VALUES: Readonly<Record<string, number>>;

/**
 * The `<enum GType>.<nick>` entries GIR marks `deprecated="1"`.
 *
 * Two names on one value is how GObject spells an alias -- `GTK_ALIGN_BASELINE` and
 * `GTK_ALIGN_BASELINE_FILL` are both 4, and both keep a `ENUM_VALUES` entry. The pairing
 * is visible in the numbers; which name is the old one is not, and this is that fact --
 * where GIR states it. It usually does not: 4 registered-enum members across the 718 GIRs
 * carry the attribute, and 179 of the 182 value-sharing pairs carry it on neither half, so
 * absence from this list means GIR is silent, not that the nick is the current one.
 */
export const ENUM_DEPRECATED: readonly string[];

/**
 * `<enum GType>.<nick>` -> the raw GIR `value` no number could be read from.
 *
 * The declared remainder, so that every nick in `ENUM_NICKS` is in `ENUM_VALUES` or in
 * here and a drop cannot be silent. Two shapes reach it: a symbolic or absent value (Vala
 * writes `(null)`, a char enum writes a letter) and an integer past
 * `Number.MAX_SAFE_INTEGER`, where a literal would lose precision and stop being the
 * GIR's number. Empty for Gtk, Adw, GLib and Gio.
 */
export const ENUM_VALUES_UNREADABLE: Readonly<Record<string, string>>;

/**
 * `<bitfield GType>.<nick>` -> the integer GObject registers for that one member.
 *
 * `ENUM_NICKS` carries no bitfield, because GObject cannot resolve a nick SET; that says
 * nothing about a single member's number, and the number is what a host without GI needs.
 * 23 settable properties in Gtk-4.0 and Adw-1 are bitfield-typed and are declared bare
 * `number` -- `GtkEntry:input-hints`, `GtkPopoverMenu:flags`, `AdwTabView:shortcuts`,
 * `GtkDropTarget:actions` among them. Counting is worst here: 119 of the 156 Gtk-4.0
 * bitfield members this vocabulary carries disagree with their declaration position,
 * against 29 of 672 enumeration members.
 *
 * Combine with `|` as GObject does. There is no nick table to pair this with, so a name
 * here is resolvable and a SET still is not.
 */
export const FLAG_VALUES: Readonly<Record<string, number>>;

/** `<bitfield GType>.<nick>` -> the raw GIR `value` no number could be read from. */
export const FLAG_VALUES_UNREADABLE: Readonly<Record<string, string>>;

/**
 * `<declaration GType>.<property>` -> the GType of that property's enum or bitfield.
 *
 * The join the value tables need and nothing else here carries. A host with no GI has a
 * property name and a nick and needs a number; `ENUM_VALUES` is keyed by ENUM GType, and
 * only this says which enum a property is. Keyed by DECLARATION like `OWN_PROPS`, so it is
 * read at every link of a `DECLS` chain — `orientation` belongs to `GtkOrientable`, not
 * to the `GtkBox` a caller starts from.
 *
 * Present only where the property's OWN type is the enum: an array of them, or a union that
 * merely mentions one, would be an entry a consumer resolves wrongly.
 *
 * The GType named here is not always one THIS module gives numbers for. A nick vocabulary is
 * emitted once, by the namespace that owns the enum, so `AdwComboRow.search-match-mode` names
 * `GtkStringFilterMatchMode` and its rows are in `@girs/gtk-4.0/vocabulary` — 83 of the 909
 * entries in a full run resolve only with the owner's vocabulary loaded beside this one. An
 * owner with no vocabulary of its own (Gdk, Pango) is inlined here instead, so every entry
 * resolves against SOME module.
 */
export const PROP_ENUMS: Readonly<Record<string, string>>;

/**
 * The kinds of value a GTK accessible property, relation or state takes.
 *
 * `enum` is the one that needs a second lookup: `ARIA_VALUE_ENUMS` names the enum GType,
 * and `ENUM_NICKS` and `ENUM_VALUES` answer from there.
 */
export type AriaValueType = 'string' | 'integer' | 'double' | 'boolean' | 'reference' | 'enum';

/**
 * `<enum GType>.<nick>` -> the kind of value that ARIA slot takes.
 *
 * The one table in this file that is not a fact about a ParamSpec. A GtkBuilder or
 * Blueprint `accessibility { … }` block is typed by GTK's ARIA table, not by the widget,
 * and the two disagree where it costs most: `orientation` is settable on a `GtkLabel`
 * that implements no `GtkOrientable`, and `checked` is a `GtkAccessibleTristate`, so
 * `checked: true` is the number 1 rather than a boolean. Typing those slots from the
 * widget's properties gets both wrong and raises nothing.
 *
 * Keyed like `ENUM_VALUES` because the ARIA names ARE enum members — of
 * `GtkAccessibleProperty`, `GtkAccessibleRelation` and `GtkAccessibleState` — so
 * `ENUM_NICKS` already lists them and one key parser reads both.
 *
 * Read from each member's own GIR documentation. `gtk_accessible_property_init_value()`
 * is the C half of this table and is not introspectable; the doc sentence is, and states
 * the type for 52 of the 53 members in gtk4 4.23.3. Complete or absent, never partial: a
 * member the generator cannot answer for fails the build and names itself.
 */
export const ARIA_VALUE_TYPES: Readonly<Record<string, AriaValueType>>;

/**
 * The same keys, for the `'enum'` rows only -> the GType of that enum.
 *
 * A table of its own for the reason `PROP_ENUMS` is one: folded in, the values of
 * `ARIA_VALUE_TYPES` would be six reserved words mixed with arbitrary GTypes and telling
 * them apart would be the consumer's problem. Apart, `ARIA_VALUE_TYPES[k] === 'enum'` is
 * the whole test and `ENUM_NICKS[ARIA_VALUE_ENUMS[k]]` is the nick list.
 */
export const ARIA_VALUE_ENUMS: Readonly<Record<string, string>>;

/** Widget GType -> slot name -> the method that may adopt a child there. */
export const SLOT_CANDIDATES: Readonly<Record<string, Readonly<Record<string, string>>>>;

/**
 * `Type`, `Type.property` and `Type::signal` -> the release that introduced it.
 *
 * What keeps a runtime cross-check honest across a version gap without an
 * allowlist: a name the installed library lacks is a defect UNLESS the version
 * here is newer than the one running.
 *
 * ALL THREE key shapes, because that test only works for the names it covers. A
 * property-only map leaves a consumer no way to explain a missing SIGNAL, which is
 * a correct vocabulary reported as 18 defects; a member-only map leaves it no way to
 * explain a missing CLASS, and that one fails as a bare
 * `TypeError: can't access property "$gtype", ctor() is undefined` that does not
 * even name the GType.
 *
 * A key is present only where the GIR states a version — sparse by nature (`version`
 * sits on 29 of the 301 classes and interfaces in Gtk-4.0), never inferred.
 */
export const SINCE: Readonly<Record<string, string>>;
