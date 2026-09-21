/**
 * The GIR-derived widget VOCABULARY for Gthree-1.0.
 *
 * GENERATED — do not edit. Provenance: Gthree-1.0 — prop(s) no TypeScript value satisfies: Gthree.Mesh.materials
 *
 * 74 instantiable GTypes (of which 0 concrete widgets), 74 declarations, 0 enum nick unions, 0 slot candidates.
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

import type GdkPixbuf from '@girs/gdkpixbuf-2.0';
import type Graphene from '@girs/graphene-1.0';
import type Gthree from './gthree-1.0.js';
import type cairo from '@girs/cairo-1.0';
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



// ---------------------------------------------------------------------------
// Property surfaces — one interface per GIR DECLARATION, mirroring GIR's own
// inheritance rather than flattening per widget.
//
// The interfaces are load-bearing, not tidiness: `GtkBox` declares four properties
// of its own and `orientation` is not among them — it lives on `Gtk.Orientable`,
// because GObject installs interface properties on the implementor at runtime while
// GIR keeps them once, on the interface.
// ---------------------------------------------------------------------------

export interface GthreeAmbientLightProps extends GthreeLightProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GthreeAmbientLightConstructOnly = GthreeLightConstructOnly;

export interface GthreeAnimationActionProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GthreeAnimationActionConstructOnly = GObjectConstructOnly;

export interface GthreeAnimationClipProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GthreeAnimationClipConstructOnly = GObjectConstructOnly;

export interface GthreeAnimationMixerProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GthreeAnimationMixerConstructOnly = GObjectConstructOnly;

export interface GthreeAttributeProps extends GthreeResourceProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GthreeAttributeConstructOnly = GthreeResourceConstructOnly;

export interface GthreeBloomPassProps extends GthreePassProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GthreeBloomPassConstructOnly = GthreePassConstructOnly;

export interface GthreeBoneProps extends GthreeObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GthreeBoneConstructOnly = GthreeObjectConstructOnly;

export interface GthreeCameraProps extends GthreeObjectProps {
    /** @default 2000.000000 */
    far?: number;
    /** @default 30.000000 */
    near?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GthreeCameraConstructOnly = GthreeObjectConstructOnly;

export interface GthreeClearPassProps extends GthreePassProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GthreeClearPassConstructOnly = GthreePassConstructOnly;

export interface GthreeColorKeyframeTrackProps extends GthreeKeyframeTrackProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GthreeColorKeyframeTrackConstructOnly = GthreeKeyframeTrackConstructOnly;

export interface GthreeCubeTextureProps extends GthreeTextureProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GthreeCubeTextureConstructOnly = GthreeTextureConstructOnly;

export interface GthreeCubicInterpolantProps extends GthreeInterpolantProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GthreeCubicInterpolantConstructOnly = GthreeInterpolantConstructOnly;

