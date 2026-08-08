/**
 * Shared SVG filter that traces a clean, fixed-width contour around an
 * icon's own alpha silhouette (dilate + flood + composite) — referenced via
 * `url(#icon-outline)` from IconChip.module.css. Rendered once and reused
 * by every IconChip instance; stacking N `drop-shadow()` CSS filters instead
 * doesn't work for this because each one shadows the *cumulative* output of
 * the previous ones, so the "outline" balloons with every layer.
 */
export function IconOutlineFilter() {
  return (
    <svg width="0" height="0" style={{ position: "absolute" }} aria-hidden="true" focusable="false">
      <filter id="icon-outline" x="-60%" y="-60%" width="220%" height="220%">
        <feMorphology in="SourceAlpha" operator="dilate" radius="1.1" result="dilated" />
        <feFlood result="flood-color" style={{ floodColor: "var(--text-primary)" }} />
        <feComposite in="flood-color" in2="dilated" operator="in" result="outline" />
        <feMerge>
          <feMergeNode in="outline" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </svg>
  );
}
