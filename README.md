# Helpdesk Ticket Dashboard

A dashboard for IT support tickets, along with a short first-line support guide. I built it around what Irish helpdesk and service desk jobs ask for: logging tickets, working to response targets and supporting Microsoft 365 users.

**All tickets are made up.**

## What it does

- Shows 240 sample tickets, with filters for category, priority, department and status
- Shows the number of tickets, how many are open, the share resolved within target, and median time to resolve
- Charts tickets by category and per week
- Lists the tickets furthest past their target, so the most urgent come first

## Targets used in the sample data

| Priority | Target to resolve |
|---|---|
| P1 Critical | 4 hours |
| P2 High | 8 hours |
| P3 Normal | 24 hours |
| P4 Low | 72 hours |

For simplicity, these are measured in clock hours, not business hours.

## Knowledge base

The [knowledge base](kb/README.md) has step-by-step guides for password resets, MFA, Outlook, OneDrive, Teams, VPN, printers and slow laptops, including when to escalate.

## Run it

Open `index.html` in a browser. There is nothing to install.

To regenerate the sample tickets, run `python generate_tickets.py`.

## Skills used

HTML, CSS and plain JavaScript with no libraries: filtering data, calculating figures, drawing SVG charts, and light and dark themes.
