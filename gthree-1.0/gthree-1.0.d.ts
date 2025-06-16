/**
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 *
 * The based EJS template file is used for the generated .d.ts file of each GIR module like Gtk-4.0, GObject-2.0, ...
 */

import '@girs/gjs';

// Module dependencies
import type cairo from 'cairo';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type Graphene from '@girs/graphene-1.0';
import type GdkPixbuf from '@girs/gdkpixbuf-2.0';
import type Gio from '@girs/gio-2.0';
import type GModule from '@girs/gmodule-2.0';

export namespace Gthree {
    /**
     * Gthree-1.0
     */

    export namespace AttributeType {
        export const $gtype: GObject.GType<AttributeType>;
    }

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

    export namespace BindMode {
        export const $gtype: GObject.GType<BindMode>;
    }

    enum BindMode {
        ATTACHED,
        DETACHED,
    }

    export namespace BlendMode {
        export const $gtype: GObject.GType<BlendMode>;
    }

    enum BlendMode {
        NO,
        NORMAL,
        ADDITIVE,
        SUBTRACTIVE,
        MULTIPLY,
        CUSTOM,
    }

    export namespace CullFace {
        export const $gtype: GObject.GType<CullFace>;
    }

    enum CullFace {
        NONE,
        FRONT,
        BACK,
        FRONT_BACK,
    }

    export namespace DataType {
        export const $gtype: GObject.GType<DataType>;
    }

    enum DataType {
        UNSIGNED_BYTE,
        BYTE,
    }

    export namespace DepthPackingFormat {
        export const $gtype: GObject.GType<DepthPackingFormat>;
    }

    enum DepthPackingFormat {
        BASIC,
        RGBA,
    }

    export namespace DrawMode {
        export const $gtype: GObject.GType<DrawMode>;
    }

    enum DrawMode {
        TRIANGLES,
        TRIANGLE_STRIP,
        TRIANGLE_FAN,
    }

    export namespace EncodingFormat {
        export const $gtype: GObject.GType<EncodingFormat>;
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

    export namespace EndingMode {
        export const $gtype: GObject.GType<EndingMode>;
    }

    enum EndingMode {
        ZERO_CURVATURE,
        ZERO_SLOPE,
        WRAP_AROUND,
    }

    export namespace Filter {
        export const $gtype: GObject.GType<Filter>;
    }

    enum Filter {
        NEAREST,
        NEAREST_MIPMAP_NEAREST,
        NEAREST_MIPMAP_LINEAR,
        LINEAR,
        LINEAR_MIPMAP_NEAREST,
        LINEAR_MIPMAP_LINEAR,
    }

    export namespace FogStyle {
        export const $gtype: GObject.GType<FogStyle>;
    }

    enum FogStyle {
        LINEAR,
        EXP2,
    }

    export namespace FrontFaceDirection {
        export const $gtype: GObject.GType<FrontFaceDirection>;
    }

    enum FrontFaceDirection {
        CW,
        CCW,
    }

    export namespace InterpolationMode {
        export const $gtype: GObject.GType<InterpolationMode>;
    }

    enum InterpolationMode {
        DISCRETE,
        LINEAR,
        SMOOTH,
    }

    export namespace LoaderError {
        export const $gtype: GObject.GType<LoaderError>;
    }

    enum LoaderError {
        LOADER_ERROR_FAIL,
    }

    export namespace LoopMode {
        export const $gtype: GObject.GType<LoopMode>;
    }

    enum LoopMode {
        ONCE,
        REPEAT,
        PINGPONG,
    }

    export namespace Mapping {
        export const $gtype: GObject.GType<Mapping>;
    }

    enum Mapping {
        UV,
        CUBE_REFLECTION,
        CUBE_REFRACTION,
        SPHERICAL_REFLECTION,
        SPHERICAL_REFRACTION,
    }

    export namespace NormalMapType {
        export const $gtype: GObject.GType<NormalMapType>;
    }

    enum NormalMapType {
        TANGENT_SPACE,
        OBJECT_SPACE,
    }

    export namespace Operation {
        export const $gtype: GObject.GType<Operation>;
    }

    enum Operation {
        MULTIPLY,
        MIX,
        ADD,
    }

    export namespace Precision {
        export const $gtype: GObject.GType<Precision>;
    }

    enum Precision {
        LOW,
        MEDIUM,
        HIGH,
    }

    export namespace ShadingType {
        export const $gtype: GObject.GType<ShadingType>;
    }

    enum ShadingType {
        NONE,
        FLAT,
        SMOOTH,
    }

    export namespace ShadowMapType {
        export const $gtype: GObject.GType<ShadowMapType>;
    }

    enum ShadowMapType {
        BASIC,
        PCF,
        PCF_SOFT,
    }

    export namespace Side {
        export const $gtype: GObject.GType<Side>;
    }

    enum Side {
        FRONT,
        BACK,
        DOUBLE,
    }

    export namespace TextureFormat {
        export const $gtype: GObject.GType<TextureFormat>;
    }

    enum TextureFormat {
        RGBA,
        RGB,
    }

    export namespace UniformType {
        export const $gtype: GObject.GType<UniformType>;
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

    export namespace ValueType {
        export const $gtype: GObject.GType<ValueType>;
    }

    enum ValueType {
        COLOR,
        NUMBER,
        QUATERNION,
        VECTOR,
    }

    export namespace Wrapping {
        export const $gtype: GObject.GType<Wrapping>;
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
    namespace AmbientLight {
        // Signal signatures
        interface SignalSignatures extends Light.SignalSignatures {
            'notify::color': (pspec: GObject.ParamSpec) => void;
            'notify::intensity': (pspec: GObject.ParamSpec) => void;
            'notify::first-child': (pspec: GObject.ParamSpec) => void;
            'notify::last-child': (pspec: GObject.ParamSpec) => void;
            'notify::next-sibling': (pspec: GObject.ParamSpec) => void;
            'notify::parent': (pspec: GObject.ParamSpec) => void;
            'notify::previous-sibling': (pspec: GObject.ParamSpec) => void;
            'notify::visible': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Light.ConstructorProps {}
    }

    class AmbientLight extends Light {
        static $gtype: GObject.GType<AmbientLight>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: AmbientLight.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<AmbientLight.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](color: Graphene.Vec3): AmbientLight;
        // Conflicted with Gthree.Light.new

        static ['new'](...args: never[]): any;

        // Signals

        connect<K extends keyof AmbientLight.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, AmbientLight.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof AmbientLight.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, AmbientLight.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof AmbientLight.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<AmbientLight.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;
    }

    namespace AnimationAction {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    class AnimationAction extends GObject.Object {
        static $gtype: GObject.GType<AnimationAction>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: AnimationAction.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<AnimationAction.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](mixer: AnimationMixer, clip: AnimationClip, local_root: Object): AnimationAction;

        // Signals

        connect<K extends keyof AnimationAction.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, AnimationAction.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof AnimationAction.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, AnimationAction.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof AnimationAction.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<AnimationAction.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

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
        set_loop_mode(loop_mode: LoopMode | null, repetitions: number): void;
        set_paused(paused: boolean): void;
        set_time(time: number): void;
        start_at(time: number): void;
        stop(): void;
        stop_fading(): void;
        stop_warping(): void;
        sync_with(other_action: AnimationAction): void;
        warp(start_time_scale: number, end_time_scale: number, duration: number): void;
    }

    namespace AnimationClip {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    class AnimationClip extends GObject.Object {
        static $gtype: GObject.GType<AnimationClip>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: AnimationClip.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<AnimationClip.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](name: string, duration: number): AnimationClip;

        // Signals

        connect<K extends keyof AnimationClip.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, AnimationClip.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof AnimationClip.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, AnimationClip.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof AnimationClip.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<AnimationClip.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        add_track(track: KeyframeTrack): void;
        get_duration(): number;
        get_n_tracks(): number;
        get_name(): string;
        optimize(): void;
        reset_duration(): void;
        trim(): void;
    }

    namespace AnimationMixer {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            finished: (arg0: AnimationAction, arg1: number) => void;
            loop: (arg0: AnimationAction, arg1: number) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    class AnimationMixer extends GObject.Object {
        static $gtype: GObject.GType<AnimationMixer>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: AnimationMixer.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<AnimationMixer.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](root: Object): AnimationMixer;

        // Signals

        connect<K extends keyof AnimationMixer.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, AnimationMixer.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof AnimationMixer.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, AnimationMixer.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof AnimationMixer.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<AnimationMixer.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

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

    namespace Attribute {
        // Signal signatures
        interface SignalSignatures extends Resource.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends Resource.ConstructorProps {}
    }

    class Attribute extends Resource {
        static $gtype: GObject.GType<Attribute>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Attribute.SignalSignatures;

        // Constructors

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

        // Signals

        connect<K extends keyof Attribute.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Attribute.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Attribute.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Attribute.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Attribute.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Attribute.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods

        static type_length(type: AttributeType): number;

        // Methods

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

    namespace BloomPass {
        // Signal signatures
        interface SignalSignatures extends Pass.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends Pass.ConstructorProps {}
    }

    class BloomPass extends Pass {
        static $gtype: GObject.GType<BloomPass>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: BloomPass.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<BloomPass.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](strength: number, sigma: number, resolution: number): BloomPass;

        // Signals

        connect<K extends keyof BloomPass.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, BloomPass.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof BloomPass.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, BloomPass.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof BloomPass.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<BloomPass.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;
    }

    namespace Bone {
        // Signal signatures
        interface SignalSignatures extends Object.SignalSignatures {
            'notify::first-child': (pspec: GObject.ParamSpec) => void;
            'notify::last-child': (pspec: GObject.ParamSpec) => void;
            'notify::next-sibling': (pspec: GObject.ParamSpec) => void;
            'notify::parent': (pspec: GObject.ParamSpec) => void;
            'notify::previous-sibling': (pspec: GObject.ParamSpec) => void;
            'notify::visible': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Object.ConstructorProps {}
    }

    class Bone extends Object {
        static $gtype: GObject.GType<Bone>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Bone.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Bone.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): Bone;

        // Signals

        connect<K extends keyof Bone.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Bone.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Bone.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Bone.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Bone.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Bone.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;
    }

    namespace Camera {
        // Signal signatures
        interface SignalSignatures extends Object.SignalSignatures {
            'notify::far': (pspec: GObject.ParamSpec) => void;
            'notify::near': (pspec: GObject.ParamSpec) => void;
            'notify::first-child': (pspec: GObject.ParamSpec) => void;
            'notify::last-child': (pspec: GObject.ParamSpec) => void;
            'notify::next-sibling': (pspec: GObject.ParamSpec) => void;
            'notify::parent': (pspec: GObject.ParamSpec) => void;
            'notify::previous-sibling': (pspec: GObject.ParamSpec) => void;
            'notify::visible': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Object.ConstructorProps {
            far: number;
            near: number;
        }
    }

    class Camera extends Object {
        static $gtype: GObject.GType<Camera>;

        // Properties

        get far(): number;
        set far(val: number);
        get near(): number;
        set near(val: number);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Camera.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Camera.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        connect<K extends keyof Camera.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Camera.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Camera.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Camera.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Camera.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Camera.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods

        vfunc_update(): void;

        // Methods

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

