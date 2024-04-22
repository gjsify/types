/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './gthree-1.0-ambient.d.ts';

/**
 * Gthree-1.0
 */

import type cairo from '@girs/cairo-1.0';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type Graphene from '@girs/graphene-1.0';
import type GdkPixbuf from '@girs/gdkpixbuf-2.0';
import type Gio from '@girs/gio-2.0';
import type GModule from '@girs/gmodule-2.0';

export namespace Gthree {
    enum AttributeType {
        DOUBLE,
        FLOAT,
        UINT32,
        INT32,
        UINT16,
        INT16,
        UINT8,
        INT8,
    }
    enum BindMode {
        ATTACHED,
        DETACHED,
    }
    enum BlendMode {
        NO,
        NORMAL,
        ADDITIVE,
        SUBTRACTIVE,
        MULTIPLY,
        CUSTOM,
    }
    enum CullFace {
        NONE,
        FRONT,
        BACK,
        FRONT_BACK,
    }
    enum DataType {
        UNSIGNED_BYTE,
        BYTE,
    }
    enum DepthPackingFormat {
        BASIC,
        RGBA,
    }
    enum DrawMode {
        TRIANGLES,
        TRIANGLE_STRIP,
        TRIANGLE_FAN,
    }
    enum EncodingFormat {
        LINEAR,
        SRGB,
        GAMMA,
        RGBE,
        LOGLUV,
        RGBM7,
        RGBM16,
        RGBD,
    }
    enum EndingMode {
        ZERO_CURVATURE,
        ZERO_SLOPE,
        WRAP_AROUND,
    }
    enum Filter {
        NEAREST,
        NEAREST_MIPMAP_NEAREST,
        NEAREST_MIPMAP_LINEAR,
        LINEAR,
        LINEAR_MIPMAP_NEAREST,
        LINEAR_MIPMAP_LINEAR,
    }
    enum FogStyle {
        LINEAR,
        EXP2,
    }
    enum FrontFaceDirection {
        CW,
        CCW,
    }
    enum InterpolationMode {
        DISCRETE,
        LINEAR,
        SMOOTH,
    }
    enum LoaderError {
        LOADER_ERROR_FAIL,
    }
    enum LoopMode {
        ONCE,
        REPEAT,
        PINGPONG,
    }
    enum Mapping {
        UV,
        CUBE_REFLECTION,
        CUBE_REFRACTION,
        SPHERICAL_REFLECTION,
        SPHERICAL_REFRACTION,
    }
    enum NormalMapType {
        TANGENT_SPACE,
        OBJECT_SPACE,
    }
    enum Operation {
        MULTIPLY,
        MIX,
        ADD,
    }
    enum Precision {
        LOW,
        MEDIUM,
        HIGH,
    }
    enum ShadingType {
        NONE,
        FLAT,
        SMOOTH,
    }
    enum ShadowMapType {
        BASIC,
        PCF,
        PCF_SOFT,
    }
    enum Side {
        FRONT,
        BACK,
        DOUBLE,
    }
    enum TextureFormat {
        RGBA,
        RGB,
    }
    enum UniformType {
        INT,
        FLOAT,
        FLOAT2,
        FLOAT3,
        FLOAT4,
        INT_ARRAY,
        INT3_ARRAY,
        FLOAT_ARRAY,
        FLOAT2_ARRAY,
        FLOAT3_ARRAY,
        FLOAT4_ARRAY,
        MATRIX3,
        MATRIX4,
        VECTOR2,
        VECTOR3,
        VECTOR4,
        VEC2_ARRAY,
        VEC3_ARRAY,
        VEC4_ARRAY,
        MATRIX3_ARRAY,
        MATRIX4_ARRAY,
        TEXTURE,
        TEXTURE_ARRAY,
        UNIFORMS_ARRAY,
    }
    enum ValueType {
        COLOR,
        NUMBER,
        QUATERNION,
        VECTOR,
    }
    enum Wrapping {
        REPEAT,
        CLAMP,
        MIRRORED,
    }
    interface BeforeRenderCallback {
        (object: Object, scene: Scene, camera: Camera): void;
    }
    interface TraverseCallback {
        (object: Object): boolean;
    }
    module AmbientLight {
        // Constructor properties interface

        interface ConstructorProps extends Light.ConstructorProps {}
    }

    class AmbientLight extends Light {
        static $gtype: GObject.GType<AmbientLight>;

        // Constructors of Gthree.AmbientLight

        constructor(properties?: Partial<AmbientLight.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](color: Graphene.Vec3): AmbientLight;
        // Conflicted with Gthree.Light.new

        static ['new'](...args: never[]): any;
    }

    module AnimationAction {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    class AnimationAction extends GObject.Object {
        static $gtype: GObject.GType<AnimationAction>;

        // Constructors of Gthree.AnimationAction

        constructor(properties?: Partial<AnimationAction.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](mixer: AnimationMixer, clip: AnimationClip, local_root: Object): AnimationAction;

        // Own methods of Gthree.AnimationAction

        cross_fade_from(fade_out_action: AnimationAction, duration: number, warp: boolean): void;
        cross_fade_to(fade_in_action: AnimationAction, duration: number, warp: boolean): void;
        fade_in(duration: number): void;
        fade_out(duration: number): void;
        get_effective_time_scale(): number;
        get_effective_weight(): number;
        get_enabled(): boolean;
        get_paused(): boolean;
        get_time(): number;
        get_time_scale(): number;
        get_weight(): number;
        halt(duration: number): void;
        is_running(): boolean;
        is_scheduled(): boolean;
        play(): void;
        reset(): void;
        set_duration(duration: number): void;
        set_effective_time_scale(time_scale: number): void;
        set_effective_weight(weight: number): void;
        set_enabled(enabled: boolean): void;
        set_loop_mode(loop_mode: LoopMode, repetitions: number): void;
        set_paused(paused: boolean): void;
        set_time(time: number): void;
        start_at(time: number): void;
        stop(): void;
        stop_fading(): void;
        stop_warping(): void;
        sync_with(other_action: AnimationAction): void;
        warp(start_time_scale: number, end_time_scale: number, duration: number): void;
    }

    module AnimationClip {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    class AnimationClip extends GObject.Object {
        static $gtype: GObject.GType<AnimationClip>;

        // Constructors of Gthree.AnimationClip

        constructor(properties?: Partial<AnimationClip.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](name: string, duration: number): AnimationClip;

        // Own methods of Gthree.AnimationClip

        add_track(track: KeyframeTrack): void;
        get_duration(): number;
        get_n_tracks(): number;
        get_name(): string;
        optimize(): void;
        reset_duration(): void;
        trim(): void;
    }

    module AnimationMixer {
        // Signal callback interfaces

        interface Finished {
            (object: AnimationAction, p0: number): void;
        }

        interface Loop {
            (object: AnimationAction, p0: number): void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    class AnimationMixer extends GObject.Object {
        static $gtype: GObject.GType<AnimationMixer>;

        // Constructors of Gthree.AnimationMixer

        constructor(properties?: Partial<AnimationMixer.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](root: Object): AnimationMixer;

        // Own signals of Gthree.AnimationMixer

        connect(id: string, callback: (...args: any[]) => any): number;
        connect_after(id: string, callback: (...args: any[]) => any): number;
        emit(id: string, ...args: any[]): void;
        connect(signal: 'finished', callback: (_source: this, object: AnimationAction, p0: number) => void): number;
        connect_after(
            signal: 'finished',
            callback: (_source: this, object: AnimationAction, p0: number) => void,
        ): number;
        emit(signal: 'finished', object: AnimationAction, p0: number): void;
        connect(signal: 'loop', callback: (_source: this, object: AnimationAction, p0: number) => void): number;
        connect_after(signal: 'loop', callback: (_source: this, object: AnimationAction, p0: number) => void): number;
        emit(signal: 'loop', object: AnimationAction, p0: number): void;

        // Own methods of Gthree.AnimationMixer

        get_time(): number;
        get_time_scale(): number;
        set_time(time: number): void;
        set_time_scale(time_scale: number): void;
        stop_all_action(): void;
        uncache_action(clip: AnimationClip, optional_root: Object): void;
        uncache_clip(clip: AnimationClip): void;
        uncache_root(object: Object): void;
        update(delta_time: number): void;
    }

    module Attribute {
        // Constructor properties interface

        interface ConstructorProps extends Resource.ConstructorProps {}
    }

    class Attribute extends Resource {
        static $gtype: GObject.GType<Attribute>;

        // Constructors of Gthree.Attribute

        constructor(properties?: Partial<Attribute.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](
            name: string,
            type: AttributeType,
            count: number,
            item_size: number,
            normalized: boolean,
        ): Attribute;

        static new_from_float(name: string, data: number, count: number, item_size: number): Attribute;

        static new_from_uint16(name: string, data: number, count: number, item_size: number): Attribute;

        static new_from_uint32(name: string, data: number, count: number, item_size: number): Attribute;

        static new_with_array(name: string, array: AttributeArray, normalized: boolean): Attribute;

        static new_with_array_interleaved(
            name: string,
            array: AttributeArray,
            normalized: boolean,
            item_size: number,
            item_offset: number,
            count: number,
        ): Attribute;

        // Own static methods of Gthree.Attribute

        static type_length(type: AttributeType): number;

        // Own methods of Gthree.Attribute

        copy_at(index: number, source: Attribute, source_index: number, n_items: number): void;
        get_attribute_type(): AttributeType;
        get_count(): number;
        get_dynamic(): boolean;
        get_item_offset(): number;
        get_item_size(): number;
        get_matrix(index: number, matrix: Graphene.Matrix): void;
        get_name(): string;
        get_normalized(): boolean;
        get_point3d(index: number, point: Graphene.Point3D): void;
        get_stride(): number;
        get_uint(index: number): number;
        get_uint16(index: number): number;
        get_uint32(index: number): number;
        get_uint8(index: number): number;
        get_vec2(index: number, vec2: Graphene.Vec2): void;
        get_vec3(index: number, vec3: Graphene.Vec3): void;
        get_vec4(index: number, vec4: Graphene.Vec4): void;
        get_xyz(index: number, x: number, y: number, z: number): void;
        get_xyzw(index: number, x: number, y: number, z: number, w: number): void;
        peek_double(): number;
        peek_double_at(index: number): number;
        peek_float(): number;
        peek_float_at(index: number): number;
        peek_int16(): number;
        peek_int16_at(index: number): number;
        peek_int32(): number;
        peek_int32_at(index: number): number;
        peek_int8(): number;
        peek_int8_at(index: number): number;
        peek_point3d(): Graphene.Point3D;
        peek_point3d_at(index: number): Graphene.Point3D;
        peek_uint16(): number;
        peek_uint16_at(index: number): number;
        peek_uint32(): number;
        peek_uint32_at(index: number): number;
        peek_uint8(): number;
        peek_uint8_at(index: number): number;
        set_array(array: AttributeArray): void;
        set_dynamic(dynamic: boolean): void;
        set_needs_update(): void;
        set_point3d(index: number, point: Graphene.Point3D): void;
        set_uint(index: number, value: number): void;
        set_uint16(index: number, value: number): void;
        set_uint32(index: number, value: number): void;
        set_uint8(index: number, value: number): void;
        set_vec2(index: number, vec2: Graphene.Vec2): void;
        set_vec3(index: number, vec3: Graphene.Vec3): void;
        set_vec4(index: number, vec4: Graphene.Vec4): void;
        set_w(index: number, w: number): void;
        set_x(index: number, x: number): void;
        set_xy(index: number, x: number, y: number): void;
        set_xyz(index: number, x: number, y: number, z: number): void;
        set_xyzw(index: number, x: number, y: number, z: number, w: number): void;
        set_y(index: number, y: number): void;
        set_z(index: number, z: number): void;
        update(renderer: Renderer, buffer_type: number): void;
    }

    module BloomPass {
        // Constructor properties interface

        interface ConstructorProps extends Pass.ConstructorProps {}
    }

    class BloomPass extends Pass {
        static $gtype: GObject.GType<BloomPass>;

        // Constructors of Gthree.BloomPass

        constructor(properties?: Partial<BloomPass.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](strength: number, sigma: number, resolution: number): BloomPass;
    }

    module Bone {
        // Constructor properties interface

        interface ConstructorProps extends Object.ConstructorProps {}
    }

    class Bone extends Object {
        static $gtype: GObject.GType<Bone>;

        // Constructors of Gthree.Bone

        constructor(properties?: Partial<Bone.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): Bone;
    }

    module Camera {
        // Constructor properties interface

        interface ConstructorProps extends Object.ConstructorProps {
            far: number;
            near: number;
        }
    }

    class Camera extends Object {
        static $gtype: GObject.GType<Camera>;

        // Own properties of Gthree.Camera

        get far(): number;
        set far(val: number);
        get near(): number;
        set near(val: number);

        // Constructors of Gthree.Camera

