/**
 * The GIR-derived widget VOCABULARY for GES-1.0.
 *
 * GENERATED — do not edit. Provenance: GES-1.0 — library 1.28.6 — dropped empty base(s): GstVideo.VideoOverlay
 *
 * 40 instantiable GTypes (of which 0 concrete widgets), 57 declarations, 6 enum nick unions, 0 slot candidates.
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

import type GES from './ges-1.0.js';
import type GObject from '@girs/gobject-2.0';
import type Gst from '@girs/gst-1.0';
import type { GAsyncInitableConstructOnly, GAsyncInitableProps, GInitableConstructOnly, GInitableProps } from '@girs/gio-2.0/vocabulary';
import type { GInitiallyUnownedConstructOnly, GInitiallyUnownedProps, GObjectConstructOnly, GObjectProps } from '@girs/gobject-2.0/vocabulary';
import type { GstBinConstructOnly, GstBinProps, GstChildProxyConstructOnly, GstChildProxyProps, GstElementConstructOnly, GstElementProps, GstObjectConstructOnly, GstObjectProps, GstPipelineConstructOnly, GstPipelineProps } from '@girs/gst-1.0/vocabulary';

// ---------------------------------------------------------------------------
// Enum nicks — the string vocabulary GObject registered, from GIR's `glib:nick`.
//
// Not derived from the member name. Substituting underscores for dashes is not a law:
// some nicks keep an underscore the substitution would have replaced, and only the
// attribute knows which. Gtk-4.0 and Adw-1 contradict no derivation at all, which is
// how a derived nick passes review and breaks elsewhere.
// Re-measure with `scripts/check-nick-derivation.mjs` in ts-for-gir.
// ---------------------------------------------------------------------------

export type GESEdgeNick = 'edge_start' | 'start' | 'edge_end' | 'end' | 'edge_none' | 'none';
export type GESEditModeNick = 'edit_normal' | 'normal' | 'edit_ripple' | 'ripple' | 'edit_roll' | 'roll' | 'edit_trim' | 'trim' | 'edit_slide' | 'slide';
export type GESTextHAlignNick = 'left' | 'center' | 'right' | 'position' | 'absolute';
export type GESTextVAlignNick = 'baseline' | 'bottom' | 'top' | 'position' | 'center' | 'absolute';
export type GESVideoStandardTransitionTypeNick = 'none' | 'bar-wipe-lr' | 'bar-wipe-tb' | 'box-wipe-tl' | 'box-wipe-tr' | 'box-wipe-br' | 'box-wipe-bl' | 'four-box-wipe-ci' | 'four-box-wipe-co' | 'barndoor-v' | 'barndoor-h' | 'box-wipe-tc' | 'box-wipe-rc' | 'box-wipe-bc' | 'box-wipe-lc' | 'diagonal-tl' | 'diagonal-tr' | 'bowtie-v' | 'bowtie-h' | 'barndoor-dbl' | 'barndoor-dtl' | 'misc-diagonal-dbd' | 'misc-diagonal-dd' | 'vee-d' | 'vee-l' | 'vee-u' | 'vee-r' | 'barnvee-d' | 'barnvee-l' | 'barnvee-u' | 'barnvee-r' | 'iris-rect' | 'clock-cw12' | 'clock-cw3' | 'clock-cw6' | 'clock-cw9' | 'pinwheel-tbv' | 'pinwheel-tbh' | 'pinwheel-fb' | 'fan-ct' | 'fan-cr' | 'doublefan-fov' | 'doublefan-foh' | 'singlesweep-cwt' | 'singlesweep-cwr' | 'singlesweep-cwb' | 'singlesweep-cwl' | 'doublesweep-pv' | 'doublesweep-pd' | 'doublesweep-ov' | 'doublesweep-oh' | 'fan-t' | 'fan-r' | 'fan-b' | 'fan-l' | 'doublefan-fiv' | 'doublefan-fih' | 'singlesweep-cwtl' | 'singlesweep-cwbl' | 'singlesweep-cwbr' | 'singlesweep-cwtr' | 'doublesweep-pdtl' | 'doublesweep-pdbl' | 'saloondoor-t' | 'saloondoor-l' | 'saloondoor-b' | 'saloondoor-r' | 'windshield-r' | 'windshield-u' | 'windshield-v' | 'windshield-h' | 'crossfade' | 'fade-in';
export type GESVideoTestPatternNick = 'smpte' | 'snow' | 'black' | 'white' | 'red' | 'green' | 'blue' | 'checkers-1' | 'checkers-2' | 'checkers-4' | 'checkers-8' | 'circular' | 'blink' | 'smpte75' | 'zone-plate' | 'gamut' | 'chroma-zone-plate' | 'solid-color';

// ---------------------------------------------------------------------------
// Property surfaces — one interface per GIR DECLARATION, mirroring GIR's own
// inheritance rather than flattening per widget.
//
// The interfaces are load-bearing, not tidiness: `GtkBox` declares four properties
// of its own and `orientation` is not among them — it lives on `Gtk.Orientable`,
// because GObject installs interface properties on the implementor at runtime while
// GIR keeps them once, on the interface.
// ---------------------------------------------------------------------------

/** A #GESAsset in the GStreamer Editing Services represents a resources that can be used. */
export interface GESAssetProps extends GObjectProps, GESMetaContainerProps, GAsyncInitableProps, GInitableProps {
    /** The #GESExtractable object type that can be extracted from the asset. */
    'extractable-type'?: GObject.GType;
    /**
     * The ID of the asset.
     * @default NULL
     */
    id?: string;
    /** The default proxy for this asset, or %NULL if it has no proxy. */
    proxy?: GES.Asset | null;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GESAssetConstructOnly = GObjectConstructOnly | GESMetaContainerConstructOnly | GAsyncInitableConstructOnly | GInitableConstructOnly | 'extractable-type' | 'id';

/** ## Children Properties You can use the following children properties through the #ges_track_element_set_child_property and alike set of methods: - #gdouble `volume`: volume factor, 1.0=100%. */
export interface GESAudioSourceProps extends GESSourceProps, GESExtractableProps, GESMetaContainerProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GESAudioSourceConstructOnly = GESSourceConstructOnly | GESExtractableConstructOnly | GESMetaContainerConstructOnly;

/** Outputs a test audio stream using audiotestsrc. */
export interface GESAudioTestSourceProps extends GESAudioSourceProps, GESExtractableProps, GESMetaContainerProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GESAudioTestSourceConstructOnly = GESAudioSourceConstructOnly | GESExtractableConstructOnly | GESMetaContainerConstructOnly;

/** A #GESAudioTrack is a default audio #GESTrack, with a #GES_TRACK_TYPE_AUDIO #GESTrack:track-type and "audio/x-raw(ANY)" #GESTrack:caps. */
export interface GESAudioTrackProps extends GESTrackProps, GESMetaContainerProps, GstChildProxyProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GESAudioTrackConstructOnly = GESTrackConstructOnly | GESMetaContainerConstructOnly | GstChildProxyConstructOnly;

export interface GESAudioTransitionProps extends GESTransitionProps, GESExtractableProps, GESMetaContainerProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GESAudioTransitionConstructOnly = GESTransitionConstructOnly | GESExtractableConstructOnly | GESMetaContainerConstructOnly;

/** ### Children Properties {{ libs/GESVideoUriSource-children-props.md }} */
export interface GESAudioUriSourceProps extends GESAudioSourceProps, GESExtractableProps, GESMetaContainerProps {
    /**
     * The location of the file/resource to use.
     * @default NULL
     */
    uri?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GESAudioUriSourceConstructOnly = GESAudioSourceConstructOnly | GESExtractableConstructOnly | GESMetaContainerConstructOnly | 'uri';

/** A #GESBaseEffect is some operation that applies an effect to the data it receives. */
export interface GESBaseEffectProps extends GESOperationProps, GESExtractableProps, GESMetaContainerProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GESBaseEffectConstructOnly = GESOperationConstructOnly | GESExtractableConstructOnly | GESMetaContainerConstructOnly;

/** #GESBaseEffectClip-s are clips whose core elements are #GESBaseEffect-s. */
export interface GESBaseEffectClipProps extends GESOperationClipProps, GESExtractableProps, GESMetaContainerProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GESBaseEffectClipConstructOnly = GESOperationClipConstructOnly | GESExtractableConstructOnly | GESMetaContainerConstructOnly;

export interface GESBaseTransitionClipProps extends GESOperationClipProps, GESExtractableProps, GESMetaContainerProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GESBaseTransitionClipConstructOnly = GESOperationClipConstructOnly | GESExtractableConstructOnly | GESMetaContainerConstructOnly;

export interface GESBaseXmlFormatterProps extends GESFormatterProps, GESExtractableProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GESBaseXmlFormatterConstructOnly = GESFormatterConstructOnly | GESExtractableConstructOnly;

/** #GESClip-s are the core objects of a #GESLayer. */
export interface GESClipProps extends GESContainerProps, GESExtractableProps, GESMetaContainerProps {
    /**
     * The #GESTrackType-s that the clip supports, which it can create #GESTrackElement-s for.
     * @default GES_TRACK_TYPE_AUDIO | GES_TRACK_TYPE_VIDEO
     */
    'supported-formats'?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GESClipConstructOnly = GESContainerConstructOnly | GESExtractableConstructOnly | GESMetaContainerConstructOnly;

/** The #GESUriClipAsset is a special #GESAsset specilized in #GESClip. */
export interface GESClipAssetProps extends GESAssetProps, GESMetaContainerProps, GAsyncInitableProps, GInitableProps {
    /**
     * The formats supported by the asset.
     * @default GES_TRACK_TYPE_AUDIO | GES_TRACK_TYPE_VIDEO
     */
    'supported-formats'?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GESClipAssetConstructOnly = GESAssetConstructOnly | GESMetaContainerConstructOnly | GAsyncInitableConstructOnly | GInitableConstructOnly;

export interface GESCommandLineFormatterProps extends GESFormatterProps, GESExtractableProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GESCommandLineFormatterConstructOnly = GESFormatterConstructOnly | GESExtractableConstructOnly;

/** A #GESContainer is a timeline element that controls other #GESTimelineElement-s, which are its children. */
export interface GESContainerProps extends GESTimelineElementProps, GESExtractableProps, GESMetaContainerProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GESContainerConstructOnly = GESTimelineElementConstructOnly | GESExtractableConstructOnly | GESMetaContainerConstructOnly;

export interface GESDiscovererManagerProps extends GObjectProps {
    /**
     * The timeout (in milliseconds) for the #GstDiscoverer operations
     * @since 1.24
     * @default 60000000000
     */
    timeout?: bigint | number;
    /** @default FALSE */
    'use-cache'?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GESDiscovererManagerConstructOnly = GObjectConstructOnly;

/** Any GStreamer filter can be used as effects in GES. */
export interface GESEffectProps extends GESBaseEffectProps, GESExtractableProps, GESMetaContainerProps {
    /**
     * The description of the effect bin with a gst-launch-style pipeline description.
     * @default NULL
     */
    'bin-description'?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GESEffectConstructOnly = GESBaseEffectConstructOnly | GESExtractableConstructOnly | GESMetaContainerConstructOnly | 'bin-description';

/** This asset has a GStreamer bin-description as ID and is able to determine to what track type the effect should be used in. */
export interface GESEffectAssetProps extends GESTrackElementAssetProps, GESMetaContainerProps, GAsyncInitableProps, GInitableProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GESEffectAssetConstructOnly = GESTrackElementAssetConstructOnly | GESMetaContainerConstructOnly | GAsyncInitableConstructOnly | GInitableConstructOnly;

/** The effect will be applied on the sources that have lower priorities (higher number) between the inpoint and the end of it. */
export interface GESEffectClipProps extends GESBaseEffectClipProps, GESExtractableProps, GESMetaContainerProps {
    /**
     * The description of the audio track of the effect bin with a gst-launch-style pipeline description.
     * @default NULL
     */
    'audio-bin-description'?: string;
    /**
     * The description of the video track of the effect bin with a gst-launch-style pipeline description.
     * @default NULL
     */
    'video-bin-description'?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GESEffectClipConstructOnly = GESBaseEffectClipConstructOnly | GESExtractableConstructOnly | GESMetaContainerConstructOnly | 'audio-bin-description' | 'video-bin-description';

/** A #GObject that implements the #GESExtractable interface can be extracted from a #GESAsset using ges_asset_extract(). */
export interface GESExtractableProps extends GInitiallyUnownedProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GESExtractableConstructOnly = GInitiallyUnownedConstructOnly;

/** Base class for timeline data serialization and deserialization. */
export interface GESFormatterProps extends GInitiallyUnownedProps, GESExtractableProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GESFormatterConstructOnly = GInitiallyUnownedConstructOnly | GESExtractableConstructOnly;

/** A #GESGroup controls one or more #GESContainer-s (usually #GESClip-s, but it can also control other #GESGroup-s). */
export interface GESGroupProps extends GESContainerProps, GESExtractableProps, GESMetaContainerProps {
    /**
     * An overwrite of the #GESTimelineElement:duration property.
     * @default 18446744073709551615
     */
    duration?: bigint | number;
    /**
     * An overwrite of the #GESTimelineElement:in-point property.
     * @default 0
     */
    'in-point'?: bigint | number;
    /**
     * An overwrite of the #GESTimelineElement:max-duration property.
     * @default 18446744073709551615
     */
    'max-duration'?: bigint | number;
    /**
     * An overwrite of the #GESTimelineElement:priority property.
     * @default 0
     */
    priority?: number;
    /**
     * An overwrite of the #GESTimelineElement:start property.
     * @default 0
     */
    start?: bigint | number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GESGroupConstructOnly = GESContainerConstructOnly | GESExtractableConstructOnly | GESMetaContainerConstructOnly;

/** Outputs the video stream from a given file as a still frame. */
export interface GESImageSourceProps extends GESVideoSourceProps, GESExtractableProps, GESMetaContainerProps {
    /**
     * The location of the file/resource to use.
     * @default NULL
     */
    uri?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GESImageSourceConstructOnly = GESVideoSourceConstructOnly | GESExtractableConstructOnly | GESMetaContainerConstructOnly | 'uri';

/** #GESLayer-s are responsible for collecting and ordering #GESClip-s. */
export interface GESLayerProps extends GInitiallyUnownedProps, GESExtractableProps, GESMetaContainerProps {
    /**
     * Whether to automatically create a #GESTransitionClip whenever two #GESSource-s that both belong to a #GESClip in the layer overlap.
     * @default FALSE
     */
    'auto-transition'?: boolean;
    /**
     * The priority of the layer in the #GESTimeline.
     * @default 0
     * @deprecated since 1.16.0: use #ges_timeline_move_layer instead.
     */
    priority?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GESLayerConstructOnly = GInitiallyUnownedConstructOnly | GESExtractableConstructOnly | GESMetaContainerConstructOnly;

/** A timed #GESMetaContainer object. */
export interface GESMarkerProps extends GObjectProps, GESMetaContainerProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GESMarkerConstructOnly = GObjectConstructOnly | GESMetaContainerConstructOnly;

/** A #GESMarker can be colored by setting the #GES_META_MARKER_COLOR meta. */
export interface GESMarkerListProps extends GObjectProps {
    /**
     * Flags indicating how markers on the list should be treated.
     * @since 1.20
     * @default GES_MARKER_FLAG_NONE
     */
    flags?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GESMarkerListConstructOnly = GObjectConstructOnly;

/** A #GObject that implements #GESMetaContainer can have metadata set on it, that is data that is unimportant to its function within GES, but may hold some useful information. */
export interface GESMetaContainerProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GESMetaContainerConstructOnly = GObjectConstructOnly;

/** Outputs the video stream from a given image sequence. */
export interface GESMultiFileSourceProps extends GESVideoSourceProps, GESExtractableProps, GESMetaContainerProps {
    /**
     * The uri of the file/resource to use.
     * @default NULL
     */
    uri?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GESMultiFileSourceConstructOnly = GESVideoSourceConstructOnly | GESExtractableConstructOnly | GESMetaContainerConstructOnly | 'uri';

/** Base class for overlays, transitions, and effects */
export interface GESOperationProps extends GESTrackElementProps, GESExtractableProps, GESMetaContainerProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GESOperationConstructOnly = GESTrackElementConstructOnly | GESExtractableConstructOnly | GESMetaContainerConstructOnly;

/** Operations are any kind of object that both outputs AND consumes data. */
export interface GESOperationClipProps extends GESClipProps, GESExtractableProps, GESMetaContainerProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GESOperationClipConstructOnly = GESClipConstructOnly | GESExtractableConstructOnly | GESMetaContainerConstructOnly;

/** Overlays are objects which modify the underlying layer(s). */
export interface GESOverlayClipProps extends GESOperationClipProps, GESExtractableProps, GESMetaContainerProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GESOverlayClipConstructOnly = GESOperationClipConstructOnly | GESExtractableConstructOnly | GESMetaContainerConstructOnly;

/** A #GESPipeline can take an audio-video #GESTimeline and conveniently link its #GESTrack-s to an internal #playsink element, for preview/playback, and an internal #encodebin element, for rendering. */
export interface GESPipelineProps extends GstPipelineProps, GstChildProxyProps {
    /**
     * The audio filter(s) to apply during playback in preview mode, immediately before the #GESPipeline:audio-sink.
     * @since 1.6.0
     */
    'audio-filter'?: Gst.Element;
    /** The audio sink used for preview. */
    'audio-sink'?: Gst.Element;
    /**
     * The pipeline's mode.
     * @default GES_PIPELINE_MODE_PREVIEW_AUDIO | GES_PIPELINE_MODE_PREVIEW_VIDEO
     */
    mode?: number;
    /** The timeline used by this pipeline, whose content it will play and render, or %NULL if the pipeline does not yet have a timeline. */
    timeline?: GES.Timeline;
    /**
     * The video filter(s) to apply during playback in preview mode, immediately before the #GESPipeline:video-sink.
     * @since 1.6.0
     */
    'video-filter'?: Gst.Element;
    /** The video sink used for preview. */
    'video-sink'?: Gst.Element;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GESPipelineConstructOnly = GstPipelineConstructOnly | GstChildProxyConstructOnly;

/** This is a legacy format and you should avoid to use it. */
export interface GESPitiviFormatterProps extends GESFormatterProps, GESExtractableProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GESPitiviFormatterConstructOnly = GESFormatterConstructOnly | GESExtractableConstructOnly;

/** The #GESProject is used to control a set of #GESAsset and is a #GESAsset with `GES_TYPE_TIMELINE` as @extractable_type itself. */
export interface GESProjectProps extends GESAssetProps, GESMetaContainerProps, GAsyncInitableProps, GInitableProps {
    /** @default NULL */
    uri?: string | null;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GESProjectConstructOnly = GESAssetConstructOnly | GESMetaContainerConstructOnly | GAsyncInitableConstructOnly | GInitableConstructOnly | 'uri';

/** Base class for single-media sources */
export interface GESSourceProps extends GESTrackElementProps, GESExtractableProps, GESMetaContainerProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GESSourceConstructOnly = GESTrackElementConstructOnly | GESExtractableConstructOnly | GESMetaContainerConstructOnly;

/** #GESSourceClip-s are clips whose core elements are #GESSource-s. */
export interface GESSourceClipProps extends GESClipProps, GESExtractableProps, GESMetaContainerProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GESSourceClipConstructOnly = GESClipConstructOnly | GESExtractableConstructOnly | GESMetaContainerConstructOnly;

/** An asset types from which #GESSourceClip will be extracted */
export interface GESSourceClipAssetProps extends GESClipAssetProps, GESMetaContainerProps, GAsyncInitableProps, GInitableProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GESSourceClipAssetConstructOnly = GESClipAssetConstructOnly | GESMetaContainerConstructOnly | GAsyncInitableConstructOnly | GInitableConstructOnly;

/** Useful for testing purposes. */
export interface GESTestClipProps extends GESSourceClipProps, GESExtractableProps, GESMetaContainerProps {
    /**
     * The frequency to generate for audio track elements.
     * @default 440.000000
     */
    freq?: number;
    /**
     * Whether the sound will be played or not.
     * @default FALSE
     */
    mute?: boolean;
    /**
     * The volume for the audio track elements.
     * @default 1.000000
     */
    volume?: number;
    /**
     * Video pattern to display in video track elements.
     * @default GES_VIDEO_TEST_PATTERN_SMPTE
     */
    vpattern?: GESVideoTestPatternNick | GES.VideoTestPattern;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GESTestClipConstructOnly = GESSourceClipConstructOnly | GESExtractableConstructOnly | GESMetaContainerConstructOnly;

export interface GESTextOverlayProps extends GESOperationProps, GESExtractableProps, GESMetaContainerProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GESTextOverlayConstructOnly = GESOperationConstructOnly | GESExtractableConstructOnly | GESMetaContainerConstructOnly;

/** Renders text onto the next lower priority stream using textrender. */
export interface GESTextOverlayClipProps extends GESOverlayClipProps, GESExtractableProps, GESMetaContainerProps {
    /**
     * The color of the text
     * @default 4294967295
     */
    color?: number;
    /**
     * Pango font description string
     * @default Serif 36
     */
    'font-desc'?: string | null;
    /**
     * Horizontal alignment of the text
     * @default GES_TEXT_HALIGN_CENTER
     */
    halignment?: GESTextHAlignNick | GES.TextHAlign;
    /** The text to diplay */
    text?: string | null;
    /**
     * Vertical alignent of the text
     * @default GES_TEXT_VALIGN_BASELINE
     */
    valignment?: GESTextVAlignNick | GES.TextVAlign;
    /**
     * The horizontal position of the text
     * @default 0.500000
     */
    xpos?: number;
    /**
     * The vertical position of the text
     * @default 0.500000
     */
    ypos?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GESTextOverlayClipConstructOnly = GESOverlayClipConstructOnly | GESExtractableConstructOnly | GESMetaContainerConstructOnly;

/** #GESTimeline is the central object for any multimedia timeline. */
export interface GESTimelineProps extends GstBinProps, GESExtractableProps, GESMetaContainerProps, GstChildProxyProps {
    /**
     * Whether to automatically create a transition whenever two #GESSource-s overlap in a track of the timeline.
     * @default FALSE
     */
    'auto-transition'?: boolean;
    /**
     * The distance (in nanoseconds) at which a #GESTimelineElement being moved within the timeline should snap one of its #GESSource-s with another #GESSource-s edge.
     * @default 0
     */
    'snapping-distance'?: bigint | number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GESTimelineConstructOnly = GstBinConstructOnly | GESExtractableConstructOnly | GESMetaContainerConstructOnly | GstChildProxyConstructOnly;

/** A #GESTimelineElement will have some temporal extent in its corresponding #GESTimelineElement:timeline, controlled by its #GESTimelineElement:start and #GESTimelineElement:duration. */
export interface GESTimelineElementProps extends GInitiallyUnownedProps, GESExtractableProps, GESMetaContainerProps {
    /**
     * The duration that the element is in effect for in the timeline (a time difference in nanoseconds using the time coordinates of the timeline).
     * @default 18446744073709551615
     */
    duration?: bigint | number;
    /**
     * The initial offset to use internally when outputting content (in nanoseconds, but in the time coordinates of the internal content).
     * @default 0
     */
    'in-point'?: bigint | number;
    /**
     * The full duration of internal content that is available (a time difference in nanoseconds using the time coordinates of the internal content).
     * @default 18446744073709551615
     */
    'max-duration'?: bigint | number;
    /**
     * The name of the element.
     * @default NULL
     */
    name?: string | null;
    /** The parent container of the element. */
    parent?: GES.TimelineElement | null;
    /**
     * The priority of the element.
     * @default 0
     * @deprecated since 1.10: Priority management is now done by GES itself.
     */
    priority?: number;
    /**
     * Whether the element should be serialized.
     * @default TRUE
     */
    serialize?: boolean;
    /**
     * The starting position of the element in the timeline (in nanoseconds and in the time coordinates of the timeline).
     * @default 0
     */
    start?: bigint | number;
    /** The timeline that the element lies within. */
    timeline?: GES.Timeline | null;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GESTimelineElementConstructOnly = GInitiallyUnownedConstructOnly | GESExtractableConstructOnly | GESMetaContainerConstructOnly;

/** Renders the given text in the specified font, at specified position, and with the specified background pattern. */
export interface GESTitleClipProps extends GESSourceClipProps, GESExtractableProps, GESMetaContainerProps {
    /**
     * The background of the text
     * @default 4294967295
     * @deprecated since 1.6: use #ges_timeline_element_set_children_properties or #ges_timeline_element_get_children_properties instead.
     */
    background?: number;
    /**
     * The color of the text
     * @default 4294967295
     * @deprecated since 1.6: use #ges_timeline_element_set_children_properties or #ges_timeline_element_get_children_properties instead.
     */
    color?: number;
    /**
     * Pango font description string
     * @default Serif 36
     * @deprecated since 1.6: use #ges_timeline_element_set_children_properties or #ges_timeline_element_get_children_properties instead.
     */
    'font-desc'?: string | null;
    /**
     * Horizontal alignment of the text
     * @default GES_TEXT_HALIGN_CENTER
     * @deprecated since 1.6: use #ges_timeline_element_set_children_properties or #ges_timeline_element_get_children_properties instead.
     */
    halignment?: GESTextHAlignNick | GES.TextHAlign;
    /**
     * The text to diplay
     * @deprecated since 1.6: use #ges_timeline_element_set_children_properties or #ges_timeline_element_get_children_properties instead.
     */
    text?: string | null;
    /**
     * Vertical alignent of the text
     * @default GES_TEXT_VALIGN_BASELINE
     * @deprecated since 1.6: use #ges_timeline_element_set_children_properties or #ges_timeline_element_get_children_properties instead.
     */
    valignment?: GESTextVAlignNick | GES.TextVAlign;
    /**
     * The horizontal position of the text
     * @default 0.500000
     * @deprecated since 1.6: use #ges_timeline_element_set_children_properties or #ges_timeline_element_get_children_properties instead.
     */
    xpos?: number;
    /**
     * The vertical position of the text
     * @default 0.500000
     * @deprecated since 1.6: use #ges_timeline_element_set_children_properties or #ges_timeline_element_get_children_properties instead.
     */
    ypos?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GESTitleClipConstructOnly = GESSourceClipConstructOnly | GESExtractableConstructOnly | GESMetaContainerConstructOnly;

/** #GESTitleSource is a GESTimelineElement that implements the notion of titles in GES. */
export interface GESTitleSourceProps extends GESVideoSourceProps, GESExtractableProps, GESMetaContainerProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GESTitleSourceConstructOnly = GESVideoSourceConstructOnly | GESExtractableConstructOnly | GESMetaContainerConstructOnly;

/** A #GESTrack acts an output source for a #GESTimeline. */
export interface GESTrackProps extends GstBinProps, GESMetaContainerProps, GstChildProxyProps {
    /** The capabilities used to choose the output of the #GESTrack's elements. */
    caps?: Gst.Caps | null;
    /**
     * The #nlecomposition:id of the underlying #nlecomposition.
     * @since 1.18
     * @default NULL
     */
    id?: string;
    /**
     * Whether the track should support the mixing of #GESLayer data, such as composing the video data of each layer (when part of the video data is transparent, the next layer will become visible) or addin…
     * @default TRUE
     */
    mixing?: boolean;
    /** The capabilities that specifies the final output format of the #GESTrack. */
    'restriction-caps'?: Gst.Caps | null;
    /**
     * The track type of the track.
     * @default GES_TRACK_TYPE_CUSTOM
     */
    'track-type'?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GESTrackConstructOnly = GstBinConstructOnly | GESMetaContainerConstructOnly | GstChildProxyConstructOnly | 'caps' | 'track-type';

/** A #GESTrackElement is a #GESTimelineElement that specifically belongs to a single #GESTrack of its #GESTimelineElement:timeline. */
export interface GESTrackElementProps extends GESTimelineElementProps, GESExtractableProps, GESMetaContainerProps {
    /**
     * Whether the effect of the element should be applied in its #GESTrackElement:track.
     * @default TRUE
     */
    active?: boolean;
    /**
     * Whether the control sources on the element (see ges_track_element_set_control_source()) will be automatically updated whenever the #GESTimelineElement:in-point or out-point of the element change in v…
     * @since 1.18
     * @default TRUE
     */
    'auto-clamp-control-sources'?: boolean;
    /**
     * This property is used to determine whether the 'internal time' properties of the element have any meaning.
     * @since 1.18
     * @default FALSE
     */
    'has-internal-source'?: boolean;
    /**
     * The track type of the element, which determines the type of track the element can be added to (see #GESTrack:track-type).
     * @default GES_TRACK_TYPE_UNKNOWN
     */
    'track-type'?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GESTrackElementConstructOnly = GESTimelineElementConstructOnly | GESExtractableConstructOnly | GESMetaContainerConstructOnly;

export interface GESTrackElementAssetProps extends GESAssetProps, GESMetaContainerProps, GAsyncInitableProps, GInitableProps {
    /** @default GES_TRACK_TYPE_UNKNOWN */
    'track-type'?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GESTrackElementAssetConstructOnly = GESAssetConstructOnly | GESMetaContainerConstructOnly | GAsyncInitableConstructOnly | GInitableConstructOnly;

/** Base class for media transitions. */
export interface GESTransitionProps extends GESOperationProps, GESExtractableProps, GESMetaContainerProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GESTransitionConstructOnly = GESOperationConstructOnly | GESExtractableConstructOnly | GESMetaContainerConstructOnly;

/** Creates an object that mixes together the two underlying objects, A and B. */
export interface GESTransitionClipProps extends GESBaseTransitionClipProps, GESExtractableProps, GESMetaContainerProps {
    /**
     * a #GESVideoStandardTransitionType representing the wipe to use
     * @default GES_VIDEO_STANDARD_TRANSITION_TYPE_CROSSFADE
     */
    vtype?: GESVideoStandardTransitionTypeNick | GES.VideoStandardTransitionType;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GESTransitionClipConstructOnly = GESBaseTransitionClipConstructOnly | GESExtractableConstructOnly | GESMetaContainerConstructOnly;

/** Represents all the output streams from a particular uri. */
export interface GESUriClipProps extends GESSourceClipProps, GESExtractableProps, GESMetaContainerProps {
    /**
     * Whether this uri clip represents a still image or not.
     * @default FALSE
     */
    'is-image'?: boolean;
    /**
     * Whether the sound will be played or not.
     * @default FALSE
     */
    mute?: boolean;
    /** @default GES_TRACK_TYPE_UNKNOWN */
    'supported-formats'?: number;
    /**
     * The location of the file/resource to use.
     * @default NULL
     */
    uri?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GESUriClipConstructOnly = GESSourceClipConstructOnly | GESExtractableConstructOnly | GESMetaContainerConstructOnly | 'uri';

export interface GESUriClipAssetProps extends GESSourceClipAssetProps, GESMetaContainerProps, GAsyncInitableProps, GInitableProps {
    /**
     * The duration (in nanoseconds) of the media file
     * @default 18446744073709551615
     */
    duration?: bigint | number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GESUriClipAssetConstructOnly = GESSourceClipAssetConstructOnly | GESMetaContainerConstructOnly | GAsyncInitableConstructOnly | GInitableConstructOnly;

/** Asset to create a stream specific #GESSource for a media file. */
export interface GESUriSourceAssetProps extends GESTrackElementAssetProps, GESMetaContainerProps, GAsyncInitableProps, GInitableProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GESUriSourceAssetConstructOnly = GESTrackElementAssetConstructOnly | GESMetaContainerConstructOnly | GAsyncInitableConstructOnly | GInitableConstructOnly;

/** Base class for video sources */
export interface GESVideoSourceProps extends GESSourceProps, GESExtractableProps, GESMetaContainerProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GESVideoSourceConstructOnly = GESSourceConstructOnly | GESExtractableConstructOnly | GESMetaContainerConstructOnly;

/** ### Children Properties {{ libs/GESVideoTestSource-children-props.md }} */
export interface GESVideoTestSourceProps extends GESVideoSourceProps, GESExtractableProps, GESMetaContainerProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GESVideoTestSourceConstructOnly = GESVideoSourceConstructOnly | GESExtractableConstructOnly | GESMetaContainerConstructOnly;

/** A #GESVideoTrack is a default video #GESTrack, with a #GES_TRACK_TYPE_VIDEO #GESTrack:track-type and "video/x-raw(ANY)" #GESTrack:caps. */
export interface GESVideoTrackProps extends GESTrackProps, GESMetaContainerProps, GstChildProxyProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GESVideoTrackConstructOnly = GESTrackConstructOnly | GESMetaContainerConstructOnly | GstChildProxyConstructOnly;

export interface GESVideoTransitionProps extends GESTransitionProps, GESExtractableProps, GESMetaContainerProps {
    /**
     * This value represents the border width of the transition.
     * @default 0
     */
    border?: number;
    /**
     * This value represents the direction of the transition.
     * @default FALSE
     * @deprecated since 1.20: Use ges_timeline_element_[sg]et_child_property instead.
     */
    invert?: boolean;
    /** @default GES_VIDEO_STANDARD_TRANSITION_TYPE_CROSSFADE */
    'transition-type'?: GESVideoStandardTransitionTypeNick | GES.VideoStandardTransitionType;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GESVideoTransitionConstructOnly = GESTransitionConstructOnly | GESExtractableConstructOnly | GESMetaContainerConstructOnly;

/** ### Children Properties {{ libs/GESVideoUriSource-children-props.md }} */
export interface GESVideoUriSourceProps extends GESVideoSourceProps, GESExtractableProps, GESMetaContainerProps {
    /**
     * The location of the file/resource to use.
     * @default NULL
     */
    uri?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GESVideoUriSourceConstructOnly = GESVideoSourceConstructOnly | GESExtractableConstructOnly | GESMetaContainerConstructOnly | 'uri';

export interface GESXmlFormatterProps extends GESBaseXmlFormatterProps, GESExtractableProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GESXmlFormatterConstructOnly = GESBaseXmlFormatterConstructOnly | GESExtractableConstructOnly;

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
 * `<declaration GType>.<property>` -> the GType of that property's own type.
 *
 * `PROP_ENUMS` one case wider, and separate on purpose: that table promises the GType it names
 * has NUMBERS, and this one promises only that the GType is the property's. A host inferring a
 * type from a property — the middle of an uncast lookup chain, an uncast closure's return type —
 * reads this one; a host resolving a nick to a number reads that one.
 *
 * Absent means no GType can be stated, not that the property is scalar: `gchararray` is carried
 * like any other, so absence is readable as "unknown".
 */
export const PROP_TYPES: Readonly<Record<string, string>>;

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
