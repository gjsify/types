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
import type GLib from '@girs/glib-2.0';
import type GObject from '@girs/gobject-2.0';

export namespace Gwebgl {
    /**
     * Gwebgl-0.1
     */

    /**
     * @gir-type Struct
     */
    class TypeError extends GLib.Error {
        static $gtype: GObject.GType<GLib.Error>;

        // Static fields

        static CODE: number;

        // Constructors

        constructor(options: { message: string; code: number });
    }

    const UNPACK_FLIP_Y_WEBGL: number;
    const UNPACK_PREMULTIPLY_ALPHA_WEBGL: number;
    const UNPACK_COLORSPACE_CONVERSION_WEBGL: number;
    const CONTEXT_LOST_WEBGL: number;
    const BROWSER_DEFAULT_WEBGL: number;
    const VERTEX_ATTRIB_ARRAY_DIVISOR_ANGLE: number;
    const UNMASKED_VENDOR_WEBGL: number;
    const UNMASKED_RENDERER_WEBGL: number;
    const MAX_DRAW_BUFFERS_WEBGL: number;
    const MAX_TEXTURE_MAX_ANISOTROPY_EXT: number;
    const TEXTURE_MAX_ANISOTROPY_EXT: number;
    const STENCIL_INDEX: number;
    const VERSION: number;
    const IMPLEMENTATION_COLOR_READ_TYPE: number;
    const IMPLEMENTATION_COLOR_READ_FORMAT: number;
    namespace WebGLRenderingContextBase {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class WebGLRenderingContextBase extends GObject.Object {
        static $gtype: GObject.GType<WebGLRenderingContextBase>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: WebGLRenderingContextBase.SignalSignatures;

        // Fields

        unpack_flip_y: boolean;
        unpack_premultiply_alpha: boolean;
        unpack_colorspace_conversion: number;
        unpack_alignment: number;
        lastError: number;

        // Constructors

        constructor(properties?: Partial<WebGLRenderingContextBase.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): WebGLRenderingContextBase;

        // Signals

