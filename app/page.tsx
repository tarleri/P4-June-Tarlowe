"use client";

import { useState } from "react";
import { Snippet } from "@heroui/snippet";
import { Code } from "@heroui/code";
import { Button } from "@heroui/button";

import { title, subtitle } from "@/components/primitives";
import ConfettiButton from "@/components/confettiButton";

export default function Home() {
  const [spinning, setSpinning] = useState(false);

  const spinButton = () => {
    setSpinning(true);
    setTimeout(() => setSpinning(false), 1500);
  };

  return (
    <>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="inline-block max-w-xl text-center justify-center">
          <span className={title()}>Final&nbsp;</span>
          <span className={title({ color: "violet" })}>Project&nbsp;</span>
          <br />
          <span className={title()}>Website Design</span>
          <div className={subtitle({ class: "mt-4" })}>Erica Tarlowe</div>
        </div>

        <div className="flex gap-3">
          <ConfettiButton />

          <div className={spinning ? "animate-spin" : ""}>
            <Button radius="full" variant="ghost" onPress={spinButton}>
              Spin
            </Button>
          </div>
        </div>

        <div className="mt-8">
          <Snippet hideCopyButton hideSymbol variant="bordered">
            <span>
              Get started by editing <Code color="primary">app/page.tsx</Code>
            </span>
          </Snippet>
        </div>
      </section>
      <img
        alt="smile"
        src="https://media.istockphoto.com/id/2183025497/vector/smiley-emote-smiling-face-icon-cute-smile-sign-happy-emotion-symbol-emoticon-symbol-sign.jpg?s=612x612&w=0&k=20&c=il1P_8B1mL_ZdbBoyKiD1yP2nmMmFO-zFJyFemYFN9g="
      />
    </>
  );
}
