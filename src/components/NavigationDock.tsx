"use client";

import { useRouter, usePathname } from "next/navigation";
import { Dock, DockIcon } from "../../components/ui/dock";
import Image from "next/image";
import { Search, Bell } from "lucide-react";

export default function NavigationDock() {
  const router = useRouter();
  const pathname = usePathname();

  const dockItems = [
    { label: "Home", path: "/", icon: "🏠" },
    { label: "Movies", path: "/Movies", icon: "🎬" },
    { label: "Shows", path: "/Shows", icon: "📺" },
    { label: "My List", path: "/my-list", icon: "⭐" },
  ];

  const getDockClass = (path: string) => {
    const isActive =
      pathname === path || (pathname === "/" && path === "/home");
    return `flex flex-col items-center justify-center cursor-pointer transition
          ${isActive ? "bg-[#1A1A1A] text-white" : "hover:bg-[#1A1A1A] hover:text-white"}
          w-12 h-12 rounded-full`;
  };

  return (
    <header className="fixed top-0 w-full flex items-center justify-between px-6 py-3 text-[#BFBFBF]">
      {/* Logo on the left */}
      <div className="flex items-center gap-2">
        <Image
          src="/images/logo.png"
          alt="Logo"
          width={180}
          height={120}
          className="object-contain"
        />
      </div>

      {/* Dock in the center (desktop) */}
      <div className="hidden lg:flex justify-center flex-1">
        <Dock
          className="flex justify-center gap-10 px-4 bg-[#0F0F0F]/80"
          iconSize={40}
          iconMagnification={60}
          iconDistance={240}
          direction="middle"
        >
          {dockItems.map((item) => (
            <DockIcon
              key={item.path}
              size={40}
              magnification={60}
              onClick={() => router.push(item.path)}
            >
              <div className={getDockClass(item.path)}>
                <span className="text-2xl">{item.icon}</span>
                <span className="text-xs mt-1">{item.label}</span>
              </div>
            </DockIcon>
          ))}
        </Dock>
      </div>

      {/* Search & Notification on the right */}
      <div className="flex items-center gap-6">
        <Search className="text-xl cursor-pointer hover:text-white transition" />
        <Bell className="text-xl cursor-pointer hover:text-white transition" />
      </div>
    

    {/* Mobile Dock (at the bottom) */}

    <div className="lg:hidden fixed bottom-0 left-0 w-full px-4 py-3">
      <Dock
        className="flex justify-center gap-10 bg-[#0F0F0F]"
        iconSize={40}
        iconMagnification={60}
        iconDistance={120}
        direction="middle"
      >
        {dockItems.map((item) => (
          <DockIcon
            key={item.path}
            size={40}
            magnification={60}
            onClick={() => router.push(item.path)}
          >
            <div className={getDockClass(item.path)}>
              <span className="text-2xl">{item.icon}</span>
              <span className="text-xs mt-1">{item.label}</span>
            </div>
          </DockIcon>
        ))}
      </Dock>
    </div>
    </header>
  );
}