        /** @signal */
        connect<K extends keyof WebGLRenderingContextBase.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, WebGLRenderingContextBase.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof WebGLRenderingContextBase.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, WebGLRenderingContextBase.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof WebGLRenderingContextBase.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<WebGLRenderingContextBase.SignalSignatures[K]> extends [any, ...infer Q]
                ? Q
                : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        get_webgl_constants(): GLib.HashTable<string, number>;
        /**
         * @param index
         * @param divisor
         */
        _vertexAttribDivisor(index: number, divisor: number): void;
        /**
         * @param texture
         */
        activeTexture(texture: number): void;
        /**
         * @param program
         * @param shader
         */
        attachShader(program: number, shader: number): void;
        /**
         * @param program
         * @param index
         * @param name
         */
        bindAttribLocation(program: number, index: number, name: string): void;
        /**
         * @param target
         * @param buffer
         */
        bindBuffer(target: number, buffer: number): void;
        /**
         * @param target
         * @param framebuffer
         */
        bindFramebuffer(target: number, framebuffer: number): void;
        /**
         * @param target
         * @param renderbuffer
         */
        bindRenderbuffer(target: number, renderbuffer: number): void;
        /**
         * @param target
         * @param texture
         */
        bindTexture(target: number, texture: number): void;
        /**
         * @param red
         * @param green
         * @param blue
         * @param alpha
         */
        blendColor(red: number, green: number, blue: number, alpha: number): void;
        /**
         * @param mode
         */
        blendEquation(mode: number): void;
        /**
         * @param modeRGB
         * @param modeAlpha
         */
        blendEquationSeparate(modeRGB: number, modeAlpha: number): void;
        /**
         * @param sfactor
         * @param dfactor
         */
        blendFunc(sfactor: number, dfactor: number): void;
        /**
         * @param srcRGB
         * @param dstRGB
         * @param srcAlpha
         * @param dstAlpha
         */
        blendFuncSeparate(srcRGB: number, dstRGB: number, srcAlpha: number, dstAlpha: number): void;
        /**
         * @param target
         */
        checkFramebufferStatus(target: number): number;
        /**
         * @param mask
         */
        clear(mask: number): void;
        /**
         * @param red
         * @param green
         * @param blue
         * @param alpha
         */
        clearColor(red: number, green: number, blue: number, alpha: number): void;
        /**
         * @param depth
         */
        clearDepth(depth: number): void;
        /**
         * @param s
         */
        clearStencil(s: number): void;
        /**
         * @param red
         * @param green
         * @param blue
         * @param alpha
         */
        colorMask(red: boolean, green: boolean, blue: boolean, alpha: boolean): void;
        /**
         * @param shader
         */
        compileShader(shader: number): void;
        /**
         * @param target
         * @param level
         * @param internalFormat
         * @param x
         * @param y
         * @param width
         * @param height
         * @param border
         */
        copyTexImage2D(
            target: number,
            level: number,
            internalFormat: number,
            x: number,
            y: number,
            width: number,
            height: number,
            border: number,
        ): void;
        /**
         * @param target
         * @param level
         * @param xoffset
         * @param yoffset
         * @param x
         * @param y
         * @param width
         * @param height
         */
        copyTexSubImage2D(
            target: number,
            level: number,
            xoffset: number,
            yoffset: number,
            x: number,
            y: number,
            width: number,
            height: number,
        ): void;
        createBuffer(): number;
        createFramebuffer(): number;
        createProgram(): number;
        createRenderbuffer(): number;
        /**
         * @param type
         */
        createShader(type: number): number;
        createTexture(): number;
        /**
         * @param mode
         */
        cullFace(mode: number): void;
        /**
         * @param buffer
         */
        deleteBuffer(buffer: number): void;
        /**
         * @param framebuffer
         */
        deleteFramebuffer(framebuffer: number): void;
        /**
         * @param program
         */
        deleteProgram(program: number): void;
        /**
         * @param renderbuffer
         */
        deleteRenderbuffer(renderbuffer: number): void;
        /**
         * @param shader
         */
        deleteShader(shader: number): void;
        /**
         * @param texture
         */
        deleteTexture(texture: number): void;
        /**
         * @param func
         */
        depthFunc(func: number): void;
        /**
         * @param flag
         */
        depthMask(flag: boolean): void;
        /**
         * @param zNear
         * @param zFar
         */
        depthRange(zNear: number, zFar: number): void;
        /**
         * @param program
         * @param shader
         */
        detachShader(program: number, shader: number): void;
        /**
         * @param cap
         */
        disable(cap: number): void;
        /**
         * @param index
         */
        disableVertexAttribArray(index: number): void;
        /**
         * @param mode
         * @param first
         * @param count
         */
        drawArrays(mode: number, first: number, count: number): void;
        /**
         * @param mode
         * @param first
         * @param count
         * @param instancecount
         */
        _drawArraysInstanced(mode: number, first: number, count: number, instancecount: number): void;
        /**
         * @param mode
         * @param count
         * @param type
         * @param offset
         */
        drawElements(mode: number, count: number, type: number, offset: number): void;
        /**
         * @param mode
         * @param count
         * @param type
         * @param offset
         * @param instancecount
         */
        _drawElementsInstanced(mode: number, count: number, type: number, offset: number, instancecount: number): void;
        /**
         * @param cap
         */
        enable(cap: number): void;
        /**
         * @param index
         */
        enableVertexAttribArray(index: number): void;
        finish(): void;
        flush(): void;
        /**
         * @param target
         * @param attachment
         * @param renderbufferTarget
         * @param renderbuffer
         */
        framebufferRenderbuffer(
            target: number,
            attachment: number,
            renderbufferTarget: number,
            renderbuffer: number,
        ): void;
        /**
         * @param target
         * @param attachment
         * @param textarget
         * @param texture
         * @param level
         */
        framebufferTexture2D(
            target: number,
            attachment: number,
            textarget: number,
            texture: number,
            level: number,
        ): void;
        /**
         * @param mode
         */
        frontFace(mode: number): void;
        /**
         * @param target
         */
        generateMipmap(target: number): void;
        /**
         * @param program
         * @param index
         */
        getActiveAttrib(program: number, index: number): WebGLActiveInfo;
        /**
         * @param program
         * @param index
         */
        getActiveUniform(program: number, index: number): WebGLActiveInfo;
        /**
         * @param program
         */
        getAttachedShaders(program: number): number[];
        /**
         * @param program
         * @param name
         */
        getAttribLocation(program: number, name: string): number;
        /**
         * @param target
         * @param pname
         */
        getBufferParameteriv(target: number, pname: number): number[];
        getError(): number;
        /**
         * @param _error_
         */
        setError(_error_: number): void;
        /**
         * @param target
         * @param attachment
         * @param pname
         */
        getFramebufferAttachmentParameter(target: number, attachment: number, pname: number): number;
        /**
         * @param pname
         */
        getParameterx(pname: number): GLib.Variant;
        /**
         * @param pname
         */
        getParameterb(pname: number): boolean;
        /**
         * @param pname
         * @param resultSize
         */
        getParameterbv(pname: number, resultSize: number): boolean[];
        /**
         * @param pname
         */
        getParameterf(pname: number): number;
        /**
         * @param pname
         * @param resultSize
         */
        getParameterfv(pname: number, resultSize: number): number[];
        /**
         * @param pname
         */
        getParameteri(pname: number): number;
        /**
         * @param pname
         * @param resultSize
         */
        getParameteriv(pname: number, resultSize: number): number[];
        /**
         * @param program
         */
        getProgramInfoLog(program: number): string;
        /**
         * @param program
         * @param pname
         */
        getProgramParameter(program: number, pname: number): number;
        /**
         * @param target
         * @param pname
         */
        getRenderbufferParameter(target: number, pname: number): number;
        /**
         * @param shader
         */
        getShaderInfoLog(shader: number): string;
        /**
         * @param shader
         * @param pname
         */
        getShaderParameter(shader: number, pname: number): number;
        /**
         * @param shadertype
         * @param precisiontype
         */
        getShaderPrecisionFormat(shadertype: number, precisiontype: number): WebGLShaderPrecisionFormat;
        /**
         * @param shader
         */
        getShaderSource(shader: number): string;
        /**
         * @param pname
         */
        getString(pname: number): string;
        getSupportedExtensions(): string[];
        /**
         * @param target
         * @param pname
         */
        getTexParameterx(target: number, pname: number): GLib.Variant;
        /**
         * @param target
         * @param pname
         */
        getTexParameterfv(target: number, pname: number): number;
        /**
         * @param target
         * @param pname
         */
        getTexParameteriv(target: number, pname: number): number;
        /**
         * @param program
         * @param name
         */
        getUniformLocation(program: number, name: string): number;
        /**
         * @param program
         * @param location
         */
        getUniform(program: number, location: number): number[];
        /**
         * @param program
         * @param location
         */
        getUniformf(program: number, location: number): number[];
        /**
         * @param program
         * @param location
         * @param resultSize
         */
        getUniformfv(program: number, location: number, resultSize: number): number[];
        /**
         * @param program
         * @param location
         */
        getUniformi(program: number, location: number): number[];
        /**
         * @param program
         * @param location
         * @param resultSize
         */
        getUniformiv(program: number, location: number, resultSize: number): number[];
        /**
         * @param index
         * @param pname
         */
        getVertexAttribOffset(index: number, pname: number): number;
        /**
         * @param index
         * @param pname
         */
        getVertexAttrib(index: number, pname: number): GLib.Variant;
        /**
         * @param index
         * @param pname
         */
        getVertexAttribf(index: number, pname: number): number[];
        /**
         * @param index
         * @param pname
         * @param resultSize
         */
        getVertexAttribfv(index: number, pname: number, resultSize: number): number[];
        /**
         * @param index
         * @param pname
         */
        getVertexAttribi(index: number, pname: number): number[];
        /**
         * @param target
         * @param mode
         */
        hint(target: number, mode: number): void;
        /**
         * @param buffer
         */
        isBuffer(buffer: number): boolean;
        /**
         * @param cap
         */
        isEnabled(cap: number): boolean;
        /**
         * @param framebuffer
         */
        isFramebuffer(framebuffer: number): boolean;
        /**
         * @param program
         */
        isProgram(program: number): boolean;
        /**
         * @param renderbuffer
         */
        isRenderbuffer(renderbuffer: number): boolean;
        /**
         * @param shader
         */
        isShader(shader: number): boolean;
        /**
         * @param texture
         */
        isTexture(texture: number): boolean;
        /**
         * @param width
         */
        lineWidth(width: number): void;
        /**
         * @param program
         */
        linkProgram(program: number): void;
        /**
         * @param pname
         * @param param
         */
        pixelStorei(pname: number, param: number): void;
        /**
         * @param factor
         * @param units
         */
        polygonOffset(factor: number, units: number): void;
        /**
         * @param target
         * @param internalFormat
         * @param width
         * @param height
         */
        renderbufferStorage(target: number, internalFormat: number, width: number, height: number): void;
        /**
         * @param value
         * @param invert
         */
        sampleCoverage(value: number, invert: boolean): void;
        /**
         * @param x
         * @param y
         * @param width
         * @param height
         */
        scissor(x: number, y: number, width: number, height: number): void;
        /**
         * @param shader
         * @param source
         */
        shaderSource(shader: number, source: string): void;
        /**
         * @param func
         * @param ref_
         * @param mask
         */
        stencilFunc(func: number, ref_: number, mask: number): void;
        /**
         * @param face
         * @param func
         * @param ref_
         * @param mask
         */
        stencilFuncSeparate(face: number, func: number, ref_: number, mask: number): void;
        /**
         * @param mask
         */
        stencilMask(mask: number): void;
        /**
         * @param face
         * @param mask
         */
        stencilMaskSeparate(face: number, mask: number): void;
        /**
         * @param fail
         * @param zfail
         * @param zpass
         */
        stencilOp(fail: number, zfail: number, zpass: number): void;
        /**
         * @param face
         * @param fail
         * @param zfail
         * @param zpass
         */
        stencilOpSeparate(face: number, fail: number, zfail: number, zpass: number): void;
        /**
         * @param target
         * @param pname
         * @param param
         */
        texParameterf(target: number, pname: number, param: number): void;
        /**
         * @param target
         * @param pname
         * @param param
         */
        texParameteri(target: number, pname: number, param: number): void;
        /**
         * @param location
         * @param x
         */
        uniform1f(location: number, x: number): void;
        /**
         * @param location
         * @param x
         */
        uniform1i(location: number, x: number): void;
        /**
         * @param location
         * @param x
         * @param y
         */
        uniform2f(location: number, x: number, y: number): void;
        /**
         * @param location
         * @param x
         * @param y
         */
        uniform2i(location: number, x: number, y: number): void;
        /**
         * @param location
         * @param x
         * @param y
         * @param z
         */
        uniform3f(location: number, x: number, y: number, z: number): void;
        /**
         * @param location
         * @param x
         * @param y
         * @param z
         */
        uniform3i(location: number, x: number, y: number, z: number): void;
        /**
         * @param location
         * @param x
         * @param y
         * @param z
         * @param w
         */
        uniform4f(location: number, x: number, y: number, z: number, w: number): void;
        /**
         * @param location
         * @param x
         * @param y
         * @param z
         * @param w
         */
        uniform4i(location: number, x: number, y: number, z: number, w: number): void;
        /**
         * @param program
         */
        useProgram(program: number): void;
        /**
         * @param program
         */
        validateProgram(program: number): void;
        /**
         * @param index
         * @param x
         */
        vertexAttrib1f(index: number, x: number): void;
        /**
         * @param index
         * @param v
         */
        vertexAttrib1fv(index: number, v: number[]): void;
        /**
         * @param index
         * @param x
         * @param y
         */
        vertexAttrib2f(index: number, x: number, y: number): void;
        /**
         * @param index
         * @param values
         */
        vertexAttrib2fv(index: number, values: number[]): void;
        /**
         * @param index
         * @param x
         * @param y
         * @param z
         */
        vertexAttrib3f(index: number, x: number, y: number, z: number): void;
        /**
         * @param index
         * @param values
         */
        vertexAttrib3fv(index: number, values: number[]): void;
        /**
         * @param index
         * @param x
         * @param y
         * @param z
         * @param w
         */
        vertexAttrib4f(index: number, x: number, y: number, z: number, w: number): void;
        /**
         * @param index
         * @param values
         */
        vertexAttrib4fv(index: number, values: number[]): void;
        /**
         * @param index
         * @param size
         * @param type
         * @param _normalized
         * @param stride
         * @param offset
         */
        vertexAttribPointer(
            index: number,
            size: number,
            type: number,
            _normalized: boolean,
            stride: number,
            offset: number,
        ): void;
        /**
         * @param x
         * @param y
         * @param width
         * @param height
         */
        viewport(x: number, y: number, width: number, height: number): void;
        /**
         * @param variant
         */
        isVariantOfByteArray(variant: GLib.Variant): boolean;
        /**
         * @param target
         * @param variant
         * @param usage
         */
        bufferData(target: number, variant: GLib.Variant, usage: number): void;
        /**
         * @param target
         * @param size
         * @param usage
         */
        bufferDataSizeOnly(target: number, size: number, usage: number): void;
        /**
         * @param target
         * @param offset
         * @param variant
         */
        bufferSubData(target: number, offset: number, variant: GLib.Variant): void;
        /**
         * @param target
         * @param level
         * @param internalFormat
         * @param width
         * @param height
         * @param border
         * @param variant
         */
        compressedTexImage2D(
            target: number,
            level: number,
            internalFormat: number,
            width: number,
            height: number,
            border: number,
            variant: GLib.Variant,
        ): void;
        /**
         * @param target
         * @param level
         * @param xoffset
         * @param yoffset
         * @param width
         * @param height
         * @param format
         * @param variant
         */
        compressedTexSubImage2D(
            target: number,
            level: number,
            xoffset: number,
            yoffset: number,
            width: number,
            height: number,
            format: number,
            variant: GLib.Variant,
        ): void;
        /**
         * @param x
         * @param y
         * @param width
         * @param height
         * @param format
         * @param type
         * @param variant
         */
        readPixels(
            x: number,
            y: number,
            width: number,
            height: number,
            format: number,
            type: number,
            variant: GLib.Variant,
        ): Uint8Array;
        /**
         * @param target
         * @param level
         * @param internalFormat
         * @param width
         * @param height
         * @param border
         * @param format
         * @param type
         * @param variant
         */
        texImage2D(
            target: number,
            level: number,
            internalFormat: number,
            width: number,
            height: number,
            border: number,
            format: number,
            type: number,
            variant: GLib.Variant,
        ): void;
        /**
         * @param target
         * @param level
         * @param internalFormat
         * @param format
         * @param type
         * @param source
         */
        texImage2DFromPixbuf(
            target: number,
            level: number,
            internalFormat: number,
            format: number,
            type: number,
            source?: any | null,
        ): void;
        /**
         * @param target
         * @param level
         * @param xoffset
         * @param yoffset
         * @param width
         * @param height
         * @param format
         * @param type
         * @param variant
         */
        texSubImage2D(
            target: number,
            level: number,
            xoffset: number,
            yoffset: number,
            width: number,
            height: number,
            format: number,
            type: number,
            variant: GLib.Variant,
        ): void;
        /**
         * @param target
         * @param level
         * @param xoffset
         * @param yoffset
         * @param format
         * @param type
         * @param source
         */
        texSubImage2DFromPixbuf(
            target: number,
            level: number,
            xoffset: number,
            yoffset: number,
            format: number,
            type: number,
            source?: any | null,
        ): void;
        /**
         * @param location
         * @param vLength
         * @param value
         */
        uniform1fv(location: number, vLength: number, value: number[]): void;
        /**
         * @param location
         * @param vLength
         * @param value
         */
        uniform1iv(location: number, vLength: number, value: number[]): void;
        /**
         * @param location
         * @param vLength
         * @param value
         */
        uniform2fv(location: number, vLength: number, value: number[]): void;
        /**
         * @param location
         * @param vLength
         * @param value
         */
        uniform2iv(location: number, vLength: number, value: number[]): void;
        /**
         * @param location
         * @param vLength
         * @param value
         */
        uniform3fv(location: number, vLength: number, value: number[]): void;
        /**
         * @param location
         * @param vLength
         * @param value
         */
        uniform3iv(location: number, vLength: number, value: number[]): void;
        /**
         * @param location
         * @param vLength
         * @param value
         */
        uniform4fv(location: number, vLength: number, value: number[]): void;
        /**
         * @param location
         * @param vLength
         * @param value
         */
        uniform4iv(location: number, vLength: number, value: number[]): void;
        /**
         * @param location
         * @param transpose
         * @param value
         */
        uniformMatrix2fv(location: number, transpose: boolean, value: number[]): void;
        /**
         * @param location
         * @param transpose
         * @param value
         */
        uniformMatrix3fv(location: number, transpose: boolean, value: number[]): void;
        /**
         * @param location
         * @param transpose
         * @param value
         */
        uniformMatrix4fv(location: number, transpose: boolean, value: number[]): void;
    }

