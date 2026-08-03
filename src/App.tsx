import { useEffect, useRef, useState } from "react";
import type { FormEvent, ReactNode, PointerEvent } from "react";
import { AnimatePresence, motion, useInView, useMotionValue, useScroll, useSpring, useTransform } from "motion/react";
import {
  ArrowUpRight,
  Award,
  BarChart3,
  BriefcaseBusiness,
  CheckCircle2,
  ChevronRight,
  Database,
  FileSignature,
  Filter,
  Globe2,
  Layers3,
  Mail,
  MapPin,
  Megaphone,
  Menu,
  MousePointer2,
  Phone,
  PlugZap,
  Rocket,
  SearchCheck,
  ShieldCheck,
  Sparkles,
  Users,
  Workflow,
  X,
  Zap,
} from "lucide-react";
import { getServicePageByPath, servicePageMap, servicePages, type ServicePage } from "./servicePageData";
const heroRecognitionStage = "/assets/hero-recognition-stage.png";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Automation", href: "#automation" },
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Certificates", href: "#certificates" },
  { label: "Contact", href: "#contact" },
];

const headerNavItems = navItems.filter((item) => item.label !== "Projects");

const heroStats = [
  { value: "16+", label: "Years helping businesses grow digitally" },
  { value: "360°", label: "Automation, CRM, marketing, and integration support" },
  { value: "CRM", label: "Certified setup, migration, and workflow consulting" },
];

const services = [
  {
    id: "01",
    title: "Business Automation Solutions",
    href: "/business-process-automation/",
    description:
      "Replace repetitive manual work with connected systems, templates, approvals, reminders, and smart triggers built around your actual workflow.",
    icon: Zap,
  },
  {
    id: "02",
    title: "CRM Setup",
    href: "/crm-automation/",
    description:
      "Organize leads, conversations, contacts, sales stages, client records, and follow-ups inside one clean CRM environment.",
    icon: Users,
  },
  {
    id: "03",
    title: "Workflows",
    href: "/workflow-automation/",
    description:
      "Create clear step-by-step processes so your team knows what happens next, who owns each task, and when action is required.",
    icon: Workflow,
  },
  {
    id: "04",
    title: "Sales Pipeline and Funnel",
    href: "/crm-automation/",
    description:
      "Build visual pipelines for lead scoring, active deals, funnel tracking, reminders, and conversion-focused reporting.",
    icon: Filter,
  },
  {
    id: "05",
    title: "Digital Marketing Solutions",
    href: "/marketing-automation/",
    description:
      "Connect campaigns, forms, ads, email, social media, and tracking so your marketing works with your business system.",
    icon: Megaphone,
  },
  {
    id: "06",
    title: "Web App Integrations",
    href: "/web-app-integrations/",
    description:
      "Connect forms, CRMs, calendars, project tools, payments, notifications, and dashboards into one reliable flow.",
    icon: PlugZap,
  },
  {
    id: "07",
    title: "Data Migration",
    href: "/crm-automation/",
    description:
      "Move spreadsheets, customer files, old records, product lists, and business data into clean, secure, modern systems.",
    icon: Database,
  },
  {
    id: "08",
    title: "Certified Expertise & Consultation",
    href: "/business-process-automation/",
    description:
      "Get practical guidance from a certified team that understands automation tools, CRM platforms, and digital growth systems.",
    icon: Award,
  },
];

const automationItems = [
  "Employee Onboarding",
  "Operations Management",
  "Accounts Payable/Invoicing",
  "Sales Pipeline and Funnel",
  "Logistics",
  "Contract and Proposal Management",
  "Recruitment",
  "Payroll",
  "Load Management",
  "Customer Management",
  "Marketing Campaigns",
  "Request Management",
  "Follow up Reminders",
  "And many more",
];

const capabilityGroups = [
  {
    title: "Business Systems",
    icon: BriefcaseBusiness,
    items: ["BUSINESS AUTOMATION", "WEB APP INTEGRATIONS", "CRMs", "PROJECT MANAGEMENT"],
  },
  {
    title: "Digital Marketing",
    icon: Megaphone,
    items: ["DIGITAL MARKETING", "FACEBOOK ADS", "GOOGLE ADS", "SOCIAL MEDIA"],
  },
  {
    title: "Creative & Growth",
    icon: Layers3,
    items: ["WEBSITE DESIGN & DEVELOPMENT", "EMAIL & SCHEDULING", "SEO", "GRAPHICS"],
  },
];

const protocolServices = [
  "BUSINESS AUTOMATION",
  "CRM ARCHITECTURE AND IMPLEMENTATION",
  "DIGITAL MARKETING",
  "WEB APP INTEGRATIONS",
  "PROJECT MANAGEMENT",
  "FACEBOOK ADS",
  "GOOGLE ADS",
  "WEBSITE DESIGN & DEVELOPMENT",
  "SOCIAL MEDIA",
  "EMAIL & SCHEDULING",
  "SEO",
  "GRAPHICS",
];

const protocolCapabilities = [
  {
    id: "01",
    title: "BUSINESS AUTOMATION",
    subtitle: "Smart triggers for cleaner operations",
    description:
      "Turn repeated manual tasks into automated flows for approvals, reminders, routing, notifications, and day-to-day operations.",
    icon: Zap,
    tags: ["Triggers", "Approvals", "Operations", "Efficiency"],
  },
  {
    id: "02",
    title: "CRM ARCHITECTURE AND IMPLEMENTATION",
    subtitle: "Structured CRM systems your team can actually use",
    description:
      "Plan and implement CRM architecture for contacts, deals, lead tracking, communication history, client data, and team visibility.",
    icon: Users,
    tags: ["Contacts", "Pipelines", "Deals", "Visibility"],
  },
  {
    id: "03",
    title: "DIGITAL MARKETING",
    subtitle: "Campaigns connected to measurable growth",
    description:
      "Support campaigns with lead capture, follow-up automation, reporting, tracking, and smarter conversion pathways.",
    icon: Megaphone,
    tags: ["Campaigns", "Funnels", "Tracking", "Leads"],
  },
  {
    id: "04",
    title: "WEB APP INTEGRATIONS",
    subtitle: "Connected tools without scattered work",
    description:
      "Connect websites, forms, CRMs, calendars, payment tools, dashboards, notifications, and internal business systems.",
    icon: PlugZap,
    tags: ["APIs", "Forms", "Sync", "Portals"],
  },
  {
    id: "05",
    title: "PROJECT MANAGEMENT",
    subtitle: "Clearer tasks, handoffs, and delivery",
    description:
      "Make projects easier to track with automated tasks, timelines, status updates, approvals, and handoff reminders.",
    icon: BriefcaseBusiness,
    tags: ["Tasks", "Teams", "Timeline", "Delivery"],
  },
  {
    id: "06",
    title: "FACEBOOK ADS",
    subtitle: "Paid traffic tied to smarter follow-up",
    description:
      "Improve paid campaign outcomes with clearer lead routing, retargeting support, conversion tracking, and post-click workflows.",
    icon: MousePointer2,
    tags: ["Ads", "Retargeting", "Lead Flow", "Follow-up"],
  },
  {
    id: "07",
    title: "GOOGLE ADS",
    subtitle: "Search campaigns with business visibility",
    description:
      "Connect ad traffic to CRM pipelines, landing pages, forms, dashboards, and conversion-focused reporting.",
    icon: BarChart3,
    tags: ["Search", "ROI", "Tracking", "Reports"],
  },
  {
    id: "08",
    title: "WEBSITE DESIGN & DEVELOPMENT",
    subtitle: "Websites built around conversion paths",
    description:
      "Create conversion-focused web experiences that connect directly to lead capture, automation, CRM, and business systems.",
    icon: Globe2,
    tags: ["UX", "Pages", "Forms", "Speed"],
  },
  {
    id: "09",
    title: "SOCIAL MEDIA",
    subtitle: "Content activity connected to growth",
    description:
      "Plan and coordinate social content while connecting engagement to lead generation, scheduling, reminders, and reports.",
    icon: Sparkles,
    tags: ["Content", "Planning", "Scheduling", "Tracking"],
  },
  {
    id: "10",
    title: "EMAIL & SCHEDULING",
    subtitle: "Sequences, reminders, and bookings",
    description:
      "Automate booking links, nurture emails, reminders, handoffs, customer follow-ups, and scheduled communication sequences.",
    icon: Mail,
    tags: ["Bookings", "Sequences", "Reminders", "Nurture"],
  },
  {
    id: "11",
    title: "SEO",
    subtitle: "Search foundations with clear reporting",
    description:
      "Build search visibility with structured content, technical improvements, performance monitoring, and clean reporting dashboards.",
    icon: SearchCheck,
    tags: ["Content", "Technical", "Ranking", "Reports"],
  },
  {
    id: "12",
    title: "GRAPHICS",
    subtitle: "Visual assets for systems and campaigns",
    description:
      "Create clear brand visuals that support websites, campaigns, landing pages, presentations, and business communication.",
    icon: Layers3,
    tags: ["Branding", "Creative", "Assets", "Campaigns"],
  },
];

