# Enterprise Network Security Management System (ENSMS)

> **ACL, NAT, Cisco ASA Firewall and Port Security Monitoring & Simulation Platform**

An interactive, production-ready cybersecurity management and simulation system engineered with **React.js**, **Tailwind CSS**, **Recharts**, and **Lucide React**. ENSMS delivers end-to-end surveillance, live policy authoring, and deterministic packet inspection modeling real-world Cisco enterprise network infrastructure.

---

## 🎯 Key Capabilities & Modules

1. **Executive Dashboard (`DashboardOverview.jsx`)**:
   - 8 live KPI metrics: Total Connected Devices, Active Sockets, ASA Firewall Status, Allowed Packet Count, Blocked Packet Count, NAT Translations, Port Security Violations, and NIST Compliance Security Posture Score (0–100%).
   - Recharts visual analytics: Live traffic throughput (Allowed vs Blocked Area chart), Protocol distribution (Donut chart), and Layered enforcement breakdown (Bar chart).
   - Real-time event ticker and quick scenario triggers.

2. **Interactive Network Topology (`NetworkTopology.jsx`)**:
   - Dynamic SVG wiring canvas with animated flow lines indicating active connections (green) and blocked/violated paths (red).
   - Network nodes: Admin PC (`192.168.10.10`), Staff PC (`192.168.10.20`), Guest PC (`192.168.10.30`), Cisco Catalyst 2960 Switch, Cisco 2911 Router, Cisco ASA 5505 Adaptive Security Appliance, and External Cloud Server (`203.0.113.10`).
   - Device Inspector modal with live IP/MAC specs, port assignments, and direct one-click end-to-end packet diagnostic ping.

3. **Cisco ASA 5505 Perimeter Firewall (`FirewallManagement.jsx`)**:
   - Master stateful inspection toggle (ON/OFF).
   - Rule builder supporting Source/Destination IP, Direction (Inbound/Outbound/Any), Protocols (TCP, UDP, ICMP, HTTP, HTTPS), and Port numbers.
   - Live hit counters and toggleable rule activation.
   - Production-ready Cisco ASA CLI running-configuration preview.

4. **Cisco Router 2911 Access Control Lists (`AclManagement.jsx`)**:
   - Extended ACL 101 sequenced rule management (Rules 10, 20, 30...).
   - Rule evaluation with top-down priority, host/network wildcard matching, and implicit deny.
   - Cisco IOS CLI syntax generator (`ip access-list extended 101`).

5. **Network Address Translation & PAT Engine (`NatManagement.jsx`)**:
   - RFC 3022 Port Address Translation (PAT / Overload) and Static 1:1 NAT allocations.
   - Stateful in-memory translation table (`show ip nat translations`).
   - Translation session flush (`clear ip nat translation *`) and pool utilization meters.

6. **Switch Port Security (`PortSecurityManagement.jsx`)**:
   - Physical port hardening for interfaces `Fa0/1`, `Fa0/2`, and `Fa0/3`.
   - Sticky MAC learning and violation enforcement modes (`shutdown`, `restrict`, `protect`).
   - Unauthorized rogue device injection trigger with automatic `err-disabled` transition.
   - Cisco err-disable recovery workflow (`shutdown` followed by `no shutdown`).
   - Secure MAC address table inspection (`show port-security address`).

7. **5-Stage Packet Inspection Simulator (`TrafficSimulator.jsx`)**:
   - Fully deterministic packet engine testing physical and logical barriers:
     1. **Switch**: Ingress port security & MAC validation.
     2. **Router ACL**: Sequenced ACL 101 evaluation.
     3. **ASA Firewall**: Stateful inspection and perimeter drop verification.
     4. **NAT Engine**: Dynamic PAT address and port translation.
     5. **Destination**: Host acknowledgment (HTTP 200 OK / ICMP Echo Reply).
   - Staggered animated step-by-step visual stepper with packet header diagnostics.

8. **SIEM Security Event Logs (`SecurityLogs.jsx`)**:
   - Categorized audit trail (Firewall Allowed/Denied, ACL Permit/Deny, NAT Translation, Port Security Violation).
   - Real-time search, multi-category and severity filtering, and RFC 4180 CSV export.

9. **Project Documentation (`ProjectDocumentation.jsx`)**:
   - Formal academic and engineering specification covering:
     - Abstract & Core Objectives
     - Problem Statement & Legacy Comparison
     - System Architecture & Hardware/Software Requirements
     - Methodology & Security Enforcement Pipeline
     - Module Specifications
     - Formal Testing & Validation Matrix (TC-01 through TC-06)
     - Cisco IOS & ASA Command Reference Cheat Sheet
     - Conclusion & Future Scope

10. **System Settings & Compliance Reports (`SettingsView.jsx` & `ExecutiveReportModal.jsx`)**:
    - Browser LocalStorage synchronization.
    - Automated simulation speed slider (1.0s – 6.0s).
    - Factory baseline restore.
    - Downloadable executive audit report in formatted text.

---

## 🛠️ Technology Stack

| Layer | Technology |
|---|---|
| **Frontend Framework** | React.js 18.3 (Hooks & Context API) |
| **Build Tool** | Vite 6.0 |
| **Styling** | Tailwind CSS 3.4 (Cyber Navy Palette) |
| **Data Visualization** | Recharts 2.15 |
| **Iconography** | Lucide React |
| **State Persistence** | HTML5 LocalStorage API |
| **Simulation Engine** | Custom Deterministic Packet Evaluator |

---

## 🚀 Installation & Running Locally

### Prerequisites
- Node.js (v18.0.0 or higher)
- npm (v9.0.0 or higher)

### Setup Instructions

1. **Navigate to the project directory**:
   ```bash
   cd enterprise-network-security
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the local development server**:
   ```bash
   npm run dev
   ```

4. **Open in browser**:
   Navigate to `http://localhost:3000` (or the port specified in terminal).

5. **Build for production**:
   ```bash
   npm run build
   ```

---

## 🛡️ Default Network Topology Configuration

| Device | Type | IP Address | MAC Address | Interface / Port | Role |
|---|---|---|---|---|---|
| **Admin Workstation** | Host | `192.168.10.10` | `00:50:79:66:68:01` | Switch `Fa0/1` (VLAN 10) | Full Admin Access |
| **Staff Workstation** | Host | `192.168.10.20` | `00:50:79:66:68:02` | Switch `Fa0/2` (VLAN 10) | Approved Web Access |
| **Guest Laptop** | Host | `192.168.10.30` | `00:50:79:66:68:03` | Switch `Fa0/3` (VLAN 30) | Isolated / Denied External |
| **Cisco 2960 Switch** | Core Switch | `192.168.10.2` | `00:1E:F7:89:AB:01` | `Fa0/1-24`, Uplink `Gi0/1` | Port Security & VLANs |
| **Cisco 2911 Router** | Edge Router | `192.168.10.1` | `00:2A:43:CD:EF:10` | `Gi0/0` (LAN), `Gi0/1` (WAN) | ACL 101 & PAT Overload |
| **Cisco ASA 5505** | Firewall | `203.0.113.1` | `00:1A:6D:55:05:01` | Inside (100), Outside (0) | Stateful Perimeter Defense |
| **External Cloud Server** | Server | `203.0.113.10` | `00:50:56:A1:B2:C3` | Public Cloud DMZ | HTTP/HTTPS/DNS Services |

---

## 📜 Disclaimer
*This web application is a standalone enterprise network security simulator and monitoring dashboard designed for cybersecurity education, policy verification, and SOC training. It does not falsely claim a live connection to physical Cisco hardware or Cisco Packet Tracer runtime processes.*

