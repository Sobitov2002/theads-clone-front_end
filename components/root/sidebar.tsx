"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { menuItems, feedItems } from "@/constants/navigation";
import {
  House,
  Plus,
  Search,
  Send,
  Heart,
  UserRound,
  BarChart3,
  Bookmark,
  Lock,
  MoreHorizontal,
} from "lucide-react";

const icons = {
  House,
  Plus,
  Search,
  Send,
  Heart,
  UserRound,
  BarChart3,
  Bookmark,
  Lock,
};

interface SidebarProps {
  lng: string;
} 
export default function Sidebar({ lng }: SidebarProps) {
  const pathname = usePathname();

  const isActive = (href: string) => {
    const fullPath = `/${lng}${href}`;

    if (href === "") {
      return pathname === `/${lng}`;
    }

    return pathname.startsWith(fullPath);
  };

  return (
    <aside className="sticky top-0 hidden h-screen w-[240px] shrink-0 px-4 py-6 md:block">
      <div className="flex h-full flex-col">

        {/* LOGO */}
        <div className="mb-4 flex items-center justify-between px-2">
          <Link
            href={`/${lng}`}
            className="flex items-center gap-2 text-[26px] font-bold tracking-[-1.5px]"
          >
            <span className="text-[28px]">◎</span>
            <span>Threads</span>
          </Link>

          <button
            type="button"
            className="rounded-full p-2 text-white/80 transition hover:bg-white/10"
          >
            <MoreHorizontal size={22} />
          </button>
        </div>

        {/* MAIN NAVIGATION */}
        <nav className="space-y-1">
          {menuItems.map((item) => {

            const Icon = icons[item.icon as keyof typeof icons];

            const active = isActive(item.href);

            return (
              <Link
                key={item.label}
                href={`/${lng}${item.href}`}
                className={`
                  flex h-8 font-weight-600 items-center gap-3 rounded-xl px-3
                  text-[14px] transition
                  ${active
                    ? "bg-white/15 font-semibold text-white"
                    : "text-white/75 hover:bg-white/10 hover:text-white"
                  }
                `}
              >
                <Icon
                  size={18}
                />

                <span>{item.label}</span>
              </Link>
            );
          })}
        </nav>

        {/* OTHER FEEDS */}
        <div className="mt-10">

          <div className="mb-3 flex items-center justify-between px-2">
            <span className="text-sm font-semibold text-white/40">
              Other feeds
            </span>

            <button
              type="button"
              className="text-sm text-white/40 hover:text-white/70"
            >
              Edit
            </button>
          </div>

          <Link
            href={`/${lng}/following`}
            className="flex h-10 items-center rounded-xl px-2 text-[15px] text-white/80 hover:bg-white/10"
          >
            Following
          </Link>

          <div className="mt-2 space-y-1">
            {feedItems.map((item) => {
              const Icon = icons[item.icon as keyof typeof icons];
              const active = isActive(item.href);

              return (
                <Link
                  key={item.label}
                  href={`/${lng}${item.href}`}
                  className={`
                    flex h-10 items-center gap-4 rounded-xl px-2
                    text-[15px] transition
                    ${active
                      ? "bg-white/10 text-white"
                      : "text-white/70 hover:bg-white/10 hover:text-white"
                    }
                  `}
                >
                  <Icon size={20} strokeWidth={1.8} />
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </div>

          <button
            type="button"
            className="mt-2 px-2 text-[15px] text-white/40 hover:text-white/70"
          >
            Show more
          </button>
        </div>

      </div>
    </aside>
  );
}