export interface GthreeDirectionalLightProps extends GthreeLightProps {
    target?: Gthree.Object;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GthreeDirectionalLightConstructOnly = GthreeLightConstructOnly;

export interface GthreeDirectionalLightShadowProps extends GthreeLightShadowProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GthreeDirectionalLightShadowConstructOnly = GthreeLightShadowConstructOnly;

export interface GthreeDiscreteInterpolantProps extends GthreeInterpolantProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GthreeDiscreteInterpolantConstructOnly = GthreeInterpolantConstructOnly;

export interface GthreeEffectComposerProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GthreeEffectComposerConstructOnly = GObjectConstructOnly;

export interface GthreeFogProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GthreeFogConstructOnly = GObjectConstructOnly;

export interface GthreeFullscreenQuadPassProps extends GthreePassProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GthreeFullscreenQuadPassConstructOnly = GthreePassConstructOnly;

export interface GthreeGeometryProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GthreeGeometryConstructOnly = GObjectConstructOnly;

export interface GthreeGroupProps extends GthreeObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GthreeGroupConstructOnly = GthreeObjectConstructOnly;

export interface GthreeHemisphereLightProps extends GthreeLightProps {
    'ground-color'?: Graphene.Vec3;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GthreeHemisphereLightConstructOnly = GthreeLightConstructOnly;

export interface GthreeInterpolantProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GthreeInterpolantConstructOnly = GObjectConstructOnly;

export interface GthreeInterpolantSettingsProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GthreeInterpolantSettingsConstructOnly = GObjectConstructOnly;

export interface GthreeKeyframeTrackProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GthreeKeyframeTrackConstructOnly = GObjectConstructOnly;

export interface GthreeLightProps extends GthreeObjectProps {
    color?: Graphene.Vec3;
    /** @default 1.000000 */
    intensity?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GthreeLightConstructOnly = GthreeObjectConstructOnly;

export interface GthreeLightShadowProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GthreeLightShadowConstructOnly = GObjectConstructOnly;

export interface GthreeLineProps extends GthreeObjectProps {
    geometry?: Gthree.Geometry;
    material?: Gthree.Material;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GthreeLineConstructOnly = GthreeObjectConstructOnly | 'geometry' | 'material';

export interface GthreeLineBasicMaterialProps extends GthreeMaterialProps {
    color?: Graphene.Vec3;
    /** @default 1.000000 */
    'line-width'?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GthreeLineBasicMaterialConstructOnly = GthreeMaterialConstructOnly;

export interface GthreeLineSegmentsProps extends GthreeLineProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GthreeLineSegmentsConstructOnly = GthreeLineConstructOnly;

export interface GthreeLinearInterpolantProps extends GthreeInterpolantProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GthreeLinearInterpolantConstructOnly = GthreeInterpolantConstructOnly;

export interface GthreeLoaderProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GthreeLoaderConstructOnly = GObjectConstructOnly;

export interface GthreeMaterialProps extends GObjectProps {
    /** @default 0.000000 */
    'alpha-test'?: number;
    /** @default FALSE */
    'clip-intersection'?: boolean;
    /** @default TRUE */
    fog?: boolean;
    /** @default 1.000000 */
    opacity?: number;
    /** @default FALSE */
    transparent?: boolean;
    /** @default FALSE */
    'vertex-colors'?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GthreeMaterialConstructOnly = GObjectConstructOnly;

export interface GthreeMeshProps extends GthreeObjectProps {
    geometry?: Gthree.Geometry;
    materials?: never[];
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GthreeMeshConstructOnly = GthreeObjectConstructOnly | 'geometry';

export interface GthreeMeshBasicMaterialProps extends GthreeMeshMaterialProps {
    color?: Graphene.Vec3;
    'env-map'?: Gthree.Texture;
    map?: Gthree.Texture;
    /** @default 1.000000 */
    reflectivity?: number;
    /** @default 0.980000 */
    'refraction-ratio'?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GthreeMeshBasicMaterialConstructOnly = GthreeMeshMaterialConstructOnly;

export interface GthreeMeshDepthMaterialProps extends GthreeMeshMaterialProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GthreeMeshDepthMaterialConstructOnly = GthreeMeshMaterialConstructOnly;

export interface GthreeMeshDistanceMaterialProps extends GthreeMeshMaterialProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GthreeMeshDistanceMaterialConstructOnly = GthreeMeshMaterialConstructOnly;

export interface GthreeMeshLambertMaterialProps extends GthreeMeshMaterialProps {
    color?: Graphene.Vec3;
    'emissive-color'?: Graphene.Vec3;
    'env-map'?: Gthree.Texture;
    map?: Gthree.Texture;
    /** @default 1.000000 */
    reflectivity?: number;
    /** @default 0.980000 */
    'refraction-ratio'?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GthreeMeshLambertMaterialConstructOnly = GthreeMeshMaterialConstructOnly;

export interface GthreeMeshMaterialProps extends GthreeMaterialProps {
    /** @default FALSE */
    'morph-normals'?: boolean;
    /** @default FALSE */
    'morph-targets'?: boolean;
    /** @default FALSE */
    skinning?: boolean;
    /** @default FALSE */
    wireframe?: boolean;
    /** @default 1.000000 */
    'wireframe-line-width'?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GthreeMeshMaterialConstructOnly = GthreeMaterialConstructOnly;

export interface GthreeMeshNormalMaterialProps extends GthreeMeshMaterialProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GthreeMeshNormalMaterialConstructOnly = GthreeMeshMaterialConstructOnly;

export interface GthreeMeshPhongMaterialProps extends GthreeMeshMaterialProps {
    color?: Graphene.Vec3;
    'emissive-color'?: Graphene.Vec3;
    'env-map'?: Gthree.Texture;
    /** @default FALSE */
    'flat-shading'?: boolean;
    map?: Gthree.Texture;
    'normal-map'?: Gthree.Texture;
    'normal-scale'?: Graphene.Vec2;
    /** @default 1.000000 */
    reflectivity?: number;
    /** @default 0.980000 */
    'refraction-ratio'?: number;
    /** @default 30.000000 */
    shininess?: number;
    'specular-color'?: Graphene.Vec3;
    'specular-map'?: Gthree.Texture;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GthreeMeshPhongMaterialConstructOnly = GthreeMeshMaterialConstructOnly;

export interface GthreeMeshSpecglosMaterialProps extends GthreeMeshMaterialProps {
    'alpha-map'?: Gthree.Texture;
    'ao-map'?: Gthree.Texture;
    /** @default 1.000000 */
    'ao-map-intensity'?: number;
    'bump-map'?: Gthree.Texture;
    /** @default 1.000000 */
    'bump-scale'?: number;
    color?: Graphene.Vec3;
    /** @default 1.000000 */
    'displacement-bias'?: number;
    'displacement-map'?: Gthree.Texture;
    /** @default 1.000000 */
    'displacement-scale'?: number;
    'emissive-color'?: Graphene.Vec3;
    /** @default 1.000000 */
    'emissive-intensity'?: number;
    'emissive-map'?: Gthree.Texture;
    'env-map'?: Gthree.Texture;
    /** @default 1.000000 */
    'env-map-intensity'?: number;
    /** @default 1.000000 */
    glossiness?: number;
    'glossiness-map'?: Gthree.Texture;
    'light-map'?: Gthree.Texture;
    /** @default 1.000000 */
    'light-map-intensity'?: number;
    map?: Gthree.Texture;
    'normal-map'?: Gthree.Texture;
    'normal-scale'?: Graphene.Vec2;
    /** @default 0.980000 */
    'refraction-ratio'?: number;
    'specular-factor'?: Graphene.Vec3;
    'specular-map'?: Gthree.Texture;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GthreeMeshSpecglosMaterialConstructOnly = GthreeMeshMaterialConstructOnly;

export interface GthreeMeshStandardMaterialProps extends GthreeMeshMaterialProps {
    'alpha-map'?: Gthree.Texture;
    'ao-map'?: Gthree.Texture;
    /** @default 1.000000 */
    'ao-map-intensity'?: number;
    'bump-map'?: Gthree.Texture;
    /** @default 1.000000 */
    'bump-scale'?: number;
    color?: Graphene.Vec3;
    /** @default 1.000000 */
    'displacement-bias'?: number;
    'displacement-map'?: Gthree.Texture;
    /** @default 1.000000 */
    'displacement-scale'?: number;
    'emissive-color'?: Graphene.Vec3;
    /** @default 1.000000 */
    'emissive-intensity'?: number;
    'emissive-map'?: Gthree.Texture;
    'env-map'?: Gthree.Texture;
    /** @default 1.000000 */
    'env-map-intensity'?: number;
    'light-map'?: Gthree.Texture;
    /** @default 1.000000 */
    'light-map-intensity'?: number;
    map?: Gthree.Texture;
    /** @default 1.000000 */
    metalness?: number;
    'metalness-map'?: Gthree.Texture;
    'normal-map'?: Gthree.Texture;
    'normal-scale'?: Graphene.Vec2;
    /** @default 0.980000 */
    'refraction-ratio'?: number;
    /** @default 1.000000 */
    roughness?: number;
    'roughness-map'?: Gthree.Texture;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GthreeMeshStandardMaterialConstructOnly = GthreeMeshMaterialConstructOnly;

export interface GthreeMeshToonMaterialProps extends GthreeMeshMaterialProps {
    'alpha-map'?: Gthree.Texture;
    'ao-map'?: Gthree.Texture;
    /** @default 1.000000 */
    'ao-map-intensity'?: number;
    'bump-map'?: Gthree.Texture;
    /** @default 1.000000 */
    'bump-scale'?: number;
    color?: Graphene.Vec3;
    /** @default 1.000000 */
    'displacement-bias'?: number;
    'displacement-map'?: Gthree.Texture;
    /** @default 1.000000 */
    'displacement-scale'?: number;
    'emissive-color'?: Graphene.Vec3;
    /** @default 1.000000 */
    'emissive-intensity'?: number;
    'emissive-map'?: Gthree.Texture;
    'gradient-map'?: Gthree.Texture;
    'light-map'?: Gthree.Texture;
    /** @default 1.000000 */
    'light-map-intensity'?: number;
    map?: Gthree.Texture;
    'normal-map'?: Gthree.Texture;
    'normal-scale'?: Graphene.Vec2;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GthreeMeshToonMaterialConstructOnly = GthreeMeshMaterialConstructOnly;

export interface GthreeNumberKeyframeTrackProps extends GthreeKeyframeTrackProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GthreeNumberKeyframeTrackConstructOnly = GthreeKeyframeTrackConstructOnly;

export interface GthreeObjectProps extends GObjectProps {
    /** @default TRUE */
    visible?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GthreeObjectConstructOnly = GObjectConstructOnly;

export interface GthreeOrthographicCameraProps extends GthreeCameraProps {
    /** @default -1.000000 */
    bottom?: number;
    /** @default -1.000000 */
    left?: number;
    /** @default 1.000000 */
    right?: number;
    /** @default 1.000000 */
    top?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GthreeOrthographicCameraConstructOnly = GthreeCameraConstructOnly;

export interface GthreePassProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GthreePassConstructOnly = GObjectConstructOnly;

export interface GthreePerspectiveCameraProps extends GthreeCameraProps {
    /** @default 1.000000 */
    aspect?: number;
    /** @default 50.000000 */
    fov?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GthreePerspectiveCameraConstructOnly = GthreeCameraConstructOnly;

export interface GthreePlaneHelperProps extends GthreeObjectProps {
    color?: Graphene.Vec3;
    plane?: Graphene.Plane;
    /** @default 1.000000 */
    size?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GthreePlaneHelperConstructOnly = GthreeObjectConstructOnly;

export interface GthreePointLightProps extends GthreeLightProps {
    /** @default 1.000000 */
    decay?: number;
    /** @default 0.000000 */
    distance?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GthreePointLightConstructOnly = GthreeLightConstructOnly;

export interface GthreePointsProps extends GthreeObjectProps {
    geometry?: Gthree.Geometry;
    material?: Gthree.Material;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GthreePointsConstructOnly = GthreeObjectConstructOnly | 'geometry';

export interface GthreePointsMaterialProps extends GthreeMaterialProps {
    color?: Graphene.Vec3;
    map?: Gthree.Texture;
    /** @default 0.000000 */
    size?: number;
    /** @default FALSE */
    'size-attenuation'?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GthreePointsMaterialConstructOnly = GthreeMaterialConstructOnly;

export interface GthreeProgramProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GthreeProgramConstructOnly = GObjectConstructOnly;

export interface GthreeQuaternionInterpolantProps extends GthreeInterpolantProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GthreeQuaternionInterpolantConstructOnly = GthreeInterpolantConstructOnly;

export interface GthreeQuaternionKeyframeTrackProps extends GthreeKeyframeTrackProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GthreeQuaternionKeyframeTrackConstructOnly = GthreeKeyframeTrackConstructOnly;

export interface GthreeRaycasterProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GthreeRaycasterConstructOnly = GObjectConstructOnly;

export interface GthreeRenderPassProps extends GthreePassProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GthreeRenderPassConstructOnly = GthreePassConstructOnly;

export interface GthreeRenderTargetProps extends GthreeResourceProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GthreeRenderTargetConstructOnly = GthreeResourceConstructOnly;

export interface GthreeRendererProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GthreeRendererConstructOnly = GObjectConstructOnly;

export interface GthreeResourceProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GthreeResourceConstructOnly = GObjectConstructOnly;

export interface GthreeSceneProps extends GthreeObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GthreeSceneConstructOnly = GthreeObjectConstructOnly;

export interface GthreeShaderProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GthreeShaderConstructOnly = GObjectConstructOnly;

export interface GthreeShaderMaterialProps extends GthreeMeshMaterialProps {
    shader?: Gthree.Shader;
    /** @default FALSE */
    'use-lights'?: boolean;
    /** @default FALSE */
    'vertex-colors'?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GthreeShaderMaterialConstructOnly = GthreeMeshMaterialConstructOnly | 'shader';

export interface GthreeShaderPassProps extends GthreePassProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GthreeShaderPassConstructOnly = GthreePassConstructOnly;

export interface GthreeSkeletonProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GthreeSkeletonConstructOnly = GObjectConstructOnly;

export interface GthreeSkeletonHelperProps extends GthreeLineSegmentsProps {
    root?: Gthree.Object;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GthreeSkeletonHelperConstructOnly = GthreeLineSegmentsConstructOnly | 'root';

export interface GthreeSkinnedMeshProps extends GthreeMeshProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GthreeSkinnedMeshConstructOnly = GthreeMeshConstructOnly;

export interface GthreeSpotLightProps extends GthreeLightProps {
    /** @default 1.047198 */
    angle?: number;
    /** @default 1.000000 */
    decay?: number;
    /** @default 0.000000 */
    distance?: number;
    /** @default 0.000000 */
    penumbra?: number;
    target?: Gthree.Object;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GthreeSpotLightConstructOnly = GthreeLightConstructOnly;

export interface GthreeSpotLightShadowProps extends GthreeLightShadowProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GthreeSpotLightShadowConstructOnly = GthreeLightShadowConstructOnly;

export interface GthreeSpriteProps extends GthreeObjectProps {
    material?: Gthree.Material;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GthreeSpriteConstructOnly = GthreeObjectConstructOnly;

export interface GthreeSpriteMaterialProps extends GthreeMaterialProps {
    color?: Graphene.Vec3;
    map?: Gthree.Texture;
    /** @default 0.000000 */
    rotation?: number;
    /** @default FALSE */
    'size-attenuation'?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GthreeSpriteMaterialConstructOnly = GthreeMaterialConstructOnly;

export interface GthreeTextureProps extends GthreeResourceProps {
    pixbuf?: GdkPixbuf.Pixbuf;
    surface?: cairo.Surface;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GthreeTextureConstructOnly = GthreeResourceConstructOnly | 'pixbuf' | 'surface';

export interface GthreeUniformsProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GthreeUniformsConstructOnly = GObjectConstructOnly;

export interface GthreeVectorKeyframeTrackProps extends GthreeKeyframeTrackProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GthreeVectorKeyframeTrackConstructOnly = GthreeKeyframeTrackConstructOnly;

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
