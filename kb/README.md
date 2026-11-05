# Helpdesk Knowledge Base

Short first-line support guides for common Microsoft 365 and Windows problems. These are general steps written for this portfolio project, so a real company's policy comes first.

## Before any fix

1. Confirm who the user is, following company policy, before resetting anything.
2. Ask what changed, when it started, and whether anyone else is affected.
3. Log the steps in the ticket, even if the fix is quick.

## Password reset or locked account

1. Verify the user's identity.
2. Check whether the account is locked, or the password has expired.
3. If self-service reset is enabled, guide the user through it. Otherwise reset it in the admin tool and require a change at next sign-in.
4. Ask the user to update saved passwords on their phone, since old ones can lock the account again.

Escalate if the account locks repeatedly, or there are sign-ins the user does not recognise.

## MFA prompt not arriving

1. Check that the phone has signal or Wi-Fi and the correct date and time.
2. Open the Authenticator app directly, as the prompt may be waiting there.
3. Check that notifications are allowed for the app.
4. For a new phone, follow the company's process to register the new device. Verify identity first.

Escalate if the user gets prompts they did not ask for. This can be a sign someone else has the password.

## Outlook not receiving email

1. Check webmail. If email arrives there, the problem is on the device.
2. Check whether Outlook shows "Working Offline" or "Disconnected".
3. Check the Junk folder and any inbox rules.
4. Restart Outlook, then update Office.

Escalate if webmail is also missing emails, or several users are affected.

## OneDrive not syncing

1. Check the cloud icon in the system tray for a message.
2. Check that the user is signed in and has free space.
3. Look for file names with unsupported characters, and files that are very large.
4. Pause and resume syncing, then restart OneDrive.

## Teams call has no audio

1. In Teams settings, check the selected speaker and microphone, then make a test call.
2. Check that the headset is connected and not muted.
3. Check Windows microphone privacy settings.
4. Restart Teams, then the computer.

## VPN will not connect

1. Confirm that the internet works without the VPN.
2. Check the user's credentials and any MFA prompt.
3. Note the exact error message.
4. Restart the VPN client, then try another network.

Escalate if several users report the same error.

## Printer offline

1. Check power, paper, and any error on the printer's screen.
2. Check the network connection, and whether other users can print.
3. In Windows, check that the right printer is selected and clear stuck jobs in the queue.
4. Restart the print spooler service if your permissions allow it, or escalate.

## Laptop running slowly

1. Restart it, and note how long it has been running.
2. Check Task Manager for high CPU, memory or disk use.
3. Check free disk space and pending updates.
4. Escalate if the problem continues, or if there are any signs of malware.
