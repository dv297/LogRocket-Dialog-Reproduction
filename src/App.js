import { useState } from "react";
import Modal from "./Modal";

function App() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <div className="App">
      <button
        onClick={() => {
          setIsDialogOpen(true);
        }}
      >
        Open Dialog
      </button>
      <Modal
        shouldShowModal={isDialogOpen}
        allowModalToClose
        onClose={() => {
          setIsDialogOpen(false);
        }}
      >
        This is the modal content
      </Modal>
    </div>
  );
}

export default App;
