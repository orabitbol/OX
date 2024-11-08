import React, { useEffect, useMemo, useRef, useState } from "react";
import Header from "./component/Header";
import EmployeeList from "./component/EmployeeList";
import CreateUserModal from "./component/CreateUserModal";
import { IEmployee } from "./model/global";
import { fetchEmployees, updateEmployeeStatus } from "./service/api";
import "./app.scss";

const App: React.FC = () => {
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("");
  const [employees, setEmployees] = useState<IEmployee[]>([]);

  const fetchData = async () => {
    const data = await fetchEmployees();
    setEmployees(data);
  };

  const initial = useRef(true);
  useEffect(() => {
    if (initial.current) {
      fetchData();
      initial.current = false;
    }
  }, []);

  const handleStatusChange = async (id: number, newStatus: string) => {
    try {
      await updateEmployeeStatus(id, newStatus);
      setEmployees((prevEmployees) =>
        prevEmployees.map((employee) =>
          employee.id === id ? { ...employee, status: newStatus } : employee
        )
      );
    } catch (error) {
      console.error("Failed to update status:", error);
    }
  };

  const filteredEmployees = useMemo(() => {
    return employees.filter(
      (employee) =>
        employee.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
        (selectedStatus ? employee.status === selectedStatus : true)
    );
  }, [employees, searchQuery, selectedStatus]);

  const openCreateModal = () => setIsCreateModalOpen(true);
  const closeCreateModal = () => setIsCreateModalOpen(false);

  return (
    <div className="app">
      <Header
        openCreateModal={openCreateModal}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        selectedStatus={selectedStatus}
        setSelectedStatus={setSelectedStatus}
        employees={filteredEmployees}
      />
      <EmployeeList
        employees={filteredEmployees}
        onStatusChange={handleStatusChange}
      />
      {isCreateModalOpen && (
        <CreateUserModal
          employees={filteredEmployees}
          closeModal={closeCreateModal}
        />
      )}
    </div>
  );
};

export default App;
