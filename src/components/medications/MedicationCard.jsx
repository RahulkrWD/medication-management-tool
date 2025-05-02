import React, { useMemo } from "react";
import { Badge, Button } from "react-bootstrap";
import { FaPills, FaCheck } from "react-icons/fa";
import { motion } from "framer-motion";

const statusBadges = {
  active: <Badge bg="success">Active</Badge>,
  completed: <Badge bg="primary">Completed</Badge>,
  missed: <Badge bg="warning">Missed</Badge>,
  expired: <Badge bg="danger">Expired</Badge>,
  default: <Badge bg="secondary">Unknown</Badge>,
};

const MedicationCard = React.memo(({ medication }) => {
  const statusBadge = useMemo(() => {
    return statusBadges[medication.status] || statusBadges.default;
  }, [medication.status]);

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
        <Button
          as={motion.div}
          variant="outline-primary"
          size="sm"
          whileHover={{ scale: 1.05 }}
        >
          Details
        </Button>
      </div>
    </motion.div>
  );
});

export default MedicationCard;
