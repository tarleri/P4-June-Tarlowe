import ConfettiButton from "@/components/confettiButton";
import { title } from "@/components/primitives";

export default function DocsPage() {
  return (
    <div>
      <h1 className={title()}>Docs</h1>

      <div className="my-20">
        <span className="text-2xl mr-6">WOW thats a lot of celebrations!</span>{" "}
        <span className="text-xs">Especially for a docs page.</span>
      </div>

      <div className="flex gap-4">
        <ConfettiButton />
        <ConfettiButton />
        <ConfettiButton />
        <ConfettiButton />
        <ConfettiButton />
        <ConfettiButton />
        <ConfettiButton />
        <ConfettiButton />
        <ConfettiButton />
        <ConfettiButton />
      </div>
    </div>
  );
}
