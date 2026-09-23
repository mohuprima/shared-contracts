export declare enum QueueStatus {
    HOLD = "HOLD",
    WAITING = "WAITING",
    CALLING = "CALLING",
    SERVED = "SERVED",
    COMPLETED = "COMPLETED",
    SKIPPED = "SKIPPED",
    CANCELLED = "CANCELLED"
}
export declare enum UserRole {
    SUPER_ADMIN = "SUPER_ADMIN",
    ADMIN_LOKET = "ADMIN_LOKET",
    PETUGAS_LOKET = "PETUGAS_LOKET"
}
export type FormFieldType = 'TEXT' | 'NUMBER' | 'SELECT' | 'RADIO' | 'CHECKBOX' | 'DATE';
export interface FormFieldConfigDTO {
    id: string;
    serviceTypeId: string;
    fieldName: string;
    fieldLabel: string;
    fieldType: FormFieldType;
    isRequired: boolean;
    placeholder?: string | null;
    options?: string[] | null;
    orderIndex: number;
}
export interface ServiceTypeDTO {
    id: string;
    code: string;
    name: string;
    description?: string;
    isActive: boolean;
    prefix: string;
    parentId?: string | null;
    parent?: ServiceTypeDTO | null;
    children?: ServiceTypeDTO[];
    nextServiceId?: string | null;
    nextService?: ServiceTypeDTO | null;
    requiresFormBeforeQueue?: boolean;
    iconName?: string | null;
    color?: string | null;
    formFields?: FormFieldConfigDTO[];
    currentQuota?: number;
    enableFaceCapture?: boolean;
    useParentCode?: boolean;
}
export interface CounterDTO {
    id: string;
    number: number;
    name: string;
    serviceTypeId?: string;
    isActive: boolean;
    currentQueueId?: string;
}
export interface QueueStepDTO {
    id: string;
    queueId: string;
    serviceTypeId: string;
    serviceType?: ServiceTypeDTO;
    counterId?: string | null;
    counter?: CounterDTO | null;
    stepOrder: number;
    status: QueueStatus;
    notes?: string | null;
    calledAt?: string | null;
    completedAt?: string | null;
    createdAt: string;
    updatedAt: string;
}
export interface QueueTicketDTO {
    id: string;
    ticketNumber: string;
    serviceTypeId: string;
    serviceType?: ServiceTypeDTO;
    counterId?: string | null;
    counter?: CounterDTO | null;
    status: QueueStatus;
    name?: string | null;
    nik?: string | null;
    phoneNumber?: string | null;
    faceImageUrl?: string | null;
    token?: string | null;
    formData?: Record<string, any> | null;
    notes?: string | null;
    calledAt?: string | null;
    completedAt?: string | null;
    waitingEstimatedMinutes?: number;
    remainingAhead?: number;
    steps?: QueueStepDTO[];
    createdAt: string;
    updatedAt: string;
}
export interface RegisterTicketRequest {
    serviceTypeId: string;
    name?: string;
    nik?: string;
    phoneNumber?: string;
    faceImageBase64?: string;
    photoUrl?: string;
    formData?: Record<string, any>;
}
export interface CallNextQueueRequest {
    counterId: string;
    queueId?: string;
}
export interface RecallQueueRequest {
    counterId: string;
    queueId: string;
}
export interface CompleteQueueRequest {
    counterId: string;
    queueId: string;
    notes?: string;
}
export interface TransferQueueRequest {
    counterId: string;
    queueId: string;
    targetServiceTypeId: string;
    notes?: string;
}
export interface SkipQueueRequest {
    counterId: string;
    queueId: string;
    reason?: string;
}
export interface ApiResponse<T = any> {
    success: boolean;
    message?: string;
    data?: T;
    error?: {
        code: string;
        details?: any;
    };
}
export declare const SOCKET_EVENTS: {
    readonly CONNECT: "connect";
    readonly DISCONNECT: "disconnect";
    readonly JOIN_ROOM: "room:join";
    readonly LEAVE_ROOM: "room:leave";
    readonly QUEUE_CREATED: "queue:created";
    readonly QUEUE_CALLED: "queue:called";
    readonly QUEUE_RECALLED: "queue:recalled";
    readonly QUEUE_COMPLETED: "queue:completed";
    readonly QUEUE_TRANSFERRED: "queue:transferred";
    readonly QUEUE_SKIPPED: "queue:skipped";
    readonly QUEUE_UPDATED: "queue:updated";
    readonly PRINTER_STATUS_CHANGED: "hardware:printer_status";
    readonly KTP_SCANNED: "kiosk:ktp_scanned";
    readonly SETTINGS_UPDATED: "settings:updated";
    readonly SERVICES_UPDATED: "services:updated";
};
export interface AppSettingDTO {
    id?: string;
    appName: string;
    institutionName: string;
    subHeader: string;
    logoUrl?: string | null;
    displayMarqueeText?: string | null;
    kioskAutoResetSec: number;
    displaySlideSec: number;
    displayQueueRotateSec: number;
    maxActiveContents: number;
    defaultLayoutMode: string;
    enableVoiceChime: boolean;
    updatedAt?: string;
}
export interface QueueCalledEventPayload {
    queue: QueueTicketDTO;
    counter: CounterDTO;
    voiceText: string;
    timestamp: string;
}
//# sourceMappingURL=index.d.ts.map