import { X } from "lucide-react";
import { useEffect } from "react";

export function Lightbox({
  src,
  title,
  caption,
  onClose,
}: {
  src: string;
  title: string;
  caption?: string;
  onClose: () => void;
}) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={title}
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center bg-background/90 p-4 backdrop-blur-sm"
    >
      <button
        type="button"
        onClick={onClose}
        aria-label="Fechar"
        className="absolute right-5 top-5 rounded-full border border-border bg-surface p-2 text-foreground transition-colors hover:border-primary hover:text-primary"
      >
        <X className="size-5" />
      </button>
      <figure className="max-h-full w-full max-w-6xl overflow-auto" onClick={(e) => e.stopPropagation()}>
        <img src={src} alt={title} className="mx-auto w-full rounded-xl border border-border" />
        <figcaption className="mx-auto mt-4 max-w-3xl text-center text-sm text-muted-foreground">
          <span className="font-display font-semibold text-foreground">{title}</span>
          {caption ? <> — {caption}</> : null}
        </figcaption>
      </figure>
    </div>
  );
}
