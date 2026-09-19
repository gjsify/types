/**
 * The GIR-derived widget VOCABULARY for Gio-2.0.
 *
 * GENERATED — do not edit. Provenance: Gio-2.0 — library 2.89.4 — dropped empty base(s): GObject.TypeModule GObject.TypePlugin — prop(s) no TypeScript value satisfies: Gio.DBusObjectManagerClient.get-proxy-type-destroy-notify Gio.DBusObjectManagerClient.get-proxy-type-func Gio.DBusObjectManagerClient.get-proxy-type-user-data Gio.InetAddress.bytes Gio.MemoryOutputStream.data
 *
 * 86 instantiable GTypes (of which 0 concrete widgets), 118 declarations, 35 enum nick unions, 0 slot candidates.
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

import type GLib from '@girs/glib-2.0';
import type GObject from '@girs/gobject-2.0';
import type Gio from './gio-2.0.js';
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

export type GBusTypeNick = 'starter' | 'none' | 'system' | 'session';
export type GConverterResultNick = 'error' | 'converted' | 'finished' | 'flushed';
export type GCredentialsTypeNick = 'invalid' | 'linux-ucred' | 'freebsd-cmsgcred' | 'openbsd-sockpeercred' | 'solaris-ucred' | 'netbsd-unpcbid' | 'apple-xucred' | 'win32-pid';
export type GDBusMessageByteOrderNick = 'big-endian' | 'little-endian';
export type GDBusMessageHeaderFieldNick = 'invalid' | 'path' | 'interface' | 'member' | 'error-name' | 'reply-serial' | 'destination' | 'sender' | 'signature' | 'num-unix-fds';
export type GDBusMessageTypeNick = 'invalid' | 'method-call' | 'method-return' | 'error' | 'signal';
export type GDataStreamByteOrderNick = 'big-endian' | 'little-endian' | 'host-endian';
export type GDataStreamNewlineTypeNick = 'lf' | 'cr' | 'cr-lf' | 'any';
export type GDriveStartStopTypeNick = 'unknown' | 'shutdown' | 'network' | 'multidisk' | 'password';
export type GEcnCodePointNick = 'no-ecn' | 'ect-1' | 'ect-0' | 'ect-ce';
export type GEmblemOriginNick = 'unknown' | 'device' | 'livemetadata' | 'tag';
export type GFileAttributeStatusNick = 'unset' | 'set' | 'error-setting';
export type GFileAttributeTypeNick = 'invalid' | 'string' | 'byte-string' | 'boolean' | 'uint32' | 'int32' | 'uint64' | 'int64' | 'object' | 'stringv';
export type GFileMonitorEventNick = 'changed' | 'changes-done-hint' | 'deleted' | 'created' | 'attribute-changed' | 'pre-unmount' | 'unmounted' | 'moved' | 'renamed' | 'moved-in' | 'moved-out';
export type GFileTypeNick = 'unknown' | 'regular' | 'directory' | 'symbolic-link' | 'special' | 'shortcut' | 'mountable';
export type GFilesystemPreviewTypeNick = 'if-always' | 'if-local' | 'never';
export type GMemoryMonitorWarningLevelNick = 'low' | 'medium' | 'critical';
export type GMountOperationResultNick = 'handled' | 'aborted' | 'unhandled';
export type GNetworkConnectivityNick = 'local' | 'limited' | 'portal' | 'full';
export type GNotificationPriorityNick = 'normal' | 'low' | 'high' | 'urgent';
export type GPasswordSaveNick = 'never' | 'for-session' | 'permanently';
export type GPollableReturnNick = 'failed' | 'ok' | 'would-block';
export type GResolverRecordTypeNick = 'srv' | 'mx' | 'txt' | 'soa' | 'ns';
export type GSocketClientEventNick = 'resolving' | 'resolved' | 'connecting' | 'connected' | 'proxy-negotiating' | 'proxy-negotiated' | 'tls-handshaking' | 'tls-handshaked' | 'complete';
export type GSocketFamilyNick = 'invalid' | 'unix' | 'ipv4' | 'ipv6';
export type GSocketListenerEventNick = 'binding' | 'bound' | 'listening' | 'listened';
export type GSocketProtocolNick = 'unknown' | 'default' | 'tcp' | 'udp' | 'sctp';
export type GSocketTypeNick = 'invalid' | 'stream' | 'datagram' | 'seqpacket';
export type GTlsAuthenticationModeNick = 'none' | 'requested' | 'required';
export type GTlsChannelBindingTypeNick = 'unique' | 'server-end-point' | 'exporter';
export type GTlsInteractionResultNick = 'unhandled' | 'handled' | 'failed';
export type GTlsProtocolVersionNick = 'unknown' | 'ssl-3-0' | 'tls-1-0' | 'tls-1-1' | 'tls-1-2' | 'tls-1-3' | 'dtls-1-0' | 'dtls-1-2';
export type GTlsRehandshakeModeNick = 'never' | 'safely' | 'unsafely';
export type GUnixSocketAddressTypeNick = 'invalid' | 'anonymous' | 'path' | 'abstract' | 'abstract-padded';
export type GZlibCompressorFormatNick = 'zlib' | 'gzip' | 'raw';

// ---------------------------------------------------------------------------
// Property surfaces — one interface per GIR DECLARATION, mirroring GIR's own
// inheritance rather than flattening per widget.
//
// The interfaces are load-bearing, not tidiness: `GtkBox` declares four properties
// of its own and `orientation` is not among them — it lives on `Gtk.Orientable`,
// because GObject installs interface properties on the implementor at runtime while
// GIR keeps them once, on the interface.
// ---------------------------------------------------------------------------

/** `GAction` represents a single named action. */
export interface GActionProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GActionConstructOnly = GObjectConstructOnly;

/** `GActionGroup` represents a group of actions. */
export interface GActionGroupProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GActionGroupConstructOnly = GObjectConstructOnly;

/** `GActionMap` is an interface for action containers. */
export interface GActionMapProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GActionMapConstructOnly = GObjectConstructOnly;

/** `GAppInfoMonitor` monitors application information for changes. */
export interface GAppInfoMonitorProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GAppInfoMonitorConstructOnly = GObjectConstructOnly;

/** Integrating the launch with the launching application. */
export interface GAppLaunchContextProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GAppLaunchContextConstructOnly = GObjectConstructOnly;

