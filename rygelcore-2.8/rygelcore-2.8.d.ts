/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './rygelcore-2.8-ambient.d.ts';
import './rygelcore-2.8-import.d.ts';
/**
 * RygelCore-2.8
 */

import type GLib from '@girs/glib-2.0';
import type Gee from '@girs/gee-0.8';
import type Gio from '@girs/gio-2.0';
import type GObject from '@girs/gobject-2.0';
import type GUPnP from '@girs/gupnp-1.6';
import type libxml2 from '@girs/libxml2-2.0';
import type Soup from '@girs/soup-3.0';
import type GSSDP from '@girs/gssdp-1.6';

export namespace RygelCore {
    enum LogLevel {
        INVALID,
        ERROR,
        CRITICAL,
        WARNING,
        INFO,
        DEFAULT,
        DEBUG,
    }
    enum ConfigurationEntry {
        INTERFACE,
        PORT,
        TRANSCODING,
        ALLOW_UPLOAD,
        ALLOW_DELETION,
        LOG_LEVELS,
        PLUGIN_PATH,
        VIDEO_UPLOAD_FOLDER,
        MUSIC_UPLOAD_FOLDER,
        PICTURE_UPLOAD_FOLDER,
    }
    enum SectionEntry {
        TITLE,
        ENABLED,
    }
    class ConfigurationError extends GLib.Error {
        // Own fields of RygelCore-2.8.ConfigurationError

        NO_VALUE_SET: number;
        VALUE_OUT_OF_RANGE: number;

        // Constructors of RygelCore-2.8.ConfigurationError

        constructor(options: { message: string; code: number });
    }

    class CmdlineConfigError extends GLib.Error {
        // Own fields of RygelCore-2.8.CmdlineConfigError

        VERSION_ONLY: number;

        // Constructors of RygelCore-2.8.CmdlineConfigError

        constructor(options: { message: string; code: number });
    }

    function get_pretty_host_name(): string;
    enum PluginCapabilities {
        NONE,
        IMAGE_UPLOAD,
        VIDEO_UPLOAD,
        AUDIO_UPLOAD,
        UPLOAD,
        TRACK_CHANGES,
        CREATE_CONTAINERS,
        DIAGNOSTICS,
        ENERGY_MANAGEMENT,
    }
    module ConnectionManager {
        // Constructor properties interface
    }

    class ConnectionManager extends GUPnP.Service {
        // Own fields of RygelCore-2.8.ConnectionManager

        sink_protocol_info: string;
        connection_ids: string;
        source_protocol_info: string;
        rcs_id: number;
        av_transport_id: number;
        direction: string;

        // Constructors of RygelCore-2.8.ConnectionManager

        static ['new'](): ConnectionManager;

        // Owm methods of RygelCore-2.8.ConnectionManager

        get_current_protocol_info(): string;
    }

    module BasicManagement {
        // Constructor properties interface
    }

    class BasicManagement extends GUPnP.Service {
        // Own properties of RygelCore-2.8.BasicManagement

        max_history_size: number;
        maxHistorySize: number;

        // Own fields of RygelCore-2.8.BasicManagement

        device_status: string;

        // Constructors of RygelCore-2.8.BasicManagement

        static ['new'](): BasicManagement;

        // Owm methods of RygelCore-2.8.BasicManagement

        get_max_history_size(): number;
        set_max_history_size(value: number): void;
    }

    module DescriptionFile {
        // Constructor properties interface
    }

    class DescriptionFile extends GObject.Object {
        // Constructors of RygelCore-2.8.DescriptionFile

        static ['new'](template_file: string): DescriptionFile;

        static from_xml_document(doc: GUPnP.XMLDoc): DescriptionFile;

        // Owm methods of RygelCore-2.8.DescriptionFile

        set_device_type(device_type: string): void;
        set_model_description(model_description: string): void;
        set_model_name(model_name: string): void;
        set_model_number(model_number: string): void;
        set_friendly_name(friendly_name: string): void;
        get_friendly_name(): string;
        set_udn(udn: string): void;
        get_udn(): string | null;
        set_serial_number(serial: string): void;
        set_dlna_caps(capabilities: PluginCapabilities): void;
        clear_service_list(): void;
        add_dlna_doc_element(dlnadoc_xpath: string, dlnadoc_non_xpath: string, dev_cap: string): void;
        remove_dlna_doc_element(dlnadoc_xpath: string): void;
        add_service(device_name: string, resource_info: ResourceInfo): void;
        clear_icon_list(): void;
        add_icon(device_name: string, icon_info: IconInfo, url: string): void;
        modify_service_type(old_type: string, new_type: string): void;
        save(path: string): void;
    }

