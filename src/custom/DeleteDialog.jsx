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
      console.error(error);
    }
  };

  return (
    <>
      {/* Trigger Button */}
      <Button variant="destructive" onClick={() => setIsOpen(true)}>
        Delete
      </Button>

      {/* Confirmation Dialog */}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent
          className="bg-zinc-900 text-white border border-zinc-700"
          onInteractOutside={(e) => e.preventDefault()}
          onEscapeKeyDown={(e) => e.preventDefault()}
        >
          <DialogHeader>
            <DialogTitle className="text-white">Confirm Delete</DialogTitle>
          </DialogHeader>

          <p className="text-sm text-zinc-300">
            Are you sure you want to delete this?
          </p>

          <DialogFooter>
            <Button
              variant="secondary"
              className="bg-zinc-700 hover:bg-zinc-600 text-white"
              onClick={() => setIsOpen(false)}
            >
              Close
            </Button>
            <Button
              variant="destructive"
              onClick={handleDelete}
              disabled={deleting}
            >
              {deleting ? "Deleting..." : "Delete"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default DeleteDialog;
