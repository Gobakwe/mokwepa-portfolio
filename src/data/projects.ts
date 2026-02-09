export type Project = {
    id: string;
    title: string;
    theme: string;
    problem: string;
    solution: string;
    method: string[];
    tools: string;
    results?: string[];
    images?: string[];
    link?: string;
};

export const projects: Project[] = [
    // Theme A - Control Systems & Autonomy
    {
        id: "A1",
        title: "OPTIBELT — Smart Conveyor Supervision",
        theme: "Control Systems & Autonomy",
        problem: "How can a conveyor belt system be supervised to balance throughput (stockpile control) with asset protection (motor/belt health) by fusing (i) real-time stockpile measurements and (ii) condition-monitoring health indicators into a single, interpretable decision layer?",
        solution: "A two-part monitoring + control architecture: Stockpile Monitoring (LiDAR), Conveyor Drive Monitoring (Mahalanobis Distance Health Index), and Supervisory Control Layer (Fuzzy + PID bias).",
        method: [
            "Stockpile sensing: Overhead LiDAR scan, point cloud reconstruction, DEM generation, volume/tonnage estimation.",
            "Drive health monitoring: Feature extraction, 'healthy' baseline (mean/covariance), Mahalanobis Distance Health Index (HI), Alarm thresholding.",
            "Supervisory decision: Mamdani FIS (StockpileVolume, MotorHealth, BeltHealth, Stoppages) -> BeltSpeed. Gentle PID bias for stockpile regulation."
        ],
        tools: "MATLAB/Simulink, Jetson Nano, TFmini LiDAR, STM32, HMI/dashboard",
        results: [
            "Stockpile module accuracy: volume/tonnage estimation fidelity.",
            "HI sensitivity: early deviation detection.",
            "Robustness: HI stability under normal variations.",
            "Decision safety: fuzzy rules reduce speed appropriately.",
            "Operator interpretability: clear, actionable insight."
        ]
    },
    {
        id: "A2",
        title: "Animal Repellent System for Quelea Birds",
        theme: "Control Systems & Autonomy",
        problem: "How can an autonomous, eco-friendly deterrent be designed to reduce quelea bird damage in cereal crops by detecting presence and triggering a targeted deterrent, minimizing power/false activation?",
        solution: "A PIR-triggered repellent control chain where detection triggers a monostable timing window that enables a frequency-generation stage (deterrent output).",
        method: [
            "Presence detection using PIR sensing.",
            "Comparator-based decision stage.",
            "Timing window using a monostable 555.",
            "Frequency-generation stage.",
            "Power architecture planning (battery -> solar)."
        ],
        tools: "PIR sensor, LM741 comparator, 555 timer, oscillator stage",
        results: [
            "Trigger reliability and false-positive rate assessment.",
            "Power efficiency analysis.",
            "Deterrent effectiveness potential.",
            "Environmental robustness."
        ]
    },
    {
        id: "A3",
        title: "Obstacle-Avoiding / Behavior-Based Robot",
        theme: "Control Systems & Autonomy",
        problem: "How can a robot be modeled with both dynamics + kinematics, and how can a fuzzy controller regulate wheel drive force to achieve a desired speed while safely stopping near an obstacle?",
        solution: "Simulink model of a two-wheeled robot with wheel subsystems, speed aggregation, heading integration, and an 'alert' subsystem for obstacle distance.",
        method: [
            "Designed a Mamdani Fuzzy Inference System (FIS).",
            "Inputs: speed_error and distance_to_obstacle.",
            "Output: net_drive_force.",
            "Logic: min for AND, max for OR, centroid defuzzification."
        ],
        tools: "MATLAB/Simulink, Fuzzy Logic Control",
        results: [
            "With obstacle at (0.5, 0): robot stops at approx x ≈ 0.47.",
            "Effective deceleration before reaching the obstacle confirmed."
        ]
    },
    {
        id: "A4",
        title: "Ball Balancing Robot (PID Tuning)",
        theme: "Control Systems & Autonomy",
        problem: "How can a classical PID controller be tuned to stabilize a dynamically unstable ball-on-plate system while maintaining good tracking and avoiding oscillations?",
        solution: "Feedback loop using vision sensor for position, commanding plate tilt via inverse kinematics and servo actuation.",
        method: [
            "Implemented PID control loop with user-adjustable gains.",
            "Position filtering (moving average) and velocity estimation.",
            "Generated references for evaluation (step response, trajectory).",
            "Converted controller outputs to plate tilt commands."
        ],
        tools: "Embedded C, Camera/Vision, PID Control, Inverse Kinematics",
        results: [
            "Stability and settling behavior evaluated under different PID gains.",
            "Overshoot/oscillation vs responsiveness trade-offs analyzed."
        ]
    },

    // Theme B - Signal Processing & Sensing
    {
        id: "B1",
        title: "Digital Signal Processing Labs",
        theme: "Signal Processing & Sensing",
        problem: "How do we design and validate DSP pipelines that reliably filter noise, preserve information, and enable feature extraction for real-world signals?",
        solution: "A set of laboratory exercises covering DSP fundamentals.",
        method: [
            "Discrete-time signal representation and analysis.",
            "Filter design/implementation (low-pass, high-pass, etc.).",
            "Denoising and smoothing strategies.",
            "Frequency-domain interpretation."
        ],
        tools: "DSP workflows, Analysis/Plots",
    },
    {
        id: "B2",
        title: "EEG Biomarkers & Machine Learning",
        theme: "Signal Processing & Sensing",
        problem: "Can EEG-derived biomarkers reveal common or distinct neural signatures across conditions (AUD, mood disorders) and support classification/insight into cognitive decline?",
        solution: "EEG recordings processed into consistent channel formats, segmented, and used for feature extraction and visualization.",
        method: [
            "Preprocessing: channel standardization, segmentation, artifact handling.",
            "Spectral features: band-power, Theta/Alpha ratio, Asymmetry.",
            "Connectivity features: coherence / phase synchronization.",
            "Complexity features: entropy measures.",
            "Learning/analysis: ML/DL classification.",
            "Visualization: PSD plots, topographies, heatmaps."
        ],
        tools: "Python (MNE), MATLAB/EEGLAB, ML Classification"
    },
    {
        id: "B3",
        title: "Light Intensity Differentiating System (LIDS)",
        theme: "Signal Processing & Sensing",
        problem: "How can light intensity be sensed and converted into stable, real-time decision signals for applications like automotive headlight intensity control?",
        solution: "LDR-based sensing system converting light-level changes into comparator outputs to drive intensity modes.",
        method: [
            "Light sensing using LDR.",
            "Analog conditioning (voltage divider).",
            "Comparator-based classification (LM393).",
            "Multistage output logic for actuation.",
            "Fail-safe consideration (hysteresis)."
        ],
        tools: "LDR sensor, LM393 comparator, Transistors, LEDs",
        results: [
            "Sensitivity across illumination ranges.",
            "Robustness to fluctuating light.",
            "Response time and stability."
        ]
    },

    // Theme C - Intelligent Perception (Vision/OCR)
    {
        id: "C1",
        title: "Banknote Serial Number Extraction",
        theme: "Intelligent Perception (Vision/OCR)",
        problem: "How can banknote serial numbers be reliably detected and recognized under real-world imaging conditions and converted into traceable data?",
        solution: "Two-stage detect -> recognize pipeline: Capture -> Detect Serial -> CRNN/TrOCR recognition -> Validation -> Cloud Storage.",
        method: [
            "Data collection & labeling (Botswana-banknote dataset).",
            "Preprocessing & augmentation (resize, rotation, noise).",
            "Serial-region detection (SegLink with DenseNet).",
            "Sequence recognition (CRNN-CTC and TrOCR lanes).",
            "Embedded + cloud workflow integration (ESP32, Pi, Cloud)."
        ],
        tools: "SegLink, CRNN/TrOCR, Python, ESP32, Raspberry Pi, FastAPI",
        results: [
            "Primary metrics: Character Error Rate (CER) and sequence accuracy.",
            "Robustness to wear, rotation, low contrast.",
            "System-level reliability."
        ]
    },
    {
        id: "C2",
        title: "Automated Colour Sorting System",
        theme: "Intelligent Perception (Vision/OCR)",
        problem: "How can an automated system detect and classify objects by colour under industrial constraints and integrate sensing + actuation?",
        solution: "Vision-guided sorting concept with consistent sensing, classification, and actuation.",
        method: [
            "Sensing & calibration.",
            "Colour-space reasoning (HSV/CIELAB).",
            "Segmentation & classification (thresholds/ML).",
            "Actuation concept (gating/air-jet).",
            "Simulation / design validation."
        ],
        tools: "Vision processin, Simulation",
    },
    {
        id: "C3",
        title: "Remote Camera Streaming (ESP32)",
        theme: "Intelligent Perception (Vision/OCR)",
        problem: "How can an embedded camera system stream images/video reliably for remote monitoring under constrained conditions?",
        solution: "ESP32-based camera streaming exploration focusing on connectivity and trade-offs.",
        method: [
            "Configure camera capture pipeline.",
            "Explore network approaches (routing/tunneling).",
            "Optimize for constrained resources.",
            "Add basic monitoring features."
        ],
        tools: "ESP32 (WROVER), Firmware, Networking",
    },

    // Theme D - Industrial Digitalization
    {
        id: "D1",
        title: "Leak Detection & Monitoring Web App",
        theme: "Industrial Digitalization",
        problem: "How can near-real-time incident data be streamed, analyzed for anomalies, and visualized on an interactive map?",
        solution: "Full-stack monitoring web app: React UI + Leaflet maps + Flask API.",
        method: [
            "Design event schema.",
            "Implement ingestion + simulation.",
            "Apply anomaly detection logic.",
            "Visualize events geographically.",
            "Provide simple API."
        ],
        tools: "React, Flask, Leaflet, REST API",
        results: [
            "Map responsiveness.",
            "Correctness of severity rendering.",
            "Latency/stability of streaming."
        ]
    },
    {
        id: "D2",
        title: "KPI & Kaizen Digitization Dashboard",
        theme: "Industrial Digitalization",
        problem: "How can paper-based performance management be digitized into a single dashboard to improve visibility and decision speed?",
        solution: "SharePoint-based dashboard consolidating operational metrics (Quality, Cost, SHE, Delivery, Morale, Kaizen).",
        method: [
            "Map KPI definitions and data sources.",
            "Create standardized data capture structures.",
            "Build dashboard views.",
            "Establish update cadence."
        ],
        tools: "SharePoint, Dashboard Design",
        results: [
            "Reduction in manual tracking effort.",
            "Improved completeness/timeliness.",
            "Ease of interpretation."
        ]
    },

    // Theme X - Cross-Disciplinary
    {
        id: "X1",
        title: "Automatic Toilet Seat Cleaner",
        theme: "Cross-Disciplinary Engineering",
        problem: "How can shared-restroom hygiene be improved through an automated cleaning cycle using discrete logic and timing?",
        solution: "seqeuenced cleaning automation: flush trigger -> delay -> vacancy check -> cleaning cycle -> return-to-home.",
        method: [
            "Event sequencing (flush -> delay -> vacancy -> clean).",
            "Occupancy detection (PIR).",
            "Logic gating (AND vacancy + delay).",
            "Timed actuation (555 monostable).",
            "Direction control (logic + limit switches).",
            "Safety design (lock-out, interruption)."
        ],
        tools: "PIR, 555 timers, Logic gates, Relays, DC motor",
        results: [
            "Correct sequencing across scenarios.",
            "Safety behavior reliability.",
            "Direction control correctness."
        ]
    },
    {
        id: "X2",
        title: "Keyless Door Unlocking System",
        theme: "Cross-Disciplinary Engineering",
        problem: "How can a low-cost keyless entry system be implemented using non-programmable electronics?",
        solution: "IR-remote-based door unlocking: 38kHz signal -> comparator -> switching -> timer-driven servo -> limit-switch reset.",
        method: [
            "IR signal generation and detection.",
            "Signal validation using comparator.",
            "Switching and isolation (transistor + relay).",
            "Timing/control using 555.",
            "Door-state logic."
        ],
        tools: "IR LED/Receiver, Op-amp, Relays, 555 timers, Servo",
        results: [
            "Reliable response to signal.",
            "Comparator threshold robustness.",
            "Repeatability of delay timer."
        ]
    },
    {
        id: "X3",
        title: "Brick Mould Design Project",
        theme: "Cross-Disciplinary Engineering",
        problem: "How can a brick mould be engineered for manufacturability and repeatable product quality?",
        solution: "DFMA-style engineering design emphasizing requirements, material choices, and assembly practicality.",
        method: [
            "Translate needs into measurable requirements.",
            "Generate and compare candidate designs.",
            "Select materials and manufacturing route.",
            "Identify critical tolerances.",
            "Document design."
        ],
        tools: "DFMA methodology, Design evaluation",
    }
];