    class DLNAProfile {
        // Own fields of RygelCore-2.8.DLNAProfile

        ref_count: number;
        mime: string;
        name: string;

        // Constructors of RygelCore-2.8.DLNAProfile

        static ['new'](name: string, mime: string): DLNAProfile;

        // Owm methods of RygelCore-2.8.DLNAProfile

        static compare_by_name(a: DLNAProfile, b: DLNAProfile): number;
    }

    module EnergyManagement {
        // Constructor properties interface
    }

    class EnergyManagement extends GUPnP.Service {
        // Constructors of RygelCore-2.8.EnergyManagement

        static ['new'](): EnergyManagement;
    }

    module RootDevice {
        // Constructor properties interface
    }

    class RootDevice extends GUPnP.RootDevice {
        // Own properties of RygelCore-2.8.RootDevice

        services: Gee.ArrayList;

        // Constructors of RygelCore-2.8.RootDevice

        static ['new'](
            context: GUPnP.Context,
            plugin: Plugin,
            description_doc: GUPnP.XMLDoc,
            description_path: string,
            description_dir: string,
        ): RootDevice;

        // Owm methods of RygelCore-2.8.RootDevice

        get_services(): Gee.ArrayList;
    }

    module RootDeviceFactory {
        // Constructor properties interface
    }

    class RootDeviceFactory extends GObject.Object {
        // Own properties of RygelCore-2.8.RootDeviceFactory

        context: GUPnP.Context;

        // Constructors of RygelCore-2.8.RootDeviceFactory

        static ['new'](context: GUPnP.Context): RootDeviceFactory;

        // Owm methods of RygelCore-2.8.RootDeviceFactory

        create(plugin: Plugin): RootDevice;
        get_context(): GUPnP.Context;
    }

    module LogHandler {
        // Constructor properties interface
    }

    class LogHandler extends GObject.Object {
        // Owm methods of RygelCore-2.8.LogHandler

        static get_default(): LogHandler;
    }

    module MetaConfig {
        // Constructor properties interface
    }

    class MetaConfig extends GObject.Object {
        // Constructors of RygelCore-2.8.MetaConfig

        static ['new'](): MetaConfig;

        // Owm methods of RygelCore-2.8.MetaConfig

        static get_default(): MetaConfig;
        static register_configuration(config: Configuration): void;
        static cleanup(): void;
    }

    module PluginLoader {
        // Signal callback interfaces

        interface PluginAvailable {
            (plugin: Plugin): void;
        }

        // Constructor properties interface
    }

    class PluginLoader extends RecursiveModuleLoader {
        // Constructors of RygelCore-2.8.PluginLoader

        static ['new'](): PluginLoader;

        // Owm methods of RygelCore-2.8.PluginLoader

        plugin_disabled(name: string): boolean;
        add_plugin(plugin: Plugin): void;
        get_plugin_by_name(name: string): Plugin | null;
        list_plugins(): Gee.Collection;
    }

    module RecursiveModuleLoader {
        // Constructor properties interface
    }

    abstract class RecursiveModuleLoader extends GObject.Object {
        // Own properties of RygelCore-2.8.RecursiveModuleLoader

        base_path: string;
        basePath: string;

        // Owm methods of RygelCore-2.8.RecursiveModuleLoader

        load_modules(): void;
        load_modules_sync(cancellable?: Gio.Cancellable | null): void;
        load_module_from_file(file: Gio.File): boolean;
        load_module_from_info(info: PluginInformation): boolean;
        get_base_path(): string;
        set_base_path(value: string): void;
    }

    module Plugin {
        // Constructor properties interface
    }

    class Plugin extends GUPnP.ResourceFactory {
        // Own properties of RygelCore-2.8.Plugin

        capabilities: PluginCapabilities;
        name: string;
        title: string;
        description: string;
        desc_path: string;
        descPath: string;
        active: boolean;
        resource_infos: Gee.ArrayList;
        resourceInfos: Gee.ArrayList;
        icon_infos: Gee.ArrayList;
        iconInfos: Gee.ArrayList;
        default_icons: Gee.ArrayList;
        defaultIcons: Gee.ArrayList;

        // Constructors of RygelCore-2.8.Plugin

        static ['new'](
            desc_path: string,
            name: string,
            title: string | null,
            description: string | null,
            capabilities: PluginCapabilities,
        ): Plugin;