        constructor(properties?: Partial<Camera.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Own virtual methods of Gthree.Camera

        vfunc_update(): void;

        // Own methods of Gthree.Camera

        get_far(): number;
        get_near(): number;
        get_proj_screen_matrix(res: Graphene.Matrix): void;
        /**
         * ...
         * @returns ...
         */
        get_projection_matrix(): Graphene.Matrix;
        get_world_inverse_matrix(): Graphene.Matrix;
        set_far(far: number): void;
        set_near(near: number): void;
        unproject(screen_point: Graphene.Vec3, res: Graphene.Vec3): Graphene.Vec3;
        /**
         * ...
         * @param screen_point
         * @returns ...
         */
        unproject_point3d(screen_point: Graphene.Point3D): [Graphene.Point3D, Graphene.Point3D];
        update(): void;
        update_matrix(): void;
    }

    module ClearPass {
        // Constructor properties interface

        interface ConstructorProps extends Pass.ConstructorProps {}
    }

    class ClearPass extends Pass {
        static $gtype: GObject.GType<ClearPass>;

        // Constructors of Gthree.ClearPass

        constructor(properties?: Partial<ClearPass.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](color: Graphene.Vec3): ClearPass;

        // Own methods of Gthree.ClearPass

        set_clear_depth(clear_depth: boolean): void;
    }

    module ColorKeyframeTrack {
        // Constructor properties interface

        interface ConstructorProps extends KeyframeTrack.ConstructorProps {}
    }

    class ColorKeyframeTrack extends KeyframeTrack {
        static $gtype: GObject.GType<ColorKeyframeTrack>;

        // Constructors of Gthree.ColorKeyframeTrack

        constructor(properties?: Partial<ColorKeyframeTrack.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](name: string, times: AttributeArray, values: AttributeArray): ColorKeyframeTrack;
    }

    module CubeTexture {
        // Constructor properties interface

        interface ConstructorProps extends Texture.ConstructorProps {}
    }

    class CubeTexture extends Texture {
        static $gtype: GObject.GType<CubeTexture>;

        // Constructors of Gthree.CubeTexture

        constructor(properties?: Partial<CubeTexture.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](
            px: GdkPixbuf.Pixbuf,
            nx: GdkPixbuf.Pixbuf,
            py: GdkPixbuf.Pixbuf,
            ny: GdkPixbuf.Pixbuf,
            pz: GdkPixbuf.Pixbuf,
            nz: GdkPixbuf.Pixbuf,
        ): CubeTexture;
        // Conflicted with Gthree.Texture.new

        static ['new'](...args: never[]): any;

        static new_from_array(pixbufs: GdkPixbuf.Pixbuf): CubeTexture;
    }

    module CubicInterpolant {
        // Constructor properties interface

        interface ConstructorProps extends Interpolant.ConstructorProps {}
    }

    class CubicInterpolant extends Interpolant {
        static $gtype: GObject.GType<CubicInterpolant>;

        // Constructors of Gthree.CubicInterpolant

        constructor(properties?: Partial<CubicInterpolant.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](parameter_positions: AttributeArray, sample_values: AttributeArray): CubicInterpolant;
    }

    module DirectionalLight {
        // Constructor properties interface

        interface ConstructorProps extends Light.ConstructorProps {
            target: Object;
        }
    }

    class DirectionalLight extends Light {
        static $gtype: GObject.GType<DirectionalLight>;

        // Own properties of Gthree.DirectionalLight

        get target(): Object;
        set target(val: Object);

        // Constructors of Gthree.DirectionalLight

        constructor(properties?: Partial<DirectionalLight.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](color: Graphene.Vec3, intensity: number): DirectionalLight;
        // Conflicted with Gthree.Light.new

        static ['new'](...args: never[]): any;

        // Own methods of Gthree.DirectionalLight

        set_target(target: Object): void;
    }

    module DirectionalLightShadow {
        // Constructor properties interface

        interface ConstructorProps extends LightShadow.ConstructorProps {}
    }

    class DirectionalLightShadow extends LightShadow {
        static $gtype: GObject.GType<DirectionalLightShadow>;

        // Constructors of Gthree.DirectionalLightShadow

        constructor(properties?: Partial<DirectionalLightShadow.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;
    }

    module DiscreteInterpolant {
        // Constructor properties interface

        interface ConstructorProps extends Interpolant.ConstructorProps {}
    }

    class DiscreteInterpolant extends Interpolant {
        static $gtype: GObject.GType<DiscreteInterpolant>;

        // Constructors of Gthree.DiscreteInterpolant

        constructor(properties?: Partial<DiscreteInterpolant.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](parameter_positions: AttributeArray, sample_values: AttributeArray): DiscreteInterpolant;
    }

    module EffectComposer {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    class EffectComposer extends GObject.Object {
        static $gtype: GObject.GType<EffectComposer>;

        // Constructors of Gthree.EffectComposer

        constructor(properties?: Partial<EffectComposer.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): EffectComposer;

        // Own methods of Gthree.EffectComposer

        add_pass(pass: Pass): void;
        render(renderer: Renderer, delta_time: number): void;
        reset(renderer: Renderer, render_target: RenderTarget): void;
        set_size(width: number, height: number): void;
    }

    module Fog {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    class Fog extends GObject.Object {
        static $gtype: GObject.GType<Fog>;

        // Constructors of Gthree.Fog

        constructor(properties?: Partial<Fog.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static new_exp2(color: Graphene.Vec3, density: number): Fog;

        static new_linear(color: Graphene.Vec3, near: number, far: number): Fog;

        // Own methods of Gthree.Fog

        get_color(): Graphene.Vec3;
        get_density(): number;
        get_far(): number;
        get_near(): number;
        get_style(): FogStyle;
        set_color(color: Graphene.Vec3): void;
        set_density(density: number): void;
        set_far(far: number): void;
        set_near(near: number): void;
        set_style(style: FogStyle): void;
    }

    module FullscreenQuadPass {
        // Constructor properties interface

        interface ConstructorProps extends Pass.ConstructorProps {}
    }

    class FullscreenQuadPass extends Pass {
        static $gtype: GObject.GType<FullscreenQuadPass>;

        // Constructors of Gthree.FullscreenQuadPass

        constructor(properties?: Partial<FullscreenQuadPass.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](material: Material): FullscreenQuadPass;

        // Own methods of Gthree.FullscreenQuadPass

        set_material(material: Material): void;
    }

    module Geometry {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    class Geometry extends GObject.Object {
        static $gtype: GObject.GType<Geometry>;

        // Own fields of Gthree.Geometry

        influences: any[];

        // Constructors of Gthree.Geometry

        constructor(properties?: Partial<Geometry.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): Geometry;

        static new_box(
            width: number,
            height: number,
            depth: number,
            width_segments: number,
            height_segments: number,
            depth_segments: number,
        ): Geometry;

        static new_circle(radius: number, segments: number): Geometry;

        static new_circle_full(radius: number, segments: number, thetaStart: number, thetaLength: number): Geometry;

        static new_cylinder(radius: number, length: number): Geometry;

        static new_cylinder_full(
            radiusTop: number,
            radiusBottom: number,
            height: number,
            radialSegments: number,
            heightSegments: number,
            openEnded: boolean,
            thetaStart: number,
            thetaLength: number,
        ): Geometry;

        static new_decal_from_mesh(
            mesh: Mesh,
            position: Graphene.Vec3,
            orientation: Graphene.Quaternion,
            size: Graphene.Vec3,
        ): Geometry;

        static new_dodecahedron(radius: number, detail: number): Geometry;

        static new_icosahedron(radius: number, detail: number): Geometry;

        static new_octahedron(radius: number, detail: number): Geometry;

        static new_plane(width: number, height: number, width_segments: number, height_segments: number): Geometry;

        static new_sphere(radius: number, widthSegments: number, heightSegments: number): Geometry;

        static new_sphere_full(
            radius: number,
            widthSegments: number,
            heightSegments: number,
            phiStart: number,
            phiLength: number,
            thetaStart: number,
            thetaLength: number,
        ): Geometry;

        static new_tetrahedron(radius: number, detail: number): Geometry;

        static new_torus(radius: number, tube: number): Geometry;

        static new_torus_full(
            radius: number,
            tube: number,
            radialSegments: number,
            tubularSegments: number,
            arc: number,
        ): Geometry;

        static new_torus_knot(
            radius: number,
            tube_radius: number,
            tube_segments: number,
            radial_segments: number,
            p: number,
            q: number,
        ): Geometry;

        // Own methods of Gthree.Geometry

        add_group(start: number, count: number, material_index: number): void;
        add_morph_attribute(name: string, attribute: Attribute): void;
        clear_groups(): void;
        compute_vertex_normals(): void;
        get_bounding_box(): Graphene.Box;
        get_bounding_sphere(): Graphene.Sphere;
        get_draw_range_count(): number;
        get_draw_range_start(): number;
        get_n_groups(): number;
        get_position_count(): number;
        get_vertex_count(): number;
        has_attribute(name: string): boolean;
        has_morph_attributes(): boolean;
        invalidate_bounds(): void;
        normalize_normals(): void;
        remove_attribute(name: string): void;
        remove_morph_attributes(name: string): void;
        set_bounding_box(box: Graphene.Box): void;
        set_bounding_sphere(sphere: Graphene.Sphere): void;
        set_draw_range(start: number, count: number): void;
        set_index(index: Attribute): void;
    }

    module Group {
        // Constructor properties interface

        interface ConstructorProps extends Object.ConstructorProps {}
    }

    class Group extends Object {
        static $gtype: GObject.GType<Group>;

        // Constructors of Gthree.Group

        constructor(properties?: Partial<Group.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): Group;
    }

    module HemisphereLight {
        // Constructor properties interface

        interface ConstructorProps extends Light.ConstructorProps {
            ground_color: Graphene.Vec3;
            groundColor: Graphene.Vec3;
        }
    }

    class HemisphereLight extends Light {
        static $gtype: GObject.GType<HemisphereLight>;

        // Own properties of Gthree.HemisphereLight

        get ground_color(): Graphene.Vec3;
        set ground_color(val: Graphene.Vec3);
        get groundColor(): Graphene.Vec3;
        set groundColor(val: Graphene.Vec3);

        // Constructors of Gthree.HemisphereLight

        constructor(properties?: Partial<HemisphereLight.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](sky_color: Graphene.Vec3, ground_color: Graphene.Vec3, intensity: number): HemisphereLight;
        // Conflicted with Gthree.Light.new

        static ['new'](...args: never[]): any;
    }

    module Interpolant {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    class Interpolant extends GObject.Object {
        static $gtype: GObject.GType<Interpolant>;

        // Constructors of Gthree.Interpolant

        constructor(properties?: Partial<Interpolant.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Own virtual methods of Gthree.Interpolant

        vfunc_interpolate(i1: number, t0: number, t: number, t1: number, dest: AttributeArray): void;
        vfunc_interval_changed(i1: number, t0: number, t1: number): void;

        // Own methods of Gthree.Interpolant

        get_end_ending_mode(): EndingMode;
        get_n_positions(): number;
        get_sample_size(): number;
        get_sample_type(): AttributeType;
        get_start_ending_mode(): EndingMode;
        set_settings(settings: InterpolantSettings): void;
    }

    module InterpolantSettings {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    class InterpolantSettings extends GObject.Object {
        static $gtype: GObject.GType<InterpolantSettings>;

        // Constructors of Gthree.InterpolantSettings

        constructor(properties?: Partial<InterpolantSettings.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): InterpolantSettings;

        // Own methods of Gthree.InterpolantSettings

        get_end_ending_mode(): EndingMode;
        get_start_ending_mode(): EndingMode;
        set_end_ending_mode(mode: EndingMode): void;
        set_start_ending_mode(mode: EndingMode): void;
    }

    module KeyframeTrack {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    class KeyframeTrack extends GObject.Object {
        static $gtype: GObject.GType<KeyframeTrack>;

        // Constructors of Gthree.KeyframeTrack

        constructor(properties?: Partial<KeyframeTrack.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Own methods of Gthree.KeyframeTrack

        get_end_time(): number;
        get_name(): string;
        get_value_size(): number;
        get_value_type(): ValueType;
        optimize(): void;
        scale(time_scale: number): void;
        set_interpolation(interpolation: InterpolationMode): void;
        trim(start_time: number, end_time: number): void;
    }

    module Light {
        // Constructor properties interface

        interface ConstructorProps extends Object.ConstructorProps {
            color: Graphene.Vec3;
            intensity: number;
        }
    }

    class Light extends Object {
        static $gtype: GObject.GType<Light>;

        // Own properties of Gthree.Light

        get color(): Graphene.Vec3;
        set color(val: Graphene.Vec3);
        get intensity(): number;
        set intensity(val: number);

        // Constructors of Gthree.Light

        constructor(properties?: Partial<Light.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): Light;

        // Own virtual methods of Gthree.Light

        vfunc_setup(camera: Camera, light_setup: LightSetup): void;

        // Own methods of Gthree.Light

        get_color(): Graphene.Vec3;
        get_intensity(): number;
        set_color(color: Graphene.Vec3): void;
        set_intensity(intensity: number): void;
    }

    module LightShadow {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    class LightShadow extends GObject.Object {
        static $gtype: GObject.GType<LightShadow>;

        // Constructors of Gthree.LightShadow

