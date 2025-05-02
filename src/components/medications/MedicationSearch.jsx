import React from "react";
import { InputGroup, Form } from "react-bootstrap";
import { FaSearch } from "react-icons/fa";

const MedicationSearch = React.memo(({ searchTerm, setSearchTerm }) => {
  return (
    <InputGroup>
      <InputGroup.Text>
        <FaSearch />
      </InputGroup.Text>
      <Form.Control
        placeholder="Search medications..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </InputGroup>
  );
});

export default MedicationSearch;
