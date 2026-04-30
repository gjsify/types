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
import type Gio from '@girs/gio-2.0';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type GModule from '@girs/gmodule-2.0';

export namespace Gpiodglib {
    /**
     * Gpiodglib-1.0
     */

    /**
     * @gir-type Enum
     */
    export namespace EdgeEventType {
        export const $gtype: GObject.GType<EdgeEventType>;
    }

    /**
     * Edge event types.
     * @gir-type Enum
     */
    enum EdgeEventType {
        /**
         * Rising edge event.
         */
        RISING_EDGE,
        /**
         * Falling edge event.
         */
        FALLING_EDGE,
    }

    /**
     * @gir-type Struct
     */
    class Error extends GLib.Error {
        static $gtype: GObject.GType<GLib.Error>;

        // Static fields

        static FAILED: number;
        static CHIP_CLOSED: number;
        static REQUEST_RELEASED: number;
        static PERM: number;
        static NOENT: number;
        static INTR: number;
        static IO: number;
        static NXIO: number;
        static E2BIG: number;
        static BADFD: number;
        static CHILD: number;
        static AGAIN: number;
        static NOMEM: number;
        static ACCES: number;
        static FAULT: number;
        static BUSY: number;
        static EXIST: number;
        static NODEV: number;
        static INVAL: number;
        static NOTTY: number;
        static PIPE: number;

        // Constructors

        constructor(options: { message: string; code: number });
    }

    /**
     * @gir-type Enum
     */
    export namespace InfoEventType {
        export const $gtype: GObject.GType<InfoEventType>;
    }

    /**
     * Line status change event types.
     * @gir-type Enum
     */
    enum InfoEventType {
        /**
         * Line has been requested.
         */
        REQUESTED,
        /**
         * Previously requested line has been
         * released.
         */
        RELEASED,
        /**
         * Line configuration has changed.
         */
        CONFIG_CHANGED,
    }

    /**
     * @gir-type Enum
     */
    export namespace LineBias {
        export const $gtype: GObject.GType<LineBias>;
    }

    /**
     * Internal bias settings.
     * @gir-type Enum
     */
    enum LineBias {
        /**
         * Don't change the bias setting when applying line
         * config.
         */
        AS_IS,
        /**
         * The internal bias state is unknown.
         */
        UNKNOWN,
        /**
         * The internal bias is disabled.
         */
        DISABLED,
        /**
         * The internal pull-up bias is enabled.
         */
        PULL_UP,
        /**
         * The internal pull-down bias is enabled.
         */
        PULL_DOWN,
    }

    /**
     * @gir-type Enum
     */
    export namespace LineClock {
        export const $gtype: GObject.GType<LineClock>;
    }

    /**
     * Clock settings.
     * @gir-type Enum
     */
    enum LineClock {
        /**
         * Line uses the monotonic clock for edge
         * event timestamps.
         */
        MONOTONIC,
        /**
         * Line uses the realtime clock for edge event
         * timestamps.
         */
        REALTIME,
        /**
         * Line uses the hardware timestamp engine for event
         * timestamps.
         */
        HTE,
    }

    /**
     * @gir-type Enum
     */
    export namespace LineDirection {
        export const $gtype: GObject.GType<LineDirection>;
    }

    /**
     * Direction settings.
     * @gir-type Enum
     */
    enum LineDirection {
        /**
         * Request the line(s), but don't change
         * direction.
         */
        AS_IS,
        /**
         * Direction is input - for reading the value
         * of an externally driven GPIO line.
         */
        INPUT,
        /**
         * Direction is output - for driving the GPIO
         * line.
         */
        OUTPUT,
    }

    /**
     * @gir-type Enum
     */
    export namespace LineDrive {
        export const $gtype: GObject.GType<LineDrive>;
    }

    /**
     * Drive settings.
     * @gir-type Enum
     */
    enum LineDrive {
        /**
         * Drive setting is push-pull.
         */
        PUSH_PULL,
        /**
         * Line output is open-drain.
         */
        OPEN_DRAIN,
        /**
         * Line output is open-source.
         */
        OPEN_SOURCE,
    }

    /**
     * @gir-type Enum
     */
    export namespace LineEdge {
        export const $gtype: GObject.GType<LineEdge>;
    }

    /**
     * Edge detection settings.
     * @gir-type Enum
     */
    enum LineEdge {
        /**
         * Line edge detection is disabled.
         */
        NONE,
        /**
         * Line detects rising edge events.
         */
        RISING,
        /**
         * Line detects falling edge events.
         */
        FALLING,
        /**
         * Line detects both rising and falling edge events.
         */
        BOTH,
    }

    /**
     * @gir-type Enum
     */
    export namespace LineValue {
        export const $gtype: GObject.GType<LineValue>;
    }

    /**
     * Logical line state.
     * @gir-type Enum
     */
    enum LineValue {
        /**
         * Line is logically inactive.
         */
        INACTIVE,
        /**
         * Line is logically active.
         */
        ACTIVE,
    }

