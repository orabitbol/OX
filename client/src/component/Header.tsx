import { IHeader } from "../model/global";
import {
  Button,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputAdornment,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import "./header.scss";

const Header: React.FC<IHeader> = ({
  openCreateModal,
  searchQuery,
  setSearchQuery,
  selectedStatus,
  setSelectedStatus,
  employees,
}) => {
  const uniqueStatuses = Array.from(
    new Set(employees.map((employee) => employee.status))
  );

  return (
    <div className="header-component">
      <div className="header">
        <span className="title">Employees</span>
        <Button variant="outlined" color="primary" className="logout-button">
          Log Out
        </Button>
      </div>
      <div className="container">
        <Button
          variant="contained"
          color="primary"
          onClick={openCreateModal}
          className="create-button"
        >
          Create
          <span className="icon-plus">+</span>
        </Button>

        <div className="search-filter-group">
          <TextField
            variant="outlined"
            placeholder="Type to search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
            className="search"
          />
          <span className="divider"></span>
          <FormControl variant="outlined" className="select-status">
            <Select
              displayEmpty
              value={selectedStatus || ""}
              onChange={(e) => setSelectedStatus(e.target.value as string)}
              className="status-select"
              inputProps={{ "aria-label": "Filter by status" }}
            >
              <MenuItem value="">
                <span>Filter by status</span>
              </MenuItem>
              {uniqueStatuses.map((status) => (
                <MenuItem key={status} value={status}>
                  {status}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
      </div>
    </div>
  );
};

export default Header;
