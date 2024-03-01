"use client"

import * as React from "react"
import { MoonIcon, SunIcon } from "@heroicons/react/24/outline"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"

export function ModeToggle() {
    const { theme, setTheme } = useTheme();
  
    // Function to toggle themes
    const toggleTheme = () => {
      setTheme(theme === 'dark' ? 'light' : 'dark');
    };
  
    return (
      <Button variant="ghost" size="icon" onClick={toggleTheme}>
        {theme === 'dark' ? (
          <SunIcon className="h-[1.2rem] w-[1.2rem]" />
        ) : (
          <MoonIcon className="h-[1.2rem] w-[1.2rem]" />
        )}
        <span className="sr-only">Toggle theme</span>
      </Button>
    );
  }
