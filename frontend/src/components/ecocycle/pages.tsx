import { Link, useParams } from "@tanstack/react-router";
import { useState, type FormEvent, type ReactNode } from "react";
import { toast } from "sonner";
import {
  Recycle,
  Truck,
  Users,
  Scale,
  Smartphone,
  Laptop,
  Tablet,
  Tv,
  Printer,
  Battery,
  Cable,
  Cpu,
  Package,
  ArrowRight,
  Bot,
  Leaf,
  ShieldCheck,
  CalendarDays,
  Trophy,
  CheckCircle2,
  Circle,
  MapPin,
  Clock,
  Camera,
  Sparkles,
  Send,
  Paperclip,
  Lock,
  Eye,
  EyeOff,
  Phone,
  Mail,
  Home,
  TrendingUp,
  Boxes,
  UserCheck,
  AlertTriangle,
  BarChart3,
  Warehouse,
  CircleGauge,
  Search,
  Filter,
  Settings,
  Bell,
  Upload,
  ChevronRight,
  FileCheck2,
  XCircle,
  Building2,
} from "lucide-react";
import {
  AreaChart,
  Area,
  BarChart,
  Bar,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import {
  PublicNav,
  PublicFooter,
  AppShell,
  PageTitle,
  StatCard,
  StatusBadge,
  CentreCard,
  MapPlaceholder,
  SectionHeader,
  SearchBar,
  BackLink,
  Button,
  Card,
  Input,
  Badge,
} from "./shared";
import {
  centres,
  wasteItems,
  pickups,
  pickupStages,
  articles,
  analyticsData,
} from "@/lib/mock-data";
import { Progress } from "@/components/ui/progress";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

export const head = (title: string, description: string) => () => ({
  meta: [
    { title: `${title} — EcoCycle` },
    { name: "description", content: description },
    { property: "og:title", content: `${title} — EcoCycle` },
    { property: "og:description", content: description },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ],
});
const deviceIcons = [
  Smartphone,
  Laptop,
  Tablet,
  Tv,
  Printer,
  Battery,
  Cable,
  Cpu,
  Package,
  Recycle,
];
const devices = [
  "Smartphones",
  "Laptops",
  "Tablets",
  "Televisions",
  "Printers",
  "Batteries",
  "Chargers",
  "Cables",
  "Computer Components",
  "Other Electronics",
];

export function LandingPage() {
  return (
    <div>
      <PublicNav />
      <main>
        <section className="relative overflow-hidden bg-hero">
          <div className="mx-auto grid min-h-[720px] max-w-7xl items-center gap-12 px-5 py-20 lg:grid-cols-[1.05fr_.95fr] lg:px-8">
            <div className="animate-enter">
              <Badge variant="outline" className="mb-5 border-primary/20 bg-card text-primary">
                Responsible disposal, made simple
              </Badge>
              <h1 className="max-w-3xl text-5xl font-extrabold leading-[1.08] tracking-tight sm:text-6xl">
                Give your old electronics a better ending.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
                Connect with verified e-waste collection centres, schedule a pickup, and track your
                electronics from collection to responsible recycling.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button size="lg" asChild>
                  <Link to="/pickup/request">
                    <Truck />
                    Schedule a pickup
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link to="/centres">
                    <MapPin />
                    Find a collection centre
                  </Link>
                </Button>
              </div>
              <div className="mt-9 flex flex-wrap gap-6 text-sm text-muted-foreground">
                <span className="flex items-center gap-2">
                  <ShieldCheck className="size-4 text-primary" />
                  48 verified centres
                </span>
                <span className="flex items-center gap-2">
                  <CheckCircle2 className="size-4 text-primary" />
                  Traceable recycling
                </span>
              </div>
            </div>
            <LifecycleVisual />
          </div>
        </section>
        <section className="border-y bg-card">
          <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-y px-5 md:grid-cols-4 md:divide-y-0 lg:px-8">
            {[
              ["12,480 kg", "E-Waste Recycled"],
              ["3,240", "Pickups Completed"],
              ["48", "Verified Centres"],
              ["6,820", "Citizens Participating"],
            ].map(([v, l]) => (
              <div className="px-4 py-8 text-center" key={l}>
                <div className="text-2xl font-bold sm:text-3xl">{v}</div>
                <div className="mt-1 text-xs text-muted-foreground sm:text-sm">{l}</div>
              </div>
            ))}
          </div>
        </section>
        <section id="how-it-works" className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
          <SectionHeader
            eyebrow="A clearer path"
            title="From drawer to circular economy"
            copy="Four transparent steps ensure every device reaches a responsible destination."
          />
          <div className="relative mt-12 grid gap-8 md:grid-cols-4">
            <div className="absolute left-[12%] right-[12%] top-7 hidden h-px bg-border md:block" />
            {[
              [
                "01",
                "Identify your e-waste",
                "Tell us what electronic items you want to dispose of.",
              ],
              [
                "02",
                "Schedule a pickup",
                "Choose a verified collection centre and convenient time.",
              ],
              ["03", "Track your recycling", "Follow your e-waste through every stage."],
              [
                "04",
                "Make an impact",
                "See how your responsible disposal supports sustainability.",
              ],
            ].map(([n, t, c]) => (
              <div key={n} className="relative">
                <span className="relative z-10 grid size-14 place-items-center rounded-full border bg-card text-sm font-bold text-primary shadow-sm">
                  {n}
                </span>
                <h3 className="mt-5 font-bold">{t}</h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">{c}</p>
              </div>
            ))}
          </div>
        </section>
        <section className="bg-card py-24">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <SectionHeader eyebrow="Accepted items" title="Nearly every device has a next life" />
            <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
              {devices.map((d, i) => {
                const Icon = deviceIcons[i];
                return (
                  <Card
                    key={d}
                    className="group p-5 transition hover:-translate-y-1 hover:border-primary/30 hover:shadow-card"
                  >
                    <Icon className="size-6 text-primary" />
                    <p className="mt-5 text-sm font-semibold">{d}</p>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>
        <section className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-24 lg:grid-cols-2 lg:px-8">
          <div>
            <SectionHeader
              eyebrow="EcoAssist"
              title="Not sure what to do with your device?"
              copy="Use EcoAssist to identify your e-waste and get responsible disposal guidance."
            />
            <Button className="mt-7" asChild>
              <Link to="/eco-assist">
                <Sparkles />
                Try EcoAssist
              </Link>
            </Button>
          </div>
          <Card className="border-primary/15 p-5 shadow-card">
            <div className="mb-5 flex items-center gap-3 border-b pb-4">
              <span className="grid size-10 place-items-center rounded-lg bg-primary text-primary-foreground">
                <Bot />
              </span>
              <div>
                <h3 className="font-bold">EcoAssist</h3>
                <p className="text-xs text-muted-foreground">Your disposal guide</p>
              </div>
              <span className="ml-auto size-2 rounded-full bg-primary" />
            </div>
            <div className="ml-auto max-w-[84%] rounded-2xl rounded-br-sm bg-foreground p-4 text-sm text-primary-foreground">
              I have an old broken laptop. How should I dispose of it?
            </div>
            <div className="mt-3 max-w-[88%] rounded-2xl rounded-bl-sm bg-secondary p-4 text-sm leading-6">
              Your laptop should be handled through an authorized e-waste recycler. EcoCycle can
              help you find the nearest verified centre and schedule a pickup.
            </div>
          </Card>
        </section>
        <section id="about" className="bg-foreground py-24 text-primary-foreground">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <SectionHeader
              eyebrow="Collective impact"
              title="Every responsible disposal makes a difference."
            />
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {[
                ["8.4 t", "Materials recovered"],
                ["12.5 t", "Diverted from landfill"],
                ["28.3 t", "Estimated CO₂ avoided"],
                ["9,420", "Devices recycled"],
              ].map(([v, l]) => (
                <div key={l} className="border-l border-primary-foreground/20 py-3 pl-5">
                  <div className="text-3xl font-bold">{v}</div>
                  <p className="mt-2 text-sm text-primary-foreground/60">{l}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="mx-auto max-w-7xl px-5 py-24 text-center lg:px-8">
          <h2 className="mx-auto max-w-3xl text-3xl font-bold sm:text-4xl">
            Ready to clear out your old electronics responsibly?
          </h2>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Button size="lg" asChild>
              <Link to="/pickup/request">Schedule a pickup</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/centres">Explore collection centres</Link>
            </Button>
          </div>
        </section>
      </main>
      <PublicFooter />
    </div>
  );
}
function LifecycleVisual() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[530px]">
      <div className="absolute inset-[11%] rounded-full border border-primary/20" />
      <div className="absolute inset-[23%] grid place-items-center rounded-full bg-primary text-primary-foreground shadow-card">
        <Recycle className="size-20" />
        <span className="mt-[-25%] text-sm font-bold">Responsible reuse</span>
      </div>
      {[
        [Laptop, "Device", "left-1/2 top-0 -translate-x-1/2"],
        [Truck, "Collection", "right-0 top-1/2 -translate-y-1/2"],
        [Recycle, "Recycling", "bottom-0 left-1/2 -translate-x-1/2"],
        [Leaf, "Reuse", "left-0 top-1/2 -translate-y-1/2"],
      ].map(([Icon, label, pos]) => {
        const I = Icon as typeof Laptop;
        return (
          <div
            key={label as string}
            className={`absolute ${pos} grid w-28 place-items-center rounded-2xl border bg-card p-4 shadow-card`}
          >
            <I className="size-7 text-primary" />
            <span className="mt-2 text-xs font-bold">{label as string}</span>
          </div>
        );
      })}
    </div>
  );
}

export function AuthPage({ register = false }: { register?: boolean }) {
  const [show, setShow] = useState(false);
  const [password, setPassword] = useState("");
  const submit = (e: FormEvent) => {
    e.preventDefault();
    toast.success(register ? "Account created" : "Welcome back, Aviral");
    setTimeout(() => {
      location.href = "/dashboard";
    }, 400);
  };
  return (
    <div className="grid min-h-screen lg:grid-cols-2">
      <div className="relative hidden overflow-hidden bg-foreground p-12 text-primary-foreground lg:flex lg:flex-col">
        <Link to="/" className="flex items-center gap-2 text-xl font-bold">
          <span className="grid size-9 place-items-center rounded-lg bg-primary">
            <Recycle />
          </span>
          EcoCycle
        </Link>
        <div className="my-auto max-w-lg">
          <div className="mb-8 grid size-20 place-items-center rounded-2xl bg-primary">
            <Leaf className="size-10" />
          </div>
          <h1 className="text-4xl font-bold leading-tight">
            Small actions.
            <br />
            Measurable impact.
          </h1>
          <p className="mt-5 leading-7 text-primary-foreground/65">
            Join thousands of citizens giving electronics a responsible next chapter.
          </p>
        </div>
        <p className="text-xs text-primary-foreground/45">
          Verified partners · Transparent journeys · Real impact
        </p>
      </div>
      <main className="flex items-center justify-center px-5 py-12">
        <form onSubmit={submit} className="w-full max-w-md">
          <Link to="/" className="mb-10 flex items-center gap-2 text-xl font-bold lg:hidden">
            <Recycle className="text-primary" />
            EcoCycle
          </Link>
          <h1 className="text-3xl font-bold">
            {register ? "Create your account" : "Welcome back"}
          </h1>
          <p className="mt-2 text-sm text-muted-foreground">
            {register
              ? "Begin your responsible recycling journey."
              : "Continue your recycling journey."}
          </p>
          {register && (
            <div className="mt-8 grid grid-cols-2 gap-3">
              <button
                type="button"
                className="rounded-xl border-2 border-primary bg-secondary p-4 text-left"
              >
                <UserCheck className="mb-2 text-primary" />
                <b className="text-sm">Citizen</b>
              </button>
              <button type="button" className="rounded-xl border p-4 text-left">
                <Building2 className="mb-2 text-muted-foreground" />
                <b className="text-sm">Collection Centre</b>
              </button>
            </div>
          )}
          <div className="mt-7 space-y-4">
            {register && <Field label="Full name" type="text" placeholder="Aviral Ranjan" />}
            <Field label="Email" type="email" placeholder="aviral@example.com" />
            {register && <Field label="Phone number" type="tel" placeholder="+91 98765 43210" />}
            <label className="block text-sm font-semibold">
              Password
              <div className="relative mt-2">
                <Input
                  type={show ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  minLength={8}
                  required
                  placeholder="At least 8 characters"
                />
                <button
                  type="button"
                  aria-label="Toggle password visibility"
                  onClick={() => setShow(!show)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground"
                >
                  {show ? <EyeOff className="size-4" /> : <Eye className="size-4" />}
                </button>
              </div>
            </label>
            {register && (
              <>
                <div className="h-1.5 overflow-hidden rounded-full bg-muted">
                  <div
                    className="h-full bg-primary transition-all"
                    style={{ width: `${Math.min(100, password.length * 12)}%` }}
                  />
                </div>
                <Field
                  label="Confirm password"
                  type="password"
                  placeholder="Repeat your password"
                />
              </>
            )}
          </div>
          <div className="mt-5 flex items-center justify-between text-sm">
            <label className="flex items-center gap-2">
              <Checkbox required={register} />
              {register ? "I agree to the Terms and Privacy Policy" : "Remember me"}
            </label>
            {!register && (
              <button type="button" className="font-semibold text-primary">
                Forgot password?
              </button>
            )}
          </div>
          <Button className="mt-6 w-full" size="lg" type="submit">
            {register ? "Create account" : "Log in"}
          </Button>
          {!register && (
            <>
              <div className="my-5 flex items-center gap-3 text-xs text-muted-foreground">
                <span className="h-px flex-1 bg-border" />
                OR
                <span className="h-px flex-1 bg-border" />
              </div>
              <Button className="w-full" variant="outline" type="button">
                G&nbsp; Continue with Google
              </Button>
            </>
          )}
          <p className="mt-7 text-center text-sm text-muted-foreground">
            {register ? "Already have an account? " : "Don’t have an account? "}
            <Link to={register ? "/login" : "/register"} className="font-bold text-primary">
              {register ? "Log in" : "Create one"}
            </Link>
          </p>
        </form>
      </main>
    </div>
  );
}
function Field({ label, ...props }: { label: string; type: string; placeholder: string }) {
  return (
    <label className="block text-sm font-semibold">
      {label}
      <Input className="mt-2" required {...props} />
    </label>
  );
}

export function CentresPage({ authenticated = false }: { authenticated?: boolean }) {
  const body = (
    <>
      <PageTitle
        title="Find a verified collection centre"
        subtitle="Search trusted facilities near you and see exactly what they accept."
      />
      <div className="grid gap-5 xl:grid-cols-[350px_1fr]">
        <Card className="p-5">
          <SearchBar placeholder="Search by location" />
          <div className="mt-5 space-y-5">
            <FilterField
              label="Distance"
              options={["Within 5 km", "Within 10 km", "Within 25 km"]}
            />
            <FilterField label="E-waste category" options={devices.slice(0, 6)} />
            <label className="flex items-center justify-between border-t pt-5 text-sm font-semibold">
              Open now
              <Switch />
            </label>
            <label className="flex items-center justify-between text-sm font-semibold">
              Pickup available
              <Switch defaultChecked />
            </label>
          </div>
        </Card>
        <MapPlaceholder large />
      </div>
      <div className="mt-8 grid gap-4 lg:grid-cols-3">
        {centres.map((c) => (
          <CentreCard key={c.id} centre={c} />
        ))}
      </div>
    </>
  );
  return authenticated ? (
    <AppShell>{body}</AppShell>
  ) : (
    <>
      <PublicNav />
      <main className="mx-auto max-w-7xl px-5 py-12 lg:px-8">{body}</main>
      <PublicFooter />
    </>
  );
}
function FilterField({ label, options }: { label: string; options: string[] }) {
  return (
    <label className="block text-sm font-semibold">
      {label}
      <Select>
        <SelectTrigger className="mt-2 w-full">
          <SelectValue placeholder={options[0]} />
        </SelectTrigger>
        <SelectContent>
          {options.map((o) => (
            <SelectItem key={o} value={o}>
              {o}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </label>
  );
}
export function CentreDetailPage() {
  const { id } = useParams({ strict: false });
  const centre = centres.find((c) => c.id === id) || centres[0];
  if (!centre) return null;
  return (
    <>
      <PublicNav />
      <main className="mx-auto max-w-7xl px-5 py-12 lg:px-8">
        <BackLink to="/centres" />
        <section className="grid gap-8 lg:grid-cols-[1fr_420px]">
          <div>
            <div className="flex flex-wrap items-center gap-3">
              <StatusBadge status="Verified" />
              <span className="text-sm font-semibold">★ {centre.rating}</span>
              <span className="text-sm text-muted-foreground">{centre.distance} away</span>
            </div>
            <h1 className="mt-5 text-4xl font-bold">{centre.name}</h1>
            <p className="mt-4 flex items-center gap-2 text-muted-foreground">
              <MapPin className="size-5" />
              {centre.address}
            </p>
            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              <Info icon={Phone} label="Phone" value="+91 80 4123 9821" />
              <Info icon={Clock} label="Opening hours" value="Mon–Sat, 9 AM–6 PM" />
              <Info
                icon={Truck}
                label="Pickup"
                value={centre.pickup ? "Available" : "Drop-off only"}
              />
            </div>
            <h2 className="mt-12 text-xl font-bold">Accepted items</h2>
            <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3">
              {centre.materials.map((m) => (
                <div
                  key={m}
                  className="flex items-center gap-2 rounded-xl border bg-card p-3 text-sm font-semibold"
                >
                  <CheckCircle2 className="size-4 text-primary" />
                  {m}
                </div>
              ))}
            </div>
            <Button className="mt-8" size="lg" asChild>
              <Link to="/pickup/request">Schedule pickup</Link>
            </Button>
          </div>
          <MapPlaceholder />
        </section>
      </main>
      <PublicFooter />
    </>
  );
}
function Info({ icon: Icon, label, value }: { icon: typeof Phone; label: string; value: string }) {
  return (
    <Card className="p-4">
      <Icon className="size-5 text-primary" />
      <p className="mt-3 text-xs text-muted-foreground">{label}</p>
      <p className="mt-1 text-sm font-semibold">{value}</p>
    </Card>
  );
}

export function CitizenDashboard() {
  return (
    <AppShell>
      <div className="animate-enter">
        <PageTitle
          title="Good morning, Aviral 👋"
          subtitle="Here’s your environmental impact so far."
          action={
            <Button asChild>
              <Link to="/pickup/request">
                <Truck />
                Request pickup
              </Link>
            </Button>
          }
        />
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          <StatCard
            label="E-Waste Recycled"
            value="12 kg"
            icon={Scale}
            detail="+3.2 kg this month"
          />
          <StatCard label="Pickups Completed" value="4" icon={Truck} detail="1 upcoming" />
          <StatCard label="Eco Points" value="340" icon={Trophy} detail="160 to next level" />
          <StatCard
            label="Devices Recycled"
            value="3"
            icon={Recycle}
            detail="Across 4 categories"
          />
        </div>
        <div className="mt-6 grid gap-6 xl:grid-cols-[1.35fr_.65fr]">
          <PickupOverview />
          <ImpactCard />
        </div>
        <section className="mt-8">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-xl font-bold">Quick actions</h2>
          </div>
          <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
            {[
              [Truck, "Request pickup", "/pickup/request"],
              [Package, "Add e-waste", "/e-waste/add"],
              [MapPin, "Find centre", "/dashboard/centres"],
              [Bot, "Ask EcoAssist", "/eco-assist"],
            ].map(([Icon, label, to]) => {
              const I = Icon as typeof Truck;
              return (
                <Link
                  to={to as "/dashboard"}
                  key={label as string}
                  className="group flex items-center gap-4 rounded-2xl border bg-card p-5 transition hover:-translate-y-0.5 hover:shadow-card"
                >
                  <span className="grid size-11 place-items-center rounded-xl bg-secondary text-primary">
                    <I />
                  </span>
                  <b className="text-sm">{label as string}</b>
                  <ChevronRight className="ml-auto size-4 text-muted-foreground transition group-hover:translate-x-1" />
                </Link>
              );
            })}
          </div>
        </section>
        <section className="mt-8">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-xl font-bold">Nearby centres</h2>
            <Button variant="ghost" asChild>
              <Link to="/dashboard/centres">View all</Link>
            </Button>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {centres.map((c) => (
              <CentreCard compact key={c.id} centre={c} />
            ))}
          </div>
        </section>
      </div>
    </AppShell>
  );
}
function PickupOverview() {
  return (
    <Card className="overflow-hidden">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b p-6">
        <div>
          <p className="text-xs font-bold uppercase text-muted-foreground">Current pickup</p>
          <h2 className="mt-1 text-xl font-bold">Laptop + 2 Smartphones</h2>
        </div>
        <StatusBadge status="Scheduled" />
      </div>
      <div className="p-6">
        <div className="flex overflow-x-auto pb-3">
          {pickupStages.map((s, i) => (
            <div key={s} className="min-w-28 flex-1">
              <div className="flex items-center">
                <span
                  className={
                    i <= 2
                      ? "size-3 rounded-full bg-primary"
                      : "size-3 rounded-full border-2 bg-card"
                  }
                />
                {i < pickupStages.length - 1 && (
                  <span className={i < 2 ? "h-0.5 flex-1 bg-primary" : "h-0.5 flex-1 bg-border"} />
                )}
              </div>
              <p
                className={`mt-2 max-w-20 text-[10px] leading-4 ${i === 2 ? "font-bold text-primary" : "text-muted-foreground"}`}
              >
                {s}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-5 grid gap-4 border-t pt-5 sm:grid-cols-3">
          <div>
            <p className="text-xs text-muted-foreground">Collection centre</p>
            <p className="mt-1 text-sm font-semibold">GreenCycle Recycling Centre</p>
          </div>
          <div>
            <p className="text-xs text-muted-foreground">Date</p>
            <p className="mt-1 text-sm font-semibold">24 September 2026</p>
          </div>
          <div>
            <p className="text-xs text-muted-foreground">Time</p>
            <p className="mt-1 text-sm font-semibold">10:00 AM – 12:00 PM</p>
          </div>
        </div>
        <Button className="mt-5" variant="outline" asChild>
          <Link to="/pickups/$id" params={{ id: "EC-2026-0924" }}>
            Track pickup
            <ArrowRight />
          </Link>
        </Button>
      </div>
    </Card>
  );
}
function ImpactCard() {
  return (
    <Card className="bg-foreground p-6 text-primary-foreground">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-xs font-bold uppercase text-primary-foreground/55">
            Environmental impact
          </p>
          <h2 className="mt-2 text-2xl font-bold">12 kg diverted</h2>
        </div>
        <Leaf className="size-6 text-accent" />
      </div>
      <div
        className="mx-auto my-8 grid size-40 place-items-center rounded-full"
        style={{
          background:
            "conic-gradient(var(--accent) 0 68%,color-mix(in oklab,var(--primary-foreground) 12%,transparent) 68%)",
        }}
      >
        <div className="grid size-28 place-items-center rounded-full bg-foreground text-center">
          <div>
            <div className="text-3xl font-bold">68%</div>
            <div className="text-[10px] text-primary-foreground/55">YEARLY GOAL</div>
          </div>
        </div>
      </div>
      <p className="text-sm leading-6 text-primary-foreground/65">
        Your recycling is estimated to have avoided{" "}
        <b className="text-primary-foreground">27 kg of CO₂e</b>.
      </p>
    </Card>
  );
}

export function WasteListPage() {
  return (
    <AppShell>
      <PageTitle
        title="My E-Waste"
        subtitle="Manage the electronics you’ve registered for responsible disposal."
        action={
          <Button asChild>
            <Link to="/e-waste/add">
              <Package />
              Add E-Waste
            </Link>
          </Button>
        }
      />
      <div className="grid gap-4">
        {wasteItems.map((w, i) => {
          const Icon = [Laptop, Smartphone, Cable][i] || Package;
          return (
            <Card key={w.id} className="grid items-center gap-5 p-5 sm:grid-cols-2 xl:grid-cols-6">
              <span className="grid size-12 place-items-center rounded-xl bg-secondary text-primary">
                <Icon />
              </span>
              <div>
                <h3 className="font-bold">{w.category}</h3>
                <p className="text-sm text-muted-foreground">
                  {w.brand} {w.model}
                </p>
              </div>
              <Data label="Condition" value={w.condition} />
              <Data label="Weight" value={w.weight} />
              <div>
                <p className="text-xs text-muted-foreground">Status</p>
                <div className="mt-1">
                  <StatusBadge status={w.status} />
                </div>
              </div>
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => toast.info(`Viewing ${w.model}`)}
                >
                  View
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => toast.success(`${w.model} removed`)}
                >
                  Delete
                </Button>
              </div>
            </Card>
          );
        })}
      </div>
    </AppShell>
  );
}
function Data({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-xs text-muted-foreground">{label}</p>
      <p className="mt-1 text-sm font-semibold">{value}</p>
    </div>
  );
}
export function AddWastePage() {
  const [step, setStep] = useState(1);
  const [analyzed, setAnalyzed] = useState(false);
  return (
    <AppShell>
      <div className="mx-auto max-w-4xl">
        <BackLink to="/e-waste" />
        <PageTitle
          title="Add e-waste"
          subtitle="Register an electronic item for responsible disposal."
        />
        <StepBar steps={["Item Details", "Condition", "Photos", "Review"]} current={step} />
        <Card className="mt-7 p-6 sm:p-8">
          {step === 1 && (
            <div>
              <h2 className="text-xl font-bold">Tell us about the item</h2>
              <div className="mt-6 grid gap-5 sm:grid-cols-2">
                <FilterField label="Category" options={devices} />
                <Field label="Brand" type="text" placeholder="e.g. Dell" />
                <Field label="Model" type="text" placeholder="e.g. Inspiron 15" />
                <Field label="Estimated quantity" type="number" placeholder="1" />
              </div>
            </div>
          )}
          {step === 2 && (
            <div>
              <h2 className="text-xl font-bold">What condition is it in?</h2>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {["Working", "Partially Working", "Not Working", "Damaged"].map((x, i) => (
                  <button
                    key={x}
                    onClick={() => {}}
                    className={`rounded-xl border p-4 text-left text-sm font-semibold hover:border-primary ${i === 2 ? "border-primary bg-secondary" : ""}`}
                  >
                    {x}
                  </button>
                ))}
              </div>
              <div className="mt-5">
                <Field label="Estimated weight (kg)" type="number" placeholder="2.3" />
              </div>
            </div>
          )}
          {step === 3 && (
            <div>
              <h2 className="text-xl font-bold">Add photos</h2>
              <div className="mt-5 grid min-h-44 place-items-center rounded-2xl border border-dashed bg-muted/40 p-8 text-center">
                <div>
                  <Upload className="mx-auto text-primary" />
                  <p className="mt-3 font-semibold">Drop item photos here</p>
                  <p className="mt-1 text-xs text-muted-foreground">PNG or JPG, up to 10 MB</p>
                  <Button className="mt-4" variant="outline">
                    Choose files
                  </Button>
                </div>
              </div>
              <div className="mt-6 rounded-2xl border border-primary/20 bg-secondary p-5">
                <div className="flex gap-4">
                  <span className="grid size-11 place-items-center rounded-xl bg-primary text-primary-foreground">
                    <Sparkles />
                  </span>
                  <div className="flex-1">
                    <h3 className="font-bold">Let AI identify it</h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Upload a photo and EcoAssist will identify your device and suggest responsible
                      disposal options.
                    </p>
                    <Button className="mt-4" onClick={() => setAnalyzed(true)}>
                      <Sparkles />
                      Analyze with AI
                    </Button>
                  </div>
                </div>
                {analyzed && (
                  <div className="mt-5 grid gap-3 rounded-xl bg-card p-4 sm:grid-cols-4">
                    <Data label="Detected" value="Laptop" />
                    <Data label="Confidence" value="94%" />
                    <Data label="Category" value="Computing Device" />
                    <Data label="Disposal" value="Authorized recycler" />
                  </div>
                )}
              </div>
            </div>
          )}
          {step === 4 && (
            <div>
              <h2 className="text-xl font-bold">Review your item</h2>
              <div className="mt-6 rounded-xl border bg-muted/30 p-5">
                <div className="grid gap-5 sm:grid-cols-4">
                  <Data label="Item" value="Dell Laptop" />
                  <Data label="Condition" value="Not Working" />
                  <Data label="Quantity" value="1" />
                  <Data label="Weight" value="2.3 kg" />
                </div>
              </div>
            </div>
          )}
          <div className="mt-8 flex justify-between border-t pt-5">
            <Button variant="outline" disabled={step === 1} onClick={() => setStep(step - 1)}>
              Back
            </Button>
            {step < 4 ? (
              <Button onClick={() => setStep(step + 1)}>
                Continue
                <ArrowRight />
              </Button>
            ) : (
              <Button onClick={() => toast.success("E-waste added")}>Add e-waste</Button>
            )}
          </div>
        </Card>
      </div>
    </AppShell>
  );
}
function StepBar({ steps, current }: { steps: string[]; current: number }) {
  return (
    <div className="flex overflow-x-auto">
      {steps.map((s, i) => (
        <div className="min-w-32 flex-1" key={s}>
          <div className="flex items-center">
            <span
              className={`grid size-8 place-items-center rounded-full text-xs font-bold ${i + 1 <= current ? "bg-primary text-primary-foreground" : "border bg-card text-muted-foreground"}`}
            >
              {String(i + 1).padStart(2, "0")}
            </span>
            {i < steps.length - 1 && (
              <span className={`h-px flex-1 ${i + 1 < current ? "bg-primary" : "bg-border"}`} />
            )}
          </div>
          <p
            className={`mt-2 text-xs ${i + 1 === current ? "font-bold text-primary" : "text-muted-foreground"}`}
          >
            {s}
          </p>
        </div>
      ))}
    </div>
  );
}

export function RequestPickupPage() {
  const [step, setStep] = useState(1);
  return (
    <AppShell>
      <div className="mx-auto max-w-5xl">
        <BackLink />
        <PageTitle
          title="Request a pickup"
          subtitle="Book a verified collection partner in a few simple steps."
        />
        <StepBar
          steps={["Select Items", "Choose Centre", "Address", "Date & Time", "Review"]}
          current={step}
        />
        <Card className="mt-7 p-6 sm:p-8">
          <h2 className="text-xl font-bold">
            {
              [
                "Select your e-waste",
                "Choose a collection centre",
                "Pickup address",
                "Choose date and time",
                "Review request",
              ][step - 1]
            }
          </h2>
          <div className="mt-6">
            {step === 1 && (
              <div className="space-y-3">
                {wasteItems.map((w) => (
                  <label key={w.id} className="flex items-center gap-4 rounded-xl border p-4">
                    <Checkbox defaultChecked={w.id !== "ew-1021"} />
                    <Package className="text-primary" />
                    <div>
                      <b>
                        {w.brand} {w.model}
                      </b>
                      <p className="text-xs text-muted-foreground">
                        {w.condition} · {w.weight}
                      </p>
                    </div>
                  </label>
                ))}
              </div>
            )}
            {step === 2 && (
              <div className="grid gap-3">
                {centres.map((c, i) => (
                  <button
                    key={c.id}
                    className={`rounded-2xl text-left ${i === 0 ? "ring-2 ring-primary" : ""}`}
                  >
                    <CentreCard centre={c} compact />
                  </button>
                ))}
              </div>
            )}
            {step === 3 && (
              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Address line" type="text" placeholder="12 Residency Road" />
                <Field label="City" type="text" placeholder="Bengaluru" />
                <Field label="Postal code" type="text" placeholder="560025" />
                <Field label="Phone" type="tel" placeholder="+91 98765 43210" />
              </div>
            )}
            {step === 4 && (
              <div>
                <Input type="date" defaultValue="2026-09-24" />
                <p className="mb-3 mt-6 text-sm font-semibold">Available slots</p>
                <div className="grid gap-3 sm:grid-cols-3">
                  {["10:00 AM – 12:00 PM", "12:00 PM – 2:00 PM", "3:00 PM – 5:00 PM"].map(
                    (s, i) => (
                      <button
                        key={s}
                        className={`rounded-xl border p-4 text-sm font-semibold ${i === 0 ? "border-primary bg-secondary text-primary" : ""}`}
                      >
                        {s}
                      </button>
                    ),
                  )}
                </div>
              </div>
            )}
            {step === 5 && (
              <div className="grid gap-4 sm:grid-cols-2">
                <Data label="Items" value="Dell Laptop + Samsung Smartphone" />
                <Data label="Collection Centre" value="GreenCycle Recycling Centre" />
                <Data label="Address" value="12 Residency Road, Bengaluru" />
                <Data label="Pickup slot" value="24 Sep, 10:00 AM – 12:00 PM" />
              </div>
            )}
          </div>
          <div className="mt-8 flex justify-between border-t pt-5">
            <Button variant="outline" disabled={step === 1} onClick={() => setStep(step - 1)}>
              Back
            </Button>
            {step < 5 ? (
              <Button onClick={() => setStep(step + 1)}>
                Continue
                <ArrowRight />
              </Button>
            ) : (
              <Button onClick={() => toast.success("Pickup created")}>Confirm pickup</Button>
            )}
          </div>
        </Card>
      </div>
    </AppShell>
  );
}
export function PickupsPage() {
  return (
    <AppShell>
      <PageTitle title="My Pickups" subtitle="Review upcoming and completed collection requests." />
      <Tabs defaultValue="all">
        <TabsList>
          <TabsTrigger value="all">All</TabsTrigger>
          <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
          <TabsTrigger value="completed">Completed</TabsTrigger>
          <TabsTrigger value="cancelled">Cancelled</TabsTrigger>
        </TabsList>
      </Tabs>
      <div className="mt-6 grid gap-4">
        {pickups.map((p) => (
          <Card
            key={p.id}
            className="grid items-center gap-5 p-5 sm:grid-cols-[1.4fr_1.3fr_1fr_1fr_auto]"
          >
            <Data label="Pickup ID" value={p.id} />
            <Data label="Items" value={p.items} />
            <Data label="Collection centre" value={p.centre} />
            <div>
              <p className="text-xs text-muted-foreground">{p.date}</p>
              <div className="mt-2">
                <StatusBadge status={p.status} />
              </div>
            </div>
            <Button variant="outline" size="sm" asChild>
              <Link to="/pickups/$id" params={{ id: p.id }}>
                Track
              </Link>
            </Button>
          </Card>
        ))}
      </div>
    </AppShell>
  );
}
export function TrackPickupPage() {
  const { id } = useParams({ strict: false });
  return (
    <AppShell>
      <BackLink to="/pickups" />
      <PageTitle
        title="Track your recycling"
        subtitle={`Pickup ID: ${id || "EC-2026-0924"}`}
        action={<StatusBadge status="Scheduled" />}
      />
      <div className="grid gap-6 lg:grid-cols-[.8fr_1.2fr]">
        <Card className="p-6 sm:p-8">
          <p className="text-xs font-bold uppercase text-muted-foreground">Live journey</p>
          <div className="mt-7">
            {pickupStages.map((s, i) => (
              <div key={s} className="grid grid-cols-[28px_1fr] gap-4">
                <div className="flex flex-col items-center">
                  <span
                    className={`z-10 grid size-7 place-items-center rounded-full ${i < 3 ? "bg-primary text-primary-foreground" : i === 3 ? "border-2 border-primary bg-card text-primary" : "border-2 bg-card text-muted-foreground"}`}
                  >
                    {i < 3 ? <CheckCircle2 className="size-4" /> : <Circle className="size-3" />}
                  </span>
                  {i < pickupStages.length - 1 && (
                    <span className={`min-h-14 w-0.5 ${i < 2 ? "bg-primary" : "bg-border"}`} />
                  )}
                </div>
                <div className="pb-7">
                  <h3 className={`text-sm font-bold ${i === 2 ? "text-primary" : ""}`}>{s}</h3>
                  <p className="mt-1 text-xs text-muted-foreground">
                    {i < 3
                      ? ["20 Sep · 9:24 AM", "20 Sep · 11:40 AM", "24 Sep · 10:00–12:00"][i]
                      : "Waiting for update"}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Card>
        <div className="space-y-6">
          <Card className="p-6">
            <h2 className="font-bold">Collection details</h2>
            <div className="mt-5 grid gap-5 sm:grid-cols-2">
              <Data label="Centre" value="GreenCycle Recycling Centre" />
              <Data label="Pickup date" value="24 September 2026" />
              <Data label="Items" value="Dell Laptop · Samsung Smartphone · USB Charger" />
              <Data label="Weight" value="3.2 kg" />
            </div>
          </Card>
          <Card className="overflow-hidden">
            <div className="bg-foreground p-6 text-primary-foreground">
              <p className="text-xs font-bold uppercase text-primary-foreground/55">
                Recycling journey
              </p>
              <h2 className="mt-2 text-xl font-bold">From your home to new materials</h2>
            </div>
            <div className="grid gap-2 p-6 sm:grid-cols-5">
              {[
                [Home, "Your Home"],
                [Warehouse, "Collection Centre"],
                [Recycle, "Authorized Recycler"],
                [Boxes, "Material Recovery"],
                [Leaf, "Recycled Materials"],
              ].map(([Icon, label], i) => {
                const I = Icon as typeof Home;
                return (
                  <div key={label as string} className="relative text-center">
                    <span className="mx-auto grid size-12 place-items-center rounded-xl bg-secondary text-primary">
                      <I />
                    </span>
                    <p className="mt-3 text-xs font-bold">{label as string}</p>
                    {i < 4 && (
                      <ArrowRight className="absolute -right-3 top-4 hidden size-4 text-muted-foreground sm:block" />
                    )}
                  </div>
                );
              })}
            </div>
          </Card>
        </div>
      </div>
    </AppShell>
  );
}

const genericConfigs: Record<string, { title: string; subtitle: string; type: string }> = {
  "/recycling": {
    title: "Recycling History",
    subtitle: "A verified record of your responsible recycling impact.",
    type: "history",
  },
  "/rewards": {
    title: "Your Eco Points",
    subtitle: "Every responsible action moves you forward.",
    type: "rewards",
  },
  "/awareness": {
    title: "Learn. Recycle. Make an Impact.",
    subtitle: "Practical guidance for safer, more responsible electronics use.",
    type: "awareness",
  },
  "/profile": {
    title: "Your Profile",
    subtitle: "Manage your details and review your environmental summary.",
    type: "profile",
  },
  "/settings": {
    title: "Settings",
    subtitle: "Choose how EcoCycle works for you.",
    type: "settings",
  },
};
export function CitizenGenericPage({ kind }: { kind: string }) {
  const c = genericConfigs[kind];
  if (!c) return null;
  return (
    <AppShell>
      <PageTitle title={c.title} subtitle={c.subtitle} />
      {c.type === "history" && <HistoryView />}
      {c.type === "rewards" && <RewardsView />}
      {c.type === "awareness" && <AwarenessView />}
      {c.type === "profile" && <ProfileView />}
      {c.type === "settings" && <SettingsView />}
    </AppShell>
  );
}
function HistoryView() {
  return (
    <>
      <div className="grid gap-4 sm:grid-cols-4">
        <StatCard label="Total Items" value="9" icon={Package} />
        <StatCard label="Total Weight" value="12 kg" icon={Scale} />
        <StatCard label="Pickups" value="4" icon={Truck} />
        <StatCard label="Eco Points" value="340" icon={Trophy} />
      </div>
      <div className="mt-7 grid gap-4">
        {pickups.slice(1).map((p, i) => (
          <Card
            key={p.id}
            className="flex flex-col justify-between gap-4 p-5 sm:flex-row sm:items-center"
          >
            <div>
              <h3 className="font-bold">{i ? "Printer" : "Laptop + Television"}</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                Recycled {p.date} · {p.centre}
              </p>
            </div>
            <div className="text-right">
              <b>{i ? "4.1 kg" : "3.2 kg"}</b>
              <p className="text-xs text-primary">responsibly recycled</p>
            </div>
          </Card>
        ))}
      </div>
    </>
  );
}
function RewardsView() {
  return (
    <div className="grid gap-6 lg:grid-cols-[1fr_.8fr]">
      <Card className="bg-foreground p-8 text-primary-foreground">
        <p className="text-sm text-primary-foreground/60">Eco Explorer</p>
        <div className="mt-2 text-6xl font-bold">
          340 <span className="text-xl text-accent">XP</span>
        </div>
        <Progress value={68} className="mt-8" />
        <div className="mt-3 flex justify-between text-xs text-primary-foreground/55">
          <span>340 / 500</span>
          <span>160 points until your next level</span>
        </div>
      </Card>
      <Card className="p-6">
        <h2 className="font-bold">How to earn</h2>
        <div className="mt-4 space-y-3">
          {[
            ["Recycle an item", "+50"],
            ["Complete a pickup", "+30"],
            ["Complete an awareness lesson", "+10"],
            ["Invite a friend", "+25"],
          ].map(([a, p]) => (
            <div className="flex justify-between rounded-lg bg-muted p-3 text-sm" key={a}>
              <b>{a}</b>
              <span className="font-bold text-primary">{p} points</span>
            </div>
          ))}
        </div>
      </Card>
      <div className="lg:col-span-2">
        <h2 className="mb-4 text-xl font-bold">Achievements</h2>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-5">
          {[
            "First Recycle",
            "Eco Starter",
            "5 Pickups",
            "10kg Recycled",
            "Community Contributor",
          ].map((x, i) => (
            <Card className={`p-5 text-center ${i > 2 ? "opacity-45 grayscale" : ""}`} key={x}>
              <span className="mx-auto grid size-12 place-items-center rounded-full bg-secondary text-primary">
                <Trophy />
              </span>
              <p className="mt-3 text-xs font-bold">{x}</p>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
function AwarenessView() {
  return (
    <>
      <Card className="overflow-hidden bg-foreground text-primary-foreground">
        <div className="grid items-center gap-8 p-7 md:grid-cols-[1fr_260px]">
          <div>
            <Badge className="bg-accent text-accent-foreground">Featured</Badge>
            <h2 className="mt-4 text-2xl font-bold">Why responsible e-waste disposal matters</h2>
            <p className="mt-3 text-sm leading-6 text-primary-foreground/60">
              Electronics contain valuable materials—and substances that require careful handling.
            </p>
          </div>
          <div className="grid h-44 place-items-center rounded-xl bg-primary">
            <Recycle className="size-20" />
          </div>
        </div>
      </Card>
      <div className="my-6 flex flex-wrap gap-2">
        {["All", "E-Waste Basics", "Recycling", "Safety", "Environment", "Technology"].map(
          (x, i) => (
            <Button key={x} variant={i ? "outline" : "default"} size="sm">
              {x}
            </Button>
          ),
        )}
      </div>
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {articles.map((a) => (
          <Link key={a.id} to="/awareness/$id" params={{ id: a.id }}>
            <Card className="h-full p-5 transition hover:-translate-y-1 hover:shadow-card">
              <Badge variant="outline">{a.category}</Badge>
              <h3 className="mt-4 font-bold leading-6">{a.title}</h3>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">{a.summary}</p>
              <p className="mt-5 text-xs font-semibold text-primary">{a.read}</p>
            </Card>
          </Link>
        ))}
      </div>
    </>
  );
}
function ProfileView() {
  return (
    <div className="grid gap-6 lg:grid-cols-[1fr_340px]">
      <Card className="p-6">
        <div className="flex items-center gap-4">
          <div className="grid size-20 place-items-center rounded-full bg-primary text-2xl font-bold text-primary-foreground">
            AR
          </div>
          <div>
            <h2 className="text-xl font-bold">Aviral Ranjan</h2>
            <p className="text-sm text-muted-foreground">EcoCycle member since March 2026</p>
          </div>
        </div>
        <div className="mt-8 grid gap-5 sm:grid-cols-2">
          <Field label="Full name" type="text" placeholder="Aviral Ranjan" />
          <Field label="Email" type="email" placeholder="aviral@example.com" />
          <Field label="Phone" type="tel" placeholder="+91 98765 43210" />
          <Field label="Address" type="text" placeholder="12 Residency Road, Bengaluru" />
        </div>
        <div className="mt-6 flex gap-3">
          <Button onClick={() => toast.success("Profile updated")}>Edit profile</Button>
          <Button variant="outline">Change password</Button>
        </div>
      </Card>
      <Card className="p-6">
        <h2 className="font-bold">Environmental summary</h2>
        <div className="mt-5 space-y-5">
          <Data label="Total recycled" value="12 kg" />
          <Data label="Pickups completed" value="4" />
          <Data label="Eco points" value="340 XP" />
        </div>
      </Card>
    </div>
  );
}
function SettingsView() {
  return (
    <Card className="max-w-3xl divide-y">
      <div className="p-6">
        <h2 className="font-bold">Notifications</h2>
      </div>
      {[
        ["Pickup updates", "Status changes and arrival alerts", true],
        ["Recycling updates", "Follow each processing stage", true],
        ["Educational content", "Occasional guides and articles", false],
        ["Rewards", "Points and achievement updates", true],
      ].map(([t, c, on]) => (
        <div className="flex items-center justify-between gap-5 p-5" key={t as string}>
          <div>
            <b className="text-sm">{t as string}</b>
            <p className="text-xs text-muted-foreground">{c as string}</p>
          </div>
          <Switch defaultChecked={on as boolean} />
        </div>
      ))}
      <div className="p-5">
        <Button onClick={() => toast.success("Settings updated")}>Save preferences</Button>
      </div>
    </Card>
  );
}
export function ArticlePage() {
  const { id } = useParams({ strict: false });
  const a = articles.find((x) => x.id === id) || articles[0];
  if (!a) return null;
  return (
    <>
      <PublicNav />
      <main className="mx-auto max-w-6xl px-5 py-12 lg:px-8">
        <BackLink to="/awareness" />
        <div className="grid gap-12 lg:grid-cols-[1fr_280px]">
          <article>
            <Badge>{a.category}</Badge>
            <h1 className="mt-5 text-4xl font-bold leading-tight">{a.title}</h1>
            <p className="mt-4 text-sm text-muted-foreground">
              By EcoCycle Editorial · 18 September 2026 · {a.read}
            </p>
            <div className="my-8 grid h-72 place-items-center rounded-2xl bg-foreground text-primary-foreground">
              <Smartphone className="size-28" />
            </div>
            <div className="space-y-6 text-[17px] leading-8 text-muted-foreground">
              <p>
                When a phone reaches an authorized recycling facility, it begins a carefully
                documented journey. Devices are first inspected, catalogued and separated from
                batteries and other components that require specialist handling.
              </p>
              <h2 className="text-2xl font-bold text-foreground">
                First: safe collection and sorting
              </h2>
              <p>
                Trained teams remove batteries, screens and circuit boards. Working components may
                be prepared for reuse, while damaged parts move into material recovery streams.
              </p>
              <h2 className="text-2xl font-bold text-foreground">Materials return to the loop</h2>
              <p>
                Metals including copper, aluminium and small amounts of precious materials are
                recovered. Responsible processing keeps harmful substances out of soil and water
                while reducing demand for virgin materials.
              </p>
            </div>
            <Card className="mt-10 bg-secondary p-6">
              <h2 className="text-xl font-bold">Ready to recycle your electronics?</h2>
              <Button className="mt-4" asChild>
                <Link to="/pickup/request">Schedule a pickup</Link>
              </Button>
            </Card>
          </article>
          <aside className="hidden lg:block">
            <div className="sticky top-24">
              <p className="text-xs font-bold uppercase text-muted-foreground">Table of contents</p>
              <nav className="mt-4 space-y-3 border-l pl-4 text-sm">
                <a href="#">Safe collection</a>
                <a href="#">Component sorting</a>
                <a href="#">Material recovery</a>
              </nav>
              <p className="mt-10 text-xs font-bold uppercase text-muted-foreground">
                Related articles
              </p>
              {articles.slice(1, 3).map((x) => (
                <p className="mt-4 text-sm font-semibold" key={x.id}>
                  {x.title}
                </p>
              ))}
            </div>
          </aside>
        </div>
      </main>
      <PublicFooter />
    </>
  );
}

export function EcoAssistPage() {
  const [messages, setMessages] = useState([
    {
      who: "ai",
      text: "Hi! I’m EcoAssist. Tell me about your electronic waste and I’ll help you figure out what to do with it.",
    },
  ]);
  const [input, setInput] = useState("");
  const send = () => {
    if (!input.trim()) return;
    const q = input;
    setInput("");
    setMessages((m) => [
      ...m,
      { who: "user", text: q },
      {
        who: "ai",
        text: "This item should be kept dry and taken to an authorized e-waste facility. I can help you locate a verified centre or arrange a pickup.",
      },
    ]);
  };
  return (
    <AppShell>
      <PageTitle title="EcoAssist" subtitle="Your AI guide for responsible e-waste disposal." />
      <div className="grid gap-6 xl:grid-cols-[1fr_320px]">
        <Card className="flex min-h-[620px] flex-col overflow-hidden">
          <div className="flex items-center gap-3 border-b p-5">
            <span className="grid size-10 place-items-center rounded-xl bg-primary text-primary-foreground">
              <Bot />
            </span>
            <div>
              <b>EcoAssist</b>
              <p className="text-xs text-muted-foreground">Online · Guidance in seconds</p>
            </div>
          </div>
          <div className="flex-1 space-y-4 overflow-y-auto p-5">
            {messages.map((m, i) => (
              <div
                key={i}
                className={`max-w-[82%] rounded-2xl p-4 text-sm leading-6 ${m.who === "user" ? "ml-auto rounded-br-sm bg-foreground text-primary-foreground" : "rounded-bl-sm bg-secondary"}`}
              >
                {m.text}
              </div>
            ))}
            {messages.length === 1 && (
              <div className="flex flex-wrap gap-2 pt-3">
                {[
                  "What should I do with an old laptop?",
                  "Can I recycle a swollen battery?",
                  "Where can I dispose of a broken TV?",
                  "How should I dispose of cables?",
                ].map((x) => (
                  <button
                    key={x}
                    onClick={() => setInput(x)}
                    className="rounded-lg border bg-card px-3 py-2 text-left text-xs hover:border-primary"
                  >
                    {x}
                  </button>
                ))}
              </div>
            )}
          </div>
          <div className="border-t p-4">
            <div className="flex gap-2">
              <Button variant="outline" size="icon" aria-label="Upload image">
                <Paperclip />
              </Button>
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && send()}
                placeholder="Describe your electronic item…"
              />
              <Button size="icon" onClick={send} aria-label="Send message">
                <Send />
              </Button>
            </div>
            <p className="mt-2 text-[10px] text-muted-foreground">
              AI-generated guidance should be verified with your local authorized collection or
              recycling facility.
            </p>
          </div>
        </Card>
        <Card className="h-fit p-5">
          <h2 className="font-bold">EcoAssist can help with</h2>
          <div className="mt-5 space-y-4">
            {[
              "Identify electronics",
              "Disposal guidance",
              "Find collection centres",
              "Understand recycling",
              "Environmental impact",
            ].map((x) => (
              <div key={x} className="flex items-center gap-3 text-sm">
                <CheckCircle2 className="size-4 text-primary" />
                {x}
              </div>
            ))}
          </div>
        </Card>
      </div>
    </AppShell>
  );
}

const centreCfg: Record<string, { title: string; subtitle: string; type: string }> = {
  dashboard: {
    title: "Good morning, GreenCycle 👋",
    subtitle: "Here’s what your team is handling today.",
    type: "dashboard",
  },
  requests: {
    title: "Pickup Requests",
    subtitle: "Review, accept and schedule citizen requests.",
    type: "requests",
  },
  collections: {
    title: "Collections",
    subtitle: "Track received e-waste through sorting and transfer.",
    type: "collections",
  },
  transfers: {
    title: "Recycling Transfers",
    subtitle: "Prepare and track batches sent to authorized recyclers.",
    type: "transfers",
  },
};
export function CentreWorkspace({ page }: { page: string }) {
  const c = centreCfg[page];
  return (
    <AppShell role="centre">
      <PageTitle
        title={c.title}
        subtitle={c.subtitle}
        action={
          page === "transfers" ? (
            <Dialog>
              <DialogTrigger asChild>
                <Button>
                  <ArrowRightLeft />
                  Create transfer
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Create recycling transfer</DialogTitle>
                </DialogHeader>
                <div className="space-y-4">
                  <FilterField
                    label="Recycler"
                    options={["GreenEarth Recycling Agency", "Circular Materials India"]}
                  />
                  <Field label="Items" type="text" placeholder="Laptop batch, phones, cables" />
                  <Field label="Total weight" type="number" placeholder="42.5 kg" />
                  <Field label="Transfer date" type="date" placeholder="" />
                  <Field label="Tracking number" type="text" placeholder="TR-2026-041" />
                  <Button className="w-full" onClick={() => toast.success("Transfer created")}>
                    Create transfer
                  </Button>
                </div>
              </DialogContent>
            </Dialog>
          ) : undefined
        }
      />
      {page === "dashboard" && <CentreDashboard />}
      {page === "requests" && <RequestsView />}
      {page === "collections" && <CollectionsView />}
      {page === "transfers" && <TransfersView />}
    </AppShell>
  );
}
function CentreDashboard() {
  return (
    <>
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard label="Pending Requests" value="18" icon={Clock} />
        <StatCard label="Today’s Pickups" value="7" icon={Truck} />
        <StatCard label="Items Collected" value="146" icon={Boxes} />
        <StatCard label="Total Recycled" value="1.48 t" icon={Recycle} />
      </div>
      <div className="mt-7 grid gap-6 xl:grid-cols-[.8fr_1.2fr]">
        <Card className="p-6">
          <h2 className="font-bold">Today’s schedule</h2>
          {[
            ["10:00", "Aviral Ranjan", "Laptop + Smartphone", "Scheduled"],
            ["12:30", "Rahul Sharma", "TV + Cable", "Pending"],
            ["15:00", "Meera Patel", "Printer + Battery", "Accepted"],
          ].map((r) => (
            <div className="mt-4 flex items-center gap-4 border-t pt-4" key={r[0]}>
              <b className="text-sm">{r[0]}</b>
              <div className="flex-1">
                <b className="text-sm">{r[1]}</b>
                <p className="text-xs text-muted-foreground">{r[2]}</p>
              </div>
              <StatusBadge status={r[3]} />
            </div>
          ))}
        </Card>
        <RequestsView compact />
      </div>
    </>
  );
}
function RequestsView({ compact = false }: { compact?: boolean }) {
  const rows = [
    ["Aviral Ranjan", "Laptop + Smartphone", "24 Sep", "2.4 km", "Pending"],
    ["Rahul Sharma", "TV + Cable", "24 Sep", "4.1 km", "Accepted"],
    ["Meera Patel", "Printer + Battery", "25 Sep", "3.8 km", "Scheduled"],
  ];
  return (
    <Card className="overflow-hidden">
      <div className="flex items-center justify-between border-b p-5">
        <h2 className="font-bold">Pickup requests</h2>
        {compact && (
          <Button variant="ghost" size="sm" asChild>
            <Link to="/centre/requests">View all</Link>
          </Button>
        )}
      </div>
      <div className="divide-y">
        {rows.map((r) => (
          <div
            key={r[0]}
            className="grid gap-3 p-5 md:grid-cols-[1fr_1.2fr_.7fr_.7fr_.7fr_auto] md:items-center"
          >
            <b className="text-sm">{r[0]}</b>
            <span className="text-sm">{r[1]}</span>
            <span className="text-xs text-muted-foreground">{r[2]}</span>
            <span className="text-xs text-muted-foreground">{r[3]}</span>
            <StatusBadge status={r[4]} />
            <div className="flex gap-2">
              <Button size="sm" onClick={() => toast.success("Request accepted")}>
                Accept
              </Button>
              <Button size="sm" variant="outline">
                Schedule
              </Button>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}
function CollectionsView() {
  return (
    <Card className="overflow-hidden">
      <div className="grid grid-cols-6 gap-4 border-b bg-muted p-4 text-xs font-bold text-muted-foreground">
        <span>Item</span>
        <span>Citizen</span>
        <span>Weight</span>
        <span>Date</span>
        <span>Category</span>
        <span>Status</span>
      </div>
      {wasteItems.map((w, i) => (
        <div className="grid grid-cols-2 gap-4 border-b p-4 text-sm sm:grid-cols-6" key={w.id}>
          <b>
            {w.brand} {w.model}
          </b>
          <span>Aviral Ranjan</span>
          <span>{w.weight}</span>
          <span>24 Sep 2026</span>
          <span>{w.category}</span>
          <Select defaultValue={["Received", "Sorted", "Transferred"][i]}>
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {["Received", "Sorted", "Transferred"].map((x) => (
                <SelectItem key={x} value={x}>
                  {x}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      ))}
    </Card>
  );
}
function TransfersView() {
  return (
    <div className="grid gap-4">
      {[
        ["TR-2026-038", "GreenEarth Recycling Agency", "86.4 kg", "In Transit"],
        ["TR-2026-034", "Circular Materials India", "64.2 kg", "Received"],
        ["TR-2026-029", "GreenEarth Recycling Agency", "91.8 kg", "Processed"],
      ].map((r) => (
        <Card
          key={r[0]}
          className="flex flex-col justify-between gap-4 p-5 sm:flex-row sm:items-center"
        >
          <Data label="Reference" value={r[0]} />
          <Data label="Recycler" value={r[1]} />
          <Data label="Total weight" value={r[2]} />
          <StatusBadge status={r[3]} />
          <Button variant="outline" size="sm">
            View transfer
          </Button>
        </Card>
      ))}
    </div>
  );
}

const adminCfg: Record<string, { title: string; subtitle: string }> = {
  overview: {
    title: "Platform overview",
    subtitle: "EcoCycle’s performance and operational health.",
  },
  centres: {
    title: "Centre verification",
    subtitle: "Review documentation and authorize collection partners.",
  },
  users: { title: "Users", subtitle: "Search and manage platform participants." },
  analytics: {
    title: "Analytics & impact",
    subtitle: "Detailed operational and environmental performance.",
  },
};
export function AdminWorkspace({ page }: { page: string }) {
  const c = adminCfg[page];
  return (
    <AppShell role="admin">
      <PageTitle title={c.title} subtitle={c.subtitle} />
      {page === "overview" && <AdminOverview />}
      {page === "centres" && <AdminCentres />}
      {page === "users" && <AdminUsers />}
      {page === "analytics" && <AdminAnalytics />}
    </AppShell>
  );
}
function AdminOverview() {
  return (
    <>
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-6">
        {[
          ["Total Citizens", "6,820", Users],
          ["Verified Centres", "48", ShieldCheck],
          ["Pending Verification", "7", Clock],
          ["Total E-Waste", "28.4 t", Scale],
          ["Completed Pickups", "3,240", Truck],
          ["Recycled Weight", "24.9 t", Recycle],
        ].map(([l, v, I]) => (
          <StatCard
            key={l as string}
            label={l as string}
            value={v as string}
            icon={I as typeof Users}
          />
        ))}
      </div>
      <div className="mt-6 grid gap-6 lg:grid-cols-[1.4fr_.6fr]">
        <ChartCard title="E-waste collected over time">
          <ResponsiveContainer width="100%" height={280}>
            <AreaChart data={analyticsData}>
              <defs>
                <linearGradient id="eco" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="var(--primary)" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="var(--primary)" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid stroke="var(--border)" vertical={false} />
              <XAxis dataKey="m" axisLine={false} tickLine={false} />
              <YAxis axisLine={false} tickLine={false} />
              <Tooltip />
              <Area
                type="monotone"
                dataKey="kg"
                stroke="var(--primary)"
                fill="url(#eco)"
                strokeWidth={2}
              />
            </AreaChart>
          </ResponsiveContainer>
        </ChartCard>
        <ChartCard title="E-waste by category">
          <ResponsiveContainer width="100%" height={280}>
            <PieChart>
              <Pie
                data={[
                  { n: "Computing", v: 38 },
                  { n: "Mobile", v: 27 },
                  { n: "Home", v: 21 },
                  { n: "Other", v: 14 },
                ]}
                dataKey="v"
                nameKey="n"
                innerRadius={65}
                outerRadius={95}
              >
                {["var(--primary)", "var(--info)", "var(--accent)", "var(--muted-foreground)"].map(
                  (x) => (
                    <Cell key={x} fill={x} />
                  ),
                )}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </ChartCard>
      </div>
    </>
  );
}
function ChartCard({ title, children }: { title: string; children: ReactNode }) {
  return (
    <Card className="p-5">
      <h2 className="mb-5 font-bold">{title}</h2>
      {children}
    </Card>
  );
}
function AdminCentres() {
  const rows = [
    ["GreenLoop Services", "Pune", "5 documents", "Pending", "18 Sep"],
    ["ReNew E-Waste Hub", "Chennai", "4 documents", "Pending", "17 Sep"],
    ["Circular Tech Centre", "Delhi", "6 documents", "Verified", "12 Sep"],
  ];
  return (
    <Card className="overflow-hidden">
      <div className="divide-y">
        {rows.map((r) => (
          <div
            key={r[0]}
            className="grid gap-4 p-5 md:grid-cols-[1.4fr_1fr_1fr_.8fr_.8fr_auto] md:items-center"
          >
            <b className="text-sm">{r[0]}</b>
            <span className="text-sm">{r[1]}</span>
            <span className="text-xs text-muted-foreground">{r[2]}</span>
            <StatusBadge status={r[3]} />
            <span className="text-xs">{r[4]}</span>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">
                View
              </Button>
              {r[3] === "Pending" && (
                <Dialog>
                  <DialogTrigger asChild>
                    <Button size="sm">Approve</Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Verify {r[0]}?</DialogTitle>
                    </DialogHeader>
                    <p className="text-sm text-muted-foreground">
                      This centre will become visible to citizens and can receive pickup requests.
                    </p>
                    <Button onClick={() => toast.success("Centre verified")}>
                      Confirm verification
                    </Button>
                  </DialogContent>
                </Dialog>
              )}
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}
function AdminUsers() {
  const users = [
    ["Aviral Ranjan", "aviral@example.com", "Citizen", "12 Mar 2026", "Active"],
    ["GreenCycle Centre", "ops@greencycle.in", "Centre", "4 Feb 2026", "Active"],
    ["GreenEarth Agency", "hello@greenearth.in", "Recycler", "28 Jan 2026", "Active"],
    ["Neha Kapoor", "neha@example.com", "Citizen", "19 Sep 2026", "Suspended"],
  ];
  return (
    <>
      <div className="mb-5 grid gap-3 sm:grid-cols-[1fr_220px]">
        <SearchBar placeholder="Search users" />
        <FilterField label="" options={["All roles", "Citizen", "Centre", "Recycler", "Admin"]} />
      </div>
      <Card className="overflow-hidden">
        <div className="divide-y">
          {users.map((r) => (
            <div
              className="grid gap-3 p-5 md:grid-cols-[1.2fr_1.4fr_.7fr_.8fr_.7fr_auto] md:items-center"
              key={r[1]}
            >
              <b className="text-sm">{r[0]}</b>
              <span className="text-sm text-muted-foreground">{r[1]}</span>
              <Badge variant="outline">{r[2]}</Badge>
              <span className="text-xs">{r[3]}</span>
              <StatusBadge status={r[4]} />
              <Button variant="outline" size="sm">
                Manage
              </Button>
            </div>
          ))}
        </div>
      </Card>
    </>
  );
}
function AdminAnalytics() {
  return (
    <div className="grid gap-6 lg:grid-cols-2">
      <ChartCard title="Monthly e-waste collected">
        <ResponsiveContainer width="100%" height={280}>
          <BarChart data={analyticsData}>
            <CartesianGrid stroke="var(--border)" vertical={false} />
            <XAxis dataKey="m" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="kg" fill="var(--primary)" radius={[5, 5, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </ChartCard>
      {[
        ["Pickup completion", "92%", "3,240 of 3,518 pickups completed"],
        ["Recycling outcomes", "87%", "24.9 tonnes processed responsibly"],
        ["Centre performance", "4.7 / 5", "Average citizen satisfaction"],
        ["Environmental impact", "56.8 t CO₂e", "Estimated emissions avoided"],
      ].map(([t, v, c]) => (
        <Card className="p-6" key={t}>
          <p className="text-sm text-muted-foreground">{t}</p>
          <p className="mt-3 text-4xl font-bold">{v}</p>
          <p className="mt-2 text-sm text-muted-foreground">{c}</p>
          <Progress value={parseInt(v)} className="mt-6" />
        </Card>
      ))}
    </div>
  );
}
