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

export namespace Cvc {
    /**
     * Cvc-1.0
     */

    export namespace MixerControlState {
        export const $gtype: GObject.GType<MixerControlState>;
    }

    enum MixerControlState {
        CLOSED,
        READY,
        CONNECTING,
        FAILED,
    }

    export namespace MixerStreamState {
        export const $gtype: GObject.GType<MixerStreamState>;
    }

    enum MixerStreamState {
        INVALID,
        RUNNING,
        IDLE,
        SUSPENDED,
    }

    export namespace MixerUIDeviceDirection {
        export const $gtype: GObject.GType<MixerUIDeviceDirection>;
    }

    enum MixerUIDeviceDirection {
        INPUT,
        OUTPUT,
    }
    const MIXER_UI_DEVICE_INVALID: number;

    export namespace HeadsetPortChoice {
        export const $gtype: GObject.GType<HeadsetPortChoice>;
    }

    enum HeadsetPortChoice {
        NONE,
        HEADPHONES,
        HEADSET,
        MIC,
    }
    namespace ChannelMap {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'volume-changed': (arg0: boolean) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    class ChannelMap extends GObject.Object {
        static $gtype: GObject.GType<ChannelMap>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: ChannelMap.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<ChannelMap.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): ChannelMap;

        // Signals

        connect<K extends keyof ChannelMap.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ChannelMap.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof ChannelMap.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ChannelMap.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof ChannelMap.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<ChannelMap.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods

        vfunc_volume_changed(set: boolean): void;

        // Methods

        can_balance(): boolean;
        can_fade(): boolean;
        can_lfe(): boolean;
        get_balance(): number;
        get_fade(): number;
        get_lfe(): number;
        get_mapping(): string;
        get_num_channels(): number;
        get_volume(): number;
        has_position(position: number): boolean;
        set_balance(value: number): void;
        set_fade(value: number): void;
        set_lfe(value: number): void;
    }

