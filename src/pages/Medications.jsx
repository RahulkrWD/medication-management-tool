import React, { useCallback, useEffect, useMemo, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import DashboardLayout from "../components/dashboard/DashboardLayout";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { FaPills, FaPlus } from "react-icons/fa";
import { motion } from "framer-motion";
import { getMedications, postMedications } from "../redux/Medications";
import MedicationCard from "../components/medications/MedicationCard";
import MedicationFilter from "../components/medications/MedicationFilter";
import MedicationSearch from "../components/medications/MedicationSearch";
import MedicationPagination from "../components/medications/MedicationPagination";
import AddMedicationModal from "../components/medications/AddMedicationModal";
import "../styles/Medications.css";

function Medications() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isAuthenticated, userId } = useSelector((state) => state.auth);
  const { loading, medication } = useSelector((state) => state.medications);

  const [showAddModal, setShowAddModal] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState("all");
  const [newMedication, setNewMedication] = useState({
    name: "",
    dosage: "",
    frequency: "",
    startDate: "",
    endDate: "",
    instructions: "",
    status: "active",
    userId: "",
  });
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  const fetchMedications = useCallback(() => {
    if (isAuthenticated && userId) {
      dispatch(getMedications(userId));
    }
  }, [dispatch, isAuthenticated, userId]);

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/login");
    } else {
      fetchMedications();
      setNewMedication((prev) => ({ ...prev, userId }));
    }
  }, [isAuthenticated, navigate, userId, fetchMedications]);

  const handleAddMedication = useCallback(
    async (e) => {
      e.preventDefault();
      try {
        await dispatch(postMedications(newMedication)).unwrap();
        setShowAddModal(false);
        setNewMedication({
          name: "",
          dosage: "",
          frequency: "",
          startDate: "",
          endDate: "",
          instructions: "",
          status: "active",
          userId: userId,
        });
        fetchMedications();
        setCurrentPage(1);
      } catch (error) {
        console.error("Failed to add medication:", error);
      }
    },
    [dispatch, newMedication, userId, fetchMedications]
  );

  const filteredMedications = useMemo(() => {
    const term = searchTerm.toLowerCase();
    return medication.filter((med) => {
      const matchesSearch =
        med.name.toLowerCase().includes(term) ||
        med.dosage.toLowerCase().includes(term);
      const matchesFilter = filter === "all" || med.status === filter;
      return matchesSearch && matchesFilter;
    });
  }, [medication, searchTerm, filter]);

  const { currentItems, totalPages } = useMemo(() => {
    const total = Math.ceil(filteredMedications.length / itemsPerPage);
    const items = filteredMedications.slice(
      (currentPage - 1) * itemsPerPage,
      currentPage * itemsPerPage
    );
    return { currentItems: items, totalPages: total };
  }, [filteredMedications, currentPage, itemsPerPage]);

  const handlePageChange = useCallback((page) => {
    setCurrentPage(page);
  }, []);

  const handleShowAddModal = useCallback(() => setShowAddModal(true), []);
  const handleHideAddModal = useCallback(() => setShowAddModal(false), []);

  const handleSearchChange = useCallback((term) => setSearchTerm(term), []);
  const handleFilterChange = useCallback((filter) => setFilter(filter), []);

  const handleNewMedicationChange = useCallback((updated) => {
    setNewMedication(updated);
  }, []);

  return (
    <DashboardLayout>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="medications-page"
      >
        <Container fluid>
          <Row className="mb-4 align-items-center">
            <Col md={6}>
              <h1 className="page-title">
                <FaPills className="me-2" />
                My Medications
              </h1>
            </Col>
            <Col md={6} className="d-flex justify-content-end">
              <Button
                as={motion.div}
                variant="primary"
                className="me-2"
                onClick={handleShowAddModal}
                whileHover={{ scale: 1.05 }}
              >
                <FaPlus className="me-1" />
                Add Medication
              </Button>
              <MedicationFilter
                filter={filter}
                setFilter={handleFilterChange}
              />
            </Col>
          </Row>

          <Row className="mb-4">
            <Col>
              <MedicationSearch
                searchTerm={searchTerm}
                setSearchTerm={handleSearchChange}
              />
            </Col>
          </Row>

          <Row>
            <Col>
              <Card className="shadow-sm">
                <Card.Body>
                  {currentItems.length === 0 ? (
                    <div className="text-center py-4 text-muted">
                      No medications found
                    </div>
                  ) : (
                    <div className="medications-grid">
                      {currentItems.map((med) => (
                        <MedicationCard key={med.id} medication={med} />
                      ))}
                    </div>
                  )}
                </Card.Body>
              </Card>
            </Col>
          </Row>

          {totalPages > 1 && (
            <Row className="mt-3">
              <Col className="d-flex justify-content-center">
                <MedicationPagination
                  currentPage={currentPage}
                  totalPages={totalPages}
                  handlePageChange={handlePageChange}
                />
              </Col>
            </Row>
          )}
        </Container>

        <AddMedicationModal
          show={showAddModal}
          onHide={handleHideAddModal}
          newMedication={newMedication}
          setNewMedication={handleNewMedicationChange}
          handleAddMedication={handleAddMedication}
          loading={loading}
        />
      </motion.div>
    </DashboardLayout>
  );
}

export default React.memo(Medications);