    namespace ClearPass {
        // Signal signatures
        interface SignalSignatures extends Pass.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends Pass.ConstructorProps {}
    }

    class ClearPass extends Pass {
        static $gtype: GObject.GType<ClearPass>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: ClearPass.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<ClearPass.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](color: Graphene.Vec3): ClearPass;

        // Signals

        connect<K extends keyof ClearPass.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ClearPass.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof ClearPass.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ClearPass.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof ClearPass.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<ClearPass.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        set_clear_depth(clear_depth: boolean): void;
    }

    namespace ColorKeyframeTrack {
        // Signal signatures
        interface SignalSignatures extends KeyframeTrack.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends KeyframeTrack.ConstructorProps {}
    }

    class ColorKeyframeTrack extends KeyframeTrack {
        static $gtype: GObject.GType<ColorKeyframeTrack>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: ColorKeyframeTrack.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<ColorKeyframeTrack.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](name: string, times: AttributeArray, values: AttributeArray): ColorKeyframeTrack;

        // Signals

        connect<K extends keyof ColorKeyframeTrack.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ColorKeyframeTrack.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof ColorKeyframeTrack.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ColorKeyframeTrack.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof ColorKeyframeTrack.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<ColorKeyframeTrack.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;
    }

    namespace CubeTexture {
        // Signal signatures
        interface SignalSignatures extends Texture.SignalSignatures {
            'notify::pixbuf': (pspec: GObject.ParamSpec) => void;
            'notify::surface': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Texture.ConstructorProps {}
    }

    class CubeTexture extends Texture {
        static $gtype: GObject.GType<CubeTexture>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: CubeTexture.SignalSignatures;

        // Constructors

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

        // Signals

        connect<K extends keyof CubeTexture.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, CubeTexture.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof CubeTexture.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, CubeTexture.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof CubeTexture.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<CubeTexture.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;
    }

    namespace CubicInterpolant {
        // Signal signatures
        interface SignalSignatures extends Interpolant.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends Interpolant.ConstructorProps {}
    }

    class CubicInterpolant extends Interpolant {
        static $gtype: GObject.GType<CubicInterpolant>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: CubicInterpolant.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<CubicInterpolant.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](parameter_positions: AttributeArray, sample_values: AttributeArray): CubicInterpolant;

        // Signals

        connect<K extends keyof CubicInterpolant.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, CubicInterpolant.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof CubicInterpolant.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, CubicInterpolant.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof CubicInterpolant.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<CubicInterpolant.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;
    }

    namespace DirectionalLight {
        // Signal signatures
        interface SignalSignatures extends Light.SignalSignatures {
            'notify::target': (pspec: GObject.ParamSpec) => void;
            'notify::color': (pspec: GObject.ParamSpec) => void;
            'notify::intensity': (pspec: GObject.ParamSpec) => void;
            'notify::first-child': (pspec: GObject.ParamSpec) => void;
            'notify::last-child': (pspec: GObject.ParamSpec) => void;
            'notify::next-sibling': (pspec: GObject.ParamSpec) => void;
            'notify::parent': (pspec: GObject.ParamSpec) => void;
            'notify::previous-sibling': (pspec: GObject.ParamSpec) => void;
            'notify::visible': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Light.ConstructorProps {
            target: Object;
        }
    }

    class DirectionalLight extends Light {
        static $gtype: GObject.GType<DirectionalLight>;

        // Properties

        get target(): Object;
        set target(val: Object);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: DirectionalLight.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<DirectionalLight.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](color: Graphene.Vec3, intensity: number): DirectionalLight;
        // Conflicted with Gthree.Light.new

        static ['new'](...args: never[]): any;

        // Signals

        connect<K extends keyof DirectionalLight.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, DirectionalLight.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof DirectionalLight.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, DirectionalLight.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof DirectionalLight.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<DirectionalLight.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        set_target(target: Object): void;
    }

    namespace DirectionalLightShadow {
        // Signal signatures
        interface SignalSignatures extends LightShadow.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends LightShadow.ConstructorProps {}
    }

    class DirectionalLightShadow extends LightShadow {
        static $gtype: GObject.GType<DirectionalLightShadow>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: DirectionalLightShadow.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<DirectionalLightShadow.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        connect<K extends keyof DirectionalLightShadow.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, DirectionalLightShadow.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof DirectionalLightShadow.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, DirectionalLightShadow.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof DirectionalLightShadow.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<DirectionalLightShadow.SignalSignatures[K]> extends [any, ...infer Q]
                ? Q
                : never
        ): void;
        emit(signal: string, ...args: any[]): void;
    }

    namespace DiscreteInterpolant {
        // Signal signatures
        interface SignalSignatures extends Interpolant.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends Interpolant.ConstructorProps {}
    }

    class DiscreteInterpolant extends Interpolant {
        static $gtype: GObject.GType<DiscreteInterpolant>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: DiscreteInterpolant.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<DiscreteInterpolant.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](parameter_positions: AttributeArray, sample_values: AttributeArray): DiscreteInterpolant;

        // Signals

        connect<K extends keyof DiscreteInterpolant.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, DiscreteInterpolant.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof DiscreteInterpolant.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, DiscreteInterpolant.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof DiscreteInterpolant.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<DiscreteInterpolant.SignalSignatures[K]> extends [any, ...infer Q]
                ? Q
                : never
        ): void;
        emit(signal: string, ...args: any[]): void;
    }

    namespace EffectComposer {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    class EffectComposer extends GObject.Object {
        static $gtype: GObject.GType<EffectComposer>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: EffectComposer.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<EffectComposer.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): EffectComposer;

        // Signals

        connect<K extends keyof EffectComposer.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, EffectComposer.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof EffectComposer.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, EffectComposer.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof EffectComposer.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<EffectComposer.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        add_pass(pass: Pass): void;
        render(renderer: Renderer, delta_time: number): void;
        reset(renderer: Renderer, render_target: RenderTarget): void;
        set_size(width: number, height: number): void;
    }

    namespace Fog {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    class Fog extends GObject.Object {
        static $gtype: GObject.GType<Fog>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Fog.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Fog.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static new_exp2(color: Graphene.Vec3, density: number): Fog;

        static new_linear(color: Graphene.Vec3, near: number, far: number): Fog;

        // Signals

        connect<K extends keyof Fog.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Fog.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Fog.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Fog.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Fog.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Fog.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        get_color(): Graphene.Vec3;
        get_density(): number;
        get_far(): number;
        get_near(): number;
        get_style(): FogStyle;
        set_color(color: Graphene.Vec3): void;
        set_density(density: number): void;
        set_far(far: number): void;
        set_near(near: number): void;
        set_style(style: FogStyle | null): void;
    }

    namespace FullscreenQuadPass {
        // Signal signatures
        interface SignalSignatures extends Pass.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends Pass.ConstructorProps {}
    }

    class FullscreenQuadPass extends Pass {
        static $gtype: GObject.GType<FullscreenQuadPass>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: FullscreenQuadPass.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<FullscreenQuadPass.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](material: Material): FullscreenQuadPass;

        // Signals

        connect<K extends keyof FullscreenQuadPass.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, FullscreenQuadPass.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof FullscreenQuadPass.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, FullscreenQuadPass.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof FullscreenQuadPass.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<FullscreenQuadPass.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        set_material(material: Material): void;
    }

    namespace Geometry {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    class Geometry extends GObject.Object {
        static $gtype: GObject.GType<Geometry>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Geometry.SignalSignatures;

        // Fields

        influences: any[];

        // Constructors

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

        // Signals

        connect<K extends keyof Geometry.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Geometry.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Geometry.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Geometry.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Geometry.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Geometry.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

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

    namespace Group {
        // Signal signatures
        interface SignalSignatures extends Object.SignalSignatures {
            'notify::first-child': (pspec: GObject.ParamSpec) => void;
            'notify::last-child': (pspec: GObject.ParamSpec) => void;
            'notify::next-sibling': (pspec: GObject.ParamSpec) => void;
            'notify::parent': (pspec: GObject.ParamSpec) => void;
            'notify::previous-sibling': (pspec: GObject.ParamSpec) => void;
            'notify::visible': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Object.ConstructorProps {}
    }

    class Group extends Object {
        static $gtype: GObject.GType<Group>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Group.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Group.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): Group;

        // Signals

        connect<K extends keyof Group.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Group.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Group.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Group.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Group.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Group.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;
    }

    namespace HemisphereLight {
        // Signal signatures
        interface SignalSignatures extends Light.SignalSignatures {
            'notify::ground-color': (pspec: GObject.ParamSpec) => void;
            'notify::color': (pspec: GObject.ParamSpec) => void;
            'notify::intensity': (pspec: GObject.ParamSpec) => void;
            'notify::first-child': (pspec: GObject.ParamSpec) => void;
            'notify::last-child': (pspec: GObject.ParamSpec) => void;
            'notify::next-sibling': (pspec: GObject.ParamSpec) => void;
            'notify::parent': (pspec: GObject.ParamSpec) => void;
            'notify::previous-sibling': (pspec: GObject.ParamSpec) => void;
            'notify::visible': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Light.ConstructorProps {
            ground_color: Graphene.Vec3;
            groundColor: Graphene.Vec3;
        }
    }

    class HemisphereLight extends Light {
        static $gtype: GObject.GType<HemisphereLight>;

        // Properties

        get ground_color(): Graphene.Vec3;
        set ground_color(val: Graphene.Vec3);
        get groundColor(): Graphene.Vec3;
        set groundColor(val: Graphene.Vec3);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: HemisphereLight.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<HemisphereLight.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](sky_color: Graphene.Vec3, ground_color: Graphene.Vec3, intensity: number): HemisphereLight;
        // Conflicted with Gthree.Light.new

        static ['new'](...args: never[]): any;

        // Signals

        connect<K extends keyof HemisphereLight.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, HemisphereLight.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof HemisphereLight.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, HemisphereLight.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof HemisphereLight.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<HemisphereLight.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;
    }

    namespace Interpolant {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    class Interpolant extends GObject.Object {
        static $gtype: GObject.GType<Interpolant>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Interpolant.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Interpolant.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        connect<K extends keyof Interpolant.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Interpolant.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Interpolant.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Interpolant.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Interpolant.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Interpolant.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods

        vfunc_interpolate(i1: number, t0: number, t: number, t1: number, dest: AttributeArray): void;
        vfunc_interval_changed(i1: number, t0: number, t1: number): void;

        // Methods

        get_end_ending_mode(): EndingMode;
        get_n_positions(): number;
        get_sample_size(): number;
        get_sample_type(): AttributeType;
        get_start_ending_mode(): EndingMode;
        set_settings(settings: InterpolantSettings): void;
    }

    namespace InterpolantSettings {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    class InterpolantSettings extends GObject.Object {
        static $gtype: GObject.GType<InterpolantSettings>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: InterpolantSettings.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<InterpolantSettings.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): InterpolantSettings;

        // Signals

        connect<K extends keyof InterpolantSettings.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, InterpolantSettings.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof InterpolantSettings.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, InterpolantSettings.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof InterpolantSettings.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<InterpolantSettings.SignalSignatures[K]> extends [any, ...infer Q]
                ? Q
                : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        get_end_ending_mode(): EndingMode;
        get_start_ending_mode(): EndingMode;
        set_end_ending_mode(mode: EndingMode | null): void;
        set_start_ending_mode(mode: EndingMode | null): void;
    }