    namespace MixerCard {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::human-profile': (pspec: GObject.ParamSpec) => void;
            'notify::icon-name': (pspec: GObject.ParamSpec) => void;
            'notify::id': (pspec: GObject.ParamSpec) => void;
            'notify::index': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::pa-context': (pspec: GObject.ParamSpec) => void;
            'notify::profile': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            human_profile: string;
            humanProfile: string;
            icon_name: string;
            iconName: string;
            id: number;
            index: number;
            name: string;
            pa_context: any;
            paContext: any;
            profile: string;
        }
    }

    class MixerCard extends GObject.Object {
        static $gtype: GObject.GType<MixerCard>;

        // Properties

        get human_profile(): string;
        get humanProfile(): string;
        get icon_name(): string;
        set icon_name(val: string);
        get iconName(): string;
        set iconName(val: string);
        get id(): number;
        get index(): number;
        get name(): string;
        set name(val: string);
        get pa_context(): any;
        get paContext(): any;
        get profile(): string;
        set profile(val: string);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: MixerCard.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<MixerCard.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        connect<K extends keyof MixerCard.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, MixerCard.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof MixerCard.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, MixerCard.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof MixerCard.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<MixerCard.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Change the profile in use on this card.
         * @param profile the profile to change to or %NULL.
         * @returns %TRUE if profile successfully changed or already using this profile.
         */
        change_profile(profile?: string | null): boolean;
        get_gicon(): Gio.Icon;
        get_icon_name(): string;
        get_id(): number;
        get_index(): number;
        get_name(): string;
        get_ports(): MixerCardPort[];
        get_profiles(): MixerCardProfile[];
        set_icon_name(name: string): boolean;
        set_name(name: string): boolean;
        set_ports(ports: MixerCardPort[]): boolean;
        set_profile(profile: string): boolean;
        set_profiles(profiles: MixerCardProfile[]): boolean;
    }

    namespace MixerControl {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'active-input-update': (arg0: number) => void;
            'active-output-update': (arg0: number) => void;
            'audio-device-selection-needed': (arg0: number, arg1: boolean, arg2: number) => void;
            'card-added': (arg0: number) => void;
            'card-removed': (arg0: number) => void;
            'default-sink-changed': (arg0: number) => void;
            'default-source-changed': (arg0: number) => void;
            'input-added': (arg0: number) => void;
            'input-removed': (arg0: number) => void;
            'output-added': (arg0: number) => void;
            'output-removed': (arg0: number) => void;
            'state-changed': (arg0: number) => void;
            'stream-added': (arg0: number) => void;
            'stream-changed': (arg0: number) => void;
            'stream-removed': (arg0: number) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            name: string;
        }
    }

    class MixerControl extends GObject.Object {
        static $gtype: GObject.GType<MixerControl>;

        // Properties

        get name(): string;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: MixerControl.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<MixerControl.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](name: string): MixerControl;

        // Signals

        connect<K extends keyof MixerControl.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, MixerControl.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof MixerControl.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, MixerControl.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof MixerControl.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<MixerControl.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods

        vfunc_active_input_update(id: number): void;
        vfunc_active_output_update(id: number): void;
        vfunc_audio_device_selection_needed(id: number, show_dialog: boolean, choices: HeadsetPortChoice): void;
        vfunc_card_added(id: number): void;
        vfunc_card_removed(id: number): void;
        vfunc_default_sink_changed(id: number): void;
        vfunc_default_source_changed(id: number): void;
        vfunc_input_added(id: number): void;
        vfunc_input_removed(id: number): void;
        vfunc_output_added(id: number): void;
        vfunc_output_removed(id: number): void;
        vfunc_state_changed(new_state: MixerControlState): void;
        vfunc_stream_added(id: number): void;
        vfunc_stream_changed(id: number): void;
        vfunc_stream_removed(id: number): void;

        // Methods

        change_input(input: MixerUIDevice): void;
        change_output(output: MixerUIDevice): void;
        change_profile_on_selected_device(device: MixerUIDevice, profile?: string | null): boolean;
        close(): boolean;
        get_cards(): MixerCard[];
        get_default_sink(): MixerStream;
        get_default_source(): MixerStream;
        get_event_sink_input(): MixerStream;
        get_sink_inputs(): MixerSinkInput[];
        get_sinks(): MixerSink[];
        get_source_outputs(): MixerSourceOutput[];
        get_sources(): MixerSource[];
        get_state(): MixerControlState;
        get_stream_from_device(device: MixerUIDevice): MixerStream;
        get_streams(): MixerStream[];
        get_vol_max_amplified(): number;
        get_vol_max_norm(): number;
        lookup_card_id(id: number): MixerCard;
        lookup_device_from_stream(stream: MixerStream): MixerUIDevice;
        lookup_input_id(id: number): MixerUIDevice;
        lookup_output_id(id: number): MixerUIDevice;
        lookup_stream_id(id: number): MixerStream;
        open(): boolean;
        set_default_sink(stream: MixerStream): boolean;
        set_default_source(stream: MixerStream): boolean;
        set_headset_port(id: number, choices: HeadsetPortChoice | null): void;
    }

    namespace MixerEventRole {
        // Signal signatures
        interface SignalSignatures extends MixerStream.SignalSignatures {
            'notify::device': (pspec: GObject.ParamSpec) => void;
            'notify::application-id': (pspec: GObject.ParamSpec) => void;
            'notify::can-decibel': (pspec: GObject.ParamSpec) => void;
            'notify::card-index': (pspec: GObject.ParamSpec) => void;
            'notify::channel-map': (pspec: GObject.ParamSpec) => void;
            'notify::decibel': (pspec: GObject.ParamSpec) => void;
            'notify::description': (pspec: GObject.ParamSpec) => void;
            'notify::form-factor': (pspec: GObject.ParamSpec) => void;
            'notify::icon-name': (pspec: GObject.ParamSpec) => void;
            'notify::id': (pspec: GObject.ParamSpec) => void;
            'notify::index': (pspec: GObject.ParamSpec) => void;
            'notify::is-event-stream': (pspec: GObject.ParamSpec) => void;
            'notify::is-muted': (pspec: GObject.ParamSpec) => void;
            'notify::is-virtual': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::pa-context': (pspec: GObject.ParamSpec) => void;
            'notify::port': (pspec: GObject.ParamSpec) => void;
            'notify::state': (pspec: GObject.ParamSpec) => void;
            'notify::sysfs-path': (pspec: GObject.ParamSpec) => void;
            'notify::volume': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends MixerStream.ConstructorProps {
            device: string;
        }
    }

    class MixerEventRole extends MixerStream {
        static $gtype: GObject.GType<MixerEventRole>;

        // Properties

        get device(): string;
        set device(val: string);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: MixerEventRole.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<MixerEventRole.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        connect<K extends keyof MixerEventRole.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, MixerEventRole.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof MixerEventRole.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, MixerEventRole.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof MixerEventRole.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<MixerEventRole.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;
    }

    namespace MixerSink {
        // Signal signatures
        interface SignalSignatures extends MixerStream.SignalSignatures {
            'notify::application-id': (pspec: GObject.ParamSpec) => void;
            'notify::can-decibel': (pspec: GObject.ParamSpec) => void;
            'notify::card-index': (pspec: GObject.ParamSpec) => void;
            'notify::channel-map': (pspec: GObject.ParamSpec) => void;
            'notify::decibel': (pspec: GObject.ParamSpec) => void;
            'notify::description': (pspec: GObject.ParamSpec) => void;
            'notify::form-factor': (pspec: GObject.ParamSpec) => void;
            'notify::icon-name': (pspec: GObject.ParamSpec) => void;
            'notify::id': (pspec: GObject.ParamSpec) => void;
            'notify::index': (pspec: GObject.ParamSpec) => void;
            'notify::is-event-stream': (pspec: GObject.ParamSpec) => void;
            'notify::is-muted': (pspec: GObject.ParamSpec) => void;
            'notify::is-virtual': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::pa-context': (pspec: GObject.ParamSpec) => void;
            'notify::port': (pspec: GObject.ParamSpec) => void;
            'notify::state': (pspec: GObject.ParamSpec) => void;
            'notify::sysfs-path': (pspec: GObject.ParamSpec) => void;
            'notify::volume': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends MixerStream.ConstructorProps {}
    }

    class MixerSink extends MixerStream {
        static $gtype: GObject.GType<MixerSink>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: MixerSink.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<MixerSink.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        connect<K extends keyof MixerSink.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, MixerSink.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof MixerSink.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, MixerSink.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof MixerSink.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<MixerSink.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;
    }

    namespace MixerSinkInput {
        // Signal signatures
        interface SignalSignatures extends MixerStream.SignalSignatures {
            'notify::application-id': (pspec: GObject.ParamSpec) => void;
            'notify::can-decibel': (pspec: GObject.ParamSpec) => void;
            'notify::card-index': (pspec: GObject.ParamSpec) => void;
            'notify::channel-map': (pspec: GObject.ParamSpec) => void;
            'notify::decibel': (pspec: GObject.ParamSpec) => void;
            'notify::description': (pspec: GObject.ParamSpec) => void;
            'notify::form-factor': (pspec: GObject.ParamSpec) => void;
            'notify::icon-name': (pspec: GObject.ParamSpec) => void;
            'notify::id': (pspec: GObject.ParamSpec) => void;
            'notify::index': (pspec: GObject.ParamSpec) => void;
            'notify::is-event-stream': (pspec: GObject.ParamSpec) => void;
            'notify::is-muted': (pspec: GObject.ParamSpec) => void;
            'notify::is-virtual': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::pa-context': (pspec: GObject.ParamSpec) => void;
            'notify::port': (pspec: GObject.ParamSpec) => void;
            'notify::state': (pspec: GObject.ParamSpec) => void;
            'notify::sysfs-path': (pspec: GObject.ParamSpec) => void;
            'notify::volume': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends MixerStream.ConstructorProps {}
    }

    class MixerSinkInput extends MixerStream {
        static $gtype: GObject.GType<MixerSinkInput>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: MixerSinkInput.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<MixerSinkInput.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        connect<K extends keyof MixerSinkInput.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, MixerSinkInput.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof MixerSinkInput.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, MixerSinkInput.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof MixerSinkInput.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<MixerSinkInput.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;
    }

    namespace MixerSource {
        // Signal signatures
        interface SignalSignatures extends MixerStream.SignalSignatures {
            'notify::application-id': (pspec: GObject.ParamSpec) => void;
            'notify::can-decibel': (pspec: GObject.ParamSpec) => void;
            'notify::card-index': (pspec: GObject.ParamSpec) => void;
            'notify::channel-map': (pspec: GObject.ParamSpec) => void;
            'notify::decibel': (pspec: GObject.ParamSpec) => void;
            'notify::description': (pspec: GObject.ParamSpec) => void;
            'notify::form-factor': (pspec: GObject.ParamSpec) => void;
            'notify::icon-name': (pspec: GObject.ParamSpec) => void;
            'notify::id': (pspec: GObject.ParamSpec) => void;
            'notify::index': (pspec: GObject.ParamSpec) => void;
            'notify::is-event-stream': (pspec: GObject.ParamSpec) => void;
            'notify::is-muted': (pspec: GObject.ParamSpec) => void;
            'notify::is-virtual': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::pa-context': (pspec: GObject.ParamSpec) => void;
            'notify::port': (pspec: GObject.ParamSpec) => void;
            'notify::state': (pspec: GObject.ParamSpec) => void;
            'notify::sysfs-path': (pspec: GObject.ParamSpec) => void;
            'notify::volume': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends MixerStream.ConstructorProps {}
    }

    class MixerSource extends MixerStream {
        static $gtype: GObject.GType<MixerSource>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: MixerSource.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<MixerSource.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        connect<K extends keyof MixerSource.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, MixerSource.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof MixerSource.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, MixerSource.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof MixerSource.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<MixerSource.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;
    }

    namespace MixerSourceOutput {
        // Signal signatures
        interface SignalSignatures extends MixerStream.SignalSignatures {
            'notify::application-id': (pspec: GObject.ParamSpec) => void;
            'notify::can-decibel': (pspec: GObject.ParamSpec) => void;
            'notify::card-index': (pspec: GObject.ParamSpec) => void;
            'notify::channel-map': (pspec: GObject.ParamSpec) => void;
            'notify::decibel': (pspec: GObject.ParamSpec) => void;
            'notify::description': (pspec: GObject.ParamSpec) => void;
            'notify::form-factor': (pspec: GObject.ParamSpec) => void;
            'notify::icon-name': (pspec: GObject.ParamSpec) => void;
            'notify::id': (pspec: GObject.ParamSpec) => void;
            'notify::index': (pspec: GObject.ParamSpec) => void;
            'notify::is-event-stream': (pspec: GObject.ParamSpec) => void;
            'notify::is-muted': (pspec: GObject.ParamSpec) => void;
            'notify::is-virtual': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::pa-context': (pspec: GObject.ParamSpec) => void;
            'notify::port': (pspec: GObject.ParamSpec) => void;
            'notify::state': (pspec: GObject.ParamSpec) => void;
            'notify::sysfs-path': (pspec: GObject.ParamSpec) => void;
            'notify::volume': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends MixerStream.ConstructorProps {}
    }

    class MixerSourceOutput extends MixerStream {
        static $gtype: GObject.GType<MixerSourceOutput>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: MixerSourceOutput.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<MixerSourceOutput.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        connect<K extends keyof MixerSourceOutput.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, MixerSourceOutput.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof MixerSourceOutput.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, MixerSourceOutput.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof MixerSourceOutput.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<MixerSourceOutput.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;
    }

    namespace MixerStream {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'monitor-suspend': () => void;
            'monitor-update': (arg0: number) => void;
            'notify::application-id': (pspec: GObject.ParamSpec) => void;
            'notify::can-decibel': (pspec: GObject.ParamSpec) => void;
            'notify::card-index': (pspec: GObject.ParamSpec) => void;
            'notify::channel-map': (pspec: GObject.ParamSpec) => void;
            'notify::decibel': (pspec: GObject.ParamSpec) => void;
            'notify::description': (pspec: GObject.ParamSpec) => void;
            'notify::form-factor': (pspec: GObject.ParamSpec) => void;
            'notify::icon-name': (pspec: GObject.ParamSpec) => void;
            'notify::id': (pspec: GObject.ParamSpec) => void;
            'notify::index': (pspec: GObject.ParamSpec) => void;
            'notify::is-event-stream': (pspec: GObject.ParamSpec) => void;
            'notify::is-muted': (pspec: GObject.ParamSpec) => void;
            'notify::is-virtual': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::pa-context': (pspec: GObject.ParamSpec) => void;
            'notify::port': (pspec: GObject.ParamSpec) => void;
            'notify::state': (pspec: GObject.ParamSpec) => void;
            'notify::sysfs-path': (pspec: GObject.ParamSpec) => void;
            'notify::volume': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            application_id: string;
            applicationId: string;
            can_decibel: boolean;
            canDecibel: boolean;
            card_index: number;
            cardIndex: number;
            channel_map: ChannelMap;
            channelMap: ChannelMap;
            decibel: number;
            description: string;
            form_factor: string;
            formFactor: string;
            icon_name: string;
            iconName: string;
            id: number;
            index: number;
            is_event_stream: boolean;
            isEventStream: boolean;
            is_muted: boolean;
            isMuted: boolean;
            is_virtual: boolean;
            isVirtual: boolean;
            name: string;
            pa_context: any;
            paContext: any;
            port: string;
            state: MixerStreamState;
            sysfs_path: string;
            sysfsPath: string;
            volume: number;
        }
    }

    abstract class MixerStream extends GObject.Object {
        static $gtype: GObject.GType<MixerStream>;

        // Properties

        get application_id(): string;
        set application_id(val: string);
        get applicationId(): string;
        set applicationId(val: string);
        get can_decibel(): boolean;
        set can_decibel(val: boolean);
        get canDecibel(): boolean;
        set canDecibel(val: boolean);
        get card_index(): number;
        set card_index(val: number);
        get cardIndex(): number;
        set cardIndex(val: number);
        get channel_map(): ChannelMap;
        set channel_map(val: ChannelMap);
        get channelMap(): ChannelMap;
        set channelMap(val: ChannelMap);
        get decibel(): number;
        set decibel(val: number);
        get description(): string;
        set description(val: string);
        get form_factor(): string;
        set form_factor(val: string);
        get formFactor(): string;
        set formFactor(val: string);
        get icon_name(): string;
        set icon_name(val: string);
        get iconName(): string;
        set iconName(val: string);
        get id(): number;
        get index(): number;
        get is_event_stream(): boolean;
        set is_event_stream(val: boolean);
        get isEventStream(): boolean;
        set isEventStream(val: boolean);
        get is_muted(): boolean;
        set is_muted(val: boolean);
        get isMuted(): boolean;
        set isMuted(val: boolean);
        get is_virtual(): boolean;
        set is_virtual(val: boolean);
        get isVirtual(): boolean;
        set isVirtual(val: boolean);
        get name(): string;
        set name(val: string);
        get pa_context(): any;
        get paContext(): any;
        get port(): string;
        set port(val: string);
        get state(): MixerStreamState;
        set state(val: MixerStreamState);
        get sysfs_path(): string;
        set sysfs_path(val: string);
        get sysfsPath(): string;
        set sysfsPath(val: string);
        get volume(): number;
        set volume(val: number);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: MixerStream.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<MixerStream.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        connect<K extends keyof MixerStream.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, MixerStream.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof MixerStream.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, MixerStream.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof MixerStream.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<MixerStream.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods

        vfunc_change_is_muted(is_muted: boolean): boolean;
        vfunc_change_port(port: string): boolean;
        vfunc_monitor_suspend(): void;
        vfunc_monitor_update(v: number): void;
        vfunc_push_volume(operation?: any | null): boolean;

        // Methods

        change_is_muted(is_muted: boolean): boolean;
        change_port(port: string): boolean;
        create_monitor(): void;
        get_application_id(): string;
        get_base_volume(): number;
        get_can_decibel(): boolean;
        get_card_index(): number;
        get_channel_map(): ChannelMap;
        get_decibel(): number;
        get_description(): string;
        get_form_factor(): string;
        get_gicon(): Gio.Icon;
        get_icon_name(): string;
        get_id(): number;
        get_index(): number;
        get_is_muted(): boolean;
        get_name(): string;
        get_port(): MixerStreamPort;
        get_ports(): MixerStreamPort[];
        get_state(): MixerStreamState;
        get_sysfs_path(): string;
        get_volume(): number;
        is_running(): boolean;
        push_volume(): boolean;
        remove_monitor(): void;
        set_application_id(application_id: string): boolean;
        set_base_volume(base_volume: number): boolean;
        set_can_decibel(can_decibel: boolean): boolean;
        set_card_index(card_index: number): boolean;
        set_decibel(db: number): boolean;
        set_description(description: string): boolean;
        set_form_factor(form_factor: string): boolean;
        set_icon_name(name: string): boolean;
        set_is_event_stream(is_event_stream: boolean): boolean;
        set_is_muted(is_muted: boolean): boolean;
        set_is_virtual(is_event_stream: boolean): boolean;
        set_name(name: string): boolean;
        set_port(port: string): boolean;
        set_ports(ports: MixerStreamPort[]): boolean;
        set_state(state: MixerStreamState | null): boolean;
        set_sysfs_path(sysfs_path: string): boolean;
        set_volume(volume: number): boolean;
    }

    namespace MixerUIDevice {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::card': (pspec: GObject.ParamSpec) => void;
            'notify::description': (pspec: GObject.ParamSpec) => void;
            'notify::icon-name': (pspec: GObject.ParamSpec) => void;
            'notify::origin': (pspec: GObject.ParamSpec) => void;
            'notify::port-available': (pspec: GObject.ParamSpec) => void;
            'notify::port-name': (pspec: GObject.ParamSpec) => void;
            'notify::stream-id': (pspec: GObject.ParamSpec) => void;
            'notify::type': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            card: any;
            description: string;
            icon_name: string;
            iconName: string;
            origin: string;
            port_available: boolean;
            portAvailable: boolean;
            port_name: string;
            portName: string;
            stream_id: number;
            streamId: number;
            type: number;
        }
    }

    class MixerUIDevice extends GObject.Object {
        static $gtype: GObject.GType<MixerUIDevice>;

        // Properties

        get card(): any;
        set card(val: any);
        get description(): string;
        set description(val: string);
        get icon_name(): string;
        set icon_name(val: string);
        get iconName(): string;
        set iconName(val: string);
        get origin(): string;
        set origin(val: string);
        get port_available(): boolean;
        set port_available(val: boolean);
        get portAvailable(): boolean;
        set portAvailable(val: boolean);
        get port_name(): string;
        set port_name(val: string);
        get portName(): string;
        set portName(val: string);
        get stream_id(): number;
        set stream_id(val: number);
        get streamId(): number;
        set streamId(val: number);
        get type(): number;
        set type(val: number);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: MixerUIDevice.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<MixerUIDevice.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        connect<K extends keyof MixerUIDevice.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, MixerUIDevice.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof MixerUIDevice.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, MixerUIDevice.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof MixerUIDevice.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<MixerUIDevice.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        get_active_profile(): string;
        get_best_profile(selected: string | null, current: string): string;
        get_description(): string;
        get_gicon(): Gio.Icon;
        get_icon_name(): string;
        get_id(): number;
        get_matching_profile(profile: string): string;
        get_origin(): string;
        get_port(): string;
        get_profiles(): MixerCardProfile[];
        get_stream_id(): number;
        get_supported_profiles(): MixerCardProfile[];
        get_top_priority_profile(): string;
        get_user_preferred_profile(): string;
        has_ports(): boolean;
        invalidate_stream(): void;
        is_output(): boolean;
        /**
         * Assigns value to
         *  - device->priv->profiles (profiles to be added to combobox)
         *  - device->priv->supported_profiles (all profiles of this port)
         *  - device->priv->disable_profile_swapping (whether to show the combobox)
         *
         * This method attempts to reduce the list of profiles visible to the user by figuring out
         * from the context of that device (whether it's an input or an output) what profiles
         * actually provide an alternative.
         *
         * It does this by the following.
         *  - It ignores off profiles.
         *  - It takes the canonical name of the profile. That name is what you get when you
         *    ignore the other direction.
         *  - In the first iteration, it only adds the names of canonical profiles - i e
         *    when the other side is turned off.
         *  - Normally the first iteration covers all cases, but sometimes (e g bluetooth)
         *    it doesn't, so add other profiles whose canonical name isn't already added
         *    in a second iteration.
         * @param in_profiles a list of GvcMixerCardProfile
         */
        set_profiles(in_profiles: MixerCardProfile[]): void;
        set_user_preferred_profile(profile: string): void;
        should_profiles_be_hidden(): boolean;
    }

    type ChannelMapClass = typeof ChannelMap;
    abstract class ChannelMapPrivate {
        static $gtype: GObject.GType<ChannelMapPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type MixerCardClass = typeof MixerCard;
    class MixerCardPort {
        static $gtype: GObject.GType<MixerCardPort>;

        // Fields

        port: string;
        human_port: string;
        icon_name: string;
        priority: number;
        available: number;
        direction: number;
        profiles: any[];

        // Constructors

        constructor(
            properties?: Partial<{
                port: string;
                human_port: string;
                icon_name: string;
                priority: number;
                available: number;
                direction: number;
            }>,
        );
        _init(...args: any[]): void;
    }

    abstract class MixerCardPrivate {
        static $gtype: GObject.GType<MixerCardPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    class MixerCardProfile {
        static $gtype: GObject.GType<MixerCardProfile>;

        // Fields

        profile: string;
        human_profile: string;
        status: string;
        priority: number;
        n_sinks: number;
        n_sources: number;

        // Constructors

        constructor(
            properties?: Partial<{
                profile: string;
                human_profile: string;
                status: string;
                priority: number;
                n_sinks: number;
                n_sources: number;
            }>,
        );
        _init(...args: any[]): void;

        // Methods

        compare(b: MixerCardProfile): number;
    }

    type MixerControlClass = typeof MixerControl;
    abstract class MixerControlPrivate {
        static $gtype: GObject.GType<MixerControlPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type MixerEventRoleClass = typeof MixerEventRole;
    abstract class MixerEventRolePrivate {
        static $gtype: GObject.GType<MixerEventRolePrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type MixerSinkClass = typeof MixerSink;
    type MixerSinkInputClass = typeof MixerSinkInput;
    abstract class MixerSinkInputPrivate {
        static $gtype: GObject.GType<MixerSinkInputPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    abstract class MixerSinkPrivate {
        static $gtype: GObject.GType<MixerSinkPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type MixerSourceClass = typeof MixerSource;
    type MixerSourceOutputClass = typeof MixerSourceOutput;
    abstract class MixerSourceOutputPrivate {
        static $gtype: GObject.GType<MixerSourceOutputPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    abstract class MixerSourcePrivate {
        static $gtype: GObject.GType<MixerSourcePrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type MixerStreamClass = typeof MixerStream;
    class MixerStreamPort {
        static $gtype: GObject.GType<MixerStreamPort>;

        // Fields

        port: string;
        human_port: string;
        priority: number;
        available: boolean;

        // Constructors

        constructor(
            properties?: Partial<{
                port: string;
                human_port: string;
                priority: number;
                available: boolean;
            }>,
        );
        _init(...args: any[]): void;
    }

    abstract class MixerStreamPrivate {
        static $gtype: GObject.GType<MixerStreamPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type MixerUIDeviceClass = typeof MixerUIDevice;
    abstract class MixerUIDevicePrivate {
        static $gtype: GObject.GType<MixerUIDevicePrivate>;

        // Constructors

        _init(...args: any[]): void;
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

export default Cvc;

// END
