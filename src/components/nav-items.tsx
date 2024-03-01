"use client";

import { PRODUCT_CATEGORIES } from "@/config";
import { useEffect, useRef, useState } from "react";
import { NavItem } from "./nav-item";
import { useOnClickOutside } from "@/hooks/use-on-click-outside";

export const NavItems = () => {
  const [activeTab, setActiveTab] = useState<null | number>(null);
  const isAnyOpen = activeTab !== null;
  const navRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handler = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveTab(null);
      }
    };

    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, []);

  useOnClickOutside(navRef, () => setActiveTab(null));

  return (
    <div className="flex gap-4 h-full" ref={navRef}>
      {PRODUCT_CATEGORIES.map((category, index) => {
        const handleOpen = () => {
          if (activeTab === index) {
            setActiveTab(null);
          } else {
            setActiveTab(index);
          }
        };

        const isOpen = index === activeTab;

        return (
          <NavItem
            key={category.value}
            category={category}
            handleOpen={handleOpen}
            isOpen={isOpen}
            isAnyOpen={isAnyOpen}
          />
        );
      })}
    </div>
  );
};
