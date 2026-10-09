import { Icon } from "@/components/ui/Icon";

/** Thin banner flagging the design preview. Hidden when site.previewNotice is null. */
export function PreviewBanner({ message }: { message: string | null }) {
  if (!message) return null;
  return (
    <div className="bg-iris-50 px-5 py-2 text-center text-xs font-medium text-iris-700 sm:text-sm">
      <p className="inline-flex items-center gap-2">
        <Icon name="info" className="size-4 shrink-0" />
        {message}
      </p>
    </div>
  );
}