        constructor(properties?: Partial<LightShadow.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Own methods of Gthree.LightShadow

        get_bias(): number;
        get_map_height(): number;
        get_map_width(): number;
        get_radius(): number;
        set_bias(bias: number): void;
        set_map_size(width: number, height: number): void;
        set_radius(radiuso: number): void;
    }

    module Line {
        // Constructor properties interface

        interface ConstructorProps extends Object.ConstructorProps {
            geometry: Geometry;
            material: Material;
        }
    }

    class Line extends Object {
        static $gtype: GObject.GType<Line>;

        // Own properties of Gthree.Line

        get geometry(): Geometry;
        get material(): Material;

        // Constructors of Gthree.Line

        constructor(properties?: Partial<Line.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](geometry: Geometry, material: Material): Line;
        // Conflicted with Gthree.Object.new

        static ['new'](...args: never[]): any;
    }

    module LineBasicMaterial {
        // Constructor properties interface

        interface ConstructorProps extends Material.ConstructorProps {
            color: Graphene.Vec3;
            line_width: number;
            lineWidth: number;
        }
    }

    class LineBasicMaterial extends Material {
        static $gtype: GObject.GType<LineBasicMaterial>;

        // Own properties of Gthree.LineBasicMaterial

        get color(): Graphene.Vec3;
        set color(val: Graphene.Vec3);
        get line_width(): number;
        set line_width(val: number);
        get lineWidth(): number;
        set lineWidth(val: number);

        // Constructors of Gthree.LineBasicMaterial

        constructor(properties?: Partial<LineBasicMaterial.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): LineBasicMaterial;

        // Own methods of Gthree.LineBasicMaterial

        get_color(): Graphene.Vec3;
        get_line_width(): number;
        set_color(color: Graphene.Vec3): void;
        set_line_width(line_width: number): void;
    }

    module LineSegments {
        // Constructor properties interface

        interface ConstructorProps extends Line.ConstructorProps {}
    }

    class LineSegments extends Line {
        static $gtype: GObject.GType<LineSegments>;

        // Constructors of Gthree.LineSegments

        constructor(properties?: Partial<LineSegments.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](geometry: Geometry, material: Material): LineSegments;
        // Conflicted with Gthree.Object.new

        static ['new'](...args: never[]): any;
    }

    module LinearInterpolant {
        // Constructor properties interface

        interface ConstructorProps extends Interpolant.ConstructorProps {}
    }

    class LinearInterpolant extends Interpolant {
        static $gtype: GObject.GType<LinearInterpolant>;

        // Constructors of Gthree.LinearInterpolant

        constructor(properties?: Partial<LinearInterpolant.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](parameter_positions: AttributeArray, sample_values: AttributeArray): LinearInterpolant;
    }

    module Loader {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    class Loader extends GObject.Object {
        static $gtype: GObject.GType<Loader>;

        // Constructors of Gthree.Loader

        constructor(properties?: Partial<Loader.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Own static methods of Gthree.Loader

        static error_quark(): GLib.Quark;

        // Own methods of Gthree.Loader

        get_n_animations(): number;
        get_n_materials(): number;
        get_n_scenes(): number;
    }

    module Material {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            alpha_test: number;
            alphaTest: number;
            clip_intersection: boolean;
            clipIntersection: boolean;
            fog: boolean;
            opacity: number;
            transparent: boolean;
            vertex_colors: boolean;
            vertexColors: boolean;
        }
    }

    class Material extends GObject.Object {
        static $gtype: GObject.GType<Material>;

        // Own properties of Gthree.Material

        get alpha_test(): number;
        set alpha_test(val: number);
        get alphaTest(): number;
        set alphaTest(val: number);
        get clip_intersection(): boolean;
        set clip_intersection(val: boolean);
        get clipIntersection(): boolean;
        set clipIntersection(val: boolean);
        get fog(): boolean;
        set fog(val: boolean);
        get opacity(): number;
        set opacity(val: number);
        get transparent(): boolean;
        set transparent(val: boolean);
        get vertex_colors(): boolean;
        set vertex_colors(val: boolean);
        get vertexColors(): boolean;
        set vertexColors(val: boolean);

        // Constructors of Gthree.Material

        constructor(properties?: Partial<Material.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Own virtual methods of Gthree.Material

        vfunc_load_default_attribute(attribute_location: number, attribute: GLib.Quark): void;
        vfunc_needs_camera_pos(): boolean;
        vfunc_needs_lights(): boolean;
        vfunc_needs_view_matrix(): boolean;
        vfunc_set_params(params: ProgramParameters): void;
        vfunc_set_uniforms(uniforms: Uniforms, camera: Camera, renderer: Renderer): void;

        // Own methods of Gthree.Material

        get_alpha_test(): number;
        get_blend_mode(equation: number, src_factor: number, dst_factor: number): BlendMode;
        get_clip_intersection(): boolean;
        get_clipping_plane(index: number): Graphene.Plane;
        get_depth_test(): boolean;
        get_depth_write(): boolean;
        get_fog(): boolean;
        get_is_transparent(): boolean;
        get_is_visible(): boolean;
        get_n_clipping_planes(): number;
        get_name(): string;
        get_opacity(): number;
        get_polygon_offset(factor: number, units: number): boolean;
        get_side(): Side;
        get_vertex_colors(): boolean;
        load_default_attribute(attribute_location: number, attribute: GLib.Quark): void;
        needs_camera_pos(): boolean;
        needs_lights(): boolean;
        needs_view_matrix(): boolean;
        set_alpha_test(alpha_test: number): void;
        set_blend_mode(mode: BlendMode, equation: number, src_factor: number, dst_factor: number): void;
        set_clip_intersection(clip_intersection: boolean): void;
        set_clipping_plane(index: number, plane: Graphene.Plane): number;
        set_depth_test(depth_test: boolean): void;
        set_depth_write(depth_write: boolean): void;
        set_fog(fog: boolean): void;
        set_is_transparent(is_transparent: boolean): void;
        set_is_visible(is_visible: boolean): void;
        set_name(name: string): void;
        set_needs_update(): void;
        set_opacity(opacity: number): void;
        set_params(params: ProgramParameters): void;
        set_polygon_offset(polygon_offset: boolean, factor: number, units: number): void;
        set_side(side: Side): void;
        set_uniforms(uniforms: Uniforms, camera: Camera, renderer: Renderer): void;
        set_vertex_colors(vertex_colors: boolean): void;
    }

    module Mesh {
        // Constructor properties interface

        interface ConstructorProps extends Object.ConstructorProps {
            geometry: Geometry;
            materials: any[];
        }
    }

    class Mesh extends Object {
        static $gtype: GObject.GType<Mesh>;

        // Own properties of Gthree.Mesh

        get geometry(): Geometry;
        get materials(): any[];
        set materials(val: any[]);

        // Constructors of Gthree.Mesh

        constructor(properties?: Partial<Mesh.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](geometry: Geometry, material: Material): Mesh;
        // Conflicted with Gthree.Object.new

        static ['new'](...args: never[]): any;

        // Own methods of Gthree.Mesh

        add_material(material: Material): void;
        get_draw_mode(): DrawMode;
        get_n_materials(): number;
        has_morph_targets(): boolean;
        set_draw_mode(mode: DrawMode): void;
        set_material(index: number, material: Material): void;
        update_morph_targets(): void;
    }

    module MeshBasicMaterial {
        // Constructor properties interface

        interface ConstructorProps extends MeshMaterial.ConstructorProps {
            color: Graphene.Vec3;
            env_map: Texture;
            envMap: Texture;
            map: Texture;
            reflectivity: number;
            refraction_ratio: number;
            refractionRatio: number;
        }
    }

    class MeshBasicMaterial extends MeshMaterial {
        static $gtype: GObject.GType<MeshBasicMaterial>;

        // Own properties of Gthree.MeshBasicMaterial

        get color(): Graphene.Vec3;
        set color(val: Graphene.Vec3);
        get env_map(): Texture;
        set env_map(val: Texture);
        get envMap(): Texture;
        set envMap(val: Texture);
        get map(): Texture;
        set map(val: Texture);
        get reflectivity(): number;
        set reflectivity(val: number);
        get refraction_ratio(): number;
        set refraction_ratio(val: number);
        get refractionRatio(): number;
        set refractionRatio(val: number);

        // Constructors of Gthree.MeshBasicMaterial

        constructor(properties?: Partial<MeshBasicMaterial.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): MeshBasicMaterial;

        // Own methods of Gthree.MeshBasicMaterial

        get_color(): Graphene.Vec3;
        get_combine(): Operation;
        get_reflectivity(): number;
        get_refraction_ratio(): number;
        set_color(color: Graphene.Vec3): void;
        set_combine(combine: Operation): void;
        set_env_map(texture: Texture): void;
        set_map(texture: Texture): void;
        set_reflectivity(reflectivity: number): void;
        set_refraction_ratio(ratio: number): void;
    }

    module MeshDepthMaterial {
        // Constructor properties interface

        interface ConstructorProps extends MeshMaterial.ConstructorProps {}
    }

    class MeshDepthMaterial extends MeshMaterial {
        static $gtype: GObject.GType<MeshDepthMaterial>;

        // Constructors of Gthree.MeshDepthMaterial

        constructor(properties?: Partial<MeshDepthMaterial.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): MeshDepthMaterial;

        // Own methods of Gthree.MeshDepthMaterial

        get_depth_packing_format(): DepthPackingFormat;
        set_depth_packing_format(format: DepthPackingFormat): void;
    }

    module MeshDistanceMaterial {
        // Constructor properties interface

        interface ConstructorProps extends MeshMaterial.ConstructorProps {}
    }

    class MeshDistanceMaterial extends MeshMaterial {
        static $gtype: GObject.GType<MeshDistanceMaterial>;

        // Constructors of Gthree.MeshDistanceMaterial

        constructor(properties?: Partial<MeshDistanceMaterial.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): MeshDistanceMaterial;

        // Own methods of Gthree.MeshDistanceMaterial

        get_far_distance(): number;
        get_near_distance(): number;
        get_reference_point(): Graphene.Vec3;
        set_far_distance(far_distance: number): void;
        set_near_distance(near_distance: number): void;
        set_reference_point(ref_point: Graphene.Vec3): void;
    }

    module MeshLambertMaterial {
        // Constructor properties interface

        interface ConstructorProps extends MeshMaterial.ConstructorProps {
            color: Graphene.Vec3;
            emissive_color: Graphene.Vec3;
            emissiveColor: Graphene.Vec3;
            env_map: Texture;
            envMap: Texture;
            map: Texture;
            reflectivity: number;
            refraction_ratio: number;
            refractionRatio: number;
        }
    }

    class MeshLambertMaterial extends MeshMaterial {
        static $gtype: GObject.GType<MeshLambertMaterial>;

        // Own properties of Gthree.MeshLambertMaterial

        get color(): Graphene.Vec3;
        set color(val: Graphene.Vec3);
        get emissive_color(): Graphene.Vec3;
        set emissive_color(val: Graphene.Vec3);
        get emissiveColor(): Graphene.Vec3;
        set emissiveColor(val: Graphene.Vec3);
        get env_map(): Texture;
        set env_map(val: Texture);
        get envMap(): Texture;
        set envMap(val: Texture);
        get map(): Texture;
        set map(val: Texture);
        get reflectivity(): number;
        set reflectivity(val: number);
        get refraction_ratio(): number;
        set refraction_ratio(val: number);
        get refractionRatio(): number;
        set refractionRatio(val: number);

        // Constructors of Gthree.MeshLambertMaterial

        constructor(properties?: Partial<MeshLambertMaterial.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): MeshLambertMaterial;

        // Own methods of Gthree.MeshLambertMaterial

        get_color(): Graphene.Vec3;
        get_combine(): Operation;
        get_emissive_color(): Graphene.Vec3;
        get_reflectivity(): number;
        get_refraction_ratio(): number;
        set_color(color: Graphene.Vec3): void;
        set_combine(combine: Operation): void;
        set_emissive_color(color: Graphene.Vec3): void;
        set_env_map(texture: Texture): void;
        set_map(texture: Texture): void;
        set_reflectivity(reflectivity: number): void;
        set_refraction_ratio(ratio: number): void;
    }

    module MeshMaterial {
        // Constructor properties interface

        interface ConstructorProps extends Material.ConstructorProps {
            morph_normals: boolean;
            morphNormals: boolean;
            morph_targets: boolean;
            morphTargets: boolean;
            skinning: boolean;
            wireframe: boolean;
            wireframe_line_width: number;
            wireframeLineWidth: number;
        }
    }

    class MeshMaterial extends Material {
        static $gtype: GObject.GType<MeshMaterial>;

        // Own properties of Gthree.MeshMaterial

        get morph_normals(): boolean;
        set morph_normals(val: boolean);
        get morphNormals(): boolean;
        set morphNormals(val: boolean);
        get morph_targets(): boolean;
        set morph_targets(val: boolean);
        get morphTargets(): boolean;
        set morphTargets(val: boolean);
        get skinning(): boolean;
        set skinning(val: boolean);
        get wireframe(): boolean;
        set wireframe(val: boolean);
        get wireframe_line_width(): number;
        set wireframe_line_width(val: number);
        get wireframeLineWidth(): number;
        set wireframeLineWidth(val: number);

