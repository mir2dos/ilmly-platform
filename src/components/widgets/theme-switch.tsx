"use client";

import { MonitorIcon, MoonIcon, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import { ButtonGroup } from "@/components/ui/button-group";
import { useEffect, useState } from "react";

export function ThemeSwitch() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  const THEME_OPTIONS = {
    system: <MonitorIcon />,
    light: <SunIcon />,
    dark: <MoonIcon />,
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <>
      <ButtonGroup>
        {Object.entries(THEME_OPTIONS).map(([key, icon]) => {
          return (
            <Button
              key={key}
              variant={key === theme ? "default" : "outline"}
              size="icon"
              onClick={() => setTheme(key)}
            >
              {icon}
            </Button>
          );
        })}
      </ButtonGroup>
    </>
  );
}
