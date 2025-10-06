import type PocketBase from 'pocketbase';
import type { RecordService } from 'pocketbase';

export enum Collections {
	Users = 'users',
	Loans = 'loans',
	Repayments = 'repayments',
	Transactions = 'transactions',
	Settings = 'settings'
}

export type IsoDateString = string;
export type RecordIdString = string;

export type BaseSystemFields<T = never> = {
	id: RecordIdString;
	created: IsoDateString;
	updated: IsoDateString;
	collectionId: string;
	collectionName: Collections;
	expand?: T;
};

export type AuthSystemFields<T = never> = {
	email: string;
	emailVisibility: boolean;
	username: string;
	verified: boolean;
} & BaseSystemFields<T>;

/** Built-in users collection extended with KYC fields */
export type UsersRecord = {
	name?: string;
	phone?: string;
	address?: string;
	date_of_birth?: IsoDateString;
	national_id?: string; // BVN/NIN etc.
	employment_status?: 'employed' | 'self-employed' | 'unemployed';
	income?: number; // monthly income
	role?: 'customer' | 'admin' | 'loan_officer';
	profile_complete?: boolean;
} & AuthSystemFields;

/** Loan applications */
export type LoansRecord = {
	user: RecordIdString; // relation → users
	amount: number;
	interest_rate: number; // %
	term_months: number;
	repayment_frequency: 'monthly' | 'weekly' | 'one-off';
	start_date?: IsoDateString;
	due_date?: IsoDateString;
	status: 'pending' | 'approved' | 'rejected' | 'active' | 'completed' | 'defaulted';
	approved_by?: RecordIdString; // relation → users (officer/admin)
	collateral_details?: string;
	notes?: string;
} & BaseSystemFields;

/** Repayments towards a loan */
export type RepaymentsRecord = {
	loan: RecordIdString; // relation → loans
	amount_paid: number;
	payment_date: IsoDateString;
	method: 'bank_transfer' | 'card' | 'cash';
	receipt_number?: string;
	recorded_by?: RecordIdString; // relation → users
} & BaseSystemFields;

/** Optional ledger of money movements */
export type TransactionsRecord = {
	user: RecordIdString; // relation → users
	type: 'loan_disbursement' | 'repayment' | 'fee';
	amount: number;
	description?: string;
} & BaseSystemFields;

/** Optional app-wide settings */
export type SettingsRecord = {
	default_interest_rate?: number;
	late_fee_percent?: number;
	min_loan_amount?: number;
	max_loan_amount?: number;
} & BaseSystemFields;

export type UsersResponse<Texpand = unknown> = Required<UsersRecord> & AuthSystemFields<Texpand>;
export type LoansResponse<Texpand = unknown> = Required<LoansRecord> & BaseSystemFields<Texpand>;
export type RepaymentsResponse<Texpand = unknown> = Required<RepaymentsRecord> &
	BaseSystemFields<Texpand>;
export type TransactionsResponse<Texpand = unknown> = Required<TransactionsRecord> &
	BaseSystemFields<Texpand>;
export type SettingsResponse<Texpand = unknown> = Required<SettingsRecord> &
	BaseSystemFields<Texpand>;

export type CollectionRecords = {
	users: UsersRecord;
	loans: LoansRecord;
	repayments: RepaymentsRecord;
	transactions: TransactionsRecord;
	settings: SettingsRecord;
};

export type CollectionResponses = {
	users: UsersResponse;
	loans: LoansResponse;
	repayments: RepaymentsResponse;
	transactions: TransactionsResponse;
	settings: SettingsResponse;
};

export type TypedPocketBase = PocketBase & {
	collection(idOrName: 'users'): RecordService<UsersResponse>;
	collection(idOrName: 'loans'): RecordService<LoansResponse>;
	collection(idOrName: 'repayments'): RecordService<RepaymentsResponse>;
	collection(idOrName: 'transactions'): RecordService<TransactionsResponse>;
	collection(idOrName: 'settings'): RecordService<SettingsResponse>;
};
