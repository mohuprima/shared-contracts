export enum QueueStatus {
  WAITING = 'WAITING',
  CALLING = 'CALLING',
  SERVED = 'SERVED',
  SKIPPED = 'SKIPPED',
  CANCELLED = 'CANCELLED'
}

export enum UserRole {
  SUPER_ADMIN = 'SUPER_ADMIN',
  ADMIN_LOKET = 'ADMIN_LOKET',
  PETUGAS_LOKET = 'PETUGAS_LOKET'
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
  code: string; // e.g. 'A', 'B', 'C'
  name: string; // e.g. 'Cek Fisik BPKB', 'Pendaftaran Baru', 'Penyerahan BPKB'
  description?: string;
  isActive: boolean;
  prefix: string;
  parentId?: string | null;
  parent?: ServiceTypeDTO | null;
  children?: ServiceTypeDTO[];
  iconName?: string | null;
  color?: string | null;
  formFields?: FormFieldConfigDTO[];
  currentQuota?: number;
  enableFaceCapture?: boolean;
  useParentCode?: boolean;
}

export interface CounterDTO {
  id: string;
  number: number; // 1, 2, 3...
  name: string; // "Loket 1"
  serviceTypeId?: string;
  isActive: boolean;
  currentQueueId?: string;
}

export interface QueueTicketDTO {
  id: string;
  ticketNumber: string; // e.g. "A001"
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
  calledAt?: string | null;
  completedAt?: string | null;
  waitingEstimatedMinutes?: number;
  remainingAhead?: number;
  createdAt: string;
  updatedAt: string;
}

// Request & Response Contracts
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

// Socket IO Event Names & Payloads
export const SOCKET_EVENTS = {
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
} as const;

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
  voiceText: string; // e.g. "Nomor Antrean A 0 0 1 silakan menuju ke Loket 1"
  timestamp: string;
}
