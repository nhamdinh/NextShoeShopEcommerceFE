import { ReactNode } from "react";
import "./styles.css";
import "./responsive.css";
import "./tailwind.scss";
import "./app.scss";
type Props = {
  children: ReactNode;
};

// Since we have a `not-found.tsx` page on the root, a layout file
// is required, even if it's just passing children through.
export default function RootLayout({ children }: Props) {
  return children;
}
