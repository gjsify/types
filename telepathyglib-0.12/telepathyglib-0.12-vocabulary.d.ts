/**
 * The GIR-derived widget VOCABULARY for TelepathyGLib-0.12.
 *
 * GENERATED — do not edit. Provenance: TelepathyGLib-0.12 — prop(s) no TypeScript value satisfies: TelepathyGLib.AddDispatchOperationContext.channels TelepathyGLib.ChannelDispatchOperation.channels TelepathyGLib.HandleChannelsContext.channels TelepathyGLib.HandleChannelsContext.requests-satisfied TelepathyGLib.ObserveChannelsContext.channels TelepathyGLib.ObserveChannelsContext.requests TelepathyGLib.SimpleApprover.callback TelepathyGLib.SimpleApprover.destroy TelepathyGLib.SimpleApprover.user-data TelepathyGLib.SimpleHandler.callback TelepathyGLib.SimpleHandler.destroy TelepathyGLib.SimpleHandler.user-data TelepathyGLib.SimpleObserver.callback TelepathyGLib.SimpleObserver.destroy TelepathyGLib.SimpleObserver.user-data
 *
 * 44 instantiable GTypes (of which 0 concrete widgets), 46 declarations, 0 enum nick unions, 0 slot candidates.
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
import type Gio from '@girs/gio-2.0';
import type TelepathyGLib from './telepathyglib-0.12.js';
import type { GAsyncInitableConstructOnly, GAsyncInitableProps } from '@girs/gio-2.0/vocabulary';
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

/** The Telepathy Account Manager stores the user's configured real-time communication accounts. */
export interface TpAccountProps extends TpProxyProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type TpAccountConstructOnly = TpProxyConstructOnly;

