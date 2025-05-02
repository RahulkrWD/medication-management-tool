import React from "react";
import { Dropdown } from "react-bootstrap";
import { FaFilter } from "react-icons/fa";

const MedicationFilter = React.memo(({ setFilter }) => {
  return (
    <Dropdown>
      <Dropdown.Toggle variant="outline-secondary">
        <FaFilter className="me-1" />
        Filter
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item onClick={() => setFilter("all")}>
          All Medications
        </Dropdown.Item>
        <Dropdown.Item onClick={() => setFilter("active")}>
          Active
        </Dropdown.Item>
        <Dropdown.Item onClick={() => setFilter("completed")}>
          Completed
        </Dropdown.Item>
        <Dropdown.Item onClick={() => setFilter("missed")}>
          Missed
        </Dropdown.Item>
        <Dropdown.Item onClick={() => setFilter("expired")}>
          Expired
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
});

export default MedicationFilter;
