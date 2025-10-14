"use client";

import { FloatingNav } from "@/components/ui/FloatingNav";
import { FaHome } from "react-icons/fa";

export default function FloatingNavWrapper() {
  return (
    <FloatingNav navItems={[{ name: "Home", link: "/", icon: <FaHome /> }]} />
  );
}