    namespace WebGLRenderingContext {
        // Signal signatures
        interface SignalSignatures extends WebGLRenderingContextBase.SignalSignatures {
            'notify::width': (pspec: GObject.ParamSpec) => void;
            'notify::height': (pspec: GObject.ParamSpec) => void;
            'notify::alpha': (pspec: GObject.ParamSpec) => void;
            'notify::depth': (pspec: GObject.ParamSpec) => void;
            'notify::stencil': (pspec: GObject.ParamSpec) => void;
            'notify::antialias': (pspec: GObject.ParamSpec) => void;
            'notify::premultiplied-alpha': (pspec: GObject.ParamSpec) => void;
            'notify::preserve-drawing-buffer': (pspec: GObject.ParamSpec) => void;
            'notify::prefer-low-power-to-high-performance': (pspec: GObject.ParamSpec) => void;
            'notify::fail-if-major-performance-caveat': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends WebGLRenderingContextBase.ConstructorProps {
            width: number;
            height: number;
            alpha: boolean;
            depth: boolean;
            stencil: boolean;
            antialias: boolean;
            premultipliedAlpha: boolean;
            preserveDrawingBuffer: boolean;
            preferLowPowerToHighPerformance: boolean;
            failIfMajorPerformanceCaveat: boolean;
        }
    }

