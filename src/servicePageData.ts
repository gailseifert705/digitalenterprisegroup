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
  secondaryKeywords?: string[];
  platformName?: string;
  platformLogo?: string;
  sectionHeadings?: {
    problems: string;
    outcomes: string;
    deliverables: string;
    useCases: string;
    process: string;
    faq: string;
  };
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
  platformFocus?: Array<{
    name: string;
    title: string;
    text: string;
    keywords: string[];
  }>;
};

export const servicePages: ServicePage[] = [
  {
    "slug": "crm-setup-management",
    "path": "/crm-setup-management/",
    "eyebrow": "CRM Setup, Management & Platform Services",
    "title": "CRM setup and management for HubSpot, Pipedrive, Keap, GoHighLevel, and monday.com.",
    "metaTitle": "CRM Setup & Management Services | DEG",
    "metaDescription": "CRM setup, implementation, management, migration, cleanup, and optimization for HubSpot, Pipedrive, Keap, GoHighLevel, and monday.com.",
    "shortDescription": "Plan, configure, clean up, migrate, and manage HubSpot, Pipedrive, Keap, GoHighLevel, or monday.com around your real sales process.",
    "heroLead": "Digital Enterprise Group provides CRM setup and management services for HubSpot, Pipedrive, Keap, GoHighLevel, and monday.com. We translate your sales process into practical pipelines, fields, permissions, dashboards, integrations, automations, data standards, and ongoing management routines.",
    "primaryKeyword": "CRM setup and management services",
    "secondaryKeywords": [
      "HubSpot CRM setup",
      "Pipedrive CRM setup",
      "Keap CRM setup",
      "GoHighLevel CRM setup",
      "monday.com CRM setup",
      "CRM implementation services"
    ],
    "serviceLabel": "CRM Setup & Management",
    "accentLabel": "Plan → Configure → Manage",
    "metrics": [
      {
        "value": "01",
        "label": "Clean CRM architecture"
      },
      {
        "value": "02",
        "label": "Consistent team adoption"
      },
      {
        "value": "03",
        "label": "Reliable pipeline reporting"
      }
    ],
    "challenges": [
      {
        "title": "The CRM was configured without a plan",
        "text": "Default fields and stages rarely reflect the way your team qualifies leads, sells services, or hands customers to operations."
      },
      {
        "title": "Data quality keeps getting worse",
        "text": "Duplicates, incomplete records, inconsistent naming, and unclear ownership make reporting and follow-up unreliable."
      },
      {
        "title": "Users work around the system",
        "text": "When the CRM creates extra work or feels confusing, teams return to spreadsheets, inboxes, and personal notes."
      },
      {
        "title": "No one owns ongoing improvements",
        "text": "Pipelines, forms, automations, dashboards, and permissions become outdated as the business changes."
      }
    ],
    "outcomes": [
      {
        "title": "A CRM matched to your process",
        "text": "Use lifecycle stages, pipelines, fields, views, and permissions that reflect how your business actually works."
      },
      {
        "title": "Cleaner and more dependable data",
        "text": "Create standards for record creation, ownership, required information, duplicate handling, and ongoing maintenance."
      },
      {
        "title": "Better daily adoption",
        "text": "Give users practical screens, tasks, dashboards, and documentation that reduce friction instead of adding it."
      },
      {
        "title": "Continuous CRM optimization",
        "text": "Review performance, fix bottlenecks, and improve the system as your team, offers, and sales process evolve."
      }
    ],
    "deliverables": [
      {
        "title": "CRM platform selection and implementation planning",
        "text": "Match business requirements, users, reporting, automation, and integration needs to HubSpot, Pipedrive, Keap, GoHighLevel, monday.com, or the CRM already in use.",
        "tags": [
          "HubSpot",
          "Pipedrive",
          "Keap",
          "GoHighLevel",
          "monday.com"
        ]
      },
      {
        "title": "Platform-specific CRM configuration",
        "text": "Configure contacts, companies, opportunities, lifecycle stages, custom fields, pipelines, ownership, permissions, views, and dashboards for the selected platform.",
        "tags": [
          "Architecture",
          "Pipelines",
          "Permissions"
        ]
      },
      {
        "title": "CRM cleanup and optimization",
        "text": "Simplify cluttered fields, stages, views, automation rules, forms, and reports that no longer support the team.",
        "tags": [
          "Cleanup",
          "Optimization",
          "Governance"
        ]
      },
      {
        "title": "Data migration and validation",
        "text": "Map, clean, import, deduplicate, and validate records from spreadsheets or an older CRM before launch.",
        "tags": [
          "Migration",
          "Mapping",
          "Validation"
        ]
      },
      {
        "title": "Ongoing CRM management",
        "text": "Manage user access, fields, workflows, dashboards, forms, integrations, and change requests as the business grows.",
        "tags": [
          "Management",
          "Support",
          "Improvements"
        ]
      },
      {
        "title": "Training, documentation, and reporting",
        "text": "Create role-based guidance, operating procedures, dashboards, and review routines that support adoption and accountability.",
        "tags": [
          "Training",
          "SOPs",
          "Reporting"
        ]
      }
    ],
    "process": [
      {
        "step": "01",
        "title": "Assess",
        "text": "Review your current process, CRM, data, users, integrations, pain points, and reporting goals."
      },
      {
        "step": "02",
        "title": "Design",
        "text": "Define the CRM architecture, pipelines, fields, ownership rules, permissions, and management plan."
      },
      {
        "step": "03",
        "title": "Implement",
        "text": "Configure the system, clean or migrate data, connect tools, and test realistic user scenarios."
      },
      {
        "step": "04",
        "title": "Manage",
        "text": "Train users, monitor adoption, maintain data quality, and improve the CRM as requirements change."
      }
    ],
    "useCases": [
      "HubSpot CRM setup",
      "Pipedrive pipeline setup",
      "Keap CRM setup",
      "GoHighLevel account setup",
      "monday.com CRM implementation",
      "CRM data migration",
      "CRM cleanup and optimization",
      "Dashboard and report setup",
      "Ongoing CRM management",
      "Team training and SOPs"
    ],
    "faqs": [
      {
        "question": "What is included in CRM setup services?",
        "answer": "CRM setup can include architecture, custom fields, lifecycle stages, pipelines, user permissions, forms, lead routing, dashboards, integrations, migration, testing, and training."
      },
      {
        "question": "Can you manage our CRM after implementation?",
        "answer": "Yes. Ongoing CRM management can cover user requests, data quality, dashboards, workflows, forms, integrations, permissions, documentation, and continuous optimization."
      },
      {
        "question": "Can you clean up a CRM that is already in use?",
        "answer": "Yes. We can audit the current portal, identify clutter and process gaps, simplify fields and stages, improve reporting, and create governance rules without starting over unnecessarily."
      },
      {
        "question": "Which CRM platforms do you support?",
        "answer": "Digital Enterprise Group works with platforms including HubSpot, Pipedrive, Keap, GoHighLevel, and monday.com CRM, along with connected automation and integration tools."
      },
      {
        "question": "How long does CRM implementation take?",
        "answer": "Timing depends on the number of users, data volume, pipelines, integrations, automations, and training requirements. A focused first phase can often be launched before the full roadmap is complete."
      }
    ],
    "related": [
      "crm-automation",
      "web-app-integrations",
      "business-process-automation"
    ],
    "sectionHeadings": {
      "problems": "Common CRM setup and management problems we solve.",
      "outcomes": "A CRM platform your team can trust, use, and improve.",
      "deliverables": "CRM setup, implementation, migration, and management services.",
      "useCases": "CRM platform setup and management use cases.",
      "process": "Our CRM setup and management process.",
      "faq": "CRM setup, management, and platform questions."
    },
    "platformFocus": [
      {
        "name": "HubSpot",
        "title": "HubSpot CRM setup and management",
        "text": "Configure HubSpot lifecycle stages, deal pipelines, custom properties, forms, lead routing, dashboards, data migration, permissions, and ongoing portal management around your sales and customer process.",
        "keywords": [
          "HubSpot CRM setup",
          "HubSpot implementation services",
          "HubSpot CRM management"
        ]
      },
      {
        "name": "Pipedrive",
        "title": "Pipedrive CRM setup and pipeline management",
        "text": "Build practical Pipedrive pipelines, activity rules, custom fields, lead routing, sales dashboards, integrations, migration plans, and management routines that support consistent follow-up.",
        "keywords": [
          "Pipedrive CRM setup",
          "Pipedrive pipeline setup",
          "Pipedrive CRM management"
        ]
      },
      {
        "name": "Keap",
        "title": "Keap CRM setup and lifecycle automation",
        "text": "Organize Keap contacts, tags, pipelines, forms, campaigns, appointments, follow-up, integrations, migration, and administration so marketing and sales activity stays connected.",
        "keywords": [
          "Keap CRM setup",
          "Keap automation services",
          "Keap CRM management"
        ]
      },
      {
        "name": "GoHighLevel",
        "title": "GoHighLevel CRM setup and workflow management",
        "text": "Configure GoHighLevel pipelines, calendars, forms, funnels, workflows, lead routing, notifications, snapshots, integrations, user access, and ongoing account management.",
        "keywords": [
          "GoHighLevel CRM setup",
          "GoHighLevel workflow automation",
          "GoHighLevel management services"
        ]
      },
      {
        "name": "monday.com",
        "title": "monday.com CRM setup and business workflows",
        "text": "Design monday.com CRM boards, connected records, sales stages, ownership, dashboards, automations, integrations, and workspace standards for sales and operational visibility.",
        "keywords": [
          "monday.com CRM setup",
          "monday CRM implementation",
          "monday.com workflow automation"
        ]
      }
    ]
  },
  {
    "slug": "crm-automation",
    "path": "/crm-automation/",
    "eyebrow": "CRM Automation & System Workflow Services",
    "title": "CRM automations and system workflows that keep work moving.",
    "metaTitle": "CRM Automation & System Workflows | DEG",
    "metaDescription": "CRM automation and system workflows for lead routing, follow-up, pipeline updates, alerts, handoffs, and reporting across leading CRM platforms.",
    "shortDescription": "Build CRM automations and system workflows for lead routing, follow-up, pipeline updates, approvals, handoffs, alerts, reporting, and customer lifecycle processes.",
    "heroLead": "Digital Enterprise Group designs CRM automations and system workflows that reduce repeated admin work and keep leads, customers, and internal teams moving through a clear process. We build practical automations in HubSpot, Pipedrive, Keap, GoHighLevel, monday.com, Make, Zapier, and connected business systems.",
    "primaryKeyword": "CRM automation services",
    "secondaryKeywords": [
      "CRM automations",
      "system workflows",
      "systems automation",
      "workflow automation services",
      "HubSpot automation",
      "GoHighLevel automation"
    ],
    "serviceLabel": "CRM Automation",
    "accentLabel": "Trigger → Route → Follow Up",
    "metrics": [
      {
        "value": "01",
        "label": "Central customer record"
      },
      {
        "value": "02",
        "label": "Automated lead routing"
      },
      {
        "value": "03",
        "label": "Visible sales pipeline"
      }
    ],
    "challenges": [
      {
        "title": "Leads live in too many places",
        "text": "Forms, inboxes, spreadsheets, and messages make it difficult to maintain a complete customer record."
      },
      {
        "title": "Follow-ups depend on memory",
        "text": "Opportunities stall when reminders, assignments, and next steps are handled manually."
      },
      {
        "title": "Pipeline stages are unclear",
        "text": "Teams cannot confidently see which deals need action, who owns them, or what is blocking progress."
      },
      {
        "title": "Reports do not match reality",
        "text": "Incomplete data and inconsistent updates make forecasting and performance reviews unreliable."
      }
    ],
    "outcomes": [
      {
        "title": "One source of truth",
        "text": "Keep contacts, conversations, deals, notes, files, and activity history in a structured CRM environment."
      },
      {
        "title": "Consistent lead handling",
        "text": "Route leads, create tasks, send notifications, and trigger follow-ups based on clear business rules."
      },
      {
        "title": "Better team visibility",
        "text": "Give managers and team members a shared view of pipeline health, ownership, and next actions."
      },
      {
        "title": "Systems built to scale",
        "text": "Use fields, stages, permissions, and automations that can grow with new users, services, and locations."
      }
    ],
    "deliverables": [
      {
        "title": "CRM architecture and setup",
        "text": "Map contacts, companies, deals, lifecycle stages, custom fields, ownership rules, and permissions.",
        "tags": [
          "Architecture",
          "Fields",
          "Permissions"
        ]
      },
      {
        "title": "Lead capture and routing",
        "text": "Connect forms and lead sources, then assign records based on source, service, territory, or workload.",
        "tags": [
          "Forms",
          "Routing",
          "Assignments"
        ]
      },
      {
        "title": "Pipeline automation",
        "text": "Create stage-based tasks, reminders, internal alerts, follow-up sequences, and handoff rules.",
        "tags": [
          "Stages",
          "Tasks",
          "Follow-ups"
        ]
      },
      {
        "title": "Data migration and cleanup",
        "text": "Prepare and move contacts, companies, deals, notes, and historical records from older systems.",
        "tags": [
          "Migration",
          "Cleanup",
          "Mapping"
        ]
      },
      {
        "title": "Dashboards and reporting",
        "text": "Build practical views for activity, pipeline movement, source performance, and conversion monitoring.",
        "tags": [
          "Dashboards",
          "KPIs",
          "Visibility"
        ]
      },
      {
        "title": "Training and documentation",
        "text": "Help your team understand daily CRM use, ownership expectations, and the automated workflow behind it.",
        "tags": [
          "Training",
          "SOPs",
          "Adoption"
        ]
      }
    ],
    "process": [
      {
        "step": "01",
        "title": "Audit",
        "text": "Review your current sales process, lead sources, data, tools, and reporting requirements."
      },
      {
        "step": "02",
        "title": "Architect",
        "text": "Define the CRM structure, stages, fields, ownership rules, and automation plan."
      },
      {
        "step": "03",
        "title": "Implement",
        "text": "Configure the platform, migrate data, connect lead sources, and build workflows."
      },
      {
        "step": "04",
        "title": "Refine",
        "text": "Test with real scenarios, train users, document the process, and improve reporting."
      }
    ],
    "useCases": [
      "Lead routing automations",
      "Automated follow-up sequences",
      "Pipeline stage automations",
      "Sales task creation",
      "Appointment and reminder workflows",
      "Customer onboarding workflows",
      "Internal handoff automations",
      "Approval and exception alerts",
      "CRM reporting automations",
      "HubSpot, Pipedrive, Keap, GoHighLevel, and monday.com workflows"
    ],
    "faqs": [
      {
        "question": "Can you improve an existing CRM instead of replacing it?",
        "answer": "Yes. We can audit the current setup, clean up fields and pipelines, improve automation, and connect missing tools before recommending a platform change."
      },
      {
        "question": "Which CRM platforms can you work with?",
        "answer": "The right platform depends on your process, users, budget, and integration needs. Our experience includes systems such as HubSpot, Keap, Pipedrive, GoHighLevel, and Monday CRM."
      },
      {
        "question": "Can you migrate our spreadsheet or old CRM data?",
        "answer": "Yes. Data migration can include field mapping, cleanup, duplicate review, import preparation, and validation after the move."
      },
      {
        "question": "Will our team receive training?",
        "answer": "Training and practical documentation can be included so users understand the pipeline, required fields, daily tasks, and automated actions."
      }
    ],
    "related": [
      "crm-setup-management",
      "web-app-integrations",
      "business-process-automation"
    ],
    "sectionHeadings": {
      "problems": "Where manual CRM work creates delays and missed follow-up.",
      "outcomes": "CRM automations that support speed, ownership, and visibility.",
      "deliverables": "CRM automation and system workflow deliverables.",
      "useCases": "High-value CRM automation and system workflow use cases.",
      "process": "Our CRM automation process.",
      "faq": "CRM automation and system workflow questions."
    }
  },
  {
    "slug": "web-app-integrations",
    "path": "/web-app-integrations/",
    "eyebrow": "Systems Integration & CRM Integration Services",
    "title": "Systems integration that keeps CRM and business data connected.",
    "metaTitle": "Systems Integration & CRM Integrations | DEG",
    "metaDescription": "Systems integration and CRM integration services connecting forms, email, calendars, finance, project management, reporting, and business applications.",
    "shortDescription": "Connect CRM, forms, email, calendars, project tools, finance systems, and other applications through reliable systems integration and structured data flows.",
    "heroLead": "Digital Enterprise Group provides systems integration and CRM integration services for businesses that need data to move reliably between platforms. We connect lead sources, email, calendars, project tools, finance systems, reporting, document workflows, and custom applications using native integrations, APIs, Make, Zapier, and practical automation logic.",
    "primaryKeyword": "systems integration services",
    "secondaryKeywords": [
      "CRM integration services",
      "business systems integration",
      "app integration services",
      "workflow integration",
      "API integration services",
      "systems automation"
    ],
    "serviceLabel": "Systems Integration",
    "accentLabel": "Connect → Sync → Validate",
    "metrics": [
      {
        "value": "01",
        "label": "Connected business data"
      },
      {
        "value": "02",
        "label": "Fewer duplicate updates"
      },
      {
        "value": "03",
        "label": "Faster system handoffs"
      }
    ],
    "challenges": [
      {
        "title": "Tools operate in isolation",
        "text": "Your CRM, forms, project platform, email, and finance tools each hold part of the process."
      },
      {
        "title": "Data is copied repeatedly",
        "text": "Team members re-enter the same customer, order, or project information across several systems."
      },
      {
        "title": "Updates arrive too late",
        "text": "A delay between systems can lead to missed follow-ups, inaccurate reports, and inconsistent records."
      },
      {
        "title": "Integration errors are invisible",
        "text": "Failed automations are difficult to notice without validation, logs, and exception handling."
      }
    ],
    "outcomes": [
      {
        "title": "Connected customer journeys",
        "text": "Move data from website forms and campaigns into CRM, scheduling, delivery, and reporting systems."
      },
      {
        "title": "Less duplicate entry",
        "text": "Sync approved fields and status changes so teams do not repeat the same update across tools."
      },
      {
        "title": "Reliable handoffs",
        "text": "Trigger the correct action when a record is created, updated, approved, paid, booked, or completed."
      },
      {
        "title": "Integration visibility",
        "text": "Use validation, error alerts, logs, and fallback steps to make connected workflows easier to manage."
      }
    ],
    "deliverables": [
      {
        "title": "Integration architecture",
        "text": "Define source systems, destinations, data ownership, field mappings, and sync direction.",
        "tags": [
          "Architecture",
          "Mapping",
          "Ownership"
        ]
      },
      {
        "title": "API and connector setup",
        "text": "Configure native connectors, webhooks, middleware, or supported APIs based on the systems involved.",
        "tags": [
          "APIs",
          "Webhooks",
          "Connectors"
        ]
      },
      {
        "title": "Data transformation",
        "text": "Format, filter, enrich, and validate information before it moves into another platform.",
        "tags": [
          "Transform",
          "Filter",
          "Validate"
        ]
      },
      {
        "title": "Workflow orchestration",
        "text": "Coordinate multiple actions, decisions, delays, approvals, and notifications across connected tools.",
        "tags": [
          "Orchestration",
          "Logic",
          "Actions"
        ]
      },
      {
        "title": "Error handling and monitoring",
        "text": "Add alerts, logs, retry paths, and human review for failed or incomplete transactions.",
        "tags": [
          "Monitoring",
          "Retries",
          "Alerts"
        ]
      },
      {
        "title": "Documentation and support",
        "text": "Document connections, credentials ownership, field logic, and support procedures for your team.",
        "tags": [
          "Docs",
          "Support",
          "Governance"
        ]
      }
    ],
    "process": [
      {
        "step": "01",
        "title": "Inventory",
        "text": "Identify the systems, data, triggers, users, and security requirements involved."
      },
      {
        "step": "02",
        "title": "Design",
        "text": "Choose the integration method and define mappings, timing, validation, and ownership."
      },
      {
        "step": "03",
        "title": "Connect",
        "text": "Build and test the integration with realistic records and edge cases."
      },
      {
        "step": "04",
        "title": "Monitor",
        "text": "Launch with logging, alerts, documentation, and a plan for future platform changes."
      }
    ],
    "useCases": [
      "Website form to CRM",
      "CRM to project management",
      "Payment to onboarding workflow",
      "Calendar and scheduling sync",
      "Lead source enrichment",
      "Customer notification workflows",
      "Dashboard data consolidation",
      "Document and signature handoffs"
    ],
    "faqs": [
      {
        "question": "Can you connect tools that do not have a native integration?",
        "answer": "Sometimes. Depending on the platforms, we may use supported APIs, webhooks, middleware, file exchange, or a carefully designed alternative workflow."
      },
      {
        "question": "Do you work with Make and Zapier?",
        "answer": "Yes. We can use integration platforms such as Make and Zapier when they fit the volume, logic, reliability, and maintenance requirements."
      },
      {
        "question": "How do you prevent duplicate records?",
        "answer": "Integration design can include unique identifiers, lookup steps, update-versus-create rules, validation, and exception handling."
      },
      {
        "question": "Can integrations be monitored after launch?",
        "answer": "Yes. Monitoring may include logs, alerts, retry paths, and documentation so failed transactions can be found and resolved."
      }
    ],
    "related": [
      "crm-setup-management",
      "crm-automation",
      "business-process-automation"
    ],
    "sectionHeadings": {
      "problems": "Where disconnected systems create duplicate work and unreliable data.",
      "outcomes": "Connected business systems with clearer, more dependable data flows.",
      "deliverables": "Systems integration and CRM integration services.",
      "useCases": "Common CRM and business systems integration use cases.",
      "process": "Our systems integration process.",
      "faq": "Systems integration and CRM integration questions."
    }
  },
  {
    "slug": "business-process-automation",
    "path": "/business-process-automation/",
    "eyebrow": "Business Process & Business Automation Services",
    "title": "Business process automation and system workflows for clearer operations.",
    "metaTitle": "Business Process & Business Automation | DEG",
    "metaDescription": "Business process automation, business automation, systems automation, system workflows, approvals, onboarding, reporting, and cross-team handoffs.",
    "shortDescription": "Turn repeated manual routines into documented system workflows, connected records, approvals, reporting, and business automations that support growth.",
    "heroLead": "Digital Enterprise Group helps businesses improve operations through business process automation, business automation, systems automation, and structured system workflows. We map the process first, then connect CRM, project, finance, communication, and reporting tools around clear ownership, data, approvals, handoffs, and exceptions.",
    "primaryKeyword": "business process automation services",
    "secondaryKeywords": [
      "business automation services",
      "systems automation",
      "system workflows",
      "workflow automation",
      "business systems automation",
      "process automation services"
    ],
    "serviceLabel": "Business Automation",
    "accentLabel": "Map → Connect → Automate",
    "metrics": [
      {
        "value": "01",
        "label": "Documented processes"
      },
      {
        "value": "02",
        "label": "Connected departments"
      },
      {
        "value": "03",
        "label": "Scalable operations"
      }
    ],
    "challenges": [
      {
        "title": "The process only exists in people’s heads",
        "text": "Different team members complete the same work in different ways, making quality and training inconsistent."
      },
      {
        "title": "Departments use disconnected systems",
        "text": "Sales, operations, finance, and service teams each maintain separate records and status updates."
      },
      {
        "title": "Growth creates more admin work",
        "text": "More customers and projects increase data entry, coordination, and follow-up instead of improving efficiency."
      },
      {
        "title": "Bottlenecks are hard to measure",
        "text": "Without process data, teams cannot see where work waits, repeats, fails, or requires unnecessary approval."
      }
    ],
    "outcomes": [
      {
        "title": "Repeatable operations",
        "text": "Document the process and support it with consistent data, ownership, rules, and automated actions."
      },
      {
        "title": "Cross-team coordination",
        "text": "Connect records and handoffs across sales, operations, finance, marketing, and customer service."
      },
      {
        "title": "Human attention where it matters",
        "text": "Automate routine administration while preserving decisions, reviews, and relationship work for people."
      },
      {
        "title": "A stronger foundation for growth",
        "text": "Build processes that can support increased volume, new team members, and more complex service delivery."
      }
    ],
    "deliverables": [
      {
        "title": "Operational process audit",
        "text": "Review the current process, systems, roles, volumes, risks, and recurring pain points.",
        "tags": [
          "Audit",
          "Process",
          "Risk"
        ]
      },
      {
        "title": "Future-state process design",
        "text": "Create a clearer workflow with defined ownership, data, decisions, exceptions, and success measures.",
        "tags": [
          "Design",
          "Ownership",
          "KPIs"
        ]
      },
      {
        "title": "Automation and integration build",
        "text": "Configure the CRM, workflow platform, connectors, notifications, approvals, and records required.",
        "tags": [
          "Automation",
          "Integration",
          "Systems"
        ]
      },
      {
        "title": "Document and data workflows",
        "text": "Automate intake, file creation, signatures, storage, status, and downstream record updates.",
        "tags": [
          "Documents",
          "Data",
          "Status"
        ]
      },
      {
        "title": "Management reporting",
        "text": "Create views for throughput, overdue work, exceptions, workload, conversion, and process health.",
        "tags": [
          "Reporting",
          "Throughput",
          "Visibility"
        ]
      },
      {
        "title": "Governance and continuous improvement",
        "text": "Document system ownership, change procedures, training, and a plan for ongoing refinement.",
        "tags": [
          "Governance",
          "Training",
          "Scale"
        ]
      }
    ],
    "process": [
      {
        "step": "01",
        "title": "Discover",
        "text": "Understand the business objective, current process, users, systems, and recurring friction."
      },
      {
        "step": "02",
        "title": "Redesign",
        "text": "Simplify the process and define the future-state workflow before adding automation."
      },
      {
        "step": "03",
        "title": "Build",
        "text": "Configure connected systems, records, triggers, approvals, notifications, and dashboards."
      },
      {
        "step": "04",
        "title": "Scale",
        "text": "Train users, monitor performance, document ownership, and improve the process as volume grows."
      }
    ],
    "useCases": [
      "Lead-to-client operations",
      "Employee onboarding",
      "Customer onboarding",
      "Service request management",
      "Invoice and approval workflows",
      "Contract and document routing",
      "Operations reporting",
      "Multi-team project handoffs"
    ],
    "faqs": [
      {
        "question": "What is the difference between workflow and business process automation?",
        "answer": "Workflow automation usually focuses on a defined sequence of tasks. Business process automation can cover a broader operation involving several workflows, systems, teams, and reporting requirements."
      },
      {
        "question": "Do you automate a broken process as it is?",
        "answer": "We first review and simplify the process. Automating unnecessary steps can make problems move faster instead of improving the operation."
      },
      {
        "question": "Can automation work across departments?",
        "answer": "Yes. Cross-functional processes are often strong candidates because shared records, structured handoffs, and status visibility can reduce coordination gaps."
      },
      {
        "question": "Can we implement the project in phases?",
        "answer": "Yes. A phased rollout can prioritize the highest-impact process, reduce risk, and create a foundation for additional automation."
      }
    ],
    "related": [
      "crm-automation",
      "web-app-integrations",
      "crm-setup-management"
    ],
    "sectionHeadings": {
      "problems": "Where manual business processes create bottlenecks and inconsistent work.",
      "outcomes": "Business automation that improves coordination, visibility, and scale.",
      "deliverables": "Business process automation and system workflow deliverables.",
      "useCases": "Business automation and systems automation use cases.",
      "process": "Our business process automation approach.",
      "faq": "Business automation and process automation questions."
    }
  }
];

export const servicePageMap = new Map(servicePages.map((page) => [page.slug, page]));

export function getServicePageByPath(pathname: string): ServicePage | undefined {
  const normalized = pathname.replace(/^\/+|\/+$/g, "");
  return servicePageMap.get(normalized);
}