        // Owm methods of RygelCore-2.8.Plugin

        add_resource(resource_info: ResourceInfo): void;
        add_icon(icon_info: IconInfo): void;
        apply_hacks(device: RootDevice, description_path: string): void;
        get_capabilities(): PluginCapabilities;
        set_capabilities(value: PluginCapabilities): void;
        get_name(): string;
        get_title(): string;
        set_title(value: string): void;
        get_description(): string;
        get_desc_path(): string;
        get_active(): boolean;
        set_active(value: boolean): void;
        get_resource_infos(): Gee.ArrayList;
        get_icon_infos(): Gee.ArrayList;
        get_default_icons(): Gee.ArrayList;
    }

    class ResourceInfo {
        // Own fields of RygelCore-2.8.ResourceInfo

        ref_count: number;
        upnp_type: string;
        upnp_id: string;
        description_path: string;
        type: GObject.GType;

        // Constructors of RygelCore-2.8.ResourceInfo

        static ['new'](upnp_id: string, upnp_type: string, description_path: string, type: GObject.GType): ResourceInfo;
    }

    module MediaDevice {
        // Constructor properties interface
    }

    abstract class MediaDevice extends GObject.Object {
        // Own properties of RygelCore-2.8.MediaDevice

        plugin: Plugin;
        title: string;
        capabilities: PluginCapabilities;

        // Owm methods of RygelCore-2.8.MediaDevice

        add_interface(iface: string): void;
        remove_interface(iface: string): void;
        get_interfaces(): string[];
        get_plugin(): Plugin;
        set_plugin(value: Plugin): void;
        get_title(): string;
        get_capabilities(): PluginCapabilities;
    }

    module BaseConfiguration {
        // Constructor properties interface
    }

    class BaseConfiguration extends GObject.Object {
        // Constructors of RygelCore-2.8.BaseConfiguration

        static ['new'](): BaseConfiguration;

        // Owm methods of RygelCore-2.8.BaseConfiguration

        get_interface(): string;
        get_interfaces(): string[];
        get_port(): number;
        get_transcoding(): boolean;
        get_allow_upload(): boolean;
        get_allow_deletion(): boolean;
        get_log_levels(): string;
        get_plugin_path(): string;
        get_engine_path(): string;
        get_media_engine(): string;
        get_video_upload_folder(): string | null;
        get_music_upload_folder(): string | null;
        get_picture_upload_folder(): string | null;
        get_enabled(section: string): boolean;
        get_title(section: string): string;
        get_string(section: string, key: string): string;
        get_string_list(section: string, key: string): Gee.ArrayList;
        get_int(section: string, key: string, min: number, max: number): number;
        get_int_list(section: string, key: string): Gee.ArrayList;
        get_bool(section: string, key: string): boolean;
    }

    module CmdlineConfig {
        // Constructor properties interface
    }

    class CmdlineConfig extends GObject.Object {
        // Constructors of RygelCore-2.8.CmdlineConfig

        static ['new'](): CmdlineConfig;

        // Owm methods of RygelCore-2.8.CmdlineConfig

        static get_default(): CmdlineConfig;

        // Owm methods of RygelCore-2.8.CmdlineConfig

        set_options(args: GLib.VariantDict): void;
        get_config_file(): string;
    }

    module EnvironmentConfig {
        // Constructor properties interface
    }

    class EnvironmentConfig extends GObject.Object {
        // Constructors of RygelCore-2.8.EnvironmentConfig

        static ['new'](): EnvironmentConfig;

        // Owm methods of RygelCore-2.8.EnvironmentConfig

        static get_default(): EnvironmentConfig;
    }

    module UserConfig {
        // Constructor properties interface
    }

    class UserConfig extends GObject.Object {
        // Own fields of RygelCore-2.8.UserConfig

        key_file_monitor: Gio.FileMonitor;
        sys_key_file_monitor: Gio.FileMonitor;

        // Constructors of RygelCore-2.8.UserConfig

        static ['new'](local_path: string): UserConfig;

        static with_paths(local_path: string, system_path: string): UserConfig;

        // Owm methods of RygelCore-2.8.UserConfig

        static get_default(): UserConfig;
    }

    module V1Hacks {
        // Constructor properties interface
    }

    class V1Hacks extends GObject.Object {
        // Own properties of RygelCore-2.8.V1Hacks

        device_type: string;
        deviceType: string;
        service_types: string[];
        serviceTypes: string[];