    /**
     * @gir-type Class
     */
    class WebGLRenderingContext extends WebGLRenderingContextBase {
        static $gtype: GObject.GType<WebGLRenderingContext>;

        // Properties

        /**
         * @construct-only
         */
        get width(): number;
        /**
         * @construct-only
         */
        get height(): number;
        /**
         * @construct-only
         */
        get alpha(): boolean;
        /**
         * @construct-only
         */
        get depth(): boolean;
        /**
         * @construct-only
         */
        get stencil(): boolean;
        /**
         * @construct-only
         */
        get antialias(): boolean;
        /**
         * @construct-only
         */
        get premultipliedAlpha(): boolean;
        /**
         * @construct-only
         */
        get preserveDrawingBuffer(): boolean;
        /**
         * @construct-only
         */
        get preferLowPowerToHighPerformance(): boolean;
        /**
         * @construct-only
         */
        get failIfMajorPerformanceCaveat(): boolean;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: WebGLRenderingContext.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<WebGLRenderingContext.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](
            width: number,
            height: number,
            alpha: boolean,
            depth: boolean,
            stencil: boolean,
            antialias: boolean,
            premultipliedAlpha: boolean,
            preserveDrawingBuffer: boolean,
            preferLowPowerToHighPerformance: boolean,
            failIfMajorPerformanceCaveat: boolean,
        ): WebGLRenderingContext;
        // Conflicted with Gwebgl.WebGLRenderingContextBase.new