    namespace KeyframeTrack {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    class KeyframeTrack extends GObject.Object {
        static $gtype: GObject.GType<KeyframeTrack>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: KeyframeTrack.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<KeyframeTrack.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        connect<K extends keyof KeyframeTrack.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, KeyframeTrack.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof KeyframeTrack.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, KeyframeTrack.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof KeyframeTrack.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<KeyframeTrack.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        get_end_time(): number;
        get_name(): string;
        get_value_size(): number;
        get_value_type(): ValueType;
        optimize(): void;
        scale(time_scale: number): void;
        set_interpolation(interpolation: InterpolationMode | null): void;
        trim(start_time: number, end_time: number): void;
    }

    namespace Light {
        // Signal signatures
        interface SignalSignatures extends Object.SignalSignatures {
            'notify::color': (pspec: GObject.ParamSpec) => void;
            'notify::intensity': (pspec: GObject.ParamSpec) => void;
            'notify::first-child': (pspec: GObject.ParamSpec) => void;
            'notify::last-child': (pspec: GObject.ParamSpec) => void;
            'notify::next-sibling': (pspec: GObject.ParamSpec) => void;
            'notify::parent': (pspec: GObject.ParamSpec) => void;
            'notify::previous-sibling': (pspec: GObject.ParamSpec) => void;
            'notify::visible': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Object.ConstructorProps {
            color: Graphene.Vec3;
            intensity: number;
        }
    }

    class Light extends Object {
        static $gtype: GObject.GType<Light>;

        // Properties

        get color(): Graphene.Vec3;
        set color(val: Graphene.Vec3);
        get intensity(): number;
        set intensity(val: number);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Light.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Light.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): Light;

        // Signals

        connect<K extends keyof Light.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Light.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Light.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Light.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Light.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Light.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods

        vfunc_setup(camera: Camera, light_setup: LightSetup): void;

        // Methods

        get_color(): Graphene.Vec3;
        get_intensity(): number;
        set_color(color: Graphene.Vec3): void;
        set_intensity(intensity: number): void;
    }

    namespace LightShadow {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    class LightShadow extends GObject.Object {
        static $gtype: GObject.GType<LightShadow>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: LightShadow.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<LightShadow.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        connect<K extends keyof LightShadow.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, LightShadow.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof LightShadow.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, LightShadow.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof LightShadow.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<LightShadow.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        get_bias(): number;
        get_map_height(): number;
        get_map_width(): number;
        get_radius(): number;
        set_bias(bias: number): void;
        set_map_size(width: number, height: number): void;
        set_radius(radiuso: number): void;
    }

    namespace Line {
        // Signal signatures
        interface SignalSignatures extends Object.SignalSignatures {
            'notify::geometry': (pspec: GObject.ParamSpec) => void;
            'notify::material': (pspec: GObject.ParamSpec) => void;
            'notify::first-child': (pspec: GObject.ParamSpec) => void;
            'notify::last-child': (pspec: GObject.ParamSpec) => void;
            'notify::next-sibling': (pspec: GObject.ParamSpec) => void;
            'notify::parent': (pspec: GObject.ParamSpec) => void;
            'notify::previous-sibling': (pspec: GObject.ParamSpec) => void;
            'notify::visible': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Object.ConstructorProps {
            geometry: Geometry;
            material: Material;
        }
    }

    class Line extends Object {
        static $gtype: GObject.GType<Line>;

        // Properties

        get geometry(): Geometry;
        get material(): Material;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Line.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Line.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](geometry: Geometry, material: Material): Line;
        // Conflicted with Gthree.Object.new

        static ['new'](...args: never[]): any;

        // Signals

        connect<K extends keyof Line.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Line.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Line.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Line.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Line.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Line.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;
    }

    namespace LineBasicMaterial {
        // Signal signatures
        interface SignalSignatures extends Material.SignalSignatures {
            'notify::color': (pspec: GObject.ParamSpec) => void;
            'notify::line-width': (pspec: GObject.ParamSpec) => void;
            'notify::alpha-test': (pspec: GObject.ParamSpec) => void;
            'notify::clip-intersection': (pspec: GObject.ParamSpec) => void;
            'notify::fog': (pspec: GObject.ParamSpec) => void;
            'notify::opacity': (pspec: GObject.ParamSpec) => void;
            'notify::transparent': (pspec: GObject.ParamSpec) => void;
            'notify::vertex-colors': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Material.ConstructorProps {
            color: Graphene.Vec3;
            line_width: number;
            lineWidth: number;
        }
    }

    class LineBasicMaterial extends Material {
        static $gtype: GObject.GType<LineBasicMaterial>;

        // Properties

        get color(): Graphene.Vec3;
        set color(val: Graphene.Vec3);
        get line_width(): number;
        set line_width(val: number);
        get lineWidth(): number;
        set lineWidth(val: number);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: LineBasicMaterial.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<LineBasicMaterial.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): LineBasicMaterial;

        // Signals

        connect<K extends keyof LineBasicMaterial.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, LineBasicMaterial.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof LineBasicMaterial.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, LineBasicMaterial.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof LineBasicMaterial.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<LineBasicMaterial.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        get_color(): Graphene.Vec3;
        get_line_width(): number;
        set_color(color: Graphene.Vec3): void;
        set_line_width(line_width: number): void;
    }

    namespace LineSegments {
        // Signal signatures
        interface SignalSignatures extends Line.SignalSignatures {
            'notify::geometry': (pspec: GObject.ParamSpec) => void;
            'notify::material': (pspec: GObject.ParamSpec) => void;
            'notify::first-child': (pspec: GObject.ParamSpec) => void;
            'notify::last-child': (pspec: GObject.ParamSpec) => void;
            'notify::next-sibling': (pspec: GObject.ParamSpec) => void;
            'notify::parent': (pspec: GObject.ParamSpec) => void;
            'notify::previous-sibling': (pspec: GObject.ParamSpec) => void;
            'notify::visible': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Line.ConstructorProps {}
    }

    class LineSegments extends Line {
        static $gtype: GObject.GType<LineSegments>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: LineSegments.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<LineSegments.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](geometry: Geometry, material: Material): LineSegments;
        // Conflicted with Gthree.Object.new

        static ['new'](...args: never[]): any;

        // Signals

        connect<K extends keyof LineSegments.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, LineSegments.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof LineSegments.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, LineSegments.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof LineSegments.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<LineSegments.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;
    }

    namespace LinearInterpolant {
        // Signal signatures
        interface SignalSignatures extends Interpolant.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends Interpolant.ConstructorProps {}
    }

    class LinearInterpolant extends Interpolant {
        static $gtype: GObject.GType<LinearInterpolant>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: LinearInterpolant.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<LinearInterpolant.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](parameter_positions: AttributeArray, sample_values: AttributeArray): LinearInterpolant;

        // Signals

        connect<K extends keyof LinearInterpolant.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, LinearInterpolant.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof LinearInterpolant.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, LinearInterpolant.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof LinearInterpolant.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<LinearInterpolant.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;
    }

    namespace Loader {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    class Loader extends GObject.Object {
        static $gtype: GObject.GType<Loader>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Loader.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Loader.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        connect<K extends keyof Loader.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Loader.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Loader.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Loader.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Loader.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Loader.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods

        static error_quark(): GLib.Quark;

        // Methods

        get_n_animations(): number;
        get_n_materials(): number;
        get_n_scenes(): number;
    }

    namespace Material {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::alpha-test': (pspec: GObject.ParamSpec) => void;
            'notify::clip-intersection': (pspec: GObject.ParamSpec) => void;
            'notify::fog': (pspec: GObject.ParamSpec) => void;
            'notify::opacity': (pspec: GObject.ParamSpec) => void;
            'notify::transparent': (pspec: GObject.ParamSpec) => void;
            'notify::vertex-colors': (pspec: GObject.ParamSpec) => void;
        }

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

        // Properties

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

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Material.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Material.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        connect<K extends keyof Material.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Material.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Material.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Material.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Material.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Material.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods

        vfunc_load_default_attribute(attribute_location: number, attribute: GLib.Quark): void;
        vfunc_needs_camera_pos(): boolean;
        vfunc_needs_lights(): boolean;
        vfunc_needs_view_matrix(): boolean;
        vfunc_set_params(params: ProgramParameters): void;
        vfunc_set_uniforms(uniforms: Uniforms, camera: Camera, renderer: Renderer): void;

        // Methods

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
        set_blend_mode(mode: BlendMode | null, equation: number, src_factor: number, dst_factor: number): void;
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
        set_side(side: Side | null): void;
        set_uniforms(uniforms: Uniforms, camera: Camera, renderer: Renderer): void;
        set_vertex_colors(vertex_colors: boolean): void;
    }

    namespace Mesh {
        // Signal signatures
        interface SignalSignatures extends Object.SignalSignatures {
            'notify::geometry': (pspec: GObject.ParamSpec) => void;
            'notify::materials': (pspec: GObject.ParamSpec) => void;
            'notify::first-child': (pspec: GObject.ParamSpec) => void;
            'notify::last-child': (pspec: GObject.ParamSpec) => void;
            'notify::next-sibling': (pspec: GObject.ParamSpec) => void;
            'notify::parent': (pspec: GObject.ParamSpec) => void;
            'notify::previous-sibling': (pspec: GObject.ParamSpec) => void;
            'notify::visible': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Object.ConstructorProps {
            geometry: Geometry;
            materials: any[];
        }
    }

    class Mesh extends Object {
        static $gtype: GObject.GType<Mesh>;

        // Properties

        get geometry(): Geometry;
        get materials(): any[];
        set materials(val: any[]);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Mesh.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Mesh.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](geometry: Geometry, material: Material): Mesh;
        // Conflicted with Gthree.Object.new

        static ['new'](...args: never[]): any;

        // Signals

        connect<K extends keyof Mesh.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Mesh.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Mesh.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Mesh.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Mesh.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Mesh.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        add_material(material: Material): void;
        get_draw_mode(): DrawMode;
        get_n_materials(): number;
        has_morph_targets(): boolean;
        set_draw_mode(mode: DrawMode | null): void;
        set_material(index: number, material: Material): void;
        update_morph_targets(): void;
    }

    namespace MeshBasicMaterial {
        // Signal signatures
        interface SignalSignatures extends MeshMaterial.SignalSignatures {
            'notify::color': (pspec: GObject.ParamSpec) => void;
            'notify::env-map': (pspec: GObject.ParamSpec) => void;
            'notify::map': (pspec: GObject.ParamSpec) => void;
            'notify::reflectivity': (pspec: GObject.ParamSpec) => void;
            'notify::refraction-ratio': (pspec: GObject.ParamSpec) => void;
            'notify::morph-normals': (pspec: GObject.ParamSpec) => void;
            'notify::morph-targets': (pspec: GObject.ParamSpec) => void;
            'notify::skinning': (pspec: GObject.ParamSpec) => void;
            'notify::wireframe': (pspec: GObject.ParamSpec) => void;
            'notify::wireframe-line-width': (pspec: GObject.ParamSpec) => void;
            'notify::alpha-test': (pspec: GObject.ParamSpec) => void;
            'notify::clip-intersection': (pspec: GObject.ParamSpec) => void;
            'notify::fog': (pspec: GObject.ParamSpec) => void;
            'notify::opacity': (pspec: GObject.ParamSpec) => void;
            'notify::transparent': (pspec: GObject.ParamSpec) => void;
            'notify::vertex-colors': (pspec: GObject.ParamSpec) => void;
        }

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