/** `GApplication` is the core class for application support. */
export interface GApplicationProps extends GObjectProps, GActionGroupProps, GActionMapProps {
    /**
     * The group of actions that the application exports.
     * @since 2.28
     * @deprecated since 2.32: Use the [iface@Gio.ActionMap] interface instead.
     */
    'action-group'?: Gio.ActionGroup;
    /**
     * The unique identifier for the application.
     * @since 2.28
     * @default NULL
     */
    'application-id'?: string | null;
    /**
     * Flags specifying the behaviour of the application.
     * @since 2.28
     * @default G_APPLICATION_FLAGS_NONE
     */
    flags?: number;
    /**
     * Time (in milliseconds) to stay alive after becoming idle.
     * @since 2.28
     * @default 0
     */
    'inactivity-timeout'?: number;
    /**
     * The base resource path for the application.
     * @since 2.28
     * @default NULL
     */
    'resource-base-path'?: string | null;
    /**
     * The human-readable version number of the application.
     * @since 2.80
     * @default NULL
     */
    version?: string | null;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GApplicationConstructOnly = GObjectConstructOnly | GActionGroupConstructOnly | GActionMapConstructOnly;

/** `GApplicationCommandLine` represents a command-line invocation of an application. */
export interface GApplicationCommandLineProps extends GObjectProps {
    /**
     * The commandline that caused this [signal@Gio.Application::command-line] signal emission.
     * @since 2.28
     */
    arguments?: GLib.Variant;
    /**
     * The options sent along with the commandline.
     * @since 2.28
     */
    options?: GLib.Variant;
    /**
     * Platform-specific data for the commandline.
     * @since 2.28
     */
    'platform-data'?: GLib.Variant | null;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GApplicationCommandLineConstructOnly = GObjectConstructOnly | 'arguments' | 'options' | 'platform-data';

/** `GAsyncInitable` is an interface for asynchronously initializable objects. */
export interface GAsyncInitableProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GAsyncInitableConstructOnly = GObjectConstructOnly;

/** `GAsyncResult` provides a base class for implementing asynchronous function results. */
export interface GAsyncResultProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GAsyncResultConstructOnly = GObjectConstructOnly;

/** Buffered input stream implements [class@Gio.FilterInputStream] and provides for buffered reads. */
export interface GBufferedInputStreamProps extends GFilterInputStreamProps, GSeekableProps {
    /**
     * The size of the backend buffer, in bytes.
     * @default 4096
     */
    'buffer-size'?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GBufferedInputStreamConstructOnly = GFilterInputStreamConstructOnly | GSeekableConstructOnly;

/** Buffered output stream implements [class@Gio.FilterOutputStream] and provides for buffered writes. */
export interface GBufferedOutputStreamProps extends GFilterOutputStreamProps, GSeekableProps {
    /**
     * Whether the buffer should automatically grow.
     * @default FALSE
     */
    'auto-grow'?: boolean;
    /**
     * The size of the backend buffer, in bytes.
     * @default 4096
     */
    'buffer-size'?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GBufferedOutputStreamConstructOnly = GFilterOutputStreamConstructOnly | GSeekableConstructOnly;

/** `GBytesIcon` specifies an image held in memory in a common format (usually PNG) to be used as icon. */
export interface GBytesIconProps extends GObjectProps, GIconProps, GLoadableIconProps {
    /** The bytes containing the icon. */
    bytes?: GLib.Bytes;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GBytesIconConstructOnly = GObjectConstructOnly | GIconConstructOnly | GLoadableIconConstructOnly | 'bytes';

/** `GCancellable` allows operations to be cancelled. */
export interface GCancellableProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GCancellableConstructOnly = GObjectConstructOnly;

/** `GCharsetConverter` is an implementation of [iface@Gio.Converter] based on [struct@GLib.IConv]. */
export interface GCharsetConverterProps extends GObjectProps, GConverterProps, GInitableProps {
    /**
     * The character encoding to convert from.
     * @since 2.24
     * @default NULL
     */
    'from-charset'?: string;
    /**
     * The character encoding to convert to.
     * @since 2.24
     * @default NULL
     */
    'to-charset'?: string;
    /**
     * Use fallback (of form `\<hexval>`) for invalid bytes.
     * @since 2.24
     * @default FALSE
     */
    'use-fallback'?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GCharsetConverterConstructOnly = GObjectConstructOnly | GConverterConstructOnly | GInitableConstructOnly | 'from-charset' | 'to-charset';

/** `GConverter` is an interface for streaming conversions. */
export interface GConverterProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GConverterConstructOnly = GObjectConstructOnly;

/** Converter input stream implements [class@Gio.InputStream] and allows conversion of data of various types during reading. */
export interface GConverterInputStreamProps extends GFilterInputStreamProps, GPollableInputStreamProps {
    /** The converter object. */
    converter?: Gio.Converter;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GConverterInputStreamConstructOnly = GFilterInputStreamConstructOnly | GPollableInputStreamConstructOnly | 'converter';

/** Converter output stream implements [class@Gio.OutputStream] and allows conversion of data of various types during reading. */
export interface GConverterOutputStreamProps extends GFilterOutputStreamProps, GPollableOutputStreamProps {
    /** The converter object. */
    converter?: Gio.Converter;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GConverterOutputStreamConstructOnly = GFilterOutputStreamConstructOnly | GPollableOutputStreamConstructOnly | 'converter';

/** The `GCredentials` type is a reference-counted wrapper for native credentials. */
export interface GCredentialsProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GCredentialsConstructOnly = GObjectConstructOnly;

/** `GDBusActionGroup` is an implementation of the [iface@Gio.ActionGroup] interface. */
export interface GDBusActionGroupProps extends GObjectProps, GActionGroupProps, GRemoteActionGroupProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GDBusActionGroupConstructOnly = GObjectConstructOnly | GActionGroupConstructOnly | GRemoteActionGroupConstructOnly;

/** `GDBusAuthObserver` provides a mechanism for participating in how a [class@Gio.DBusServer] (or a [class@Gio.DBusConnection]) authenticates remote peers. */
export interface GDBusAuthObserverProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GDBusAuthObserverConstructOnly = GObjectConstructOnly;

/** The `GDBusConnection` type is used for D-Bus connections to remote peers such as a message buses. */
export interface GDBusConnectionProps extends GObjectProps, GAsyncInitableProps, GInitableProps {
    /**
     * A D-Bus address specifying potential endpoints that can be used when establishing the connection.
     * @since 2.26
     * @default NULL
     */
    address?: string;
    /**
     * A #GDBusAuthObserver object to assist in the authentication process or %NULL.
     * @since 2.26
     */
    'authentication-observer'?: Gio.DBusAuthObserver;
    /**
     * A boolean specifying whether the process will be terminated (by calling `raise(SIGTERM)`) if the connection is closed by the remote peer.
     * @since 2.26
     * @default FALSE
     */
    'exit-on-close'?: boolean;
    /**
     * Flags from the #GDBusConnectionFlags enumeration.
     * @since 2.26
     * @default G_DBUS_CONNECTION_FLAGS_NONE
     */
    flags?: number;
    /**
     * The GUID of the peer performing the role of server when authenticating.
     * @since 2.26
     * @default NULL
     */
    guid?: string;
    /**
     * The underlying #GIOStream used for I/O.
     * @since 2.26
     */
    stream?: Gio.IOStream;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GDBusConnectionConstructOnly = GObjectConstructOnly | GAsyncInitableConstructOnly | GInitableConstructOnly | 'address' | 'authentication-observer' | 'flags' | 'guid' | 'stream';

/** Base type for D-Bus interfaces. */
export interface GDBusInterfaceProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GDBusInterfaceConstructOnly = GObjectConstructOnly;

/** `GDBusMenuModel` is an implementation of [class@Gio.MenuModel] that can be used as a proxy for a menu model that is exported over D-Bus with [method@Gio.DBusConnection.export_menu_model]. */
export interface GDBusMenuModelProps extends GMenuModelProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GDBusMenuModelConstructOnly = GMenuModelConstructOnly;

/** A type for representing D-Bus messages that can be sent or received on a [class@Gio.DBusConnection]. */
export interface GDBusMessageProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GDBusMessageConstructOnly = GObjectConstructOnly;

/** Instances of the `GDBusMethodInvocation` class are used when handling D-Bus method calls. */
export interface GDBusMethodInvocationProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GDBusMethodInvocationConstructOnly = GObjectConstructOnly;

/** The `GDBusObject` type is the base type for D-Bus objects on both the service side (see [class@Gio.DBusObjectSkeleton]) and the client side (see [class@Gio.DBusObjectProxy]). */
export interface GDBusObjectProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GDBusObjectConstructOnly = GObjectConstructOnly;

/** The `GDBusObjectManager` type is the base type for service- and client-side implementations of the standardized [`org.freedesktop.DBus.ObjectManager`](http://dbus.freedesktop.org/doc/dbus-specificati… */
export interface GDBusObjectManagerProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GDBusObjectManagerConstructOnly = GObjectConstructOnly;

/** `GDBusObjectManagerClient` is used to create, monitor and delete object proxies for remote objects exported by a [class@Gio.DBusObjectManagerServer] (or any code implementing the [org.freedesktop.DBu… */
export interface GDBusObjectManagerClientProps extends GObjectProps, GAsyncInitableProps, GDBusObjectManagerProps, GInitableProps {
    /**
     * If this property is not %G_BUS_TYPE_NONE, then #GDBusObjectManagerClient:connection must be %NULL and will be set to the #GDBusConnection obtained by calling g_bus_get() with the value of this proper…
     * @since 2.30
     * @default G_BUS_TYPE_NONE
     */
    'bus-type'?: GBusTypeNick | Gio.BusType;
    /**
     * The #GDBusConnection to use.
     * @since 2.30
     */
    connection?: Gio.DBusConnection;
    /**
     * Flags from the #GDBusObjectManagerClientFlags enumeration.
     * @since 2.30
     * @default G_DBUS_OBJECT_MANAGER_CLIENT_FLAGS_NONE
     */
    flags?: number;
    /**
     * A #GDestroyNotify for the #gpointer user_data in #GDBusObjectManagerClient:get-proxy-type-user-data.
     * @since 2.30
     */
    'get-proxy-type-destroy-notify'?: never;
    /**
     * The #GDBusProxyTypeFunc to use when determining what #GType to use for interface proxies or %NULL.
     * @since 2.30
     */
    'get-proxy-type-func'?: never;
    /**
     * The #gpointer user_data to pass to #GDBusObjectManagerClient:get-proxy-type-func.
     * @since 2.30
     */
    'get-proxy-type-user-data'?: never;
    /**
     * The well-known name or unique name that the manager is for.
     * @since 2.30
     * @default NULL
     */
    name?: string;
    /**
     * The object path the manager is for.
     * @since 2.30
     * @default NULL
     */
    'object-path'?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GDBusObjectManagerClientConstructOnly = GObjectConstructOnly | GAsyncInitableConstructOnly | GDBusObjectManagerConstructOnly | GInitableConstructOnly | 'bus-type' | 'connection' | 'flags' | 'get-proxy-type-destroy-notify' | 'get-proxy-type-func' | 'get-proxy-type-user-data' | 'name' | 'object-path';

/** `GDBusObjectManagerServer` is used to export [iface@Gio.DBusObject] instances using the standardized [`org.freedesktop.DBus.ObjectManager`](http://dbus.freedesktop.org/doc/dbus-specification.html#sta… */
export interface GDBusObjectManagerServerProps extends GObjectProps, GDBusObjectManagerProps {
    /**
     * The #GDBusConnection to export objects on.
     * @since 2.30
     */
    connection?: Gio.DBusConnection | null;
    /**
     * The object path to register the manager object at.
     * @since 2.30
     * @default NULL
     */
    'object-path'?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GDBusObjectManagerServerConstructOnly = GObjectConstructOnly | GDBusObjectManagerConstructOnly | 'object-path';

/** A `GDBusObjectProxy` is an object used to represent a remote object with one or more D-Bus interfaces. */
export interface GDBusObjectProxyProps extends GObjectProps, GDBusObjectProps {
    /**
     * The connection of the proxy.
     * @since 2.30
     */
    'g-connection'?: Gio.DBusConnection;
    /**
     * The object path of the proxy.
     * @since 2.30
     * @default NULL
     */
    'g-object-path'?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GDBusObjectProxyConstructOnly = GObjectConstructOnly | GDBusObjectConstructOnly | 'g-connection' | 'g-object-path';

/** A `GDBusObjectSkeleton` instance is essentially a group of D-Bus interfaces. */
export interface GDBusObjectSkeletonProps extends GObjectProps, GDBusObjectProps {
    /**
     * The object path where the object is exported.
     * @since 2.30
     * @default NULL
     */
    'g-object-path'?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GDBusObjectSkeletonConstructOnly = GObjectConstructOnly | GDBusObjectConstructOnly;

/** `GDBusProxy` is a base class used for proxies to access a D-Bus interface on a remote object. */
export interface GDBusProxyProps extends GObjectProps, GAsyncInitableProps, GDBusInterfaceProps, GInitableProps {
    /**
     * If this property is not %G_BUS_TYPE_NONE, then #GDBusProxy:g-connection must be %NULL and will be set to the #GDBusConnection obtained by calling g_bus_get() with the value of this property.
     * @since 2.26
     * @default G_BUS_TYPE_NONE
     */
    'g-bus-type'?: GBusTypeNick | Gio.BusType;
    /**
     * The #GDBusConnection the proxy is for.
     * @since 2.26
     */
    'g-connection'?: Gio.DBusConnection;
    /**
     * The timeout to use if -1 (specifying default timeout) is passed as @timeout_msec in the g_dbus_proxy_call() and g_dbus_proxy_call_sync() functions.
     * @since 2.26
     * @default -1
     */
    'g-default-timeout'?: number;
    /**
     * Flags from the #GDBusProxyFlags enumeration.
     * @since 2.26
     * @default G_DBUS_PROXY_FLAGS_NONE
     */
    'g-flags'?: number;
    /**
     * Ensure that interactions with this proxy conform to the given interface.
     * @since 2.26
     */
    'g-interface-info'?: Gio.DBusInterfaceInfo | null;
    /**
     * The D-Bus interface name the proxy is for.
     * @since 2.26
     * @default NULL
     */
    'g-interface-name'?: string;
    /**
     * The well-known or unique name that the proxy is for.
     * @since 2.26
     * @default NULL
     */
    'g-name'?: string | null;
    /**
     * The object path the proxy is for.
     * @since 2.26
     * @default NULL
     */
    'g-object-path'?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GDBusProxyConstructOnly = GObjectConstructOnly | GAsyncInitableConstructOnly | GDBusInterfaceConstructOnly | GInitableConstructOnly | 'g-bus-type' | 'g-connection' | 'g-flags' | 'g-interface-name' | 'g-name' | 'g-object-path';

/** `GDBusServer` is a helper for listening to and accepting D-Bus connections. */
export interface GDBusServerProps extends GObjectProps, GInitableProps {
    /**
     * The D-Bus address to listen on.
     * @since 2.26
     * @default NULL
     */
    address?: string;
    /**
     * A #GDBusAuthObserver object to assist in the authentication process or %NULL.
     * @since 2.26
     */
    'authentication-observer'?: Gio.DBusAuthObserver;
    /**
     * Flags from the #GDBusServerFlags enumeration.
     * @since 2.26
     * @default G_DBUS_SERVER_FLAGS_NONE
     */
    flags?: number;
    /**
     * The GUID of the server.
     * @since 2.26
     * @default NULL
     */
    guid?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GDBusServerConstructOnly = GObjectConstructOnly | GInitableConstructOnly | 'address' | 'authentication-observer' | 'flags' | 'guid';

/** Data input stream implements [class@Gio.InputStream] and includes functions for reading structured data directly from a binary input stream. */
export interface GDataInputStreamProps extends GBufferedInputStreamProps, GSeekableProps {
    /**
     * The :byte-order property determines the byte ordering that is used when reading multi-byte entities (such as integers) from the stream.
     * @default G_DATA_STREAM_BYTE_ORDER_BIG_ENDIAN
     */
    'byte-order'?: GDataStreamByteOrderNick | Gio.DataStreamByteOrder;
    /**
     * The :newline-type property determines what is considered as a line ending when reading complete lines from the stream.
     * @default G_DATA_STREAM_NEWLINE_TYPE_LF
     */
    'newline-type'?: GDataStreamNewlineTypeNick | Gio.DataStreamNewlineType;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GDataInputStreamConstructOnly = GBufferedInputStreamConstructOnly | GSeekableConstructOnly;

/** Data output stream implements [class@Gio.OutputStream] and includes functions for writing data directly to an output stream. */
export interface GDataOutputStreamProps extends GFilterOutputStreamProps, GSeekableProps {
    /**
     * Determines the byte ordering that is used when writing multi-byte entities (such as integers) to the stream.
     * @default G_DATA_STREAM_BYTE_ORDER_BIG_ENDIAN
     */
    'byte-order'?: GDataStreamByteOrderNick | Gio.DataStreamByteOrder;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GDataOutputStreamConstructOnly = GFilterOutputStreamConstructOnly | GSeekableConstructOnly;

/** Interface for socket-like objects with datagram semantics. */
export interface GDatagramBasedProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GDatagramBasedConstructOnly = GObjectConstructOnly;

/** `GDebugController` is an interface to expose control of debugging features and debug output. */
export interface GDebugControllerProps extends GInitableProps {
    /**
     * %TRUE if debug output should be exposed (for example by forwarding it to the journal), %FALSE otherwise.
     * @since 2.72
     * @default FALSE
     */
    'debug-enabled'?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GDebugControllerConstructOnly = GInitableConstructOnly;

/** `GDebugControllerDBus` is an implementation of [iface@Gio.DebugController] which exposes debug settings as a D-Bus object. */
export interface GDebugControllerDBusProps extends GObjectProps, GDebugControllerProps, GInitableProps {
    /**
     * The D-Bus connection to expose the debugging interface on.
     * @since 2.72
     */
    connection?: Gio.DBusConnection;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GDebugControllerDBusConstructOnly = GObjectConstructOnly | GDebugControllerConstructOnly | GInitableConstructOnly | 'connection';

/** `GEmblem` is an implementation of [iface@Gio.Icon] that supports having an emblem, which is an icon with additional properties. */
export interface GEmblemProps extends GObjectProps, GIconProps {
    /**
     * The actual icon of the emblem.
     * @since 2.18
     */
    icon?: GObject.Object;
    /**
     * The origin the emblem is derived from.
     * @since 2.18
     * @default G_EMBLEM_ORIGIN_UNKNOWN
     */
    origin?: GEmblemOriginNick | Gio.EmblemOrigin;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GEmblemConstructOnly = GObjectConstructOnly | GIconConstructOnly | 'icon' | 'origin';

/** `GEmblemedIcon` is an implementation of [iface@Gio.Icon] that supports adding an emblem to an icon. */
export interface GEmblemedIconProps extends GObjectProps, GIconProps {
    /**
     * The [iface@Gio.Icon] to attach emblems to.
     * @since 2.18
     */
    gicon?: Gio.Icon;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GEmblemedIconConstructOnly = GObjectConstructOnly | GIconConstructOnly | 'gicon';

/** `GFileEnumerator` allows you to operate on a set of [iface@Gio.File] objects, returning a [class@Gio.FileInfo] structure for each file enumerated (e.g. */
export interface GFileEnumeratorProps extends GObjectProps {
    /** The container that is being enumerated. */
    container?: Gio.File;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GFileEnumeratorConstructOnly = GObjectConstructOnly | 'container';

/** `GFileIOStream` provides I/O streams that both read and write to the same file handle. */
export interface GFileIOStreamProps extends GIOStreamProps, GSeekableProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GFileIOStreamConstructOnly = GIOStreamConstructOnly | GSeekableConstructOnly;

/** `GFileIcon` specifies an icon by pointing to an image file to be used as icon. */
export interface GFileIconProps extends GObjectProps, GIconProps, GLoadableIconProps {
    /** The file containing the icon. */
    file?: Gio.File;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GFileIconConstructOnly = GObjectConstructOnly | GIconConstructOnly | GLoadableIconConstructOnly | 'file';

/** Stores information about a file system object referenced by a [iface@Gio.File]. */
export interface GFileInfoProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GFileInfoConstructOnly = GObjectConstructOnly;

/** `GFileInputStream` provides input streams that take their content from a file. */
export interface GFileInputStreamProps extends GInputStreamProps, GSeekableProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GFileInputStreamConstructOnly = GInputStreamConstructOnly | GSeekableConstructOnly;

/** `GFileOutputStream` provides output streams that write their content to a file. */
export interface GFileOutputStreamProps extends GOutputStreamProps, GSeekableProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GFileOutputStreamConstructOnly = GOutputStreamConstructOnly | GSeekableConstructOnly;

/** Completes partial file and directory names given a partial string by looking in the file system for clues. */
export interface GFilenameCompleterProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GFilenameCompleterConstructOnly = GObjectConstructOnly;

/** Base class for input stream implementations that perform some kind of filtering operation on a base stream. */
export interface GFilterInputStreamProps extends GInputStreamProps {
    /** The underlying base stream on which the I/O ops will be done. */
    'base-stream'?: Gio.InputStream;
    /**
     * Whether the base stream should be closed when the filter stream is closed.
     * @default TRUE
     */
    'close-base-stream'?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GFilterInputStreamConstructOnly = GInputStreamConstructOnly | 'base-stream';

/** Base class for output stream implementations that perform some kind of filtering operation on a base stream. */
export interface GFilterOutputStreamProps extends GOutputStreamProps {
    /** The underlying base stream on which the I/O ops will be done. */
    'base-stream'?: Gio.OutputStream;
    /**
     * Whether the base stream should be closed when the filter stream is closed.
     * @default TRUE
     */
    'close-base-stream'?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GFilterOutputStreamConstructOnly = GOutputStreamConstructOnly | 'base-stream' | 'close-base-stream';

/** Provides an interface and default functions for loading and unloading modules. */
export interface GIOModuleProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GIOModuleConstructOnly = never;

/** `GIOStream` represents an object that has both read and write streams. */
export interface GIOStreamProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GIOStreamConstructOnly = GObjectConstructOnly;

/** Contains the type of service (ToS) byte of an IPv4 header. */
export interface GIPTosMessageProps extends GSocketControlMessageProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GIPTosMessageConstructOnly = GSocketControlMessageConstructOnly;

/** Contains the Traffic Class byte of an IPv6 header. */
export interface GIPv6TclassMessageProps extends GSocketControlMessageProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GIPv6TclassMessageConstructOnly = GSocketControlMessageConstructOnly;

/** `GIcon` is a very minimal interface for icons. */
export interface GIconProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GIconConstructOnly = GObjectConstructOnly;

/** `GInetAddress` represents an IPv4 or IPv6 internet address. */
export interface GInetAddressProps extends GObjectProps {
    /**
     * The raw address data.
     * @since 2.22
     */
    bytes?: never;
    /**
     * The address family (IPv4 or IPv6).
     * @since 2.22
     * @default G_SOCKET_FAMILY_INVALID
     */
    family?: GSocketFamilyNick | Gio.SocketFamily;
    /**
     * The flowinfo for an IPv6 address.
     * @since 2.86
     * @default 0
     */
    flowinfo?: number;
    /**
     * The scope-id for an IPv6 address.
     * @since 2.86
     * @default 0
     */
    'scope-id'?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GInetAddressConstructOnly = GObjectConstructOnly | 'bytes' | 'family' | 'flowinfo' | 'scope-id';

/** `GInetAddressMask` represents a range of IPv4 or IPv6 addresses described by a base address and a length indicating how many bits of the base address are relevant for matching purposes. */
export interface GInetAddressMaskProps extends GObjectProps, GInitableProps {
    /**
     * The base address.
     * @since 2.32
     */
    address?: Gio.InetAddress;
    /**
     * The prefix length, in bytes.
     * @since 2.32
     * @default 0
     */
    length?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GInetAddressMaskConstructOnly = GObjectConstructOnly | GInitableConstructOnly;

/** An IPv4 or IPv6 socket address. */
export interface GInetSocketAddressProps extends GSocketAddressProps, GSocketConnectableProps {
    /**
     * The address.
     * @since 2.22
     */
    address?: Gio.InetAddress;
    /**
     * The `sin6_flowinfo` field, for IPv6 addresses.
     * @since 2.32
     * @default 0
     */
    flowinfo?: number;
    /**
     * The port.
     * @since 2.22
     * @default 0
     */
    port?: number;
    /**
     * The `sin6_scope_id` field, for IPv6 addresses.
     * @since 2.32
     * @default 0
     */
    'scope-id'?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GInetSocketAddressConstructOnly = GSocketAddressConstructOnly | GSocketConnectableConstructOnly | 'address' | 'flowinfo' | 'port' | 'scope-id';

/** `GInitable` is implemented by objects that can fail during initialization. */
export interface GInitableProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GInitableConstructOnly = GObjectConstructOnly;

/** `GInputStream` is a base class for implementing streaming input. */
export interface GInputStreamProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GInputStreamConstructOnly = GObjectConstructOnly;

/** `GListModel` is an interface that represents a mutable list of [class@GObject.Object]. */
export interface GListModelProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GListModelConstructOnly = GObjectConstructOnly;

/** `GListStore` is a simple implementation of [iface@Gio.ListModel] that stores all items in memory. */
export interface GListStoreProps extends GObjectProps, GListModelProps {
    /**
     * The type of items contained in this list store.
     * @since 2.44
     */
    'item-type'?: GObject.GType;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GListStoreConstructOnly = GObjectConstructOnly | GListModelConstructOnly | 'item-type';

/** `GLoadableIcon` extends the [iface@Gio.Icon] interface and adds the ability to load icons from streams. */
export interface GLoadableIconProps extends GIconProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GLoadableIconConstructOnly = GIconConstructOnly;

/** `GMemoryInputStream` is a class for using arbitrary memory chunks as input for GIO streaming input operations. */
export interface GMemoryInputStreamProps extends GInputStreamProps, GPollableInputStreamProps, GSeekableProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GMemoryInputStreamConstructOnly = GInputStreamConstructOnly | GPollableInputStreamConstructOnly | GSeekableConstructOnly;

/** `GMemoryOutputStream` is a class for using arbitrary memory chunks as output for GIO streaming output operations. */
export interface GMemoryOutputStreamProps extends GOutputStreamProps, GPollableOutputStreamProps, GSeekableProps {
    /**
     * Pointer to buffer where data will be written.
     * @since 2.24
     */
    data?: never;
    /**
     * Current size of the data buffer.
     * @since 2.24
     * @default 0
     */
    size?: bigint | number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GMemoryOutputStreamConstructOnly = GOutputStreamConstructOnly | GPollableOutputStreamConstructOnly | GSeekableConstructOnly | 'data' | 'size';

/** `GMenu` is a simple implementation of [class@Gio.MenuModel]. */
export interface GMenuProps extends GMenuModelProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GMenuConstructOnly = GMenuModelConstructOnly;

/** #GMenuItem is an opaque structure type. */
export interface GMenuItemProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GMenuItemConstructOnly = GObjectConstructOnly;

/** `GMenuModel` represents the contents of a menu — an ordered list of menu items. */
export interface GMenuModelProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GMenuModelConstructOnly = GObjectConstructOnly;

/** `GMountOperation` provides a mechanism for interacting with the user. */
export interface GMountOperationProps extends GObjectProps {
    /**
     * Whether to use an anonymous user when authenticating.
     * @default FALSE
     */
    anonymous?: boolean;
    /**
     * The index of the user's choice when a question is asked during the mount operation.
     * @default 0
     */
    choice?: number;
    /**
     * The domain to use for the mount operation.
     * @default NULL
     */
    domain?: string | null;
    /**
     * Whether the device to be unlocked is a TCRYPT hidden volume.
     * @since 2.58
     * @default FALSE
     */
    'is-tcrypt-hidden-volume'?: boolean;
    /**
     * Whether the device to be unlocked is a TCRYPT system volume.
     * @since 2.58
     * @default FALSE
     */
    'is-tcrypt-system-volume'?: boolean;
    /**
     * The password that is used for authentication when carrying out the mount operation.
     * @default NULL
     */
    password?: string | null;
    /**
     * Determines if and how the password information should be saved.
     * @default G_PASSWORD_SAVE_NEVER
     */
    'password-save'?: GPasswordSaveNick | Gio.PasswordSave;
    /**
     * The VeraCrypt PIM value, when unlocking a VeraCrypt volume.
     * @since 2.58
     * @default 0
     */
    pim?: number;
    /**
     * The user name that is used for authentication when carrying out the mount operation.
     * @default NULL
     */
    username?: string | null;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GMountOperationConstructOnly = GObjectConstructOnly;

/** A socket address of some unknown native type. */
export interface GNativeSocketAddressProps extends GSocketAddressProps, GSocketConnectableProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GNativeSocketAddressConstructOnly = GSocketAddressConstructOnly | GSocketConnectableConstructOnly;

/** `GNetworkAddress` provides an easy way to resolve a hostname and then attempt to connect to that host, handling the possibility of multiple IP addresses and multiple address families. */
export interface GNetworkAddressProps extends GObjectProps, GSocketConnectableProps {
    /**
     * Hostname to resolve.
     * @since 2.22
     * @default NULL
     */
    hostname?: string;
    /**
     * Network port.
     * @since 2.22
     * @default 0
     */
    port?: number;
    /**
     * URI scheme.
     * @since 2.22
     * @default NULL
     */
    scheme?: string | null;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GNetworkAddressConstructOnly = GObjectConstructOnly | GSocketConnectableConstructOnly | 'hostname' | 'port' | 'scheme';

/** Like [class@Gio.NetworkAddress] does with hostnames, `GNetworkService` provides an easy way to resolve a SRV record, and then attempt to connect to one of the hosts that implements that service, hand… */
export interface GNetworkServiceProps extends GObjectProps, GSocketConnectableProps {
    /**
     * Network domain, for example `example.com`.
     * @since 2.22
     * @default NULL
     */
    domain?: string;
    /**
     * Network protocol, for example `tcp`.
     * @since 2.22
     * @default NULL
     */
    protocol?: string;
    /**
     * Network scheme (default is to use service).
     * @since 2.22
     * @default NULL
     */
    scheme?: string;
    /**
     * Service name, for example `ldap`.
     * @since 2.22
     * @default NULL
     */
    service?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GNetworkServiceConstructOnly = GObjectConstructOnly | GSocketConnectableConstructOnly | 'domain' | 'protocol' | 'service';

/** `GNotification` is a mechanism for creating a notification to be shown to the user — typically as a pop-up notification presented by the desktop environment shell. */
export interface GNotificationProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GNotificationConstructOnly = GObjectConstructOnly;

/** `GOutputStream` is a base class for implementing streaming output. */
export interface GOutputStreamProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GOutputStreamConstructOnly = GObjectConstructOnly;

/** A `GPermission` represents the status of the caller’s permission to perform a certain action. */
export interface GPermissionProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GPermissionConstructOnly = GObjectConstructOnly;

/** `GPollableInputStream` is implemented by [class@Gio.InputStream]s that can be polled for readiness to read. */
export interface GPollableInputStreamProps extends GInputStreamProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GPollableInputStreamConstructOnly = GInputStreamConstructOnly;

/** `GPollableOutputStream` is implemented by [class@Gio.OutputStream]s that can be polled for readiness to write. */
export interface GPollableOutputStreamProps extends GOutputStreamProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GPollableOutputStreamConstructOnly = GOutputStreamConstructOnly;

/** A `GPropertyAction` is a way to get a [iface@Gio.Action] with a state value reflecting and controlling the value of a [class@GObject.Object] property. */
export interface GPropertyActionProps extends GObjectProps, GActionProps {
    /**
     * If %TRUE, the state of the action will be the negation of the property value, provided the property is boolean.
     * @since 2.46
     * @default FALSE
     */
    'invert-boolean'?: boolean;
    /**
     * The name of the action.
     * @since 2.38
     * @default NULL
     */
    name?: string;
    /**
     * The object to wrap a property on.
     * @since 2.38
     */
    object?: GObject.Object;
    /**
     * The name of the property to wrap on the object.
     * @since 2.38
     * @default NULL
     */
    'property-name'?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GPropertyActionConstructOnly = GObjectConstructOnly | GActionConstructOnly | 'invert-boolean' | 'name' | 'object' | 'property-name';

/** A [class@Gio.InetSocketAddress] representing a connection via a proxy server. */
export interface GProxyAddressProps extends GInetSocketAddressProps, GSocketConnectableProps {
    /**
     * The proxy destination hostname.
     * @since 2.26
     * @default NULL
     */
    'destination-hostname'?: string;
    /**
     * The proxy destination port.
     * @since 2.26
     * @default 0
     */
    'destination-port'?: number;
    /**
     * The protocol being spoke to the destination host, or %NULL if the #GProxyAddress doesn't know.
     * @since 2.34
     * @default NULL
     */
    'destination-protocol'?: string;
    /**
     * The proxy password.
     * @since 2.26
     * @default NULL
     */
    password?: string | null;
    /**
     * The proxy protocol.
     * @since 2.26
     * @default NULL
     */
    protocol?: string;
    /**
     * The URI string that the proxy was constructed from (or %NULL if the creator didn't specify this).
     * @since 2.34
     * @default NULL
     */
    uri?: string | null;
    /**
     * The proxy username.
     * @since 2.26
     * @default NULL
     */
    username?: string | null;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GProxyAddressConstructOnly = GInetSocketAddressConstructOnly | GSocketConnectableConstructOnly | 'destination-hostname' | 'destination-port' | 'destination-protocol' | 'password' | 'protocol' | 'uri' | 'username';

/** `GProxyAddressEnumerator` is a wrapper around [class@Gio.SocketAddressEnumerator] which takes the [class@Gio.SocketAddress] instances returned by the [class@Gio.SocketAddressEnumerator] and wraps the… */
export interface GProxyAddressEnumeratorProps extends GSocketAddressEnumeratorProps {
    /** The connectable being enumerated. */
    connectable?: Gio.SocketConnectable;
    /**
     * The default port to use if #GProxyAddressEnumerator:uri does not specify one.
     * @since 2.38
     * @default 0
     */
    'default-port'?: number;
    /**
     * The proxy resolver to use.
     * @since 2.36
     */
    'proxy-resolver'?: Gio.ProxyResolver;
    /**
     * The destination URI.
     * @default NULL
     */
    uri?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GProxyAddressEnumeratorConstructOnly = GSocketAddressEnumeratorConstructOnly | 'connectable' | 'default-port' | 'uri';

/** `GProxyResolver` provides synchronous and asynchronous network proxy resolution. */
export interface GProxyResolverProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GProxyResolverConstructOnly = GObjectConstructOnly;

/** The `GRemoteActionGroup` interface is implemented by [iface@Gio.ActionGroup] instances that either transmit action invocations to other processes or receive action invocations in the local process fr… */
export interface GRemoteActionGroupProps extends GActionGroupProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GRemoteActionGroupConstructOnly = GActionGroupConstructOnly;

/** The object that handles DNS resolution. */
export interface GResolverProps extends GObjectProps {
    /**
     * The timeout applied to all resolver lookups, in milliseconds.
     * @since 2.78
     * @default 0
     */
    timeout?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GResolverConstructOnly = GObjectConstructOnly;

/** `GSeekable` is implemented by streams (implementations of [class@Gio.InputStream] or [class@Gio.OutputStream]) that support seeking. */
export interface GSeekableProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GSeekableConstructOnly = GObjectConstructOnly;

/** The `GSettings` class provides a convenient API for storing and retrieving application settings. */
export interface GSettingsProps extends GObjectProps {
    /** The name of the context that the settings are stored in. */
    backend?: Gio.SettingsBackend;
    /**
     * The path within the backend where the settings are stored.
     * @default NULL
     */
    path?: string;
    /**
     * The name of the schema that describes the types of keys for this [class@Gio.Settings] object.
     * @default NULL
     * @deprecated since 2.32: Use the [property@Gio.Settings:schema-id] property instead.
     */
    schema?: string;
    /**
     * The name of the schema that describes the types of keys for this [class@Gio.Settings] object.
     * @default NULL
     */
    'schema-id'?: string;
    /** The [struct@Gio.SettingsSchema] describing the types of keys for this [class@Gio.Settings] object. */
    'settings-schema'?: Gio.SettingsSchema;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GSettingsConstructOnly = GObjectConstructOnly | 'backend' | 'path' | 'schema' | 'schema-id' | 'settings-schema';

/** A `GSimpleAction` is the obvious simple implementation of the [iface@Gio.Action] interface. */
export interface GSimpleActionProps extends GObjectProps, GActionProps {
    /**
     * If @action is currently enabled.
     * @since 2.28
     * @default TRUE
     */
    enabled?: boolean;
    /**
     * The name of the action.
     * @since 2.28
     * @default NULL
     */
    name?: string;
    /**
     * The type of the parameter that must be given when activating the action.
     * @since 2.28
     */
    'parameter-type'?: GLib.VariantType;
    /**
     * The state of the action, or %NULL if the action is stateless.
     * @since 2.28
     */
    state?: GLib.Variant;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GSimpleActionConstructOnly = GObjectConstructOnly | GActionConstructOnly | 'name' | 'parameter-type';

/** `GSimpleActionGroup` is a hash table filled with [iface@Gio.Action] objects, implementing the [iface@Gio.ActionGroup] and [iface@Gio.ActionMap] interfaces. */
export interface GSimpleActionGroupProps extends GObjectProps, GActionGroupProps, GActionMapProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GSimpleActionGroupConstructOnly = GObjectConstructOnly | GActionGroupConstructOnly | GActionMapConstructOnly;

/** As of GLib 2.46, `GSimpleAsyncResult` is deprecated in favor of [class@Gio.Task], which provides a simpler API. */
export interface GSimpleAsyncResultProps extends GObjectProps, GAsyncResultProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GSimpleAsyncResultConstructOnly = GObjectConstructOnly | GAsyncResultConstructOnly;

/** `GSimpleIOStream` creates a [class@Gio.IOStream] from an arbitrary [class@Gio.InputStream] and [class@Gio.OutputStream]. */
export interface GSimpleIOStreamProps extends GIOStreamProps {
    /**
     * The [class@Gio.InputStream] to read from.
     * @since 2.44
     */
    'input-stream'?: Gio.InputStream;
    /**
     * The [class@Gio.OutputStream] to write to.
     * @since 2.44
     */
    'output-stream'?: Gio.OutputStream;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GSimpleIOStreamConstructOnly = GIOStreamConstructOnly | 'input-stream' | 'output-stream';

/** `GSimplePermission` is a trivial implementation of [class@Gio.Permission] that represents a permission that is either always or never allowed. */
export interface GSimplePermissionProps extends GPermissionProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GSimplePermissionConstructOnly = GPermissionConstructOnly;

/** `GSimpleProxyResolver` is a simple [iface@Gio.ProxyResolver] implementation that handles a single default proxy, multiple URI-scheme-specific proxies, and a list of hosts that proxies should not be u… */
export interface GSimpleProxyResolverProps extends GObjectProps, GProxyResolverProps {
    /**
     * The default proxy URI that will be used for any URI that doesn't match #GSimpleProxyResolver:ignore-hosts, and doesn't match any of the schemes set with g_simple_proxy_resolver_set_uri_proxy().
     * @default NULL
     */
    'default-proxy'?: string;
    /** A list of hostnames and IP addresses that the resolver should allow direct connections to. */
    'ignore-hosts'?: string[];
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GSimpleProxyResolverConstructOnly = GObjectConstructOnly | GProxyResolverConstructOnly;

/** A `GSocket` is a low-level networking primitive. */
export interface GSocketProps extends GObjectProps, GDatagramBasedProps, GInitableProps {
    /**
     * Whether I/O on this socket is blocking.
     * @since 2.22
     * @default TRUE
     */
    blocking?: boolean;
    /**
     * Whether the socket should allow sending to broadcast addresses.
     * @since 2.32
     * @default FALSE
     */
    broadcast?: boolean;
    /**
     * The socket’s address family.
     * @since 2.22
     * @default G_SOCKET_FAMILY_INVALID
     */
    family?: GSocketFamilyNick | Gio.SocketFamily;
    /**
     * The socket’s file descriptor.
     * @since 2.22
     * @default -1
     */
    fd?: number;
    /**
     * Whether to keep the connection alive by sending periodic pings.
     * @since 2.22
     * @default FALSE
     */
    keepalive?: boolean;
    /**
     * The number of outstanding connections in the listen queue.
     * @since 2.22
     * @default 10
     */
    'listen-backlog'?: number;
    /**
     * Whether outgoing multicast packets loop back to the local host.
     * @since 2.32
     * @default TRUE
     */
    'multicast-loopback'?: boolean;
    /**
     * Time-to-live out outgoing multicast packets
     * @since 2.32
     * @default 1
     */
    'multicast-ttl'?: number;
    /**
     * The ID of the protocol to use, or `-1` for unknown.
     * @since 2.22
     * @default G_SOCKET_PROTOCOL_UNKNOWN
     */
    protocol?: GSocketProtocolNick | Gio.SocketProtocol;
    /**
     * The timeout in seconds on socket I/O
     * @since 2.26
     * @default 0
     */
    timeout?: number;
    /**
     * Time-to-live for outgoing unicast packets
     * @since 2.32
     * @default 0
     */
    ttl?: number;
    /**
     * The socket’s type.
     * @since 2.22
     * @default G_SOCKET_TYPE_STREAM
     */
    type?: GSocketTypeNick | Gio.SocketType;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GSocketConstructOnly = GObjectConstructOnly | GDatagramBasedConstructOnly | GInitableConstructOnly | 'family' | 'fd' | 'protocol' | 'type';

/** `GSocketAddress` is the equivalent of [`struct sockaddr`](man:sockaddr(3type)) and its subtypes in the BSD sockets API. */
export interface GSocketAddressProps extends GObjectProps, GSocketConnectableProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GSocketAddressConstructOnly = GObjectConstructOnly | GSocketConnectableConstructOnly;

/** `GSocketAddressEnumerator` is an enumerator type for [class@Gio.SocketAddress] instances. */
export interface GSocketAddressEnumeratorProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GSocketAddressEnumeratorConstructOnly = GObjectConstructOnly;

/** `GSocketClient` is a lightweight high-level utility class for connecting to a network host using a connection oriented socket type. */
export interface GSocketClientProps extends GObjectProps {
    /**
     * Enable proxy support.
     * @since 2.22
     * @default TRUE
     */
    'enable-proxy'?: boolean;
    /**
     * The address family to use for socket construction.
     * @since 2.22
     * @default G_SOCKET_FAMILY_INVALID
     */
    family?: GSocketFamilyNick | Gio.SocketFamily;
    /**
     * The local address constructed sockets will be bound to.
     * @since 2.22
     */
    'local-address'?: Gio.SocketAddress | null;
    /**
     * The protocol to use for socket construction, or `0` for default.
     * @since 2.22
     * @default G_SOCKET_PROTOCOL_DEFAULT
     */
    protocol?: GSocketProtocolNick | Gio.SocketProtocol;
    /**
     * The proxy resolver to use
     * @since 2.36
     */
    'proxy-resolver'?: Gio.ProxyResolver;
    /**
     * The I/O timeout for sockets, in seconds, or `0` for none.
     * @since 2.22
     * @default 0
     */
    timeout?: number;
    /**
     * Whether to create TLS connections.
     * @since 2.22
     * @default FALSE
     */
    tls?: boolean;
    /**
     * The TLS validation flags used when creating TLS connections.
     * @default G_TLS_CERTIFICATE_UNKNOWN_CA | G_TLS_CERTIFICATE_BAD_IDENTITY | G_TLS_CERTIFICATE_NOT_ACTIVATED | G_TLS_CERTIFICATE_EXPIRED | G_TLS_CERTIFICATE_REVOKED | G_TLS_CERTIFICATE_INSECURE | G_TLS_CERTIFICATE_GENERIC_ERROR
     * @deprecated since 2.72: Do not attempt to ignore validation errors.
     */
    'tls-validation-flags'?: number;
    /**
     * The type to use for socket construction.
     * @since 2.22
     * @default G_SOCKET_TYPE_STREAM
     */
    type?: GSocketTypeNick | Gio.SocketType;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GSocketClientConstructOnly = GObjectConstructOnly;

/** Objects that describe one or more potential socket endpoints implement `GSocketConnectable`. */
export interface GSocketConnectableProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GSocketConnectableConstructOnly = GObjectConstructOnly;

/** `GSocketConnection` is a [class@Gio.IOStream] for a connected socket. */
export interface GSocketConnectionProps extends GIOStreamProps {
    /**
     * The underlying [class@Gio.Socket].
     * @since 2.22
     */
    socket?: Gio.Socket;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GSocketConnectionConstructOnly = GIOStreamConstructOnly | 'socket';

/** A `GSocketControlMessage` is a special-purpose utility message that can be sent to or received from a [class@Gio.Socket]. */
export interface GSocketControlMessageProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GSocketControlMessageConstructOnly = GObjectConstructOnly;

/** A `GSocketListener` is an object that keeps track of a set of server sockets and helps you accept sockets from any of the socket, either sync or async. */
export interface GSocketListenerProps extends GObjectProps {
    /**
     * The number of outstanding connections in the listen queue.
     * @since 2.22
     * @default 10
     */
    'listen-backlog'?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GSocketListenerConstructOnly = GObjectConstructOnly;

/** A `GSocketService` is an object that represents a service that is provided to the network or over local sockets. */
export interface GSocketServiceProps extends GSocketListenerProps {
    /**
     * Whether the service is currently accepting connections.
     * @since 2.46
     * @default TRUE
     */
    active?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GSocketServiceConstructOnly = GSocketListenerConstructOnly;

/** `GSubprocess` allows the creation of and interaction with child processes. */
export interface GSubprocessProps extends GObjectProps, GInitableProps {
    /**
     * Argument vector.
     * @since 2.40
     */
    argv?: string[];
    /**
     * Subprocess flags.
     * @since 2.40
     * @default G_SUBPROCESS_FLAGS_NONE
     */
    flags?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GSubprocessConstructOnly = GObjectConstructOnly | GInitableConstructOnly | 'argv' | 'flags';

/** This class contains a set of options for launching child processes, such as where its standard input and output will be directed, the argument list, the environment, and more. */
export interface GSubprocessLauncherProps extends GObjectProps {
    /**
     * [flags@Gio.SubprocessFlags] for launched processes.
     * @since 2.40
     * @default G_SUBPROCESS_FLAGS_NONE
     */
    flags?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GSubprocessLauncherConstructOnly = GObjectConstructOnly | 'flags';

/** A `GTask` represents and manages a cancellable ‘task’. */
export interface GTaskProps extends GObjectProps, GAsyncResultProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GTaskConstructOnly = GObjectConstructOnly | GAsyncResultConstructOnly;

/** This is the subclass of [class@Gio.SocketConnection] that is created for TCP/IP sockets. */
export interface GTcpConnectionProps extends GSocketConnectionProps {
    /**
     * Whether [method@Gio.IOStream.close] does a graceful disconnect.
     * @since 2.22
     * @default FALSE
     */
    'graceful-disconnect'?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GTcpConnectionConstructOnly = GSocketConnectionConstructOnly;

/** A `GTcpWrapperConnection` can be used to wrap a [class@Gio.IOStream] that is based on a [class@Gio.Socket], but which is not actually a [class@Gio.SocketConnection]. */
export interface GTcpWrapperConnectionProps extends GTcpConnectionProps {
    /**
     * The wrapped [class@Gio.IOStream].
     * @since 2.28
     */
    'base-io-stream'?: Gio.IOStream;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GTcpWrapperConnectionConstructOnly = GTcpConnectionConstructOnly | 'base-io-stream';

/** A helper class for testing code which uses D-Bus without touching the user’s session bus. */
export interface GTestDBusProps extends GObjectProps {
    /**
     * #GTestDBusFlags specifying the behaviour of the D-Bus session.
     * @since 2.34
     * @default G_TEST_DBUS_NONE
     */
    flags?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GTestDBusConstructOnly = GObjectConstructOnly | 'flags';

/** `GThemedIcon` is an implementation of [iface@Gio.Icon] that supports icon themes. */
export interface GThemedIconProps extends GObjectProps, GIconProps {
    /**
     * The icon name.
     * @default NULL
     */
    name?: string;
    /** A %NULL-terminated array of icon names. */
    names?: string[];
    /**
     * Whether to use the default fallbacks found by shortening the icon name at '-' characters.
     * @default FALSE
     */
    'use-default-fallbacks'?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GThemedIconConstructOnly = GObjectConstructOnly | GIconConstructOnly | 'name' | 'names' | 'use-default-fallbacks';

/** #GThreadedResolver is an implementation of #GResolver which calls the libc lookup functions in threads to allow them to run asynchronously. */
export interface GThreadedResolverProps extends GResolverProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GThreadedResolverConstructOnly = GResolverConstructOnly;

/** A `GThreadedSocketService` is a simple subclass of [class@Gio.SocketService] that handles incoming connections by creating a worker thread and dispatching the connection to it by emitting the [signal… */
export interface GThreadedSocketServiceProps extends GSocketServiceProps {
    /**
     * The maximum number of threads handling clients for this service.
     * @since 2.22
     * @default 10
     */
    'max-threads'?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GThreadedSocketServiceConstructOnly = GSocketServiceConstructOnly | 'max-threads';

/** `GTlsInteraction` provides a mechanism for the TLS connection and database code to interact with the user. */
export interface GTlsInteractionProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GTlsInteractionConstructOnly = GObjectConstructOnly;

/** An abstract interface representing a password used in TLS. */
export interface GTlsPasswordProps extends GObjectProps {
    /**
     * Description of what the password is for.
     * @since 2.30
     * @default NULL
     */
    description?: string;
    /**
     * Flags about the password.
     * @since 2.30
     * @default G_TLS_PASSWORD_NONE
     */
    flags?: number;
    /**
     * Warning about the password.
     * @since 2.30
     * @default NULL
     */
    warning?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GTlsPasswordConstructOnly = GObjectConstructOnly;

/** This is the subclass of [class@Gio.SocketConnection] that is created for UNIX domain sockets. */
export interface GUnixConnectionProps extends GSocketConnectionProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GUnixConnectionConstructOnly = GSocketConnectionConstructOnly;

/** This [class@Gio.SocketControlMessage] contains a [class@Gio.Credentials] instance. */
export interface GUnixCredentialsMessageProps extends GSocketControlMessageProps {
    /**
     * The credentials stored in the message.
     * @since 2.26
     */
    credentials?: Gio.Credentials;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GUnixCredentialsMessageConstructOnly = GSocketControlMessageConstructOnly | 'credentials';

/** A `GUnixFDList` contains a list of file descriptors. */
export interface GUnixFDListProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GUnixFDListConstructOnly = GObjectConstructOnly;

/** Support for UNIX-domain (also known as local) sockets, corresponding to `struct sockaddr_un`. */
export interface GUnixSocketAddressProps extends GSocketAddressProps, GSocketConnectableProps {
    /**
     * Whether or not this is an abstract address
     * @default FALSE
     * @deprecated Use #GUnixSocketAddress:address-type, which distinguishes between zero-padded and non-zero-padded abstract addresses.
     */
    abstract?: boolean;
    /**
     * The type of Unix socket address.
     * @since 2.22
     * @default G_UNIX_SOCKET_ADDRESS_PATH
     */
    'address-type'?: GUnixSocketAddressTypeNick | Gio.UnixSocketAddressType;
    /**
     * Unix socket path.
     * @since 2.22
     * @default NULL
     */
    path?: string;
    /**
     * Unix socket path, as a byte array.
     * @since 2.22
     */
    'path-as-array'?: Uint8Array[];
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GUnixSocketAddressConstructOnly = GSocketAddressConstructOnly | GSocketConnectableConstructOnly | 'abstract' | 'address-type' | 'path' | 'path-as-array';

/** Entry point for using GIO functionality. */
export interface GVfsProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GVfsConstructOnly = GObjectConstructOnly;

/** `GVolumeMonitor` is for listing the user interesting devices and volumes on the computer. */
export interface GVolumeMonitorProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GVolumeMonitorConstructOnly = GObjectConstructOnly;

/** `GZlibCompressor` is an implementation of [iface@Gio.Converter] that compresses data using zlib. */
export interface GZlibCompressorProps extends GObjectProps, GConverterProps {
    /**
     * A [class@Gio.FileInfo] containing file information to put into the gzip header.
     * @since 2.26
     */
    'file-info'?: Gio.FileInfo | null;
    /**
     * The format of the compressed data.
     * @since 2.24
     * @default G_ZLIB_COMPRESSOR_FORMAT_ZLIB
     */
    format?: GZlibCompressorFormatNick | Gio.ZlibCompressorFormat;
    /**
     * The level of compression from `0` (no compression) to `9` (most compression).
     * @since 2.24
     * @default -1
     */
    level?: number;
    /**
     * The OS code of the gzip header.
     * @since 2.86
     * @default -1
     */
    os?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GZlibCompressorConstructOnly = GObjectConstructOnly | GConverterConstructOnly | 'format' | 'level';

/** `GZlibDecompressor` is an implementation of [iface@Gio.Converter] that decompresses data compressed with zlib. */
export interface GZlibDecompressorProps extends GObjectProps, GConverterProps {
    /**
     * The format of the compressed data.
     * @since 2.24
     * @default G_ZLIB_COMPRESSOR_FORMAT_ZLIB
     */
    format?: GZlibCompressorFormatNick | Gio.ZlibCompressorFormat;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GZlibDecompressorConstructOnly = GObjectConstructOnly | GConverterConstructOnly | 'format';

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
