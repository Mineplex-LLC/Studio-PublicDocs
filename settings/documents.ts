import { Paths } from "@/lib/pageroutes";

export const Documents: Paths[] = [
  {
    title: "Introduction",
    href: "/introduction",
  },
  {
    spacer: true,
  },
  {
    title: "Getting Started",
    href: "/getting-started",
    items: [
      {
        title: "Example Project",
        href: "/example-project",
      },
      {
        title: "Project Namespaces",
        href: "/namespaces",
      },
    ],
  },
  {
    spacer: true,
  },
  {
    title: "Project Configuration",
    href: "/configuration",
  },
  {
    spacer: true,
  },
  {
    title: "Auxiliary Information",
    href: "/auxiliary",
    items: [
      {
        title: "Data Privacy",
        href: "/data-privacy",
      },
      {
        title: "Project Publishing",
        href: "/publishing",
      },
      {
        title: "Moderation Information",
        href: "/moderation",
      },
      {
        title: "Security Guidelines",
        href: "/security-guidelines",
      },
      {
        title: "Frequently Asked Questions",
        href: "/faq",
      },
      {
        title: "Review Process",
        href: "/review-process",
      },
    ],
  },
  {
    spacer: true,
  },
  {
    title: "Command Line",
    href: "/cli",
    items: [
      {
        title: "Installation",
        href: "/installation",
      },
      {
        title: "Commands",
        href: "/commands",
      },
    ],
  },
  {
    spacer: true,
  },
  {
    title: "Studio Development Kit",
    href: "/sdk",
    items: [
      {
        title: "Installation",
        href: "/installation",
      },
      {
        title: "Features",
        href: "/features",
        items: [
          {
            title: "Chat Module",
            href: "/chat",
          },
          {
            title: "Command Module",
            href: "/command",
          },
          {
            title: "Data Storage Module",
            href: "/data",
          },
          {
            title: "Game Engine Module",
            href: "/game",
          },
          {
            title: "Leaderboard Module",
            href: "/leaderboard",
          },
          {
            title: "Level Module",
            href: "/levels",
          },
          {
            title: "Messaging Module",
            href: "/messaging",
          },
          {
            title: "Moderation Module",
            href: "/moderation",
            items: [
              {
                title: "Punishment Object",
                href: "/model",
              },
              {
                title: "Punishment Types",
                href: "/types",
              },
              {
                title: "Punishment Reasons",
                href: "/reasons",
              },
              {
                title: "Punishment Command",
                href: "/command",
              },
            ],
          },
          {
            title: "Party Module",
            href: "/party",
          },
          {
            title: "Player Ignore Module",
            href: "/player-ignore",
          },
          {
            title: "Purchase Module",
            href: "/purchase",
          },
          {
            title: "Quest Module",
            href: "/quest"
          },
          {
            title: "Queue Module",
            href: "/queueing",
          },
          {
            title: "Resource Pack Module",
            href: "/resourcepack",
          },
          {
            title: "Stats Module",
            href: "/stats",
          },
          {
            title: "World Module",
            href: "/world",
            items: [
              {
                title: "World Datapoints",
                href: "/datapoints",
              },
            ],
          },
        ],
      },
      {
        title: "Built-In Game Mechanics",
        href: "/features/game/mechanics",
        items: [
          {
            title: "Ability Mechanic",
            href: "/ability",
          },
          {
            title: "Kit Mechanic",
            href: "/kit",
          },
        ],
      },
      {
        title: "Custom Modules",
        href: "/custom",
      },
      {
        title: "GUI Menus",
        href: "/gui",
      },
      {
        title: "Internationalization",
        href: "/internationalization",
      },
      {
        title: "Third Party Resources",
        href: "/thirdparty",
      },
    ],
  },
];
