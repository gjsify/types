/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './gvc-1.0-ambient.d.ts';
import './gvc-1.0-import.d.ts';
/**
 * Gvc-1.0
 */

import type Gio from '@girs/gio-2.0';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';

export namespace Gvc {
    enum MixerControlState {
        CLOSED,
        READY,
        CONNECTING,
        FAILED,
    }
    enum MixerStreamState {
        INVALID,
        RUNNING,
        IDLE,
        SUSPENDED,
    }
    enum MixerUIDeviceDirection {
        INPUT,
        OUTPUT,
    }
    const MIXER_UI_DEVICE_INVALID: number;
    enum HeadsetPortChoice {
        NONE,
        HEADPHONES,
        HEADSET,
        MIC,
    }
    module ChannelMap {
        // Signal callback interfaces

        interface VolumeChanged {
            (object: boolean): void;
        }

        // Constructor properties interface
    }

    class ChannelMap extends GObject.Object {
        // Constructors of Gvc-1.0.ChannelMap

        static ['new'](): ChannelMap;

        // Owm methods of Gvc-1.0.ChannelMap

        can_balance(): boolean;
        can_fade(): boolean;
        get_mapping(): string;
        get_num_channels(): number;
        get_volume(): number;
    }

    module MixerCard {
        // Constructor properties interface
    }

    class MixerCard extends GObject.Object {
        // Own properties of Gvc-1.0.MixerCard

        readonly human_profile: string;
        readonly humanProfile: string;
        icon_name: string;
        iconName: string;
        id: number;
        index: number;
        name: string;
        pa_context: any;
        paContext: any;
        profile: string;

        // Owm methods of Gvc-1.0.MixerCard

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

    module MixerControl {
        // Signal callback interfaces

        interface ActiveInputUpdate {
            (object: number): void;
        }

        interface ActiveOutputUpdate {
            (object: number): void;
        }

        interface AudioDeviceSelectionNeeded {
            (object: number, p0: boolean, p1: number): void;
        }

        interface CardAdded {
            (object: number): void;
        }

        interface CardRemoved {
            (object: number): void;
        }

        interface DefaultSinkChanged {
            (object: number): void;
        }

        interface DefaultSourceChanged {
            (object: number): void;
        }

        interface InputAdded {
            (object: number): void;
        }

        interface InputRemoved {
            (object: number): void;
        }

        interface OutputAdded {
            (object: number): void;
        }

        interface OutputRemoved {
            (object: number): void;
        }

        interface StateChanged {
            (object: number): void;
        }

        interface StreamAdded {
            (object: number): void;
        }

        interface StreamChanged {
            (object: number): void;
        }

        interface StreamRemoved {
            (object: number): void;
        }

        // Constructor properties interface
    }

    class MixerControl extends GObject.Object {
        // Own properties of Gvc-1.0.MixerControl

        name: string;

        // Constructors of Gvc-1.0.MixerControl

        static ['new'](name: string): MixerControl;

        // Owm methods of Gvc-1.0.MixerControl

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
        set_headset_port(id: number, choices: HeadsetPortChoice): void;
    }

    module MixerEventRole {
        // Constructor properties interface
    }

    class MixerEventRole extends MixerStream {
        // Own properties of Gvc-1.0.MixerEventRole

        device: string;
    }

    module MixerSink {
        // Constructor properties interface
    }

    class MixerSink extends MixerStream {}

    module MixerSinkInput {
        // Constructor properties interface
    }

    class MixerSinkInput extends MixerStream {}

    module MixerSource {
        // Constructor properties interface
    }

    class MixerSource extends MixerStream {}

    module MixerSourceOutput {
        // Constructor properties interface
    }

    class MixerSourceOutput extends MixerStream {}

    module MixerStream {
        // Constructor properties interface
    }

    abstract class MixerStream extends GObject.Object {
        // Own properties of Gvc-1.0.MixerStream

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

        // Owm methods of Gvc-1.0.MixerStream

        change_is_muted(is_muted: boolean): boolean;
        change_port(port: string): boolean;
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
        set_state(state: MixerStreamState): boolean;
        set_sysfs_path(sysfs_path: string): boolean;
        set_volume(volume: number): boolean;
    }

    module MixerUIDevice {
        // Constructor properties interface
    }

    class MixerUIDevice extends GObject.Object {
        // Own properties of Gvc-1.0.MixerUIDevice

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

        // Owm methods of Gvc-1.0.MixerUIDevice

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

    class ChannelMapClass {}

    class ChannelMapPrivate {}

    class MixerCardClass {}

    class MixerCardPort {
        // Own fields of Gvc-1.0.MixerCardPort

        port: string;
        human_port: string;
        icon_name: string;
        priority: number;
        available: number;
        direction: number;
        profiles: any[];

        // Constructors of Gvc-1.0.MixerCardPort

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
    }

    class MixerCardPrivate {}

    class MixerCardProfile {
        // Own fields of Gvc-1.0.MixerCardProfile

        profile: string;
        human_profile: string;
        status: string;
        priority: number;
        n_sinks: number;
        n_sources: number;

        // Constructors of Gvc-1.0.MixerCardProfile

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

        // Owm methods of Gvc-1.0.MixerCardProfile

        compare(b: MixerCardProfile): number;
    }

    class MixerControlClass {}

    class MixerControlPrivate {}

    class MixerEventRoleClass {}

    class MixerEventRolePrivate {}

    class MixerSinkClass {}

    class MixerSinkInputClass {}

    class MixerSinkInputPrivate {}

    class MixerSinkPrivate {}

    class MixerSourceClass {}

    class MixerSourceOutputClass {}

    class MixerSourceOutputPrivate {}

    class MixerSourcePrivate {}

    class MixerStreamClass {}

    class MixerStreamPort {
        // Own fields of Gvc-1.0.MixerStreamPort

        port: string;
        human_port: string;
        priority: number;
        available: boolean;

        // Constructors of Gvc-1.0.MixerStreamPort

        constructor(
            properties?: Partial<{
                port: string;
                human_port: string;
                priority: number;
                available: boolean;
            }>,
        );
    }

    class MixerStreamPrivate {}

    class MixerUIDeviceClass {}

    class MixerUIDevicePrivate {}

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

export default Gvc;
// END