        // Constructors of Gthree.MeshMaterial

        constructor(properties?: Partial<MeshMaterial.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Own methods of Gthree.MeshMaterial

        get_is_wireframe(): boolean;
        get_morph_normals(): boolean;
        get_morph_targets(): boolean;
        get_skinning(): boolean;
        get_wireframe_line_width(): number;
        set_is_wireframe(is_wireframe: boolean): void;
        set_morph_normals(value: boolean): void;
        set_morph_targets(value: boolean): void;
        set_skinning(value: boolean): void;
        set_wireframe_line_width(line_width: number): void;
    }

    module MeshNormalMaterial {
        // Constructor properties interface

        interface ConstructorProps extends MeshMaterial.ConstructorProps {}
    }

    class MeshNormalMaterial extends MeshMaterial {
        static $gtype: GObject.GType<MeshNormalMaterial>;

        // Constructors of Gthree.MeshNormalMaterial

        constructor(properties?: Partial<MeshNormalMaterial.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): MeshNormalMaterial;

        // Own methods of Gthree.MeshNormalMaterial

        get_shading_type(): ShadingType;
        set_shading_type(shading_type: ShadingType): void;
    }

    module MeshPhongMaterial {
        // Constructor properties interface

        interface ConstructorProps extends MeshMaterial.ConstructorProps {
            color: Graphene.Vec3;
            emissive_color: Graphene.Vec3;
            emissiveColor: Graphene.Vec3;
            env_map: Texture;
            envMap: Texture;
            flat_shading: boolean;
            flatShading: boolean;
            map: Texture;
            normal_map: Texture;
            normalMap: Texture;
            normal_scale: Graphene.Vec2;
            normalScale: Graphene.Vec2;
            reflectivity: number;
            refraction_ratio: number;
            refractionRatio: number;
            shininess: number;
            specular_color: Graphene.Vec3;
            specularColor: Graphene.Vec3;
            specular_map: Texture;
            specularMap: Texture;
        }
    }

    class MeshPhongMaterial extends MeshMaterial {
        static $gtype: GObject.GType<MeshPhongMaterial>;

        // Own properties of Gthree.MeshPhongMaterial

        get color(): Graphene.Vec3;
        set color(val: Graphene.Vec3);
        get emissive_color(): Graphene.Vec3;
        set emissive_color(val: Graphene.Vec3);
        get emissiveColor(): Graphene.Vec3;
        set emissiveColor(val: Graphene.Vec3);
        get env_map(): Texture;
        set env_map(val: Texture);
        get envMap(): Texture;
        set envMap(val: Texture);
        get flat_shading(): boolean;
        set flat_shading(val: boolean);
        get flatShading(): boolean;
        set flatShading(val: boolean);
        get map(): Texture;
        set map(val: Texture);
        get normal_map(): Texture;
        set normal_map(val: Texture);
        get normalMap(): Texture;
        set normalMap(val: Texture);
        get normal_scale(): Graphene.Vec2;
        set normal_scale(val: Graphene.Vec2);
        get normalScale(): Graphene.Vec2;
        set normalScale(val: Graphene.Vec2);
        get reflectivity(): number;
        set reflectivity(val: number);
        get refraction_ratio(): number;
        set refraction_ratio(val: number);
        get refractionRatio(): number;
        set refractionRatio(val: number);
        get shininess(): number;
        set shininess(val: number);
        get specular_color(): Graphene.Vec3;
        set specular_color(val: Graphene.Vec3);
        get specularColor(): Graphene.Vec3;
        set specularColor(val: Graphene.Vec3);
        get specular_map(): Texture;
        set specular_map(val: Texture);
        get specularMap(): Texture;
        set specularMap(val: Texture);

        // Constructors of Gthree.MeshPhongMaterial

        constructor(properties?: Partial<MeshPhongMaterial.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): MeshPhongMaterial;

        // Own methods of Gthree.MeshPhongMaterial

        get_color(): Graphene.Vec3;
        get_combine(): Operation;
        get_emissive_color(): Graphene.Vec3;
        get_flat_shading(): boolean;
        get_normal_map_scale(): Graphene.Vec2;
        get_normal_map_type(): NormalMapType;
        get_reflectivity(): number;
        get_refraction_ratio(): number;
        get_shininess(): number;
        get_specular_color(): Graphene.Vec3;
        set_color(color: Graphene.Vec3): void;
        set_combine(combine: Operation): void;
        set_emissive_color(color: Graphene.Vec3): void;
        set_env_map(texture: Texture): void;
        set_flat_shading(flat_shading: boolean): void;
        set_map(texture: Texture): void;
        set_normal_map(texture: Texture): void;
        set_normal_map_scale(scale: Graphene.Vec2): void;
        set_normal_map_type(type: NormalMapType): void;
        set_reflectivity(reflectivity: number): void;
        set_refraction_ratio(ratio: number): void;
        set_shininess(shininess: number): void;
        set_specular_color(color: Graphene.Vec3): void;
        set_specular_map(texture: Texture): void;
    }

    module MeshSpecglosMaterial {
        // Constructor properties interface

        interface ConstructorProps extends MeshMaterial.ConstructorProps {
            alpha_map: Texture;
            alphaMap: Texture;
            ao_map: Texture;
            aoMap: Texture;
            ao_map_intensity: number;
            aoMapIntensity: number;
            bump_map: Texture;
            bumpMap: Texture;
            bump_scale: number;
            bumpScale: number;
            color: Graphene.Vec3;
            displacement_bias: number;
            displacementBias: number;
            displacement_map: Texture;
            displacementMap: Texture;
            displacement_scale: number;
            displacementScale: number;
            emissive_color: Graphene.Vec3;
            emissiveColor: Graphene.Vec3;
            emissive_intensity: number;
            emissiveIntensity: number;
            emissive_map: Texture;
            emissiveMap: Texture;
            env_map: Texture;
            envMap: Texture;
            env_map_intensity: number;
            envMapIntensity: number;
            glossiness: number;
            glossiness_map: Texture;
            glossinessMap: Texture;
            light_map: Texture;
            lightMap: Texture;
            light_map_intensity: number;
            lightMapIntensity: number;
            map: Texture;
            normal_map: Texture;
            normalMap: Texture;
            normal_scale: Graphene.Vec2;
            normalScale: Graphene.Vec2;
            refraction_ratio: number;
            refractionRatio: number;
            specular_factor: Graphene.Vec3;
            specularFactor: Graphene.Vec3;
            specular_map: Texture;
            specularMap: Texture;
        }
    }

    class MeshSpecglosMaterial extends MeshMaterial {
        static $gtype: GObject.GType<MeshSpecglosMaterial>;

        // Own properties of Gthree.MeshSpecglosMaterial

        get alpha_map(): Texture;
        set alpha_map(val: Texture);
        get alphaMap(): Texture;
        set alphaMap(val: Texture);
        get ao_map(): Texture;
        set ao_map(val: Texture);
        get aoMap(): Texture;
        set aoMap(val: Texture);
        get ao_map_intensity(): number;
        set ao_map_intensity(val: number);
        get aoMapIntensity(): number;
        set aoMapIntensity(val: number);
        get bump_map(): Texture;
        set bump_map(val: Texture);
        get bumpMap(): Texture;
        set bumpMap(val: Texture);
        get bump_scale(): number;
        set bump_scale(val: number);
        get bumpScale(): number;
        set bumpScale(val: number);
        get color(): Graphene.Vec3;
        set color(val: Graphene.Vec3);
        get displacement_bias(): number;
        set displacement_bias(val: number);
        get displacementBias(): number;
        set displacementBias(val: number);
        get displacement_map(): Texture;
        set displacement_map(val: Texture);
        get displacementMap(): Texture;
        set displacementMap(val: Texture);
        get displacement_scale(): number;
        set displacement_scale(val: number);
        get displacementScale(): number;
        set displacementScale(val: number);
        get emissive_color(): Graphene.Vec3;
        set emissive_color(val: Graphene.Vec3);
        get emissiveColor(): Graphene.Vec3;
        set emissiveColor(val: Graphene.Vec3);
        get emissive_intensity(): number;
        set emissive_intensity(val: number);
        get emissiveIntensity(): number;
        set emissiveIntensity(val: number);
        get emissive_map(): Texture;
        set emissive_map(val: Texture);
        get emissiveMap(): Texture;
        set emissiveMap(val: Texture);
        get env_map(): Texture;
        set env_map(val: Texture);
        get envMap(): Texture;
        set envMap(val: Texture);
        get env_map_intensity(): number;
        set env_map_intensity(val: number);
        get envMapIntensity(): number;
        set envMapIntensity(val: number);
        get glossiness(): number;
        set glossiness(val: number);
        get glossiness_map(): Texture;
        set glossiness_map(val: Texture);
        get glossinessMap(): Texture;
        set glossinessMap(val: Texture);
        get light_map(): Texture;
        set light_map(val: Texture);
        get lightMap(): Texture;
        set lightMap(val: Texture);
        get light_map_intensity(): number;
        set light_map_intensity(val: number);
        get lightMapIntensity(): number;
        set lightMapIntensity(val: number);
        get map(): Texture;
        set map(val: Texture);
        get normal_map(): Texture;
        set normal_map(val: Texture);
        get normalMap(): Texture;
        set normalMap(val: Texture);
        get normal_scale(): Graphene.Vec2;
        set normal_scale(val: Graphene.Vec2);
        get normalScale(): Graphene.Vec2;
        set normalScale(val: Graphene.Vec2);
        get refraction_ratio(): number;
        set refraction_ratio(val: number);
        get refractionRatio(): number;
        set refractionRatio(val: number);
        get specular_factor(): Graphene.Vec3;
        set specular_factor(val: Graphene.Vec3);
        get specularFactor(): Graphene.Vec3;
        set specularFactor(val: Graphene.Vec3);
        get specular_map(): Texture;
        set specular_map(val: Texture);
        get specularMap(): Texture;
        set specularMap(val: Texture);

        // Constructors of Gthree.MeshSpecglosMaterial

        constructor(properties?: Partial<MeshSpecglosMaterial.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): MeshSpecglosMaterial;

        // Own methods of Gthree.MeshSpecglosMaterial

        get_ao_map_intensity(): number;
        get_bump_scale(): number;
        get_color(): Graphene.Vec3;
        get_displacement_bias(): number;
        get_displacement_scale(): number;
        get_emissive_color(): Graphene.Vec3;
        get_emissive_intensity(): number;
        get_env_map_intensity(): number;
        get_glossiness(): number;
        get_light_map_intensity(): number;
        get_normal_map_scale(): Graphene.Vec2;
        get_normal_map_type(): NormalMapType;
        get_refraction_ratio(): number;
        get_specular_factor(): Graphene.Vec3;
        set_alpha_map(texture: Texture): void;
        set_ao_map(texture: Texture): void;
        set_ao_map_intensity(value: number): void;
        set_bump_map(texture: Texture): void;
        set_bump_scale(value: number): void;
        set_color(color: Graphene.Vec3): void;
        set_displacement_bias(value: number): void;
        set_displacement_map(texture: Texture): void;
        set_displacement_scale(value: number): void;
        set_emissive_color(color: Graphene.Vec3): void;
        set_emissive_intensity(value: number): void;
        set_emissive_map(texture: Texture): void;
        set_env_map(texture: Texture): void;
        set_env_map_intensity(value: number): void;
        set_glossiness(ratio: number): void;
        set_glossiness_map(texture: Texture): void;
        set_light_map(texture: Texture): void;
        set_light_map_intensity(value: number): void;
        set_map(texture: Texture): void;
        set_normal_map(texture: Texture): void;
        set_normal_map_scale(scale: Graphene.Vec2): void;
        set_normal_map_type(type: NormalMapType): void;
        set_refraction_ratio(ratio: number): void;
        set_specular_factor(factor: Graphene.Vec3): void;
        set_specular_map(texture: Texture): void;
    }

    module MeshStandardMaterial {
        // Constructor properties interface

        interface ConstructorProps extends MeshMaterial.ConstructorProps {
            alpha_map: Texture;
            alphaMap: Texture;
            ao_map: Texture;
            aoMap: Texture;
            ao_map_intensity: number;
            aoMapIntensity: number;
            bump_map: Texture;
            bumpMap: Texture;
            bump_scale: number;
            bumpScale: number;
            color: Graphene.Vec3;
            displacement_bias: number;
            displacementBias: number;
            displacement_map: Texture;
            displacementMap: Texture;
            displacement_scale: number;
            displacementScale: number;
            emissive_color: Graphene.Vec3;
            emissiveColor: Graphene.Vec3;
            emissive_intensity: number;
            emissiveIntensity: number;
            emissive_map: Texture;
            emissiveMap: Texture;
            env_map: Texture;
            envMap: Texture;
            env_map_intensity: number;
            envMapIntensity: number;
            light_map: Texture;
            lightMap: Texture;
            light_map_intensity: number;
            lightMapIntensity: number;
            map: Texture;
            metalness: number;
            metalness_map: Texture;
            metalnessMap: Texture;
            normal_map: Texture;
            normalMap: Texture;
            normal_scale: Graphene.Vec2;
            normalScale: Graphene.Vec2;
            refraction_ratio: number;
            refractionRatio: number;
            roughness: number;
            roughness_map: Texture;
            roughnessMap: Texture;
        }
    }

