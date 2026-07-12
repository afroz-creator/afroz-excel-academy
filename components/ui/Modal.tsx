"use client";

import { useState } from "react";

import Button from "@/components/ui/Button";
import Modal from "@/components/ui/Modal";

export default function TestPage() {
  const [open, setOpen] = useState(false);

  return (
    <div className="mt-20 flex justify-center">

      <Button onClick={() => setOpen(true)}>
        Open Modal
      </Button>

      <Modal
        open={open}
        onClose={() => setOpen(false)}
        title="Test Modal"
      >
        <p className="text-gray-700">
          🎉 Congratulations!

          <br /><br />

          Your reusable Modal component is working successfully.
        </p>
      </Modal>

    </div>
  );
}