        // Properties

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

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: MeshBasicMaterial.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<MeshBasicMaterial.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): MeshBasicMaterial;

        // Signals

        connect<K extends keyof MeshBasicMaterial.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, MeshBasicMaterial.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof MeshBasicMaterial.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, MeshBasicMaterial.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof MeshBasicMaterial.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<MeshBasicMaterial.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        get_color(): Graphene.Vec3;
        get_combine(): Operation;
        get_reflectivity(): number;
        get_refraction_ratio(): number;
        set_color(color: Graphene.Vec3): void;
        set_combine(combine: Operation | null): void;
        set_env_map(texture: Texture): void;
        set_map(texture: Texture): void;
        set_reflectivity(reflectivity: number): void;
        set_refraction_ratio(ratio: number): void;
    }

    namespace MeshDepthMaterial {
        // Signal signatures
        interface SignalSignatures extends MeshMaterial.SignalSignatures {
            'notify::morph-normals': (pspec: GObject.ParamSpec) => void;
            'notify::morph-targets': (pspec: GObject.ParamSpec) => void;
            'notify::skinning': (pspec: GObject.ParamSpec) => void;
            'notify::wireframe': (pspec: GObject.ParamSpec) => void;
            'notify::wireframe-line-width': (pspec: GObject.ParamSpec) => void;
            'notify::alpha-test': (pspec: GObject.ParamSpec) => void;
            'notify::clip-intersection': (pspec: GObject.ParamSpec) => void;
            'notify::fog': (pspec: GObject.ParamSpec) => void;
            'notify::opacity': (pspec: GObject.ParamSpec) => void;
            'notify::transparent': (pspec: GObject.ParamSpec) => void;
            'notify::vertex-colors': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends MeshMaterial.ConstructorProps {}
    }

    class MeshDepthMaterial extends MeshMaterial {
        static $gtype: GObject.GType<MeshDepthMaterial>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: MeshDepthMaterial.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<MeshDepthMaterial.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): MeshDepthMaterial;

        // Signals

        connect<K extends keyof MeshDepthMaterial.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, MeshDepthMaterial.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof MeshDepthMaterial.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, MeshDepthMaterial.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof MeshDepthMaterial.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<MeshDepthMaterial.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        get_depth_packing_format(): DepthPackingFormat;
        set_depth_packing_format(format: DepthPackingFormat | null): void;
    }

    namespace MeshDistanceMaterial {
        // Signal signatures
        interface SignalSignatures extends MeshMaterial.SignalSignatures {
            'notify::morph-normals': (pspec: GObject.ParamSpec) => void;
            'notify::morph-targets': (pspec: GObject.ParamSpec) => void;
            'notify::skinning': (pspec: GObject.ParamSpec) => void;
            'notify::wireframe': (pspec: GObject.ParamSpec) => void;
            'notify::wireframe-line-width': (pspec: GObject.ParamSpec) => void;
            'notify::alpha-test': (pspec: GObject.ParamSpec) => void;
            'notify::clip-intersection': (pspec: GObject.ParamSpec) => void;
            'notify::fog': (pspec: GObject.ParamSpec) => void;
            'notify::opacity': (pspec: GObject.ParamSpec) => void;
            'notify::transparent': (pspec: GObject.ParamSpec) => void;
            'notify::vertex-colors': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends MeshMaterial.ConstructorProps {}
    }

    class MeshDistanceMaterial extends MeshMaterial {
        static $gtype: GObject.GType<MeshDistanceMaterial>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: MeshDistanceMaterial.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<MeshDistanceMaterial.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): MeshDistanceMaterial;

        // Signals

        connect<K extends keyof MeshDistanceMaterial.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, MeshDistanceMaterial.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof MeshDistanceMaterial.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, MeshDistanceMaterial.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof MeshDistanceMaterial.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<MeshDistanceMaterial.SignalSignatures[K]> extends [any, ...infer Q]
                ? Q
                : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        get_far_distance(): number;
        get_near_distance(): number;
        get_reference_point(): Graphene.Vec3;
        set_far_distance(far_distance: number): void;
        set_near_distance(near_distance: number): void;
        set_reference_point(ref_point: Graphene.Vec3): void;
    }

    namespace MeshLambertMaterial {
        // Signal signatures
        interface SignalSignatures extends MeshMaterial.SignalSignatures {
            'notify::color': (pspec: GObject.ParamSpec) => void;
            'notify::emissive-color': (pspec: GObject.ParamSpec) => void;
            'notify::env-map': (pspec: GObject.ParamSpec) => void;
            'notify::map': (pspec: GObject.ParamSpec) => void;
            'notify::reflectivity': (pspec: GObject.ParamSpec) => void;
            'notify::refraction-ratio': (pspec: GObject.ParamSpec) => void;
            'notify::morph-normals': (pspec: GObject.ParamSpec) => void;
            'notify::morph-targets': (pspec: GObject.ParamSpec) => void;
            'notify::skinning': (pspec: GObject.ParamSpec) => void;
            'notify::wireframe': (pspec: GObject.ParamSpec) => void;
            'notify::wireframe-line-width': (pspec: GObject.ParamSpec) => void;
            'notify::alpha-test': (pspec: GObject.ParamSpec) => void;
            'notify::clip-intersection': (pspec: GObject.ParamSpec) => void;
            'notify::fog': (pspec: GObject.ParamSpec) => void;
            'notify::opacity': (pspec: GObject.ParamSpec) => void;
            'notify::transparent': (pspec: GObject.ParamSpec) => void;
            'notify::vertex-colors': (pspec: GObject.ParamSpec) => void;
        }

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

        // Properties

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

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: MeshLambertMaterial.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<MeshLambertMaterial.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): MeshLambertMaterial;

        // Signals

        connect<K extends keyof MeshLambertMaterial.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, MeshLambertMaterial.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof MeshLambertMaterial.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, MeshLambertMaterial.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof MeshLambertMaterial.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<MeshLambertMaterial.SignalSignatures[K]> extends [any, ...infer Q]
                ? Q
                : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        get_color(): Graphene.Vec3;
        get_combine(): Operation;
        get_emissive_color(): Graphene.Vec3;
        get_reflectivity(): number;
        get_refraction_ratio(): number;
        set_color(color: Graphene.Vec3): void;
        set_combine(combine: Operation | null): void;
        set_emissive_color(color: Graphene.Vec3): void;
        set_env_map(texture: Texture): void;
        set_map(texture: Texture): void;
        set_reflectivity(reflectivity: number): void;
        set_refraction_ratio(ratio: number): void;
    }

    namespace MeshMaterial {
        // Signal signatures
        interface SignalSignatures extends Material.SignalSignatures {
            'notify::morph-normals': (pspec: GObject.ParamSpec) => void;
            'notify::morph-targets': (pspec: GObject.ParamSpec) => void;
            'notify::skinning': (pspec: GObject.ParamSpec) => void;
            'notify::wireframe': (pspec: GObject.ParamSpec) => void;
            'notify::wireframe-line-width': (pspec: GObject.ParamSpec) => void;
            'notify::alpha-test': (pspec: GObject.ParamSpec) => void;
            'notify::clip-intersection': (pspec: GObject.ParamSpec) => void;
            'notify::fog': (pspec: GObject.ParamSpec) => void;
            'notify::opacity': (pspec: GObject.ParamSpec) => void;
            'notify::transparent': (pspec: GObject.ParamSpec) => void;
            'notify::vertex-colors': (pspec: GObject.ParamSpec) => void;
        }

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

        // Properties

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

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: MeshMaterial.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<MeshMaterial.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        connect<K extends keyof MeshMaterial.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, MeshMaterial.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof MeshMaterial.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, MeshMaterial.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof MeshMaterial.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<MeshMaterial.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

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

    namespace MeshNormalMaterial {
        // Signal signatures
        interface SignalSignatures extends MeshMaterial.SignalSignatures {
            'notify::morph-normals': (pspec: GObject.ParamSpec) => void;
            'notify::morph-targets': (pspec: GObject.ParamSpec) => void;
            'notify::skinning': (pspec: GObject.ParamSpec) => void;
            'notify::wireframe': (pspec: GObject.ParamSpec) => void;
            'notify::wireframe-line-width': (pspec: GObject.ParamSpec) => void;
            'notify::alpha-test': (pspec: GObject.ParamSpec) => void;
            'notify::clip-intersection': (pspec: GObject.ParamSpec) => void;
            'notify::fog': (pspec: GObject.ParamSpec) => void;
            'notify::opacity': (pspec: GObject.ParamSpec) => void;
            'notify::transparent': (pspec: GObject.ParamSpec) => void;
            'notify::vertex-colors': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends MeshMaterial.ConstructorProps {}
    }

    class MeshNormalMaterial extends MeshMaterial {
        static $gtype: GObject.GType<MeshNormalMaterial>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: MeshNormalMaterial.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<MeshNormalMaterial.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): MeshNormalMaterial;

        // Signals

        connect<K extends keyof MeshNormalMaterial.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, MeshNormalMaterial.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof MeshNormalMaterial.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, MeshNormalMaterial.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof MeshNormalMaterial.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<MeshNormalMaterial.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        get_shading_type(): ShadingType;
        set_shading_type(shading_type: ShadingType | null): void;
    }

    namespace MeshPhongMaterial {
        // Signal signatures
        interface SignalSignatures extends MeshMaterial.SignalSignatures {
            'notify::color': (pspec: GObject.ParamSpec) => void;
            'notify::emissive-color': (pspec: GObject.ParamSpec) => void;
            'notify::env-map': (pspec: GObject.ParamSpec) => void;
            'notify::flat-shading': (pspec: GObject.ParamSpec) => void;
            'notify::map': (pspec: GObject.ParamSpec) => void;
            'notify::normal-map': (pspec: GObject.ParamSpec) => void;
            'notify::normal-scale': (pspec: GObject.ParamSpec) => void;
            'notify::reflectivity': (pspec: GObject.ParamSpec) => void;
            'notify::refraction-ratio': (pspec: GObject.ParamSpec) => void;
            'notify::shininess': (pspec: GObject.ParamSpec) => void;
            'notify::specular-color': (pspec: GObject.ParamSpec) => void;
            'notify::specular-map': (pspec: GObject.ParamSpec) => void;
            'notify::morph-normals': (pspec: GObject.ParamSpec) => void;
            'notify::morph-targets': (pspec: GObject.ParamSpec) => void;
            'notify::skinning': (pspec: GObject.ParamSpec) => void;
            'notify::wireframe': (pspec: GObject.ParamSpec) => void;
            'notify::wireframe-line-width': (pspec: GObject.ParamSpec) => void;
            'notify::alpha-test': (pspec: GObject.ParamSpec) => void;
            'notify::clip-intersection': (pspec: GObject.ParamSpec) => void;
            'notify::fog': (pspec: GObject.ParamSpec) => void;
            'notify::opacity': (pspec: GObject.ParamSpec) => void;
            'notify::transparent': (pspec: GObject.ParamSpec) => void;
            'notify::vertex-colors': (pspec: GObject.ParamSpec) => void;
        }

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

