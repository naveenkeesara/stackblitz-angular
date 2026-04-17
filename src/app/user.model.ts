export interface User {
  id: number;
  name: string;
  email: string;
  department: string;
  status: 'Active' | 'Inactive';
}
