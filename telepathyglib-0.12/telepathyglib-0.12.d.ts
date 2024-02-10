/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './telepathyglib-0.12-ambient.d.ts';
import './telepathyglib-0.12-import.d.ts';
/**
 * TelepathyGLib-0.12
 */

import type Gio from '@girs/gio-2.0';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type GModule from '@girs/gmodule-2.0';

export namespace TelepathyGLib {
    /**
     * &lt;![CDATA[         A type for communication access control. These control           policies are used in           CommunicationPolicy.DRAFT           as well as most rich presence interfaces.          New interfaces should use this type, and NOT           Rich_Presence_Access_Control_Type.       ]]&gt;
     *
     * Bitfield/set of flags generated from the Telepathy specification.
     */
    enum AccessControlType {
        /**
         * &lt;![CDATA[           Only allow contacts that are in a certain whitelist.            The associated variant             in Access_Control is a list of             Contact_Handle representing             the whitelist, with signature au.         ]]&gt;
         */
        WHITELIST,
        /**
         * &lt;![CDATA[           Allow contacts in the user's 'publish' list. The associated           variant in Access_Control is ignored.         ]]&gt;
         */
        PUBLISH_LIST,
        /**
         * &lt;![CDATA[           Only allow contacts that are in a certain group.            The associated variant in Access_Control is a             Group_Handle representing the permitted             group.         ]]&gt;
         */
        GROUP,
        /**
         * &lt;![CDATA[           Allow all contacts.  The associated           variant in Access_Control is ignored.         ]]&gt;
         */
        OPEN,
        /**
         * &lt;![CDATA[           Allow all contacts in the user's 'subscribe' or 'publish'           list. The associated variant in Access_Control is           ignored.         ]]&gt;
         */
        SUBSCRIBE_OR_PUBLISH_LIST,
        /**
         * &lt;![CDATA[           Forbid all contacts. The associated variant in           Access_Control is ignored.         ]]&gt;
         */
        CLOSED,
        /**
         * &lt;![CDATA[           The access control rule is too complex to be represented             in the current Telepathy API. The associated variant is             meaningless. Setting this mode is never valid; the             connection manager MUST raise an error if this is attempted.                         XEP-0016 Privacy Lists can easily produce access control             mechanisms that can't be expressed in a simpler API. We             need to be able to at least indicate that fact.                       The associated variant in Access_Control is             ignored.         ]]&gt;
         */
        NOT_UNDERSTOOD,
    }
    /**
     * Describes possible sources of information on connection managers'
     * supported protocols.
     *
     * Since 0.11.5, there is a corresponding #GEnumClass type,
     * %TP_TYPE_CM_INFO_SOURCE.
     */
    enum CMInfoSource {
        /**
         * no information available
         */
        NONE,
        /**
         * information came from a .manager file
         */
        FILE,
        /**
         * information came from the connection manager
         */
        LIVE,
    }
    /**
     * &lt;![CDATA[         The disposition of this content, which defines whether to         automatically start sending data on the streams when         Accept is         called on the channel.       ]]&gt;
     *
     * Bitfield/set of flags generated from the Telepathy specification.
     */
    enum CallContentDisposition {
        /**
         * &lt;![CDATA[           The content has no specific disposition.         ]]&gt;
         */
        NONE,
        /**
         * &lt;![CDATA[           The content was initially part of the call. When           Accept           is called on the channel, all streams of this content with           LocalSendingState           set to Pending_Send will be           moved to Sending as if           SetSending           (True) had been called.         ]]&gt;
         */
        INITIAL,
    }
    /**
     * &lt;![CDATA[         A packetization method that can be used for a content.       ]]&gt;
     *
     * Bitfield/set of flags generated from the Telepathy specification.
     */
    enum CallContentPacketizationType {
        /**
         * &lt;![CDATA[           Real-time Transport Protocol, as documented by RFC 3550.         ]]&gt;
         */
        RTP,
        /**
         * &lt;![CDATA[           Raw media.         ]]&gt;
         */
        RAW,
        /**
         * &lt;![CDATA[           MSN webcam. This is the video-only one-way type which was           used in earlier versions of WLM. Although no longer used,           modern WLM clients still support the MSN webcam protocol.         ]]&gt;
         */
        MSN_WEBCAM,
    }
    /**
     * &lt;![CDATA[         The state of a call, as a whole.          The allowed transitions are:                     Pending_Initiator → Initialising (for outgoing calls,             when Accept is called)           Initialising → Initialised (for outgoing calls, when             the remote client indicates that the user has been notified about             the call. If the network is known not to provide feedback about whether             the remote side is ringing, then the call should immediately be             set to Initialised.           Initialising → Initialised (for incoming calls, when e.g. the             implementation has been initialised far enough that it is sensible             to notify the user about the call (to reduce the probability that             the user will pick up the call and have it immediately fail).             The UI should then alert the user about the call, and call             SetRinging)           Initialised → Accepted (for outgoing calls to a contact,             when the remote contact accepts the call; for incoming calls, when             Accept is called.)           Accepted → Active (when the local user successfully             joins the call/conference, and media is known to be flowing             successfully; also, when temporary connection problems are             resolved (See below)). If the network is known not to provide             feedback about when the call is properly connected, the call             should immediately be set to Active.           Active → Accepted (when there are temporary connection problems             that the CM is aware of and able to recover from)           any state → Ended (when the call is terminated             normally, or when an error occurs that the CM is unable to recover             from)                   Clients MAY consider unknown values from this enum to be an           error - additional values will not be defined after the Call           specification is declared to be stable.       ]]&gt;
     *
     * Bitfield/set of flags generated from the Telepathy specification.
     */
    enum CallState {
        /**
         * &lt;![CDATA[           The call state is not known. This call state MUST NOT appear as a           value of the CallState property, but           MAY be used by client code to represent calls whose state is as yet           unknown.         ]]&gt;
         */
        UNKNOWN,
        /**
         * &lt;![CDATA[           The initiator of the call hasn't accepted the call yet. This state           only makes sense for outgoing calls, where it means that the local           user has not yet sent any signalling messages to the remote user(s),           and will not do so until Accept is           called.         ]]&gt;
         */
        PENDING_INITIATOR,
        /**
         * &lt;![CDATA[           Progress has been made in placing the call, but the           contact has not been made aware of the call yet. This corresponds to SIP's           status code 183 Session Progress, and should be used for the period           where the CM is waiting for the streaming implementation to           initialise (before sending the initial INVITE or equivalent) and when the           outgoing call has reached a gateway or ICE negotiation is pending.           UIs should not produce a dialtone or start ringing if the call is in           this state.         ]]&gt;
         */
        INITIALISING,
        /**
         * &lt;![CDATA[           In the outgoing case: at least one called user has been alerted           about the call (a SIP 180 (Ringing) packet or equivalent has been           received) but none have answered, so the call cannot go to Accepted           (use Ringing to determine which           members have been informed and which haven't, if you care). UIs           SHOULD produce a dialtone for outgoing calls in this state.            In the incoming case, the local user should be informed of the call           as soon as the call reaches this state (and           SetRinging should be called           to inform the CM that this has happened, so that it can relay this           fact to the caller using a SIP 180 (Ringing) packet or equivalent).         ]]&gt;
         */
        INITIALISED,
        /**
         * &lt;![CDATA[           The contact being called has accepted the call, but the call is not           in the Active state (The most common reason for this is that the           streaming implementation hasn't connected yet).         ]]&gt;
         */
        ACCEPTED,
        /**
         * &lt;![CDATA[           The contact being called has accepted the call, and discourse between           at least two parties should now be possible.         ]]&gt;
         */
        ACTIVE,
        /**
         * &lt;![CDATA[           The call has ended, either via normal termination or an error.         ]]&gt;
         */
        ENDED,
    }
    /**
     * &lt;![CDATA[         A simple representation of the reason for a change in the call's         state, which may be used by simple clients, or used as a fallback         when the DBus_Reason member of a Call_State_Reason         struct is not understood.       ]]&gt;
     *
     * Bitfield/set of flags generated from the Telepathy specification.
     */
    enum CallStateChangeReason {
        /**
         * &lt;![CDATA[           We just don't know. Unknown values of this enum SHOULD also be           treated like this.         ]]&gt;
         */
        UNKNOWN,
        /**
         * &lt;![CDATA[           Situation normal. Progress has been made in the setup/teardown of           the call (and it didn't require any user interaction).         ]]&gt;
         */
        PROGRESS_MADE,
        /**
         * &lt;![CDATA[           The change was requested by the contact indicated by the Actor             member of a Call_State_Reason struct.            The DBus_Reason SHOULD be the empty string if the call             was terminated normally, but MAY be a non-empty error name             to indicate error-like call termination reasons (kicked from             a conference by a moderator, etc.).         ]]&gt;
         */
        USER_REQUESTED,
        /**
         * &lt;![CDATA[           The call was forwarded. If known, the handle of the           contact the call was forwarded to will be indicated by the           "forwarded-to" member of a           CallStateDetails dictionnary           in the CallStateChanged           signal.         ]]&gt;
         */
        FORWARDED,
        /**
         * &lt;![CDATA[           The CallState changed from             Initialised or             Ended (or a content's direction             changed) because it was rejected by the remote user.           Corresponds to Rejected         ]]&gt;
         */
        REJECTED,
        /**
         * &lt;![CDATA[           The CallState changed from             Initialised or             Ended because the initiator             ended the call before the receiver accepted it. With an             incoming call this state change reason signifies a missed             call, or one that was picked up elsewhere before it was             picked up here.           Corresponds to NoAnswer or             PickedUpElsewhere         ]]&gt;
         */
        NO_ANSWER,
        /**
         * &lt;![CDATA[           The CallState changed because one             of the addresses does not exist on the network.           Corresponds to DoesNotExist         ]]&gt;
         */
        INVALID_CONTACT,
        /**
         * &lt;![CDATA[           The CallState changed because the           local user is not authorised.           Corresponds to PermissionDenied or             InsufficientBalance                      ]]&gt;
         */
        PERMISSION_DENIED,
        /**
         * &lt;![CDATA[           The CallState changed from             Initialised             Ended because the receiver is busy             (e.g. is already engaged in another call, and has not placed the             initiator in a call-waiting queue).           Corresponds to Busy         ]]&gt;
         */
        BUSY,
        /**
         * &lt;![CDATA[           There has been an unexpected error in either the CM or some other             local component.           Corresponds to Confused or           Media.StreamingError                    ]]&gt;
         */
        INTERNAL_ERROR,
        /**
         * &lt;![CDATA[           There has been an unexpected error in the server or some other             remote component.           Corresponds to             ServiceConfused                    ]]&gt;
         */
        SERVICE_ERROR,
        /**
         * &lt;![CDATA[           There has been a network error related to the CM or the             signalling part of the call (compare and contrast:             Streaming_Error).           Corresponds to             NetworkError         ]]&gt;
         */
        NETWORK_ERROR,
        /**
         * &lt;![CDATA[           Some aspect of the content is unsupported so has to be             removed from the call.           Corresponds to Media.UnsupportedType             or Media.CodecsIncompatible                    ]]&gt;
         */
        MEDIA_ERROR,
        /**
         * &lt;![CDATA[           It was not possible for the streaming implementation to connect             to any of the users participating in this call or content.           Corresponds to ConnectionFailed or             ConnectionLost         ]]&gt;
         */
        CONNECTIVITY_ERROR,
    }
    /**
     * &lt;![CDATA[         The network topology that an IP candidate represents. This can         sometimes be used to infer what kind of performance characteristics         (latency, bandwith, etc) can be expected of connections made to this         candidate.       ]]&gt;
     *
     * Bitfield/set of flags generated from the Telepathy specification.
     */
    enum CallStreamCandidateType {
        /**
         * &lt;![CDATA[           This is not an IP candidate. This is a reserved value, and should           not be seen on the bus.         ]]&gt;
         */
        NONE,
        /**
         * &lt;![CDATA[           This candidate represents a direct connection to the host, as its           address is taken directly the host's IP stack.         ]]&gt;
         */
        HOST,
        /**
         * &lt;![CDATA[           This candidate probably represents a connection to the host through           a NAT device, as its address was discovered by sending a binding           request to a STUN server or similar.         ]]&gt;
         */
        SERVER_REFLEXIVE,
        /**
         * &lt;![CDATA[           This candidate probably represents a good route between the host and           its peer, as its address was discovered by sending a STUN binding           request to one of the candidates advertised by the peer.         ]]&gt;
         */
        PEER_REFLEXIVE,
        /**
         * &lt;![CDATA[           This candidate represents the address of a relay server (usually           somewhere on the public internet). This candidate is the most likely           to work, but all media will go via a relay server, so latency is           likely to be higher than other types of candidate.         ]]&gt;
         */
        RELAY,
        /**
         * &lt;![CDATA[           This candidate represents a Multicast group. This value should only           appear if the Stream's Transport is           set to Multicast.         ]]&gt;
         */
        MULTICAST,
    }
    /**
     * &lt;![CDATA[         A reason why captcha authentication was aborted by the client.       ]]&gt;
     *
     * Bitfield/set of flags generated from the Telepathy specification.
     */
    enum CaptchaCancelReason {
        /**
         * &lt;![CDATA[           The user aborted the authentication. If this is used, the           CaptchaError SHOULD be set to           Cancelled         ]]&gt;
         */
        USER_CANCELLED,
        /**
         * &lt;![CDATA[           The Handler doesn't support the given/required captcha types.           If this is used, the CaptchaError           SHOULD be set to CaptchaNotSupported.           This SHOULD also be used if           Close is called           before CancelCaptcha.                        If no Handler supports captcha channels,             the ChannelDispatcher will just call             Close,             because it has no knowledge of specific channel types.                    ]]&gt;
         */
        NOT_SUPPORTED,
        /**
         * &lt;![CDATA[           The Handler doesn't understand the captcha data received. The           challenger may be sending gibberish.           If this is used, the CaptchaError           SHOULD be set to ServiceConfused.         ]]&gt;
         */
        SERVICE_CONFUSED,
    }
    /**
     * Bitfield/set of flags generated from the Telepathy specification.
     */
    enum CaptchaStatus {
        /**
         * &lt;![CDATA[           The challenge/response exchange is in progress and waiting for           a local action. Call AnswerCaptchas           to go to the Remote_Pending state, or call           CancelCaptcha followed by            Close           to give up.         ]]&gt;
         */
        LOCAL_PENDING,
        /**
         * &lt;![CDATA[           The challenge/response exchange is in progress and waiting for           a response from the server. Wait for a reply from the server,           which will result in the Succeeded, Try_Again, or Failed state,           or call CancelCaptcha followed by           Close           to give up.         ]]&gt;
         */
        REMOTE_PENDING,
        /**
         * &lt;![CDATA[           Everyone is happy. Connection to the server will proceed as soon as           this state is reached. There is nothing useful to do in this state           except to call Close           to close the channel.         ]]&gt;
         */
        SUCCEEDED,
        /**
         * &lt;![CDATA[           The server has indicated an authentication failure.           Call GetCaptchas again to get           a new captcha, or           CancelCaptcha followed by           Close           to give up.         ]]&gt;
         */
        TRY_AGAIN,
        /**
         * &lt;![CDATA[           Authentication has failed in some way. There is nothing           useful to do in this state except to close the channel with           Close.         ]]&gt;
         */
        FAILED,
    }
    /**
     * Bitfield/set of flags generated from the Telepathy specification.
     */
    enum ChannelChatState {
        /**
         * &lt;![CDATA[         The contact has effectively ceased participating in the chat.         ]]&gt;
         */
        GONE,
        /**
         * &lt;![CDATA[         The contact has not been active for some time.         ]]&gt;
         */
        INACTIVE,
        /**
         * &lt;![CDATA[         The contact is actively participating in the chat.         ]]&gt;
         */
        ACTIVE,
        /**
         * &lt;![CDATA[         The contact has paused composing a message.         ]]&gt;
         */
        PAUSED,
        /**
         * &lt;![CDATA[         The contact is composing a message to be sent to the chat.         ]]&gt;
         */
        COMPOSING,
    }
    /**
     * Bitfield/set of flags generated from the Telepathy specification.
     */
    enum ChannelContactSearchState {
        /**
         * &lt;![CDATA[The search has not started]]&gt;
         */
        NOT_STARTED,
        /**
         * &lt;![CDATA[The search is in progress]]&gt;
         */
        IN_PROGRESS,
        /**
         * &lt;![CDATA[The search has paused, but more results can be retrieved           by calling More.]]&gt;
         */
        MORE_AVAILABLE,
        /**
         * &lt;![CDATA[The search has been completed]]&gt;
         */
        COMPLETED,
        /**
         * &lt;![CDATA[The search has failed]]&gt;
         */
        FAILED,
    }
    /**
     * &lt;![CDATA[         The reason for a set of handles to move to one of           Members,           LocalPendingMembers or           RemotePendingMembers, or to be removed           from the group. A client may supply a reason when attempting to           remove members from a group with           RemoveMembersWithReason, and reasons           are supplied by the CM when emitting           MembersChanged and           MembersChangedDetailed. Some reason           codes have different meanings depending on the Actor in a           MembersChanged signal.       ]]&gt;
     *
     * Bitfield/set of flags generated from the Telepathy specification.
     */
    enum ChannelGroupChangeReason {
        /**
         * &lt;![CDATA[           No reason was provided for this change.            In particular, this reason SHOULD be used when representing             users joining a named chatroom in the usual way, users leaving             a chatroom by their own request, and normal termination of a             StreamedMedia call by the remote user.            If the SelfHandle is removed from             a group for this reason and the actor is not the SelfHandle, the             equivalent D-Bus error is             org.freedesktop.Telepathy.Error.Terminated.            If the SelfHandle is removed from a group for this reason and             the actor is also the SelfHandle, the equivalent D-Bus error is             org.freedesktop.Telepathy.Error.Cancelled.         ]]&gt;
         */
        NONE,
        /**
         * &lt;![CDATA[           The change is due to a user going offline. Also used when             user is already offline, but this wasn't known previously.            If a one-to-one StreamedMedia             call fails because the contact being called is offline, the             connection manager SHOULD indicate this by removing both the             SelfHandle and the other contact's             handle from the Group interface with reason Offline.                         For 1-1 calls, the call terminates as a result of removing the             remote contact, so the SelfHandle should be removed at the same             time as the remote contact and for the same reason.                       If a handle is removed from a group for this reason, the             equivalent D-Bus error is             org.freedesktop.Telepathy.Error.Offline.         ]]&gt;
         */
        OFFLINE,
        /**
         * &lt;![CDATA[           The change is due to a kick operation.            If the SelfHandle is removed             from a group for this reason, the equivalent D-Bus error is             org.freedesktop.Telepathy.Error.Channel.Kicked.                    ]]&gt;
         */
        KICKED,
        /**
         * &lt;![CDATA[           The change is due to a busy indication.            If a one-to-one StreamedMedia             call fails because the contact being called is busy, the             connection manager SHOULD indicate this by removing both the             SelfHandle and the other contact's             handle from the Group interface with reason Busy.                         For 1-1 calls, the call terminates as a result of removing the             remote contact, so the SelfHandle should be removed at the same             time as the remote contact and for the same reason.                       If the SelfHandle is removed             from a group for this reason, the equivalent D-Bus error is             org.freedesktop.Telepathy.Error.Busy.                    ]]&gt;
         */
        BUSY,
        /**
         * &lt;![CDATA[           The change is due to an invitation. This reason SHOULD only be used           when contacts are added to the remote-pending set (to indicate that           the contact has been invited) or to the members (to indicate that           the contact has accepted the invitation).                         Otherwise, what would it mean?                    ]]&gt;
         */
        INVITED,
        /**
         * &lt;![CDATA[           The change is due to a kick+ban operation.            If the SelfHandle is removed             from a group for this reason, the equivalent D-Bus error is             org.freedesktop.Telepathy.Error.Channel.Banned.                    ]]&gt;
         */
        BANNED,
        /**
         * &lt;![CDATA[             The change is due to an error occurring.         ]]&gt;
         */
        ERROR,
        /**
         * &lt;![CDATA[           The change is because the requested contact does not exist.            For instance, if the user invites a nonexistent contact to a             chatroom or attempts to call a nonexistent contact, this could             be indicated by the CM adding that contact's handle to             remote-pending for reason None or Invited, then removing it for             reason Invalid_Contact. In the case of a 1-1 StreamedMedia             call, the CM SHOULD remove the self handle from the Group             in the same signal.                         For 1-1 calls, the call terminates as a result of removing the             remote contact, so the SelfHandle should be removed at the same             time as the remote contact and for the same reason.                       If a contact is removed from a group for this reason, the             equivalent D-Bus error is             org.freedesktop.Telepathy.Error.DoesNotExist.                    ]]&gt;
         */
        INVALID_CONTACT,
        /**
         * &lt;![CDATA[           The change is because the requested contact did not respond.            If a one-to-one StreamedMedia             call fails because the contact being called did not respond, or the             local user did not respond to an incoming call, the             connection manager SHOULD indicate this by removing both the             SelfHandle and the other contact's             handle from the Group interface with reason No_Answer.                         Documenting existing practice.                       If a contact is removed from a group for this reason, the             equivalent D-Bus error is             org.freedesktop.Telepathy.Error.NoAnswer.                    ]]&gt;
         */
        NO_ANSWER,
        /**
         * &lt;![CDATA[           The change is because a contact's unique identifier changed.           There must be exactly one handle in the removed set and exactly           one handle in one of the added sets. The Renamed           signal on the           Renaming           interface will have been emitted for the same handles,           shortly before this MembersChanged signal is emitted.         ]]&gt;
         */
        RENAMED,
        /**
         * &lt;![CDATA[           The change is because there was no permission to contact the             requested handle.            If a contact is removed from a group for this reason, the             equivalent D-Bus error is             org.freedesktop.Telepathy.Error.PermissionDenied.                    ]]&gt;
         */
        PERMISSION_DENIED,
        /**
         * &lt;![CDATA[           If members are removed with this reason code, the change is             because the group has split into unconnected parts which can only             communicate within themselves (e.g. netsplits on IRC use this             reason code).                                   If members are added with this reason code, the change is because             unconnected parts of the group have rejoined. If this channel             carries messages (e.g. Text             or Tubes             channels) applications must             assume that the contacts being added are likely to have missed some             messages as a result of the separation, and that the contacts             in the group are likely to have missed some messages from the             contacts being added.                      Note that from the added contacts' perspective, they have been             in the group all along, and the contacts we indicate to be in             the group (including the local user) have just rejoined             the group with reason Separated. Application protocols in Tubes             should be prepared to cope with this situation.                       The SelfHandle SHOULD NOT be             removed from channels with this reason.         ]]&gt;
         */
        SEPARATED,
    }
    /**
     * &lt;![CDATA[         The type of message.       ]]&gt;
     *
     * Bitfield/set of flags generated from the Telepathy specification.
     */
    enum ChannelTextMessageType {
        /**
         * &lt;![CDATA[         An ordinary chat message. Unknown types SHOULD be treated like this.         ]]&gt;
         */
        NORMAL,
        /**
         * &lt;![CDATA[         An action which might be presented to the user as         "* &lt;sender&gt; &lt;action&gt;", such as an IRC CTCP         ACTION (typically selected by the "/me" command). For example, the         text of the message might be "drinks more coffee".         ]]&gt;
         */
        ACTION,
        /**
         * &lt;![CDATA[         A one-off or automated message not necessarily expecting a reply         ]]&gt;
         */
        NOTICE,
        /**
         * &lt;![CDATA[         An automatically-generated reply message.         ]]&gt;
         */
        AUTO_REPLY,
        /**
         * &lt;![CDATA[           A delivery report. This message type MUST NOT appear unless the           channel supports the Messages           interface; see Message_Part for the format that           delivery reports must take.         ]]&gt;
         */
        DELIVERY_REPORT,
    }
    /**
     * Bitfield/set of flags generated from the Telepathy specification.
     */
    enum ChannelTextSendError {
        /**
         * &lt;![CDATA[         An unknown error occurred         ]]&gt;
         */
        UNKNOWN,
        /**
         * &lt;![CDATA[         The requested contact was offline         ]]&gt;
         */
        OFFLINE,
        /**
         * &lt;![CDATA[         The requested contact is not valid         ]]&gt;
         */
        INVALID_CONTACT,
        /**
         * &lt;![CDATA[         The user does not have permission to speak on this channel         ]]&gt;
         */
        PERMISSION_DENIED,
        /**
         * &lt;![CDATA[         The outgoing message was too long and was rejected by the server         ]]&gt;
         */
        TOO_LONG,
        /**
         * &lt;![CDATA[         The channel doesn't support sending text messages to the requested         contact         ]]&gt;
         */
        NOT_IMPLEMENTED,
    }
    /**
     * Bitfield/set of flags generated from the Telepathy specification.
     */
    enum ConnectionPresenceType {
        /**
         * &lt;![CDATA[           An invalid presence type used as a null value. This value MUST NOT           appear in the Statuses property,           or in the result of GetStatuses           on the deprecated Presence           interface.         ]]&gt;
         */
        UNSET,
        /**
         * &lt;![CDATA[           Offline         ]]&gt;
         */
        OFFLINE,
        /**
         * &lt;![CDATA[           Available         ]]&gt;
         */
        AVAILABLE,
        /**
         * &lt;![CDATA[           Away         ]]&gt;
         */
        AWAY,
        /**
         * &lt;![CDATA[           Away for an extended time         ]]&gt;
         */
        EXTENDED_AWAY,
        /**
         * &lt;![CDATA[           Hidden (invisible)         ]]&gt;
         */
        HIDDEN,
        /**
         * &lt;![CDATA[           Busy, Do Not Disturb.         ]]&gt;
         */
        BUSY,
        /**
         * &lt;![CDATA[           Unknown, unable to determine presence for this contact, for example           if the protocol only allows presence of subscribed contacts.         ]]&gt;
         */
        UNKNOWN,
        /**
         * &lt;![CDATA[           Error, an error occurred while trying to determine presence.  The           message, if set, is an error from the server.         ]]&gt;
         */
        ERROR,
    }
    /**
     * Bitfield/set of flags generated from the Telepathy specification.
     */
    enum ConnectionStatus {
        /**
         * &lt;![CDATA[           The connection is fully connected and all methods are available.         ]]&gt;
         */
        CONNECTED,
        /**
         * &lt;![CDATA[           Connect has been called but the           connection has not yet been established. Some methods may fail           until the connection has been established.         ]]&gt;
         */
        CONNECTING,
        /**
         * &lt;![CDATA[           If this is retrieved from GetStatus or           Status, it indicates that connection           has not yet been attempted. If seen in a           StatusChanged signal, it indicates           that the connection has failed; the Connection object SHOULD be           removed from D-Bus immediately, and all subsequent method calls           SHOULD fail.         ]]&gt;
         */
        DISCONNECTED,
    }
    /**
     * &lt;![CDATA[         A reason why the status of the connection changed. Apart from           Requested, the values of this enumeration only make sense as           reasons why the status changed to Disconnected.       ]]&gt;
     *
     * Bitfield/set of flags generated from the Telepathy specification.
     */
    enum ConnectionStatusReason {
        /**
         * &lt;![CDATA[           There is no reason set for this state change. Unknown status             reasons SHOULD be treated like this reason.            When disconnected for this reason, the equivalent D-Bus error is             org.freedesktop.Telepathy.Error.Disconnected.         ]]&gt;
         */
        NONE_SPECIFIED,
        /**
         * &lt;![CDATA[           The change is in response to a user request. Changes to the             Connecting or Connected status SHOULD always indicate this reason;             changes to the Disconnected status SHOULD indicate this reason             if and only if the disconnection was requested by the user.            When disconnected for this reason, the equivalent D-Bus error is             org.freedesktop.Telepathy.Error.Cancelled.         ]]&gt;
         */
        REQUESTED,
        /**
         * &lt;![CDATA[           There was an error sending or receiving on the network socket.            When the status changes from Connecting to Disconnected for this             reason, the equivalent D-Bus error is either             org.freedesktop.Telepathy.Error.NetworkError,             org.freedesktop.Telepathy.Error.ConnectionRefused,             org.freedesktop.Telepathy.Error.ConnectionFailed             or some more specific error.            When the status changes from Connected to Disconnected for this             reason, the equivalent D-Bus error is either             org.freedesktop.Telepathy.Error.NetworkError,             org.freedesktop.Telepathy.Error.ConnectionLost             or some more specific error.         ]]&gt;
         */
        NETWORK_ERROR,
        /**
         * &lt;![CDATA[           The username or password was invalid.            When disconnected for this reason, the equivalent D-Bus error is             org.freedesktop.Telepathy.Error.AuthenticationFailed.                    ]]&gt;
         */
        AUTHENTICATION_FAILED,
        /**
         * &lt;![CDATA[           There was an error negotiating SSL on this connection, or             encryption was unavailable and require-encryption was set when the             connection was created.            When disconnected for this reason, the equivalent D-Bus error is             org.freedesktop.Telepathy.Error.EncryptionNotAvailable             if encryption was not available at all, or             org.freedesktop.Telepathy.Error.EncryptionError             if encryption failed.         ]]&gt;
         */
        ENCRYPTION_ERROR,
        /**
         * &lt;![CDATA[           In general, this reason indicates that the requested account             name or other identification could not be used due to conflict             with another connection. It can be divided into three cases:                         If the status change is from Connecting to Disconnected               and the 'register' parameter to RequestConnection was present               and true, the requested account could not be created on the               server because it already exists.               The equivalent D-Bus error is               org.freedesktop.Telepathy.Error.RegistrationExists.                           If the status change is from Connecting to Disconnected               but the 'register' parameter is absent or false, the connection               manager could not connect to the specified account because               a connection to that account already exists.               The equivalent D-Bus error is               org.freedesktop.Telepathy.Error.AlreadyConnected.                                 In some protocols, like XMPP (when connecting with the same                 JID and resource as an existing connection), the existing                 connection "wins" and the new one fails to connect.                                          If the status change is from Connected to Disconnected,               the existing connection was automatically disconnected because               a new connection to the same account (perhaps from a different               client or location) was established.               The equivalent D-Bus error is               org.freedesktop.Telepathy.Error.ConnectionReplaced.                                 In some protocols, like MSNP (when connecting twice with the                 same Passport), the new connection "wins" and the                 existing one is automatically disconnected.                                                ]]&gt;
         */
        NAME_IN_USE,
        /**
         * &lt;![CDATA[           The server did not provide a SSL certificate.            When disconnected for this reason, the equivalent D-Bus error is             org.freedesktop.Telepathy.Error.Cert.NotProvided.                    ]]&gt;
         */
        CERT_NOT_PROVIDED,
        /**
         * &lt;![CDATA[           The server's SSL certificate is signed by an untrusted certifying             authority. This error SHOULD NOT be used to represent a self-signed             certificate: use the more specific Cert_Self_Signed reason for             that.            When disconnected for this reason, the equivalent D-Bus error is             org.freedesktop.Telepathy.Error.Cert.Untrusted.                    ]]&gt;
         */
        CERT_UNTRUSTED,
        /**
         * &lt;![CDATA[           The server's SSL certificate has expired.            When disconnected for this reason, the equivalent D-Bus error is             org.freedesktop.Telepathy.Error.Cert.Expired.                    ]]&gt;
         */
        CERT_EXPIRED,
        /**
         * &lt;![CDATA[           The server's SSL certificate is not yet valid.            When disconnected for this reason, the equivalent D-Bus error is             org.freedesktop.Telepathy.Error.Cert.NotActivated.                    ]]&gt;
         */
        CERT_NOT_ACTIVATED,
        /**
         * &lt;![CDATA[           The server's SSL certificate did not match its hostname.            When disconnected for this reason, the equivalent D-Bus error is             org.freedesktop.Telepathy.Error.Cert.HostnameMismatch.                    ]]&gt;
         */
        CERT_HOSTNAME_MISMATCH,
        /**
         * &lt;![CDATA[           The server's SSL certificate does not have the expected             fingerprint.            When disconnected for this reason, the equivalent D-Bus error is             org.freedesktop.Telepathy.Error.Cert.FingerprintMismatch.                    ]]&gt;
         */
        CERT_FINGERPRINT_MISMATCH,
        /**
         * &lt;![CDATA[           The server's SSL certificate is self-signed.            When disconnected for this reason, the equivalent D-Bus error is             org.freedesktop.Telepathy.Error.Cert.SelfSigned.                    ]]&gt;
         */
        CERT_SELF_SIGNED,
        /**
         * &lt;![CDATA[           There was some other error validating the server's SSL             certificate.            When disconnected for this reason, the equivalent D-Bus error is             org.freedesktop.Telepathy.Error.Cert.Invalid.                    ]]&gt;
         */
        CERT_OTHER_ERROR,
        /**
         * &lt;![CDATA[           The server's SSL certificate has been revoked.            When disconnected for this reason, the equivalent D-Bus error is             org.freedesktop.Telepathy.Error.Cert.Revoked.                    ]]&gt;
         */
        CERT_REVOKED,
        /**
         * &lt;![CDATA[           The server's SSL certificate uses an insecure algorithm, 	  or is cryptographically weak.            When disconnected for this reason, the equivalent D-Bus error is             org.freedesktop.Telepathy.Error.Cert.Insecure.                    ]]&gt;
         */
        CERT_INSECURE,
        /**
         * &lt;![CDATA[ 	  The length in bytes of the server certificate, or the depth of the 	  sever certificate chain exceed the limits imposed by the crypto 	  library.  	  When disconnected for this reason, the equivalent D-Bus error is 	    org.freedesktop.Telepathy.Error.Cert.LimitExceeded 	   	]]&gt;
         */
        CERT_LIMIT_EXCEEDED,
    }
    /**
     * Enumeration representing the features a #TpContact can optionally support.
     * When requesting a #TpContact, library users specify the desired features;
     * the #TpContact code will only initialize state for those features, to
     * avoid unwanted D-Bus round-trips and signal connections.
     *
     * Since 0.11.5, there is a corresponding #GEnumClass type,
     * %TP_TYPE_CONTACT_FEATURE.
     */
    enum ContactFeature {
        /**
         * #TpContact:alias
         */
        ALIAS,
        /**
         * #TpContact:avatar-token
         */
        AVATAR_TOKEN,
        /**
         * #TpContact:presence-type,
         *  #TpContact:presence-status and #TpContact:presence-message
         */
        PRESENCE,
        /**
         * #TpContact:location (available since 0.11.1)
         *  and #TpContact:location-vardict (since 0.19.10)
         */
        LOCATION,
        /**
         * #TpContact:capabilities
         *  (available since 0.11.3)
         */
        CAPABILITIES,
        /**
         * #TpContact:avatar-file and
         *  #TpContact:avatar-mime-type. Implies %TP_CONTACT_FEATURE_AVATAR_TOKEN
         *  (available since 0.11.6)
         */
        AVATAR_DATA,
        /**
         * #TpContact:contact-info
         *  (available since 0.11.7)
         */
        CONTACT_INFO,
        /**
         * #TpContact:client-types
         *  (available since 0.13.1)
         */
        CLIENT_TYPES,
        /**
         * #TpContact:subscribe-state,
         *  #TpContact:publish-state and #TpContact:publish-request. Require a
         *  Connection implementing the %TP_IFACE_CONNECTION_INTERFACE_CONTACT_LIST
         *  interface. (available since 0.13.12)
         */
        SUBSCRIPTION_STATES,
        /**
         * #TpContact:contact-groups
         *  (available since 0.13.14)
         */
        CONTACT_GROUPS,
        /**
         * #TpContact:is-blocked. Require
         *  Connection implementing the %TP_IFACE_CONNECTION_INTERFACE_CONTACT_BLOCKING
         *  interface. (available since 0.17.0)
         */
        CONTACT_BLOCKING,
    }
    /**
     * &lt;![CDATA[         The progress made in retrieving the contact list.       ]]&gt;
     *
     * Bitfield/set of flags generated from the Telepathy specification.
     */
    enum ContactListState {
        /**
         * &lt;![CDATA[The connection has not started to retrieve the contact           list. If GetContactListAttributes is           called in this state, it will raise NotYet.]]&gt;
         */
        NONE,
        /**
         * &lt;![CDATA[The connection has started to retrieve the contact           list, but has not yet succeeded or failed.           If GetContactListAttributes is called           in this state, it will raise NotYet.]]&gt;
         */
        WAITING,
        /**
         * &lt;![CDATA[           The connection has tried and failed to retrieve the contact             list. If GetContactListAttributes             is called in this state, it will immediately raise an error             indicating the reason for failure.            The connection manager SHOULD try again to obtain the contact             list, if appropriate for the protocol. If it succeeds later,             the ContactListState MUST advance             to Success.         ]]&gt;
         */
        FAILURE,
        /**
         * &lt;![CDATA[The connection has successfully retrieved the contact           list. If GetContactListAttributes           is called in this state, it will return successfully.]]&gt;
         */
        SUCCESS,
    }
    /**
     * &lt;![CDATA[         Values of this enumeration indicate the extent to which metadata           such as aliases and group memberships can be stored for the contacts           on a particular connection.          On some protocols, certain metadata (for instance, contact aliases)           can only be stored for contacts on the contact list, or contacts           with a particular contact list state.          To make it easier to deal with such protocols, if clients set           metadata on a contact who is not in the required state, the           Connection MUST cache the metadata for the duration of the session.           If clients request the attributes of that contact after the           appropriate "set" method has returned successfully, the Connection           MUST return the new (cached) value.          If the contact is later placed in the required state to store           metadata (for instance, if subscription to the contact's presence           is requested, on a protocol like MSN where the alias has storage type           Subscribed_Or_Pending), the connection MUST store the cached           metadata at that time.                     If the Connection didn't cache changes in this way, a client             intending to change the alias on MSN would have to wait until             the server acknowledged the subscription request; in the meantime,             other clients would still display the old alias.                   The only exception to that general rule is that if the Connection           cannot store particular metadata at all (i.e. the           storage type is None), it MUST reject attempts to set it.                     If the implementation knows that metadata can't be stored at             all, it's useful to report that, which can be done             synchronously. In general, user interfaces should detect             storage type None and not display editing controls at all.                ]]&gt;
     *
     * Bitfield/set of flags generated from the Telepathy specification.
     */
    enum ContactMetadataStorageType {
        /**
         * &lt;![CDATA[           This connection cannot store this type of metadata at all, and             attempting to do so will fail with NotImplemented.                         Link-local XMPP can't store aliases or group memberships at               all, and subscription and presence states are implicit (all               contacts on the local network have subscribe = publish = Yes               and no other contacts exist).              As of April 2010, the XMPP server for Facebook Chat provides a               read-only view of the user's Facebook contacts, so it could also               usefully have this storage type.                    ]]&gt;
         */
        NONE,
        /**
         * &lt;![CDATA[           This type of metadata can only be stored permanently for contacts             whose subscribe attribute is Ask or Yes.                         Contact aliases and groups on MSN have this behaviour.                    ]]&gt;
         */
        SUBSCRIBED_OR_PENDING,
        /**
         * &lt;![CDATA[           This type of metadata can only be stored permanently for contacts             whose subscribe attribute is Yes.                         No service with this behaviour is currently known, but it's a               stricter form of Subscribed_Or_Pending.                    ]]&gt;
         */
        SUBSCRIBED,
        /**
         * &lt;![CDATA[           The user can set this metadata for any valid contact identifier,             whether or not they have any presence subscription relationship             to it, and it will be stored on their contact list.                         Contact aliases and groups on XMPP have this behaviour; it               is possible to put a contact in a group, or assign an alias               to them, without requesting that presence be shared.                    ]]&gt;
         */
        ANYONE,
    }
    /**
     * #GError codes for use with the %TP_DBUS_ERRORS domain.
     *
     * Since 0.11.5, there is a corresponding #GEnumClass type,
     * %TP_TYPE_DBUS_ERROR.
     */
    enum DBusError {
        /**
         * Raised if the error raised by
         *  a remote D-Bus object is not recognised
         */
        UNKNOWN_REMOTE_ERROR,
        /**
         * Emitted in #TpProxy::invalidated
         *  when the #TpProxy has lost its last reference
         */
        PROXY_UNREFERENCED,
        /**
         * Raised by #TpProxy methods if the remote
         *  object does not appear to have the required interface
         */
        NO_INTERFACE,
        /**
         * Emitted in #TpProxy::invalidated if the
         *  remote process loses ownership of its bus name, and raised by
         *  any #TpProxy methods that have not had a reply at that time or are called
         *  after the proxy becomes invalid in this way (usually meaning it crashed)
         */
        NAME_OWNER_LOST,
        /**
         * Raised if a D-Bus bus name given is not
         *  valid, or is of an unacceptable type (e.g. well-known vs. unique)
         */
        INVALID_BUS_NAME,
        /**
         * Raised if a D-Bus interface or
         *  error name given is not valid
         */
        INVALID_INTERFACE_NAME,
        /**
         * Raised if a D-Bus object path
         *  given is not valid
         */
        INVALID_OBJECT_PATH,
        /**
         * Raised if a D-Bus method or signal
         *  name given is not valid
         */
        INVALID_MEMBER_NAME,
        /**
         * A generic error which can be used with
         *  #TpProxy::invalidated to indicate an application-specific indication
         *  that the remote object no longer exists, if no more specific error
         *  is available.
         */
        OBJECT_REMOVED,
        /**
         * Raised from calls that re-enter the main
         *  loop (*_run_*) if they are cancelled
         */
        CANCELLED,
        /**
         * Raised if information received from a remote
         *  object is inconsistent or otherwise obviously wrong (added in 0.7.17).
         *  See also %TP_ERROR_CONFUSED.
         */
        INCONSISTENT,
    }
    /**
     * Bitfield/set of flags generated from the Telepathy specification.
     */
    enum DTMFEvent {
        /**
         * &lt;![CDATA[0]]&gt;
         */
        DIGIT_0,
        /**
         * &lt;![CDATA[1]]&gt;
         */
        DIGIT_1,
        /**
         * &lt;![CDATA[2]]&gt;
         */
        DIGIT_2,
        /**
         * &lt;![CDATA[3]]&gt;
         */
        DIGIT_3,
        /**
         * &lt;![CDATA[4]]&gt;
         */
        DIGIT_4,
        /**
         * &lt;![CDATA[5]]&gt;
         */
        DIGIT_5,
        /**
         * &lt;![CDATA[6]]&gt;
         */
        DIGIT_6,
        /**
         * &lt;![CDATA[7]]&gt;
         */
        DIGIT_7,
        /**
         * &lt;![CDATA[8]]&gt;
         */
        DIGIT_8,
        /**
         * &lt;![CDATA[9]]&gt;
         */
        DIGIT_9,
        /**
         * &lt;![CDATA[*]]&gt;
         */
        ASTERISK,
        /**
         * &lt;![CDATA[#]]&gt;
         */
        HASH,
        /**
         * &lt;![CDATA[A]]&gt;
         */
        LETTER_A,
        /**
         * &lt;![CDATA[B]]&gt;
         */
        LETTER_B,
        /**
         * &lt;![CDATA[C]]&gt;
         */
        LETTER_C,
        /**
         * &lt;![CDATA[D]]&gt;
         */
        LETTER_D,
    }
    /**
     * Bitfield/set of flags generated from the Telepathy specification.
     */
    enum DebugLevel {
        /**
         * &lt;![CDATA[           Log level for errors. Error messages are always fatal, resulting           in the service terminating after something completely           unexpected occurred.         ]]&gt;
         */
        ERROR,
        /**
         * &lt;![CDATA[           Log level for critical messages. Critical messages are messages           that the service might predict and it is up to the service itself           to decide whether to terminate following a critical message.         ]]&gt;
         */
        CRITICAL,
        /**
         * &lt;![CDATA[           Log level for warnings.         ]]&gt;
         */
        WARNING,
        /**
         * &lt;![CDATA[           Log level for messages.         ]]&gt;
         */
        MESSAGE,
        /**
         * &lt;![CDATA[           Log level for information messages.         ]]&gt;
         */
        INFO,
        /**
         * &lt;![CDATA[           Log level for debug messages.         ]]&gt;
         */
        DEBUG,
    }
    /**
     * &lt;![CDATA[         The status of a message as indicated by a delivery report.          If this enum is extended in future specifications, this should           only be to add new, non-overlapping conditions (i.e. all failures           should still be signalled as either Temporarily_Failed           or Permanently_Failed). If additional detail is required (e.g.           distinguishing between the various types of permanent failure) this           will be done using additional           Delivery_Report_Header_Keys.       ]]&gt;
     *
     * Bitfield/set of flags generated from the Telepathy specification.
     */
    enum DeliveryStatus {
        /**
         * &lt;![CDATA[           The message's disposition is unknown.           Clients SHOULD consider all messages to have status           Delivery_Status_Unknown unless otherwise specified; connection           managers SHOULD NOT signal this delivery status explicitly.         ]]&gt;
         */
        UNKNOWN,
        /**
         * &lt;![CDATA[           The message has been delivered to the intended recipient.         ]]&gt;
         */
        DELIVERED,
        /**
         * &lt;![CDATA[           Delivery of the message has failed. Clients SHOULD notify the user,           but MAY automatically try sending another copy of the message.                         Similar to errors with type="wait" in XMPP; analogous to             4xx errors in SMTP.                    ]]&gt;
         */
        TEMPORARILY_FAILED,
        /**
         * &lt;![CDATA[           Delivery of the message has failed. Clients SHOULD NOT try again           unless by specific user action. If the user does not modify the           message or alter configuration before re-sending, this error is           likely to happen again.                         Similar to errors with type="cancel", type="modify"             or type="auth" in XMPP; analogous to 5xx errors in SMTP.                    ]]&gt;
         */
        PERMANENTLY_FAILED,
        /**
         * &lt;![CDATA[           An intermediate server has accepted the message but the message           has not been yet delivered to the ultimate recipient. The           connection manager might send a Failed report or Delivered report           later.                         Similar to "202 Accepted" success code in SIP; analogous to             251 and 252 responses in SMTP.                    ]]&gt;
         */
        ACCEPTED,
        /**
         * &lt;![CDATA[           The message has been read by the intended recipient.         ]]&gt;
         */
        READ,
        /**
         * &lt;![CDATA[           The message has been deleted by the intended recipient. This MAY be           signalled on its own if the message is deleted without being read, or           after Read if the message was read before being deleted.         ]]&gt;
         */
        DELETED,
    }
    /**
     * Enumerated type representing the Telepathy D-Bus errors.
     */
    class Error extends GLib.Error {
        // Own fields of TelepathyGLib-0.12.Error

        /**
         * org.freedesktop.Telepathy.Error.NetworkError:
         *     Raised when there is an error reading from or writing to the network.
         */
        NETWORK_ERROR: number;
        /**
         * org.freedesktop.Telepathy.Error.NotImplemented:
         *     Raised when the requested method, channel, etc is not available on this
         *     connection.
         */
        NOT_IMPLEMENTED: number;
        /**
         * org.freedesktop.Telepathy.Error.InvalidArgument:
         *     Raised when one of the provided arguments is invalid.
         */
        INVALID_ARGUMENT: number;
        /**
         * org.freedesktop.Telepathy.Error.NotAvailable:
         *     Raised when the requested functionality is temporarily unavailable.
         */
        NOT_AVAILABLE: number;
        /**
         * org.freedesktop.Telepathy.Error.PermissionDenied:
         *     The user is not permitted to perform the requested operation.
         */
        PERMISSION_DENIED: number;
        /**
         * org.freedesktop.Telepathy.Error.Disconnected:
         *     The connection is not currently connected and cannot be used.
         *     This error may also be raised when operations are performed on a
         *     Connection for which StatusChanged has signalled status Disconnected
         *     for reason None.
         */
        DISCONNECTED: number;
        /**
         * org.freedesktop.Telepathy.Error.InvalidHandle:
         *     An identifier being converted to a handle was syntactically invalid,
         *     or an invalid handle was used.
         */
        INVALID_HANDLE: number;
        /**
         * org.freedesktop.Telepathy.Error.Channel.Banned:
         *     You are banned from the channel.
         */
        CHANNEL_BANNED: number;
        /**
         * org.freedesktop.Telepathy.Error.Channel.Full:
         *     The channel is full.
         */
        CHANNEL_FULL: number;
        /**
         * org.freedesktop.Telepathy.Error.Channel.InviteOnly:
         *     The requested channel is invite-only.
         */
        CHANNEL_INVITE_ONLY: number;
        /**
         * org.freedesktop.Telepathy.Error.NotYours:
         *     The requested channel or other resource already exists, and another
         *     client is responsible for it
         */
        NOT_YOURS: number;
        /**
         * org.freedesktop.Telepathy.Error.Cancelled:
         *     Raised by an ongoing request if it is cancelled by user request before
         *     it has completed, or when operations are performed on an object which
         *     the user has asked to close (for instance, a Connection where the user
         *     has called Disconnect, or a Channel where the user has called Close).
         */
        CANCELLED: number;
        /**
         * org.freedesktop.Telepathy.Error.AuthenticationFailed:
         *     Raised when authentication with a service was unsuccessful.
         */
        AUTHENTICATION_FAILED: number;
        /**
         * org.freedesktop.Telepathy.Error.EncryptionNotAvailable:
         *     Raised if a user request insisted that encryption should be used,
         *     but encryption was not actually available.
         */
        ENCRYPTION_NOT_AVAILABLE: number;
        /**
         * org.freedesktop.Telepathy.Error.EncryptionError:
         *     Raised if encryption appears to be available, but could not actually be
         *     used (for instance if SSL/TLS negotiation fails).
         */
        ENCRYPTION_ERROR: number;
        /**
         * org.freedesktop.Telepathy.Error.Cert.NotProvided:
         *     Raised if the server did not provide a SSL/TLS certificate.
         */
        CERT_NOT_PROVIDED: number;
        /**
         * org.freedesktop.Telepathy.Error.Cert.Untrusted:
         *     Raised if the server provided a SSL/TLS certificate signed by an
         *     untrusted certifying authority.
         */
        CERT_UNTRUSTED: number;
        /**
         * org.freedesktop.Telepathy.Error.Cert.Expired:
         *     Raised if the server provided an expired SSL/TLS certificate.
         */
        CERT_EXPIRED: number;
        /**
         * org.freedesktop.Telepathy.Error.Cert.NotActivated:
         *     Raised if the server provided an SSL/TLS certificate that will become
         *     valid at some point in the future.
         */
        CERT_NOT_ACTIVATED: number;
        /**
         * org.freedesktop.Telepathy.Error.Cert.FingerprintMismatch:
         *     Raised if the server provided an SSL/TLS certificate that did not have
         *     the expected fingerprint.
         */
        CERT_FINGERPRINT_MISMATCH: number;
        /**
         * org.freedesktop.Telepathy.Error.Cert.HostnameMismatch:
         *     Raised if the server provided an SSL/TLS certificate that did not
         *     match its hostname.
         */
        CERT_HOSTNAME_MISMATCH: number;
        /**
         * org.freedesktop.Telepathy.Error.Cert.SelfSigned:
         *     Raised if the server provided an SSL/TLS certificate that is
         *     self-signed and untrusted.
         */
        CERT_SELF_SIGNED: number;
        /**
         * org.freedesktop.Telepathy.Error.Cert.Invalid:
         *     Raised if the server provided an SSL/TLS certificate that is
         *     unacceptable in some way that does not have a more specific error.
         */
        CERT_INVALID: number;
        /**
         * org.freedesktop.Telepathy.Error.NotCapable:
         *     Raised when requested functionality is unavailable due to a contact
         *     not having the required capabilities.
         */
        NOT_CAPABLE: number;
        /**
         * org.freedesktop.Telepathy.Error.Offline:
         *     Raised when requested functionality is unavailable because a contact is
         *     offline.
         */
        OFFLINE: number;
        /**
         * org.freedesktop.Telepathy.Error.Channel.Kicked:
         *     Used to represent a user being ejected from a channel by another user,
         *     for instance being kicked from a chatroom.
         */
        CHANNEL_KICKED: number;
        /**
         * org.freedesktop.Telepathy.Error.Busy:
         *     Used to represent a user being removed from a channel because of a
         *     "busy" indication.
         */
        BUSY: number;
        /**
         * org.freedesktop.Telepathy.Error.NoAnswer:
         *     Used to represent a user being removed from a channel because they did
         *     not respond, e.g. to a StreamedMedia call.
         */
        NO_ANSWER: number;
        /**
         * org.freedesktop.Telepathy.Error.DoesNotExist:
         *     Raised when the requested user does not, in fact, exist.
         */
        DOES_NOT_EXIST: number;
        /**
         * org.freedesktop.Telepathy.Error.Terminated:
         *     Raised when a channel is terminated for an unspecified reason. In
         *     particular, this error SHOULD be used whenever normal termination of a
         *     1-1 StreamedMedia call by the remote user is represented as a D-Bus
         *     error name.
         */
        TERMINATED: number;
        /**
         * org.freedesktop.Telepathy.Error.ConnectionRefused:
         *     Raised when a connection is refused.
         */
        CONNECTION_REFUSED: number;
        /**
         * org.freedesktop.Telepathy.Error.ConnectionFailed:
         *     Raised when a connection can't be established.
         */
        CONNECTION_FAILED: number;
        /**
         * org.freedesktop.Telepathy.Error.ConnectionLost:
         *     Raised when a connection is broken.
         */
        CONNECTION_LOST: number;
        /**
         * org.freedesktop.Telepathy.Error.AlreadyConnected:
         *     Raised on attempts to connect again to an account that is already
         *     connected, if the protocol or server does not allow this.
         *     Since 0.7.34
         */
        ALREADY_CONNECTED: number;
        /**
         * org.freedesktop.Telepathy.Error.ConnectionReplaced:
         *     Used as disconnection reason for an existing connection if it is
         *     disconnected because a second connection to the same account is made.
         *     Since 0.7.34
         */
        CONNECTION_REPLACED: number;
        /**
         * org.freedesktop.Telepathy.Error.RegistrationExists:
         *     Raised on attempts to register an account on a server when the account
         *     already exists.
         *     Since 0.7.34
         */
        REGISTRATION_EXISTS: number;
        /**
         * org.freedesktop.Telepathy.Error.ServiceBusy:
         *     Raised when a server or other infrastructure rejects a request because
         *     it is too busy.
         *     Since 0.7.34
         */
        SERVICE_BUSY: number;
        /**
         * org.freedesktop.Telepathy.Error.ResourceUnavailable:
         *     Raised when a local process rejects a request because it does not have
         *     enough of a resource, such as memory.
         *     Since 0.7.34
         */
        RESOURCE_UNAVAILABLE: number;
        /**
         * org.freedesktop.Telepathy.Error.WouldBreakAnonymity:
         *     Raised when a request cannot be satisfied without violating an
         *     earlier request for anonymity, and the earlier request specified
         *     that raising an error is preferable to disclosing the user's
         *     identity
         *     Since 0.11.7
         */
        WOULD_BREAK_ANONYMITY: number;
        /**
         * org.freedesktop.Telepathy.Error.Cert.Revoked:
         *     Raised if the server provided an SSL/TLS certificate that has been
         *     revoked.
         *     Since 0.11.12
         */
        CERT_REVOKED: number;
        /**
         * org.freedesktop.Telepathy.Error.Cert.Insecure:
         *     Raised if the server provided an SSL/TLS certificate that uses an
         *     insecure cipher algorithm or is cryptographically weak.
         *     Since 0.11.12
         */
        CERT_INSECURE: number;
        /**
         * org.freedesktop.Telepathy.Error.Cert.LimitExceeded:
         *     Raised if the length in bytes of the server certificate, or the depth
         *     of the server certificate chain, exceed the limits imposed by the
         *     crypto library.
         *     Since 0.11.12
         */
        CERT_LIMIT_EXCEEDED: number;
        /**
         * org.freedesktop.Telepathy.Error.NotYet:
         *     Raised when the requested functionality is not yet available, but is
         *     likely to become available after some time has passed.
         *     Since 0.11.15
         */
        NOT_YET: number;
        /**
         * org.freedesktop.Telepathy.Error.Rejected:
         *     Raised when an incoming or outgoing call is rejected by the receiving
         *     contact.
         *     Since 0.13.2
         */
        REJECTED: number;
        /**
         * org.freedesktop.Telepathy.Error.PickedUpElsewhere:
         *     Raised when a call was terminated as a result of the local user
         *     picking up the call on a different resource.
         *     Since 0.13.3
         */
        PICKED_UP_ELSEWHERE: number;
        /**
         * org.freedesktop.Telepathy.Error.Confused:
         *     Raised if a server rejects protocol messages from a connection manager
         *     claiming that they do not make sense, two local processes fail to
         *     understand each other, or an apparently impossible situation is
         *     reached. This has a similar meaning to %TP_DBUS_ERROR_INCONSISTENT but
         *     can be passed between processes via D-Bus.
         *     Since 0.13.7
         */
        CONFUSED: number;
        /**
         * org.freedesktop.Telepathy.Error.ServiceConfused:
         *     Raised when a server or other piece of infrastructure indicates an
         *     internal error, or when a message that makes no sense is received from
         *     a server or other piece of infrastructure.
         *     Since 0.13.7
         */
        SERVICE_CONFUSED: number;
        /**
         * org.freedesktop.Telepathy.Error.EmergencyCallsNotSupported:
         *     Raised when a client attempts to dial a number that is recognized as an
         *     emergency number (e.g. '911' in the USA), but the Connection
         *     Manager or provider does not support dialling emergency numbers.
         */
        EMERGENCY_CALLS_NOT_SUPPORTED: number;
        /**
         * org.freedesktop.Telepathy.Error.SoftwareUpgradeRequired:
         *     Raised when a Connection cannot be established because either the
         *     Connection Manager or its support library (e.g. wocky, papyon, sofiasip)
         *     requires upgrading to support a newer protocol version.
         */
        SOFTWARE_UPGRADE_REQUIRED: number;
        /**
         * &lt;code&gt;org.freedesktop.Telepathy.Error.InsufficientBalance&lt;/code&gt;:
         *     Raised if the user has insufficient balance to place a call.  The key
         *     'balance-required' MAY be included in CallStateDetails on a Call channel
         *     (with the same units and scale as AccountBalance) to indicate how much
         *     credit is required to make this call.
         */
        INSUFFICIENT_BALANCE: number;
        /**
         * &lt;code&gt;org.freedesktop.Telepathy.Error.Media.CodecsIncompatible&lt;/code&gt;:
         *     Raised when the local streaming implementation has no codecs in common
         *     with the remote side.
         *     Since 0.15.6
         */
        MEDIA_CODECS_INCOMPATIBLE: number;
        /**
         * &lt;code&gt;org.freedesktop.Telepathy.Error.Media.UnsupportedType&lt;/code&gt;:
         *     The media stream type requested is not supported by either the local or
         *     remote side.
         *     Since 0.15.6
         */
        MEDIA_UNSUPPORTED_TYPE: number;
        /**
         * &lt;code&gt;org.freedesktop.Telepathy.Error.Media.StreamingError&lt;/code&gt;:
         *     Raised when the call's streaming implementation has some kind of internal
         *     error.
         *     Since 0.15.6
         */
        MEDIA_STREAMING_ERROR: number;
        /**
         * &lt;code&gt;org.freedesktop.Telepathy.Error.Media.CaptchaNotSupported&lt;/code&gt;:
         *     Raised if no UI is available to present captchas, or if one is
         *     available but it is unable to answer any of the captchas given.
         */
        CAPTCHA_NOT_SUPPORTED: number;

        // Constructors of TelepathyGLib-0.12.Error

        constructor(options: { message: string; code: number });
    }

    /**
     * Bitfield/set of flags generated from the Telepathy specification.
     */
    enum FileHashType {
        /**
         * &lt;![CDATA[           No hash.         ]]&gt;
         */
        NONE,
        /**
         * &lt;![CDATA[           MD5 digest as a string of 32 ASCII hex digits.         ]]&gt;
         */
        MD5,
        /**
         * &lt;![CDATA[           SHA1 digest as a string of ASCII hex digits.         ]]&gt;
         */
        SHA1,
        /**
         * &lt;![CDATA[           SHA256 digest as a string of ASCII hex digits.         ]]&gt;
         */
        SHA256,
    }
    /**
     * Bitfield/set of flags generated from the Telepathy specification.
     */
    enum FileTransferState {
        /**
         * &lt;![CDATA[           An invalid state type used as a null value. This value MUST NOT           appear in the State property.         ]]&gt;
         */
        NONE,
        /**
         * &lt;![CDATA[           The file transfer is waiting to be accepted/closed by the receiver.           The receiver has to call AcceptFile,           then wait for the state to change to Open and check the offset value.         ]]&gt;
         */
        PENDING,
        /**
         * &lt;![CDATA[           The receiver has accepted the transfer. The sender now has to           call ProvideFile to actually start the transfer.           The receiver should now wait for the state to change to Open           and check the offset value.         ]]&gt;
         */
        ACCEPTED,
        /**
         * &lt;![CDATA[           The file transfer is open for traffic.         ]]&gt;
         */
        OPEN,
        /**
         * &lt;![CDATA[           The file transfer has been completed successfully.         ]]&gt;
         */
        COMPLETED,
        /**
         * &lt;![CDATA[           The file transfer has been cancelled.         ]]&gt;
         */
        CANCELLED,
    }
    /**
     * Bitfield/set of flags generated from the Telepathy specification.
     */
    enum FileTransferStateChangeReason {
        /**
         * &lt;![CDATA[           No reason was specified.         ]]&gt;
         */
        NONE,
        /**
         * &lt;![CDATA[           The change in state was requested.         ]]&gt;
         */
        REQUESTED,
        /**
         * &lt;![CDATA[           The file transfer was cancelled by the local user.         ]]&gt;
         */
        LOCAL_STOPPED,
        /**
         * &lt;![CDATA[           The file transfer was cancelled by the remote user.         ]]&gt;
         */
        REMOTE_STOPPED,
        /**
         * &lt;![CDATA[           The file transfer was cancelled because of a local error.         ]]&gt;
         */
        LOCAL_ERROR,
        /**
         * &lt;![CDATA[           The file transfer was cancelled because of a remote error.         ]]&gt;
         */
        REMOTE_ERROR,
    }
    /**
     * &lt;![CDATA[         The HTTP Method with which to request a URL.       ]]&gt;
     *
     * Bitfield/set of flags generated from the Telepathy specification.
     */
    enum HTTPMethod {
        /**
         * &lt;![CDATA[           Use the GET method when opening the URL.         ]]&gt;
         */
        GET,
        /**
         * &lt;![CDATA[           Use the POST method when opening the URL. Refer to           HTTP_Post_Data for more details.         ]]&gt;
         */
        POST,
    }
    /**
     * Bitfield/set of flags generated from the Telepathy specification.
     */
    enum HandleType {
        /**
         * &lt;![CDATA[           A "null" handle type used to indicate the absence of a handle.           When a handle type and a handle appear as a pair, if the handle           type is zero, the handle must also be zero.         ]]&gt;
         */
        NONE,
        /**
         * &lt;![CDATA[           A contact         ]]&gt;
         */
        CONTACT,
        /**
         * &lt;![CDATA[           A chat room         ]]&gt;
         */
        ROOM,
        /**
         * &lt;![CDATA[           A server-generated contact list (see Channel.Interface.Group)         ]]&gt;
         */
        LIST,
        /**
         * &lt;![CDATA[           A user-defined contact list (see Channel.Interface.Group)         ]]&gt;
         */
        GROUP,
    }
    /**
     * &lt;![CDATA[         The hold state of a channel.       ]]&gt;
     *
     * Bitfield/set of flags generated from the Telepathy specification.
     */
    enum LocalHoldState {
        /**
         * &lt;![CDATA[           All streams are unheld (the call is active). New channels SHOULD           have this hold state.         ]]&gt;
         */
        UNHELD,
        /**
         * &lt;![CDATA[           All streams are held (the call is on hold)         ]]&gt;
         */
        HELD,
        /**
         * &lt;![CDATA[           The connection manager is attempting to move to state Held, but           has not yet completed that operation. It is unspecified whether           any, all or none of the streams making up the channel are on hold.           Examining the Hold state of Call Contents (if applicable) may           provide more useful information.         ]]&gt;
         */
        PENDING_HOLD,
        /**
         * &lt;![CDATA[           The connection manager is attempting to move to state Unheld, but           has not yet completed that operation. It is unspecified whether           any, all or none of the streams making up the channel are on hold.           Examining the Hold state of Call Contents (if applicable) may           provide more useful information.         ]]&gt;
         */
        PENDING_UNHOLD,
    }
    /**
     * &lt;![CDATA[         The reason for a change to the Local_Hold_State. Clients MUST         treat unknown values as equivalent to Local_Hold_State_Reason_None.       ]]&gt;
     *
     * Bitfield/set of flags generated from the Telepathy specification.
     */
    enum LocalHoldStateReason {
        /**
         * &lt;![CDATA[           The reason cannot be described by any of the predefined values           (connection managers SHOULD avoid this reason, but clients MUST           handle it gracefully)         ]]&gt;
         */
        NONE,
        /**
         * &lt;![CDATA[           The change is in response to a user request         ]]&gt;
         */
        REQUESTED,
        /**
         * &lt;![CDATA[           The change is because some resource was not available         ]]&gt;
         */
        RESOURCE_NOT_AVAILABLE,
    }
    /**
     * Bitfield/set of flags generated from the Telepathy specification.
     */
    enum MediaStreamBaseProto {
        /**
         * &lt;![CDATA[UDP (User Datagram Protocol)]]&gt;
         */
        UDP,
        /**
         * &lt;![CDATA[TCP (Transmission Control Protocol)]]&gt;
         */
        TCP,
    }
    /**
     * Bitfield/set of flags generated from the Telepathy specification.
     */
    enum MediaStreamDirection {
        /**
         * &lt;![CDATA[Media are not being sent or received]]&gt;
         */
        NONE,
        /**
         * &lt;![CDATA[Media are being sent, but not received]]&gt;
         */
        SEND,
        /**
         * &lt;![CDATA[Media are being received, but not sent]]&gt;
         */
        RECEIVE,
        /**
         * &lt;![CDATA[Media are being sent and received]]&gt;
         */
        BIDIRECTIONAL,
    }
    /**
     * Bitfield/set of flags generated from the Telepathy specification.
     */
    enum MediaStreamError {
        /**
         * &lt;![CDATA[           An unknown error occured.         ]]&gt;
         */
        UNKNOWN,
        /**
         * &lt;![CDATA[           The end of the stream was reached.         ]]&gt;
         */
        EOS,
        /**
         * &lt;![CDATA[           There are no common codecs between the local side           and the other particpants in the call. The possible codecs are not           signalled here: the streaming implementation is assumed to report           them in an implementation-dependent way, e.g. Farsight should use           GstMissingElement.         ]]&gt;
         */
        CODEC_NEGOTIATION_FAILED,
        /**
         * &lt;![CDATA[           A network connection for the Media could not be established or was           lost.         ]]&gt;
         */
        CONNECTION_FAILED,
        /**
         * &lt;![CDATA[           There was an error in the networking stack           (other than the connection failure).         ]]&gt;
         */
        NETWORK_ERROR,
        /**
         * &lt;![CDATA[           There are no installed codecs for this media type.         ]]&gt;
         */
        NO_CODECS,
        /**
         * &lt;![CDATA[           The CM is doing something wrong.         ]]&gt;
         */
        INVALID_CM_BEHAVIOR,
        /**
         * &lt;![CDATA[           There was an error in the media processing stack.         ]]&gt;
         */
        MEDIA_ERROR,
    }
    /**
     * Bitfield/set of flags generated from the Telepathy specification.
     */
    enum MediaStreamState {
        /**
         * &lt;![CDATA[The stream is disconnected.]]&gt;
         */
        DISCONNECTED,
        /**
         * &lt;![CDATA[The stream is trying to connect.]]&gt;
         */
        CONNECTING,
        /**
         * &lt;![CDATA[The stream is connected.]]&gt;
         */
        CONNECTED,
    }
    /**
     * Bitfield/set of flags generated from the Telepathy specification.
     */
    enum MediaStreamTransportType {
        /**
         * &lt;![CDATA[           A local address         ]]&gt;
         */
        LOCAL,
        /**
         * &lt;![CDATA[           An external address derived by a method such as STUN         ]]&gt;
         */
        DERIVED,
        /**
         * &lt;![CDATA[           An external stream relay         ]]&gt;
         */
        RELAY,
    }
    /**
     * Bitfield/set of flags generated from the Telepathy specification.
     */
    enum MediaStreamType {
        /**
         * &lt;![CDATA[An audio stream]]&gt;
         */
        AUDIO,
        /**
         * &lt;![CDATA[A video stream]]&gt;
         */
        VIDEO,
    }
    /**
     * Bitfield/set of flags generated from the Telepathy specification.
     */
    enum RCPTXRRTTMode {
        /**
         * &lt;![CDATA[           Both RTP data senders and data receivers MAY send DLRR           blocks.         ]]&gt;
         */
        ALL,
        /**
         * &lt;![CDATA[           Only active RTP senders MAY send DLRR blocks, i.e., non RTP           senders SHALL NOT send DLRR blocks.         ]]&gt;
         */
        SENDER,
    }
    /**
     * &lt;![CDATA[         A type of access control for Rich_Presence_Access_Control.           For most types, the exact access control is given by an associated           variant.                     These are the access control types from XMPP publish/subscribe           (XEP-0060).                   Location           uses this for historical reasons, new interfaces will use           Access_Control_Type.       ]]&gt;
     *
     * Bitfield/set of flags generated from the Telepathy specification.
     */
    enum RichPresenceAccessControlType {
        /**
         * &lt;![CDATA[           The associated variant is a list of contacts (signature 'au',           Contact_Handle[]) who can see the extended presence information.         ]]&gt;
         */
        WHITELIST,
        /**
         * &lt;![CDATA[           All contacts in the user's 'publish' contact list can see the           extended presence information. The associated variant is ignored.         ]]&gt;
         */
        PUBLISH_LIST,
        /**
         * &lt;![CDATA[           The associated variant is a handle of type Group (signature 'u',           Group_Handle) representing a group of contacts who can see the           extended presence information.         ]]&gt;
         */
        GROUP,
        /**
         * &lt;![CDATA[           Anyone with access to the service can see the extended presence           information.         ]]&gt;
         */
        OPEN,
    }
    /**
     * &lt;![CDATA[         A reason why SASL authentication was aborted by the client.       ]]&gt;
     *
     * Bitfield/set of flags generated from the Telepathy specification.
     */
    enum SASLAbortReason {
        /**
         * &lt;![CDATA[           The server sent an invalid challenge or data.         ]]&gt;
         */
        INVALID_CHALLENGE,
        /**
         * &lt;![CDATA[           The user aborted the authentication.         ]]&gt;
         */
        USER_ABORT,
    }
    /**
     * Bitfield/set of flags generated from the Telepathy specification.
     */
    enum SASLStatus {
        /**
         * &lt;![CDATA[           The initial state. The Handler SHOULD either           call AbortSASL, or connect to the           NewChallenge signal then call           StartMechanism or           StartMechanismWithData.         ]]&gt;
         */
        NOT_STARTED,
        /**
         * &lt;![CDATA[           The challenge/response exchange is in progress. The Handler SHOULD           call either Respond or           AcceptSASL exactly once per emission           of NewChallenge, or call           AbortSASL at any time.         ]]&gt;
         */
        IN_PROGRESS,
        /**
         * &lt;![CDATA[           The server has indicated successful authentication, and the           connection manager is waiting for confirmation from the Handler.           The Handler must call either AcceptSASL or           AbortSASL to indicate whether it           considers authentication to have been successful.         ]]&gt;
         */
        SERVER_SUCCEEDED,
        /**
         * &lt;![CDATA[           The Handler has indicated successful authentication, and the           connection manager is waiting for confirmation from the server.           The state will progress to either Succeeded or Server_Failed when           confirmation is received.         ]]&gt;
         */
        CLIENT_ACCEPTED,
        /**
         * &lt;![CDATA[           Everyone is happy (the server sent success, and the client has called           AcceptSASL). Connection to the server           will proceed as soon as this state is reached. The Handler SHOULD           call Close           to close the channel.         ]]&gt;
         */
        SUCCEEDED,
        /**
         * &lt;![CDATA[           The server has indicated an authentication failure.           If CanTryAgain is true,           the client may try to authenticate again, by calling           StartMechanism or           StartMechanismWithData again.           Otherwise, it should give up completely, by calling Close           on the channel.         ]]&gt;
         */
        SERVER_FAILED,
        /**
         * &lt;![CDATA[           The client has indicated an authentication failure. The           possible actions are the same as for Server_Failed.         ]]&gt;
         */
        CLIENT_FAILED,
    }
    /**
     * &lt;![CDATA[         Enum indicating whether a contact is sending media.       ]]&gt;
     *
     * Bitfield/set of flags generated from the Telepathy specification.
     */
    enum SendingState {
        /**
         * &lt;![CDATA[           The contact is not sending media and has not been asked to           do so.         ]]&gt;
         */
        NONE,
        /**
         * &lt;![CDATA[           The contact has been asked to start sending media.         ]]&gt;
         */
        PENDING_SEND,
        /**
         * &lt;![CDATA[           The contact is sending media.         ]]&gt;
         */
        SENDING,
        /**
         * &lt;![CDATA[           The contact has been asked to stop sending media.         ]]&gt;
         */
        PENDING_STOP_SENDING,
    }
    /**
     * &lt;![CDATA[         The various types of service points a channel might connect to.       ]]&gt;
     *
     * Bitfield/set of flags generated from the Telepathy specification.
     */
    enum ServicePointType {
        /**
         * &lt;![CDATA[           The channel is not communicating with a service point, or it is not           known whether it is communicating with a service point (e.g. an           ordinary call).         ]]&gt;
         */
        NONE,
        /**
         * &lt;![CDATA[           The service point is a generic emergency point.         ]]&gt;
         */
        EMERGENCY,
        /**
         * &lt;![CDATA[           The service point is some kind of counseling service (ie, mental health           or child-services counseling).         ]]&gt;
         */
        COUNSELING,
    }
    /**
     * Bitfield/set of flags generated from the Telepathy specification.
     */
    enum SocketAccessControl {
        /**
         * &lt;![CDATA[           The IP or Unix socket can be accessed by any local user (e.g.             a Unix socket that accepts all local connections, or an IP socket             listening on 127.0.0.1 (or ::1) or rejecting connections not from             that address). The associated variant must be ignored.            For a D-Bus tube, this means that the "same user" access             control typically provided by default in D-Bus implementations             SHOULD be disabled. If the socket is only available to local users             (e.g. a Unix socket, an IPv4 socket bound to 127.0.0.1, or an             IPv6 socket bound to ::1), the ANONYMOUS             authentication mechanism MAY be enabled.         ]]&gt;
         */
        LOCALHOST,
        /**
         * &lt;![CDATA[           May only be used on IP sockets, and only for Stream tubes.                      The associated variant must contain           a struct Socket_Address_IPv4 (or Socket_Address_IPv6)           containing the string form of an IP address of the appropriate           version, and a port number. The socket can only be accessed if the           connecting process has that address and port number; all other           connections will be rejected.         ]]&gt;
         */
        PORT,
        /**
         * &lt;![CDATA[           May only be used on IP sockets. The associated variant must contain           a struct Socket_Netmask_IPv4 (or Socket_Netmask_IPv6) with           signature (sy), containing the string form of an           IP address of the appropriate version, and a prefix length "n".           The socket can only be accessed if the first n bits of the           connecting address match the first n bits of the given address.         ]]&gt;
         */
        NETMASK,
        /**
         * &lt;![CDATA[           The high-level meaning of this access control type is that             only the same user (e.g. same numeric Unix uid) is allowed to             interact with the tube. Exactly how this is achieved varies by             channel type.            For StreamTube channels, this access control type             may only be used on UNIX sockets.             The connecting process must send a byte when             it first connects, which is not considered to be part of the data             stream. If the operating system uses sendmsg() with SCM_CREDS or             SCM_CREDENTIALS to pass credentials over sockets, the connecting             process must do so if possible; if not, it must still send the             byte, without any attached credentials. (This mechanism is             very similar to the first byte of a D-Bus connection, except that             in D-Bus the byte is always zero, whereas in Tubes it can be             nonzero.)            For DBusTube channels, this access control type             may be used on any type of socket, and there is no extra byte             added by Telepathy at the beginning of the stream: all bytes in             the stream are part of the D-Bus tube connection. The connecting             process should prove its identity via any of the SASL             authentication mechanisms usually used for D-Bus (in typical             D-Bus implementations this involves either sending and receiving             credentials as above, or demonstrating the ability to write to a             file in the user's home directory).            In either case, the listening process will disconnect the             connection unless it can determine by OS-specific means that             the connecting process has the same user ID as the listening             process.            In either tube type, the associated variant must be ignored.         ]]&gt;
         */
        CREDENTIALS,
    }
    /**
     * Bitfield/set of flags generated from the Telepathy specification.
     */
    enum SocketAddressType {
        /**
         * &lt;![CDATA[           A Unix socket. The address variant contains a byte-array, signature 'ay',           containing the path of the socket.         ]]&gt;
         */
        UNIX,
        /**
         * &lt;![CDATA[           An abstract Unix socket. The address variant contains a byte-array,           signature 'ay', containing the path of the socket including the           leading null byte.         ]]&gt;
         */
        ABSTRACT_UNIX,
        /**
         * &lt;![CDATA[           An IPv4 socket. The address variant contains a Socket_Address_IPv4,           i.e. a structure with signature (sq)           in which the string is an IPv4 dotted-quad address literal           (and must not be a DNS name), while the 16-bit unsigned integer is           the port number.         ]]&gt;
         */
        IPV4,
        /**
         * &lt;![CDATA[           An IPv6 socket. The address variant contains a Socket_Address_IPv6,           i.e. a structure with signature (sq)           in which the string is an IPv6 address literal as specified in           RFC2373 (and must not be a DNS name), while the 16-bit unsigned           integer is the port number.         ]]&gt;
         */
        IPV6,
    }
    /**
     * &lt;![CDATA[         Media streams can use more than one UDP socket: one for RTP (data)         and one for RTCP (control). Most of the time, they are adjacent         to each other, but some protocols (xmpp) signal each port separately.       ]]&gt;
     *
     * Bitfield/set of flags generated from the Telepathy specification.
     */
    enum StreamComponent {
        /**
         * &lt;![CDATA[           The stream transport type is unknown or not applicable           (should not appear over dbus).         ]]&gt;
         */
        UNKNOWN,
        /**
         * &lt;![CDATA[           This is the high-traffic data socket, containing the audio/video           data for the stream.         ]]&gt;
         */
        DATA,
        /**
         * &lt;![CDATA[           This is the low-traffic control socket, usually containing feedback           about packet loss etc.         ]]&gt;
         */
        CONTROL,
    }
    /**
     * &lt;![CDATA[         Represents the state of ICE negotiation for a single component of a         stream to an endpoint.       ]]&gt;
     *
     * Bitfield/set of flags generated from the Telepathy specification.
     */
    enum StreamEndpointState {
        /**
         * &lt;![CDATA[           Candidate gathering and connectivity checks are in progress.         ]]&gt;
         */
        CONNECTING,
        /**
         * &lt;![CDATA[           The streaming implementation has found at least one working           candidate pair. It is possible to send media at this point, but the           controlling side has yet to negotiate the final candidates for use           in this call.         ]]&gt;
         */
        PROVISIONALLY_CONNECTED,
        /**
         * &lt;![CDATA[           This component of the stream is connected, and an updated offer has           been sent and accepted (finalising the candidates to be used for the           call). This should be set by the CM in response to           AcceptSelectedCandidatePair.         ]]&gt;
         */
        FULLY_CONNECTED,
        /**
         * &lt;![CDATA[           The streaming implementation has tried connecting to all of the           available candidates and none of them have connected. This is           distinct from Failed, because the CM might be able to provide more           candidates later (more likely in XMPP than SIP).         ]]&gt;
         */
        EXHAUSTED_CANDIDATES,
        /**
         * &lt;![CDATA[           The CM and streaming implementation are in agreement that it is           impossible to connect to this endpoint. This value should only be           set by the CM.         ]]&gt;
         */
        FAILED,
    }
    /**
     * &lt;![CDATA[         The type of SendingState         and ReceivingState.       ]]&gt;
     *
     * Bitfield/set of flags generated from the Telepathy specification.
     */
    enum StreamFlowState {
        /**
         * &lt;![CDATA[           No data is flowing (or expected to be flowing) at this time.         ]]&gt;
         */
        STOPPED,
        /**
         * &lt;![CDATA[           The streaming implementation has been told to start or receiving,           but has not yet indicated that it is doing so.         ]]&gt;
         */
        PENDING_START,
        /**
         * &lt;![CDATA[           The streaming implementation has been told to stop sending or           receiving data, but it has not yet indicated that it has done so.         ]]&gt;
         */
        PENDING_STOP,
        /**
         * &lt;![CDATA[           The streaming implementation is successfully sending or receiving           data, and everything is going swimmingly.         ]]&gt;
         */
        STARTED,
    }
    /**
     * &lt;![CDATA[         A transport that can be used for streaming.       ]]&gt;
     *
     * Bitfield/set of flags generated from the Telepathy specification.
     */
    enum StreamTransportType {
        /**
         * &lt;![CDATA[           The stream transport type is unknown or not applicable           (for streams that do not have a configurable transport).         ]]&gt;
         */
        UNKNOWN,
        /**
         * &lt;![CDATA[           Raw UDP, with or without STUN. All streaming clients are assumed to           support this transport, so there is no handler capability token for           it in the Call1 interface.           [This corresponds to "none" or "stun" in the old Media.StreamHandler           interface.]         ]]&gt;
         */
        RAW_UDP,
        /**
         * &lt;![CDATA[           Interactive Connectivity Establishment, as defined by RFC           5245. Note that this value covers ICE-UDP only.           [This corresponds to "ice-udp" in the old           Media.StreamHandler interface.]         ]]&gt;
         */
        ICE,
        /**
         * &lt;![CDATA[           Google Talk peer-to-peer connectivity establishment, as implemented           by libjingle 0.3.           [This corresponds to "gtalk-p2p" in the old Media.StreamHandler           interface.]         ]]&gt;
         */
        GTALK_P2P,
        /**
         * &lt;![CDATA[           The transport used by Windows Live Messenger 2009 or later, which           resembles ICE draft 19.           [This corresponds to "wlm-2009" in the old Media.StreamHandler           interface.]         ]]&gt;
         */
        WLM_2009,
        /**
         * &lt;![CDATA[           Shared memory transport, as implemented by the GStreamer           shmsrc and shmsink plugins.         ]]&gt;
         */
        SHM,
        /**
         * &lt;![CDATA[           Multicast transport.         ]]&gt;
         */
        MULTICAST,
    }
    /**
     * &lt;![CDATA[         An enumeration indicating whether presence subscription is denied,           denied but pending permission, or allowed. The exact semantics           vary according to where this type is used: see the           subscribe and           publish contact attributes for           details.       ]]&gt;
     *
     * Bitfield/set of flags generated from the Telepathy specification.
     */
    enum SubscriptionState {
        /**
         * &lt;![CDATA[The presence subscription state is           unknown.]]&gt;
         */
        UNKNOWN,
        /**
         * &lt;![CDATA[Presence information cannot be seen, and either the           subscription state Removed_Remotely does not apply, or it is           not known whether that state applies.         ]]&gt;
         */
        NO,
        /**
         * &lt;![CDATA[Presence information cannot be seen because the           remote contact took action: either the local user's request to           see the remote contact's presence was denied, or the remote           contact requested to see the local user's presence but then           cancelled their request.]]&gt;
         */
        REMOVED_REMOTELY,
        /**
         * &lt;![CDATA[Presence information cannot be seen. Permission           to see presence information has been requested, and the request           has not yet been declined or accepted.]]&gt;
         */
        ASK,
        /**
         * &lt;![CDATA[Presence information can be seen.]]&gt;
         */
        YES,
    }
    /**
     * &lt;![CDATA[         Possible reasons to reject a TLS certificate.       ]]&gt;
     *
     * Bitfield/set of flags generated from the Telepathy specification.
     */
    enum TLSCertificateRejectReason {
        /**
         * &lt;![CDATA[           The certificate has been rejected for another reason           not listed in this enumeration.         ]]&gt;
         */
        UNKNOWN,
        /**
         * &lt;![CDATA[           The certificate is not trusted.         ]]&gt;
         */
        UNTRUSTED,
        /**
         * &lt;![CDATA[           The certificate is expired.         ]]&gt;
         */
        EXPIRED,
        /**
         * &lt;![CDATA[           The certificate is not active yet.         ]]&gt;
         */
        NOT_ACTIVATED,
        /**
         * &lt;![CDATA[           The certificate provided does not have the expected           fingerprint.         ]]&gt;
         */
        FINGERPRINT_MISMATCH,
        /**
         * &lt;![CDATA[           The hostname certified does not match the provided one.         ]]&gt;
         */
        HOSTNAME_MISMATCH,
        /**
         * &lt;![CDATA[           The certificate is self-signed.         ]]&gt;
         */
        SELF_SIGNED,
        /**
         * &lt;![CDATA[           The certificate has been revoked.         ]]&gt;
         */
        REVOKED,
        /**
         * &lt;![CDATA[           The certificate uses an insecure cipher algorithm, or is           cryptographically weak.         ]]&gt;
         */
        INSECURE,
        /**
         * &lt;![CDATA[           The length in bytes of the certificate, or the depth of the           certificate chain exceed the limits imposed by the crypto           library.         ]]&gt;
         */
        LIMIT_EXCEEDED,
    }
    /**
     * &lt;![CDATA[         The possible states for a TLSCertificate         object.       ]]&gt;
     *
     * Bitfield/set of flags generated from the Telepathy specification.
     */
    enum TLSCertificateState {
        /**
         * &lt;![CDATA[           The certificate is currently waiting to be accepted or rejected.         ]]&gt;
         */
        PENDING,
        /**
         * &lt;![CDATA[           The certificate has been verified.         ]]&gt;
         */
        ACCEPTED,
        /**
         * &lt;![CDATA[           The certificate has been rejected.         ]]&gt;
         */
        REJECTED,
    }
    /**
     * Bitfield/set of flags generated from the Telepathy specification.
     */
    enum TubeChannelState {
        /**
         * &lt;![CDATA[           The initiator offered the tube. The tube is waiting to be           accepted/closed locally. If the client accepts the tube, the tube's           state will be Open.         ]]&gt;
         */
        LOCAL_PENDING,
        /**
         * &lt;![CDATA[           The tube is waiting to be accepted/closed remotely. If the           recipient accepts the tube, the tube's state will be Open.         ]]&gt;
         */
        REMOTE_PENDING,
        /**
         * &lt;![CDATA[           The initiator offered the tube and the recipient accepted it. The           tube is open for traffic. The tube's state stays in this state until           it is closed.         ]]&gt;
         */
        OPEN,
        /**
         * &lt;![CDATA[           The tube channel has been requested but the tube is not yet offered.           The client should offer the tube to the recipient and the tube's           state will be Remote_Pending. The method used to offer the tube           depends on the tube type.         ]]&gt;
         */
        NOT_OFFERED,
    }
    /**
     * Bitfield/set of flags generated from the Telepathy specification.
     */
    enum TubeState {
        /**
         * &lt;![CDATA[           The tube is waiting to be accepted/closed locally.         ]]&gt;
         */
        LOCAL_PENDING,
        /**
         * &lt;![CDATA[           The tube is waiting to be accepted/closed remotely.         ]]&gt;
         */
        REMOTE_PENDING,
        /**
         * &lt;![CDATA[           The tube is open for traffic.         ]]&gt;
         */
        OPEN,
    }
    /**
     * Bitfield/set of flags generated from the Telepathy specification.
     */
    enum TubeType {
        /**
         * &lt;![CDATA[           The tube is D-Bus tube as described by the             org.freedesktop.Telepathy.Channel.Type.DBusTube interface.         ]]&gt;
         */
        DBUS,
        /**
         * &lt;![CDATA[           The tube is stream tube as described by the             org.freedesktop.Telepathy.Channel.Type.StreamTube interface.         ]]&gt;
         */
        STREAM,
    }
    /**
     * The account manager's well-known bus name
     */
    const ACCOUNT_MANAGER_BUS_NAME: string;
    /**
     * The account manager's standard object path
     */
    const ACCOUNT_MANAGER_OBJECT_PATH: string;
    /**
     * The common prefix of the object path for all Account objects.
     */
    const ACCOUNT_OBJECT_PATH_BASE: string;
    /**
     * The channel dispatcher's well-known bus name
     */
    const CHANNEL_DISPATCHER_BUS_NAME: string;
    /**
     * The channel dispatcher's standard object path
     */
    const CHANNEL_DISPATCHER_OBJECT_PATH: string;
    /**
     * The common prefix of the well-known bus name for any Telepathy Client.
     */
    const CLIENT_BUS_NAME_BASE: string;
    /**
     * The common prefix of the well-known object path for any Telepathy Client.
     */
    const CLIENT_OBJECT_PATH_BASE: string;
    /**
     * The prefix for a connection manager's bus name, to which the CM's name
     * (e.g. "gabble") should be appended.
     */
    const CM_BUS_NAME_BASE: string;
    /**
     * The prefix for a connection manager's object path, to which the CM's name
     * (e.g. "gabble") should be appended.
     */
    const CM_OBJECT_PATH_BASE: string;
    /**
     * The prefix for a connection's bus name, to which the CM's name
     * (e.g. "gabble"), the protocol (e.g. "jabber") and an element or sequence
     * of elements representing the account should be appended.
     */
    const CONN_BUS_NAME_BASE: string;
    /**
     * The prefix for a connection's object path, to which the CM's name
     * (e.g. "gabble"), the protocol (e.g. "jabber") and an element or sequence
     * of elements representing the account should be appended.
     */
    const CONN_OBJECT_PATH_BASE: string;
    /**
     * The standard path for objects implementing the Telepathy Debug interface
     * (#TpSvcDebug).
     */
    const DEBUG_OBJECT_PATH: string;
    /**
     * The common prefix of Telepathy errors, as a string constant, without
     * the trailing '.' character.
     */
    const ERROR_PREFIX: string;
    const IFACE_ACCOUNT: string;
    const IFACE_ACCOUNT_INTERFACE_ADDRESSING: string;
    const IFACE_ACCOUNT_INTERFACE_AVATAR: string;
    const IFACE_ACCOUNT_INTERFACE_STORAGE: string;
    const IFACE_ACCOUNT_MANAGER: string;
    const IFACE_AUTHENTICATION_TLS_CERTIFICATE: string;
    const IFACE_CALL_CONTENT: string;
    const IFACE_CALL_CONTENT_INTERFACE_AUDIO_CONTROL: string;
    const IFACE_CALL_CONTENT_INTERFACE_DTMF: string;
    const IFACE_CALL_CONTENT_INTERFACE_MEDIA: string;
    const IFACE_CALL_CONTENT_INTERFACE_VIDEO_CONTROL: string;
    const IFACE_CALL_CONTENT_MEDIA_DESCRIPTION: string;
    const IFACE_CALL_CONTENT_MEDIA_DESCRIPTION_INTERFACE_RTCP_EXTENDED_REPORTS: string;
    const IFACE_CALL_CONTENT_MEDIA_DESCRIPTION_INTERFACE_RTCP_FEEDBACK: string;
    const IFACE_CALL_CONTENT_MEDIA_DESCRIPTION_INTERFACE_RTP_HEADER_EXTENSIONS: string;
    const IFACE_CALL_STREAM: string;
    const IFACE_CALL_STREAM_ENDPOINT: string;
    const IFACE_CALL_STREAM_INTERFACE_MEDIA: string;
    const IFACE_CHANNEL: string;
    const IFACE_CHANNEL_DISPATCHER: string;
    const IFACE_CHANNEL_DISPATCHER_INTERFACE_MESSAGES1: string;
    const IFACE_CHANNEL_DISPATCHER_INTERFACE_OPERATION_LIST: string;
    const IFACE_CHANNEL_DISPATCH_OPERATION: string;
    const IFACE_CHANNEL_INTERFACE_ANONYMITY: string;
    const IFACE_CHANNEL_INTERFACE_CALL_STATE: string;
    const IFACE_CHANNEL_INTERFACE_CAPTCHA_AUTHENTICATION: string;
    const IFACE_CHANNEL_INTERFACE_CHAT_STATE: string;
    const IFACE_CHANNEL_INTERFACE_CONFERENCE: string;
    const IFACE_CHANNEL_INTERFACE_DESTROYABLE: string;
    const IFACE_CHANNEL_INTERFACE_DTMF: string;
    const IFACE_CHANNEL_INTERFACE_FILE_TRANSFER_METADATA: string;
    const IFACE_CHANNEL_INTERFACE_GROUP: string;
    const IFACE_CHANNEL_INTERFACE_HOLD: string;
    const IFACE_CHANNEL_INTERFACE_MEDIA_SIGNALLING: string;
    const IFACE_CHANNEL_INTERFACE_MESSAGES: string;
    const IFACE_CHANNEL_INTERFACE_PASSWORD: string;
    const IFACE_CHANNEL_INTERFACE_ROOM: string;
    const IFACE_CHANNEL_INTERFACE_ROOM_CONFIG: string;
    const IFACE_CHANNEL_INTERFACE_SASL_AUTHENTICATION: string;
    const IFACE_CHANNEL_INTERFACE_SECURABLE: string;
    const IFACE_CHANNEL_INTERFACE_SERVICE_POINT: string;
    const IFACE_CHANNEL_INTERFACE_SMS: string;
    const IFACE_CHANNEL_INTERFACE_SUBJECT: string;
    const IFACE_CHANNEL_INTERFACE_TUBE: string;
    const IFACE_CHANNEL_REQUEST: string;
    const IFACE_CHANNEL_TYPE_CALL: string;
    const IFACE_CHANNEL_TYPE_CONTACT_LIST: string;
    const IFACE_CHANNEL_TYPE_CONTACT_SEARCH: string;
    const IFACE_CHANNEL_TYPE_DBUS_TUBE: string;
    const IFACE_CHANNEL_TYPE_FILE_TRANSFER: string;
    const IFACE_CHANNEL_TYPE_ROOM_LIST: string;
    const IFACE_CHANNEL_TYPE_SERVER_AUTHENTICATION: string;
    const IFACE_CHANNEL_TYPE_SERVER_TLS_CONNECTION: string;
    const IFACE_CHANNEL_TYPE_STREAMED_MEDIA: string;
    const IFACE_CHANNEL_TYPE_STREAM_TUBE: string;
    const IFACE_CHANNEL_TYPE_TEXT: string;
    const IFACE_CHANNEL_TYPE_TUBES: string;
    const IFACE_CLIENT: string;
    const IFACE_CLIENT_APPROVER: string;
    const IFACE_CLIENT_HANDLER: string;
    const IFACE_CLIENT_INTERFACE_REQUESTS: string;
    const IFACE_CLIENT_OBSERVER: string;
    const IFACE_CONNECTION: string;
    const IFACE_CONNECTION_INTERFACE_ADDRESSING: string;
    const IFACE_CONNECTION_INTERFACE_ALIASING: string;
    const IFACE_CONNECTION_INTERFACE_ANONYMITY: string;
    const IFACE_CONNECTION_INTERFACE_AVATARS: string;
    const IFACE_CONNECTION_INTERFACE_BALANCE: string;
    const IFACE_CONNECTION_INTERFACE_CAPABILITIES: string;
    const IFACE_CONNECTION_INTERFACE_CELLULAR: string;
    const IFACE_CONNECTION_INTERFACE_CLIENT_TYPES: string;
    const IFACE_CONNECTION_INTERFACE_CONTACTS: string;
    const IFACE_CONNECTION_INTERFACE_CONTACT_BLOCKING: string;
    const IFACE_CONNECTION_INTERFACE_CONTACT_CAPABILITIES: string;
    const IFACE_CONNECTION_INTERFACE_CONTACT_GROUPS: string;
    const IFACE_CONNECTION_INTERFACE_CONTACT_INFO: string;
    const IFACE_CONNECTION_INTERFACE_CONTACT_LIST: string;
    const IFACE_CONNECTION_INTERFACE_LOCATION: string;
    const IFACE_CONNECTION_INTERFACE_MAIL_NOTIFICATION: string;
    const IFACE_CONNECTION_INTERFACE_POWER_SAVING: string;
    const IFACE_CONNECTION_INTERFACE_PRESENCE: string;
    const IFACE_CONNECTION_INTERFACE_RENAMING: string;
    const IFACE_CONNECTION_INTERFACE_REQUESTS: string;
    const IFACE_CONNECTION_INTERFACE_SERVICE_POINT: string;
    const IFACE_CONNECTION_INTERFACE_SIDECARS1: string;
    const IFACE_CONNECTION_INTERFACE_SIMPLE_PRESENCE: string;
    const IFACE_CONNECTION_MANAGER: string;
    const IFACE_DBUS_DAEMON: string;
    const IFACE_DBUS_INTROSPECTABLE: string;
    const IFACE_DBUS_PEER: string;
    const IFACE_DBUS_PROPERTIES: string;
    const IFACE_DEBUG: string;
    const IFACE_MEDIA_SESSION_HANDLER: string;
    const IFACE_MEDIA_STREAM_HANDLER: string;
    const IFACE_PROPERTIES_INTERFACE: string;
    const IFACE_PROTOCOL: string;
    const IFACE_PROTOCOL_INTERFACE_ADDRESSING: string;
    const IFACE_PROTOCOL_INTERFACE_AVATARS: string;
    const IFACE_PROTOCOL_INTERFACE_PRESENCE: string;
    /**
     * 1 higher than the highest valid value of #TpAccessControlType.
     */
    const NUM_ACCESS_CONTROL_TYPES: number;
    /**
     * 1 higher than the highest valid value of #TpCallContentDisposition.
     */
    const NUM_CALL_CONTENT_DISPOSITIONS: number;
    /**
     * 1 higher than the highest valid value of #TpCallContentPacketizationType.
     */
    const NUM_CALL_CONTENT_PACKETIZATION_TYPES: number;
    /**
     * 1 higher than the highest valid value of #TpCallState.
     */
    const NUM_CALL_STATES: number;
    /**
     * 1 higher than the highest valid value of #TpCallStateChangeReason.
     */
    const NUM_CALL_STATE_CHANGE_REASONS: number;
    /**
     * 1 higher than the highest valid value of #TpCallStreamCandidateType.
     */
    const NUM_CALL_STREAM_CANDIDATE_TYPES: number;
    /**
     * 1 higher than the highest valid value of #TpCaptchaCancelReason.
     */
    const NUM_CAPTCHA_CANCEL_REASONS: number;
    /**
     * 1 higher than the highest valid value of #TpCaptchaStatus.
     */
    const NUM_CAPTCHA_STATUSES: number;
    /**
     * 1 higher than the highest valid value of #TpChannelChatState.
     */
    const NUM_CHANNEL_CHAT_STATES: number;
    /**
     * 1 higher than the highest valid value of #TpChannelContactSearchState.
     */
    const NUM_CHANNEL_CONTACT_SEARCH_STATES: number;
    /**
     * 1 higher than the highest valid value of #TpChannelGroupChangeReason.
     */
    const NUM_CHANNEL_GROUP_CHANGE_REASONS: number;
    /**
     * 1 higher than the highest valid value of #TpChannelTextMessageType.
     */
    const NUM_CHANNEL_TEXT_MESSAGE_TYPES: number;
    /**
     * 1 higher than the highest valid value of #TpChannelTextSendError.
     */
    const NUM_CHANNEL_TEXT_SEND_ERRORS: number;
    /**
     * 1 higher than the highest valid value of #TpConnectionPresenceType.
     */
    const NUM_CONNECTION_PRESENCE_TYPES: number;
    /**
     * 1 higher than the highest valid value of #TpConnectionStatus.
     */
    const NUM_CONNECTION_STATUSES: number;
    /**
     * 1 higher than the highest valid value of #TpConnectionStatusReason.
     */
    const NUM_CONNECTION_STATUS_REASONS: number;
    /**
     * 1 higher than the highest #TpContactFeature supported by this version of
     * telepathy-glib.
     */
    const NUM_CONTACT_FEATURES: number;
    /**
     * 1 higher than the highest valid value of #TpContactListState.
     */
    const NUM_CONTACT_LIST_STATES: number;
    /**
     * 1 higher than the highest valid value of #TpContactMetadataStorageType.
     */
    const NUM_CONTACT_METADATA_STORAGE_TYPES: number;
    /**
     * 1 more than the highest valid #TpDBusError at the time of compilation
     */
    const NUM_DBUS_ERRORS: number;
    /**
     * 1 higher than the highest valid value of #TpDebugLevel.
     */
    const NUM_DEBUG_LEVELS: number;
    /**
     * 1 higher than the highest valid value of #TpDeliveryStatus.
     */
    const NUM_DELIVERY_STATUSES: number;
    /**
     * 1 higher than the highest valid value of #TpDTMFEvent.
     */
    const NUM_DTMF_EVENTS: number;
    /**
     * 1 higher than the highest valid value of #TpFileHashType.
     */
    const NUM_FILE_HASH_TYPES: number;
    /**
     * 1 higher than the highest valid value of #TpFileTransferState.
     */
    const NUM_FILE_TRANSFER_STATES: number;
    /**
     * 1 higher than the highest valid value of #TpFileTransferStateChangeReason.
     */
    const NUM_FILE_TRANSFER_STATE_CHANGE_REASONS: number;
    /**
     * 1 higher than the highest valid value of #TpHandleType.
     */
    const NUM_HANDLE_TYPES: number;
    /**
     * 1 higher than the highest valid value of #TpHTTPMethod.
     */
    const NUM_HTTP_METHODS: number;
    /**
     * 1 higher than the highest valid value of #TpLocalHoldState.
     */
    const NUM_LOCAL_HOLD_STATES: number;
    /**
     * 1 higher than the highest valid value of #TpLocalHoldStateReason.
     */
    const NUM_LOCAL_HOLD_STATE_REASONS: number;
    /**
     * 1 higher than the highest valid value of #TpMediaStreamBaseProto.
     */
    const NUM_MEDIA_STREAM_BASE_PROTOS: number;
    /**
     * 1 higher than the highest valid value of #TpMediaStreamDirection.
     */
    const NUM_MEDIA_STREAM_DIRECTIONS: number;
    /**
     * 1 higher than the highest valid value of #TpMediaStreamError.
     */
    const NUM_MEDIA_STREAM_ERRORS: number;
    /**
     * 1 higher than the highest valid value of #TpMediaStreamState.
     */
    const NUM_MEDIA_STREAM_STATES: number;
    /**
     * 1 higher than the highest valid value of #TpMediaStreamTransportType.
     */
    const NUM_MEDIA_STREAM_TRANSPORT_TYPES: number;
    /**
     * 1 higher than the highest valid value of #TpMediaStreamType.
     */
    const NUM_MEDIA_STREAM_TYPES: number;
    /**
     * 1 higher than the highest valid value of #TpRCPTXRRTTMode.
     */
    const NUM_RCPT_XR_RTT_MODES: number;
    /**
     * 1 higher than the highest valid value of #TpRichPresenceAccessControlType.
     */
    const NUM_RICH_PRESENCE_ACCESS_CONTROL_TYPES: number;
    /**
     * 1 higher than the highest valid value of #TpSASLAbortReason.
     */
    const NUM_SASL_ABORT_REASONS: number;
    /**
     * 1 higher than the highest valid value of #TpSASLStatus.
     */
    const NUM_SASL_STATUSES: number;
    /**
     * 1 higher than the highest valid value of #TpSendingState.
     */
    const NUM_SENDING_STATES: number;
    /**
     * 1 higher than the highest valid value of #TpServicePointType.
     */
    const NUM_SERVICE_POINT_TYPES: number;
    /**
     * 1 higher than the highest valid value of #TpSocketAccessControl.
     */
    const NUM_SOCKET_ACCESS_CONTROLS: number;
    /**
     * 1 higher than the highest valid value of #TpSocketAddressType.
     */
    const NUM_SOCKET_ADDRESS_TYPES: number;
    /**
     * 1 higher than the highest valid value of #TpStreamComponent.
     */
    const NUM_STREAM_COMPONENTS: number;
    /**
     * 1 higher than the highest valid value of #TpStreamEndpointState.
     */
    const NUM_STREAM_ENDPOINT_STATES: number;
    /**
     * 1 higher than the highest valid value of #TpStreamFlowState.
     */
    const NUM_STREAM_FLOW_STATES: number;
    /**
     * 1 higher than the highest valid value of #TpStreamTransportType.
     */
    const NUM_STREAM_TRANSPORT_TYPES: number;
    /**
     * 1 higher than the highest valid value of #TpSubscriptionState.
     */
    const NUM_SUBSCRIPTION_STATES: number;
    /**
     * 1 higher than the highest valid value of #TpTLSCertificateRejectReason.
     */
    const NUM_TLS_CERTIFICATE_REJECT_REASONS: number;
    /**
     * 1 higher than the highest valid value of #TpTLSCertificateState.
     */
    const NUM_TLS_CERTIFICATE_STATES: number;
    /**
     * 1 higher than the highest valid value of #TpTubeChannelState.
     */
    const NUM_TUBE_CHANNEL_STATES: number;
    /**
     * 1 higher than the highest valid value of #TpTubeState.
     */
    const NUM_TUBE_STATES: number;
    /**
     * 1 higher than the highest valid value of #TpTubeType.
     */
    const NUM_TUBE_TYPES: number;
    const PROP_ACCOUNT_AUTOMATIC_PRESENCE: string;
    const PROP_ACCOUNT_CHANGING_PRESENCE: string;
    const PROP_ACCOUNT_CONNECTION: string;
    const PROP_ACCOUNT_CONNECTION_ERROR: string;
    const PROP_ACCOUNT_CONNECTION_ERROR_DETAILS: string;
    const PROP_ACCOUNT_CONNECTION_STATUS: string;
    const PROP_ACCOUNT_CONNECTION_STATUS_REASON: string;
    const PROP_ACCOUNT_CONNECT_AUTOMATICALLY: string;
    const PROP_ACCOUNT_CURRENT_PRESENCE: string;
    const PROP_ACCOUNT_DISPLAY_NAME: string;
    const PROP_ACCOUNT_ENABLED: string;
    const PROP_ACCOUNT_HAS_BEEN_ONLINE: string;
    const PROP_ACCOUNT_ICON: string;
    const PROP_ACCOUNT_INTERFACES: string;
    const PROP_ACCOUNT_INTERFACE_ADDRESSING_URI_SCHEMES: string;
    const PROP_ACCOUNT_INTERFACE_AVATAR_AVATAR: string;
    const PROP_ACCOUNT_INTERFACE_STORAGE_STORAGE_IDENTIFIER: string;
    const PROP_ACCOUNT_INTERFACE_STORAGE_STORAGE_PROVIDER: string;
    const PROP_ACCOUNT_INTERFACE_STORAGE_STORAGE_RESTRICTIONS: string;
    const PROP_ACCOUNT_INTERFACE_STORAGE_STORAGE_SPECIFIC_INFORMATION: string;
    const PROP_ACCOUNT_MANAGER_INTERFACES: string;
    const PROP_ACCOUNT_MANAGER_INVALID_ACCOUNTS: string;
    const PROP_ACCOUNT_MANAGER_SUPPORTED_ACCOUNT_PROPERTIES: string;
    const PROP_ACCOUNT_MANAGER_VALID_ACCOUNTS: string;
    const PROP_ACCOUNT_NICKNAME: string;
    const PROP_ACCOUNT_NORMALIZED_NAME: string;
    const PROP_ACCOUNT_PARAMETERS: string;
    const PROP_ACCOUNT_REQUESTED_PRESENCE: string;
    const PROP_ACCOUNT_SERVICE: string;
    const PROP_ACCOUNT_SUPERSEDES: string;
    const PROP_ACCOUNT_VALID: string;
    const PROP_AUTHENTICATION_TLS_CERTIFICATE_CERTIFICATE_CHAIN_DATA: string;
    const PROP_AUTHENTICATION_TLS_CERTIFICATE_CERTIFICATE_TYPE: string;
    const PROP_AUTHENTICATION_TLS_CERTIFICATE_REJECTIONS: string;
    const PROP_AUTHENTICATION_TLS_CERTIFICATE_STATE: string;
    const PROP_CALL_CONTENT_DISPOSITION: string;
    const PROP_CALL_CONTENT_INTERFACES: string;
    const PROP_CALL_CONTENT_INTERFACE_AUDIO_CONTROL_REQUESTED_INPUT_VOLUME: string;
    const PROP_CALL_CONTENT_INTERFACE_AUDIO_CONTROL_REQUESTED_OUTPUT_VOLUME: string;
    const PROP_CALL_CONTENT_INTERFACE_DTMF_CURRENTLY_SENDING_TONES: string;
    const PROP_CALL_CONTENT_INTERFACE_DTMF_DEFERRED_TONES: string;
    const PROP_CALL_CONTENT_INTERFACE_MEDIA_CURRENT_DTMF_EVENT: string;
    const PROP_CALL_CONTENT_INTERFACE_MEDIA_CURRENT_DTMF_STATE: string;
    const PROP_CALL_CONTENT_INTERFACE_MEDIA_LOCAL_MEDIA_DESCRIPTIONS: string;
    const PROP_CALL_CONTENT_INTERFACE_MEDIA_MEDIA_DESCRIPTION_OFFER: string;
    const PROP_CALL_CONTENT_INTERFACE_MEDIA_PACKETIZATION: string;
    const PROP_CALL_CONTENT_INTERFACE_MEDIA_REMOTE_MEDIA_DESCRIPTIONS: string;
    const PROP_CALL_CONTENT_INTERFACE_VIDEO_CONTROL_BITRATE: string;
    const PROP_CALL_CONTENT_INTERFACE_VIDEO_CONTROL_FRAMERATE: string;
    const PROP_CALL_CONTENT_INTERFACE_VIDEO_CONTROL_MANUAL_KEY_FRAMES: string;
    const PROP_CALL_CONTENT_INTERFACE_VIDEO_CONTROL_MTU: string;
    const PROP_CALL_CONTENT_INTERFACE_VIDEO_CONTROL_VIDEO_RESOLUTION: string;
    const PROP_CALL_CONTENT_MEDIA_DESCRIPTION_CODECS: string;
    const PROP_CALL_CONTENT_MEDIA_DESCRIPTION_FURTHER_NEGOTIATION_REQUIRED: string;
    const PROP_CALL_CONTENT_MEDIA_DESCRIPTION_HAS_REMOTE_INFORMATION: string;
    const PROP_CALL_CONTENT_MEDIA_DESCRIPTION_INTERFACES: string;
    const PROP_CALL_CONTENT_MEDIA_DESCRIPTION_INTERFACE_RTCP_EXTENDED_REPORTS_DLRR_MAX_SIZE: string;
    const PROP_CALL_CONTENT_MEDIA_DESCRIPTION_INTERFACE_RTCP_EXTENDED_REPORTS_DUPLICATE_RLE_MAX_SIZE: string;
    const PROP_CALL_CONTENT_MEDIA_DESCRIPTION_INTERFACE_RTCP_EXTENDED_REPORTS_ENABLE_METRICS: string;
    const PROP_CALL_CONTENT_MEDIA_DESCRIPTION_INTERFACE_RTCP_EXTENDED_REPORTS_LOSS_RLE_MAX_SIZE: string;
    const PROP_CALL_CONTENT_MEDIA_DESCRIPTION_INTERFACE_RTCP_EXTENDED_REPORTS_PACKET_RECEIPT_TIMES_MAX_SIZE: string;
    const PROP_CALL_CONTENT_MEDIA_DESCRIPTION_INTERFACE_RTCP_EXTENDED_REPORTS_RTT_MODE: string;
    const PROP_CALL_CONTENT_MEDIA_DESCRIPTION_INTERFACE_RTCP_EXTENDED_REPORTS_STATISTICS_FLAGS: string;
    const PROP_CALL_CONTENT_MEDIA_DESCRIPTION_INTERFACE_RTCP_FEEDBACK_DOES_AVPF: string;
    const PROP_CALL_CONTENT_MEDIA_DESCRIPTION_INTERFACE_RTCP_FEEDBACK_FEEDBACK_MESSAGES: string;
    const PROP_CALL_CONTENT_MEDIA_DESCRIPTION_INTERFACE_RTP_HEADER_EXTENSIONS_HEADER_EXTENSIONS: string;
    const PROP_CALL_CONTENT_MEDIA_DESCRIPTION_REMOTE_CONTACT: string;
    const PROP_CALL_CONTENT_MEDIA_DESCRIPTION_SSRCS: string;
    const PROP_CALL_CONTENT_NAME: string;
    const PROP_CALL_CONTENT_STREAMS: string;
    const PROP_CALL_CONTENT_TYPE: string;
    const PROP_CALL_STREAM_CAN_REQUEST_RECEIVING: string;
    const PROP_CALL_STREAM_ENDPOINT_CONTROLLING: string;
    const PROP_CALL_STREAM_ENDPOINT_ENDPOINT_STATE: string;
    const PROP_CALL_STREAM_ENDPOINT_IS_ICE_LITE: string;
    const PROP_CALL_STREAM_ENDPOINT_REMOTE_CANDIDATES: string;
    const PROP_CALL_STREAM_ENDPOINT_REMOTE_CREDENTIALS: string;
    const PROP_CALL_STREAM_ENDPOINT_SELECTED_CANDIDATE_PAIRS: string;
    const PROP_CALL_STREAM_ENDPOINT_TRANSPORT: string;
    const PROP_CALL_STREAM_INTERFACES: string;
    const PROP_CALL_STREAM_INTERFACE_MEDIA_ENDPOINTS: string;
    const PROP_CALL_STREAM_INTERFACE_MEDIA_HAS_SERVER_INFO: string;
    const PROP_CALL_STREAM_INTERFACE_MEDIA_ICE_RESTART_PENDING: string;
    const PROP_CALL_STREAM_INTERFACE_MEDIA_LOCAL_CANDIDATES: string;
    const PROP_CALL_STREAM_INTERFACE_MEDIA_LOCAL_CREDENTIALS: string;
    const PROP_CALL_STREAM_INTERFACE_MEDIA_RECEIVING_STATE: string;
    const PROP_CALL_STREAM_INTERFACE_MEDIA_RELAY_INFO: string;
    const PROP_CALL_STREAM_INTERFACE_MEDIA_SENDING_STATE: string;
    const PROP_CALL_STREAM_INTERFACE_MEDIA_STUN_SERVERS: string;
    const PROP_CALL_STREAM_INTERFACE_MEDIA_TRANSPORT: string;
    const PROP_CALL_STREAM_LOCAL_SENDING_STATE: string;
    const PROP_CALL_STREAM_REMOTE_MEMBERS: string;
    const PROP_CALL_STREAM_REMOTE_MEMBER_IDENTIFIERS: string;
    const PROP_CHANNEL_CHANNEL_TYPE: string;
    const PROP_CHANNEL_DISPATCHER_INTERFACES: string;
    const PROP_CHANNEL_DISPATCHER_INTERFACE_OPERATION_LIST_DISPATCH_OPERATIONS: string;
    const PROP_CHANNEL_DISPATCHER_SUPPORTS_REQUEST_HINTS: string;
    const PROP_CHANNEL_DISPATCH_OPERATION_ACCOUNT: string;
    const PROP_CHANNEL_DISPATCH_OPERATION_CHANNELS: string;
    const PROP_CHANNEL_DISPATCH_OPERATION_CONNECTION: string;
    const PROP_CHANNEL_DISPATCH_OPERATION_INTERFACES: string;
    const PROP_CHANNEL_DISPATCH_OPERATION_POSSIBLE_HANDLERS: string;
    const PROP_CHANNEL_INITIATOR_HANDLE: string;
    const PROP_CHANNEL_INITIATOR_ID: string;
    const PROP_CHANNEL_INTERFACES: string;
    const PROP_CHANNEL_INTERFACE_ANONYMITY_ANONYMITY_MANDATORY: string;
    const PROP_CHANNEL_INTERFACE_ANONYMITY_ANONYMITY_MODES: string;
    const PROP_CHANNEL_INTERFACE_ANONYMITY_ANONYMOUS_ID: string;
    const PROP_CHANNEL_INTERFACE_CAPTCHA_AUTHENTICATION_CAN_RETRY_CAPTCHA: string;
    const PROP_CHANNEL_INTERFACE_CAPTCHA_AUTHENTICATION_CAPTCHA_ERROR: string;
    const PROP_CHANNEL_INTERFACE_CAPTCHA_AUTHENTICATION_CAPTCHA_ERROR_DETAILS: string;
    const PROP_CHANNEL_INTERFACE_CAPTCHA_AUTHENTICATION_CAPTCHA_STATUS: string;
    const PROP_CHANNEL_INTERFACE_CHAT_STATE_CHAT_STATES: string;
    const PROP_CHANNEL_INTERFACE_CONFERENCE_CHANNELS: string;
    const PROP_CHANNEL_INTERFACE_CONFERENCE_INITIAL_CHANNELS: string;
    const PROP_CHANNEL_INTERFACE_CONFERENCE_INITIAL_INVITEE_HANDLES: string;
    const PROP_CHANNEL_INTERFACE_CONFERENCE_INITIAL_INVITEE_IDS: string;
    const PROP_CHANNEL_INTERFACE_CONFERENCE_INVITATION_MESSAGE: string;
    const PROP_CHANNEL_INTERFACE_CONFERENCE_ORIGINAL_CHANNELS: string;
    const PROP_CHANNEL_INTERFACE_DTMF_CURRENTLY_SENDING_TONES: string;
    const PROP_CHANNEL_INTERFACE_DTMF_DEFERRED_TONES: string;
    const PROP_CHANNEL_INTERFACE_DTMF_INITIAL_TONES: string;
    const PROP_CHANNEL_INTERFACE_FILE_TRANSFER_METADATA_METADATA: string;
    const PROP_CHANNEL_INTERFACE_FILE_TRANSFER_METADATA_SERVICE_NAME: string;
    const PROP_CHANNEL_INTERFACE_GROUP_GROUP_FLAGS: string;
    const PROP_CHANNEL_INTERFACE_GROUP_HANDLE_OWNERS: string;
    const PROP_CHANNEL_INTERFACE_GROUP_LOCAL_PENDING_MEMBERS: string;
    const PROP_CHANNEL_INTERFACE_GROUP_MEMBERS: string;
    const PROP_CHANNEL_INTERFACE_GROUP_MEMBER_IDENTIFIERS: string;
    const PROP_CHANNEL_INTERFACE_GROUP_REMOTE_PENDING_MEMBERS: string;
    const PROP_CHANNEL_INTERFACE_GROUP_SELF_HANDLE: string;
    const PROP_CHANNEL_INTERFACE_MESSAGES_DELIVERY_REPORTING_SUPPORT: string;
    const PROP_CHANNEL_INTERFACE_MESSAGES_MESSAGE_PART_SUPPORT_FLAGS: string;
    const PROP_CHANNEL_INTERFACE_MESSAGES_MESSAGE_TYPES: string;
    const PROP_CHANNEL_INTERFACE_MESSAGES_PENDING_MESSAGES: string;
    const PROP_CHANNEL_INTERFACE_MESSAGES_SUPPORTED_CONTENT_TYPES: string;
    const PROP_CHANNEL_INTERFACE_ROOM_CONFIG_ANONYMOUS: string;
    const PROP_CHANNEL_INTERFACE_ROOM_CONFIG_CAN_UPDATE_CONFIGURATION: string;
    const PROP_CHANNEL_INTERFACE_ROOM_CONFIG_CONFIGURATION_RETRIEVED: string;
    const PROP_CHANNEL_INTERFACE_ROOM_CONFIG_DESCRIPTION: string;
    const PROP_CHANNEL_INTERFACE_ROOM_CONFIG_INVITEONLY: string;
    const PROP_CHANNEL_INTERFACE_ROOM_CONFIG_LIMIT: string;
    const PROP_CHANNEL_INTERFACE_ROOM_CONFIG_MODERATED: string;
    const PROP_CHANNEL_INTERFACE_ROOM_CONFIG_MUTABLE_PROPERTIES: string;
    const PROP_CHANNEL_INTERFACE_ROOM_CONFIG_PASSWORD: string;
    const PROP_CHANNEL_INTERFACE_ROOM_CONFIG_PASSWORD_HINT: string;
    const PROP_CHANNEL_INTERFACE_ROOM_CONFIG_PASSWORD_PROTECTED: string;
    const PROP_CHANNEL_INTERFACE_ROOM_CONFIG_PERSISTENT: string;
    const PROP_CHANNEL_INTERFACE_ROOM_CONFIG_PRIVATE: string;
    const PROP_CHANNEL_INTERFACE_ROOM_CONFIG_TITLE: string;
    const PROP_CHANNEL_INTERFACE_ROOM_CREATION_TIMESTAMP: string;
    const PROP_CHANNEL_INTERFACE_ROOM_CREATOR: string;
    const PROP_CHANNEL_INTERFACE_ROOM_CREATOR_HANDLE: string;
    const PROP_CHANNEL_INTERFACE_ROOM_ROOM_NAME: string;
    const PROP_CHANNEL_INTERFACE_ROOM_SERVER: string;
    const PROP_CHANNEL_INTERFACE_SASL_AUTHENTICATION_AUTHORIZATION_IDENTITY: string;
    const PROP_CHANNEL_INTERFACE_SASL_AUTHENTICATION_AVAILABLE_MECHANISMS: string;
    const PROP_CHANNEL_INTERFACE_SASL_AUTHENTICATION_CAN_TRY_AGAIN: string;
    const PROP_CHANNEL_INTERFACE_SASL_AUTHENTICATION_DEFAULT_REALM: string;
    const PROP_CHANNEL_INTERFACE_SASL_AUTHENTICATION_DEFAULT_USERNAME: string;
    const PROP_CHANNEL_INTERFACE_SASL_AUTHENTICATION_HAS_INITIAL_DATA: string;
    const PROP_CHANNEL_INTERFACE_SASL_AUTHENTICATION_MAY_SAVE_RESPONSE: string;
    const PROP_CHANNEL_INTERFACE_SASL_AUTHENTICATION_SASL_ERROR: string;
    const PROP_CHANNEL_INTERFACE_SASL_AUTHENTICATION_SASL_ERROR_DETAILS: string;
    const PROP_CHANNEL_INTERFACE_SASL_AUTHENTICATION_SASL_STATUS: string;
    const PROP_CHANNEL_INTERFACE_SECURABLE_ENCRYPTED: string;
    const PROP_CHANNEL_INTERFACE_SECURABLE_VERIFIED: string;
    const PROP_CHANNEL_INTERFACE_SERVICE_POINT_CURRENT_SERVICE_POINT: string;
    const PROP_CHANNEL_INTERFACE_SERVICE_POINT_INITIAL_SERVICE_POINT: string;
    const PROP_CHANNEL_INTERFACE_SMS_FLASH: string;
    const PROP_CHANNEL_INTERFACE_SMS_SMS_CHANNEL: string;
    const PROP_CHANNEL_INTERFACE_SUBJECT_ACTOR: string;
    const PROP_CHANNEL_INTERFACE_SUBJECT_ACTOR_HANDLE: string;
    const PROP_CHANNEL_INTERFACE_SUBJECT_CAN_SET: string;
    const PROP_CHANNEL_INTERFACE_SUBJECT_SUBJECT: string;
    const PROP_CHANNEL_INTERFACE_SUBJECT_TIMESTAMP: string;
    const PROP_CHANNEL_INTERFACE_TUBE_PARAMETERS: string;
    const PROP_CHANNEL_INTERFACE_TUBE_STATE: string;
    const PROP_CHANNEL_REQUESTED: string;
    const PROP_CHANNEL_REQUEST_ACCOUNT: string;
    const PROP_CHANNEL_REQUEST_HINTS: string;
    const PROP_CHANNEL_REQUEST_INTERFACES: string;
    const PROP_CHANNEL_REQUEST_PREFERRED_HANDLER: string;
    const PROP_CHANNEL_REQUEST_REQUESTS: string;
    const PROP_CHANNEL_REQUEST_USER_ACTION_TIME: string;
    const PROP_CHANNEL_TARGET_HANDLE: string;
    const PROP_CHANNEL_TARGET_HANDLE_TYPE: string;
    const PROP_CHANNEL_TARGET_ID: string;
    const PROP_CHANNEL_TYPE_CALL_CALL_FLAGS: string;
    const PROP_CHANNEL_TYPE_CALL_CALL_MEMBERS: string;
    const PROP_CHANNEL_TYPE_CALL_CALL_STATE: string;
    const PROP_CHANNEL_TYPE_CALL_CALL_STATE_DETAILS: string;
    const PROP_CHANNEL_TYPE_CALL_CALL_STATE_REASON: string;
    const PROP_CHANNEL_TYPE_CALL_CONTENTS: string;
    const PROP_CHANNEL_TYPE_CALL_HARDWARE_STREAMING: string;
    const PROP_CHANNEL_TYPE_CALL_INITIAL_AUDIO: string;
    const PROP_CHANNEL_TYPE_CALL_INITIAL_AUDIO_NAME: string;
    const PROP_CHANNEL_TYPE_CALL_INITIAL_TRANSPORT: string;
    const PROP_CHANNEL_TYPE_CALL_INITIAL_VIDEO: string;
    const PROP_CHANNEL_TYPE_CALL_INITIAL_VIDEO_NAME: string;
    const PROP_CHANNEL_TYPE_CALL_MEMBER_IDENTIFIERS: string;
    const PROP_CHANNEL_TYPE_CALL_MUTABLE_CONTENTS: string;
    const PROP_CHANNEL_TYPE_CONTACT_SEARCH_AVAILABLE_SEARCH_KEYS: string;
    const PROP_CHANNEL_TYPE_CONTACT_SEARCH_LIMIT: string;
    const PROP_CHANNEL_TYPE_CONTACT_SEARCH_SEARCH_STATE: string;
    const PROP_CHANNEL_TYPE_CONTACT_SEARCH_SERVER: string;
    const PROP_CHANNEL_TYPE_DBUS_TUBE_DBUS_NAMES: string;
    const PROP_CHANNEL_TYPE_DBUS_TUBE_SERVICE_NAME: string;
    const PROP_CHANNEL_TYPE_DBUS_TUBE_SUPPORTED_ACCESS_CONTROLS: string;
    const PROP_CHANNEL_TYPE_FILE_TRANSFER_AVAILABLE_SOCKET_TYPES: string;
    const PROP_CHANNEL_TYPE_FILE_TRANSFER_CONTENT_HASH: string;
    const PROP_CHANNEL_TYPE_FILE_TRANSFER_CONTENT_HASH_TYPE: string;
    const PROP_CHANNEL_TYPE_FILE_TRANSFER_CONTENT_TYPE: string;
    const PROP_CHANNEL_TYPE_FILE_TRANSFER_DATE: string;
    const PROP_CHANNEL_TYPE_FILE_TRANSFER_DESCRIPTION: string;
    const PROP_CHANNEL_TYPE_FILE_TRANSFER_FILENAME: string;
    const PROP_CHANNEL_TYPE_FILE_TRANSFER_FILE_COLLECTION: string;
    const PROP_CHANNEL_TYPE_FILE_TRANSFER_INITIAL_OFFSET: string;
    const PROP_CHANNEL_TYPE_FILE_TRANSFER_SIZE: string;
    const PROP_CHANNEL_TYPE_FILE_TRANSFER_STATE: string;
    const PROP_CHANNEL_TYPE_FILE_TRANSFER_TRANSFERRED_BYTES: string;
    const PROP_CHANNEL_TYPE_FILE_TRANSFER_URI: string;
    const PROP_CHANNEL_TYPE_ROOM_LIST_SERVER: string;
    const PROP_CHANNEL_TYPE_SERVER_AUTHENTICATION_AUTHENTICATION_METHOD: string;
    const PROP_CHANNEL_TYPE_SERVER_TLS_CONNECTION_HOSTNAME: string;
    const PROP_CHANNEL_TYPE_SERVER_TLS_CONNECTION_REFERENCE_IDENTITIES: string;
    const PROP_CHANNEL_TYPE_SERVER_TLS_CONNECTION_SERVER_CERTIFICATE: string;
    const PROP_CHANNEL_TYPE_STREAMED_MEDIA_IMMUTABLE_STREAMS: string;
    const PROP_CHANNEL_TYPE_STREAMED_MEDIA_INITIAL_AUDIO: string;
    const PROP_CHANNEL_TYPE_STREAMED_MEDIA_INITIAL_VIDEO: string;
    const PROP_CHANNEL_TYPE_STREAM_TUBE_SERVICE: string;
    const PROP_CHANNEL_TYPE_STREAM_TUBE_SUPPORTED_SOCKET_TYPES: string;
    const PROP_CLIENT_APPROVER_APPROVER_CHANNEL_FILTER: string;
    const PROP_CLIENT_HANDLER_BYPASS_APPROVAL: string;
    const PROP_CLIENT_HANDLER_CAPABILITIES: string;
    const PROP_CLIENT_HANDLER_HANDLED_CHANNELS: string;
    const PROP_CLIENT_HANDLER_HANDLER_CHANNEL_FILTER: string;
    const PROP_CLIENT_INTERFACES: string;
    const PROP_CLIENT_OBSERVER_DELAY_APPROVERS: string;
    const PROP_CLIENT_OBSERVER_OBSERVER_CHANNEL_FILTER: string;
    const PROP_CLIENT_OBSERVER_RECOVER: string;
    const PROP_CONNECTION_HAS_IMMORTAL_HANDLES: string;
    const PROP_CONNECTION_INTERFACES: string;
    const PROP_CONNECTION_INTERFACE_ANONYMITY_ANONYMITY_MANDATORY: string;
    const PROP_CONNECTION_INTERFACE_ANONYMITY_ANONYMITY_MODES: string;
    const PROP_CONNECTION_INTERFACE_ANONYMITY_SUPPORTED_ANONYMITY_MODES: string;
    const PROP_CONNECTION_INTERFACE_AVATARS_MAXIMUM_AVATAR_BYTES: string;
    const PROP_CONNECTION_INTERFACE_AVATARS_MAXIMUM_AVATAR_HEIGHT: string;
    const PROP_CONNECTION_INTERFACE_AVATARS_MAXIMUM_AVATAR_WIDTH: string;
    const PROP_CONNECTION_INTERFACE_AVATARS_MINIMUM_AVATAR_HEIGHT: string;
    const PROP_CONNECTION_INTERFACE_AVATARS_MINIMUM_AVATAR_WIDTH: string;
    const PROP_CONNECTION_INTERFACE_AVATARS_RECOMMENDED_AVATAR_HEIGHT: string;
    const PROP_CONNECTION_INTERFACE_AVATARS_RECOMMENDED_AVATAR_WIDTH: string;
    const PROP_CONNECTION_INTERFACE_AVATARS_SUPPORTED_AVATAR_MIME_TYPES: string;
    const PROP_CONNECTION_INTERFACE_BALANCE_ACCOUNT_BALANCE: string;
    const PROP_CONNECTION_INTERFACE_BALANCE_MANAGE_CREDIT_URI: string;
    const PROP_CONNECTION_INTERFACE_CELLULAR_IMSI: string;
    const PROP_CONNECTION_INTERFACE_CELLULAR_MESSAGE_NATIONAL_CHARACTER_SET: string;
    const PROP_CONNECTION_INTERFACE_CELLULAR_MESSAGE_REDUCED_CHARACTER_SET: string;
    const PROP_CONNECTION_INTERFACE_CELLULAR_MESSAGE_SERVICE_CENTRE: string;
    const PROP_CONNECTION_INTERFACE_CELLULAR_MESSAGE_VALIDITY_PERIOD: string;
    const PROP_CONNECTION_INTERFACE_CELLULAR_OVERRIDE_MESSAGE_SERVICE_CENTRE: string;
    const PROP_CONNECTION_INTERFACE_CONTACTS_CONTACT_ATTRIBUTE_INTERFACES: string;
    const PROP_CONNECTION_INTERFACE_CONTACT_BLOCKING_CONTACT_BLOCKING_CAPABILITIES: string;
    const PROP_CONNECTION_INTERFACE_CONTACT_GROUPS_DISJOINT_GROUPS: string;
    const PROP_CONNECTION_INTERFACE_CONTACT_GROUPS_GROUPS: string;
    const PROP_CONNECTION_INTERFACE_CONTACT_GROUPS_GROUP_STORAGE: string;
    const PROP_CONNECTION_INTERFACE_CONTACT_INFO_CONTACT_INFO_FLAGS: string;
    const PROP_CONNECTION_INTERFACE_CONTACT_INFO_SUPPORTED_FIELDS: string;
    const PROP_CONNECTION_INTERFACE_CONTACT_LIST_CAN_CHANGE_CONTACT_LIST: string;
    const PROP_CONNECTION_INTERFACE_CONTACT_LIST_CONTACT_LIST_PERSISTS: string;
    const PROP_CONNECTION_INTERFACE_CONTACT_LIST_CONTACT_LIST_STATE: string;
    const PROP_CONNECTION_INTERFACE_CONTACT_LIST_DOWNLOAD_AT_CONNECTION: string;
    const PROP_CONNECTION_INTERFACE_CONTACT_LIST_REQUEST_USES_MESSAGE: string;
    const PROP_CONNECTION_INTERFACE_LOCATION_LOCATION_ACCESS_CONTROL: string;
    const PROP_CONNECTION_INTERFACE_LOCATION_LOCATION_ACCESS_CONTROL_TYPES: string;
    const PROP_CONNECTION_INTERFACE_LOCATION_SUPPORTED_LOCATION_FEATURES: string;
    const PROP_CONNECTION_INTERFACE_MAIL_NOTIFICATION_MAIL_ADDRESS: string;
    const PROP_CONNECTION_INTERFACE_MAIL_NOTIFICATION_MAIL_NOTIFICATION_FLAGS: string;
    const PROP_CONNECTION_INTERFACE_MAIL_NOTIFICATION_UNREAD_MAILS: string;
    const PROP_CONNECTION_INTERFACE_MAIL_NOTIFICATION_UNREAD_MAIL_COUNT: string;
    const PROP_CONNECTION_INTERFACE_POWER_SAVING_POWER_SAVING_ACTIVE: string;
    const PROP_CONNECTION_INTERFACE_REQUESTS_CHANNELS: string;
    const PROP_CONNECTION_INTERFACE_REQUESTS_REQUESTABLE_CHANNEL_CLASSES: string;
    const PROP_CONNECTION_INTERFACE_SERVICE_POINT_KNOWN_SERVICE_POINTS: string;
    const PROP_CONNECTION_INTERFACE_SIMPLE_PRESENCE_MAXIMUM_STATUS_MESSAGE_LENGTH: string;
    const PROP_CONNECTION_INTERFACE_SIMPLE_PRESENCE_STATUSES: string;
    const PROP_CONNECTION_MANAGER_INTERFACES: string;
    const PROP_CONNECTION_MANAGER_PROTOCOLS: string;
    const PROP_CONNECTION_SELF_HANDLE: string;
    const PROP_CONNECTION_SELF_ID: string;
    const PROP_CONNECTION_STATUS: string;
    const PROP_DEBUG_ENABLED: string;
    const PROP_MEDIA_STREAM_HANDLER_CREATED_LOCALLY: string;
    const PROP_MEDIA_STREAM_HANDLER_NAT_TRAVERSAL: string;
    const PROP_MEDIA_STREAM_HANDLER_RELAY_INFO: string;
    const PROP_MEDIA_STREAM_HANDLER_STUN_SERVERS: string;
    const PROP_PROTOCOL_AUTHENTICATION_TYPES: string;
    const PROP_PROTOCOL_CONNECTION_INTERFACES: string;
    const PROP_PROTOCOL_ENGLISH_NAME: string;
    const PROP_PROTOCOL_ICON: string;
    const PROP_PROTOCOL_INTERFACES: string;
    const PROP_PROTOCOL_INTERFACE_ADDRESSING_ADDRESSABLE_URI_SCHEMES: string;
    const PROP_PROTOCOL_INTERFACE_ADDRESSING_ADDRESSABLE_VCARD_FIELDS: string;
    const PROP_PROTOCOL_INTERFACE_AVATARS_MAXIMUM_AVATAR_BYTES: string;
    const PROP_PROTOCOL_INTERFACE_AVATARS_MAXIMUM_AVATAR_HEIGHT: string;
    const PROP_PROTOCOL_INTERFACE_AVATARS_MAXIMUM_AVATAR_WIDTH: string;
    const PROP_PROTOCOL_INTERFACE_AVATARS_MINIMUM_AVATAR_HEIGHT: string;
    const PROP_PROTOCOL_INTERFACE_AVATARS_MINIMUM_AVATAR_WIDTH: string;
    const PROP_PROTOCOL_INTERFACE_AVATARS_RECOMMENDED_AVATAR_HEIGHT: string;
    const PROP_PROTOCOL_INTERFACE_AVATARS_RECOMMENDED_AVATAR_WIDTH: string;
    const PROP_PROTOCOL_INTERFACE_AVATARS_SUPPORTED_AVATAR_MIME_TYPES: string;
    const PROP_PROTOCOL_INTERFACE_PRESENCE_STATUSES: string;
    const PROP_PROTOCOL_PARAMETERS: string;
    const PROP_PROTOCOL_REQUESTABLE_CHANNEL_CLASSES: string;
    const PROP_PROTOCOL_VCARD_FIELD: string;
    const TOKEN_CHANNEL_INTERFACE_MEDIA_SIGNALLING_GTALK_P2P: string;
    const TOKEN_CHANNEL_INTERFACE_MEDIA_SIGNALLING_ICE_UDP: string;
    const TOKEN_CHANNEL_INTERFACE_MEDIA_SIGNALLING_WLM_2009: string;
    const TOKEN_CHANNEL_INTERFACE_MEDIA_SIGNALLING_WLM_8_5: string;
    const TOKEN_CHANNEL_TYPE_CALL_AUDIO: string;
    const TOKEN_CHANNEL_TYPE_CALL_GTALK_P2P: string;
    const TOKEN_CHANNEL_TYPE_CALL_ICE: string;
    const TOKEN_CHANNEL_TYPE_CALL_SHM: string;
    const TOKEN_CHANNEL_TYPE_CALL_VIDEO: string;
    const TOKEN_CHANNEL_TYPE_CALL_WLM_2009: string;
    const TOKEN_CONNECTION_CONTACT_ID: string;
    const TOKEN_CONNECTION_INTERFACE_ADDRESSING_ADDRESSES: string;
    const TOKEN_CONNECTION_INTERFACE_ADDRESSING_URIS: string;
    const TOKEN_CONNECTION_INTERFACE_ALIASING_ALIAS: string;
    const TOKEN_CONNECTION_INTERFACE_AVATARS_TOKEN: string;
    const TOKEN_CONNECTION_INTERFACE_CAPABILITIES_CAPS: string;
    const TOKEN_CONNECTION_INTERFACE_CLIENT_TYPES_CLIENT_TYPES: string;
    const TOKEN_CONNECTION_INTERFACE_CONTACT_BLOCKING_BLOCKED: string;
    const TOKEN_CONNECTION_INTERFACE_CONTACT_CAPABILITIES_CAPABILITIES: string;
    const TOKEN_CONNECTION_INTERFACE_CONTACT_GROUPS_GROUPS: string;
    const TOKEN_CONNECTION_INTERFACE_CONTACT_INFO_INFO: string;
    const TOKEN_CONNECTION_INTERFACE_CONTACT_LIST_PUBLISH: string;
    const TOKEN_CONNECTION_INTERFACE_CONTACT_LIST_PUBLISH_REQUEST: string;
    const TOKEN_CONNECTION_INTERFACE_CONTACT_LIST_SUBSCRIBE: string;
    const TOKEN_CONNECTION_INTERFACE_LOCATION_LOCATION: string;
    const TOKEN_CONNECTION_INTERFACE_SIMPLE_PRESENCE_PRESENCE: string;
    /**
     * An invalid connection status used in #TpConnection to indicate that the
     * status has not yet been discovered.
     */
    const UNKNOWN_CONNECTION_STATUS: ConnectionStatus;
    /**
     * An invalid handle type (-1 cast to TpHandleType) used to represent an
     * unknown handle type.
     */
    const UNKNOWN_HANDLE_TYPE: HandleType;
    /**
     * The "user action time" used by methods like
     * tp_account_channel_request_new() to represent channel requests that are
     * not a result of user action.
     *
     * See also #TpAccountChannelRequest:user-action-time,
     * tp_user_action_time_from_x11(), tp_user_action_time_should_present() and
     * %TP_USER_ACTION_TIME_CURRENT_TIME.
     */
    const USER_ACTION_TIME_NOT_USER_ACTION: number;
    /**
     * If a value for `key` in `asv` is present and boolean, return it,
     * and set *`valid` to %TRUE if `valid` is not %NULL.
     *
     * Otherwise return %FALSE, and set *`valid` to %FALSE if `valid` is not %NULL.
     * @param asv A GHashTable where the keys are strings and the values are GValues
     * @param key The key to look up
     * @returns a boolean value for @key
     */
    function asv_get_boolean(asv: GLib.HashTable<string, GObject.Value>, key: string): boolean;
    /**
     * If a value for `key` in `asv` is present and is of the desired type,
     * return it.
     *
     * Otherwise return %NULL.
     *
     * The returned value is not copied, and is only valid as long as the value
     * for `key` in `asv` is not removed or altered. Copy it, for instance with
     * g_boxed_copy(), if you need to keep it for longer.
     * @param asv A GHashTable where the keys are strings and the values are GValues
     * @param key The key to look up
     * @param type The type that the key's value should have, which must be derived  from %G_TYPE_BOXED
     * @returns the value of @key, or %NULL
     */
    function asv_get_boxed(asv: GLib.HashTable<string, GObject.Value>, key: string, type: GObject.GType): any | null;
    /**
     * If a value for `key` in `asv` is present and is an array of bytes
     * (its GType is %DBUS_TYPE_G_UCHAR_ARRAY), return it.
     *
     * Otherwise return %NULL.
     *
     * The returned value is not copied, and is only valid as long as the value
     * for `key` in `asv` is not removed or altered. Copy it with
     * g_boxed_copy (DBUS_TYPE_G_UCHAR_ARRAY, ...) if you need to keep
     * it for longer.
     * @param asv A GHashTable where the keys are strings and the values are GValues
     * @param key The key to look up
     * @returns the string value of @key, or %NULL
     */
    function asv_get_bytes(asv: GLib.HashTable<string, GObject.Value>, key: string): Uint8Array | null;
    /**
     * If a value for `key` in `asv` is present and has any numeric type used by
     * dbus-glib (guchar, gint, guint, gint64, guint64 or gdouble),
     * return it as a double, and if `valid` is not %NULL, set *`valid` to %TRUE.
     *
     * Otherwise, return 0.0, and if `valid` is not %NULL, set *`valid` to %FALSE.
     * @param asv A GHashTable where the keys are strings and the values are GValues
     * @param key The key to look up
     * @returns the double precision floating-point value of @key, or 0.0
     */
    function asv_get_double(asv: GLib.HashTable<string, GObject.Value>, key: string): number;
    /**
     * If a value for `key` in `asv` is present, has an integer type used by
     * dbus-glib (guchar, gint, guint, gint64 or guint64) and fits in the
     * range of a gint32, return it, and if `valid` is not %NULL, set *`valid` to
     * %TRUE.
     *
     * Otherwise, return 0, and if `valid` is not %NULL, set *`valid` to %FALSE.
     * @param asv A GHashTable where the keys are strings and the values are GValues
     * @param key The key to look up
     * @returns the 32-bit signed integer value of @key, or 0
     */
    function asv_get_int32(asv: GLib.HashTable<string, GObject.Value>, key: string): number;
    /**
     * If a value for `key` in `asv` is present, has an integer type used by
     * dbus-glib (guchar, gint, guint, gint64 or guint64) and fits in the
     * range of a gint64, return it, and if `valid` is not %NULL, set *`valid` to
     * %TRUE.
     *
     * Otherwise, return 0, and if `valid` is not %NULL, set *`valid` to %FALSE.
     * @param asv A GHashTable where the keys are strings and the values are GValues
     * @param key The key to look up
     * @returns the 64-bit signed integer value of @key, or 0
     */
    function asv_get_int64(asv: GLib.HashTable<string, GObject.Value>, key: string): number;
    /**
     * If a value for `key` in `asv` is present and is an object path, return it.
     *
     * Otherwise return %NULL.
     *
     * The returned value is not copied, and is only valid as long as the value
     * for `key` in `asv` is not removed or altered. Copy it with g_strdup() if you
     * need to keep it for longer.
     * @param asv A GHashTable where the keys are strings and the values are GValues
     * @param key The key to look up
     * @returns the object-path value of @key, or %NULL
     */
    function asv_get_object_path(asv: GLib.HashTable<string, GObject.Value>, key: string): string | null;
    /**
     * If a value for `key` in `asv` is present and is a string, return it.
     *
     * Otherwise return %NULL.
     *
     * The returned value is not copied, and is only valid as long as the value
     * for `key` in `asv` is not removed or altered. Copy it with g_strdup() if you
     * need to keep it for longer.
     * @param asv A GHashTable where the keys are strings and the values are GValues
     * @param key The key to look up
     * @returns the string value of @key, or %NULL
     */
    function asv_get_string(asv: GLib.HashTable<string, GObject.Value>, key: string): string | null;
    /**
     * If a value for `key` in `asv` is present and is an array of strings (strv),
     * return it.
     *
     * Otherwise return %NULL.
     *
     * The returned value is not copied, and is only valid as long as the value
     * for `key` in `asv` is not removed or altered. Copy it with g_strdupv() if you
     * need to keep it for longer.
     * @param asv A GHashTable where the keys are strings and the values are GValues
     * @param key The key to look up
     * @returns the %NULL-terminated string-array value of @key, or %NULL
     */
    function asv_get_strv(asv: GLib.HashTable<string, GObject.Value>, key: string): string[] | null;
    /**
     * If a value for `key` in `asv` is present, has an integer type used by
     * dbus-glib (guchar, gint, guint, gint64 or guint64) and fits in the
     * range of a guint32, return it, and if `valid` is not %NULL, set *`valid` to
     * %TRUE.
     *
     * Otherwise, return 0, and if `valid` is not %NULL, set *`valid` to %FALSE.
     * @param asv A GHashTable where the keys are strings and the values are GValues
     * @param key The key to look up
     * @returns the 32-bit unsigned integer value of @key, or 0
     */
    function asv_get_uint32(asv: GLib.HashTable<string, GObject.Value>, key: string): number;
    /**
     * If a value for `key` in `asv` is present, has an integer type used by
     * dbus-glib (guchar, gint, guint, gint64 or guint64) and is non-negative,
     * return it, and if `valid` is not %NULL, set *`valid` to %TRUE.
     *
     * Otherwise, return 0, and if `valid` is not %NULL, set *`valid` to %FALSE.
     * @param asv A GHashTable where the keys are strings and the values are GValues
     * @param key The key to look up
     * @returns the 64-bit unsigned integer value of @key, or 0
     */
    function asv_get_uint64(asv: GLib.HashTable<string, GObject.Value>, key: string): number;
    /**
     * Check that the given string is a valid D-Bus bus name of an appropriate
     * type.
     * @param name a possible bus name
     * @param allow_types some combination of %TP_DBUS_NAME_TYPE_UNIQUE,  %TP_DBUS_NAME_TYPE_WELL_KNOWN or %TP_DBUS_NAME_TYPE_BUS_DAEMON  (often this will be %TP_DBUS_NAME_TYPE_NOT_BUS_DAEMON or  %TP_DBUS_NAME_TYPE_ANY)
     * @returns %TRUE if @name is valid
     */
    function dbus_check_valid_bus_name(name: string, allow_types: DBusNameType): boolean;
    /**
     * Check that the given string is a valid D-Bus interface name. This is
     * also appropriate to use to check for valid error names.
     *
     * Since GIO 2.26, g_dbus_is_interface_name() should always return the same
     * thing, although the GLib function does not raise an error explaining why
     * the interface name is incorrect.
     * @param name a possible interface name
     * @returns %TRUE if @name is valid
     */
    function dbus_check_valid_interface_name(name: string): boolean;
    /**
     * Check that the given string is a valid D-Bus member (method or signal) name.
     *
     * Since GIO 2.26, g_dbus_is_member_name() should always return the same
     * thing, although the GLib function does not raise an error explaining why
     * the interface name is incorrect.
     * @param name a possible member name
     * @returns %TRUE if @name is valid
     */
    function dbus_check_valid_member_name(name: string): boolean;
    /**
     * Check that the given string is a valid D-Bus object path. Since GLib 2.24,
     * g_variant_is_object_path() should always return the same thing as this
     * function, although it doesn't provide an error explaining why the object
     * path is invalid.
     * @param path a possible object path
     * @returns %TRUE if @path is valid
     */
    function dbus_check_valid_object_path(path: string): boolean;
    function dbus_errors_quark(): GLib.Quark;
    /**
     * Initialize the class `cls` to use the D-Bus Properties mixin.
     * The given struct member, of size sizeof(TpDBusPropertiesMixinClass),
     * will be used to store property implementation information.
     *
     * Each property and each interface must have been declared as a member of
     * a GInterface implemented by `cls,` using
     * tp_svc_interface_set_dbus_properties_info().
     *
     * Before calling this function, the array `interfaces` must have been
     * placed in the #TpDBusPropertiesMixinClass structure; if it would be empty,
     * it may instead be %NULL.
     *
     * This function should be called from the class_init callback in such a way
     * that it will only be called once, even if the class is subclassed.
     *
     * Changed in 0.7.9: TpDBusPropertiesMixinClass::interfaces may now be %NULL,
     * which means that only interfaces whose properties are set up using
     * tp_dbus_properties_mixin_implement_interface() will be used.
     *
     * Changed in 0.7.15: `offset` may now be 0, in which case the
     * #TpDBusPropertiesMixinClass can be omitted from `cls`.  It is treated as if
     * it were present, but with all fields (including
     * TpDBusPropertiesMixinClass::interfaces) being %NULL, so only interfaces
     * whose properties are set using
     * tp_dbus_properties_mixin_implement_interface() will be used.
     * @param cls a subclass of #GObjectClass
     * @param offset the offset within @cls of a TpDBusPropertiesMixinClass structure
     */
    function dbus_properties_mixin_class_init(cls: GObject.ObjectClass, offset: number): void;
    /**
     * Get all the properties of a particular interface. This implementation
     * never returns an error: it will return an empty map if the interface
     * is unknown.
     * @param self an object with this mixin
     * @param interface_name a D-Bus interface name
     * @returns a map  from property name (without the interface name) to value
     */
    function dbus_properties_mixin_dup_all(
        self: GObject.Object,
        interface_name: string,
    ): GLib.HashTable<string, GObject.Value>;
    /**
     * Emits the PropertiesChanged signal for the provided properties. Depending on
     * the EmitsChangedSignal annotations in the introspection XML, either the new
     * value of the property will be included in the signal, or merely the fact
     * that the property has changed.
     *
     * For example, the MPRIS specification defines a TrackList interface with two
     * properties, one of which is annotated with EmitsChangedSignal=true and one
     * annotated with EmitsChangedSignal=invalidates. The following call would
     * include the new value of CanEditTracks and list Tracks as invalidated:
     *
     *
     * ```
     *    const gchar *properties[] = { "CanEditTracks", "Tracks", NULL };
     *
     *    tp_dbus_properties_mixin_emit_properties_changed (G_OBJECT (self),
     *        "org.mpris.MediaPlayer2.TrackList", properties);
     * ```
     *
     *
     * It is an error to pass a property to this
     * function if the property is annotated with EmitsChangedSignal=false, or is
     * unannotated.
     * @param object an object which uses the D-Bus properties mixin
     * @param interface_name the interface on which properties have changed
     * @param properties a %NULL-terminated array of (unqualified)  property names whose values have changed.
     */
    function dbus_properties_mixin_emit_properties_changed(
        object: GObject.Object,
        interface_name: string,
        properties?: string | null,
    ): void;
    /**
     * Initialize `value` with the type of the property `property_name` on
     * `interface_name,` and write the value of that property into it as if
     * by calling the D-Bus method org.freedesktop.DBus.Properties.Get.
     *
     * If Get would return a D-Bus error, `value` remains unset and `error`
     * is filled in instead.
     * @param self an object with this mixin
     * @param interface_name a D-Bus interface name
     * @param property_name a D-Bus property name
     * @param value an unset GValue (initialized to all zeroes)
     * @returns %TRUE (filling @value) on success, %FALSE (setting @error)  on failure
     */
    function dbus_properties_mixin_get(
        self: GObject.Object,
        interface_name: string,
        property_name: string,
        value: GObject.Value,
    ): boolean;
    /**
     * An implementation of #TpDBusPropertiesMixinGetter which assumes that
     * the `getter_data` is the name of a readable #GObject property of an
     * appropriate type, and uses it for the value of the D-Bus property.
     * @param object The exported object with the properties
     * @param iface A quark representing the D-Bus interface name
     * @param name A quark representing the D-Bus property name
     * @param value A GValue pre-initialized to the right type, into which to put  the value
     * @param getter_data The getter_data from the #TpDBusPropertiesMixinPropImpl,  which must be a string containing the GObject property's name
     */
    function dbus_properties_mixin_getter_gobject_properties(
        object: GObject.Object,
        iface: GLib.Quark,
        name: GLib.Quark,
        value: GObject.Value,
        getter_data?: any | null,
    ): void;
    /**
     * Declare that the DBus.Properties interface represented by `g_iface`
     * is implemented using this mixin.
     * @param g_iface a pointer to a #TpSvcDBusPropertiesClass structure
     * @param iface_data ignored
     */
    function dbus_properties_mixin_iface_init(g_iface?: any | null, iface_data?: any | null): void;
    /**
     * Sets a property to the value specified by `value,` as if by
     * calling the D-Bus method org.freedesktop.DBus.Properties.Set.
     *
     * If Set would return a D-Bus error, sets `error` and returns %FALSE
     * @param self an object with this mixin
     * @param interface_name a D-Bus interface name
     * @param property_name a D-Bus property name
     * @param value a GValue containing the new value for this property.
     * @returns %TRUE on success; %FALSE (setting @error) on failure
     */
    function dbus_properties_mixin_set(
        self: GObject.Object,
        interface_name: string,
        property_name: string,
        value: GObject.Value,
    ): boolean;
    /**
     * An implementation of #TpDBusPropertiesMixinSetter which assumes that the
     * `setter_data` is the name of a writable #GObject property of an appropriate
     * type, and sets that property to the given value.
     * @param object The exported object with the properties
     * @param iface A quark representing the D-Bus interface name
     * @param name A quark representing the D-Bus property name
     * @param value The new value for the property
     * @param setter_data The setter_data from the #TpDBusPropertiesMixinPropImpl,  which must be a string containing the GObject property's name
     * @returns %TRUE
     */
    function dbus_properties_mixin_setter_gobject_properties(
        object: GObject.Object,
        iface: GLib.Quark,
        name: GLib.Quark,
        value: GObject.Value,
        setter_data?: any | null,
    ): boolean;
    /**
     * Open the given file for writing and duplicate its file descriptor to
     * be used for stdout and stderr. This has the effect of closing the previous
     * stdout and stderr, and sending all messages that would have gone there
     * to the given file instead.
     *
     * By default the file is truncated and hence overwritten each time the
     * process is executed.
     * Since version 0.7.14, if the filename is prefixed with '+' then the
     * file is not truncated and output is added at the end of the file.
     *
     * Passing %NULL to this function is guaranteed to have no effect. This is
     * so you can call it with the recommended usage
     * &lt;literal&gt;tp_debug_divert_messages (g_getenv ("MYAPP_LOGFILE"))&lt;/literal&gt;
     * and it won't do anything if the environment variable is not set.
     *
     * This function still works if telepathy-glib was compiled without debug
     * support.
     * @param filename A file to which to divert stdout and stderr, or %NULL to  do nothing
     */
    function debug_divert_messages(filename: string): void;
    /**
     * Set the debug flags indicated by `flags_string,` in addition to any already
     * set.
     *
     * The parsing matches that of g_parse_debug_string().
     *
     * If telepathy-glib was compiled with --disable-debug (not recommended),
     * this function has no practical effect, since the debug messages it would
     * enable were removed at compile time.
     * @param flags_string The flags to set, comma-separated. If %NULL or empty,  no additional flags are set.
     */
    function debug_set_flags(flags_string: string): void;
    /**
     * Used to enable persistent operation of the connection manager process for
     * debugging purposes.
     * @param persistent TRUE prevents the connection manager mainloop from exiting,              FALSE enables exiting if there are no connections              (the default behavior).
     */
    function debug_set_persistent(persistent: boolean): void;
    /**
     * A #GLogFunc that prepends the UTC time (currently in ISO 8601 format,
     * with microsecond resolution) to the message, then calls
     * g_log_default_handler.
     *
     * Intended usage is:
     *
     * &lt;informalexample&gt;&lt;programlisting&gt;if (g_getenv ("MYPROG_TIMING") != NULL)
     *   g_log_set_default_handler (tp_debug_timestamped_log_handler, NULL);
     * &lt;/programlisting&gt;&lt;/informalexample&gt;
     *
     * If telepathy-glib was compiled with --disable-debug (not recommended),
     * this function is equivalent to g_log_default_handler().
     *
     * Changed in 0.9.0: timestamps are now printed in UTC, in
     * RFC-3339 format. Previously, they were printed in local time, in a
     * format similar to RFC-3339.
     * @param log_domain the message's log domain
     * @param log_level the log level of the message
     * @param message the message to process
     * @param ignored not used
     */
    function debug_timestamped_log_handler(
        log_domain: string,
        log_level: GLib.LogLevelFlags,
        message: string,
        ignored?: any | null,
    ): void;
    /**
     * &lt;!-- --&gt;
     * @param error a member of the #TpError enum.
     * @returns the D-Bus error name corresponding to @error.
     */
    function error_get_dbus_name(error: Error): string;
    /**
     * Return the error domain quark for #TpError.
     */
    function error_quark(): GLib.Quark;
    function errors_disconnected_quark(): GLib.Quark;
    function errors_removed_from_group_quark(): GLib.Quark;
    /**
     * Escape an arbitrary string so it follows the rules for a C identifier,
     * and hence an object path component, interface element component,
     * bus name component or member name in D-Bus.
     *
     * Unlike g_strcanon this is a reversible encoding, so it preserves
     * distinctness.
     *
     * The escaping consists of replacing all non-alphanumerics, and the first
     * character if it's a digit, with an underscore and two lower-case hex
     * digits:
     *
     *    "0123abc_xyz\x01\xff" -&gt; _30123abc_5fxyz_01_ff
     *
     * i.e. similar to URI encoding, but with _ taking the role of %, and a
     * smaller allowed set. As a special case, "" is escaped to "_" (just for
     * completeness, really).
     * @param name The string to be escaped
     * @returns the escaped string, which must be freed by  the caller with #g_free
     */
    function escape_as_identifier(name: string): string;
    /**
     * Return a handle for the given string, creating one if necessary. The string
     * is normalized, if possible.
     * @param self A handle repository implementation
     * @param id A string whose handle is required
     * @param context User data to be passed to the normalization callback
     * @returns the handle corresponding to the given string, or 0 if it is invalid.
     */
    function handle_ensure(self: HandleRepoIface, id: string, context?: any | null): Handle;
    /**
     * If the given handle type is valid, return %TRUE. If not, set `error`
     * and return %FALSE.
     * @param type A handle type, valid or not, to be checked
     * @returns %TRUE if the handle type is valid.
     */
    function handle_type_is_valid(type: HandleType): boolean;
    /**
     * &lt;!----&gt;
     * @param type A handle type, which need not be valid
     * @returns a human-readable string describing the handle type, e.g. "contact".  For invalid handle types, returns "(no handle)" for 0 or  "(invalid handle type)" for others.
     */
    function handle_type_to_string(type: HandleType): string;
    function iface_quark_account(): GLib.Quark;
    function iface_quark_account_interface_addressing(): GLib.Quark;
    function iface_quark_account_interface_avatar(): GLib.Quark;
    function iface_quark_account_interface_storage(): GLib.Quark;
    function iface_quark_account_manager(): GLib.Quark;
    function iface_quark_authentication_tls_certificate(): GLib.Quark;
    function iface_quark_call_content(): GLib.Quark;
    function iface_quark_call_content_interface_audio_control(): GLib.Quark;
    function iface_quark_call_content_interface_dtmf(): GLib.Quark;
    function iface_quark_call_content_interface_media(): GLib.Quark;
    function iface_quark_call_content_interface_video_control(): GLib.Quark;
    function iface_quark_call_content_media_description(): GLib.Quark;
    function iface_quark_call_content_media_description_interface_rtcp_extended_reports(): GLib.Quark;
    function iface_quark_call_content_media_description_interface_rtcp_feedback(): GLib.Quark;
    function iface_quark_call_content_media_description_interface_rtp_header_extensions(): GLib.Quark;
    function iface_quark_call_stream(): GLib.Quark;
    function iface_quark_call_stream_endpoint(): GLib.Quark;
    function iface_quark_call_stream_interface_media(): GLib.Quark;
    function iface_quark_channel(): GLib.Quark;
    function iface_quark_channel_dispatch_operation(): GLib.Quark;
    function iface_quark_channel_dispatcher(): GLib.Quark;
    function iface_quark_channel_dispatcher_interface_messages1(): GLib.Quark;
    function iface_quark_channel_dispatcher_interface_operation_list(): GLib.Quark;
    function iface_quark_channel_interface_anonymity(): GLib.Quark;
    function iface_quark_channel_interface_call_state(): GLib.Quark;
    function iface_quark_channel_interface_captcha_authentication(): GLib.Quark;
    function iface_quark_channel_interface_chat_state(): GLib.Quark;
    function iface_quark_channel_interface_conference(): GLib.Quark;
    function iface_quark_channel_interface_destroyable(): GLib.Quark;
    function iface_quark_channel_interface_dtmf(): GLib.Quark;
    function iface_quark_channel_interface_file_transfer_metadata(): GLib.Quark;
    function iface_quark_channel_interface_group(): GLib.Quark;
    function iface_quark_channel_interface_hold(): GLib.Quark;
    function iface_quark_channel_interface_media_signalling(): GLib.Quark;
    function iface_quark_channel_interface_messages(): GLib.Quark;
    function iface_quark_channel_interface_password(): GLib.Quark;
    function iface_quark_channel_interface_room(): GLib.Quark;
    function iface_quark_channel_interface_room_config(): GLib.Quark;
    function iface_quark_channel_interface_sasl_authentication(): GLib.Quark;
    function iface_quark_channel_interface_securable(): GLib.Quark;
    function iface_quark_channel_interface_service_point(): GLib.Quark;
    function iface_quark_channel_interface_sms(): GLib.Quark;
    function iface_quark_channel_interface_subject(): GLib.Quark;
    function iface_quark_channel_interface_tube(): GLib.Quark;
    function iface_quark_channel_request(): GLib.Quark;
    function iface_quark_channel_type_call(): GLib.Quark;
    function iface_quark_channel_type_contact_list(): GLib.Quark;
    function iface_quark_channel_type_contact_search(): GLib.Quark;
    function iface_quark_channel_type_dbus_tube(): GLib.Quark;
    function iface_quark_channel_type_file_transfer(): GLib.Quark;
    function iface_quark_channel_type_room_list(): GLib.Quark;
    function iface_quark_channel_type_server_authentication(): GLib.Quark;
    function iface_quark_channel_type_server_tls_connection(): GLib.Quark;
    function iface_quark_channel_type_stream_tube(): GLib.Quark;
    function iface_quark_channel_type_streamed_media(): GLib.Quark;
    function iface_quark_channel_type_text(): GLib.Quark;
    function iface_quark_channel_type_tubes(): GLib.Quark;
    function iface_quark_client(): GLib.Quark;
    function iface_quark_client_approver(): GLib.Quark;
    function iface_quark_client_handler(): GLib.Quark;
    function iface_quark_client_interface_requests(): GLib.Quark;
    function iface_quark_client_observer(): GLib.Quark;
    function iface_quark_connection(): GLib.Quark;
    function iface_quark_connection_interface_addressing(): GLib.Quark;
    function iface_quark_connection_interface_aliasing(): GLib.Quark;
    function iface_quark_connection_interface_anonymity(): GLib.Quark;
    function iface_quark_connection_interface_avatars(): GLib.Quark;
    function iface_quark_connection_interface_balance(): GLib.Quark;
    function iface_quark_connection_interface_capabilities(): GLib.Quark;
    function iface_quark_connection_interface_cellular(): GLib.Quark;
    function iface_quark_connection_interface_client_types(): GLib.Quark;
    function iface_quark_connection_interface_contact_blocking(): GLib.Quark;
    function iface_quark_connection_interface_contact_capabilities(): GLib.Quark;
    function iface_quark_connection_interface_contact_groups(): GLib.Quark;
    function iface_quark_connection_interface_contact_info(): GLib.Quark;
    function iface_quark_connection_interface_contact_list(): GLib.Quark;
    function iface_quark_connection_interface_contacts(): GLib.Quark;
    function iface_quark_connection_interface_location(): GLib.Quark;
    function iface_quark_connection_interface_mail_notification(): GLib.Quark;
    function iface_quark_connection_interface_power_saving(): GLib.Quark;
    function iface_quark_connection_interface_presence(): GLib.Quark;
    function iface_quark_connection_interface_renaming(): GLib.Quark;
    function iface_quark_connection_interface_requests(): GLib.Quark;
    function iface_quark_connection_interface_service_point(): GLib.Quark;
    function iface_quark_connection_interface_sidecars1(): GLib.Quark;
    function iface_quark_connection_interface_simple_presence(): GLib.Quark;
    function iface_quark_connection_manager(): GLib.Quark;
    function iface_quark_dbus_daemon(): GLib.Quark;
    function iface_quark_dbus_introspectable(): GLib.Quark;
    function iface_quark_dbus_peer(): GLib.Quark;
    function iface_quark_dbus_properties(): GLib.Quark;
    function iface_quark_debug(): GLib.Quark;
    function iface_quark_media_session_handler(): GLib.Quark;
    function iface_quark_media_stream_handler(): GLib.Quark;
    function iface_quark_properties_interface(): GLib.Quark;
    function iface_quark_protocol(): GLib.Quark;
    function iface_quark_protocol_interface_addressing(): GLib.Quark;
    function iface_quark_protocol_interface_avatars(): GLib.Quark;
    function iface_quark_protocol_interface_presence(): GLib.Quark;
    /**
     * &lt;!--Returns: says it all--&gt;
     * @param array An array of guint
     * @returns A set containing the same integers as @array.
     */
    function intset_from_array(array: number[]): Intset;
    /**
     * List the available (running or installed) connection managers. Call the
     * callback when done.
     *
     * Since 0.7.26, this function will wait for each #TpConnectionManager
     * to be ready, so all connection managers passed to `callback` will have
     * their %TP_CONNECTION_MANAGER_FEATURE_CORE feature prepared, unless an error
     * occurred while launching that connection manager.
     * @param bus_daemon proxy for the D-Bus daemon
     * @param callback callback to be called when listing the CMs  succeeds or fails; not called if the @weak_object goes away
     * @param weak_object if not %NULL, will be weakly  referenced; the callback will not be called, and the call will be  cancelled, if the object has vanished
     */
    function list_connection_managers(
        bus_daemon: DBusDaemon,
        callback: ConnectionManagerListCb,
        weak_object?: GObject.Object | null,
    ): void;
    /**
     * List the available (running or installed) connection managers,
     * asynchronously, and wait for their %TP_CONNECTION_MANAGER_FEATURE_CORE
     * feature to be ready.
     * @param dbus_daemon a #TpDBusDaemon, or %NULL to use  tp_dbus_daemon_dup()
     * @param callback a callback to call with a list of CMs
     */
    function list_connection_managers_async(
        dbus_daemon?: DBusDaemon | null,
        callback?: Gio.AsyncReadyCallback<DBusDaemon | null> | null,
    ): void;
    /**
     * Finish listing the available connection managers.
     *
     * Free the list after use, for instance with
     * &lt;literal&gt;g_list_free_full (list, g_object_unref)&lt;/literal&gt;.
     * @param result the result of tp_list_connection_managers_async()
     * @returns a  newly allocated list of references to #TpConnectionManager objects
     */
    function list_connection_managers_finish(result: Gio.AsyncResult): ConnectionManager[];
    /**
     * List the bus names of all the connections that currently exist, together
     * with the connection manager name and the protocol name for each connection.
     * Call the callback when done.
     *
     * The bus names passed to the callback can be used to construct #TpConnection
     * objects for any connections that are of interest.
     * @param bus_daemon proxy for the D-Bus daemon
     * @param callback callback to be called when listing the connections succeeds or   fails; not called if the D-Bus connection fails completely or if the   @weak_object goes away
     * @param weak_object if not %NULL, will be weakly referenced; the callback will   not be called if the object has vanished
     */
    function list_connection_names(
        bus_daemon: DBusDaemon,
        callback: ConnectionNameListCb,
        weak_object?: GObject.Object | null,
    ): void;
    /**
     * Create a new #GSimpleAsyncResult with no operation result, and call
     * g_simple_async_result_complete_in_idle() on it.
     *
     * This is like a successful version of g_simple_async_report_error_in_idle(),
     * suitable for asynchronous functions that (conceptually) either succeed and
     * return nothing, or raise an error, such as tp_proxy_prepare_async().
     *
     * The corresponding finish function should not call a function that attempts
     * to get a result, such as g_simple_async_result_get_op_res_gpointer().
     * @param source the source object
     * @param callback the callback
     * @param source_tag the source tag for the #GSimpleAsyncResult
     */
    function simple_async_report_success_in_idle(
        source?: GObject.Object | null,
        callback?: Gio.AsyncReadyCallback<GObject.Object | null> | null,
        source_tag?: any | null,
    ): void;
    /**
     * Declare that `g_interface` implements the given D-Bus interface, with the
     * given properties. This may only be called once per GInterface, usually from
     * a section of its base_init function that only runs once.
     *
     * This is typically only used within generated code; there is normally no
     * reason to call it manually.
     * @param g_interface The #GType of a service interface
     * @param info an interface description
     */
    function svc_interface_set_dbus_properties_info(
        g_interface: GObject.GType,
        info: DBusPropertiesMixinIfaceInfo,
    ): void;
    /**
     * Convert an X11 timestamp into a user action time as used in Telepathy.
     *
     * This also works for the timestamps used by GDK 2, GDK 3 and Clutter 1.0;
     * it may or may not work with other toolkits or versions.
     * @param x11_time an X11 timestamp, or 0 to indicate the current time
     * @returns a nonzero Telepathy user action time, or  %TP_USER_ACTION_TIME_CURRENT_TIME
     */
    function user_action_time_from_x11(x11_time: number): number;
    /**
     * Interpret a Telepathy user action time to decide whether a Handler should
     * attempt to gain focus. If %TRUE is returned, it would be appropriate to
     * call gtk_window_present_with_time() using `x1`1_time as input, for instance.
     *
     * `x1`1_time is used to return a timestamp in the right format for X11,
     * GDK 2, GDK 3 and Clutter 1.0; it may or may not work with other
     * toolkits or versions.
     * @param user_action_time the Telepathy user action time
     * @returns %TRUE if it would be appropriate to present a window
     */
    function user_action_time_should_present(user_action_time: number): boolean;
    /**
     * Validate that the provided string is valid UTF8. If not,
     * replace all invalid bytes with unicode replacement
     * character (U+FFFD).
     *
     * This method is a verbatim copy of glib's internal
     * _g_utf8_make_valid&lt;!-- --&gt;() function, and will be deprecated as
     * soon as the glib one becomes public.
     * @param name string to coerce into UTF8
     * @returns a new valid UTF8 string
     */
    function utf8_make_valid(name: string): string;
    /**
     * Free `va`. This is exactly the same as g_value_array_free(), but does not
     * provoke deprecation warnings from GLib when used in conjunction with
     * tp_value_array_build() and tp_value_array_unpack().
     * @param va a #GValueArray
     */
    function value_array_free(va: GObject.ValueArray): void;
    interface AccountChannelRequestDelegatedChannelCb {
        (request: AccountChannelRequest, channel: Channel): void;
    }
    interface BaseClientClassAddDispatchOperationImpl {
        (
            client: BaseClient,
            account: Account,
            connection: Connection,
            channels: Channel[],
            dispatch_operation: ChannelDispatchOperation,
            context: AddDispatchOperationContext,
        ): void;
    }
    interface BaseClientClassHandleChannelsImpl {
        (
            client: BaseClient,
            account: Account,
            connection: Connection,
            channels: Channel[],
            requests_satisfied: ChannelRequest[],
            user_action_time: number,
            context: HandleChannelsContext,
        ): void;
    }
    interface BaseClientClassObserveChannelsImpl {
        (
            client: BaseClient,
            account: Account,
            connection: Connection,
            channels: Channel[],
            dispatch_operation: ChannelDispatchOperation | null,
            requests: ChannelRequest[],
            context: ObserveChannelsContext,
        ): void;
    }
    interface BaseClientDelegatedChannelsCb {
        (client: BaseClient, channels: Channel[]): void;
    }
    interface BaseConnectionGetUniqueConnectionNameImpl {
        (self: BaseConnection): string;
    }
    interface BaseConnectionProc {
        (self: BaseConnection): void;
    }
    interface BaseConnectionStartConnectingImpl {
        (self: BaseConnection): boolean;
    }
    interface ChannelWhenReadyCb {
        (channel: Channel, error: GLib.Error): void;
    }
    interface ConnectionContactsByHandleCb<A = GObject.Object> {
        (connection: Connection, contacts: Contact[], failed: Handle[], error: GLib.Error, weak_object: A): void;
    }
    interface ConnectionContactsByIdCb<A = GObject.Object> {
        (
            connection: Connection,
            contacts: Contact[],
            requested_ids: string[],
            failed_id_errors: GLib.HashTable<string, GLib.Error>,
            error: GLib.Error,
            weak_object: A,
        ): void;
    }
    interface ConnectionHoldHandlesCb<A = GObject.Object> {
        (
            connection: Connection,
            handle_type: HandleType,
            n_handles: number,
            handles: Handle,
            error: GLib.Error,
            weak_object: A,
        ): void;
    }
    interface ConnectionManagerListCb<A = GObject.Object> {
        (cms: ConnectionManager[], n_cms: number, error: GLib.Error, weak_object: A): void;
    }
    interface ConnectionManagerWhenReadyCb<A = GObject.Object> {
        (cm: ConnectionManager, error: GLib.Error, weak_object: A): void;
    }
    interface ConnectionNameListCb<A = GObject.Object> {
        (names: string[], n: number, cms: string[], protocols: string[], error: GLib.Error, weak_object: A): void;
    }
    interface ConnectionRequestHandlesCb<A = GObject.Object> {
        (
            connection: Connection,
            handle_type: HandleType,
            handles: number[],
            ids: string[],
            error: GLib.Error,
            weak_object: A,
        ): void;
    }
    interface ConnectionUpgradeContactsCb<A = GObject.Object> {
        (connection: Connection, contacts: Contact[], error: GLib.Error, weak_object: A): void;
    }
    interface ConnectionWhenReadyCb {
        (connection: Connection, error: GLib.Error): void;
    }
    interface DBusDaemonListNamesCb<A = GObject.Object> {
        (bus_daemon: DBusDaemon, names: string, error: GLib.Error, weak_object: A): void;
    }
    interface DBusDaemonNameOwnerChangedCb {
        (bus_daemon: DBusDaemon, name: string, new_owner: string): void;
    }
    interface DBusPropertiesMixinGetter<A = GObject.Object> {
        (object: A, iface: GLib.Quark, name: GLib.Quark, value: GObject.Value, getter_data?: any | null): void;
    }
    interface DBusPropertiesMixinSetter<A = GObject.Object> {
        (object: A, iface: GLib.Quark, name: GLib.Quark, value: GObject.Value, setter_data?: any | null): boolean;
    }
    interface GroupMixinAddMemberFunc<A = GObject.Object> {
        (obj: A, handle: Handle, message: string): boolean;
    }
    interface GroupMixinRemMemberFunc<A = GObject.Object> {
        (obj: A, handle: Handle, message: string): boolean;
    }
    interface GroupMixinRemMemberWithReasonFunc<A = GObject.Object> {
        (obj: A, handle: Handle, message: string, reason: number): boolean;
    }
    interface IntFunc {
        (i: number, userdata?: any | null): void;
    }
    interface PresenceMixinGetMaximumStatusMessageLengthFunc<A = GObject.Object> {
        (obj: A): number;
    }
    interface PresenceMixinSetOwnStatusFunc<A = GObject.Object> {
        (obj: A, status: PresenceStatus): boolean;
    }
    interface PresenceMixinStatusAvailableFunc<A = GObject.Object> {
        (obj: A, which: number): boolean;
    }
    interface ProxyPrepareAsync {
        (proxy: Proxy, feature: ProxyFeature, callback?: Gio.AsyncReadyCallback<Proxy> | null): void;
    }
    interface SimpleApproverAddDispatchOperationImpl {
        (
            approver: SimpleApprover,
            account: Account,
            connection: Connection,
            channels: Channel[],
            dispatch_operation: ChannelDispatchOperation | null,
            context: AddDispatchOperationContext,
        ): void;
    }
    interface SimpleHandlerHandleChannelsImpl {
        (
            handler: SimpleHandler,
            account: Account,
            connection: Connection,
            channels: Channel[],
            requests_satisfied: ChannelRequest[],
            user_action_time: number,
            context: HandleChannelsContext,
        ): void;
    }
    interface SimpleObserverObserveChannelsImpl {
        (
            observer: SimpleObserver,
            account: Account,
            connection: Connection,
            channels: Channel[],
            dispatch_operation: ChannelDispatchOperation | null,
            requests: ChannelRequest[],
            context: ObserveChannelsContext,
        ): void;
    }
    type ContactInfoList = object | null;
    type ContactInfoSpecList = object | null;
    /**
     * &lt;![CDATA[         Flags for the various types of anonymity modes.  These modes are solely to         inform the CM of the desired anonymous settings.  It is up to the         CM to determine whether the anonymity modes should be handled within         the CM itself, or whether the network that a CM might be talking to         should be enforcing anonymity.          CMs MAY support only a subset of these modes, and specific         connections MAY support none at all.       ]]&gt;
     *
     * Bitfield/set of flags generated from the Telepathy specification.
     */
    enum AnonymityModeFlags {
        /**
         * &lt;![CDATA[           Obscure any information that provides user identification,           user-agent identification or personal details. Examples of this           information might be GSM CallerID, SIP from address, various           informational email headers, etc.            The CM should scrub/replace any of this information before           passing messages or data onto the network. Note that a CM which           has the option of obscuring the information at the CM or privacy           service level would choose both (anonymity services are opaque           to clients of this interface).            Clients SHOULD NOT set both Client_Info and Show_Client_Info modes.           If they are set, the CM MUST respect Client_Info and ignore           Show_Client_Info.         ]]&gt;
         */
        CLIENT_INFO,
        /**
         * &lt;![CDATA[           Explicitly request showing of client information. In connection           context, this can be used to override service default. In channel           context, this overrides connection anonymity modes.                         In GSM, it's possible to have CLIR enabled by default, and               explicitly suppress CLIR for a single phone call.                       Clients SHOULD NOT set both Client_Info and Show_Client_Info modes.           If they are set, the CM MUST respect Client_Info and ignore           Show_Client_Info. The CM MAY set both Client_Info and Show_Client_Info           in SupportedAnonymityModes to indicate           its support for explicitly hiding and publicising client information.                    ]]&gt;
         */
        SHOW_CLIENT_INFO,
        /**
         * &lt;![CDATA[           Obscure any originating IP address information, contact URIs,           and anonymize all traffic involved with sending/receiving any           media streams or call content.           Examples of this include the "headers" portions of           RFC 3323 as           well as the History-Info (described in           RFC 4244)           for a SIP CM.            This SHOULD have the effect of hiding address information from           the remote contact (ie, the contact cannot know what IP address           the session is originated from). Obviously the network still needs           to be able to route information between contacts, so this provides           no guarantees of what can be seen by intermediaries.         ]]&gt;
         */
        NETWORK_INFO,
    }
    /**
     * &lt;![CDATA[         A set of flags representing additional information than is available         in CallState. Many of these flags only make         sense in a particular (or may explain why a call is in a specific         state).       ]]&gt;
     *
     * Bitfield/set of flags generated from the Telepathy specification.
     */
    enum CallFlags {
        /**
         * &lt;![CDATA[           The call has been put on hold by the local user, e.g. using           the Hold interface. This flag SHOULD only be set           if there is at least one Content, and all Contents are           locally held.                         Otherwise, in transient situations where some but not all contents             are on hold, UIs would falsely indicate that the call as a whole             is on hold, which could lead to the user saying something they'll             regret, while under the impression that the other contacts can't             hear them!              This flag exists as a simplified proxy for HoldStateChanged,             to reduce the number of signals that need to be             listened to by a simple UI.                    ]]&gt;
         */
        LOCALLY_HELD,
        /**
         * &lt;![CDATA[           This flag exists for observability of the           SetRinging method (e.g. so that           loggers can tell whether the call got as far as alerting the user,           or whether something went wrong before then). It should be set when           the SetRinging is called, and unset when the call leaves           Initialised.         ]]&gt;
         */
        LOCALLY_RINGING,
        /**
         * &lt;![CDATA[           This flag exists for observability of the           SetQueued method. It should be set           when the SetQueued is called, and unset when the call leaves           Initialising or           Initialised.         ]]&gt;
         */
        LOCALLY_QUEUED,
        /**
         * &lt;![CDATA[           The initiator of the call originally called a contact other than the           current recipient of the call, but the call was then forwarded or           diverted. This flag only makes sense on outgoing calls. It SHOULD be           set or unset according to informational messages from other           contacts.         ]]&gt;
         */
        FORWARDED,
        /**
         * &lt;![CDATA[           This flag only occurs when the CallState is Ended. The call with           this flag set has ended, but not all resources corresponding to the           call have been freed yet.            Depending on the protocol there might be some audible feedback while           the clearing flag is set.                         In calls following the ITU-T Q.931 standard there is a period of             time between the call ending and the underlying channel being             completely free for re-use.                    ]]&gt;
         */
        CLEARING,
    }
    /**
     * &lt;![CDATA[         A set of flags representing the status of a remote contact in a           call.          It is protocol- and client-specific whether a particular contact           will ever have a particular flag set on them, and Telepathy clients           SHOULD NOT assume that a flag will ever be set.                     180 Ringing in SIP, and its equivalent in XMPP, are optional             informational messages, and implementations are not required             to send them. The same applies to the messages used to indicate             hold state.                ]]&gt;
     *
     * Bitfield/set of flags generated from the Telepathy specification.
     */
    enum CallMemberFlags {
        /**
         * &lt;![CDATA[           The remote contact's client has told us that the contact has been             alerted about the call but has not responded.                         This is a flag per member, not a flag for the call as a whole,               because in Muji conference calls, you could invite someone and               have their state be "ringing" for a while.                    ]]&gt;
         */
        RINGING,
        /**
         * &lt;![CDATA[           The call member has put this call on hold.                         This is a flag per member, not a flag for the call as a whole,               because in conference calls, any member could put the conference               on hold.                    ]]&gt;
         */
        HELD,
        /**
         * &lt;![CDATA[           This contact has merged this call into a conference. Note that GSM           provides a notification when the remote party merges a call into a           conference, but not when it is split out again; thus, this flag can           only indicate that the call has been part of a conference at some           point. If a GSM connection manager receives a notification that a           call has been merged into a conference a second time, it SHOULD           represent this by clearing and immediately re-setting this flag on           the remote contact.         ]]&gt;
         */
        CONFERENCE_HOST,
    }
    /**
     * &lt;![CDATA[         Extra flags to include with Captcha information       ]]&gt;
     *
     * Bitfield/set of flags generated from the Telepathy specification.
     */
    enum CaptchaFlags {
        /**
         * &lt;![CDATA[           This captcha mechanism is required to be successfully           answered in order to pass this captcha challenge.         ]]&gt;
         */
        CAPTCHA_FLAGS_REQUIRED,
    }
    /**
     * &lt;![CDATA[         A set of flags representing call states.       ]]&gt;
     *
     * Bitfield/set of flags generated from the Telepathy specification.
     */
    enum ChannelCallStateFlags {
        /**
         * &lt;![CDATA[           The contact has been alerted about the call but has not responded           (e.g. 180 Ringing in SIP).         ]]&gt;
         */
        RINGING,
        /**
         * &lt;![CDATA[           The contact is temporarily unavailable, and the call has been placed           in a queue (e.g. 182 Queued in SIP, or call-waiting in telephony).         ]]&gt;
         */
        QUEUED,
        /**
         * &lt;![CDATA[           The contact has placed the call on hold, and will not receive           media from the local user or any other participants until they           unhold the call again.         ]]&gt;
         */
        HELD,
        /**
         * &lt;![CDATA[           The initiator of the call originally called a contact other than the           current recipient of the call, but the call was then forwarded or           diverted.         ]]&gt;
         */
        FORWARDED,
        /**
         * &lt;![CDATA[           Progress has been made in placing the outgoing call, but the           destination contact may not have been made aware of the call yet           (so the Ringing state is not appropriate). This corresponds to SIP's           status code 183 Session Progress, and could be used when the           outgoing call has reached a gateway, for instance.         ]]&gt;
         */
        IN_PROGRESS,
        /**
         * &lt;![CDATA[           This contact has merged this call into a conference. Note that GSM           provides a notification when the remote party merges a call into a           conference, but not when it is split out again; thus, this flag can           only indicate that the call has been part of a conference at some           point. If a GSM connection manager receives a notification that a           call has been merged into a conference a second time, it SHOULD           represent this by clearing and immediately re-setting this flag on           the remote contact.         ]]&gt;
         */
        CONFERENCE_HOST,
    }
    /**
     * Bitfield/set of flags generated from the Telepathy specification.
     */
    enum ChannelGroupFlags {
        /**
         * &lt;![CDATA[             The AddMembers method can be used to             add or invite members who are             not already in the local pending list (which is always valid).         ]]&gt;
         */
        CAN_ADD,
        /**
         * &lt;![CDATA[             The RemoveMembers method can be used             to remove channel members             (removing those on the pending local list is always valid).         ]]&gt;
         */
        CAN_REMOVE,
        /**
         * &lt;![CDATA[             The RemoveMembers method can be used             on people on the remote             pending list.         ]]&gt;
         */
        CAN_RESCIND,
        /**
         * &lt;![CDATA[             A message may be sent to the server when calling             AddMembers on             contacts who are not currently pending members.         ]]&gt;
         */
        MESSAGE_ADD,
        /**
         * &lt;![CDATA[             A message may be sent to the server when calling             RemoveMembers on             contacts who are currently channel members.         ]]&gt;
         */
        MESSAGE_REMOVE,
        /**
         * &lt;![CDATA[             A message may be sent to the server when calling             AddMembers on             contacts who are locally pending.         ]]&gt;
         */
        MESSAGE_ACCEPT,
        /**
         * &lt;![CDATA[             A message may be sent to the server when calling             RemoveMembers on             contacts who are locally pending.         ]]&gt;
         */
        MESSAGE_REJECT,
        /**
         * &lt;![CDATA[             A message may be sent to the server when calling             RemoveMembers on             contacts who are remote pending.         ]]&gt;
         */
        MESSAGE_RESCIND,
        /**
         * &lt;![CDATA[                        The members of this group have handles which are specific to             this channel, and are not valid as general-purpose handles on             the connection. Depending on the channel, it may be possible to             check the HandleOwners property or             call GetHandleOwners to find the             owners of these handles, which should be done if you wish to (e.g.)             subscribe to the contact's presence.                                    Connection managers must ensure that any given handle is not             simultaneously a general-purpose handle and a channel-specific             handle.                    ]]&gt;
         */
        CHANNEL_SPECIFIC_HANDLES,
        /**
         * &lt;![CDATA[             Placing a contact in multiple groups of this type is not allowed             and will raise NotAvailable (on services where contacts may only             be in one user-defined group, user-defined groups will have             this flag).         ]]&gt;
         */
        ONLY_ONE_GROUP,
        /**
         * &lt;![CDATA[           In rooms with channel specific handles (ie Channel_Specific_Handles           flag is set), this flag indicates that no handle owners are           available, apart from the owner of the           SelfHandle.                         This used to be an important optimization to avoid repeated             GetHandleOwners calls, before we introduced the             HandleOwners property and             HandleOwnersChanged signal.                    ]]&gt;
         */
        HANDLE_OWNERS_NOT_AVAILABLE,
        /**
         * &lt;![CDATA[           This flag indicates that all the properties introduced in           specification 0.17.6 are fully supported.         ]]&gt;
         */
        PROPERTIES,
        /**
         * &lt;![CDATA[           Indicates that MembersChangedDetailed           will be emitted for changes to this group's members in addition to           MembersChanged.           Clients can then connect to the former and ignore emission of the           latter. This flag's state MUST NOT change over the lifetime of a           channel.                         If it were allowed to change, client bindings would have to always             connect to MembersChanged just in case the flag ever went away (and             generally be unnecessarily complicated), which would mostly negate             the point of having this flag in the first place.                    ]]&gt;
         */
        MEMBERS_CHANGED_DETAILED,
        /**
         * &lt;![CDATA[           A message may be sent to the server when calling           RemoveMembers on           the SelfHandle.                         This would be set for XMPP Multi-User Chat or IRC channels,             but not for a typical implementation of streamed media calls.                    ]]&gt;
         */
        MESSAGE_DEPART,
    }
    /**
     * &lt;![CDATA[         The channel-type-specific capability flags used for         Channel.Type.StreamedMedia in the Connection.Interface.Capabilities         interface. See the InitialAudio         property for details of the mechanisms that will replace this.       ]]&gt;
     *
     * Bitfield/set of flags generated from the Telepathy specification.
     */
    enum ChannelMediaCapabilities {
        /**
         * &lt;![CDATA[           The handle is capable of using audio streams within a media channel.         ]]&gt;
         */
        AUDIO,
        /**
         * &lt;![CDATA[           The handle is capable of using video streams within a media channel.         ]]&gt;
         */
        VIDEO,
        /**
         * &lt;![CDATA[           The handle is capable of performing STUN to traverse NATs.         ]]&gt;
         */
        NAT_TRAVERSAL_STUN,
        /**
         * &lt;![CDATA[           The handle is capable of establishing Google Talk peer-to-peer           connections (as implemented in libjingle 0.3) to traverse NATs.         ]]&gt;
         */
        NAT_TRAVERSAL_GTALK_P2P,
        /**
         * &lt;![CDATA[           The handle is capable of establishing ICE UDP peer-to-peer           connections (as defined by the IETF MMUSIC working group) to traverse           NATs.         ]]&gt;
         */
        NAT_TRAVERSAL_ICE_UDP,
        /**
         * &lt;![CDATA[           Channels whose target handle is this contact will have           ImmutableStreams = True.         ]]&gt;
         */
        IMMUTABLE_STREAMS,
    }
    /**
     * Bitfield/set of flags generated from the Telepathy specification.
     */
    enum ChannelPasswordFlags {
        /**
         * &lt;![CDATA[           The ProvidePassword method must be           called now for the user to join the channel         ]]&gt;
         */
        PROVIDE,
        /**
         * &lt;![CDATA[           The RoomConfig1.PasswordHint           contains a hint for the password.         ]]&gt;
         */
        HINT,
    }
    /**
     * Bitfield/set of flags generated from the Telepathy specification.
     */
    enum ChannelTextMessageFlags {
        /**
         * &lt;![CDATA[         The incoming message was truncated to a shorter length by the         server or the connection manager.         ]]&gt;
         */
        TRUNCATED,
        /**
         * &lt;![CDATA[           The incoming message contained non-text content which cannot be             represented by this interface, but has been signalled             in the Messages             interface.            Connection managers SHOULD only set this flag if the non-text             content appears to be relatively significant (exactly how             significant is up to the implementor). The intention is that             if this flag is set, clients using this interface SHOULD inform             the user that part of the message was not understood.         ]]&gt;
         */
        NON_TEXT_CONTENT,
        /**
         * &lt;![CDATA[           The incoming message was part of a replay of message history.                         In XMPP multi-user chat, a few past messages are replayed               when you join a chatroom. A sufficiently capable IRC connection               manager could also set this flag on historical messages when               connected to a proxy like bip or irssi-proxy. The existence               of this flag allows loggers and UIs to use better heuristics               when eliminating duplicates (a simple implementation made               possible by this flag would be to avoid logging scrollback               at all).                    ]]&gt;
         */
        SCROLLBACK,
        /**
         * &lt;![CDATA[           The incoming message has been seen in a previous channel during             the lifetime of the Connection, but             had not been acknowledged             when that channel closed, causing an identical channel (the             channel in which the message now appears) to open.                         This means that a logger (which should already have seen the               message in the previous channel) is able to recognise and ignore               these replayed messages.                    ]]&gt;
         */
        RESCUED,
    }
    /**
     * Bitfield/set of flags generated from the Telepathy specification.
     */
    enum ConnMgrParamFlags {
        /**
         * &lt;![CDATA[           This parameter is required for connecting to the server.         ]]&gt;
         */
        REQUIRED,
        /**
         * &lt;![CDATA[           This parameter is required for registering an account on the           server.         ]]&gt;
         */
        REGISTER,
        /**
         * &lt;![CDATA[           This parameter has a default value, which is returned in           GetParameters; not providing this parameter is equivalent to           providing the default.         ]]&gt;
         */
        HAS_DEFAULT,
        /**
         * &lt;![CDATA[           This parameter should be considered private or secret; for             instance, clients should store it in a "password safe" like             gnome-keyring or kwallet, omit it from debug logs, and use a             text input widget that hides the value of the parameter.            (Clients that support older connection managers may also treat             any parameter whose name contains "password" as though it had this             flag.)         ]]&gt;
         */
        SECRET,
        /**
         * &lt;![CDATA[           This parameter is also a D-Bus property on the resulting             Connection; a             parameter named com.example.Duck.Macaroni with this             flag corresponds to the Macaroni property on the             com.example.Duck interface.  Its value can be queried             and possibly changed on an existing Connection using methods on the             org.freedesktop.DBus.Properties interface.            When a new value for a parameter with this flag is passed to             Account.UpdateParameters,             the account manager will attempt to update its value on any running             connections. Similarly, if the parameter also has the             Has_Default flag, and is passed in the second argument             to UpdateParameters, the default value will be applied             to any running             connections. Thus, clients generally do not need to directly access             or update the connection property; instead, they SHOULD manipulate             Account.Parameters.                         This allows runtime-configurable options to be stored and               maintained by the AccountManager, without needing to               invent a separate account preference for “properties that should               be set on the connection as soon as it is created”. It was               originally invented to manage Cellular               preferences.                    ]]&gt;
         */
        DBUS_PROPERTY,
    }
    /**
     * Bitfield/set of flags generated from the Telepathy specification.
     */
    enum ConnectionAliasFlags {
        /**
         * &lt;![CDATA[           The aliases of contacts on this connection may be changed by the             user of the service, not just by the contacts themselves. This is             the case on Jabber, for instance.           It is possible that aliases can be changed by the contacts too -             which alias takes precedence is not defined by this             specification, and depends on the server and/or connection manager             implementation.           This flag only applies to the aliases of "globally valid" contact             handles. At this time, clients should not expect to be able to             change the aliases corresponding to any channel-specific             handles. If this becomes possible in future, a new flag will             be defined.         ]]&gt;
         */
        CONNECTION_ALIAS_FLAG_USER_SET,
    }
    /**
     * Bitfield/set of flags generated from the Telepathy specification.
     */
    enum ConnectionCapabilityFlags {
        /**
         * &lt;![CDATA[           The given channel type and handle can be given to RequestChannel           to create a new channel of this type.         ]]&gt;
         */
        CREATE,
        /**
         * &lt;![CDATA[           The given contact can be invited to an existing channel of this type.         ]]&gt;
         */
        INVITE,
    }
    /**
     * Bitfield/set of flags generated from the Telepathy specification.
     */
    enum ContactBlockingCapabilities {
        /**
         * &lt;![CDATA[           When calling BlockContacts, the           contacts may be reporting as abusive to the server administrators by           setting Report_Abusive to True.         ]]&gt;
         */
        CONTACT_BLOCKING_CAPABILITY_CAN_REPORT_ABUSIVE,
    }
    /**
     * &lt;![CDATA[         Flags describing the behaviour of a vCard field.       ]]&gt;
     *
     * Bitfield/set of flags generated from the Telepathy specification.
     */
    enum ContactInfoFieldFlags {
        /**
         * &lt;![CDATA[           If present, exactly the parameters indicated must be set on this             field; in the case of an empty list of parameters, this implies that             parameters may not be used.            If absent, and the list of allowed parameters is non-empty,             any (possibly empty) subset of that list may be             used.            If absent, and the list of allowed parameters is empty,             any parameters may be used.         ]]&gt;
         */
        PARAMETERS_EXACT,
        /**
         * &lt;![CDATA[           Indicates that this field will be overwritten when the user's alias             is changed with SetAliases             or when the Account's Nickname             is updated.  Clients that allow the editing of the Alias and the             ContactInfo in the same location should hide fields with this flag.                        If a client allowed the user to edit both the nickname and the               ContactInfo field at the same time, the user could set them to two               different values even though they map to the same property.  This               would result in surprising behavior where the second value would               win over the first.                      In addition to hiding this field when editing ContactInfo together             with the user's nickname, it is recommended that clients call             SetContactInfo before setting the             user's nickname.                        This ensures that if the user changes the nickname, the correct               value will get set even if the stale nickname is mistakenly sent               along with SetContactInfo.                      If used, this flag typically appears on either the 'nickname' or             'fn' field.         ]]&gt;
         */
        OVERWRITTEN_BY_NICKNAME,
    }
    /**
     * &lt;![CDATA[         Flags defining the behaviour of contact information on this protocol.         Some protocols provide no information on contacts without an explicit         request; others always push information to the connection manager as         and when it changes.       ]]&gt;
     *
     * Bitfield/set of flags generated from the Telepathy specification.
     */
    enum ContactInfoFlags {
        /**
         * &lt;![CDATA[           Indicates that SetContactInfo is           supported on this connection.         ]]&gt;
         */
        CAN_SET,
        /**
         * &lt;![CDATA[           Indicates that the protocol pushes all contacts' information to the           connection manager without prompting. If set,           ContactInfoChanged will be emitted           whenever contacts' information changes.         ]]&gt;
         */
        PUSH,
    }
    /**
     * A set of flags indicating which D-Bus bus names are acceptable.
     * They can be combined with the bitwise-or operator to accept multiple
     * types. %TP_DBUS_NAME_TYPE_NOT_BUS_DAEMON and %TP_DBUS_NAME_TYPE_ANY are
     * the bitwise-or of other appropriate types, for convenience.
     *
     * Since 0.11.5, there is a corresponding #GFlagsClass type,
     * %TP_TYPE_DBUS_NAME_TYPE.
     */
    enum DBusNameType {
        /**
         * accept unique names like :1.123
         *  (not including the name of the bus daemon itself)
         */
        UNIQUE,
        /**
         * accept well-known names like
         *  com.example.Service (not including the name of the bus daemon itself)
         */
        WELL_KNOWN,
        /**
         * accept the name of the bus daemon
         *  itself, which has the syntax of a well-known name, but behaves like a
         *  unique name
         */
        BUS_DAEMON,
        /**
         * accept either unique or well-known
         *  names, but not the bus daemon
         */
        NOT_BUS_DAEMON,
        /**
         * accept any of the above
         */
        ANY,
    }
    /**
     * Bitfield representing allowed access to a property. At most one of
     * %TP_DBUS_PROPERTIES_MIXIN_FLAG_EMITS_CHANGED and
     * %TP_DBUS_PROPERTIES_MIXIN_FLAG_EMITS_INVALIDATED may be specified for a
     * property.
     *
     * Since 0.11.5, there is a corresponding #GFlagsClass type,
     * %TP_TYPE_DBUS_PROPERTIES_MIXIN_FLAGS.
     */
    enum DBusPropertiesMixinFlags {
        /**
         * The property can be read using Get and
         *  GetAll
         */
        READ,
        /**
         * The property can be written using Set
         */
        WRITE,
        /**
         * The property's new value is
         *  included in emissions of PropertiesChanged
         */
        EMITS_CHANGED,
        /**
         * The property is announced
         *  as invalidated, without its value, in emissions of PropertiesChanged
         */
        EMITS_INVALIDATED,
    }
    /**
     * &lt;![CDATA[         Flags indicating the level of support for delivery reporting on this         channel, as found on the         DeliveryReportingSupport property. Any         future flags added to this set will conform to the         convention that the presence of an extra flag implies that         more operations will succeed. Note that CMs may always provide more         reports than are requested in the         Message_Sending_Flags passed to         SendMessage.                     If senders want delivery reports, they should ask for them.  If they           don't want delivery reports, they can just ignore them, so there's no           need to have capability discovery for what will happen if a delivery           report isn't requested.                ]]&gt;
     *
     * Bitfield/set of flags generated from the Telepathy specification.
     */
    enum DeliveryReportingSupportFlags {
        /**
         * &lt;![CDATA[           Clients MAY expect to receive negative delivery reports if           Message_Sending_Flag_Report_Delivery is specified when sending.         ]]&gt;
         */
        FAILURES,
        /**
         * &lt;![CDATA[           Clients MAY expect to receive positive delivery reports if           Message_Sending_Flag_Report_Delivery is specified when sending.         ]]&gt;
         */
        SUCCESSES,
        /**
         * &lt;![CDATA[           Clients MAY expect to receive Delivery_Status           Read reports if Message_Sending_Flag_Report_Read           is specified when sending.         ]]&gt;
         */
        READ,
        /**
         * &lt;![CDATA[           Clients MAY expect to receive Delivery_Status           Deleted reports if Message_Sending_Flag_Report_Deleted           is specified when sending.         ]]&gt;
         */
        DELETED,
    }
    /**
     * &lt;![CDATA[         Flags describing the Location features which may be supported on any         given connection.       ]]&gt;
     *
     * Bitfield/set of flags generated from the Telepathy specification.
     */
    enum LocationFeatures {
        /**
         * &lt;![CDATA[           Indicates that setting your own location with           SetLocation is supported on this           connection.         ]]&gt;
         */
        LOCATION_FEATURE_CAN_SET,
    }
    /**
     * &lt;![CDATA[         Flags representing capabilities provided by a connection manager.           Those values can be used as bitfield. Some flags depend on, or           conflict with, each other.          Connections SHOULD implement as many of these features as the           underlying protocol allows, preferring to implement           Supports_Unread_Mails instead of Emits_Mails_Received if both are           possible.       ]]&gt;
     *
     * Bitfield/set of flags generated from the Telepathy specification.
     */
    enum MailNotificationFlags {
        /**
         * &lt;![CDATA[           This Connection provides the number of unread e-mails (or e-mail           threads) in the main folder of your e-mail account, as the           UnreadMailCount property. The           connection manager will update this value by emitting the           UnreadMailsChanged signal.         ]]&gt;
         */
        SUPPORTS_UNREAD_MAIL_COUNT,
        /**
         * &lt;![CDATA[           This Connection provides a detailed list of unread e-mails, as the           UnreadMails property. If this flag           is set, Supports_Unread_Mail_Count MUST be set, and           Emits_Mails_Received MUST NOT be set.           The Connection will update the list by emitting the           UnreadMailsChanged signals.         ]]&gt;
         */
        SUPPORTS_UNREAD_MAILS,
        /**
         * &lt;![CDATA[           This Connection emits the MailsReceived           signal, which provides details about newly arrived e-mails but does           not maintain their read/unread status afterwards. This flag MUST NOT           be combined with Supports_Unread_Mails.         ]]&gt;
         */
        EMITS_MAILS_RECEIVED,
        /**
         * &lt;![CDATA[           This Connection can provide a URL (with optional POST data) to           open the the inbox of the e-mail account in a web-based client, via           the RequestInboxURL method.         ]]&gt;
         */
        SUPPORTS_REQUEST_INBOX_URL,
        /**
         * &lt;![CDATA[           This Connection can provide a URL (with optional POST data) to open             a specific mail in a web-based client, via the             RequestMailURL method. This feature             is not useful unless either Emits_Mails_Received or             Supports_Unread_Mails is set.            If this flag is not set, clients SHOULD fall back to using             RequestInboxURL if available.         ]]&gt;
         */
        SUPPORTS_REQUEST_MAIL_URL,
        /**
         * &lt;![CDATA[           Each Mail represents a thread of e-mails, which             MAY have more than one sender.                         Google Talk notifies users about new mail in terms of unread               threads, rather than unread e-mails.                    ]]&gt;
         */
        THREAD_BASED,
    }
    /**
     * Bitfield/set of flags generated from the Telepathy specification.
     */
    enum MediaStreamPendingSend {
        /**
         * &lt;![CDATA[             The local user has been asked to send media by the remote user.             Call RequestStreamDirection to             indicate whether or not this is acceptable.         ]]&gt;
         */
        LOCAL_SEND,
        /**
         * &lt;![CDATA[             The remote user has been asked to send media by the local user.             The StreamDirectionChanged signal             will be emitted when the remote user accepts or rejects this             change.         ]]&gt;
         */
        REMOTE_SEND,
    }
    /**
     * &lt;![CDATA[         Flags indicating the level of support for message parts on this           channel. They are designed such that setting more flags always           implies that the channel has more capabilities.          If no flags are set, this indicates that messages may contain           a single message part whose content-type is any of the types           from SupportedContentTypes, possibly with some alternatives.          There is no flag indicating support for alternatives. This is           because the SendMessage implementation can always accept messages           containing alternatives, even if the underlying protocol does not,           by deleting all alternatives except the first (most preferred)           that is supported.                     Each of the flags so far implies the previous flag, so we could           have used a simple enumeration here; however, we've defined           the message-part support indicator as a flag set for future           expansion.                   See SupportedContentTypes for some           examples.       ]]&gt;
     *
     * Bitfield/set of flags generated from the Telepathy specification.
     */
    enum MessagePartSupportFlags {
        /**
         * &lt;![CDATA[           SendMessage will accept messages           containing a textual message body,           plus a single attachment of any type listed in the           SupportedContentTypes property. It does not make sense for this           flag to be set if Message_Part_Support_Flag_Data_Only is not also set           (because the connection manager can trivially provide an empty text           part if necessary).         ]]&gt;
         */
        ONE_ATTACHMENT,
        /**
         * &lt;![CDATA[           SendMessage will accept messages containing a textual message body,           plus an arbitrary number of attachments of any type listed in the           SupportedContentTypes property. It does not make sense for this           flag to be set if Message_Part_Support_Flag_One_Attachment is not           also set.         ]]&gt;
         */
        MULTIPLE_ATTACHMENTS,
    }
    /**
     * &lt;![CDATA[         Flags altering the way a message is sent. The "most usual" action         should always be to have these flags unset. Some indication of which         flags are supported is provided by the         DeliveryReportingSupport property.       ]]&gt;
     *
     * Bitfield/set of flags generated from the Telepathy specification.
     */
    enum MessageSendingFlags {
        /**
         * &lt;![CDATA[           Provide a successful delivery report if possible, even if this is             not the default for this protocol. Ignored if delivery reports are             not possible on this protocol.                         In some protocols, like XMPP, it is not conventional to request               or send positive delivery notifications.                       Delivery failure reports SHOULD always be sent, but if this flag             is present, the connection manager MAY also try harder to obtain             failed delivery reports or allow them to be matched to outgoing             messages.         ]]&gt;
         */
        DELIVERY,
        /**
         * &lt;![CDATA[           Provide a delivery report when the message is read by the             recipient, even if this is not the default for this protocol.             Ignored if read reports are not possible on this protocol.         ]]&gt;
         */
        READ,
        /**
         * &lt;![CDATA[           Provide a delivery report when the message is deleted by the             recipient, even if this is not the default for this protocol.             Ignored if such reports are not possible on this protocol.         ]]&gt;
         */
        DELETED,
    }
    /**
     * Bitfield/set of flags generated from the Telepathy specification.
     */
    enum PropertyFlags {
        /**
         * &lt;![CDATA[The property can be read]]&gt;
         */
        READ,
        /**
         * &lt;![CDATA[The property can be written]]&gt;
         */
        WRITE,
    }
    /**
     * Bitfield/set of flags generated from the Telepathy specification.
     */
    enum RTCPXRStatisticsFlags {
        /**
         * &lt;![CDATA[           Loss report flag, as defined in RFC3611 section 4.6.         ]]&gt;
         */
        LOSS,
        /**
         * &lt;![CDATA[           Duplicate report flag, as defined in RFC3611 section 4.6.         ]]&gt;
         */
        DUPLICATE,
        /**
         * &lt;![CDATA[           Jitter flag, as defined in RFC3611 section 4.6.         ]]&gt;
         */
        JITTER,
        /**
         * &lt;![CDATA[           First bit of TTL or Hop Limit flag, as defined in RFC3611 section           4.6.         ]]&gt;
         */
        TTL,
        /**
         * &lt;![CDATA[           Second bit of TTL or Hop Limit flag, as defined in RFC3611 section           4.6.         ]]&gt;
         */
        HL,
    }
    /**
     * &lt;![CDATA[         Flags indicating restrictions imposed on an Account by its storage         method.       ]]&gt;
     *
     * Bitfield/set of flags generated from the Telepathy specification.
     */
    enum StorageRestrictionFlags {
        /**
         * &lt;![CDATA[           The account's Parameters property can't be changed by calling           UpdateParameters.         ]]&gt;
         */
        PARAMETERS,
        /**
         * &lt;![CDATA[           The account can't be enabled/disabled by setting the Enabled property.         ]]&gt;
         */
        ENABLED,
        /**
         * &lt;![CDATA[           The account's presence can't be changed by setting the RequestedPresence and AutomaticPresence properties.         ]]&gt;
         */
        PRESENCE,
        /**
         * &lt;![CDATA[           The account's Service           property cannot be changed.         ]]&gt;
         */
        SERVICE,
    }
    module Account {
        // Signal callback interfaces

        interface AvatarChanged {
            (): void;
        }

        interface PresenceChanged {
            (presence: number, status: string, status_message: string): void;
        }

        interface StatusChanged {
            (
                old_status: number,
                new_status: number,
                reason: number,
                dbus_error_name: string | null,
                details: GLib.HashTable<string, GObject.Value>,
            ): void;
        }

        // Constructor properties interface
    }

    /**
     * The Telepathy Account Manager stores the user's configured real-time
     * communication accounts. This object represents a stored account.
     *
     * If this account is deleted from the account manager, the
     * #TpProxy::invalidated signal will be emitted
     * with the domain %TP_DBUS_ERRORS and the error code
     * %TP_DBUS_ERROR_OBJECT_REMOVED.
     *
     * One can connect to the #GObject::notify signal to get change notifications
     * for many of the properties on this object. Refer to each property's
     * documentation for whether it can be used in this way.
     *
     * #TpAccount objects should normally be obtained from the #TpAccountManager.
     *
     * Since 0.16, #TpAccount always has a non-%NULL #TpProxy:factory, and its
     * #TpProxy:factory will be propagated to its #TpConnection
     * (if any). If a #TpAccount is created without going via the
     * #TpAccountManager or specifying a #TpProxy:factory, the default
     * is to use a new #TpAutomaticClientFactory.
     */
    class Account extends Proxy {
        // Own properties of TelepathyGLib-0.12.Account

        /**
         * The account's automatic presence type (a #TpConnectionPresenceType).
         *
         * When the account is put online automatically, for instance to make a
         * channel request or because network connectivity becomes available,
         * the automatic presence type, status and message will be copied to
         * their "requested" counterparts.
         *
         * One can receive change notifications on this property by connecting
         * to the #GObject::notify signal and using this property as the signal
         * detail. Change notifications for automatic-presence-type,
         * automatic-status and automatic-status-message are always emitted together,
         * so it is sufficient to connect to one of the notification signals.
         *
         * This is not guaranteed to have been retrieved until
         * tp_proxy_prepare_async() has finished; until then, the value is
         * %TP_CONNECTION_PRESENCE_TYPE_UNSET.
         */
        readonly automatic_presence_type: number;
        /**
         * The account's automatic presence type (a #TpConnectionPresenceType).
         *
         * When the account is put online automatically, for instance to make a
         * channel request or because network connectivity becomes available,
         * the automatic presence type, status and message will be copied to
         * their "requested" counterparts.
         *
         * One can receive change notifications on this property by connecting
         * to the #GObject::notify signal and using this property as the signal
         * detail. Change notifications for automatic-presence-type,
         * automatic-status and automatic-status-message are always emitted together,
         * so it is sufficient to connect to one of the notification signals.
         *
         * This is not guaranteed to have been retrieved until
         * tp_proxy_prepare_async() has finished; until then, the value is
         * %TP_CONNECTION_PRESENCE_TYPE_UNSET.
         */
        readonly automaticPresenceType: number;
        /**
         * The string status name to use in conjunction with the
         * #TpAccount:automatic-presence-type.
         *
         * One can receive change notifications on this property by connecting
         * to the #GObject::notify signal and using this property as the signal
         * detail. Change notifications for automatic-presence-type,
         * automatic-status and automatic-status-message are always emitted together,
         * so it is sufficient to connect to one of the notification signals.
         *
         * This is not guaranteed to have been retrieved until
         * tp_proxy_prepare_async() has finished; until then, the value is
         * %NULL.
         */
        readonly automatic_status: string;
        /**
         * The string status name to use in conjunction with the
         * #TpAccount:automatic-presence-type.
         *
         * One can receive change notifications on this property by connecting
         * to the #GObject::notify signal and using this property as the signal
         * detail. Change notifications for automatic-presence-type,
         * automatic-status and automatic-status-message are always emitted together,
         * so it is sufficient to connect to one of the notification signals.
         *
         * This is not guaranteed to have been retrieved until
         * tp_proxy_prepare_async() has finished; until then, the value is
         * %NULL.
         */
        readonly automaticStatus: string;
        /**
         * The user-defined message to use in conjunction with the
         * #TpAccount:automatic-presence-type.
         *
         * One can receive change notifications on this property by connecting
         * to the #GObject::notify signal and using this property as the signal
         * detail. Change notifications for automatic-presence-type,
         * automatic-status and automatic-status-message are always emitted together,
         * so it is sufficient to connect to one of the notification signals.
         *
         * This is not guaranteed to have been retrieved until
         * tp_proxy_prepare_async() has finished; until then, the value is
         * %NULL.
         */
        readonly automatic_status_message: string;
        /**
         * The user-defined message to use in conjunction with the
         * #TpAccount:automatic-presence-type.
         *
         * One can receive change notifications on this property by connecting
         * to the #GObject::notify signal and using this property as the signal
         * detail. Change notifications for automatic-presence-type,
         * automatic-status and automatic-status-message are always emitted together,
         * so it is sufficient to connect to one of the notification signals.
         *
         * This is not guaranteed to have been retrieved until
         * tp_proxy_prepare_async() has finished; until then, the value is
         * %NULL.
         */
        readonly automaticStatusMessage: string;
        /**
         * %TRUE if an attempt is currently being made to change the account's
         * presence (#TpAccount:current-presence-type, #TpAccount:current-status
         * and #TpAccount:current-status-message) to match its requested presence
         * (#TpAccount:requested-presence-type, #TpAccount:requested-status
         * and #TpAccount:requested-status-message).
         *
         * One can receive change notifications on this property by connecting
         * to the #GObject::notify signal and using this property as the signal
         * detail.
         *
         * This is not guaranteed to have been retrieved until
         * tp_proxy_prepare_async() has finished; until then, the value is
         * %FALSE.
         */
        readonly changing_presence: boolean;
        /**
         * %TRUE if an attempt is currently being made to change the account's
         * presence (#TpAccount:current-presence-type, #TpAccount:current-status
         * and #TpAccount:current-status-message) to match its requested presence
         * (#TpAccount:requested-presence-type, #TpAccount:requested-status
         * and #TpAccount:requested-status-message).
         *
         * One can receive change notifications on this property by connecting
         * to the #GObject::notify signal and using this property as the signal
         * detail.
         *
         * This is not guaranteed to have been retrieved until
         * tp_proxy_prepare_async() has finished; until then, the value is
         * %FALSE.
         */
        readonly changingPresence: boolean;
        /**
         * The account's connection manager name.
         */
        readonly cm_name: string;
        /**
         * The account's connection manager name.
         */
        readonly cmName: string;
        /**
         * Whether the account should connect automatically or not. To change this
         * property, use tp_account_set_connect_automatically_async().
         *
         * One can receive change notifications on this property by connecting
         * to the #GObject::notify signal and using this property as the signal
         * detail.
         *
         * This is not guaranteed to have been retrieved until
         * tp_proxy_prepare_async() has finished; until then, the value is
         * %FALSE.
         */
        readonly connect_automatically: boolean;
        /**
         * Whether the account should connect automatically or not. To change this
         * property, use tp_account_set_connect_automatically_async().
         *
         * One can receive change notifications on this property by connecting
         * to the #GObject::notify signal and using this property as the signal
         * detail.
         *
         * This is not guaranteed to have been retrieved until
         * tp_proxy_prepare_async() has finished; until then, the value is
         * %FALSE.
         */
        readonly connectAutomatically: boolean;
        /**
         * The connection of the account, or %NULL if account is offline.
         * Note that the returned #TpConnection is not guaranteed to have any
         * features pre-prepared (not even %TP_CONNECTION_FEATURE_CORE) unless
         * %TP_ACCOUNT_FEATURE_CONNECTION has been prepared on the account
         *
         * One can receive change notifications on this property by connecting
         * to the #GObject::notify signal and using this property as the signal
         * detail. If %TP_ACCOUNT_FEATURE_CONNECTION has been prepared, this signal
         * will be delayed until the connection is ready.
         *
         * This is not guaranteed to have been retrieved until
         * tp_proxy_prepare_async() has finished; until then, the value is
         * %NULL.
         */
        readonly connection: Connection;
        /**
         * The D-Bus error name for the last disconnection or connection failure,
         * (in particular, %TP_ERROR_STR_CANCELLED if it was disconnected by user
         * request), or %NULL if the account is connected.
         *
         * One can receive change notifications on this property by connecting
         * to the #TpAccount::status-changed signal, or by connecting
         * to the #GObject::notify signal and using this property as the signal
         * detail.
         *
         * This is not guaranteed to have been retrieved until
         * tp_proxy_prepare_async() has finished; until then, the value is
         * %NULL.
         */
        readonly connection_error: string;
        /**
         * The D-Bus error name for the last disconnection or connection failure,
         * (in particular, %TP_ERROR_STR_CANCELLED if it was disconnected by user
         * request), or %NULL if the account is connected.
         *
         * One can receive change notifications on this property by connecting
         * to the #TpAccount::status-changed signal, or by connecting
         * to the #GObject::notify signal and using this property as the signal
         * detail.
         *
         * This is not guaranteed to have been retrieved until
         * tp_proxy_prepare_async() has finished; until then, the value is
         * %NULL.
         */
        readonly connectionError: string;
        /**
         * A map from string to #GValue containing extensible error details
         * related to #TpAccount:connection-error. Functions like tp_asv_get_string()
         * can be used to read from this map.
         *
         * The keys for this map are defined by
         * &lt;ulink url="http://telepathy.freedesktop.org/spec/"&gt;the Telepathy D-Bus
         * Interface Specification&lt;/ulink&gt;. They will typically include
         * &lt;literal&gt;debug-message&lt;/literal&gt;, which is a debugging message in the C
         * locale, analogous to #GError&lt;!-- --&gt;.message.
         *
         * One can receive change notifications on this property by connecting
         * to the #TpAccount::status-changed signal, or by connecting
         * to the #GObject::notify signal and using this property as the signal
         * detail.
         *
         * This is not guaranteed to have been retrieved until
         * tp_proxy_prepare_async() has finished; until then, the value is
         * an empty map.
         */
        readonly connection_error_details: GLib.HashTable<any, any>;
        /**
         * A map from string to #GValue containing extensible error details
         * related to #TpAccount:connection-error. Functions like tp_asv_get_string()
         * can be used to read from this map.
         *
         * The keys for this map are defined by
         * &lt;ulink url="http://telepathy.freedesktop.org/spec/"&gt;the Telepathy D-Bus
         * Interface Specification&lt;/ulink&gt;. They will typically include
         * &lt;literal&gt;debug-message&lt;/literal&gt;, which is a debugging message in the C
         * locale, analogous to #GError&lt;!-- --&gt;.message.
         *
         * One can receive change notifications on this property by connecting
         * to the #TpAccount::status-changed signal, or by connecting
         * to the #GObject::notify signal and using this property as the signal
         * detail.
         *
         * This is not guaranteed to have been retrieved until
         * tp_proxy_prepare_async() has finished; until then, the value is
         * an empty map.
         */
        readonly connectionErrorDetails: GLib.HashTable<any, any>;
        /**
         * The account's connection manager name.
         */
        readonly connection_manager: string;
        /**
         * The account's connection manager name.
         */
        readonly connectionManager: string;
        /**
         * The account's connection status type (a %TpConnectionStatus).
         *
         * One can receive change notifications on this property by connecting
         * to the #TpAccount::status-changed signal, or by connecting
         * to the #GObject::notify signal and using this property as the signal
         * detail.
         *
         * This is not guaranteed to have been retrieved until
         * tp_proxy_prepare_async() has finished; until then, the value is
         * %TP_CONNECTION_STATUS_DISCONNECTED.
         */
        readonly connection_status: number;
        /**
         * The account's connection status type (a %TpConnectionStatus).
         *
         * One can receive change notifications on this property by connecting
         * to the #TpAccount::status-changed signal, or by connecting
         * to the #GObject::notify signal and using this property as the signal
         * detail.
         *
         * This is not guaranteed to have been retrieved until
         * tp_proxy_prepare_async() has finished; until then, the value is
         * %TP_CONNECTION_STATUS_DISCONNECTED.
         */
        readonly connectionStatus: number;
        /**
         * The account's connection status reason (a %TpConnectionStatusReason).
         *
         * One can receive change notifications on this property by connecting
         * to the #TpAccount::status-changed signal, or by connecting
         * to the #GObject::notify signal and using this property as the signal
         * detail.
         *
         * This is not guaranteed to have been retrieved until
         * tp_proxy_prepare_async() has finished; until then, the value is
         * %TP_CONNECTION_STATUS_REASON_NONE_SPECIFIED.
         */
        readonly connection_status_reason: number;
        /**
         * The account's connection status reason (a %TpConnectionStatusReason).
         *
         * One can receive change notifications on this property by connecting
         * to the #TpAccount::status-changed signal, or by connecting
         * to the #GObject::notify signal and using this property as the signal
         * detail.
         *
         * This is not guaranteed to have been retrieved until
         * tp_proxy_prepare_async() has finished; until then, the value is
         * %TP_CONNECTION_STATUS_REASON_NONE_SPECIFIED.
         */
        readonly connectionStatusReason: number;
        /**
         * The account connection's current presence type
         * (a %TpConnectionPresenceType).
         *
         * One can receive change notifications on this property by connecting
         * to the #GObject::notify signal and using this property as the signal
         * detail. Change notifications for current-presence-type,
         * current-status and current-status-message are always emitted together,
         * so it is sufficient to connect to one of the notification signals.
         *
         * This is not guaranteed to have been retrieved until
         * tp_proxy_prepare_async() has finished; until then, the value is
         * %TP_CONNECTION_PRESENCE_TYPE_UNSET.
         */
        readonly current_presence_type: number;
        /**
         * The account connection's current presence type
         * (a %TpConnectionPresenceType).
         *
         * One can receive change notifications on this property by connecting
         * to the #GObject::notify signal and using this property as the signal
         * detail. Change notifications for current-presence-type,
         * current-status and current-status-message are always emitted together,
         * so it is sufficient to connect to one of the notification signals.
         *
         * This is not guaranteed to have been retrieved until
         * tp_proxy_prepare_async() has finished; until then, the value is
         * %TP_CONNECTION_PRESENCE_TYPE_UNSET.
         */
        readonly currentPresenceType: number;
        /**
         * The current Status string of the account.
         *
         * One can receive change notifications on this property by connecting
         * to the #GObject::notify signal and using this property as the signal
         * detail. Change notifications for current-presence-type,
         * current-status and current-status-message are always emitted together,
         * so it is sufficient to connect to one of the notification signals.
         *
         * This is not guaranteed to have been retrieved until
         * tp_proxy_prepare_async() has finished; until then, the value is
         * %NULL.
         */
        readonly current_status: string;
        /**
         * The current Status string of the account.
         *
         * One can receive change notifications on this property by connecting
         * to the #GObject::notify signal and using this property as the signal
         * detail. Change notifications for current-presence-type,
         * current-status and current-status-message are always emitted together,
         * so it is sufficient to connect to one of the notification signals.
         *
         * This is not guaranteed to have been retrieved until
         * tp_proxy_prepare_async() has finished; until then, the value is
         * %NULL.
         */
        readonly currentStatus: string;
        /**
         * The current status message message of the account.
         *
         * One can receive change notifications on this property by connecting
         * to the #GObject::notify signal and using this property as the signal
         * detail. Change notifications for current-presence-type,
         * current-status and current-status-message are always emitted together,
         * so it is sufficient to connect to one of the notification signals.
         *
         * This is not guaranteed to have been retrieved until
         * tp_proxy_prepare_async() has finished; until then, the value is
         * %NULL.
         */
        readonly current_status_message: string;
        /**
         * The current status message message of the account.
         *
         * One can receive change notifications on this property by connecting
         * to the #GObject::notify signal and using this property as the signal
         * detail. Change notifications for current-presence-type,
         * current-status and current-status-message are always emitted together,
         * so it is sufficient to connect to one of the notification signals.
         *
         * This is not guaranteed to have been retrieved until
         * tp_proxy_prepare_async() has finished; until then, the value is
         * %NULL.
         */
        readonly currentStatusMessage: string;
        /**
         * The account's display name, from the DisplayName property.
         *
         * One can receive change notifications on this property by connecting
         * to the #GObject::notify signal and using this property as the signal
         * detail.
         *
         * This is not guaranteed to have been retrieved until
         * tp_proxy_prepare_async() has finished; until then, the value is
         * %NULL.
         */
        readonly display_name: string;
        /**
         * The account's display name, from the DisplayName property.
         *
         * One can receive change notifications on this property by connecting
         * to the #GObject::notify signal and using this property as the signal
         * detail.
         *
         * This is not guaranteed to have been retrieved until
         * tp_proxy_prepare_async() has finished; until then, the value is
         * %NULL.
         */
        readonly displayName: string;
        /**
         * Whether this account is enabled or not.
         *
         * One can receive change notifications on this property by connecting
         * to the #GObject::notify signal and using this property as the signal
         * detail.
         *
         * This is not guaranteed to have been retrieved until
         * tp_proxy_prepare_async() has finished; until then, the value is FALSE.
         */
        readonly enabled: boolean;
        /**
         * Whether this account has been online or not.
         *
         * One can receive change notifications on this property by connecting
         * to the #GObject::notify signal and using this property as the signal
         * detail.
         *
         * This is not guaranteed to have been retrieved until
         * tp_proxy_prepare_async() has finished; until then, the value is
         * %FALSE.
         */
        readonly has_been_online: boolean;
        /**
         * Whether this account has been online or not.
         *
         * One can receive change notifications on this property by connecting
         * to the #GObject::notify signal and using this property as the signal
         * detail.
         *
         * This is not guaranteed to have been retrieved until
         * tp_proxy_prepare_async() has finished; until then, the value is
         * %FALSE.
         */
        readonly hasBeenOnline: boolean;
        /**
         * The account's icon name. To change this propery, use
         * tp_account_set_icon_name_async().
         *
         * One can receive change notifications on this property by connecting
         * to the #GObject::notify signal and using this property as the signal
         * detail.
         *
         * This is not guaranteed to have been retrieved until
         * tp_proxy_prepare_async() has finished; until then, the value is
         * %NULL.
         */
        readonly icon_name: string;
        /**
         * The account's icon name. To change this propery, use
         * tp_account_set_icon_name_async().
         *
         * One can receive change notifications on this property by connecting
         * to the #GObject::notify signal and using this property as the signal
         * detail.
         *
         * This is not guaranteed to have been retrieved until
         * tp_proxy_prepare_async() has finished; until then, the value is
         * %NULL.
         */
        readonly iconName: string;
        /**
         * The nickname that should be set for the user on this account.
         *
         * One can receive change notifications on this property by connecting
         * to the #GObject::notify signal and using this property as the signal
         * detail.
         *
         * This is not guaranteed to have been retrieved until
         * tp_proxy_prepare_async() has finished; until then, the value is
         * %NULL.
         */
        readonly nickname: string;
        /**
         * The normalized form of the user's own unique identifier on this
         * protocol. For example, on XMPP accounts this is the user's JID; on
         * ICQ this is the user's UIN; and so on.
         *
         * One can receive change notifications on this property by connecting
         * to the #GObject::notify signal and using this property as the signal
         * detail.
         *
         * This is not guaranteed to have been retrieved until
         * tp_proxy_prepare_async() has finished; until then, the value is
         * %NULL.
         */
        readonly normalized_name: string;
        /**
         * The normalized form of the user's own unique identifier on this
         * protocol. For example, on XMPP accounts this is the user's JID; on
         * ICQ this is the user's UIN; and so on.
         *
         * One can receive change notifications on this property by connecting
         * to the #GObject::notify signal and using this property as the signal
         * detail.
         *
         * This is not guaranteed to have been retrieved until
         * tp_proxy_prepare_async() has finished; until then, the value is
         * %NULL.
         */
        readonly normalizedName: string;
        /**
         * The account's machine-readable protocol name, such as "jabber", "msn" or
         * "local-xmpp". Recommended names for most protocols can be found in the
         * Telepathy D-Bus Interface Specification.
         */
        readonly protocol: string;
        /**
         * The account's machine-readable protocol name, such as "jabber", "msn" or
         * "local-xmpp". Recommended names for most protocols can be found in the
         * Telepathy D-Bus Interface Specification.
         */
        readonly protocol_name: string;
        /**
         * The account's machine-readable protocol name, such as "jabber", "msn" or
         * "local-xmpp". Recommended names for most protocols can be found in the
         * Telepathy D-Bus Interface Specification.
         */
        readonly protocolName: string;
        /**
         * The account's requested presence type (a #TpConnectionPresenceType).
         *
         * Since 0.13.8,
         * one can receive change notifications on this property by connecting
         * to the #GObject::notify signal and using this property as the signal
         * detail. Change notifications for requested-presence-type,
         * requested-status and requested-status-message are always emitted together,
         * so it is sufficient to connect to one of the notification signals.
         *
         * This is not guaranteed to have been retrieved until
         * tp_proxy_prepare_async() has finished; until then, the value is
         * %NULL.
         */
        readonly requested_presence_type: number;
        /**
         * The account's requested presence type (a #TpConnectionPresenceType).
         *
         * Since 0.13.8,
         * one can receive change notifications on this property by connecting
         * to the #GObject::notify signal and using this property as the signal
         * detail. Change notifications for requested-presence-type,
         * requested-status and requested-status-message are always emitted together,
         * so it is sufficient to connect to one of the notification signals.
         *
         * This is not guaranteed to have been retrieved until
         * tp_proxy_prepare_async() has finished; until then, the value is
         * %NULL.
         */
        readonly requestedPresenceType: number;
        /**
         * The requested Status string of the account.
         *
         * Since 0.13.8,
         * one can receive change notifications on this property by connecting
         * to the #GObject::notify signal and using this property as the signal
         * detail. Change notifications for requested-presence-type,
         * requested-status and requested-status-message are always emitted together,
         * so it is sufficient to connect to one of the notification signals.
         *
         * This is not guaranteed to have been retrieved until
         * tp_proxy_prepare_async() has finished; until then, the value is
         * %NULL.
         */
        readonly requested_status: string;
        /**
         * The requested Status string of the account.
         *
         * Since 0.13.8,
         * one can receive change notifications on this property by connecting
         * to the #GObject::notify signal and using this property as the signal
         * detail. Change notifications for requested-presence-type,
         * requested-status and requested-status-message are always emitted together,
         * so it is sufficient to connect to one of the notification signals.
         *
         * This is not guaranteed to have been retrieved until
         * tp_proxy_prepare_async() has finished; until then, the value is
         * %NULL.
         */
        readonly requestedStatus: string;
        /**
         * The requested status message message of the account.
         *
         * Since 0.13.8,
         * one can receive change notifications on this property by connecting
         * to the #GObject::notify signal and using this property as the signal
         * detail. Change notifications for requested-presence-type,
         * requested-status and requested-status-message are always emitted together,
         * so it is sufficient to connect to one of the notification signals.
         *
         * This is not guaranteed to have been retrieved until
         * tp_proxy_prepare_async() has finished; until then, the value is
         * %NULL.
         */
        readonly requested_status_message: string;
        /**
         * The requested status message message of the account.
         *
         * Since 0.13.8,
         * one can receive change notifications on this property by connecting
         * to the #GObject::notify signal and using this property as the signal
         * detail. Change notifications for requested-presence-type,
         * requested-status and requested-status-message are always emitted together,
         * so it is sufficient to connect to one of the notification signals.
         *
         * This is not guaranteed to have been retrieved until
         * tp_proxy_prepare_async() has finished; until then, the value is
         * %NULL.
         */
        readonly requestedStatusMessage: string;
        /**
         * A machine-readable name identifying a specific service to which this
         * account connects, or a copy of #TpAccount:protocol if there is no more
         * specific service.
         *
         * Well-known names for various services can be found in the Telepathy D-Bus
         * Interface Specification.
         *
         * For instance, accounts for the "jabber" protocol should have the service
         * names "google-talk", "ovi-chat", "facebook" and "lj-talk" for accounts
         * that connect to Google Talk, Ovi Chat, Facebook and Livejournal,
         * respectively, and this property will be "jabber" for accounts that
         * connect to a generic Jabber server.
         *
         * To change this property, use
         * tp_account_set_service_async().
         */
        readonly service: string;
        /**
         * The storage identifier for this account.
         *
         * A provider-specific variant type used to identify this account with the
         * provider. This value will be %NULL if #TpAccount:storage-provider is
         * an empty string.
         *
         * This property cannot change once an Account has been created.
         *
         * This is not guaranteed to have been retrieved until the
         * %TP_ACCOUNT_FEATURE_STORAGE feature has been prepared; until then,
         * the value is %NULL.
         */
        readonly storage_identifier: GObject.Value;
        /**
         * The storage identifier for this account.
         *
         * A provider-specific variant type used to identify this account with the
         * provider. This value will be %NULL if #TpAccount:storage-provider is
         * an empty string.
         *
         * This property cannot change once an Account has been created.
         *
         * This is not guaranteed to have been retrieved until the
         * %TP_ACCOUNT_FEATURE_STORAGE feature has been prepared; until then,
         * the value is %NULL.
         */
        readonly storageIdentifier: GObject.Value;
        /**
         * Provider-specific information used to identify this
         * account. Use g_variant_get_type() to check that the type
         * is what you expect. For instance, if you use a
         * #TpAccount:storage-provider with numeric identifiers for accounts,
         * this variant might have type %G_VARIANT_TYPE_UINT32;
         * if the storage provider has string-based identifiers, it should
         * have type %G_VARIANT_TYPE_STRING.
         *
         * This property cannot change once an Account has been created.
         *
         * This is not guaranteed to have been retrieved until the
         * %TP_ACCOUNT_FEATURE_STORAGE feature has been prepared; until then,
         * the value is %NULL.
         */
        readonly storage_identifier_variant: GLib.Variant;
        /**
         * Provider-specific information used to identify this
         * account. Use g_variant_get_type() to check that the type
         * is what you expect. For instance, if you use a
         * #TpAccount:storage-provider with numeric identifiers for accounts,
         * this variant might have type %G_VARIANT_TYPE_UINT32;
         * if the storage provider has string-based identifiers, it should
         * have type %G_VARIANT_TYPE_STRING.
         *
         * This property cannot change once an Account has been created.
         *
         * This is not guaranteed to have been retrieved until the
         * %TP_ACCOUNT_FEATURE_STORAGE feature has been prepared; until then,
         * the value is %NULL.
         */
        readonly storageIdentifierVariant: GLib.Variant;
        /**
         * The storage provider for this account.
         *
         * The name of the account storage implementation. When this
         * is the empty string the account is internally stored.
         *
         * This property cannot change once an Account has been created.
         *
         * This is not guaranteed to have been retrieved until the
         * %TP_ACCOUNT_FEATURE_STORAGE feature has been prepared; until then,
         * the value is %NULL.
         */
        readonly storage_provider: string;
        /**
         * The storage provider for this account.
         *
         * The name of the account storage implementation. When this
         * is the empty string the account is internally stored.
         *
         * This property cannot change once an Account has been created.
         *
         * This is not guaranteed to have been retrieved until the
         * %TP_ACCOUNT_FEATURE_STORAGE feature has been prepared; until then,
         * the value is %NULL.
         */
        readonly storageProvider: string;
        /**
         * The storage restrictions for this account.
         *
         * A bitfield of #TpStorageRestrictionFlags that give the limitations of
         * this account imposed by the storage provider. This value will be 0
         * if #TpAccount:storage-provider is an empty string.
         *
         * This property cannot change once an Account has been created.
         *
         * This is not guaranteed to have been retrieved until the
         * %TP_ACCOUNT_FEATURE_STORAGE feature has been prepared; until then,
         * the value is 0.
         */
        readonly storage_restrictions: number;
        /**
         * The storage restrictions for this account.
         *
         * A bitfield of #TpStorageRestrictionFlags that give the limitations of
         * this account imposed by the storage provider. This value will be 0
         * if #TpAccount:storage-provider is an empty string.
         *
         * This property cannot change once an Account has been created.
         *
         * This is not guaranteed to have been retrieved until the
         * %TP_ACCOUNT_FEATURE_STORAGE feature has been prepared; until then,
         * the value is 0.
         */
        readonly storageRestrictions: number;
        /**
         * The object paths of previously-active accounts superseded by this one.
         * For instance, this can be used in a logger to read old logs for an
         * account that has been migrated from one connection manager to another.
         *
         * This is not guaranteed to have been retrieved until the
         * %TP_ACCOUNT_FEATURE_CORE feature has been prepared; until then,
         * the value is NULL.
         */
        readonly supersedes: string[];
        /**
         * If the %TP_ACCOUNT_FEATURE_ADDRESSING feature has been prepared
         * successfully, a list of additional URI schemes for which this
         * account should be used if possible. Otherwise %NULL.
         *
         * For instance, a SIP or Skype account might have "tel" in this list if the
         * user would like to use that account to call phone numbers.
         *
         * This list should not contain the primary URI scheme(s) for the account's
         * protocol (for instance, "xmpp" for XMPP, or "sip" or "sips" for SIP),
         * since it should be assumed to be useful for those schemes in any case.
         *
         * The notify::uri-schemes signal cannot be relied on if the Account Manager
         * is Mission Control version 5.14.0 or older.
         */
        readonly uri_schemes: string[];
        /**
         * If the %TP_ACCOUNT_FEATURE_ADDRESSING feature has been prepared
         * successfully, a list of additional URI schemes for which this
         * account should be used if possible. Otherwise %NULL.
         *
         * For instance, a SIP or Skype account might have "tel" in this list if the
         * user would like to use that account to call phone numbers.
         *
         * This list should not contain the primary URI scheme(s) for the account's
         * protocol (for instance, "xmpp" for XMPP, or "sip" or "sips" for SIP),
         * since it should be assumed to be useful for those schemes in any case.
         *
         * The notify::uri-schemes signal cannot be relied on if the Account Manager
         * is Mission Control version 5.14.0 or older.
         */
        readonly uriSchemes: string[];
        /**
         * Whether this account is valid.
         *
         * One can receive change notifications on this property by connecting
         * to the #GObject::notify signal and using this property as the signal
         * detail.
         *
         * This is not guaranteed to have been retrieved until
         * tp_proxy_prepare_async() has finished; until then, the value is
         * %FALSE.
         */
        readonly valid: boolean;

        // Constructors of TelepathyGLib-0.12.Account

        static ['new'](bus_daemon: DBusDaemon, object_path: string): Account;

        // Owm methods of TelepathyGLib-0.12.Account

        static get_feature_quark_addressing(): GLib.Quark;
        /**
         * &lt;!-- --&gt;
         */
        static get_feature_quark_connection(): GLib.Quark;
        /**
         * &lt;!-- --&gt;
         */
        static get_feature_quark_core(): GLib.Quark;
        /**
         * &lt;!-- --&gt;
         */
        static get_feature_quark_storage(): GLib.Quark;
        /**
         * Ensure that the known interfaces for TpAccount have been set up.
         * This is done automatically when necessary, but for correct
         * overriding of library interfaces by local extensions, you should
         * call this function before calling
         * tp_proxy_or_subclass_hook_on_interface_add() with first argument
         * %TP_TYPE_ACCOUNT.
         */
        static init_known_interfaces(): void;
        /**
         * Validates and parses a Telepathy Account's object path, extracting the
         * connection manager's name, the protocol, and the account's unique identifier
         * from the path. This includes replacing underscores with hyphens in the
         * protocol name, as defined in the Account specification.
         *
         * Any of the out parameters may be %NULL if not needed. If %TRUE is returned,
         * the caller is responsible for freeing the strings stored in any non-%NULL
         * out parameters, using g_free().
         * @param object_path a Telepathy Account's object path
         */
        static parse_object_path(object_path: string): boolean;

        // Owm methods of TelepathyGLib-0.12.Account

        /**
         * &lt;!-- --&gt;
         * @param scheme a URI scheme such as "tel", "sip" or "xmpp"
         * @returns %TRUE if the result of tp_account_get_uri_schemes() would include  @scheme
         */
        associated_with_uri_scheme(scheme: string): boolean;
        /**
         * Binds the :connection-status of `self` to the boolean property of another
         * object using a #GBinding such that the `target_property` will be set to
         * %TRUE when `self` is connected (and `invert` is %FALSE).
         *
         * `target_property` will be synchronised immediately (%G_BINDING_SYNC_CREATE).
         * `invert` can be interpreted as analogous to %G_BINDING_INVERT_BOOLEAN.
         *
         * For instance, this function can be used to bind the GtkWidget:sensitive
         * property to only make a widget sensitive when the account is connected.
         *
         * See g_object_bind_property() for more information.
         * @param target the target #GObject
         * @param target_property the property on @target to bind (must be %G_TYPE_BOOLEAN)
         * @param invert %TRUE if you wish to invert the value of @target_property   (i.e. %FALSE if connected)
         * @returns the #GBinding instance representing the binding   between the @self and the @target. The binding is released whenever the   #GBinding reference count reaches zero.
         */
        bind_connection_status_to_property(
            target: any | null,
            target_property: string,
            invert: boolean,
        ): GObject.Binding;
        /**
         * If the account's connection is not connected, return the D-Bus error name
         * with which it last disconnected or failed to connect (in particular, this
         * is %TP_ERROR_STR_CANCELLED if it was disconnected by a user request).
         * This is the same as #TpAccount:connection-error.
         *
         * If `details` is not %NULL, it will be used to return additional details about
         * the error (the same as #TpAccount:connection-error-details).
         *
         * Otherwise, return %NULL, without altering `details`.
         *
         * The returned string and `details` may become invalid when the main loop is
         * re-entered or the account is destroyed.
         * @returns a D-Bus error name, or %NULL.
         */
        dup_detailed_error_vardict(): string | null;
        /**
         * Returns the parameters of the account, in a variant of type
         * %G_VARIANT_TYPE_VARDICT where the keys
         * are parameter names (account, password, require-encryption etc.).
         * Use g_variant_lookup() or g_variant_lookup_value() for convenient
         * access to the values.
         *
         * The allowed parameters depend on the connection manager, and can be found
         * via tp_connection_manager_get_protocol() and
         * tp_connection_manager_protocol_get_param(). Well-known parameters are
         * listed
         * &lt;ulink url="http://telepathy.freedesktop.org/spec/org.freedesktop.Telepathy.ConnectionManager.html#org.freedesktop.Telepathy.ConnectionManager.RequestConnection"&gt;in
         * the Telepathy D-Bus Interface Specification&lt;/ulink&gt;.
         * @returns the dictionary of  parameters on @account, of type %G_VARIANT_TYPE_VARDICT
         */
        dup_parameters_vardict(): GLib.Variant;
        /**
         * Return provider-specific information used to identify this
         * account. Use g_variant_get_type() to check that the type
         * is what you expect; for instance, if the
         * #TpAccount:storage-provider has string-based user identifiers,
         * this variant should have type %G_VARIANT_TYPE_STRING.
         * @returns the same as the  #TpAccount:storage-identifier-variant property
         */
        dup_storage_identifier_variant(): GLib.Variant;
        /**
         * Makes an asynchronous request of `self'`s StorageSpecificInformation
         * property (part of the Account.Interface.Storage interface).
         *
         * When the operation is finished, `callback` will be called. You must then
         * call tp_account_dup_storage_specific_information_vardict_finish() to get the
         * result of the request.
         * @param callback a callback to call when the request is satisfied
         */
        dup_storage_specific_information_vardict_async(callback?: Gio.AsyncReadyCallback<this> | null): void;
        /**
         * Retrieve the value of the request begun with
         * tp_account_dup_storage_specific_information_vardict_async().
         * @param result a #GAsyncResult
         * @returns a map from strings to variants,  of type %G_VARIANT_TYPE_VARDICT
         */
        dup_storage_specific_information_vardict_finish(result: Gio.AsyncResult): GLib.Variant;
        /**
         * Set the connection of the account by specifying the connection object path.
         * This function does not return a new ref and it is not guaranteed that the
         * returned #TpConnection object is ready.
         *
         * The use-case for this function is in a HandleChannels callback and you
         * already know the object path for the connection, so you can let `account`
         * create its #TpConnection and return it for use.
         * @param path the path to connection object for #TpAccount
         * @returns the connection of the account, or %NULL if either  the object path @path is invalid or it is the null-value "/"
         */
        ensure_connection(path: string): Connection;
        /**
         * Gets the automatic presence, status and status message of `account`. These
         * values are the same as the #TpAccount:automatic-presence-type,
         * #TpAccount:automatic-status and #TpAccount:automatic-status-message
         * properties, and are the values that will be used if the account should
         * be put online automatically.
         * @returns the same as the #TpAccount:automatic-presence-type property
         */
        get_automatic_presence(): ConnectionPresenceType;
        /**
         * Requests an asynchronous get of `account'`s avatar. When
         * the operation is finished, `callback` will be called. You can then call
         * tp_account_get_avatar_finish() to get the result of the operation.
         * @param callback a callback to call when the request is satisfied
         */
        get_avatar_async(callback?: Gio.AsyncReadyCallback<this> | null): void;
        /**
         * Finishes an async get operation of `account'`s avatar.
         *
         * Beware that the returned value is only valid until `result` is freed.
         * Copy it with g_array_ref() if you need to keep it for longer.
         * @param result a #GAsyncResult
         * @returns a #GArray of #guchar  containing the bytes of the account's avatar, or %NULL on failure
         */
        get_avatar_finish(result: Gio.AsyncResult): Uint8Array;
        /**
         * &lt;!-- --&gt;
         * @returns the same as the #TpAccount:changing-presence property
         */
        get_changing_presence(): boolean;
        /**
         * &lt;!-- --&gt;
         * @returns the same as the #TpAccount:cm-name property
         */
        get_cm_name(): string;
        /**
         * &lt;!-- --&gt;
         * @returns the same as the #TpAccount:connect-automatically property
         */
        get_connect_automatically(): boolean;
        /**
         * &lt;!-- --&gt;
         * @returns the same as the #TpAccount:connection property
         */
        get_connection(): Connection;
        /**
         * &lt;!-- --&gt;
         * @returns the same as the #TpAccount:connection-manager property
         */
        get_connection_manager(): string;
        /**
         * Gets the connection status and reason from `account`. The two values
         * are the same as the #TpAccount:connection-status and
         * #TpAccount:connection-status-reason properties.
         * @returns the same as the #TpAccount:connection-status property
         */
        get_connection_status(): ConnectionStatus;
        /**
         * Gets the current presence, status and status message of `account`. These
         * values are the same as the #TpAccount:current-presence-type,
         * #TpAccount:current-status and #TpAccount:current-status-message properties.
         * @returns the same as the #TpAccount:current-presence-type property
         */
        get_current_presence(): ConnectionPresenceType;
        /**
         * &lt;!-- --&gt;
         * @returns the same as the #TpAccount:display-name property
         */
        get_display_name(): string;
        /**
         * &lt;!-- --&gt;
         * @returns the same as the #TpAccount:has-been-online property
         */
        get_has_been_online(): boolean;
        /**
         * &lt;!-- --&gt;
         * @returns the same as the #TpAccount:icon-name property
         */
        get_icon_name(): string;
        /**
         * &lt;!-- --&gt;
         * @returns the same as the #TpAccount:nickname property
         */
        get_nickname(): string;
        /**
         * &lt;!-- --&gt;
         * @returns the same as the #TpAccount:normalized-name  property
         */
        get_normalized_name(): string;
        /**
         * Returns the parameters of the account, in a hash table where each string
         * is the parameter name (account, password, require-encryption etc.), and
         * each value is a #GValue. Using the tp_asv_get family of functions
         * (tp_asv_get_uint32(), tp_asv_get_string() etc.) to access the parameters is
         * recommended.
         *
         * The allowed parameters depend on the connection manager, and can be found
         * via tp_connection_manager_get_protocol() and
         * tp_connection_manager_protocol_get_param(). Well-known parameters are
         * listed
         * &lt;ulink url="http://telepathy.freedesktop.org/spec/org.freedesktop.Telepathy.ConnectionManager.html#org.freedesktop.Telepathy.ConnectionManager.RequestConnection"&gt;in
         * the Telepathy D-Bus Interface Specification&lt;/ulink&gt;.
         * @returns the hash table of  parameters on @account
         */
        get_parameters(): GLib.HashTable<string, GObject.Value>;
        /**
         * Returns the portion of `account'`s object path after the standard
         * #TP_ACCOUNT_OBJECT_PATH_BASE prefix, of the form "cm/protocol/acct". This
         * string uniquely identifies the account.
         *
         * This function is only intended to be used when printing debug messages or in
         * tools for developer. For a string suitable for displaying to the user, see
         * tp_account_get_display_name(). To retrieve the connection manager and
         * protocol name parts of the object path, see
         * tp_account_get_connection_manager() and tp_account_get_protocol(). For
         * persistent identification of the account, use tp_proxy_get_object_path().
         * @returns a suffix of @account's object path, for debugging purposes.
         */
        get_path_suffix(): string;
        /**
         * &lt;!-- --&gt;
         * @returns the same as the #TpAccount:protocol property
         */
        get_protocol(): string;
        /**
         * &lt;!-- --&gt;
         * @returns the same as the #TpAccount:protocol-name property
         */
        get_protocol_name(): string;
        /**
         * Gets the requested presence, status and status message of `account`. These
         * values are the same as the #TpAccount:requested-presence-type,
         * #TpAccount:requested-status and #TpAccount:requested-status-message
         * properties.
         * @returns the same as the #TpAccount:requested-presence-type property
         */
        get_requested_presence(): ConnectionPresenceType;
        /**
         * &lt;!-- --&gt;
         * @returns the same as the #TpAccount:service property
         */
        get_service(): string;
        /**
         * &lt;!-- --&gt;
         * @returns the same as the #TpAccount:storage-identifier property
         */
        get_storage_identifier(): GObject.Value;
        /**
         * &lt;!-- --&gt;
         * @returns the same as the #TpAccount:storage-provider property
         */
        get_storage_provider(): string;
        /**
         * &lt;!-- --&gt;
         * @returns the same as the #TpAccount:storage-restrictions property
         */
        get_storage_restrictions(): StorageRestrictionFlags;
        /**
         * Makes an asynchronous request of `self'`s StorageSpecificInformation
         * property (part of the Account.Interface.Storage interface).
         *
         * When the operation is finished, `callback` will be called. You must then
         * call tp_account_get_storage_specific_information_finish() to get the
         * result of the request.
         * @param callback a callback to call when the request is satisfied
         */
        get_storage_specific_information_async(callback?: Gio.AsyncReadyCallback<this> | null): void;
        /**
         * Retrieve the value of the request begun with
         * tp_account_get_storage_specific_information_async().
         *
         * Beware that the returned value is only valid until `result` is freed.
         * Copy it with g_hash_table_ref() if you need to keep it for longer.
         * @param result a #GAsyncResult
         * @returns a #GHashTable  of strings to GValues representing the D-Bus type a{sv}.
         */
        get_storage_specific_information_finish(result: Gio.AsyncResult): GLib.HashTable<string, GObject.Value>;
        /**
         * Return the same thing as the #TpAccount:supersedes property, in a way
         * that may be more convenient for C code.
         *
         * The returned pointers are not guaranteed to remain valid after the
         * main loop has been re-entered.
         * @returns the same as the #TpAccount:supersedes property
         */
        get_supersedes(): string[];
        /**
         * Return the #TpAccount:uri-schemes property
         * @returns the value of #TpAccount:uri_schemes property
         */
        get_uri_schemes(): string[];
        /**
         * &lt;!-- --&gt;
         * @returns the same as the #TpAccount:enabled property
         */
        is_enabled(): boolean;
        /**
         * &lt;!-- --&gt;
         * @returns the same as the #TpAccount:valid property
         */
        is_valid(): boolean;
        /**
         * Requests an asynchronous reconnect of `account`. When the operation is
         * finished, `callback` will be called. You can then call
         * tp_account_reconnect_finish() to get the result of the operation.
         * @param callback a callback to call when the request is satisfied
         */
        reconnect_async(callback?: Gio.AsyncReadyCallback<this> | null): void;
        /**
         * Finishes an async reconnect of `account`.
         * @param result a #GAsyncResult
         * @returns %TRUE if the reconnect call was successful, otherwise %FALSE
         */
        reconnect_finish(result: Gio.AsyncResult): boolean;
        /**
         * Requests an asynchronous removal of `account`. When the operation is
         * finished, `callback` will be called. You can then call
         * tp_account_remove_finish() to get the result of the operation.
         * @param callback a callback to call when the request is satisfied
         */
        remove_async(callback?: Gio.AsyncReadyCallback<this> | null): void;
        /**
         * Finishes an async removal of `account`.
         * @param result a #GAsyncResult
         * @returns %TRUE if the operation was successful, otherwise %FALSE
         */
        remove_finish(result: Gio.AsyncResult): boolean;
        /**
         * Requests an asynchronous change of presence on `account`. When the
         * operation is finished, `callback` will be called. You can then call
         * tp_account_request_presence_finish() to get the result of the operation.
         * @param type the requested presence
         * @param status a status message to set, or %NULL
         * @param message a message for the change, or %NULL
         * @param callback a callback to call when the request is satisfied
         */
        request_presence_async(
            type: ConnectionPresenceType,
            status: string,
            message: string,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Finishes an async presence change request on `account`.
         * @param result a #GAsyncResult
         * @returns %TRUE if the operation was successful, otherwise %FALSE
         */
        request_presence_finish(result: Gio.AsyncResult): boolean;
        /**
         * Requests an asynchronous change of `account'`s automatic presence. When the
         * operation is finished, `callback` will be called. You can then call
         * tp_account_set_automatic_presence_finish() to get the result of the
         * operation.
         * @param type the requested presence
         * @param status a status message to set, or %NULL
         * @param message a message for the change, or %NULL
         * @param callback a callback to call when the request is satisfied
         */
        set_automatic_presence_async(
            type: ConnectionPresenceType,
            status: string,
            message: string,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Finishes an asynchronous request to change the automatic presence of
         * `account`.
         * @param result a #GAsyncResult
         * @returns %TRUE if the operation was successful, otherwise %FALSE
         */
        set_automatic_presence_finish(result: Gio.AsyncResult): boolean;
        /**
         * Requests an asynchronous change of the Avatar parameter on `self`. When
         * the operation is finished, `callback` will be called. You can then call
         * tp_account_set_avatar_finish() to get the result of the operation.
         *
         * If `len` equals 0, the avatar is cleared.
         * @param avatar a new avatar to set; can be %NULL  only if @len equals 0
         * @param mime_type the MIME type of the new avatar; can be %NULL  only if @len equals 0
         * @param callback a callback to call when the request is satisfied
         */
        set_avatar_async(
            avatar?: Uint8Array | null,
            mime_type?: string | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Finishes an async avatar change request on `account`.
         * @param result a #GAsyncResult
         * @returns %TRUE if the operation was successful, otherwise %FALSE
         */
        set_avatar_finish(result: Gio.AsyncResult): boolean;
        /**
         * Requests an asynchronous set of the ConnectAutomatically property of
         * `account`. When the operation is finished, `callback` will be called. You can
         * then call tp_account_set_display_name_finish() to get the result of the
         * operation.
         * @param connect_automatically new value for the parameter
         * @param callback a callback to call when the request is satisfied
         */
        set_connect_automatically_async(
            connect_automatically: boolean,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Finishes an async set of the ConnectAutomatically property.
         * @param result a #GAsyncResult
         * @returns %TRUE if the call was successful, otherwise %FALSE
         */
        set_connect_automatically_finish(result: Gio.AsyncResult): boolean;
        /**
         * Requests an asynchronous set of the DisplayName property of `account`. When
         * the operation is finished, `callback` will be called. You can then call
         * tp_account_set_display_name_finish() to get the result of the operation.
         * @param display_name a new display name, or %NULL to unset the display name
         * @param callback a callback to call when the request is satisfied
         */
        set_display_name_async(display_name: string, callback?: Gio.AsyncReadyCallback<this> | null): void;
        /**
         * Finishes an async set of the DisplayName property.
         * @param result a #GAsyncResult
         * @returns %TRUE if the call was successful, otherwise %FALSE
         */
        set_display_name_finish(result: Gio.AsyncResult): boolean;
        /**
         * Requests an asynchronous set of the Enabled property of `account`. When the
         * operation is finished, `callback` will be called. You can then call
         * tp_account_set_enabled_finish() to get the result of the operation.
         * @param enabled the new enabled value of @account
         * @param callback a callback to call when the request is satisfied
         */
        set_enabled_async(enabled: boolean, callback?: Gio.AsyncReadyCallback<this> | null): void;
        /**
         * Finishes an async set of the Enabled property.
         * @param result a #GAsyncResult
         * @returns %TRUE if the set was successful, otherwise %FALSE
         */
        set_enabled_finish(result: Gio.AsyncResult): boolean;
        /**
         * Requests an asynchronous set of the Icon property of `account`. When
         * the operation is finished, `callback` will be called. You can then call
         * tp_account_set_icon_name_finish() to get the result of the operation.
         * @param icon_name a new icon name, or %NULL to unset the icon name
         * @param callback a callback to call when the request is satisfied
         */
        set_icon_name_async(icon_name: string, callback?: Gio.AsyncReadyCallback<this> | null): void;
        /**
         * Finishes an async set of the Icon parameter.
         * @param result a #GAsyncResult
         * @returns %TRUE if the operation was successful, otherwise %FALSE
         */
        set_icon_name_finish(result: Gio.AsyncResult): boolean;
        /**
         * Requests an asynchronous change of the Nickname parameter on `account`. When
         * the operation is finished, `callback` will be called. You can then call
         * tp_account_set_nickname_finish() to get the result of the operation.
         * @param nickname a new nickname to set
         * @param callback a callback to call when the request is satisfied
         */
        set_nickname_async(nickname: string, callback?: Gio.AsyncReadyCallback<this> | null): void;
        /**
         * Finishes an async nickname change request on `account`.
         * @param result a #GAsyncResult
         * @returns %TRUE if the operation was successful, otherwise %FALSE
         */
        set_nickname_finish(result: Gio.AsyncResult): boolean;
        /**
         * Requests an asynchronous set of the Service property on `self`. When
         * the operation is finished, `callback` will be called. You can then call
         * tp_account_set_service_finish() to get the result of the operation.
         * @param service a new service name, or %NULL or the empty string to unset the  service name (which will result in the #TpAccount:service property  becoming the same as #TpAccount:protocol)
         * @param callback a callback to call when the request is satisfied
         */
        set_service_async(service: string, callback?: Gio.AsyncReadyCallback<this> | null): void;
        /**
         * Finishes an async set of the Service parameter.
         * @param result a #GAsyncResult
         * @returns %TRUE if the operation was successful, otherwise %FALSE
         */
        set_service_finish(result: Gio.AsyncResult): boolean;
        /**
         * Add `scheme` to the list of additional URI schemes that would be returned
         * by tp_account_get_uri_schemes(), or remove it from that list.
         *
         * `scheme` should not be the primary URI scheme for the account's
         * protocol (for instance, "xmpp" for XMPP, or "sip" or "sips" for SIP),
         * since the account should be assumed to be useful for those schemes
         * regardless of the contents of the list.
         *
         * Calling this method does not require the %TP_ACCOUNT_FEATURE_ADDRESSING
         * feature to be enabled, but the change will not be reflected in the result
         * of tp_account_get_uri_schemes() or tp_account_associated_with_uri_scheme()
         * unless that feature has been enabled.
         * @param scheme a non-%NULL URI scheme such as "tel"
         * @param associate %TRUE to use this account for @scheme, or %FALSE to not use it
         * @param callback a callback to call when the request is satisfied
         */
        set_uri_scheme_association_async(
            scheme: string,
            associate: boolean,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Interpret the result of tp_account_set_uri_scheme_association_async().
         * @param result a #GAsyncResult
         * @returns %TRUE if the call was successful, otherwise %FALSE
         */
        set_uri_scheme_association_finish(result: Gio.AsyncResult): boolean;
        /**
         * Requests an asynchronous update of parameters of `account`. When the
         * operation is finished, `callback` will be called. You can then call
         * tp_account_update_parameters_finish() to get the result of the operation.
         * @param parameters new  parameters to set on @account
         * @param unset_parameters list of parameters to unset on @account
         * @param callback a callback to call when the request is satisfied
         */
        update_parameters_async(
            parameters: GLib.HashTable<string, GObject.Value>,
            unset_parameters: string,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Finishes an async update of the parameters on `account`.
         * @param result a #GAsyncResult
         * @returns %TRUE if the request succeeded, otherwise %FALSE
         */
        update_parameters_finish(result: Gio.AsyncResult): boolean;
        /**
         * Requests an asynchronous update of parameters of `account`. When the
         * operation is finished, `callback` will be called. You can then call
         * tp_account_update_parameters_finish() to get the result of the operation.
         *
         * If `parameters` is a floating reference (see g_variant_ref_sink()),
         * ownership of `parameters` is taken by this function. This means
         * you can pass the result of g_variant_new() or g_variant_new_parsed()
         * directly to this function without additional reference-count management.
         * @param parameters a variant of type %G_VARIANT_TYPE_VARDICT  containing new parameters to set on @account
         * @param unset_parameters list of parameters to unset on @account
         * @param callback a callback to call when the request is satisfied
         */
        update_parameters_vardict_async(
            parameters: GLib.Variant,
            unset_parameters: string[],
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Finishes an async update of the parameters on `account`.
         * @param result a #GAsyncResult
         * @returns %TRUE if the request succeeded, otherwise %FALSE
         */
        update_parameters_vardict_finish(result: Gio.AsyncResult): boolean;
    }

    module AccountChannelRequest {
        // Signal callback interfaces

        interface ReHandled {
            (channel: Channel, user_action_time: number, context: HandleChannelsContext): void;
        }

        // Constructor properties interface
    }

    /**
     * Data structure representing a #TpAccountChannelRequest object.
     */
    class AccountChannelRequest extends GObject.Object {
        // Own properties of TelepathyGLib-0.12.AccountChannelRequest

        /**
         * The #TpAccount used to request the channel.
         * Read-only except during construction.
         *
         * This property can't be %NULL.
         */
        account: Account;
        /**
         * The #TpChannelRequest used to request the channel, or %NULL if the
         * channel has not be requested yet.
         *
         * This can be useful for example to compare with the #TpChannelRequest
         * objects received from the requests_satisfied argument of
         * #TpSimpleHandlerHandleChannelsImpl to check if the client is asked to
         * handle the channel it just requested.
         *
         * Note that the #TpChannelRequest objects may be different while still
         * representing the same ChannelRequest on D-Bus. You have to compare
         * them using their object paths (tp_proxy_get_object_path()).
         *
         * Since 0.13.13
         */
        readonly channel_request: ChannelRequest;
        /**
         * The #TpChannelRequest used to request the channel, or %NULL if the
         * channel has not be requested yet.
         *
         * This can be useful for example to compare with the #TpChannelRequest
         * objects received from the requests_satisfied argument of
         * #TpSimpleHandlerHandleChannelsImpl to check if the client is asked to
         * handle the channel it just requested.
         *
         * Note that the #TpChannelRequest objects may be different while still
         * representing the same ChannelRequest on D-Bus. You have to compare
         * them using their object paths (tp_proxy_get_object_path()).
         *
         * Since 0.13.13
         */
        readonly channelRequest: ChannelRequest;
        /**
         * The desired D-Bus properties for the channel.
         *
         * When constructing a new object, one of
         * #TpAccountChannelRequest:request or
         * #TpAccountChannelRequest:request-vardict must be set to a non-%NULL
         * value, and the other must remain unspecified.
         */
        request_vardict: GLib.Variant;
        /**
         * The desired D-Bus properties for the channel.
         *
         * When constructing a new object, one of
         * #TpAccountChannelRequest:request or
         * #TpAccountChannelRequest:request-vardict must be set to a non-%NULL
         * value, and the other must remain unspecified.
         */
        requestVardict: GLib.Variant;
        /**
         * The user action time that will be passed to the channel dispatcher when
         * requesting the channel.
         *
         * This may be the time at which user action occurred, or one of the special
         * values %TP_USER_ACTION_TIME_NOT_USER_ACTION or
         * %TP_USER_ACTION_TIME_CURRENT_TIME.
         *
         * If %TP_USER_ACTION_TIME_NOT_USER_ACTION, the action doesn't involve any
         * user action. Clients should avoid stealing focus when presenting the
         * channel.
         *
         * If %TP_USER_ACTION_TIME_CURRENT_TIME, clients SHOULD behave as though the
         * user action happened at the current time, e.g. a client may
         * request that its window gains focus.
         *
         * On X11-based systems, GDK 2, GDK 3, Clutter 1.0 etc.,
         * tp_user_action_time_from_x11() can be used to convert an X11 timestamp to
         * a Telepathy user action time.
         *
         * If the channel request succeeds, this user action time will be passed on
         * to the channel's handler. If the handler is a GUI, it may use
         * tp_user_action_time_should_present() to decide whether to bring its
         * window to the foreground.
         */
        user_action_time: number;
        /**
         * The user action time that will be passed to the channel dispatcher when
         * requesting the channel.
         *
         * This may be the time at which user action occurred, or one of the special
         * values %TP_USER_ACTION_TIME_NOT_USER_ACTION or
         * %TP_USER_ACTION_TIME_CURRENT_TIME.
         *
         * If %TP_USER_ACTION_TIME_NOT_USER_ACTION, the action doesn't involve any
         * user action. Clients should avoid stealing focus when presenting the
         * channel.
         *
         * If %TP_USER_ACTION_TIME_CURRENT_TIME, clients SHOULD behave as though the
         * user action happened at the current time, e.g. a client may
         * request that its window gains focus.
         *
         * On X11-based systems, GDK 2, GDK 3, Clutter 1.0 etc.,
         * tp_user_action_time_from_x11() can be used to convert an X11 timestamp to
         * a Telepathy user action time.
         *
         * If the channel request succeeds, this user action time will be passed on
         * to the channel's handler. If the handler is a GUI, it may use
         * tp_user_action_time_should_present() to decide whether to bring its
         * window to the foreground.
         */
        userActionTime: number;

        // Constructors of TelepathyGLib-0.12.AccountChannelRequest

        static ['new'](
            account: Account,
            request: GLib.HashTable<string, GObject.Value>,
            user_action_time: number,
        ): AccountChannelRequest;

        static new_audio_call(account: Account, user_action_time: number): AccountChannelRequest;

        static new_audio_video_call(account: Account, user_action_time: number): AccountChannelRequest;

        static new_dbus_tube(account: Account, service_name: string, user_action_time: number): AccountChannelRequest;

        static new_file_transfer(
            account: Account,
            filename: string,
            mime_type: string | null,
            size: number,
            user_action_time: number,
        ): AccountChannelRequest;

        static new_stream_tube(account: Account, service: string, user_action_time: number): AccountChannelRequest;

        static new_text(account: Account, user_action_time: number): AccountChannelRequest;

        static new_vardict(account: Account, request: GLib.Variant, user_action_time: number): AccountChannelRequest;

        // Owm methods of TelepathyGLib-0.12.AccountChannelRequest

        /**
         * Asynchronously calls CreateChannel on the ChannelDispatcher to create a
         * channel with the properties defined in #TpAccountChannelRequest:request
         * that you are going to handle yourself.
         * When the operation is finished, `callback` will be called. You can then call
         * tp_account_channel_request_create_and_handle_channel_finish() to get the
         * result of the operation.
         *
         * (Behind the scenes, this works by creating a temporary #TpBaseClient, then
         * acting like tp_account_channel_request_create_channel_async() with the
         * temporary #TpBaseClient as the `preferred_handler`.)
         *
         * The caller is responsible for closing the channel with
         * tp_cli_channel_call_close() when it has finished handling it.
         * @param cancellable optional #GCancellable object, %NULL to ignore
         * @param callback a callback to call when the request is satisfied
         */
        create_and_handle_channel_async(
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Finishes an async channel creation started using
         * tp_account_channel_request_create_and_handle_channel_async().
         *
         * See tp_account_channel_request_ensure_and_handle_channel_finish()
         * for details of how `context` can be used.
         *
         * The caller is responsible for closing the channel with
         * tp_cli_channel_call_close() when it has finished handling it.
         * @param result a #GAsyncResult
         * @returns a new reference on a #TpChannel if the channel was successfully created and you are handling it, otherwise %NULL.
         */
        create_and_handle_channel_finish(result: Gio.AsyncResult): Channel | null;
        /**
         * Asynchronously calls CreateChannel on the ChannelDispatcher to create a
         * channel with the properties defined in #TpAccountChannelRequest:request
         * and let the ChannelDispatcher dispatch it to an handler.
         * `callback` will be called when the channel has been created and dispatched,
         * or the request has failed.
         * You can then call tp_account_channel_request_create_channel_finish() to
         * get the result of the operation and a #TpChannel representing the channel
         * which has been created. Note that you are &lt;emphasis&gt;not&lt;/emphasis&gt; handling
         * this channel and so should interact with the channel as an Observer.
         * See &lt;ulink url="http://telepathy.freedesktop.org/doc/book/sect.channel-dispatcher.clients.html"&gt;
         * the Telepathy book&lt;/ulink&gt; for details about how clients should interact
         * with channels.
         * @param preferred_handler Either the well-known bus name (starting with %TP_CLIENT_BUS_NAME_BASE) of the preferred handler for the channel, or %NULL to indicate that any handler would be acceptable.
         * @param cancellable optional #GCancellable object, %NULL to ignore
         * @param callback a callback to call when the request is satisfied
         */
        create_and_observe_channel_async(
            preferred_handler: string,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Finishes an async channel creation started using
         * tp_account_channel_request_create_and_observe_channel_async().
         * @param result a #GAsyncResult
         * @returns a newly created #TpChannel if the channel was successfully created and dispatched, otherwise %NULL.
         */
        create_and_observe_channel_finish(result: Gio.AsyncResult): Channel;
        /**
         * Asynchronously calls CreateChannel on the ChannelDispatcher to create a
         * channel with the properties defined in #TpAccountChannelRequest:request
         * and let the ChannelDispatcher dispatch it to an handler.
         * `callback` will be called when the channel has been created and dispatched,
         * or the request has failed.
         * You can then call tp_account_channel_request_create_channel_finish() to
         * get the result of the operation.
         * @param preferred_handler Either the well-known bus name (starting with %TP_CLIENT_BUS_NAME_BASE) of the preferred handler for the channel, or %NULL to indicate that any handler would be acceptable.
         * @param cancellable optional #GCancellable object, %NULL to ignore
         * @param callback a callback to call when the request is satisfied
         */
        create_channel_async(
            preferred_handler: string,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Finishes an async channel creation started using
         * tp_account_channel_request_create_channel_async().
         * @param result a #GAsyncResult
         * @returns %TRUE if the channel was successfully created and dispatched, otherwise %FALSE.
         */
        create_channel_finish(result: Gio.AsyncResult): boolean;
        /**
         * Return the #TpAccountChannelRequest:request-vardict construct-only
         * property.
         * @returns the value of  #TpAccountChannelRequest:request-vardict
         */
        dup_request(): GLib.Variant;
        /**
         * Asynchronously calls EnsureChannel on the ChannelDispatcher to create a
         * channel with the properties defined in #TpAccountChannelRequest:request
         * that you are going to handle yourself.
         * When the operation is finished, `callback` will be called. You can then call
         * tp_account_channel_request_ensure_and_handle_channel_finish() to get the
         * result of the operation.
         *
         * If the channel already exists and is already being handled, or if a
         * newly created channel is sent to a different handler, this operation
         * will fail with the error %TP_ERROR_NOT_YOURS. The other handler
         * will be notified that the channel was requested again (for instance
         * with #TpAccountChannelRequest::re-handled,
         * #TpBaseClientClassHandleChannelsImpl or #TpSimpleHandler:callback),
         * and can move its window to the foreground, if applicable.
         *
         * (Behind the scenes, this works by creating a temporary #TpBaseClient, then
         * acting like tp_account_channel_request_ensure_channel_async() with the
         * temporary #TpBaseClient as the `preferred_handler`.)
         * @param cancellable optional #GCancellable object, %NULL to ignore
         * @param callback a callback to call when the request is satisfied
         */
        ensure_and_handle_channel_async(
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Finishes an async channel creation started using
         * tp_account_channel_request_ensure_and_handle_channel_async().
         *
         * If the channel already exists and is already being handled, or if a
         * newly created channel is sent to a different handler, this operation
         * will fail with the error %TP_ERROR_NOT_YOURS.
         *
         * `context` can be used to obtain extensible information about the channel
         * via tp_handle_channels_context_get_handler_info(), and any similar methods
         * that are added in future. It is not valid for the caller of this method
         * to call tp_handle_channels_context_accept(),
         * tp_handle_channels_context_delay() or tp_handle_channels_context_fail().
         * @param result a #GAsyncResult
         * @returns a new reference on a #TpChannel if the channel was successfully created and you are handling it, otherwise %NULL.
         */
        ensure_and_handle_channel_finish(result: Gio.AsyncResult): Channel | null;
        /**
         * Asynchronously calls EnsureChannel on the ChannelDispatcher to create a
         * channel with the properties defined in #TpAccountChannelRequest:request
         * and let the ChannelDispatcher dispatch it to an handler.
         * `callback` will be called when the channel has been created and dispatched,
         * or the request has failed.
         * You can then call tp_account_channel_request_create_channel_finish() to
         * get the result of the operation and a #TpChannel representing the channel
         * which has been created. Note that you are &lt;emphasis&gt;not&lt;/emphasis&gt; handling
         * this channel and so should interact with the channel as an Observer.
         * See &lt;ulink url="http://telepathy.freedesktop.org/doc/book/sect.channel-dispatcher.clients.html"&gt;
         * the Telepathy book&lt;/ulink&gt; for details about how clients should interact
         * with channels.
         *
         * If a suitable channel already existed, its handler will be notified that
         * the channel was requested again (for instance with
         * #TpAccountChannelRequest::re-handled, #TpBaseClientClassHandleChannelsImpl
         * or #TpSimpleHandler:callback, if it is implemented using Telepathy-GLib),
         * so that it can re-present the window to the user, for example.
         * Otherwise, a new channel will be created and dispatched to a handler.
         * @param preferred_handler Either the well-known bus name (starting with %TP_CLIENT_BUS_NAME_BASE) of the preferred handler for the channel, or %NULL to indicate that any handler would be acceptable.
         * @param cancellable optional #GCancellable object, %NULL to ignore
         * @param callback a callback to call when the request is satisfied
         */
        ensure_and_observe_channel_async(
            preferred_handler: string,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Finishes an async channel creation started using
         * tp_account_channel_request_create_and_observe_channel_async().
         * @param result a #GAsyncResult
         * @returns a newly created #TpChannel if the channel was successfully ensure and (re-)dispatched, otherwise %NULL.
         */
        ensure_and_observe_channel_finish(result: Gio.AsyncResult): Channel;
        /**
         * Asynchronously calls EnsureChannel on the ChannelDispatcher to create a
         * channel with the properties defined in #TpAccountChannelRequest:request
         * and let the ChannelDispatcher dispatch it to an handler.
         *
         * If a suitable channel already existed, its handler will be notified that
         * the channel was requested again (for instance with
         * #TpAccountChannelRequest::re-handled, #TpBaseClientClassHandleChannelsImpl
         * or #TpSimpleHandler:callback, if it is implemented using Telepathy-GLib),
         * so that it can re-present the window to the user, for example.
         * Otherwise, a new channel will be created and dispatched to a handler.
         *
         * `callback` will be called when an existing channel's handler has been
         * notified, a new channel has been created and dispatched, or the request
         * has failed.
         * You can then call tp_account_channel_request_ensure_channel_finish() to
         * get the result of the operation.
         * @param preferred_handler Either the well-known bus name (starting with %TP_CLIENT_BUS_NAME_BASE) of the preferred handler for the channel, or %NULL to indicate that any handler would be acceptable.
         * @param cancellable optional #GCancellable object, %NULL to ignore
         * @param callback a callback to call when the request is satisfied
         */
        ensure_channel_async(
            preferred_handler: string,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Finishes an async channel creation started using
         * tp_account_channel_request_ensure_channel_async().
         * @param result a #GAsyncResult
         * @returns %TRUE if the channel was successfully ensured and (re-)dispatched, otherwise %FALSE.
         */
        ensure_channel_finish(result: Gio.AsyncResult): boolean;
        /**
         * Return the #TpAccountChannelRequest:account construct-only property
         * @returns the value of #TpAccountChannelRequest:account
         */
        get_account(): Account;
        /**
         * Return the #TpAccountChannelRequest:channel-request property
         * @returns the value of #TpAccountChannelRequest:channel-request
         */
        get_channel_request(): ChannelRequest;
        /**
         * Return the #TpAccountChannelRequest:request construct-only property
         * @returns the value of #TpAccountChannelRequest:request
         */
        get_request(): GLib.HashTable<any, any>;
        /**
         * Return the #TpAccountChannelRequest:user-action-time construct-only property
         * @returns the value of #TpAccountChannelRequest:user-action-time
         */
        get_user_action_time(): number;
        /**
         * Set `factory` as the #TpClientChannelFactory that will be used to
         * create the channel requested by `self`.
         * By default #TpAutomaticProxyFactory is used.
         *
         * This function can't be called once `self` has been used to request a
         * channel.
         * @param factory a #TpClientChannelFactory
         */
        set_channel_factory(factory: ClientChannelFactory): void;
        /**
         * Indicate that the channel which is going to be requested using `self`
         * is an upgrade of the channels whose object paths is listed in `channels`.
         *
         * This function can't be called once `self` has been used to request a
         * channel.
         * @param channels a #NULL-terminated array of channel paths
         */
        set_conference_initial_channels(channels: string): void;
        /**
         * If `delegate` is %TRUE, asks to the client currently handling the channels to
         * delegate them to the preferred handler (passed when calling
         * tp_account_channel_request_ensure_channel_async() for example).
         *
         * This function can't be called once `self` has been used to request a
         * channel.
         * @param delegate %TRUE to request to delegate channels
         */
        set_delegate_to_preferred_handler(delegate: boolean): void;
        /**
         * Turn on support for
         * the org.freedesktop.Telepathy.ChannelRequest.DelegateToPreferredHandler
         * hint.
         *
         * When receiving a request containing this hint, `self` will automatically
         * delegate the channel to the preferred handler of the request and then call
         * `callback` to inform the client that it is no longer handling this channel.
         *
         * `callback` may be called any time after (and only after) requesting and
         * handling the channel (i.e. you have called create_and_handle or
         * ensure_and_handle).
         *
         * This function can't be called once `self` has been used to request a
         * channel.
         *
         * See also: tp_base_client_set_delegated_channels_callback()
         * @param callback function called the channel requested using @self is delegated, may not be %NULL
         */
        set_delegated_channel_callback(callback: AccountChannelRequestDelegatedChannelCb): void;
        /**
         * Configure this channel request to provide the recipient of the file
         * with the given description.
         *
         * If file descriptions are not supported by the protocol, or if this
         * method is used on a request that is not actually a file transfer, the
         * channel request will fail. Use
         * tp_capabilities_supports_file_transfer_description() to determine
         * whether outgoing file transfers can have a description.
         *
         * This function can't be called once `self` has been used to request a
         * channel.
         * @param description a description of the file
         */
        set_file_transfer_description(description: string): void;
        /**
         * Configure this channel request to accompany the file transfer with
         * the hash of the file.
         *
         * This function can't be called once `self` has been used to request a
         * channel.
         * @param hash_type a type of @hash
         * @param hash hash of the contents of the file transfer
         */
        set_file_transfer_hash(hash_type: FileHashType, hash: string): void;
        /**
         * Configure this channel request to inform the recipient of the file
         * that this channel will not send the first `offset` bytes of the file.
         * In some protocols, this can be used to resume an interrupted transfer.
         *
         * If this method is not called, the default is to start from the
         * beginning of the file (equivalent to `offset` = 0).
         *
         * If offsets greater than 0 are not supported by the protocol, or if this
         * method is used on a request that is not actually a file transfer, the
         * channel request will fail. Use
         * tp_capabilities_supports_file_transfer_initial_offset() to determine
         * whether offsets greater than 0 are available.
         *
         * This function can't be called once `self` has been used to request a
         * channel.
         * @param offset the offset into the file at which the transfer will start
         */
        set_file_transfer_initial_offset(offset: number): void;
        /**
         * Configure this channel request to accompany the file transfer with
         * the given modification timestamp for the file.
         *
         * If file timestamps are not supported by the protocol, or if this
         * method is used on a request that is not actually a file transfer, the
         * channel request will fail. Use
         * tp_capabilities_supports_file_transfer_date() to determine
         * whether outgoing file transfers can have a timestamp.
         *
         * This function can't be called once `self` has been used to request a
         * channel.
         * @param timestamp the modification timestamp of the file, in seconds since the  Unix epoch (the beginning of 1970 in the UTC time zone), as returned  by g_date_time_to_unix()
         */
        set_file_transfer_timestamp(timestamp: number): void;
        /**
         * Configure this channel request to provide other local Telepathy
         * components with the URI of the file being sent. Unlike most
         * properties on a file transfer channel, this information is not
         * sent to the recipient of the file; instead, it is signalled on
         * D-Bus for use by other Telepathy components.
         *
         * The URI should usually be a &lt;code&gt;file&lt;/code&gt; URI as defined by
         * &lt;ulink url="http://www.apps.ietf.org/rfc/rfc1738.html#sec-3.10"&gt;RFC 1738
         * §3.10&lt;/ulink&gt; (for instance, &lt;code&gt;file:///path/to/file&lt;/code&gt; or
         * &lt;code&gt;file://localhost/path/to/file&lt;/code&gt;). If a remote resource
         * is being transferred to a contact, it may have a different scheme,
         * such as &lt;code&gt;http&lt;/code&gt;.
         *
         * Even if this method is used, the connection manager will not read
         * the file from disk: the handler for the channel is still
         * responsible for streaming the file. However, providing the URI
         * allows a local logger to log which file was transferred, for instance.
         *
         * If this functionality is not supported by the connection manager, or
         * if this method is used on a request that is not actually a file transfer,
         * the channel request will fail. Use
         * tp_capabilities_supports_file_transfer_uri() to determine
         * whether outgoing file transfers can have a URI.
         *
         * This function can't be called once `self` has been used to request a
         * channel.
         * @param uri the source URI for the file
         */
        set_file_transfer_uri(uri: string): void;
        /**
         * Set additional information about the channel request, which will be used
         * in the resulting request's #TpChannelRequest:hints property.
         *
         * This function can't be called once `self` has been used to request a
         * channel.
         * @param key the key used for the hint
         * @param value a variant containting the hint value
         */
        set_hint(key: string, value: GLib.Variant): void;
        /**
         * Set additional information about the channel request, which will be used
         * as the value for the resulting request's #TpChannelRequest:hints property.
         *
         * This function can't be called once `self` has been used to request a
         * channel.
         *
         * In high-level language bindings, use tp_account_channel_request_set_hint()
         * instead.
         * @param hints a #TP_HASH_TYPE_STRING_VARIANT_MAP
         */
        set_hints(hints: GLib.HashTable<any, any>): void;
        /**
         * Indicate that the contacts listed in `ids` have to be invited to the
         * conference represented by the channel which is going to be requested
         * using `self`.
         *
         * This function can't be called once `self` has been used to request a
         * channel.
         * @param ids a #NULL-terminated array of contact ids
         */
        set_initial_invitee_ids(ids: string): void;
        /**
         * Indicate that the contacts listed in `contacts` have to be invited to the
         * conference represented by the channel which is going to be requested
         * using `self`.
         *
         * This function can't be called once `self` has been used to request a
         * channel.
         * @param contacts a #GPtrArray of #TpContact
         */
        set_initial_invitees(contacts: Contact[]): void;
        /**
         * Configure this channel request to include the given property, as
         * documented in the Telepathy D-Bus API Specification or an
         * implementation-specific extension.
         *
         * Using this method is not recommended, but it can be necessary for
         * experimental or implementation-specific interfaces.
         *
         * If the property is not supported by the protocol or channel type, the
         * channel request will fail. Use #TpCapabilities and the Telepathy
         * D-Bus API Specification to determine which properties are available.
         *
         * If `value` is a floating reference, this method takes ownership of it
         * by using g_variant_ref_sink(). This allows convenient inline use of
         * #GVariant constructors:
         *
         *
         * ```
         * tp_account_channel_request_set_request_property (acr, "com.example.Int",
         *     g_variant_new_int32 (17));
         * tp_account_channel_request_set_request_property (acr, "com.example.String",
         *     g_variant_new_string ("ferret"));
         * ```
         *
         *
         * It is an error to provide a `value` which contains types not supported by
         * D-Bus.
         *
         * This function can't be called once `self` has been used to request a
         * channel.
         * @param name a D-Bus property name
         * @param value an arbitrary value for the property
         */
        set_request_property(name: string, value: GLib.Variant): void;
        /**
         * If `is_sms_channel` is set to #TRUE, messages sent and received on the
         * requested channel will be transmitted via SMS.
         *
         * This function can't be called once `self` has been used to request a
         * channel.
         * @param is_sms_channel #TRUE if the channel should use SMS
         */
        set_sms_channel(is_sms_channel: boolean): void;
        /**
         * Configure this request to create a peer-to-peer channel with `contact` as
         * the other peer.
         *
         * This function can't be called once `self` has been used to request a
         * channel.
         * @param contact the contact to be contacted
         */
        set_target_contact(contact: Contact): void;
        /**
         * Configure this request to create a channel with `identifier,`
         * an identifier of type `handle_type`.
         *
         * This function can't be called once `self` has been used to request a
         * channel.
         * @param handle_type the type of @identifier, typically %TP_HANDLE_TYPE_CONTACT  or %TP_HANDLE_TYPE_ROOM
         * @param identifier the unique identifier of the contact, room etc. to be  contacted
         */
        set_target_id(handle_type: HandleType, identifier: string): void;
    }

    module AccountManager {
        // Signal callback interfaces

        interface AccountDisabled {
            (account: Account): void;
        }

        interface AccountEnabled {
            (account: Account): void;
        }

        interface AccountRemoved {
            (account: Account): void;
        }

        interface AccountValidityChanged {
            (account: Account, valid: boolean): void;
        }

        interface MostAvailablePresenceChanged {
            (presence: number, status: string, message: string): void;
        }

        // Constructor properties interface
    }

    /**
     * The Telepathy Account Manager stores real-time communication accounts and
     * their configuration, places accounts online on request, and manipulates
     * accounts' presence, nicknames and avatars.
     *
     * #TpAccountManager is the "top level" object. Since 0.16 it always has a
     * non-%NULL #TpProxy:factory, and its #TpProxy:factory will be
     * propagated to all other objects like #TpAccountManager -&gt; #TpAccount -&gt;
     * #TpConnection -&gt; #TpContact and #TpChannel. This means that desired features
     * set on that factory will be prepared on all those objects.
     * If a #TpProxy:factory is not specified when the #TpAccountManager is
     * constructed, it will use a #TpAutomaticClientFactory.
     *
     * &lt;example id="account-manager"&gt;&lt;title&gt;TpAccountManager example&lt;/title&gt;&lt;programlisting&gt;&lt;xi:include xmlns:xi="http://www.w3.org/2001/XInclude" parse="text" href="../../../examples/client/contact-list.c"&gt;&lt;xi:fallback&gt;FIXME: MISSING XINCLUDE CONTENT&lt;/xi:fallback&gt;&lt;/xi:include&gt;&lt;/programlisting&gt;&lt;/example&gt;
     */
    class AccountManager extends Proxy {
        // Constructors of TelepathyGLib-0.12.AccountManager

        static ['new'](bus_daemon: DBusDaemon): AccountManager;

        static new_with_factory(factory: SimpleClientFactory): AccountManager;

        // Owm methods of TelepathyGLib-0.12.AccountManager

        /**
         * Check if tp_account_manager_set_default() has already successfully been
         * called.
         */
        static can_set_default(): boolean;
        /**
         * Returns an account manager proxy on the D-Bus daemon on which this
         * process was activated (if it was launched by D-Bus service activation), or
         * the session bus (otherwise). This account manager will always have
         * the result of tp_dbus_daemon_dup() as its #TpProxy:dbus-daemon.
         *
         * The returned #TpAccountManager is cached; the same #TpAccountManager object
         * will be returned by this function repeatedly, as long as at least one
         * reference exists. Note that the returned #TpAccountManager is not guaranteed
         * to be ready on return.
         *
         * If tp_account_manager_set_default() has been called successfully,
         * that #TpAccountManager will be returned. Otherwise, a new #TpAccountManager
         * will be created the first time this function is called, using a new
         * #TpAutomaticClientFactory as its #TpProxy:factory.
         */
        static dup(): AccountManager;
        /**
         * &lt;!-- --&gt;
         */
        static get_feature_quark_core(): GLib.Quark;
        /**
         * Ensure that the known interfaces for TpAccountManager have been set up.
         * This is done automatically when necessary, but for correct
         * overriding of library interfaces by local extensions, you should
         * call this function before calling
         * tp_proxy_or_subclass_hook_on_interface_add() with first argument
         * %TP_TYPE_ACCOUNT_MANAGER.
         */
        static init_known_interfaces(): void;

        // Owm methods of TelepathyGLib-0.12.AccountManager

        /**
         * Requests an asynchronous create of an account on the account manager
         * `manager`. When the operation is finished, `callback` will be called. You can
         * then call tp_account_manager_create_account_finish() to get the result of
         * the operation.
         *
         * The #TpAccount returned by tp_account_manager_create_account_finish()
         * will already have %TP_ACCOUNT_FEATURE_CORE prepared, along with all
         * features previously passed to
         * tp_simple_client_factory_add_account_features() for the account
         * manager's #TpProxy:factory.
         *
         * It is usually better to use #TpAccountRequest instead, particularly when
         * using high-level language bindings.
         * @param connection_manager the name of a connection manager
         * @param protocol the name of a protocol
         * @param display_name the display name for the account
         * @param parameters parameters  for the new account
         * @param properties properties  for the new account
         * @param callback a callback to call when the request is satisfied
         */
        create_account_async(
            connection_manager: string,
            protocol: string,
            display_name: string,
            parameters: GLib.HashTable<string, GObject.Value>,
            properties: GLib.HashTable<string, GObject.Value>,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Finishes an async create account operation, and returns a new #TpAccount
         * object. It has %TP_ACCOUNT_FEATURE_CORE prepared, along with all
         * features previously passed to
         * tp_simple_client_factory_add_account_features() for the account
         * manager's #TpProxy:factory.
         *
         * The caller must keep a ref to the returned object using g_object_ref() if
         * it is to be kept beyond the lifetime of `result`.
         * @param result a #GAsyncResult
         * @returns a new #TpAccount which was just created on  success, otherwise %NULL
         */
        create_account_finish(result: Gio.AsyncResult): Account;
        /**
         * Returns a newly allocated #GList of reffed valid accounts in `manager`.
         * The list must be freed with g_list_free_full() and g_object_unref() after
         * used.
         *
         * The returned #TpAccount&lt;!-- --&gt;s are guaranteed to have
         * %TP_ACCOUNT_FEATURE_CORE prepared, along with all features previously passed
         * to tp_simple_client_factory_add_account_features() for the account
         * manager's #TpProxy:factory.
         *
         * The list of valid accounts returned is not guaranteed to have been retrieved
         * until %TP_ACCOUNT_MANAGER_FEATURE_CORE is prepared
         * (tp_proxy_prepare_async() has returned). Until this feature has
         * been prepared, an empty list (%NULL) will be returned.
         * @returns a newly  allocated #GList of reffed valid accounts in @manager
         */
        dup_valid_accounts(): Account[];
        /**
         * Enable autostarting the account manager D-Bus service. This means
         * that the account manager will be restarted if it disappears from
         * the bus.
         */
        enable_restart(): void;
        /**
         * Lookup an account in the account manager `manager`. If the desired account
         * has already been ensured then the same object will be returned, otherwise
         * it will create a new #TpAccount and add it to `manager`. As a result, if
         * `manager` thinks that the account doesn't exist, this will still add it to
         * `manager` to avoid races.
         *
         * The account will be constructed via this account manager's #TpProxy:factory
         * (so it will be of an appropriate #TpAccount subclass if the factory
         * returns one), but does not necessarily have any features prepared yet.
         * Use tp_proxy_prepare_async() to prepare features, using
         * the contents of tp_simple_client_factory_dup_account_features() as a
         * parameter if you want to prepare the same features that would
         * normally be used.
         *
         * The caller must keep a ref to the returned object using g_object_ref() if
         * it is to be kept.
         * @param path the object path for an account
         * @returns a new #TpAccount at @path, or %NULL if @path is  not a valid account path.
         */
        ensure_account(path: string): Account;
        /**
         * Gets the most available presence over all accounts in `manager`. This
         * function does not average presences across all accounts, but it merely
         * finds the "most available" presence. As a result, there is a guarantee
         * that there exists at least one account in `manager` with the returned
         * presence.
         *
         * If no accounts are enabled or valid the output will be
         * (%TP_CONNECTION_PRESENCE_TYPE_OFFLINE, "offline", "").
         *
         * Since 0.17.5, if the only connected accounts does not implement
         * %TP_IFACE_CONNECTION_INTERFACE_SIMPLE_PRESENCE, the output will be
         * (%TP_CONNECTION_PRESENCE_TYPE_AVAILABLE, "available", "").
         *
         * The return value of this function is not guaranteed to have been retrieved
         * until tp_proxy_prepare_async() has finished; until then, the
         * value will be the same as if no accounts are enabled or valid.
         * @returns the most available presence across all accounts
         */
        get_most_available_presence(): ConnectionPresenceType;
        /**
         * Returns a newly allocated #GList of valid accounts in `manager`. The list
         * must be freed with g_list_free() after used. None of the accounts in the
         * returned list are guaranteed to be ready.
         *
         * Note that the #TpAccount&lt;!-- --&gt;s in the returned #GList are not reffed
         * before returning from this function. One could ref every item in the list
         * like the following example:
         *
         * ```
         * GList *accounts;
         * account = tp_account_manager_get_valid_accounts (manager);
         * g_list_foreach (accounts, (GFunc) g_object_ref, NULL);
         * ```
         *
         *
         * The returned #TpAccount&lt;!-- --&gt;s are guaranteed to have
         * %TP_ACCOUNT_FEATURE_CORE prepared, along with all features previously passed
         * to tp_simple_client_factory_add_account_features() for the account
         * manager's #TpProxy:factory.
         *
         * The list of valid accounts returned is not guaranteed to have been retrieved
         * until %TP_ACCOUNT_MANAGER_FEATURE_CORE is prepared
         * (tp_proxy_prepare_async() has returned). Until this feature has
         * been prepared, an empty list (%NULL) will be returned.
         * @returns a newly allocated #GList of valid accounts in @manager
         */
        get_valid_accounts(): Account[];
        /**
         * Iterates through the accounts in `manager` and requests the presence
         * (`type,` `status` and `message)`. Note that the presence requested here is
         * merely a request, and if might not be satisfiable.
         *
         * You can find the most available presence across all accounts by calling
         * tp_account_manager_get_most_available_presence().
         *
         * Setting a requested presence on all accounts will have no effect
         * until tp_proxy_prepare_async()
         * (or the older tp_account_manager_prepare_async()) has finished.
         * @param type a presence type to request
         * @param status a status to request
         * @param message a status message to request
         */
        set_all_requested_presences(type: ConnectionPresenceType, status: string, message: string): void;
        /**
         * Define the #TpAccountManager singleton that will be returned by
         * tp_account_manager_dup().
         *
         * This function may only be called before the first call to
         * tp_account_manager_dup(), and may not be called more than once. Applications
         * which use a custom #TpSimpleClientFactory and want the default
         * #TpAccountManager to use that factory should call this after calling
         * tp_account_manager_new_with_factory().
         *
         * Unlike tp_account_manager_dup(), this function will keep an internal
         * reference to `manager,` so it will never be destroyed.
         *
         * Note that `manager` must use the default #TpDBusDaemon as returned by
         * tp_dbus_daemon_dup()
         */
        set_default(): void;
    }

    module AccountRequest {
        // Constructor properties interface
    }

    /**
     * An object for representing a currently non-existent account which
     * is to be created on a #TpAccountManager.
     */
    class AccountRequest extends GObject.Object {
        // Own properties of TelepathyGLib-0.12.AccountRequest

        /**
         * The #TpAccountManager to create the account on.
         */
        account_manager: AccountManager;
        /**
         * The #TpAccountManager to create the account on.
         */
        accountManager: AccountManager;
        /**
         * The account's automatic presence type (a
         * #TpConnectionPresenceType). To change this property use
         * tp_account_request_set_automatic_presence().
         *
         * When the account is put online automatically, for instance to
         * make a channel request or because network connectivity becomes
         * available, the automatic presence type, status and message will
         * be copied to their "requested" counterparts.
         */
        readonly automatic_presence_type: number;
        /**
         * The account's automatic presence type (a
         * #TpConnectionPresenceType). To change this property use
         * tp_account_request_set_automatic_presence().
         *
         * When the account is put online automatically, for instance to
         * make a channel request or because network connectivity becomes
         * available, the automatic presence type, status and message will
         * be copied to their "requested" counterparts.
         */
        readonly automaticPresenceType: number;
        /**
         * The string status name to use in conjunction with the
         * #TpAccountRequest:automatic-presence-type. To change this property
         * use tp_account_request_set_automatic_presence().
         */
        readonly automatic_status: string;
        /**
         * The string status name to use in conjunction with the
         * #TpAccountRequest:automatic-presence-type. To change this property
         * use tp_account_request_set_automatic_presence().
         */
        readonly automaticStatus: string;
        /**
         * The user-defined message to use in conjunction with the
         * #TpAccount:automatic-presence-type. To change this property use
         * tp_account_request_set_automatic_presence().
         */
        readonly automatic_status_message: string;
        /**
         * The user-defined message to use in conjunction with the
         * #TpAccount:automatic-presence-type. To change this property use
         * tp_account_request_set_automatic_presence().
         */
        readonly automaticStatusMessage: string;
        /**
         * The avatar set on the account. The avatar's mime type can be read
         * in the #TpAccountRequest:avatar-mime-type property. To change this
         * property, use tp_account_request_set_avatar().
         */
        readonly avatar: any[];
        /**
         * The mime type of the #TpAccountRequest:avatar property. To change
         * this property, use tp_account_request_set_avatar().
         */
        readonly avatar_mime_type: string;
        /**
         * The mime type of the #TpAccountRequest:avatar property. To change
         * this property, use tp_account_request_set_avatar().
         */
        readonly avatarMimeType: string;
        /**
         * Whether the account should connect automatically or not. To change this
         * property, use tp_account_request_set_connect_automatically().
         */
        readonly connect_automatically: boolean;
        /**
         * Whether the account should connect automatically or not. To change this
         * property, use tp_account_request_set_connect_automatically().
         */
        readonly connectAutomatically: boolean;
        /**
         * The account's connection manager name.
         */
        connection_manager: string;
        /**
         * The account's connection manager name.
         */
        connectionManager: string;
        /**
         * The account's display name. To change this property use
         * tp_account_request_set_display_name().
         */
        display_name: string;
        /**
         * The account's display name. To change this property use
         * tp_account_request_set_display_name().
         */
        displayName: string;
        /**
         * Whether the account is enabled or not. To change this property
         * use tp_account_request_set_enabled().
         */
        readonly enabled: boolean;
        /**
         * The account's icon name. To change this propery, use
         * tp_account_request_set_icon_name().
         */
        readonly icon_name: string;
        /**
         * The account's icon name. To change this propery, use
         * tp_account_request_set_icon_name().
         */
        readonly iconName: string;
        /**
         * The account's nickname. To change this property use
         * tp_account_request_set_nickname().
         */
        readonly nickname: string;
        /**
         * The account's connection parameters. To add a parameter, use
         * tp_account_request_set_parameter() or another convience function.
         */
        readonly parameters: GLib.Variant;
        /**
         * The account's properties.
         */
        readonly properties: GLib.Variant;
        /**
         * The account's machine-readable protocol name, such as "jabber", "msn" or
         * "local-xmpp". Recommended names for most protocols can be found in the
         * Telepathy D-Bus Interface Specification.
         */
        protocol: string;
        /**
         * The account's requested presence type (a
         * #TpConnectionPresenceType). To change this property use
         * tp_account_request_set_requested_presence().
         */
        readonly requested_presence_type: number;
        /**
         * The account's requested presence type (a
         * #TpConnectionPresenceType). To change this property use
         * tp_account_request_set_requested_presence().
         */
        readonly requestedPresenceType: number;
        /**
         * The requested Status string of the account. To change this
         * property use tp_account_request_set_requested_presence().
         */
        readonly requested_status: string;
        /**
         * The requested Status string of the account. To change this
         * property use tp_account_request_set_requested_presence().
         */
        readonly requestedStatus: string;
        /**
         * The requested status message message of the account. To change
         * this property use tp_account_request_set_requested_presence().
         */
        readonly requested_status_message: string;
        /**
         * The requested status message message of the account. To change
         * this property use tp_account_request_set_requested_presence().
         */
        readonly requestedStatusMessage: string;
        /**
         * A string describing the service of the account, which must
         * consist only of ASCII letters, numbers and hyphen/minus signs,
         * and start with a letter (matching the requirements for
         * Protocol). To change this property, use
         * tp_account_request_set_service().
         */
        readonly service: string;
        /**
         * The account's storage provider. To change this property use
         * tp_account_request_set_storage_provider().
         */
        readonly storage_provider: string;
        /**
         * The account's storage provider. To change this property use
         * tp_account_request_set_storage_provider().
         */
        readonly storageProvider: string;
        /**
         * The object paths of previously-active accounts superseded by this one.
         * For instance, this can be used in a logger to read old logs for an
         * account that has been migrated from one connection manager to another.
         *
         * To add to this property use tp_account_request_add_supersedes().
         */
        readonly supersedes: string[];

        // Constructors of TelepathyGLib-0.12.AccountRequest

        static ['new'](
            account_manager: AccountManager,
            manager: string,
            protocol: string,
            display_name: string,
        ): AccountRequest;

        static new_from_protocol(
            account_manager: AccountManager,
            protocol: Protocol,
            display_name: string,
        ): AccountRequest;

        // Owm methods of TelepathyGLib-0.12.AccountRequest

        /**
         * Add an account object path to the list of superseded accounts which
         * this new account will supersede. Use the
         * #TpAccountRequest:supersedes property to read the current list of
         * superseded accounts.
         * @param superseded_path an account object path to add to the supersedes   list
         */
        add_supersedes(superseded_path: string): void;
        /**
         * Start an asynchronous operation to create the account `self` on the
         * account manager.
         *
         * `callback` will only be called when the newly created #TpAccount has
         * the %TP_ACCOUNT_FEATURE_CORE feature ready on it, so when calling
         * tp_account_request_create_account_finish(), one can guarantee this
         * feature.
         * @param callback a function to call when the account has been created
         */
        create_account_async(callback?: Gio.AsyncReadyCallback<this> | null): void;
        /**
         * Finishes an asynchronous account creation operation and returns a
         * new ref to a #TpAccount object. The returned account will have the
         * features listed in tp_simple_client_factory_dup_account_features()
         * (with the proxy factory from #TpAccountRequest:account-manager)
         * prepared on it.
         * @param result a #GAsyncResult
         * @returns a new ref to a #TpAccount, or %NULL
         */
        create_account_finish(result: Gio.AsyncResult): Account;
        /**
         * Set the automatic presence for the new account, `self,` to the type
         * (`presence,` `status)`, with message `message`. Use the
         * #TpAccountRequest:automatic-presence-type,
         * #TpAccountRequest:automatic-status, and
         * #TpAccountRequest:automatic-status-message properties to read the
         * current automatic presence.
         * @param presence the automatic presence type
         * @param status the automatic presence status
         * @param message the automatic presence message
         */
        set_automatic_presence(presence: ConnectionPresenceType, status: string, message: string): void;
        /**
         * Set the avatar of the account `self` to `avatar`. Use the
         * #TpAccountRequest:avatar and #TpAccountRequest:avatar-mime-type
         * properties to read the current avatar.
         * @param avatar a new avatar to set; can   be %NULL only if %len equals 0
         * @param mime_type the MIME type of the new avatar; can be %NULL  only if @len equals 0
         */
        set_avatar(avatar?: Uint8Array | null, mime_type?: string | null): void;
        /**
         * Set the connect automatically property of the account on creation
         * to `connect_automatically` so that the account is brought online to
         * the automatic presence. Use the
         * #TpAccountRequest:connect-automatically property to read the current
         * connect automatically value.
         * @param connect_automatically %TRUE if the account is to connect automatically
         */
        set_connect_automatically(connect_automatically: boolean): void;
        /**
         * Set the display name for the new account, `self,` to `name`. Use the
         * #TpAccountRequest:display-name property to read the current display
         * name.
         * @param name a display name for the account
         */
        set_display_name(name: string): void;
        /**
         * Set the enabled property of the account on creation to
         * `enabled`. Use the #TpAccountRequest:enabled property to read the
         * current enabled value.
         * @param enabled %TRUE if the account is to be enabled
         */
        set_enabled(enabled: boolean): void;
        /**
         * Set the icon name for the new account, `self,` to `icon`. Use the
         * #TpAccountRequest:icon-name property to read the current icon name.
         * @param icon an icon name for the account
         */
        set_icon_name(icon: string): void;
        /**
         * Set the nickname for the new account, `self,` to `nickname`. Use the
         * #TpAccountRequest:nickname property to read the current nickname.
         * @param nickname a nickname for the account
         */
        set_nickname(nickname: string): void;
        /**
         * Set an account parameter, `key,` to `value`. Use the
         * #TpAccountRequest:parameters property to read the current list of
         * set parameters.
         *
         * Parameters can be unset using tp_account_request_unset_parameter().
         * @param key the parameter key
         * @param value a variant containing the parameter value
         */
        set_parameter(key: string, value: GLib.Variant): void;
        /**
         * Set the requested presence for the new account, `self,` to the type
         * (`presence,` `status)`, with message `message`. Use the
         * #TpAccountRequest:requested-presence-type,
         * #TpAccountRequest:requested-status, and
         * #TpAccountRequest:requested-status-message properties to read the
         * current requested presence.
         * @param presence the requested presence type
         * @param status the requested presence status
         * @param message the requested presence message
         */
        set_requested_presence(presence: ConnectionPresenceType, status: string, message: string): void;
        /**
         * Set the service property of the account to `service`. Use the
         * #TpAccountRequest:service property to read the current value.
         * @param service the service name for
         */
        set_service(service: string): void;
        /**
         * Set the account storage to use when creating the account. Use the
         * #TpAccountRequest:storage-provider property to read the current value.
         * @param provider the name of an account storage implementation
         */
        set_storage_provider(provider: string): void;
        /**
         * Unset the account parameter `key` which has previously been set
         * using tp_account_request_set_parameter() or another convenience
         * function.
         * @param key the parameter key
         */
        unset_parameter(key: string): void;
    }

    module AddDispatchOperationContext {
        // Constructor properties interface
    }

    /**
     * Data structure representing the context of a Approver.AddDispatchOperation()
     * call.
     */
    class AddDispatchOperationContext extends GObject.Object {
        // Own properties of TelepathyGLib-0.12.AddDispatchOperationContext

        /**
         * A #TpAccount object representing the Account of the DispatchOperation
         * that has been passed to AddDispatchOperation.
         * Read-only except during construction.
         *
         * This property can't be %NULL.
         */
        account: Account;
        /**
         * A #GPtrArray containing #TpChannel objects representing the channels
         * that have been passed to AddDispatchOperation.
         * Read-only except during construction.
         *
         * This property can't be %NULL.
         */
        channels: any[];
        /**
         * A #TpConnection object representing the Connection of the DispatchOperation
         * that has been passed to AddDispatchOperation.
         * Read-only except during construction.
         *
         * This property can't be %NULL.
         */
        connection: Connection;
        /**
         * A #TpChannelDispatchOperation object representing the
         * ChannelDispatchOperation that has been passed to AddDispatchOperation.
         * Read-only except during construction.
         *
         * This property can't be %NULL.
         */
        dispatch_operation: ChannelDispatchOperation;
        /**
         * A #TpChannelDispatchOperation object representing the
         * ChannelDispatchOperation that has been passed to AddDispatchOperation.
         * Read-only except during construction.
         *
         * This property can't be %NULL.
         */
        dispatchOperation: ChannelDispatchOperation;

        // Owm methods of TelepathyGLib-0.12.AddDispatchOperationContext

        /**
         * Called by #TpBaseClientClassAddDispatchOperationImpl when it's done so
         * the D-Bus method can return.
         */
        accept(): void;
        /**
         * Called by #TpBaseClientClassAddDispatchOperationImpl to indicate that it
         * implements the method in an async way. The caller must take a reference
         * to the #TpAddDispatchOperationContext before calling this function, and
         * is responsible for calling either
         * tp_add_dispatch_operation_context_accept() or
         * tp_add_dispatch_operation_context_fail() later.
         */
        delay(): void;
        /**
         * Called by #TpBaseClientClassAddDispatchOperationImpl to raise a D-Bus error.
         * @param error the error to return from the method
         */
        fail(error: GLib.Error): void;
    }

    module AutomaticClientFactory {
        // Constructor properties interface
    }

    /**
     * Data structure representing a #TpAutomaticClientFactory
     */
    class AutomaticClientFactory extends SimpleClientFactory {
        // Constructors of TelepathyGLib-0.12.AutomaticClientFactory

        static ['new'](dbus?: DBusDaemon | null): AutomaticClientFactory;
    }

    module AutomaticProxyFactory {
        // Constructor properties interface
    }

    /**
     * Data structure representing a #TpAutomaticProxyFactory
     */
    class AutomaticProxyFactory extends GObject.Object {
        // Constructors of TelepathyGLib-0.12.AutomaticProxyFactory

        static ['new'](): AutomaticProxyFactory;

        // Owm methods of TelepathyGLib-0.12.AutomaticProxyFactory

        /**
         * Returns a cached #TpAutomaticProxyFactory; the same
         * #TpAutomaticProxyFactory object will be returned by this function repeatedly,
         * as long as at least one reference exists.
         */
        static dup(): AutomaticProxyFactory;
    }

    module BaseClient {
        // Signal callback interfaces

        interface RequestAdded {
            (account: Account, request: ChannelRequest): void;
        }

        interface RequestRemoved {
            (request: ChannelRequest, error: string, message: string): void;
        }

        // Constructor properties interface
    }

    /**
     * Data structure representing a generic #TpSvcClient implementation.
     */
    abstract class BaseClient extends GObject.Object {
        // Own properties of TelepathyGLib-0.12.BaseClient

        /**
         * Account manager for this base client, used to look up or create
         * #TpAccount objects. This may be specified in the constructor in order
         * to get existing #TpAccount objects.
         *
         * It is not guaranteed that any of its features have been prepared, and
         * it is not necessary to wait for any features before specifying this
         * property in the constructor.
         *
         * Clients that interact with the #TpAccount should usually
         * set this property instead of #TpBaseClient:dbus-daemon. Doing this
         * will ensure that each account, connection or contact is represented by
         * a single #TpAccount, #TpConnection or #TpContact object, shared between
         * all the cooperating modules that have the same #TpAccountManager.
         *
         * If the #TpBaseClient:dbus-daemon is set to the result of
         * tp_dbus_daemon_dup(), then this property defaults to
         * the result of tp_account_manager_dup().
         *
         * This property may be %NULL initially, but will always be non-%NULL
         * after the #TpBaseClient has been constructed.
         *
         * It is an error to specify both a non-%NULL account manager, and a
         * non-%NULL #TpBaseClient:dbus-daemon that is not the same as the
         * account manager's #TpProxy:dbus-daemon.
         */
        account_manager: AccountManager;
        /**
         * Account manager for this base client, used to look up or create
         * #TpAccount objects. This may be specified in the constructor in order
         * to get existing #TpAccount objects.
         *
         * It is not guaranteed that any of its features have been prepared, and
         * it is not necessary to wait for any features before specifying this
         * property in the constructor.
         *
         * Clients that interact with the #TpAccount should usually
         * set this property instead of #TpBaseClient:dbus-daemon. Doing this
         * will ensure that each account, connection or contact is represented by
         * a single #TpAccount, #TpConnection or #TpContact object, shared between
         * all the cooperating modules that have the same #TpAccountManager.
         *
         * If the #TpBaseClient:dbus-daemon is set to the result of
         * tp_dbus_daemon_dup(), then this property defaults to
         * the result of tp_account_manager_dup().
         *
         * This property may be %NULL initially, but will always be non-%NULL
         * after the #TpBaseClient has been constructed.
         *
         * It is an error to specify both a non-%NULL account manager, and a
         * non-%NULL #TpBaseClient:dbus-daemon that is not the same as the
         * account manager's #TpProxy:dbus-daemon.
         */
        accountManager: AccountManager;
        /**
         * The object implementing the #TpClientChannelFactoryInterface interface
         * that will be used to create channel proxies. While
         * tp_base_client_register() has not yet been called, this property can be
         * changed using tp_base_client_set_channel_factory().
         *
         * If no channel factory is specified then #TpAutomaticProxyFactory is used.
         */
        channel_factory: GObject.Object;
        /**
         * The object implementing the #TpClientChannelFactoryInterface interface
         * that will be used to create channel proxies. While
         * tp_base_client_register() has not yet been called, this property can be
         * changed using tp_base_client_set_channel_factory().
         *
         * If no channel factory is specified then #TpAutomaticProxyFactory is used.
         */
        channelFactory: GObject.Object;
        /**
         * #TpDBusDaemon object encapsulating this object's connection to D-Bus.
         * Read-only except during construction.
         *
         * This property can't be %NULL after construction.
         *
         * Since 0.11.14 this property may be %NULL or unspecified in
         * g_object_new(), but only if #TpBaseClient:account-manager is provided
         * instead, in which case its #TpProxy:dbus-daemon property will be
         * used.
         */
        dbus_daemon: DBusDaemon;
        /**
         * #TpDBusDaemon object encapsulating this object's connection to D-Bus.
         * Read-only except during construction.
         *
         * This property can't be %NULL after construction.
         *
         * Since 0.11.14 this property may be %NULL or unspecified in
         * g_object_new(), but only if #TpBaseClient:account-manager is provided
         * instead, in which case its #TpProxy:dbus-daemon property will be
         * used.
         */
        dbusDaemon: DBusDaemon;
        /**
         * Factory for this base client, used to look up or create
         * #TpAccount objects.
         */
        factory: SimpleClientFactory;
        /**
         * The name of the client. This is used to register the D-Bus service name
         * and object path of the service.
         *
         * This property can't be %NULL.
         */
        name: string;
        /**
         * If %TRUE, tp_base_client_register() will append an unique token to the
         * service bus name and object path to ensure they are unique.
         */
        uniquify_name: boolean;
        /**
         * If %TRUE, tp_base_client_register() will append an unique token to the
         * service bus name and object path to ensure they are unique.
         */
        uniquifyName: boolean;

        // Owm methods of TelepathyGLib-0.12.BaseClient

        /**
         * Request that the given features are prepared on each #TpAccount (in
         * addition to %TP_ACCOUNT_FEATURE_CORE) before calling
         * #TpBaseClientClass.observe_channels,
         * #TpBaseClientClass.add_dispatch_operation or
         * #TpBaseClientClass.handle_channels, or emitting
         * #TpBaseClient::request-added.
         * @param features the features
         */
        add_account_features(features: GLib.Quark[]): void;
        /**
         * Register a new channel class as Approver.ApproverChannelFilter.
         * The #TpBaseClientClass.add_dispatch_operation virtual method will be called
         * whenever a new channel's properties match the ones in `filter`.
         *
         * This method may only be called before tp_base_client_register() is
         * called, and may only be called on objects whose class implements
         * #TpBaseClientClass.add_dispatch_operation.
         * @param filter a %TP_HASH_TYPE_CHANNEL_CLASS
         */
        add_approver_filter(filter: GLib.HashTable<string, GObject.Value>): void;
        /**
         * Register a new channel class as Approver.ApproverChannelFilter.
         * The #TpBaseClientClass.add_dispatch_operation virtual method will be called
         * whenever a new channel's properties match the ones in `filter`.
         *
         * This method may only be called before tp_base_client_register() is
         * called, and may only be called on objects whose class implements
         * #TpBaseClientClass.add_dispatch_operation.
         *
         * If the variant is floating (see g_variant_ref_sink()), ownership
         * will be taken. See tp_base_client_add_observer_filter_vardict() for
         * more details.
         * @param filter a variant of type %G_VARIANT_TYPE_VARDICT
         */
        add_approver_filter_vardict(filter: GLib.Variant): void;
        /**
         * Request that the given features are prepared on each #TpChannel (in
         * addition to %TP_CHANNEL_FEATURE_CORE) before calling
         * #TpBaseClientClass.observe_channels,
         * #TpBaseClientClass.add_dispatch_operation or
         * #TpBaseClientClass.handle_channels.
         * @param features the features
         */
        add_channel_features(features: GLib.Quark[]): void;
        /**
         * Request that the given features are prepared on each #TpConnection (in
         * addition to %TP_CONNECTION_FEATURE_CORE) before calling
         * #TpBaseClientClass.observe_channels,
         * #TpBaseClientClass.add_dispatch_operation or
         * #TpBaseClientClass.handle_channels.
         * @param features the features
         */
        add_connection_features(features: GLib.Quark[]): void;
        /**
         * Add several capability tokens to this client. These are used to signal
         * that Telepathy connection managers should advertise certain capabilities
         * to other contacts, such as the ability to receive audio/video calls using
         * particular streaming protocols and codecs.
         *
         * This method may only be called before tp_base_client_register() is
         * called, and may only be called on objects whose class implements
         * #TpBaseClientClass.handle_channels.
         * @param tokens capability  tokens as defined by the Telepathy D-Bus API Specification
         */
        add_handler_capabilities(tokens: string[]): void;
        /**
         * Add one capability token to this client, as if via
         * tp_base_client_add_handler_capabilities().
         *
         * This method may only be called before tp_base_client_register() is
         * called, and may only be called on objects whose class implements
         * #TpBaseClientClass.handle_channels.
         * @param token a capability token as defined by the Telepathy D-Bus API  Specification
         */
        add_handler_capability(token: string): void;
        /**
         * Register a new channel class as Handler.HandlerChannelFilter.
         * The #TpBaseClientClass.handle_channels virtual method will be called
         * whenever a new channel's properties match the ones in `filter`.
         *
         * This method may only be called before tp_base_client_register() is
         * called, and may only be called on objects whose class implements
         * #TpBaseClientClass.handle_channels.
         * @param filter a %TP_HASH_TYPE_CHANNEL_CLASS
         */
        add_handler_filter(filter: GLib.HashTable<string, GObject.Value>): void;
        /**
         * Register a new channel class as Handler.HandlerChannelFilter.
         * The #TpBaseClientClass.handle_channels virtual method will be called
         * whenever a new channel's properties match the ones in `filter`.
         *
         * This method may only be called before tp_base_client_register() is
         * called, and may only be called on objects whose class implements
         * #TpBaseClientClass.handle_channels.
         *
         * If the variant is floating (see g_variant_ref_sink()), ownership
         * will be taken. See tp_base_client_add_observer_filter_vardict() for
         * more details.
         * @param filter a variant of type %G_VARIANT_TYPE_VARDICT
         */
        add_handler_filter_vardict(filter: GLib.Variant): void;
        /**
         * Register a new channel class as Observer.ObserverChannelFilter.
         * The #TpBaseClientClass.observe_channels virtual method will be called
         * whenever a new channel's properties match the ones in `filter`.
         *
         * This method may only be called before tp_base_client_register() is
         * called, and may only be called on objects whose class implements
         * #TpBaseClientClass.observe_channels.
         * @param filter a %TP_HASH_TYPE_CHANNEL_CLASS
         */
        add_observer_filter(filter: GLib.HashTable<string, GObject.Value>): void;
        /**
         * Register a new channel class as Observer.ObserverChannelFilter.
         * The #TpBaseClientClass.observe_channels virtual method will be called
         * whenever a new channel's properties match the ones in `filter`.
         *
         * This method may only be called before tp_base_client_register() is
         * called, and may only be called on objects whose class implements
         * #TpBaseClientClass.observe_channels.
         *
         * If the variant is floating (see g_variant_ref_sink()), ownership
         * will be taken, allowing for uses like this:
         *
         *
         * ```
         * tp_base_client_add_observer_filter_vardict (client,
         *    g_variant_new_parsed ("{ %s: &lt;%s&gt;, %s: &lt;%u&gt;, ... }",
         *        TP_PROP_CHANNEL_CHANNEL_TYPE, TP_IFACE_CHANNEL_TYPE_TEXT,
         *        TP_PROP_CHANNEL_TARGET_HANDLE_TYPE, (guint32) TP_HANDLE_TYPE_CONTACT,
         *        ...));
         * ```
         *
         * @param filter a variant of type %G_VARIANT_TYPE_VARDICT
         */
        add_observer_filter_vardict(filter: GLib.Variant): void;
        /**
         * Register `self` as a Client.Handler with an empty list of filters.
         * This is useful if you want to create a client that only handle channels
         * for which it's the PreferredHandler.
         *
         * This method may only be called before tp_base_client_register() is
         * called, and may only be called on objects whose class implements
         * #TpBaseClientClass.handle_channels.
         */
        be_a_handler(): void;
        /**
         * Asynchronously calls DelegateChannels on the ChannelDispatcher to try
         * stopping handling `channels` and pass them to another Handler.
         * You can then call tp_base_client_delegate_channels_finish() to
         * get the result of the operation.
         * @param channels a #GList of #TpChannel handled by @self
         * @param user_action_time the time at which user action occurred, or #TP_USER_ACTION_TIME_NOT_USER_ACTION if this delegation request is for some reason not involving user action.
         * @param preferred_handler Either the well-known bus name (starting with %TP_CLIENT_BUS_NAME_BASE) of the preferred handler for the channels, or %NULL to indicate that any handler but @self would be acceptable.
         * @param callback a callback to call when the request is satisfied
         */
        delegate_channels_async(
            channels: Channel[],
            user_action_time: number,
            preferred_handler: string,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Finishes an async channels delegation request started using
         * tp_base_client_delegate_channels_async().
         * @param result a #GAsyncResult
         * @returns %TRUE if the operation succeed, @delegated and @not_delegated can be used to know the channels that @self is not handling any more, otherwise %FALSE.
         */
        delegate_channels_finish(result: Gio.AsyncResult): boolean;
        /**
         * Returns the set of channels currently handled by this base client or by any
         * other #TpBaseClient with which it shares a unique name.
         * @returns the handled channels
         */
        dup_handled_channels(): Channel[];
        /**
         * Only works if tp_base_client_set_handler_request_notification() has been
         * called.
         * Returns the list of requests `self` is likely be asked to handle.
         * @returns a #GList of #TpChannelRequest
         */
        dup_pending_requests(): ChannelRequest[];
        /**
         * Return the bus name of `self`. Note that doesn't mean the client is
         * actually owning this name; for example if tp_base_client_register()
         * has not been called yet or failed.
         * @returns the bus name of the client
         */
        get_bus_name(): string;
        /**
         * Return the #TpBaseClient:dbus-daemon construct-only property, which
         * represents the D-Bus connection used to export this client object.
         *
         * The returned object's reference count is not incremented, so it is not
         * necessarily valid after `self` is destroyed.
         * @returns the value of #TpBaseClient:dbus-daemon
         */
        get_dbus_daemon(): DBusDaemon;
        /**
         * Returns the set of channels currently handled by this base client or by any
         * other #TpBaseClient with which it shares a unique name.
         * @returns the handled channels
         */
        get_handled_channels(): Channel[];
        /**
         * Return the #TpBaseClient:name construct-only property, which is used as
         * part of the bus name and object path.
         * @returns the value of #TpBaseClient:name
         */
        get_name(): string;
        /**
         * Return the object path of `self`. Note that doesn't mean the client is
         * actually registered on this path; for example if tp_base_client_register()
         * has not been called yet or failed.
         * @returns the object path of the client
         */
        get_object_path(): string;
        /**
         * Only works if tp_base_client_set_handler_request_notification() has been
         * called.
         * Returns the list of requests `self` is likely be asked to handle.
         * @returns a #GList of #TpChannelRequest
         */
        get_pending_requests(): ChannelRequest[];
        /**
         * Return the #TpBaseClient:uniquify-name construct-only property; if this
         * is true, the bus name and object path will be made unique by appending
         * a suffix that includes the D-Bus unique name and a per-process counter.
         * @returns the value of #TpBaseClient:uniquify-name
         */
        get_uniquify_name(): boolean;
        /**
         * Check if `self` is currently handling `channel`.
         * @param channel a #TpChannel
         * @returns %TRUE if @self is handling @channel, %FALSE otherwise
         */
        is_handling_channel(channel: Channel): boolean;
        /**
         * Publish `self` as an available client. After this method is called, as long
         * as it continues to exist, it will receive and process whatever events were
         * requested via the various filters.
         *
         * Methods that set the filters and other immutable state, such as
         * tp_base_client_add_observer_filter(), cannot be called after this one.
         * @returns %TRUE if the client was registered successfully
         */
        register(): boolean;
        /**
         * Change the value of the #TpBaseClient:channel-factory property.
         * It can't be changed once `self` has been registered.
         * @param factory an object implementing the #TpClientChannelFactoryInterface interface
         */
        set_channel_factory(factory: ClientChannelFactory): void;
        /**
         * Turn on support for
         * the org.freedesktop.Telepathy.ChannelRequest.DelegateToPreferredHandler
         * hint.
         *
         * When receiving a request containing this hint, `self` will automatically
         * delegate the channels to the preferred handler of the request and then call
         * `callback` to inform the client that it is no longer handling those
         * channels.
         * @param callback function called when channels currently handled by @self are delegated, may not be %NULL
         */
        set_delegated_channels_callback(callback: BaseClientDelegatedChannelsCb): void;
        /**
         * Set whether the channels destined for this handler are automatically
         * handled, without invoking approvers.
         * (This is implemented by setting the value of its BypassApproval
         * D-Bus property.)
         *
         * This method may only be called before tp_base_client_register() is
         * called, and may only be called on objects whose class implements
         * #TpBaseClientClass.handle_channels.
         * @param bypass_approval the value of the Handler.BypassApproval property
         */
        set_handler_bypass_approval(bypass_approval: boolean): void;
        /**
         * Indicate that `self` is a Handler willing to be notified about requests for
         * channels that it is likely to be asked to handle. This means that the
         * #TpBaseClient::request-added and #TpBaseClient::request-removed signals will
         * be fired and tp_base_client_get_pending_requests() will return the list of
         * pending requests.
         *
         * This method may only be called before tp_base_client_register() is
         * called, and may only be called on objects whose class implements
         * #TpBaseClientClass.handle_channels.
         */
        set_handler_request_notification(): void;
        /**
         * Set whether the channel dispatcher should wait for
         * tp_observe_channels_context_accept() or tp_observe_channels_context_fail()
         * to be called before calling
         * #TpBaseClientClass.add_dispatch_operation on appropriate Approvers.
         *
         * This is implemented by setting the value of the DelayApprovers
         * D-Bus property.
         *
         * This method may only be called before tp_base_client_register() is
         * called, and may only be called on objects whose class implements
         * #TpBaseClientClass.observe_channels.
         * @param delay the value of the Observer.DelayApprovers property
         */
        set_observer_delay_approvers(delay: boolean): void;
        /**
         * Set whether the channel dispatcher should attempt to recover
         * this Observer if it crashes. (This is implemented by setting
         * the value of its Recover D-Bus property.)
         *
         * Normally, Observers are only notified when new channels
         * appear. If an Observer is set to recover, when it registers with
         * tp_base_client_register(), it will also be told about any channels
         * that already existed before it started.
         *
         * For Observers that are activatable as a D-Bus service, if the
         * Observer exits or crashes while there are any channels that match
         * its filter, it will automatically be restarted by service-activation.
         *
         * This method may only be called before tp_base_client_register() is
         * called, and may only be called on objects whose class implements
         * #TpBaseClientClass.observe_channels.
         * @param recover the value of the Observer.Recover property
         */
        set_observer_recover(recover: boolean): void;
        /**
         * Remove this client object from D-Bus, if tp_base_client_register()
         * has already been called.
         *
         * If the object is not registered, this method may be called, but has
         * no effect.
         *
         * Releasing the last reference to the object also has the same effect
         * as calling this method, but this method should be preferred, as it
         * has more deterministic behaviour.
         *
         * If the object still exists, tp_base_client_register() may be used to
         * attempt to register it again.
         */
        unregister(): void;
    }

    module BaseConnection {
        // Signal callback interfaces

        interface ClientsInterested {
            (token: string): void;
        }

        interface ClientsUninterested {
            (token: string): void;
        }

        interface ShutdownFinished {
            (): void;
        }

        // Constructor properties interface
    }

    /**
     * Data structure representing a generic #TpSvcConnection implementation.
     *
     * Since 0.19.1, accessing the fields of this structure is deprecated.
     * Use tp_base_connection_get_bus_name(), tp_base_connection_get_object_path(),
     * tp_base_connection_get_status(), tp_base_connection_get_self_handle()
     * instead.
     */
    abstract class BaseConnection extends GObject.Object {
        // Own properties of TelepathyGLib-0.12.BaseConnection

        /**
         * The suffix of the account object path such as
         * "gabble/jabber/chris_40example_2ecom0" for the account whose object path is
         * %TP_ACCOUNT_OBJECT_PATH_BASE + "gabble/jabber/chris_40example_2ecom0".
         * The same as returned by tp_account_get_path_suffix().
         *
         * It is given by the AccountManager in the connection parameters. Or %NULL if
         * the ConnectionManager or the AccountManager are too old.
         */
        account_path_suffix: string;
        /**
         * The suffix of the account object path such as
         * "gabble/jabber/chris_40example_2ecom0" for the account whose object path is
         * %TP_ACCOUNT_OBJECT_PATH_BASE + "gabble/jabber/chris_40example_2ecom0".
         * The same as returned by tp_account_get_path_suffix().
         *
         * It is given by the AccountManager in the connection parameters. Or %NULL if
         * the ConnectionManager or the AccountManager are too old.
         */
        accountPathSuffix: string;
        /**
         * This property is not useful to use directly. Its value is %TRUE, to
         * indicate that this version of telepathy-glib never unreferences handles
         * until the connection becomes disconnected.
         */
        readonly has_immortal_handles: boolean;
        /**
         * This property is not useful to use directly. Its value is %TRUE, to
         * indicate that this version of telepathy-glib never unreferences handles
         * until the connection becomes disconnected.
         */
        readonly hasImmortalHandles: boolean;

        // Owm methods of TelepathyGLib-0.12.BaseConnection

        /**
         * Add a "client interest" for `token` on behalf of the given client.
         *
         * This emits #TpBaseConnection::clients-interested if this was the first
         * time a client expressed an interest in this token.
         * @param unique_name the unique bus name of a D-Bus client
         * @param token a D-Bus interface or a token representing part of an interface,  added with tp_base_connection_add_possible_client_interest()
         * @param only_if_uninterested only add to the interest count if the client is not  already interested (appropriate for APIs that implicitly subscribe on first  use if this has not been done already, like Location)
         */
        add_client_interest(unique_name: string, token: string, only_if_uninterested: boolean): void;
        /**
         * Add `token` to the set of tokens for which this connection will emit
         * #TpBaseConnection::clients-interested and
         * #TpBaseConnection::clients-uninterested.
         *
         * This method must be called from the #GObjectClass&lt;!--
         * --&gt;.constructed or #GObjectClass&lt;!-- --&gt;.constructor callback
         * (otherwise, it will run too late to be useful).
         * @param token a quark corresponding to a D-Bus interface, or a token  representing part of a D-Bus interface, for which this connection wishes  to be notified when clients register an interest
         */
        add_possible_client_interest(token: GLib.Quark): void;
        /**
         * Change the status of the connection. The allowed state transitions are:
         *
         * &lt;itemizedlist&gt;
         * &lt;listitem&gt;#TP_INTERNAL_CONNECTION_STATUS_NEW →
         *    #TP_CONNECTION_STATUS_CONNECTING&lt;/listitem&gt;
         * &lt;listitem&gt;#TP_CONNECTION_STATUS_CONNECTING →
         *    #TP_CONNECTION_STATUS_CONNECTED&lt;/listitem&gt;
         * &lt;listitem&gt;#TP_INTERNAL_CONNECTION_STATUS_NEW →
         *    #TP_CONNECTION_STATUS_CONNECTED (exactly equivalent to both of the above
         *    one after the other; see below)&lt;/listitem&gt;
         * &lt;listitem&gt;anything except #TP_CONNECTION_STATUS_DISCONNECTED →
         *    #TP_CONNECTION_STATUS_DISCONNECTED&lt;/listitem&gt;
         * &lt;/itemizedlist&gt;
         *
         * Before the transition to #TP_CONNECTION_STATUS_CONNECTED, the implementation
         * must have discovered the handle for the local user and passed it to
         * tp_base_connection_set_self_handle().
         *
         * Changing from NEW to CONNECTED is implemented by doing the transition from
         * NEW to CONNECTING, followed by the transition from CONNECTING to CONNECTED;
         * it's exactly equivalent to calling tp_base_connection_change_status for
         * those two transitions one after the other.
         *
         * Any other valid transition does the following, in this order:
         *
         * &lt;itemizedlist&gt;
         * &lt;listitem&gt;Update #TpBaseConnection&lt;!-- --&gt;.status;&lt;/listitem&gt;
         * &lt;listitem&gt;If the new state is #TP_CONNECTION_STATUS_DISCONNECTED, call
         *    tp_channel_factory_iface_close_all() on all channel factories&lt;/listitem&gt;
         * &lt;listitem&gt;Emit the D-Bus StatusChanged signal;&lt;/listitem&gt;
         * &lt;listitem&gt;Call #TpBaseConnectionClass.connecting,
         *    #TpBaseConnectionClass.connected or #TpBaseConnectionClass.disconnected
         *    as appropriate;&lt;/listitem&gt;
         * &lt;listitem&gt;Call the channel factories' status change callbacks;&lt;/listitem&gt;
         * &lt;listitem&gt;If the new state is #TP_CONNECTION_STATUS_DISCONNECTED, call the
         *    subclass' #TpBaseConnectionClass.shut_down callback.&lt;/listitem&gt;
         * &lt;/itemizedlist&gt;
         *
         * To provide more details about what happened when moving to `status`
         * #TP_CONNECTION_STATUS_DISCONNECTED due to an error, consider calling
         * tp_base_connection_disconnect_with_dbus_error() instead of this function.
         *
         * Changed in 0.7.35: the `self_handle` member of #TpBaseConnection was
         * previously set to 0 at this stage. It now remains non-zero until the object
         * is disposed.
         * @param status The new status
         * @param reason The reason for the status change
         */
        change_status(status: ConnectionStatus, reason: ConnectionStatusReason): void;
        /**
         * Return whether this connection is fully active and connected.
         * If it is not, raise %TP_ERROR_DISCONNECTED.
         *
         * This is equivalent to checking whether tp_base_connection_get_status()
         * returns %TP_CONNECTION_STATUS_CONNECTED; it is provided because methods
         * on the connection often need to make this check, and return a
         * #GError if it fails.
         * @returns %TRUE if this connection is connected
         */
        check_connected(): boolean;
        /**
         * &lt;!-- --&gt;
         * @returns the same value has the #TpBaseConnection:account-path-suffix  property.
         */
        get_account_path_suffix(): string;
        /**
         * Return the bus name starting with %TP_CONN_BUS_NAME_BASE that represents
         * this connection on D-Bus.
         *
         * The returned string belongs to the #TpBaseConnection and must be copied
         * by the caller if it will be kept.
         *
         * If this connection has never been present on D-Bus
         * (tp_base_connection_register() has never been called), return %NULL
         * instead.
         * @returns the bus name of this connection,  or %NULL
         */
        get_bus_name(): string | null;
        /**
         * &lt;!----&gt;
         * @param handle_type The handle type
         * @returns the handle repository corresponding to the given handle type, or #NULL if it's unsupported or invalid.
         */
        get_handles(handle_type: HandleType): HandleRepoIface;
        /**
         * Return the object path starting with %TP_CONN_OBJECT_PATH_BASE that
         * represents this connection on D-Bus.
         *
         * The returned string belongs to the #TpBaseConnection and must be copied
         * by the caller if it will be kept.
         *
         * If this connection has never been present on D-Bus
         * (tp_base_connection_register() has never been called), return %NULL
         * instead.
         * @returns the object path of this connection,  or %NULL
         */
        get_object_path(): string | null;
        /**
         * Return the status of this connection, as set by
         * tp_base_connection_change_status() or similar functions like
         * tp_base_connection_disconnect_with_dbus_error().
         *
         * Like the corresponding D-Bus property, this method returns
         * %TP_CONNECTION_STATUS_DISCONNECTED in two situations:
         * either the connection is newly-created (and has never emitted
         * #TpSvcConnection::status-changed), or D-Bus clients have already been
         * told that it has been destroyed (by the Disconnect D-Bus method,
         * a failed attempt to connect, or loss of an established connection).
         * Use tp_base_connection_is_destroyed() to distinguish between the two.
         * @returns the value of #TpBaseConnection:dbus-status
         */
        get_status(): ConnectionStatus;
        /**
         * Return whether this connection has already emitted the D-Bus signal
         * indicating that it has been destroyed.
         *
         * In particular, this can be used to distinguish between the two reasons
         * why tp_base_connection_get_status() would return
         * %TP_CONNECTION_STATUS_DISCONNECTED: it will return %FALSE if the
         * connection is newly-created, and %TRUE if the Disconnect D-Bus method
         * has been called, an attempt to connect has failed, or an established
         * connection has encountered an error.
         * @returns %TRUE if this connection is disappearing from D-Bus
         */
        is_destroyed(): boolean;
        /**
         * Make the connection object appear on the bus, returning the bus
         * name and object path used. If %TRUE is returned, the connection owns the
         * bus name, and will release it when destroyed.
         *
         * Since 0.11.11, `bus_name` and `object_path` may be %NULL if the
         * strings are not needed.
         * @param cm_name The name of the connection manager in the Telepathy protocol
         * @returns %TRUE on success, %FALSE on error.
         */
        register(cm_name: string): boolean;
        /**
         * Sets the #TpBaseConnection:self-handle property.  self_handle may not be 0
         * once the connection has moved to the CONNECTED state.
         * @param self_handle The new self handle for the connection.
         */
        set_self_handle(self_handle: Handle): void;
    }

    module BasicProxyFactory {
        // Constructor properties interface
    }

    /**
     * Data structure representing a #TpBasicProxyFactory
     */
    class BasicProxyFactory extends GObject.Object {
        // Constructors of TelepathyGLib-0.12.BasicProxyFactory

        static ['new'](): BasicProxyFactory;

        // Owm methods of TelepathyGLib-0.12.BasicProxyFactory

        /**
         * Returns a cached #TpBasicProxyFactory; the same #TpBasicProxyFactory object
         * will be returned by this function repeatedly, as long as at least one
         * reference exists.
         */
        static dup(): BasicProxyFactory;
    }

    module CallChannel {
        // Signal callback interfaces

        interface ContentAdded {
            (content: GObject.Object): void;
        }

        interface ContentRemoved {
            (content: GObject.Object, reason: CallStateReason): void;
        }

        interface MembersChanged {
            (updates: GLib.HashTable<Contact, number>, removed: Contact[], reason: CallStateReason): void;
        }

        interface StateChanged {
            (
                state: number,
                flags: number,
                reason: CallStateReason,
                details: GLib.HashTable<string, GObject.Value>,
            ): void;
        }

        // Constructor properties interface
    }

    /**
     * Data structure representing a #TpCallChannel.
     */
    class CallChannel extends Channel {
        // Own properties of TelepathyGLib-0.12.CallChannel

        /**
         * #GPtrArray of #TpCallContent objects. The list of content objects that are
         * part of this call.
         *
         * It is NOT guaranteed that %TP_CALL_CONTENT_FEATURE_CORE is prepared on
         * those objects.
         */
        readonly contents: any[];
        /**
         * A #TpCallFlags specifying the flags of the call state.
         */
        readonly flags: number;
        /**
         * Whether or not the streaming is done by dedicated hardware.
         */
        readonly hardware_streaming: boolean;
        /**
         * Whether or not the streaming is done by dedicated hardware.
         */
        readonly hardwareStreaming: boolean;
        /**
         * A #TpLocalHoldState specifying if the Call is currently held
         */
        readonly hold_state: number;
        /**
         * A #TpLocalHoldState specifying if the Call is currently held
         */
        readonly holdState: number;
        /**
         * A #TpLocalHoldStateReason specifying why the Call is currently held.
         */
        readonly hold_state_reason: number;
        /**
         * A #TpLocalHoldStateReason specifying why the Call is currently held.
         */
        readonly holdStateReason: number;
        /**
         * Whether or not the Call was started with audio.
         */
        readonly initial_audio: boolean;
        /**
         * Whether or not the Call was started with audio.
         */
        readonly initialAudio: boolean;
        /**
         * If #TpCallChannel:initial-audio is set to %TRUE, then this property will
         * is the name of the intial audio content, %NULL otherwise.
         */
        readonly initial_audio_name: string;
        /**
         * If #TpCallChannel:initial-audio is set to %TRUE, then this property will
         * is the name of the intial audio content, %NULL otherwise.
         */
        readonly initialAudioName: string;
        /**
         * Whether or not the Call was started with video.
         */
        readonly initial_video: boolean;
        /**
         * Whether or not the Call was started with video.
         */
        readonly initialVideo: boolean;
        /**
         * If #TpCallChannel:initial-video is set to %TRUE, then this property will
         * is the name of the intial video content, %NULL otherwise.
         */
        readonly initial_video_name: string;
        /**
         * If #TpCallChannel:initial-video is set to %TRUE, then this property will
         * is the name of the intial video content, %NULL otherwise.
         */
        readonly initialVideoName: string;
        /**
         * Whether or not call contents can be added or removed.
         */
        readonly mutable_contents: boolean;
        /**
         * Whether or not call contents can be added or removed.
         */
        readonly mutableContents: boolean;
        /**
         * A #TpCallState specifying the state of the call.
         */
        readonly state: number;
        /**
         * Detailed infoermation about #TpCallChannel:state. It is a #GHashTable
         * mapping gchar*-&gt;GValue, it can be accessed using the tp_asv_* functions.
         */
        readonly state_details: GLib.HashTable<any, any>;
        /**
         * Detailed infoermation about #TpCallChannel:state. It is a #GHashTable
         * mapping gchar*-&gt;GValue, it can be accessed using the tp_asv_* functions.
         */
        readonly stateDetails: GLib.HashTable<any, any>;
        /**
         * Reason why #TpCallChannel:state last changed.
         */
        readonly state_reason: CallStateReason;
        /**
         * Reason why #TpCallChannel:state last changed.
         */
        readonly stateReason: CallStateReason;

        // Owm methods of TelepathyGLib-0.12.CallChannel

        static get_feature_quark_core(): GLib.Quark;

        // Owm methods of TelepathyGLib-0.12.CallChannel

        /**
         * For incoming calls with #TpCallChannel:state set to
         * %TP_CALL_STATE_INITIALISED, accept the incoming call. This changes
         * #TpCallChannel:state to %TP_CALL_STATE_ACCEPTED.
         *
         * For outgoing calls with #TpCallChannel:state set to
         * %TP_CALL_STATE_PENDING_INITIATOR, actually call the remote contact; this
         * changes #TpCallChannel:state to
         * %TP_CALL_STATE_INITIALISING.
         * @param callback a callback to call when the operation finishes
         */
        accept_async(callback?: Gio.AsyncReadyCallback<this> | null): void;
        /**
         * Finishes tp_call_channel_accept_async().
         * @param result a #GAsyncResult
         */
        accept_finish(result: Gio.AsyncResult): boolean;
        /**
         * Request that a new Content of type `type` is added to `self`. Callers should
         * check the value of the #TpCallChannel:mutable-contents property before trying
         * to add another content as it might not be allowed.
         * @param name the suggested name of the content to add
         * @param type the media stream type of the content to be added to the call, from  #TpMediaStreamType
         * @param initial_direction The initial direction of the content
         * @param callback a callback to call when the operation finishes
         */
        add_content_async(
            name: string,
            type: MediaStreamType,
            initial_direction: MediaStreamDirection,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Finishes tp_call_channel_add_content_async().
         *
         * The returned #TpCallContent is NOT guaranteed to have
         * %TP_CALL_CONTENT_FEATURE_CORE prepared.
         * @param result a #GAsyncResult
         * @returns reference to the new #TpCallContent.
         */
        add_content_finish(result: Gio.AsyncResult): CallContent;
        /**
         * &lt;!-- --&gt;
         * @returns the value of #TpCallChannel:contents
         */
        get_contents(): CallContent[];
        /**
         * Get the members of this call.
         *
         * The #TpContact objects are guaranteed to have all of the features
         * previously passed to tp_simple_client_factory_add_contact_features()
         * prepared.
         * @returns #GHashTable mapping #TpContact to its new #TpCallMemberFlags
         */
        get_members(): GLib.HashTable<Contact, number>;
        /**
         * &lt;!-- --&gt;
         * @returns the value of #TpCallChannel:state
         */
        get_state(): CallState;
        /**
         * Request that the call is ended. All contents will be removed from `self` so
         * that the #TpCallChannel:contents property will be the empty list.
         * @param reason a TpCallStateChangeReason
         * @param detailed_reason a more specific reason for the call hangup, if one is  available, or an empty or %NULL string otherwise
         * @param message a human-readable message to be sent to the remote contact(s)
         * @param callback a callback to call when the operation finishes
         */
        hangup_async(
            reason: CallStateChangeReason,
            detailed_reason: string,
            message: string,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Finishes tp_call_channel_hangup_async().
         * @param result a #GAsyncResult
         */
        hangup_finish(result: Gio.AsyncResult): boolean;
        /**
         * Whether or not `self` can send DTMF tones using
         * tp_call_channel_send_tones_async(). To be able to send DTMF tones, at least
         * one of `self'`s #TpCallChannel:contents must implement
         * %TP_IFACE_CALL_CONTENT_INTERFACE_DTMF interface.
         * @returns whether or not @self can send DTMF tones.
         */
        has_dtmf(): boolean;
        /**
         * &lt;!-- --&gt;
         * @returns the value of #TpCallChannel:hardware-streaming
         */
        has_hardware_streaming(): boolean;
        /**
         * Whether or not `self` has the %TP_IFACE_CHANNEL_INTERFACE_HOLD
         * interfaces
         * @returns whether or not @self supports Hold
         */
        has_hold(): boolean;
        /**
         * &lt;!-- --&gt;
         * @returns the value of #TpCallChannel:initial-audio
         */
        has_initial_audio(): boolean;
        /**
         * &lt;!-- --&gt;
         * @returns the value of #TpCallChannel:initial-video
         */
        has_initial_video(): boolean;
        /**
         * &lt;!-- --&gt;
         * @returns the value of #TpCallChannel:mutable-contents
         */
        has_mutable_contents(): boolean;
        /**
         * Requests that the connection manager holds or unholds the call. Watch
         * #TpCallChannel:hold-state property to know when the channel goes on
         * hold or is unheld. Unholding may fail if the streaming implementation
         * can not obtain all the resources needed to restart the call.
         * @param hold Whether to request a hold or a unhold
         * @param callback a callback to call when the operation finishes
         */
        request_hold_async(hold: boolean, callback?: Gio.AsyncReadyCallback<this> | null): void;
        /**
         * Finishes tp_call_channel_request_hold_async
         * @param result a #GAsyncResult
         */
        request_hold_finish(result: Gio.AsyncResult): boolean;
        /**
         * Send `tones` on every of `self'`s contents which have the
         * %TP_IFACE_CALL_CONTENT_INTERFACE_DTMF interface.
         *
         * For more details, see tp_call_content_send_tones_async().
         * @param tones a string representation of one or more DTMF events.
         * @param cancellable optional #GCancellable object, %NULL to ignore
         * @param callback a callback to call when the operation finishes
         */
        send_tones_async(
            tones: string,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Finishes tp_call_channel_send_tones_async().
         * @param result a #GAsyncResult
         * @returns %TRUE on success, %FALSE otherwise.
         */
        send_tones_finish(result: Gio.AsyncResult): boolean;
        /**
         * Notifies the CM that the local user is already in a call, so this call has
         * been put in a call-waiting style queue.
         * @param callback a callback to call when the operation finishes
         */
        set_queued_async(callback?: Gio.AsyncReadyCallback<this> | null): void;
        /**
         * Finishes tp_call_channel_set_queued_async().
         * @param result a #GAsyncResult
         */
        set_queued_finish(result: Gio.AsyncResult): boolean;
        /**
         * Indicate that the local user has been alerted about the incoming call.
         * @param callback a callback to call when the operation finishes
         */
        set_ringing_async(callback?: Gio.AsyncReadyCallback<this> | null): void;
        /**
         * Finishes tp_call_channel_set_ringing_async().
         * @param result a #GAsyncResult
         */
        set_ringing_finish(result: Gio.AsyncResult): boolean;
    }

    module CallContent {
        // Signal callback interfaces

        interface Removed {
            (): void;
        }

        interface StreamsAdded {
            (streams: CallStream[]): void;
        }

        interface StreamsRemoved {
            (streams: CallStream[], reason: CallStateReason): void;
        }

        // Constructor properties interface
    }

    /**
     * Data structure representing a #TpCallContent.
     */
    class CallContent extends Proxy {
        // Own properties of TelepathyGLib-0.12.CallContent

        /**
         * The parent #TpCallChannel of the content.
         */
        channel: CallChannel;
        /**
         * The #TpConnection of the call.
         */
        connection: Connection;
        /**
         * The disposition of this content, from #TpCallContentDisposition.
         */
        readonly disposition: number;
        /**
         * The media type of this content, from #TpMediaStreamType.
         */
        readonly media_type: number;
        /**
         * The media type of this content, from #TpMediaStreamType.
         */
        readonly mediaType: number;
        /**
         * The name of this content.
         */
        readonly name: string;
        /**
         * #GPtrArray of #TpCallStream objects. The list of stream objects that are
         * part of this content.
         *
         * It is NOT guaranteed that %TP_CALL_STREAM_FEATURE_CORE is prepared on
         * those objects.
         */
        readonly streams: any[];

        // Owm methods of TelepathyGLib-0.12.CallContent

        static get_feature_quark_core(): GLib.Quark;
        /**
         * Ensure that the known interfaces for #TpCallContent have been set up.
         * This is done automatically when necessary, but for correct
         * overriding of library interfaces by local extensions, you should
         * call this function before calling
         * tp_proxy_or_subclass_hook_on_interface_add() with first argument
         * %TP_TYPE_CALL_CONTENT.
         */
        static init_known_interfaces(): void;

        // Owm methods of TelepathyGLib-0.12.CallContent

        /**
         * &lt;!-- --&gt;
         * @returns the value of #TpCallContent:disposition
         */
        get_disposition(): CallContentDisposition;
        /**
         * &lt;!-- --&gt;
         * @returns the value of #TpCallContent:name
         */
        get_media_type(): MediaStreamType;
        /**
         * &lt;!-- --&gt;
         * @returns the value of #TpCallContent:name
         */
        get_name(): string;
        /**
         * &lt;!-- --&gt;
         * @returns the value of #TpCallContent:streams
         */
        get_streams(): CallStream[];
        /**
         * Remove the content from the call. This will cause #TpCallContent::removed
         * to be emitted.
         * @param callback a callback to call when the operation finishes
         */
        remove_async(callback?: Gio.AsyncReadyCallback<this> | null): void;
        /**
         * Finishes tp_call_content_remove_async().
         * @param result a #GAsyncResult
         */
        remove_finish(result: Gio.AsyncResult): boolean;
        /**
         * Send `tones` DTMF code on `self` content. `self` must have the
         * %TP_IFACE_CALL_CONTENT_INTERFACE_DTMF interface.
         *
         * If DTMF tones are already being played, this request is queued.
         * @param tones a string representation of one or more DTMF events.
         * @param cancellable optional #GCancellable object, %NULL to ignore
         * @param callback a callback to call when the operation finishes
         */
        send_tones_async(
            tones: string,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Finishes tp_call_content_send_tones_async().
         * @param result a #GAsyncResult
         * @returns %TRUE on success, %FALSE otherwise.
         */
        send_tones_finish(result: Gio.AsyncResult): boolean;
    }

    module CallStream {
        // Signal callback interfaces

        interface LocalSendingStateChanged {
            (state: number, reason: CallStateReason): void;
        }

        interface RemoteMembersChanged {
            (updates: GLib.HashTable<Contact, number>, removed: Contact[], reason: CallStateReason): void;
        }

        // Constructor properties interface
    }

    /**
     * Data structure representing a #TpCallStream.
     */
    class CallStream extends Proxy {
        // Own properties of TelepathyGLib-0.12.CallStream

        /**
         * If %TRUE, the user can request that a remote contact starts sending on this
         * stream.
         */
        readonly can_request_receiving: boolean;
        /**
         * If %TRUE, the user can request that a remote contact starts sending on this
         * stream.
         */
        readonly canRequestReceiving: boolean;
        /**
         * The #TpConnection of the call.
         */
        connection: Connection;
        /**
         * The Content that this streams belongs to
         */
        content: CallContent;
        /**
         * The local user's sending state, from #TpSendingState.
         */
        readonly local_sending_state: number;
        /**
         * The local user's sending state, from #TpSendingState.
         */
        readonly localSendingState: number;

        // Owm methods of TelepathyGLib-0.12.CallStream

        static get_feature_quark_core(): GLib.Quark;
        /**
         * Ensure that the known interfaces for #TpCallStream have been set up.
         * This is done automatically when necessary, but for correct
         * overriding of library interfaces by local extensions, you should
         * call this function before calling
         * tp_proxy_or_subclass_hook_on_interface_add() with first argument
         * %TP_TYPE_CALL_STREAM.
         */
        static init_known_interfaces(): void;

        // Owm methods of TelepathyGLib-0.12.CallStream

        /**
         * &lt;!-- --&gt;
         * @returns the value of #TpCallStream:local-sending-state
         */
        get_local_sending_state(): SendingState;
        /**
         * Get the remote contacts to who this stream is connected, mapped to their
         * sending state.
         *
         * It is NOT guaranteed that #TpContact objects have any feature prepared.
         * @returns #GHashTable mapping #TpContact to its new #TpSendingState
         */
        get_remote_members(): GLib.HashTable<Contact, number>;
        /**
         * Request that a remote contact stops or starts sending on this stream.
         *
         * The #TpCallStream:can-request-receiving property defines whether the protocol
         * allows the local user to request the other side start sending on this stream.
         *
         * If `receive` is %TRUE, request that the given contact starts to send media.
         * If `receive` is %FALSE, request that the given contact stops sending media.
         * @param contact contact from which sending is requested
         * @param receive the requested receiving state
         * @param callback a callback to call when the operation finishes
         */
        request_receiving_async(
            contact: Contact,
            receive: boolean,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Finishes tp_call_stream_request_receiving_async().
         * @param result a #GAsyncResult
         */
        request_receiving_finish(result: Gio.AsyncResult): boolean;
        /**
         * Set the stream to start or stop sending media from the local user to other
         * contacts.
         *
         * If `send` is %TRUE, #TpCallStream:local-sending-state should change to
         * %TP_SENDING_STATE_SENDING, if it isn't already.
         * If `send` is %FALSE, #TpCallStream:local-sending-state should change to
         * %TP_SENDING_STATE_NONE, if it isn't already.
         * @param send the requested sending state
         * @param callback a callback to call when the operation finishes
         */
        set_sending_async(send: boolean, callback?: Gio.AsyncReadyCallback<this> | null): void;
        /**
         * Finishes tp_call_stream_set_sending_async().
         * @param result a #GAsyncResult
         */
        set_sending_finish(result: Gio.AsyncResult): boolean;
    }

    module Capabilities {
        // Constructor properties interface
    }

    /**
     * An object representing capabilities a #TpConnection or #TpContact supports.
     */
    class Capabilities extends GObject.Object {
        // Own properties of TelepathyGLib-0.12.Capabilities

        /**
         * The underlying data structure used by Telepathy to represent the
         * requests that can succeed.
         *
         * This can be used by advanced clients to determine whether an unusually
         * complex request would succeed. See the Telepathy D-Bus API Specification
         * for details of how to interpret the returned #GVariant of type
         * a(a{sv}as).
         *
         * The higher-level methods like
         * tp_capabilities_supports_text_chats() are likely to be more useful to
         * the majority of clients.
         */
        readonly channel_classes_variant: GLib.Variant;
        /**
         * The underlying data structure used by Telepathy to represent the
         * requests that can succeed.
         *
         * This can be used by advanced clients to determine whether an unusually
         * complex request would succeed. See the Telepathy D-Bus API Specification
         * for details of how to interpret the returned #GVariant of type
         * a(a{sv}as).
         *
         * The higher-level methods like
         * tp_capabilities_supports_text_chats() are likely to be more useful to
         * the majority of clients.
         */
        readonly channelClassesVariant: GLib.Variant;
        /**
         * Whether this object accurately describes the capabilities of a particular
         * contact, or if it's only a guess based on the capabilities of the
         * underlying connection.
         */
        contact_specific: boolean;
        /**
         * Whether this object accurately describes the capabilities of a particular
         * contact, or if it's only a guess based on the capabilities of the
         * underlying connection.
         */
        contactSpecific: boolean;

        // Owm methods of TelepathyGLib-0.12.Capabilities

        /**
         * Return the #TpCapabilities:channel-classes-variant property
         * @returns the value of the #TpCapabilities:channel-classes-variant property
         */
        dup_channel_classes_variant(): GLib.Variant;
        /**
         * &lt;!-- --&gt;
         * @returns the same #GPtrArray as the #TpCapabilities:channel-classes property
         */
        get_channel_classes(): GLib.HashTable[];
        /**
         * &lt;!-- --&gt;
         * @returns the same #gboolean as the #TpCapabilities:contact-specific property
         */
        is_specific_to_contact(): boolean;
        /**
         * Return whether audio calls can be established, for instance by calling
         * tp_account_channel_request_new_audio_call(), followed by
         * tp_account_channel_request_set_target_id() with `handle_type`.
         *
         * To check whether requests using
         * tp_account_channel_request_set_target_contact() would work, set
         * `handle_type` to %TP_HANDLE_TYPE_CONTACT.
         * @param handle_type the handle type of the call; #TP_HANDLE_TYPE_CONTACT for  private, #TP_HANDLE_TYPE_ROOM or #TP_HANDLE_TYPE_NONE for conference  (depending on the protocol)
         * @returns %TRUE if a channel request containing Call as ChannelType, @handle_type as TargetHandleType, a True value for InitialAudio and an identifier of the appropriate type can be expected to work, %FALSE otherwise.
         */
        supports_audio_call(handle_type: HandleType): boolean;
        /**
         * Return whether audio/video calls can be established, for instance by calling
         * tp_account_channel_request_new_audio_video_call(), followed by
         * tp_account_channel_request_set_target_id() with `handle_type`.
         *
         * To check whether requests using
         * tp_account_channel_request_set_target_contact() would work, set
         * `handle_type` to %TP_HANDLE_TYPE_CONTACT.
         * @param handle_type the handle type of the call; #TP_HANDLE_TYPE_CONTACT for  private, #TP_HANDLE_TYPE_ROOM or #TP_HANDLE_TYPE_NONE for conference  (depending on the protocol)
         * @returns %TRUE if a channel request containing Call as ChannelType, @handle_type as TargetHandleType, a True value for InitialAudio/InitialVideo and an identifier of the appropriate type can be expected to work, %FALSE otherwise.
         */
        supports_audio_video_call(handle_type: HandleType): boolean;
        /**
         * Return whether this protocol or connection can perform contact
         * searches. Optionally, also return whether a limited number of
         * results can be specified, and whether alternative servers can be
         * searched.
         * @returns %TRUE if #TpContactSearch can be used.
         */
        supports_contact_search(): boolean;
        /**
         * If the #TpCapabilities:contact-specific property is %TRUE, this function
         * checks if the contact associated with this #TpCapabilities supports
         * D-Bus tubes with `handle_type` as TargetHandleType.
         * If `service_name` is not %NULL, it also checks if it supports stream tubes
         * with `service` as #TP_PROP_CHANNEL_TYPE_DBUS_TUBE_SERVICE_NAME.
         *
         * If the #TpCapabilities:contact-specific property is %FALSE, this function
         * checks if the connection supports requesting D-Bus tube channels with
         * `handle_type` as ChannelType. The `service_name` argument is unused in
         * this case.
         * @param handle_type the handle type of the tube (either #TP_HANDLE_TYPE_CONTACT or #TP_HANDLE_TYPE_ROOM)
         * @param service_name the service name of the tube, or %NULL
         * @returns %TRUE if the contact or connection supports this type of D-Bus tubes.
         */
        supports_dbus_tubes(handle_type: HandleType, service_name: string): boolean;
        /**
         * Return whether private file transfer can be established by providing
         * a contact identifier.
         * @returns %TRUE if a channel request containing FileTransfer as ChannelType, HandleTypeContact as TargetHandleType and a contact identifier can be expected to work, %FALSE otherwise.
         */
        supports_file_transfer(): boolean;
        /**
         * &lt;!-- --&gt;
         * @returns %TRUE if requests as described for  tp_capabilities_supports_file_transfer() can also specify the outgoing  file's description
         */
        supports_file_transfer_description(): boolean;
        /**
         * Return whether an initial offset other than 0 can be specified on
         * outgoing file transfers. This can be used to resume partial transfers,
         * by omitting the part that has already been sent.
         * @returns %TRUE if requests as described for  tp_capabilities_supports_file_transfer() can also specify an  initial offset greater than 0
         */
        supports_file_transfer_initial_offset(): boolean;
        /**
         * &lt;!-- --&gt;
         * @returns %TRUE if requests as described for  tp_capabilities_supports_file_transfer() can also specify the outgoing  file's timestamp
         */
        supports_file_transfer_timestamp(): boolean;
        /**
         * &lt;!-- --&gt;
         * @returns %TRUE if requests as described for  tp_capabilities_supports_file_transfer() can also specify the outgoing  file's URI
         */
        supports_file_transfer_uri(): boolean;
        /**
         * Discovers whether this protocol or connection supports listing rooms.
         * Specifically, if this function returns %TRUE, a room list channel can be
         * requested as follows:
         *
         * ```
         * GHashTable *request;
         * TpAccountChannelRequest *req;
         *
         * request = tp_asv_new (
         *     TP_PROP_CHANNEL_CHANNEL_TYPE, G_TYPE_STRING,
         *       TP_IFACE_CHANNEL_TYPE_ROOM_LIST,
         *     TP_PROP_CHANNEL_TARGET_HANDLE_TYPE, G_TYPE_UINT, TP_HANDLE_TYPE_NONE,
         *     NULL);
         *
         * req = tp_account_channel_request_new (account, request,
         *    TP_USER_ACTION_TIME_CURRENT_TIME);
         *
         * tp_account_channel_request_create_and_handle_channel_async (req, NULL,
         *     create_channel_cb, NULL);
         *
         * g_object_unref (req);
         * g_hash_table_unref (request);
         * ```
         *
         *
         * If `with_server` is set to %TRUE, a list of rooms on a particular server can
         * be requested as follows:
         *
         * ```
         * /\* Same code as above but with request defined using: *\/
         * request = tp_asv_new (
         *     TP_PROP_CHANNEL_CHANNEL_TYPE, G_TYPE_STRING,
         *       TP_IFACE_CHANNEL_TYPE_ROOM_LIST,
         *     TP_PROP_CHANNEL_TARGET_HANDLE_TYPE, G_TYPE_UINT, TP_HANDLE_TYPE_NONE,
         *     TP_PROP_CHANNEL_TYPE_ROOM_LIST_SERVER, G_TYPE_STRING,
         *       "characters.shakespeare.lit",
         *     NULL);
         * ```
         *
         * @returns %TRUE if a channel request containing RoomList as ChannelType, HandleTypeNone as TargetHandleType can be expected to work, %FALSE otherwise.
         */
        supports_room_list(): boolean;
        /**
         * If the #TpCapabilities:contact-specific property is %FALSE, this function
         * checks if SMS text channels can be requested with the connection associated
         * with this #TpCapabilities.
         *
         * If the #TpCapabilities:contact-specific property is %TRUE, this function
         * checks if the contact associated with this #TpCapabilities supports
         * SMS text channels.
         * @returns %TRUE if a channel request containing Text as ChannelType, HandleTypeContact as TargetHandleType, a channel identifier and #TP_PROP_CHANNEL_INTERFACE_SMS_SMS_CHANNEL set to %TRUE can be expected to work, %FALSE otherwise.
         */
        supports_sms(): boolean;
        /**
         * If the #TpCapabilities:contact-specific property is %TRUE, this function
         * checks if the contact associated with this #TpCapabilities supports
         * stream tubes with `handle_type` as TargetHandleType.
         * If `service` is not %NULL, it also checks if it supports stream tubes
         * with `service` as #TP_PROP_CHANNEL_TYPE_STREAM_TUBE_SERVICE.
         *
         * If the #TpCapabilities:contact-specific property is %FALSE, this function
         * checks if the connection supports requesting stream tube channels with
         * `handle_type` as ChannelType. The `service` argument is unused in this case.
         * @param handle_type the handle type of the tube (either #TP_HANDLE_TYPE_CONTACT or #TP_HANDLE_TYPE_ROOM)
         * @param service the service of the tube, or %NULL
         * @returns %TRUE if the contact or connection supports this type of stream tubes.
         */
        supports_stream_tubes(handle_type: HandleType, service: string): boolean;
        /**
         * If the #TpCapabilities:contact-specific property is %FALSE, this function
         * checks if named text chatrooms can be joined by providing a chatroom
         * identifier, for instance by calling
         * tp_account_channel_request_new_text() followed by
         * tp_account_channel_request_set_target_id() with %TP_HANDLE_TYPE_ROOM.
         *
         * If the #TpCapabilities:contact-specific property is %TRUE, this function
         * checks if the contact associated with this #TpCapabilities can be invited
         * to named text chatrooms.
         *
         * If the protocol is such that chatrooms can be joined or contacts can be
         * invited, but only via a more elaborate D-Bus API than normal
         * (because more information is needed), then this method will return %FALSE.
         * @returns %TRUE if a channel request containing Text as ChannelType, HandleTypeRoom as TargetHandleType and a channel identifier can be expected to work, %FALSE otherwise.
         */
        supports_text_chatrooms(): boolean;
        /**
         * Return whether private text channels can be established by providing
         * a contact identifier, for instance by calling
         * tp_account_channel_request_new_text() followed by
         * tp_account_channel_request_set_target_contact().
         *
         * If the protocol is such that text chats can be established, but only via a
         * more elaborate D-Bus API than normal (because more information is needed),
         * then this method will return %FALSE.
         * @returns %TRUE if a channel request containing Text as ChannelType, HandleTypeContact as TargetHandleType and a contact identifier can be expected to work, %FALSE otherwise.
         */
        supports_text_chats(): boolean;
    }

    module Channel {
        // Signal callback interfaces

        interface ChatStateChanged {
            (contact: number, state: number): void;
        }

        interface GroupContactsChanged {
            (
                added: Contact[],
                removed: Contact[],
                local_pending: Contact[],
                remote_pending: Contact[],
                actor: Contact,
                details: GLib.HashTable<string, GObject.Value>,
            ): void;
        }

        interface GroupFlagsChanged {
            (added: number, removed: number): void;
        }

        interface GroupMembersChanged {
            (
                message: string,
                added: unknown,
                removed: unknown,
                local_pending: unknown,
                remote_pending: unknown,
                actor: number,
                reason: number,
            ): void;
        }

        interface GroupMembersChangedDetailed {
            (
                added: number[],
                removed: number[],
                local_pending: number[],
                remote_pending: number[],
                details: GLib.HashTable<string, GObject.Value>,
            ): void;
        }

        // Constructor properties interface
    }

    /**
     * A proxy object for a Telepathy channel.
     * A proxy object for a Telepathy channel. There are no interesting
     * public struct fields.
     *
     * (Changed in 0.7.12: the layout of the structure is visible, allowing
     * subclassing.)
     */
    class Channel extends Proxy {
        // Own properties of TelepathyGLib-0.12.Channel

        /**
         * Initially %FALSE; changes to %TRUE when tp_proxy_prepare_async() has
         * finished preparing %TP_CHANNEL_FEATURE_CORE, and if the channel is a
         * group, %TP_CHANNEL_FEATURE_GROUP.
         *
         * This is a less general form of tp_proxy_is_prepared(), which should be
         * used in new code.
         *
         * One important difference is that after #TpProxy::invalidated is
         * signalled, #TpChannel:channel-ready keeps its current value - which might
         * be %TRUE, if the channel was successfully prepared before it became
         * invalidated - but tp_proxy_is_prepared() returns %FALSE for all features.
         *
         * Change notification is via notify::channel-ready.
         */
        readonly channel_ready: boolean;
        /**
         * Initially %FALSE; changes to %TRUE when tp_proxy_prepare_async() has
         * finished preparing %TP_CHANNEL_FEATURE_CORE, and if the channel is a
         * group, %TP_CHANNEL_FEATURE_GROUP.
         *
         * This is a less general form of tp_proxy_is_prepared(), which should be
         * used in new code.
         *
         * One important difference is that after #TpProxy::invalidated is
         * signalled, #TpChannel:channel-ready keeps its current value - which might
         * be %TRUE, if the channel was successfully prepared before it became
         * invalidated - but tp_proxy_is_prepared() returns %FALSE for all features.
         *
         * Change notification is via notify::channel-ready.
         */
        readonly channelReady: boolean;
        /**
         * The #TpConnection to which this #TpChannel belongs. Used for e.g.
         * handle manipulation.
         */
        connection: Connection;
        /**
         * If the %TP_CHANNEL_FEATURE_GROUP feature has been prepared successfully,
         * #TpChannelGroupFlags indicating the capabilities and behaviour of that
         * group.
         *
         * Otherwise, this may be 0.
         *
         * Change notification is via notify::group-flags or
         * TpChannel::group-flags-changed.
         */
        readonly group_flags: number;
        /**
         * If the %TP_CHANNEL_FEATURE_GROUP feature has been prepared successfully,
         * #TpChannelGroupFlags indicating the capabilities and behaviour of that
         * group.
         *
         * Otherwise, this may be 0.
         *
         * Change notification is via notify::group-flags or
         * TpChannel::group-flags-changed.
         */
        readonly groupFlags: number;
        /**
         * If this channel is a group and %TP_CHANNEL_FEATURE_CONTACTS has been
         * prepared, and the user is a member of the group, the #TpContact
         * representing them in this group.
         *
         * Otherwise, the result may be either a contact representing the user,
         * or %NULL.
         *
         * Change notification is via notify::group-self-contact.
         */
        readonly group_self_contact: Contact;
        /**
         * If this channel is a group and %TP_CHANNEL_FEATURE_CONTACTS has been
         * prepared, and the user is a member of the group, the #TpContact
         * representing them in this group.
         *
         * Otherwise, the result may be either a contact representing the user,
         * or %NULL.
         *
         * Change notification is via notify::group-self-contact.
         */
        readonly groupSelfContact: Contact;
        /**
         * If this channel is a group and %TP_CHANNEL_FEATURE_GROUP has been
         * prepared, and the user is a member of the group, the #TpHandle
         * representing them in this group.
         *
         * Otherwise, the result may be either a handle representing the user, or 0.
         *
         * Change notification is via notify::group-self-handle.
         */
        readonly group_self_handle: number;
        /**
         * If this channel is a group and %TP_CHANNEL_FEATURE_GROUP has been
         * prepared, and the user is a member of the group, the #TpHandle
         * representing them in this group.
         *
         * Otherwise, the result may be either a handle representing the user, or 0.
         *
         * Change notification is via notify::group-self-handle.
         */
        readonly groupSelfHandle: number;
        /**
         * This channel's associated identifier, or the empty string if it has
         * handle type %TP_HANDLE_TYPE_NONE.
         *
         * For channels where #TpChannelIface:handle is non-zero, this is the result
         * of inspecting #TpChannelIface:handle.
         *
         * This is not guaranteed to be set until tp_proxy_prepare_async() has
         * finished preparing %TP_CHANNEL_FEATURE_CORE; until then, it may be
         * the empty string.
         *
         * Changed in 0.11.4: this property is never %NULL. Previously,
         * it was %NULL before an identifier was known, or when a channel
         * with no TargetID D-Bus property had TargetHandleType %TP_HANDLE_TYPE_NONE.
         */
        readonly identifier: string;
        /**
         * The #TpContact of the initiator of this channel, or %NULL if there is no
         * particular initiator.
         *
         * If the channel was initiated by a remote contact, this represents
         * that contact, and #TpChannel:requested will be %FALSE. For instance,
         * for an incoming call this property indicates the caller, and for a
         * chatroom invitation this property indicates who sent the invitation.
         *
         * If the channel was requested by the local user, #TpChannel:requested
         * will be %TRUE, and this property may be the #TpChannel:group-self-contact
         * or #TpConnection:self-contact.
         *
         * If the channel appeared for some other reason (for instance as a
         * side-effect of connecting to the server), this property may be %NULL.
         *
         * This is not guaranteed to be set until tp_proxy_prepare_async() has
         * finished preparing %TP_CHANNEL_FEATURE_CONTACTS; until then, it may be
         * %NULL.
         */
        readonly initiator_contact: Contact;
        /**
         * The #TpContact of the initiator of this channel, or %NULL if there is no
         * particular initiator.
         *
         * If the channel was initiated by a remote contact, this represents
         * that contact, and #TpChannel:requested will be %FALSE. For instance,
         * for an incoming call this property indicates the caller, and for a
         * chatroom invitation this property indicates who sent the invitation.
         *
         * If the channel was requested by the local user, #TpChannel:requested
         * will be %TRUE, and this property may be the #TpChannel:group-self-contact
         * or #TpConnection:self-contact.
         *
         * If the channel appeared for some other reason (for instance as a
         * side-effect of connecting to the server), this property may be %NULL.
         *
         * This is not guaranteed to be set until tp_proxy_prepare_async() has
         * finished preparing %TP_CHANNEL_FEATURE_CONTACTS; until then, it may be
         * %NULL.
         */
        readonly initiatorContact: Contact;
        /**
         * The %TP_HANDLE_TYPE_CONTACT #TpHandle of the initiator of this
         * channel, or 0 if there is no particular initiator.
         *
         * If the channel was initiated by a remote contact, this handle represents
         * that contact, and #TpChannel:requested will be %FALSE. For instance,
         * for an incoming call this property indicates the caller, and for a
         * chatroom invitation this property indicates who sent the invitation.
         *
         * If the channel was requested by the local user, #TpChannel:requested
         * will be %TRUE, and this property may be the #TpChannel:group-self-handle
         * or #TpConnection:self-handle.
         *
         * If the channel appeared for some other reason (for instance as a
         * side-effect of connecting to the server), this property may be 0.
         *
         * This is not guaranteed to be set until tp_proxy_prepare_async() has
         * finished preparing %TP_CHANNEL_FEATURE_CORE; until then, it may be 0.
         */
        readonly initiator_handle: number;
        /**
         * The %TP_HANDLE_TYPE_CONTACT #TpHandle of the initiator of this
         * channel, or 0 if there is no particular initiator.
         *
         * If the channel was initiated by a remote contact, this handle represents
         * that contact, and #TpChannel:requested will be %FALSE. For instance,
         * for an incoming call this property indicates the caller, and for a
         * chatroom invitation this property indicates who sent the invitation.
         *
         * If the channel was requested by the local user, #TpChannel:requested
         * will be %TRUE, and this property may be the #TpChannel:group-self-handle
         * or #TpConnection:self-handle.
         *
         * If the channel appeared for some other reason (for instance as a
         * side-effect of connecting to the server), this property may be 0.
         *
         * This is not guaranteed to be set until tp_proxy_prepare_async() has
         * finished preparing %TP_CHANNEL_FEATURE_CORE; until then, it may be 0.
         */
        readonly initiatorHandle: number;
        /**
         * If #TpChannel:initiator-handle is 0, this will always be "".
         * Otherwise, this will be the #TpContact:identifier of the contact
         * with that handle.
         *
         * This is not guaranteed to be set until tp_proxy_prepare_async() has
         * finished preparing %TP_CHANNEL_FEATURE_CORE; until then, it may be
         * the empty string.
         */
        readonly initiator_identifier: string;
        /**
         * If #TpChannel:initiator-handle is 0, this will always be "".
         * Otherwise, this will be the #TpContact:identifier of the contact
         * with that handle.
         *
         * This is not guaranteed to be set until tp_proxy_prepare_async() has
         * finished preparing %TP_CHANNEL_FEATURE_CORE; until then, it may be
         * the empty string.
         */
        readonly initiatorIdentifier: string;
        /**
         * If %TRUE, tp_channel_provide_password_async() has to be called
         * to be able to join the channel.
         *
         * This is not guaranteed to be meaningful until tp_proxy_prepare_async() has
         * finished preparing %TP_CHANNEL_FEATURE_PASSWORD; until then, it may return
         * %FALSE even if the channel is actually protected by a password.
         * Preparing %TP_CHANNEL_FEATURE_PASSWORD also ensures that the
         * notify::password-needed signal will be fired when this property changes.
         */
        readonly password_needed: boolean;
        /**
         * If %TRUE, tp_channel_provide_password_async() has to be called
         * to be able to join the channel.
         *
         * This is not guaranteed to be meaningful until tp_proxy_prepare_async() has
         * finished preparing %TP_CHANNEL_FEATURE_PASSWORD; until then, it may return
         * %FALSE even if the channel is actually protected by a password.
         * Preparing %TP_CHANNEL_FEATURE_PASSWORD also ensures that the
         * notify::password-needed signal will be fired when this property changes.
         */
        readonly passwordNeeded: boolean;
        /**
         * %TRUE if this channel was created in response to a local request, such
         * as a call to tp_account_channel_request_create_channel_async(). %FALSE
         * if this channel was initiated by a remote contact
         * (the #TpChannel:initiator-handle), or if it appeared as a side-effect
         * of some other action.
         *
         * For instance, this is %FALSE on incoming calls and file transfers,
         * remotely-initiated 1-1 text conversations, and invitations to chatrooms,
         * and %TRUE on outgoing calls and file transfers, locally-initiated 1-1
         * text conversations, and chatrooms joined by local user action.
         *
         * This is not guaranteed to be meaningful until tp_proxy_prepare_async() has
         * finished preparing %TP_CHANNEL_FEATURE_CORE; until then, it may return
         * %FALSE even if the channel was actually requested.
         */
        readonly requested: boolean;
        /**
         * If this channel is for communication with a single contact (that is,
         * #TpChannelIface:handle-type is %TP_HANDLE_TYPE_CONTACT), then a #TpContact
         * representing the remote contact. For chat rooms, contact search channels and
         * other channels without a single remote contact, %NULL.
         *
         * This is not guaranteed to be set until tp_proxy_prepare_async() has
         * finished preparing %TP_CHANNEL_FEATURE_CONTACTS; until then, it may be
         * %NULL.
         */
        readonly target_contact: Contact;
        /**
         * If this channel is for communication with a single contact (that is,
         * #TpChannelIface:handle-type is %TP_HANDLE_TYPE_CONTACT), then a #TpContact
         * representing the remote contact. For chat rooms, contact search channels and
         * other channels without a single remote contact, %NULL.
         *
         * This is not guaranteed to be set until tp_proxy_prepare_async() has
         * finished preparing %TP_CHANNEL_FEATURE_CONTACTS; until then, it may be
         * %NULL.
         */
        readonly targetContact: Contact;

        // Constructors of TelepathyGLib-0.12.Channel

        static ['new'](
            conn: Connection,
            object_path: string,
            optional_channel_type: string,
            optional_handle_type: HandleType,
            optional_handle: Handle,
        ): Channel;

        static new_from_properties(
            conn: Connection,
            object_path: string,
            immutable_properties: GLib.HashTable<string, GObject.Value>,
        ): Channel;

        // Owm methods of TelepathyGLib-0.12.Channel

        static get_feature_quark_chat_states(): GLib.Quark;
        static get_feature_quark_contacts(): GLib.Quark;
        static get_feature_quark_core(): GLib.Quark;
        static get_feature_quark_group(): GLib.Quark;
        static get_feature_quark_password(): GLib.Quark;
        /**
         * Ensure that the known interfaces for TpChannel have been set up.
         * This is done automatically when necessary, but for correct
         * overriding of library interfaces by local extensions, you should
         * call this function before calling
         * tp_proxy_or_subclass_hook_on_interface_add() with first argument
         * %TP_TYPE_CHANNEL.
         */
        static init_known_interfaces(): void;

        // Owm methods of TelepathyGLib-0.12.Channel

        /**
         * Returns the connection for this channel. The returned pointer is only valid
         * while this channel is valid - reference it with g_object_ref() if needed.
         * @returns the value of #TpChannel:connection
         */
        borrow_connection(): Connection;
        /**
         * Returns the immutable D-Bus properties of this channel, the same as
         * #TpChannel:channel-properties.
         *
         * The returned hash table should not be altered, and is not necessarily
         * valid after the main loop is next re-entered. Copy it with
         * g_boxed_copy() (its type is %TP_HASH_TYPE_QUALIFIED_PROPERTY_VALUE_MAP)
         * if a copy that remains valid must be kept.
         *
         * If the #TpChannel:channel-properties property was not set during
         * construction (e.g. by calling tp_channel_new_from_properties()), a
         * reasonable but possibly incomplete version will be made up from the values
         * of individual properties; reading this property repeatedly may yield
         * progressively more complete values until the %TP_CHANNEL_FEATURE_CORE
         * feature is prepared.
         * @returns a #GHashTable  where the keys are strings,  D-Bus interface name + "." + property name, and the values are #GValue  instances
         */
        borrow_immutable_properties(): GLib.HashTable<string, GObject.Value>;
        /**
         * Close channel `self`. In most cases, it's generally cleaner to use
         * tp_channel_leave_async() instead to properly leave and close the channel.
         *
         * When the channel has been closed, `callback` will be called.
         * You can then call tp_channel_close_finish() to get the result of
         * the operation.
         * @param callback a callback to call when we closed the channel, or %NULL  to ignore any reply
         */
        close_async(callback?: Gio.AsyncReadyCallback<this> | null): void;
        /**
         * Finishes a call to tp_channel_leave_async().
         * @param result a #GAsyncResult passed to the callback for tp_channel_close_async().
         * @returns %TRUE if the channel has been closed; %FALSE otherwise
         */
        close_finish(result: Gio.AsyncResult): boolean;
        /**
         * Destroy channel `self`.
         * If `self` doesn't implement #TP_IFACE_QUARK_CHANNEL_INTERFACE_DESTROYABLE
         * or if for any reason we can't destroy the channel, we close it.
         *
         * When the channel has been destroyed or closed, `callback` will be called.
         * You can then call tp_channel_destroy_finish() to get the result of
         * the operation.
         * @param callback a callback to call when we left the channel
         */
        destroy_async(callback?: Gio.AsyncReadyCallback<this> | null): void;
        /**
         * Completes a call to tp_channel_destroy_async().
         * @param result a #GAsyncResult passed to the callback for tp_channel_destroy_async().
         * @returns %TRUE if the channel has been destroyed or closed; %FALSE otherwise
         */
        destroy_finish(result: Gio.AsyncResult): boolean;
        /**
         * Returns the immutable D-Bus properties of this channel, in a variant of type
         * %G_VARIANT_TYPE_VARDICT where the keys are strings,
         * D-Bus interface name + "." + property name. Use g_variant_lookup() or
         * g_variant_lookup_value() for convenient access to the values.
         *
         * If the #TpChannel:channel-properties property was not set during
         * construction (e.g. by calling tp_channel_new_from_properties()), a
         * reasonable but possibly incomplete version will be made up from the values
         * of individual properties; reading this property repeatedly may yield
         * progressively more complete values until the %TP_CHANNEL_FEATURE_CORE
         * feature is prepared.
         *
         * This function should be used only by #TpChannel subclasses, otherwise it is
         * recommended to use individual property getters instead.
         * @returns a dictionary where the keys are strings,  D-Bus interface name + "." + property name.
         */
        dup_immutable_properties(): GLib.Variant;
        /**
         * Get the D-Bus interface name representing this channel's type,
         * if it has been discovered.
         *
         * This is the same as the #TpChannelIface:channel-type property; it isn't
         * guaranteed to be non-%NULL until the %TP_CHANNEL_FEATURE_CORE feature has
         * been prepared.
         * @returns the channel type, if the channel is ready; either the channel  type or %NULL, if the channel is not yet ready.
         */
        get_channel_type(): string;
        /**
         * Get the D-Bus interface name representing this channel's type, as a GQuark,
         * if it has been discovered.
         *
         * This is the same as the #TpChannelIface:channel-type property, except that it
         * is a GQuark rather than a string. It isn't guaranteed to be nonzero until
         * the %TP_CHANNEL_FEATURE_CORE property is ready.
         * @returns the channel type, if the channel is ready; either the channel  type or 0, if the channel is not yet ready.
         */
        get_channel_type_id(): GLib.Quark;
        /**
         * Return the chat state for the given contact. If tp_proxy_is_prepared()
         * would return %FALSE for the feature %TP_CHANNEL_FEATURE_CHAT_STATES,
         * the result will always be %TP_CHANNEL_CHAT_STATE_INACTIVE.
         * @param contact a contact handle
         * @returns the chat state for @contact, or %TP_CHANNEL_CHAT_STATE_INACTIVE  if their chat state is not known
         */
        get_chat_state(contact: Handle): ChannelChatState;
        /**
         * Returns the connection for this channel. The returned pointer is only valid
         * while this channel is valid - reference it with g_object_ref() if needed.
         * @returns the value of #TpChannel:connection
         */
        get_connection(): Connection;
        /**
         * Get the handle representing the contact, chatroom, etc. with which this
         * channel communicates for its whole lifetime, or 0 if there is no such
         * handle or it has not yet been discovered.
         *
         * This is the same as the #TpChannelIface:handle property. It isn't
         * guaranteed to have its final value until the %TP_CHANNEL_FEATURE_CORE
         * feature is ready.
         *
         * If `handle_type` is not %NULL, the type of handle is written into it.
         * This will be %TP_UNKNOWN_HANDLE_TYPE if the handle has not yet been
         * discovered, or %TP_HANDLE_TYPE_NONE if there is no handle with which this
         * channel will always communicate. This is the same as the
         * #TpChannelIface:handle-type property.
         * @returns the handle
         */
        get_handle(): Handle;
        /**
         * This channel's associated identifier, or the empty string if no identifier
         * or unknown.
         *
         * This is the same as the #TpChannel:identifier property, and isn't guaranteed
         * to be set until the %TP_CHANNEL_FEATURE_CORE property is ready.
         *
         * Changed in 0.11.4: as with #TpChannel:identifier, this could
         * previously either be %NULL or the empty string if there was no suitable
         * value. It is now non-%NULL in all cases.
         * @returns the identifier
         */
        get_identifier(): string;
        /**
         * &lt;!-- --&gt;
         * @returns the value of #TpChannel:initiator-contact
         */
        get_initiator_contact(): Contact;
        /**
         * Return the #TpChannel:requested property
         * @returns the value of #TpChannel:requested
         */
        get_requested(): boolean;
        /**
         * &lt;!-- --&gt;
         * @returns the value of #TpChannel:target-contact
         */
        get_target_contact(): Contact;
        /**
         * If `self` is a group and the %TP_CHANNEL_FEATURE_CONTACTS feature has been
         * prepared, return a #GPtrArray containing its local-pending members.
         *
         * If `self` is a group but %TP_CHANNEL_FEATURE_CONTACTS has not been prepared,
         * the result may either be a set of local-pending members, or %NULL.
         *
         * If `self` is not a group, return %NULL.
         * @returns a new #GPtrArray of #TpContact, free it with g_ptr_array_unref(), or %NULL.
         */
        group_dup_local_pending_contacts(): Contact[];
        /**
         * If `self` is a group and the %TP_CHANNEL_FEATURE_CONTACTS feature has been
         * prepared, return a #GPtrArray containing its members.
         *
         * If `self` is a group but %TP_CHANNEL_FEATURE_CONTACTS has not been prepared,
         * the result may either be a set of members, or %NULL.
         *
         * If `self` is not a group, return %NULL.
         * @returns a new #GPtrArray of #TpContact, free it with g_ptr_array_unref(), or %NULL.
         */
        group_dup_members_contacts(): Contact[];
        /**
         * If `self` is a group and the %TP_CHANNEL_FEATURE_CONTACTS feature has been
         * prepared, return a #GPtrArray containing its remote-pending members.
         *
         * If `self` is a group but %TP_CHANNEL_FEATURE_CONTACTS has not been prepared,
         * the result may either be a set of remote-pending members, or %NULL.
         *
         * If `self` is not a group, return %NULL.
         * @returns a new #GPtrArray of #TpContact, free it with g_ptr_array_unref(), or %NULL.
         */
        group_dup_remote_pending_contacts(): Contact[];
        /**
         * Synopsis (see below for further explanation):
         *
         * - if `self` is not a group or `contact` is not a member of this channel,
         *   result is undefined;
         * - if %TP_CHANNEL_FEATURE_CONTACTS has not yet been prepared, result is
         *   undefined;
         * - if `self` does not have flags that include
         *   %TP_CHANNEL_GROUP_FLAG_PROPERTIES,
         *   result is undefined;
         * - if `contact` is channel-specific and its globally valid "owner" is known,
         *   return that owner;
         * - if `contact` is channel-specific and its globally valid "owner" is unknown,
         *   return %NULL;
         * - if `contact` is globally valid, return `contact` itself
         *
         * Some channels (those with flags that include
         * %TP_CHANNEL_GROUP_FLAG_CHANNEL_SPECIFIC_HANDLES) have a concept of
         * "channel-specific contacts". These are contacts that only have meaning within
         * the context of the channel - for instance, in XMPP Multi-User Chat,
         * participants in a chatroom are identified by an in-room JID consisting
         * of the JID of the chatroom plus a local nickname.
         *
         * Depending on the protocol and configuration, it might be possible to find
         * out what globally valid contact (i.e. a contact that you could add to
         * your contact list) "owns" a channel-specific contact. For instance, in
         * most XMPP MUC chatrooms, normal users cannot see what global JID
         * corresponds to an in-room JID, but moderators can.
         *
         * This is further complicated by the fact that channels with channel-specific
         * contacts can sometimes have members with globally valid contacts (for
         * instance, if you invite someone to an XMPP MUC using their globally valid
         * JID, you would expect to see the contact representing that JID in the
         * Group's remote-pending set).
         * @param contact a contact which is a member of this channel
         * @returns the global contact that owns the given contact,  or %NULL.
         */
        group_get_contact_owner(contact: Contact): Contact;
        /**
         * Return the #TpChannel:group-flags property (see the description
         * of that property for notes on validity).
         * @returns the group flags, or 0
         */
        group_get_flags(): ChannelGroupFlags;
        /**
         * Synopsis (see below for further explanation):
         *
         * - if `self` is not a group or `handle` is not a member of this channel,
         *   result is undefined;
         * - if %TP_CHANNEL_FEATURE_GROUP has not yet been prepared, result is
         *   undefined;
         * - if `self` does not have flags that include
         *   %TP_CHANNEL_GROUP_FLAG_PROPERTIES,
         *   result is undefined;
         * - if `handle` is channel-specific and its globally valid "owner" is known,
         *   return that owner;
         * - if `handle` is channel-specific and its globally valid "owner" is unknown,
         *   return zero;
         * - if `handle` is globally valid, return `handle` itself
         *
         * Some channels (those with flags that include
         * %TP_CHANNEL_GROUP_FLAG_CHANNEL_SPECIFIC_HANDLES) have a concept of
         * "channel-specific handles". These are handles that only have meaning within
         * the context of the channel - for instance, in XMPP Multi-User Chat,
         * participants in a chatroom are identified by an in-room JID consisting
         * of the JID of the chatroom plus a local nickname.
         *
         * Depending on the protocol and configuration, it might be possible to find
         * out what globally valid handle (i.e. an identifier that you could add to
         * your contact list) "owns" a channel-specific handle. For instance, in
         * most XMPP MUC chatrooms, normal users cannot see what global JID
         * corresponds to an in-room JID, but moderators can.
         *
         * This is further complicated by the fact that channels with channel-specific
         * handles can sometimes have members with globally valid handles (for
         * instance, if you invite someone to an XMPP MUC using their globally valid
         * JID, you would expect to see the handle representing that JID in the
         * Group's remote-pending set).
         *
         * This function's result is undefined unless the channel is ready
         * and its flags include %TP_CHANNEL_GROUP_FLAG_PROPERTIES (an implementation
         * without extra D-Bus round trips is not possible using the older API).
         * @param handle a handle which is a member of this channel
         * @returns the global handle that owns the given handle, or 0
         */
        group_get_handle_owner(handle: Handle): Handle;
        /**
         * If `self` is a group and the %TP_CHANNEL_FEATURE_GROUP feature has been
         * prepared, return a #TpIntset containing its local-pending members.
         *
         * If `self` is a group but %TP_CHANNEL_FEATURE_GROUP has not been prepared,
         * the result may either be a set of local-pending members, or %NULL.
         *
         * If `self` is not a group, return %NULL.
         * @returns the local-pending members, or %NULL
         */
        group_get_local_pending(): Intset;
        /**
         * If `local_pending` is actually a local-pending contact,
         * write additional information into `actor,` `reason` and `message` and return
         * %TRUE. The contact and message are not referenced or copied, and can only be
         * assumed to remain valid until the main loop is re-entered.
         *
         * If `local_pending` is not the handle of a local-pending contact,
         * write %NULL into `actor,` %TP_CHANNEL_GROUP_CHANGE_REASON_NONE into `reason`
         * and "" into `message,` and return %FALSE.
         * @param local_pending the #TpContact of a local-pending contact about whom more  information is needed
         * @returns %TRUE if the contact is in fact local-pending
         */
        group_get_local_pending_contact_info(local_pending: Contact): boolean;
        /**
         * If `local_pending` is actually the handle of a local-pending contact,
         * write additional information into `actor,` `reason` and `message` and return
         * %TRUE. The handle and message are not referenced or copied, and can only be
         * assumed to remain valid until the main loop is re-entered.
         *
         * If `local_pending` is not the handle of a local-pending contact,
         * write 0 into `actor,` %TP_CHANNEL_GROUP_CHANGE_REASON_NONE into `reason`
         * and "" into `message,` and return %FALSE.
         * @param local_pending the handle of a local-pending contact about whom more  information is needed
         * @returns %TRUE if the contact is in fact local-pending
         */
        group_get_local_pending_info(local_pending: Handle): boolean;
        /**
         * If `self` is a group and the %TP_CHANNEL_FEATURE_GROUP feature has been
         * prepared, return a #TpIntset containing its members.
         *
         * If `self` is a group but %TP_CHANNEL_FEATURE_GROUP has not been prepared,
         * the result may either be a set of members, or %NULL.
         *
         * If `self` is not a group, return %NULL.
         * @returns the members, or %NULL
         */
        group_get_members(): Intset;
        /**
         * If `self` is a group and the %TP_CHANNEL_FEATURE_GROUP feature has been
         * prepared, return a #TpIntset containing its remote-pending members.
         *
         * If `self` is a group but %TP_CHANNEL_FEATURE_GROUP has not been prepared,
         * the result may either be a set of remote-pending members, or %NULL.
         *
         * If `self` is not a group, return %NULL.
         * @returns the remote-pending members, or %NULL
         */
        group_get_remote_pending(): Intset;
        /**
         * &lt;!-- --&gt;
         * @returns the value of #TpChannel:group-self-contact
         */
        group_get_self_contact(): Contact;
        /**
         * Return the #TpChannel:group-self-handle property (see the description
         * of that property for notes on validity).
         * @returns the handle representing the user, or 0
         */
        group_get_self_handle(): Handle;
        /**
         * Join channel `self` with `message` as join message.
         *
         * When we joined the channel, `callback` will be called.
         * You can then call tp_channel_join_finish() to get the result of
         * the operation.
         *
         * Note that unlike tp_channel_leave_async(), %TP_CHANNEL_FEATURE_GROUP feature
         * must be prepared before calling this function.
         * @param message the join message
         * @param callback a callback to call when we joined the channel
         */
        join_async(message: string, callback?: Gio.AsyncReadyCallback<this> | null): void;
        /**
         * Completes a call to tp_channel_join_async().
         * @param result a #GAsyncResult passed to the callback for tp_channel_join_async().
         * @returns %TRUE if the channel was successfully joined; %FALSE otherwise
         */
        join_finish(result: Gio.AsyncResult): boolean;
        /**
         * Leave channel `self` with `reason` as reason and `message` as leave message.
         * If `self` doesn't implement #TP_IFACE_QUARK_CHANNEL_INTERFACE_GROUP or if
         * for any reason we can't properly leave the channel, we close it.
         *
         * When we left the channel, `callback` will be called.
         * You can then call tp_channel_leave_finish() to get the result of
         * the operation.
         *
         * Note that unlike tp_channel_join_async(), %TP_CHANNEL_FEATURE_GROUP feature
         * does not have to be prepared and will be prepared for you. But this is a
         * deprecated behaviour.
         * @param reason the leave reason
         * @param message the leave message
         * @param callback a callback to call when we left the channel
         */
        leave_async(
            reason: ChannelGroupChangeReason,
            message: string,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Completes a call to tp_channel_leave_async().
         * @param result a #GAsyncResult passed to the callback for tp_channel_leave_async().
         * @returns %TRUE if the channel has been left; %FALSE otherwise
         */
        leave_finish(result: Gio.AsyncResult): boolean;
        /**
         * Provide `password` so that `self` can be joined.
         * This function must be called with the correct password in order for
         * channel joining to proceed if the TpChannel:password-needed property
         * is set.
         *
         * Once the password has been provided, `callback` will be
         * called. You can then call tp_channel_provide_password_finish()
         * to get the result of the operation.
         * @param password the password
         * @param callback a callback to call when @password has been provided
         */
        provide_password_async(password: string, callback?: Gio.AsyncReadyCallback<this> | null): void;
        /**
         * Completes a call to tp_channel_provide_password_async().
         * If the password was rejected, the operation
         * fails with #TP_ERROR_AUTHENTICATION_FAILED.
         * @param result a #GAsyncResult passed to the callback for  tp_channel_provide_password_async().
         * @returns %TRUE if the password has been provided and accepted, %FALSE otherwise.
         */
        provide_password_finish(result: Gio.AsyncResult): boolean;
    }

    module ChannelDispatchOperation {
        // Signal callback interfaces

        interface ChannelLost {
            (channel: Channel, domain: number, code: number, message: string): void;
        }

        // Constructor properties interface
    }

    /**
     * One of the channel dispatcher's functions is to offer incoming channels to
     * Approver clients for approval. An approver should generally ask the user
     * whether they want to participate in the requested communication channels
     * (join the chat or chatroom, answer the call, accept the file transfer, or
     * whatever is appropriate). A collection of channels offered in this way
     * is represented by a ChannelDispatchOperation object.
     *
     * If the user wishes to accept the communication channels, the approver
     * should call tp_cli_channel_dispatch_operation_call_handle_with() to
     * indicate the user's or approver's preferred handler for the channels (the
     * empty string indicates no particular preference, and will cause any
     * suitable handler to be used).
     *
     * If the user wishes to reject the communication channels, or if the user
     * accepts the channels and the approver will handle them itself, the approver
     * should call tp_cli_channel_dispatch_operation_call_claim(). If this method
     * succeeds, the approver immediately has control over the channels as their
     * primary handler, and may do anything with them (in particular, it may close
     * them in whatever way seems most appropriate).
     *
     * There are various situations in which the channel dispatch operation will
     * be closed, causing the #TpProxy::invalidated signal to be emitted. If this
     * happens, the approver should stop prompting the user.
     *
     * Because all approvers are launched simultaneously, the user might respond
     * to another approver; if this happens, the #TpProxy::invalidated signal
     * will be emitted with the domain %TP_DBUS_ERRORS and the error code
     * %TP_DBUS_ERROR_OBJECT_REMOVED.
     *
     * If a channel closes, the #TpChannelDispatchOperation::channel-lost signal
     * is emitted. If all channels
     * close, there is nothing more to dispatch, so the #TpProxy::invalidated
     * signal will be emitted with the domain %TP_DBUS_ERRORS and the error code
     * %TP_DBUS_ERROR_OBJECT_REMOVED.
     *
     * If the channel dispatcher crashes or exits, the #TpProxy::invalidated
     * signal will be emitted with the domain %TP_DBUS_ERRORS and the error code
     * %TP_DBUS_ERROR_NAME_OWNER_LOST. In a high-quality implementation, the
     * dispatcher should be restarted, at which point it will create new
     * channel dispatch operations for any undispatched channels, and the approver
     * will be notified again.
     *
     * Creating a #TpChannelDispatchOperation directly is deprecated: it
     * should only be created via a #TpBaseClient.
     *
     * Since 0.16, #TpChannelDispatchOperation always has a non-%NULL
     * #TpProxy:factory, which will be propagated to the #TpAccount,
     * #TpConnection and #TpChannel.
     */
    class ChannelDispatchOperation extends Proxy {
        // Own properties of TelepathyGLib-0.12.ChannelDispatchOperation

        /**
         * The #TpAccount with which the connection and channels are associated.
         *
         * Read-only except during construction.
         *
         * This is not guaranteed to be set until tp_proxy_prepare_async() has
         * finished preparing %TP_CHANNEL_DISPATCH_OPERATION_FEATURE_CORE.
         */
        account: Account;
        /**
         * A #GPtrArray containing the #TpChannel to be dispatched.
         *
         * Read-only.
         *
         * This is not guaranteed to be set until tp_proxy_prepare_async() has
         * finished preparing %TP_CHANNEL_DISPATCH_OPERATION_FEATURE_CORE.
         */
        channels: any[];
        /**
         * The #TpConnection with which the channels are associated.
         *
         * Read-only except during construction.
         *
         * This is not guaranteed to be set until tp_proxy_prepare_async() has
         * finished preparing %TP_CHANNEL_DISPATCH_OPERATION_FEATURE_CORE.
         */
        connection: Connection;
        /**
         * A #GStrv containing the well known bus names (starting
         * with TP_CLIENT_BUS_NAME_BASE) of the possible Handlers for
         * the channels
         *
         * Read-only except during construction.
         *
         * This is not guaranteed to be set until tp_proxy_prepare_async() has
         * finished preparing %TP_CHANNEL_DISPATCH_OPERATION_FEATURE_CORE.
         */
        readonly possible_handlers: string[];
        /**
         * A #GStrv containing the well known bus names (starting
         * with TP_CLIENT_BUS_NAME_BASE) of the possible Handlers for
         * the channels
         *
         * Read-only except during construction.
         *
         * This is not guaranteed to be set until tp_proxy_prepare_async() has
         * finished preparing %TP_CHANNEL_DISPATCH_OPERATION_FEATURE_CORE.
         */
        readonly possibleHandlers: string[];

        // Constructors of TelepathyGLib-0.12.ChannelDispatchOperation

        static ['new'](
            bus_daemon: DBusDaemon,
            object_path: string,
            immutable_properties: GLib.HashTable<any, any>,
        ): ChannelDispatchOperation;

        // Owm methods of TelepathyGLib-0.12.ChannelDispatchOperation

        static get_feature_quark_core(): GLib.Quark;
        /**
         * Ensure that the known interfaces for TpChannelDispatchOperation have been
         * set up. This is done automatically when necessary, but for correct
         * overriding of library interfaces by local extensions, you should
         * call this function before calling
         * tp_proxy_or_subclass_hook_on_interface_add() with first argument
         * %TP_TYPE_CHANNEL_DISPATCH_OPERATION.
         */
        static init_known_interfaces(): void;

        // Owm methods of TelepathyGLib-0.12.ChannelDispatchOperation

        /**
         * Called by an approver to claim channels for handling internally.
         * If this method is called successfully, the process calling this
         * method becomes the handler for the channel.
         *
         * If successful, this method will cause the #TpProxy::invalidated signal
         * to be emitted, in the same way as for
         * tp_channel_dispatch_operation_handle_with_async().
         *
         * This method may fail because the dispatch operation has already
         * been completed. Again, see tp_channel_dispatch_operation_handle_with_async()
         * for more details. The approver MUST NOT attempt to interact with
         * the channels further in this case.
         * @param callback a callback to call when the call returns
         */
        claim_async(callback?: Gio.AsyncReadyCallback<this> | null): void;
        /**
         * Finishes an async call to Claim().
         * @param result a #GAsyncResult
         * @returns %TRUE if the Claim() call was successful, otherwise %FALSE
         */
        claim_finish(result: Gio.AsyncResult): boolean;
        /**
         * Called by an approver to claim channels for handling internally.
         * If this method is called successfully, the process calling this
         * method becomes the handler for the channel.
         *
         * If successful, this method will cause the #TpProxy::invalidated signal
         * to be emitted, in the same way as for
         * tp_channel_dispatch_operation_handle_with_async().
         *
         * This method may fail because the dispatch operation has already
         * been completed. Again, see tp_channel_dispatch_operation_handle_with_async()
         * for more details. The approver MUST NOT attempt to interact with
         * the channels further in this case.
         *
         * This is an improved version of tp_channel_dispatch_operation_claim_async()
         * as it tells `client` about the new channels being handled.
         *
         * %TP_CHANNEL_DISPATCH_OPERATION_FEATURE_CORE feature must be prepared before
         * calling this function.
         * @param client the #TpBaseClient claiming @self
         * @param callback a callback to call when the call returns
         */
        claim_with_async(client: BaseClient, callback?: Gio.AsyncReadyCallback<this> | null): void;
        /**
         * Finishes an async call to Claim() initiated using
         * tp_channel_dispatch_operation_claim_with_async().
         * @param result a #GAsyncResult
         * @returns %TRUE if the Claim() call was successful, otherwise %FALSE
         */
        claim_with_finish(result: Gio.AsyncResult): boolean;
        /**
         * Called by an approver to claim channels and close them all right away.
         * If this method is called successfully, `self` has been claimed and
         * tp_channel_close_async() has been called on all of its channels.
         *
         * If successful, this method will cause the #TpProxy::invalidated signal
         * to be emitted, in the same way as for
         * tp_channel_dispatch_operation_handle_with_async().
         *
         * This method may fail because the dispatch operation has already
         * been completed. Again, see tp_channel_dispatch_operation_handle_with_async()
         * for more details.
         *
         * %TP_CHANNEL_DISPATCH_OPERATION_FEATURE_CORE feature must be prepared before
         * calling this function.
         * @param callback a callback to call when the request has been satisfied
         */
        close_channels_async(callback?: Gio.AsyncReadyCallback<this> | null): void;
        /**
         * Finishes an async operation initiated using
         * tp_channel_dispatch_operation_close_channels_async().
         * @param result a #GAsyncResult
         * @returns %TRUE if the Claim() call was successful and Close() has at least been attempted on all the channels, otherwise %FALSE
         */
        close_channels_finish(result: Gio.AsyncResult): boolean;
        /**
         * Called by an approver to claim channels and destroy them all right away.
         * If this method is called successfully, `self` has been claimed and
         * tp_channel_destroy_async() has been called on all of its channels.
         *
         * If successful, this method will cause the #TpProxy::invalidated signal
         * to be emitted, in the same way as for
         * tp_channel_dispatch_operation_handle_with_async().
         *
         * This method may fail because the dispatch operation has already
         * been completed. Again, see tp_channel_dispatch_operation_handle_with_async()
         * for more details.
         *
         * %TP_CHANNEL_DISPATCH_OPERATION_FEATURE_CORE feature must be prepared before
         * calling this function.
         * @param callback a callback to call when the request has been satisfied
         */
        destroy_channels_async(callback?: Gio.AsyncReadyCallback<this> | null): void;
        /**
         * Finishes an async operation initiated using
         * tp_channel_dispatch_operation_destroy_channels_async().
         * @param result a #GAsyncResult
         * @returns %TRUE if the Claim() call was successful and tp_channel_destroy_async() has at least been attempted on all the channels, otherwise %FALSE
         */
        destroy_channels_finish(result: Gio.AsyncResult): boolean;
        /**
         * Returns a #GPtrArray containing the #TpChannel of this
         * ChannelDispatchOperation.
         * The returned array and its #TpChannel are only valid while `self` is
         * valid - copy array and reference channels with g_object_ref() if needed.
         * @returns the value  of #TpChannelDispatchOperation:channels
         */
        get_channels(): Channel[];
        /**
         * Called by an approver to accept a channel bundle and request that the
         * given handler be used to handle it.
         *
         * If successful, this method will cause the #TpProxy::invalidated signal
         * to be emitted with the TP_DBUS_ERROR_OBJECT_REMOVED error code.
         *
         * However, this method may fail because the dispatch has already been
         * completed and the object has already gone. If this occurs, it indicates
         * that another approver has asked for the bundle to be handled by a
         * particular handler. The approver MUST NOT attempt to interact with
         * the channels further in this case, unless it is separately
         * invoked as the handler.
         *
         * Approvers which are also channel handlers SHOULD use
         * tp_channel_dispatch_operation_claim_async() instead
         * of tp_channel_dispatch_operation_handle_with_async() to request
         * that they can handle a channel bundle themselves.
         * @param handler The well-known bus name (starting with #TP_CLIENT_BUS_NAME_BASE) of the channel handler that should handle the channel, or %NULL if the client has no preferred channel handler
         * @param callback a callback to call when the call returns
         */
        handle_with_async(handler?: string | null, callback?: Gio.AsyncReadyCallback<this> | null): void;
        /**
         * Finishes an async call to HandleWith().
         * @param result a #GAsyncResult
         * @returns %TRUE if the HandleWith() call was successful, otherwise %FALSE
         */
        handle_with_finish(result: Gio.AsyncResult): boolean;
        /**
         * A variant of tp_channel_dispatch_operation_handle_with_async()
         * allowing the approver to pass an user action time.
         * This timestamp will be passed to the Handler when HandleChannels is called.
         *
         * If an X server timestamp for the user action causing this method call is
         * available, `user_action_time` should be this timestamp (for instance, the
         * result of gdk_event_get_time() if it is not %GDK_CURRENT_TIME). Otherwise, it
         * may be %TP_USER_ACTION_TIME_NOT_USER_ACTION to behave as if there was no
         * user action or it happened a long time ago, or
         * %TP_USER_ACTION_TIME_CURRENT_TIME to have the Handler behave as though the
         * user action had just happened (resembling, but not numerically equal to,
         * %GDK_CURRENT_TIME).
         *
         * This method has been introduced in telepathy-mission-control 5.5.0.
         * @param handler The well-known bus name (starting with #TP_CLIENT_BUS_NAME_BASE) of the channel handler that should handle the channel, or %NULL if the client has no preferred channel handler
         * @param user_action_time the time at which user action occurred, or one of the  special values %TP_USER_ACTION_TIME_NOT_USER_ACTION or  %TP_USER_ACTION_TIME_CURRENT_TIME
         * @param callback a callback to call when the call returns
         */
        handle_with_time_async(
            handler: string | null,
            user_action_time: number,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Finishes an async call to HandleWithTime().
         * @param result a #GAsyncResult
         * @returns %TRUE if the HandleWithTime() call was successful, otherwise %FALSE
         */
        handle_with_time_finish(result: Gio.AsyncResult): boolean;
        /**
         * Called by an approver to claim channels and leave them all right away.
         * If this method is called successfully, `self` has been claimed and
         * tp_channel_leave_async() has been called on all of its channels.
         *
         * If successful, this method will cause the #TpProxy::invalidated signal
         * to be emitted, in the same way as for
         * tp_channel_dispatch_operation_handle_with_async().
         *
         * This method may fail because the dispatch operation has already
         * been completed. Again, see tp_channel_dispatch_operation_handle_with_async()
         * for more details.
         *
         * %TP_CHANNEL_DISPATCH_OPERATION_FEATURE_CORE feature must be prepared before
         * calling this function.
         * @param reason the leave reason
         * @param message the leave message
         * @param callback a callback to call when the request has been satisfied
         */
        leave_channels_async(
            reason: ChannelGroupChangeReason,
            message: string,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Finishes an async operation initiated using
         * tp_channel_dispatch_operation_leave_channels_async().
         * @param result a #GAsyncResult
         * @returns %TRUE if the Claim() call was successful and tp_channel_leave_async() has at least been attempted on all the channels, otherwise %FALSE
         */
        leave_channels_finish(result: Gio.AsyncResult): boolean;
    }

    module ChannelDispatcher {
        // Constructor properties interface
    }

    /**
     * The Channel Dispatcher's main D-Bus API is used to request channels,
     * which is done by calling tp_cli_channel_dispatcher_call_create_channel() or
     * tp_cli_channel_dispatcher_call_ensure_channel() as appropriate.
     *
     * The Telepathy Channel Dispatcher is also responsible for responding to new
     * channels and launching client processes to handle them. However, clients
     * that can work with incoming channels do not have to call methods
     * on the channel dispatcher: instead, they must register with the channel
     * dispatcher passively, by taking a bus name starting with
     * %TP_CLIENT_BUS_NAME_BASE and implementing the #TpSvcClient interface.
     * See the Telepathy D-Bus Interface Specification for details.
     *
     * This proxy is usable but incomplete: convenience methods will be added in
     * a later version of telepathy-glib, along with a mechanism similar to
     * tp_connection_call_when_ready().
     */
    class ChannelDispatcher extends Proxy {
        // Constructors of TelepathyGLib-0.12.ChannelDispatcher

        static ['new'](bus_daemon: DBusDaemon): ChannelDispatcher;

        // Owm methods of TelepathyGLib-0.12.ChannelDispatcher

        /**
         * Ensure that the known interfaces for TpChannelDispatcher have been set up.
         * This is done automatically when necessary, but for correct
         * overriding of library interfaces by local extensions, you should
         * call this function before calling
         * tp_proxy_or_subclass_hook_on_interface_add() with first argument
         * %TP_TYPE_CHANNEL_DISPATCHER.
         */
        static init_known_interfaces(): void;

        // Owm methods of TelepathyGLib-0.12.ChannelDispatcher

        /**
         * Asynchronously calls PresentChannel on the ChannelDispatcher to ask
         * to the handler of `channel` to re-present it to the user.
         * You can then call tp_channel_dispatcher_present_channel_finish() to
         * get the result of the operation.
         * @param channel a #TpChannel
         * @param user_action_time the time at which user action occurred, or #TP_USER_ACTION_TIME_NOT_USER_ACTION if this presentation request is for some reason not involving user action.
         * @param callback a callback to call when the request is satisfied
         */
        present_channel_async(
            channel: Channel,
            user_action_time: number,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Finishes an async channel presentation request started using
         * tp_channel_dispatcher_present_channel_async().
         * @param result a #GAsyncResult
         * @returns %TRUE if the call succeeded, otherwise %FALSE.
         */
        present_channel_finish(result: Gio.AsyncResult): boolean;
    }

    module ChannelRequest {
        // Signal callback interfaces

        interface Succeeded {
            (): void;
        }

        interface SucceededWithChannel {
            (connection: Connection, channel: Channel): void;
        }

        // Constructor properties interface
    }

    /**
     * Requesting a channel from the channel dispatcher can take some time, so an
     * object is created in the channel dispatcher to represent each request. This
     * proxy represents one of those objects.
     *
     * Any client can call tp_cli_channel_request_call_cancel() at any time to
     * attempt to cancel the request.
     *
     * On success, the #TpChannelRequest::succeeded signal will be emitted.
     * Immediately after that, the #TpProxy::invalidated signal will be emitted,
     * with the domain %TP_DBUS_ERRORS and the error code
     * %TP_DBUS_ERROR_OBJECT_REMOVED (this is not an error condition, it merely
     * indicates that the channel request no longer exists).
     *
     * On failure, the #TpProxy::invalidated signal will be emitted with some
     * other suitable error, usually from the %TP_ERROR domain.
     *
     * If the channel dispatcher crashes or exits, the #TpProxy::invalidated
     * signal will be emitted with the domain %TP_DBUS_ERRORS and the error code
     * %TP_DBUS_ERROR_NAME_OWNER_LOST.
     *
     * Creating a #TpChannelRequest directly is deprecated: it
     * should only be created via a #TpAccountChannelRequest
     * or a #TpBaseClient.
     *
     * Since 0.16, #TpChannelRequest always has a non-%NULL #TpProxy:factory,
     * and its #TpProxy:factory will be propagated to the #TpAccount,
     * #TpConnection and #TpChannel.
     */
    class ChannelRequest extends Proxy {
        // Own properties of TelepathyGLib-0.12.ChannelRequest

        /**
         * The #TpAccount on which this request was made, not guaranteed
         * to be prepared.
         *
         * Read-only.
         */
        readonly account: Account;
        /**
         * The object implementing the #TpClientChannelFactoryInterface interface
         * that will be used to create channel proxies when the
         * #TpChannelRequest::succeeded-with-channel signal is fired.
         * This property can be changed using
         * tp_channel_request_set_channel_factory().
         *
         * If no channel factory is specified then #TpAutomaticProxyFactory is used.
         */
        channel_factory: GObject.Object;
        /**
         * The object implementing the #TpClientChannelFactoryInterface interface
         * that will be used to create channel proxies when the
         * #TpChannelRequest::succeeded-with-channel signal is fired.
         * This property can be changed using
         * tp_channel_request_set_channel_factory().
         *
         * If no channel factory is specified then #TpAutomaticProxyFactory is used.
         */
        channelFactory: GObject.Object;
        /**
         * A %G_VARIANT_TYPE_VARDICT of metadata provided by
         * the channel requester; or %NULL if #TpChannelRequest:immutable-properties
         * is not defined or if no hints have been defined.
         *
         * Read-only.
         */
        readonly hints_vardict: GLib.Variant;
        /**
         * A %G_VARIANT_TYPE_VARDICT of metadata provided by
         * the channel requester; or %NULL if #TpChannelRequest:immutable-properties
         * is not defined or if no hints have been defined.
         *
         * Read-only.
         */
        readonly hintsVardict: GLib.Variant;
        /**
         * The immutable D-Bus properties of this channel request, represented by a
         * %G_VARIANT_TYPE_VARDICT where the keys are
         * D-Bus interface name + "." + property name.
         *
         * Note that this property is set only if the immutable properties have been
         * set during the construction of the #TpChannelRequest.
         *
         * Read-only except during construction.
         */
        readonly immutable_properties_vardict: GLib.Variant;
        /**
         * The immutable D-Bus properties of this channel request, represented by a
         * %G_VARIANT_TYPE_VARDICT where the keys are
         * D-Bus interface name + "." + property name.
         *
         * Note that this property is set only if the immutable properties have been
         * set during the construction of the #TpChannelRequest.
         *
         * Read-only except during construction.
         */
        readonly immutablePropertiesVardict: GLib.Variant;
        /**
         * Either the well-known bus name (starting with #TP_CLIENT_BUS_NAME_BASE)
         * of the preferred handler for this channel request,
         * or %NULL to indicate that any handler would be acceptable.
         *
         * Read-only.
         */
        readonly preferred_handler: string;
        /**
         * Either the well-known bus name (starting with #TP_CLIENT_BUS_NAME_BASE)
         * of the preferred handler for this channel request,
         * or %NULL to indicate that any handler would be acceptable.
         *
         * Read-only.
         */
        readonly preferredHandler: string;
        /**
         * The time at which user action occurred, or
         * #TP_USER_ACTION_TIME_NOT_USER_ACTION if this channel request is
         * for some reason not involving user action.
         *
         * Read-only.
         */
        readonly user_action_time: number;
        /**
         * The time at which user action occurred, or
         * #TP_USER_ACTION_TIME_NOT_USER_ACTION if this channel request is
         * for some reason not involving user action.
         *
         * Read-only.
         */
        readonly userActionTime: number;

        // Constructors of TelepathyGLib-0.12.ChannelRequest

        static ['new'](
            bus_daemon: DBusDaemon,
            object_path: string,
            immutable_properties: GLib.HashTable<any, any>,
        ): ChannelRequest;

        // Owm methods of TelepathyGLib-0.12.ChannelRequest

        /**
         * Ensure that the known interfaces for TpChannelRequest have been set up.
         * This is done automatically when necessary, but for correct
         * overriding of library interfaces by local extensions, you should
         * call this function before calling
         * tp_proxy_or_subclass_hook_on_interface_add() with first argument
         * %TP_TYPE_CHANNEL_REQUEST.
         */
        static init_known_interfaces(): void;

        // Owm methods of TelepathyGLib-0.12.ChannelRequest

        /**
         * Return the #TpChannelRequest:hints-vardict property
         * @returns the value of #TpChannelRequest:hints-vardict
         */
        dup_hints(): GLib.Variant;
        /**
         * Return the #TpChannelRequest:immutable-properties-vardict property.
         * @returns the value of #TpChannelRequest:immutable-properties-vardict
         */
        dup_immutable_properties(): GLib.Variant;
        /**
         * Return the value of the #TpChannelRequest:account construct-only property
         * @returns the value of #TpChannelRequest:account
         */
        get_account(): Account;
        /**
         * Return the #TpChannelRequest:hints property
         * @returns the value of #TpChannelRequest:hints
         */
        get_hints(): GLib.HashTable<any, any>;
        /**
         * Return the #TpChannelRequest:immutable-properties construct-only property
         * @returns the value of #TpChannelRequest:immutable-properties
         */
        get_immutable_properties(): GLib.HashTable<any, any>;
        /**
         * return the #TpChannelRequest:preferred-handler construct-only property
         * @returns the value of #TpChannelRequest:preferred-handler
         */
        get_preferred_handler(): string;
        /**
         * return the #TpChannelRequest:user-action-time construct-only property
         * @returns the value of #TpChannelRequest:user-action-time
         */
        get_user_action_time(): number;
        /**
         * Change the value of the #TpChannelRequest:channel-factory property.
         * @param factory an object implementing the #TpClientChannelFactoryInterface interface
         */
        set_channel_factory(factory: ClientChannelFactory): void;
    }

    module ClientMessage {
        // Constructor properties interface
    }

    /**
     * Opaque structure representing a message in the Telepathy messages interface
     * (client side).
     */
    class ClientMessage extends Message {
        // Constructors of TelepathyGLib-0.12.ClientMessage

        static ['new'](): ClientMessage;

        static new_text(type: ChannelTextMessageType, text: string): ClientMessage;
    }

    module Connection {
        // Signal callback interfaces

        interface BalanceChanged {
            (balance: number, balance_scale: number, balance_currency: string): void;
        }

        interface BlockedContactsChanged {
            (added: Contact[], removed: Contact[]): void;
        }

        interface ContactListChanged {
            (added: Contact[], removed: Contact[]): void;
        }

        interface GroupRenamed {
            (old_name: string, new_name: string): void;
        }

        interface GroupsCreated {
            (added: string[]): void;
        }

        interface GroupsRemoved {
            (added: string[]): void;
        }

        // Constructor properties interface
    }

    /**
     * A proxy object for a Telepathy connection. There are no interesting
     * public struct fields.
     *
     * (Changed in 0.7.12: the layout of the structure is visible, allowing
     * subclassing.)
     */
    class Connection extends Proxy {
        // Own properties of TelepathyGLib-0.12.Connection

        /**
         * The Amount field of the Balance.AccountBalance property.
         *
         * For this property to be valid, you must first call
         * tp_proxy_prepare_async() with the feature %TP_CONNECTION_FEATURE_BALANCE.
         *
         * See Also: tp_connection_get_balance()
         */
        readonly balance: number;
        /**
         * The Currency field of the Balance.AccountBalance property.
         *
         * For this property to be valid, you must first call
         * tp_proxy_prepare_async() with the feature %TP_CONNECTION_FEATURE_BALANCE.
         *
         * See Also: tp_connection_get_balance()
         */
        readonly balance_currency: string;
        /**
         * The Currency field of the Balance.AccountBalance property.
         *
         * For this property to be valid, you must first call
         * tp_proxy_prepare_async() with the feature %TP_CONNECTION_FEATURE_BALANCE.
         *
         * See Also: tp_connection_get_balance()
         */
        readonly balanceCurrency: string;
        /**
         * The Scale field of the Balance.AccountBalance property.
         *
         * For this property to be valid, you must first call
         * tp_proxy_prepare_async() with the feature %TP_CONNECTION_FEATURE_BALANCE.
         *
         * See Also: tp_connection_get_balance()
         */
        readonly balance_scale: number;
        /**
         * The Scale field of the Balance.AccountBalance property.
         *
         * For this property to be valid, you must first call
         * tp_proxy_prepare_async() with the feature %TP_CONNECTION_FEATURE_BALANCE.
         *
         * See Also: tp_connection_get_balance()
         */
        readonly balanceScale: number;
        /**
         * The Balance.ManageCreditURI property.
         *
         * For this property to be valid, you must first call
         * tp_proxy_prepare_async() with the feature %TP_CONNECTION_FEATURE_BALANCE.
         */
        readonly balance_uri: string;
        /**
         * The Balance.ManageCreditURI property.
         *
         * For this property to be valid, you must first call
         * tp_proxy_prepare_async() with the feature %TP_CONNECTION_FEATURE_BALANCE.
         */
        readonly balanceUri: string;
        /**
         * A #GPtrArray of blocked #TpContact. Changes are notified using the
         * #TpConnection::blocked-contacts-changed signal.
         *
         * These TpContact objects have been prepared with the desired features.
         * See tp_simple_client_factory_add_contact_features() to define which
         * features needs to be prepared on them.
         *
         * For this property to be valid, you must first call
         * tp_proxy_prepare_async() with the feature
         * %TP_CONNECTION_FEATURE_CONTACT_BLOCKING.
         */
        readonly blocked_contacts: any[];
        /**
         * A #GPtrArray of blocked #TpContact. Changes are notified using the
         * #TpConnection::blocked-contacts-changed signal.
         *
         * These TpContact objects have been prepared with the desired features.
         * See tp_simple_client_factory_add_contact_features() to define which
         * features needs to be prepared on them.
         *
         * For this property to be valid, you must first call
         * tp_proxy_prepare_async() with the feature
         * %TP_CONNECTION_FEATURE_CONTACT_BLOCKING.
         */
        readonly blockedContacts: any[];
        /**
         * If true, presence subscription and publication can be changed using the
         * RequestSubscription, AuthorizePublication and RemoveContacts methods.
         *
         * Rational: link-local XMPP, presence is implicitly published to everyone in
         * the local subnet, so the user cannot control their presence publication.
         *
         * For this property to be valid, you must first call
         * tp_proxy_prepare_async() with the feature
         * %TP_CONNECTION_FEATURE_CONTACT_LIST_PROPERTIES or
         * %TP_CONNECTION_FEATURE_CONTACT_LIST.
         */
        readonly can_change_contact_list: boolean;
        /**
         * If true, presence subscription and publication can be changed using the
         * RequestSubscription, AuthorizePublication and RemoveContacts methods.
         *
         * Rational: link-local XMPP, presence is implicitly published to everyone in
         * the local subnet, so the user cannot control their presence publication.
         *
         * For this property to be valid, you must first call
         * tp_proxy_prepare_async() with the feature
         * %TP_CONNECTION_FEATURE_CONTACT_LIST_PROPERTIES or
         * %TP_CONNECTION_FEATURE_CONTACT_LIST.
         */
        readonly canChangeContactList: boolean;
        /**
         * If this property is %TRUE, contacts may be reported as abusive to the
         * server administrators by setting report_abusive to %TRUE when calling
         * tp_connection_block_contacts_async().
         *
         * For this property to be valid, you must first call
         * tp_proxy_prepare_async() with the feature
         * %TP_CONNECTION_FEATURE_CONTACT_BLOCKING.
         */
        readonly can_report_abusive: boolean;
        /**
         * If this property is %TRUE, contacts may be reported as abusive to the
         * server administrators by setting report_abusive to %TRUE when calling
         * tp_connection_block_contacts_async().
         *
         * For this property to be valid, you must first call
         * tp_proxy_prepare_async() with the feature
         * %TP_CONNECTION_FEATURE_CONTACT_BLOCKING.
         */
        readonly canReportAbusive: boolean;
        /**
         * The %TpCapabilities object representing the capabilities of this
         * connection, or NULL if we don't know yet.
         *
         * To wait for valid capability information, call tp_proxy_prepare_async()
         * with the feature %TP_CONNECTION_FEATURE_CAPABILITIES.
         */
        readonly capabilities: Capabilities;
        /**
         * This connection's connection manager name.
         */
        readonly cm_name: string;
        /**
         * This connection's connection manager name.
         */
        readonly cmName: string;
        /**
         * This connection's connection manager name.
         */
        readonly connection_manager_name: string;
        /**
         * This connection's connection manager name.
         */
        readonly connectionManagerName: string;
        /**
         * Initially %FALSE; changes to %TRUE when the connection has gone to
         * CONNECTED status, introspection has finished and it's ready for use.
         *
         * By the time this property becomes %TRUE, any extra interfaces will
         * have been set up and the #TpProxy:interfaces property will have been
         * populated.
         *
         * This is similar to %TP_CONNECTION_FEATURE_CONNECTED, except that once
         * it has changed to %TRUE, it remains %TRUE even if the connection has
         * been invalidated.
         */
        readonly connection_ready: boolean;
        /**
         * Initially %FALSE; changes to %TRUE when the connection has gone to
         * CONNECTED status, introspection has finished and it's ready for use.
         *
         * By the time this property becomes %TRUE, any extra interfaces will
         * have been set up and the #TpProxy:interfaces property will have been
         * populated.
         *
         * This is similar to %TP_CONNECTION_FEATURE_CONNECTED, except that once
         * it has changed to %TRUE, it remains %TRUE even if the connection has
         * been invalidated.
         */
        readonly connectionReady: boolean;
        /**
         * The names of all groups that currently exist. This may be a larger set than
         * the union of all #TpContact:contact-groups properties, if the connection
         * allows groups to be empty.
         *
         * This property's value is not meaningful until the
         * #TpConnection:contact-list-state property has become
         * %TP_CONTACT_LIST_STATE_SUCCESS.
         *
         * For this property to be valid, you must first call
         * tp_proxy_prepare_async() with the feature
         * %TP_CONNECTION_FEATURE_CONTACT_GROUPS.
         */
        readonly contact_groups: string[];
        /**
         * The names of all groups that currently exist. This may be a larger set than
         * the union of all #TpContact:contact-groups properties, if the connection
         * allows groups to be empty.
         *
         * This property's value is not meaningful until the
         * #TpConnection:contact-list-state property has become
         * %TP_CONTACT_LIST_STATE_SUCCESS.
         *
         * For this property to be valid, you must first call
         * tp_proxy_prepare_async() with the feature
         * %TP_CONNECTION_FEATURE_CONTACT_GROUPS.
         */
        readonly contactGroups: string[];
        /**
         * If true, presence subscriptions (in both directions) on this connection are
         * stored by the server or other infrastructure.
         *
         * If false, presence subscriptions on this connection are not stored.
         *
         * For this property to be valid, you must first call
         * tp_proxy_prepare_async() with the feature
         * %TP_CONNECTION_FEATURE_CONTACT_LIST_PROPERTIES or
         * %TP_CONNECTION_FEATURE_CONTACT_LIST.
         */
        readonly contact_list_persists: boolean;
        /**
         * If true, presence subscriptions (in both directions) on this connection are
         * stored by the server or other infrastructure.
         *
         * If false, presence subscriptions on this connection are not stored.
         *
         * For this property to be valid, you must first call
         * tp_proxy_prepare_async() with the feature
         * %TP_CONNECTION_FEATURE_CONTACT_LIST_PROPERTIES or
         * %TP_CONNECTION_FEATURE_CONTACT_LIST.
         */
        readonly contactListPersists: boolean;
        /**
         * The progress made in retrieving the contact list.
         *
         * For this property to be valid, you must first call
         * tp_proxy_prepare_async() with the feature
         * %TP_CONNECTION_FEATURE_CONTACT_LIST_PROPERTIES or
         * %TP_CONNECTION_FEATURE_CONTACT_LIST.
         */
        readonly contact_list_state: number;
        /**
         * The progress made in retrieving the contact list.
         *
         * For this property to be valid, you must first call
         * tp_proxy_prepare_async() with the feature
         * %TP_CONNECTION_FEATURE_CONTACT_LIST_PROPERTIES or
         * %TP_CONNECTION_FEATURE_CONTACT_LIST.
         */
        readonly contactListState: number;
        /**
         * True if each contact can be in at most one group; false if each contact
         * can be in many groups.
         *
         * This property cannot change after the connection has moved to the
         * %TP_CONNECTION_STATUS_CONNECTED state. Until then, its value is undefined,
         * and it may change at any time, without notification.
         *
         * For this property to be valid, you must first call
         * tp_proxy_prepare_async() with the feature
         * %TP_CONNECTION_FEATURE_CONTACT_GROUPS.
         */
        readonly disjoint_groups: boolean;
        /**
         * True if each contact can be in at most one group; false if each contact
         * can be in many groups.
         *
         * This property cannot change after the connection has moved to the
         * %TP_CONNECTION_STATUS_CONNECTED state. Until then, its value is undefined,
         * and it may change at any time, without notification.
         *
         * For this property to be valid, you must first call
         * tp_proxy_prepare_async() with the feature
         * %TP_CONNECTION_FEATURE_CONTACT_GROUPS.
         */
        readonly disjointGroups: boolean;
        /**
         * Indicates the extent to which contacts' groups can be set and stored.
         *
         * This property cannot change after the connection has moved to the
         * %TP_CONNECTION_STATUS_CONNECTED state. Until then, its value is undefined,
         * and it may change at any time, without notification.
         *
         * For this property to be valid, you must first call
         * tp_proxy_prepare_async() with the feature
         * %TP_CONNECTION_FEATURE_CONTACT_GROUPS.
         */
        readonly group_storage: number;
        /**
         * Indicates the extent to which contacts' groups can be set and stored.
         *
         * This property cannot change after the connection has moved to the
         * %TP_CONNECTION_STATUS_CONNECTED state. Until then, its value is undefined,
         * and it may change at any time, without notification.
         *
         * For this property to be valid, you must first call
         * tp_proxy_prepare_async() with the feature
         * %TP_CONNECTION_FEATURE_CONTACT_GROUPS.
         */
        readonly groupStorage: number;
        /**
         * The connection's machine-readable protocol name, such as "jabber",
         * "msn" or "local-xmpp". Recommended names for most protocols can be
         * found in the Telepathy D-Bus Interface Specification.
         */
        readonly protocol_name: string;
        /**
         * The connection's machine-readable protocol name, such as "jabber",
         * "msn" or "local-xmpp". Recommended names for most protocols can be
         * found in the Telepathy D-Bus Interface Specification.
         */
        readonly protocolName: string;
        /**
         * If true, the Message parameter to RequestSubscription is likely to be
         * significant, and user interfaces SHOULD prompt the user for a message to
         * send with the request; a message such as "I would like to add you to my
         * contact list", translated into the local user's language, might make a
         * suitable default.
         *
         * For this property to be valid, you must first call
         * tp_proxy_prepare_async() with the feature
         * %TP_CONNECTION_FEATURE_CONTACT_LIST_PROPERTIES or
         * %TP_CONNECTION_FEATURE_CONTACT_LIST.
         */
        readonly request_uses_message: boolean;
        /**
         * If true, the Message parameter to RequestSubscription is likely to be
         * significant, and user interfaces SHOULD prompt the user for a message to
         * send with the request; a message such as "I would like to add you to my
         * contact list", translated into the local user's language, might make a
         * suitable default.
         *
         * For this property to be valid, you must first call
         * tp_proxy_prepare_async() with the feature
         * %TP_CONNECTION_FEATURE_CONTACT_LIST_PROPERTIES or
         * %TP_CONNECTION_FEATURE_CONTACT_LIST.
         */
        readonly requestUsesMessage: boolean;
        /**
         * A #TpContact representing the local user on this connection,
         * or %NULL if not yet available.
         *
         * If the local user's unique identifier changes (for instance by using
         * /nick on IRC), this property will change to a different #TpContact object
         * representing the new identifier, and #GObject::notify will be emitted.
         *
         * The #TpContact object is guaranteed to have all of the features previously
         * passed to tp_simple_client_factory_add_contact_features() prepared.
         *
         * To wait for a non-%NULL self-contact (and other properties), call
         * tp_proxy_prepare_async() with the feature
         * %TP_CONNECTION_FEATURE_CONNECTED.
         */
        readonly self_contact: Contact;
        /**
         * A #TpContact representing the local user on this connection,
         * or %NULL if not yet available.
         *
         * If the local user's unique identifier changes (for instance by using
         * /nick on IRC), this property will change to a different #TpContact object
         * representing the new identifier, and #GObject::notify will be emitted.
         *
         * The #TpContact object is guaranteed to have all of the features previously
         * passed to tp_simple_client_factory_add_contact_features() prepared.
         *
         * To wait for a non-%NULL self-contact (and other properties), call
         * tp_proxy_prepare_async() with the feature
         * %TP_CONNECTION_FEATURE_CONNECTED.
         */
        readonly selfContact: Contact;
        /**
         * The %TP_HANDLE_TYPE_CONTACT handle of the local user on this connection,
         * or 0 if we don't know yet or if the connection has become invalid.
         *
         * This may change if the local user's unique identifier changes (for
         * instance by using /nick on IRC), in which case #GObject::notify will be
         * emitted.
         *
         * To wait for a valid self-handle (and other properties), call
         * tp_proxy_prepare_async() with the feature
         * %TP_CONNECTION_FEATURE_CONNECTED.
         */
        readonly self_handle: number;
        /**
         * The %TP_HANDLE_TYPE_CONTACT handle of the local user on this connection,
         * or 0 if we don't know yet or if the connection has become invalid.
         *
         * This may change if the local user's unique identifier changes (for
         * instance by using /nick on IRC), in which case #GObject::notify will be
         * emitted.
         *
         * To wait for a valid self-handle (and other properties), call
         * tp_proxy_prepare_async() with the feature
         * %TP_CONNECTION_FEATURE_CONNECTED.
         */
        readonly selfHandle: number;
        /**
         * This connection's status, or %TP_UNKNOWN_CONNECTION_STATUS if we don't
         * know yet.
         *
         * To wait for a valid status (and other properties), call
         * tp_proxy_prepare_async() with the feature %TP_CONNECTION_FEATURE_CORE.
         *
         * Since version 0.11.3, the change to status
         * %TP_CONNECTION_STATUS_CONNECTED is delayed slightly, until introspection
         * of the connection has finished.
         */
        readonly status: number;
        /**
         * To wait for a valid status (and other properties), call
         * tp_proxy_prepare_async() with the feature %TP_CONNECTION_FEATURE_CORE.
         *
         * The reason why #TpConnection:status changed to its current value,
         * or TP_CONNECTION_STATUS_REASON_NONE_SPECIFIED if unknown.
         * know yet.
         */
        readonly status_reason: number;
        /**
         * To wait for a valid status (and other properties), call
         * tp_proxy_prepare_async() with the feature %TP_CONNECTION_FEATURE_CORE.
         *
         * The reason why #TpConnection:status changed to its current value,
         * or TP_CONNECTION_STATUS_REASON_NONE_SPECIFIED if unknown.
         * know yet.
         */
        readonly statusReason: number;

        // Constructors of TelepathyGLib-0.12.Connection

        static ['new'](dbus: DBusDaemon, bus_name?: string | null, object_path?: string | null): Connection;

        // Owm methods of TelepathyGLib-0.12.Connection

        static get_feature_quark_aliasing(): GLib.Quark;
        static get_feature_quark_avatar_requirements(): GLib.Quark;
        static get_feature_quark_balance(): GLib.Quark;
        static get_feature_quark_capabilities(): GLib.Quark;
        static get_feature_quark_connected(): GLib.Quark;
        static get_feature_quark_contact_blocking(): GLib.Quark;
        static get_feature_quark_contact_groups(): GLib.Quark;
        static get_feature_quark_contact_info(): GLib.Quark;
        static get_feature_quark_contact_list(): GLib.Quark;
        static get_feature_quark_contact_list_properties(): GLib.Quark;
        static get_feature_quark_core(): GLib.Quark;
        /**
         * Ensure that the known interfaces for TpConnection have been set up.
         * This is done automatically when necessary, but for correct
         * overriding of library interfaces by local extensions, you should
         * call this function before calling
         * tp_proxy_or_subclass_hook_on_interface_add() with first argument
         * %TP_TYPE_CONNECTION.
         */
        static init_known_interfaces(): void;
        /**
         * Compares `p1` and `p2` like strcmp(). `p1` &gt; `p2` means `p1` is more available
         * than `p2`.
         *
         * The order used is: available &gt; busy &gt; away &gt; xa &gt; hidden &gt; offline &gt; error &gt;
         * unknown &gt; unset
         * @param p1 a #TpConnectionPresenceType
         * @param p2 a #TpConnectionPresenceType
         */
        static presence_type_cmp_availability(p1: ConnectionPresenceType, p2: ConnectionPresenceType): number;

        // Owm methods of TelepathyGLib-0.12.Connection

        /**
         * Subscribe to any opt-in change notifications for `interested_in`.
         *
         * For contact information, use #TpContact instead, which will call this
         * automatically.
         * @param interested_in a string identifying an interface or part of an interface  to which this connection will subscribe
         */
        add_client_interest(interested_in: string): void;
        /**
         * Add the given `contacts` to the given `group,` creating it if necessary.
         *
         * For this to work properly `self` must have interface
         * %TP_IFACE_CONNECTION_INTERFACE_CONTACT_GROUPS.
         * @param group the group to alter.
         * @param contacts An array of #TpContact objects to  include in the group.
         * @param callback a callback to call when the operation finishes
         */
        add_to_group_async(group: string, contacts: Contact[], callback?: Gio.AsyncReadyCallback<this> | null): void;
        /**
         * Finishes tp_connection_add_to_group_async()
         * @param result a #GAsyncResult
         * @returns %TRUE if the operation was successful, otherwise %FALSE.
         */
        add_to_group_finish(result: Gio.AsyncResult): boolean;
        /**
         * For each of the given `contacts,` request that the local user's presence is
         * sent to that contact, i.e. that their #TpContact:publish-state property
         * becomes %TP_SUBSCRIPTION_STATE_YES.
         *
         * For this to work properly `self` must have interface
         * %TP_IFACE_CONNECTION_INTERFACE_CONTACT_LIST.
         * @param contacts An array of #TpContact objects to  authorize
         * @param callback a callback to call when the operation finishes
         */
        authorize_publication_async(contacts: Contact[], callback?: Gio.AsyncReadyCallback<this> | null): void;
        /**
         * Finishes tp_connection_authorize_publication_async()
         * @param result a #GAsyncResult
         * @returns %TRUE if the operation was successful, otherwise %FALSE.
         */
        authorize_publication_finish(result: Gio.AsyncResult): boolean;
        /**
         * Binds the :status of `self` to the boolean property of another
         * object using a #GBinding such that the `target_property` will be set to
         * %TRUE when `self` is connected (and `invert` is %FALSE).
         *
         * `target_property` will be synchronised immediately (%G_BINDING_SYNC_CREATE).
         * `invert` can be interpreted as analogous to %G_BINDING_INVERT_BOOLEAN.
         *
         * For instance, this function can be used to bind the GtkWidget:sensitive
         * property to only make a widget sensitive when the account is connected.
         *
         * See g_object_bind_property() for more information.
         * @param target the target #GObject
         * @param target_property the property on @target to bind (must be %G_TYPE_BOOLEAN)
         * @param invert %TRUE if you wish to invert the value of @target_property   (i.e. %FALSE if connected)
         * @returns the #GBinding instance representing the binding   between the @self and the @target. The binding is released whenever the   #GBinding reference count reaches zero.
         */
        bind_connection_status_to_property(
            target: any | null,
            target_property: string,
            invert: boolean,
        ): GObject.Binding;
        /**
         * Direct the server to block `contacts`.
         * @param contacts An array of #TpContact objects to  block
         * @param report_abusive If %TRUE, report these contacts as abusive to the server administrators as well as blocking them. See #TpConnection:can-report-abusive to discover whether reporting abuse is supported. If #TpConnection:can-report-abusive is %FALSE, this parameter will be ignored.
         * @param callback a callback to call when the operation finishes
         */
        block_contacts_async(
            contacts: Contact[],
            report_abusive: boolean,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Finishes tp_connection_block_contacts_async()
         * @param result a #GAsyncResult
         * @returns %TRUE if the operation was successful, otherwise %FALSE.
         */
        block_contacts_finish(result: Gio.AsyncResult): boolean;
        can_set_contact_alias(): boolean;
        /**
         * Disconnect the connection.
         *
         * This method is intended for use by AccountManager implementations,
         * such as Mission Control. To disconnect a connection managed by an
         * AccountManager, either use tp_account_request_presence_async()
         * or tp_account_set_enabled_async(), depending whether the intention is
         * to put the account offline temporarily, or disable it longer-term.
         * @param callback a callback to call when the request is satisfied
         */
        disconnect_async(callback?: Gio.AsyncReadyCallback<this> | null): void;
        /**
         * Interpret the result of tp_connection_disconnect_async().
         * @param result a #GAsyncResult
         * @returns %TRUE if the call was successful, otherwise %FALSE
         */
        disconnect_finish(result: Gio.AsyncResult): boolean;
        /**
         * Create a #TpContact object and make any asynchronous method calls necessary
         * to ensure that all the features specified in `features` are ready for use
         * (if they are supported at all).
         *
         * It is not an error to put features in `features` even if the connection
         * manager doesn't support them - users of this method should have a static
         * list of features they would like to use if possible, and use it for all
         * connection managers.
         * @param id A strings representing the desired contact by its  identifier in the IM protocol (an XMPP JID, SIP URI, MSN Passport,  AOL screen-name etc.)
         * @param features An array of features  that must be ready for use (if supported)  before the callback is called (may be %NULL if @n_features is 0)
         * @param callback A user callback to call when the contact is ready
         */
        dup_contact_by_id_async(
            id: string,
            features?: ContactFeature[] | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Finishes tp_connection_dup_contact_by_id_async().
         * @param result a #GAsyncResult
         * @returns a #TpContact or %NULL on error.
         */
        dup_contact_by_id_finish(result: Gio.AsyncResult): Contact;
        /**
         * Try to return an existing contact object or create a new contact object
         * immediately.
         *
         * If tp_connection_has_immortal_handles() would return %TRUE and
         * `identifier` is non-%NULL, this function always succeeds.
         *
         * On connections without immortal handles, it is not possible to guarantee
         * that `handle` remains valid without making asynchronous D-Bus calls, so
         * it might be necessary to delay processing of messages or other events
         * until a #TpContact can be constructed asynchronously, for instance by using
         * tp_connection_get_contacts_by_id().
         *
         * Similarly, if `identifier` is %NULL, it might not be possible to find the
         * identifier for `handle` without making asynchronous D-Bus calls, so
         * it might be necessary to delay processing of messages or other events
         * until a #TpContact can be constructed asynchronously, for instance by using
         * tp_connection_get_contacts_by_handle().
         * @param handle a handle of type %TP_HANDLE_TYPE_CONTACT
         * @param identifier the normalized identifier (XMPP JID, etc.)  corresponding to @handle, or %NULL if not known
         * @returns a contact or %NULL
         */
        dup_contact_if_possible(handle: Handle, identifier: string): Contact;
        /**
         * Returns a newly allocated #GList of supported contact info fields for this
         * connection. The list must be freed with tp_contact_info_spec_list_free().
         *
         * To wait for valid supported fields, call tp_proxy_prepare_async() with the
         * feature %TP_CONNECTION_FEATURE_CONTACT_INFO.
         *
         * This property cannot change after `self` goes to the Connected state.
         * @returns a #GList of #TpContactInfoFieldSpec struct, or %NULL if the feature is not  yet prepared or the connection doesn't have the necessary properties.
         */
        dup_contact_info_supported_fields(): ContactInfoFieldSpec[];
        /**
         * Retrieves the user's contact list. In general, blocked contacts are not
         * included in this list. The #TpContact objects returned are guaranteed to
         * have all of the features previously passed to
         * tp_simple_client_factory_add_contact_features() prepared.
         *
         * Before calling this method, you must first call tp_proxy_prepare_async() with
         * the %TP_CONNECTION_FEATURE_CONTACT_LIST feature, and verify that
         * #TpConnection:contact-list-state is set to %TP_CONTACT_LIST_STATE_SUCCESS.
         * @returns a new #GPtrArray of #TpContact. Use g_ptr_array_unref() when done.
         */
        dup_contact_list(): Contact[];
        /**
         * If the connection has disconnected, return the D-Bus error name with which
         * it disconnected (in particular, this is %TP_ERROR_STR_CANCELLED if it was
         * disconnected by a user request).
         *
         * Otherwise, return %NULL, without altering `details`.
         * @returns a D-Bus error name, or %NULL.
         */
        dup_detailed_error_vardict(): string | null;
        /**
         * Return the the #TpAccount associated with this connection. Will return %NULL
         * if `self` was not acquired from a #TpAccount via tp_account_get_connection(),
         * or if the account object got finalized in the meantime (#TpConnection does
         * not keep a strong ref on its #TpAccount).
         * @returns the account associated with this connection, or %NULL.
         */
        get_account(): Account;
        /**
         * To wait for valid avatar requirements, call tp_proxy_prepare_async()
         * with the feature %TP_CONNECTION_FEATURE_AVATAR_REQUIREMENTS.
         *
         * This property cannot change after `self` goes to the Connected state.
         * @returns a #TpAvatarRequirements struct, or %NULL if the  feature is not yet prepared or the connection doesn't have the necessary  properties.
         */
        get_avatar_requirements(): AvatarRequirements;
        /**
         * If `self` has a valid account balance, returns %TRUE and sets the variables
         * pointed to by `balance,` `scale` and `currency` to the appropriate fields
         * of the Balance.AccountBalance property.
         *
         * The monetary value of the balance is expressed as a fixed-point number,
         * `balance,` with a decimal scale defined by `scale;` for instance a `balance`
         * of 1234 with `scale` of 2 represents a value of "12.34" in the currency
         * represented by `currency`.
         *
         * Requires %TP_CONNECTION_FEATURE_BALANCE to be prepared.
         * @returns %TRUE if the balance is valid (and the values set), %FALSE if the   balance is invalid.
         */
        get_balance(): boolean;
        /**
         * The value of Balance.ManageCreditURI.
         *
         * Requires %TP_CONNECTION_FEATURE_BALANCE to be prepared.
         * @returns the #TpConnection:balance-uri property.
         */
        get_balance_uri(): string;
        /**
         * &lt;!-- --&gt;
         * @returns the value of #TpConnection:blocked-contacts
         */
        get_blocked_contacts(): Contact[];
        /**
         * &lt;!-- --&gt;
         * @returns the value of #TpConnection:can-change-contact-list property
         */
        get_can_change_contact_list(): boolean;
        /**
         * &lt;!-- --&gt;
         * @returns the same #TpCapabilities as the #TpConnection:capabilities property
         */
        get_capabilities(): Capabilities;
        /**
         * &lt;!-- --&gt;
         * @returns the same as the #TpConnection:cm-name property
         */
        get_cm_name(): string;
        /**
         * &lt;!-- --&gt;
         * @returns the same as the #TpConnection:connection-manager-name property
         */
        get_connection_manager_name(): string;
        /**
         * Return (via a callback) any number of attributes of the given handles.
         *
         * Since telepathy-glib version 0.13.8,
         * the handles will remain valid until `connection` becomes invalid
         * (signalled by #TpProxy::invalidated). In earlier versions, if `hold`
         * was %TRUE, the callback would hold a reference to them which could be
         * released with tp_connection_unref_handles().
         *
         * This is a thin wrapper around the GetContactAttributes D-Bus method, and
         * should be used in preference to
         * tp_cli_connection_interface_contacts_call_get_contact_attributes(); mixing this
         * function, tp_connection_hold_handles(), tp_connection_unref_handles(), and
         * #TpContact with direct use of the RequestHandles, HoldHandles and
         * GetContactAttributes D-Bus methods is unwise, as #TpConnection and
         * #TpContact perform client-side reference counting of handles.
         * The #TpContact API provides a higher-level abstraction which should
         * usually be used instead.
         *
         * `callback` will later be called with the attributes of those of the given
         * handles that were valid. Invalid handles are simply omitted from the
         * parameter to the callback.
         *
         * If `hold` is %TRUE, the `callback` is given one reference to each handle
         * that appears as a key in the callback's `attributes` parameter.
         * @param timeout_ms the timeout in milliseconds, or -1 to use the default
         * @param handles an array of handles
         * @param interfaces a #GStrv of interfaces
         * @param hold if %TRUE, the callback will hold one reference to each valid handle
         * @param callback called on success or  failure (unless @weak_object has become unreferenced)
         * @param weak_object if not %NULL, an object to be weakly referenced: if it is  destroyed, @callback will not be called
         */
        get_contact_attributes(
            timeout_ms: number,
            handles: Handle[],
            interfaces: string,
            hold: boolean,
            callback: GObject.Callback,
            weak_object: GObject.Object,
        ): void;
        /**
         * &lt;!-- --&gt;
         * @returns the value of  #TpConnection:contact-groups
         */
        get_contact_groups(): string[];
        /**
         * Returns the flags describing how contact info (vCards) behaves on this
         * connection
         *
         * To wait for valid contact info flags, call tp_proxy_prepare_async()
         * with the feature %TP_CONNECTION_FEATURE_CONTACT_INFO.
         *
         * This property cannot change after `self` goes to the Connected state.
         * @returns a set of #TpContactInfoFlags
         */
        get_contact_info_flags(): ContactInfoFlags;
        /**
         * Returns a newly allocated #GList of supported contact info fields for this
         * connection. The list must be freed with g_list_free() after used.
         *
         * Note that the #TpContactInfoFieldSpec&lt;!-- --&gt;s in the returned #GList are not
         * dupped before returning from this function. One could copy every item in the
         * list using tp_contact_info_field_spec_copy().
         *
         * To wait for valid supported fields, call tp_proxy_prepare_async() with the
         * feature %TP_CONNECTION_FEATURE_CONTACT_INFO.
         *
         * This property cannot change after `self` goes to the Connected state.
         * @returns a #GList of #TpContactInfoFieldSpec struct, or %NULL if the feature is not  yet prepared or the connection doesn't have the necessary properties.
         */
        get_contact_info_supported_fields(): ContactInfoFieldSpec[];
        /**
         * Return (via a callback) the contacts on the contact list and any number of
         * their attributes.
         *
         * Since telepathy-glib version 0.13.8,
         * the handles will remain valid until `connection` becomes invalid
         * (signalled by #TpProxy::invalidated). In earlier versions, if `hold`
         * was %TRUE, the callback would hold a reference to them which could be
         * released with tp_connection_unref_handles().
         *
         * This is a thin wrapper around the RequestContactList D-Bus method,
         * and should be used in preference to lower-level functions; it is similar
         * to tp_connection_get_contact_attributes().
         *
         * The #TpContact API provides a higher-level abstraction which should
         * usually be used instead.
         *
         * If `hold` is %TRUE, the `callback` is given a reference to each handle
         * that appears as a key in the callback's `attributes` parameter.
         * @param timeout_ms the timeout in milliseconds (using a large timeout is  recommended)
         * @param interfaces a #GStrv of interfaces
         * @param hold if %TRUE, the callback will hold one reference to each handle it  receives
         * @param callback called on success or  failure (unless @weak_object has become unreferenced)
         * @param weak_object if not %NULL, an object to be weakly referenced: if it is  destroyed, @callback will not be called
         */
        get_contact_list_attributes(
            timeout_ms: number,
            interfaces: string,
            hold: boolean,
            callback: GObject.Callback,
            weak_object: GObject.Object,
        ): void;
        /**
         * &lt;!-- --&gt;
         * @returns the value of #TpConnection:contact-list-persists property
         */
        get_contact_list_persists(): boolean;
        /**
         * &lt;!-- --&gt;
         * @returns the value of #TpConnection:contact-list-state property
         */
        get_contact_list_state(): ContactListState;
        /**
         * Create a number of #TpContact objects and make asynchronous method calls
         * to hold their handles and ensure that all the features specified in
         * `features` are ready for use (if they are supported at all).
         *
         * It is not an error to put features in `features` even if the connection
         * manager doesn't support them - users of this method should have a static
         * list of features they would like to use if possible, and use it for all
         * connection managers.
         * @param handles An array of handles  of type %TP_HANDLE_TYPE_CONTACT representing the desired contacts
         * @param features An array of features that  must be ready for use (if supported) before the callback is called (may  be %NULL if @n_features is 0)
         * @param callback A user callback to call when the contacts are ready
         * @param weak_object An object to pass to the callback, which will be  weakly referenced; if this object is destroyed, the operation will be  cancelled
         */
        get_contacts_by_handle(
            handles: number[],
            features: number[] | null,
            callback: ConnectionContactsByHandleCb,
            weak_object?: GObject.Object | null,
        ): void;
        /**
         * Create a number of #TpContact objects and make asynchronous method calls
         * to obtain their handles and ensure that all the features specified in
         * `features` are ready for use (if they are supported at all).
         *
         * It is not an error to put features in `features` even if the connection
         * manager doesn't support them - users of this method should have a static
         * list of features they would like to use if possible, and use it for all
         * connection managers.
         * @param ids An array of strings representing  the desired contacts by their  identifiers in the IM protocol (XMPP JIDs, SIP URIs, MSN Passports,  AOL screen-names etc.)
         * @param features An array of features  that must be ready for use (if supported)  before the callback is called (may be %NULL if @n_features is 0)
         * @param callback A user callback to call when the contacts are ready
         * @param weak_object An object to pass to the callback, which will  be weakly referenced; if this object is destroyed, the operation will be  cancelled
         */
        get_contacts_by_id(
            ids: string[],
            features: ContactFeature[] | null,
            callback: ConnectionContactsByIdCb,
            weak_object?: GObject.Object | null,
        ): void;
        /**
         * If the connection has disconnected, return the D-Bus error name with which
         * it disconnected (in particular, this is %TP_ERROR_STR_CANCELLED if it was
         * disconnected by a user request).
         *
         * Otherwise, return %NULL, without altering `details`.
         * @returns a D-Bus error name, or %NULL.
         */
        get_detailed_error(): string | null;
        /**
         * &lt;!-- --&gt;
         * @returns the value of #TpConnection:disjoint-groups
         */
        get_disjoint_groups(): boolean;
        /**
         * &lt;!-- --&gt;
         * @returns the value of #TpConnection:group-storage
         */
        get_group_storage(): ContactMetadataStorageType;
        /**
         * &lt;!-- --&gt;
         * @returns the same as the #TpConnection:protocol-name property
         */
        get_protocol_name(): string;
        /**
         * &lt;!-- --&gt;
         * @returns the value of #TpConnection:request-uses-message property
         */
        get_request_uses_message(): boolean;
        /**
         * Return a #TpContact representing the local user on this connection.
         *
         * The returned object is not necessarily valid after the main loop is
         * re-entered; ref it with g_object_ref() if you want to keep it.
         * @returns the value of the TpConnection:self-contact  property, which may be %NULL
         */
        get_self_contact(): Contact;
        /**
         * Return the %TP_HANDLE_TYPE_CONTACT handle of the local user on this
         * connection, or 0 if the self-handle is not known yet or the connection
         * has become invalid (the TpProxy::invalidated signal).
         *
         * The returned handle is not necessarily valid forever (the
         * notify::self-handle signal will be emitted if it changes, which can happen
         * on protocols such as IRC). Construct a #TpContact object if you want to
         * track the local user's identifier in the protocol, or other information
         * like their presence status, over time.
         * @returns the value of the TpConnection:self-handle property
         */
        get_self_handle(): Handle;
        /**
         * If `reason` is not %NULL it is set to the reason why "status" changed to its
         * current value, or %TP_CONNECTION_STATUS_REASON_NONE_SPECIFIED if unknown.
         * @returns This connection's status, or %TP_UNKNOWN_CONNECTION_STATUS if we don't know yet.
         */
        get_status(): ConnectionStatus;
        /**
         * Return %TRUE if this connection is known to not destroy handles
         * (#TpHandle) until it disconnects.
         *
         * On such connections, if you know that a handle maps to a particular
         * identifier now, then you can rely on that handle mapping to that
         * identifier for the whole lifetime of the connection.
         * @returns %TRUE if handles last as long as the connection itself
         */
        has_immortal_handles(): boolean;
        /**
         * Hold (ensure a reference to) the given handles, if they are valid.
         *
         * If they are valid, the callback will later be called with the given
         * handles; if not all of them are valid, the callback will be called with
         * an error.
         *
         * This function, along with tp_connection_unref_handles(),
         * tp_connection_get_contact_attributes() and #TpContact, keeps a client-side
         * reference count of handles; you should not use the RequestHandles,
         * HoldHandles and GetContactAttributes D-Bus methods directly as well as these
         * functions.
         * @param timeout_ms the timeout in milliseconds, or -1 to use the default
         * @param handle_type the handle type
         * @param handles an array of handles
         * @param callback called on success or failure (unless @weak_object has become  unreferenced)
         * @param weak_object if not %NULL, an object to be weakly referenced: if it is  destroyed, @callback will not be called
         */
        hold_handles(
            timeout_ms: number,
            handle_type: HandleType,
            handles: Handle[],
            callback: ConnectionHoldHandlesCb,
            weak_object: GObject.Object,
        ): void;
        /**
         * If the object path of `connection` is in the correct form, set
         * `protocol` and `cm_name,` return TRUE. Otherwise leave them unchanged and
         * return FALSE.
         * @returns TRUE if the object path was correctly parsed, FALSE otherwise.
         */
        parse_object_path(): boolean;
        /**
         * Requests to refresh the #TpContact:contact-info property on each contact from
         * `contacts,` requesting it from the network if an up-to-date version is not
         * cached locally. "notify::contact-info" will be emitted when the contact's
         * information are updated.
         *
         * If %TP_CONTACT_FEATURE_CONTACT_INFO is not yet set on a contact, it will be
         * set before its property gets updated.
         * @param contacts An array of #TpContact objects  associated with @self
         */
        refresh_contact_info(contacts: Contact[]): void;
        /**
         * Remove the given `contacts` from the contact list entirely. It is
         * protocol-dependent whether this works, and under which circumstances.
         *
         * For this to work properly `self` must have interface
         * %TP_IFACE_CONNECTION_INTERFACE_CONTACT_LIST.
         * @param contacts An array of #TpContact objects to  remove
         * @param callback a callback to call when the operation finishes
         */
        remove_contacts_async(contacts: Contact[], callback?: Gio.AsyncReadyCallback<this> | null): void;
        /**
         * Finishes tp_connection_remove_contacts_async()
         * @param result a #GAsyncResult
         * @returns %TRUE if the operation was successful, otherwise %FALSE.
         */
        remove_contacts_finish(result: Gio.AsyncResult): boolean;
        /**
         * Remove the given `contacts` from the given `group`. If there are no members
         * left in the group afterwards, the group MAY itself be removed.
         *
         * For this to work properly `self` must have interface
         * %TP_IFACE_CONNECTION_INTERFACE_CONTACT_GROUPS.
         * @param group the group to alter.
         * @param contacts An array of #TpContact objects to  remove from the group.
         * @param callback a callback to call when the operation finishes
         */
        remove_from_group_async(
            group: string,
            contacts: Contact[],
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Finishes tp_connection_remove_from_group_async()
         * @param result a #GAsyncResult
         * @returns %TRUE if the operation was successful, otherwise %FALSE.
         */
        remove_from_group_finish(result: Gio.AsyncResult): boolean;
        /**
         * Remove all members from the given group, then remove the group itself.
         *
         * For this to work properly `self` must have interface
         * %TP_IFACE_CONNECTION_INTERFACE_CONTACT_GROUPS.
         * @param group the group to remove.
         * @param callback a callback to call when the operation finishes
         */
        remove_group_async(group: string, callback?: Gio.AsyncReadyCallback<this> | null): void;
        /**
         * Finishes tp_connection_remove_group_async()
         * @param result a #GAsyncResult
         * @returns %TRUE if the operation was successful, otherwise %FALSE.
         */
        remove_group_finish(result: Gio.AsyncResult): boolean;
        /**
         * Rename the given `old_name`.
         *
         * On protocols where groups behave like tags, this is an API short-cut for
         * adding all of the group's members to a group with the new name, then removing
         * the old group.
         *
         * For this to work properly `self` must have interface
         * %TP_IFACE_CONNECTION_INTERFACE_CONTACT_GROUPS.
         * @param old_name the group to rename
         * @param new_name the new name for the group
         * @param callback a callback to call when the operation finishes
         */
        rename_group_async(old_name: string, new_name: string, callback?: Gio.AsyncReadyCallback<this> | null): void;
        /**
         * Finishes tp_connection_rename_group_async()
         * @param result a #GAsyncResult
         * @returns %TRUE if the operation was successful, otherwise %FALSE.
         */
        rename_group_finish(result: Gio.AsyncResult): boolean;
        /**
         * Request the handles corresponding to the given identifiers, and if they
         * are valid, hold (ensure a reference to) the corresponding handles.
         *
         * If they are valid, the callback will later be called with the given
         * handles; if not all of them are valid, the callback will be called with
         * an error.
         * @param timeout_ms the timeout in milliseconds, or -1 to use the default
         * @param handle_type the handle type
         * @param ids an array of string identifiers for which  handles are required, terminated by %NULL (must not be %NULL or empty)
         * @param callback called on success or failure (unless @weak_object has become  unreferenced)
         * @param weak_object if not %NULL, an object to be weakly referenced: if it is  destroyed, @callback will not be called
         */
        request_handles(
            timeout_ms: number,
            handle_type: HandleType,
            ids: string[],
            callback: ConnectionRequestHandlesCb,
            weak_object: GObject.Object,
        ): void;
        /**
         * Request that the given `contacts` allow the local user to subscribe to their
         * presence, i.e. that their #TpContact:subscribe-state property becomes
         * %TP_SUBSCRIPTION_STATE_YES.
         *
         * For this to work properly `self` must have interface
         * %TP_IFACE_CONNECTION_INTERFACE_CONTACT_LIST.
         * @param contacts An array of #TpContact objects to whom  requests are to be sent.
         * @param message an optional plain-text message from the user, to send to those  @contacts with the subscription request.
         * @param callback a callback to call when the operation finishes
         */
        request_subscription_async(
            contacts: Contact[],
            message: string,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Finishes tp_connection_request_subscription_async()
         * @param result a #GAsyncResult
         * @returns %TRUE if the operation was successful, otherwise %FALSE.
         */
        request_subscription_finish(result: Gio.AsyncResult): boolean;
        /**
         * Requests an asynchronous set of the contact info of `self`. When
         * the operation is finished, `callback` will be called. You can then call
         * tp_connection_set_contact_info_finish() to get the result of the operation.
         *
         * This method should not be expected to succeed if the result of
         * tp_connection_get_contact_info_flags() does not include
         * %TP_CONTACT_INFO_FLAG_CAN_SET.
         * @param info a #GList of  #TpContactInfoField
         * @param callback a callback to call when the request is satisfied
         */
        set_contact_info_async(info: ContactInfoField[], callback?: Gio.AsyncReadyCallback<this> | null): void;
        /**
         * Finishes an async set of `self` info.
         * @param result a #GAsyncResult
         * @returns %TRUE if the request call was successful, otherwise %FALSE
         */
        set_contact_info_finish(result: Gio.AsyncResult): boolean;
        /**
         * Add the given `contacts` to the given `group` (creating it if necessary), and
         * remove all other members.
         *
         * For this to work properly `self` must have interface
         * %TP_IFACE_CONNECTION_INTERFACE_CONTACT_GROUPS.
         * @param group the group to alter.
         * @param contacts An array of #TpContact objects members  for the group. If this set is empty, this method MAY remove the group.
         * @param callback a callback to call when the operation finishes
         */
        set_group_members_async(
            group: string,
            contacts: Contact[],
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Finishes tp_connection_set_group_members_async()
         * @param result a #GAsyncResult
         * @returns %TRUE if the operation was successful, otherwise %FALSE.
         */
        set_group_members_finish(result: Gio.AsyncResult): boolean;
        /**
         * Direct the server to unblock `contacts`.
         * @param contacts An array of #TpContact objects to  block
         * @param callback a callback to call when the operation finishes
         */
        unblock_contacts_async(contacts: Contact[], callback?: Gio.AsyncReadyCallback<this> | null): void;
        /**
         * Finishes tp_connection_unblock_contacts_async()
         * @param result a #GAsyncResult
         * @returns %TRUE if the operation was successful, otherwise %FALSE.
         */
        unblock_contacts_finish(result: Gio.AsyncResult): boolean;
        /**
         * Attempt to set the given `contacts'` #TpContact:publish-state property to
         * %TP_SUBSCRIPTION_STATE_NO, i.e. stop sending presence to them.
         *
         * For this to work properly `self` must have interface
         * %TP_IFACE_CONNECTION_INTERFACE_CONTACT_LIST.
         * @param contacts An array of #TpContact objects to  remove
         * @param callback a callback to call when the operation finishes
         */
        unpublish_async(contacts: Contact[], callback?: Gio.AsyncReadyCallback<this> | null): void;
        /**
         * Finishes tp_connection_unpublish_async()
         * @param result a #GAsyncResult
         * @returns %TRUE if the operation was successful, otherwise %FALSE.
         */
        unpublish_finish(result: Gio.AsyncResult): boolean;
        /**
         * Do nothing. In versions of telepathy-glib prior to 0.13.8,
         * this released a reference to the handles in `handles`.
         * @param handle_type a handle type
         * @param handles an array of @n_handles handles
         */
        unref_handles(handle_type: HandleType, handles: Handle[]): void;
        /**
         * Attempt to set the given `contacts'` #TpContact:subscribe-state property to
         * %TP_SUBSCRIPTION_STATE_NO, i.e. stop receiving their presence.
         *
         * For this to work properly `self` must have interface
         * %TP_IFACE_CONNECTION_INTERFACE_CONTACT_LIST.
         * @param contacts An array of #TpContact objects to  remove
         * @param callback a callback to call when the operation finishes
         */
        unsubscribe_async(contacts: Contact[], callback?: Gio.AsyncReadyCallback<this> | null): void;
        /**
         * Finishes tp_connection_unsubscribe_async()
         * @param result a #GAsyncResult
         * @returns %TRUE if the operation was successful, otherwise %FALSE.
         */
        unsubscribe_finish(result: Gio.AsyncResult): boolean;
        /**
         * Given several #TpContact objects, make asynchronous method calls
         * ensure that all the features specified in `features` are ready for use
         * (if they are supported at all).
         *
         * It is not an error to put features in `features` even if the connection
         * manager doesn't support them - users of this method should have a static
         * list of features they would like to use if possible, and use it for all
         * connection managers.
         * @param contacts An array of #TpContact objects  associated with @self
         * @param features An array of features that must be  ready for use (if supported) before the callback is called
         * @param callback A user callback to call when the contacts are ready
         * @param weak_object An object to pass to the callback, which will be  weakly referenced; if this object is destroyed, the operation will be  cancelled
         */
        upgrade_contacts(
            contacts: Contact[],
            features: ContactFeature[],
            callback: ConnectionUpgradeContactsCb,
            weak_object?: GObject.Object | null,
        ): void;
        /**
         * Given several #TpContact objects, make asynchronous method calls
         * ensure that all the features specified in `features` are ready for use
         * (if they are supported at all).
         *
         * It is not an error to put features in `features` even if the connection
         * manager doesn't support them - users of this method should have a static
         * list of features they would like to use if possible, and use it for all
         * connection managers.
         * @param contacts An array of #TpContact objects  associated with @self
         * @param features An array of features that must be  ready for use (if supported) before the callback is called
         * @param callback A user callback to call when the contacts are ready
         */
        upgrade_contacts_async(
            contacts: Contact[],
            features: ContactFeature[],
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Finishes tp_connection_upgrade_contacts_async().
         * @param result a #GAsyncResult
         * @returns %TRUE on success, %FALSE otherwise.
         */
        upgrade_contacts_finish(result: Gio.AsyncResult): boolean;
    }

    module ConnectionManager {
        // Signal callback interfaces

        interface Activated {
            (): void;
        }

        interface Exited {
            (): void;
        }

        interface GotInfo {
            (source: number): void;
        }

        // Constructor properties interface
    }

    /**
     * A proxy object for a Telepathy connection manager.
     *
     * This might represent a connection manager which is currently running
     * (in which case it can be introspected) or not (in which case its
     * capabilities can be read from .manager files in the filesystem).
     * Accordingly, this object never emits #TpProxy::invalidated unless all
     * references to it are discarded.
     *
     * Various fields and methods on this object do not work until
     * %TP_CONNECTION_MANAGER_FEATURE_CORE is prepared. Use
     * tp_proxy_prepare_async() to wait for this to happen.
     *
     * Since 0.19.1, accessing the fields of this struct is deprecated,
     * and they are no longer documented here.
     * Use the accessors tp_connection_manager_get_name(),
     * tp_connection_manager_is_running(),
     * tp_connection_manager_dup_protocols(),
     * tp_connection_manager_get_info_source()
     * and the #TpConnectionManager:always-introspect property instead.
     */
    class ConnectionManager extends Proxy {
        // Own properties of TelepathyGLib-0.12.ConnectionManager

        /**
         * If %TRUE, always introspect the connection manager as it comes online,
         * even if we already have its info from a .manager file. Default %FALSE.
         */
        always_introspect: boolean;
        /**
         * If %TRUE, always introspect the connection manager as it comes online,
         * even if we already have its info from a .manager file. Default %FALSE.
         */
        alwaysIntrospect: boolean;
        /**
         * The name of the connection manager, e.g. "gabble" (read-only).
         */
        readonly cm_name: string;
        /**
         * The name of the connection manager, e.g. "gabble" (read-only).
         */
        readonly cmName: string;
        /**
         * The name of the connection manager, e.g. "gabble" (read-only).
         */
        readonly connection_manager: string;
        /**
         * The name of the connection manager, e.g. "gabble" (read-only).
         */
        readonly connectionManager: string;
        /**
         * Where we got the current information on supported protocols
         * (a #TpCMInfoSource).
         *
         * Since 0.7.26, the #GObject::notify signal is emitted for this
         * property.
         *
         * (Note that this is of type %G_TYPE_UINT, not %TP_TYPE_CM_INFO_SOURCE,
         * for historical reasons.)
         */
        readonly info_source: number;
        /**
         * Where we got the current information on supported protocols
         * (a #TpCMInfoSource).
         *
         * Since 0.7.26, the #GObject::notify signal is emitted for this
         * property.
         *
         * (Note that this is of type %G_TYPE_UINT, not %TP_TYPE_CM_INFO_SOURCE,
         * for historical reasons.)
         */
        readonly infoSource: number;
        /**
         * The absolute path of the .manager file. If set to %NULL (the default),
         * the XDG data directories will be searched for a .manager file of the
         * correct name.
         *
         * If set to the empty string, no .manager file will be read.
         */
        manager_file: string;
        /**
         * The absolute path of the .manager file. If set to %NULL (the default),
         * the XDG data directories will be searched for a .manager file of the
         * correct name.
         *
         * If set to the empty string, no .manager file will be read.
         */
        managerFile: string;

        // Constructors of TelepathyGLib-0.12.ConnectionManager

        static ['new'](dbus: DBusDaemon, name: string, manager_filename?: string | null): ConnectionManager;

        // Owm methods of TelepathyGLib-0.12.ConnectionManager

        /**
         * Check that the given string is a valid connection manager name, i.e. that
         * it consists entirely of ASCII letters, digits and underscores, and starts
         * with a letter.
         * @param name a possible connection manager name
         */
        static check_valid_name(name: string): boolean;
        /**
         * Check that the given string is a valid protocol name, i.e. that
         * it consists entirely of ASCII letters, digits and hyphen/minus, and starts
         * with a letter.
         * @param name a possible protocol name
         */
        static check_valid_protocol_name(name: string): boolean;
        static get_feature_quark_core(): GLib.Quark;
        /**
         * Ensure that the known interfaces for TpConnectionManager have been set up.
         * This is done automatically when necessary, but for correct
         * overriding of library interfaces by local extensions, you should
         * call this function before calling
         * tp_proxy_or_subclass_hook_on_interface_add() with first argument
         * %TP_TYPE_CONNECTION_MANAGER.
         */
        static init_known_interfaces(): void;

        // Owm methods of TelepathyGLib-0.12.ConnectionManager

        /**
         * Returns a list of protocol names supported by this connection manager.
         * These are the internal protocol names used by the Telepathy specification
         * (e.g. "jabber" and "msn"), rather than user-visible names in any particular
         * locale.
         *
         * If this function is called before the connection manager information has
         * been obtained, the result is always %NULL. Use
         * tp_proxy_prepare_async() to wait for this.
         *
         * The result is copied and must be freed by the caller, but it is not
         * necessarily still true after the main loop is re-entered.
         * @returns a #GStrv of protocol names
         */
        dup_protocol_names(): string[];
        /**
         * Return objects representing all protocols supported by this connection
         * manager.
         *
         * If this function is called before the connection manager information has
         * been obtained, the result is always %NULL. Use tp_proxy_prepare_async()
         * to wait for this.
         *
         * The caller must free the list, for instance with
         * &lt;literal&gt;g_list_free_full (l, g_object_unref)&lt;/literal&gt;.
         * @returns a list  of #TpProtocol objects representing the protocols supported by @self,  owned by the caller
         */
        dup_protocols(): Protocol[];
        /**
         * If protocol and parameter information has been obtained from the connection
         * manager, return %TP_CM_INFO_SOURCE_LIVE; if it has been obtained from the
         * cache in the .manager file, return %TP_CM_INFO_SOURCE_FILE. If this
         * information has not yet been obtained, or obtaining it failed, return
         * %TP_CM_INFO_SOURCE_NONE.
         *
         * This may increase at any time that the main loop is running; the
         * #GObject::notify signal is emitted.
         * @returns the value of the #TpConnectionManager:info-source property
         */
        get_info_source(): CMInfoSource;
        /**
         * Return the internal name of this connection manager in the Telepathy
         * D-Bus API, e.g. "gabble" or "haze". This is often the name of the binary
         * without the "telepathy-" prefix.
         *
         * The returned string is valid as long as `self` is. Copy it with g_strdup()
         * if a longer lifetime is required.
         * @returns the #TpConnectionManager:cm-name property
         */
        get_name(): string;
        /**
         * Returns a structure representing a protocol, or %NULL if this connection
         * manager does not support the specified protocol.
         *
         * Since 0.11.11, you can get a #GObject version with more
         * functionality by calling tp_connection_manager_get_protocol_object().
         *
         * If this function is called before the connection manager information has
         * been obtained, the result is always %NULL. Use
         * tp_proxy_prepare_async() to wait for this.
         *
         * The result is not necessarily valid after the main loop is re-entered.
         * Since 0.11.3, it can be copied with tp_connection_manager_protocol_copy()
         * if a permanently-valid copy is needed.
         * @param protocol the name of a protocol as defined in the Telepathy D-Bus API,            e.g. "jabber" or "msn"
         * @returns a structure representing the protocol
         */
        get_protocol(protocol: string): ConnectionManagerProtocol;
        /**
         * Returns an object representing a protocol, or %NULL if this connection
         * manager does not support the specified protocol.
         *
         * If this function is called before the connection manager information has
         * been obtained, the result is always %NULL. Use tp_proxy_prepare_async()
         * to wait for this.
         *
         * The result should be referenced with g_object_ref() if it will be kept.
         * @param protocol the name of a protocol as defined in the Telepathy D-Bus API,            e.g. "jabber" or "msn"
         * @returns an object representing the protocol, or %NULL
         */
        get_protocol_object(protocol: string): Protocol;
        /**
         * Return whether `protocol` is supported by this connection manager.
         *
         * If this function is called before the connection manager information has
         * been obtained, the result is always %FALSE. Use tp_proxy_prepare_async()
         * to wait for this.
         * @param protocol the name of a protocol as defined in the Telepathy D-Bus API,            e.g. "jabber" or "msn"
         * @returns %TRUE if this connection manager supports @protocol
         */
        has_protocol(protocol: string): boolean;
        /**
         * Return %TRUE if this connection manager currently appears to be running.
         * This may change at any time that the main loop is running; the
         * #TpConnectionManager::activated and #TpConnectionManager::exited signals
         * are emitted.
         * @returns whether the connection manager is currently running
         */
        is_running(): boolean;
    }

    module Contact {
        // Signal callback interfaces

        interface ContactGroupsChanged {
            (added: string[], removed: string[]): void;
        }

        interface PresenceChanged {
            (type: number, status: string, message: string): void;
        }

        interface SubscriptionStatesChanged {
            (subscribe: number, publish: number, publish_request: string): void;
        }

        // Constructor properties interface
    }

    /**
     * An object representing a contact on a #TpConnection.
     *
     * Contact objects support tracking a number of attributes of contacts, as
     * described by the #TpContactFeature flags. Features can be specified when
     * instantiating contact objects (with tp_connection_get_contacts_by_id() or
     * tp_connection_get_contacts_by_handle()), or added to an existing contact
     * object with tp_connection_upgrade_contacts(). For example, a client wishing
     * to keep track of a contact's alias would set #TP_CONTACT_FEATURE_ALIAS, and
     * then listen for the "notify::alias" signal, emitted whenever the
     * #TpContact:alias property changes.
     *
     * Note that releasing a #TpContact object might release handle references
     * held by calling tp_cli_connection_call_request_handles(),
     * tp_cli_connection_run_request_handles(),
     * tp_cli_connection_call_hold_handles(),
     * tp_cli_connection_run_hold_handles(),
     * tp_cli_connection_interface_contacts_call_get_contact_attributes() or
     * tp_cli_connection_interface_contacts_run_get_contact_attributes() directly.
     * Those functions should be avoided in favour of using #TpContact,
     * tp_connection_hold_handles(), tp_connection_request_handles() and
     * tp_connection_get_contact_attributes().
     */
    class Contact extends GObject.Object {
        // Own properties of TelepathyGLib-0.12.Contact

        /**
         * The contact's alias if available, falling back to their
         * #TpContact:identifier if no alias is available or if the #TpContact has
         * not been set up to track %TP_CONTACT_FEATURE_ALIAS.
         *
         * This alias may have been supplied by the contact themselves, or by the
         * local user, so it does not necessarily unambiguously identify the contact.
         * However, it is suitable for use as a main "display name" for the contact.
         *
         * This is never %NULL for contact objects that are visible to library-user
         * code.
         */
        readonly alias: string;
        /**
         * #GFile to the latest cached avatar image, or %NULL if this contact has
         * no avatar, or if the avatar data is not yet retrieved.
         *
         * When #TpContact:avatar-token changes, this property is not updated
         * immediately, but will be updated when the new avatar data is retrieved and
         * stored in cache. Until then, the file will keep its old value of the latest
         * cached avatar image.
         *
         * This is set to %NULL if %TP_CONTACT_FEATURE_AVATAR_DATA is not set on this
         * contact. Note that setting %TP_CONTACT_FEATURE_AVATAR_DATA will also
         * implicitly set %TP_CONTACT_FEATURE_AVATAR_TOKEN.
         */
        readonly avatar_file: Gio.File;
        /**
         * #GFile to the latest cached avatar image, or %NULL if this contact has
         * no avatar, or if the avatar data is not yet retrieved.
         *
         * When #TpContact:avatar-token changes, this property is not updated
         * immediately, but will be updated when the new avatar data is retrieved and
         * stored in cache. Until then, the file will keep its old value of the latest
         * cached avatar image.
         *
         * This is set to %NULL if %TP_CONTACT_FEATURE_AVATAR_DATA is not set on this
         * contact. Note that setting %TP_CONTACT_FEATURE_AVATAR_DATA will also
         * implicitly set %TP_CONTACT_FEATURE_AVATAR_TOKEN.
         */
        readonly avatarFile: Gio.File;
        /**
         * MIME type of the latest cached avatar image, or %NULL if this contact has
         * no avatar, or if the avatar data is not yet retrieved.
         *
         * This is always the MIME type of the image given by #TpContact:avatar-file.
         */
        readonly avatar_mime_type: string;
        /**
         * MIME type of the latest cached avatar image, or %NULL if this contact has
         * no avatar, or if the avatar data is not yet retrieved.
         *
         * This is always the MIME type of the image given by #TpContact:avatar-file.
         */
        readonly avatarMimeType: string;
        /**
         * An opaque string representing state of the contact's avatar (depending on
         * the protocol, this might be a hash, a timestamp or something else), or
         * an empty string if there is no avatar.
         *
         * This may be %NULL if it is not known whether this contact has an avatar
         * or not (either for network protocol reasons, or because this #TpContact
         * has not been set up to track %TP_CONTACT_FEATURE_AVATAR_TOKEN).
         */
        readonly avatar_token: string;
        /**
         * An opaque string representing state of the contact's avatar (depending on
         * the protocol, this might be a hash, a timestamp or something else), or
         * an empty string if there is no avatar.
         *
         * This may be %NULL if it is not known whether this contact has an avatar
         * or not (either for network protocol reasons, or because this #TpContact
         * has not been set up to track %TP_CONTACT_FEATURE_AVATAR_TOKEN).
         */
        readonly avatarToken: string;
        /**
         * The capabilities supported by this contact. If the underlying Connection
         * doesn't support the ContactCapabilities interface, this property will
         * contain the capabilities supported by the connection.
         * Use tp_capabilities_is_specific_to_contact() to check if the capabilities
         * are specific to this #TpContact or not.
         *
         * This may be %NULL if this #TpContact object has not been set up to track
         * %TP_CONTACT_FEATURE_CAPABILITIES.
         */
        readonly capabilities: Capabilities;
        /**
         * A #GStrv containing the client types of this contact.
         *
         * This is set to %NULL if %TP_CONTACT_FEATURE_CLIENT_TYPES is not
         * set on this contact; it may also be %NULL if that feature is prepared, but
         * the contact's client types are unknown.
         */
        readonly client_types: string[];
        /**
         * A #GStrv containing the client types of this contact.
         *
         * This is set to %NULL if %TP_CONTACT_FEATURE_CLIENT_TYPES is not
         * set on this contact; it may also be %NULL if that feature is prepared, but
         * the contact's client types are unknown.
         */
        readonly clientTypes: string[];
        /**
         * The #TpConnection to which this contact belongs.
         */
        readonly connection: Connection;
        /**
         * a #GStrv with names of groups of which a contact is a member.
         *
         * This is set to %NULL if %TP_CONTACT_FEATURE_CONTACT_GROUPS is not prepared
         * on this contact, or if the connection does not implement ContactGroups
         * interface.
         */
        readonly contact_groups: string[];
        /**
         * a #GStrv with names of groups of which a contact is a member.
         *
         * This is set to %NULL if %TP_CONTACT_FEATURE_CONTACT_GROUPS is not prepared
         * on this contact, or if the connection does not implement ContactGroups
         * interface.
         */
        readonly contactGroups: string[];
        /**
         * A #GList of #TpContactInfoField representing the vCard of this contact.
         *
         * This is set to %NULL if %TP_CONTACT_FEATURE_CONTACT_INFO is not set on this
         * contact.
         */
        readonly contact_info: ContactInfoList;
        /**
         * A #GList of #TpContactInfoField representing the vCard of this contact.
         *
         * This is set to %NULL if %TP_CONTACT_FEATURE_CONTACT_INFO is not set on this
         * contact.
         */
        readonly contactInfo: ContactInfoList;
        /**
         * The contact's handle in the Telepathy D-Bus API, a handle of type
         * %TP_HANDLE_TYPE_CONTACT representing the string
         * given by #TpContact:identifier.
         *
         * This handle is referenced using the Telepathy D-Bus API and remains
         * referenced for as long as the #TpContact exists and the
         * #TpContact:connection remains valid.
         *
         * However, getting this property does not cause an additional reference
         * to the handle to be held.
         *
         * If the #TpContact:connection becomes invalid, this property is no longer
         * meaningful and will be set to 0.
         */
        readonly handle: number;
        /**
         * The contact's identifier in the instant messaging protocol (e.g.
         * XMPP JID, SIP URI, AOL screenname or IRC nick - whatever the underlying
         * protocol uses to identify a user).
         *
         * This is never %NULL for contact objects that are visible to library-user
         * code.
         */
        readonly identifier: string;
        /**
         * %TRUE if the contact has been blocked.
         *
         * This is set to %FALSE if %TP_CONTACT_FEATURE_CONTACT_BLOCKING is not
         * prepared on this contact, or if the connection does not implement
         * ContactBlocking interface.
         */
        readonly is_blocked: boolean;
        /**
         * %TRUE if the contact has been blocked.
         *
         * This is set to %FALSE if %TP_CONTACT_FEATURE_CONTACT_BLOCKING is not
         * prepared on this contact, or if the connection does not implement
         * ContactBlocking interface.
         */
        readonly isBlocked: boolean;
        /**
         * If this contact has set a user-defined location, a string to
         * variant map containing his location. If not, %NULL.
         * tp_vardict_get_string() and similar functions can be used to access
         * the contents.
         *
         * This may be %NULL even if the contact has set a location,
         * if this #TpContact object has not been set up to track
         * %TP_CONTACT_FEATURE_LOCATION.
         *
         * This property contains the same information as #TpContact:location,
         * in a different format.
         */
        readonly location_vardict: GLib.Variant;
        /**
         * If this contact has set a user-defined location, a string to
         * variant map containing his location. If not, %NULL.
         * tp_vardict_get_string() and similar functions can be used to access
         * the contents.
         *
         * This may be %NULL even if the contact has set a location,
         * if this #TpContact object has not been set up to track
         * %TP_CONTACT_FEATURE_LOCATION.
         *
         * This property contains the same information as #TpContact:location,
         * in a different format.
         */
        readonly locationVardict: GLib.Variant;
        /**
         * If this contact has set a user-defined status message, that message;
         * if not, an empty string (which user interfaces may replace with a
         * localized form of the #TpContact:presence-status or
         * #TpContact:presence-type).
         *
         * This may be an empty string even if the contact has set a message,
         * if this #TpContact object has not been set up to track
         * %TP_CONTACT_FEATURE_PRESENCE. It is never %NULL.
         */
        readonly presence_message: string;
        /**
         * If this contact has set a user-defined status message, that message;
         * if not, an empty string (which user interfaces may replace with a
         * localized form of the #TpContact:presence-status or
         * #TpContact:presence-type).
         *
         * This may be an empty string even if the contact has set a message,
         * if this #TpContact object has not been set up to track
         * %TP_CONTACT_FEATURE_PRESENCE. It is never %NULL.
         */
        readonly presenceMessage: string;
        /**
         * A string representing the presence status of this contact. This may be
         * a well-known string from the Telepathy specification, like "available",
         * or a connection-manager-specific string, like "out-to-lunch".
         *
         * This may be an empty string if this #TpContact object has not been set up
         * to track %TP_CONTACT_FEATURE_PRESENCE. It is never %NULL.
         */
        readonly presence_status: string;
        /**
         * A string representing the presence status of this contact. This may be
         * a well-known string from the Telepathy specification, like "available",
         * or a connection-manager-specific string, like "out-to-lunch".
         *
         * This may be an empty string if this #TpContact object has not been set up
         * to track %TP_CONTACT_FEATURE_PRESENCE. It is never %NULL.
         */
        readonly presenceStatus: string;
        /**
         * The #TpConnectionPresenceType representing the type of presence status
         * for this contact.
         *
         * This is provided so even unknown values for #TpContact:presence-status
         * can be classified into their fundamental types.
         *
         * This may be %TP_CONNECTION_PRESENCE_TYPE_UNSET if this #TpContact
         * has not been set up to track %TP_CONTACT_FEATURE_PRESENCE.
         */
        readonly presence_type: number;
        /**
         * The #TpConnectionPresenceType representing the type of presence status
         * for this contact.
         *
         * This is provided so even unknown values for #TpContact:presence-status
         * can be classified into their fundamental types.
         *
         * This may be %TP_CONNECTION_PRESENCE_TYPE_UNSET if this #TpContact
         * has not been set up to track %TP_CONTACT_FEATURE_PRESENCE.
         */
        readonly presenceType: number;
        /**
         * The message that contact sent when they requested permission to see the
         * local user's presence, if #TpContact:publish-state is
         * %TP_SUBSCRIPTION_STATE_ASK, an empty string ("") otherwise.
         *
         * This is set to %NULL until %TP_CONTACT_FEATURE_SUBSCRIPTION_STATES has been
         * prepared, and it is guaranteed to be non-%NULL afterward.
         */
        readonly publish_request: string;
        /**
         * The message that contact sent when they requested permission to see the
         * local user's presence, if #TpContact:publish-state is
         * %TP_SUBSCRIPTION_STATE_ASK, an empty string ("") otherwise.
         *
         * This is set to %NULL until %TP_CONTACT_FEATURE_SUBSCRIPTION_STATES has been
         * prepared, and it is guaranteed to be non-%NULL afterward.
         */
        readonly publishRequest: string;
        /**
         * A #TpSubscriptionState indicating the state of this contact's subscription
         * to the local user's presence.
         *
         * This is set to %TP_SUBSCRIPTION_STATE_UNKNOWN until
         * %TP_CONTACT_FEATURE_SUBSCRIPTION_STATES has been prepared
         */
        readonly publish_state: number;
        /**
         * A #TpSubscriptionState indicating the state of this contact's subscription
         * to the local user's presence.
         *
         * This is set to %TP_SUBSCRIPTION_STATE_UNKNOWN until
         * %TP_CONTACT_FEATURE_SUBSCRIPTION_STATES has been prepared
         */
        readonly publishState: number;
        /**
         * A #TpSubscriptionState indicating the state of the local user's
         * subscription to this contact's presence.
         *
         * This is set to %TP_SUBSCRIPTION_STATE_UNKNOWN until
         * %TP_CONTACT_FEATURE_SUBSCRIPTION_STATES has been prepared
         */
        readonly subscribe_state: number;
        /**
         * A #TpSubscriptionState indicating the state of the local user's
         * subscription to this contact's presence.
         *
         * This is set to %TP_SUBSCRIPTION_STATE_UNKNOWN until
         * %TP_CONTACT_FEATURE_SUBSCRIPTION_STATES has been prepared
         */
        readonly subscribeState: number;

        // Owm methods of TelepathyGLib-0.12.Contact

        /**
         * Convenience wrapper for tp_connection_add_to_group_async()
         * on a single contact.
         * @param group the group to alter.
         * @param callback a callback to call when the operation finishes
         */
        add_to_group_async(group: string, callback?: Gio.AsyncReadyCallback<this> | null): void;
        /**
         * Finishes tp_contact_add_to_group_async()
         * @param result a #GAsyncResult
         * @returns %TRUE if the operation was successful, otherwise %FALSE.
         */
        add_to_group_finish(result: Gio.AsyncResult): boolean;
        /**
         * Convenience wrapper for tp_connection_authorize_publication_async()
         * on a single contact.
         * @param callback a callback to call when the operation finishes
         */
        authorize_publication_async(callback?: Gio.AsyncReadyCallback<this> | null): void;
        /**
         * Finishes tp_contact_authorize_publication_async()
         * @param result a #GAsyncResult
         * @returns %TRUE if the operation was successful, otherwise %FALSE.
         */
        authorize_publication_finish(result: Gio.AsyncResult): boolean;
        /**
         * Block communications with a contact, optionally reporting the contact as
         * abusive to the server administrators. To block more than one contact at once,
         * see tp_connection_block_contacts_async().
         * @param report_abusive If %TRUE, report this contact as abusive to the server administrators as well as blocking him. See #TpConnection:can-report-abusive to discover whether reporting abuse is supported. If #TpConnection:can-report-abusive is %FALSE, this parameter will be ignored.
         * @param callback a callback to call when the operation finishes
         */
        block_async(report_abusive: boolean, callback?: Gio.AsyncReadyCallback<this> | null): void;
        /**
         * Finishes tp_contact_block_async()
         * @param result a #GAsyncResult
         * @returns %TRUE if the operation was successful, otherwise %FALSE.
         */
        block_finish(result: Gio.AsyncResult): boolean;
        /**
         * Returns a newly allocated #GList of contact's vCard fields. The list must be
         * freed with tp_contact_info_list_free() after used.
         *
         * Same as the #TpContact:contact-info property.
         * @returns a #GList of #TpContactInfoField, or %NULL if the feature is not yet  prepared.
         */
        dup_contact_info(): ContactInfoField[];
        /**
         * Return the contact's user-defined location, or %NULL if the location is
         * unspecified.
         *
         * This function returns the same information as tp_contact_get_location(),
         * but in a different format.
         * @returns a variant of type %G_VARIANT_TYPE_VARDICT, the same as  the #TpContact:location-vardict property
         */
        dup_location(): GLib.Variant;
        /**
         * Return the #TpAccount of `self'`s #TpContact:connection.
         * See tp_connection_get_account() for details.
         * @returns a borrowed reference to @self's account  (it must be referenced with g_object_ref if it must remain valid  longer than the contact)
         */
        get_account(): Account;
        /**
         * Return the contact's alias. This remains valid until the main loop
         * is re-entered; if the caller requires a string that will persist for
         * longer than that, it must be copied with g_strdup().
         * @returns the same non-%NULL alias as the #TpContact:alias
         */
        get_alias(): string;
        /**
         * Return the contact's avatar file. This remains valid until the main loop
         * is re-entered; if the caller requires a #GFile that will persist for
         * longer than that, it must be reffed with g_object_ref().
         * @returns the same #GFile as the #TpContact:avatar-file property  (possibly %NULL)
         */
        get_avatar_file(): Gio.File;
        /**
         * Return the contact's avatar MIME type. This remains valid until the main loop
         * is re-entered; if the caller requires a string that will persist for
         * longer than that, it must be copied with g_strdup().
         * @returns the same MIME type as the #TpContact:avatar-mime-type property  (possibly %NULL)
         */
        get_avatar_mime_type(): string;
        /**
         * Return the contact's avatar token. This remains valid until the main loop
         * is re-entered; if the caller requires a string that will persist for
         * longer than that, it must be copied with g_strdup().
         * @returns the same token as the #TpContact:avatar-token property  (possibly %NULL)
         */
        get_avatar_token(): string;
        /**
         * &lt;!-- --&gt;
         * @returns the same #TpCapabilities (or %NULL) as the #TpContact:capabilities property
         */
        get_capabilities(): Capabilities;
        /**
         * Return the contact's client types or %NULL if the client types are
         * unspecified.
         * @returns the same  #GStrv as the #TpContact:client-types property
         */
        get_client_types(): string[];
        /**
         * &lt;!-- nothing more to say --&gt;
         * @returns a borrowed reference to the #TpContact:connection  (it must be referenced with g_object_ref if it must remain valid  longer than the contact)
         */
        get_connection(): Connection;
        /**
         * Return names of groups of which a contact is a member. It is incorrect to
         * call this method before %TP_CONTACT_FEATURE_CONTACT_GROUPS has been
         * prepared. This remains valid until the main loop is re-entered; if the caller
         * requires a #GStrv that will persist for longer than that, it must be copied
         * with g_strdupv().
         * @returns the same  #GStrv as the #TpContact:contact-groups property
         */
        get_contact_groups(): string[];
        /**
         * Returns a newly allocated #GList of contact's vCard fields. The list must be
         * freed with g_list_free() after used.
         *
         * Note that the #TpContactInfoField&lt;!-- --&gt;s in the returned #GList are not
         * dupped before returning from this function. One could copy every item in the
         * list using tp_contact_info_field_copy().
         *
         * Same as the #TpContact:contact-info property.
         * @returns a #GList of #TpContactInfoField, or %NULL if the feature is not yet  prepared.
         */
        get_contact_info(): ContactInfoField[];
        /**
         * Return the contact's handle, which is of type %TP_HANDLE_TYPE_CONTACT,
         * or 0 if the #TpContact:connection has become invalid.
         *
         * This handle is referenced using the Telepathy D-Bus API and remains
         * referenced for as long as `self` exists and the
         * #TpContact:connection remains valid.
         *
         * However, the caller of this function does not gain an additional reference
         * to the handle.
         * @returns the same handle as the #TpContact:handle property
         */
        get_handle(): Handle;
        /**
         * Return the contact's identifier. This remains valid for as long as `self`
         * exists; if the caller requires a string that will persist for longer than
         * that, it must be copied with g_strdup().
         * @returns the same non-%NULL identifier as the #TpContact:identifier property
         */
        get_identifier(): string;
        /**
         * Return the contact's user-defined location or %NULL if the location is
         * unspecified.
         * This remains valid until the main loop is re-entered; if the caller
         * requires a hash table that will persist for longer than that, it must be
         * reffed with g_hash_table_ref().
         * @returns the same  #GHashTable (or %NULL) as the #TpContact:location property
         */
        get_location(): GLib.HashTable<string, GObject.Value>;
        /**
         * Return the contact's user-defined status message, or an empty string.
         * This remains valid until the main loop is re-entered; if the caller
         * requires a string that will persist for longer than that, it must be
         * copied with g_strdup().
         * @returns the same non-%NULL message as the #TpContact:presence-message  property
         */
        get_presence_message(): string;
        /**
         * Return the name of the contact's presence status, or an empty string.
         * This remains valid until the main loop is re-entered; if the caller
         * requires a string that will persist for longer than that, it must be
         * copied with g_strdup().
         * @returns the same non-%NULL status name as the #TpContact:presence-status  property
         */
        get_presence_status(): string;
        /**
         * If this object has been set up to track %TP_CONTACT_FEATURE_PRESENCE
         * and the underlying connection supports either the Presence or
         * SimplePresence interfaces, return the type of the contact's presence.
         *
         * Otherwise, return %TP_CONNECTION_PRESENCE_TYPE_UNSET.
         * @returns the same presence type as the #TpContact:presence-type property
         */
        get_presence_type(): ConnectionPresenceType;
        /**
         * If #TpContact:publish-state is set to %TP_SUBSCRIPTION_STATE_ASK, return the
         * message that this remote contact sent when they requested permission to see
         * the local user's presence, an empty string ("") otherwise. This remains valid
         * until the main loop is re-entered; if the caller requires a string that will
         * persist for longer than that, it must be copied with g_strdup().
         *
         * This is set to %NULL until %TP_CONTACT_FEATURE_SUBSCRIPTION_STATES has been
         * prepared, and it is guaranteed to be non-%NULL afterward.
         * @returns the value of #TpContact:publish-request.
         */
        get_publish_request(): string;
        /**
         * Return the state of this remote contact's subscription to the local user's
         * presence.
         *
         * This is set to %TP_SUBSCRIPTION_STATE_UNKNOWN until
         * %TP_CONTACT_FEATURE_SUBSCRIPTION_STATES has been prepared
         * @returns the value of #TpContact:publish-state.
         */
        get_publish_state(): SubscriptionState;
        /**
         * Return the state of the local user's subscription to this remote contact's
         * presence.
         *
         * This is set to %TP_SUBSCRIPTION_STATE_UNKNOWN until
         * %TP_CONTACT_FEATURE_SUBSCRIPTION_STATES has been prepared
         * @returns the value of #TpContact:subscribe-state.
         */
        get_subscribe_state(): SubscriptionState;
        /**
         * &lt;!-- --&gt;
         * @param feature a desired feature
         * @returns %TRUE if @self has been set up to track the feature @feature
         */
        has_feature(feature: ContactFeature): boolean;
        /**
         * Convenience wrapper for tp_connection_remove_contacts_async()
         * on a single contact.
         * @param callback a callback to call when the operation finishes
         */
        remove_async(callback?: Gio.AsyncReadyCallback<this> | null): void;
        /**
         * Finishes tp_contact_remove_async()
         * @param result a #GAsyncResult
         * @returns %TRUE if the operation was successful, otherwise %FALSE.
         */
        remove_finish(result: Gio.AsyncResult): boolean;
        /**
         * Convenience wrapper for tp_connection_remove_from_group_async()
         * on a single contact.
         * @param group the group to alter.
         * @param callback a callback to call when the operation finishes
         */
        remove_from_group_async(group: string, callback?: Gio.AsyncReadyCallback<this> | null): void;
        /**
         * Finishes tp_contact_remove_from_group_async()
         * @param result a #GAsyncResult
         * @returns %TRUE if the operation was successful, otherwise %FALSE.
         */
        remove_from_group_finish(result: Gio.AsyncResult): boolean;
        /**
         * Requests an asynchronous request of the contact info of `self`. When
         * the operation is finished, `callback` will be called. You can then call
         * tp_contact_request_contact_info_finish() to get the result of the operation.
         *
         * If the operation is successful, the #TpContact:contact-info property will be
         * updated (emitting "notify::contact-info" signal) before `callback` is called.
         * That means you can call tp_contact_get_contact_info() to get the new vCard
         * inside `callback`.
         *
         * Note that requesting the vCard from the network can take significant time, so
         * a bigger timeout is set on the underlying D-Bus call. `cancellable` can be
         * cancelled to free resources used in the D-Bus call if the caller is no longer
         * interested in the vCard.
         *
         * If %TP_CONTACT_FEATURE_CONTACT_INFO is not yet set on `self,` it will be
         * set before its property gets updated and `callback` is called.
         * @param cancellable optional #GCancellable object, %NULL to ignore.
         * @param callback a callback to call when the request is satisfied
         */
        request_contact_info_async(
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Finishes an async request of `self` info. If the operation was successful,
         * the contact's vCard can be accessed using tp_contact_get_contact_info().
         * @param result a #GAsyncResult
         * @returns %TRUE if the request call was successful, otherwise %FALSE
         */
        request_contact_info_finish(result: Gio.AsyncResult): boolean;
        /**
         * Convenience wrapper for tp_connection_request_subscription_async()
         * on a single contact.
         * @param message an optional message
         * @param callback a callback to call when the operation finishes
         */
        request_subscription_async(message: string, callback?: Gio.AsyncReadyCallback<this> | null): void;
        /**
         * Finishes tp_contact_request_subscription_async()
         * @param result a #GAsyncResult
         * @returns %TRUE if the operation was successful, otherwise %FALSE.
         */
        request_subscription_finish(result: Gio.AsyncResult): boolean;
        /**
         * Add `self` to the given groups (creating new groups if necessary), and remove
         * it from all other groups. If the user is removed from a group of which they
         * were the only member, the group MAY be removed automatically. You can then
         * call tp_contact_set_contact_groups_finish() to get the result of the
         * operation.
         *
         * If the operation is successful and %TP_CONTACT_FEATURE_CONTACT_GROUPS is
         * prepared, the #TpContact:contact-groups property will be
         * updated (emitting "notify::contact-groups" signal) and
         * #TpContact::contact-groups-changed signal will be emitted before `callback`
         * is called. That means you can call tp_contact_get_contact_groups() to get the
         * new contact groups inside `callback`.
         * @param groups the set of  groups which the contact should be in (may be %NULL if @n_groups is 0)
         * @param callback a callback to call when the request is satisfied
         */
        set_contact_groups_async(groups?: string[] | null, callback?: Gio.AsyncReadyCallback<this> | null): void;
        /**
         * Finishes an async set of `self` contact groups.
         * @param result a #GAsyncResult
         * @returns %TRUE if the request call was successful, otherwise %FALSE
         */
        set_contact_groups_finish(result: Gio.AsyncResult): boolean;
        /**
         * Unblock communications with a contact. To unblock more than one contact
         * at once, see tp_connection_unblock_contacts_async().
         * @param callback a callback to call when the operation finishes
         */
        unblock_async(callback?: Gio.AsyncReadyCallback<this> | null): void;
        /**
         * Finishes tp_contact_unblock_async()
         * @param result a #GAsyncResult
         * @returns %TRUE if the operation was successful, otherwise %FALSE.
         */
        unblock_finish(result: Gio.AsyncResult): boolean;
        /**
         * Convenience wrapper for tp_connection_unpublish_async()
         * on a single contact.
         * @param callback a callback to call when the operation finishes
         */
        unpublish_async(callback?: Gio.AsyncReadyCallback<this> | null): void;
        /**
         * Finishes tp_contact_unpublish_async()
         * @param result a #GAsyncResult
         * @returns %TRUE if the operation was successful, otherwise %FALSE.
         */
        unpublish_finish(result: Gio.AsyncResult): boolean;
        /**
         * Convenience wrapper for tp_connection_unsubscribe_async()
         * on a single contact.
         * @param callback a callback to call when the operation finishes
         */
        unsubscribe_async(callback?: Gio.AsyncReadyCallback<this> | null): void;
        /**
         * Finishes tp_contact_unsubscribe_async()
         * @param result a #GAsyncResult
         * @returns %TRUE if the operation was successful, otherwise %FALSE.
         */
        unsubscribe_finish(result: Gio.AsyncResult): boolean;
    }

    module ContactSearch {
        // Signal callback interfaces

        interface SearchResultsReceived {
            (results: ContactSearchResult[]): void;
        }

        // Constructor properties interface
    }

    /**
     * An object for Telepathy contact searches.
     * There are no interesting public struct fields.
     */
    class ContactSearch extends GObject.Object {
        // Own properties of TelepathyGLib-0.12.ContactSearch

        /**
         * This search's account.
         */
        account: Account;
        /**
         * The maximum number of results that the server should return.
         * This is only supported by some protocols; use
         * tp_capabilities_supports_contact_search() to check if it's
         * supported.
         *
         * To change the limit after the object has been constructed,
         * use tp_contact_search_reset_async().
         */
        limit: number;
        /**
         * The search server. This is only supported by some protocols;
         * use tp_capabilities_supports_contact_search() to check if it's
         * supported.
         *
         * To change the server after the object has been constructed,
         * use tp_contact_search_reset_async().
         */
        server: string;
        /**
         * This search's state, as a %TpChannelContactSearchState.
         */
        readonly state: number;

        // Constructors of TelepathyGLib-0.12.ContactSearch

        static new_finish(result: Gio.AsyncResult): ContactSearch;

        // Owm methods of TelepathyGLib-0.12.ContactSearch

        /**
         * &lt;!-- --&gt;
         * @param account an account for the contact search
         * @param server the server on which to search for contacts, or %NULL
         * @param limit The maximum number of results the server should return, or 0 for the server default.
         * @param callback a #GAsyncReadyCallback to call when the initialization is finished
         */
        static new_async(
            account: Account,
            server: string,
            limit: number,
            callback?: Gio.AsyncReadyCallback<ContactSearch> | null,
        ): void;

        // Owm methods of TelepathyGLib-0.12.ContactSearch

        /**
         * &lt;!-- --&gt;
         * @returns The TpContactSearch:account property
         */
        get_account(): Account;
        /**
         * &lt;!-- --&gt;
         * @returns The TpContactSearch:limit property
         */
        get_limit(): number;
        /**
         * Get the search keys for a contact search.
         * The keys are vCard field names in lower case, except when
         * they're one of the special cases from telepathy-spec like
         * "tel;cell" or "x-n-given". See the
         * &lt;ulink url="http://telepathy.freedesktop.org/spec/Channel_Type_Contact_Search.html"&gt;
         * Channel.Type.ContactSearch interface&lt;/ulink&gt;
         * for a list of the special cases.
         * @returns the new search keys, or %NULL.
         */
        get_search_keys(): string[];
        /**
         * &lt;!-- --&gt;
         * @returns The TpContactSearch:server property
         */
        get_server(): string;
        /**
         * Resets the contact search object so a new search can be performed.
         * If another tp_contact_search_reset_async() call is in progress,
         * it will be cancelled and tp_contact_search_reset_finish() will
         * return an appropriate error.
         * @param server the server on which to search for contacts, or %NULL
         * @param limit The maximum number of results the server should return, or 0 for the server default.
         * @param callback a #GAsyncReadyCallback to call when the initialization is finished
         */
        reset_async(server: string, limit: number, callback?: Gio.AsyncReadyCallback<this> | null): void;
        /**
         * &lt;!-- --&gt;
         * @param result the #GAsyncResult from the callback
         * @returns the new search keys, or %NULL in case of error.
         */
        reset_finish(result: Gio.AsyncResult): string[];
        /**
         * Starts a search for the keys specified in `criteria`. Connect
         * to the #TpContactSearch::search-results-received signal
         * before calling this function.
         *
         * Before searching again on the same #TpContactSearch, you must
         * call tp_contact_search_reset_async().
         * @param criteria a map from keys returned by tp_contact_search_get_search_keys() to values to search for
         */
        start(criteria: GLib.HashTable<string, string>): void;
    }

    module ContactSearchResult {
        // Constructor properties interface
    }

    /**
     * An object representing the results of a Telepathy contact
     * search channel.
     * There are no interesting public struct fields.
     */
    class ContactSearchResult extends GObject.Object {
        // Own properties of TelepathyGLib-0.12.ContactSearchResult

        identifier: string;

        // Owm methods of TelepathyGLib-0.12.ContactSearchResult

        /**
         * &lt;!-- --&gt;
         * @returns a #GList of #TpContactInfoField for the specified contact. You should free  it when you're done with tp_contact_info_list_free().
         */
        dup_fields(): ContactInfoField[];
        /**
         * &lt;!-- --&gt;
         * @param field the name of the field
         * @returns the specified field, or %NULL if the result doesn't have it.
         */
        get_field(field: string): ContactInfoField;
        /**
         * &lt;!-- --&gt;
         * @returns a #GList of #TpContactInfoField for the specified contact. You should free  it when you're done with g_list_free().
         */
        get_fields(): ContactInfoField[];
        /**
         * &lt;!-- --&gt;
         * @returns the contact identifier.
         */
        get_identifier(): string;
    }

    module DBusDaemon {
        // Constructor properties interface
    }

    /**
     * A subclass of #TpProxy that represents the D-Bus daemon. It mainly provides
     * functionality to manage well-known names on the bus.
     */
    class DBusDaemon extends Proxy {
        // Owm methods of TelepathyGLib-0.12.DBusDaemon

        /**
         * Returns a proxy for signals and method calls on the D-Bus daemon on which
         * this process was activated (if it was launched by D-Bus service
         * activation), or the session bus (otherwise).
         *
         * If it is not possible to connect to the appropriate bus, raise an error
         * and return %NULL.
         *
         * The returned #TpDBusDaemon is cached; the same #TpDBusDaemon object will
         * be returned by this function repeatedly, as long as at least one reference
         * exists.
         */
        static dup(): DBusDaemon;
        /**
         * Ensure that the known interfaces for TpDBusDaemon have been set up.
         * This is done automatically when necessary, but for correct
         * overriding of library interfaces by local extensions, you should
         * call this function before calling
         * tp_proxy_or_subclass_hook_on_interface_add() with first argument
         * %TP_TYPE_DBUS_DAEMON.
         */
        static init_known_interfaces(): void;

        // Owm methods of TelepathyGLib-0.12.DBusDaemon

        /**
         * &lt;!-- Returns: is enough --&gt;
         * @returns the unique name of this connection to the bus, which is valid for  as long as this #TpDBusDaemon is
         */
        get_unique_name(): string;
        /**
         * Call the ListActivatableNames method on the bus daemon, asynchronously.
         * The `callback` will be called from the main loop with a list of all the
         * well-known names that are available for service-activation on the bus.
         *
         * In versions of telepathy-glib that have it, this should be preferred
         * instead of calling tp_cli_dbus_daemon_call_list_activatable_names(), since
         * that function will result in wakeups for every NameOwnerChanged signal.
         * @param timeout_ms timeout for the call
         * @param callback callback to be called on success or failure; must not be %NULL
         * @param weak_object if not %NULL, a GObject which will be weakly referenced; if  it is destroyed, @callback will not be called at all
         */
        list_activatable_names(timeout_ms: number, callback: DBusDaemonListNamesCb, weak_object: GObject.Object): void;
        /**
         * Call the ListNames method on the bus daemon, asynchronously. The `callback`
         * will be called from the main loop with a list of all the names (either
         * unique or well-known) that exist on the bus.
         *
         * In versions of telepathy-glib that have it, this should be preferred
         * instead of calling tp_cli_dbus_daemon_call_list_names(), since that
         * function will result in wakeups for every NameOwnerChanged signal.
         * @param timeout_ms timeout for the call
         * @param callback callback to be called on success or failure; must not be %NULL
         * @param weak_object if not %NULL, a GObject which will be weakly referenced; if  it is destroyed, @callback will not be called at all
         */
        list_names(timeout_ms: number, callback: DBusDaemonListNamesCb, weak_object: GObject.Object): void;
        /**
         * Export `object` at `object_path`. This is a convenience wrapper around
         * dbus_g_connection_register_g_object(), and behaves similarly.
         * @param object_path an object path
         * @param object an object to export
         */
        register_object(object_path: string, object: GObject.Object): void;
        /**
         * Release the given well-known name. This makes a synchronous call to the bus
         * daemon.
         * @param well_known_name a well-known name owned by this process to release
         * @returns %TRUE if @well_known_name was released, or %FALSE and sets @error          if an error occurred.
         */
        release_name(well_known_name: string): boolean;
        /**
         * Claim the given well-known name without queueing, allowing replacement
         * or replacing an existing name-owner. This makes a synchronous call to the
         * bus daemon.
         * @param well_known_name a well-known name to acquire
         * @param idempotent whether to consider it to be a success if this process              already owns the name
         * @returns %TRUE if @well_known_name was claimed, or %FALSE and sets @error if          an error occurred.
         */
        request_name(well_known_name: string, idempotent: boolean): boolean;
        /**
         * Stop exporting `object` on D-Bus. This is a convenience wrapper around
         * dbus_g_connection_unregister_g_object(), and behaves similarly.
         * @param object an object previously exported with tp_dbus_daemon_register_object()
         */
        unregister_object(object: GObject.Object): void;
        /**
         * Arrange for `callback` to be called with the owner of `name` as soon as
         * possible (which might even be before this function returns!), then
         * again every time the ownership of `name` changes.
         *
         * If multiple watches are registered for the same `name,` they will be called
         * in the order they were registered.
         * @param name The name whose ownership is to be watched
         * @param callback Callback to call when the ownership is discovered or changes
         */
        watch_name_owner(name: string, callback: DBusDaemonNameOwnerChangedCb): void;
    }

    module DBusTubeChannel {
        // Constructor properties interface
    }

    /**
     * Data structure representing a #TpDBusTubeChannel.
     */
    class DBusTubeChannel extends Channel {
        // Own properties of TelepathyGLib-0.12.DBusTubeChannel

        /**
         * A %G_VARIANT_TYPE_VARDICT representing the parameters of the tube.
         *
         * Will be %NULL for outgoing tubes until the tube has been offered.
         */
        readonly parameters_vardict: GLib.Variant;
        /**
         * A %G_VARIANT_TYPE_VARDICT representing the parameters of the tube.
         *
         * Will be %NULL for outgoing tubes until the tube has been offered.
         */
        readonly parametersVardict: GLib.Variant;
        /**
         * A string representing the service name that will be used over the tube.
         */
        readonly service_name: string;
        /**
         * A string representing the service name that will be used over the tube.
         */
        readonly serviceName: string;

        // Owm methods of TelepathyGLib-0.12.DBusTubeChannel

        static feature_quark_core(): GLib.Quark;

        // Owm methods of TelepathyGLib-0.12.DBusTubeChannel

        /**
         * Accept an incoming D-Bus tube. When the tube has been accepted
         * `callback` will be called. You can then call
         * tp_dbus_tube_channel_accept_finish() to get the #GDBusConnection that will
         * be used to communicate through the tube.
         * @param callback a callback to call when the tube has been offered
         */
        accept_async(callback?: Gio.AsyncReadyCallback<this> | null): void;
        /**
         * Finishes to accept an incoming D-Bus tube. The returned #GDBusConnection
         * is ready to be used to exchange data through the tube.
         * @param result a #GAsyncResult
         * @returns a reference on a #GDBusConnection if the tube has been successfully accepted and opened; %NULL otherwise.
         */
        accept_finish(result: Gio.AsyncResult): Gio.DBusConnection;
        /**
         * Return the parameters of the dbus-tube channel in a variant of
         * type %G_VARIANT_TYPE_VARDICT whose keys are strings representing
         * parameter names and values are variants representing corresponding
         * parameter values set by the offerer when offering this channel.
         *
         * The GVariant returned is %NULL if this is an outgoing tube that has not
         * yet been offered or the parameters property has not been set.
         *
         * Use g_variant_lookup(), g_variant_lookup_value(), or tp_vardict_get_uint32()
         * and similar functions for convenient access to the values.
         * @returns a new reference to a #GVariant
         */
        dup_parameters_vardict(): GLib.Variant;
        /**
         * Return the #TpDBusTubeChannel:service-name property
         * @returns the value of #TpDBusTubeChannel:service-name
         */
        get_service_name(): string;
        /**
         * Offer an outgoing D-Bus tube. When the tube has been offered and accepted
         * `callback` will be called. You can then call
         * tp_dbus_tube_channel_offer_finish() to get the #GDBusConnection that will
         * be used to communicate through the tube.
         * @param params parameters of the tube, or %NULL
         * @param callback a callback to call when the tube has been offered
         */
        offer_async(params?: GLib.HashTable<any, any> | null, callback?: Gio.AsyncReadyCallback<this> | null): void;
        /**
         * Finishes offering an outgoing D-Bus tube. The returned #GDBusConnection
         * is ready to be used to exchange data through the tube.
         * @param result a #GAsyncResult
         * @returns a reference on a #GDBusConnection if the tube has been successfully offered and opened; %NULL otherwise.
         */
        offer_finish(result: Gio.AsyncResult): Gio.DBusConnection;
    }

    module DebugClient {
        // Signal callback interfaces

        interface NewDebugMessage {
            (message: DebugMessage): void;
        }

        // Constructor properties interface
    }

    /**
     * A proxy object for the debug interface of a Telepathy component.
     */
    class DebugClient extends Proxy {
        // Own properties of TelepathyGLib-0.12.DebugClient

        /**
         * %TRUE if debug messages are published on the bus.
         *
         * This property is meaningless until the
         * %TP_DEBUG_CLIENT_FEATURE_CORE feature has been prepared.
         */
        readonly enabled: boolean;

        // Constructors of TelepathyGLib-0.12.DebugClient

        static ['new'](dbus: DBusDaemon, unique_name: string): DebugClient;

        // Owm methods of TelepathyGLib-0.12.DebugClient

        static get_feature_quark_core(): GLib.Quark;
        /**
         * Ensure that the known interfaces for TpDebugClient have been set up.
         * This is done automatically when necessary, but for correct
         * overriding of library interfaces by local extensions, you should
         * call this function before calling
         * tp_proxy_or_subclass_hook_on_interface_add() with first argument
         * %TP_TYPE_DEBUG_CLIENT.
         */
        static init_known_interfaces(): void;

        // Owm methods of TelepathyGLib-0.12.DebugClient

        /**
         * Retrieve buffered messages from `self`. Once `callback` is called,
         * use tp_debug_client_get_messages_finish() to retrieve the #TpDebugMessage
         * objects.
         * @param callback callback to call when the messages have been retrieved
         */
        get_messages_async(callback?: Gio.AsyncReadyCallback<this> | null): void;
        /**
         * Finishes tp_debug_client_set_enabled_async().
         * @param result a #GAsyncResult
         * @returns a #GPtrArray of #TpDebugMessage, free with g_ptr_array_unref()
         */
        get_messages_finish(result: Gio.AsyncResult): DebugMessage[];
        /**
         * Return the #TpDebugClient:enabled property
         * @returns the value of #TpDebugClient:enabled property
         */
        is_enabled(): boolean;
        /**
         * Enable or disable publishing of debug messages on the bus by the component
         * owning `self'`s bus name.
         * @param enabled %TRUE if debug messages should be published on the bus, %FALSE otherwise
         * @param callback a callback to call when the request is satisfied
         */
        set_enabled_async(enabled: boolean, callback?: Gio.AsyncReadyCallback<this> | null): void;
        /**
         * Finishes tp_debug_client_set_enabled_async().
         * @param result a #GAsyncResult
         * @returns %TRUE, if the operation suceeded, %FALSE otherwise
         */
        set_enabled_finish(result: Gio.AsyncResult): boolean;
    }

    module DebugMessage {
        // Constructor properties interface
    }

    /**
     * Data structure representing a #TpDebugMessage.
     */
    class DebugMessage extends GObject.Object {
        // Own properties of TelepathyGLib-0.12.DebugMessage

        /**
         * Category of the debug message, or %NULL if none was specified.
         */
        readonly category: string;
        /**
         * Domain of the debug message.
         */
        readonly domain: string;
        /**
         * A #GLogLevelFlags representing the level of the debug message.
         */
        readonly level: number;
        /**
         * Text of the debug message, stripped from its trailing whitespaces.
         */
        readonly message: string;
        /**
         * Timestamp of the debug message.
         */
        readonly time: GLib.DateTime;

        // Owm methods of TelepathyGLib-0.12.DebugMessage

        /**
         * Return the #TpDebugMessage:category property
         * @returns the value of #TpDebugMessage:category property
         */
        get_category(): string;
        /**
         * Return the #TpDebugMessage:domain property
         * @returns the value of #TpDebugMessage:domain property
         */
        get_domain(): string;
        /**
         * Return the #TpDebugMessage:level property
         * @returns the value of #TpDebugMessage:level property
         */
        get_level(): GLib.LogLevelFlags;
        /**
         * Return the #TpDebugMessage:message property
         * @returns the value of #TpDebugMessage:message property
         */
        get_message(): string;
        /**
         * Return the #TpDebugMessage:time property
         * @returns the value of #TpDebugMessage:time property
         */
        get_time(): GLib.DateTime;
    }

    module FileTransferChannel {
        // Constructor properties interface
    }

    /**
     * Data structure representing a #TpFileTransferChannel.
     */
    class FileTransferChannel extends Channel {
        // Own properties of TelepathyGLib-0.12.FileTransferChannel

        /**
         * A #GDateTime representing the last modification time of the file to be
         * transferred.
         *
         * Since 0.15.5
         */
        readonly date: GLib.DateTime;
        /**
         * The description of the file transfer, defined by the sender when
         * sending the file transfer offer.
         *
         * Since 0.15.5
         */
        readonly description: string;
        /**
         * For incoming file transfers, this property will be set to a
         * #GFile for the location where the file will be saved (given by
         * tp_file_transfer_channel_accept_file_async()) when the transfer
         * starts. The feature %TP_FILE_TRANSFER_CHANNEL_FEATURE_CORE must
         * already be prepared for this property to have a meaningful
         * value, and to receive change notification.  Once the initial
         * value is set, this property will not be changed.
         *
         * For outgoing file transfers, this property is a #GFile for the
         * location of the file being sent (given by
         * tp_file_transfer_channel_provide_file_async()). The feature
         * %TP_FILE_TRANSFER_CHANNEL_FEATURE_CORE does not have to be
         * prepared and there is no change notification.
         */
        readonly file: Gio.File;
        /**
         * The name of the file on the sender's side. This is therefore given as a
         * suggested filename for the receiver.
         *
         * Since 0.15.5
         */
        readonly filename: string;
        /**
         * The offset in bytes from where the file should be sent.
         *
         * The %TP_FILE_TRANSFER_CHANNEL_FEATURE_CORE feature has to be
         * prepared for this property to be meaningful and kept up to date.
         */
        readonly initial_offset: number;
        /**
         * The offset in bytes from where the file should be sent.
         *
         * The %TP_FILE_TRANSFER_CHANNEL_FEATURE_CORE feature has to be
         * prepared for this property to be meaningful and kept up to date.
         */
        readonly initialOffset: number;
        /**
         * The MIME type of the file to be transferred.
         */
        readonly mime_type: string;
        /**
         * The MIME type of the file to be transferred.
         */
        readonly mimeType: string;
        /**
         * A string representing the name of the service suggested to handle
         * this file transfer channel, or %NULL if the initiator did not
         * provide one.
         *
         * This is a useful way of requesting file transfer channels with a
         * hint of what handler they should be handled by on the remote
         * side. If a channel request is made with this property set (to a
         * contact who also supports the metadata extension; see the
         * requestable channel classes for said contact), this property will
         * be set to the same value on the remote incoming channel and
         * handlers can match on this in their handler filter. For example,
         * a remote handler could call the following:
         *
         *
         * ```
         * tp_base_client_take_handler_filter (handler, tp_asv_new (
         *               TP_PROP_CHANNEL_CHANNEL_TYPE, G_TYPE_STRING, TP_IFACE_CHANNEL_TYPE_FILE_TRANSFER,
         *               TP_PROP_CHANNEL_TARGET_HANDLE_TYPE, G_TYPE_UINT, TP_HANDLE_TYPE_CONTACT,
         *               TP_PROP_CHANNEL_REQUESTED, G_TYPE_BOOLEAN, FALSE,
         *               TP_PROP_CHANNEL_INTERFACE_FILE_TRANSFER_METADATA_SERVICE_NAME, G_TYPE_STRING, "service.name",
         *               NULL));
         * ```
         *
         *
         * The %TP_FILE_TRANSFER_CHANNEL_FEATURE_CORE feature has to be
         * prepared for this property to be meaningful.
         */
        readonly service_name: string;
        /**
         * A string representing the name of the service suggested to handle
         * this file transfer channel, or %NULL if the initiator did not
         * provide one.
         *
         * This is a useful way of requesting file transfer channels with a
         * hint of what handler they should be handled by on the remote
         * side. If a channel request is made with this property set (to a
         * contact who also supports the metadata extension; see the
         * requestable channel classes for said contact), this property will
         * be set to the same value on the remote incoming channel and
         * handlers can match on this in their handler filter. For example,
         * a remote handler could call the following:
         *
         *
         * ```
         * tp_base_client_take_handler_filter (handler, tp_asv_new (
         *               TP_PROP_CHANNEL_CHANNEL_TYPE, G_TYPE_STRING, TP_IFACE_CHANNEL_TYPE_FILE_TRANSFER,
         *               TP_PROP_CHANNEL_TARGET_HANDLE_TYPE, G_TYPE_UINT, TP_HANDLE_TYPE_CONTACT,
         *               TP_PROP_CHANNEL_REQUESTED, G_TYPE_BOOLEAN, FALSE,
         *               TP_PROP_CHANNEL_INTERFACE_FILE_TRANSFER_METADATA_SERVICE_NAME, G_TYPE_STRING, "service.name",
         *               NULL));
         * ```
         *
         *
         * The %TP_FILE_TRANSFER_CHANNEL_FEATURE_CORE feature has to be
         * prepared for this property to be meaningful.
         */
        readonly serviceName: string;
        /**
         * The size of the file to be transferred,
         * or %G_MAXUINT64 if not known.
         *
         * Since 0.15.5
         */
        readonly size: number;
        /**
         * A TpFileTransferState holding the state of the file transfer.
         *
         * The %TP_FILE_TRANSFER_CHANNEL_FEATURE_CORE feature has to be
         * prepared for this property to be meaningful and kept up to date.
         *
         * Since 0.17.1
         */
        readonly state: number;
        /**
         * The number of bytes transferred so far in this
         * file transfer.
         *
         * The %TP_FILE_TRANSFER_CHANNEL_FEATURE_CORE feature has to be
         * prepared for this property to be meaningful and kept up to date.
         */
        readonly transferred_bytes: number;
        /**
         * The number of bytes transferred so far in this
         * file transfer.
         *
         * The %TP_FILE_TRANSFER_CHANNEL_FEATURE_CORE feature has to be
         * prepared for this property to be meaningful and kept up to date.
         */
        readonly transferredBytes: number;

        // Constructors of TelepathyGLib-0.12.FileTransferChannel

        static ['new'](
            conn: Connection,
            object_path: string,
            immutable_properties: GLib.HashTable<string, GObject.Value>,
        ): FileTransferChannel;

        // Owm methods of TelepathyGLib-0.12.FileTransferChannel

        static get_feature_quark_core(): GLib.Quark;

        // Owm methods of TelepathyGLib-0.12.FileTransferChannel

        /**
         * Accept an incoming file transfer in the
         * %TP_FILE_TRANSFER_STATE_PENDING state. Once the accept has been
         * processed, `callback` will be called. You can then call
         * tp_file_transfer_channel_accept_file_finish() to get the result of
         * the operation.
         * @param file a #GFile where the file should be saved
         * @param offset Offset from the start of @file where transfer begins
         * @param callback a callback to call when the transfer has been accepted
         */
        accept_file_async(file: Gio.File, offset: number, callback?: Gio.AsyncReadyCallback<this> | null): void;
        /**
         * Finishes a call to tp_file_transfer_channel_accept_file_async().
         * @param result a #GAsyncResult
         * @returns %TRUE if the accept operation was a success, or %FALSE
         */
        accept_file_finish(result: Gio.AsyncResult): boolean;
        /**
         * Return the #TpFileTransferChannel:date property
         * @returns the value of the #TpFileTransferChannel:date   property
         */
        get_date(): GLib.DateTime;
        /**
         * Return the #TpFileTransferChannel:description property
         * @returns the value of the   #TpFileTransferChannel:description property
         */
        get_description(): string;
        /**
         * Return the #TpFileTransferChannel:filename property
         * @returns the value of the   #TpFileTransferChannel:filename property
         */
        get_filename(): string;
        /**
         * Return the #TpFileTransferChannel:metadata property
         * @returns the   value of the #TpFileTransferChannel:metadata property
         */
        get_metadata(): GLib.HashTable;
        /**
         * Return the #TpFileTransferChannel:mime-type property
         * @returns the value of the   #TpFileTransferChannel:mime-type property
         */
        get_mime_type(): string;
        /**
         * Return the #TpFileTransferChannel:service-name property
         * @returns the value of the #TpFileTransferChannel:service-name property
         */
        get_service_name(): string;
        /**
         * Return the #TpFileTransferChannel:size property
         * @returns the value of the #TpFileTransferChannel:size property
         */
        get_size(): number;
        /**
         * Returns the #TpFileTransferChannel:state property.
         *
         * If `reason` is not %NULL it is set to the reason why
         * #TpFileTransferChannel:state changed to its current value.
         * @returns the value of the #TpFileTransferChannel:state property
         */
        get_state(): FileTransferState;
        /**
         * Return the #TpFileTransferChannel:transferred-bytes property
         * @returns the value of the #TpFileTransferChannel:transferred-bytes property
         */
        get_transferred_bytes(): number;
        /**
         * Provide a file transfer. This should be called when the file
         * transfer state changes (tp_file_transfer_channel_get_state() and
         * the "notify::state" signal) to
         * %TP_FILE_TRANSFER_STATE_ACCEPTED or
         * %TP_FILE_TRANSFER_STATE_PENDING. Once the file has been provided,
         * the channel #TpFileTransferChannel:state will change to
         * %TP_FILE_TRANSFER_STATE_OPEN.
         *
         * Once the file has been provided, `callback` will be called. You
         * should then call tp_file_transfer_channel_provide_file_finish() to
         * get the result of the operation.
         * @param file a #GFile to send to the remote contact
         * @param callback a callback to call when the transfer has been accepted
         */
        provide_file_async(file: Gio.File, callback?: Gio.AsyncReadyCallback<this> | null): void;
        /**
         * Finishes a call to tp_file_transfer_channel_provide_file_async().
         *
         *
         * Successful return from this function does not mean that the file
         * transfer has completed or has even started at all. The state of the
         * file transfer should be monitored with the "notify::state" signal.
         * @param result a #GAsyncResult
         * @returns %TRUE if the file has been successfully provided, or %FALSE.
         */
        provide_file_finish(result: Gio.AsyncResult): boolean;
    }

    module HandleChannelsContext {
        // Signal callback interfaces

        interface Done {
            (): void;
        }

        // Constructor properties interface
    }

    /**
     * Data structure representing the context of a Handler.HandleChannels()
     * call.
     */
    class HandleChannelsContext extends GObject.Object {
        // Own properties of TelepathyGLib-0.12.HandleChannelsContext

        /**
         * A #TpAccount object representing the Account of the DispatchOperation
         * that has been passed to HandleChannels.
         * Read-only except during construction.
         *
         * This property can't be %NULL.
         */
        account: Account;
        /**
         * A #GPtrArray containing #TpChannel objects representing the channels
         * that have been passed to HandleChannels.
         * Read-only except during construction.
         *
         * This property can't be %NULL.
         */
        channels: any[];
        /**
         * A #TpConnection object representing the Connection of the DispatchOperation
         * that has been passed to HandleChannels.
         * Read-only except during construction.
         *
         * This property can't be %NULL.
         */
        connection: Connection;
        /**
         * A #GPtrArray containing #TpChannelRequest objects representing the
         * requests that have been passed to HandleChannels.
         * Read-only except during construction.
         *
         * This property can't be %NULL.
         */
        requests_satisfied: any[];
        /**
         * A #GPtrArray containing #TpChannelRequest objects representing the
         * requests that have been passed to HandleChannels.
         * Read-only except during construction.
         *
         * This property can't be %NULL.
         */
        requestsSatisfied: any[];
        /**
         * The time at which user action occurred, or one of the
         * special values %TP_USER_ACTION_TIME_NOT_USER_ACTION or
         * %TP_USER_ACTION_TIME_CURRENT_TIME
         * (see #TpAccountChannelRequest:user-action-time for details)
         *
         * Read-only except during construction.
         */
        user_action_time: number;
        /**
         * The time at which user action occurred, or one of the
         * special values %TP_USER_ACTION_TIME_NOT_USER_ACTION or
         * %TP_USER_ACTION_TIME_CURRENT_TIME
         * (see #TpAccountChannelRequest:user-action-time for details)
         *
         * Read-only except during construction.
         */
        userActionTime: number;

        // Owm methods of TelepathyGLib-0.12.HandleChannelsContext

        /**
         * Called by #TpBaseClientClassAddDispatchOperationImpl when it's done so
         * the D-Bus method can return.
         *
         * The caller is responsible for closing channels with
         * tp_cli_channel_call_close() when it has finished handling them.
         */
        accept(): void;
        /**
         * Called by #TpBaseClientClassAddDispatchOperationImpl to indicate that it
         * implements the method in an async way. The caller must take a reference
         * to the #TpHandleChannelsContext before calling this function, and
         * is responsible for calling either
         * tp_handle_channels_context_accept() or
         * tp_handle_channels_context_fail() later.
         */
        delay(): void;
        /**
         * Called by #TpBaseClientClassAddDispatchOperationImpl to raise a D-Bus error.
         * @param error the error to return from the method
         */
        fail(error: GLib.Error): void;
        /**
         * Return any extra information that accompanied this request to handle
         * channels (the Handler_Info argument from the HandleChannels D-Bus method).
         * Well-known keys for this map will be defined by the Telepathy D-Bus
         * Interface Specification; at the time of writing, none have been defined.
         *
         * The returned hash table is only valid for as long as `self` is.
         * @returns extensible  extra handler information, in a form suitable for use with  tp_asv_get_string() etc.
         */
        get_handler_info(): GLib.HashTable<string, GObject.Value>;
        /**
         * Return a list of the #TpChannelRequest which have been satisfied by the
         * channels associated with #self.
         * @returns a newly allocated #GList of reffed #TpChannelRequest.
         */
        get_requests(): ChannelRequest[];
    }

    module Message {
        // Constructor properties interface
    }

    /**
     * Opaque structure representing a message in the Telepathy messages interface
     * (an array of at least one mapping from string to variant, where the first
     * mapping contains message headers and subsequent mappings contain the
     * message body).
     *
     * This base class provides convenience API for most of the common keys that
     * can appear in the header. One notable exception is the sender of the
     * message. Inside a connection manager, messages are represented by the
     * #TpCMMessage subclass, and you should use tp_cm_message_get_sender().
     * When composing a message in a client using #TpClientMessage, messages do
     * not have an explicit sender (the sender is automatically the local user).
     * When a client sees a sent or received message signalled by the connection
     * manager (represented by #TpSignalledMessage), the message's sender (if any)
     * can be accessed with tp_signalled_message_get_sender().
     */
    class Message extends GObject.Object {
        // Owm methods of TelepathyGLib-0.12.Message

        /**
         * Append a body part to the message.
         * @returns the part number
         */
        append_part(): number;
        /**
         * &lt;!-- nothing more to say --&gt;
         * @returns the number of parts in the message, including the headers in part 0
         */
        count_parts(): number;
        /**
         * Remove the given key and its value from the given part.
         * @param part a part number, which must be strictly less than the number  returned by tp_message_count_parts()
         * @param key a key in the mapping representing the part
         * @returns %TRUE if the key previously existed
         */
        delete_key(part: number, key: string): boolean;
        /**
         * Delete the given body part from the message.
         * @param part a part number, which must be strictly greater than 0, and strictly  less than the number returned by tp_message_count_parts()
         */
        delete_part(part: number): void;
        /**
         * Since 0.13.9 this function is a simple wrapper around
         * g_object_unref()
         */
        destroy(): void;
        /**
         * &lt;!-- nothing more to say --&gt;
         * @param part a part number
         * @returns the current contents of the given part, or %NULL if the part number is  out of range
         */
        dup_part(part: number): GLib.Variant;
        /**
         * &lt;!-- --&gt;
         * @returns the type of this message
         */
        get_message_type(): ChannelTextMessageType;
        /**
         * Return the incoming message ID of `self`. Only incoming messages have such
         * ID, for outgoing ones this function returns 0 and set `valid` to %FALSE.
         * @returns the incoming message ID.
         */
        get_pending_message_id(): number;
        /**
         * Return when this message was received locally, as a number of seconds since
         * the beginning of 1970 in the UTC timezone (the same representation used by
         * g_date_time_new_from_unix_utc(), for instance), or 0 if not known.
         * @returns a Unix timestamp, or 0
         */
        get_received_timestamp(): number;
        /**
         * Return when this message was sent, as a number of seconds since the
         * beginning of 1970 in the UTC timezone (the same representation used by
         * g_date_time_new_from_unix_utc(), for instance), or 0 if not known.
         *
         * If this protocol does not track the time at which the message was
         * initially sent, this timestamp might be approximated by using the
         * time at which it arrived at a central server.
         * @returns a Unix timestamp, or 0
         */
        get_sent_timestamp(): number;
        /**
         * If this message is specific to a particular D-Bus interface and should
         * be ignored by clients without knowledge of that interface, return the
         * name of the interface.
         *
         * If this message is an ordinary message or delivery report, return %NULL.
         * @returns a D-Bus interface name, or %NULL for ordinary  messages and delivery reports
         */
        get_specific_to_interface(): string;
        /**
         * If this message replaces a previous message, return the value of
         * tp_message_get_token() for that previous message. Otherwise, return %NULL.
         *
         * For instance, a user interface could replace the superseded
         * message with this message, or grey out the superseded message.
         * @returns a non-empty opaque identifier, or %NULL if none
         */
        get_supersedes(): string;
        /**
         * Return this message's identifier in the underlying protocol. This is
         * &lt;emphasis&gt;not&lt;/emphasis&gt; guaranteed to be unique, even within the scope
         * of a single channel or contact: the only guarantee made is that two
         * messages with different non-empty tokens are different messages.
         *
         * If there is no suitable token, return %NULL.
         * @returns a non-empty opaque identifier, or %NULL if none
         */
        get_token(): string;
        /**
         * If this message is a delivery report indicating success or failure of
         * delivering a message, return %TRUE.
         * @returns %TRUE if this is a delivery report
         */
        is_delivery_report(): boolean;
        /**
         * Check if `self` is mutable. Only mutable messages can be modified using
         * functions such as tp_message_set_string().
         * @returns %TRUE if the message is mutable.
         */
        is_mutable(): boolean;
        /**
         * Returns %TRUE if this incoming message has been seen in a previous channel
         * during the lifetime of the Connection, but had not been acknowledged when
         * that channel closed, causing an identical channel (in which the message now
         * appears) to open.
         *
         * Loggers should check this flag to avoid duplicating messages, for instance.
         * @returns %TRUE if this message was seen in a previous Channel on this  Connection
         */
        is_rescued(): boolean;
        /**
         * &lt;!-- no more to say --&gt;
         * @returns %TRUE if this message is part of a replay of message history, for  instance in an XMPP chatroom.
         */
        is_scrollback(): boolean;
        /**
         * &lt;!-- nothing more to say --&gt;
         * @param part a part number
         * @returns the #GHashTable used to implement the given part, or %NULL if the  part number is out of range. The hash table is only valid as long as the  message is valid and the part is not deleted.
         */
        peek(part: number): GLib.HashTable<string, GObject.Value>;
        /**
         * Reference the given handle until this message is destroyed.
         * @param handle_type a handle type, greater than %TP_HANDLE_TYPE_NONE and less than  %TP_NUM_HANDLE_TYPES
         * @param handle a handle of the given type
         */
        ref_handle(handle_type: HandleType, handle: Handle): void;
        /**
         * Set `key` in part `part` of `self` to have a copy of `source` as its value.
         *
         * If `source` represents a data structure containing handles, they should
         * all be referenced with tp_message_ref_handle() first.
         *
         * In high-level language bindings, use tp_message_set_variant() instead.
         * @param part a part number, which must be strictly less than the number  returned by tp_message_count_parts()
         * @param key a key in the mapping representing the part
         * @param source a value, encoded as dbus-glib would
         */
        set(part: number, key: string, source: GObject.Value): void;
        /**
         * Set `key` in part `part` of `self` to have `b` as a boolean value.
         * @param part a part number, which must be strictly less than the number  returned by tp_message_count_parts()
         * @param key a key in the mapping representing the part
         * @param b a boolean value
         */
        set_boolean(part: number, key: string, b: boolean): void;
        /**
         * Set `key` in part `part` of `self` to have `bytes` as a byte-array value.
         * @param part a part number, which must be strictly less than the number  returned by tp_message_count_parts()
         * @param key a key in the mapping representing the part
         * @param len a number of bytes
         * @param bytes an array of @len bytes
         */
        set_bytes(part: number, key: string, len: number, bytes?: any | null): void;
        /**
         * If `handle_or_0` is not zero, reference it with tp_message_ref_handle().
         *
         * Set `key` in part `part` of `self` to have `handle_or_0` as an unsigned integer
         * value.
         *
         * Since 0.13.9 this function has been deprecated in favor or
         * tp_cm_message_set_sender() as 'message-sender' is the only handle
         * you can put in a #TpCMMessage.
         * @param part a part number, which must be strictly less than the number  returned by tp_message_count_parts()
         * @param key a key in the mapping representing the part
         * @param handle_type a handle type
         * @param handle_or_0 a handle of that type, or 0
         */
        set_handle(part: number, key: string, handle_type: HandleType, handle_or_0: Handle): void;
        /**
         * Set `key` in part `part` of `self` to have `i` as a signed integer value.
         * @param part a part number, which must be strictly less than the number  returned by tp_message_count_parts()
         * @param key a key in the mapping representing the part
         * @param i an integer value
         */
        set_int32(part: number, key: string, i: number): void;
        /**
         * Set `key` in part `part` of `self` to have `i` as a signed integer value.
         * @param part a part number, which must be strictly less than the number  returned by tp_message_count_parts()
         * @param key a key in the mapping representing the part
         * @param i an integer value
         */
        set_int64(part: number, key: string, i: number): void;
        /**
         * Set `key` in part `part` of `self` to have `s` as a string value.
         * @param part a part number, which must be strictly less than the number  returned by tp_message_count_parts()
         * @param key a key in the mapping representing the part
         * @param s a string value
         */
        set_string(part: number, key: string, s: string): void;
        /**
         * Set `key` in part `part` of `self` to have `u` as an unsigned integer value.
         * @param part a part number, which must be strictly less than the number  returned by tp_message_count_parts()
         * @param key a key in the mapping representing the part
         * @param u an unsigned integer value
         */
        set_uint32(part: number, key: string, u: number): void;
        /**
         * Set `key` in part `part` of `self` to have `u` as an unsigned integer value.
         * @param part a part number, which must be strictly less than the number  returned by tp_message_count_parts()
         * @param key a key in the mapping representing the part
         * @param u an unsigned integer value
         */
        set_uint64(part: number, key: string, u: number): void;
        /**
         * Set `key` in part `part` of `self` to have `value` as its value.
         *
         * If `value` is a floating reference (see g_variant_ref_sink()), then this
         * function will take ownership of it.
         * @param part a part number, which must be strictly less than the number  returned by tp_message_count_parts()
         * @param key a key in the mapping representing the part
         * @param value a value
         */
        set_variant(part: number, key: string, value: GLib.Variant): void;
        /**
         * Set `key` in part `part` of `self` to have `message` as an aa{sv} value (that
         * is, an array of Message_Part), and take ownership of `message`.  The caller
         * should not use `message` after passing it to this function.  All handle
         * references owned by `message` will subsequently belong to and be released
         * with `self`.
         * @param part a part number, which must be strictly less than the number  returned by tp_message_count_parts()
         * @param key a key in the mapping representing the part
         * @param message another (distinct) message created for the same #TpBaseConnection
         */
        take_message(part: number, key: string, message: Message): void;
        /**
         * Concatene all the text parts contained in `message`.
         * @returns a newly allocated string containing the text content of #message
         */
        to_text(): string;
    }

    module ObserveChannelsContext {
        // Constructor properties interface
    }

    /**
     * Data structure representing the context of a Observer.ObserveChannels()
     * call.
     */
    class ObserveChannelsContext extends GObject.Object {
        // Own properties of TelepathyGLib-0.12.ObserveChannelsContext

        /**
         * A #TpAccount object representing the Account that has been passed to
         * ObserveChannels.
         * Read-only except during construction.
         *
         * This property can't be %NULL.
         */
        account: Account;
        /**
         * A #GPtrArray containing #TpChannel objects representing the channels
         * that have been passed to ObserveChannels.
         * Read-only except during construction.
         *
         * This property can't be %NULL.
         */
        channels: any[];
        /**
         * A #TpConnection object representing the Connection that has been passed
         * to ObserveChannels.
         * Read-only except during construction.
         *
         * This property can't be %NULL.
         */
        connection: Connection;
        /**
         * A #TpChannelDispatchOperation object representing the
         * ChannelDispatchOperation that has been passed to ObserveChannels,
         * or %NULL if none has been passed.
         * Read-only except during construction.
         */
        dispatch_operation: ChannelDispatchOperation;
        /**
         * A #TpChannelDispatchOperation object representing the
         * ChannelDispatchOperation that has been passed to ObserveChannels,
         * or %NULL if none has been passed.
         * Read-only except during construction.
         */
        dispatchOperation: ChannelDispatchOperation;
        /**
         * A #GPtrArray containing #TpChannelRequest objects representing the
         * requests that have been passed to ObserveChannels.
         * Read-only except during construction.
         *
         * This property can't be %NULL.
         */
        requests: any[];

        // Owm methods of TelepathyGLib-0.12.ObserveChannelsContext

        /**
         * Called by #TpBaseClientClassObserveChannelsImpl when it's done so the D-Bus
         * method can return.
         */
        accept(): void;
        /**
         * Called by #TpBaseClientClassObserveChannelsImpl to indicate that it
         * implements the method in an async way. The caller must take a reference
         * to the #TpObserveChannelsContext before calling this function, and
         * is responsible for calling either tp_observe_channels_context_accept() or
         * tp_observe_channels_context_fail() later.
         */
        delay(): void;
        /**
         * Called by #TpBaseClientClassObserveChannelsImpl to raise a D-Bus error.
         * @param error the error to return from the method
         */
        fail(error: GLib.Error): void;
        /**
         * Return a list of the #TpChannelRequest which have been satisfied by the
         * channels associated with #self.
         * @returns a newly allocated #GList of reffed #TpChannelRequest.
         */
        get_requests(): ChannelRequest[];
        /**
         * If this call to ObserveChannels is for channels that already
         * existed before this observer started (because the observer used
         * tp_base_client_set_observer_recover()), return %TRUE.
         *
         * In most cases, the result is %FALSE.
         * @returns %TRUE for pre-existing channels, %FALSE for new channels
         */
        is_recovering(): boolean;
    }

    module Protocol {
        // Constructor properties interface
    }

    /**
     * A base class for connection managers' protocols.
     */
    class Protocol extends Proxy {
        // Own properties of TelepathyGLib-0.12.Protocol

        /**
         * A non-%NULL #GStrv of URI schemes supported by this protocol.
         * If this protocol does not support addressing contacts by URI,
         * the list is empty.
         *
         * For instance, a SIP connection manager that supports calling contacts
         * by SIP URI (sip:alice&amp;commat;example.com, sips:bob&amp;commat;example.com)
         * or telephone number (tel:+1-555-0123) might have
         * { "sip", "sips", "tel", NULL }.
         */
        readonly addressable_uri_schemes: string[];
        /**
         * A non-%NULL #GStrv of URI schemes supported by this protocol.
         * If this protocol does not support addressing contacts by URI,
         * the list is empty.
         *
         * For instance, a SIP connection manager that supports calling contacts
         * by SIP URI (sip:alice&amp;commat;example.com, sips:bob&amp;commat;example.com)
         * or telephone number (tel:+1-555-0123) might have
         * { "sip", "sips", "tel", NULL }.
         */
        readonly addressableUriSchemes: string[];
        /**
         * A non-%NULL #GStrv of vCard fields supported by this protocol.
         * If this protocol does not support addressing contacts by a vCard field,
         * the list is empty.
         *
         * For instance, a SIP connection manager that supports calling contacts
         * by SIP URI (vCard field SIP) or telephone number (vCard field TEL)
         * might have { "sip", "tel", NULL }.
         */
        readonly addressable_vcard_fields: string[];
        /**
         * A non-%NULL #GStrv of vCard fields supported by this protocol.
         * If this protocol does not support addressing contacts by a vCard field,
         * the list is empty.
         *
         * For instance, a SIP connection manager that supports calling contacts
         * by SIP URI (vCard field SIP) or telephone number (vCard field TEL)
         * might have { "sip", "tel", NULL }.
         */
        readonly addressableVcardFields: string[];
        /**
         * A non-%NULL #GStrv of interfaces which provide information as to
         * what kind of authentication channels can possibly appear before
         * the connection reaches the CONNECTED state, or %NULL if
         * %TP_PROTOCOL_FEATURE_CORE has not been prepared.
         */
        readonly authentication_types: string[];
        /**
         * A non-%NULL #GStrv of interfaces which provide information as to
         * what kind of authentication channels can possibly appear before
         * the connection reaches the CONNECTED state, or %NULL if
         * %TP_PROTOCOL_FEATURE_CORE has not been prepared.
         */
        readonly authenticationTypes: string[];
        /**
         * A #TpAvatarRequirements representing the avatar requirements on this
         * protocol, or %NULL if %TP_PROTOCOL_FEATURE_CORE has not been prepared or
         * if the protocol doesn't support avatars.
         */
        readonly avatar_requirements: any;
        /**
         * A #TpAvatarRequirements representing the avatar requirements on this
         * protocol, or %NULL if %TP_PROTOCOL_FEATURE_CORE has not been prepared or
         * if the protocol doesn't support avatars.
         */
        readonly avatarRequirements: any;
        /**
         * The classes of channel that can be requested from connections to this
         * protocol, or %NULL if this is unknown or the %TP_PROTOCOL_FEATURE_CORE
         * feature has not been prepared.
         */
        readonly capabilities: Capabilities;
        /**
         * The name of the connection manager this protocol is on.
         */
        cm_name: string;
        /**
         * The name of the connection manager this protocol is on.
         */
        cmName: string;
        /**
         * The name of the protocol in a form suitable for display to users,
         * such as "AIM" or "Yahoo!", or a string based on #TpProtocol:protocol-name
         * (currently constructed by putting the first character in title case,
         * but this is not guaranteed) if no better name is available or the
         * %TP_PROTOCOL_FEATURE_CORE feature has not been prepared.
         *
         * This is effectively in the C locale (international English); user
         * interfaces requiring a localized protocol name should look one up in their
         * own message catalog based on either #TpProtocol:protocol-name or
         * #TpProtocol:english-name, but should use this English version as a
         * fallback if no translated version can be found.
         */
        readonly english_name: string;
        /**
         * The name of the protocol in a form suitable for display to users,
         * such as "AIM" or "Yahoo!", or a string based on #TpProtocol:protocol-name
         * (currently constructed by putting the first character in title case,
         * but this is not guaranteed) if no better name is available or the
         * %TP_PROTOCOL_FEATURE_CORE feature has not been prepared.
         *
         * This is effectively in the C locale (international English); user
         * interfaces requiring a localized protocol name should look one up in their
         * own message catalog based on either #TpProtocol:protocol-name or
         * #TpProtocol:english-name, but should use this English version as a
         * fallback if no translated version can be found.
         */
        readonly englishName: string;
        /**
         * The name of an icon in the system's icon theme. If none was supplied
         * by the Protocol, or the %TP_PROTOCOL_FEATURE_CORE feature has not been
         * prepared, a default is used; currently, this is "im-" plus
         * #TpProtocol:protocol-name.
         */
        readonly icon_name: string;
        /**
         * The name of an icon in the system's icon theme. If none was supplied
         * by the Protocol, or the %TP_PROTOCOL_FEATURE_CORE feature has not been
         * prepared, a default is used; currently, this is "im-" plus
         * #TpProtocol:protocol-name.
         */
        readonly iconName: string;
        /**
         * A list of parameter names supported by this connection manager
         * for this protocol, or %NULL if %TP_PROTOCOL_FEATURE_PARAMETERS has not
         * been prepared.
         */
        readonly param_names: string[];
        /**
         * A list of parameter names supported by this connection manager
         * for this protocol, or %NULL if %TP_PROTOCOL_FEATURE_PARAMETERS has not
         * been prepared.
         */
        readonly paramNames: string[];
        /**
         * The machine-readable name of the protocol, taken from the Telepathy
         * D-Bus Interface Specification, such as "jabber" or "local-xmpp".
         */
        protocol_name: string;
        /**
         * The machine-readable name of the protocol, taken from the Telepathy
         * D-Bus Interface Specification, such as "jabber" or "local-xmpp".
         */
        protocolName: string;
        /**
         * The immutable properties of this Protocol, as provided at construction
         * time. This is a #G_VARIANT_TYPE_VARDICT #GVariant,
         * which must not be modified.
         *
         * If the immutable properties were not provided at construction time,
         * the %TP_PROTOCOL_FEATURE_PARAMETERS and %TP_PROTOCOL_FEATURE_CORE features
         * will both be unavailable, and this #TpProtocol object will only be useful
         * as a way to access lower-level D-Bus calls.
         */
        readonly protocol_properties_vardict: GLib.Variant;
        /**
         * The immutable properties of this Protocol, as provided at construction
         * time. This is a #G_VARIANT_TYPE_VARDICT #GVariant,
         * which must not be modified.
         *
         * If the immutable properties were not provided at construction time,
         * the %TP_PROTOCOL_FEATURE_PARAMETERS and %TP_PROTOCOL_FEATURE_CORE features
         * will both be unavailable, and this #TpProtocol object will only be useful
         * as a way to access lower-level D-Bus calls.
         */
        readonly protocolPropertiesVardict: GLib.Variant;
        /**
         * The most common vCard field used for this protocol's contact
         * identifiers, normalized to lower case, or %NULL if there is no such field
         * or the %TP_PROTOCOL_FEATURE_CORE feature has not been prepared.
         */
        readonly vcard_field: string;
        /**
         * The most common vCard field used for this protocol's contact
         * identifiers, normalized to lower case, or %NULL if there is no such field
         * or the %TP_PROTOCOL_FEATURE_CORE feature has not been prepared.
         */
        readonly vcardField: string;

        // Constructors of TelepathyGLib-0.12.Protocol

        static ['new'](
            dbus: DBusDaemon,
            cm_name: string,
            protocol_name: string,
            immutable_properties: GLib.HashTable<any, any>,
        ): Protocol;

        static new_vardict(
            dbus: DBusDaemon,
            cm_name: string,
            protocol_name: string,
            immutable_properties: GLib.Variant,
        ): Protocol;

        // Owm methods of TelepathyGLib-0.12.Protocol

        static get_feature_quark_core(): GLib.Quark;
        static get_feature_quark_parameters(): GLib.Quark;
        /**
         * Ensure that the known interfaces for TpProtocol have been set up.
         * This is done automatically when necessary, but for correct
         * overriding of library interfaces by local extensions, you should
         * call this function before calling
         * tp_proxy_or_subclass_hook_on_interface_add() with first argument
         * %TP_TYPE_PROTOCOL.
         */
        static init_known_interfaces(): void;

        // Owm methods of TelepathyGLib-0.12.Protocol

        /**
         * Return whether a new account can be registered on this protocol, by setting
         * the special "register" parameter to %TRUE.
         * @returns %TRUE if @protocol supports the parameter "register"
         */
        can_register(): boolean;
        /**
         * Return the #TpProtocol:protocol-properties-vardict property.
         * @returns the value of #TpProtocol:protocol-properties-vardict
         */
        dup_immutable_properties(): GLib.Variant;
        /**
         * &lt;!-- no more to say --&gt;
         * @param param a parameter name
         * @returns a structure representing the parameter @param,  or %NULL if not supported. Free with tp_connection_manager_param_free()
         */
        dup_param(param: string): ConnectionManagerParam;
        /**
         * Returns a list of parameter names supported by this connection manager
         * for this protocol.
         *
         * The result is copied and must be freed by the caller with g_strfreev().
         * @returns a copy of  #TpProtocol:param-names
         */
        dup_param_names(): string[];
        /**
         * Returns a list of parameters supported by this connection manager.
         *
         * The returned list must be freed by the caller, for instance with
         * &lt;literal&gt;g_list_free_full (l,
         * (GDestroyNotify) tp_connection_manager_param_free)&lt;/literal&gt;.
         * @returns a list of #TpConnectionManagerParam structures, owned by the caller
         */
        dup_params(): ConnectionManagerParam[];
        /**
         * Return the presence statuses that might be supported by connections
         * to this protocol.
         *
         * It is possible that some of these statuses will not actually be supported
         * by a connection: for instance, an XMPP connection manager would
         * include "hidden" in this list, even though not all XMPP servers allow
         * users to be online-but-hidden.
         * @returns a  list of statuses, or %NULL if unknown
         */
        dup_presence_statuses(): PresenceStatusSpec[];
        /**
         * &lt;!-- --&gt;
         * @returns the value of #TpProtocol:addressable-uri-schemes
         */
        get_addressable_uri_schemes(): string[];
        /**
         * &lt;!-- --&gt;
         * @returns the value of #TpProtocol:addressable-vcard-fields
         */
        get_addressable_vcard_fields(): string[];
        /**
         * &lt;!-- --&gt;
         * @returns the value of #TpProtocol:authentication-types
         */
        get_authentication_types(): string[];
        /**
         * Return the #TpProtocol:avatar-requirements property
         * @returns the value of #TpProtocol:avatar-requirements
         */
        get_avatar_requirements(): AvatarRequirements;
        /**
         * &lt;!-- --&gt;
         * @returns #TpProtocol:capabilities, which must be referenced  (if non-%NULL) if it will be kept
         */
        get_capabilities(): Capabilities;
        /**
         * Return the #TpProtocol:cm-name property.
         * @returns the value of #TpProtocol:cm-name
         */
        get_cm_name(): string;
        /**
         * &lt;!-- --&gt;
         * @returns the non-%NULL, non-empty value of #TpProtocol:english-name
         */
        get_english_name(): string;
        /**
         * &lt;!-- --&gt;
         * @returns the non-%NULL, non-empty value of #TpProtocol:icon-name
         */
        get_icon_name(): string;
        /**
         * Return the same thing as the protocol-name property, for convenient use
         * in C code. The returned string is valid for as long as `self` exists.
         * @returns the value of the #TpProtocol:protocol-name property
         */
        get_name(): string;
        /**
         * &lt;!-- no more to say --&gt;
         * @param param a parameter name
         * @returns a structure representing the parameter @param, or %NULL if not          supported
         */
        get_param(param: string): ConnectionManagerParam;
        /**
         * &lt;!-- --&gt;
         * @returns the value of #TpProtocol:vcard-field
         */
        get_vcard_field(): string;
        /**
         * &lt;!-- no more to say --&gt;
         * @param param a parameter name
         * @returns %TRUE if @self supports the parameter @param.
         */
        has_param(param: string): boolean;
        /**
         * Return a string that could identify the account with the given
         * parameters. In most protocols that string is a normalized 'account'
         * parameter, but some protocols have more complex requirements;
         * for instance, on IRC, the 'account' (nickname) is insufficient,
         * and must be combined with a server or network name.
         * @param vardict the account parameters as a #GVariant of  type %G_VARIANT_TYPE_VARDICT. If it is floating, ownership will  be taken, as if via g_variant_ref_sink().
         * @param cancellable may be used to cancel the async request
         * @param callback a callback to call when  the request is satisfied
         */
        identify_account_async(
            vardict: GLib.Variant,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Interpret the result of tp_protocol_identify_account_async().
         * @param result a #GAsyncResult
         * @returns a string identifying the account,  or %NULL on error
         */
        identify_account_finish(result: Gio.AsyncResult): string;
        /**
         * Perform best-effort offline contact normalization. This does syntactic
         * normalization (e.g. transforming case-insensitive text to lower-case),
         * but does not query servers or anything similar.
         * @param contact a contact identifier, possibly invalid
         * @param cancellable may be used to cancel the async request
         * @param callback a callback to call when  the request is satisfied
         */
        normalize_contact_async(
            contact: string,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Interpret the result of tp_protocol_normalize_contact_async().
         * @param result a #GAsyncResult
         * @returns the normalized form of @contact,  or %NULL on error
         */
        normalize_contact_finish(result: Gio.AsyncResult): string;
        /**
         * Perform best-effort offline contact normalization, for a contact in
         * the form of a URI. This method will fail if the URI is not in a
         * scheme supported by this protocol or connection manager.
         * @param uri a contact URI, possibly invalid
         * @param cancellable may be used to cancel the async request
         * @param callback a callback to call when the request is satisfied
         */
        normalize_contact_uri_async(
            uri: string,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Interpret the result of tp_protocol_normalize_contact_uri_async().
         * @param result a #GAsyncResult
         * @returns the normalized form of @uri,  or %NULL on error
         */
        normalize_contact_uri_finish(result: Gio.AsyncResult): string;
        /**
         * Perform best-effort offline contact normalization, for a contact in
         * the form of a vCard field. This method will fail if the vCard field
         * is not supported by this protocol or connection manager.
         * @param field a vCard field
         * @param value an address that is a value of @field
         * @param cancellable may be used to cancel the async request
         * @param callback a callback to call when the request is satisfied
         */
        normalize_vcard_address_async(
            field: string,
            value: string,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Interpret the result of tp_protocol_normalize_vcard_address_async().
         * @param result a #GAsyncResult
         * @returns the normalized form of @value,  or %NULL on error
         */
        normalize_vcard_address_finish(result: Gio.AsyncResult): string;
    }

    module Proxy {
        // Signal callback interfaces

        interface InterfaceAdded {
            (id: number, proxy: unknown): void;
        }

        interface Invalidated {
            (domain: number, code: number, message: string): void;
        }

        // Constructor properties interface
    }

    /**
     * Structure representing a Telepathy client-side proxy.
     */
    class Proxy extends GObject.Object {
        // Own properties of TelepathyGLib-0.12.Proxy

        /**
         * The D-Bus bus name for this object. Read-only except during construction.
         */
        bus_name: string;
        /**
         * The D-Bus bus name for this object. Read-only except during construction.
         */
        busName: string;
        /**
         * The D-Bus daemon for this object (this object itself, if it is a
         * TpDBusDaemon). Read-only except during construction.
         */
        dbus_daemon: DBusDaemon;
        /**
         * The D-Bus daemon for this object (this object itself, if it is a
         * TpDBusDaemon). Read-only except during construction.
         */
        dbusDaemon: DBusDaemon;
        /**
         * The #TpSimpleClientFactory used to create this proxy,
         * or %NULL if this proxy was not created through a factory.
         */
        factory: SimpleClientFactory;
        /**
         * Known D-Bus interface names for this object.
         */
        readonly interfaces: string[];
        /**
         * The D-Bus object path for this object. Read-only except during
         * construction.
         */
        object_path: string;
        /**
         * The D-Bus object path for this object. Read-only except during
         * construction.
         */
        objectPath: string;

        // Owm methods of TelepathyGLib-0.12.Proxy

        /**
         * Convert a D-Bus error name into a GError as if it was returned by a method
         * on this proxy. This method is useful when D-Bus error names are emitted in
         * signals, such as Connection.ConnectionError and
         * Group.MembersChangedDetailed.
         * @param dbus_error a D-Bus error name, for instance from the callback for              tp_cli_connection_connect_to_connection_error()
         * @param debug_message a debug message that accompanied the error name, or %NULL
         */
        dbus_error_to_gerror(dbus_error: string, debug_message: string): void;
        /**
         * &lt;!-- --&gt;
         * @returns the bus name of the application exporting the object. The caller  must copy the string with g_strdup() if it will be kept.
         */
        get_bus_name(): string;
        /**
         * &lt;!-- --&gt;
         * @returns a borrowed reference to the #TpDBusDaemon for  this object, if any; always %NULL if this object is itself a  #TpDBusDaemon. The caller must reference the returned object with  g_object_ref() if it will be kept.
         */
        get_dbus_daemon(): DBusDaemon;
        /**
         * &lt;!-- --&gt;
         * @returns the same value as #TpProxy:factory property
         */
        get_factory(): SimpleClientFactory;
        /**
         * &lt;!-- --&gt;
         * @returns the reason this proxy was invalidated, or %NULL if has not been  invalidated. The caller must copy the error, for instance with  g_error_copy(), if it will be kept.
         */
        get_invalidated(): GLib.Error;
        /**
         * &lt;!-- --&gt;
         * @returns the object path of the remote object. The caller must copy the  string with g_strdup() if it will be kept.
         */
        get_object_path(): string;
        /**
         * Return whether this proxy is known to have a particular interface. In
         * versions older than 0.11.11, this was a macro wrapper around
         * tp_proxy_has_interface_by_id().
         *
         * For objects that discover their interfaces at runtime, this method will
         * indicate that interfaces are missing until they are known to be present.
         * In subclasses that define features for use with tp_proxy_prepare_async(),
         * successfully preparing the "core" feature for that subclass (such as
         * %TP_CHANNEL_FEATURE_CORE or %TP_CONNECTION_FEATURE_CORE) implies that the
         * interfaces are known.
         * @param iface the D-Bus interface required, as a string
         * @returns %TRUE if this proxy implements the given interface.
         */
        has_interface(iface: string): boolean;
        /**
         * Return whether this proxy is known to have a particular interface, by its
         * quark ID. This is equivalent to using g_quark_to_string() followed by
         * tp_proxy_has_interface(), but more efficient.
         * @param iface quark representing the D-Bus interface required
         * @returns %TRUE if this proxy implements the given interface.
         */
        has_interface_by_id(iface: GLib.Quark): boolean;
        /**
         * Return %TRUE if `feature` has been prepared successfully, or %FALSE if
         * `feature` has not been requested, has not been prepared yet, or is not
         * available on this object at all.
         *
         * (For instance, if `feature` is %TP_CHANNEL_FEATURE_CHAT_STATES and `self`
         * is a #TpChannel in a protocol that doesn't actually implement chat states,
         * or is not a #TpChannel at all, then this method will return %FALSE.)
         *
         * To prepare features, call tp_proxy_prepare_async().
         * @param feature a feature that is supported by @self's class
         * @returns %TRUE if @feature has been prepared successfully
         */
        is_prepared(feature: GLib.Quark): boolean;
        /**
         * #TpProxy itself does not support any features, but subclasses like
         * #TpChannel can support features, which can either be core functionality like
         * %TP_CHANNEL_FEATURE_CORE, or extended functionality like
         * %TP_CHANNEL_FEATURE_CHAT_STATES.
         *
         * Proxy instances start with no features prepared. When features are
         * requested via tp_proxy_prepare_async(), the proxy starts to do the
         * necessary setup to use those features.
         *
         * tp_proxy_prepare_async() always waits for core functionality of the proxy's
         * class to be prepared, even if it is not specifically requested: for
         * instance, because %TP_CHANNEL_FEATURE_CORE is core functionality of a
         * #TpChannel,
         *
         *
         * ```
         * TpChannel *channel = ...;
         *
         * tp_proxy_prepare_async (channel, NULL, callback, user_data);
         * ```
         *
         *
         * is equivalent to
         *
         *
         * ```
         * TpChannel *channel = ...;
         * GQuark features[] = { TP_CHANNEL_FEATURE_CORE, 0 };
         *
         * tp_proxy_prepare_async (channel, features, callback, user_data);
         * ```
         *
         *
         * If a feature represents core functionality (like %TP_CHANNEL_FEATURE_CORE),
         * failure to prepare it will result in tp_proxy_prepare_async() finishing
         * unsuccessfully: if failure to prepare the feature indicates that the proxy
         * is no longer useful, it will also emit #TpProxy::invalidated.
         *
         * If a feature represents non-essential functionality
         * (like %TP_CHANNEL_FEATURE_CHAT_STATES), or is not supported by the object
         * at all, then failure to prepare it is not fatal:
         * tp_proxy_prepare_async() will complete successfully, but
         * tp_proxy_is_prepared() will still return %FALSE for the feature, and
         * accessor methods for the feature will typically return a dummy value.
         *
         * Some #TpProxy subclasses automatically start to prepare their core
         * features when instantiated, and features will sometimes become prepared as
         * a side-effect of other actions, but to ensure that a feature is present you
         * must generally call tp_proxy_prepare_async() and wait for the result.
         * @param features an array  of desired features, ending with 0; %NULL is equivalent to an array  containing only 0
         * @param callback if not %NULL, called exactly once, when the features have all  been prepared or failed to prepare, or after the proxy is invalidated
         */
        prepare_async(features?: GLib.Quark[] | null, callback?: Gio.AsyncReadyCallback<this> | null): void;
        /**
         * Check for error in a call to tp_proxy_prepare_async(). An error here
         * generally indicates that either the asynchronous call was cancelled,
         * or `self` has emitted #TpProxy::invalidated.
         * @param result the result passed to the callback of tp_proxy_prepare_async()
         * @returns %FALSE (setting @error) if tp_proxy_prepare_async() failed  or was cancelled
         */
        prepare_finish(result: Gio.AsyncResult): boolean;
    }

    module RoomInfo {
        // Constructor properties interface
    }

    /**
     * Data structure representing a #TpRoomInfo.
     */
    class RoomInfo extends GObject.Object {
        // Owm methods of TelepathyGLib-0.12.RoomInfo

        /**
         * &lt;!-- --&gt;
         * @returns a string representing the D-Bus interface name of the channel type of the room
         */
        get_channel_type(): string;
        /**
         * &lt;!-- --&gt;
         * @returns a description of the room's overall purpose
         */
        get_description(): string;
        /**
         * &lt;!-- --&gt;
         * @returns the #TpHandle of the room
         */
        get_handle(): Handle;
        /**
         * &lt;!-- --&gt;
         * @returns the identifier of the room (as would be returned by inspecting the #TpHandle returned by tp_room_info_get_handle())
         */
        get_handle_name(): string;
        /**
         * &lt;!-- --&gt;
         * @param known either %NULL, or a location in which to store %TRUE if the returned value is meaningful
         * @returns %TRUE if you cannot join the room, but must be invited
         */
        get_invite_only(known: boolean): boolean;
        /**
         * &lt;!-- --&gt;
         * @param known either %NULL, or a location in which to store %TRUE if the returned value is meaningful
         * @returns the number of members in the room
         */
        get_members_count(known: boolean): number;
        /**
         * &lt;!-- --&gt;
         * @returns the human-readable name of the room if different from the handle
         */
        get_name(): string;
        /**
         * &lt;!-- --&gt;
         * @param known either %NULL, or a location in which to store %TRUE if the returned value is meaningful
         * @returns %TRUE if the room requires a password to enter
         */
        get_requires_password(known: boolean): boolean;
        /**
         * &lt;!-- --&gt;
         * @returns the human-readable identifier of the room
         */
        get_room_id(): string;
        /**
         * &lt;!-- --&gt;
         * @returns the DNS name of the server hosting the room
         */
        get_server(): string;
        /**
         * &lt;!-- --&gt;
         * @returns the current subject of conversation in the room
         */
        get_subject(): string;
    }

    module RoomList {
        // Signal callback interfaces

        interface Failed {
            (error: GLib.Error): void;
        }

        interface GotRoom {
            (room: RoomInfo): void;
        }

        // Constructor properties interface
    }

    /**
     * Data structure representing a #TpRoomList.
     */
    class RoomList extends GObject.Object {
        // Own properties of TelepathyGLib-0.12.RoomList

        /**
         * The #TpAccount to use for the room listing.
         */
        account: Account;
        /**
         * %TRUE if the channel is currently listing rooms.
         *
         * This property is meaningless until the
         * %TP_ROOM_LIST_FEATURE_LISTING feature has been prepared.
         */
        readonly listing: boolean;
        /**
         * The DNS name of the server whose rooms are listed by this channel, or
         * %NULL.
         */
        server: string;

        // Constructors of TelepathyGLib-0.12.RoomList

        static new_finish(result: Gio.AsyncResult): RoomList;

        // Owm methods of TelepathyGLib-0.12.RoomList

        /**
         * &lt;!-- --&gt;
         * @param account a #TpAccount for the room listing
         * @param server the DNS name of the server whose rooms should listed
         * @param callback a #GAsyncReadyCallback to call when the initialization is finished
         */
        static new_async(account: Account, server: string, callback?: Gio.AsyncReadyCallback<RoomList> | null): void;

        // Owm methods of TelepathyGLib-0.12.RoomList

        /**
         * Return the #TpRoomList:account property
         * @returns the value of #TpRoomList:account property
         */
        get_account(): Account;
        /**
         * Return the #TpRoomList:server property
         * @returns the value of #TpRoomList:server property
         */
        get_server(): string;
        /**
         * Return the #TpRoomList:listing property
         * @returns the value of #TpRoomList:listing property
         */
        is_listing(): boolean;
        /**
         * Start listing rooms using `self`. Use the TpRoomList::got-rooms
         * signal to get the rooms found.
         * Errors will be reported using the TpRoomList::failed signal.
         */
        start(): void;
    }

    module SignalledMessage {
        // Constructor properties interface
    }

    /**
     * Opaque structure representing a received message using the Telepathy
     * messages interface
     */
    class SignalledMessage extends Message {
        // Own properties of TelepathyGLib-0.12.SignalledMessage

        /**
         * A #TpContact representing the sender of the message, if known, or %NULL
         * otherwise.
         */
        sender: Contact;

        // Owm methods of TelepathyGLib-0.12.SignalledMessage

        /**
         * Returns a #TpContact representing the sender of `message` if known, %NULL
         * otherwise.
         * @param message a #TpSignalledMessage
         */
        static get_sender(message: Message): Contact;
    }

    module SimpleApprover {
        // Constructor properties interface
    }

    /**
     * Data structure representing a simple Approver implementation.
     */
    class SimpleApprover extends BaseClient {
        // Own properties of TelepathyGLib-0.12.SimpleApprover

        /**
         * The #TpSimpleApproverAddDispatchOperationImpl callback implementing the
         * AddDispatchOperation D-Bus method.
         *
         * This property can't be %NULL.
         */
        callback: any;
        /**
         * The #GDestroyNotify function called to free #TpSimpleApprover:user-data
         * when the #TpSimpleApprover is destroyed.
         */
        destroy: any;
        /**
         * The user-data pointer passed to #TpSimpleApprover:callback.
         */
        user_data: any;
        /**
         * The user-data pointer passed to #TpSimpleApprover:callback.
         */
        userData: any;

        // Constructors of TelepathyGLib-0.12.SimpleApprover

        static ['new'](
            dbus: DBusDaemon,
            name: string,
            uniquify: boolean,
            callback: SimpleApproverAddDispatchOperationImpl,
        ): SimpleApprover;

        static new_with_am(
            account_manager: AccountManager,
            name: string,
            uniquify: boolean,
            callback: SimpleApproverAddDispatchOperationImpl,
        ): SimpleApprover;

        static new_with_factory(
            factory: SimpleClientFactory,
            name: string,
            uniquify: boolean,
            callback: SimpleApproverAddDispatchOperationImpl,
        ): SimpleApprover;
    }

    module SimpleClientFactory {
        // Constructor properties interface
    }

    /**
     * Data structure representing a #TpSimpleClientFactory
     */
    class SimpleClientFactory extends GObject.Object {
        // Own properties of TelepathyGLib-0.12.SimpleClientFactory

        /**
         * The D-Bus daemon for this object.
         */
        dbus_daemon: DBusDaemon;
        /**
         * The D-Bus daemon for this object.
         */
        dbusDaemon: DBusDaemon;

        // Constructors of TelepathyGLib-0.12.SimpleClientFactory

        static ['new'](dbus?: DBusDaemon | null): SimpleClientFactory;

        // Owm methods of TelepathyGLib-0.12.SimpleClientFactory

        /**
         * Add `features` to the desired features to be prepared on #TpAccount
         * objects. Those features will be added to the features already returned be
         * tp_simple_client_factory_dup_account_features().
         *
         * It is not necessary to add %TP_ACCOUNT_FEATURE_CORE as it is already
         * included by default.
         *
         * Note that these features will not be added to existing #TpAccount
         * objects; the user must call tp_proxy_prepare_async() themself.
         * @param features an array  of desired features, ending with 0; %NULL is equivalent to an array  containing only 0
         */
        add_account_features(features?: GLib.Quark[] | null): void;
        /**
         * Add `features` to the desired features to be prepared on #TpChannel
         * objects. Those features will be added to the features already returned be
         * tp_simple_client_factory_dup_channel_features().
         *
         * It is not necessary to add %TP_CHANNEL_FEATURE_CORE as it is already
         * included by default.
         *
         * Note that these features will not be added to existing #TpChannel
         * objects; the user must call tp_proxy_prepare_async() themself.
         * @param features an array  of desired features, ending with 0; %NULL is equivalent to an array  containing only 0
         */
        add_channel_features(features?: GLib.Quark[] | null): void;
        /**
         * Add `features` to the desired features to be prepared on #TpConnection
         * objects. Those features will be added to the features already returned be
         * tp_simple_client_factory_dup_connection_features().
         *
         * It is not necessary to add %TP_CONNECTION_FEATURE_CORE as it is already
         * included by default.
         *
         * Note that these features will not be added to existing #TpConnection
         * objects; the user must call tp_proxy_prepare_async() themself.
         * @param features an array  of desired features, ending with 0; %NULL is equivalent to an array  containing only 0
         */
        add_connection_features(features?: GLib.Quark[] | null): void;
        /**
         * Add `features` to the desired features to be prepared on #TpContact
         * objects. Those features will be added to the features already returned be
         * tp_simple_client_factory_dup_contact_features().
         *
         * Note that these features will not be added to existing #TpContact
         * objects; the user must call tp_connection_upgrade_contacts() themself.
         * @param features an array of desired  features (may be %NULL if @n_features is 0)
         */
        add_contact_features(features?: ContactFeature[] | null): void;
        /**
         * Return a zero-terminated #GArray containing the #TpAccount features that
         * should be prepared on `account`.
         * @param account a #TpAccount
         * @returns a newly allocated  #GArray
         */
        dup_account_features(account: Account): GLib.Quark[];
        /**
         * Return a zero-terminated #GArray containing the #TpChannel features that
         * should be prepared on `channel`.
         * @param channel a #TpChannel
         * @returns a newly allocated  #GArray
         */
        dup_channel_features(channel: Channel): GLib.Quark[];
        /**
         * Return a zero-terminated #GArray containing the #TpConnection features that
         * should be prepared on `connection`.
         * @param connection a #TpConnection
         * @returns a newly allocated  #GArray
         */
        dup_connection_features(connection: Connection): GLib.Quark[];
        /**
         * Return a #GArray containing the #TpContactFeature that should be prepared on
         * all contacts of `connection`.
         * @param connection a #TpConnection
         * @returns a newly  allocated #GArray
         */
        dup_contact_features(connection: Connection): ContactFeature[];
        /**
         * Returns a #TpAccount proxy for the account at `object_path`. The returned
         * #TpAccount is cached; the same #TpAccount object will be returned by this
         * function repeatedly, as long as at least one reference exists.
         *
         * Note that the returned #TpAccount is not guaranteed to be ready; the caller
         * is responsible for calling tp_proxy_prepare_async() with the desired
         * features (as given by tp_simple_client_factory_dup_account_features()).
         *
         * This function is rather low-level. tp_account_manager_dup_valid_accounts()
         * and #TpAccountManager::validity-changed are more appropriate for most
         * applications.
         * @param object_path the object path of an account
         * @param immutable_properties the immutable properties of the account, or %NULL.
         * @returns a reference to a #TpAccount;  see tp_account_new().
         */
        ensure_account(object_path: string, immutable_properties: GLib.HashTable<string, GObject.Value>): Account;
        /**
         * Returns a #TpChannel proxy for the channel at `object_path` on `connection`.
         * The returned #TpChannel is cached; the same #TpChannel object
         * will be returned by this function repeatedly, as long as at least one
         * reference exists.
         *
         * Note that the returned #TpChannel is not guaranteed to be ready; the
         * caller is responsible for calling tp_proxy_prepare_async() with the desired
         * features (as given by tp_simple_client_factory_dup_channel_features()).
         *
         * This function is rather low-level.
         * #TpAccountChannelRequest and #TpBaseClient are more appropriate ways
         * to obtain channels for most applications.
         * @param connection a #TpConnection whose #TpProxy:factory is this object
         * @param object_path the object path of a channel on @connection
         * @param immutable_properties the immutable properties of the channel
         * @returns a reference to a #TpChannel;  see tp_channel_new_from_properties().
         */
        ensure_channel(
            connection: Connection,
            object_path: string,
            immutable_properties: GLib.HashTable<string, GObject.Value>,
        ): Channel;
        /**
         * Returns a #TpConnection proxy for the connection at `object_path`.
         * The returned #TpConnection is cached; the same #TpConnection object
         * will be returned by this function repeatedly, as long as at least one
         * reference exists.
         *
         * Note that the returned #TpConnection is not guaranteed to be ready; the
         * caller is responsible for calling tp_proxy_prepare_async() with the desired
         * features (as given by tp_simple_client_factory_dup_connection_features()).
         *
         * This function is rather low-level. #TpAccount:connection is more
         * appropriate for most applications.
         * @param object_path the object path of a connection
         * @param immutable_properties the immutable properties of the connection.
         * @returns a reference to a #TpConnection;  see tp_connection_new().
         */
        ensure_connection(object_path: string, immutable_properties: GLib.HashTable<string, GObject.Value>): Connection;
        /**
         * Returns a #TpContact representing `identifier` (and `handle)` on `connection`.
         * The returned #TpContact is cached; the same #TpContact object
         * will be returned by this function repeatedly, as long as at least one
         * reference exists.
         *
         * Note that the returned #TpContact is not guaranteed to be ready; the caller
         * is responsible for calling tp_connection_upgrade_contacts() with the desired
         * features (as given by tp_simple_client_factory_dup_contact_features()).
         *
         * For this function to work properly, tp_connection_has_immortal_handles()
         * must return %TRUE for `connection`.
         * @param connection a #TpConnection whose #TpProxy:factory is this object
         * @param handle a #TpHandle
         * @param identifier a string representing the contact's identifier
         * @returns a reference to a #TpContact.
         */
        ensure_contact(connection: Connection, handle: Handle, identifier: string): Contact;
        /**
         * Same as tp_connection_dup_contact_by_id_async(), but prepare the
         * contact with all features previously passed to
         * tp_simple_client_factory_add_contact_features().
         * @param connection a #TpConnection
         * @param identifier a string representing the contact's identifier
         * @param callback a callback to call when the operation finishes
         */
        ensure_contact_by_id_async(
            connection: Connection,
            identifier: string,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Finishes tp_simple_client_factory_ensure_contact_by_id_async()
         * @param result a #GAsyncResult
         * @returns a #TpContact or %NULL on error.
         */
        ensure_contact_by_id_finish(result: Gio.AsyncResult): Contact;
        /**
         * &lt;!-- --&gt;
         * @returns the value of the #TpSimpleClientFactory:dbus-daemon  property
         */
        get_dbus_daemon(): DBusDaemon;
        /**
         * Same as tp_connection_upgrade_contacts_async(), but prepare contacts with all
         * features previously passed to
         * tp_simple_client_factory_add_contact_features().
         * @param connection a #TpConnection whose #TpProxy:factory is this object
         * @param contacts An array of #TpContact objects  associated with @self
         * @param callback a callback to call when the operation finishes
         */
        upgrade_contacts_async(
            connection: Connection,
            contacts: Contact[],
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Finishes tp_simple_client_factory_upgrade_contacts_async()
         * @param result a #GAsyncResult
         * @returns %TRUE on success, %FALSE otherwise.
         */
        upgrade_contacts_finish(result: Gio.AsyncResult): boolean;
    }

    module SimpleHandler {
        // Constructor properties interface
    }

    /**
     * Data structure representing a simple Handler implementation.
     */
    class SimpleHandler extends BaseClient {
        // Own properties of TelepathyGLib-0.12.SimpleHandler

        /**
         * The value of the Handler.BypassApproval D-Bus property.
         */
        bypass_approval: boolean;
        /**
         * The value of the Handler.BypassApproval D-Bus property.
         */
        bypassApproval: boolean;
        /**
         * The #TpSimpleHandlerHandleChannelsImpl callback implementing the
         * HandleChannels D-Bus method.
         *
         * This property can't be %NULL.
         */
        callback: any;
        /**
         * The #GDestroyNotify function called to free #TpSimpleHandler:user-data
         * when the #TpSimpleHandler is destroyed.
         */
        destroy: any;
        /**
         * If %TRUE, the Handler will implement the Requests interface
         */
        requests: boolean;
        /**
         * The user-data pointer passed to #TpSimpleHandler:callback.
         */
        user_data: any;
        /**
         * The user-data pointer passed to #TpSimpleHandler:callback.
         */
        userData: any;

        // Constructors of TelepathyGLib-0.12.SimpleHandler

        static ['new'](
            dbus: DBusDaemon,
            bypass_approval: boolean,
            requests: boolean,
            name: string,
            uniquify: boolean,
            callback: SimpleHandlerHandleChannelsImpl,
        ): SimpleHandler;

        static new_with_am(
            account_manager: AccountManager,
            bypass_approval: boolean,
            requests: boolean,
            name: string,
            uniquify: boolean,
            callback: SimpleHandlerHandleChannelsImpl,
        ): SimpleHandler;

        static new_with_factory(
            factory: SimpleClientFactory,
            bypass_approval: boolean,
            requests: boolean,
            name: string,
            uniquify: boolean,
            callback: SimpleHandlerHandleChannelsImpl,
        ): SimpleHandler;
    }

    module SimpleObserver {
        // Constructor properties interface
    }

    /**
     * Data structure representing a simple Observer implementation.
     */
    class SimpleObserver extends BaseClient {
        // Own properties of TelepathyGLib-0.12.SimpleObserver

        /**
         * The TpSimpleObserverObserveChannelsImpl callback implementing the
         * ObserveChannels D-Bus method.
         *
         * This property can't be %NULL.
         */
        callback: any;
        /**
         * The #GDestroyNotify function called to free the user-data pointer when
         * the #TpSimpleObserver is destroyed.
         */
        destroy: any;
        /**
         * The value of the Observer.Recover D-Bus property.
         */
        recover: boolean;
        /**
         * The user-data pointer passed to the callback implementing the
         * ObserveChannels D-Bus method.
         */
        user_data: any;
        /**
         * The user-data pointer passed to the callback implementing the
         * ObserveChannels D-Bus method.
         */
        userData: any;

        // Constructors of TelepathyGLib-0.12.SimpleObserver

        static ['new'](
            dbus: DBusDaemon,
            recover: boolean,
            name: string,
            uniquify: boolean,
            callback: SimpleObserverObserveChannelsImpl,
        ): SimpleObserver;

        static new_with_am(
            account_manager: AccountManager,
            recover: boolean,
            name: string,
            uniquify: boolean,
            callback: SimpleObserverObserveChannelsImpl,
        ): SimpleObserver;

        static new_with_factory(
            factory: SimpleClientFactory,
            recover: boolean,
            name: string,
            uniquify: boolean,
            callback: SimpleObserverObserveChannelsImpl,
        ): SimpleObserver;
    }

    module StreamTubeChannel {
        // Signal callback interfaces

        interface Incoming {
            (tube_connection: StreamTubeConnection): void;
        }

        // Constructor properties interface
    }

    /**
     * Data structure representing a #TpStreamTubeChannel.
     */
    class StreamTubeChannel extends Channel {
        // Own properties of TelepathyGLib-0.12.StreamTubeChannel

        /**
         * A %G_VARIANT_TYPE_VARDICT representing the parameters of the tube.
         *
         * Will be %NULL for outgoing tubes until the tube has been offered.
         */
        readonly parameters_vardict: GLib.Variant;
        /**
         * A %G_VARIANT_TYPE_VARDICT representing the parameters of the tube.
         *
         * Will be %NULL for outgoing tubes until the tube has been offered.
         */
        readonly parametersVardict: GLib.Variant;
        /**
         * A string representing the service name that will be used over the tube.
         */
        readonly service: string;

        // Constructors of TelepathyGLib-0.12.StreamTubeChannel

        static ['new'](
            conn: Connection,
            object_path: string,
            immutable_properties: GLib.HashTable<string, GObject.Value>,
        ): StreamTubeChannel;

        // Owm methods of TelepathyGLib-0.12.StreamTubeChannel

        /**
         * Accept an incoming stream tube. When the tube has been accepted, `callback`
         * will be called. You can then call tp_stream_tube_channel_accept_finish()
         * to get a #TpStreamTubeConnection connected to the tube.
         * @param callback a callback to call when the tube has been accepted
         */
        accept_async(callback?: Gio.AsyncReadyCallback<this> | null): void;
        /**
         * Finishes accepting an incoming stream tube. The returned
         * #TpStreamTubeConnection can then be used to exchange data through the tube.
         * @param result a #GAsyncResult
         * @returns a newly created #TpStreamTubeConnection
         */
        accept_finish(result: Gio.AsyncResult): StreamTubeConnection;
        /**
         * Return the parameters of the dbus-tube channel in a variant of
         * type %G_VARIANT_TYPE_VARDICT whose keys are strings representing
         * parameter names and values are variants representing corresponding
         * parameter values set by the offerer when offering this channel.
         *
         * The GVariant returned is %NULL if this is an outgoing tube that has not
         * yet been offered or the parameters property has not been set.
         *
         * Use g_variant_lookup(), g_variant_lookup_value(), or tp_vardict_get_uint32()
         * and similar functions for convenient access to the values.
         * @returns a new reference to a #GVariant
         */
        dup_parameters_vardict(): GLib.Variant;
        /**
         * Return the #TpStreamTubeChannel:service property
         * @returns the value of #TpStreamTubeChannel:service
         */
        get_service(): string;
        /**
         * Offer an outgoing stream tube. When the tube has been offered, `callback`
         * will be called. You can then call tp_stream_tube_channel_offer_finish()
         * to get the result of the operation.
         *
         * You have to connect to the #TpStreamTubeChannel::incoming signal to get a
         * #TpStreamTubeConnection each time a contact establishes a connection to
         * the tube.
         * @param params parameters of the tube, or %NULL
         * @param callback a callback to call when the tube has been offered
         */
        offer_async(params?: GLib.HashTable<any, any> | null, callback?: Gio.AsyncReadyCallback<this> | null): void;
        /**
         * Finishes offering an outgoing stream tube.
         * @param result a #GAsyncResult
         * @returns %TRUE when a Tube has been successfully offered; %FALSE otherwise
         */
        offer_finish(result: Gio.AsyncResult): boolean;
    }

    module StreamTubeConnection {
        // Signal callback interfaces

        interface Closed {
            (error: GLib.Error): void;
        }

        // Constructor properties interface
    }

    /**
     * Data structure representing a connection on a #TpStreamTubeChannel.
     */
    class StreamTubeConnection extends GObject.Object {
        // Own properties of TelepathyGLib-0.12.StreamTubeConnection

        /**
         * The #TpStreamTubeChannel channel associated with this connection
         *
         * This property can't be %NULL.
         */
        channel: StreamTubeChannel;
        /**
         * The #TpContact with who we are exchanging data through this tube, or
         * %NULL if we can't safely identify the contact.
         *
         * If not %NULL, the #TpContact objects is guaranteed to have all of the
         * features previously passed to
         * tp_simple_client_factory_add_contact_features() prepared.
         */
        contact: Contact;
        /**
         * The #GSocketConnection used to transfer data through this connection.
         * Read-only except during construction.
         *
         * This property can't be %NULL.
         */
        socket_connection: Gio.SocketConnection;
        /**
         * The #GSocketConnection used to transfer data through this connection.
         * Read-only except during construction.
         *
         * This property can't be %NULL.
         */
        socketConnection: Gio.SocketConnection;

        // Owm methods of TelepathyGLib-0.12.StreamTubeConnection

        /**
         * Return the #TpStreamTubeConnection:channel property
         * @returns the value of #TpStreamTubeConnection:channel
         */
        get_channel(): StreamTubeChannel;
        /**
         * Return the #TpStreamTubeConnection:contact property
         * @returns the value of #TpStreamTubeConnection:contact
         */
        get_contact(): Contact;
        /**
         * Return the #TpStreamTubeConnection:socket-connection property
         * @returns the value of #TpStreamTubeConnection:socket-connection
         */
        get_socket_connection(): Gio.SocketConnection;
    }

    module TLSCertificate {
        // Constructor properties interface
    }

    /**
     * A #TpProxy subclass representing a server or peer's TLS certificate
     * being presented for acceptance/rejection.
     */
    class TLSCertificate extends Proxy {
        // Own properties of TelepathyGLib-0.12.TLSCertificate

        /**
         * The raw data of the certificate or certificate chain, represented
         * as a #GPtrArray of #GBytes. It should be interpreted
         * according to #TpTLSCertificate:cert-type.
         *
         * The first certificate in this array is the server's certificate,
         * followed by its issuer, followed by the issuer's issuer and so on.
         *
         * For "x509" certificates, each certificate is an X.509 certificate in
         * binary (DER) format.
         *
         * For "pgp" certificates, each certificate is a binary OpenPGP key.
         */
        readonly cert_data: any[];
        /**
         * The raw data of the certificate or certificate chain, represented
         * as a #GPtrArray of #GBytes. It should be interpreted
         * according to #TpTLSCertificate:cert-type.
         *
         * The first certificate in this array is the server's certificate,
         * followed by its issuer, followed by the issuer's issuer and so on.
         *
         * For "x509" certificates, each certificate is an X.509 certificate in
         * binary (DER) format.
         *
         * For "pgp" certificates, each certificate is a binary OpenPGP key.
         */
        readonly certData: any[];
        /**
         * The type of the certificate, typically either "x509" or "pgp".
         */
        readonly cert_type: string;
        /**
         * The type of the certificate, typically either "x509" or "pgp".
         */
        readonly certType: string;
        /**
         * A #TpConnection or #TpChannel which owns this TLS certificate. If the
         * parent object is invalidated, the certificate is also invalidated, and
         * this property is set to %NULL.
         */
        parent: Proxy;
        /**
         * The state of this TLS certificate as a #TpTLSCertificateState,
         * initially %TP_TLS_CERTIFICATE_STATE_PENDING.
         *
         * #GObject::notify::state will be emitted when this changes.
         */
        readonly state: number;

        // Constructors of TelepathyGLib-0.12.TLSCertificate

        static ['new'](conn_or_chan: Proxy, object_path: string): TLSCertificate;

        // Owm methods of TelepathyGLib-0.12.TLSCertificate

        static get_feature_quark_core(): GLib.Quark;
        /**
         * Ensure that the known interfaces for TpTLSCertificate have been set up.
         * This is done automatically when necessary, but for correct
         * overriding of library interfaces by local extensions, you should
         * call this function before calling
         * tp_proxy_or_subclass_hook_on_interface_add() with first argument
         * %TP_TYPE_TLS_CERTIFICATE.
         */
        static init_known_interfaces(): void;

        // Owm methods of TelepathyGLib-0.12.TLSCertificate

        /**
         * Accept this certificate, asynchronously. In or after `callback,`
         * you may call tp_tls_certificate_accept_finish() to check the result.
         *
         * #GObject::notify::state will also be emitted when the connection manager
         * signals that the certificate has been accepted.
         * @param callback called on success or failure
         */
        accept_async(callback?: Gio.AsyncReadyCallback<this> | null): void;
        /**
         * Check the result of tp_tls_certificate_accept_async().
         * @param result the result passed to the callback by  tp_tls_certificate_accept_async()
         * @returns %TRUE if acceptance was successful
         */
        accept_finish(result: Gio.AsyncResult): boolean;
        /**
         * Add a pending reason for rejection. The first call to this method is
         * considered "most important". After calling this method as many times
         * as are required, call tp_tls_certificate_reject_async() to reject the
         * certificate.
         *
         * If `details` is a floating reference (see g_variant_ref_sink()),
         * ownership of `details` is taken by this function. This means
         * you can pass the result of g_variant_new() or g_variant_new_parsed()
         * directly to this function without additional reference-count management.
         * @param reason the reason for rejection
         * @param dbus_error a D-Bus error name such as %TP_ERROR_STR_CERT_REVOKED, or  %NULL to derive one from @reason
         * @param details a variant of type %G_VARIANT_TYPE_VARDICT containing the details of the rejection, or %NULL
         */
        add_rejection(reason: TLSCertificateRejectReason, dbus_error: string, details?: GLib.Variant | null): void;
        /**
         * Return the #TpTLSCertificate:cert-data property
         * @returns the value of #TpTLSCertificate:cert-data property
         */
        get_cert_data(): GLib.Bytes[];
        /**
         * Return the #TpTLSCertificate:cert-type property
         * @returns the value of #TpTLSCertificate:cert-type property
         */
        get_cert_type(): string;
        /**
         * If this certificate has been rejected and `n` is less than the number of
         * rejection reasons, return a #TpTLSCertificateRejection representing the
         * `n&`lt;!----&gt;th rejection reason (starting from 0).
         *
         * With `n` == 0 this is equivalent to tp_tls_certificate_get_rejection().
         * @param n the rejection reason to return; if 0, return the same thing as  tp_tls_certificate_get_detailed_rejection()
         * @returns a #TpTLSCertificateRejection, or %NULL
         */
        get_nth_rejection(n: number): TLSCertificateRejection | null;
        /**
         * If this certificate has been rejected, return a #TpTLSCertificateRejection
         * indicating the first rejection reason (by convention,
         * the most important).
         *
         * If you want to list all the things that are wrong with the certificate
         * (for instance, it might be self-signed and also have expired)
         * you can call tp_tls_certificate_get_nth_rejection(), increasing `n` until
         * it returns %NULL.
         * @returns a #TpTLSCertificateRejection, or %NULL
         */
        get_rejection(): TLSCertificateRejection | null;
        /**
         * Return the #TpTLSCertificate:state property
         * @returns the value of #TpTLSCertificate:state property
         */
        get_state(): TLSCertificateState;
        /**
         * Reject this certificate, asynchronously.
         *
         * Before calling this method, you must call
         * tp_tls_certificate_add_rejection() at least once, to set the reason(s)
         * for rejection (for instance, a certificate might be both self-signed and
         * expired).
         *
         * In or after `callback,`
         * you may call tp_tls_certificate_reject_finish() to check the result.
         *
         * #GObject::notify::state will also be emitted when the connection manager
         * signals that the certificate has been rejected.
         * @param callback called on success or failure
         */
        reject_async(callback?: Gio.AsyncReadyCallback<this> | null): void;
        /**
         * Check the result of tp_tls_certificate_reject_async().
         * @param result the result passed to the callback by  tp_tls_certificate_reject_async()
         * @returns %TRUE if rejection was successful
         */
        reject_finish(result: Gio.AsyncResult): boolean;
    }

    module TLSCertificateRejection {
        // Constructor properties interface
    }

    /**
     * Data structure representing a #TpTLSCertificateRejection.
     */
    class TLSCertificateRejection extends GObject.Object {
        // Own properties of TelepathyGLib-0.12.TLSCertificateRejection

        /**
         * The D-Bus error name of the rejection
         */
        dbus_error: string;
        /**
         * The D-Bus error name of the rejection
         */
        dbusError: string;
        /**
         * A #G_VARIANT_TYPE_VARDICT containing the details of the rejection
         */
        details: GLib.Variant;
        /**
         * a #GError (likely to be in the %TP_ERROR domain) indicating the reason
         * of the rejection
         */
        error: GLib.Error;
        /**
         * #TpTLSCertificateRejectReason representing the reason of the rejection
         */
        reason: number;

        // Owm methods of TelepathyGLib-0.12.TLSCertificateRejection

        /**
         * Return the #TpTLSCertificateRejection:dbus-error property
         * @returns the value of #TpTLSCertificateRejection:dbus-error property
         */
        get_dbus_error(): string;
        /**
         * Return the #TpTLSCertificateRejection:details property
         * @returns the value of #TpTLSCertificateRejection:details property
         */
        get_details(): GLib.Variant;
        /**
         * Return the #TpTLSCertificateRejection:error property
         * @returns the value of #TpTLSCertificateRejection:error property
         */
        get_error(): GLib.Error;
        /**
         * Return the #TpTLSCertificateRejection:reason property
         * @returns the value of #TpTLSCertificateRejection:reason property
         */
        get_reason(): TLSCertificateRejectReason;
        /**
         * Convenient function to raise the #TpTLSCertificateRejection:error
         * property in language binding supporting this feature.
         * @returns %FALSE
         */
        raise_error(): boolean;
    }

    module TextChannel {
        // Signal callback interfaces

        interface ContactChatStateChanged {
            (contact: Contact, state: number): void;
        }

        interface MessageReceived {
            (message: SignalledMessage): void;
        }

        interface MessageSent {
            (message: SignalledMessage, flags: number, token: string): void;
        }

        interface PendingMessageRemoved {
            (message: SignalledMessage): void;
        }

        // Constructor properties interface
    }

    /**
     * Data structure representing a #TpTextChannel.
     */
    class TextChannel extends Channel {
        // Own properties of TelepathyGLib-0.12.TextChannel

        /**
         * A #TpDeliveryReportingSupportFlags indicating features supported
         * by this channel.
         */
        readonly delivery_reporting_support: number;
        /**
         * A #TpDeliveryReportingSupportFlags indicating features supported
         * by this channel.
         */
        readonly deliveryReportingSupport: number;
        /**
         * %TRUE if messages sent and received on this channel are transmitted
         * via SMS.
         *
         * This property is not guaranteed to have a meaningful value until
         * TP_TEXT_CHANNEL_FEATURE_SMS has been prepared.
         */
        readonly is_sms_channel: boolean;
        /**
         * %TRUE if messages sent and received on this channel are transmitted
         * via SMS.
         *
         * This property is not guaranteed to have a meaningful value until
         * TP_TEXT_CHANNEL_FEATURE_SMS has been prepared.
         */
        readonly isSmsChannel: boolean;
        /**
         * A #TpMessagePartSupportFlags indicating the level of support for
         * message parts on this channel.
         */
        readonly message_part_support_flags: number;
        /**
         * A #TpMessagePartSupportFlags indicating the level of support for
         * message parts on this channel.
         */
        readonly messagePartSupportFlags: number;
        /**
         * %TRUE if this channel is exclusively for receiving class 0 SMSes
         * (and no SMSes can be sent using tp_text_channel_send_message_async()
         * on this channel). If %FALSE, no incoming class 0 SMSes will appear
         * on this channel.
         */
        readonly sms_flash: boolean;
        /**
         * %TRUE if this channel is exclusively for receiving class 0 SMSes
         * (and no SMSes can be sent using tp_text_channel_send_message_async()
         * on this channel). If %FALSE, no incoming class 0 SMSes will appear
         * on this channel.
         */
        readonly smsFlash: boolean;
        /**
         * A #GStrv containing the MIME types supported by this channel, with more
         * preferred MIME types appearing earlier in the array.
         */
        readonly supported_content_types: string[];
        /**
         * A #GStrv containing the MIME types supported by this channel, with more
         * preferred MIME types appearing earlier in the array.
         */
        readonly supportedContentTypes: string[];

        // Constructors of TelepathyGLib-0.12.TextChannel

        static ['new'](
            conn: Connection,
            object_path: string,
            immutable_properties: GLib.HashTable<string, GObject.Value>,
        ): TextChannel;

        // Owm methods of TelepathyGLib-0.12.TextChannel

        static get_feature_quark_chat_states(): GLib.Quark;
        static get_feature_quark_incoming_messages(): GLib.Quark;
        static get_feature_quark_sms(): GLib.Quark;

        // Owm methods of TelepathyGLib-0.12.TextChannel

        /**
         * Acknowledge all the pending messages. This is equivalent of calling
         * tp_text_channel_ack_messages_async() with the list of #TpSignalledMessage
         * returned by tp_text_channel_dup_pending_messages().
         *
         * Once the messages have been acked, `callback` will be called.
         * You can then call tp_text_channel_ack_all_pending_messages_finish() to get
         * the result of the operation.
         *
         * See tp_text_channel_ack_message_async() about acknowledging messages.
         * @param callback a callback to call when the messages have been acked
         */
        ack_all_pending_messages_async(callback?: Gio.AsyncReadyCallback<this> | null): void;
        /**
         * Finish an asynchronous acknowledgement operation of all messages.
         * @param result a #GAsyncResult
         * @returns %TRUE if the messages have been acked, %FALSE otherwise.
         */
        ack_all_pending_messages_finish(result: Gio.AsyncResult): boolean;
        /**
         * Acknowledge `message`. Once the message has been acked, `callback` will be
         * called. You can then call tp_text_channel_ack_message_finish() to get the
         * result of the operation.
         *
         * A message should be acknowledged once it has been shown to the user by the
         * Handler of the channel. So Observers and Approvers should NOT acknowledge
         * messages themselves.
         * Once a message has been acknowledged, it is removed from the
         * pending-message queue and so the #TpTextChannel::pending-message-removed
         * signal is fired.
         *
         * You should use the #TpSignalledMessage received from
         * tp_text_channel_dup_pending_messages() or the
         * #TpTextChannel::message-received signal.
         * @param message a #TpSignalledMessage
         * @param callback a callback to call when the message have been acked
         */
        ack_message_async(message: Message, callback?: Gio.AsyncReadyCallback<this> | null): void;
        /**
         * Finishes acknowledging a message.
         * @param result a #GAsyncResult passed to the callback for tp_text_channel_ack_message_async()
         * @returns %TRUE if the message has been acked, %FALSE otherwise.
         */
        ack_message_finish(result: Gio.AsyncResult): boolean;
        /**
         * Acknowledge all the messages in `messages`.
         * Once the messages have been acked, `callback` will be called.
         * You can then call tp_text_channel_ack_messages_finish() to get the
         * result of the operation.
         *
         * You should use the #TpSignalledMessage received from
         * tp_text_channel_dup_pending_messages() or the
         * #TpTextChannel::message-received signal.
         *
         * See tp_text_channel_ack_message_async() about acknowledging messages.
         * @param messages a #GList of #TpSignalledMessage
         * @param callback a callback to call when the message have been acked
         */
        ack_messages_async(messages: SignalledMessage[], callback?: Gio.AsyncReadyCallback<this> | null): void;
        /**
         * Finishes acknowledging a list of messages.
         * @param result a #GAsyncResult passed to the callback for tp_text_channel_ack_messages_async()
         * @returns %TRUE if the messages have been acked, %FALSE otherwise.
         */
        ack_messages_finish(result: Gio.AsyncResult): boolean;
        /**
         * Return a newly allocated list of unacknowledged #TpSignalledMessage
         * objects.
         *
         * It is guaranteed that the #TpSignalledMessage:sender of each
         * #TpSignalledMessage has all of the features previously passed to
         * tp_simple_client_factory_add_contact_features() prepared.
         * @returns a #GList of reffed #TpSignalledMessage
         */
        dup_pending_messages(): SignalledMessage[];
        /**
         * Return the chat state for the given contact. If tp_proxy_is_prepared()
         * would return %FALSE for the feature %TP_TEXT_CHANNEL_FEATURE_CHAT_STATES,
         * the result will always be %TP_CHANNEL_CHAT_STATE_INACTIVE.
         * @param contact a #TpContact
         * @returns the chat state for @contact, or %TP_CHANNEL_CHAT_STATE_INACTIVE  if their chat state is not known
         */
        get_chat_state(contact: Contact): ChannelChatState;
        /**
         * Return the #TpTextChannel:delivery-reporting-support property
         * @returns the value of #TpTextChannel:delivery-reporting-support property
         */
        get_delivery_reporting_support(): DeliveryReportingSupportFlags;
        /**
         * Return the #TpTextChannel:message-part-support-flags property
         * @returns the value of #TpTextChannel:message-part-support-flags
         */
        get_message_part_support_flags(): MessagePartSupportFlags;
        /**
         * Return the #TpTextChannel:message-types property
         * @returns the value of #TpTextChannel:message-types
         */
        get_message_types(): ChannelTextMessageType[];
        /**
         * Return a newly allocated list of unacknowledged #TpSignalledMessage
         * objects.
         *
         * It is guaranteed that the #TpSignalledMessage:sender of each
         * #TpSignalledMessage has all of the features previously passed to
         * tp_simple_client_factory_add_contact_features() prepared.
         * @returns a #GList of borrowed #TpSignalledMessage
         */
        get_pending_messages(): SignalledMessage[];
        /**
         * Return the #TpTextChannel:sms-flash property
         * @returns the value of #TpTextChannel:sms-flash property
         */
        get_sms_flash(): boolean;
        /**
         * Starts an async call to get the number of 140 octet chunks required to
         * send a #message via SMS on #self, as well as the number of remaining
         * characters available in the final chunk and, if possible,
         * an estimate of the cost.
         *
         * Once the request has been satisfied, `callback` will be called.
         * You can then call tp_text_channel_get_sms_length_finish() to get the
         * result of the operation.
         * @param message a #TpClientMessage
         * @param callback a callback to call when the request has been satisfied
         */
        get_sms_length_async(message: Message, callback?: Gio.AsyncReadyCallback<this> | null): void;
        /**
         * Finishes an async SMS length request.
         * @param result a #GAsyncResult
         * @returns %TRUE if the number of 140 octet chunks required to send the message has been retrieved, %FALSE otherwise.
         */
        get_sms_length_finish(result: Gio.AsyncResult): boolean;
        /**
         * Return the #TpTextChannel:supported-content-types property
         * @returns the value of #TpTextChannel:supported-content-types
         */
        get_supported_content_types(): string[];
        /**
         * Submit a message to the server for sending. Once the message has been
         * submitted to the sever, `callback` will be called. You can then call
         * tp_text_channel_send_message_finish() to get the result of the operation.
         * @param message a #TpClientMessage
         * @param flags flags affecting how the message is sent
         * @param callback a callback to call when the message has been submitted to the server
         */
        send_message_async(
            message: Message,
            flags: MessageSendingFlags,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Completes a call to tp_text_channel_send_message_async().
         *
         * `token` can be used to match any incoming delivery or failure reports
         * against the sent message. If this function returns true but the returned
         * token is %NULL, the message was sent successfully but the protocol does not
         * provide a way to identify it later.
         * @param result a #GAsyncResult passed to the callback for tp_text_channel_send_message_async()
         * @returns %TRUE if the message has been submitted to the server, %FALSE otherwise.
         */
        send_message_finish(result: Gio.AsyncResult): boolean;
        /**
         * Set the local state on channel `self` to `state`.
         * Once the state has been set, `callback` will be called.
         * You can then call tp_text_channel_set_chat_state_finish() to get the
         * result of the operation.
         * @param state a #TpChannelChatState to set
         * @param callback a callback to call when the chat state has been set
         */
        set_chat_state_async(state: ChannelChatState, callback?: Gio.AsyncReadyCallback<this> | null): void;
        /**
         * Completes a call to tp_text_channel_set_chat_state_async().
         * @param result a #GAsyncResult passed to the callback for tp_text_channel_set_chat_state_async()
         * @returns %TRUE if the chat state has been changed, %FALSE otherwise.
         */
        set_chat_state_finish(result: Gio.AsyncResult): boolean;
        /**
         * Check if message of type `message_type` can be sent on this channel.
         * @param message_type a #TpChannelTextMessageType
         * @returns %TRUE if message of type @message_type can be sent on @self, %FALSE otherwise
         */
        supports_message_type(message_type: ChannelTextMessageType): boolean;
    }

    /**
     * The class of a #TpAccountChannelRequest.
     */
    class AccountChannelRequestClass {}

    class AccountChannelRequestPrivate {}

    /**
     * The class of a #TpAccount.
     */
    class AccountClass {}

    class AccountClassPrivate {}

    /**
     * The class of a #TpAccount.
     */
    class AccountManagerClass {}

    class AccountManagerClassPrivate {}

    class AccountManagerPrivate {}

    class AccountPrivate {}

    /**
     * The class of a #TpAccountRequest.
     */
    class AccountRequestClass {}

    class AccountRequestPrivate {}

    /**
     * The class of a #TpAddDispatchOperationContext.
     */
    class AddDispatchOperationContextClass {}

    class AddDispatchOperationContextPrivate {}

    /**
     * The class of a #TpAutomaticClientFactory.
     */
    class AutomaticClientFactoryClass {}

    /**
     * The class of a #TpAutomaticProxyFactory.
     */
    class AutomaticProxyFactoryClass {}

    /**
     * The requirements for setting an avatar on a particular protocol.
     */
    class AvatarRequirements {
        // Own fields of TelepathyGLib-0.12.AvatarRequirements

        supported_mime_types: string[];
        minimum_width: number;
        minimum_height: number;
        recommended_width: number;
        recommended_height: number;
        maximum_width: number;
        maximum_height: number;
        maximum_bytes: number;

        // Constructors of TelepathyGLib-0.12.AvatarRequirements

        constructor(
            properties?: Partial<{
                supported_mime_types: string[];
                minimum_width: number;
                minimum_height: number;
                recommended_width: number;
                recommended_height: number;
                maximum_width: number;
                maximum_height: number;
                maximum_bytes: number;
            }>,
        );

        static ['new'](
            supported_mime_types: string[],
            minimum_width: number,
            minimum_height: number,
            recommended_width: number,
            recommended_height: number,
            maximum_width: number,
            maximum_height: number,
            maximum_bytes: number,
        ): AvatarRequirements;
    }

    /**
     * The class of a #TpBaseClient.
     *
     * The virtual methods `observe_channels,` `add_dispatch_operation` and
     * `handle_channels` can be also implemented by calling
     * tp_base_client_implement_observe_channels(),
     * tp_base_client_implement_add_dispatch_operation() and
     * tp_base_client_implement_handle_channels(). This is compatible with
     * telepathy-glib versions older than 0.11.13.
     */
    class BaseClientClass {
        // Own fields of TelepathyGLib-0.12.BaseClientClass

        observe_channels: BaseClientClassObserveChannelsImpl;
        add_dispatch_operation: BaseClientClassAddDispatchOperationImpl;
        handle_channels: BaseClientClassHandleChannelsImpl;
    }

    class BaseClientClassPrivate {}

    class BaseClientPrivate {}

    /**
     * The class of a #TpBaseConnection. Many members are virtual methods etc.
     * to be filled in in the subclass' class_init function.
     */
    class BaseConnectionClass {
        // Own fields of TelepathyGLib-0.12.BaseConnectionClass

        get_unique_connection_name: BaseConnectionGetUniqueConnectionNameImpl;
        connecting: BaseConnectionProc;
        connected: BaseConnectionProc;
        disconnected: BaseConnectionProc;
        shut_down: BaseConnectionProc;
        start_connecting: BaseConnectionStartConnectingImpl;
    }

    class BaseConnectionPrivate {}

    /**
     * The class of a #TpBasicProxyFactory.
     */
    class BasicProxyFactoryClass {}

    /**
     * The class of a #TpCallChannel.
     */
    class CallChannelClass {}

    class CallChannelPrivate {}

    /**
     * The class of a #TpCallContent.
     */
    class CallContentClass {}

    class CallContentPrivate {}

    /**
     * Data structure representing the reason for a call state change.
     */
    class CallStateReason {
        // Own fields of TelepathyGLib-0.12.CallStateReason

        actor: Handle;
        reason: CallStateChangeReason;
        dbus_reason: string;
        message: string;
    }

    /**
     * The class of a #TpCallStream.
     */
    class CallStreamClass {}

    class CallStreamPrivate {}

    class CapabilitiesClass {}

    class CapabilitiesPrivate {}

    /**
     * The class of a #TpChannel. In addition to `parent_class` there are four
     * pointers reserved for possible future use.
     *
     * (Changed in 0.7.12: the layout of the structure is visible, allowing
     * subclassing.)
     */
    class ChannelClass {}

    /**
     * The class of a #TpChannelDispatchOperation.
     */
    class ChannelDispatchOperationClass {}

    class ChannelDispatchOperationClassPrivate {}

    class ChannelDispatchOperationPrivate {}

    /**
     * The class of a #TpChannelDispatcher.
     */
    class ChannelDispatcherClass {}

    class ChannelDispatcherClassPrivate {}

    class ChannelDispatcherPrivate {}

    class ChannelPrivate {}

    /**
     * The class of a #TpChannelRequest.
     */
    class ChannelRequestClass {}

    class ChannelRequestClassPrivate {}

    class ChannelRequestPrivate {}

    /**
     * Interface for a channel factory
     */
    class ClientChannelFactoryInterface {}

    class ClientMessageClass {}

    /**
     * The class of a #TpConnection. In addition to `parent_class` there are four
     * pointers reserved for possible future use.
     *
     * (Changed in 0.7.12: the layout of the structure is visible, allowing
     * subclassing.)
     */
    class ConnectionClass {}

    /**
     * The class of a #TpConnectionManager.
     */
    class ConnectionManagerClass {}

    /**
     * Structure representing a connection manager parameter.
     *
     * Since 0.19.1, accessing the fields of this struct is deprecated,
     * and they are no longer documented here.
     * Use the accessors tp_connection_manager_param_get_name(),
     * tp_connection_manager_param_get_dbus_signature(),
     * tp_connection_manager_param_is_required(),
     * tp_connection_manager_param_is_required_for_registration(),
     * tp_connection_manager_param_is_secret(),
     * tp_connection_manager_param_is_dbus_property(),
     * tp_connection_manager_param_get_default(),
     * tp_connection_manager_param_dup_default_variant() instead.
     */
    class ConnectionManagerParam {
        // Owm methods of TelepathyGLib-0.12.ConnectionManagerParam

        /**
         * &lt;!-- Returns: says it all --&gt;
         * @returns a newly (slice) allocated #TpConnectionManagerParam, free with  tp_connection_manager_param_free()
         */
        copy(): ConnectionManagerParam;
        /**
         * Get the default value for this parameter.
         *
         * Use g_variant_get_type() to check that the type is what you expect.
         * For instance, a string parameter should have type
         * %G_VARIANT_TYPE_STRING.
         * @returns the default value, or %NULL if there is no default
         */
        dup_default_variant(): GLib.Variant;
        /**
         * &lt;!-- --&gt;
         * @returns the #GVariantType of the parameter
         */
        dup_variant_type(): GLib.VariantType;
        /**
         * Frees `param,` which was copied with tp_connection_manager_param_copy().
         */
        free(): void;
        /**
         * &lt;!-- --&gt;
         * @returns the D-Bus signature of the parameter
         */
        get_dbus_signature(): string;
        /**
         * Get the default value for this parameter, if there is one. If %FALSE is
         * returned, `value` is left uninitialized.
         * @param value pointer to an unset (all zeroes) #GValue into which the default's         type and value are written
         * @returns %TRUE if there is a default value
         */
        get_default(value: GObject.Value): boolean;
        /**
         * &lt;!-- --&gt;
         * @returns the name of the parameter
         */
        get_name(): string;
        /**
         * &lt;!-- --&gt;
         * @returns %TRUE if the parameter represents a D-Bus property of the same name
         */
        is_dbus_property(): boolean;
        /**
         * &lt;!-- --&gt;
         * @returns %TRUE if the parameter is normally required
         */
        is_required(): boolean;
        /**
         * &lt;!-- --&gt;
         * @returns %TRUE if the parameter is required when registering a new account          (by setting the special "register" parameter to %TRUE)
         */
        is_required_for_registration(): boolean;
        /**
         * &lt;!-- --&gt;
         * @returns %TRUE if the parameter's value is a password or other secret
         */
        is_secret(): boolean;
    }

    class ConnectionManagerPrivate {}

    /**
     * Structure representing a protocol supported by a connection manager.
     * Note that the size of this structure may change, so its size must not be
     * relied on.
     */
    class ConnectionManagerProtocol {
        // Own fields of TelepathyGLib-0.12.ConnectionManagerProtocol

        name: string;

        // Owm methods of TelepathyGLib-0.12.ConnectionManagerProtocol

        /**
         * Return whether a new account can be registered on this protocol, by setting
         * the special "register" parameter to %TRUE.
         * @returns %TRUE if @protocol supports the parameter "register"
         */
        can_register(): boolean;
        /**
         * &lt;!-- Returns: says it all --&gt;
         * @returns a newly (slice) allocated #TpConnectionManagerProtocol, free with  tp_connection_manager_protocol_free()
         */
        copy(): ConnectionManagerProtocol;
        /**
         * Returns a list of parameter names supported by this connection manager
         * for this protocol.
         *
         * The result is copied and must be freed by the caller with g_strfreev().
         * @returns a #GStrv of protocol names
         */
        dup_param_names(): string[];
        /**
         * Frees `proto,` which was copied with tp_connection_manager_protocol_copy().
         */
        free(): void;
        /**
         * &lt;!-- no more to say --&gt;
         * @param param a parameter name
         * @returns a structure representing the parameter @param, or %NULL if not          supported
         */
        get_param(param: string): ConnectionManagerParam;
        /**
         * &lt;!-- no more to say --&gt;
         * @param param a parameter name
         * @returns %TRUE if @protocol supports the parameter @param.
         */
        has_param(param: string): boolean;
    }

    class ConnectionPrivate {}

    class ContactClass {}

    /**
     * A structure representing an information about a contact. Similar to a vCard
     * field.
     */
    class ContactInfoField {
        // Own fields of TelepathyGLib-0.12.ContactInfoField

        field_name: string;
        parameters: string[];
        field_value: string[];

        // Constructors of TelepathyGLib-0.12.ContactInfoField

        constructor(
            properties?: Partial<{
                field_name: string;
                parameters: string[];
                field_value: string[];
            }>,
        );

        static ['new'](field_name: string, parameters: string[], field_value: string[]): ContactInfoField;
    }

    /**
     * A struct describing a vCard field.
     */
    class ContactInfoFieldSpec {
        // Own fields of TelepathyGLib-0.12.ContactInfoFieldSpec

        name: string;
        parameters: string[];
        flags: ContactInfoFieldFlags;
        max: number;
    }

    class ContactPrivate {}

    /**
     * The class of a #TpContactSearch.
     */
    class ContactSearchClass {}

    class ContactSearchPrivate {}

    /**
     * The class of a #TpContactSearchResult.
     */
    class ContactSearchResultClass {}

    class ContactSearchResultPrivate {}

    /**
     * Structure to be included in the instance structure of objects that
     * use this mixin. Initialize it with tp_contacts_mixin_init().
     *
     * There are no public fields.
     */
    class ContactsMixin {}

    /**
     * Structure to be included in the class structure of objects that
     * use this mixin. Initialize it with tp_contacts_mixin_class_init().
     *
     * There are no public fields.
     */
    class ContactsMixinClass {}

    class ContactsMixinClassPrivate {}

    class ContactsMixinPrivate {}

    /**
     * The class of #TpDBusDaemon.
     */
    class DBusDaemonClass {}

    class DBusDaemonPrivate {}

    /**
     * Structure representing all of a class's property implementations. One of
     * these structures may be placed in the layout of an object class structure.
     *
     * In addition to the documented fields, there are 7 pointers reserved for
     * future use, which must be initialized to %NULL.
     */
    class DBusPropertiesMixinClass {
        // Owm methods of TelepathyGLib-0.12.DBusPropertiesMixinClass

        /**
         * Initialize the class `cls` to use the D-Bus Properties mixin.
         * The given struct member, of size sizeof(TpDBusPropertiesMixinClass),
         * will be used to store property implementation information.
         *
         * Each property and each interface must have been declared as a member of
         * a GInterface implemented by `cls,` using
         * tp_svc_interface_set_dbus_properties_info().
         *
         * Before calling this function, the array `interfaces` must have been
         * placed in the #TpDBusPropertiesMixinClass structure; if it would be empty,
         * it may instead be %NULL.
         *
         * This function should be called from the class_init callback in such a way
         * that it will only be called once, even if the class is subclassed.
         *
         * Changed in 0.7.9: TpDBusPropertiesMixinClass::interfaces may now be %NULL,
         * which means that only interfaces whose properties are set up using
         * tp_dbus_properties_mixin_implement_interface() will be used.
         *
         * Changed in 0.7.15: `offset` may now be 0, in which case the
         * #TpDBusPropertiesMixinClass can be omitted from `cls`.  It is treated as if
         * it were present, but with all fields (including
         * TpDBusPropertiesMixinClass::interfaces) being %NULL, so only interfaces
         * whose properties are set using
         * tp_dbus_properties_mixin_implement_interface() will be used.
         * @param cls a subclass of #GObjectClass
         * @param offset the offset within @cls of a TpDBusPropertiesMixinClass structure
         */
        static init(cls: GObject.ObjectClass, offset: number): void;
    }

    /**
     * Structure representing an implementation of an interface's properties.
     *
     * In addition to the documented fields, there are four pointers which must
     * be initialized to %NULL.
     *
     * This structure must either be statically allocated, or duplicated and never
     * freed, so it always remains valid.
     */
    class DBusPropertiesMixinIfaceImpl {
        // Own fields of TelepathyGLib-0.12.DBusPropertiesMixinIfaceImpl

        name: string;
        getter: DBusPropertiesMixinGetter;
        setter: DBusPropertiesMixinSetter;
    }

    /**
     * Semi-abstract description of an interface. Each service GInterface that
     * has properties must have one of these attached to it via
     * tp_svc_interface_set_dbus_properties_info() in its base_init function;
     * service GInterfaces that do not have properties may have one of these
     * with no properties.
     *
     * This structure must either be statically allocated, or duplicated and never
     * freed, so it always remains valid.
     *
     * In addition to the documented members, there are two private pointers
     * for future expansion, which must always be initialized to %NULL.
     */
    class DBusPropertiesMixinIfaceInfo {
        // Own fields of TelepathyGLib-0.12.DBusPropertiesMixinIfaceInfo

        dbus_interface: GLib.Quark;
    }

    /**
     * Structure representing an implementation of a property.
     *
     * In addition to the documented fields, there are three pointers which must
     * be initialized to %NULL.
     *
     * This structure must either be statically allocated, or duplicated and never
     * freed, so it always remains valid.
     */
    class DBusPropertiesMixinPropImpl {
        // Own fields of TelepathyGLib-0.12.DBusPropertiesMixinPropImpl

        name: string;
        getter_data: any;
        setter_data: any;
    }

    /**
     * Semi-abstract description of a property, as attached to a service
     * GInterface. This structure must either be statically allocated, or
     * duplicated and never freed, so it always remains valid.
     *
     * In addition to the documented members, there are two private pointers
     * for future expansion, which must always be initialized to %NULL.
     */
    class DBusPropertiesMixinPropInfo {
        // Own fields of TelepathyGLib-0.12.DBusPropertiesMixinPropInfo

        name: GLib.Quark;
        flags: DBusPropertiesMixinFlags;
        dbus_signature: string;
        type: GObject.GType;
    }

    /**
     * The class of a #TpDBusTubeChannel.
     */
    class DBusTubeChannelClass {}

    class DBusTubeChannelPrivate {}

    /**
     * The class of a #TpDebugClient.
     */
    class DebugClientClass {}

    class DebugClientPrivate {}

    /**
     * The class of a #TpDebugMessage.
     */
    class DebugMessageClass {}

    class DebugMessagePriv {}

    /**
     * The class of a #TpFileTransferChannel.
     */
    class FileTransferChannelClass {}

    class FileTransferChannelPrivate {}

    /**
     * Structure representing the group mixin as used in a particular class.
     * To be placed in the implementation's instance structure.
     *
     * All fields should be considered read-only.
     */
    class GroupMixin {
        // Own fields of TelepathyGLib-0.12.GroupMixin

        handle_repo: HandleRepoIface;
        self_handle: Handle;
        group_flags: ChannelGroupFlags;
    }

    /**
     * Structure representing the group mixin as used in a particular class.
     * To be placed in the implementation's class structure.
     *
     * Initialize this with tp_group_mixin_class_init().
     *
     * All fields should be considered read-only.
     */
    class GroupMixinClass {
        // Own fields of TelepathyGLib-0.12.GroupMixinClass

        add_member: GroupMixinAddMemberFunc;
        remove_member: GroupMixinRemMemberFunc;
    }

    class GroupMixinClassPrivate {}

    class GroupMixinPrivate {}

    /**
     * The class of a #TpHandleChannelsContext.
     */
    class HandleChannelsContextClass {}

    class HandleChannelsContextPrivate {}

    /**
     * The class of a handle repository interface. The structure layout is
     * only available within telepathy-glib, for the handle repository
     * implementations' benefit.
     */
    class HandleRepoIfaceClass {}

    /**
     * A set of handles. This is similar to a #TpIntset (and implemented using
     * one), but adding a handle to the set also references it.
     */
    class HandleSet {
        // Constructors of TelepathyGLib-0.12.HandleSet

        constructor(repo: HandleRepoIface);

        // Owm methods of TelepathyGLib-0.12.HandleSet

        /**
         * Format a #TpHandleSet for debug output.
         * @returns a string representation of the  handle set suitable for debug output
         */
        dump(): string;
        /**
         * Returns a dictionary mapping each handle in `self` to the corresponding
         * identifier, as if retrieved by calling tp_handle_inspect() on each handle.
         * The type of the returned value is described as
         * &lt;code&gt;Handle_Identifier_Map&lt;/code&gt; in the Telepathy specification.
         * @returns a map from the  handles in @self to the corresponding identifier.
         */
        to_identifier_map(): GLib.HashTable<Handle, string>;
    }

    /**
     * Opaque type representing a set of unsigned integers.
     *
     * Before 0.11.16, this type was called &lt;type&gt;TpIntSet&lt;/type&gt;, which is
     * now a backwards compatibility typedef.
     */
    class Intset {
        // Constructors of TelepathyGLib-0.12.Intset

        constructor(properties?: Partial<{}>);

        static ['new'](): Intset;

        static new_containing(element: number): Intset;

        static sized_new(size: number): Intset;

        // Owm methods of TelepathyGLib-0.12.Intset

        /**
         * &lt;!--Returns: says it all--&gt;
         * @param array An array of guint
         */
        static from_array(array: number[]): Intset;

        // Owm methods of TelepathyGLib-0.12.Intset

        /**
         * Add an integer into a TpIntset.
         * @param element integer to add
         */
        add(element: number): void;
        /**
         * Unset every integer in the set.
         */
        clear(): void;
        /**
         * &lt;!--Returns: says it all--&gt;
         * @returns A set containing the same integers as @orig, to be freed with tp_intset_destroy() by the caller
         */
        copy(): Intset;
        /**
         * Free all memory used by the set.
         */
        destroy(): void;
        /**
         * &lt;!--Returns: says it all--&gt;
         * @param right The right operand
         * @returns The set of those integers which are in @left and not in @right (analogous to the bitwise operation left &amp; (~right)), to be freed with tp_intset_destroy() by the caller
         */
        difference(right: Intset): Intset;
        /**
         * Remove each integer in `other` from `self,` analogous to the bitwise
         * operation self &amp;= (~other).
         * @param other members to remove
         */
        difference_update(other: Intset): void;
        /**
         * &lt;!--Returns: says it all--&gt;
         * @returns a string which the caller must free with g_free, listing the numbers in @set in a human-readable format
         */
        dump(): string;
        /**
         * Call `func(`element, `userdata)` for each element of `set,` in order.
         * @param func @TpIntFunc to use to iterate the set
         */
        foreach(func: IntFunc): void;
        /**
         * &lt;!--Returns: says it all--&gt;
         * @param right The right operand
         * @returns The set of those integers which are in both @left and @right (analogous to the bitwise operation left &amp; right), to be freed with tp_intset_destroy() by the caller
         */
        intersection(right: Intset): Intset;
        /**
         * Return the same thing as &lt;code&gt;(tp_intset_size (set) == 0)&lt;/code&gt;,
         * but calculated more efficiently.
         * @returns %TRUE if @set is empty
         */
        is_empty(): boolean;
        /**
         * &lt;!--Returns: says it all--&gt;
         * @param right A set of integers
         * @returns %TRUE if @left and @right contain the same bits
         */
        is_equal(right: Intset): boolean;
        /**
         * Tests if `element` is a member of `set`
         * @param element integer to test
         * @returns %TRUE if @element is in @set
         */
        is_member(element: number): boolean;
        /**
         * Remove an integer from a TpIntset
         * @param element integer to add
         * @returns %TRUE if @element was previously in @set
         */
        remove(element: number): boolean;
        /**
         * &lt;!--Returns: says it all--&gt;
         * @returns The number of integers in @set
         */
        size(): number;
        /**
         * &lt;!--Returns: says it all--&gt;
         * @param right The right operand
         * @returns The set of those integers which are in either @left or @right but not both (analogous to the bitwise operation left ^ right), to be freed with tp_intset_destroy() by the caller
         */
        symmetric_difference(right: Intset): Intset;
        /**
         * &lt;!--Returns: says it all--&gt;
         * @returns a GArray of guint (which must  be freed by the caller) containing the same integers as @set.
         */
        to_array(): number[];
        /**
         * &lt;!--Returns: says it all--&gt;
         * @param right The right operand
         * @returns The set of those integers which are in either @left or @right (analogous to the bitwise operation left | right), to be freed with tp_intset_destroy() by the caller
         */
        union(right: Intset): Intset;
        /**
         * Add each integer in `other` to `self,` analogous to the bitwise operation
         * self |= other.
         * @param other members to add
         */
        union_update(other: Intset): void;
    }

    /**
     * An opaque structure representing iteration in undefined order over a set of
     * integers. Must be initialized with tp_intset_fast_iter_init().
     *
     * Before 0.11.16, this type was called &lt;type&gt;TpIntSetFastIter&lt;/type&gt;,
     * which is now a backwards compatibility typedef.
     *
     * Usage is similar to #GHashTableIter:
     *
     * &lt;informalexample&gt;&lt;programlisting&gt;
     * TpIntsetFastIter iter;
     * guint element;
     *
     * tp_intset_fast_iter_init (&amp;amp;iter, intset);
     *
     * while (tp_intset_fast_iter_next (&amp;amp;iter, &amp;amp;element))
     * {
     *   printf ("%u is in the intset\n", element);
     * }
     * &lt;/programlisting&gt;&lt;/informalexample&gt;
     */
    class IntsetFastIter {
        // Constructors of TelepathyGLib-0.12.IntsetFastIter

        constructor(properties?: Partial<{}>);

        // Owm methods of TelepathyGLib-0.12.IntsetFastIter

        /**
         * Initialize `iter` to iterate over `set` in arbitrary order. `iter` will become
         * invalid if `set` is modified.
         * @param set a set
         */
        init(set: Intset): void;
        /**
         * Advances `iter` and retrieves the integer it now points to. Iteration
         * is not necessarily in numerical order.
         * @param output a location to store a new integer, in arbitrary order
         * @returns %FALSE if the end of the set has been reached
         */
        next(output: number): boolean;
    }

    /**
     * A structure representing iteration over a set of integers. Must be
     * initialized with either TP_INTSET_ITER_INIT() or tp_intset_iter_init().
     *
     * Since 0.11.6, consider using #TpIntsetFastIter if iteration in
     * numerical order is not required.
     *
     * Before 0.11.16, this type was called &lt;type&gt;TpIntSetIter&lt;/type&gt;,
     * which is now a backwards compatibility typedef.
     */
    class IntsetIter {
        // Own fields of TelepathyGLib-0.12.IntsetIter

        element: number;

        // Owm methods of TelepathyGLib-0.12.IntsetIter

        /**
         * Reset the iterator `iter` to the beginning and make it iterate over `set`.
         * @param set An integer set to be used by that iterator
         */
        init(set: Intset): void;
        /**
         * If there are integers in (`iter-&`gt;set) higher than (`iter-&`gt;element), set
         * (iter-&gt;element) to the next one and return %TRUE. Otherwise return %FALSE.
         *
         * Usage:
         *
         * &lt;informalexample&gt;&lt;programlisting&gt;
         * TpIntsetIter iter = TP_INTSET_INIT (intset);
         * while (tp_intset_iter_next (&amp;amp;iter))
         * {
         *   printf ("%u is in the intset\n", iter.element);
         * }
         * &lt;/programlisting&gt;&lt;/informalexample&gt;
         *
         * Since 0.11.6, consider using #TpIntsetFastIter if iteration in
         * numerical order is not required.
         * @returns %TRUE if (@iter-&gt;element) has been advanced
         */
        next(): boolean;
        /**
         * Reset the iterator `iter` to the beginning. It must already be associated
         * with a set.
         */
        reset(): void;
    }

    class MessageClass {}

    /**
     * The class of a #TpObserveChannelsContext.
     */
    class ObserveChannelsContextClass {}

    class ObserveChannelsContextPrivate {}

    /**
     * Structure to be included in the instance structure of objects that
     * use this mixin. Initialize it with tp_presence_mixin_init().
     *
     * There are no public fields.
     */
    class PresenceMixin {}

    /**
     * Structure to be included in the class structure of objects that
     * use this mixin. Initialize it with tp_presence_mixin_class_init().
     *
     * If the protocol imposes a limit on the length of status messages, one should
     * implement `get_maximum_status_message_length`. If this callback is not
     * implemented, it is assumed that there is no limit. The callback function
     * should be set after calling tp_presence_mixin_class_init(), like so:
     *
     *
     * ```
     * TpPresenceMixinClass *mixin_class;
     *
     * tp_presence_mixin_class_init ((GObjectClass *) klass,
     *     G_STRUCT_OFFSET (SomeObjectClass, presence_mixin));
     * mixin_class = TP_PRESENCE_MIXIN_CLASS (klass);
     * mixin_class-&gt;get_maximum_status_message_length =
     *     some_object_get_maximum_status_message_length;
     * ```
     *
     *
     * All other fields should be considered read-only.
     */
    class PresenceMixinClass {
        // Own fields of TelepathyGLib-0.12.PresenceMixinClass

        status_available: PresenceMixinStatusAvailableFunc;
        set_own_status: PresenceMixinSetOwnStatusFunc;
        get_maximum_status_message_length: PresenceMixinGetMaximumStatusMessageLengthFunc;
    }

    class PresenceMixinClassPrivate {}

    class PresenceMixinPrivate {}

    /**
     * Structure representing a presence status.
     *
     * In addition to the fields documented here, there are two gpointer fields
     * which must currently be %NULL. A meaning may be defined for these in a
     * future version of telepathy-glib.
     *
     * In modern Telepathy connection managers, the only optional
     * argument should be a %G_TYPE_STRING named "message", on statuses
     * that have an optional human-readable message. All other optional arguments
     * are deprecated.
     */
    class PresenceStatus {
        // Own fields of TelepathyGLib-0.12.PresenceStatus

        index: number;
    }

    /**
     * Structure specifying a supported optional argument for a presence status.
     *
     * In addition to the fields documented here, there are two gpointer fields
     * which must currently be %NULL. A meaning may be defined for these in a
     * future version of telepathy-glib.
     */
    class PresenceStatusOptionalArgumentSpec {
        // Own fields of TelepathyGLib-0.12.PresenceStatusOptionalArgumentSpec

        name: string;
        dtype: string;

        // Constructors of TelepathyGLib-0.12.PresenceStatusOptionalArgumentSpec

        constructor(
            properties?: Partial<{
                name: string;
                dtype: string;
            }>,
        );
    }

    /**
     * Structure specifying a supported presence status.
     *
     * In addition to the fields documented here, there are two gpointer fields
     * which must currently be %NULL. A meaning may be defined for these in a
     * future version of telepathy-glib.
     */
    class PresenceStatusSpec {
        // Own fields of TelepathyGLib-0.12.PresenceStatusSpec

        name: string;
        presence_type: ConnectionPresenceType;
        self: boolean;
        optional_arguments: PresenceStatusOptionalArgumentSpec;

        // Constructors of TelepathyGLib-0.12.PresenceStatusSpec

        constructor(name: string, type: ConnectionPresenceType, can_set_on_self: boolean, has_message: boolean);

        static ['new'](
            name: string,
            type: ConnectionPresenceType,
            can_set_on_self: boolean,
            has_message: boolean,
        ): PresenceStatusSpec;

        // Owm methods of TelepathyGLib-0.12.PresenceStatusSpec

        /**
         * &lt;!-- --&gt;
         * @returns %TRUE if the user can set this presence status on themselves (most  statuses), or %FALSE if they cannot directly set it on  themselves (typically used for %TP_CONNECTION_PRESENCE_TYPE_OFFLINE  and %TP_CONNECTION_PRESENCE_TYPE_ERROR)
         */
        can_set_on_self(): boolean;
        /**
         * Copy a presence status specification.
         *
         * If `self` has optional arguments other than a string named "message",
         * they are not copied. Optional arguments with other names or types
         * are deprecated.
         * @returns a new #TpPresenceStatusSpec resembling @self
         */
        copy(): PresenceStatusSpec;
        /**
         * Free a presence status specification produced by
         * tp_presence_status_spec_new() or tp_presence_status_spec_copy().
         */
        free(): void;
        /**
         * &lt;!-- --&gt;
         * @returns the name of this presence status,  such as "available" or "out-to-lunch".
         */
        get_name(): string;
        /**
         * Return the category into which this presence type falls. For instance,
         * for XMPP's "" (do not disturb) status, this would return
         * %TP_CONNECTION_PRESENCE_TYPE_BUSY.
         * @returns a #TpConnectionPresenceType
         */
        get_presence_type(): ConnectionPresenceType;
        /**
         * &lt;!-- --&gt;
         * @returns %TRUE if this presence status is accompanied by an optional  human-readable message
         */
        has_message(): boolean;
    }

    class PresenceStatusSpecPrivate {}

    /**
     * The class of a #TpProtocol.
     */
    class ProtocolClass {}

    class ProtocolClassPrivate {}

    class ProtocolPrivate {}

    /**
     * The class of a #TpProxy. The struct fields not documented here are reserved.
     */
    class ProxyClass {
        // Own fields of TelepathyGLib-0.12.ProxyClass

        'interface': GLib.Quark;
        must_have_unique_name: number;
    }

    /**
     * Structure representing a feature.
     */
    class ProxyFeature {
        // Own fields of TelepathyGLib-0.12.ProxyFeature

        name: GLib.Quark;
        core: boolean;
        prepare_async: ProxyPrepareAsync;
        prepare_before_signalling_connected_async: ProxyPrepareAsync;
        interfaces_needed: GLib.Quark;
        depends_on: GLib.Quark;
        can_retry: boolean;
    }

    class ProxyFeaturePrivate {}

    class ProxyPendingCall {
        // Owm methods of TelepathyGLib-0.12.ProxyPendingCall

        cancel(): void;
    }

    class ProxyPrivate {}

    class ProxySignalConnection {
        // Owm methods of TelepathyGLib-0.12.ProxySignalConnection

        disconnect(): void;
    }

    /**
     * The class of a #TpRoomInfo.
     */
    class RoomInfoClass {}

    class RoomInfoPriv {}

    /**
     * The class of a #TpRoomList.
     */
    class RoomListClass {}

    class RoomListPrivate {}

    class SignalledMessageClass {}

    /**
     * The class of a #TpSimpleApprover.
     */
    class SimpleApproverClass {}

    class SimpleApproverPrivate {}

    /**
     * The class structure for #TpSimpleClientFactory.
     *
     * #TpSimpleClientFactory maintains a cache of previously-constructed proxy
     * objects, so the implementations of `create_account,`
     * `create_connection,` `create_channel,` and `create_contact` may assume that a
     * new object should be created when they are called. The default
     * implementations create unadorned instances of the relevant classes;
     * subclasses of the factory may choose to create more interesting proxy
     * subclasses.
     *
     * The default implementation of `dup_channel_features` returns
     * #TP_CHANNEL_FEATURE_CORE, plus all features passed to
     * tp_simple_client_factory_add_channel_features() by the application.
     * Subclasses may override this method to prepare more interesting features
     * from subclasses of #TpChannel, for instance. The default implementations of
     * the other &lt;function&gt;dup_x_features&lt;/function&gt; methods behave similarly.
     */
    class SimpleClientFactoryClass {}

    class SimpleClientFactoryPrivate {}

    /**
     * The class of a #TpSimpleHandler.
     */
    class SimpleHandlerClass {}

    class SimpleHandlerPrivate {}

    /**
     * The class of a #TpSimpleObserver.
     */
    class SimpleObserverClass {}

    class SimpleObserverPrivate {}

    /**
     * The class of a #TpStreamTubeChannel.
     */
    class StreamTubeChannelClass {}

    class StreamTubeChannelPrivate {}

    /**
     * The class of a #TpStreamTubeConnection.
     */
    class StreamTubeConnectionClass {}

    class StreamTubeConnectionPrivate {}

    /**
     * The class of a #TpTLSCertificate.
     */
    class TLSCertificateClass {}

    class TLSCertificateClassPrivate {}

    class TLSCertificatePrivate {}

    /**
     * The class of a #TpTLSCertificateRejection.
     */
    class TLSCertificateRejectionClass {}

    class TLSCertificateRejectionPriv {}

    /**
     * The class of a #TpTextChannel.
     */
    class TextChannelClass {}

    class TextChannelPrivate {}

    /**
     * A simple wrapper for a weak reference to a #GObject, suitable for use in
     * asynchronous calls which should only affect the object if it hasn't already
     * been freed.
     *
     * As well as wrapping a weak reference to an object, this structure can
     * contain an extra pointer to arbitrary data. This is useful for asynchronous
     * calls which act on an object and some second piece of data, which are quite
     * common in practice.
     *
     * If more than one piece of auxiliary data is required, the `user_data`
     * argument to the constructor can be a struct or a #GValueArray.
     */
    class WeakRef {}

    interface ClientChannelFactory {
        // Owm methods of TelepathyGLib-0.12.ClientChannelFactory

        /**
         * Function called when a channel need to be created.
         * Implementation can return a subclass of #TpChannel if they need to.
         *
         * Changed in 0.13.6: the function's signature was previously wrong;
         * it expected an object instance as its first parameter, but the type of the
         * parameter was the type of the interface vtable.
         * @param conn a #TpConnection
         * @param path the object path of the channel
         * @param properties the immutable properties of the channel
         * @returns a new channel proxy, or %NULL on invalid arguments
         */
        create_channel(conn: Connection, path: string, properties: GLib.HashTable<string, GObject.Value>): Channel;
        /**
         * Return a zero terminated #GArray containing the #TpChannel features that
         * should be prepared on `channel`.
         *
         * Changed in 0.13.6: the function's signature was previously wrong;
         * it expected an object instance as its first parameter, but the type of the
         * parameter was the type of the interface vtable.
         * @param channel a #TpChannel
         * @returns a newly allocated #GArray
         */
        dup_channel_features(channel: Channel): GLib.Quark[];
    }

    interface HandleRepoIface {
        // Own properties of TelepathyGLib-0.12.HandleRepoIface

        handle_type: number;
        handleType: number;
    }

    type Handle = number;
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

export default TelepathyGLib;
// END
