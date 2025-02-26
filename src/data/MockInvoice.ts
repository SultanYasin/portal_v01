export interface Invoice {
  id: string;
  invoiceNumber: string;
  issuer: {
    name: string;
    company: string;
    email: string;
  };
  client: {
    name: string;
    company: string;
    email: string;
  };
  issueDate: string;
  dueDate: string;
  amount: number;
  status: 'paid' | 'pending' | 'overdue' | 'cancelled';
  currency: string;
}

export const mockInvoices: Invoice[] = [
  {
    id: "INV-001",
    invoiceNumber: "20240001",
    issuer: {
      name: "John Smith",
      company: "Advanced Tech Solutions",
      email: "john@techco.com"
    },
    client: {
      name: "Sarah Wilson",
      company: "Digital Solutions Ltd",
      email: "sarah@digital.com"
    },
    issueDate: "2024-03-01",
    dueDate: "2024-03-15",
    amount: 1500.00,
    status: "paid",
    currency: "USD"
  },

  {
    id: "INV-002",
    invoiceNumber: "20240002",
    issuer: {
      name: "Michael Johnson",
      company: "Global Software Inc",
      email: "michael@softwareco.com"
    },
    client: {
      name: "Oliver Brown",
      company: "Digital Marketing Pro",
      email: "oliver@marketing.com"
    },
    issueDate: "2024-03-02",
    dueDate: "2024-03-16",
    amount: 2300.00,
    status: "pending",
    currency: "USD"
  },

  {
    id: "INV-003",
    invoiceNumber: "20240003",
    issuer: {
      name: "Emily Davis",
      company: "Creative Design Co",
      email: "emily@design.com"
    },
    client: {
      name: "Sophie Taylor",
      company: "Integrated Advertising",
      email: "sophie@ads.com"
    },
    issueDate: "2024-03-03",
    dueDate: "2024-03-17",
    amount: 3400.00,
    status: "overdue",
    currency: "USD"
  },

  {
    id: "INV-004",
    invoiceNumber: "20240004",
    issuer: {
      name: "David Anderson",
      company: "Tech Solutions Plus",
      email: "david@techsolutions.com"
    },
    client: {
      name: "Emma White",
      company: "E-Commerce Enterprise",
      email: "emma@ecommerce.com"
    },
    issueDate: "2024-03-04",
    dueDate: "2024-03-18",
    amount: 1800.00,
    status: "paid",
    currency: "USD"
  },
  
  {
    id: "INV-005",
    invoiceNumber: "20240005",
    issuer: {
      name: "Rachel Green",
      company: "Digital Consulting Group",
      email: "rachel@consulting.com"
    },
    client: {
      name: "Kevin Miller",
      company: "Real Estate Development",
      email: "kevin@realestate.com"
    },
    issueDate: "2024-03-05",
    dueDate: "2024-03-19",
    amount: 5600.00,
    status: "pending",
    currency: "USD"
  }
]; 