export interface DocumentItem {
  id: string;
  name: string;
  type: string;
  size: string;
  updatedAt: string;
}

export const documents: DocumentItem[] = [
  {
    id: "demo-quarterly-report",
    name: "Quarterly Report",
    type: "PDF",
    size: "2.4 MB",
    updatedAt: "Edited 2 hours ago",
  },
  {
    id: "demo-product-strategy",
    name: "Product Strategy",
    type: "PDF",
    size: "1.8 MB",
    updatedAt: "Edited yesterday",
  },
  {
    id: "demo-financial-overview",
    name: "Financial Overview",
    type: "PDF",
    size: "3.1 MB",
    updatedAt: "Edited 3 days ago",
  },
  {
    id: "demo-project-proposal",
    name: "Project Proposal",
    type: "PDF",
    size: "1.2 MB",
    updatedAt: "Edited 5 days ago",
  },
];