        static ['new'](...args: never[]): any;

        // Signals

        /** @signal */
        connect<K extends keyof WebGLRenderingContext.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, WebGLRenderingContext.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof WebGLRenderingContext.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, WebGLRenderingContext.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof WebGLRenderingContext.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<WebGLRenderingContext.SignalSignatures[K]> extends [any, ...infer Q]
                ? Q
                : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        get_width(): number;
        get_height(): number;
        get_alpha(): boolean;
        get_depth(): boolean;
        get_stencil(): boolean;
        get_antialias(): boolean;
        get_premultipliedAlpha(): boolean;
        get_preserveDrawingBuffer(): boolean;
        get_preferLowPowerToHighPerformance(): boolean;
        get_failIfMajorPerformanceCaveat(): boolean;
    }

    namespace WebGL2RenderingContext {
        // Signal signatures
        interface SignalSignatures extends WebGLRenderingContextBase.SignalSignatures {
            'notify::width': (pspec: GObject.ParamSpec) => void;
            'notify::height': (pspec: GObject.ParamSpec) => void;
            'notify::alpha': (pspec: GObject.ParamSpec) => void;
            'notify::depth': (pspec: GObject.ParamSpec) => void;
            'notify::stencil': (pspec: GObject.ParamSpec) => void;
            'notify::antialias': (pspec: GObject.ParamSpec) => void;
            'notify::premultiplied-alpha': (pspec: GObject.ParamSpec) => void;
            'notify::preserve-drawing-buffer': (pspec: GObject.ParamSpec) => void;
            'notify::prefer-low-power-to-high-performance': (pspec: GObject.ParamSpec) => void;
            'notify::fail-if-major-performance-caveat': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends WebGLRenderingContextBase.ConstructorProps {
            width: number;
            height: number;
            alpha: boolean;
            depth: boolean;
            stencil: boolean;
            antialias: boolean;
            premultipliedAlpha: boolean;
            preserveDrawingBuffer: boolean;
            preferLowPowerToHighPerformance: boolean;
            failIfMajorPerformanceCaveat: boolean;
        }
    }

    /**
     * @gir-type Class
     */
    class WebGL2RenderingContext extends WebGLRenderingContextBase {
        static $gtype: GObject.GType<WebGL2RenderingContext>;

        // Properties

