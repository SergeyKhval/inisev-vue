export type Email = {
  id: number;
  subject: string;
  body: string;
  isRead: boolean;
  isArchived: boolean;
  isSelected: boolean;
  isExpanded: boolean;
}