import React, { useState } from "react";
import Header from "./components/Header";
import AboutUs from "./components/About";
import ProjectsGrid from "./components/Projects";
import Footer from "./components/Footer";
import Modal from "./components/Modal";
import "./App.css"; // Import your app's styles

const App = () => {
  const [showModal, setShowModal] = useState(false);

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleOpenModal = () => {
    setShowModal(true);
  };

  return (
    <div className="App">
      <Header />
      <AboutUs />
      <ProjectsGrid />
      <button
        style={{ marginTop: "1rem" }}
        onClick={handleOpenModal}
        className="reserve-button"
      >
        Reserve
      </button>
      <Modal show={showModal} handleClose={handleCloseModal} />
      <Footer />
    </div>
  );
};

export default App;