        /**
         * @construct-only
         */
        get width(): number;
        /**
         * @construct-only
         */
        get height(): number;
        /**
         * @construct-only
         */
        get alpha(): boolean;
        /**
         * @construct-only
         */
        get depth(): boolean;
        /**
         * @construct-only
         */
        get stencil(): boolean;
        /**
         * @construct-only
         */
        get antialias(): boolean;
        /**
         * @construct-only
         */
        get premultipliedAlpha(): boolean;
        /**
         * @construct-only
         */
        get preserveDrawingBuffer(): boolean;
        /**
         * @construct-only
         */
        get preferLowPowerToHighPerformance(): boolean;
        /**
         * @construct-only
         */
        get failIfMajorPerformanceCaveat(): boolean;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: WebGL2RenderingContext.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<WebGL2RenderingContext.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](
            width: number,
            height: number,
            alpha: boolean,
            depth: boolean,
            stencil: boolean,
            antialias: boolean,
            premultipliedAlpha: boolean,
            preserveDrawingBuffer: boolean,
            preferLowPowerToHighPerformance: boolean,
            failIfMajorPerformanceCaveat: boolean,
        ): WebGL2RenderingContext;
        // Conflicted with Gwebgl.WebGLRenderingContextBase.new

        static ['new'](...args: never[]): any;

        // Signals