const systemProjects = [
  {
    id: "01",
    type: "CRM System",
    title: "CRM Growth Command",
    description: "A centralized customer database blueprint for lead capture, pipeline movement, follow-up reminders, and sales visibility.",
    stat: "92%",
    statLabel: "lead routing clarity",
    tags: ["CRM Setup", "Pipeline", "Follow-ups"],
  },
  {
    id: "02",
    type: "Automation Flow",
    title: "Operations Automation Hub",
    description: "A workflow automation model for onboarding, requests, invoices, approvals, logistics updates, and internal notifications.",
    stat: "68%",
    statLabel: "manual work reduced",
    tags: ["Workflows", "Requests", "Approvals"],
  },
  {
    id: "03",
    type: "Marketing Engine",
    title: "Digital Campaign System",
    description: "A connected marketing setup for ads, email scheduling, SEO touchpoints, campaign tracking, and conversion-focused reports.",
    stat: "2x+",
    statLabel: "cleaner funnel potential",
    tags: ["Ads", "SEO", "Reporting"],
  },
];

const reasons = [
  {
    title: "Centralized Customer Data",
    description: "Bring scattered lead forms, chat logs, email lists, and contact records into one organized business system.",
    icon: Database,
  },
  {
    title: "Automated Workflows for Efficiency",
    description: "Reduce repeated manual work, prevent missed tasks, and keep operations moving even when your team is busy.",
    icon: Workflow,
  },
  {
    title: "Seamless Integration with Your Tools",
    description: "Connect calendars, forms, emails, CRMs, ads, notifications, and project tools into a smoother ecosystem.",
    icon: PlugZap,
  },
  {
    title: "Actionable Insights & Reporting",
    description: "Track sales performance, workflow progress, campaign activity, and bottlenecks with clearer dashboards.",
    icon: BarChart3,
  },
  {
    title: "Scalable Solutions",
    description: "Build systems that can grow with new leads, users, branches, teams, campaigns, and operational complexity.",
    icon: Rocket,
  },
];

const certificates = [
  { title: "ClickUp Expert Certificate of Completion", image: "/assets/certificates/certificate-01.jpg" },
  { title: "Certificate of Completion - Online Business Expert", image: "/assets/certificates/certificate-02.jpg" },
  { title: "Certificate of Completion - Social Media Expert", image: "/assets/certificates/certificate-03.jpg" },
  { title: "Digital Marketing Strategist Certified badge", image: "/assets/certificates/certificate-04.png" },
  { title: "Facebook Blueprint Certification badge", image: "/assets/certificates/certificate-05.png" },
  { title: "Google Project Management Certificate", image: "/assets/certificates/certificate-06.png" },
  { title: "Google Ads Certified badge", image: "/assets/certificates/certificate-07.png" },
  { title: "Inbound Marketing Certified badge", image: "/assets/certificates/certificate-08.png" },
  { title: "Keap Automation Champion Certified badge", image: "/assets/certificates/certificate-09.png" },
  { title: "Keap Lifecycle Automation Certified badge", image: "/assets/certificates/certificate-10.png" },
  { title: "Make certification for Digital Enterprise Group", image: "/assets/certificates/certificate-11.jpg" },
  { title: "Monday CRM Certified certificate", image: "/assets/certificates/certificate-12.png" },
  { title: "Pipedrive Leadbooster certificate for Digital Enterprise Group LLC", image: "/assets/certificates/certificate-13.jpg" },
  { title: "Social Media Specialist Certified badge", image: "/assets/certificates/certificate-14.png" },
];

const awards = [
  { title: "Best of 2025", image: "/assets/certificates/award-15.png" },
  { title: "Best of 2026", image: "/assets/certificates/award-16.png" },
];

const clientLogos = [
  { title: "Arbiter Sports", image: "/assets/clients/arbiter-sports-new.jpg" },
  { title: "BI USA", image: "/assets/clients/biusa.png" },
  { title: "Chris McMillan", image: "/assets/clients/chris-mcmillan.webp" },
  { title: "Concept", image: "/assets/clients/concept-black.svg" },
  { title: "Concept CI", image: "/assets/clients/conceptci.png" },
  { title: "Digital Marketing Partners", image: "/assets/clients/digital-marketing-partners-new.jpg" },
  { title: "EventTech Systems", image: "/assets/clients/ets.png" },
  { title: "Flybyfun", image: "/assets/clients/fbf.png" },
  { title: "GTC Advisors", image: "/assets/clients/gtc360-new.png" },
  { title: "ID3 Partners", image: "/assets/clients/id3-partners-new.png" },
  { title: "InnerView", image: "/assets/clients/innerview.png" },
  { title: "Inovus", image: "/assets/clients/inovus.svg" },
  { title: "Jorny", image: "/assets/clients/jorny.webp" },
  { title: "Kismet Technologies", image: "/assets/clients/kismet.png" },
  { title: "Lawrence Environmental", image: "/assets/clients/lawrence-env.png" },
  { title: "LeadTrap", image: "/assets/clients/leadtrap.png" },
  { title: "USA Roller Sports", image: "/assets/clients/usa-rs.avif" },
  { title: "MCA", image: "/assets/clients/mca.png" },
  { title: "Weston Legal", image: "/assets/clients/weston-legal.png" },
  { title: "Yellowbox Collective", image: "/assets/clients/yellowbox-collective.png" },
  { title: "Spear Red Design", image: "/assets/clients/spear-red-design.png" },
  { title: "Geotrek", image: "/assets/clients/geotrek-updated.png" },
  { title: "Oscito", image: "/assets/clients/oscito-updated.png" },
  { title: "FCS", image: "/assets/clients/fcs.png" },
  { title: "Institute of Interpersonal Hypnotherapy", image: "/assets/clients/institute-hypnotherapy-updated.png" },
  { title: "MailSoar", image: "/assets/clients/mailsoar.webp" },
  { title: "Nexton LTD", image: "/assets/clients/nexton.webp" },
  { title: "Physician Collaborators", image: "/assets/clients/physician-collaborators.webp" },
  { title: "PointsPeak Marketing", image: "/assets/clients/pointspeak-marketing.webp" },
  { title: "PYRA Marketing Solutions Provider", image: "/assets/clients/pyra-msp.png" },
  { title: "RO3SF", image: "/assets/clients/ro3sf-updated.png" },
  { title: "SecureEvent", image: "/assets/clients/secureevent-updated.png" },
  { title: "Wall Street Education", image: "/assets/clients/wall-street-education.png" },
];

const platformLogos = [
  { title: "Make", image: "/assets/platforms/make.png" },
  { title: "GoHighLevel", image: "/assets/platforms/gohighlevel.png" },
  { title: "ClickUp", image: "/assets/platforms/clickup.png" },
  { title: "Keap", image: "/assets/platforms/keap.png" },
  { title: "Zapier", image: "/assets/platforms/zapier.png" },
  { title: "Pipedrive", image: "/assets/platforms/pipedrive.webp" },
  { title: "Monday.com", image: "/assets/platforms/monday.png" },
  { title: "HubSpot", image: "/assets/platforms/hubspot.png" },
];


const processSteps = [
  {
    id: "1",
    label: "DISCOVER",
    title: "Audit Current Systems",
    eyebrow: "SYSTEM DISCOVERY",
    type: "PROCESS MAPPING",
    metric: "Manual gaps",
    detail: "We study your tools, team handoffs, lead flow, and repeated tasks so the automation plan is based on how your business actually works.",
    modules: ["Audit", "Map", "Prioritize"],
  },
  {
    id: "2",
    label: "BUILD",
    title: "Design The Operating System",
    eyebrow: "CRM ARCHITECTURE",
    type: "OPERATING SYSTEM",
    metric: "Cleaner pipeline",
    detail: "We shape the CRM structure, pipelines, forms, dashboards, and ownership rules into one clear system your team can follow every day.",
    modules: ["CRM", "Pipeline", "Dashboards"],
  },
  {
    id: "3",
    label: "AUTOMATE",
    title: "Connect The Workflow",
    eyebrow: "WORKFLOW AUTOMATION",
    type: "ACTIVE SYSTEM",
    metric: "Less manual work",
    detail: "We connect the tools and automate reminders, routing, notifications, follow-ups, approvals, reports, and handoffs to reduce manual work.",
    modules: ["Triggers", "Routing", "Follow-up"],
  },
  {
    id: "4",
    label: "SCALE",
    title: "Improve And Scale",
    eyebrow: "SCALE READY",
    type: "GROWTH SYSTEM",
    metric: "Clearer decisions",
    detail: "We refine the system with documentation, reporting, and support so your business can grow with clearer visibility and fewer bottlenecks.",
    modules: ["Reports", "Training", "Scale"],
  },
];

function scrollToId(id: string) {
  const target = document.querySelector(id);
  if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
}

function fadeUp(delay = 0) {
  return {
    initial: { opacity: 0, y: 34, filter: "blur(12px)" },
    whileInView: { opacity: 1, y: 0, filter: "blur(0px)" },
    viewport: { once: true, margin: "-90px" },
    transition: { duration: 0.75, delay, ease: [0.16, 1, 0.3, 1] },
  } as const;
}

