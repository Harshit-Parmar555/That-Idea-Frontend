import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { IdeaStore } from "@/store/useIdeaStore";

const DeleteDialog = ({ id }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { deleteIdea, deleting } = IdeaStore();
  const handleDelete = () => {
    try {
      deleteIdea(id);
      setIsOpen(false);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      {/* Button to Open Dialog */}
      <Button variant="destructive" onClick={() => setIsOpen(true)}>
        Delete
      </Button>

      {/* Delete Confirmation Dialog */}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Confirm Delete</DialogTitle>
          </DialogHeader>
          <p>Are you sure you want to delete this?</p>
          <DialogFooter>
            <Button variant="secondary" onClick={() => setIsOpen(false)}>
              Close
            </Button>
            <Button variant="destructive" onClick={handleDelete}>
              Delete
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default DeleteDialog;
