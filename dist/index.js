"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SOCKET_EVENTS = exports.UserRole = exports.QueueStatus = void 0;
var QueueStatus;
(function (QueueStatus) {
    QueueStatus["WAITING"] = "WAITING";
    QueueStatus["CALLING"] = "CALLING";
    QueueStatus["SERVED"] = "SERVED";
    QueueStatus["SKIPPED"] = "SKIPPED";
    QueueStatus["CANCELLED"] = "CANCELLED";
})(QueueStatus || (exports.QueueStatus = QueueStatus = {}));
var UserRole;
(function (UserRole) {
    UserRole["SUPER_ADMIN"] = "SUPER_ADMIN";
    UserRole["ADMIN_LOKET"] = "ADMIN_LOKET";
    UserRole["PETUGAS_LOKET"] = "PETUGAS_LOKET";
})(UserRole || (exports.UserRole = UserRole = {}));
// Socket IO Event Names & Payloads
exports.SOCKET_EVENTS = {
    CONNECT: 'connect',
    DISCONNECT: 'disconnect',
    JOIN_ROOM: 'room:join',
    LEAVE_ROOM: 'room:leave',
    // Server to Client broadcasts
    QUEUE_CREATED: 'queue:created',
    QUEUE_CALLED: 'queue:called',
    QUEUE_RECALLED: 'queue:recalled',
    QUEUE_COMPLETED: 'queue:completed',
    QUEUE_SKIPPED: 'queue:skipped',
    QUEUE_UPDATED: 'queue:updated',
    // Hardware status & Scanner events
    PRINTER_STATUS_CHANGED: 'hardware:printer_status',
    KTP_SCANNED: 'kiosk:ktp_scanned',
    // App Settings Broadcast
    SETTINGS_UPDATED: 'settings:updated',
    // Dynamic Services & Forms Broadcast
    SERVICES_UPDATED: 'services:updated'
};
//# sourceMappingURL=index.js.map