        // Own fields of RygelCore-2.8.V1Hacks

        description_path: string;

        // Constructors of RygelCore-2.8.V1Hacks

        static ['new'](device_type: string, service_types: string[]): V1Hacks;

        // Owm methods of RygelCore-2.8.V1Hacks

        apply_on_device(device: RootDevice, template_path?: string | null): void;
        get_device_type(): string;
        set_device_type(value: string): void;
        get_service_types(): string[];
    }

    class IconInfo {
        // Own fields of RygelCore-2.8.IconInfo

        ref_count: number;
        mime_type: string;
        uri: string;
        file_extension: string;
        size: number;
        width: number;
        height: number;
        depth: number;

        // Constructors of RygelCore-2.8.IconInfo

        static ['new'](mime_type: string, file_extension: string): IconInfo;
    }

    class XMLUtils {
        // Own fields of RygelCore-2.8.XMLUtils

        ref_count: number;

        // Constructors of RygelCore-2.8.XMLUtils

        static ['new'](): XMLUtils;

        // Owm methods of RygelCore-2.8.XMLUtils

        static get_namespace(root: any | null, href: string, prefix: string): any | null;
    }

    class XMLUtilsIterator {
        // Own fields of RygelCore-2.8.XMLUtilsIterator

        ref_count: number;

        // Constructors of RygelCore-2.8.XMLUtilsIterator

        static ['new'](node?: any | null): XMLUtilsIterator;

        // Owm methods of RygelCore-2.8.XMLUtilsIterator

        iterator(): XMLUtilsIterator;
        next(): boolean;
        get(): any | null;
    }

    class XMLUtilsChildIterator extends XMLUtilsIterator {
        // Constructors of RygelCore-2.8.XMLUtilsChildIterator

        static ['new'](node?: any | null): XMLUtilsChildIterator;
    }

    module PluginInformation {
        // Constructor properties interface
    }

    class PluginInformation extends GObject.Object {
        // Own properties of RygelCore-2.8.PluginInformation

        module_path: string;
        modulePath: string;
        name: string;
        conflicts: GLib.GenericSet;
        module_loaded: boolean;
        moduleLoaded: boolean;

        // Owm methods of RygelCore-2.8.PluginInformation

        static new_from_file(file: Gio.File): PluginInformation;

        // Owm methods of RygelCore-2.8.PluginInformation

        get_module_path(): string;
        get_name(): string;
        get_conflicts(): GLib.GenericSet;
        get_module_loaded(): boolean;
        set_module_loaded(value: boolean): void;
    }

    module Dlna150Hacks {
        // Constructor properties interface
    }

    class Dlna150Hacks extends GObject.Object {
        // Own fields of RygelCore-2.8.Dlna150Hacks

        description_path: string;

        // Constructors of RygelCore-2.8.Dlna150Hacks

        static ['new'](): Dlna150Hacks;

        // Owm methods of RygelCore-2.8.Dlna150Hacks

        apply_on_device(device: RootDevice, template_path?: string | null): void;
    }

    class ConnectionManagerClass {}

    class ConnectionManagerPrivate {}

    class BasicManagementClass {}

    class BasicManagementPrivate {}

    class DescriptionFileClass {}

    class DescriptionFilePrivate {}

    class DLNAProfileClass {}

    class DLNAProfilePrivate {}

    class EnergyManagementClass {}

    class EnergyManagementPrivate {}

    class RootDeviceClass {}

    class RootDevicePrivate {}

    class RootDeviceFactoryClass {}

    class RootDeviceFactoryPrivate {}

    class LogHandlerClass {}

    class LogHandlerPrivate {}

    class MetaConfigClass {}

    class MetaConfigPrivate {}

    class PluginLoaderClass {}

    class PluginLoaderPrivate {}

    class RecursiveModuleLoaderClass {}

    class RecursiveModuleLoaderPrivate {}

    class PluginClass {}

    class PluginPrivate {}

    class ResourceInfoClass {}

    class ResourceInfoPrivate {}

    class MediaDeviceClass {}

    class MediaDevicePrivate {}

    class BaseConfigurationClass {}

    class BaseConfigurationPrivate {}

    class CmdlineConfigClass {}

    class CmdlineConfigPrivate {}

    class EnvironmentConfigClass {}

    class EnvironmentConfigPrivate {}

    class UserConfigClass {}

    class UserConfigPrivate {}

    class V1HacksClass {}

    class V1HacksPrivate {}

    class IconInfoClass {}

