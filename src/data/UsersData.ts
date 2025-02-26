export type UserRole = 'admin' | 'supervisor' | 'user' | 'reader';

export interface User {
  id: string;
  username: string;
  email: string;
  fullName: string;
  role: UserRole;
  department: string;
  joinDate: string;
  lastActive: string;
  isActive: boolean;
  permissions: string[];
}

export const mockUsers: User[] = [
  {
    id: "USR-001",
    username: "john.admin",
    email: "john@company.com",
    fullName: "John Anderson",
    role: "admin",
    department: "IT Administration",
    joinDate: "2023-01-15",
    lastActive: "2024-03-10",
    isActive: true,
    permissions: [
      "manage_users",
      "manage_roles",
      "view_reports",
      "edit_settings",
      "manage_invoices",
      "approve_payments"
    ]
  },
  
  {
    id: "USR-002",
    username: "sarah.supervisor",
    email: "sarah@company.com",
    fullName: "Sarah Thompson",
    role: "supervisor",
    department: "Finance",
    joinDate: "2023-03-20",
    lastActive: "2024-03-09",
    isActive: true,
    permissions: [
      "view_reports",
      "manage_invoices",
      "approve_payments",
      "view_users"
    ]
  },

  {
    id: "USR-003",
    username: "mike.user",
    email: "mike@company.com",
    fullName: "Michael Roberts",
    role: "user",
    department: "Accounting",
    joinDate: "2023-06-10",
    lastActive: "2024-03-08",
    isActive: true,
    permissions: [
      "create_invoices",
      "view_reports",
      "edit_own_profile"
    ]
  },
  {
    id: "USR-004",
    username: "emma.reader",
    email: "emma@company.com",
    fullName: "Emma Wilson",
    role: "reader",
    department: "Marketing",
    joinDate: "2023-09-01",
    lastActive: "2024-03-07",
    isActive: true,
    permissions: [
      "view_reports",
      "view_invoices"
    ]
  },

  {
    id: "USR-005",
    username: "david.admin",
    email: "david@company.com",
    fullName: "David Miller",
    role: "admin",
    department: "System Administration",
    joinDate: "2023-02-01",
    lastActive: "2024-03-10",
    isActive: true,
    permissions: [
      "manage_users",
      "manage_roles",
      "view_reports",
      "edit_settings",
      "manage_invoices",
      "approve_payments"
    ]
  },

  {
    id: "USR-006",
    username: "lisa.supervisor",
    email: "lisa@company.com",
    fullName: "Lisa Chen",
    role: "supervisor",
    department: "Operations",
    joinDate: "2023-04-15",
    lastActive: "2024-03-09",
    isActive: true,
    permissions: [
      "view_reports",
      "manage_invoices",
      "approve_payments",
      "view_users"
    ]
  },

  {
    id: "USR-007",
    username: "tom.user",
    email: "tom@company.com",
    fullName: "Tom Harris",
    role: "user",
    department: "Sales",
    joinDate: "2023-07-20",
    lastActive: "2024-03-08",
    isActive: false,
    permissions: [
      "create_invoices",
      "view_reports",
      "edit_own_profile"
    ]
  },

  {
    id: "USR-008",
    username: "anna.reader",
    email: "anna@company.com",
    fullName: "Anna Martinez",
    role: "reader",
    department: "Customer Support",
    joinDate: "2023-10-05",
    lastActive: "2024-03-07",
    isActive: true,
    permissions: [
      "view_reports",
      "view_invoices"
    ]
  }
]; 