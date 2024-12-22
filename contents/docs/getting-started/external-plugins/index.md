---
title: External Plugins
description: How to add external Paper plugins to your project
---

## External Plugins
If you need to provide additional plugins for your game server, you can create an `external-plugins/` directory in your project root and place them there. This directory will be recursively merged with the `plugins/` directory in your game server (which contains a default set of Mineplex-vended plugins and your game code).

Note that any plugins provided must run in offline mode, as game containers do not have network connectivity. All external plugins will also be subject to a security, operational readiness, and license review by the Mineplex team before your game can be published.
