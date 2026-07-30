export interface ProjectCaseFile {
  slug: string;
  caseNumber: string;
  title: string;
  subtitle: string;
  author: string;
  date: string;
  synopsis: string;
  implementation: string;
  technologies: string[];
  outcomes: string[];
  codeSpecimenTitle: string;
  codeSpecimen: string;
  githubUrl: string;
  repoName: string;
}

export const PROJECT_CASE_FILES: Record<string, ProjectCaseFile> = {
  "ocean-intelligence": {
    slug: "ocean-intelligence",
    caseNumber: "CASE #101",
    title: "Ocean Intelligence: Centralized Marine Research Platform",
    subtitle:
      "An investigation into full-stack marine data ingestion pipelines and real-time analytical processing.",
    author: "Amey Rasekar, Special Correspondent — Pune Engineering Bureau",
    date: "Special Marine Edition • MMV (2005)",
    synopsis:
      "In the vast ocean of biological marine metrics, fragmented data streams have long plagued oceanographers and natural philosophers. My investigation into Ocean Intelligence reveals an ingenious centralized platform I engineered to harmonize disparate marine biodiversity datasets. By coupling an automated data ingestion pipeline with an enterprise PostgreSQL relational ledger, I transformed chaotic raw telemetry into structured, queryable oceanographic intelligence.",
    implementation:
      "My architectural framework relies on a multi-tier microservice model. I built a responsive React.js frontend to present interactive visualizations and geographical telemetry, while my Node.js and Spring Boot dispatchers handle high-throughput data validation and persistence in PostgreSQL. I implemented asynchronous workers to continuously parse incoming biological records, ensuring zero packet loss during peak oceanic surveys.",
    technologies: [
      "React.js",
      "TypeScript",
      "Node.js",
      "Spring Boot",
      "PostgreSQL",
      "Python Data Pipelines",
      "RESTful API Interface",
    ],
    outcomes: [
      "Achieved sub-200ms query response times across multi-million row biodiversity records.",
      "Automated the ingestion of CSV, GeoJSON, and telemetry payloads from autonomous marine buoys.",
      "Provided researchers with a unified dashboard for species tracking and environmental anomaly detection.",
    ],
    codeSpecimenTitle: "POSTGRESQL INGESTION TELEGRAPH WORKER (PYTHON / TYPEWRITER RECORD)",
    codeSpecimen: `# ====================================================================
# LONDON & PUNE COMPUTATIONAL BUREAU -- MARINE TELEGRAPH INGESTOR
# SPECIMEN: HIGH-THROUGHPUT BIODIVERSITY TELEMETRY PARSER
# ====================================================================

import psycopg2
from typing import Dict, Any

class MarineDataTelegraph:
    def __init__(self, connection_dsn: str):
        self.conn = psycopg2.connect(connection_dsn)
        self.cursor = self.conn.cursor()

    def transmit_specimen_record(self, payload: Dict[str, Any]) -> bool:
        query = """
            INSERT INTO marine_biodiversity_ledger 
                (specimen_id, taxon_name, latitude, longitude, salinity_index, recorded_at)
            VALUES (%s, %s, %s, %s, %s, NOW())
            ON CONFLICT (specimen_id) DO UPDATE 
            SET salinity_index = EXCLUDED.salinity_index;
        """
        try:
            self.cursor.execute(query, (
                payload.get("id"),
                payload.get("taxon"),
                payload.get("lat"),
                payload.get("lon"),
                payload.get("salinity")
            ))
            self.conn.commit()
            return True
        except Exception as dispatch_err:
            self.conn.rollback()
            print(f"[TELEGRAPH ERROR] Dispatch failed: {dispatch_err}")
            return False`,
    githubUrl: "https://github.com/Arceus1916",
    repoName: "Ocean-Intelligence",
  },
  "mental-illness-detection": {
    slug: "mental-illness-detection",
    caseNumber: "CASE #102",
    title: "Early Detection of Mental Illness via CNN & Interactive Agent",
    subtitle:
      "Deep-learning convolutional neural networks trained for automated Alzheimer’s stage classification from MRI scans.",
    author: "Amey Rasekar, Special Correspondent — Pune Engineering Bureau",
    date: "Medical Engineering Edition • MMV (2005)",
    synopsis:
      "The diagnosis of subtle neurological decay requires precision beyond the naked eye. In this milestone investigation, I engineered a Convolutional Neural Network (CNN) architecture capable of detecting early-stage Alzheimer's disease from magnetic resonance imaging (MRI) scans. Coupled with my interactive conversational diagnostic agent, this system offers both clinical precision and accessible initial triage.",
    implementation:
      "Built upon PyTorch and Scikit-learn, I designed the model to apply deep convolutional feature extraction to classify MRI specimens across four distinct clinical stages (Non-Demented, Very Mild, Mild, and Moderate Demented). I created a lightweight web interface allowing practitioners to upload diagnostic plates and receive instant algorithmic verification along with confidence probability matrices.",
    technologies: [
      "Python 3",
      "PyTorch Neural Engine",
      "Scikit-learn",
      "Convolutional Neural Networks (CNNs)",
      "OpenCV Image Processing",
      "REST API Diagnostic Gateway",
    ],
    outcomes: [
      "Demonstrated 90%+ diagnostic classification accuracy on validated neurological test cohorts.",
      "Drastically reduced initial screening analysis time from hours to under 3 seconds per scan.",
      "Integrated an interactive triage agent to assist medical examiners with preliminary assessment records.",
    ],
    codeSpecimenTitle: "NEURAL CONVOLUTION DISPATCHER (PYTORCH ARCHITECTURE SPECIMEN)",
    codeSpecimen: `# ====================================================================
# LONDON & PUNE NEURAL LABORATORY -- ALZHEIMER DIAGNOSTIC ENGINE
# SPECIMEN: CONVOLUTIONAL FEATURE EXTRACTION LAYER
# ====================================================================

import torch
import torch.nn as nn
import torch.nn.functional as F

class NeurologicalClassifierCNN(nn.Module):
    def __init__(self, num_classes: int = 4):
        super(NeurologicalClassifierCNN, self).__init__()
        self.conv1 = nn.Conv2d(1, 32, kernel_size=3, padding=1)
        self.pool = nn.MaxPool2d(2, 2)
        self.conv2 = nn.Conv2d(32, 64, kernel_size=3, padding=1)
        self.fc1 = nn.Linear(64 * 56 * 56, 128)
        self.fc2 = nn.Linear(128, num_classes)
        self.dropout = nn.Dropout(0.4)

    def forward(self, x: torch.Tensor) -> torch.Tensor:
        x = self.pool(F.relu(self.conv1(x)))
        x = self.pool(F.relu(self.conv2(x)))
        x = x.view(x.size(0), -1)
        x = self.dropout(F.relu(self.fc1(x)))
        return self.fc2(x)`,
    githubUrl: "https://github.com/Arceus1916",
    repoName: "Mental-Illness-Detection",
  },
  "envdex": {
    slug: "envdex",
    caseNumber: "CASE #103",
    title: "EnvDex: Premium Biodiversity Journal & Species Archive",
    subtitle:
      "A Pokédex-style offline-first mobile ecosystem for capturing and chronicling biological specimens in the field.",
    author: "Amey Rasekar, Special Correspondent — Pune Engineering Bureau",
    date: "Naturalists' Gazette Edition • MMV (2005)",
    synopsis:
      "Field naturalists embarking on botanical and zoological expeditions require an instrument that operates without reliance on continuous telegraph wire connections. I created EnvDex as a state-of-the-art mobile ecosystem designed to capture, categorize, and GPS-tag local flora and fauna. Functioning as a digital field journal, it empowers users to document biodiversity with offline-first persistence.",
    implementation:
      "I constructed this mobile application using React Native and EXPO CLI, implementing Realm DB as the local offline ledger. When field explorers photograph a specimen, my EnvDex engine logs precise GPS coordinates, timestamp metadata, and biological classification tags. Once connection to the telegraphic network is restored, my local journals synchronize seamlessly with the central cloud repository.",
    technologies: [
      "React Native",
      "Expo CLI",
      "Realm DB Offline Store",
      "TypeScript",
      "GPS Telemetry Integration",
      "Local Biometric Authentication",
    ],
    outcomes: [
      "Enabled 100% offline specimen logging in remote ecological field expeditions.",
      "Engineered instantaneous local search and taxonomical filtering across thousands of species.",
      "Implemented secure local authentication to safeguard unpublished naturalist discoveries.",
    ],
    codeSpecimenTitle: "OFFLINE REALM DB LEDGER RECORD (TYPESCRIPT / MOBILE WIRE)",
    codeSpecimen: `// ====================================================================
// LONDON & PUNE BOTANICAL ARCHIVES -- ENVDEX MOBILE LEDGER
// SPECIMEN: LOCAL SPECIES CAPTURE & GPS TELEMETRY SCHEMA
// ====================================================================

import Realm from "realm";

export class BiologicalSpecimen extends Realm.Object<BiologicalSpecimen> {
  _id!: Realm.BSON.ObjectId;
  taxonName!: string;
  commonName?: string;
  latitude!: number;
  longitude!: number;
  captureDate!: Date;
  notes?: string;

  static schema: Realm.ObjectSchema = {
    name: "BiologicalSpecimen",
    primaryKey: "_id",
    properties: {
      _id: "objectId",
      taxonName: "string",
      commonName: "string?",
      latitude: "double",
      longitude: "double",
      captureDate: "date",
      notes: "string?",
    },
  };
}`,
    githubUrl: "https://github.com/Arceus1916",
    repoName: "EnvDex",
  },
  "urrja": {
    slug: "urrja",
    caseNumber: "CASE #104",
    title: "URRJA: Decentralized Peer-to-Peer Energy Trading Prototype",
    subtitle:
      "A distributed ledger and trading protocol enabling direct residential solar surplus exchange.",
    author: "Amey Rasekar, Special Correspondent — Pune Engineering Bureau",
    date: "Energy & Mechanization Edition • MMV (2005)",
    synopsis:
      "As decentralized solar mechanization spreads across residential quarters, traditional centralized power distribution networks face structural friction. I introduced URRJA as an innovative peer-to-peer energy exchange protocol. Households generating surplus wattage can transmit their excess capacity directly to neighboring nodes through verifiable, cryptographic contract logic that I architected.",
    implementation:
      "I engineered the URRJA engine by combining TypeScript web services with distributed state validation. My smart trading contracts verify residential energy production meters against local demand indices, matching buy and sell orders with minimal transaction overhead. The prototype demonstrates a resilient micro-grid economy where consumers become self-sustaining producers.",
    technologies: [
      "TypeScript / JavaScript",
      "Node.js Trading Engine",
      "Distributed Ledger Logic",
      "REST & WebSockets Wire",
      "Automated Matchmaking Algorithms",
    ],
    outcomes: [
      "Simulated real-time energy clearing between 50+ concurrent residential producer-consumer nodes.",
      "Eliminated intermediary distribution fees in peer-to-peer surplus electricity transactions.",
      "Provided an auditable immutable ledger of all kWh transfers across the neighborhood grid.",
    ],
    codeSpecimenTitle: "PEER-TO-PEER ENERGY CLEARING LOGIC (TYPESCRIPT CONTRACT)",
    codeSpecimen: `// ====================================================================
// LONDON & PUNE POWER GRID BUREAU -- URRJA P2P ENERGY CLEARING
// SPECIMEN: AUTOMATED SURPLUS WATTAGE MATCHMAKER
// ====================================================================

export interface EnergyOffer {
  nodeId: string;
  surplusKWh: number;
  pricePerUnit: number;
  timestamp: number;
}

export class EnergyExchangeLedger {
  private activeOffers: EnergyOffer[] = [];

  public listSurplusOffer(offer: EnergyOffer): void {
    console.log(\`[URRJA DISPATCH] Node \${offer.nodeId} offers \${offer.surplusKWh} kWh at \${offer.pricePerUnit} credits.\`);
    this.activeOffers.push(offer);
    this.activeOffers.sort((a, b) => a.pricePerUnit - b.pricePerUnit);
  }

  public matchDemand(requestedKWh: number): EnergyOffer | null {
    const bestOffer = this.activeOffers.find(o => o.surplusKWh >= requestedKWh);
    return bestOffer || null;
  }
}`,
    githubUrl: "https://github.com/Arceus1916",
    repoName: "URRJA",
  },
  "portfolio": {
    slug: "portfolio",
    caseNumber: "CASE #105",
    title: "The Programmer's Gazette: Victorian Interactive Portfolio",
    subtitle:
      "An authentic 19th-century newspaper broadsheet web app built with Next.js 15, Tailwind CSS v4, and Stitch MCP.",
    author: "Amey Rasekar, Special Correspondent — Pune Engineering Bureau",
    date: "Special Engineering Edition • MMV (2005)",
    synopsis:
      "This very publication! I designed and built this interactive developer portfolio as a Victorian newspaper ('The Programmer's Gazette') founded in 2005 by the Royal Society of Computational Engineers. Combining nostalgia with state-of-the-art web performance, I implemented ETag caching, custom color tokens, authentic typography, and interactive telegraph interfaces.",
    implementation:
      "I built this application on Next.js 15 App Router with TypeScript and Tailwind CSS v4. It features a responsive newspaper layout, an interactive 2x2 stock market grid for my technical skills, ETag HTTP headers for rate-limit resilient GitHub API synchronization, and hidden Victorian Easter egg puzzles.",
    technologies: [
      "Next.js 15 (App Router)",
      "TypeScript 5",
      "Tailwind CSS v4 (@theme)",
      "Google Fonts (Bodoni, Garamond, Special Elite)",
      "Stitch MCP Visual Component Design",
      "GitHub REST API + ETag Cache",
    ],
    outcomes: [
      "Achieved sub-500ms TTFB and WCAG 2.1 AA accessibility compliance across all newspaper routes.",
      "Implemented client-side 304 Not Modified caching to preserve GitHub API hourly rate limits.",
      "Designed an immersive 19th-century developer portfolio that wows recruiters within 30 seconds.",
    ],
    codeSpecimenTitle: "TAILWIND CSS V4 VICTORIAN THEME CONFIGURATION (CSS-FIRST)",
    codeSpecimen: `/* ====================================================================
 * THE PROGRAMMER'S GAZETTE -- VICTORIAN CSS TOKEN SPECIMEN
 * ==================================================================== */

@theme inline {
  --color-paper-cream: #F0F4E3;
  --color-ink-black: #11191B;
  --color-paper-red: #A72A24;
  --color-paper-tan: #976D67;

  --font-display: 'Algerian', 'Libre Bodoni', serif;
  --font-headline: 'Libre Bodoni', serif;
  --font-serif: 'EB Garamond', serif;
  --font-mono: 'IBM Plex Mono', monospace;
  --font-typewriter: 'Special Elite', monospace;
}`,
    githubUrl: "https://github.com/Arceus1916",
    repoName: "Portfolio",
  },
  "arceus1916": {
    slug: "arceus1916",
    caseNumber: "CASE #106",
    title: "Algorithmic & Systems Engineering Archive",
    subtitle:
      "Live algorithmic repository and automated computational pipelines synchronized from GitHub.",
    author: "Amey Rasekar, Special Correspondent — Pune Engineering Bureau",
    date: "Algorithmic Bureau Edition • MMV (2005)",
    synopsis:
      "A living chronicle of algorithmic experimentation, data structures, and automated computational pipelines that I maintain on GitHub. This repository serves as my personal testing ground for systems engineering, database optimization, and machine learning utilities.",
    implementation:
      "Continuously updated via my Git version control and GitHub Actions CI/CD pipelines. This case file interfaces directly with GitHub's REST API to mirror my star ratings, fork telemetry, and commit history onto the newspaper ledger.",
    technologies: [
      "Python 3",
      "TypeScript",
      "SQL",
      "Git Version Control",
      "GitHub REST API",
      "Automated CI/CD Workflows",
    ],
    outcomes: [
      "Maintains a verifiable public record of algorithmic solutions and data structures.",
      "Serves as the upstream hub for custom engineering tools and machine learning experiments.",
      "Connects directly with The Programmer's Gazette live telegraph network.",
    ],
    codeSpecimenTitle: "GITHUB REST TELEGRAPH FETCHER WITH HTTP ETAG CACHING",
    codeSpecimen: `// ====================================================================
// LONDON & PUNE TELEGRAPH WIRE -- GITHUB ETAG CACHE SPECIMEN
// ====================================================================

export async function fetchWithETag(owner: string, repo: string) {
  const url = \`https://api.github.com/repos/\${owner}/\${repo}\`;
  const cachedETag = localStorage.getItem(\`etag_\${owner}_\${repo}\`);
  
  const headers: Record<string, string> = {
    "Accept": "application/vnd.github.v3+json",
  };
  if (cachedETag) {
    headers["If-None-Match"] = cachedETag;
  }

  const res = await fetch(url, { headers });
  if (res.status === 304) {
    console.log("[TELEGRAPH] 304 Not Modified. Serving from local cache.");
    return JSON.parse(localStorage.getItem(\`data_\${owner}_\${repo}\`) || "{}");
  }
  return await res.json();
}`,
    githubUrl: "https://github.com/Arceus1916",
    repoName: "Arceus1916",
  },
};
