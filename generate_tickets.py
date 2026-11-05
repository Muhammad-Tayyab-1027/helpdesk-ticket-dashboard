"""Creates made-up helpdesk tickets in tickets.js. No real people or companies are included."""
import json
import random
from datetime import datetime, timedelta

random.seed(1027)

# Priority: (target hours to resolve, chance of being chosen, typical resolve hours)
PRIORITIES = {"P1 Critical": (4, 0.06, 3), "P2 High": (8, 0.19, 7), "P3 Normal": (24, 0.5, 18), "P4 Low": (72, 0.25, 45)}
ISSUES = {
    "Account & Password": ["Password reset request", "Account locked after failed logins", "MFA prompt not arriving",
                           "New phone needs MFA set up", "New starter account request"],
    "Email & Teams": ["Outlook not receiving email", "Shared mailbox missing", "Teams call has no audio",
                      "Calendar will not sync on phone", "Out-of-office not working"],
    "Files & OneDrive": ["OneDrive not syncing", "Cannot open SharePoint folder", "Recover deleted file",
                         "Need access to team folder"],
    "Hardware": ["Laptop will not power on", "Docking station not detecting screens", "Keyboard keys not working",
                 "Replacement charger request", "Laptop running very slowly"],
    "Network & VPN": ["VPN will not connect from home", "Office Wi-Fi keeps dropping", "Cannot reach internal website"],
    "Printing": ["Printer offline", "Printer jam on 2nd floor", "Cannot install printer driver"],
}
WEIGHTS = {"Account & Password": 30, "Email & Teams": 22, "Files & OneDrive": 13, "Hardware": 15,
           "Network & VPN": 10, "Printing": 10}
DEPARTMENTS = ["Finance", "Sales", "Warehouse", "HR", "Customer Care", "Marketing"]
NOW = datetime(2026, 10, 31, 17, 0)
START = datetime(2026, 8, 3, 9, 0)

tickets = []
for number in range(1, 241):
    days = random.randrange((NOW - START).days)
    opened = START + timedelta(days=days, hours=random.randint(0, 8), minutes=random.randint(0, 59))
    while opened.weekday() >= 5:
        opened -= timedelta(days=1)
    category = random.choices(list(WEIGHTS), weights=WEIGHTS.values())[0]
    priority = random.choices(list(PRIORITIES), weights=[p[1] for p in PRIORITIES.values()])[0]
    target, _, typical = PRIORITIES[priority]
    took = max(0.2, random.gauss(typical, typical * 0.45))
    resolved = opened + timedelta(hours=took)
    still_open = resolved > NOW or random.random() < 0.05
    tickets.append({
        "id": f"INC-{10000 + number}",
        "opened": opened.strftime("%Y-%m-%dT%H:%M"),
        "resolved": None if still_open else resolved.strftime("%Y-%m-%dT%H:%M"),
        "category": category,
        "issue": random.choice(ISSUES[category]),
        "priority": priority,
        "department": random.choice(DEPARTMENTS),
        "targetHours": target,
    })
tickets.sort(key=lambda t: t["opened"])

with open("tickets.js", "w", encoding="utf-8") as f:
    f.write("// Made-up sample data, created by generate_tickets.py\n")
    f.write(f'const REPORT_TIME = "{NOW.strftime("%Y-%m-%dT%H:%M")}";\n')
    f.write("const TICKETS = " + json.dumps(tickets, indent=1) + ";\n")
print(len(tickets), "tickets written")