        /** @signal */
        connect<K extends keyof WebGL2RenderingContext.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, WebGL2RenderingContext.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof WebGL2RenderingContext.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, WebGL2RenderingContext.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof WebGL2RenderingContext.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<WebGL2RenderingContext.SignalSignatures[K]> extends [any, ...infer Q]
                ? Q
                : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        createVertexArray(): number;
        /**
         * @param vao
         */
        deleteVertexArray(vao: number): void;
        /**
         * @param vao
         */
        isVertexArray(vao: number): boolean;
        /**
         * @param vao
         */
        bindVertexArray(vao: number): void;
        createQuery(): number;
        /**
         * @param query
         */
        deleteQuery(query: number): void;
        /**
         * @param query
         */
        isQuery(query: number): boolean;
        /**
         * @param target
         * @param query
         */
        beginQuery(target: number, query: number): void;
        /**
         * @param target
         */
        endQuery(target: number): void;
        /**
         * @param query
         * @param pname
         */
        getQueryParameter(query: number, pname: number): number;
        createSampler(): number;
        /**
         * @param sampler
         */
        deleteSampler(sampler: number): void;
        /**
         * @param sampler
         */
        isSampler(sampler: number): boolean;
        /**
         * @param unit
         * @param sampler
         */
        bindSampler(unit: number, sampler: number): void;
        /**
         * @param sampler
         * @param pname
         * @param param
         */
        samplerParameteri(sampler: number, pname: number, param: number): void;
        /**
         * @param sampler
         * @param pname
         * @param param
         */
        samplerParameterf(sampler: number, pname: number, param: number): void;
        /**
         * @param sampler
         * @param pname
         */
        getSamplerParameterf(sampler: number, pname: number): number;
        /**
         * @param sampler
         * @param pname
         */
        getSamplerParameteri(sampler: number, pname: number): number;
        /**
         * @param condition
         * @param flags
         */
        fenceSync(condition: number, flags: number): number;
        /**
         * @param syncId
         */
        isSync(syncId: number): boolean;
        /**
         * @param syncId
         */
        deleteSync(syncId: number): void;
        /**
         * @param syncId
         * @param flags
         * @param timeout
         */
        clientWaitSync(syncId: number, flags: number, timeout: number): number;
        /**
         * @param syncId
         * @param flags
         * @param timeout
         */
        waitSync(syncId: number, flags: number, timeout: number): void;
        /**
         * @param syncId
         * @param pname
         */
        getSyncParameter(syncId: number, pname: number): number;
        createTransformFeedback(): number;
        /**
         * @param tf
         */
        deleteTransformFeedback(tf: number): void;
        /**
         * @param tf
         */
        isTransformFeedback(tf: number): boolean;
        /**
         * @param target
         * @param tf
         */
        bindTransformFeedback(target: number, tf: number): void;
        /**
         * @param primitiveMode
         */
        beginTransformFeedback(primitiveMode: number): void;
        endTransformFeedback(): void;
        pauseTransformFeedback(): void;
        resumeTransformFeedback(): void;
        /**
         * @param program
         * @param varyings
         * @param bufferMode
         */
        transformFeedbackVaryings(program: number, varyings: string[], bufferMode: number): void;
        /**
         * @param program
         * @param index
         */
        getTransformFeedbackVarying(program: number, index: number): GLib.Variant;
        /**
         * @param target
         * @param index
         * @param buffer
         */
        bindBufferBase(target: number, index: number, buffer: number): void;
        /**
         * @param target
         * @param index
         * @param buffer
         * @param offset
         * @param size
         */
        bindBufferRange(target: number, index: number, buffer: number, offset: number, size: number): void;
        /**
         * @param readTarget
         * @param writeTarget
         * @param readOffset
         * @param writeOffset
         * @param size
         */
        copyBufferSubData(
            readTarget: number,
            writeTarget: number,
            readOffset: number,
            writeOffset: number,
            size: number,
        ): void;
        /**
         * @param target
         * @param srcByteOffset
         * @param length
         */
        getBufferSubData(target: number, srcByteOffset: number, length: number): Uint8Array;
        /**
         * @param target
         * @param level
         * @param internalFormat
         * @param width
         * @param height
         * @param depth
         * @param border
         * @param format
         * @param type
         * @param variant
         */
        texImage3D(
            target: number,
            level: number,
            internalFormat: number,
            width: number,
            height: number,
            depth: number,
            border: number,
            format: number,
            type: number,
            variant: GLib.Variant,
        ): void;
        /**
         * @param target
         * @param level
         * @param internalFormat
         * @param width
         * @param height
         * @param depth
         * @param border
         * @param format
         * @param type
         */
        texImage3DNull(
            target: number,
            level: number,
            internalFormat: number,
            width: number,
            height: number,
            depth: number,
            border: number,
            format: number,
            type: number,
        ): void;
        /**
         * @param target
         * @param level
         * @param xoffset
         * @param yoffset
         * @param zoffset
         * @param width
         * @param height
         * @param depth
         * @param format
         * @param type
         * @param variant
         */
        texSubImage3D(
            target: number,
            level: number,
            xoffset: number,
            yoffset: number,
            zoffset: number,
            width: number,
            height: number,
            depth: number,
            format: number,
            type: number,
            variant: GLib.Variant,
        ): void;
        /**
         * @param target
         * @param level
         * @param internalFormat
         * @param width
         * @param height
         * @param depth
         * @param border
         * @param variant
         */
        compressedTexImage3D(
            target: number,
            level: number,
            internalFormat: number,
            width: number,
            height: number,
            depth: number,
            border: number,
            variant: GLib.Variant,
        ): void;
        /**
         * @param target
         * @param level
         * @param xoffset
         * @param yoffset
         * @param zoffset
         * @param width
         * @param height
         * @param depth
         * @param format
         * @param variant
         */
        compressedTexSubImage3D(
            target: number,
            level: number,
            xoffset: number,
            yoffset: number,
            zoffset: number,
            width: number,
            height: number,
            depth: number,
            format: number,
            variant: GLib.Variant,
        ): void;
        /**
         * @param target
         * @param level
         * @param xoffset
         * @param yoffset
         * @param zoffset
         * @param x
         * @param y
         * @param width
         * @param height
         */
        copyTexSubImage3D(
            target: number,
            level: number,
            xoffset: number,
            yoffset: number,
            zoffset: number,
            x: number,
            y: number,
            width: number,
            height: number,
        ): void;
        /**
         * @param target
         * @param levels
         * @param internalFormat
         * @param width
         * @param height
         */
        texStorage2D(target: number, levels: number, internalFormat: number, width: number, height: number): void;
        /**
         * @param target
         * @param levels
         * @param internalFormat
         * @param width
         * @param height
         * @param depth
         */
        texStorage3D(
            target: number,
            levels: number,
            internalFormat: number,
            width: number,
            height: number,
            depth: number,
        ): void;
        /**
         * @param target
         * @param attachment
         * @param texture
         * @param level
         * @param layer
         */
        framebufferTextureLayer(
            target: number,
            attachment: number,
            texture: number,
            level: number,
            layer: number,
        ): void;
        /**
         * @param mode
         * @param first
         * @param count
         * @param instanceCount
         */
        drawArraysInstanced(mode: number, first: number, count: number, instanceCount: number): void;
        /**
         * @param mode
         * @param count
         * @param type
         * @param offset
         * @param instanceCount
         */
        drawElementsInstanced(mode: number, count: number, type: number, offset: number, instanceCount: number): void;
        /**
         * @param index
         * @param divisor
         */
        vertexAttribDivisor(index: number, divisor: number): void;
        /**
         * @param index
         * @param size
         * @param type
         * @param stride
         * @param offset
         */
        vertexAttribIPointer(index: number, size: number, type: number, stride: number, offset: number): void;
        /**
         * @param buffers
         */
        drawBuffers(buffers: number[]): void;
        /**
         * @param mode
         * @param start
         * @param end
         * @param count
         * @param type
         * @param offset
         */
        drawRangeElements(mode: number, start: number, end: number, count: number, type: number, offset: number): void;
        /**
         * @param srcX0
         * @param srcY0
         * @param srcX1
         * @param srcY1
         * @param dstX0
         * @param dstY0
         * @param dstX1
         * @param dstY1
         * @param mask
         * @param filter
         */
        blitFramebuffer(
            srcX0: number,
            srcY0: number,
            srcX1: number,
            srcY1: number,
            dstX0: number,
            dstY0: number,
            dstX1: number,
            dstY1: number,
            mask: number,
            filter: number,
        ): void;
        /**
         * @param target
         * @param attachments
         */
        invalidateFramebuffer(target: number, attachments: number[]): void;
        /**
         * @param target
         * @param attachments
         * @param x
         * @param y
         * @param width
         * @param height
         */
        invalidateSubFramebuffer(
            target: number,
            attachments: number[],
            x: number,
            y: number,
            width: number,
            height: number,
        ): void;
        /**
         * @param src
         */
        readBuffer(src: number): void;
        /**
         * @param target
         * @param samples
         * @param internalFormat
         * @param width
         * @param height
         */
        renderbufferStorageMultisample(
            target: number,
            samples: number,
            internalFormat: number,
            width: number,
            height: number,
        ): void;
        /**
         * @param location
         * @param v0
         */
        uniform1ui(location: number, v0: number): void;
        /**
         * @param location
         * @param v0
         * @param v1
         */
        uniform2ui(location: number, v0: number, v1: number): void;
        /**
         * @param location
         * @param v0
         * @param v1
         * @param v2
         */
        uniform3ui(location: number, v0: number, v1: number, v2: number): void;
        /**
         * @param location
         * @param v0
         * @param v1
         * @param v2
         * @param v3
         */
        uniform4ui(location: number, v0: number, v1: number, v2: number, v3: number): void;
        /**
         * @param location
         * @param vLength
         * @param value
         */
        uniform1uiv(location: number, vLength: number, value: number[]): void;
        /**
         * @param location
         * @param vLength
         * @param value
         */
        uniform2uiv(location: number, vLength: number, value: number[]): void;
        /**
         * @param location
         * @param vLength
         * @param value
         */
        uniform3uiv(location: number, vLength: number, value: number[]): void;
        /**
         * @param location
         * @param vLength
         * @param value
         */
        uniform4uiv(location: number, vLength: number, value: number[]): void;
        /**
         * @param location
         * @param transpose
         * @param value
         */
        uniformMatrix2x3fv(location: number, transpose: boolean, value: number[]): void;
        /**
         * @param location
         * @param transpose
         * @param value
         */
        uniformMatrix3x2fv(location: number, transpose: boolean, value: number[]): void;
        /**
         * @param location
         * @param transpose
         * @param value
         */
        uniformMatrix2x4fv(location: number, transpose: boolean, value: number[]): void;
        /**
         * @param location
         * @param transpose
         * @param value
         */
        uniformMatrix4x2fv(location: number, transpose: boolean, value: number[]): void;
        /**
         * @param location
         * @param transpose
         * @param value
         */
        uniformMatrix3x4fv(location: number, transpose: boolean, value: number[]): void;
        /**
         * @param location
         * @param transpose
         * @param value
         */
        uniformMatrix4x3fv(location: number, transpose: boolean, value: number[]): void;
        /**
         * @param program
         * @param uniformBlockName
         */
        getUniformBlockIndex(program: number, uniformBlockName: string): number;
        /**
         * @param program
         * @param uniformBlockIndex
         * @param uniformBlockBinding
         */
        uniformBlockBinding(program: number, uniformBlockIndex: number, uniformBlockBinding: number): void;
        /**
         * @param program
         * @param uniformBlockIndex
         */
        getActiveUniformBlockName(program: number, uniformBlockIndex: number): string;
        /**
         * @param program
         * @param uniformBlockIndex
         * @param pname
         */
        getActiveUniformBlockParameter(program: number, uniformBlockIndex: number, pname: number): number;
        /**
         * @param program
         * @param uniformIndices
         * @param pname
         */
        getActiveUniforms(program: number, uniformIndices: number[], pname: number): number[];
        /**
         * @param program
         * @param name
         */
        getFragDataLocation(program: number, name: string): number;
        /**
         * @param target
         * @param index
         */
        getIndexedParameteri(target: number, index: number): number;
        /**
         * @param target
         * @param internalFormat
         * @param pname
         */
        getInternalformatParameter(target: number, internalFormat: number, pname: number): number;
        /**
         * @param name
         * @param index
         */
        getStringi(name: number, index: number): string;
        get_width(): number;
        get_height(): number;
        get_alpha(): boolean;
        get_depth(): boolean;
        get_stencil(): boolean;
        get_antialias(): boolean;
        get_premultipliedAlpha(): boolean;
        get_preserveDrawingBuffer(): boolean;
        get_preferLowPowerToHighPerformance(): boolean;
        get_failIfMajorPerformanceCaveat(): boolean;
    }

