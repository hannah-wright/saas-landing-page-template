# React version

`DevTools.tsx` is a single React component with no required props.

```tsx
import { DevTools } from "./DevTools";

export default function App() {
  return <DevTools />;
}
```

Requirements:
- Tailwind CSS v4
- Import `globals.css` once (it defines the design tokens the component uses)

No icon library is needed; the component uses inline SVGs. For dark mode, add the `dark` class to a parent element (such as `<html>`).

Part of [SaaS Design](https://www.saasdesign.io). Get all 9 templates and the design system at https://www.saasdesign.io/pricing/.
