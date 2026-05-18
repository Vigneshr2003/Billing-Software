import type {
  CustomerFormState,
  CustomerSnapshot,
} from "../types/customer.types";

export const initialCustomerForm: CustomerFormState = {
  customerName: "Raj Stores",
  mobileNumber: "9876543210",
  gstin: "33AABCR1023L1Z7",
  outstandingAmount: "Rs. 18,450",
  customerType: "Wholesale",
};

export const customerSnapshot: CustomerSnapshot = {
  name: "Raj Stores",
  mobileNumber: "9876543210",
  customerType: "Wholesale",
  outstandingAmount: "Rs. 18,450",
};
