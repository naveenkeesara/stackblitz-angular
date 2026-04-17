import { Injectable } from '@angular/core';
import { User } from './user.model';

/**
 * UserService — already built for you. DO NOT MODIFY.
 *
 * Available method:
 *   getUsers(): User[]  — returns the full list of users
 */
@Injectable({
  providedIn: 'root'
})
export class UserService {

  private users: User[] = [
    { id: 1, name: 'Naveen Reddy',    email: 'naveen@company.com',   department: 'Engineering',  status: 'Active'   },
    { id: 2, name: 'Priya Sharma',    email: 'priya@company.com',    department: 'Design',       status: 'Active'   },
    { id: 3, name: 'Ravi Kumar',      email: 'ravi@company.com',     department: 'Engineering',  status: 'Inactive' },
    { id: 4, name: 'Anitha Gandu',    email: 'anitha@company.com',   department: 'QA',           status: 'Active'   },
    { id: 5, name: 'Jagadish Borra',  email: 'jagadish@company.com', department: 'Engineering',  status: 'Inactive' },
    { id: 6, name: 'Sowmya Reddy',    email: 'sowmya@company.com',   department: 'Product',      status: 'Active'   },
    { id: 7, name: 'Harsha Vardhan',  email: 'harsha@company.com',   department: 'DevOps',       status: 'Inactive' },
    { id: 8, name: 'Meena Iyer',      email: 'meena@company.com',    department: 'Design',       status: 'Active'   }
  ];

  getUsers(): User[] {
    return this.users;
  }
}
