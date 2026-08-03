export type ServicePage = {
  slug: string;
  path: string;
  eyebrow: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  shortDescription: string;
  heroLead: string;
  primaryKeyword: string;
  serviceLabel: string;
  accentLabel: string;
  metrics: Array<{ value: string; label: string }>;
  challenges: Array<{ title: string; text: string }>;
  outcomes: Array<{ title: string; text: string }>;
  deliverables: Array<{ title: string; text: string; tags: string[] }>;
  process: Array<{ step: string; title: string; text: string }>;
  useCases: string[];
  faqs: Array<{ question: string; answer: string }>;
  related: string[];
};

export const servicePages: ServicePage[] = [
  {
    slug: "crm-automation",
    path: "/crm-automation/",
    eyebrow: "CRM Automation Services",
    title: "CRM automation that keeps every lead moving.",
    metaTitle: "CRM Automation Services | Digital Enterprise Group",
    metaDescription:
      "Build a cleaner CRM with automated lead routing, follow-ups, pipelines, reporting, and integrations from Digital Enterprise Group.",
    shortDescription:
      "Design a practical CRM system for contacts, deals, follow-ups, team ownership, and reporting—without relying on scattered spreadsheets or manual reminders.",
    heroLead:
      "Digital Enterprise Group plans, configures, and connects CRM systems around the way your team actually sells and serves customers. We help turn disconnected lead sources, inconsistent follow-ups, and unclear pipelines into one structured operating system.",
    primaryKeyword: "CRM automation services",
    serviceLabel: "CRM Architecture",
    accentLabel: "Leads → Pipeline → Follow-up",
    metrics: [
      { value: "01", label: "Central customer record" },
      { value: "02", label: "Automated lead routing" },
      { value: "03", label: "Visible sales pipeline" },
    ],
    challenges: [
      { title: "Leads live in too many places", text: "Forms, inboxes, spreadsheets, and messages make it difficult to maintain a complete customer record." },
      { title: "Follow-ups depend on memory", text: "Opportunities stall when reminders, assignments, and next steps are handled manually." },
      { title: "Pipeline stages are unclear", text: "Teams cannot confidently see which deals need action, who owns them, or what is blocking progress." },
      { title: "Reports do not match reality", text: "Incomplete data and inconsistent updates make forecasting and performance reviews unreliable." },
    ],
    outcomes: [
      { title: "One source of truth", text: "Keep contacts, conversations, deals, notes, files, and activity history in a structured CRM environment." },
      { title: "Consistent lead handling", text: "Route leads, create tasks, send notifications, and trigger follow-ups based on clear business rules." },
      { title: "Better team visibility", text: "Give managers and team members a shared view of pipeline health, ownership, and next actions." },
      { title: "Systems built to scale", text: "Use fields, stages, permissions, and automations that can grow with new users, services, and locations." },
    ],
    deliverables: [
      { title: "CRM architecture and setup", text: "Map contacts, companies, deals, lifecycle stages, custom fields, ownership rules, and permissions.", tags: ["Architecture", "Fields", "Permissions"] },
      { title: "Lead capture and routing", text: "Connect forms and lead sources, then assign records based on source, service, territory, or workload.", tags: ["Forms", "Routing", "Assignments"] },
      { title: "Pipeline automation", text: "Create stage-based tasks, reminders, internal alerts, follow-up sequences, and handoff rules.", tags: ["Stages", "Tasks", "Follow-ups"] },
      { title: "Data migration and cleanup", text: "Prepare and move contacts, companies, deals, notes, and historical records from older systems.", tags: ["Migration", "Cleanup", "Mapping"] },
      { title: "Dashboards and reporting", text: "Build practical views for activity, pipeline movement, source performance, and conversion monitoring.", tags: ["Dashboards", "KPIs", "Visibility"] },
      { title: "Training and documentation", text: "Help your team understand daily CRM use, ownership expectations, and the automated workflow behind it.", tags: ["Training", "SOPs", "Adoption"] },
    ],
    process: [
      { step: "01", title: "Audit", text: "Review your current sales process, lead sources, data, tools, and reporting requirements." },
      { step: "02", title: "Architect", text: "Define the CRM structure, stages, fields, ownership rules, and automation plan." },
      { step: "03", title: "Implement", text: "Configure the platform, migrate data, connect lead sources, and build workflows." },
      { step: "04", title: "Refine", text: "Test with real scenarios, train users, document the process, and improve reporting." },
    ],
    useCases: ["Website lead routing", "Sales pipeline management", "Automated follow-up reminders", "Client onboarding handoffs", "Lead source tracking", "Renewal and re-engagement workflows", "Sales activity reporting", "CRM migration and cleanup"],
    faqs: [
      { question: "Can you improve an existing CRM instead of replacing it?", answer: "Yes. We can audit the current setup, clean up fields and pipelines, improve automation, and connect missing tools before recommending a platform change." },
      { question: "Which CRM platforms can you work with?", answer: "The right platform depends on your process, users, budget, and integration needs. Our experience includes systems such as HubSpot, Keap, Pipedrive, GoHighLevel, and Monday CRM." },
      { question: "Can you migrate our spreadsheet or old CRM data?", answer: "Yes. Data migration can include field mapping, cleanup, duplicate review, import preparation, and validation after the move." },
      { question: "Will our team receive training?", answer: "Training and practical documentation can be included so users understand the pipeline, required fields, daily tasks, and automated actions." },
    ],
    related: ["workflow-automation", "web-app-integrations", "marketing-automation"],
  },
  {
    slug: "workflow-automation",
    path: "/workflow-automation/",
    eyebrow: "Workflow Automation Services",
    title: "Workflow automation built around how your team works.",
    metaTitle: "Workflow Automation Services | Digital Enterprise Group",
    metaDescription:
      "Automate approvals, task routing, reminders, onboarding, invoicing, and team handoffs with Digital Enterprise Group.",
    shortDescription:
      "Replace repetitive steps and unclear handoffs with connected workflows that assign work, trigger updates, and keep processes moving.",
    heroLead:
      "Digital Enterprise Group turns repeated business processes into clear, trackable workflows. We map the work first, then use automation to reduce manual entry, missed steps, status chasing, and disconnected communication.",
    primaryKeyword: "workflow automation services",
    serviceLabel: "Workflow Systems",
    accentLabel: "Trigger → Route → Complete",
    metrics: [
      { value: "01", label: "Clear process ownership" },
      { value: "02", label: "Fewer manual handoffs" },
      { value: "03", label: "Real-time status visibility" },
    ],
    challenges: [
      { title: "Tasks are created manually", text: "Team members spend time copying information, assigning work, and updating the same status in several tools." },
      { title: "Approvals slow everything down", text: "Requests wait in inboxes because reviewers are not notified or the next step is unclear." },
      { title: "Handoffs create gaps", text: "Important context is lost when work moves between sales, operations, finance, and service teams." },
      { title: "Managers chase updates", text: "Without a shared workflow, leaders depend on meetings and messages to understand progress." },
    ],
    outcomes: [
      { title: "Automatic next steps", text: "Create tasks, notifications, approvals, records, and reminders as soon as defined conditions are met." },
      { title: "Stronger accountability", text: "Make ownership, due dates, status, and escalation paths visible throughout the process." },
      { title: "Cleaner handoffs", text: "Carry the right information from one team or platform to the next without repeated data entry." },
      { title: "Operational visibility", text: "Track workload, bottlenecks, completion times, and exceptions from shared dashboards." },
    ],
    deliverables: [
      { title: "Process mapping", text: "Document the current workflow, decision points, owners, inputs, outputs, and recurring delays.", tags: ["Discovery", "Mapping", "Owners"] },
      { title: "Trigger and routing logic", text: "Define what starts the workflow, where work goes, and which conditions change the path.", tags: ["Triggers", "Conditions", "Routing"] },
      { title: "Task and approval automation", text: "Create assignments, deadlines, reminders, review steps, and escalation notifications.", tags: ["Tasks", "Approvals", "Alerts"] },
      { title: "Cross-platform handoffs", text: "Connect the systems involved so records and status changes move without manual copying.", tags: ["Sync", "Integrations", "Handoffs"] },
      { title: "Dashboards and exceptions", text: "Surface progress, overdue work, blockers, and unusual cases that require human attention.", tags: ["Dashboards", "Exceptions", "KPIs"] },
      { title: "SOPs and team rollout", text: "Document the new process and support adoption with clear roles, testing, and practical training.", tags: ["SOPs", "Testing", "Adoption"] },
    ],
    process: [
      { step: "01", title: "Map", text: "Identify each step, owner, tool, decision, and delay in the current process." },
      { step: "02", title: "Simplify", text: "Remove unnecessary steps and decide which actions require people versus automation." },
      { step: "03", title: "Automate", text: "Build triggers, conditions, tasks, alerts, approvals, and connected records." },
      { step: "04", title: "Monitor", text: "Test edge cases, measure the workflow, and refine bottlenecks over time." },
    ],
    useCases: ["Employee onboarding", "Client onboarding", "Request and approval management", "Invoice and accounts payable routing", "Contract and proposal workflows", "Recruitment coordination", "Operations checklists", "Follow-up and escalation reminders"],
    faqs: [
      { question: "Which processes are good candidates for automation?", answer: "Processes that repeat, follow defined rules, use consistent data, or require frequent reminders and handoffs are usually strong candidates." },
      { question: "Do we need to replace our current project management tool?", answer: "Not necessarily. We first review whether your existing tools can support the workflow through better configuration and integrations." },
      { question: "Can a workflow still include human approvals?", answer: "Yes. Automation can route a request to the correct reviewer, provide context, set deadlines, and continue only after a person approves or rejects it." },
      { question: "How do you handle exceptions?", answer: "We define exception paths, alerts, and manual review steps so unusual cases do not disappear inside an automated process." },
    ],
    related: ["business-process-automation", "web-app-integrations", "crm-automation"],
  },
  {
    slug: "web-app-integrations",
    path: "/web-app-integrations/",
    eyebrow: "Web App Integration Services",
    title: "Connect the tools your business already depends on.",
    metaTitle: "Web App Integration Services | Digital Enterprise Group",
    metaDescription:
      "Connect CRMs, forms, calendars, payments, project tools, and dashboards with reliable web app integrations and automation.",
    shortDescription:
      "Create a connected technology stack where customer data, tasks, payments, notifications, and reports move between systems with less manual work.",
    heroLead:
      "Digital Enterprise Group connects websites, web apps, CRMs, project platforms, calendars, payment tools, and communication systems. The goal is not integration for its own sake—it is a cleaner flow of information across the work your team already performs.",
    primaryKeyword: "web app integration services",
    serviceLabel: "Connected Systems",
    accentLabel: "Capture → Sync → Act",
    metrics: [
      { value: "01", label: "Connected business data" },
      { value: "02", label: "Fewer duplicate updates" },
      { value: "03", label: "Faster system handoffs" },
    ],
    challenges: [
      { title: "Tools operate in isolation", text: "Your CRM, forms, project platform, email, and finance tools each hold part of the process." },
      { title: "Data is copied repeatedly", text: "Team members re-enter the same customer, order, or project information across several systems." },
      { title: "Updates arrive too late", text: "A delay between systems can lead to missed follow-ups, inaccurate reports, and inconsistent records." },
      { title: "Integration errors are invisible", text: "Failed automations are difficult to notice without validation, logs, and exception handling." },
    ],
    outcomes: [
      { title: "Connected customer journeys", text: "Move data from website forms and campaigns into CRM, scheduling, delivery, and reporting systems." },
      { title: "Less duplicate entry", text: "Sync approved fields and status changes so teams do not repeat the same update across tools." },
      { title: "Reliable handoffs", text: "Trigger the correct action when a record is created, updated, approved, paid, booked, or completed." },
      { title: "Integration visibility", text: "Use validation, error alerts, logs, and fallback steps to make connected workflows easier to manage." },
    ],
    deliverables: [
      { title: "Integration architecture", text: "Define source systems, destinations, data ownership, field mappings, and sync direction.", tags: ["Architecture", "Mapping", "Ownership"] },
      { title: "API and connector setup", text: "Configure native connectors, webhooks, middleware, or supported APIs based on the systems involved.", tags: ["APIs", "Webhooks", "Connectors"] },
      { title: "Data transformation", text: "Format, filter, enrich, and validate information before it moves into another platform.", tags: ["Transform", "Filter", "Validate"] },
      { title: "Workflow orchestration", text: "Coordinate multiple actions, decisions, delays, approvals, and notifications across connected tools.", tags: ["Orchestration", "Logic", "Actions"] },
      { title: "Error handling and monitoring", text: "Add alerts, logs, retry paths, and human review for failed or incomplete transactions.", tags: ["Monitoring", "Retries", "Alerts"] },
      { title: "Documentation and support", text: "Document connections, credentials ownership, field logic, and support procedures for your team.", tags: ["Docs", "Support", "Governance"] },
    ],
    process: [
      { step: "01", title: "Inventory", text: "Identify the systems, data, triggers, users, and security requirements involved." },
      { step: "02", title: "Design", text: "Choose the integration method and define mappings, timing, validation, and ownership." },
      { step: "03", title: "Connect", text: "Build and test the integration with realistic records and edge cases." },
      { step: "04", title: "Monitor", text: "Launch with logging, alerts, documentation, and a plan for future platform changes." },
    ],
    useCases: ["Website form to CRM", "CRM to project management", "Payment to onboarding workflow", "Calendar and scheduling sync", "Lead source enrichment", "Customer notification workflows", "Dashboard data consolidation", "Document and signature handoffs"],
    faqs: [
      { question: "Can you connect tools that do not have a native integration?", answer: "Sometimes. Depending on the platforms, we may use supported APIs, webhooks, middleware, file exchange, or a carefully designed alternative workflow." },
      { question: "Do you work with Make and Zapier?", answer: "Yes. We can use integration platforms such as Make and Zapier when they fit the volume, logic, reliability, and maintenance requirements." },
      { question: "How do you prevent duplicate records?", answer: "Integration design can include unique identifiers, lookup steps, update-versus-create rules, validation, and exception handling." },
      { question: "Can integrations be monitored after launch?", answer: "Yes. Monitoring may include logs, alerts, retry paths, and documentation so failed transactions can be found and resolved." },
    ],
    related: ["workflow-automation", "crm-automation", "business-process-automation"],
  },
  {
    slug: "marketing-automation",
    path: "/marketing-automation/",
    eyebrow: "Marketing Automation Services",
    title: "Marketing automation that connects campaigns to follow-up.",
    metaTitle: "Marketing Automation Services | Digital Enterprise Group",
    metaDescription:
      "Connect lead capture, segmentation, email, CRM follow-up, campaign tracking, and reporting with marketing automation services.",
    shortDescription:
      "Build a connected marketing system that captures leads, organizes audiences, triggers timely communication, and gives your team clearer campaign visibility.",
    heroLead:
      "Digital Enterprise Group connects forms, campaigns, email, CRM records, scheduling, and reporting into one coordinated marketing workflow. We focus on the system behind the campaign so every lead has a clear next step.",
    primaryKeyword: "marketing automation services",
    serviceLabel: "Campaign Systems",
    accentLabel: "Attract → Nurture → Convert",
    metrics: [
      { value: "01", label: "Connected lead capture" },
      { value: "02", label: "Relevant follow-up paths" },
      { value: "03", label: "Clear campaign reporting" },
    ],
    challenges: [
      { title: "Leads receive the same message", text: "Without segmentation, communication ignores source, interest, lifecycle stage, and customer behavior." },
      { title: "Follow-up starts too late", text: "Manual handoffs create delays after a form submission, ad response, event, download, or booking." },
      { title: "Campaign data is disconnected", text: "Ad platforms, email tools, websites, and CRM reports show different parts of performance." },
      { title: "Marketing and sales lose context", text: "Lead source, campaign activity, and engagement history do not consistently reach the sales team." },
    ],
    outcomes: [
      { title: "Faster lead response", text: "Create immediate acknowledgements, assignments, tasks, and follow-up based on the lead source and intent." },
      { title: "Smarter audience journeys", text: "Segment contacts and trigger relevant email, reminders, or routing based on lifecycle and behavior." },
      { title: "Connected sales handoff", text: "Move qualified contacts into the right CRM stage with activity history and next-step context." },
      { title: "Clearer measurement", text: "Bring campaign, source, funnel, and pipeline information into practical reporting views." },
    ],
    deliverables: [
      { title: "Lead capture architecture", text: "Connect landing pages, forms, ad leads, events, bookings, and downloads to a structured contact record.", tags: ["Forms", "Sources", "Capture"] },
      { title: "Segmentation and lifecycle", text: "Organize contacts using source, interest, engagement, customer stage, and business rules.", tags: ["Segments", "Lifecycle", "Scoring"] },
      { title: "Email and nurture workflows", text: "Build timely sequences, reminders, re-engagement paths, and internal notifications.", tags: ["Email", "Nurture", "Reminders"] },
      { title: "CRM and sales alignment", text: "Create qualification rules, assignments, tasks, pipeline updates, and context for sales follow-up.", tags: ["CRM", "Handoff", "Pipeline"] },
      { title: "Campaign tracking", text: "Standardize source data and create reporting for campaigns, conversions, and downstream outcomes.", tags: ["UTM", "Attribution", "Reports"] },
      { title: "Testing and optimization", text: "Review workflow performance, message timing, data quality, and points where leads stop progressing.", tags: ["Testing", "Timing", "Optimization"] },
    ],
    process: [
      { step: "01", title: "Journey", text: "Map how prospects discover, evaluate, contact, and become customers." },
      { step: "02", title: "Segment", text: "Define audiences, lifecycle stages, qualification rules, and the data required." },
      { step: "03", title: "Automate", text: "Build capture, nurture, sales handoff, notifications, and campaign tracking." },
      { step: "04", title: "Improve", text: "Review engagement and pipeline signals, then refine timing, content, and routing." },
    ],
    useCases: ["Website lead follow-up", "Ad lead routing", "Email nurture sequences", "Event and webinar follow-up", "Appointment reminders", "Lead scoring and qualification", "Re-engagement campaigns", "Campaign-to-pipeline reporting"],
    faqs: [
      { question: "Is marketing automation only for email?", answer: "No. It can coordinate forms, CRM updates, lead routing, tasks, notifications, scheduling, audiences, and reporting in addition to email." },
      { question: "Can you connect marketing activity to our CRM?", answer: "Yes. A core goal is to preserve source and engagement context when contacts move into sales and customer workflows." },
      { question: "Can we start with one campaign or funnel?", answer: "Yes. A focused workflow can be a practical way to validate the data, timing, and handoff process before expanding." },
      { question: "Do you manage ads too?", answer: "Digital Enterprise Group supports broader digital marketing services. The automation scope can connect ad leads and campaign data to follow-up and reporting systems." },
    ],
    related: ["crm-automation", "workflow-automation", "web-app-integrations"],
  },
  {
    slug: "business-process-automation",
    path: "/business-process-automation/",
    eyebrow: "Business Process Automation",
    title: "Business process automation for clearer operations.",
    metaTitle: "Business Process Automation | Digital Enterprise Group",
    metaDescription:
      "Improve operations with business process automation for approvals, onboarding, requests, invoicing, reporting, and team handoffs.",
    shortDescription:
      "Redesign repeatable business processes, connect the systems involved, and automate the steps that slow teams down or create avoidable errors.",
    heroLead:
      "Digital Enterprise Group helps businesses move from scattered manual routines to documented, connected operating systems. We combine process mapping, CRM architecture, workflow automation, integrations, and reporting to improve how work moves across teams.",
    primaryKeyword: "business process automation",
    serviceLabel: "Operational Automation",
    accentLabel: "Map → Improve → Scale",
    metrics: [
      { value: "01", label: "Documented processes" },
      { value: "02", label: "Connected departments" },
      { value: "03", label: "Scalable operations" },
    ],
    challenges: [
      { title: "The process only exists in people’s heads", text: "Different team members complete the same work in different ways, making quality and training inconsistent." },
      { title: "Departments use disconnected systems", text: "Sales, operations, finance, and service teams each maintain separate records and status updates." },
      { title: "Growth creates more admin work", text: "More customers and projects increase data entry, coordination, and follow-up instead of improving efficiency." },
      { title: "Bottlenecks are hard to measure", text: "Without process data, teams cannot see where work waits, repeats, fails, or requires unnecessary approval." },
    ],
    outcomes: [
      { title: "Repeatable operations", text: "Document the process and support it with consistent data, ownership, rules, and automated actions." },
      { title: "Cross-team coordination", text: "Connect records and handoffs across sales, operations, finance, marketing, and customer service." },
      { title: "Human attention where it matters", text: "Automate routine administration while preserving decisions, reviews, and relationship work for people." },
      { title: "A stronger foundation for growth", text: "Build processes that can support increased volume, new team members, and more complex service delivery." },
    ],
    deliverables: [
      { title: "Operational process audit", text: "Review the current process, systems, roles, volumes, risks, and recurring pain points.", tags: ["Audit", "Process", "Risk"] },
      { title: "Future-state process design", text: "Create a clearer workflow with defined ownership, data, decisions, exceptions, and success measures.", tags: ["Design", "Ownership", "KPIs"] },
      { title: "Automation and integration build", text: "Configure the CRM, workflow platform, connectors, notifications, approvals, and records required.", tags: ["Automation", "Integration", "Systems"] },
      { title: "Document and data workflows", text: "Automate intake, file creation, signatures, storage, status, and downstream record updates.", tags: ["Documents", "Data", "Status"] },
      { title: "Management reporting", text: "Create views for throughput, overdue work, exceptions, workload, conversion, and process health.", tags: ["Reporting", "Throughput", "Visibility"] },
      { title: "Governance and continuous improvement", text: "Document system ownership, change procedures, training, and a plan for ongoing refinement.", tags: ["Governance", "Training", "Scale"] },
    ],
    process: [
      { step: "01", title: "Discover", text: "Understand the business objective, current process, users, systems, and recurring friction." },
      { step: "02", title: "Redesign", text: "Simplify the process and define the future-state workflow before adding automation." },
      { step: "03", title: "Build", text: "Configure connected systems, records, triggers, approvals, notifications, and dashboards." },
      { step: "04", title: "Scale", text: "Train users, monitor performance, document ownership, and improve the process as volume grows." },
    ],
    useCases: ["Lead-to-client operations", "Employee onboarding", "Customer onboarding", "Service request management", "Invoice and approval workflows", "Contract and document routing", "Operations reporting", "Multi-team project handoffs"],
    faqs: [
      { question: "What is the difference between workflow and business process automation?", answer: "Workflow automation usually focuses on a defined sequence of tasks. Business process automation can cover a broader operation involving several workflows, systems, teams, and reporting requirements." },
      { question: "Do you automate a broken process as it is?", answer: "We first review and simplify the process. Automating unnecessary steps can make problems move faster instead of improving the operation." },
      { question: "Can automation work across departments?", answer: "Yes. Cross-functional processes are often strong candidates because shared records, structured handoffs, and status visibility can reduce coordination gaps." },
      { question: "Can we implement the project in phases?", answer: "Yes. A phased rollout can prioritize the highest-impact process, reduce risk, and create a foundation for additional automation." },
    ],
    related: ["workflow-automation", "crm-automation", "web-app-integrations"],
  },
];

export const servicePageMap = new Map(servicePages.map((page) => [page.slug, page]));

export function getServicePageByPath(pathname: string): ServicePage | undefined {
  const normalized = pathname.replace(/^\/+|\/+$/g, "");
  return servicePageMap.get(normalized);
}