    class MeshStandardMaterial extends MeshMaterial {
        static $gtype: GObject.GType<MeshStandardMaterial>;

        // Own properties of Gthree.MeshStandardMaterial

        get alpha_map(): Texture;
        set alpha_map(val: Texture);
        get alphaMap(): Texture;
        set alphaMap(val: Texture);
        get ao_map(): Texture;
        set ao_map(val: Texture);
        get aoMap(): Texture;
        set aoMap(val: Texture);
        get ao_map_intensity(): number;
        set ao_map_intensity(val: number);
        get aoMapIntensity(): number;
        set aoMapIntensity(val: number);
        get bump_map(): Texture;
        set bump_map(val: Texture);
        get bumpMap(): Texture;
        set bumpMap(val: Texture);
        get bump_scale(): number;
        set bump_scale(val: number);
        get bumpScale(): number;
        set bumpScale(val: number);
        get color(): Graphene.Vec3;
        set color(val: Graphene.Vec3);
        get displacement_bias(): number;
        set displacement_bias(val: number);
        get displacementBias(): number;
        set displacementBias(val: number);
        get displacement_map(): Texture;
        set displacement_map(val: Texture);
        get displacementMap(): Texture;
        set displacementMap(val: Texture);
        get displacement_scale(): number;
        set displacement_scale(val: number);
        get displacementScale(): number;
        set displacementScale(val: number);
        get emissive_color(): Graphene.Vec3;
        set emissive_color(val: Graphene.Vec3);
        get emissiveColor(): Graphene.Vec3;
        set emissiveColor(val: Graphene.Vec3);
        get emissive_intensity(): number;
        set emissive_intensity(val: number);
        get emissiveIntensity(): number;
        set emissiveIntensity(val: number);
        get emissive_map(): Texture;
        set emissive_map(val: Texture);
        get emissiveMap(): Texture;
        set emissiveMap(val: Texture);
        get env_map(): Texture;
        set env_map(val: Texture);
        get envMap(): Texture;
        set envMap(val: Texture);
        get env_map_intensity(): number;
        set env_map_intensity(val: number);
        get envMapIntensity(): number;
        set envMapIntensity(val: number);
        get light_map(): Texture;
        set light_map(val: Texture);
        get lightMap(): Texture;
        set lightMap(val: Texture);
        get light_map_intensity(): number;
        set light_map_intensity(val: number);
        get lightMapIntensity(): number;
        set lightMapIntensity(val: number);
        get map(): Texture;
        set map(val: Texture);
        get metalness(): number;
        set metalness(val: number);
        get metalness_map(): Texture;
        set metalness_map(val: Texture);
        get metalnessMap(): Texture;
        set metalnessMap(val: Texture);
        get normal_map(): Texture;
        set normal_map(val: Texture);
        get normalMap(): Texture;
        set normalMap(val: Texture);
        get normal_scale(): Graphene.Vec2;
        set normal_scale(val: Graphene.Vec2);
        get normalScale(): Graphene.Vec2;
        set normalScale(val: Graphene.Vec2);
        get refraction_ratio(): number;
        set refraction_ratio(val: number);
        get refractionRatio(): number;
        set refractionRatio(val: number);
        get roughness(): number;
        set roughness(val: number);
        get roughness_map(): Texture;
        set roughness_map(val: Texture);
        get roughnessMap(): Texture;
        set roughnessMap(val: Texture);

        // Constructors of Gthree.MeshStandardMaterial

        constructor(properties?: Partial<MeshStandardMaterial.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): MeshStandardMaterial;

        // Own methods of Gthree.MeshStandardMaterial

        get_ao_map_intensity(): number;
        get_bump_scale(): number;
        get_color(): Graphene.Vec3;
        get_displacement_bias(): number;
        get_displacement_scale(): number;
        get_emissive_color(): Graphene.Vec3;
        get_emissive_intensity(): number;
        get_env_map_intensity(): number;
        get_light_map_intensity(): number;
        get_metalness(): number;
        get_normal_map_scale(): Graphene.Vec2;
        get_normal_map_type(): NormalMapType;
        get_refraction_ratio(): number;
        get_roughness(): number;
        set_alpha_map(texture: Texture): void;
        set_ao_map(texture: Texture): void;
        set_ao_map_intensity(value: number): void;
        set_bump_map(texture: Texture): void;
        set_bump_scale(value: number): void;
        set_color(color: Graphene.Vec3): void;
        set_displacement_bias(value: number): void;
        set_displacement_map(texture: Texture): void;
        set_displacement_scale(value: number): void;
        set_emissive_color(color: Graphene.Vec3): void;
        set_emissive_intensity(value: number): void;
        set_emissive_map(texture: Texture): void;
        set_env_map(texture: Texture): void;
        set_env_map_intensity(value: number): void;
        set_light_map(texture: Texture): void;
        set_light_map_intensity(value: number): void;
        set_map(texture: Texture): void;
        set_metalness(value: number): void;
        set_metalness_map(texture: Texture): void;
        set_normal_map(texture: Texture): void;
        set_normal_map_scale(scale: Graphene.Vec2): void;
        set_normal_map_type(type: NormalMapType): void;
        set_refraction_ratio(ratio: number): void;
        set_roughness(ratio: number): void;
        set_roughness_map(texture: Texture): void;
    }

    module MeshToonMaterial {
        // Constructor properties interface

        interface ConstructorProps extends MeshMaterial.ConstructorProps {
            alpha_map: Texture;
            alphaMap: Texture;
            ao_map: Texture;
            aoMap: Texture;
            ao_map_intensity: number;
            aoMapIntensity: number;
            bump_map: Texture;
            bumpMap: Texture;
            bump_scale: number;
            bumpScale: number;
            color: Graphene.Vec3;
            displacement_bias: number;
            displacementBias: number;
            displacement_map: Texture;
            displacementMap: Texture;
            displacement_scale: number;
            displacementScale: number;
            emissive_color: Graphene.Vec3;
            emissiveColor: Graphene.Vec3;
            emissive_intensity: number;
            emissiveIntensity: number;
            emissive_map: Texture;
            emissiveMap: Texture;
            gradient_map: Texture;
            gradientMap: Texture;
            light_map: Texture;
            lightMap: Texture;
            light_map_intensity: number;
            lightMapIntensity: number;
            map: Texture;
            normal_map: Texture;
            normalMap: Texture;
            normal_scale: Graphene.Vec2;
            normalScale: Graphene.Vec2;
        }
    }

    class MeshToonMaterial extends MeshMaterial {
        static $gtype: GObject.GType<MeshToonMaterial>;

        // Own properties of Gthree.MeshToonMaterial

        get alpha_map(): Texture;
        set alpha_map(val: Texture);
        get alphaMap(): Texture;
        set alphaMap(val: Texture);
        get ao_map(): Texture;
        set ao_map(val: Texture);
        get aoMap(): Texture;
        set aoMap(val: Texture);
        get ao_map_intensity(): number;
        set ao_map_intensity(val: number);
        get aoMapIntensity(): number;
        set aoMapIntensity(val: number);
        get bump_map(): Texture;
        set bump_map(val: Texture);
        get bumpMap(): Texture;
        set bumpMap(val: Texture);
        get bump_scale(): number;
        set bump_scale(val: number);
        get bumpScale(): number;
        set bumpScale(val: number);
        get color(): Graphene.Vec3;
        set color(val: Graphene.Vec3);
        get displacement_bias(): number;
        set displacement_bias(val: number);
        get displacementBias(): number;
        set displacementBias(val: number);
        get displacement_map(): Texture;
        set displacement_map(val: Texture);
        get displacementMap(): Texture;
        set displacementMap(val: Texture);
        get displacement_scale(): number;
        set displacement_scale(val: number);
        get displacementScale(): number;
        set displacementScale(val: number);
        get emissive_color(): Graphene.Vec3;
        set emissive_color(val: Graphene.Vec3);
        get emissiveColor(): Graphene.Vec3;
        set emissiveColor(val: Graphene.Vec3);
        get emissive_intensity(): number;
        set emissive_intensity(val: number);
        get emissiveIntensity(): number;
        set emissiveIntensity(val: number);
        get emissive_map(): Texture;
        set emissive_map(val: Texture);
        get emissiveMap(): Texture;
        set emissiveMap(val: Texture);
        get gradient_map(): Texture;
        set gradient_map(val: Texture);
        get gradientMap(): Texture;
        set gradientMap(val: Texture);
        get light_map(): Texture;
        set light_map(val: Texture);
        get lightMap(): Texture;
        set lightMap(val: Texture);
        get light_map_intensity(): number;
        set light_map_intensity(val: number);
        get lightMapIntensity(): number;
        set lightMapIntensity(val: number);
        get map(): Texture;
        set map(val: Texture);
        get normal_map(): Texture;
        set normal_map(val: Texture);
        get normalMap(): Texture;
        set normalMap(val: Texture);
        get normal_scale(): Graphene.Vec2;
        set normal_scale(val: Graphene.Vec2);
        get normalScale(): Graphene.Vec2;
        set normalScale(val: Graphene.Vec2);

        // Constructors of Gthree.MeshToonMaterial

        constructor(properties?: Partial<MeshToonMaterial.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): MeshToonMaterial;

        // Own methods of Gthree.MeshToonMaterial

        get_ao_map_intensity(): number;
        get_bump_scale(): number;
        get_color(): Graphene.Vec3;
        get_displacement_bias(): number;
        get_displacement_scale(): number;
        get_emissive_color(): Graphene.Vec3;
        get_emissive_intensity(): number;
        get_light_map_intensity(): number;
        get_normal_map_scale(): Graphene.Vec2;
        get_normal_map_type(): NormalMapType;
        set_alpha_map(texture: Texture): void;
        set_ao_map(texture: Texture): void;
        set_ao_map_intensity(value: number): void;
        set_bump_map(texture: Texture): void;
        set_bump_scale(value: number): void;
        set_color(color: Graphene.Vec3): void;
        set_displacement_bias(value: number): void;
        set_displacement_map(texture: Texture): void;
        set_displacement_scale(value: number): void;
        set_emissive_color(color: Graphene.Vec3): void;
        set_emissive_intensity(value: number): void;
        set_emissive_map(texture: Texture): void;
        set_gradient_map(texture: Texture): void;
        set_light_map(texture: Texture): void;
        set_light_map_intensity(value: number): void;
        set_map(texture: Texture): void;
        set_normal_map(texture: Texture): void;
        set_normal_map_scale(scale: Graphene.Vec2): void;
        set_normal_map_type(type: NormalMapType): void;
    }

    module NumberKeyframeTrack {
        // Constructor properties interface

        interface ConstructorProps extends KeyframeTrack.ConstructorProps {}
    }

    class NumberKeyframeTrack extends KeyframeTrack {
        static $gtype: GObject.GType<NumberKeyframeTrack>;

        // Constructors of Gthree.NumberKeyframeTrack

        constructor(properties?: Partial<NumberKeyframeTrack.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](name: string, times: AttributeArray, values: AttributeArray): NumberKeyframeTrack;
    }

    module Object {
        // Signal callback interfaces

        interface Destroy {
            (): void;
        }

        interface ParentSet {
            (object: Object): void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            first_child: Object;
            firstChild: Object;
            last_child: Object;
            lastChild: Object;
            next_sibling: Object;
            nextSibling: Object;
            parent: Object;
            previous_sibling: Object;
            previousSibling: Object;
            visible: boolean;
        }
    }

    class Object extends GObject.Object {
        static $gtype: GObject.GType<Object>;

        // Own properties of Gthree.Object

        get first_child(): Object;
        get firstChild(): Object;
        get last_child(): Object;
        get lastChild(): Object;
        get next_sibling(): Object;
        get nextSibling(): Object;
        get parent(): Object;
        get previous_sibling(): Object;
        get previousSibling(): Object;
        get visible(): boolean;
        set visible(val: boolean);

        // Constructors of Gthree.Object

        constructor(properties?: Partial<Object.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): Object;

        // Own signals of Gthree.Object

        connect(id: string, callback: (...args: any[]) => any): number;
        connect_after(id: string, callback: (...args: any[]) => any): number;
        emit(id: string, ...args: any[]): void;
        connect(signal: 'destroy', callback: (_source: this) => void): number;
        connect_after(signal: 'destroy', callback: (_source: this) => void): number;
        emit(signal: 'destroy'): void;
        connect(signal: 'parent-set', callback: (_source: this, object: Object) => void): number;
        connect_after(signal: 'parent-set', callback: (_source: this, object: Object) => void): number;
        emit(signal: 'parent-set', object: Object): void;

        // Own virtual methods of Gthree.Object

        vfunc_destroy(): void;
        vfunc_fill_render_list(list: RenderList): void;
        vfunc_in_frustum(frustum: Graphene.Frustum): boolean;
        vfunc_parent_set(old_parent: Object): void;
        vfunc_set_direct_uniforms(program: Program, renderer: Renderer): void;
        vfunc_update(renderer: Renderer): void;
        vfunc_update_matrix_world(force: boolean): boolean;

