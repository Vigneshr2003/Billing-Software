export interface CustomerFormState {
  customerName: string;
  mobileNumber: string;
  gstin: string;
  outstandingAmount: string;
  customerType: string;
}

export interface CustomerSnapshot {
  name: string;
  mobileNumber: string;
  customerType: string;
  outstandingAmount: string;
}
