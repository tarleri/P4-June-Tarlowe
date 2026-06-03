"use client";

import { Button } from "@heroui/button";
import { addToast } from "@heroui/toast";
import confetti from "canvas-confetti";

export default function ConfettiButton() {
  const fireConfetti = () => {
    const duration = 6 * 1000;
    const end = Date.now() + duration;

    addToast({
      title: "Info",
      description:
        "This celebrate button is a component. You can add it anywhere!",
      color: "primary",
    });

    const colors = ["#a855f7", "#6366f1", "#ec4899", "#22d3ee"];

    (function frame() {
      confetti({
        particleCount: 6,
        angle: 60,
        spread: 70,
        origin: { x: 0 },
        colors,
      });

      confetti({
        particleCount: 6,
        angle: 120,
        spread: 70,
        origin: { x: 1 },
        colors,
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    })();
  };

  return (
    <Button
      color="primary"
      radius="full"
      variant="shadow"
      onPress={fireConfetti}
    >
      Celebrate!
    </Button>
  );
}
