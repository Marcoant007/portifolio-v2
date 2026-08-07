/**
 * Custom element registered by the Spline viewer <script> tag loaded in
 * index.html. React (pre-19) doesn't map `className` to the `class`
 * attribute for custom elements (tag names with a hyphen) — it passes
 * `className` straight through via setAttribute, which does nothing for
 * CSS. Use the literal `class` prop here instead of `className`.
 */
declare namespace JSX {
  interface IntrinsicElements {
    "spline-viewer": React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
      url: string;
      class?: string;
      "loading-anim-type"?: string;
    };
  }
}