function AnimatedNumber({ value, delay = 0, duration = 1500 }: { value: number; delay?: number; duration?: number }) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const inView = useInView(ref, { once: true, amount: 0.45 });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;

    let frame = 0;
    let raf = 0;
    const start = performance.now() + delay * 1000;
    const easeOut = (t: number) => 1 - Math.pow(1 - t, 3);

    const tick = (now: number) => {
      if (now < start) {
        raf = requestAnimationFrame(tick);
        return;
      }

      const progress = Math.min((now - start) / duration, 1);
      const nextValue = Math.round(easeOut(progress) * value);
      if (nextValue !== frame) {
        frame = nextValue;
        setDisplay(nextValue);
      }

      if (progress < 1) raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, value, delay, duration]);

  return <span ref={ref}>{display}</span>;
}

function Header() {
  const [open, setOpen] = useState(false);
  const [showHeroLogo, setShowHeroLogo] = useState(true);
  const currentPath = typeof window === "undefined" ? "/" : window.location.pathname;
  const normalizedPath = currentPath === "/" ? "/" : currentPath.replace(/\/+$/, "");
  const isHomepage = normalizedPath === "/";

  useEffect(() => {
    const TOP_LOGO_VISIBILITY_LIMIT = 10;

    const updateLogoVisibility = () => {
      setShowHeroLogo(window.scrollY <= TOP_LOGO_VISIBILITY_LIMIT);
    };

    updateLogoVisibility();
    window.addEventListener("scroll", updateLogoVisibility, { passive: true });
    window.addEventListener("resize", updateLogoVisibility);

    return () => {
      window.removeEventListener("scroll", updateLogoVisibility);
      window.removeEventListener("resize", updateLogoVisibility);
    };
  }, []);

  type HeaderLink = { label: string; href: string };
  type HeaderDropdown = { label: string; children: HeaderLink[] };
  type HeaderItem = HeaderLink | HeaderDropdown;

  const headerItems: HeaderItem[] = [
    { label: "Home", href: "/#home" },
    { label: "Automation", href: "/#automation" },
    {
      label: "Services",
      children: [
        { label: "Services Overview", href: "/#services" },
        { label: "CRM Automation", href: "/crm-automation/" },
        { label: "Workflow Automation", href: "/workflow-automation/" },
        { label: "Web App Integrations", href: "/web-app-integrations/" },
        { label: "Marketing Automation", href: "/marketing-automation/" },
        { label: "Business Process Automation", href: "/business-process-automation/" },
      ],
    },
    { label: "Projects", href: "/#projects" },
    {
      label: "About",
      children: [
        { label: "About Us", href: "/#about" },
        { label: "Why Choose Us", href: "/#why-choose-us" },
        { label: "Process", href: "/#process" },
      ],
    },
    { label: "Contact", href: "/#contact" },
  ];

  const handleNavClick = (href: string) => {
    setOpen(false);

    if (href.startsWith("/#") && isHomepage) {
      const hash = href.slice(1);
      scrollToId(hash);
      window.history.replaceState(null, "", hash);
      return;
    }

    document.body.classList.add("route-transitioning");
    window.setTimeout(() => window.location.assign(href), 180);
  };

  const isActive = (href: string) => {
    if (href === "/#home") return isHomepage;
    if (href.startsWith("/#")) return false;
    return normalizedPath === href.replace(/\/+$/, "");
  };

  const servicesActive = servicePages.some((page) => normalizedPath === page.path.replace(/\/+$/, ""));

  return (
    <header className="site-header original-site-header">
      <nav className="nav-shell original-nav-shell" aria-label="Primary navigation">
        <a
          className={`brand-mark original-brand-mark ${showHeroLogo ? "logo-visible" : "logo-hidden"}`}
          href="/"
          aria-label="Digital Enterprise Group home"
          onClick={(event) => {
            if (isHomepage) {
              event.preventDefault();
              handleNavClick("/#home");
            }
          }}
        >
          <img src="/assets/deg-logo-glass.png" alt="Digital Enterprise Group" />
        </a>

        <div className="glass-nav-center" aria-label="Desktop navigation">
          <div className="desktop-nav original-desktop-nav">
            {headerItems.map((item) => {
              if ("children" in item) {
                const dropdownIsActive = item.label === "Services" && servicesActive;
                return (
                  <div className={`nav-dropdown ${dropdownIsActive ? "is-active" : ""}`} key={item.label}>
                    <button className="nav-dropdown-trigger" type="button" aria-haspopup="true">
                      {item.label}
                    </button>
                    <div className="nav-dropdown-menu" role="menu" aria-label={`${item.label} submenu`}>
                      {item.children.map((child) => (
                        <a
                          key={child.href}
                          href={child.href}
                          role="menuitem"
                          className={isActive(child.href) ? "is-active" : undefined}
                          onClick={(event) => {
                            if (child.href.startsWith("/#") && isHomepage) event.preventDefault();
                            else if (!child.href.startsWith("/#")) event.preventDefault();
                            handleNavClick(child.href);
                          }}
                        >
                          {child.label}
                        </a>
                      ))}
                    </div>
                  </div>
                );
              }

              return (
                <a
                  key={item.href}
                  href={item.href}
                  className={isActive(item.href) ? "is-active" : undefined}
                  onClick={(event) => {
                    if (item.href.startsWith("/#") && isHomepage) event.preventDefault();
                    handleNavClick(item.href);
                  }}
                >
                  {item.label}
                </a>
              );
            })}
          </div>

          <button className="nav-button desktop-only original-nav-button glass-nav-cta" type="button" onClick={() => handleNavClick("/#contact")}>
            Get in Touch <ArrowUpRight size={15} />
          </button>
        </div>

        <button
          className="mobile-toggle original-mobile-toggle"
          onClick={() => setOpen((value) => !value)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            className="mobile-menu original-mobile-menu"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
          >
            {headerItems.map((item) => {
              if ("children" in item) {
                return (
                  <div className="mobile-dropdown-group" key={item.label}>
                    <span>{item.label}</span>
                    <div>
                      {item.children.map((child) => (
                        <a
                          key={child.href}
                          href={child.href}
                          onClick={(event) => {
                            if (child.href.startsWith("/#") && isHomepage) event.preventDefault();
                            else if (!child.href.startsWith("/#")) event.preventDefault();
                            handleNavClick(child.href);
                          }}
                        >
                          {child.label}
                        </a>
                      ))}
                    </div>
                  </div>
                );
              }

              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(event) => {
                    if (item.href.startsWith("/#") && isHomepage) event.preventDefault();
                    handleNavClick(item.href);
                  }}
                >
                  {item.label}
                </a>
              );
            })}
            <button type="button" onClick={() => handleNavClick("/#contact")}>
              Get in Touch <ArrowUpRight size={16} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

function MagneticButton({ children, variant = "primary", onClick }: { children: ReactNode; variant?: "primary" | "secondary"; onClick?: () => void }) {
  return (
    <button type="button" className={`magnetic-btn ${variant}`} onClick={onClick}>
      {children}
    </button>
  );
}

function SectionIntro({ eyebrow, title, text }: { eyebrow: string; title: string; text: string }) {
  return (
    <div className="section-intro">
      <motion.div {...fadeUp(0)}>
        <span className="eyebrow">{eyebrow}</span>
        <h2>{title}</h2>
      </motion.div>
      <motion.p {...fadeUp(0.08)}>{text}</motion.p>
    </div>
  );
}

function HeroDashboard() {
  const ref = useRef<HTMLDivElement | null>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-80, 80], [6, -6]);
  const rotateY = useTransform(x, [-80, 80], [-7, 7]);

  const handleMove = (event: PointerEvent<HTMLDivElement>) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    x.set(event.clientX - rect.left - rect.width / 2);
    y.set(event.clientY - rect.top - rect.height / 2);
  };

  return (
    <motion.div
      ref={ref}
      className="dashboard-shell"
      onPointerMove={handleMove}
      onPointerLeave={() => { x.set(0); y.set(0); }}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      initial={{ opacity: 0, y: 40, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 1, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="dashboard-top">
        <div className="window-dots"><i /><i /><i /></div>
        <span>DEG Growth System</span>
      </div>
      <div className="dashboard-grid">
        <div className="dash-panel chart-panel">
          <span>Automation Impact</span>
          <svg viewBox="0 0 360 180" className="chart-line" aria-hidden="true">
            <defs>
              <linearGradient id="chartStroke" x1="0" x2="1">
                <stop offset="0%" stopColor="#C9826B" />
                <stop offset="60%" stopColor="#E8C8BB" />
                <stop offset="100%" stopColor="#A86755" />
              </linearGradient>
            </defs>
            <path className="grid-line" d="M20 145H340M20 100H340M20 55H340" />
            <motion.path
              d="M24 138 C68 118, 80 132, 116 92 C158 48, 176 72, 214 62 C254 50, 270 30, 336 24"
              fill="none"
              stroke="url(#chartStroke)"
              strokeWidth="5"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.8, delay: 0.7, ease: "easeInOut" }}
            />
            {[24, 116, 214, 336].map((cx, index) => (
              <motion.circle
                key={cx}
                cx={cx}
                cy={[138, 92, 62, 24][index]}
                r="5"
                fill="#C9826B"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 1 + index * 0.18 }}
              />
            ))}
          </svg>
        </div>
        <div className="dash-panel kpi-panel">
          <span>Manual Work Reduced</span>
          <strong>68%</strong>
          <p>Automated follow-ups, pipeline movement, and client reminders.</p>
        </div>
        <div className="dash-panel pipeline-panel">
          <span>Connected Pipeline</span>
          {[
            ["Lead Capture", "92%"],
            ["CRM Routing", "78%"],
            ["Follow-up", "86%"],
          ].map(([label, width]) => (
            <div className="pipeline-row" key={label}>
              <small>{label}</small>
              <div><motion.i initial={{ width: 0 }} animate={{ width }} transition={{ duration: 1.2, delay: 0.8 }} /></div>
              <b>{width}</b>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

function Hero() {
  const words = ["Smarter", "Systems.", "Stronger", "Business."];
  const heroRef = useRef<HTMLElement | null>(null);

  const handleHeroPointerMove = (event: PointerEvent<HTMLElement>) => {
    const hero = heroRef.current;
    if (!hero) return;

    const rect = hero.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const moveX = (x / rect.width - 0.5).toFixed(4);
    const moveY = (y / rect.height - 0.5).toFixed(4);

    hero.style.setProperty("--hero-pointer-x", `${x}px`);
    hero.style.setProperty("--hero-pointer-y", `${y}px`);
    hero.style.setProperty("--hero-move-x", moveX);
    hero.style.setProperty("--hero-move-y", moveY);
  };

  const handleHeroPointerLeave = () => {
    const hero = heroRef.current;
    if (!hero) return;

    hero.style.setProperty("--hero-pointer-x", "68%");
    hero.style.setProperty("--hero-pointer-y", "32%");
    hero.style.setProperty("--hero-move-x", "0");
    hero.style.setProperty("--hero-move-y", "0");
  };

  return (
    <section
      id="home"
      className="deg-editorial-hero"
      ref={heroRef}
      onPointerMove={handleHeroPointerMove}
      onPointerLeave={handleHeroPointerLeave}
    >
      <video
        className="hero-bg-video"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        aria-hidden="true"
      >
        <source src="/assets/hero-tech-bg.mp4" type="video/mp4" />
      </video>
      <div className="hero-video-contrast-layer" aria-hidden="true" />
      <div className="hero-interactive-bg" aria-hidden="true">
        <div className="hero-cursor-lens" />
        <div className="hero-parallax-plane hero-parallax-plane-one" />
        <div className="hero-parallax-plane hero-parallax-plane-two" />
        <div className="hero-orbit-field">
          <i />
          <i />
          <i />
        </div>
        <div className="hero-drift-dots">
          <span />
          <span />
          <span />
          <span />
          <span />
        </div>
      </div>
      <div className="hero-hairlines" aria-hidden="true" />
      <div className="deg-hero-inner">
        <motion.div
          className="hero-kicker-row"
          initial={{ opacity: 0, y: -18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="hero-kicker-spacer" aria-hidden="true" />
        </motion.div>

        <div className="hero-bottom-layout">
          <motion.div
            className="hero-recognition-badges hero-recognition-stage"
            initial={{ opacity: 0, y: 34 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.48, ease: [0.22, 1, 0.36, 1] }}
            aria-label="BusinessRate recognitions"
          >
            <figure>
              <img
                src={heroRecognitionStage}
                alt="BusinessRate 2025 and 2026 recognitions for Digital Enterprise Group"
                width="2048"
                height="1152"
                loading="eager"
                decoding="async"
                fetchPriority="high"
              />
            </figure>
          </motion.div>

          <motion.h2
            className="hero-micro-copy"
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.58, ease: [0.22, 1, 0.36, 1] }}
          >
            Recognized for Digital Growth &amp; Business Automation
          </motion.h2>

          <motion.p
            className="hero-description-copy"
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.68, ease: [0.22, 1, 0.36, 1] }}
          >
            Your partner in CRM, automation, marketing, and scalable digital systems.<br />
            We help businesses simplify operations, automate workflows, improve lead management, and build smarter systems that support measurable, long-term growth.
          </motion.p>

          <h1 className="hero-slide-heading" aria-label="Smarter Systems. Stronger Business.">
            {words.map((word, index) => (
              <span className="hero-word-clip" key={word}>
                <motion.span
                  initial={{ y: "112%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.76, delay: 0.42 + index * 0.14, ease: [0.22, 1, 0.36, 1] }}
                >
                  {word}
                </motion.span>
              </span>
            ))}
          </h1>
        </div>
      </div>
    </section>
  );
}

function TrustedBusinesses() {
  const logos = clientLogos;

  return (
    <section className="content-section white-bg trusted-businesses-section" aria-label="Trusted by growing businesses">
      <div className="wrap trusted-businesses-intro">
        <SectionIntro
          eyebrow="CLIENTS & PARTNERS"
          title="Trusted by businesses ready to work smarter."
          text="Digital Enterprise Group helps businesses and organizations streamline operations, automate workflows, organize customer systems, and build stronger digital foundations for growth."
        />
      </div>

      <motion.div
        className="client-logo-stream"
        initial={{ opacity: 0, y: 28, filter: "blur(10px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="client-logo-lane" aria-label="Continuous client logo slider">
          <div className="client-logo-track">
            {[...logos, ...logos, ...logos].map((logo, index) => (
              <figure className="client-logo-item" key={`trusted-${logo.title}-${index}`}>
                <img src={logo.image} alt={`${logo.title} logo`} loading="lazy" />
              </figure>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}

function MarqueeBand() {
  const labels = [
    "SEO Integration",
    "Web App Integrations",
    "Lead Generation",
    "Email Scheduling",
    "Ads Integration",
    "CRM Setup",
    "Workflow Automation",
    "Data Migration",
    "Sales Pipeline",
  ];
  return (
    <section className="focus-marquee-band" aria-label="Strategic focus marquee">
      <div className="focus-marquee-labels">
        <span>Strategic Focus</span>
        <span>Enterprise Execution</span>
      </div>
      <div className="focus-marquee-window">
        <div className="focus-marquee-track">
          {[...labels, ...labels, ...labels].map((label, index) => (
            <span key={`${label}-${index}`}><i />{label}</span>
          ))}
        </div>
      </div>
    </section>
  );
}

function Stats() {
  const stats = [
    { value: 16, suffix: "+", label: "Years of Experience" },
    { value: 100, suffix: "%", label: "Client Satisfaction" },
    { value: 500, suffix: "+", label: "Businesses Empowered" },
    { value: 2, suffix: "x+", label: "Average Conversion Rate" },
  ];
  return (
    <section className="protocol-stats-section">
      <div className="protocol-stats-grid">
        {stats.map((stat, index) => (
          <motion.div key={stat.label} className="protocol-stat-card" {...fadeUp(index * 0.08)}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <strong><AnimatedNumber value={stat.value} delay={index * 0.08} /><em>{stat.suffix}</em></strong>
            <p>{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="interactive-service-section">
      <div className="service-orb service-orb-one" />
      <div className="service-orb service-orb-two" />
      <div className="interactive-service-wrap">
        <motion.div className="interactive-service-copy" {...fadeUp()}>
          <span className="eyebrow dark-eyebrow">Services</span>
          <h2>Smarter systems for business growth.</h2>
          <p>
            Digital Enterprise Group brings together automation, CRM setup, campaign systems, data migration, and integrations to help businesses reduce manual work, improve follow-ups, and manage operations with more clarity.
          </p>
          <MagneticButton onClick={() => scrollToId("#contact")}>Request system audit <ArrowUpRight size={18} /></MagneticButton>
        </motion.div>

        <div className="interactive-service-list">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.a
                key={service.id}
                className="interactive-service-card"
                href={service.href}
                aria-label={`Learn more about ${service.title}`}
                initial={{ opacity: 0, y: 42, scale: 0.97 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-110px" }}
                transition={{ duration: 0.75, delay: index * 0.045, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -8 }}
                style={{ top: 96 + index * 14 }}
              >
                <div className="service-card-line" />
                <div className="service-card-meta">
                  <span>// MODULE {service.id}</span>
                  <i>ACTIVE SYSTEM</i>
                </div>
                <div className="service-card-main">
                  <span className="service-card-number">{service.id}</span>
                  <div>
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                  </div>
                  <div className="service-card-icon"><Icon size={26} /></div>
                </div>
                <span className="service-card-link">Explore service <ArrowUpRight size={16} /></span>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ProjectVisual({ index }: { index: number }) {
  const bars = index === 0 ? [86, 64, 92] : index === 1 ? [74, 88, 57] : [68, 82, 96];
  return (
    <div className="project-visual" aria-hidden="true">
      <div className="project-browser-head"><i /><i /><i /><span>system-preview.0{index + 1}</span></div>
      <div className="project-screen-grid">
        <div className="project-mini-panel tall">
          <span />
          <strong>{index === 0 ? "CRM" : index === 1 ? "FLOW" : "ADS"}</strong>
          <small>Live dashboard</small>
        </div>
        <div className="project-mini-panel bars">
          {bars.map((bar, i) => <em key={i} style={{ width: `${bar}%` }} />)}
        </div>
        <div className="project-mini-panel chart">
          <svg viewBox="0 0 240 120">
            <motion.path
              d="M12 98 C48 70, 70 86, 102 48 C132 18, 156 54, 184 32 C206 16, 216 20, 228 14"
              fill="none"
              stroke="currentColor"
              strokeWidth="7"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.4, delay: 0.2 }}
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

function ProjectCard({ project, index, total }: { project: typeof systemProjects[number]; index: number; total: number }) {
  const ref = useRef<HTMLDivElement | null>(null);

  return (
    <div ref={ref} className="project-sticky-shell">
      <motion.article className="project-card" style={{ top: 88 + index * 18 }}>
        <div className="project-card-head">
          <span className="project-number">{project.id}</span>
          <div>
            <small>{project.type}</small>
            <h3>{project.title}</h3>
          </div>
        </div>
        <div className="project-card-body">
          <div className="project-copy">
            <p>{project.description}</p>
            <strong>{project.stat}</strong>
            <span>{project.statLabel}</span>
            <div className="project-tags">
              {project.tags.map((tag) => <i key={tag}>{tag}</i>)}
            </div>
          </div>
          <ProjectVisual index={index} />
        </div>
      </motion.article>
    </div>
  );
}

function Projects() {
  return (
    <section id="projects" className="projects-section">
      <div className="projects-wrap">
        <motion.div className="projects-head" {...fadeUp()}>
          <span className="eyebrow dark-eyebrow">Projects</span>
          <h2>Real solutions for real business workflows.</h2>
          <p>
            Explore how Digital Enterprise Group turns CRM, automation, and marketing workflows into clearer systems that support better decisions and business growth.
          </p>
        </motion.div>
        <div className="project-stack">
          {systemProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} total={systemProjects.length} />
          ))}
        </div>
      </div>
    </section>
  );
}


function Automation() {
  return (
    <section id="automation" className="content-section white-bg">
      <div className="automation-layout">
        <motion.div className="sticky-copy" {...fadeUp()}>
          <span className="eyebrow">Things you can automate</span>
          <h2>Automate the work that slows your team down.</h2>
          <p>
            Digital Enterprise Group helps businesses reduce repetitive manual tasks by automating reminders, requests, routing, reporting, records, and customer communication in the background.
          </p>
          <MagneticButton onClick={() => scrollToId("#contact")}>Find out how <ArrowUpRight size={18} /></MagneticButton>
        </motion.div>
        <div className="automation-grid">
          {automationItems.map((item, index) => (
            <motion.div className="automation-item" key={item} {...fadeUp(index * 0.035)}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <strong>{item}</strong>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WideCta() {
  return (
    <section className="wide-cta-section" aria-label="Find out how Digital Enterprise Group can help">
      <motion.div className="wide-cta" {...fadeUp()}>
        <div className="wide-cta-side">
          <span className="eyebrow">Find out how</span>
          <p>
            Digital Enterprise Group helps review your current process, identify manual bottlenecks, and build connected systems that make your business easier to manage.
          </p>
        </div>

        <div className="wide-cta-main">
          <h2>Save time. Save money. Automate smarter.</h2>
          <MagneticButton onClick={() => scrollToId("#contact")}>
            BOOK A CONSULTATION <ArrowUpRight size={18} />
          </MagneticButton>
        </div>
      </motion.div>
    </section>
  );
}

function Capabilities() {
  const [activeIndex, setActiveIndex] = useState(1);
  const [isPaused, setIsPaused] = useState(false);
  const activeCapability = protocolCapabilities[activeIndex];

  useEffect(() => {
    if (isPaused) return;
    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % protocolCapabilities.length);
    }, 3800);
    return () => window.clearInterval(timer);
  }, [isPaused]);

  return (
    <section
      id="core-services"
      className="protocol-section protocol-interactive-section"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      aria-label="Digital Enterprise Group services"
    >
      <div className="protocol-wrap protocol-interactive-wrap">
        <motion.div className="protocol-head protocol-interactive-head" {...fadeUp()}>
          <span className="eyebrow dark-eyebrow">Core Services</span>
          <h2>What we can build for your business.</h2>
          <p>
            Explore the automation, CRM, marketing, data, and integration capabilities that help businesses reduce manual work, connect tools, and manage operations with more clarity.
          </p>
        </motion.div>

        <div className="protocol-console">
          <motion.aside
            className="protocol-preview-panel"
            initial={{ opacity: 0, x: -36, filter: "blur(14px)" }}
            whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="protocol-preview-bg" aria-hidden="true">
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
            </div>

            <div className="protocol-preview-top">
              <div>
                <span>// Module {activeCapability.id}</span>
                <strong>Active system</strong>
              </div>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeCapability.id}
                className="protocol-preview-content"
                initial={{ opacity: 0, y: 22, filter: "blur(12px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -20, filter: "blur(12px)" }}
                transition={{ duration: 0.46, ease: [0.16, 1, 0.3, 1] }}
              >
                <span className="protocol-preview-number">{activeCapability.id}</span>
                <p>{activeCapability.subtitle}</p>
                <h3>{activeCapability.title}</h3>
                <p>{activeCapability.description}</p>
                <div className="protocol-preview-tags">
                  {activeCapability.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="protocol-preview-footer">
              <span>Preview cycle</span>
              <div className="protocol-progress-track">
                <motion.i
                  key={`cap-progress-${activeCapability.id}`}
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: isPaused ? 0.35 : 3.8, ease: "linear" }}
                />
              </div>
            </div>
          </motion.aside>

          <motion.div
            className="protocol-list-panel"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            variants={{ hidden: {}, show: { transition: { staggerChildren: 0.045, delayChildren: 0.1 } } }}
          >
            <div className="protocol-list-header">
              <span>Index</span>
              <span>Capability</span>
              <span>Status</span>
            </div>
            {protocolCapabilities.map((item, index) => {
              const isActive = activeIndex === index;
              return (
                <motion.button
                  type="button"
                  key={item.id}
                  className={`protocol-list-row ${isActive ? "is-active" : ""}`}
                  onMouseEnter={() => setActiveIndex(index)}
                  onFocus={() => setActiveIndex(index)}
                  onClick={() => setActiveIndex(index)}
                  variants={{
                    hidden: { opacity: 0, y: 20, filter: "blur(10px)" },
                    show: {
                      opacity: 1,
                      y: 0,
                      filter: "blur(0px)",
                      transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] },
                    },
                  }}
                >
                  <span className="protocol-list-index">// {item.id}</span>
                  <span className="protocol-list-title">
                    <strong>{item.title}</strong>
                    <em>{item.subtitle}</em>
                  </span>
                  <span className="protocol-list-action">
                    <small>Preview</small>
                  </span>
                </motion.button>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="content-section white-bg about-section">
      <div className="about-grid">
        <motion.div {...fadeUp()}>
          <span className="eyebrow">About us</span>
          <h2>Smarter systems for businesses ready to grow.</h2>
          <p>
            Digital Enterprise Group helps businesses simplify operations, automate repetitive tasks, organize customer systems, and strengthen their digital presence. From CRM setup and workflow automation to digital marketing, data migration, and consultation, we build practical solutions that make daily business processes easier to manage.
          </p>
          <p>
            With 16+ years of experience, DEG focuses on creating systems that are clear, connected, and built around real business needs — helping businesses save time, improve follow-ups, and grow with more confidence.
          </p>
        </motion.div>
        <div className="about-visual about-logo-visual">
          <img className="about-floating-logo" src="/assets/deg-logo-glass.png" alt="Digital Enterprise Group logo" />
        </div>
      </div>
    </section>
  );
}

function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="content-section soft-bg">
      <div className="wrap">
        <SectionIntro
          eyebrow="Why choose us"
          title="Clear systems. Smarter growth."
          text="Digital Enterprise Group helps businesses replace disconnected tools and manual processes with connected systems that improve visibility, simplify follow-ups, and make daily operations easier to manage."
        />
        <div className="reasons-grid">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <motion.article className="reason-card" key={reason.title} {...fadeUp(index * 0.06)}>
                <Icon className="line-icon" />
                <span>/0{index + 1}</span>
                <h3>{reason.title}</h3>
                <p>{reason.description}</p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Certificates() {
  const sliderItems = certificates;

  return (
    <section id="certificates" className="content-section white-bg certificates-section">
      <div className="wrap">
        <SectionIntro
          eyebrow="Certifications"
          title="Platform-certified digital expertise."
          text="Digital Enterprise Group applies platform knowledge across CRM, automation, ads, analytics, project management, and digital marketing to build cleaner systems for everyday business operations."
        />
      </div>

      <div className="certificate-stream" aria-label="Continuous certificate slider">
        <div className="certificate-lane">
          <div className="certificate-track certificate-track-slow">
            {[...sliderItems, ...sliderItems, ...sliderItems].map((cert, index) => (
              <img className="certificate-image" key={`cert-${cert.title}-${index}`} src={cert.image} alt={cert.title} loading="lazy" />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}


function Contact({ defaultService = "" }: { defaultService?: string }) {
  const [formStatus, setFormStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [formMessage, setFormMessage] = useState("");
  const [startedAt, setStartedAt] = useState(() => String(Date.now()));

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());

    setFormStatus("sending");
    setFormMessage("Sending your inquiry securely...");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const result = await response.json().catch(() => ({}));

      if (!response.ok) {
        throw new Error(result?.message || "The message could not be sent right now.");
      }

      form.reset();
      setStartedAt(String(Date.now()));
      setFormStatus("success");
      setFormMessage("Message sent. The Digital Enterprise Group team will review it soon.");
    } catch (error) {
      setFormStatus("error");
      setFormMessage(error instanceof Error ? error.message : "The message could not be sent right now.");
    }
  };

  return (
    <section id="contact" className="content-section charcoal-bg contact-section modern-contact-section">
      <div className="contact-grid modern-contact-grid">
        <motion.div className="contact-copy-modern" {...fadeUp()}>
          <span className="eyebrow">Contact</span>
          <h2>Ready to improve the way your business works?</h2>
          <p>
            Tell us about your current tools, workflows, and manual processes. Digital Enterprise Group can review your operations, identify automation opportunities, and recommend a practical path forward.
          </p>
          <div className="contact-proof-row">
            <span><CheckCircle2 size={16} /> Business Automation</span>
            <span><CheckCircle2 size={16} /> CRM Architecture and Implementation</span>
            <span><CheckCircle2 size={16} /> Web App Integration</span>
          </div>
          <div className="contact-list modern-contact-list">
            <a href="mailto:contact@digitalenterprisegroup.com"><Mail size={18} /> contact@digitalenterprisegroup.com</a>
            <a href="tel:+17028619024"><Phone size={18} /> 702-861-9024</a>
            <a href="https://maps.app.goo.gl/4D1fq97XYwLBCDhQ6" target="_blank" rel="noreferrer"><MapPin size={18} /> View location on Google Maps</a>
          </div>
        </motion.div>
        <motion.form
          className="contact-panel contact-form modern-contact-form"
          {...fadeUp(0.12)}
          onSubmit={handleSubmit}
        >
          <div className="form-topbar">
            <div className="window-dots"><i /><i /><i /></div>
            <span>Secure system request</span>
          </div>
          <div className="form-heading-wrap">
            <span className="eyebrow">Send a message</span>
            <h3>Tell us what you want to automate.</h3>
            <p>Answer a few details and we will turn your process into a practical system direction.</p>
          </div>

          <input type="hidden" name="startedAt" value={startedAt} />
          <label className="bot-field" aria-hidden="true" tabIndex={-1}>
            <span>Website</span>
            <input type="text" name="website" autoComplete="off" tabIndex={-1} />
          </label>

          <div className="form-grid">
            <label>
              <span>Name</span>
              <input type="text" name="name" placeholder="Your name" autoComplete="name" required />
            </label>
            <label>
              <span>Email</span>
              <input type="email" name="email" placeholder="you@email.com" autoComplete="email" required />
            </label>
            <label>
              <span>Company</span>
              <input type="text" name="company" placeholder="Company name" autoComplete="organization" />
            </label>
            <label>
              <span>Service</span>
              <select name="service" defaultValue={defaultService}>
                <option value="" disabled>Select service</option>
                <option>CRM Automation Services</option>
                <option>Workflow Automation Services</option>
                <option>Web App Integration Services</option>
                <option>Marketing Automation Services</option>
                <option>Business Process Automation</option>
                <option>SEO Integration</option>
                <option>Lead Generation</option>
                <option>Email Scheduling</option>
                <option>Ads Integration</option>
                <option>Data Migration</option>
              </select>
            </label>
          </div>
          <label className="message-field">
            <span>Message</span>
            <textarea name="message" rows={5} placeholder="Example: We need help automating leads, follow-ups, CRM updates, reports, or approvals." required />
          </label>
          <div className="form-footer-row">
            <small>No pressure — just a clear first look at your workflow.</small>
            <button type="submit" className="form-submit" disabled={formStatus === "sending"}>
              {formStatus === "sending" ? "Sending..." : "Send inquiry"} <ArrowUpRight size={17} />
            </button>
          </div>
          {formMessage && (
            <p className={`form-status form-status-${formStatus}`} role="status" aria-live="polite">
              {formMessage}
            </p>
          )}
        </motion.form>
      </div>
    </section>
  );
}


function PlatformsShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const activePlatform = platformLogos[activeIndex];

  const goTo = (direction: 1 | -1) => {
    setActiveIndex((current) => (current + direction + platformLogos.length) % platformLogos.length);
  };

  useEffect(() => {
    if (isPaused) return;
    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % platformLogos.length);
    }, 2600);
    return () => window.clearInterval(timer);
  }, [isPaused]);

  return (
    <section
      id="platforms"
      className="dao-platform-section"
      aria-label="Trusted platforms Digital Enterprise Group works with"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="dao-platform-bg" aria-hidden="true">
        <span />
        <span />
        <span />
      </div>

      <div className="dao-platform-head">
        <motion.span className="dao-platform-kicker" {...fadeUp(0)}>// Platform ecosystem</motion.span>
        <motion.h2 {...fadeUp(0.05)}>TOOLS THAT POWER YOUR WORKFLOWS.</motion.h2>
        <motion.p {...fadeUp(0.1)}>
          From CRM and automation to email, project management, sales pipelines, and marketing platforms, DEG helps connect the tools your business already uses.
        </motion.p>
      </div>

      <motion.div
        className="dao-platform-stage"
        initial={{ opacity: 0, y: 40, filter: "blur(18px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        viewport={{ once: true, margin: "-120px" }}
        transition={{ duration: 0.95, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="dao-platform-topline">
          <span>Trusted systems</span>
          <span>{String(activeIndex + 1).padStart(2, "0")} / {String(platformLogos.length).padStart(2, "0")}</span>
        </div>

        <div className="dao-platform-slider" aria-live="polite">
          <button className="dao-platform-arrow left" type="button" onClick={() => goTo(-1)} aria-label="Previous platform">
            <ChevronRight size={20} />
          </button>

          <div className="dao-platform-window">
            {platformLogos.map((platform, index) => {
              let offset = index - activeIndex;
              if (offset > platformLogos.length / 2) offset -= platformLogos.length;
              if (offset < -platformLogos.length / 2) offset += platformLogos.length;
              const visible = Math.abs(offset) <= 1;

              return (
                <motion.button
                  type="button"
                  key={platform.title}
                  className={`dao-platform-logo ${offset === 0 ? "is-active" : ""}`}
                  onClick={() => setActiveIndex(index)}
                  aria-label={`Preview ${platform.title}`}
                  animate={{
                    x: offset * 320,
                    y: Math.abs(offset) * 18,
                    scale: offset === 0 ? 1.08 : 0.68,
                    opacity: visible ? (offset === 0 ? 1 : 0.36) : 0,
                    filter: offset === 0 ? "blur(0px) grayscale(0%)" : "blur(1.5px) grayscale(100%)",
                    zIndex: 20 - Math.abs(offset),
                  }}
                  whileHover={{ scale: offset === 0 ? 1.13 : 0.76, opacity: 1, filter: "blur(0px) grayscale(0%)" }}
                  transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
                  style={{ pointerEvents: visible ? "auto" : "none" }}
                >
                  <img src={platform.image} alt={`${platform.title} logo`} loading="lazy" />
                </motion.button>
              );
            })}
          </div>

          <button className="dao-platform-arrow right" type="button" onClick={() => goTo(1)} aria-label="Next platform">
            <ChevronRight size={20} />
          </button>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activePlatform.title}
            className="dao-platform-caption"
            initial={{ opacity: 0, y: 16, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: -14, filter: "blur(10px)" }}
            transition={{ duration: 0.42, ease: [0.16, 1, 0.3, 1] }}
          >
            <span>{activePlatform.title}</span>
            <p>Platform used for connected workflows, automation, CRM visibility, or marketing operations.</p>
          </motion.div>
        </AnimatePresence>

        <div className="dao-platform-dots" aria-label="Platform slider navigation">
          {platformLogos.map((platform, index) => (
            <button
              type="button"
              key={`dot-${platform.title}`}
              className={activeIndex === index ? "is-active" : undefined}
              onClick={() => setActiveIndex(index)}
              aria-label={`Go to ${platform.title}`}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
}

function ProcessClone() {
  const ref = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 62, damping: 24, mass: 0.42 });
  const x = useTransform(smoothProgress, [0, 1], ["0%", "-80%"]);
  const progressScale = useTransform(smoothProgress, [0, 1], [0, 1]);

  return (
    <section ref={ref} id="process" className="ag-process-section" aria-label="Digital Enterprise Group process">
      <div className="ag-process-sticky">
        <motion.div className="ag-process-track" style={{ x }}>
          <section className="ag-process-panel ag-process-intro" aria-label="Process introduction">
            <div className="ag-process-intro-top">
              <motion.span className="ag-kicker" {...fadeUp(0)}>// Our Process</motion.span>
              <motion.h2 {...fadeUp(0.06)}>
                From audit to automation, we turn scattered tools into one cleaner growth system.
              </motion.h2>
              <motion.p className="ag-process-intro-copy" {...fadeUp(0.1)}>
                A practical four-step path for mapping the work, building the CRM structure, connecting the automations, and scaling with clearer dashboards.
              </motion.p>
              <motion.div className="ag-process-actions" {...fadeUp(0.14)}>
                <button type="button">Discover</button>
                <button type="button">Build</button>
                <button type="button">Automate</button>
                <button type="button">Scale</button>
              </motion.div>
            </div>
            <div className="ag-process-intro-bottom">
              <span>Digital Enterprise Group</span>
              <span>Automation process / CRM / Growth systems</span>
            </div>
          </section>

          {processSteps.map((step) => (
            <section className="ag-process-panel ag-process-card" key={step.id} aria-label={`${step.label} process step`}>
              <div className="ag-card-meta">
                <span>{step.type}</span>
                <span>{step.metric}</span>
                <span className="desktop-meta">Digital Growth System</span>
              </div>

              <div className="ag-card-main">
                <motion.div
                  className="ag-card-number"
                  initial={{ opacity: 0, y: 46, rotate: -1.5 }}
                  whileInView={{ opacity: 1, y: 0, rotate: 0 }}
                  viewport={{ once: false, amount: 0.45 }}
                  transition={{ duration: 0.95, ease: [0.16, 1, 0.3, 1] }}
                >
                  {step.id}
                </motion.div>

                <div className="ag-card-copy">
                  <motion.span
                    initial={{ opacity: 0, y: 18, filter: "blur(8px)" }}
                    whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    viewport={{ once: false, amount: 0.45 }}
                    transition={{ duration: 0.7, delay: 0.08 }}
                  >
                    {step.eyebrow}
                  </motion.span>
                  <motion.h3
                    initial={{ opacity: 0, y: 32, filter: "blur(10px)" }}
                    whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    viewport={{ once: false, amount: 0.45 }}
                    transition={{ duration: 0.95, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
                  >
                    {step.title}
                  </motion.h3>
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.45 }}
                    transition={{ duration: 0.75, delay: 0.2 }}
                  >
                    {step.detail}
                  </motion.p>
                </div>
              </div>

              <div className="ag-card-visual-wrap">
                <span>{step.label} SYSTEM</span>
                <motion.div
                  className="ag-system-visual"
                  initial={false}
                  animate={{ clipPath: "inset(0 0% 0 0)", opacity: 1 }}
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
                >
                  <div className="ag-system-window">
                    <div className="ag-system-window-top">
                      <i />
                      <i />
                      <i />
                      <span>{step.label.toLowerCase()} protocol</span>
                    </div>
                    <div className="ag-system-window-body">
                      <strong>{step.id.padStart(2, "0")}</strong>
                      <div>
                        <b>{step.title}</b>
                        <em>{step.metric}</em>
                      </div>
                    </div>
                    <div className="ag-system-lines">
                      {step.modules.map((module) => (
                        <span key={module}>{module}</span>
                      ))}
                    </div>
                  </div>
                  <div className="ag-system-orbit" />
                </motion.div>
              </div>
            </section>
          ))}
        </motion.div>

        <div className="ag-process-progress" aria-hidden="true">
          <motion.span style={{ scaleX: progressScale }} />
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div>
        <a href="/" aria-label="Digital Enterprise Group home">
          <img src="/assets/deg-logo-glass.png" alt="Digital Enterprise Group" />
        </a>
        <span>© 2026 Digital Enterprise Group. All rights reserved.</span>
      </div>
      <div>
        <a href="/#services">Services</a>
        <a href="/crm-automation/">CRM Automation</a>
        <a href="/workflow-automation/">Workflow Automation</a>
        <a href="/web-app-integrations/">Web App Integrations</a>
        <a href="/marketing-automation/">Marketing Automation</a>
        <a href="/#contact">Contact</a>
      </div>
    </footer>
  );
}

const serviceIconMap = {
  "crm-automation": Users,
  "workflow-automation": Workflow,
  "web-app-integrations": PlugZap,
  "marketing-automation": Megaphone,
  "business-process-automation": BriefcaseBusiness,
} as const;

function ServiceSystemVisual({ page }: { page: ServicePage }) {
  const Icon = serviceIconMap[page.slug as keyof typeof serviceIconMap] || Zap;
  const visualRef = useRef<HTMLDivElement | null>(null);
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const rotateX = useSpring(useTransform(pointerY, [-180, 180], [7, -7]), { stiffness: 140, damping: 20 });
  const rotateY = useSpring(useTransform(pointerX, [-220, 220], [-8, 8]), { stiffness: 140, damping: 20 });
  const glowX = useTransform(pointerX, [-220, 220], [25, 75]);
  const glowY = useTransform(pointerY, [-180, 180], [25, 75]);

  const handlePointerMove = (event: PointerEvent<HTMLDivElement>) => {
    const rect = visualRef.current?.getBoundingClientRect();
    if (!rect) return;
    pointerX.set(event.clientX - rect.left - rect.width / 2);
    pointerY.set(event.clientY - rect.top - rect.height / 2);
  };

  const resetPointer = () => {
    pointerX.set(0);
    pointerY.set(0);
  };

  return (
    <motion.div
      ref={visualRef}
      className="service-detail-visual"
      initial={{ opacity: 0, scale: 0.94, y: 34 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.95, delay: 0.14, ease: [0.16, 1, 0.3, 1] }}
      style={{ rotateX, rotateY, transformPerspective: 1200 }}
      onPointerMove={handlePointerMove}
      onPointerLeave={resetPointer}
      aria-label={`${page.serviceLabel} system visualization`}
    >
      <motion.div className="service-visual-pointer-glow" style={{ left: glowX, top: glowY }} aria-hidden="true" />
      <div className="service-visual-grid" aria-hidden="true" />
      <div className="service-visual-topline">
        <span>// DEG SYSTEM BLUEPRINT</span>
        <i>ACTIVE</i>
      </div>
      <motion.div
        className="service-visual-core"
        animate={{ boxShadow: ["0 0 0 rgba(201,130,107,0)", "0 0 56px rgba(201,130,107,.3)", "0 0 0 rgba(201,130,107,0)"] }}
        transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
      >
        <Icon size={34} />
        <span>{page.serviceLabel}</span>
      </motion.div>
      <div className="service-visual-nodes">
        {page.metrics.map((metric, index) => (
          <motion.div
            key={metric.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ y: -7, borderColor: "rgba(212,154,133,.42)" }}
            transition={{ duration: 0.6, delay: 0.4 + index * 0.12 }}
          >
            <strong>{metric.value}</strong>
            <span>{metric.label}</span>
          </motion.div>
        ))}
      </div>
      <div className="service-visual-flow" aria-hidden="true">
        <motion.i animate={{ x: [0, 260, 0] }} transition={{ duration: 4.4, repeat: Infinity, ease: "easeInOut" }} />
      </div>
      <p>{page.accentLabel}</p>
    </motion.div>
  );
}

function ServiceProcessExperience({ page }: { page: ServicePage }) {
  const [activeStep, setActiveStep] = useState(0);
  const processIcons = [SearchCheck, Layers3, PlugZap, Rocket];
  const active = page.process[activeStep] || page.process[0];
  const ActiveIcon = processIcons[activeStep % processIcons.length];

  return (
    <div className="service-process-experience">
      <div className="service-process-nav" role="tablist" aria-label={`${page.eyebrow} process steps`}>
        {page.process.map((item, index) => (
          <button
            key={item.step}
            type="button"
            role="tab"
            aria-selected={activeStep === index}
            className={activeStep === index ? "is-active" : ""}
            onMouseEnter={() => setActiveStep(index)}
            onFocus={() => setActiveStep(index)}
            onClick={() => setActiveStep(index)}
          >
            <span>{item.step}</span>
            <strong>{item.title}</strong>
            <i aria-hidden="true" />
          </button>
        ))}
      </div>

      <motion.article
        key={`${page.slug}-${activeStep}`}
        className="service-process-stage"
        initial={{ opacity: 0, y: 24, filter: "blur(9px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 0.48, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="service-process-stage-top">
          <span>// STEP {active.step}</span>
          <b>{String(activeStep + 1).padStart(2, "0")} / {String(page.process.length).padStart(2, "0")}</b>
        </div>
        <div className="service-process-stage-icon"><ActiveIcon size={38} /></div>
        <h3>{active.title}</h3>
        <p>{active.text}</p>
        <div className="service-process-stage-signal" aria-hidden="true">
          <motion.i
            key={activeStep}
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.25, ease: [0.16, 1, 0.3, 1] }}
          />
        </div>
        <small>Process clarity · System configuration · Team adoption</small>
      </motion.article>
    </div>
  );
}

function ServicePageView({ page }: { page: ServicePage }) {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = page.metaTitle;

    const description = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    if (description) description.content = page.metaDescription;

    const canonical = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (canonical) canonical.href = `https://www.digitalenterprisegroup.com${page.path}`;
  }, [page]);

  const Icon = serviceIconMap[page.slug as keyof typeof serviceIconMap] || Zap;
  const relatedPages = page.related
    .map((slug) => servicePageMap.get(slug))
    .filter((item): item is ServicePage => Boolean(item));

  return (
    <div className="app-shell service-page-app">
      <ScrollProgress />
      <Header />
      <main>
        <section id="service-top" className="service-detail-hero">
          <div className="service-detail-hero-glow service-detail-hero-glow-one" />
          <div className="service-detail-hero-glow service-detail-hero-glow-two" />
          <div className="service-detail-shell service-detail-hero-grid">
            <motion.div
              className="service-detail-hero-copy"
              initial={{ opacity: 0, y: 36, filter: "blur(14px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
            >
              <nav className="service-breadcrumbs" aria-label="Breadcrumb">
                <a href="/">Home</a><ChevronRight size={14} /><a href="/#services">Services</a><ChevronRight size={14} /><span>{page.eyebrow}</span>
              </nav>
              <span className="eyebrow dark-eyebrow">{page.eyebrow}</span>
              <h1>{page.title}</h1>
              <p className="service-detail-lead">{page.heroLead}</p>
              <div className="service-detail-actions">
                <MagneticButton onClick={() => scrollToId("#contact")}>Discuss your system <ArrowUpRight size={18} /></MagneticButton>
                <button className="service-detail-text-link" type="button" onClick={() => scrollToId("#deliverables")}>
                  Explore deliverables <ChevronRight size={17} />
                </button>
              </div>
              <div className="service-detail-trustline">
                <span><ShieldCheck size={17} /> Las Vegas-based digital systems team</span>
                <span><CheckCircle2 size={17} /> Practical implementation and support</span>
              </div>
            </motion.div>
            <ServiceSystemVisual page={page} />
          </div>
        </section>

        <section className="service-keyword-band" aria-label={`${page.primaryKeyword} overview`}>
          <div className="service-detail-shell">
            <span>{page.primaryKeyword}</span>
            <p>{page.shortDescription}</p>
          </div>
        </section>

        <section className="service-kinetic-strip" aria-label={`${page.eyebrow} workflow examples`}>
          <motion.div
            className="service-kinetic-track"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
          >
            {[...page.useCases, ...page.useCases].map((item, index) => (
              <span key={`${item}-${index}`}><i>{String((index % page.useCases.length) + 1).padStart(2, "0")}</i>{item}</span>
            ))}
          </motion.div>
        </section>

        <section className="service-detail-section service-problem-section">
          <div className="service-detail-shell">
            <motion.div className="service-detail-heading" {...fadeUp()}>
              <span className="eyebrow">Where the process breaks</span>
              <h2>Manual systems create hidden delays and inconsistent work.</h2>
              <p>These are common signs that the current process needs clearer structure, connected data, and purposeful automation.</p>
            </motion.div>
            <div className="service-challenge-grid">
              {page.challenges.map((item, index) => (
                <motion.article key={item.title} {...fadeUp(index * 0.07)}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section className="service-detail-section service-outcomes-section">
          <div className="service-detail-shell service-outcomes-layout">
            <motion.div className="service-outcomes-intro" {...fadeUp()}>
              <span className="eyebrow dark-eyebrow">System outcomes</span>
              <h2>A more connected way to manage the work.</h2>
              <p>Automation should support your team—not create another system to babysit. We focus on practical outcomes that improve daily visibility, ownership, and follow-through.</p>
              <div className="service-outcomes-icon"><Icon size={42} /></div>
            </motion.div>
            <div className="service-outcomes-list">
              {page.outcomes.map((item, index) => (
                <motion.article key={item.title} {...fadeUp(index * 0.08)}>
                  <CheckCircle2 size={23} />
                  <div><h3>{item.title}</h3><p>{item.text}</p></div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section id="deliverables" className="service-detail-section service-deliverables-section">
          <div className="service-detail-shell">
            <motion.div className="service-detail-heading is-centered" {...fadeUp()}>
              <span className="eyebrow">What we can build</span>
              <h2>{page.eyebrow} deliverables.</h2>
              <p>The final scope is based on your systems and priorities. A project may include some or all of the following components.</p>
            </motion.div>
            <div className="service-deliverables-grid">
              {page.deliverables.map((item, index) => (
                <motion.article
                  key={item.title}
                  initial={{ opacity: 0, y: 35, scale: 0.97 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.7, delay: index * 0.06, ease: [0.16, 1, 0.3, 1] }}
                >
                  <div className="service-deliverable-number">// {String(index + 1).padStart(2, "0")}</div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                  <div>{item.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section className="service-detail-section service-use-cases-section">
          <div className="service-detail-shell service-use-cases-layout">
            <motion.div className="service-use-cases-copy" {...fadeUp()}>
              <span className="eyebrow dark-eyebrow">Common use cases</span>
              <h2>Start with the process that creates the most friction.</h2>
              <p>You do not need to automate everything at once. A focused first system can reduce immediate pain while creating a foundation for future improvements.</p>
              <a href="/#contact">Talk through your priority <ArrowUpRight size={17} /></a>
            </motion.div>
            <motion.div className="service-use-case-cloud" {...fadeUp(0.12)}>
              {page.useCases.map((item, index) => (
                <motion.span key={item} whileHover={{ y: -4, scale: 1.02 }} transition={{ duration: 0.2 }}>
                  <i>{String(index + 1).padStart(2, "0")}</i>{item}
                </motion.span>
              ))}
            </motion.div>
          </div>
        </section>

        <section id="service-process" className="service-detail-section service-process-section">
          <div className="service-detail-shell">
            <motion.div className="service-detail-heading" {...fadeUp()}>
              <span className="eyebrow">Our process</span>
              <h2>From business problem to working system.</h2>
              <p>We begin with the process and the people involved, then select and configure the technology that supports the work.</p>
            </motion.div>
            <ServiceProcessExperience page={page} />
          </div>
        </section>

        <section className="service-platform-strip" aria-label="Platforms and integration experience">
          <div className="service-detail-shell">
            <span>Platform experience</span>
            <div>
              {platformLogos.map((platform) => (
                <figure key={platform.title}>
                  <img src={platform.image} alt={`${platform.title} platform logo`} loading="lazy" />
                  <figcaption>{platform.title}</figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section className="service-detail-section service-faq-section">
          <div className="service-detail-shell service-faq-layout">
            <motion.div className="service-faq-heading" {...fadeUp()}>
              <span className="eyebrow dark-eyebrow">Frequently asked questions</span>
              <h2>Questions about {page.eyebrow.toLowerCase()}.</h2>
              <p>Every implementation is different, but these answers cover common planning questions.</p>
            </motion.div>
            <div className="service-faq-list">
              {page.faqs.map((faq, index) => (
                <motion.details key={faq.question} {...fadeUp(index * 0.06)}>
                  <summary><span>{String(index + 1).padStart(2, "0")}</span>{faq.question}<i>+</i></summary>
                  <p>{faq.answer}</p>
                </motion.details>
              ))}
            </div>
          </div>
        </section>

        <section className="service-detail-section related-services-section">
          <div className="service-detail-shell">
            <motion.div className="service-detail-heading" {...fadeUp()}>
              <span className="eyebrow">Related services</span>
              <h2>Build the next connected layer.</h2>
            </motion.div>
            <div className="related-services-grid">
              {relatedPages.map((related, index) => {
                const RelatedIcon = serviceIconMap[related.slug as keyof typeof serviceIconMap] || Layers3;
                return (
                  <motion.a key={related.slug} href={related.path} {...fadeUp(index * 0.08)}>
                    <RelatedIcon size={28} />
                    <span>{related.eyebrow}</span>
                    <h3>{related.title}</h3>
                    <p>{related.shortDescription}</p>
                    <strong>Explore service <ArrowUpRight size={16} /></strong>
                  </motion.a>
                );
              })}
            </div>
          </div>
        </section>

        <Contact defaultService={page.eyebrow} />
      </main>
      <Footer />
    </div>
  );
}

function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? (window.scrollY / max) * 100 : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return <div className="scroll-progress" style={{ width: `${progress}%` }} />;
}

export default function App() {
  const servicePage = typeof window === "undefined" ? undefined : getServicePageByPath(window.location.pathname);

  if (servicePage) {
    return <ServicePageView page={servicePage} />;
  }

  return (
    <div className="app-shell">
      <ScrollProgress />
      <Header />
      <main>
        <Hero />
        <MarqueeBand />
        <Stats />
        <TrustedBusinesses />
        <Automation />
        <Services />
        <Capabilities />
        <PlatformsShowcase />
        <Projects />
        <ProcessClone />
        <About />
        <WhyChooseUs />
        <WideCta />
        <Certificates />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