        // Own methods of Gthree.Object

        add_child(child: Object): void;
        apply_matrix(matrix: Graphene.Matrix): void;
        check_layer(layer_mask: number): boolean;
        destroy(): void;
        destroy_all_children(): void;
        disable_layer(layer: number): void;
        enable_layer(layer: number): void;
        get_cast_shadow(): boolean;
        get_is_frustum_culled(): boolean;
        get_layer_mask(): number;
        get_matrix(): Graphene.Matrix;
        get_mesh_extents(box: Graphene.Box): void;
        get_model_view_matrix_floats(dest: number): void;
        get_n_children(): number;
        get_name(): string;
        get_normal_matrix3_floats(dest: number): void;
        get_position(): Graphene.Vec3;
        get_quaternion(): Graphene.Quaternion;
        get_receive_shadow(): boolean;
        get_rotation(): Graphene.Euler;
        get_scale(): Graphene.Vec3;
        get_up(): Graphene.Vec3;
        get_uuid(): string;
        get_visible(): boolean;
        get_world_matrix(): Graphene.Matrix;
        get_world_matrix_floats(dest: number): void;
        has_attribute_data(attribute: GLib.Quark): boolean;
        hide(): void;
        is_in_frustum(frustum: Graphene.Frustum): boolean;
        look_at(pos: Graphene.Vec3): void;
        look_at_point3d(pos: Graphene.Point3D): void;
        look_at_xyz(x: number, y: number, z: number): void;
        remove_child(child: Object): void;
        set_cast_shadow(cast_shadow: boolean): void;
        set_layer(layer: number): void;
        set_matrix(matrix: Graphene.Matrix): void;
        set_matrix_auto_update(auto_update: boolean): void;
        set_name(name: string): void;
        set_position(vec: Graphene.Vec3): void;
        set_position_point3d(pos: Graphene.Point3D): void;
        set_position_xyz(x: number, y: number, z: number): void;
        set_quaternion(q: Graphene.Quaternion): void;
        set_receive_shadow(receive_shadow: boolean): void;
        set_rotation(rot: Graphene.Euler): void;
        set_rotation_xyz(x: number, y: number, z: number): void;
        set_scale(scale: Graphene.Vec3): void;
        set_scale_point3d(scale: Graphene.Point3D): void;
        set_scale_uniform(scale: number): void;
        set_scale_xyz(x: number, y: number, z: number): void;
        set_up(up: Graphene.Vec3): void;
        set_uuid(uuid: string): void;
        set_visible(visible: boolean): void;
        set_world_matrix(matrix: Graphene.Matrix): void;
        show(): void;
        toggle_layer(layer: number): void;
        translate_on_axis(axis: Graphene.Vec3, distance: number): void;
        translate_x(distance: number): void;
        translate_y(distance: number): void;
        translate_z(distance: number): void;
        update(renderer: Renderer): void;
        update_matrix(): void;
        update_matrix_view(camera_matrix: Graphene.Matrix): void;
        update_matrix_world(force: boolean): void;
    }

    module OrthographicCamera {
        // Constructor properties interface

        interface ConstructorProps extends Camera.ConstructorProps {
            bottom: number;
            left: number;
            right: number;
            top: number;
        }
    }

    class OrthographicCamera extends Camera {
        static $gtype: GObject.GType<OrthographicCamera>;

        // Own properties of Gthree.OrthographicCamera

        get bottom(): number;
        set bottom(val: number);
        get left(): number;
        set left(val: number);
        get right(): number;
        set right(val: number);
        get top(): number;
        set top(val: number);

        // Constructors of Gthree.OrthographicCamera

        constructor(properties?: Partial<OrthographicCamera.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](
            left: number,
            right: number,
            top: number,
            bottom: number,
            near: number,
            far: number,
        ): OrthographicCamera;
        // Conflicted with Gthree.Object.new

        static ['new'](...args: never[]): any;

        // Own methods of Gthree.OrthographicCamera

        get_bottom(): number;
        get_left(): number;
        get_right(): number;
        get_top(): number;
        set_bottom(bottom: number): void;
        set_left(left: number): void;
        set_right(right: number): void;
        set_top(top: number): void;
    }

    module Pass {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    class Pass extends GObject.Object {
        static $gtype: GObject.GType<Pass>;

        // Own fields of Gthree.Pass

        enabled: boolean;
        need_swap: boolean;
        need_source_texture: boolean;
        does_copy: boolean;
        can_render_to_screen: boolean;
        clear: boolean;

        // Constructors of Gthree.Pass

        constructor(properties?: Partial<Pass.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Own virtual methods of Gthree.Pass

        vfunc_render(
            renderer: Renderer,
            write_buffer: RenderTarget,
            read_buffer: RenderTarget,
            delta_time: number,
            render_to_screen: boolean,
            mask_active: boolean,
        ): void;
        vfunc_set_size(width: number, height: number): void;

        // Own methods of Gthree.Pass

        render(
            renderer: Renderer,
            write_buffer: RenderTarget,
            read_buffer: RenderTarget,
            delta_time: number,
            render_to_screen: boolean,
            mask_active: boolean,
        ): void;
        resize(width: number, height: number): void;
        set_clear(clear: boolean): void;
        set_enabled(enabled: boolean): void;
    }

    module PerspectiveCamera {
        // Constructor properties interface

        interface ConstructorProps extends Camera.ConstructorProps {
            aspect: number;
            fov: number;
        }
    }

    class PerspectiveCamera extends Camera {
        static $gtype: GObject.GType<PerspectiveCamera>;

        // Own properties of Gthree.PerspectiveCamera

        get aspect(): number;
        set aspect(val: number);
        get fov(): number;
        set fov(val: number);

        // Constructors of Gthree.PerspectiveCamera

        constructor(properties?: Partial<PerspectiveCamera.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](fov: number, aspect: number, near: number, far: number): PerspectiveCamera;
        // Conflicted with Gthree.Object.new

        static ['new'](...args: never[]): any;

        // Own methods of Gthree.PerspectiveCamera

        get_aspect(): number;
        get_fov(): number;
        set_aspect(aspect: number): void;
        set_fov(aspect: number): void;
    }

    module PlaneHelper {
        // Constructor properties interface

        interface ConstructorProps extends Object.ConstructorProps {
            color: Graphene.Vec3;
            plane: Graphene.Plane;
            size: number;
        }
    }

    class PlaneHelper extends Object {
        static $gtype: GObject.GType<PlaneHelper>;

        // Own properties of Gthree.PlaneHelper

        get color(): Graphene.Vec3;
        set color(val: Graphene.Vec3);
        get plane(): Graphene.Plane;
        set plane(val: Graphene.Plane);
        get size(): number;
        set size(val: number);

        // Constructors of Gthree.PlaneHelper

        constructor(properties?: Partial<PlaneHelper.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](plane: Graphene.Plane, size: number, color: Graphene.Vec3): PlaneHelper;
        // Conflicted with Gthree.Object.new

        static ['new'](...args: never[]): any;

        // Own methods of Gthree.PlaneHelper

        get_color(): Graphene.Vec3;
        get_plane(): Graphene.Plane;
        get_size(): number;
        set_color(color: Graphene.Vec3): void;
        set_plane(plane: Graphene.Plane): void;
        set_size(size: number): void;
    }

    module PointLight {
        // Constructor properties interface

        interface ConstructorProps extends Light.ConstructorProps {
            decay: number;
            distance: number;
        }
    }

    class PointLight extends Light {
        static $gtype: GObject.GType<PointLight>;

        // Own properties of Gthree.PointLight

        get decay(): number;
        set decay(val: number);
        get distance(): number;
        set distance(val: number);

        // Constructors of Gthree.PointLight

        constructor(properties?: Partial<PointLight.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](color: Graphene.Vec3, intensity: number, distance: number): PointLight;
        // Conflicted with Gthree.Light.new

        static ['new'](...args: never[]): any;

        // Own methods of Gthree.PointLight

        get_decay(): number;
        get_distance(): number;
        set_decay(decay: number): void;
        set_distance(distance: number): void;
    }

    module Points {
        // Constructor properties interface

        interface ConstructorProps extends Object.ConstructorProps {
            geometry: Geometry;
            material: Material;
        }
    }

    class Points extends Object {
        static $gtype: GObject.GType<Points>;

        // Own properties of Gthree.Points

        get geometry(): Geometry;
        get material(): Material;
        set material(val: Material);

        // Constructors of Gthree.Points

        constructor(properties?: Partial<Points.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](geometry: Geometry, material: Material): Points;
        // Conflicted with Gthree.Object.new

        static ['new'](...args: never[]): any;

        // Own methods of Gthree.Points

        set_material(material: Material): void;
    }

    module PointsMaterial {
        // Constructor properties interface

        interface ConstructorProps extends Material.ConstructorProps {
            color: Graphene.Vec3;
            map: Texture;
            size: number;
            size_attenuation: boolean;
            sizeAttenuation: boolean;
        }
    }

    class PointsMaterial extends Material {
        static $gtype: GObject.GType<PointsMaterial>;

        // Own properties of Gthree.PointsMaterial

        get color(): Graphene.Vec3;
        set color(val: Graphene.Vec3);
        get map(): Texture;
        set map(val: Texture);
        get size(): number;
        set size(val: number);
        get size_attenuation(): boolean;
        set size_attenuation(val: boolean);
        get sizeAttenuation(): boolean;
        set sizeAttenuation(val: boolean);

        // Constructors of Gthree.PointsMaterial

        constructor(properties?: Partial<PointsMaterial.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): PointsMaterial;

        // Own methods of Gthree.PointsMaterial

        get_color(): Graphene.Vec3;
        get_size(): number;
        get_size_attenuation(): boolean;
        set_color(color: Graphene.Vec3): void;
        set_map(texture: Texture): void;
        set_size(size: number): void;
        set_size_attenuation(size_attenuation: boolean): void;
    }

    module Program {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    class Program extends GObject.Object {
        static $gtype: GObject.GType<Program>;

        // Constructors of Gthree.Program

        constructor(properties?: Partial<Program.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](shader: Shader, parameters: ProgramParameters, renderer: Renderer): Program;

        // Own methods of Gthree.Program

        lookup_attribute_location(attribute: GLib.Quark): number;
        lookup_attribute_location_from_string(attribute: string): number;
        lookup_uniform_location(uniform: GLib.Quark): number;
        lookup_uniform_location_from_string(uniform: string): number;
        use(): void;
    }

    module QuaternionInterpolant {
        // Constructor properties interface

        interface ConstructorProps extends Interpolant.ConstructorProps {}
    }

    class QuaternionInterpolant extends Interpolant {
        static $gtype: GObject.GType<QuaternionInterpolant>;

        // Constructors of Gthree.QuaternionInterpolant

        constructor(properties?: Partial<QuaternionInterpolant.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](parameter_positions: AttributeArray, sample_values: AttributeArray): QuaternionInterpolant;
    }

    module QuaternionKeyframeTrack {
        // Constructor properties interface

        interface ConstructorProps extends KeyframeTrack.ConstructorProps {}
    }

    class QuaternionKeyframeTrack extends KeyframeTrack {
        static $gtype: GObject.GType<QuaternionKeyframeTrack>;

        // Constructors of Gthree.QuaternionKeyframeTrack

        constructor(properties?: Partial<QuaternionKeyframeTrack.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](name: string, times: AttributeArray, values: AttributeArray): QuaternionKeyframeTrack;
    }

    module Raycaster {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    class Raycaster extends GObject.Object {
        static $gtype: GObject.GType<Raycaster>;

        // Constructors of Gthree.Raycaster

        constructor(properties?: Partial<Raycaster.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): Raycaster;

        // Own methods of Gthree.Raycaster

        get_far(): number;
        get_near(): number;
        get_ray(): Graphene.Ray;
        set_far(far: number): void;
        set_from_camera(camera: Camera, x: number, y: number): void;
        set_near(near: number): void;
        set_ray(ray: Graphene.Ray): void;
    }

    module RenderPass {
        // Constructor properties interface

        interface ConstructorProps extends Pass.ConstructorProps {}
    }

    class RenderPass extends Pass {
        static $gtype: GObject.GType<RenderPass>;

        // Constructors of Gthree.RenderPass

        constructor(properties?: Partial<RenderPass.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](scene: Scene, camera: Camera, override_material: Material): RenderPass;

        // Own methods of Gthree.RenderPass

        set_clear_depth(clear_depth: boolean): void;
    }

    module RenderTarget {
        // Constructor properties interface

        interface ConstructorProps extends Resource.ConstructorProps {}
    }

    class RenderTarget extends Resource {
        static $gtype: GObject.GType<RenderTarget>;

        // Constructors of Gthree.RenderTarget

        constructor(properties?: Partial<RenderTarget.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](width: number, height: number): RenderTarget;

        // Own methods of Gthree.RenderTarget

        download(renderer: Renderer, data: number, stride: number): void;
        download_area(renderer: Renderer, area: cairo.RectangleInt, data: number, stride: number): void;
        get_depth_buffer(): boolean;
        get_height(): number;
        get_stencil_buffer(): boolean;
        get_width(): number;
        set_depth_buffer(depth_buffer: boolean): void;
        set_depth_texture(texture: Texture): void;
        set_size(width: number, height: number): void;
        set_stencil_buffer(stencil_buffer: boolean): void;
        update_mipmap(renderer: Renderer): void;
    }

