import { Link, useRouterState } from "@tanstack/react-router";
import {
  type LucideIcon,
  Recycle,
  LayoutDashboard,
  Package,
  Truck,
  MapPinned,
  History,
  Trophy,
  Bot,
  BookOpen,
  Settings,
  User,
  LogOut,
  Menu,
  Bell,
  ChevronRight,
  Search,
  MapPin,
  CheckCircle2,
  Clock,
  ShieldCheck,
  Leaf,
  X,
  ArrowLeft,
  Users,
  Warehouse,
  BarChart3,
  CalendarDays,
  Boxes,
  ArrowRightLeft,
  Building2,
  FileText,
} from "lucide-react";
import { useState, type ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Toaster } from "@/components/ui/sonner";
import { cn } from "@/lib/utils";
import { centres, statusTone } from "@/lib/mock-data";

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link
      to="/"
      className={cn(
        "flex items-center gap-2 font-bold text-xl tracking-tight",
        light ? "text-primary-foreground" : "text-foreground",
      )}
    >
      <span className="grid size-9 place-items-center rounded-lg bg-primary text-primary-foreground">
        <Recycle className="size-5" />
      </span>
      EcoCycle
    </Link>
  );
}
export const publicLinks = [
  ["How It Works", "/#how-it-works"],
  ["Find Centres", "/centres"],
  ["Learn", "/awareness"],
  ["About", "/#about"],
] as const;
export function PublicNav() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/90 backdrop-blur">
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-5 lg:px-8">
        <Logo />
        <nav className="hidden items-center gap-7 md:flex">
          {publicLinks.map(([label, to]) =>
            to.startsWith("/#") ? (
              <a
                key={label}
                href={to}
                className="text-sm font-medium text-muted-foreground transition hover:text-foreground"
              >
                {label}
              </a>
            ) : (
              <Link
                key={label}
                to={to}
                className="text-sm font-medium text-muted-foreground transition hover:text-foreground"
              >
                {label}
              </Link>
            ),
          )}
        </nav>
        <div className="hidden items-center gap-2 md:flex">
          <Button asChild variant="ghost">
            <Link to="/login">Log in</Link>
          </Button>
          <Button asChild>
            <Link to="/register">Get started</Link>
          </Button>
        </div>
        <Button
          className="md:hidden"
          variant="ghost"
          size="icon"
          aria-label="Open menu"
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </Button>
      </div>
      {open && (
        <div className="border-t bg-background p-5 md:hidden">
          <nav className="grid gap-2">
            {publicLinks.map(([label, to]) => (
              <a key={label} href={to} className="rounded-lg px-3 py-3 font-medium hover:bg-muted">
                {label}
              </a>
            ))}
            <Button asChild className="mt-2">
              <Link to="/register">Get started</Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
export function PublicFooter() {
  return (
    <footer className="border-t bg-foreground py-14 text-primary-foreground">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 md:grid-cols-5 lg:px-8">
        <div className="md:col-span-2">
          <Logo light />
          <p className="mt-5 max-w-xs text-sm text-primary-foreground/65">
            Making responsible e-waste disposal simple, transparent and rewarding.
          </p>
        </div>
        {[
          ["Platform", "Find Centres", "Request Pickup", "Track Recycling", "Rewards"],
          ["Resources", "Awareness", "E-Waste Guide", "FAQ", "AI Assistant"],
          ["Company", "About", "Contact", "Privacy", "Terms"],
        ].map(([h, ...links]) => (
          <div key={h}>
            <h3 className="font-semibold">{h}</h3>
            <ul className="mt-4 space-y-3 text-sm text-primary-foreground/60">
              {links.map((x) => (
                <li key={x}>{x}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="mx-auto mt-12 flex max-w-7xl justify-between border-t border-primary-foreground/15 px-5 pt-6 text-xs text-primary-foreground/50 lg:px-8">
        <span>© 2026 EcoCycle</span>
        <span>Built for a circular future</span>
      </div>
    </footer>
  );
}
export function PageTitle({
  title,
  subtitle,
  action,
}: {
  title: string;
  subtitle?: string;
  action?: ReactNode;
}) {
  return (
    <div className="mb-7 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
      <div>
        <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">{title}</h1>
        {subtitle && <p className="mt-1.5 text-sm text-muted-foreground">{subtitle}</p>}
      </div>
      {action}
    </div>
  );
}
export function StatusBadge({ status }: { status: string }) {
  const t = statusTone[status] || "neutral";
  return (
    <Badge variant="outline" className={cn("status-badge", `status-${t}`)}>
      {status}
    </Badge>
  );
}
export function StatCard({
  label,
  value,
  icon: Icon,
  detail,
}: {
  label: string;
  value: string;
  icon: LucideIcon;
  detail?: string;
}) {
  return (
    <Card className="group p-5 transition hover:-translate-y-0.5 hover:shadow-card">
      <div className="mb-5 flex items-center justify-between">
        <span className="text-sm text-muted-foreground">{label}</span>
        <span className="grid size-9 place-items-center rounded-lg bg-secondary text-primary">
          <Icon className="size-4" />
        </span>
      </div>
      <div className="text-3xl font-bold">{value}</div>
      {detail && <p className="mt-2 text-xs text-muted-foreground">{detail}</p>}
    </Card>
  );
}
const citizenNav: [string, string, LucideIcon][] = [
  ["Overview", "/dashboard", LayoutDashboard],
  ["My E-Waste", "/e-waste", Package],
  ["Request Pickup", "/pickup/request", Truck],
  ["My Pickups", "/pickups", CalendarDays],
  ["Find Centres", "/dashboard/centres", MapPinned],
  ["Recycling History", "/recycling", History],
  ["Eco Points", "/rewards", Trophy],
  ["EcoAssist", "/eco-assist", Bot],
  ["Awareness", "/awareness", BookOpen],
];
const centreNav: [string, string, LucideIcon][] = [
  ["Overview", "/centre/dashboard", LayoutDashboard],
  ["Pickup Requests", "/centre/requests", Truck],
  ["Schedule", "/centre/dashboard", CalendarDays],
  ["Collections", "/centre/collections", Boxes],
  ["Inventory", "/centre/collections", Warehouse],
  ["Recycling Transfers", "/centre/transfers", ArrowRightLeft],
  ["Analytics", "/centre/dashboard", BarChart3],
  ["Profile", "/profile", User],
];
const adminNav: [string, string, LucideIcon][] = [
  ["Overview", "/admin", LayoutDashboard],
  ["Users", "/admin/users", Users],
  ["Collection Centres", "/admin/centres", Building2],
  ["Recycling Agencies", "/admin", Recycle],
  ["Pickups", "/pickups", Truck],
  ["Recycling", "/recycling", History],
  ["Awareness", "/awareness", BookOpen],
  ["Reports", "/admin/analytics", FileText],
  ["Settings", "/settings", Settings],
];
export function AppShell({
  role = "citizen",
  children,
}: {
  role?: "citizen" | "centre" | "admin";
  children: ReactNode;
}) {
  const path = useRouterState({ select: (s) => s.location.pathname });
  const nav = role === "centre" ? centreNav : role === "admin" ? adminNav : citizenNav;
  const user =
    role === "centre" ? "GreenCycle Centre" : role === "admin" ? "EcoCycle Admin" : "Aviral Ranjan";
  return (
    <div className="min-h-screen bg-background">
      <aside className="fixed inset-y-0 left-0 z-40 hidden w-64 flex-col border-r bg-card p-4 lg:flex">
        <div className="px-2 py-3">
          <Logo />
        </div>
        <nav className="mt-7 flex-1 space-y-1">
          {nav.map(([label, to, Icon]) => (
            <Link
              key={label}
              to={to}
              className={cn(
                "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-muted-foreground transition",
                path === to ? "bg-secondary text-primary" : "hover:bg-muted hover:text-foreground",
              )}
            >
              <Icon className="size-4.5" />
              {label}
            </Link>
          ))}
        </nav>
        <div className="space-y-1 border-t pt-3">
          {role === "citizen" && (
            <>
              <Link to="/settings" className="side-link">
                <Settings />
                Settings
              </Link>
              <Link to="/profile" className="side-link">
                <User />
                Profile
              </Link>
            </>
          )}
          <Link to="/" className="side-link">
            <LogOut />
            Logout
          </Link>
        </div>
      </aside>
      <div className="lg:pl-64">
        <header className="sticky top-0 z-30 flex h-18 items-center justify-between border-b bg-background/90 px-5 backdrop-blur lg:px-8">
          <div className="flex items-center gap-3 lg:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon">
                  <Menu />
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-72 p-5">
                <Logo />
                <nav className="mt-8 space-y-1">
                  {nav.map(([label, to, Icon]) => (
                    <Link key={label} to={to} className="side-link">
                      <Icon />
                      {label}
                    </Link>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
            <span className="font-semibold">EcoCycle</span>
          </div>
          <div className="hidden text-sm text-muted-foreground lg:block">
            {role === "admin"
              ? "Platform administration"
              : role === "centre"
                ? "Centre operations"
                : "Citizen workspace"}
          </div>
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="icon" aria-label="Notifications">
              <Bell />
            </Button>
            <div className="grid size-9 place-items-center rounded-full bg-primary font-semibold text-primary-foreground">
              {user.charAt(0)}
            </div>
            <span className="hidden text-sm font-semibold sm:block">{user}</span>
          </div>
        </header>
        <main className="mx-auto max-w-[1500px] px-4 py-6 pb-24 sm:px-6 lg:px-8 lg:pb-10">
          {children}
        </main>
      </div>
      {role === "citizen" && (
        <nav className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-5 border-t bg-card px-2 py-2 lg:hidden">
          {citizenNav.slice(0, 5).map(([label, to, Icon]) => (
            <Link
              key={label}
              to={to}
              className={cn(
                "flex flex-col items-center gap-1 py-1 text-[10px] text-muted-foreground",
                path === to && "text-primary",
              )}
            >
              <Icon className="size-5" />
              {label.replace("My ", "")}
            </Link>
          ))}
        </nav>
      )}
      <Toaster richColors position="top-right" />
    </div>
  );
}
export function SearchBar({ placeholder = "Search" }: { placeholder?: string }) {
  return (
    <label className="relative block">
      <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
      <Input className="pl-9" placeholder={placeholder} />
    </label>
  );
}
export function MapPlaceholder({ large = false }: { large?: boolean }) {
  return (
    <div
      className={cn(
        "map-grid relative min-h-80 overflow-hidden rounded-2xl border bg-secondary",
        large && "min-h-[520px]",
      )}
    >
      <div className="absolute inset-0 bg-map-fade" />
      {centres.map((c, i) => (
        <div
          key={c.id}
          className="absolute"
          style={{ left: `${25 + i * 25}%`, top: `${30 + (i % 2) * 25}%` }}
        >
          <div className="group relative">
            <span className="grid size-11 place-items-center rounded-full border-4 border-card bg-primary text-primary-foreground shadow-lg">
              <MapPin className="size-5" />
            </span>
            <span className="absolute left-1/2 top-12 hidden w-44 -translate-x-1/2 rounded-lg bg-card p-2 text-xs font-semibold shadow-card group-hover:block">
              {c.name}
            </span>
          </div>
        </div>
      ))}
      <div className="absolute bottom-4 left-4 rounded-lg border bg-card px-3 py-2 text-xs text-muted-foreground">
        <span className="mr-2 inline-block size-2 rounded-full bg-primary" />
        Verified centres near Bengaluru
      </div>
    </div>
  );
}
export function CentreCard({
  centre,
  compact = false,
}: {
  centre?: (typeof centres)[number];
  compact?: boolean;
}) {
  const resolved = centre ?? centres[0];
  if (!resolved) return null;
  return (
    <Card className="p-5 transition hover:-translate-y-0.5 hover:shadow-card">
      <div className="flex items-start justify-between gap-3">
        <div>
          <div className="flex flex-wrap items-center gap-2">
            <h3 className="font-semibold">{resolved.name}</h3>
            <StatusBadge status="Verified" />
          </div>
          <p className="mt-2 flex items-center gap-1.5 text-sm text-muted-foreground">
            <MapPin className="size-4" />
            {resolved.distance} · {resolved.hours}
          </p>
        </div>
        <span className="rounded-lg bg-secondary p-2 text-primary">
          <ShieldCheck className="size-5" />
        </span>
      </div>
      {!compact && (
        <>
          <p className="mt-4 text-xs font-medium text-muted-foreground">ACCEPTS</p>
          <p className="mt-1 text-sm">{resolved.materials.join(" · ")}</p>
          <div className="mt-5 flex gap-2">
            <Button variant="outline" size="sm" asChild>
              <Link to="/centres/$id" params={{ id: resolved.id }}>
                View details
              </Link>
            </Button>
            <Button size="sm" asChild>
              <Link to="/pickup/request">Schedule pickup</Link>
            </Button>
          </div>
        </>
      )}
    </Card>
  );
}
export function EmptyState({
  title,
  copy,
  action,
}: {
  title: string;
  copy: string;
  action?: ReactNode;
}) {
  return (
    <div className="grid min-h-64 place-items-center rounded-2xl border border-dashed bg-card p-8 text-center">
      <div>
        <span className="mx-auto grid size-12 place-items-center rounded-full bg-secondary text-primary">
          <Leaf />
        </span>
        <h3 className="mt-4 font-semibold">{title}</h3>
        <p className="mt-1 text-sm text-muted-foreground">{copy}</p>
        {action && <div className="mt-5">{action}</div>}
      </div>
    </div>
  );
}
export function SectionHeader({
  eyebrow,
  title,
  copy,
}: {
  eyebrow?: string;
  title: string;
  copy?: string;
}) {
  return (
    <div className="max-w-2xl">
      {eyebrow && (
        <p className="mb-3 text-xs font-bold uppercase tracking-widest text-primary">{eyebrow}</p>
      )}
      <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{title}</h2>
      {copy && <p className="mt-4 text-muted-foreground sm:text-lg">{copy}</p>}
    </div>
  );
}
export function BackLink({ to = "/dashboard" }: { to?: string }) {
  return (
    <Link
      to={to}
      className="mb-5 inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground"
    >
      <ArrowLeft className="size-4" />
      Back
    </Link>
  );
}
export { Button, Card, Input, Badge, ChevronRight, Clock, CheckCircle2 };
