import type { SidebarMenuEntry } from "../components/layout/sidebar/sidebar.types";
import {
  Bell,
  BookText,
  Boxes,
  ChartColumnBig,
  CircleDollarSign,
  CreditCard,
  DatabaseBackup,
  FileBarChart2,
  FileClock,
  FileSpreadsheet,
  FileText,
  HandCoins,
  LayoutDashboard,
  PackageSearch,
  ReceiptText,
  Settings2,
  ShieldCheck,
  ShoppingBasket,
  Store,
  Truck,
  UserCog,
  Users,
  Wallet,
} from "lucide-react";

export const sidebarMenuItems: SidebarMenuEntry[] = [
  {
    id: "dashboard",
    label: "Dashboard",
    icon: LayoutDashboard,
    active: true,
  },
  {
    id: "billing-pos",
    label: "Billing / POS",
    icon: CreditCard,
  },
  {
    id: "sales",
    label: "Sales",
    icon: ChartColumnBig,
    children: [
      { id: "sales-invoices", label: "Invoices", icon: ReceiptText },
      { id: "sales-orders", label: "Sales Orders", icon: FileText },
      { id: "sales-returns", label: "Returns", icon: FileClock },
    ],
  },
  {
    id: "purchase",
    label: "Purchase",
    icon: ShoppingBasket,
    children: [
      { id: "purchase-orders", label: "Purchase Orders", icon: FileText },
      { id: "purchase-bills", label: "Bills", icon: BookText },
      { id: "purchase-returns", label: "Returns", icon: FileClock },
    ],
  },
  {
    id: "inventory",
    label: "Inventory",
    icon: Boxes,
    children: [
      { id: "inventory-products", label: "Products", icon: PackageSearch },
      { id: "inventory-stock", label: "Stock Adjustment", icon: Store },
      { id: "inventory-warehouse", label: "Warehouse", icon: FileSpreadsheet },
    ],
  },
  {
    id: "customers",
    label: "Customers",
    icon: Users,
  },
  {
    id: "suppliers",
    label: "Suppliers",
    icon: Truck,
  },
  {
    id: "accounts",
    label: "Accounts",
    icon: Wallet,
  },
  {
    id: "expenses",
    label: "Expenses",
    icon: HandCoins,
  },
  {
    id: "reports",
    label: "Reports",
    icon: FileBarChart2,
    children: [
      { id: "reports-sales", label: "Sales Report", icon: ChartColumnBig },
      { id: "reports-purchase", label: "Purchase Report", icon: ShoppingBasket },
      { id: "reports-tax", label: "Tax Summary", icon: ShieldCheck },
    ],
  },
  {
    id: "gst",
    label: "GST",
    icon: CircleDollarSign,
  },
  {
    id: "users-permissions",
    label: "Users & Permissions",
    icon: UserCog,
  },
  {
    id: "notifications",
    label: "Notifications",
    icon: Bell,
  },
  {
    id: "integrations",
    label: "Integrations",
    icon: DatabaseBackup,
  },
  {
    id: "settings",
    label: "Settings",
    icon: Settings2,
    children: [
      { id: "settings-company", label: "Company Profile", icon: Store },
      { id: "settings-roles", label: "Roles & Access", icon: UserCog },
      { id: "settings-tax", label: "Tax Setup", icon: ShieldCheck },
    ],
  },
  {
    id: "backup-sync",
    label: "Backup & Sync",
    icon: DatabaseBackup,
  },
];
