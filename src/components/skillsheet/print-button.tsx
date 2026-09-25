"use client";

import { Button } from "@/components/ui/button";
import { Printer } from "lucide-react";

export function PrintButton() {
  return (
    <Button
      type="button"
      variant="outline"
      size="lg"
      className="print:hidden border-[var(--ink-line)] bg-[color-mix(in_oklab,var(--paper)_70%,transparent)] text-[var(--ink)] backdrop-blur-sm hover:bg-[var(--paper)]"
      onClick={() => window.print()}
    >
      <Printer data-icon="inline-start" />
      印刷 / PDF
    </Button>
  );
}
