import React, { useState } from "react";
import { IEmployeeList } from "../model/global";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Select,
  MenuItem,
  FormControl,
} from "@mui/material";
import "./employeeList.scss";

const EmployeeList: React.FC<IEmployeeList> = ({
  employees,
  onStatusChange,
}) => {
  const [hoveredEmployeeId, setHoveredEmployeeId] = useState<number | null>(
    null
  );

  const handleMouseEnter = (employeeId: number) => {
    setHoveredEmployeeId(employeeId);
  };

  const handleMouseLeave = () => {
    setHoveredEmployeeId(null);
  };

  const getStatusDotColor = (status: string) => {
    switch (status) {
      case "Working":
        return "#88e6b3";
      case "On Vacation":
        return "#f8867c";
      case "Business Trip":
        return "#b752db";
      case "LunchTime":
        return "#cbd445";
      default:
        return "#ccc";
    }
  };

  const uniqueStatuses = Array.from(
    new Set(employees.map((employee) => employee.status))
  );

  return (
    <div className="employee-component">
      {employees.map((employee) => (
        <Card key={employee.id} className="employee-card">
          <CardMedia
            component="img"
            height="140"
            image={
              hoveredEmployeeId === employee.id
              ? employee.gif // Updated GIF URL
                : employee.img
            }
            alt={employee.name}
            className="employee-avatar"
            onMouseEnter={() => handleMouseEnter(employee.id)}
            onMouseLeave={handleMouseLeave}
          />

          <CardContent className="card-content">
            <Typography className="card-name">{employee.name}</Typography>

            <FormControl variant="standard" fullWidth>
              <Select
                labelId={`status-select-label-${employee.id}`}
                id={`status-select-${employee.id}`}
                value={employee.status}
                onChange={(e) =>
                  onStatusChange(employee.id, e.target.value as string)
                }
                label="Status"
              >
                {uniqueStatuses.map((status) => (
                  <MenuItem key={status} value={status}>
                    <span
                      className="status-dot"
                      style={{
                        backgroundColor: getStatusDotColor(status),
                      }}
                    ></span>
                    {status}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default EmployeeList;