        // Properties

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

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: MeshPhongMaterial.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<MeshPhongMaterial.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): MeshPhongMaterial;

        // Signals

        connect<K extends keyof MeshPhongMaterial.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, MeshPhongMaterial.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof MeshPhongMaterial.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, MeshPhongMaterial.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof MeshPhongMaterial.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<MeshPhongMaterial.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

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
        set_combine(combine: Operation | null): void;
        set_emissive_color(color: Graphene.Vec3): void;
        set_env_map(texture: Texture): void;
        set_flat_shading(flat_shading: boolean): void;
        set_map(texture: Texture): void;
        set_normal_map(texture: Texture): void;
        set_normal_map_scale(scale: Graphene.Vec2): void;
        set_normal_map_type(type: NormalMapType | null): void;
        set_reflectivity(reflectivity: number): void;
        set_refraction_ratio(ratio: number): void;
        set_shininess(shininess: number): void;
        set_specular_color(color: Graphene.Vec3): void;
        set_specular_map(texture: Texture): void;
    }

    namespace MeshSpecglosMaterial {
        // Signal signatures
        interface SignalSignatures extends MeshMaterial.SignalSignatures {
            'notify::alpha-map': (pspec: GObject.ParamSpec) => void;
            'notify::ao-map': (pspec: GObject.ParamSpec) => void;
            'notify::ao-map-intensity': (pspec: GObject.ParamSpec) => void;
            'notify::bump-map': (pspec: GObject.ParamSpec) => void;
            'notify::bump-scale': (pspec: GObject.ParamSpec) => void;
            'notify::color': (pspec: GObject.ParamSpec) => void;
            'notify::displacement-bias': (pspec: GObject.ParamSpec) => void;
            'notify::displacement-map': (pspec: GObject.ParamSpec) => void;
            'notify::displacement-scale': (pspec: GObject.ParamSpec) => void;
            'notify::emissive-color': (pspec: GObject.ParamSpec) => void;
            'notify::emissive-intensity': (pspec: GObject.ParamSpec) => void;
            'notify::emissive-map': (pspec: GObject.ParamSpec) => void;
            'notify::env-map': (pspec: GObject.ParamSpec) => void;
            'notify::env-map-intensity': (pspec: GObject.ParamSpec) => void;
            'notify::glossiness': (pspec: GObject.ParamSpec) => void;
            'notify::glossiness-map': (pspec: GObject.ParamSpec) => void;
            'notify::light-map': (pspec: GObject.ParamSpec) => void;
            'notify::light-map-intensity': (pspec: GObject.ParamSpec) => void;
            'notify::map': (pspec: GObject.ParamSpec) => void;
            'notify::normal-map': (pspec: GObject.ParamSpec) => void;
            'notify::normal-scale': (pspec: GObject.ParamSpec) => void;
            'notify::refraction-ratio': (pspec: GObject.ParamSpec) => void;
            'notify::specular-factor': (pspec: GObject.ParamSpec) => void;
            'notify::specular-map': (pspec: GObject.ParamSpec) => void;
            'notify::morph-normals': (pspec: GObject.ParamSpec) => void;
            'notify::morph-targets': (pspec: GObject.ParamSpec) => void;
            'notify::skinning': (pspec: GObject.ParamSpec) => void;
            'notify::wireframe': (pspec: GObject.ParamSpec) => void;
            'notify::wireframe-line-width': (pspec: GObject.ParamSpec) => void;
            'notify::alpha-test': (pspec: GObject.ParamSpec) => void;
            'notify::clip-intersection': (pspec: GObject.ParamSpec) => void;
            'notify::fog': (pspec: GObject.ParamSpec) => void;
            'notify::opacity': (pspec: GObject.ParamSpec) => void;
            'notify::transparent': (pspec: GObject.ParamSpec) => void;
            'notify::vertex-colors': (pspec: GObject.ParamSpec) => void;
        }

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

        // Properties

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

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: MeshSpecglosMaterial.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<MeshSpecglosMaterial.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): MeshSpecglosMaterial;

        // Signals

        connect<K extends keyof MeshSpecglosMaterial.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, MeshSpecglosMaterial.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof MeshSpecglosMaterial.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, MeshSpecglosMaterial.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof MeshSpecglosMaterial.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<MeshSpecglosMaterial.SignalSignatures[K]> extends [any, ...infer Q]
                ? Q
                : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

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
        set_normal_map_type(type: NormalMapType | null): void;
        set_refraction_ratio(ratio: number): void;
        set_specular_factor(factor: Graphene.Vec3): void;
        set_specular_map(texture: Texture): void;
    }

    namespace MeshStandardMaterial {
        // Signal signatures
        interface SignalSignatures extends MeshMaterial.SignalSignatures {
            'notify::alpha-map': (pspec: GObject.ParamSpec) => void;
            'notify::ao-map': (pspec: GObject.ParamSpec) => void;
            'notify::ao-map-intensity': (pspec: GObject.ParamSpec) => void;
            'notify::bump-map': (pspec: GObject.ParamSpec) => void;
            'notify::bump-scale': (pspec: GObject.ParamSpec) => void;
            'notify::color': (pspec: GObject.ParamSpec) => void;
            'notify::displacement-bias': (pspec: GObject.ParamSpec) => void;
            'notify::displacement-map': (pspec: GObject.ParamSpec) => void;
            'notify::displacement-scale': (pspec: GObject.ParamSpec) => void;
            'notify::emissive-color': (pspec: GObject.ParamSpec) => void;
            'notify::emissive-intensity': (pspec: GObject.ParamSpec) => void;
            'notify::emissive-map': (pspec: GObject.ParamSpec) => void;
            'notify::env-map': (pspec: GObject.ParamSpec) => void;
            'notify::env-map-intensity': (pspec: GObject.ParamSpec) => void;
            'notify::light-map': (pspec: GObject.ParamSpec) => void;
            'notify::light-map-intensity': (pspec: GObject.ParamSpec) => void;
            'notify::map': (pspec: GObject.ParamSpec) => void;
            'notify::metalness': (pspec: GObject.ParamSpec) => void;
            'notify::metalness-map': (pspec: GObject.ParamSpec) => void;
            'notify::normal-map': (pspec: GObject.ParamSpec) => void;
            'notify::normal-scale': (pspec: GObject.ParamSpec) => void;
            'notify::refraction-ratio': (pspec: GObject.ParamSpec) => void;
            'notify::roughness': (pspec: GObject.ParamSpec) => void;
            'notify::roughness-map': (pspec: GObject.ParamSpec) => void;
            'notify::morph-normals': (pspec: GObject.ParamSpec) => void;
            'notify::morph-targets': (pspec: GObject.ParamSpec) => void;
            'notify::skinning': (pspec: GObject.ParamSpec) => void;
            'notify::wireframe': (pspec: GObject.ParamSpec) => void;
            'notify::wireframe-line-width': (pspec: GObject.ParamSpec) => void;
            'notify::alpha-test': (pspec: GObject.ParamSpec) => void;
            'notify::clip-intersection': (pspec: GObject.ParamSpec) => void;
            'notify::fog': (pspec: GObject.ParamSpec) => void;
            'notify::opacity': (pspec: GObject.ParamSpec) => void;
            'notify::transparent': (pspec: GObject.ParamSpec) => void;
            'notify::vertex-colors': (pspec: GObject.ParamSpec) => void;
        }

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

        // Properties

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

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: MeshStandardMaterial.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<MeshStandardMaterial.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): MeshStandardMaterial;

        // Signals

        connect<K extends keyof MeshStandardMaterial.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, MeshStandardMaterial.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof MeshStandardMaterial.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, MeshStandardMaterial.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof MeshStandardMaterial.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<MeshStandardMaterial.SignalSignatures[K]> extends [any, ...infer Q]
                ? Q
                : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

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
        set_normal_map_type(type: NormalMapType | null): void;
        set_refraction_ratio(ratio: number): void;
        set_roughness(ratio: number): void;
        set_roughness_map(texture: Texture): void;
    }

    namespace MeshToonMaterial {
        // Signal signatures
        interface SignalSignatures extends MeshMaterial.SignalSignatures {
            'notify::alpha-map': (pspec: GObject.ParamSpec) => void;
            'notify::ao-map': (pspec: GObject.ParamSpec) => void;
            'notify::ao-map-intensity': (pspec: GObject.ParamSpec) => void;
            'notify::bump-map': (pspec: GObject.ParamSpec) => void;
            'notify::bump-scale': (pspec: GObject.ParamSpec) => void;
            'notify::color': (pspec: GObject.ParamSpec) => void;
            'notify::displacement-bias': (pspec: GObject.ParamSpec) => void;
            'notify::displacement-map': (pspec: GObject.ParamSpec) => void;
            'notify::displacement-scale': (pspec: GObject.ParamSpec) => void;
            'notify::emissive-color': (pspec: GObject.ParamSpec) => void;
            'notify::emissive-intensity': (pspec: GObject.ParamSpec) => void;
            'notify::emissive-map': (pspec: GObject.ParamSpec) => void;
            'notify::gradient-map': (pspec: GObject.ParamSpec) => void;
            'notify::light-map': (pspec: GObject.ParamSpec) => void;
            'notify::light-map-intensity': (pspec: GObject.ParamSpec) => void;
            'notify::map': (pspec: GObject.ParamSpec) => void;
            'notify::normal-map': (pspec: GObject.ParamSpec) => void;
            'notify::normal-scale': (pspec: GObject.ParamSpec) => void;
            'notify::morph-normals': (pspec: GObject.ParamSpec) => void;
            'notify::morph-targets': (pspec: GObject.ParamSpec) => void;
            'notify::skinning': (pspec: GObject.ParamSpec) => void;
            'notify::wireframe': (pspec: GObject.ParamSpec) => void;
            'notify::wireframe-line-width': (pspec: GObject.ParamSpec) => void;
            'notify::alpha-test': (pspec: GObject.ParamSpec) => void;
            'notify::clip-intersection': (pspec: GObject.ParamSpec) => void;
            'notify::fog': (pspec: GObject.ParamSpec) => void;
            'notify::opacity': (pspec: GObject.ParamSpec) => void;
            'notify::transparent': (pspec: GObject.ParamSpec) => void;
            'notify::vertex-colors': (pspec: GObject.ParamSpec) => void;
        }

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

        // Properties

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

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: MeshToonMaterial.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<MeshToonMaterial.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): MeshToonMaterial;

        // Signals

        connect<K extends keyof MeshToonMaterial.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, MeshToonMaterial.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof MeshToonMaterial.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, MeshToonMaterial.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof MeshToonMaterial.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<MeshToonMaterial.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

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
        set_normal_map_type(type: NormalMapType | null): void;
    }

    namespace NumberKeyframeTrack {
        // Signal signatures
        interface SignalSignatures extends KeyframeTrack.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends KeyframeTrack.ConstructorProps {}
    }