    class IconInfoPrivate {}

    class XMLUtilsClass {}

    class XMLUtilsPrivate {}

    class XMLUtilsIteratorClass {}

    class XMLUtilsIteratorPrivate {}

    class XMLUtilsChildIteratorClass {}

    class XMLUtilsChildIteratorPrivate {}

    class PluginInformationClass {}

    class PluginInformationPrivate {}

    class Dlna150HacksClass {}

    class Dlna150HacksPrivate {}

    class DBusInterfaceIface {}

    class DBusAclProviderIface {}

    class ConfigurationIface {}

    class StateMachineIface {}

    interface DBusInterface {
        // Owm methods of RygelCore-2.8.DBusInterface

        shutdown(): void;

        // Own virtual methods of RygelCore-2.8.DBusInterface

        vfunc_shutdown(): void;
    }

    interface DBusAclProvider {
        // Owm methods of RygelCore-2.8.DBusAclProvider

        is_allowed(
            device: GLib.HashTable<string, string>,
            service: GLib.HashTable<string, string>,
            path: string,
            address: string,
            agent?: string | null,
            _callback_?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        is_allowed_finish(_res_: Gio.AsyncResult): boolean;

        // Own virtual methods of RygelCore-2.8.DBusAclProvider

        vfunc_is_allowed(
            device: GLib.HashTable<string, string>,
            service: GLib.HashTable<string, string>,
            path: string,
            address: string,
            agent?: string | null,
            _callback_?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        vfunc_is_allowed_finish(_res_: Gio.AsyncResult): boolean;
    }

    interface Configuration {
        // Owm methods of RygelCore-2.8.Configuration

        get_interface(): string;
        get_interfaces(): string[];
        get_port(): number;
        get_transcoding(): boolean;
        get_allow_upload(): boolean;
        get_allow_deletion(): boolean;
        get_log_levels(): string;
        get_plugin_path(): string;
        get_engine_path(): string;
        get_media_engine(): string;
        get_video_upload_folder(): string | null;
        get_music_upload_folder(): string | null;
        get_picture_upload_folder(): string | null;
        get_enabled(section: string): boolean;
        get_title(section: string): string;
        get_string(section: string, key: string): string;
        get_string_list(section: string, key: string): Gee.ArrayList;
        get_string_list_with_default(section: string, key: string, _default_: Gee.ArrayList): Gee.ArrayList;
        get_int(section: string, key: string, min: number, max: number): number;
        get_int_list(section: string, key: string): Gee.ArrayList;
        get_bool(section: string, key: string): boolean;

        // Own virtual methods of RygelCore-2.8.Configuration

        vfunc_get_interface(): string;
        vfunc_get_interfaces(): string[];
        vfunc_get_port(): number;
        vfunc_get_transcoding(): boolean;
        vfunc_get_allow_upload(): boolean;
        vfunc_get_allow_deletion(): boolean;
        vfunc_get_log_levels(): string;
        vfunc_get_plugin_path(): string;
        vfunc_get_engine_path(): string;
        vfunc_get_media_engine(): string;
        vfunc_get_video_upload_folder(): string | null;
        vfunc_get_music_upload_folder(): string | null;
        vfunc_get_picture_upload_folder(): string | null;
        vfunc_get_enabled(section: string): boolean;
        vfunc_get_title(section: string): string;
        vfunc_get_string(section: string, key: string): string;
        vfunc_get_string_list(section: string, key: string): Gee.ArrayList;
        vfunc_get_int(section: string, key: string, min: number, max: number): number;
        vfunc_get_int_list(section: string, key: string): Gee.ArrayList;
        vfunc_get_bool(section: string, key: string): boolean;
    }

    interface StateMachine {
        // Own properties of RygelCore-2.8.StateMachine

        cancellable: Gio.Cancellable;

        // Owm methods of RygelCore-2.8.StateMachine

        run(_callback_?: Gio.AsyncReadyCallback<this> | null): void;
        run_finish(_res_: Gio.AsyncResult): void;
        get_cancellable(): Gio.Cancellable;
        set_cancellable(value: Gio.Cancellable): void;

        // Own virtual methods of RygelCore-2.8.StateMachine

        vfunc_run(_callback_?: Gio.AsyncReadyCallback<this> | null): void;
        vfunc_run_finish(_res_: Gio.AsyncResult): void;
        vfunc_get_cancellable(): Gio.Cancellable;
        vfunc_set_cancellable(value: Gio.Cancellable): void;
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

export default RygelCore;
// END