    module Renderer {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    class Renderer extends GObject.Object {
        static $gtype: GObject.GType<Renderer>;

        // Constructors of Gthree.Renderer

        constructor(properties?: Partial<Renderer.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): Renderer;

        // Own methods of Gthree.Renderer

        clear(color: boolean, depth: boolean, stencil: boolean): void;
        clear_color(): void;
        clear_depth(): void;
        get_autoclear(): boolean;
        get_autoclear_color(): boolean;
        get_autoclear_depth(): boolean;
        get_autoclear_stencil(): boolean;
        get_clear_alpha(): number;
        get_clear_color(): Graphene.Vec3;
        get_clipping_plane(index: number): Graphene.Plane;
        get_drawing_buffer_height(): number;
        get_drawing_buffer_width(): number;
        get_gamma_factor(): number;
        get_height(): number;
        get_local_clipping_enabled(): boolean;
        get_n_clipping_planes(): number;
        get_pixel_ratio(): number;
        get_shadow_map_auto_update(): boolean;
        get_shadow_map_enabled(): boolean;
        get_shadow_map_needs_update(): boolean;
        get_width(): number;
        remove_all_clipping_planes(): void;
        remove_clipping_plane(index: number): void;
        render(scene: Scene, camera: Camera): void;
        set_autoclear(auto_clear: boolean): void;
        set_autoclear_color(clear_color: boolean): void;
        set_autoclear_depth(clear_depth: boolean): void;
        set_autoclear_stencil(clear_stencil: boolean): void;
        set_clear_alpha(alpha: number): void;
        set_clear_color(color: Graphene.Vec3): void;
        set_clipping_plane(index: number, plane: Graphene.Plane): number;
        set_gamma_factor(factor: number): void;
        set_local_clipping_enabled(enabled: boolean): void;
        set_pixel_ratio(pixel_ratio: number): void;
        set_render_target(target: RenderTarget, active_cube_target: number, active_mipmap_level: number): void;
        set_shadow_map_auto_update(auto_update: boolean): void;
        set_shadow_map_enabled(enabled: boolean): void;
        set_shadow_map_needs_update(needs_update: boolean): void;
        set_size(width: number, height: number): void;
        unrealize(): void;
    }

    module Resource {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    class Resource extends GObject.Object {
        static $gtype: GObject.GType<Resource>;

        // Constructors of Gthree.Resource

        constructor(properties?: Partial<Resource.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Own virtual methods of Gthree.Resource

        vfunc_set_used(used: boolean): void;
        vfunc_unrealize(renderer: Renderer): void;

        // Own methods of Gthree.Resource

        get_data_for(renderer: Renderer): any | null;
        get_used(): boolean;
        is_realized_for(renderer: Renderer): boolean;
        set_realized_for(renderer: Renderer): void;
        set_used(used: boolean): void;
        unrealize(renderer: Renderer): void;
    }

    module Scene {
        // Constructor properties interface

        interface ConstructorProps extends Object.ConstructorProps {}
    }

    class Scene extends Object {
        static $gtype: GObject.GType<Scene>;

        // Constructors of Gthree.Scene

        constructor(properties?: Partial<Scene.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): Scene;

        // Own methods of Gthree.Scene

        get_background_alpha(): number;
        get_background_color(): Graphene.Vec3;
        set_background_alpha(alpha: number): void;
        set_background_color(color: Graphene.Vec3): void;
        set_background_texture(texture: Texture): void;
        set_fog(fog: Fog): void;
        set_override_material(material: Material): void;
    }

    module Shader {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    class Shader extends GObject.Object {
        static $gtype: GObject.GType<Shader>;

        // Constructors of Gthree.Shader

        constructor(properties?: Partial<Shader.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Own methods of Gthree.Shader

        equal(b: Shader): boolean;
        get_fragment_shader_text(): string;
        get_name(): string;
        get_vertex_shader_text(): string;
        hash(): number;
        set_name(name: string): void;
        update_uniform_locations_for_program(program: Program): void;
    }

    module ShaderMaterial {
        // Constructor properties interface

        interface ConstructorProps extends MeshMaterial.ConstructorProps {
            shader: Shader;
            use_lights: boolean;
            useLights: boolean;
            vertex_colors: boolean;
            vertexColors: boolean;
        }
    }

    class ShaderMaterial extends MeshMaterial {
        static $gtype: GObject.GType<ShaderMaterial>;

        // Own properties of Gthree.ShaderMaterial

        get shader(): Shader;
        get use_lights(): boolean;
        set use_lights(val: boolean);
        get useLights(): boolean;
        set useLights(val: boolean);
        get vertex_colors(): boolean;
        set vertex_colors(val: boolean);
        get vertexColors(): boolean;
        set vertexColors(val: boolean);

        // Constructors of Gthree.ShaderMaterial

        constructor(properties?: Partial<ShaderMaterial.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](shader: Shader): ShaderMaterial;

        // Own methods of Gthree.ShaderMaterial

        get_shading_type(): ShadingType;
        get_use_lights(): boolean;
        get_vertex_colors(): boolean;
        set_shading_type(shading_type: ShadingType): void;
        set_use_lights(use_lights: boolean): void;
        set_vertex_colors(vertex_color: boolean): void;
    }

    module ShaderPass {
        // Constructor properties interface

        interface ConstructorProps extends Pass.ConstructorProps {}
    }

    class ShaderPass extends Pass {
        static $gtype: GObject.GType<ShaderPass>;

        // Constructors of Gthree.ShaderPass

        constructor(properties?: Partial<ShaderPass.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](shader: Shader, texture_id: string): ShaderPass;
    }

    module Skeleton {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    class Skeleton extends GObject.Object {
        static $gtype: GObject.GType<Skeleton>;

        // Constructors of Gthree.Skeleton

        constructor(properties?: Partial<Skeleton.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](bones: Bone, n_bones: number, bone_inverses: Graphene.Matrix): Skeleton;

        // Own methods of Gthree.Skeleton

        calculate_inverses(): void;
        get_n_bones(): number;
        pose(): void;
    }

    module SkeletonHelper {
        // Constructor properties interface

        interface ConstructorProps extends LineSegments.ConstructorProps {
            root: Object;
        }
    }

    class SkeletonHelper extends LineSegments {
        static $gtype: GObject.GType<SkeletonHelper>;

        // Own properties of Gthree.SkeletonHelper

        get root(): Object;

        // Constructors of Gthree.SkeletonHelper

        constructor(properties?: Partial<SkeletonHelper.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](root: Object): SkeletonHelper;
        // Conflicted with Gthree.LineSegments.new

        static ['new'](...args: never[]): any;
    }

    module SkinnedMesh {
        // Constructor properties interface

        interface ConstructorProps extends Mesh.ConstructorProps {}
    }

    class SkinnedMesh extends Mesh {
        static $gtype: GObject.GType<SkinnedMesh>;

        // Constructors of Gthree.SkinnedMesh

        constructor(properties?: Partial<SkinnedMesh.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](geometry: Geometry, material: Material): SkinnedMesh;
        // Conflicted with Gthree.Object.new

        static ['new'](...args: never[]): any;

        // Own methods of Gthree.SkinnedMesh

        bind(skeleton: Skeleton, bind_matrix: Graphene.Matrix): void;
        get_bind_matrix(): Graphene.Matrix;
        get_inverse_bind_matrix(): Graphene.Matrix;
        normalize_skin_weights(): void;
        pose(): void;
        set_bind_mode(bind_mode: BindMode): void;
    }

    module SpotLight {
        // Constructor properties interface

        interface ConstructorProps extends Light.ConstructorProps {
            angle: number;
            decay: number;
            distance: number;
            penumbra: number;
            target: Object;
        }
    }

    class SpotLight extends Light {
        static $gtype: GObject.GType<SpotLight>;

        // Own properties of Gthree.SpotLight

        get angle(): number;
        set angle(val: number);
        get decay(): number;
        set decay(val: number);
        get distance(): number;
        set distance(val: number);
        get penumbra(): number;
        set penumbra(val: number);
        get target(): Object;
        set target(val: Object);

        // Constructors of Gthree.SpotLight

        constructor(properties?: Partial<SpotLight.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](
            color: Graphene.Vec3,
            intensity: number,
            distance: number,
            angle: number,
            penumbra: number,
        ): SpotLight;
        // Conflicted with Gthree.Light.new

        static ['new'](...args: never[]): any;

        // Own methods of Gthree.SpotLight

        get_angle(): number;
        get_decay(): number;
        get_distance(): number;
        get_penumbra(): number;
        set_angle(angle: number): void;
        set_decay(decay: number): void;
        set_distance(distance: number): void;
        set_penumbra(penumbra: number): void;
        set_target(object: Object): void;
    }

    module SpotLightShadow {
        // Constructor properties interface

        interface ConstructorProps extends LightShadow.ConstructorProps {}
    }

    class SpotLightShadow extends LightShadow {
        static $gtype: GObject.GType<SpotLightShadow>;

        // Constructors of Gthree.SpotLightShadow

        constructor(properties?: Partial<SpotLightShadow.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;
    }

    module Sprite {
        // Constructor properties interface

        interface ConstructorProps extends Object.ConstructorProps {
            material: Material;
        }
    }

    class Sprite extends Object {
        static $gtype: GObject.GType<Sprite>;

        // Own properties of Gthree.Sprite

        get material(): Material;
        set material(val: Material);

        // Constructors of Gthree.Sprite

        constructor(properties?: Partial<Sprite.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](material: Material): Sprite;
        // Conflicted with Gthree.Object.new

        static ['new'](...args: never[]): any;

        // Own methods of Gthree.Sprite

        get_center(): Graphene.Vec2;
        set_center(center: Graphene.Vec2): void;
        set_material(material: Material): void;
    }

    module SpriteMaterial {
        // Constructor properties interface

        interface ConstructorProps extends Material.ConstructorProps {
            color: Graphene.Vec3;
            map: Texture;
            rotation: number;
            size_attenuation: boolean;
            sizeAttenuation: boolean;
        }
    }

    class SpriteMaterial extends Material {
        static $gtype: GObject.GType<SpriteMaterial>;

        // Own properties of Gthree.SpriteMaterial

        get color(): Graphene.Vec3;
        set color(val: Graphene.Vec3);
        get map(): Texture;
        set map(val: Texture);
        get rotation(): number;
        set rotation(val: number);
        get size_attenuation(): boolean;
        set size_attenuation(val: boolean);
        get sizeAttenuation(): boolean;
        set sizeAttenuation(val: boolean);

        // Constructors of Gthree.SpriteMaterial

        constructor(properties?: Partial<SpriteMaterial.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): SpriteMaterial;

        // Own methods of Gthree.SpriteMaterial

        get_color(): Graphene.Vec3;
        get_rotation(): number;
        get_size_attenuation(): boolean;
        set_color(color: Graphene.Vec3): void;
        set_map(texture: Texture): void;
        set_rotation(rotation: number): void;
        set_size_attenuation(size_attenuation: boolean): void;
    }

    module Texture {
        // Constructor properties interface

        interface ConstructorProps extends Resource.ConstructorProps {
            pixbuf: GdkPixbuf.Pixbuf;
            surface: cairo.Surface;
        }
    }

    class Texture extends Resource {
        static $gtype: GObject.GType<Texture>;

        // Own properties of Gthree.Texture

        get pixbuf(): GdkPixbuf.Pixbuf;
        get surface(): cairo.Surface;

        // Constructors of Gthree.Texture

        constructor(properties?: Partial<Texture.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](pixbuf: GdkPixbuf.Pixbuf): Texture;

        static new_from_surface(surface: cairo.Surface): Texture;

        // Own virtual methods of Gthree.Texture

        vfunc_load(renderer: Renderer, slot: number): void;

        // Own methods of Gthree.Texture

        copy_settings(source: Texture): void;
        get_anisotropy(): number;
        get_data_type(): DataType;
        get_encoding(): EncodingFormat;
        get_flip_y(): boolean;
        get_format(): TextureFormat;
        get_generate_mipmaps(): boolean;
        get_gl_texture(renderer: Renderer): number;
        get_mag_filter(): Filter;
        get_mapping(): Mapping;
        get_min_filter(): Filter;
        get_name(): string;
        get_offset(): Graphene.Vec2;
        get_repeat(): Graphene.Vec2;
        get_surface(): cairo.Surface;
        get_uuid(): string;
        get_wrap_s(): Wrapping;
        get_wrap_t(): Wrapping;
        set_anisotropy(anisotropy: number): void;
        set_data_type(type: DataType): void;
        set_encoding(encoding: EncodingFormat): void;
        set_flip_y(flip_y: boolean): void;
        set_format(format: TextureFormat): void;
        set_generate_mipmaps(generate_mipmaps: boolean): void;
        set_mag_filter(mag_filter: Filter): void;
        set_mapping(mapping: Mapping): void;
        set_min_filter(min_filter: Filter): void;
        set_name(name: string): void;
        set_needs_update(): void;
        set_offset(offset: Graphene.Vec2): void;
        set_repeat(repeat: Graphene.Vec2): void;
        set_uuid(uuid: string): void;
        set_wrap_s(wrap_s: Wrapping): void;
        set_wrap_t(wrap_t: Wrapping): void;
    }

