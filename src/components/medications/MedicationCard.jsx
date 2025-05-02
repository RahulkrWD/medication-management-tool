import React, { useMemo } from "react";
import { Badge, Button, Dropdown } from "react-bootstrap";
import { FaPills, FaCheck } from "react-icons/fa";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { updateStatus } from "../../redux/Medications";

const statusBadges = {
  active: <Badge bg="success">Active</Badge>,
  expired: <Badge bg="danger">Expired</Badge>,
  completed: <Badge bg="primary">Completed</Badge>,
  missed: <Badge bg="warning">Missed</Badge>,
};

const MedicationCard = React.memo(({ medication }) => {
  const dispatch = useDispatch();
  const statusBadge = useMemo(() => {
    return statusBadges[medication.status] || statusBadges.default;
  }, [medication.status]);

  const handleStatusUpdate = (newStatus) => {
    dispatch(updateStatus({ id: medication.id, status: newStatus }));
  };

  return (
    <motion.div
      className="medication-card"
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
    >
      <div className="medication-header">
        <div className="medication-name">
          <FaPills className="me-2" />
          <h5>{medication.name}</h5>
        </div>
        <div className="medication-status">{statusBadge}</div>
      </div>

      <div className="medication-details">
        <div className="detail-row">
          <span className="detail-label">Dosage:</span>
          <span>{medication.dosage}</span>
        </div>
        <div className="detail-row">
          <span className="detail-label">Frequency:</span>
          <span>{medication.frequency}</span>
        </div>
        <div className="detail-row">
          <span className="detail-label">Instructions:</span>
          <span>{medication.instructions}</span>
        </div>
        <div className="detail-row">
          <span className="detail-label">Period:</span>
          <span>
            {medication.startDate}
            {medication.endDate && ` to ${medication.endDate}`}
          </span>
        </div>
      </div>

      <div className="medication-actions">
        {medication.status === "active" && (
          <Button
            as={motion.div}
            variant="outline-success"
            size="sm"
            whileHover={{ scale: 1.05 }}
          >
            <FaCheck className="me-1" />
            Mark as Taken
          </Button>
        )}
        <Dropdown>
          <Dropdown.Toggle variant="outline-primary">
            Update Status
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item onClick={() => handleStatusUpdate("active")}>
              Active
            </Dropdown.Item>
            <Dropdown.Item onClick={() => handleStatusUpdate("completed")}>
              Completed
            </Dropdown.Item>
            <Dropdown.Item onClick={() => handleStatusUpdate("expired")}>
              Expired
            </Dropdown.Item>
            <Dropdown.Item onClick={() => handleStatusUpdate("missed")}>
              Missed
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </motion.div>
  );
});

export default MedicationCard;
