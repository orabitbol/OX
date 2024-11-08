export interface IEmployee {
  id: number;
  name: string;
  status: string;
  img: string;
}
export interface IEmployeeList {
  employees: IEmployee[];
  onStatusChange: (id: number, newStatus: string) => void;
}

export interface IStatusFilterProps {
  selectedStatus: string;
  setSelectedStatus: (status: string) => void;
}

export interface ISearchBarProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

export interface ICreateUserModal {
  closeModal: () => void;
  employees: IEmployee[];
}

export interface IHeader {
  openCreateModal: () => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  selectedStatus: string;
  setSelectedStatus: (status: string) => void;
  employees: IEmployee[];
}