    /**
     * @gir-type Alias
     */
    type WebGLRenderingContextBaseClass = typeof WebGLRenderingContextBase;
    /**
     * @gir-type Struct
     */
    abstract class WebGLRenderingContextBasePrivate {
        static $gtype: GObject.GType<WebGLRenderingContextBasePrivate>;
    }

    /**
     * @gir-type Alias
     */
    type WebGLRenderingContextClass = typeof WebGLRenderingContext;
    /**
     * @gir-type Struct
     */
    abstract class WebGLRenderingContextPrivate {
        static $gtype: GObject.GType<WebGLRenderingContextPrivate>;
    }

    /**
     * @gir-type Alias
     */
    type WebGL2RenderingContextClass = typeof WebGL2RenderingContext;
    /**
     * @gir-type Struct
     */
    abstract class WebGL2RenderingContextPrivate {
        static $gtype: GObject.GType<WebGL2RenderingContextPrivate>;
    }

    /**
     * @gir-type Struct
     */
    class WebGLActiveInfo {
        static $gtype: GObject.GType<WebGLActiveInfo>;

        // Fields

        name: string;
        size: number;
        type: number;

        // Constructors

        constructor(
            properties?: Partial<{
                name: string;
                size: number;
                type: number;
            }>,
        );
    }

    /**
     * @gir-type Struct
     */
    class WebGLShaderPrecisionFormat {
        static $gtype: GObject.GType<WebGLShaderPrecisionFormat>;

        // Fields

        precision: number;
        rangeMax: number;
        rangeMin: number;

        // Constructors

        constructor(
            properties?: Partial<{
                precision: number;
                rangeMax: number;
                rangeMin: number;
            }>,
        );
    }

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

export default Gwebgl;

// END