    module Uniforms {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    class Uniforms extends GObject.Object {
        static $gtype: GObject.GType<Uniforms>;

        // Constructors of Gthree.Uniforms

        constructor(properties?: Partial<Uniforms.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): Uniforms;

        static new_from_definitions(element: UniformsDefinition, len: number): Uniforms;

        // Own methods of Gthree.Uniforms

        add(uniform: Uniform): void;
        copy_values(source: Uniforms): void;
        load(renderer: Renderer): void;
        merge(source: Uniforms): void;
        set_float(name: string, value: number): void;
        set_int(name: string, value: number): void;
        set_texture(name: string, value: Texture): void;
        set_vec2(name: string, value: Graphene.Vec2): void;
        set_vec3(name: string, value: Graphene.Vec3): void;
        set_vec4(name: string, value: Graphene.Vec4): void;
    }

    module VectorKeyframeTrack {
        // Constructor properties interface

        interface ConstructorProps extends KeyframeTrack.ConstructorProps {}
    }

    class VectorKeyframeTrack extends KeyframeTrack {
        static $gtype: GObject.GType<VectorKeyframeTrack>;

        // Constructors of Gthree.VectorKeyframeTrack

        constructor(properties?: Partial<VectorKeyframeTrack.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](name: string, times: AttributeArray, values: AttributeArray): VectorKeyframeTrack;
    }

    type AmbientLightClass = typeof AmbientLight;
    type AnimationActionClass = typeof AnimationAction;
    type AnimationClipClass = typeof AnimationClip;
    type AnimationMixerClass = typeof AnimationMixer;
    abstract class AttributeArray {
        static $gtype: GObject.GType<AttributeArray>;

        // Constructors of Gthree.AttributeArray

        _init(...args: any[]): void;

        // Own methods of Gthree.AttributeArray

        copy_at(
            index: number,
            offset: number,
            source: AttributeArray,
            source_index: number,
            source_offset: number,
            n_elements: number,
            n_items: number,
        ): void;
        copy_float(
            index: number,
            offset: number,
            source: number,
            source_stride: number,
            n_elements: number,
            n_items: number,
        ): void;
        copy_uint16(
            index: number,
            offset: number,
            source: number,
            source_stride: number,
            n_elements: number,
            n_items: number,
        ): void;
        copy_uint32(
            index: number,
            offset: number,
            source: number,
            source_stride: number,
            n_elements: number,
            n_items: number,
        ): void;
        get_attribute_type(): AttributeType;
        get_count(): number;
        get_elements_as_float(index: number, offset: number, dest: number, n_elements: number): void;
        get_float_at(index: number, offset: number): number;
        get_len(): number;
        get_matrix(index: number, offset: number, matrix: Graphene.Matrix): void;
        get_point3d(index: number, offset: number, point: Graphene.Point3D): void;
        get_stride(): number;
        get_uint(index: number, offset: number): number;
        get_uint16(index: number, offset: number): number;
        get_uint32(index: number, offset: number): number;
        get_uint8(index: number, offset: number): number;
        get_vec2(index: number, offset: number, vec2: Graphene.Vec2): void;
        get_vec3(index: number, offset: number, vec3: Graphene.Vec3): void;
        get_vec4(index: number, offset: number, vec4: Graphene.Vec4): void;
        get_xyz(index: number, offset: number, x: number, y: number, z: number): void;
        get_xyzw(index: number, offset: number, x: number, y: number, z: number, w: number): void;
        peek_double(): number;
        peek_double_at(index: number, offset: number): number;
        peek_float(): number;
        peek_float_at(index: number, offset: number): number;
        peek_int16(): number;
        peek_int16_at(index: number, offset: number): number;
        peek_int32(): number;
        peek_int32_at(index: number, offset: number): number;
        peek_int8(): number;
        peek_int8_at(index: number, offset: number): number;
        peek_point3d(): Graphene.Point3D;
        peek_point3d_at(index: number, offset: number): Graphene.Point3D;
        peek_uint16(): number;
        peek_uint16_at(index: number, offset: number): number;
        peek_uint32(): number;
        peek_uint32_at(index: number, offset: number): number;
        peek_uint8(): number;
        peek_uint8_at(index: number, offset: number): number;
        set_elements_from_float(index: number, offset: number, src: number, n_elements: number): void;
        set_point3d(index: number, offset: number, point: Graphene.Point3D): void;
        set_uint(index: number, offset: number, value: number): void;
        set_uint16(index: number, offset: number, value: number): void;
        set_uint32(index: number, offset: number, value: number): void;
        set_uint8(index: number, offset: number, value: number): void;
        set_vec2(index: number, offset: number, vec2: Graphene.Vec2): void;
        set_vec3(index: number, offset: number, vec3: Graphene.Vec3): void;
        set_vec4(index: number, offset: number, vec4: Graphene.Vec4): void;
        set_w(index: number, offset: number, w: number): void;
        set_x(index: number, offset: number, x: number): void;
        set_xy(index: number, offset: number, x: number, y: number): void;
        set_xyz(index: number, offset: number, x: number, y: number, z: number): void;
        set_xyzw(index: number, offset: number, x: number, y: number, z: number, w: number): void;
        set_y(index: number, offset: number, y: number): void;
        set_z(index: number, offset: number, z: number): void;
        unref(): void;
    }

    type BoneClass = typeof Bone;
    type CameraClass = typeof Camera;
    type ColorKeyframeTrackClass = typeof ColorKeyframeTrack;
    type CubeTextureClass = typeof CubeTexture;
    type CubicInterpolantClass = typeof CubicInterpolant;
    type DirectionalLightClass = typeof DirectionalLight;
    type DirectionalLightShadowClass = typeof DirectionalLightShadow;
    type DiscreteInterpolantClass = typeof DiscreteInterpolant;
    type EffectComposerClass = typeof EffectComposer;
    type FogClass = typeof Fog;
    type GeometryClass = typeof Geometry;
    class GeometryGroup {
        static $gtype: GObject.GType<GeometryGroup>;

        // Own fields of Gthree.GeometryGroup

        start: number;
        count: number;
        material_index: number;

        // Constructors of Gthree.GeometryGroup

        constructor(
            properties?: Partial<{
                start: number;
                count: number;
                material_index: number;
            }>,
        );
        _init(...args: any[]): void;
    }

    type GroupClass = typeof Group;
    type HemisphereLightClass = typeof HemisphereLight;
    type InterpolantClass = typeof Interpolant;
    type KeyframeTrackClass = typeof KeyframeTrack;
    type LightClass = typeof Light;
    abstract class LightSetup {
        static $gtype: GObject.GType<LightSetup>;

        // Constructors of Gthree.LightSetup

        _init(...args: any[]): void;
    }

    type LightShadowClass = typeof LightShadow;
    type LineBasicMaterialClass = typeof LineBasicMaterial;
    type LineClass = typeof Line;
    type LineSegmentsClass = typeof LineSegments;
    type LinearInterpolantClass = typeof LinearInterpolant;
    type LoaderClass = typeof Loader;
    type MaterialClass = typeof Material;
    abstract class MaterialProperties {
        static $gtype: GObject.GType<MaterialProperties>;

        // Constructors of Gthree.MaterialProperties

        _init(...args: any[]): void;
    }

    type MeshBasicMaterialClass = typeof MeshBasicMaterial;
    type MeshClass = typeof Mesh;
    type MeshDepthMaterialClass = typeof MeshDepthMaterial;
    type MeshDistanceMaterialClass = typeof MeshDistanceMaterial;
    type MeshLambertMaterialClass = typeof MeshLambertMaterial;
    type MeshMaterialClass = typeof MeshMaterial;
    type MeshNormalMaterialClass = typeof MeshNormalMaterial;
    type MeshPhongMaterialClass = typeof MeshPhongMaterial;
    type MeshSpecglosMaterialClass = typeof MeshSpecglosMaterial;
    type MeshStandardMaterialClass = typeof MeshStandardMaterial;
    type MeshToonMaterialClass = typeof MeshToonMaterial;
    type NumberKeyframeTrackClass = typeof NumberKeyframeTrack;
    type ObjectClass = typeof Object;
    class ObjectIter {
        static $gtype: GObject.GType<ObjectIter>;

        // Constructors of Gthree.ObjectIter

        constructor(properties?: Partial<{}>);
        _init(...args: any[]): void;

        // Own methods of Gthree.ObjectIter

        destroy(): void;
        init(root: Object): void;
        is_valid(): boolean;
        next(child: Object): boolean;
        prev(child: Object): boolean;
        remove(): void;
    }

    type OrthographicCameraClass = typeof OrthographicCamera;
    type PassClass = typeof Pass;
    type PerspectiveCameraClass = typeof PerspectiveCamera;
    type PlaneHelperClass = typeof PlaneHelper;
    type PointLightClass = typeof PointLight;
    type PointsClass = typeof Points;
    type PointsMaterialClass = typeof PointsMaterial;
    abstract class ProgramCache {
        static $gtype: GObject.GType<ProgramCache>;

        // Constructors of Gthree.ProgramCache

        _init(...args: any[]): void;

        // Own methods of Gthree.ProgramCache

        free(): void;
    }

    type ProgramClass = typeof Program;
    abstract class ProgramParameters {
        static $gtype: GObject.GType<ProgramParameters>;

        // Constructors of Gthree.ProgramParameters

        _init(...args: any[]): void;
    }

    type QuaternionInterpolantClass = typeof QuaternionInterpolant;
    type QuaternionKeyframeTrackClass = typeof QuaternionKeyframeTrack;
    class RayIntersection {
        static $gtype: GObject.GType<RayIntersection>;

        // Own fields of Gthree.RayIntersection

        object: Object;
        distance: number;
        point: Graphene.Point3D;
        face_index: number;
        material_index: number;
        face: Graphene.Triangle;
        uv: Graphene.Vec2;
        uv2: Graphene.Vec2;

        // Constructors of Gthree.RayIntersection

        constructor(object: Object);
        _init(...args: any[]): void;

        static ['new'](object: Object): RayIntersection;

        // Own methods of Gthree.RayIntersection

        copy(): RayIntersection;
        free(): void;
    }

    type RaycasterClass = typeof Raycaster;
    abstract class RenderList {
        static $gtype: GObject.GType<RenderList>;

        // Constructors of Gthree.RenderList

        _init(...args: any[]): void;
    }

    type RenderTargetClass = typeof RenderTarget;
    type RendererClass = typeof Renderer;
    type ResourceClass = typeof Resource;
    class ResourceRealizeData {
        static $gtype: GObject.GType<ResourceRealizeData>;

        // Own fields of Gthree.ResourceRealizeData

        realized_for: Renderer;
        dirty: boolean;

        // Constructors of Gthree.ResourceRealizeData

        _init(...args: any[]): void;
    }

    type SceneClass = typeof Scene;
    type ShaderClass = typeof Shader;
    type ShaderMaterialClass = typeof ShaderMaterial;
    type SkeletonClass = typeof Skeleton;
    type SkeletonHelperClass = typeof SkeletonHelper;
    type SkinnedMeshClass = typeof SkinnedMesh;
    type SpotLightClass = typeof SpotLight;
    type SpotLightShadowClass = typeof SpotLightShadow;
    type SpriteClass = typeof Sprite;
    type SpriteMaterialClass = typeof SpriteMaterial;
    type TextureClass = typeof Texture;
    abstract class Uniform {
        static $gtype: GObject.GType<Uniform>;

        // Constructors of Gthree.Uniform

        _init(...args: any[]): void;

        // Own methods of Gthree.Uniform

        copy_value(source: Uniform): void;
        get_name(): string;
        get_qname(): GLib.Quark;
        get_type(): UniformType;
        load(renderer: Renderer): void;
        set_float(value: number): void;
        set_int(value: number): void;
        set_location(location: number): void;
        set_needs_update(needs_update: boolean): void;
        set_texture(value: Texture): void;
        set_vec2(value: Graphene.Vec2): void;
        set_vec3(value: Graphene.Vec3): void;
        set_vec4(value: Graphene.Vec4): void;
    }

    type UniformsClass = typeof Uniforms;
    class UniformsDefinition {
        static $gtype: GObject.GType<UniformsDefinition>;

        // Own fields of Gthree.UniformsDefinition

        name: string;
        type: UniformType;
        value: any;

        // Constructors of Gthree.UniformsDefinition

        _init(...args: any[]): void;
    }

    type VectorKeyframeTrackClass = typeof VectorKeyframeTrack;
    type AttributeName = number;
    /**
     * Name of the imported GIR library
     * `see` https://gitlab.gnome.org/GNOME/gjs/-/blob/master/gi/ns.cpp#L188
     */
    const __name__: string;
    /**
     * Version of the imported GIR library
     * `see` https://gitlab.gnome.org/GNOME/gjs/-/blob/master/gi/ns.cpp#L189
     */
    const __version__: string;
}

export default Gthree;
// END