    class NumberKeyframeTrack extends KeyframeTrack {
        static $gtype: GObject.GType<NumberKeyframeTrack>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: NumberKeyframeTrack.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<NumberKeyframeTrack.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](name: string, times: AttributeArray, values: AttributeArray): NumberKeyframeTrack;

        // Signals

        connect<K extends keyof NumberKeyframeTrack.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, NumberKeyframeTrack.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof NumberKeyframeTrack.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, NumberKeyframeTrack.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof NumberKeyframeTrack.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<NumberKeyframeTrack.SignalSignatures[K]> extends [any, ...infer Q]
                ? Q
                : never
        ): void;
        emit(signal: string, ...args: any[]): void;
    }

    namespace Object {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            destroy: () => void;
            'parent-set': (arg0: Object) => void;
            'notify::first-child': (pspec: GObject.ParamSpec) => void;
            'notify::last-child': (pspec: GObject.ParamSpec) => void;
            'notify::next-sibling': (pspec: GObject.ParamSpec) => void;
            'notify::parent': (pspec: GObject.ParamSpec) => void;
            'notify::previous-sibling': (pspec: GObject.ParamSpec) => void;
            'notify::visible': (pspec: GObject.ParamSpec) => void;
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

        // Properties

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

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Object.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Object.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): Object;

        // Signals

        connect<K extends keyof Object.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Object.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Object.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Object.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Object.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Object.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods

        vfunc_destroy(): void;
        vfunc_fill_render_list(list: RenderList): void;
        vfunc_in_frustum(frustum: Graphene.Frustum): boolean;
        vfunc_parent_set(old_parent: Object): void;
        vfunc_set_direct_uniforms(program: Program, renderer: Renderer): void;
        vfunc_update(renderer: Renderer): void;
        vfunc_update_matrix_world(force: boolean): boolean;

        // Methods

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

    namespace OrthographicCamera {
        // Signal signatures
        interface SignalSignatures extends Camera.SignalSignatures {
            'notify::bottom': (pspec: GObject.ParamSpec) => void;
            'notify::left': (pspec: GObject.ParamSpec) => void;
            'notify::right': (pspec: GObject.ParamSpec) => void;
            'notify::top': (pspec: GObject.ParamSpec) => void;
            'notify::far': (pspec: GObject.ParamSpec) => void;
            'notify::near': (pspec: GObject.ParamSpec) => void;
            'notify::first-child': (pspec: GObject.ParamSpec) => void;
            'notify::last-child': (pspec: GObject.ParamSpec) => void;
            'notify::next-sibling': (pspec: GObject.ParamSpec) => void;
            'notify::parent': (pspec: GObject.ParamSpec) => void;
            'notify::previous-sibling': (pspec: GObject.ParamSpec) => void;
            'notify::visible': (pspec: GObject.ParamSpec) => void;
        }

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

        // Properties

        get bottom(): number;
        set bottom(val: number);
        get left(): number;
        set left(val: number);
        get right(): number;
        set right(val: number);
        get top(): number;
        set top(val: number);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: OrthographicCamera.SignalSignatures;

        // Constructors

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

        // Signals

        connect<K extends keyof OrthographicCamera.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, OrthographicCamera.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof OrthographicCamera.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, OrthographicCamera.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof OrthographicCamera.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<OrthographicCamera.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        get_bottom(): number;
        get_left(): number;
        get_right(): number;
        get_top(): number;
        set_bottom(bottom: number): void;
        set_left(left: number): void;
        set_right(right: number): void;
        set_top(top: number): void;
    }

    namespace Pass {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    class Pass extends GObject.Object {
        static $gtype: GObject.GType<Pass>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Pass.SignalSignatures;

        // Fields

        enabled: boolean;
        need_swap: boolean;
        need_source_texture: boolean;
        does_copy: boolean;
        can_render_to_screen: boolean;
        clear: boolean;

        // Constructors

        constructor(properties?: Partial<Pass.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        connect<K extends keyof Pass.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Pass.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Pass.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Pass.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Pass.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Pass.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods

        vfunc_render(
            renderer: Renderer,
            write_buffer: RenderTarget,
            read_buffer: RenderTarget,
            delta_time: number,
            render_to_screen: boolean,
            mask_active: boolean,
        ): void;
        vfunc_set_size(width: number, height: number): void;

        // Methods

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

    namespace PerspectiveCamera {
        // Signal signatures
        interface SignalSignatures extends Camera.SignalSignatures {
            'notify::aspect': (pspec: GObject.ParamSpec) => void;
            'notify::fov': (pspec: GObject.ParamSpec) => void;
            'notify::far': (pspec: GObject.ParamSpec) => void;
            'notify::near': (pspec: GObject.ParamSpec) => void;
            'notify::first-child': (pspec: GObject.ParamSpec) => void;
            'notify::last-child': (pspec: GObject.ParamSpec) => void;
            'notify::next-sibling': (pspec: GObject.ParamSpec) => void;
            'notify::parent': (pspec: GObject.ParamSpec) => void;
            'notify::previous-sibling': (pspec: GObject.ParamSpec) => void;
            'notify::visible': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Camera.ConstructorProps {
            aspect: number;
            fov: number;
        }
    }

    class PerspectiveCamera extends Camera {
        static $gtype: GObject.GType<PerspectiveCamera>;

        // Properties

        get aspect(): number;
        set aspect(val: number);
        get fov(): number;
        set fov(val: number);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: PerspectiveCamera.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<PerspectiveCamera.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](fov: number, aspect: number, near: number, far: number): PerspectiveCamera;
        // Conflicted with Gthree.Object.new

        static ['new'](...args: never[]): any;

        // Signals

        connect<K extends keyof PerspectiveCamera.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, PerspectiveCamera.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof PerspectiveCamera.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, PerspectiveCamera.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof PerspectiveCamera.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<PerspectiveCamera.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        get_aspect(): number;
        get_fov(): number;
        set_aspect(aspect: number): void;
        set_fov(aspect: number): void;
    }

    namespace PlaneHelper {
        // Signal signatures
        interface SignalSignatures extends Object.SignalSignatures {
            'notify::color': (pspec: GObject.ParamSpec) => void;
            'notify::plane': (pspec: GObject.ParamSpec) => void;
            'notify::size': (pspec: GObject.ParamSpec) => void;
            'notify::first-child': (pspec: GObject.ParamSpec) => void;
            'notify::last-child': (pspec: GObject.ParamSpec) => void;
            'notify::next-sibling': (pspec: GObject.ParamSpec) => void;
            'notify::parent': (pspec: GObject.ParamSpec) => void;
            'notify::previous-sibling': (pspec: GObject.ParamSpec) => void;
            'notify::visible': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Object.ConstructorProps {
            color: Graphene.Vec3;
            plane: Graphene.Plane;
            size: number;
        }
    }

    class PlaneHelper extends Object {
        static $gtype: GObject.GType<PlaneHelper>;

        // Properties

        get color(): Graphene.Vec3;
        set color(val: Graphene.Vec3);
        get plane(): Graphene.Plane;
        set plane(val: Graphene.Plane);
        get size(): number;
        set size(val: number);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: PlaneHelper.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<PlaneHelper.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](plane: Graphene.Plane, size: number, color: Graphene.Vec3): PlaneHelper;
        // Conflicted with Gthree.Object.new

        static ['new'](...args: never[]): any;

        // Signals

        connect<K extends keyof PlaneHelper.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, PlaneHelper.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof PlaneHelper.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, PlaneHelper.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof PlaneHelper.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<PlaneHelper.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        get_color(): Graphene.Vec3;
        get_plane(): Graphene.Plane;
        get_size(): number;
        set_color(color: Graphene.Vec3): void;
        set_plane(plane: Graphene.Plane): void;
        set_size(size: number): void;
    }

    namespace PointLight {
        // Signal signatures
        interface SignalSignatures extends Light.SignalSignatures {
            'notify::decay': (pspec: GObject.ParamSpec) => void;
            'notify::distance': (pspec: GObject.ParamSpec) => void;
            'notify::color': (pspec: GObject.ParamSpec) => void;
            'notify::intensity': (pspec: GObject.ParamSpec) => void;
            'notify::first-child': (pspec: GObject.ParamSpec) => void;
            'notify::last-child': (pspec: GObject.ParamSpec) => void;
            'notify::next-sibling': (pspec: GObject.ParamSpec) => void;
            'notify::parent': (pspec: GObject.ParamSpec) => void;
            'notify::previous-sibling': (pspec: GObject.ParamSpec) => void;
            'notify::visible': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Light.ConstructorProps {
            decay: number;
            distance: number;
        }
    }

    class PointLight extends Light {
        static $gtype: GObject.GType<PointLight>;

        // Properties

        get decay(): number;
        set decay(val: number);
        get distance(): number;
        set distance(val: number);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: PointLight.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<PointLight.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](color: Graphene.Vec3, intensity: number, distance: number): PointLight;
        // Conflicted with Gthree.Light.new

        static ['new'](...args: never[]): any;

        // Signals

        connect<K extends keyof PointLight.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, PointLight.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof PointLight.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, PointLight.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof PointLight.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<PointLight.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        get_decay(): number;
        get_distance(): number;
        set_decay(decay: number): void;
        set_distance(distance: number): void;
    }

    namespace Points {
        // Signal signatures
        interface SignalSignatures extends Object.SignalSignatures {
            'notify::geometry': (pspec: GObject.ParamSpec) => void;
            'notify::material': (pspec: GObject.ParamSpec) => void;
            'notify::first-child': (pspec: GObject.ParamSpec) => void;
            'notify::last-child': (pspec: GObject.ParamSpec) => void;
            'notify::next-sibling': (pspec: GObject.ParamSpec) => void;
            'notify::parent': (pspec: GObject.ParamSpec) => void;
            'notify::previous-sibling': (pspec: GObject.ParamSpec) => void;
            'notify::visible': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Object.ConstructorProps {
            geometry: Geometry;
            material: Material;
        }
    }

    class Points extends Object {
        static $gtype: GObject.GType<Points>;

        // Properties

        get geometry(): Geometry;
        get material(): Material;
        set material(val: Material);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Points.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Points.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](geometry: Geometry, material: Material): Points;
        // Conflicted with Gthree.Object.new

        static ['new'](...args: never[]): any;

        // Signals

        connect<K extends keyof Points.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Points.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Points.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Points.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Points.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Points.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        set_material(material: Material): void;
    }

    namespace PointsMaterial {
        // Signal signatures
        interface SignalSignatures extends Material.SignalSignatures {
            'notify::color': (pspec: GObject.ParamSpec) => void;
            'notify::map': (pspec: GObject.ParamSpec) => void;
            'notify::size': (pspec: GObject.ParamSpec) => void;
            'notify::size-attenuation': (pspec: GObject.ParamSpec) => void;
            'notify::alpha-test': (pspec: GObject.ParamSpec) => void;
            'notify::clip-intersection': (pspec: GObject.ParamSpec) => void;
            'notify::fog': (pspec: GObject.ParamSpec) => void;
            'notify::opacity': (pspec: GObject.ParamSpec) => void;
            'notify::transparent': (pspec: GObject.ParamSpec) => void;
            'notify::vertex-colors': (pspec: GObject.ParamSpec) => void;
        }

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

        // Properties

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

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: PointsMaterial.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<PointsMaterial.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): PointsMaterial;

        // Signals

        connect<K extends keyof PointsMaterial.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, PointsMaterial.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof PointsMaterial.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, PointsMaterial.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof PointsMaterial.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<PointsMaterial.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        get_color(): Graphene.Vec3;
        get_size(): number;
        get_size_attenuation(): boolean;
        set_color(color: Graphene.Vec3): void;
        set_map(texture: Texture): void;
        set_size(size: number): void;
        set_size_attenuation(size_attenuation: boolean): void;
    }

    namespace Program {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    class Program extends GObject.Object {
        static $gtype: GObject.GType<Program>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Program.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Program.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](shader: Shader, parameters: ProgramParameters, renderer: Renderer): Program;

        // Signals

        connect<K extends keyof Program.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Program.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Program.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Program.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Program.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Program.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        lookup_attribute_location(attribute: GLib.Quark): number;
        lookup_attribute_location_from_string(attribute: string): number;
        lookup_uniform_location(uniform: GLib.Quark): number;
        lookup_uniform_location_from_string(uniform: string): number;
        use(): void;
    }

    namespace QuaternionInterpolant {
        // Signal signatures
        interface SignalSignatures extends Interpolant.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends Interpolant.ConstructorProps {}
    }

    class QuaternionInterpolant extends Interpolant {
        static $gtype: GObject.GType<QuaternionInterpolant>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: QuaternionInterpolant.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<QuaternionInterpolant.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](parameter_positions: AttributeArray, sample_values: AttributeArray): QuaternionInterpolant;

        // Signals

        connect<K extends keyof QuaternionInterpolant.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, QuaternionInterpolant.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof QuaternionInterpolant.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, QuaternionInterpolant.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof QuaternionInterpolant.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<QuaternionInterpolant.SignalSignatures[K]> extends [any, ...infer Q]
                ? Q
                : never
        ): void;
        emit(signal: string, ...args: any[]): void;
    }

    namespace QuaternionKeyframeTrack {
        // Signal signatures
        interface SignalSignatures extends KeyframeTrack.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends KeyframeTrack.ConstructorProps {}
    }

    class QuaternionKeyframeTrack extends KeyframeTrack {
        static $gtype: GObject.GType<QuaternionKeyframeTrack>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: QuaternionKeyframeTrack.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<QuaternionKeyframeTrack.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](name: string, times: AttributeArray, values: AttributeArray): QuaternionKeyframeTrack;

        // Signals

        connect<K extends keyof QuaternionKeyframeTrack.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, QuaternionKeyframeTrack.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof QuaternionKeyframeTrack.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, QuaternionKeyframeTrack.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof QuaternionKeyframeTrack.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<QuaternionKeyframeTrack.SignalSignatures[K]> extends [any, ...infer Q]
                ? Q
                : never
        ): void;
        emit(signal: string, ...args: any[]): void;
    }

    namespace Raycaster {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    class Raycaster extends GObject.Object {
        static $gtype: GObject.GType<Raycaster>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Raycaster.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Raycaster.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): Raycaster;

        // Signals

        connect<K extends keyof Raycaster.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Raycaster.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Raycaster.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Raycaster.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Raycaster.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Raycaster.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        get_far(): number;
        get_near(): number;
        get_ray(): Graphene.Ray;
        set_far(far: number): void;
        set_from_camera(camera: Camera, x: number, y: number): void;
        set_near(near: number): void;
        set_ray(ray: Graphene.Ray): void;
    }

    namespace RenderPass {
        // Signal signatures
        interface SignalSignatures extends Pass.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends Pass.ConstructorProps {}
    }

    class RenderPass extends Pass {
        static $gtype: GObject.GType<RenderPass>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: RenderPass.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<RenderPass.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](scene: Scene, camera: Camera, override_material: Material): RenderPass;

        // Signals

        connect<K extends keyof RenderPass.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, RenderPass.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof RenderPass.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, RenderPass.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof RenderPass.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<RenderPass.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        set_clear_depth(clear_depth: boolean): void;
    }

    namespace RenderTarget {
        // Signal signatures
        interface SignalSignatures extends Resource.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends Resource.ConstructorProps {}
    }

    class RenderTarget extends Resource {
        static $gtype: GObject.GType<RenderTarget>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: RenderTarget.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<RenderTarget.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](width: number, height: number): RenderTarget;

        // Signals

        connect<K extends keyof RenderTarget.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, RenderTarget.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof RenderTarget.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, RenderTarget.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof RenderTarget.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<RenderTarget.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

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

    namespace Renderer {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    class Renderer extends GObject.Object {
        static $gtype: GObject.GType<Renderer>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Renderer.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Renderer.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): Renderer;

        // Signals

        connect<K extends keyof Renderer.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Renderer.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Renderer.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Renderer.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Renderer.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Renderer.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

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

    namespace Resource {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    class Resource extends GObject.Object {
        static $gtype: GObject.GType<Resource>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Resource.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Resource.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        connect<K extends keyof Resource.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Resource.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Resource.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Resource.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Resource.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Resource.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods

        vfunc_set_used(used: boolean): void;
        vfunc_unrealize(renderer: Renderer): void;

        // Methods

        get_data_for(renderer: Renderer): any | null;
        get_used(): boolean;
        is_realized_for(renderer: Renderer): boolean;
        set_realized_for(renderer: Renderer): void;
        set_used(used: boolean): void;
        unrealize(renderer: Renderer): void;
    }

    namespace Scene {
        // Signal signatures
        interface SignalSignatures extends Object.SignalSignatures {
            'notify::first-child': (pspec: GObject.ParamSpec) => void;
            'notify::last-child': (pspec: GObject.ParamSpec) => void;
            'notify::next-sibling': (pspec: GObject.ParamSpec) => void;
            'notify::parent': (pspec: GObject.ParamSpec) => void;
            'notify::previous-sibling': (pspec: GObject.ParamSpec) => void;
            'notify::visible': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Object.ConstructorProps {}
    }

    class Scene extends Object {
        static $gtype: GObject.GType<Scene>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Scene.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Scene.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): Scene;

        // Signals

        connect<K extends keyof Scene.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Scene.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Scene.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Scene.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Scene.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Scene.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        get_background_alpha(): number;
        get_background_color(): Graphene.Vec3;
        set_background_alpha(alpha: number): void;
        set_background_color(color: Graphene.Vec3): void;
        set_background_texture(texture: Texture): void;
        set_fog(fog: Fog): void;
        set_override_material(material: Material): void;
    }

    namespace Shader {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    class Shader extends GObject.Object {
        static $gtype: GObject.GType<Shader>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Shader.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Shader.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        connect<K extends keyof Shader.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Shader.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Shader.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Shader.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Shader.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Shader.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        equal(b: Shader): boolean;
        get_fragment_shader_text(): string;
        get_name(): string;
        get_vertex_shader_text(): string;
        hash(): number;
        set_name(name: string): void;
        update_uniform_locations_for_program(program: Program): void;
    }

    namespace ShaderMaterial {
        // Signal signatures
        interface SignalSignatures extends MeshMaterial.SignalSignatures {
            'notify::shader': (pspec: GObject.ParamSpec) => void;
            'notify::use-lights': (pspec: GObject.ParamSpec) => void;
            'notify::vertex-colors': (pspec: GObject.ParamSpec) => void;
            'notify::morph-normals': (pspec: GObject.ParamSpec) => void;
            'notify::morph-targets': (pspec: GObject.ParamSpec) => void;
            'notify::skinning': (pspec: GObject.ParamSpec) => void;
            'notify::wireframe': (pspec: GObject.ParamSpec) => void;
            'notify::wireframe-line-width': (pspec: GObject.ParamSpec) => void;
            'notify::alpha-test': (pspec: GObject.ParamSpec) => void;
            'notify::clip-intersection': (pspec: GObject.ParamSpec) => void;
            'notify::fog': (pspec: GObject.ParamSpec) => void;
            'notify::opacity': (pspec: GObject.ParamSpec) => void;
            'notify::transparent': (pspec: GObject.ParamSpec) => void;
        }

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

        // Properties

        get shader(): Shader;
        get use_lights(): boolean;
        set use_lights(val: boolean);
        get useLights(): boolean;
        set useLights(val: boolean);
        get vertex_colors(): boolean;
        set vertex_colors(val: boolean);
        get vertexColors(): boolean;
        set vertexColors(val: boolean);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: ShaderMaterial.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<ShaderMaterial.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](shader: Shader): ShaderMaterial;

        // Signals

        connect<K extends keyof ShaderMaterial.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ShaderMaterial.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof ShaderMaterial.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ShaderMaterial.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof ShaderMaterial.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<ShaderMaterial.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        get_shading_type(): ShadingType;
        get_use_lights(): boolean;
        get_vertex_colors(): boolean;
        set_shading_type(shading_type: ShadingType | null): void;
        set_use_lights(use_lights: boolean): void;
        set_vertex_colors(vertex_color: boolean): void;
    }

    namespace ShaderPass {
        // Signal signatures
        interface SignalSignatures extends Pass.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends Pass.ConstructorProps {}
    }

    class ShaderPass extends Pass {
        static $gtype: GObject.GType<ShaderPass>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: ShaderPass.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<ShaderPass.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](shader: Shader, texture_id: string): ShaderPass;

        // Signals

        connect<K extends keyof ShaderPass.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ShaderPass.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof ShaderPass.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ShaderPass.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof ShaderPass.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<ShaderPass.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;
    }

    namespace Skeleton {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    class Skeleton extends GObject.Object {
        static $gtype: GObject.GType<Skeleton>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Skeleton.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Skeleton.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](bones: Bone, n_bones: number, bone_inverses: Graphene.Matrix): Skeleton;

        // Signals

        connect<K extends keyof Skeleton.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Skeleton.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Skeleton.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Skeleton.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Skeleton.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Skeleton.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        calculate_inverses(): void;
        get_n_bones(): number;
        pose(): void;
    }

    namespace SkeletonHelper {
        // Signal signatures
        interface SignalSignatures extends LineSegments.SignalSignatures {
            'notify::root': (pspec: GObject.ParamSpec) => void;
            'notify::geometry': (pspec: GObject.ParamSpec) => void;
            'notify::material': (pspec: GObject.ParamSpec) => void;
            'notify::first-child': (pspec: GObject.ParamSpec) => void;
            'notify::last-child': (pspec: GObject.ParamSpec) => void;
            'notify::next-sibling': (pspec: GObject.ParamSpec) => void;
            'notify::parent': (pspec: GObject.ParamSpec) => void;
            'notify::previous-sibling': (pspec: GObject.ParamSpec) => void;
            'notify::visible': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends LineSegments.ConstructorProps {
            root: Object;
        }
    }

    class SkeletonHelper extends LineSegments {
        static $gtype: GObject.GType<SkeletonHelper>;

        // Properties

        get root(): Object;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: SkeletonHelper.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<SkeletonHelper.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](root: Object): SkeletonHelper;
        // Conflicted with Gthree.LineSegments.new

        static ['new'](...args: never[]): any;

        // Signals

        connect<K extends keyof SkeletonHelper.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, SkeletonHelper.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof SkeletonHelper.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, SkeletonHelper.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof SkeletonHelper.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<SkeletonHelper.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;
    }

    namespace SkinnedMesh {
        // Signal signatures
        interface SignalSignatures extends Mesh.SignalSignatures {
            'notify::geometry': (pspec: GObject.ParamSpec) => void;
            'notify::materials': (pspec: GObject.ParamSpec) => void;
            'notify::first-child': (pspec: GObject.ParamSpec) => void;
            'notify::last-child': (pspec: GObject.ParamSpec) => void;
            'notify::next-sibling': (pspec: GObject.ParamSpec) => void;
            'notify::parent': (pspec: GObject.ParamSpec) => void;
            'notify::previous-sibling': (pspec: GObject.ParamSpec) => void;
            'notify::visible': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Mesh.ConstructorProps {}
    }

    class SkinnedMesh extends Mesh {
        static $gtype: GObject.GType<SkinnedMesh>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: SkinnedMesh.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<SkinnedMesh.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](geometry: Geometry, material: Material): SkinnedMesh;
        // Conflicted with Gthree.Object.new

        static ['new'](...args: never[]): any;

        // Signals

        connect<K extends keyof SkinnedMesh.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, SkinnedMesh.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof SkinnedMesh.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, SkinnedMesh.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof SkinnedMesh.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<SkinnedMesh.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        bind(skeleton: Skeleton, bind_matrix: Graphene.Matrix): void;
        get_bind_matrix(): Graphene.Matrix;
        get_inverse_bind_matrix(): Graphene.Matrix;
        normalize_skin_weights(): void;
        pose(): void;
        set_bind_mode(bind_mode: BindMode | null): void;
    }

    namespace SpotLight {
        // Signal signatures
        interface SignalSignatures extends Light.SignalSignatures {
            'notify::angle': (pspec: GObject.ParamSpec) => void;
            'notify::decay': (pspec: GObject.ParamSpec) => void;
            'notify::distance': (pspec: GObject.ParamSpec) => void;
            'notify::penumbra': (pspec: GObject.ParamSpec) => void;
            'notify::target': (pspec: GObject.ParamSpec) => void;
            'notify::color': (pspec: GObject.ParamSpec) => void;
            'notify::intensity': (pspec: GObject.ParamSpec) => void;
            'notify::first-child': (pspec: GObject.ParamSpec) => void;
            'notify::last-child': (pspec: GObject.ParamSpec) => void;
            'notify::next-sibling': (pspec: GObject.ParamSpec) => void;
            'notify::parent': (pspec: GObject.ParamSpec) => void;
            'notify::previous-sibling': (pspec: GObject.ParamSpec) => void;
            'notify::visible': (pspec: GObject.ParamSpec) => void;
        }

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

        // Properties

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

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: SpotLight.SignalSignatures;

        // Constructors

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

        // Signals

        connect<K extends keyof SpotLight.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, SpotLight.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof SpotLight.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, SpotLight.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof SpotLight.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<SpotLight.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

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

    namespace SpotLightShadow {
        // Signal signatures
        interface SignalSignatures extends LightShadow.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends LightShadow.ConstructorProps {}
    }

    class SpotLightShadow extends LightShadow {
        static $gtype: GObject.GType<SpotLightShadow>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: SpotLightShadow.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<SpotLightShadow.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        connect<K extends keyof SpotLightShadow.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, SpotLightShadow.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof SpotLightShadow.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, SpotLightShadow.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof SpotLightShadow.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<SpotLightShadow.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;
    }

    namespace Sprite {
        // Signal signatures
        interface SignalSignatures extends Object.SignalSignatures {
            'notify::material': (pspec: GObject.ParamSpec) => void;
            'notify::first-child': (pspec: GObject.ParamSpec) => void;
            'notify::last-child': (pspec: GObject.ParamSpec) => void;
            'notify::next-sibling': (pspec: GObject.ParamSpec) => void;
            'notify::parent': (pspec: GObject.ParamSpec) => void;
            'notify::previous-sibling': (pspec: GObject.ParamSpec) => void;
            'notify::visible': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Object.ConstructorProps {
            material: Material;
        }
    }

    class Sprite extends Object {
        static $gtype: GObject.GType<Sprite>;

        // Properties

        get material(): Material;
        set material(val: Material);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Sprite.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Sprite.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](material: Material): Sprite;
        // Conflicted with Gthree.Object.new

        static ['new'](...args: never[]): any;

        // Signals

        connect<K extends keyof Sprite.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Sprite.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Sprite.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Sprite.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Sprite.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Sprite.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        get_center(): Graphene.Vec2;
        set_center(center: Graphene.Vec2): void;
        set_material(material: Material): void;
    }

    namespace SpriteMaterial {
        // Signal signatures
        interface SignalSignatures extends Material.SignalSignatures {
            'notify::color': (pspec: GObject.ParamSpec) => void;
            'notify::map': (pspec: GObject.ParamSpec) => void;
            'notify::rotation': (pspec: GObject.ParamSpec) => void;
            'notify::size-attenuation': (pspec: GObject.ParamSpec) => void;
            'notify::alpha-test': (pspec: GObject.ParamSpec) => void;
            'notify::clip-intersection': (pspec: GObject.ParamSpec) => void;
            'notify::fog': (pspec: GObject.ParamSpec) => void;
            'notify::opacity': (pspec: GObject.ParamSpec) => void;
            'notify::transparent': (pspec: GObject.ParamSpec) => void;
            'notify::vertex-colors': (pspec: GObject.ParamSpec) => void;
        }

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

        // Properties

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

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: SpriteMaterial.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<SpriteMaterial.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): SpriteMaterial;

        // Signals

        connect<K extends keyof SpriteMaterial.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, SpriteMaterial.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof SpriteMaterial.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, SpriteMaterial.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof SpriteMaterial.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<SpriteMaterial.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        get_color(): Graphene.Vec3;
        get_rotation(): number;
        get_size_attenuation(): boolean;
        set_color(color: Graphene.Vec3): void;
        set_map(texture: Texture): void;
        set_rotation(rotation: number): void;
        set_size_attenuation(size_attenuation: boolean): void;
    }

    namespace Texture {
        // Signal signatures
        interface SignalSignatures extends Resource.SignalSignatures {
            'notify::pixbuf': (pspec: GObject.ParamSpec) => void;
            'notify::surface': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Resource.ConstructorProps {
            pixbuf: GdkPixbuf.Pixbuf;
            surface: cairo.Surface;
        }
    }

    class Texture extends Resource {
        static $gtype: GObject.GType<Texture>;

        // Properties

        get pixbuf(): GdkPixbuf.Pixbuf;
        get surface(): cairo.Surface;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Texture.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Texture.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](pixbuf: GdkPixbuf.Pixbuf): Texture;

        static new_from_surface(surface: cairo.Surface): Texture;

        // Signals

        connect<K extends keyof Texture.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Texture.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Texture.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Texture.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Texture.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Texture.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods

        vfunc_load(renderer: Renderer, slot: number): void;

        // Methods

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
        set_data_type(type: DataType | null): void;
        set_encoding(encoding: EncodingFormat | null): void;
        set_flip_y(flip_y: boolean): void;
        set_format(format: TextureFormat | null): void;
        set_generate_mipmaps(generate_mipmaps: boolean): void;
        set_mag_filter(mag_filter: Filter | null): void;
        set_mapping(mapping: Mapping | null): void;
        set_min_filter(min_filter: Filter | null): void;
        set_name(name: string): void;
        set_needs_update(): void;
        set_offset(offset: Graphene.Vec2): void;
        set_repeat(repeat: Graphene.Vec2): void;
        set_uuid(uuid: string): void;
        set_wrap_s(wrap_s: Wrapping | null): void;
        set_wrap_t(wrap_t: Wrapping | null): void;
    }

    namespace Uniforms {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    class Uniforms extends GObject.Object {
        static $gtype: GObject.GType<Uniforms>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Uniforms.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Uniforms.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): Uniforms;

        static new_from_definitions(element: UniformsDefinition, len: number): Uniforms;

        // Signals

        connect<K extends keyof Uniforms.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Uniforms.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Uniforms.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Uniforms.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Uniforms.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Uniforms.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

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

    namespace VectorKeyframeTrack {
        // Signal signatures
        interface SignalSignatures extends KeyframeTrack.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends KeyframeTrack.ConstructorProps {}
    }

    class VectorKeyframeTrack extends KeyframeTrack {
        static $gtype: GObject.GType<VectorKeyframeTrack>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: VectorKeyframeTrack.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<VectorKeyframeTrack.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](name: string, times: AttributeArray, values: AttributeArray): VectorKeyframeTrack;

        // Signals

        connect<K extends keyof VectorKeyframeTrack.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, VectorKeyframeTrack.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof VectorKeyframeTrack.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, VectorKeyframeTrack.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof VectorKeyframeTrack.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<VectorKeyframeTrack.SignalSignatures[K]> extends [any, ...infer Q]
                ? Q
                : never
        ): void;
        emit(signal: string, ...args: any[]): void;
    }

    type AmbientLightClass = typeof AmbientLight;
    type AnimationActionClass = typeof AnimationAction;
    type AnimationClipClass = typeof AnimationClip;
    type AnimationMixerClass = typeof AnimationMixer;
    abstract class AttributeArray {
        static $gtype: GObject.GType<AttributeArray>;

        // Constructors

        _init(...args: any[]): void;

        // Methods

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

        // Fields

        start: number;
        count: number;
        material_index: number;

        // Constructors

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

        // Constructors

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

        // Constructors

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

        // Constructors

        constructor(properties?: Partial<{}>);
        _init(...args: any[]): void;

        // Methods

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

        // Constructors

        _init(...args: any[]): void;

        // Methods

        free(): void;
    }

    type ProgramClass = typeof Program;
    abstract class ProgramParameters {
        static $gtype: GObject.GType<ProgramParameters>;

        // Constructors

        _init(...args: any[]): void;
    }

    type QuaternionInterpolantClass = typeof QuaternionInterpolant;
    type QuaternionKeyframeTrackClass = typeof QuaternionKeyframeTrack;
    class RayIntersection {
        static $gtype: GObject.GType<RayIntersection>;

        // Fields

        object: Object;
        distance: number;
        point: Graphene.Point3D;
        face_index: number;
        material_index: number;
        face: Graphene.Triangle;
        uv: Graphene.Vec2;
        uv2: Graphene.Vec2;

        // Constructors

        constructor(object: Object);
        _init(...args: any[]): void;

        static ['new'](object: Object): RayIntersection;

        // Methods

        copy(): RayIntersection;
        free(): void;
    }

    type RaycasterClass = typeof Raycaster;
    abstract class RenderList {
        static $gtype: GObject.GType<RenderList>;

        // Constructors

        _init(...args: any[]): void;
    }

    type RenderTargetClass = typeof RenderTarget;
    type RendererClass = typeof Renderer;
    type ResourceClass = typeof Resource;
    class ResourceRealizeData {
        static $gtype: GObject.GType<ResourceRealizeData>;

        // Fields

        realized_for: Renderer;
        dirty: boolean;

        // Constructors

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

        // Constructors

        _init(...args: any[]): void;

        // Methods

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

        // Fields

        name: string;
        type: UniformType;
        value: any;

        // Constructors

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
