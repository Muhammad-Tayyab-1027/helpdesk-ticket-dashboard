// Made-up sample data, created by generate_tickets.py
const REPORT_TIME = "2026-10-31T17:00";
const TICKETS = [
 {
  "id": "INC-10176",
  "opened": "2026-08-03T15:38",
  "resolved": "2026-08-03T21:13",
  "category": "Account & Password",
  "issue": "Account locked after failed logins",
  "priority": "P1 Critical",
  "department": "Marketing",
  "targetHours": 4
 },
 {
  "id": "INC-10147",
  "opened": "2026-08-05T10:13",
  "resolved": "2026-08-06T10:48",
  "category": "Account & Password",
  "issue": "Account locked after failed logins",
  "priority": "P3 Normal",
  "department": "Customer Care",
  "targetHours": 24
 },
 {
  "id": "INC-10001",
  "opened": "2026-08-05T10:58",
  "resolved": "2026-08-09T17:11",
  "category": "Account & Password",
  "issue": "New starter account request",
  "priority": "P4 Low",
  "department": "Marketing",
  "targetHours": 72
 },
 {
  "id": "INC-10227",
  "opened": "2026-08-05T12:57",
  "resolved": "2026-08-06T01:41",
  "category": "Printing",
  "issue": "Cannot install printer driver",
  "priority": "P4 Low",
  "department": "Customer Care",
  "targetHours": 72
 },
 {
  "id": "INC-10219",
  "opened": "2026-08-06T13:57",
  "resolved": "2026-08-07T18:26",
  "category": "Network & VPN",
  "issue": "Office Wi-Fi keeps dropping",
  "priority": "P3 Normal",
  "department": "Sales",
  "targetHours": 24
 },
 {
  "id": "INC-10199",
  "opened": "2026-08-06T16:58",
  "resolved": "2026-08-08T06:21",
  "category": "Account & Password",
  "issue": "New phone needs MFA set up",
  "priority": "P4 Low",
  "department": "Marketing",
  "targetHours": 72
 },
 {
  "id": "INC-10053",
  "opened": "2026-08-07T10:11",
  "resolved": "2026-08-08T01:16",
  "category": "Network & VPN",
  "issue": "VPN will not connect from home",
  "priority": "P3 Normal",
  "department": "Warehouse",
  "targetHours": 24
 },
 {
  "id": "INC-10207",
  "opened": "2026-08-07T10:45",
  "resolved": "2026-08-09T13:59",
  "category": "Email & Teams",
  "issue": "Outlook not receiving email",
  "priority": "P4 Low",
  "department": "Customer Care",
  "targetHours": 72
 },
 {
  "id": "INC-10128",
  "opened": "2026-08-07T11:00",
  "resolved": "2026-08-07T16:58",
  "category": "Email & Teams",
  "issue": "Teams call has no audio",
  "priority": "P2 High",
  "department": "HR",
  "targetHours": 8
 },
 {
  "id": "INC-10237",
  "opened": "2026-08-07T11:20",
  "resolved": "2026-08-07T18:54",
  "category": "Account & Password",
  "issue": "New starter account request",
  "priority": "P2 High",
  "department": "Marketing",
  "targetHours": 8
 },
 {
  "id": "INC-10221",
  "opened": "2026-08-07T11:49",
  "resolved": "2026-08-07T16:30",
  "category": "Printing",
  "issue": "Printer jam on 2nd floor",
  "priority": "P4 Low",
  "department": "Finance",
  "targetHours": 72
 },
 {
  "id": "INC-10194",
  "opened": "2026-08-07T12:20",
  "resolved": "2026-08-07T13:51",
  "category": "Files & OneDrive",
  "issue": "Cannot open SharePoint folder",
  "priority": "P1 Critical",
  "department": "Sales",
  "targetHours": 4
 },
 {
  "id": "INC-10203",
  "opened": "2026-08-07T13:17",
  "resolved": "2026-08-07T23:31",
  "category": "Network & VPN",
  "issue": "Cannot reach internal website",
  "priority": "P3 Normal",
  "department": "HR",
  "targetHours": 24
 },
 {
  "id": "INC-10082",
  "opened": "2026-08-07T13:46",
  "resolved": "2026-08-08T11:07",
  "category": "Hardware",
  "issue": "Docking station not detecting screens",
  "priority": "P3 Normal",
  "department": "Sales",
  "targetHours": 24
 },
 {
  "id": "INC-10075",
  "opened": "2026-08-07T14:07",
  "resolved": "2026-08-08T03:43",
  "category": "Network & VPN",
  "issue": "VPN will not connect from home",
  "priority": "P3 Normal",
  "department": "Finance",
  "targetHours": 24
 },
 {
  "id": "INC-10092",
  "opened": "2026-08-07T14:15",
  "resolved": "2026-08-09T11:33",
  "category": "Email & Teams",
  "issue": "Teams call has no audio",
  "priority": "P4 Low",
  "department": "Marketing",
  "targetHours": 72
 },
 {
  "id": "INC-10034",
  "opened": "2026-08-07T15:57",
  "resolved": "2026-08-07T18:40",
  "category": "Email & Teams",
  "issue": "Shared mailbox missing",
  "priority": "P1 Critical",
  "department": "Warehouse",
  "targetHours": 4
 },
 {
  "id": "INC-10059",
  "opened": "2026-08-07T17:11",
  "resolved": "2026-08-10T07:34",
  "category": "Hardware",
  "issue": "Laptop running very slowly",
  "priority": "P4 Low",
  "department": "Warehouse",
  "targetHours": 72
 },
 {
  "id": "INC-10215",
  "opened": "2026-08-07T17:54",
  "resolved": "2026-08-10T05:07",
  "category": "Printing",
  "issue": "Cannot install printer driver",
  "priority": "P4 Low",
  "department": "HR",
  "targetHours": 72
 },
 {
  "id": "INC-10011",
  "opened": "2026-08-10T09:40",
  "resolved": "2026-08-11T09:36",
  "category": "Email & Teams",
  "issue": "Shared mailbox missing",
  "priority": "P3 Normal",
  "department": "Marketing",
  "targetHours": 24
 },
 {
  "id": "INC-10016",
  "opened": "2026-08-11T11:44",
  "resolved": "2026-08-11T20:16",
  "category": "Hardware",
  "issue": "Replacement charger request",
  "priority": "P2 High",
  "department": "Marketing",
  "targetHours": 8
 },
 {
  "id": "INC-10042",
  "opened": "2026-08-11T15:09",
  "resolved": "2026-08-13T17:03",
  "category": "Email & Teams",
  "issue": "Outlook not receiving email",
  "priority": "P4 Low",
  "department": "Sales",
  "targetHours": 72
 },
 {
  "id": "INC-10234",
  "opened": "2026-08-12T12:21",
  "resolved": "2026-08-14T19:43",
  "category": "Hardware",
  "issue": "Keyboard keys not working",
  "priority": "P4 Low",
  "department": "Finance",
  "targetHours": 72
 },
 {
  "id": "INC-10035",
  "opened": "2026-08-12T12:33",
  "resolved": "2026-08-12T18:36",
  "category": "Account & Password",
  "issue": "New starter account request",
  "priority": "P2 High",
  "department": "Warehouse",
  "targetHours": 8
 },
 {
  "id": "INC-10029",
  "opened": "2026-08-13T09:56",
  "resolved": "2026-08-14T19:45",
  "category": "Account & Password",
  "issue": "New phone needs MFA set up",
  "priority": "P4 Low",
  "department": "Customer Care",
  "targetHours": 72
 },
 {
  "id": "INC-10154",
  "opened": "2026-08-13T11:25",
  "resolved": "2026-08-13T11:37",
  "category": "Network & VPN",
  "issue": "Cannot reach internal website",
  "priority": "P2 High",
  "department": "HR",
  "targetHours": 8
 },
 {
  "id": "INC-10112",
  "opened": "2026-08-13T11:27",
  "resolved": "2026-08-13T23:43",
  "category": "Email & Teams",
  "issue": "Calendar will not sync on phone",
  "priority": "P3 Normal",
  "department": "Customer Care",
  "targetHours": 24
 },
 {
  "id": "INC-10064",
  "opened": "2026-08-14T09:40",
  "resolved": "2026-08-15T01:55",
  "category": "Printing",
  "issue": "Cannot install printer driver",
  "priority": "P3 Normal",
  "department": "Marketing",
  "targetHours": 24
 },
 {
  "id": "INC-10027",
  "opened": "2026-08-14T09:53",
  "resolved": "2026-08-16T13:17",
  "category": "Account & Password",
  "issue": "MFA prompt not arriving",
  "priority": "P4 Low",
  "department": "Marketing",
  "targetHours": 72
 },
 {
  "id": "INC-10185",
  "opened": "2026-08-14T10:24",
  "resolved": "2026-08-14T13:29",
  "category": "Printing",
  "issue": "Cannot install printer driver",
  "priority": "P1 Critical",
  "department": "Sales",
  "targetHours": 4
 },
 {
  "id": "INC-10118",
  "opened": "2026-08-14T11:29",
  "resolved": null,
  "category": "Account & Password",
  "issue": "Password reset request",
  "priority": "P3 Normal",
  "department": "HR",
  "targetHours": 24
 },
 {
  "id": "INC-10230",
  "opened": "2026-08-14T11:56",
  "resolved": "2026-08-14T14:01",
  "category": "Account & Password",
  "issue": "New phone needs MFA set up",
  "priority": "P2 High",
  "department": "Marketing",
  "targetHours": 8
 },
 {
  "id": "INC-10150",
  "opened": "2026-08-14T11:58",
  "resolved": "2026-08-15T08:45",
  "category": "Network & VPN",
  "issue": "Office Wi-Fi keeps dropping",
  "priority": "P3 Normal",
  "department": "Finance",
  "targetHours": 24
 },
 {
  "id": "INC-10055",
  "opened": "2026-08-14T11:59",
  "resolved": "2026-08-15T17:42",
  "category": "Files & OneDrive",
  "issue": "Recover deleted file",
  "priority": "P3 Normal",
  "department": "Marketing",
  "targetHours": 24
 },
 {
  "id": "INC-10216",
  "opened": "2026-08-14T12:10",
  "resolved": "2026-08-15T03:05",
  "category": "Account & Password",
  "issue": "New phone needs MFA set up",
  "priority": "P3 Normal",
  "department": "Finance",
  "targetHours": 24
 },
 {
  "id": "INC-10045",
  "opened": "2026-08-14T17:47",
  "resolved": "2026-08-17T00:08",
  "category": "Hardware",
  "issue": "Replacement charger request",
  "priority": "P4 Low",
  "department": "Finance",
  "targetHours": 72
 },
 {
  "id": "INC-10085",
  "opened": "2026-08-17T09:36",
  "resolved": "2026-08-19T05:02",
  "category": "Email & Teams",
  "issue": "Teams call has no audio",
  "priority": "P4 Low",
  "department": "Warehouse",
  "targetHours": 72
 },
 {
  "id": "INC-10077",
  "opened": "2026-08-18T11:25",
  "resolved": "2026-08-20T05:03",
  "category": "Network & VPN",
  "issue": "Cannot reach internal website",
  "priority": "P4 Low",
  "department": "Warehouse",
  "targetHours": 72
 },
 {
  "id": "INC-10177",
  "opened": "2026-08-18T11:52",
  "resolved": "2026-08-19T12:19",
  "category": "Account & Password",
  "issue": "MFA prompt not arriving",
  "priority": "P3 Normal",
  "department": "Finance",
  "targetHours": 24
 },
 {
  "id": "INC-10174",
  "opened": "2026-08-18T12:30",
  "resolved": "2026-08-19T00:52",
  "category": "Email & Teams",
  "issue": "Teams call has no audio",
  "priority": "P3 Normal",
  "department": "Customer Care",
  "targetHours": 24
 },
 {
  "id": "INC-10063",
  "opened": "2026-08-18T17:03",
  "resolved": "2026-08-18T17:50",
  "category": "Account & Password",
  "issue": "Password reset request",
  "priority": "P3 Normal",
  "department": "HR",
  "targetHours": 24
 },
 {
  "id": "INC-10144",
  "opened": "2026-08-19T09:39",
  "resolved": "2026-08-20T02:22",
  "category": "Account & Password",
  "issue": "Password reset request",
  "priority": "P3 Normal",
  "department": "Sales",
  "targetHours": 24
 },
 {
  "id": "INC-10074",
  "opened": "2026-08-19T13:11",
  "resolved": "2026-08-19T15:38",
  "category": "Network & VPN",
  "issue": "Cannot reach internal website",
  "priority": "P1 Critical",
  "department": "HR",
  "targetHours": 4
 },
 {
  "id": "INC-10052",
  "opened": "2026-08-19T13:24",
  "resolved": null,
  "category": "Email & Teams",
  "issue": "Calendar will not sync on phone",
  "priority": "P3 Normal",
  "department": "Warehouse",
  "targetHours": 24
 },
 {
  "id": "INC-10166",
  "opened": "2026-08-19T14:18",
  "resolved": "2026-08-20T17:54",
  "category": "Printing",
  "issue": "Printer offline",
  "priority": "P3 Normal",
  "department": "HR",
  "targetHours": 24
 },
 {
  "id": "INC-10123",
  "opened": "2026-08-19T15:49",
  "resolved": "2026-08-20T09:40",
  "category": "Account & Password",
  "issue": "New starter account request",
  "priority": "P3 Normal",
  "department": "Sales",
  "targetHours": 24
 },
 {
  "id": "INC-10231",
  "opened": "2026-08-20T10:17",
  "resolved": "2026-08-20T16:39",
  "category": "Account & Password",
  "issue": "New phone needs MFA set up",
  "priority": "P2 High",
  "department": "Sales",
  "targetHours": 8
 },
 {
  "id": "INC-10047",
  "opened": "2026-08-20T11:23",
  "resolved": "2026-08-21T09:12",
  "category": "Account & Password",
  "issue": "Password reset request",
  "priority": "P4 Low",
  "department": "HR",
  "targetHours": 72
 },
 {
  "id": "INC-10091",
  "opened": "2026-08-20T15:02",
  "resolved": "2026-08-22T08:22",
  "category": "Account & Password",
  "issue": "MFA prompt not arriving",
  "priority": "P4 Low",
  "department": "Marketing",
  "targetHours": 72
 },
 {
  "id": "INC-10181",
  "opened": "2026-08-20T16:04",
  "resolved": "2026-08-21T01:57",
  "category": "Hardware",
  "issue": "Keyboard keys not working",
  "priority": "P2 High",
  "department": "Finance",
  "targetHours": 8
 },
 {
  "id": "INC-10008",
  "opened": "2026-08-21T10:07",
  "resolved": "2026-08-21T19:31",
  "category": "Email & Teams",
  "issue": "Outlook not receiving email",
  "priority": "P3 Normal",
  "department": "Finance",
  "targetHours": 24
 },
 {
  "id": "INC-10094",
  "opened": "2026-08-21T11:03",
  "resolved": "2026-08-23T08:49",
  "category": "Hardware",
  "issue": "Keyboard keys not working",
  "priority": "P4 Low",
  "department": "HR",
  "targetHours": 72
 },
 {
  "id": "INC-10204",
  "opened": "2026-08-21T11:13",
  "resolved": "2026-08-22T01:04",
  "category": "Hardware",
  "issue": "Keyboard keys not working",
  "priority": "P3 Normal",
  "department": "Warehouse",
  "targetHours": 24
 },
 {
  "id": "INC-10038",
  "opened": "2026-08-21T12:44",
  "resolved": "2026-08-21T21:28",
  "category": "Hardware",
  "issue": "Replacement charger request",
  "priority": "P2 High",
  "department": "HR",
  "targetHours": 8
 },
 {
  "id": "INC-10048",
  "opened": "2026-08-21T13:46",
  "resolved": "2026-08-21T20:14",
  "category": "Email & Teams",
  "issue": "Teams call has no audio",
  "priority": "P2 High",
  "department": "Marketing",
  "targetHours": 8
 },
 {
  "id": "INC-10114",
  "opened": "2026-08-24T09:53",
  "resolved": "2026-08-24T18:16",
  "category": "Account & Password",
  "issue": "New starter account request",
  "priority": "P2 High",
  "department": "Marketing",
  "targetHours": 8
 },
 {
  "id": "INC-10086",
  "opened": "2026-08-24T10:27",
  "resolved": "2026-08-24T13:49",
  "category": "Email & Teams",
  "issue": "Teams call has no audio",
  "priority": "P2 High",
  "department": "Sales",
  "targetHours": 8
 },
 {
  "id": "INC-10012",
  "opened": "2026-08-24T11:12",
  "resolved": "2026-08-25T18:23",
  "category": "Printing",
  "issue": "Printer jam on 2nd floor",
  "priority": "P3 Normal",
  "department": "Marketing",
  "targetHours": 24
 },
 {
  "id": "INC-10151",
  "opened": "2026-08-25T10:37",
  "resolved": "2026-08-27T04:50",
  "category": "Files & OneDrive",
  "issue": "OneDrive not syncing",
  "priority": "P4 Low",
  "department": "Finance",
  "targetHours": 72
 },
 {
  "id": "INC-10165",
  "opened": "2026-08-25T11:20",
  "resolved": "2026-08-28T05:11",
  "category": "Hardware",
  "issue": "Docking station not detecting screens",
  "priority": "P4 Low",
  "department": "Warehouse",
  "targetHours": 72
 },
 {
  "id": "INC-10090",
  "opened": "2026-08-25T12:06",
  "resolved": "2026-08-27T13:16",
  "category": "Files & OneDrive",
  "issue": "Need access to team folder",
  "priority": "P4 Low",
  "department": "Warehouse",
  "targetHours": 72
 },
 {
  "id": "INC-10124",
  "opened": "2026-08-25T14:07",
  "resolved": "2026-08-25T15:50",
  "category": "Account & Password",
  "issue": "Password reset request",
  "priority": "P2 High",
  "department": "HR",
  "targetHours": 8
 },
 {
  "id": "INC-10030",
  "opened": "2026-08-25T16:48",
  "resolved": "2026-08-26T08:58",
  "category": "Files & OneDrive",
  "issue": "OneDrive not syncing",
  "priority": "P3 Normal",
  "department": "Warehouse",
  "targetHours": 24
 },
 {
  "id": "INC-10071",
  "opened": "2026-08-25T17:45",
  "resolved": "2026-08-27T17:32",
  "category": "Account & Password",
  "issue": "Password reset request",
  "priority": "P4 Low",
  "department": "Sales",
  "targetHours": 72
 },
 {
  "id": "INC-10146",
  "opened": "2026-08-27T14:06",
  "resolved": "2026-08-28T00:20",
  "category": "Email & Teams",
  "issue": "Calendar will not sync on phone",
  "priority": "P3 Normal",
  "department": "Customer Care",
  "targetHours": 24
 },
 {
  "id": "INC-10173",
  "opened": "2026-08-27T16:02",
  "resolved": "2026-08-28T13:41",
  "category": "Files & OneDrive",
  "issue": "OneDrive not syncing",
  "priority": "P3 Normal",
  "department": "Warehouse",
  "targetHours": 24
 },
 {
  "id": "INC-10209",
  "opened": "2026-08-27T17:08",
  "resolved": "2026-08-29T09:52",
  "category": "Email & Teams",
  "issue": "Calendar will not sync on phone",
  "priority": "P4 Low",
  "department": "Marketing",
  "targetHours": 72
 },
 {
  "id": "INC-10058",
  "opened": "2026-08-27T17:47",
  "resolved": "2026-08-27T18:12",
  "category": "Printing",
  "issue": "Printer jam on 2nd floor",
  "priority": "P2 High",
  "department": "Finance",
  "targetHours": 8
 },
 {
  "id": "INC-10197",
  "opened": "2026-08-28T09:01",
  "resolved": "2026-08-28T16:28",
  "category": "Account & Password",
  "issue": "New starter account request",
  "priority": "P3 Normal",
  "department": "Warehouse",
  "targetHours": 24
 },
 {
  "id": "INC-10158",
  "opened": "2026-08-28T16:45",
  "resolved": "2026-08-28T23:17",
  "category": "Account & Password",
  "issue": "Account locked after failed logins",
  "priority": "P2 High",
  "department": "HR",
  "targetHours": 8
 },
 {
  "id": "INC-10120",
  "opened": "2026-08-28T17:18",
  "resolved": "2026-08-29T19:55",
  "category": "Account & Password",
  "issue": "Password reset request",
  "priority": "P3 Normal",
  "department": "Finance",
  "targetHours": 24
 },
 {
  "id": "INC-10104",
  "opened": "2026-08-28T17:19",
  "resolved": "2026-08-29T04:39",
  "category": "Printing",
  "issue": "Printer jam on 2nd floor",
  "priority": "P3 Normal",
  "department": "Sales",
  "targetHours": 24
 },
 {
  "id": "INC-10193",
  "opened": "2026-08-28T17:40",
  "resolved": "2026-08-29T11:28",
  "category": "Account & Password",
  "issue": "Password reset request",
  "priority": "P3 Normal",
  "department": "HR",
  "targetHours": 24
 },
 {
  "id": "INC-10162",
  "opened": "2026-09-01T11:46",
  "resolved": "2026-09-02T08:31",
  "category": "Files & OneDrive",
  "issue": "Need access to team folder",
  "priority": "P3 Normal",
  "department": "HR",
  "targetHours": 24
 },
 {
  "id": "INC-10025",
  "opened": "2026-09-01T14:12",
  "resolved": "2026-09-02T09:37",
  "category": "Network & VPN",
  "issue": "Office Wi-Fi keeps dropping",
  "priority": "P4 Low",
  "department": "Marketing",
  "targetHours": 72
 },
 {
  "id": "INC-10145",
  "opened": "2026-09-01T14:32",
  "resolved": "2026-09-02T13:28",
  "category": "Email & Teams",
  "issue": "Outlook not receiving email",
  "priority": "P3 Normal",
  "department": "Warehouse",
  "targetHours": 24
 },
 {
  "id": "INC-10149",
  "opened": "2026-09-02T13:24",
  "resolved": "2026-09-02T20:58",
  "category": "Files & OneDrive",
  "issue": "Recover deleted file",
  "priority": "P2 High",
  "department": "Warehouse",
  "targetHours": 8
 },
 {
  "id": "INC-10098",
  "opened": "2026-09-02T15:35",
  "resolved": "2026-09-03T07:00",
  "category": "Email & Teams",
  "issue": "Teams call has no audio",
  "priority": "P2 High",
  "department": "Warehouse",
  "targetHours": 8
 },
 {
  "id": "INC-10142",
  "opened": "2026-09-02T16:50",
  "resolved": "2026-09-03T16:02",
  "category": "Files & OneDrive",
  "issue": "Recover deleted file",
  "priority": "P3 Normal",
  "department": "Warehouse",
  "targetHours": 24
 },
 {
  "id": "INC-10220",
  "opened": "2026-09-03T11:03",
  "resolved": null,
  "category": "Printing",
  "issue": "Printer jam on 2nd floor",
  "priority": "P3 Normal",
  "department": "Sales",
  "targetHours": 24
 },
 {
  "id": "INC-10168",
  "opened": "2026-09-03T12:28",
  "resolved": "2026-09-04T12:03",
  "category": "Hardware",
  "issue": "Keyboard keys not working",
  "priority": "P3 Normal",
  "department": "HR",
  "targetHours": 24
 },
 {
  "id": "INC-10226",
  "opened": "2026-09-04T09:36",
  "resolved": "2026-09-04T22:41",
  "category": "Account & Password",
  "issue": "New phone needs MFA set up",
  "priority": "P3 Normal",
  "department": "Finance",
  "targetHours": 24
 },
 {
  "id": "INC-10196",
  "opened": "2026-09-04T11:42",
  "resolved": "2026-09-08T08:28",
  "category": "Account & Password",
  "issue": "Password reset request",
  "priority": "P4 Low",
  "department": "Sales",
  "targetHours": 72
 },
 {
  "id": "INC-10080",
  "opened": "2026-09-04T12:12",
  "resolved": "2026-09-05T10:29",
  "category": "Network & VPN",
  "issue": "Office Wi-Fi keeps dropping",
  "priority": "P3 Normal",
  "department": "Marketing",
  "targetHours": 24
 },
 {
  "id": "INC-10172",
  "opened": "2026-09-04T13:39",
  "resolved": "2026-09-07T03:00",
  "category": "Hardware",
  "issue": "Docking station not detecting screens",
  "priority": "P4 Low",
  "department": "HR",
  "targetHours": 72
 },
 {
  "id": "INC-10023",
  "opened": "2026-09-04T17:42",
  "resolved": "2026-09-05T01:28",
  "category": "Printing",
  "issue": "Printer jam on 2nd floor",
  "priority": "P2 High",
  "department": "Customer Care",
  "targetHours": 8
 },
 {
  "id": "INC-10161",
  "opened": "2026-09-07T10:25",
  "resolved": "2026-09-08T00:34",
  "category": "Account & Password",
  "issue": "Account locked after failed logins",
  "priority": "P3 Normal",
  "department": "Marketing",
  "targetHours": 24
 },
 {
  "id": "INC-10126",
  "opened": "2026-09-07T10:26",
  "resolved": "2026-09-08T12:53",
  "category": "Network & VPN",
  "issue": "VPN will not connect from home",
  "priority": "P3 Normal",
  "department": "Finance",
  "targetHours": 24
 },
 {
  "id": "INC-10108",
  "opened": "2026-09-07T15:00",
  "resolved": "2026-09-10T03:45",
  "category": "Files & OneDrive",
  "issue": "OneDrive not syncing",
  "priority": "P4 Low",
  "department": "Finance",
  "targetHours": 72
 },
 {
  "id": "INC-10033",
  "opened": "2026-09-07T17:20",
  "resolved": "2026-09-09T12:23",
  "category": "Hardware",
  "issue": "Keyboard keys not working",
  "priority": "P4 Low",
  "department": "Customer Care",
  "targetHours": 72
 },
 {
  "id": "INC-10039",
  "opened": "2026-09-08T09:14",
  "resolved": "2026-09-08T11:42",
  "category": "Network & VPN",
  "issue": "Cannot reach internal website",
  "priority": "P1 Critical",
  "department": "HR",
  "targetHours": 4
 },
 {
  "id": "INC-10224",
  "opened": "2026-09-08T13:37",
  "resolved": null,
  "category": "Account & Password",
  "issue": "New phone needs MFA set up",
  "priority": "P3 Normal",
  "department": "Customer Care",
  "targetHours": 24
 },
 {
  "id": "INC-10136",
  "opened": "2026-09-08T15:42",
  "resolved": "2026-09-09T04:55",
  "category": "Account & Password",
  "issue": "MFA prompt not arriving",
  "priority": "P4 Low",
  "department": "Marketing",
  "targetHours": 72
 },
 {
  "id": "INC-10028",
  "opened": "2026-09-09T11:36",
  "resolved": "2026-09-10T07:31",
  "category": "Files & OneDrive",
  "issue": "Cannot open SharePoint folder",
  "priority": "P3 Normal",
  "department": "HR",
  "targetHours": 24
 },
 {
  "id": "INC-10006",
  "opened": "2026-09-09T13:34",
  "resolved": "2026-09-10T11:13",
  "category": "Account & Password",
  "issue": "MFA prompt not arriving",
  "priority": "P3 Normal",
  "department": "Marketing",
  "targetHours": 24
 },
 {
  "id": "INC-10116",
  "opened": "2026-09-09T15:29",
  "resolved": "2026-09-09T18:00",
  "category": "Files & OneDrive",
  "issue": "Recover deleted file",
  "priority": "P1 Critical",
  "department": "Sales",
  "targetHours": 4
 },
 {
  "id": "INC-10054",
  "opened": "2026-09-09T16:24",
  "resolved": "2026-09-11T07:38",
  "category": "Files & OneDrive",
  "issue": "Need access to team folder",
  "priority": "P4 Low",
  "department": "Finance",
  "targetHours": 72
 },
 {
  "id": "INC-10043",
  "opened": "2026-09-10T09:52",
  "resolved": "2026-09-11T21:05",
  "category": "Email & Teams",
  "issue": "Teams call has no audio",
  "priority": "P3 Normal",
  "department": "Marketing",
  "targetHours": 24
 },
 {
  "id": "INC-10208",
  "opened": "2026-09-10T16:46",
  "resolved": null,
  "category": "Email & Teams",
  "issue": "Out-of-office not working",
  "priority": "P3 Normal",
  "department": "Finance",
  "targetHours": 24
 },
 {
  "id": "INC-10214",
  "opened": "2026-09-11T09:18",
  "resolved": null,
  "category": "Email & Teams",
  "issue": "Shared mailbox missing",
  "priority": "P4 Low",
  "department": "Sales",
  "targetHours": 72
 },
 {
  "id": "INC-10068",
  "opened": "2026-09-11T09:29",
  "resolved": "2026-09-11T18:16",
  "category": "Account & Password",
  "issue": "MFA prompt not arriving",
  "priority": "P3 Normal",
  "department": "Warehouse",
  "targetHours": 24
 },
 {
  "id": "INC-10143",
  "opened": "2026-09-11T10:20",
  "resolved": null,
  "category": "Account & Password",
  "issue": "MFA prompt not arriving",
  "priority": "P4 Low",
  "department": "Marketing",
  "targetHours": 72
 },
 {
  "id": "INC-10036",
  "opened": "2026-09-11T11:58",
  "resolved": "2026-09-12T05:45",
  "category": "Network & VPN",
  "issue": "Office Wi-Fi keeps dropping",
  "priority": "P3 Normal",
  "department": "Warehouse",
  "targetHours": 24
 },
 {
  "id": "INC-10201",
  "opened": "2026-09-11T13:31",
  "resolved": "2026-09-13T02:12",
  "category": "Network & VPN",
  "issue": "Office Wi-Fi keeps dropping",
  "priority": "P4 Low",
  "department": "Customer Care",
  "targetHours": 72
 },
 {
  "id": "INC-10139",
  "opened": "2026-09-11T13:57",
  "resolved": "2026-09-11T21:47",
  "category": "Files & OneDrive",
  "issue": "Cannot open SharePoint folder",
  "priority": "P2 High",
  "department": "Marketing",
  "targetHours": 8
 },
 {
  "id": "INC-10157",
  "opened": "2026-09-11T13:59",
  "resolved": "2026-09-12T08:36",
  "category": "Files & OneDrive",
  "issue": "Need access to team folder",
  "priority": "P3 Normal",
  "department": "Finance",
  "targetHours": 24
 },
 {
  "id": "INC-10069",
  "opened": "2026-09-11T14:07",
  "resolved": "2026-09-11T16:58",
  "category": "Printing",
  "issue": "Cannot install printer driver",
  "priority": "P2 High",
  "department": "Finance",
  "targetHours": 8
 },
 {
  "id": "INC-10061",
  "opened": "2026-09-11T14:40",
  "resolved": "2026-09-12T23:56",
  "category": "Files & OneDrive",
  "issue": "OneDrive not syncing",
  "priority": "P3 Normal",
  "department": "Marketing",
  "targetHours": 24
 },
 {
  "id": "INC-10210",
  "opened": "2026-09-11T15:39",
  "resolved": "2026-09-11T15:51",
  "category": "Hardware",
  "issue": "Laptop running very slowly",
  "priority": "P4 Low",
  "department": "Customer Care",
  "targetHours": 72
 },
 {
  "id": "INC-10099",
  "opened": "2026-09-11T15:55",
  "resolved": "2026-09-12T16:23",
  "category": "Account & Password",
  "issue": "Account locked after failed logins",
  "priority": "P3 Normal",
  "department": "Marketing",
  "targetHours": 24
 },
 {
  "id": "INC-10127",
  "opened": "2026-09-11T16:13",
  "resolved": "2026-09-12T02:54",
  "category": "Hardware",
  "issue": "Laptop will not power on",
  "priority": "P3 Normal",
  "department": "Finance",
  "targetHours": 24
 },
 {
  "id": "INC-10153",
  "opened": "2026-09-11T16:56",
  "resolved": "2026-09-13T01:18",
  "category": "Hardware",
  "issue": "Docking station not detecting screens",
  "priority": "P3 Normal",
  "department": "HR",
  "targetHours": 24
 },
 {
  "id": "INC-10065",
  "opened": "2026-09-11T17:02",
  "resolved": "2026-09-11T20:19",
  "category": "Account & Password",
  "issue": "New starter account request",
  "priority": "P1 Critical",
  "department": "HR",
  "targetHours": 4
 },
 {
  "id": "INC-10182",
  "opened": "2026-09-11T17:20",
  "resolved": "2026-09-12T14:00",
  "category": "Email & Teams",
  "issue": "Calendar will not sync on phone",
  "priority": "P3 Normal",
  "department": "Marketing",
  "targetHours": 24
 },
 {
  "id": "INC-10081",
  "opened": "2026-09-11T17:22",
  "resolved": "2026-09-13T00:12",
  "category": "Account & Password",
  "issue": "New starter account request",
  "priority": "P4 Low",
  "department": "Sales",
  "targetHours": 72
 },
 {
  "id": "INC-10228",
  "opened": "2026-09-14T13:27",
  "resolved": "2026-09-14T23:14",
  "category": "Account & Password",
  "issue": "Password reset request",
  "priority": "P3 Normal",
  "department": "Customer Care",
  "targetHours": 24
 },
 {
  "id": "INC-10096",
  "opened": "2026-09-14T15:44",
  "resolved": "2026-09-15T15:36",
  "category": "Network & VPN",
  "issue": "Office Wi-Fi keeps dropping",
  "priority": "P3 Normal",
  "department": "Marketing",
  "targetHours": 24
 },
 {
  "id": "INC-10083",
  "opened": "2026-09-15T09:30",
  "resolved": "2026-09-16T11:39",
  "category": "Printing",
  "issue": "Printer jam on 2nd floor",
  "priority": "P4 Low",
  "department": "Finance",
  "targetHours": 72
 },
 {
  "id": "INC-10072",
  "opened": "2026-09-16T09:06",
  "resolved": "2026-09-17T07:16",
  "category": "Files & OneDrive",
  "issue": "OneDrive not syncing",
  "priority": "P3 Normal",
  "department": "Customer Care",
  "targetHours": 24
 },
 {
  "id": "INC-10225",
  "opened": "2026-09-16T09:49",
  "resolved": "2026-09-17T14:59",
  "category": "Network & VPN",
  "issue": "Cannot reach internal website",
  "priority": "P3 Normal",
  "department": "Finance",
  "targetHours": 24
 },
 {
  "id": "INC-10046",
  "opened": "2026-09-16T10:38",
  "resolved": "2026-09-17T02:37",
  "category": "Hardware",
  "issue": "Laptop running very slowly",
  "priority": "P3 Normal",
  "department": "Finance",
  "targetHours": 24
 },
 {
  "id": "INC-10087",
  "opened": "2026-09-16T13:14",
  "resolved": "2026-09-17T08:22",
  "category": "Email & Teams",
  "issue": "Calendar will not sync on phone",
  "priority": "P3 Normal",
  "department": "HR",
  "targetHours": 24
 },
 {
  "id": "INC-10222",
  "opened": "2026-09-17T11:54",
  "resolved": "2026-09-18T05:25",
  "category": "Account & Password",
  "issue": "Password reset request",
  "priority": "P3 Normal",
  "department": "HR",
  "targetHours": 24
 },
 {
  "id": "INC-10205",
  "opened": "2026-09-17T13:26",
  "resolved": null,
  "category": "Email & Teams",
  "issue": "Out-of-office not working",
  "priority": "P3 Normal",
  "department": "Finance",
  "targetHours": 24
 },
 {
  "id": "INC-10062",
  "opened": "2026-09-17T14:18",
  "resolved": "2026-09-20T10:46",
  "category": "Email & Teams",
  "issue": "Calendar will not sync on phone",
  "priority": "P4 Low",
  "department": "Finance",
  "targetHours": 72
 },
 {
  "id": "INC-10156",
  "opened": "2026-09-17T15:37",
  "resolved": "2026-09-17T19:09",
  "category": "Email & Teams",
  "issue": "Out-of-office not working",
  "priority": "P1 Critical",
  "department": "Customer Care",
  "targetHours": 4
 },
 {
  "id": "INC-10105",
  "opened": "2026-09-17T17:34",
  "resolved": "2026-09-17T19:58",
  "category": "Network & VPN",
  "issue": "Cannot reach internal website",
  "priority": "P3 Normal",
  "department": "Sales",
  "targetHours": 24
 },
 {
  "id": "INC-10097",
  "opened": "2026-09-18T09:10",
  "resolved": "2026-09-18T13:54",
  "category": "Printing",
  "issue": "Printer offline",
  "priority": "P3 Normal",
  "department": "Warehouse",
  "targetHours": 24
 },
 {
  "id": "INC-10015",
  "opened": "2026-09-18T09:17",
  "resolved": "2026-09-19T13:32",
  "category": "Account & Password",
  "issue": "Password reset request",
  "priority": "P4 Low",
  "department": "Customer Care",
  "targetHours": 72
 },
 {
  "id": "INC-10007",
  "opened": "2026-09-18T10:56",
  "resolved": "2026-09-19T13:40",
  "category": "Account & Password",
  "issue": "New phone needs MFA set up",
  "priority": "P3 Normal",
  "department": "Finance",
  "targetHours": 24
 },
 {
  "id": "INC-10190",
  "opened": "2026-09-18T11:01",
  "resolved": null,
  "category": "Files & OneDrive",
  "issue": "Recover deleted file",
  "priority": "P3 Normal",
  "department": "Finance",
  "targetHours": 24
 },
 {
  "id": "INC-10018",
  "opened": "2026-09-18T11:23",
  "resolved": null,
  "category": "Account & Password",
  "issue": "Password reset request",
  "priority": "P3 Normal",
  "department": "Customer Care",
  "targetHours": 24
 },
 {
  "id": "INC-10179",
  "opened": "2026-09-18T15:24",
  "resolved": "2026-09-19T04:24",
  "category": "Files & OneDrive",
  "issue": "Recover deleted file",
  "priority": "P3 Normal",
  "department": "Warehouse",
  "targetHours": 24
 },
 {
  "id": "INC-10049",
  "opened": "2026-09-18T16:00",
  "resolved": null,
  "category": "Hardware",
  "issue": "Laptop running very slowly",
  "priority": "P4 Low",
  "department": "HR",
  "targetHours": 72
 },
 {
  "id": "INC-10117",
  "opened": "2026-09-18T17:27",
  "resolved": "2026-09-19T11:13",
  "category": "Hardware",
  "issue": "Laptop will not power on",
  "priority": "P3 Normal",
  "department": "Customer Care",
  "targetHours": 24
 },
 {
  "id": "INC-10106",
  "opened": "2026-09-21T13:44",
  "resolved": "2026-09-24T12:01",
  "category": "Account & Password",
  "issue": "New starter account request",
  "priority": "P4 Low",
  "department": "HR",
  "targetHours": 72
 },
 {
  "id": "INC-10056",
  "opened": "2026-09-21T14:02",
  "resolved": "2026-09-22T06:04",
  "category": "Hardware",
  "issue": "Docking station not detecting screens",
  "priority": "P3 Normal",
  "department": "Finance",
  "targetHours": 24
 },
 {
  "id": "INC-10111",
  "opened": "2026-09-21T16:09",
  "resolved": "2026-09-22T12:58",
  "category": "Email & Teams",
  "issue": "Teams call has no audio",
  "priority": "P3 Normal",
  "department": "Finance",
  "targetHours": 24
 },
 {
  "id": "INC-10236",
  "opened": "2026-09-21T16:51",
  "resolved": "2026-09-21T20:41",
  "category": "Account & Password",
  "issue": "New starter account request",
  "priority": "P2 High",
  "department": "Warehouse",
  "targetHours": 8
 },
 {
  "id": "INC-10175",
  "opened": "2026-09-21T17:00",
  "resolved": "2026-09-23T00:44",
  "category": "Hardware",
  "issue": "Laptop running very slowly",
  "priority": "P4 Low",
  "department": "Finance",
  "targetHours": 72
 },
 {
  "id": "INC-10134",
  "opened": "2026-09-22T09:09",
  "resolved": "2026-09-22T14:53",
  "category": "Email & Teams",
  "issue": "Calendar will not sync on phone",
  "priority": "P2 High",
  "department": "Marketing",
  "targetHours": 8
 },
 {
  "id": "INC-10051",
  "opened": "2026-09-22T11:11",
  "resolved": "2026-09-22T17:07",
  "category": "Account & Password",
  "issue": "Account locked after failed logins",
  "priority": "P2 High",
  "department": "Warehouse",
  "targetHours": 8
 },
 {
  "id": "INC-10133",
  "opened": "2026-09-22T12:02",
  "resolved": "2026-09-22T15:11",
  "category": "Hardware",
  "issue": "Keyboard keys not working",
  "priority": "P1 Critical",
  "department": "Warehouse",
  "targetHours": 4
 },
 {
  "id": "INC-10005",
  "opened": "2026-09-22T16:12",
  "resolved": "2026-09-23T22:56",
  "category": "Email & Teams",
  "issue": "Shared mailbox missing",
  "priority": "P3 Normal",
  "department": "Marketing",
  "targetHours": 24
 },
 {
  "id": "INC-10122",
  "opened": "2026-09-23T17:47",
  "resolved": "2026-09-24T19:00",
  "category": "Email & Teams",
  "issue": "Out-of-office not working",
  "priority": "P4 Low",
  "department": "Finance",
  "targetHours": 72
 },
 {
  "id": "INC-10155",
  "opened": "2026-09-24T13:39",
  "resolved": "2026-09-25T18:20",
  "category": "Email & Teams",
  "issue": "Calendar will not sync on phone",
  "priority": "P3 Normal",
  "department": "Customer Care",
  "targetHours": 24
 },
 {
  "id": "INC-10002",
  "opened": "2026-09-24T17:49",
  "resolved": "2026-09-26T08:02",
  "category": "Account & Password",
  "issue": "New starter account request",
  "priority": "P4 Low",
  "department": "Customer Care",
  "targetHours": 72
 },
 {
  "id": "INC-10119",
  "opened": "2026-09-25T10:08",
  "resolved": "2026-09-27T03:24",
  "category": "Network & VPN",
  "issue": "Cannot reach internal website",
  "priority": "P4 Low",
  "department": "Marketing",
  "targetHours": 72
 },
 {
  "id": "INC-10021",
  "opened": "2026-09-25T10:33",
  "resolved": "2026-09-28T04:39",
  "category": "Files & OneDrive",
  "issue": "Recover deleted file",
  "priority": "P4 Low",
  "department": "Finance",
  "targetHours": 72
 },
 {
  "id": "INC-10206",
  "opened": "2026-09-25T11:02",
  "resolved": "2026-09-27T01:03",
  "category": "Account & Password",
  "issue": "New starter account request",
  "priority": "P3 Normal",
  "department": "Finance",
  "targetHours": 24
 },
 {
  "id": "INC-10189",
  "opened": "2026-09-25T13:28",
  "resolved": "2026-09-26T03:35",
  "category": "Files & OneDrive",
  "issue": "Need access to team folder",
  "priority": "P3 Normal",
  "department": "Finance",
  "targetHours": 24
 },
 {
  "id": "INC-10138",
  "opened": "2026-09-25T13:55",
  "resolved": "2026-09-26T11:50",
  "category": "Account & Password",
  "issue": "MFA prompt not arriving",
  "priority": "P3 Normal",
  "department": "Sales",
  "targetHours": 24
 },
 {
  "id": "INC-10014",
  "opened": "2026-09-25T14:52",
  "resolved": "2026-09-25T22:57",
  "category": "Network & VPN",
  "issue": "VPN will not connect from home",
  "priority": "P2 High",
  "department": "HR",
  "targetHours": 8
 },
 {
  "id": "INC-10170",
  "opened": "2026-09-25T17:33",
  "resolved": "2026-09-25T21:59",
  "category": "Files & OneDrive",
  "issue": "Cannot open SharePoint folder",
  "priority": "P2 High",
  "department": "Finance",
  "targetHours": 8
 },
 {
  "id": "INC-10239",
  "opened": "2026-09-28T13:43",
  "resolved": null,
  "category": "Hardware",
  "issue": "Laptop will not power on",
  "priority": "P3 Normal",
  "department": "Marketing",
  "targetHours": 24
 },
 {
  "id": "INC-10238",
  "opened": "2026-09-28T16:14",
  "resolved": "2026-09-29T20:34",
  "category": "Printing",
  "issue": "Printer offline",
  "priority": "P3 Normal",
  "department": "Finance",
  "targetHours": 24
 },
 {
  "id": "INC-10184",
  "opened": "2026-09-29T09:59",
  "resolved": "2026-09-29T16:31",
  "category": "Account & Password",
  "issue": "New starter account request",
  "priority": "P4 Low",
  "department": "Warehouse",
  "targetHours": 72
 },
 {
  "id": "INC-10164",
  "opened": "2026-09-29T10:33",
  "resolved": "2026-09-30T12:27",
  "category": "Files & OneDrive",
  "issue": "Need access to team folder",
  "priority": "P3 Normal",
  "department": "Marketing",
  "targetHours": 24
 },
 {
  "id": "INC-10031",
  "opened": "2026-09-29T10:47",
  "resolved": "2026-09-29T18:14",
  "category": "Printing",
  "issue": "Cannot install printer driver",
  "priority": "P2 High",
  "department": "Sales",
  "targetHours": 8
 },
 {
  "id": "INC-10169",
  "opened": "2026-09-29T11:17",
  "resolved": "2026-09-30T07:54",
  "category": "Email & Teams",
  "issue": "Out-of-office not working",
  "priority": "P3 Normal",
  "department": "Finance",
  "targetHours": 24
 },
 {
  "id": "INC-10084",
  "opened": "2026-09-29T11:49",
  "resolved": "2026-09-30T00:43",
  "category": "Account & Password",
  "issue": "Account locked after failed logins",
  "priority": "P2 High",
  "department": "Sales",
  "targetHours": 8
 },
 {
  "id": "INC-10032",
  "opened": "2026-09-29T17:27",
  "resolved": "2026-10-03T09:05",
  "category": "Network & VPN",
  "issue": "Office Wi-Fi keeps dropping",
  "priority": "P4 Low",
  "department": "Sales",
  "targetHours": 72
 },
 {
  "id": "INC-10013",
  "opened": "2026-09-29T17:58",
  "resolved": "2026-09-29T21:30",
  "category": "Files & OneDrive",
  "issue": "Cannot open SharePoint folder",
  "priority": "P2 High",
  "department": "Customer Care",
  "targetHours": 8
 },
 {
  "id": "INC-10088",
  "opened": "2026-09-30T11:43",
  "resolved": "2026-09-30T14:22",
  "category": "Account & Password",
  "issue": "New phone needs MFA set up",
  "priority": "P1 Critical",
  "department": "HR",
  "targetHours": 4
 },
 {
  "id": "INC-10178",
  "opened": "2026-09-30T15:01",
  "resolved": "2026-10-03T00:25",
  "category": "Email & Teams",
  "issue": "Calendar will not sync on phone",
  "priority": "P4 Low",
  "department": "HR",
  "targetHours": 72
 },
 {
  "id": "INC-10044",
  "opened": "2026-09-30T17:54",
  "resolved": "2026-10-01T01:38",
  "category": "Email & Teams",
  "issue": "Outlook not receiving email",
  "priority": "P2 High",
  "department": "Sales",
  "targetHours": 8
 },
 {
  "id": "INC-10223",
  "opened": "2026-10-02T10:14",
  "resolved": "2026-10-02T19:55",
  "category": "Account & Password",
  "issue": "New phone needs MFA set up",
  "priority": "P3 Normal",
  "department": "Sales",
  "targetHours": 24
 },
 {
  "id": "INC-10191",
  "opened": "2026-10-02T12:52",
  "resolved": "2026-10-03T17:22",
  "category": "Email & Teams",
  "issue": "Out-of-office not working",
  "priority": "P3 Normal",
  "department": "Finance",
  "targetHours": 24
 },
 {
  "id": "INC-10202",
  "opened": "2026-10-02T13:11",
  "resolved": "2026-10-02T17:30",
  "category": "Email & Teams",
  "issue": "Teams call has no audio",
  "priority": "P1 Critical",
  "department": "Finance",
  "targetHours": 4
 },
 {
  "id": "INC-10232",
  "opened": "2026-10-02T14:12",
  "resolved": "2026-10-03T04:48",
  "category": "Account & Password",
  "issue": "New phone needs MFA set up",
  "priority": "P4 Low",
  "department": "Finance",
  "targetHours": 72
 },
 {
  "id": "INC-10067",
  "opened": "2026-10-02T14:20",
  "resolved": "2026-10-02T18:33",
  "category": "Account & Password",
  "issue": "Account locked after failed logins",
  "priority": "P3 Normal",
  "department": "Sales",
  "targetHours": 24
 },
 {
  "id": "INC-10212",
  "opened": "2026-10-02T16:04",
  "resolved": null,
  "category": "Hardware",
  "issue": "Laptop will not power on",
  "priority": "P3 Normal",
  "department": "Sales",
  "targetHours": 24
 },
 {
  "id": "INC-10137",
  "opened": "2026-10-02T16:56",
  "resolved": "2026-10-05T21:10",
  "category": "Account & Password",
  "issue": "New starter account request",
  "priority": "P4 Low",
  "department": "HR",
  "targetHours": 72
 },
 {
  "id": "INC-10017",
  "opened": "2026-10-02T17:23",
  "resolved": "2026-10-03T01:12",
  "category": "Email & Teams",
  "issue": "Teams call has no audio",
  "priority": "P2 High",
  "department": "Sales",
  "targetHours": 8
 },
 {
  "id": "INC-10010",
  "opened": "2026-10-02T17:27",
  "resolved": "2026-10-03T23:50",
  "category": "Hardware",
  "issue": "Replacement charger request",
  "priority": "P3 Normal",
  "department": "Marketing",
  "targetHours": 24
 },
 {
  "id": "INC-10188",
  "opened": "2026-10-02T17:45",
  "resolved": "2026-10-04T11:36",
  "category": "Email & Teams",
  "issue": "Teams call has no audio",
  "priority": "P4 Low",
  "department": "Customer Care",
  "targetHours": 72
 },
 {
  "id": "INC-10101",
  "opened": "2026-10-02T17:48",
  "resolved": "2026-10-03T13:32",
  "category": "Files & OneDrive",
  "issue": "Need access to team folder",
  "priority": "P3 Normal",
  "department": "Sales",
  "targetHours": 24
 },
 {
  "id": "INC-10200",
  "opened": "2026-10-05T10:46",
  "resolved": "2026-10-07T18:03",
  "category": "Network & VPN",
  "issue": "VPN will not connect from home",
  "priority": "P4 Low",
  "department": "Customer Care",
  "targetHours": 72
 },
 {
  "id": "INC-10183",
  "opened": "2026-10-05T16:00",
  "resolved": "2026-10-05T20:00",
  "category": "Hardware",
  "issue": "Laptop running very slowly",
  "priority": "P2 High",
  "department": "Warehouse",
  "targetHours": 8
 },
 {
  "id": "INC-10125",
  "opened": "2026-10-07T09:02",
  "resolved": "2026-10-07T11:42",
  "category": "Account & Password",
  "issue": "New phone needs MFA set up",
  "priority": "P1 Critical",
  "department": "Marketing",
  "targetHours": 4
 },
 {
  "id": "INC-10089",
  "opened": "2026-10-07T10:44",
  "resolved": "2026-10-07T11:19",
  "category": "Account & Password",
  "issue": "New phone needs MFA set up",
  "priority": "P1 Critical",
  "department": "Customer Care",
  "targetHours": 4
 },
 {
  "id": "INC-10135",
  "opened": "2026-10-07T12:20",
  "resolved": "2026-10-07T22:54",
  "category": "Email & Teams",
  "issue": "Outlook not receiving email",
  "priority": "P2 High",
  "department": "HR",
  "targetHours": 8
 },
 {
  "id": "INC-10073",
  "opened": "2026-10-09T09:52",
  "resolved": "2026-10-10T19:48",
  "category": "Email & Teams",
  "issue": "Teams call has no audio",
  "priority": "P3 Normal",
  "department": "Warehouse",
  "targetHours": 24
 },
 {
  "id": "INC-10009",
  "opened": "2026-10-09T10:01",
  "resolved": "2026-10-09T12:48",
  "category": "Email & Teams",
  "issue": "Teams call has no audio",
  "priority": "P1 Critical",
  "department": "HR",
  "targetHours": 4
 },
 {
  "id": "INC-10235",
  "opened": "2026-10-09T10:06",
  "resolved": "2026-10-10T05:40",
  "category": "Hardware",
  "issue": "Replacement charger request",
  "priority": "P3 Normal",
  "department": "Customer Care",
  "targetHours": 24
 },
 {
  "id": "INC-10019",
  "opened": "2026-10-09T10:50",
  "resolved": "2026-10-11T09:22",
  "category": "Email & Teams",
  "issue": "Shared mailbox missing",
  "priority": "P4 Low",
  "department": "Warehouse",
  "targetHours": 72
 },
 {
  "id": "INC-10217",
  "opened": "2026-10-09T11:25",
  "resolved": "2026-10-10T09:08",
  "category": "Email & Teams",
  "issue": "Calendar will not sync on phone",
  "priority": "P3 Normal",
  "department": "HR",
  "targetHours": 24
 },
 {
  "id": "INC-10060",
  "opened": "2026-10-09T11:31",
  "resolved": "2026-10-10T13:29",
  "category": "Network & VPN",
  "issue": "VPN will not connect from home",
  "priority": "P3 Normal",
  "department": "Customer Care",
  "targetHours": 24
 },
 {
  "id": "INC-10110",
  "opened": "2026-10-09T12:55",
  "resolved": "2026-10-09T22:46",
  "category": "Printing",
  "issue": "Printer jam on 2nd floor",
  "priority": "P2 High",
  "department": "HR",
  "targetHours": 8
 },
 {
  "id": "INC-10066",
  "opened": "2026-10-09T15:30",
  "resolved": "2026-10-10T03:28",
  "category": "Account & Password",
  "issue": "Account locked after failed logins",
  "priority": "P3 Normal",
  "department": "Warehouse",
  "targetHours": 24
 },
 {
  "id": "INC-10093",
  "opened": "2026-10-09T16:25",
  "resolved": "2026-10-09T20:39",
  "category": "Account & Password",
  "issue": "MFA prompt not arriving",
  "priority": "P1 Critical",
  "department": "Finance",
  "targetHours": 4
 },
 {
  "id": "INC-10020",
  "opened": "2026-10-09T17:48",
  "resolved": "2026-10-11T18:02",
  "category": "Account & Password",
  "issue": "Password reset request",
  "priority": "P4 Low",
  "department": "Warehouse",
  "targetHours": 72
 },
 {
  "id": "INC-10229",
  "opened": "2026-10-12T15:23",
  "resolved": "2026-10-12T21:59",
  "category": "Printing",
  "issue": "Cannot install printer driver",
  "priority": "P2 High",
  "department": "Warehouse",
  "targetHours": 8
 },
 {
  "id": "INC-10187",
  "opened": "2026-10-13T10:56",
  "resolved": "2026-10-14T09:48",
  "category": "Network & VPN",
  "issue": "Office Wi-Fi keeps dropping",
  "priority": "P3 Normal",
  "department": "Customer Care",
  "targetHours": 24
 },
 {
  "id": "INC-10163",
  "opened": "2026-10-13T15:51",
  "resolved": "2026-10-13T20:03",
  "category": "Email & Teams",
  "issue": "Calendar will not sync on phone",
  "priority": "P1 Critical",
  "department": "Finance",
  "targetHours": 4
 },
 {
  "id": "INC-10040",
  "opened": "2026-10-13T16:55",
  "resolved": "2026-10-14T03:08",
  "category": "Email & Teams",
  "issue": "Out-of-office not working",
  "priority": "P2 High",
  "department": "Sales",
  "targetHours": 8
 },
 {
  "id": "INC-10109",
  "opened": "2026-10-16T09:10",
  "resolved": "2026-10-16T10:36",
  "category": "Email & Teams",
  "issue": "Teams call has no audio",
  "priority": "P1 Critical",
  "department": "Marketing",
  "targetHours": 4
 },
 {
  "id": "INC-10159",
  "opened": "2026-10-16T12:03",
  "resolved": "2026-10-16T14:33",
  "category": "Account & Password",
  "issue": "MFA prompt not arriving",
  "priority": "P1 Critical",
  "department": "Warehouse",
  "targetHours": 4
 },
 {
  "id": "INC-10141",
  "opened": "2026-10-16T12:40",
  "resolved": "2026-10-17T10:36",
  "category": "Account & Password",
  "issue": "Account locked after failed logins",
  "priority": "P3 Normal",
  "department": "Marketing",
  "targetHours": 24
 },
 {
  "id": "INC-10107",
  "opened": "2026-10-16T14:34",
  "resolved": "2026-10-16T19:56",
  "category": "Email & Teams",
  "issue": "Outlook not receiving email",
  "priority": "P2 High",
  "department": "Sales",
  "targetHours": 8
 },
 {
  "id": "INC-10076",
  "opened": "2026-10-16T14:42",
  "resolved": "2026-10-19T00:31",
  "category": "Files & OneDrive",
  "issue": "Recover deleted file",
  "priority": "P4 Low",
  "department": "Marketing",
  "targetHours": 72
 },
 {
  "id": "INC-10026",
  "opened": "2026-10-16T15:48",
  "resolved": "2026-10-16T16:00",
  "category": "Hardware",
  "issue": "Replacement charger request",
  "priority": "P4 Low",
  "department": "Finance",
  "targetHours": 72
 },
 {
  "id": "INC-10160",
  "opened": "2026-10-16T16:25",
  "resolved": "2026-10-17T13:47",
  "category": "Email & Teams",
  "issue": "Teams call has no audio",
  "priority": "P3 Normal",
  "department": "HR",
  "targetHours": 24
 },
 {
  "id": "INC-10186",
  "opened": "2026-10-16T16:37",
  "resolved": "2026-10-17T05:39",
  "category": "Hardware",
  "issue": "Keyboard keys not working",
  "priority": "P3 Normal",
  "department": "Marketing",
  "targetHours": 24
 },
 {
  "id": "INC-10140",
  "opened": "2026-10-16T16:38",
  "resolved": "2026-10-16T21:05",
  "category": "Account & Password",
  "issue": "Account locked after failed logins",
  "priority": "P3 Normal",
  "department": "Sales",
  "targetHours": 24
 },
 {
  "id": "INC-10121",
  "opened": "2026-10-16T16:48",
  "resolved": "2026-10-17T08:50",
  "category": "Hardware",
  "issue": "Docking station not detecting screens",
  "priority": "P3 Normal",
  "department": "Finance",
  "targetHours": 24
 },
 {
  "id": "INC-10192",
  "opened": "2026-10-16T17:15",
  "resolved": "2026-10-17T02:55",
  "category": "Network & VPN",
  "issue": "Office Wi-Fi keeps dropping",
  "priority": "P2 High",
  "department": "Warehouse",
  "targetHours": 8
 },
 {
  "id": "INC-10070",
  "opened": "2026-10-16T17:20",
  "resolved": "2026-10-16T18:59",
  "category": "Account & Password",
  "issue": "New starter account request",
  "priority": "P3 Normal",
  "department": "Marketing",
  "targetHours": 24
 },
 {
  "id": "INC-10024",
  "opened": "2026-10-19T09:15",
  "resolved": "2026-10-20T09:28",
  "category": "Email & Teams",
  "issue": "Calendar will not sync on phone",
  "priority": "P3 Normal",
  "department": "Finance",
  "targetHours": 24
 },
 {
  "id": "INC-10037",
  "opened": "2026-10-19T16:18",
  "resolved": "2026-10-20T08:21",
  "category": "Hardware",
  "issue": "Laptop will not power on",
  "priority": "P3 Normal",
  "department": "Marketing",
  "targetHours": 24
 },
 {
  "id": "INC-10233",
  "opened": "2026-10-20T09:17",
  "resolved": "2026-10-20T14:40",
  "category": "Account & Password",
  "issue": "MFA prompt not arriving",
  "priority": "P2 High",
  "department": "Sales",
  "targetHours": 8
 },
 {
  "id": "INC-10152",
  "opened": "2026-10-20T17:14",
  "resolved": null,
  "category": "Email & Teams",
  "issue": "Out-of-office not working",
  "priority": "P1 Critical",
  "department": "Customer Care",
  "targetHours": 4
 },
 {
  "id": "INC-10004",
  "opened": "2026-10-21T10:33",
  "resolved": null,
  "category": "Account & Password",
  "issue": "New starter account request",
  "priority": "P3 Normal",
  "department": "Warehouse",
  "targetHours": 24
 },
 {
  "id": "INC-10195",
  "opened": "2026-10-21T16:11",
  "resolved": "2026-10-22T20:45",
  "category": "Account & Password",
  "issue": "Password reset request",
  "priority": "P3 Normal",
  "department": "Finance",
  "targetHours": 24
 },
 {
  "id": "INC-10022",
  "opened": "2026-10-21T16:57",
  "resolved": "2026-10-22T00:28",
  "category": "Printing",
  "issue": "Cannot install printer driver",
  "priority": "P2 High",
  "department": "Warehouse",
  "targetHours": 8
 },
 {
  "id": "INC-10148",
  "opened": "2026-10-22T14:27",
  "resolved": "2026-10-23T10:27",
  "category": "Files & OneDrive",
  "issue": "OneDrive not syncing",
  "priority": "P3 Normal",
  "department": "Customer Care",
  "targetHours": 24
 },
 {
  "id": "INC-10100",
  "opened": "2026-10-22T14:59",
  "resolved": "2026-10-24T07:39",
  "category": "Network & VPN",
  "issue": "VPN will not connect from home",
  "priority": "P4 Low",
  "department": "Marketing",
  "targetHours": 72
 },
 {
  "id": "INC-10079",
  "opened": "2026-10-22T16:03",
  "resolved": "2026-10-22T22:43",
  "category": "Network & VPN",
  "issue": "VPN will not connect from home",
  "priority": "P2 High",
  "department": "Finance",
  "targetHours": 8
 },
 {
  "id": "INC-10130",
  "opened": "2026-10-23T09:19",
  "resolved": "2026-10-23T23:33",
  "category": "Printing",
  "issue": "Printer offline",
  "priority": "P3 Normal",
  "department": "Customer Care",
  "targetHours": 24
 },
 {
  "id": "INC-10240",
  "opened": "2026-10-23T13:46",
  "resolved": "2026-10-24T17:10",
  "category": "Hardware",
  "issue": "Replacement charger request",
  "priority": "P3 Normal",
  "department": "Finance",
  "targetHours": 24
 },
 {
  "id": "INC-10050",
  "opened": "2026-10-23T14:41",
  "resolved": "2026-10-25T16:18",
  "category": "Network & VPN",
  "issue": "Cannot reach internal website",
  "priority": "P4 Low",
  "department": "Customer Care",
  "targetHours": 72
 },
 {
  "id": "INC-10078",
  "opened": "2026-10-23T17:48",
  "resolved": "2026-10-27T09:01",
  "category": "Hardware",
  "issue": "Replacement charger request",
  "priority": "P4 Low",
  "department": "Finance",
  "targetHours": 72
 },
 {
  "id": "INC-10131",
  "opened": "2026-10-26T11:25",
  "resolved": "2026-10-29T02:48",
  "category": "Email & Teams",
  "issue": "Outlook not receiving email",
  "priority": "P4 Low",
  "department": "Finance",
  "targetHours": 72
 },
 {
  "id": "INC-10003",
  "opened": "2026-10-26T13:23",
  "resolved": "2026-10-28T02:44",
  "category": "Hardware",
  "issue": "Laptop running very slowly",
  "priority": "P4 Low",
  "department": "Finance",
  "targetHours": 72
 },
 {
  "id": "INC-10213",
  "opened": "2026-10-26T17:43",
  "resolved": "2026-10-29T05:35",
  "category": "Account & Password",
  "issue": "Account locked after failed logins",
  "priority": "P4 Low",
  "department": "Sales",
  "targetHours": 72
 },
 {
  "id": "INC-10057",
  "opened": "2026-10-27T11:33",
  "resolved": null,
  "category": "Account & Password",
  "issue": "New starter account request",
  "priority": "P3 Normal",
  "department": "Marketing",
  "targetHours": 24
 },
 {
  "id": "INC-10102",
  "opened": "2026-10-27T12:10",
  "resolved": null,
  "category": "Network & VPN",
  "issue": "VPN will not connect from home",
  "priority": "P3 Normal",
  "department": "Sales",
  "targetHours": 24
 },
 {
  "id": "INC-10218",
  "opened": "2026-10-27T17:16",
  "resolved": "2026-10-28T00:31",
  "category": "Email & Teams",
  "issue": "Outlook not receiving email",
  "priority": "P3 Normal",
  "department": "Sales",
  "targetHours": 24
 },
 {
  "id": "INC-10115",
  "opened": "2026-10-28T09:33",
  "resolved": "2026-10-29T18:47",
  "category": "Email & Teams",
  "issue": "Out-of-office not working",
  "priority": "P4 Low",
  "department": "Sales",
  "targetHours": 72
 },
 {
  "id": "INC-10211",
  "opened": "2026-10-28T11:22",
  "resolved": "2026-10-28T17:48",
  "category": "Email & Teams",
  "issue": "Outlook not receiving email",
  "priority": "P1 Critical",
  "department": "Customer Care",
  "targetHours": 4
 },
 {
  "id": "INC-10095",
  "opened": "2026-10-28T12:18",
  "resolved": "2026-10-29T08:49",
  "category": "Printing",
  "issue": "Printer jam on 2nd floor",
  "priority": "P3 Normal",
  "department": "HR",
  "targetHours": 24
 },
 {
  "id": "INC-10167",
  "opened": "2026-10-28T13:33",
  "resolved": "2026-10-29T02:53",
  "category": "Files & OneDrive",
  "issue": "Cannot open SharePoint folder",
  "priority": "P3 Normal",
  "department": "Marketing",
  "targetHours": 24
 },
 {
  "id": "INC-10171",
  "opened": "2026-10-28T13:42",
  "resolved": "2026-10-30T21:11",
  "category": "Hardware",
  "issue": "Keyboard keys not working",
  "priority": "P4 Low",
  "department": "Finance",
  "targetHours": 72
 },
 {
  "id": "INC-10103",
  "opened": "2026-10-28T14:14",
  "resolved": "2026-10-29T11:37",
  "category": "Email & Teams",
  "issue": "Outlook not receiving email",
  "priority": "P3 Normal",
  "department": "Marketing",
  "targetHours": 24
 },
 {
  "id": "INC-10180",
  "opened": "2026-10-28T15:10",
  "resolved": "2026-10-29T08:34",
  "category": "Files & OneDrive",
  "issue": "OneDrive not syncing",
  "priority": "P3 Normal",
  "department": "Marketing",
  "targetHours": 24
 },
 {
  "id": "INC-10041",
  "opened": "2026-10-28T17:27",
  "resolved": "2026-10-29T03:30",
  "category": "Printing",
  "issue": "Cannot install printer driver",
  "priority": "P4 Low",
  "department": "Sales",
  "targetHours": 72
 },
 {
  "id": "INC-10129",
  "opened": "2026-10-29T09:09",
  "resolved": "2026-10-29T11:11",
  "category": "Printing",
  "issue": "Printer offline",
  "priority": "P2 High",
  "department": "Warehouse",
  "targetHours": 8
 },
 {
  "id": "INC-10113",
  "opened": "2026-10-30T12:54",
  "resolved": "2026-10-31T05:46",
  "category": "Account & Password",
  "issue": "MFA prompt not arriving",
  "priority": "P3 Normal",
  "department": "Customer Care",
  "targetHours": 24
 },
 {
  "id": "INC-10198",
  "opened": "2026-10-30T14:52",
  "resolved": null,
  "category": "Email & Teams",
  "issue": "Out-of-office not working",
  "priority": "P4 Low",
  "department": "Sales",
  "targetHours": 72
 },
 {
  "id": "INC-10132",
  "opened": "2026-10-30T17:21",
  "resolved": "2026-10-31T08:16",
  "category": "Hardware",
  "issue": "Laptop running very slowly",
  "priority": "P3 Normal",
  "department": "Warehouse",
  "targetHours": 24
 }
];