    /**
     * Get the API version of the library as a human-readable string.
     * @returns A valid pointer to a human-readable string containing the library version. The pointer is valid for the lifetime of the program and must not be freed by the caller.
     */
    function api_version(): string;
    function error_quark(): GLib.Quark;
    /**
     * Check if the file pointed to by path is a GPIO chip character device.
     * @param path Path to check.
     * @returns TRUE if the file exists and is either a GPIO chip character device or a symbolic link to one, FALSE otherwise.
     */
    function is_gpiochip_device(path: string): boolean;
    namespace Chip {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            /**
             * Emitted when the state of a watched GPIO line changes.
             * @signal
             * @run-last
             */
            'info-event': (arg0: InfoEvent) => void;
            'notify::path': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps, Gio.Initable.ConstructorProps {
            path: string;
        }
    }

    /**
     * Represents a single GPIO chip.
     * @gir-type Class
     */
    class Chip extends GObject.Object implements Gio.Initable {
        static $gtype: GObject.GType<Chip>;

        // Properties

        /**
         * Path that was used to open this GPIO chip.
         * @construct-only
         * @default null
         */
        get path(): string;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Chip.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Chip.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](path: string): Chip;

        // Signals

        /** @signal */
        connect<K extends keyof Chip.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Chip.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Chip.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Chip.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Chip.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Chip.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Close the GPIO chip device file and free associated resources.
         *
         * The chip object can live after calling this method but any of the chip's
         * methods will result in an error being set.
         */
        close(): void;
        /**
         * Get the filesystem path that was used to open this GPIO chip.
         * @returns Path to the underlying character device file. The string is a copy and must be freed by the caller with `g_free()`.
         */
        dup_path(): string;
        /**
         * Get information about the chip.
         * @returns New {@link Gpiodglib.ChipInfo}.
         */
        get_info(): ChipInfo;
        /**
         * Retrieve the current snapshot of line information for a single line.
         * @param offset Offset of the line to get the info for.
         * @returns New {@link Gpiodglib.LineInfo}.
         */
        get_line_info(offset: number): LineInfo;
        /**
         * Map a GPIO line's name to its offset within the chip.
         * @param name Name of the GPIO line to map.
         * @param offset Return location for the mapped offset.
         * @returns TRUE on success, FALSE on failure.
         */
        get_line_offset_from_name(name: string, offset: number): boolean;
        /**
         * `brief` Check if this object is valid.
         * @returns TRUE if this object's methods can be used, FALSE otherwise.
         */
        is_closed(): boolean;
        /**
         * Request a set of lines for exclusive usage.
         * @param req_cfg Request config object. Can be NULL for default settings.
         * @param line_cfg Line config object.
         * @returns New {@link Gpiodglib.LineRequest}.
         */
        request_lines(req_cfg: RequestConfig, line_cfg: LineConfig): LineRequest;
        /**
         * Stop watching the line at given offset for info events.
         * @param offset Offset of the line to get the info for.
         * @returns TRUE on success, FALSE on failure.
         */
        unwatch_line_info(offset: number): boolean;
        /**
         * Retrieve the current snapshot of line information for a single line and
         * start watching this line for future changes.
         * @param offset Offset of the line to get the info for and to watch.
         * @returns New {@link Gpiodglib.LineInfo}.
         */
        watch_line_info(offset: number): LineInfo;
        /**
         * Initializes the object implementing the interface.
         *
         * This method is intended for language bindings. If writing in C,
         * `g_initable_new()` should typically be used instead.
         *
         * The object must be initialized before any real use after initial
         * construction, either with this function or `g_async_initable_init_async()`.
         *
         * Implementations may also support cancellation. If `cancellable` is not `null`,
         * then initialization can be cancelled by triggering the cancellable object
         * from another thread. If the operation was cancelled, the error
         * {@link Gio.IOErrorEnum.CANCELLED} will be returned. If `cancellable` is not `null` and
         * the object doesn't support cancellable initialization the error
         * {@link Gio.IOErrorEnum.NOT_SUPPORTED} will be returned.
         *
         * If the object is not initialized, or initialization returns with an
         * error, then all operations on the object except `g_object_ref()` and
         * `g_object_unref()` are considered to be invalid, and have undefined
         * behaviour. See the [description][iface@Gio.Initable#description] for more details.
         *
         * Callers should not assume that a class which implements {@link Gio.Initable} can be
         * initialized multiple times, unless the class explicitly documents itself as
         * supporting this. Generally, a class’ implementation of `init()` can assume
         * (and assert) that it will only be called once. Previously, this documentation
         * recommended all {@link Gio.Initable} implementations should be idempotent; that
         * recommendation was relaxed in GLib 2.54.
         *
         * If a class explicitly supports being initialized multiple times, it is
         * recommended that the method is idempotent: multiple calls with the same
         * arguments should return the same results. Only the first call initializes
         * the object; further calls return the result of the first call.
         *
         * One reason why a class might need to support idempotent initialization is if
         * it is designed to be used via the singleton pattern, with a
         * {@link GObject.ObjectClass}.constructor that sometimes returns an existing instance.
         * In this pattern, a caller would expect to be able to call `g_initable_init()`
         * on the result of `g_object_new()`, regardless of whether it is in fact a new
         * instance.
         * @param cancellable optional {@link Gio.Cancellable} object, `null` to ignore.
         * @returns `true` if successful. If an error has occurred, this function will     return `false` and set `error` appropriately if present.
         */
        init(cancellable: Gio.Cancellable | null): boolean;
        /**
         * Initializes the object implementing the interface.
         *
         * This method is intended for language bindings. If writing in C,
         * `g_initable_new()` should typically be used instead.
         *
         * The object must be initialized before any real use after initial
         * construction, either with this function or `g_async_initable_init_async()`.
         *
         * Implementations may also support cancellation. If `cancellable` is not `null`,
         * then initialization can be cancelled by triggering the cancellable object
         * from another thread. If the operation was cancelled, the error
         * {@link Gio.IOErrorEnum.CANCELLED} will be returned. If `cancellable` is not `null` and
         * the object doesn't support cancellable initialization the error
         * {@link Gio.IOErrorEnum.NOT_SUPPORTED} will be returned.
         *
         * If the object is not initialized, or initialization returns with an
         * error, then all operations on the object except `g_object_ref()` and
         * `g_object_unref()` are considered to be invalid, and have undefined
         * behaviour. See the [description][iface@Gio.Initable#description] for more details.
         *
         * Callers should not assume that a class which implements {@link Gio.Initable} can be
         * initialized multiple times, unless the class explicitly documents itself as
         * supporting this. Generally, a class’ implementation of `init()` can assume
         * (and assert) that it will only be called once. Previously, this documentation
         * recommended all {@link Gio.Initable} implementations should be idempotent; that
         * recommendation was relaxed in GLib 2.54.
         *
         * If a class explicitly supports being initialized multiple times, it is
         * recommended that the method is idempotent: multiple calls with the same
         * arguments should return the same results. Only the first call initializes
         * the object; further calls return the result of the first call.
         *
         * One reason why a class might need to support idempotent initialization is if
         * it is designed to be used via the singleton pattern, with a
         * {@link GObject.ObjectClass}.constructor that sometimes returns an existing instance.
         * In this pattern, a caller would expect to be able to call `g_initable_init()`
         * on the result of `g_object_new()`, regardless of whether it is in fact a new
         * instance.
         * @param cancellable optional {@link Gio.Cancellable} object, `null` to ignore.
         * @virtual
         */
        vfunc_init(cancellable: Gio.Cancellable | null): boolean;
    }

    namespace ChipInfo {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::label': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::num-lines': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            label: string;
            name: string;
            num_lines: number;
            numLines: number;
        }
    }

    /**
     * Represents an immutable snapshot of GPIO chip information.
     * @gir-type Class
     */
    class ChipInfo extends GObject.Object {
        static $gtype: GObject.GType<ChipInfo>;

        // Properties

        /**
         * Label of this GPIO chip device.
         * @read-only
         * @default null
         */
        get label(): string;
        /**
         * Name of this GPIO chip device.
         * @read-only
         * @default null
         */
        get name(): string;
        /**
         * Number of GPIO lines exposed by this chip.
         * @read-only
         * @default 1
         */
        get num_lines(): number;
        /**
         * Number of GPIO lines exposed by this chip.
         * @read-only
         * @default 1
         */
        get numLines(): number;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: ChipInfo.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<ChipInfo.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof ChipInfo.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ChipInfo.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof ChipInfo.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ChipInfo.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof ChipInfo.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<ChipInfo.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Get the label of the chip as represented in the kernel.
         * @returns Valid pointer to a human-readable string containing the chip label. The returned string is a copy and must be freed by the caller using `g_free()`.
         */
        dup_label(): string;
        /**
         * Get the name of the chip as represented in the kernel.
         * @returns Valid pointer to a human-readable string containing the chip name. The returned string is a copy and must be freed by the caller using `g_free()`.
         */
        dup_name(): string;
        /**
         * Get the number of lines exposed by the chip.
         * @returns Number of GPIO lines.
         */
        get_num_lines(): number;
    }

    namespace EdgeEvent {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::event-type': (pspec: GObject.ParamSpec) => void;
            'notify::global-seqno': (pspec: GObject.ParamSpec) => void;
            'notify::line-offset': (pspec: GObject.ParamSpec) => void;
            'notify::line-seqno': (pspec: GObject.ParamSpec) => void;
            'notify::timestamp-ns': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            event_type: EdgeEventType;
            eventType: EdgeEventType;
            global_seqno: bigint | number;
            globalSeqno: bigint | number;
            line_offset: number;
            lineOffset: number;
            line_seqno: bigint | number;
            lineSeqno: bigint | number;
            timestamp_ns: bigint | number;
            timestampNs: bigint | number;
        }
    }

    /**
     * {@link Gpiodglib.EdgeEvent} stores information about a single line edge event.
     * It contains the event type, timestamp and the offset of the line on which
     * the event occurred as well as two sequence numbers (global for all lines
     * in the associated request and local for this line only).
     * @gir-type Class
     */
    class EdgeEvent extends GObject.Object {
        static $gtype: GObject.GType<EdgeEvent>;

        // Properties

        /**
         * Type of the edge event.
         * @read-only
         * @default Gpiodglib.EdgeEventType.RISING_EDGE
         */
        get event_type(): EdgeEventType;
        /**
         * Type of the edge event.
         * @read-only
         * @default Gpiodglib.EdgeEventType.RISING_EDGE
         */
        get eventType(): EdgeEventType;
        /**
         * Global sequence number of this event.
         * @read-only
         * @default 0
         */
        get global_seqno(): number;
        /**
         * Global sequence number of this event.
         * @read-only
         * @default 0
         */
        get globalSeqno(): number;
        /**
         * Offset of the line on which this event was registered.
         * @read-only
         * @default 0
         */
        get line_offset(): number;
        /**
         * Offset of the line on which this event was registered.
         * @read-only
         * @default 0
         */
        get lineOffset(): number;
        /**
         * Event sequence number specific to the line.
         * @read-only
         * @default 0
         */
        get line_seqno(): number;
        /**
         * Event sequence number specific to the line.
         * @read-only
         * @default 0
         */
        get lineSeqno(): number;
        /**
         * Timestamp of the edge event expressed in nanoseconds.
         * @read-only
         * @default 0
         */
        get timestamp_ns(): number;
        /**
         * Timestamp of the edge event expressed in nanoseconds.
         * @read-only
         * @default 0
         */
        get timestampNs(): number;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: EdgeEvent.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<EdgeEvent.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof EdgeEvent.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, EdgeEvent.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof EdgeEvent.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, EdgeEvent.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof EdgeEvent.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<EdgeEvent.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Get the event type.
         * @returns The event type (`GPIODGLIB_EDGE_EVENT_RISING_EDGE` or `GPIODGLIB_EDGE_EVENT_FALLING_EDGE`).
         */
        get_event_type(): EdgeEventType;
        /**
         * Get the global sequence number of the event.
         * @returns Sequence number of the event in the series of events for all lines in the associated line request.
         */
        get_global_seqno(): number;
        /**
         * Get the offset of the line which triggered the event.
         * @returns Line offset.
         */
        get_line_offset(): number;
        /**
         * Get the event sequence number specific to the line.
         * @returns Sequence number of the event in the series of events only for this line within the lifetime of the associated line request.
         */
        get_line_seqno(): number;
        /**
         * Get the timestamp of the event.
         *
         * The source clock for the timestamp depends on the event_clock setting for
         * the line.
         * @returns Timestamp in nanoseconds.
         */
        get_timestamp_ns(): number;
    }

    namespace InfoEvent {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::event-type': (pspec: GObject.ParamSpec) => void;
            'notify::line-info': (pspec: GObject.ParamSpec) => void;
            'notify::timestamp-ns': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            event_type: InfoEventType;
            eventType: InfoEventType;
            line_info: LineInfo;
            lineInfo: LineInfo;
            timestamp_ns: bigint | number;
            timestampNs: bigint | number;
        }
    }

    /**
     * {@link Gpiodglib.InfoEvent} contains information about the event itself (timestamp,
     * type) as well as a snapshot of line's status in the form of a line-info
     * object.
     * @gir-type Class
     */
    class InfoEvent extends GObject.Object {
        static $gtype: GObject.GType<InfoEvent>;

        // Properties

        /**
         * Type of the info event. One of `GPIODGLIB_INFO_EVENT_LINE_REQUESTED`,
         * `GPIODGLIB_INFO_EVENT_LINE_RELEASED` or
         * `GPIODGLIB_INFO_EVENT_LINE_CONFIG_CHANGED`.
         * @read-only
         * @default Gpiodglib.InfoEventType.REQUESTED
         */
        get event_type(): InfoEventType;
        /**
         * Type of the info event. One of `GPIODGLIB_INFO_EVENT_LINE_REQUESTED`,
         * `GPIODGLIB_INFO_EVENT_LINE_RELEASED` or
         * `GPIODGLIB_INFO_EVENT_LINE_CONFIG_CHANGED`.
         * @read-only
         * @default Gpiodglib.InfoEventType.REQUESTED
         */
        get eventType(): InfoEventType;
        /**
         * New line-info snapshot associated with this info event.
         * @read-only
         */
        get line_info(): LineInfo;
        /**
         * New line-info snapshot associated with this info event.
         * @read-only
         */
        get lineInfo(): LineInfo;
        /**
         * Timestamp (in nanoseconds).
         * @read-only
         * @default 0
         */
        get timestamp_ns(): number;
        /**
         * Timestamp (in nanoseconds).
         * @read-only
         * @default 0
         */
        get timestampNs(): number;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: InfoEvent.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<InfoEvent.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof InfoEvent.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, InfoEvent.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof InfoEvent.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, InfoEvent.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof InfoEvent.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<InfoEvent.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Get the event type of the status change event.
         * @returns One of `GPIODGLIB_INFO_EVENT_LINE_REQUESTED`, `GPIODGLIB_INFO_EVENT_LINE_RELEASED` or `GPIODGLIB_INFO_EVENT_LINE_CONFIG_CHANGED`.
         */
        get_event_type(): InfoEventType;
        /**
         * `self` {@link Gpiodglib.InfoEvent} to manipulate.
         * Get the snapshot of line-info associated with the event.
         * @returns New reference to the associated line-info object.
         */
        get_line_info(): LineInfo;
        /**
         * Get the timestamp of the event.
         * @returns Timestamp in nanoseconds, read from the monotonic clock.
         */
        get_timestamp_ns(): number;
    }

    namespace LineConfig {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::configured-offsets': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            configured_offsets: any[];
            configuredOffsets: any[];
        }
    }

    /**
     * The line-config object contains the configuration for lines that can be
     * used in two cases:
     *  - when making a line request
     *  - when reconfiguring a set of already requested lines.
     * @gir-type Class
     */
    class LineConfig extends GObject.Object {
        static $gtype: GObject.GType<LineConfig>;

        // Properties

        /**
         * Array of offsets for which line settings have been set.
         * @read-only
         */
        get configured_offsets(): any[];
        /**
         * Array of offsets for which line settings have been set.
         * @read-only
         */
        get configuredOffsets(): any[];

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: LineConfig.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<LineConfig.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): LineConfig;

        // Signals

        /** @signal */
        connect<K extends keyof LineConfig.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, LineConfig.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof LineConfig.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, LineConfig.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof LineConfig.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<LineConfig.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Add line settings for a set of offsets.
         * @param offsets GArray of offsets for which to apply the settings.
         * @param settings {@link Gpiodglib.LineSettings} to apply.
         * @returns TRUE on success, FALSE on failure.
         */
        add_line_settings(offsets: any[][], settings: LineSettings): boolean;
        /**
         * Get configured offsets.
         * @returns GArray containing the offsets for which configuration has been set.
         */
        get_configured_offsets(): any[][];
        /**
         * Get line settings for offset.
         * @param offset Offset for which to get line settings.
         * @returns New reference to a {@link Gpiodglib.LineSettings}.
         */
        get_line_settings(offset: number): LineSettings;
        /**
         * Reset the line config object.
         */
        reset(): void;
        /**
         * `brief` Set output values for a number of lines.
         * @param values GArray containing the output values.
         * @returns TRUE on success, FALSE on error.
         */
        set_output_values(values: any[][]): boolean;
    }

    namespace LineInfo {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::active-low': (pspec: GObject.ParamSpec) => void;
            'notify::bias': (pspec: GObject.ParamSpec) => void;
            'notify::consumer': (pspec: GObject.ParamSpec) => void;
            'notify::debounce-period-us': (pspec: GObject.ParamSpec) => void;
            'notify::debounced': (pspec: GObject.ParamSpec) => void;
            'notify::direction': (pspec: GObject.ParamSpec) => void;
            'notify::drive': (pspec: GObject.ParamSpec) => void;
            'notify::edge-detection': (pspec: GObject.ParamSpec) => void;
            'notify::event-clock': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::offset': (pspec: GObject.ParamSpec) => void;
            'notify::used': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            active_low: boolean;
            activeLow: boolean;
            bias: LineBias;
            consumer: string;
            debounce_period_us: bigint | number;
            debouncePeriodUs: bigint | number;
            debounced: boolean;
            direction: LineDirection;
            drive: LineDrive;
            edge_detection: LineEdge;
            edgeDetection: LineEdge;
            event_clock: LineClock;
            eventClock: LineClock;
            name: string;
            offset: number;
            used: boolean;
        }
    }

    /**
     * Line info object contains an immutable snapshot of a line's status.
     *
     * The line info contains all the publicly available information about a
     * line, which does not include the line value. The line must be requested
     * to access the line value.
     * @gir-type Class
     */
    class LineInfo extends GObject.Object {
        static $gtype: GObject.GType<LineInfo>;

        // Properties

        /**
         * Indicates whether the signal of the line is inverted.
         * @read-only
         * @default false
         */
        get active_low(): boolean;
        /**
         * Indicates whether the signal of the line is inverted.
         * @read-only
         * @default false
         */
        get activeLow(): boolean;
        /**
         * Bias setting of the GPIO line.
         * @read-only
         * @default Gpiodglib.LineBias.UNKNOWN
         */
        get bias(): LineBias;
        /**
         * Name of the consumer of the GPIO line, if requested.
         * @read-only
         * @default null
         */
        get consumer(): string;
        /**
         * Debounce period of the line (expressed in microseconds).
         * @read-only
         * @default 0
         */
        get debounce_period_us(): number;
        /**
         * Debounce period of the line (expressed in microseconds).
         * @read-only
         * @default 0
         */
        get debouncePeriodUs(): number;
        /**
         * Indicates whether the line is debounced (by hardware or by the
         * kernel software debouncer).
         * @read-only
         * @default false
         */
        get debounced(): boolean;
        /**
         * Direction of the GPIO line.
         * @read-only
         * @default Gpiodglib.LineDirection.INPUT
         */
        get direction(): LineDirection;
        /**
         * Drive setting of the GPIO line.
         * @read-only
         * @default Gpiodglib.LineDrive.PUSH_PULL
         */
        get drive(): LineDrive;
        /**
         * Edge detection setting of the GPIO line.
         * @read-only
         * @default Gpiodglib.LineEdge.NONE
         */
        get edge_detection(): LineEdge;
        /**
         * Edge detection setting of the GPIO line.
         * @read-only
         * @default Gpiodglib.LineEdge.NONE
         */
        get edgeDetection(): LineEdge;
        /**
         * Event clock used to timestamp the edge events of the line.
         * @read-only
         * @default Gpiodglib.LineClock.MONOTONIC
         */
        get event_clock(): LineClock;
        /**
         * Event clock used to timestamp the edge events of the line.
         * @read-only
         * @default Gpiodglib.LineClock.MONOTONIC
         */
        get eventClock(): LineClock;
        /**
         * Name of the GPIO line, if named.
         * @read-only
         * @default null
         */
        get name(): string;
        /**
         * Offset of the GPIO line.
         * @read-only
         * @default 0
         */
        get offset(): number;
        /**
         * Indicates whether the GPIO line is requested for exclusive usage.
         * @read-only
         * @default false
         */
        get used(): boolean;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: LineInfo.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<LineInfo.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof LineInfo.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, LineInfo.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof LineInfo.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, LineInfo.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof LineInfo.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<LineInfo.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Get the name of the consumer of the line.
         * @returns Name of the GPIO consumer as it is represented in the kernel. This function returns a valid pointer to a null-terminated string or NULL if the consumer name is not set. The string is a copy of the consumer label and must be freed by the caller with `g_free()`.
         */
        dup_consumer(): string;
        /**
         * Get the name of the line.
         * @returns Name of the GPIO line as it is represented in the kernel. This function returns a valid pointer to a null-terminated string or NULL if the line is unnamed. The string is a copy of the line name and must be freed by the caller with `g_free()`.
         */
        dup_name(): string;
        /**
         * Get the bias setting of the line.
         * @returns `GPIODGLIB_LINE_BIAS_PULL_UP`, `GPIODGLIB_LINE_BIAS_PULL_DOWN`, `GPIODGLIB_LINE_BIAS_DISABLED` or `GPIODGLIB_LINE_BIAS_UNKNOWN`.
         */
        get_bias(): LineBias;
        /**
         * Get the debounce period of the line, in microseconds.
         * @returns Debounce period in microseconds. 0 if the line is not debounced.
         */
        get_debounce_period_us(): GLib.TimeSpan;
        /**
         * Get the direction setting of the line.
         * @returns `GPIODGLIB_LINE_DIRECTION_INPUT` or `GPIODGLIB_LINE_DIRECTION_OUTPUT`.
         */
        get_direction(): LineDirection;
        /**
         * Get the drive setting of the line.
         * @returns `GPIODGLIB_LINE_DRIVE_PUSH_PULL`, `GPIODGLIB_LINE_DRIVE_OPEN_DRAIN` or `GPIODGLIB_LINE_DRIVE_OPEN_SOURCE`.
         */
        get_drive(): LineDrive;
        /**
         * Get the edge detection setting of the line.
         * @returns `GPIODGLIB_LINE_EDGE_NONE`, `GPIODGLIB_LINE_EDGE_RISING`, `GPIODGLIB_LINE_EDGE_FALLING` or `GPIODGLIB_LINE_EDGE_BOTH`.
         */
        get_edge_detection(): LineEdge;
        /**
         * Get the event clock setting used for edge event timestamps for the line.
         * @returns `GPIODGLIB_LINE_CLOCK_MONOTONIC`, `GPIODGLIB_LINE_CLOCK_HTE` or `GPIODGLIB_LINE_CLOCK_REALTIME`.
         */
        get_event_clock(): LineClock;
        /**
         * Get the offset of the line.
         *
         * The offset uniquely identifies the line on the chip. The combination of the
         * chip and offset uniquely identifies the line within the system.
         * @returns Offset of the line within the parent chip.
         */
        get_offset(): number;
        /**
         * Check if the logical value of the line is inverted compared to the physical.
         * @returns TRUE if the line is "active-low", FALSE otherwise.
         */
        is_active_low(): boolean;
        /**
         * Check if the line is debounced (either by hardware or by the kernel
         * software debouncer).
         * @returns TRUE if the line is debounced, FALSE otherwise.
         */
        is_debounced(): boolean;
        /**
         * Check if the line is in use.
         *
         * The exact reason a line is busy cannot be determined from user space.
         * It may have been requested by another process or hogged by the kernel.
         * It only matters that the line is used and can't be requested until
         * released by the existing consumer.
         * @returns TRUE if the line is in use, FALSE otherwise.
         */
        is_used(): boolean;
    }

    namespace LineRequest {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            /**
             * Emitted when an edge event is detected on one of the requested GPIO
             * line.
             * @signal
             * @run-last
             */
            'edge-event': (arg0: EdgeEvent) => void;
            'notify::chip-name': (pspec: GObject.ParamSpec) => void;
            'notify::requested-offsets': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            chip_name: string;
            chipName: string;
            requested_offsets: any[];
            requestedOffsets: any[];
        }
    }

    /**
     * Line request object allows interacting with a set of requested GPIO lines.
     * @gir-type Class
     */
    class LineRequest extends GObject.Object {
        static $gtype: GObject.GType<LineRequest>;

        // Properties

        /**
         * Name of the GPIO chip this request was made on.
         * @read-only
         * @default null
         */
        get chip_name(): string;
        /**
         * Name of the GPIO chip this request was made on.
         * @read-only
         * @default null
         */
        get chipName(): string;
        /**
         * Array of requested offsets.
         * @read-only
         */
        get requested_offsets(): any[];
        /**
         * Array of requested offsets.
         * @read-only
         */
        get requestedOffsets(): any[];

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: LineRequest.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<LineRequest.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof LineRequest.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, LineRequest.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof LineRequest.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, LineRequest.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof LineRequest.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<LineRequest.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Get the name of the chip this request was made on.
         * @returns Name the GPIO chip device. The string is a copy and must be freed by the caller using `g_free()`.
         */
        dup_chip_name(): string;
        /**
         * Get the offsets of the lines in the request.
         * @returns Array containing the requested offsets.
         */
        get_requested_offsets(): any[][];
        /**
         * Get the value of a single requested line.
         * @param offset The offset of the line of which the value should be read.
         * @param value Return location for the value.
         * @returns TRUE on success, FALSE on failure.
         */
        get_value(offset: number, value: LineValue): boolean;
        /**
         * Get the values of all requested lines.
         * @param values Array in which the values will be stored. Can be NULL in which case a new array will be created and its location stored here.
         * @returns TRUE on success, FALSE on failure.
         */
        get_values(values: any[][]): boolean;
        /**
         * Get the values of a subset of requested lines.
         * @param offsets Array of offsets identifying the subset of requested lines from which to read values.
         * @param values Array in which the values will be stored. Can be NULL in which case a new array will be created and its location stored here.
         * @returns TRUE on success, FALSE on failure.
         */
        get_values_subset(offsets: any[][], values: any[][]): boolean;
        /**
         * Check if this request was released.
         * @returns TRUE if this request was released and is no longer valid, FALSE otherwise.
         */
        is_released(): boolean;
        /**
         * Update the configuration of lines associated with a line request.
         *
         * The new line configuration completely replaces the old. Any requested lines
         * without overrides are configured to the requested defaults. Any configured
         * overrides for lines that have not been requested are silently ignored.
         * @param config New line config to apply.
         * @returns TRUE on success, FALSE on failure.
         */
        reconfigure_lines(config: LineConfig): boolean;
        /**
         * Release the requested lines and free all associated resources.
         */
        release(): void;
        /**
         * Set the value of a single requested line.
         * @param offset The offset of the line for which the value should be set.
         * @param value Value to set.
         * @returns TRUE on success, FALSE on failure.
         */
        set_value(offset: number, value: LineValue): boolean;
        /**
         * Set the values of all lines associated with a request.
         * @param values Array containing the values to set. Must be sized to contain the number of values equal to the number of requested lines. Each value is associated with the line identified by the corresponding entry in the offset array filled by `gpiodglib_line_request_get_requested_offsets`.
         * @returns TRUE on success, FALSE on failure.
         */
        set_values(values: any[][]): boolean;
        /**
         * Set the values of a subset of requested lines.
         * @param offsets Array of offsets identifying the requested lines for which to set values.
         * @param values Array in which the values will be stored. Can be NULL in which case a new array will be created and its location stored here.
         * @returns TRUE on success, FALSE on failure.
         */
        set_values_subset(offsets: any[][], values: any[][]): boolean;
    }

    namespace LineSettings {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::active-low': (pspec: GObject.ParamSpec) => void;
            'notify::bias': (pspec: GObject.ParamSpec) => void;
            'notify::debounce-period-us': (pspec: GObject.ParamSpec) => void;
            'notify::direction': (pspec: GObject.ParamSpec) => void;
            'notify::drive': (pspec: GObject.ParamSpec) => void;
            'notify::edge-detection': (pspec: GObject.ParamSpec) => void;
            'notify::event-clock': (pspec: GObject.ParamSpec) => void;
            'notify::output-value': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            active_low: boolean;
            activeLow: boolean;
            bias: LineBias;
            debounce_period_us: bigint | number;
            debouncePeriodUs: bigint | number;
            direction: LineDirection;
            drive: LineDrive;
            edge_detection: LineEdge;
            edgeDetection: LineEdge;
            event_clock: LineClock;
            eventClock: LineClock;
            output_value: LineValue;
            outputValue: LineValue;
        }
    }

    /**
     * Line settings object contains a set of line properties that can be used
     * when requesting lines or reconfiguring an existing request.
     * @gir-type Class
     */
    class LineSettings extends GObject.Object {
        static $gtype: GObject.GType<LineSettings>;

        // Properties

        /**
         * Line active-low settings.
         * @default false
         */
        get active_low(): boolean;
        set active_low(val: boolean);
        /**
         * Line active-low settings.
         * @default false
         */
        get activeLow(): boolean;
        set activeLow(val: boolean);
        /**
         * Line bias setting.
         * @default Gpiodglib.LineBias.AS_IS
         */
        get bias(): LineBias;
        set bias(val: LineBias);
        /**
         * Line debounce period (expressed in microseconds).
         * @default 0
         */
        get debounce_period_us(): number;
        set debounce_period_us(val: bigint | number);
        /**
         * Line debounce period (expressed in microseconds).
         * @default 0
         */
        get debouncePeriodUs(): number;
        set debouncePeriodUs(val: bigint | number);
        /**
         * Line direction setting.
         * @default Gpiodglib.LineDirection.AS_IS
         */
        get direction(): LineDirection;
        set direction(val: LineDirection);
        /**
         * Line drive setting.
         * @default Gpiodglib.LineDrive.PUSH_PULL
         */
        get drive(): LineDrive;
        set drive(val: LineDrive);
        /**
         * Line edge detection setting.
         * @default Gpiodglib.LineEdge.NONE
         */
        get edge_detection(): LineEdge;
        set edge_detection(val: LineEdge);
        /**
         * Line edge detection setting.
         * @default Gpiodglib.LineEdge.NONE
         */
        get edgeDetection(): LineEdge;
        set edgeDetection(val: LineEdge);
        /**
         * Clock used to timestamp edge events.
         * @default Gpiodglib.LineClock.MONOTONIC
         */
        get event_clock(): LineClock;
        set event_clock(val: LineClock);
        /**
         * Clock used to timestamp edge events.
         * @default Gpiodglib.LineClock.MONOTONIC
         */
        get eventClock(): LineClock;
        set eventClock(val: LineClock);
        /**
         * Line output value.
         * @default Gpiodglib.LineValue.INACTIVE
         */
        get output_value(): LineValue;
        set output_value(val: LineValue);
        /**
         * Line output value.
         * @default Gpiodglib.LineValue.INACTIVE
         */
        get outputValue(): LineValue;
        set outputValue(val: LineValue);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: LineSettings.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<LineSettings.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof LineSettings.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, LineSettings.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof LineSettings.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, LineSettings.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof LineSettings.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<LineSettings.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Get active-low setting.
         * @returns TRUE if active-low is enabled, FALSE otherwise.
         */
        get_active_low(): boolean;
        /**
         * Get bias.
         * @returns Current bias setting.
         */
        get_bias(): LineBias;
        /**
         * Get debounce period.
         * @returns Current debounce period in microseconds.
         */
        get_debounce_period_us(): GLib.TimeSpan;
        /**
         * Get direction.
         * @returns Current direction.
         */
        get_direction(): LineDirection;
        /**
         * Get drive.
         * @returns Current drive setting.
         */
        get_drive(): LineDrive;
        /**
         * Get edge detection.
         * @returns Current edge detection setting.
         */
        get_edge_detection(): LineEdge;
        /**
         * Get event clock setting.
         * @returns Current event clock setting.
         */
        get_event_clock(): LineClock;
        /**
         * Get the output value.
         * @returns Current output value.
         */
        get_output_value(): LineValue;
        /**
         * Reset the line settings object to its default values.
         */
        reset(): void;
        /**
         * Set active-low setting.
         * @param active_low New active-low setting.
         */
        set_active_low(active_low: boolean): void;
        /**
         * Set bias.
         * @param bias New bias.
         */
        set_bias(bias: LineBias): void;
        /**
         * Set debounce period.
         * @param period New debounce period in microseconds.
         */
        set_debounce_period_us(period: GLib.TimeSpan): void;
        /**
         * Set direction.
         * @param direction New direction.
         */
        set_direction(direction: LineDirection): void;
        /**
         * Set drive.
         * @param drive New drive setting.
         */
        set_drive(drive: LineDrive): void;
        /**
         * Set edge detection.
         * @param edge New edge detection setting.
         */
        set_edge_detection(edge: LineEdge): void;
        /**
         * Set event clock.
         * @param event_clock New event clock.
         */
        set_event_clock(event_clock: LineClock): void;
        /**
         * Set the output value.
         * @param value New output value.
         */
        set_output_value(value: LineValue): void;
    }

    namespace RequestConfig {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::consumer': (pspec: GObject.ParamSpec) => void;
            'notify::event-buffer-size': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            consumer: string;
            event_buffer_size: number;
            eventBufferSize: number;
        }
    }

    /**
     * Request config objects are used to pass a set of options to the kernel at
     * the time of the line request.
     * @gir-type Class
     */
    class RequestConfig extends GObject.Object {
        static $gtype: GObject.GType<RequestConfig>;

        // Properties

        /**
         * Name of the request consumer.
         * @default null
         */
        get consumer(): string;
        set consumer(val: string);
        /**
         * Size of the kernel event buffer size of the request.
         * @default 64
         */
        get event_buffer_size(): number;
        set event_buffer_size(val: number);
        /**
         * Size of the kernel event buffer size of the request.
         * @default 64
         */
        get eventBufferSize(): number;
        set eventBufferSize(val: number);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: RequestConfig.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<RequestConfig.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof RequestConfig.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, RequestConfig.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof RequestConfig.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, RequestConfig.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof RequestConfig.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<RequestConfig.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Get the consumer name configured in the request config.
         * @returns Consumer name stored in the request config. The returned string is a copy and must be freed by the caller using `g_free()`.
         */
        dup_consumer(): string;
        /**
         * Get the edge event buffer size for the request config.
         * @returns Edge event buffer size setting from the request config.
         */
        get_event_buffer_size(): number;
        /**
         * Set the consumer name for the request.
         *
         * If the consumer string is too long, it will be truncated to the max
         * accepted length.
         * @param consumer Consumer name.
         */
        set_consumer(consumer: string): void;
        /**
         * Set the size of the kernel event buffer for the request.
         *
         * The kernel may adjust the value if it's too high. If set to 0, the default
         * value will be used.
         * @param event_buffer_size New event buffer size.
         */
        set_event_buffer_size(event_buffer_size: number): void;
    }

    /**
     * @gir-type Alias
     */
    type ChipClass = typeof Chip;
    /**
     * @gir-type Alias
     */
    type ChipInfoClass = typeof ChipInfo;
    /**
     * @gir-type Alias
     */
    type EdgeEventClass = typeof EdgeEvent;
    /**
     * @gir-type Alias
     */
    type InfoEventClass = typeof InfoEvent;
    /**
     * @gir-type Alias
     */
    type LineConfigClass = typeof LineConfig;
    /**
     * @gir-type Alias
     */
    type LineInfoClass = typeof LineInfo;
    /**
     * @gir-type Alias
     */
    type LineRequestClass = typeof LineRequest;
    /**
     * @gir-type Alias
     */
    type LineSettingsClass = typeof LineSettings;
    /**
     * @gir-type Alias
     */
    type RequestConfigClass = typeof RequestConfig;
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

export default Gpiodglib;

// END
