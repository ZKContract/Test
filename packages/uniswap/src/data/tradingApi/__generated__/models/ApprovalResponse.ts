/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { RequestId } from './RequestId';
import type { TransactionRequest } from './TransactionRequest';
export type ApprovalResponse = {
    requestId: RequestId;
    approval: TransactionRequest;
    cancel: TransactionRequest;
    gasFee?: string;
    cancelGasFee?: string;
};