/** Data structure representing a #TpAccountChannelRequest object. */
export interface TpAccountChannelRequestProps extends GObjectProps {
    /**
     * The #TpAccount used to request the channel.
     * @since 0.11.12
     */
    account?: TelepathyGLib.Account;
    /**
     * The desired D-Bus properties for the channel.
     * @since 0.19.10
     */
    'request-vardict'?: GLib.Variant;
    /**
     * The user action time that will be passed to the channel dispatcher when requesting the channel.
     * @since 0.11.12
     * @default 0
     */
    'user-action-time'?: bigint | number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type TpAccountChannelRequestConstructOnly = GObjectConstructOnly | 'account' | 'request-vardict' | 'user-action-time';

/** The Telepathy Account Manager stores real-time communication accounts and their configuration, places accounts online on request, and manipulates accounts' presence, nicknames and avatars. */
export interface TpAccountManagerProps extends TpProxyProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type TpAccountManagerConstructOnly = TpProxyConstructOnly;

/** An object for representing a currently non-existent account which is to be created on a #TpAccountManager. */
export interface TpAccountRequestProps extends GObjectProps {
    /**
     * The #TpAccountManager to create the account on.
     * @since 0.19.1
     */
    'account-manager'?: TelepathyGLib.AccountManager;
    /**
     * The account's connection manager name.
     * @since 0.19.1
     * @default NULL
     */
    'connection-manager'?: string;
    /**
     * The account's display name.
     * @since 0.19.1
     * @default NULL
     */
    'display-name'?: string;
    /**
     * The account's machine-readable protocol name, such as "jabber", "msn" or "local-xmpp".
     * @since 0.19.1
     * @default NULL
     */
    protocol?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type TpAccountRequestConstructOnly = GObjectConstructOnly | 'account-manager' | 'connection-manager' | 'display-name' | 'protocol';

/** Data structure representing the context of a Approver.AddDispatchOperation() call. */
export interface TpAddDispatchOperationContextProps extends GObjectProps {
    /**
     * A #TpAccount object representing the Account of the DispatchOperation that has been passed to AddDispatchOperation.
     * @since 0.11.5
     */
    account?: TelepathyGLib.Account;
    /**
     * A #GPtrArray containing #TpChannel objects representing the channels that have been passed to AddDispatchOperation.
     * @since 0.11.5
     */
    channels?: never[];
    /**
     * A #TpConnection object representing the Connection of the DispatchOperation that has been passed to AddDispatchOperation.
     * @since 0.11.5
     */
    connection?: TelepathyGLib.Connection;
    /**
     * A #TpChannelDispatchOperation object representing the ChannelDispatchOperation that has been passed to AddDispatchOperation.
     * @since 0.11.5
     */
    'dispatch-operation'?: TelepathyGLib.ChannelDispatchOperation;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type TpAddDispatchOperationContextConstructOnly = GObjectConstructOnly | 'account' | 'channels' | 'connection' | 'dispatch-operation';

/** Data structure representing a #TpAutomaticClientFactory */
export interface TpAutomaticClientFactoryProps extends TpSimpleClientFactoryProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type TpAutomaticClientFactoryConstructOnly = TpSimpleClientFactoryConstructOnly;

/** Data structure representing a #TpAutomaticProxyFactory */
export interface TpAutomaticProxyFactoryProps extends GObjectProps, TpClientChannelFactoryProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type TpAutomaticProxyFactoryConstructOnly = GObjectConstructOnly | TpClientChannelFactoryConstructOnly;

/** Data structure representing a generic #TpSvcClient implementation. */
export interface TpBaseClientProps extends GObjectProps {
    /**
     * Account manager for this base client, used to look up or create #TpAccount objects.
     * @since 0.11.14
     * @deprecated New code should not use this property, it may be %NULL in the case @self was constructed with a #TpSimpleClientFactory.
     */
    'account-manager'?: TelepathyGLib.AccountManager;
    /**
     * The object implementing the #TpClientChannelFactoryInterface interface that will be used to create channel proxies.
     * @since 0.13.2
     * @deprecated since 0.15.5.
     */
    'channel-factory'?: GObject.Object;
    /**
     * #TpDBusDaemon object encapsulating this object's connection to D-Bus.
     * @since 0.11.5
     */
    'dbus-daemon'?: TelepathyGLib.DBusDaemon;
    /**
     * Factory for this base client, used to look up or create #TpAccount objects.
     * @since 0.15.5
     */
    factory?: TelepathyGLib.SimpleClientFactory;
    /**
     * The name of the client.
     * @since 0.11.5
     * @default NULL
     */
    name?: string;
    /**
     * If %TRUE, tp_base_client_register() will append an unique token to the service bus name and object path to ensure they are unique.
     * @since 0.11.5
     * @default FALSE
     */
    'uniquify-name'?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type TpBaseClientConstructOnly = GObjectConstructOnly | 'account-manager' | 'channel-factory' | 'dbus-daemon' | 'factory' | 'name' | 'uniquify-name';

/** Data structure representing a #TpBasicProxyFactory */
export interface TpBasicProxyFactoryProps extends GObjectProps, TpClientChannelFactoryProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type TpBasicProxyFactoryConstructOnly = GObjectConstructOnly | TpClientChannelFactoryConstructOnly;

/** Data structure representing a #TpCallChannel. */
export interface TpCallChannelProps extends TpChannelProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type TpCallChannelConstructOnly = TpChannelConstructOnly;

/** Data structure representing a #TpCallContent. */
export interface TpCallContentProps extends TpProxyProps {
    /**
     * The parent #TpCallChannel of the content.
     * @since 0.17.6
     */
    channel?: TelepathyGLib.CallChannel;
    /**
     * The #TpConnection of the call.
     * @since 0.17.5
     */
    connection?: TelepathyGLib.Connection;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type TpCallContentConstructOnly = TpProxyConstructOnly | 'channel' | 'connection';

/** Data structure representing a #TpCallStream. */
export interface TpCallStreamProps extends TpProxyProps {
    /**
     * The #TpConnection of the call.
     * @since 0.17.5
     */
    connection?: TelepathyGLib.Connection;
    /**
     * The Content that this streams belongs to
     * @since 0.17.6
     */
    content?: TelepathyGLib.CallContent;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type TpCallStreamConstructOnly = TpProxyConstructOnly | 'connection' | 'content';

/** An object representing capabilities a #TpConnection or #TpContact supports. */
export interface TpCapabilitiesProps extends GObjectProps {
    /**
     * Whether this object accurately describes the capabilities of a particular contact, or if it's only a guess based on the capabilities of the underlying connection.
     * @default FALSE
     */
    'contact-specific'?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type TpCapabilitiesConstructOnly = GObjectConstructOnly | 'contact-specific';

/** A proxy object for a Telepathy channel. */
export interface TpChannelProps extends TpProxyProps {
    /** The #TpConnection to which this #TpChannel belongs. */
    connection?: TelepathyGLib.Connection;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type TpChannelConstructOnly = TpProxyConstructOnly | 'connection';

/** One of the channel dispatcher's functions is to offer incoming channels to Approver clients for approval. */
export interface TpChannelDispatchOperationProps extends TpProxyProps {
    /**
     * The #TpAccount with which the connection and channels are associated.
     * @since 0.11.5
     */
    account?: TelepathyGLib.Account;
    /**
     * A #GPtrArray containing the #TpChannel to be dispatched.
     * @since 0.11.5
     */
    channels?: never[];
    /**
     * The #TpConnection with which the channels are associated.
     * @since 0.11.5
     */
    connection?: TelepathyGLib.Connection;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type TpChannelDispatchOperationConstructOnly = TpProxyConstructOnly | 'account' | 'channels' | 'connection';

/** The Channel Dispatcher's main D-Bus API is used to request channels, which is done by calling tp_cli_channel_dispatcher_call_create_channel() or tp_cli_channel_dispatcher_call_ensure_channel() as app… */
export interface TpChannelDispatcherProps extends TpProxyProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type TpChannelDispatcherConstructOnly = TpProxyConstructOnly;

/** Requesting a channel from the channel dispatcher can take some time, so an object is created in the channel dispatcher to represent each request. */
export interface TpChannelRequestProps extends TpProxyProps {
    /**
     * The object implementing the #TpClientChannelFactoryInterface interface that will be used to create channel proxies when the #TpChannelRequest::succeeded-with-channel signal is fired.
     * @since 0.13.14
     * @deprecated since 0.15.5.
     */
    'channel-factory'?: GObject.Object;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type TpChannelRequestConstructOnly = TpProxyConstructOnly;

/** Opaque typedef representing a #GObject that implements the %TP_TYPE_CLIENT_CHANNEL_FACTORY interface. */
export interface TpClientChannelFactoryProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type TpClientChannelFactoryConstructOnly = GObjectConstructOnly;

/** Opaque structure representing a message in the Telepathy messages interface (client side). */
export interface TpClientMessageProps extends TpMessageProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type TpClientMessageConstructOnly = TpMessageConstructOnly;

/** A proxy object for a Telepathy connection. */
export interface TpConnectionProps extends TpProxyProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type TpConnectionConstructOnly = TpProxyConstructOnly;

/** A proxy object for a Telepathy connection manager. */
export interface TpConnectionManagerProps extends TpProxyProps {
    /**
     * If %TRUE, always introspect the connection manager as it comes online, even if we already have its info from a .manager file.
     * @default FALSE
     */
    'always-introspect'?: boolean;
    /**
     * The absolute path of the .manager file.
     * @default NULL
     */
    'manager-file'?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type TpConnectionManagerConstructOnly = TpProxyConstructOnly;

/** An object representing a contact on a #TpConnection. */
export interface TpContactProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type TpContactConstructOnly = GObjectConstructOnly;

/** An object for Telepathy contact searches. */
export interface TpContactSearchProps extends GObjectProps, GAsyncInitableProps {
    /**
     * This search's account.
     * @since 0.13.11
     */
    account?: TelepathyGLib.Account;
    /**
     * The maximum number of results that the server should return.
     * @since 0.13.11
     * @default 0
     */
    limit?: number;
    /**
     * The search server.
     * @since 0.13.11
     * @default NULL
     */
    server?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type TpContactSearchConstructOnly = GObjectConstructOnly | GAsyncInitableConstructOnly | 'account' | 'server';

/** An object representing the results of a Telepathy contact search channel. */
export interface TpContactSearchResultProps extends GObjectProps {
    /** @default NULL */
    identifier?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type TpContactSearchResultConstructOnly = GObjectConstructOnly | 'identifier';

/** A subclass of #TpProxy that represents the D-Bus daemon. */
export interface TpDBusDaemonProps extends TpProxyProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type TpDBusDaemonConstructOnly = TpProxyConstructOnly;

/** Data structure representing a #TpDBusTubeChannel. */
export interface TpDBusTubeChannelProps extends TpChannelProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type TpDBusTubeChannelConstructOnly = TpChannelConstructOnly;

/** A proxy object for the debug interface of a Telepathy component. */
export interface TpDebugClientProps extends TpProxyProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type TpDebugClientConstructOnly = TpProxyConstructOnly;

/** Data structure representing a #TpDebugMessage. */
export interface TpDebugMessageProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type TpDebugMessageConstructOnly = GObjectConstructOnly;

/** Data structure representing a #TpFileTransferChannel. */
export interface TpFileTransferChannelProps extends TpChannelProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type TpFileTransferChannelConstructOnly = TpChannelConstructOnly;

/** Data structure representing the context of a Handler.HandleChannels() call. */
export interface TpHandleChannelsContextProps extends GObjectProps {
    /**
     * A #TpAccount object representing the Account of the DispatchOperation that has been passed to HandleChannels.
     * @since 0.11.6
     */
    account?: TelepathyGLib.Account;
    /**
     * A #GPtrArray containing #TpChannel objects representing the channels that have been passed to HandleChannels.
     * @since 0.11.6
     */
    channels?: never[];
    /**
     * A #TpConnection object representing the Connection of the DispatchOperation that has been passed to HandleChannels.
     * @since 0.11.6
     */
    connection?: TelepathyGLib.Connection;
    /**
     * A #GPtrArray containing #TpChannelRequest objects representing the requests that have been passed to HandleChannels.
     * @since 0.11.6
     */
    'requests-satisfied'?: never[];
    /**
     * The time at which user action occurred, or one of the special values %TP_USER_ACTION_TIME_NOT_USER_ACTION or %TP_USER_ACTION_TIME_CURRENT_TIME (see #TpAccountChannelRequest:user-action-time for detai…
     * @since 0.11.6
     * @default 0
     */
    'user-action-time'?: bigint | number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type TpHandleChannelsContextConstructOnly = GObjectConstructOnly | 'account' | 'channels' | 'connection' | 'requests-satisfied' | 'user-action-time';

/** Opaque structure representing a message in the Telepathy messages interface (an array of at least one mapping from string to variant, where the first mapping contains message headers and subsequent m… */
export interface TpMessageProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type TpMessageConstructOnly = GObjectConstructOnly;

/** Data structure representing the context of a Observer.ObserveChannels() call. */
export interface TpObserveChannelsContextProps extends GObjectProps {
    /**
     * A #TpAccount object representing the Account that has been passed to ObserveChannels.
     * @since 0.11.5
     */
    account?: TelepathyGLib.Account;
    /**
     * A #GPtrArray containing #TpChannel objects representing the channels that have been passed to ObserveChannels.
     * @since 0.11.5
     */
    channels?: never[];
    /**
     * A #TpConnection object representing the Connection that has been passed to ObserveChannels.
     * @since 0.11.5
     */
    connection?: TelepathyGLib.Connection;
    /**
     * A #TpChannelDispatchOperation object representing the ChannelDispatchOperation that has been passed to ObserveChannels, or %NULL if none has been passed.
     * @since 0.11.5
     */
    'dispatch-operation'?: TelepathyGLib.ChannelDispatchOperation;
    /**
     * A #GPtrArray containing #TpChannelRequest objects representing the requests that have been passed to ObserveChannels.
     * @since 0.11.5
     */
    requests?: never[];
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type TpObserveChannelsContextConstructOnly = GObjectConstructOnly | 'account' | 'channels' | 'connection' | 'dispatch-operation' | 'requests';

/** A base class for connection managers' protocols. */
export interface TpProtocolProps extends TpProxyProps {
    /**
     * The name of the connection manager this protocol is on.
     * @since 0.19.1
     * @default NULL
     */
    'cm-name'?: string;
    /**
     * The machine-readable name of the protocol, taken from the Telepathy D-Bus Interface Specification, such as "jabber" or "local-xmpp".
     * @since 0.11.11
     * @default NULL
     */
    'protocol-name'?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type TpProtocolConstructOnly = TpProxyConstructOnly | 'cm-name' | 'protocol-name';

/** Structure representing a Telepathy client-side proxy. */
export interface TpProxyProps extends GObjectProps {
    /**
     * The D-Bus bus name for this object.
     * @default NULL
     */
    'bus-name'?: string;
    /** The D-Bus daemon for this object (this object itself, if it is a TpDBusDaemon). */
    'dbus-daemon'?: TelepathyGLib.DBusDaemon;
    /** The #TpSimpleClientFactory used to create this proxy, or %NULL if this proxy was not created through a factory. */
    factory?: TelepathyGLib.SimpleClientFactory;
    /**
     * The D-Bus object path for this object.
     * @default NULL
     */
    'object-path'?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type TpProxyConstructOnly = GObjectConstructOnly | 'bus-name' | 'dbus-daemon' | 'factory' | 'object-path';

/** Data structure representing a #TpRoomInfo. */
export interface TpRoomInfoProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type TpRoomInfoConstructOnly = GObjectConstructOnly;

/** Data structure representing a #TpRoomList. */
export interface TpRoomListProps extends GObjectProps, GAsyncInitableProps {
    /**
     * The #TpAccount to use for the room listing.
     * @since 0.19.0
     */
    account?: TelepathyGLib.Account;
    /**
     * The DNS name of the server whose rooms are listed by this channel, or %NULL.
     * @since 0.19.0
     * @default NULL
     */
    server?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type TpRoomListConstructOnly = GObjectConstructOnly | GAsyncInitableConstructOnly | 'account' | 'server';

/** Opaque structure representing a received message using the Telepathy messages interface */
export interface TpSignalledMessageProps extends TpMessageProps {
    /**
     * A #TpContact representing the sender of the message, if known, or %NULL otherwise.
     * @since 0.13.9
     */
    sender?: TelepathyGLib.Contact;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type TpSignalledMessageConstructOnly = TpMessageConstructOnly | 'sender';

/** Data structure representing a simple Approver implementation. */
export interface TpSimpleApproverProps extends TpBaseClientProps {
    /**
     * The #TpSimpleApproverAddDispatchOperationImpl callback implementing the AddDispatchOperation D-Bus method.
     * @since 0.11.5
     */
    callback?: never;
    /**
     * The #GDestroyNotify function called to free #TpSimpleApprover:user-data when the #TpSimpleApprover is destroyed.
     * @since 0.11.5
     */
    destroy?: never;
    /**
     * The user-data pointer passed to #TpSimpleApprover:callback.
     * @since 0.11.5
     */
    'user-data'?: never;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type TpSimpleApproverConstructOnly = TpBaseClientConstructOnly | 'callback' | 'destroy' | 'user-data';

/** Data structure representing a #TpSimpleClientFactory */
export interface TpSimpleClientFactoryProps extends GObjectProps {
    /** The D-Bus daemon for this object. */
    'dbus-daemon'?: TelepathyGLib.DBusDaemon;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type TpSimpleClientFactoryConstructOnly = GObjectConstructOnly | 'dbus-daemon';

/** Data structure representing a simple Handler implementation. */
export interface TpSimpleHandlerProps extends TpBaseClientProps {
    /**
     * The value of the Handler.BypassApproval D-Bus property.
     * @since 0.11.6
     * @default FALSE
     */
    'bypass-approval'?: boolean;
    /**
     * The #TpSimpleHandlerHandleChannelsImpl callback implementing the HandleChannels D-Bus method.
     * @since 0.11.6
     */
    callback?: never;
    /**
     * The #GDestroyNotify function called to free #TpSimpleHandler:user-data when the #TpSimpleHandler is destroyed.
     * @since 0.11.6
     */
    destroy?: never;
    /**
     * If %TRUE, the Handler will implement the Requests interface
     * @since 0.11.6
     * @default FALSE
     */
    requests?: boolean;
    /**
     * The user-data pointer passed to #TpSimpleHandler:callback.
     * @since 0.11.6
     */
    'user-data'?: never;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type TpSimpleHandlerConstructOnly = TpBaseClientConstructOnly | 'bypass-approval' | 'callback' | 'destroy' | 'requests' | 'user-data';

/** Data structure representing a simple Observer implementation. */
export interface TpSimpleObserverProps extends TpBaseClientProps {
    /**
     * The TpSimpleObserverObserveChannelsImpl callback implementing the ObserveChannels D-Bus method.
     * @since 0.11.5
     */
    callback?: never;
    /**
     * The #GDestroyNotify function called to free the user-data pointer when the #TpSimpleObserver is destroyed.
     * @since 0.11.5
     */
    destroy?: never;
    /**
     * The value of the Observer.Recover D-Bus property.
     * @since 0.11.5
     * @default FALSE
     */
    recover?: boolean;
    /**
     * The user-data pointer passed to the callback implementing the ObserveChannels D-Bus method.
     * @since 0.11.5
     */
    'user-data'?: never;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type TpSimpleObserverConstructOnly = TpBaseClientConstructOnly | 'callback' | 'destroy' | 'recover' | 'user-data';

/** Data structure representing a #TpStreamTubeChannel. */
export interface TpStreamTubeChannelProps extends TpChannelProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type TpStreamTubeChannelConstructOnly = TpChannelConstructOnly;

/** Data structure representing a connection on a #TpStreamTubeChannel. */
export interface TpStreamTubeConnectionProps extends GObjectProps {
    /**
     * The #TpStreamTubeChannel channel associated with this connection This property can't be %NULL.
     * @since 0.13.2
     */
    channel?: TelepathyGLib.StreamTubeChannel;
    /**
     * The #TpContact with who we are exchanging data through this tube, or %NULL if we can't safely identify the contact.
     * @since 0.13.2
     */
    contact?: TelepathyGLib.Contact;
    /**
     * The #GSocketConnection used to transfer data through this connection.
     * @since 0.13.2
     */
    'socket-connection'?: Gio.SocketConnection;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type TpStreamTubeConnectionConstructOnly = GObjectConstructOnly | 'channel' | 'contact' | 'socket-connection';

/** A #TpProxy subclass representing a server or peer's TLS certificate being presented for acceptance/rejection. */
export interface TpTLSCertificateProps extends TpProxyProps {
    /**
     * A #TpConnection or #TpChannel which owns this TLS certificate.
     * @since 0.19.0
     */
    parent?: TelepathyGLib.Proxy;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type TpTLSCertificateConstructOnly = TpProxyConstructOnly | 'parent';

/** Data structure representing a #TpTLSCertificateRejection. */
export interface TpTLSCertificateRejectionProps extends GObjectProps {
    /**
     * The D-Bus error name of the rejection
     * @since 0.19.0
     * @default NULL
     */
    'dbus-error'?: string;
    /**
     * A #G_VARIANT_TYPE_VARDICT containing the details of the rejection
     * @since 0.19.0
     */
    details?: GLib.Variant;
    /**
     * a #GError (likely to be in the %TP_ERROR domain) indicating the reason of the rejection
     * @since 0.19.0
     */
    error?: GLib.Error;
    /**
     * #TpTLSCertificateRejectReason representing the reason of the rejection
     * @since 0.19.0
     * @default 0
     */
    reason?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type TpTLSCertificateRejectionConstructOnly = GObjectConstructOnly | 'dbus-error' | 'details' | 'error' | 'reason';

/** Data structure representing a #TpTextChannel. */
export interface TpTextChannelProps extends TpChannelProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type TpTextChannelConstructOnly = TpChannelConstructOnly;

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
