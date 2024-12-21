import React, { useState } from 'react';
import { 
  Card, 
  CardHeader, 
  CardTitle, 
  CardContent, 
  CardDescription 
} from './Card';
import { 
  CircuitBoard, 
  AlertCircle,
  CheckCircle2,
  HeartPulse,
  Info,
  Circle,
  ArrowRight,
  AlertTriangle,
  HelpCircle,
  BookOpen,
  ChevronDown,
  Star,
  Heart,
  Shield,
  Sun,
  User,
  Activity,
  Target,
  Microscope,
  TestTube,
  Crown,
  BadgeAlert,
  Beaker,
  Binary,
  ArrowUpCircle,
  ArrowDownCircle,
  Fingerprint,
  TreePine, 
  SlidersHorizontal, 
  Waves, 
  Scale, 
  Utensils, 
  Trees, 
  Wheat, 
  Timer, 
  Wind, 
  Droplets, 
  Thermometer, 
  Container
} from 'lucide-react';

// -------------------------------------
// Reusable Dropdown
// -------------------------------------
const AnalysisDropdown = ({ title, icon: Icon, bgColor, textColor, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`${bgColor} p-4 rounded-lg`}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between"
      >
        <h3 className={`font-medium ${textColor} flex items-center gap-2`}>
          {Icon && <Icon className="h-5 w-5 flex-shrink-0" />}
          {title}
        </h3>
        <ChevronDown
          className={`h-5 w-5 flex-shrink-0 transition-transform ${
            isOpen ? 'transform rotate-180' : ''
          }`}
        />
      </button>
      {isOpen && (
        <div className="mt-4 space-y-2">
          {children}
        </div>
      )}
    </div>
  );
};

// -------------------------------------
// Patient Info Dropdown
// -------------------------------------
const PatientInfoDropdown = ({ patientData }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-3 bg-white rounded-lg shadow-sm hover:bg-gray-50 transition-colors"
      >
        <span className="font-medium">Patient Information</span>
        <ChevronDown 
          className={`h-5 w-5 flex-shrink-0 transition-transform ${
            isOpen ? 'transform rotate-180' : ''
          }`} 
        />
      </button>
      {isOpen && (
        <div className="mt-2 p-4 bg-white rounded-lg shadow-sm space-y-4">
          <div className="text-sm text-gray-600 grid grid-cols-2 gap-y-2">
            <p>
              <span className="font-semibold">Patient: </span>
              <br className="md:hidden" />
              {patientData.patientName}
            </p>
            <p>
              <span className="font-semibold">DOB: </span>
              <br className="md:hidden" />
              {patientData.patientDOB}
            </p>
            <p>
              <span className="font-semibold">Ordering Physician: </span>
              <br className="md:hidden" />
              {patientData.physicianName}
            </p>
            <p>
              <span className="font-semibold">Test ID: </span>
              <br className="md:hidden" />
              {patientData.testId}
            </p>
            <p>
              <span className="font-semibold">Collection Date: </span>
              <br className="md:hidden" />
              {patientData.collectionDate}
            </p>
            <p>
              <span className="font-semibold">Report Date: </span>
              <br className="md:hidden" />
              {patientData.reportDate}
            </p>
          </div>
          <div className="bg-blue-50 p-4 rounded-lg text-sm text-blue-900 flex items-start gap-2">
            <User className="h-5 w-5 flex-shrink-0 text-blue-500 mt-0.5" />
            <div>
              <p className="font-medium">Patient Notes &amp; History:</p>
              <p className="mt-1">
                {patientData.patientNotes} No family history of colorectal cancer is reported. The patient's diet is high in fat, with intermittent NSAID use and no recent antibiotics.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};


const ActivityMeter = ({ level, direction = 'increase' }) => {
  // Dynamically compute the hue from 120 (green) to 0 (red) based on the level
  const getColorForLevel = (level) => {
    const hue = 120 - (120 * level) / 100; // 120° is green, 0° is red
    return `hsl(${hue}, 100%, 50%)`;
  };

  return (
    <div className="flex items-center gap-2">
      {/* Outer progress-bar container */}
      <div className="relative w-full h-2 bg-gray-200 rounded-full overflow-hidden">
        {/* Filled section based on the 'level' prop */}
        <div
          className="absolute left-0 top-0 h-full"
          style={{
            width: `${level}%`,
            backgroundColor: getColorForLevel(level),
          }}
        />
      </div>
        <span className="text-xs whitespace-nowrap text-gray-600">
      {direction === 'increase' ? '↑' : '↓'} {level}%
    </span>
  </div>
  );
};


const PathwaySection = ({ title, children, className = '' }) => (
  <div className={`bg-white rounded-lg p-4 shadow-sm ${className}`}>
    <h3 className="text-lg font-semibold mb-3 text-gray-800">{title}</h3>
    {children}
  </div>
);

const PathwayItem = ({ name, level, direction, description, color }) => (
  <div className="mb-4 last:mb-0">
          <span className="font-bold text-sm text-gray-700">{name}</span>

            <ActivityMeter level={level} direction={direction} color={color} />
            <p className="text-xs text-gray-600" style={{ fontSize: '0.5rem' }}>{description}</p>

    <div className="flex items-center justify-between mb-1">
      <div className="w-40">
      </div>
    </div>
  </div>
);

const DetailedPathwayActivity = () => {
  return (
    <div>
      <div className="flex items-center gap-2 mb-6">
        <Activity className="w-6 h-6 text-purple-600" />
        <h2 className="text-xl font-bold text-gray-800">Detailed Activity</h2>
      </div>

      <div className="space-y-2 bg-white rounded-lg border border-gray-200 shadow-sm">
        {/* Increased Pathways Section */}
        <PathwaySection title="Increased Pathways in CRC">
          <div className="space-y-4">
            <PathwayItem
              name="Gluconeogenesis"
              level={70}
              direction="increase"
              color="red"
              description="Markedly increased glucose synthesis from non-carbohydrate precursors, potentially supporting tumor metabolism"
            />
            <PathwayItem
              name="Putrefaction & Fermentation"
              level={20}
              direction="increase"
              color="red"
              description="Enhanced amino acid putrefaction and fermentation, leading to potentially harmful metabolites"
            />
            <PathwayItem
              name="Polyamine Production"
              level={90}
              direction="increase"
              color="red"
              description="Elevated production of putrescine through L-arginine and L-ornithine degradation"
            />
            <PathwayItem
              name="Bile Acid Metabolism"
              level={100}
              direction="increase"
              color="red"
              description="Maximum elevation in secondary bile acid conversion, particularly deoxycholate (DCA)"
            />
            <PathwayItem
              name="Methanogenesis"
              level={60}
              direction="increase"
              color="red"
              description="Moderately increased methane metabolism affecting gut motility"
            />
          </div>
        </PathwaySection>

        {/* Depleted Pathways Section */}
        <PathwaySection title="Depleted Pathways in CRC">
          <div className="space-y-4">
            <PathwayItem
              name="Starch Degradation"
              level={90}
              direction="decrease"
              color="blue"
              description="Severely reduced capacity for starch breakdown, affecting SCFA production"
            />
            <PathwayItem
              name="Thiamin Salvage"
              level={90}
              direction="decrease"
              color="blue"
              description="Notably depleted vitamin B1 recycling pathway"
            />
            <PathwayItem
              name="Pentose Phosphate Pathway"
              level={50}
              direction="decrease"
              color="blue"
              description="Reduced NADPH generation and nucleotide synthesis capacity"
            />
          </div>
        </PathwaySection>

        {/* Virulence and Toxicity Section */}
        <PathwaySection title="Microbial Virulence & Toxicity Genes">
          <div className="space-y-4">
            <PathwayItem
              name="cutC/cutD (TMA production)"
              level={90}
              direction="increase"
              color="purple"
              description="Highly elevated choline trimethylamine-lyase activity"
            />
            <PathwayItem
              name="FadA (F. nucleatum)"
              level={30}
              direction="increase"
              color="purple"
              description="Pronounced increase in adhesion protein expression"
            />
            <PathwayItem
              name="bft (B. fragilis toxin)"
              level={45}
              direction="increase"
              color="purple"
              description="Maximum elevation of enterotoxin production"
            />
          </div>
        </PathwaySection>

        {/* Amino Acid Metabolism Section */}
        <PathwaySection title="Amino Acid Metabolic Pathways">
          <div className="space-y-4">
            <PathwayItem
              name="L-arginine/L-ornithine Degradation"
              level={60}
              direction="increase"
              color="yellow"
              description="High polyamine production through amino acid degradation"
            />
            <PathwayItem
              name="BCAA/Phenylalanine Levels"
              level={80}
              direction="increase"
              color="yellow"
              description="Substantially increased branched-chain amino acids and phenylalanine"
            />
          </div>
        </PathwaySection>

        {/* Carbohydrate Metabolism Section */}
        <PathwaySection title="Carbohydrate Metabolic Pathways">
          <div className="space-y-4">
            <PathwayItem
              name="Complex Carbohydrate Degradation"
              level={70}
              direction="decrease"
              color="green"
              description="Markedly reduced breakdown of starch, stachyose, and galactose"
            />
            <PathwayItem
              name="Gluconeogenesis"
              level={30}
              direction="increase"
              color="green"
              description="Maximum increase in glucose synthesis from non-carbohydrate sources"
            />
          </div>
        </PathwaySection>

        {/* Other Notable Changes Section */}
        <PathwaySection title="Other Notable Changes">
          <div className="space-y-4">
            <PathwayItem
              name="UniRef Gene Family Richness"
              level={80}
              direction="increase"
              color="blue"
              description="High diversity in metabolic gene families"
            />
            <PathwayItem
              name="Beneficial SCFAs"
              level={80}
              direction="decrease"
              color="blue"
              description="Substantial reduction in protective short-chain fatty acids"
            />
          </div>
        </PathwaySection>
      </div>
    </div>
  );
};

// -------------------------------------
// Main MicrobiomeCRCReport
// -------------------------------------
const MicrobiomeCRCReport = () => {
  // Example patient data
  const patientData = {
    testId: 'MBX-2024-0472',
    patientName: 'John Doe',
    patientDOB: '1975-07-22',
    physicianName: 'Dr. Jane Smith',
    collectionDate: '2024-03-15',
    reportDate: '2024-03-18',
    resultStatus: 'POSITIVE',
    riskScore: 0.82,
    patientNotes: 'Patient reported intermittent changes in bowel habits and mild abdominal discomfort.'
  };

  // Microbial markers
  const microbialMarkers = [
    {
      name: 'Fusobacterium nucleatum',
      value: 2.0,
      referenceRange: '< 1.2',
      unit: 'relative abundance',
      status: 'HIGH',
      description:
        'Most consistently reported CRC-associated bacterium across multiple datasets...',
      clinicalSignificance: 'HIGH'
    },
    {
      name: 'Peptostreptococcus stomatis',
      value: 1.8,
      referenceRange: '< 1.5',
      unit: 'relative abundance',
      status: 'HIGH',
      description:
        'One of the most significant species with the highest effect size in meta-analysis studies...',
      clinicalSignificance: 'HIGH'
    },
    {
      name: 'Parvimonas micra',
      value: 1.7,
      referenceRange: '< 1.4',
      unit: 'relative abundance',
      status: 'HIGH',
      description:
        'Strong and consistent association with CRC across multiple datasets...',
      clinicalSignificance: 'HIGH'
    },
    {
      name: 'Solobacterium moorei',
      value: 1.6,
      referenceRange: '< 1.3',
      unit: 'relative abundance',
      status: 'HIGH',
      description:
        'Shows high effect size with consistent enrichment across multiple CRC cohorts...',
      clinicalSignificance: 'HIGH'
    },
    {
      name: 'Clostridium symbiosum',
      value: 1.5,
      referenceRange: '< 1.2',
      unit: 'relative abundance',
      status: 'HIGH',
      description:
        'Identified as potential marker for early CRC detection with significant enrichment in meta-analysis...',
      clinicalSignificance: 'MODERATE'
    },
    {
      name: 'choline trimethylamine-lyase (cutC) gene',
      value: 2.1,
      referenceRange: '< 1.6',
      unit: 'relative abundance',
      status: 'HIGH',
      description:
        'Key functional gene significantly overabundant in CRC, indicating altered choline metabolism...',
      clinicalSignificance: 'HIGH'
    }
  ];

  // Function to render status
  const renderStatus = (status) => {
    if (status === 'HIGH') {
      return (
        <span className="px-2 py-1 bg-red-100 text-red-700 rounded-full text-xs font-medium">
          High
        </span>
      );
    }
    return (
      <span className="px-2 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium">
        Normal
      </span>
    );
  };

  // Function to render the gradient meter
  const renderGradientMeter = (value, referenceRange, status) => {
    const maxValue = parseFloat(referenceRange.replace('< ', '')) * 2;
    const percentage = (value / maxValue) * 100;
    const gradientClass =
      status === 'HIGH'
        ? 'bg-gradient-to-r from-green-300 via-yellow-300 to-red-500'
        : 'bg-gradient-to-r from-green-500 to-emerald-400';

    return (
      <div className="relative w-full">
        <div className={`h-2 ${gradientClass} rounded-full`}>
          <div
            className="absolute"
            style={{
              left: `${percentage}%`,
              top: '50%',
              transform: 'translate(-50%, -50%)'
            }}
          >
            <div className="relative flex items-center justify-center">
              <div className="bg-gradient-to-br from-gray-900 via-gray-700 to-black text-white text-[10px] font-bold rounded-full h-6 w-6 flex items-center justify-center border border-black">
                {value}
              </div>
              <div className="bg-transparent absolute w-0 h-0 border-l-3 border-r-3 border-b-4 border-l-transparent border-r-transparent border-b-black -bottom-2 left-1/2 transform -translate-x-1/2"></div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  // Personal functional measurements (example data)
  const personalFunctionalMeasurements = [
    {
      name: 'Putrefaction & Fermentation Pathways',
      leftLabel: 'Low Expression',
      rightLabel: 'High Expression',
      score: 0.7,
      explanation:
        'Higher putrefaction suggests increased amino acid fermentation and potential pro-tumor metabolites.'
    },
    {
      name: 'Gluconeogenesis & Alternate Carbon Utilization',
      leftLabel: 'Minimal Use',
      rightLabel: 'High Use',
      score: 0.5,
      explanation:
        'Moderate gluconeogenesis indicates a balanced shift in carbon source utilization.'
    },
    {
      name: 'Choline Trimethylamine-Lyase (cutC, cutD) Genes',
      leftLabel: 'Low Activity',
      rightLabel: 'High Activity',
      score: 0.8,
      explanation:
        'Elevated cutC activity correlates with increased TMA production, potentially influencing tumorigenesis.'
    }
  ];

  // Renders personal indicator pointer
  const renderPersonalIndicator = (score) => {
    const percentage = Math.round(score * 100);
    return (
      <div className="relative w-full h-full">
        <div
          className="absolute"
          style={{
            left: `${score * 100}%`,
            top: '50%',
            transform: 'translate(-50%, -50%)'
          }}
        >
          <div className="relative flex items-center justify-center">
            <div className="bg-gradient-to-br from-gray-900 via-gray-700 to-black text-white text-[10px] font-bold rounded-full h-8 w-5 flex items-center justify-center border border-black">
              {percentage}
            </div>
            <div className="bg-transparent absolute w-0 h-0 border-l-3 border-r-3 border-b-4 border-l-transparent border-r-transparent border-b-black -bottom-2 left-1/2 transform -translate-x-1/2"></div>
          </div>
        </div>
      </div>
    );
  };



  return (
    <div className="max-w-4xl mx-auto p-6 space-y-5 bg-gray-50 text-gray-900">
      {/* Header Section */}
      <div className="space-y-4">
        <div className="flex items-start gap-2">
          <CircuitBoard className="h-8 w-8 text-blue-600" />
          <div>
            <h1 className="text-2xl font-bold text-blue-900">MicrobiomeScreen™</h1>
            <p className="text-sm text-gray-600">
              Advanced Colorectal Cancer Screening Test
            </p>
          </div>
        </div>
        <PatientInfoDropdown patientData={patientData} />
      </div>

      {/* Result Summary Card */}
      <Card className="border-t-4 border-t-red-500 bg-white">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="text-xl flex items-center gap-2">
              <AlertCircle className="h-6 w-6 text-red-500" />
              Test Result: {patientData.resultStatus}
            </CardTitle>
          </div>
          <CardDescription className="text-base mt-2 text-red-700">
            This result suggests an elevated risk for colorectal cancer or precancerous polyps based on the analyzed microbial profile, including Tier 1 biomarkers like Fusobacterium nucleatum.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="bg-red-50 p-4 rounded-lg text-sm flex items-start gap-2">
            <AlertTriangle className="h-5 w-5 text-red-500 mt-0.5" />
            <div>
              <p className="text-red-800 font-medium">Recommended Next Steps:</p>
              <p className="text-red-700 mt-2">
                Consult your healthcare provider. A diagnostic colonoscopy is recommended to visualize and investigate potential lesions. Further imaging, lifestyle interventions, and possibly additional genomic or metabolic tests may be considered.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Risk Assessment Details */}
      <Card className="bg-white border-t-4 border-t-blue-500">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Shield className="h-5 w-5 text-blue-500" />
            Risk Assessment Details
          </CardTitle>
          <CardDescription className="mt-2">
            Explore the personalized risk score, test performance metrics, and the CRC-associated microbiome signatures.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-8 text-sm">
            {/* Risk Score Visualization */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <div className="flex items-center gap-2">
                  <Activity className="h-5 w-5 text-yellow-500" />
                  <span className="font-medium text-gray-700">Risk Score</span>
                </div>
                <span className="font-medium text-gray-700">
                  {(patientData.riskScore * 100).toFixed(0)}%
                </span>
              </div>
              <div className="h-2 bg-gray-200 rounded-full">
                <div
                  className="h-2 bg-gradient-to-r from-green-500 via-yellow-500 to-red-500 rounded-full"
                  style={{ width: `${patientData.riskScore * 100}%` }}
                />
              </div>
              <p className="mt-2 text-gray-600 leading-relaxed">
                The risk score integrates bacterial DNA patterns, key CRC-associated taxa, functional pathways (e.g., putrefaction, gluconeogenesis), and known biomarkers. A higher percentage correlates with a greater likelihood of underlying neoplastic changes.
              </p>
            </div>

            {/* Analyzed Markers & Test Performance */}
            <div className="space-y-4">
              <AnalysisDropdown
                title="Analyzed Biological Markers"
                icon={Fingerprint}
                bgColor="bg-blue-50"
                textColor="text-blue-900"
              >
                <ul className="space-y-2 text-gray-700 leading-relaxed">
                  <li className="flex items-start gap-2">
                    <Fingerprint className="h-3 w-3 text-blue-500 flex-shrink-0 mt-1" />
                    <div>
                      <span className="font-semibold">
                        CRC-Associated Bacterial Taxa:
                      </span>{' '}
                      Includes Tier 1 markers like <em>Fusobacterium nucleatum</em> and other species enriched in CRC. These organisms may promote inflammation and tumorigenesis.
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <Fingerprint className="h-3 w-3 text-blue-500 flex-shrink-0 mt-1" />
                    <div>
                      <span className="font-semibold">Functional Pathways:</span> We assess pathways (e.g., putrefaction, gluconeogenesis) and genes (e.g., cutC) known to drive CRC-related metabolic shifts.
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <Fingerprint className="h-3 w-3 text-blue-500 flex-shrink-0 mt-1" />
                    <div>
                      <span className="font-semibold">Inflammatory Indicators:</span> Detection of bacterial species and metabolites contributing to chronic inflammation, a recognized factor in colorectal carcinogenesis.
                    </div>
                  </li>
                </ul>
              </AnalysisDropdown>

              <AnalysisDropdown
                title="Test Performance Highlights"
                icon={Star}
                bgColor="bg-purple-50"
                textColor="text-purple-900"
              >
                <ul className="space-y-2 text-gray-700 leading-relaxed">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-3 w-3 text-purple-500 flex-shrink-0 mt-1" />
                    <div>
                      <span className="font-semibold">
                        93% Detection Rate (Sensitivity):
                      </span>{' '}
                      High ability to identify individuals with underlying colorectal neoplasia.
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-3 w-3 text-purple-500 flex-shrink-0 mt-1" />
                    <div>
                      <span className="font-semibold">87% Specificity:</span> A relatively low false-positive rate, but colonoscopy remains essential for confirmation.
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-3 w-3 text-purple-500 flex-shrink-0 mt-1" />
                    <div>
                      <span className="font-semibold">
                        Quality &amp; Compliance:
                      </span>{' '}
                      CLIA-certified, CAP-accredited, ensuring reliable and reproducible results.
                    </div>
                  </li>
                </ul>
              </AnalysisDropdown>
            </div>

            <p className="text-gray-600 leading-relaxed">
              Our integrative approach stays updated with emerging clinical research, ensuring that new biomarkers, microbial genes, and functional pathways are considered as evidence evolves.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Microbial Markers Detail */}
      <Card className="bg-white border-t-4 border-t-amber-500">
        <CardHeader>
          <div className="flex items-center gap-2">
            <AlertTriangle className="h-5 w-5 text-amber-500" />
            <CardTitle>Key Microbial Markers</CardTitle>
          </div>
          <CardDescription className="mt-2">
            Taxa with known associations to CRC and their abundance in your sample
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-8 text-xs sm:text-sm md:text-base">
            {microbialMarkers.map((marker, index) => (
              <div
                key={index}
                className="border-b border-gray-200 pb-6 last:border-0"
              >
                <div className="flex justify-between items-start mb-4">
                  <div className="space-y-1">
                    <h3
                      className={`font-medium text-lg ${
                        marker.status === 'HIGH' ? 'text-red-700' : 'text-green-700'
                      }`}
                    >
                      {marker.name}
                    </h3>
                    <p className="text-gray-600" style={{ fontSize: '0.7rem' }}>
                      {marker.description}
                    </p>
                  </div>
                  <div className="flex flex-col items-end">
                    <span
                      className="text-gray-500 mt-1"
                      style={{ fontSize: '0.6rem' }}
                    >
                      Significance:
                    </span>
                    {renderStatus(marker.status)}
                  </div>
                </div>
                <div className="space-y-2">
                  <div
                    className="flex justify-between text-gray-600 mb-1"
                    style={{ fontSize: '0.6rem' }}
                  >
                    <div className="flex items-center gap-1">
                      <TestTube className="h-5 w-5 text-gray-500" />
                      <span className="md:text-xs">
                        Patient Value:
                        <br />
                        {marker.value} {marker.unit}
                      </span>
                    </div>
                    <div className="flex items-center gap-1">
                      <span
                        className="md:text-xs"
                        style={{
                          textAlign: 'right',
                          display: 'block',
                          width: '100%'
                        }}
                      >
                        Reference Range: <br />
                        {marker.referenceRange}
                      </span>
                      <Target className="h-5 w-5 text-gray-500" />
                    </div>
                  </div>
                  {renderGradientMeter(marker.value, marker.referenceRange, marker.status)}
                </div>
              </div>
            ))}
            <div className="bg-blue-50 p-4 rounded-lg">
              <div className="flex gap-2">
                <Info className="h-5 w-5 text-blue-500 flex-shrink-0" />
                <div className="text-blue-800 leading-relaxed text-xs sm:text-sm">
                  <p>
                    The observed microorganisms are a subset of a broader network of
                    bacteria consistently linked to CRC. Key Tier 1 species like{' '}
                    <em>Fusobacterium nucleatum</em> are known to strongly correlate with
                    tumorigenesis. Functional gene markers such as choline
                    trimethylamine-lyase (cutC) and pathways favoring amino acid
                    fermentation also drive CRC-associated microbial profiles.
                  </p>
                  <p className="mt-2">
                    Interpreting these results in the context of your health profile,
                    lifestyle, and family history is essential. Consult with a qualified
                    healthcare professional for further guidance.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Biomarker Tiers */}
      <Card className="bg-white border-t-4 border-t-purple-500">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <CircuitBoard className="h-5 w-5 text-purple-600" />
            Biomarker Tiers
          </CardTitle>
          <CardDescription className="mt-2">
            Detailed information on bacterial taxa enriched in CRC and control samples
          </CardDescription>
        </CardHeader>
        <CardContent className="text-sm text-gray-700 leading-relaxed space-y-6">
          <AnalysisDropdown
            title="Tier 1: High Priority Biomarkers"
            icon={Crown}
            bgColor="bg-red-50"
            textColor="text-red-700"
          >
            <p className="text-red-700 mb-3">
              Strong evidence, high effect sizes, and reproducible associations with CRC.
            </p>
            <ul className="list-none space-y-3">
              <li className="flex items-start gap-2">
                <Target className="h-4 w-4 text-red-500 mt-1" />
                <div>
                  <span className="font-semibold">Fusobacterium nucleatum:</span> Most
                  consistently reported CRC-associated bacterium with high effect sizes.
                  Involved in tumorigenesis and modulating the tumor microenvironment.
                </div>
              </li>
              <li className="flex items-start gap-2">
                <Target className="h-4 w-4 text-red-500 mt-1" />
                <div>
                  <span className="font-semibold">Solobacterium moorei:</span> Consistently
                  identified with high effect sizes across multiple CRC cohorts.
                </div>
              </li>
              <li className="flex items-start gap-2">
                <Target className="h-4 w-4 text-red-500 mt-1" />
                <div>
                  <span className="font-semibold">Porphyromonas asaccharolytica:</span>{' '}
                  Consistently identified with high effect sizes in CRC patients.
                </div>
              </li>
              <li className="flex items-start gap-2">
                <Target className="h-4 w-4 text-red-500 mt-1" />
                <div>
                  <span className="font-semibold">Parvimonas micra:</span> Strong association
                  with CRC, particularly in advanced stages.
                </div>
              </li>
              <li className="flex items-start gap-2">
                <Target className="h-4 w-4 text-red-500 mt-1" />
                <div>
                  <span className="font-semibold">
                    Choline Trimethylamine-Lyase Gene (cutC):
                  </span>{' '}
                  Overabundant in CRC, indicating a link between microbiome choline
                  metabolism and CRC.
                </div>
              </li>
              <li className="flex items-start gap-2">
                <Target className="h-4 w-4 text-red-500 mt-1" />
                <div>
                  <span className="font-semibold">
                    Putrefaction and Fermentation Pathways:
                  </span>{' '}
                  Overabundant in CRC, these pathways are related to amino acid metabolism,
                  producing tumor-promoting compounds.
                </div>
              </li>
            </ul>
          </AnalysisDropdown>

          <AnalysisDropdown
            title="Tier 2: Mid Priority Biomarkers"
            icon={Microscope}
            bgColor="bg-orange-50"
            textColor="text-orange-700"
          >
            <p className="text-orange-700 mb-3">
              Good evidence with lower effect sizes and some variability.
            </p>
            <ul className="list-none space-y-3">
              <li className="flex items-start gap-2">
                <Beaker className="h-4 w-4 text-orange-500 mt-1" />
                <div>
                  <span className="font-semibold">Clostridium symbiosum:</span> Potential
                  marker for early CRC detection with strong enrichment in meta-analyses.
                </div>
              </li>
              <li className="flex items-start gap-2">
                <Beaker className="h-4 w-4 text-orange-500 mt-1" />
                <div>
                  <span className="font-semibold">Gordonibacter pamelaeae:</span> Generally
                  associated with healthy controls but shows enrichment in some CRC studies;
                  may mediate dietary changes.
                </div>
              </li>
              <li className="flex items-start gap-2">
                <Beaker className="h-4 w-4 text-orange-500 mt-1" />
                <div>
                  <span className="font-semibold">Bifidobacterium catenulatum:</span>{' '}
                  Control-associated species; consistently depleted in CRC and used as a
                  probiotic supplement.
                </div>
              </li>
              <li className="flex items-start gap-2">
                <Beaker className="h-4 w-4 text-orange-500 mt-1" />
                <div>
                  <span className="font-semibold">Gluconeogenesis Pathways:</span>{' '}
                  Overabundant in CRC, indicating metabolic shifts that could drive cancer
                  development.
                </div>
              </li>
              <li className="flex items-start gap-2">
                <Beaker className="h-4 w-4 text-orange-500 mt-1" />
                <div>
                  <span className="font-semibold">
                    Starch, Stachyose, and Galactose Degradation:
                  </span>{' '}
                  Overabundant in healthy controls, suggesting diet-associated functional
                  shifts.
                </div>
              </li>
            </ul>
          </AnalysisDropdown>

          <AnalysisDropdown
            title="Tier 3: Lower Priority Biomarkers"
            icon={TestTube}
            bgColor="bg-yellow-50"
            textColor="text-yellow-700"
          >
            <p className="text-yellow-700 mb-3">
              Limited evidence with more variable associations.
            </p>
            <ul className="list-none space-y-3">
              <li className="flex items-start gap-2">
                <Binary className="h-4 w-4 text-yellow-600 mt-1" />
                <div>
                  <span className="font-semibold">Anaerococcus vaginalis:</span> Often
                  enriched in CRC but with variability across datasets.
                </div>
              </li>
              <li className="flex items-start gap-2">
                <Binary className="h-4 w-4 text-yellow-600 mt-1" />
                <div>
                  <span className="font-semibold">Peptostreptococcus anaerobius:</span>{' '}
                  Enriched in CRC with less consistent associations.
                </div>
              </li>
              <li className="flex items-start gap-2">
                <Binary className="h-4 w-4 text-yellow-600 mt-1" />
                <div>
                  <span className="font-semibold">Fusobacterium mortiferum:</span> Enriched
                  in CRC across several datasets but less consistently than F. nucleatum.
                </div>
              </li>
              <li className="flex items-start gap-2">
                <Binary className="h-4 w-4 text-yellow-600 mt-1" />
                <div>
                  <span className="font-semibold">
                    Increased Oral Species Richness/Abundance:
                  </span>{' '}
                  Presence of oral taxa in stool is often more abundant in CRC, suggesting
                  translocation from the oral cavity.
                </div>
              </li>
              <li className="flex items-start gap-2">
                <Binary className="h-4 w-4 text-yellow-600 mt-1" />
                <div>
                  <span className="font-semibold">Altered Secondary Bile Acid Levels:</span>{' '}
                  Consistently found in CRC; may point to changes in bile acid metabolism.
                </div>
              </li>
              <li className="flex items-start gap-2">
                <Binary className="h-4 w-4 text-yellow-600 mt-1" />
                <div>
                  <span className="font-semibold">
                    Branched-Chain Amino Acids and Phenylalanine:
                  </span>{' '}
                  Elevated in CRC and advanced adenomas; associated with cancer metabolism
                  pathways.
                </div>
              </li>
            </ul>
          </AnalysisDropdown>

          <AnalysisDropdown
            title="Tier 4: Adenoma Biomarkers"
            icon={BadgeAlert}
            bgColor="bg-blue-50"
            textColor="text-blue-700"
          >
            <p className="text-blue-700 mb-3">
              Potential indicators of early metabolic dysbiosis.
            </p>
            <ul className="list-none space-y-3">
              <li className="flex items-start gap-2">
                <ArrowUpCircle className="h-4 w-4 text-blue-500 mt-1" />
                <div>
                  <span className="font-semibold">
                    Secondary Bile Acids and Polyamines:
                  </span>{' '}
                  Elevated in adenomas; may indicate early metabolic changes but require
                  further validation.
                </div>
              </li>
              <li className="flex items-start gap-2">
                <ArrowUpCircle className="h-4 w-4 text-blue-500 mt-1" />
                <div>
                  <span className="font-semibold">
                    Increased UniRef90 Gene Families:
                  </span>{' '}
                  Higher genomic activity in the gut microbiome of CRC patients; indicates
                  general shifts but needs more correlation studies.
                </div>
              </li>
            </ul>
          </AnalysisDropdown>
        </CardContent>
      </Card>

      {/* Functional Pathways & Genes */}
      <Card className="bg-white border-t-4 border-t-gray-500">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <HeartPulse className="h-5 w-5 text-gray-600" />
            Functional Pathways &amp; Genes
          </CardTitle>
          <CardDescription className="mt-2">
            Deep insights into the metabolic and genetic signatures that shape CRC-associated microbiomes
          </CardDescription>
        </CardHeader>
        <CardContent className="text-sm text-gray-700 leading-relaxed space-y-6">
          <p>
            CRC-associated microbiomes exhibit distinct functional profiles at metabolic
            and genetic levels. Compared to healthy controls, CRC samples often show an
            expansion of pathways that promote inflammation, DNA damage, and
            pro-tumorigenic microenvironments, alongside a decrease in beneficial
            carbohydrate-degrading pathways.
          </p>
          
      <div className="flex items-center gap-2 mb-6">
        <Scale className="w-6 h-6 text-blue-600" />
        <h2 className="text-xl font-bold text-gray-800">Pathway Highlights</h2>
      </div>

            <div className="space-y-6 bg-white rounded-lg p-4 border border-gray-200 shadow-sm">
              {personalFunctionalMeasurements.map((measurement, index) => (
                <div key={index} className="space-y-2">
                  <h4 className="font-bold text-black text-base">{measurement.name}</h4>
                  <div className="flex justify-between items-center mb-1">
                    <div className="flex flex-col items-start">
                      <div className="font-medium text-sm text-black">
                        {measurement.leftLabel}
                      </div>
                      <div className="text-[10px] text-gray-500 pl-0 py-1"></div>
                    </div>
                    <div className="flex flex-col items-end">
                      <div className="font-medium text-sm text-black">
                        {measurement.rightLabel}
                      </div>
                      <div className="text-[10px] text-gray-500 pr-0 py-1 text-right"></div>
                    </div>
                  </div>
                  <div className="relative bg-gradient-to-r from-green-100 via-yellow-100 to-red-200 h-6 rounded-full">
                    {renderPersonalIndicator(measurement.score)}
                  </div>
                  <div className="flex items-center gap-1 mt-1">
                    <Info className="h-3 w-3 text-gray-400 flex-shrink-0" />
                    <span className="text-[10px] text-gray-500">
                      {measurement.explanation}
                    </span>
                  </div>
                </div>
              ))}
            </div>

        
          
          <DetailedPathwayActivity />


        </CardContent>
      </Card>

      {/* Understanding Your Results */}
      <Card className="bg-white border-t-4 border-t-blue-600">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Info className="h-5 w-5 text-blue-600" />
            Understanding Your Results
          </CardTitle>
          <CardDescription className="mt-2">
            Contextualizing microbial findings within a broader clinical framework
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4 text-sm text-gray-700 leading-relaxed">
            <div className="flex gap-3">
              <ArrowRight className="h-5 w-5 text-gray-400 flex-shrink-0 mt-0.5" />
              <p>
                <span className="font-medium">What this means:</span> A positive result
                suggests that your microbiome resembles profiles seen in CRC patients,
                warranting further investigation.
              </p>
            </div>
            <div className="flex gap-3">
              <ArrowRight className="h-5 w-5 text-gray-400 flex-shrink-0 mt-0.5" />
              <p>
                <span className="font-medium">Important note:</span> Only direct
                visualization (colonoscopy) can confirm whether lesions are present.
              </p>
            </div>
            <div className="flex gap-3">
              <ArrowRight className="h-5 w-5 text-gray-400 flex-shrink-0 mt-0.5" />
              <p>
                <span className="font-medium">False positives:</span> Non-CRC factors can
                influence results. A follow-up colonoscopy helps clarify findings.
              </p>
            </div>
            <div className="flex gap-3">
              <ArrowRight className="h-5 w-5 text-gray-400 flex-shrink-0 mt-0.5" />
              <p>
                <span className="font-medium">Lifestyle considerations:</span> A fiber-rich
                diet, exercise, and avoidance of excess alcohol and tobacco promote a
                healthier gut microbiome.
              </p>
            </div>
            <div className="flex gap-3">
              <ArrowRight className="h-5 w-5 text-gray-400 flex-shrink-0 mt-0.5" />
              <p>
                <span className="font-medium">Guidelines:</span> The US Preventive Services
                Task Force recommends regular screening starting at age 45 for average-risk
                individuals.
              </p>
            </div>

            <AnalysisDropdown
              title="CRC-Associated Pathways"
              icon={ArrowUpCircle}
              bgColor="bg-red-50"
              textColor="text-red-700"
            >
              <p className="text-red-700 mb-3">
                Enriched in CRC samples, these pathways enhance metabolic dysbiosis, fuel
                inflammation, and support tumor growth.
              </p>
              <ul className="list-none space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <Beaker className="h-4 w-4 text-red-500 mt-1" />
                  <div>
                    <span className="font-semibold">
                      Putrefaction &amp; Fermentation Pathways:
                    </span>{' '}
                    Degrade amino acids into polyamines (e.g., putrescine), ammonia, and
                    other pro-inflammatory metabolites. These byproducts can accelerate
                    epithelial cell proliferation and tumorigenesis.
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <Beaker className="h-4 w-4 text-red-500 mt-1" />
                  <div>
                    <span className="font-semibold">
                      Gluconeogenesis &amp; Alternate Carbon Utilization:
                    </span>
                    CRC-associated microbes often shift metabolic gears to utilize
                    alternative carbon sources. This flexibility supports bacterial growth
                    in tumor niches and aligns with cancer cells’ metabolic needs.
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <Beaker className="h-4 w-4 text-red-500 mt-1" />
                  <div>
                    <span className="font-semibold">
                      Secondary Bile Acid Conversion (bai Operon):
                    </span>
                    Enhanced conversion of primary to secondary bile acids (e.g.,
                    deoxycholate) damages DNA, disrupts the epithelial barrier, and promotes
                    mutagenesis.
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <Beaker className="h-4 w-4 text-red-500 mt-1" />
                  <div>
                    <span className="font-semibold">
                      Amino Acid Degradation &amp; Polyamine Production:
                    </span>
                    Pathways that metabolize L-arginine and L-ornithine yield polyamines,
                    fueling local inflammation and neoplastic changes.
                  </div>
                </li>
              </ul>
              <div className="mt-3 p-2 bg-red-100 text-red-800 text-xs rounded-md">
                <strong>Clinical Insight:</strong> Elevated abundance of these pathways
                correlates with higher CRC risk and advanced disease stages. Interventions
                targeting these metabolic shifts—through dietary modifications or
                microbiome-directed therapies—could become future preventative or adjunct
                strategies.
              </div>
            </AnalysisDropdown>

            <AnalysisDropdown
              title="CRC-Associated Genes"
              icon={Binary}
              bgColor="bg-orange-50"
              textColor="text-orange-700"
            >
              <p className="text-orange-700 mb-3">
                Genetic markers in the microbiome influence metabolite profiles and tumor
                promotion.
              </p>
              <ul className="list-none space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <Fingerprint className="h-4 w-4 text-orange-500 mt-1" />
                  <div>
                    <span className="font-semibold">
                      Choline Trimethylamine-Lyase (cutC, cutD):
                    </span>{' '}
                    Overabundant in CRC, these genes convert choline into trimethylamine
                    (TMA), a precursor to TMAO, which can aggravate vascular inflammation
                    and potentially support tumorigenesis.
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <Fingerprint className="h-4 w-4 text-orange-500 mt-1" />
                  <div>
                    <span className="font-semibold">
                      Expansions in UniRef Gene Families:
                    </span>{' '}
                    CRC microbiomes often show a broad genomic expansion, reflecting
                    microbial adaptability within the tumor microenvironment and fostering
                    conditions that promote cancer progression.
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <Fingerprint className="h-4 w-4 text-orange-500 mt-1" />
                  <div>
                    <span className="font-semibold">
                      Virulence &amp; Toxin Genes (e.g., fadA, bft, pks):
                    </span>
                    These genes are linked to microbial virulence factors such as adhesins
                    and enterotoxins from species like <em>Fusobacterium nucleatum</em> and{' '}
                    <em>Bacteroides fragilis</em>, enhancing tumor-promoting inflammatory
                    responses.
                  </div>
                </li>
              </ul>
              <div className="mt-3 p-2 bg-orange-100 text-red-800 text-xs rounded-md">
                <strong>Clinical Insight:</strong> Identifying gene-level shifts provides
                biomarkers for early detection and potential therapeutic targets. Future
                interventions may modulate these gene functions via tailored probiotics or
                precision antibiotics.
              </div>
            </AnalysisDropdown>

            <AnalysisDropdown
              title="Control-Associated Pathways"
              icon={ArrowDownCircle}
              bgColor="bg-green-50"
              textColor="text-green-700"
            >
              <p className="text-green-700 mb-3">
                More abundant in healthy individuals, these pathways help maintain a
                non-inflammatory, stable gut environment.
              </p>
              <ul className="list-none space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <Sun className="h-4 w-4 text-green-500 mt-1" />
                  <div>
                    <span className="font-semibold">
                      Carbohydrate Degradation (Starch, Stachyose, &amp; Galactose):
                    </span>{' '}
                    These pathways produce beneficial short-chain fatty acids (SCFAs),
                    supporting gut epithelial health and reducing inflammation.
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <Sun className="h-4 w-4 text-green-500 mt-1" />
                  <div>
                    <span className="font-semibold">
                      Carbon Fixation &amp; Balanced Redox Cycles:
                    </span>{' '}
                    Pathways like the Calvin-Benson-Bassham cycle are more typical of a
                    balanced microbiome. They contribute to a less inflammatory environment
                    and help maintain microbial diversity.
                  </div>
                </li>
              </ul>
              <div className="mt-3 p-2 bg-green-100 text-green-800 text-xs rounded-md">
                <strong>Clinical Insight:</strong> Encouraging these beneficial pathways
                (through dietary fiber, probiotics, and prebiotics) may help restore a
                protective microbiome and lower CRC risk.
              </div>
            </AnalysisDropdown>

            <AnalysisDropdown
              title="Key Metabolites"
              icon={TestTube}
              bgColor="bg-yellow-50"
              textColor="text-yellow-700"
            >
              <p className="text-yellow-700 mb-3">
                Metabolites reflect the microbiome’s functional output, influencing
                epithelial integrity, immune responses, and tumor formation.
              </p>
              <ul className="list-none space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <Fingerprint className="h-4 w-4 text-yellow-600 mt-1" />
                  <div>
                    <span className="font-semibold">Polyamines (e.g., Putrescine):</span>{' '}
                    Promote cell proliferation and may enhance tumor growth.
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <Fingerprint className="h-4 w-4 text-yellow-600 mt-1" />
                  <div>
                    <span className="font-semibold">Ammonia &amp; Hydrogen Sulfide:</span>{' '}
                    Can damage the gut epithelium, contribute to DNA damage, and foster a
                    carcinogenic environment.
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <Fingerprint className="h-4 w-4 text-yellow-600 mt-1" />
                  <div>
                    <span className="font-semibold">
                      Trimethylamine (TMA) &amp; TMAO:
                    </span>{' '}
                    Byproducts of choline metabolism linked to vascular inflammation and
                    potentially tumorigenesis.
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <Fingerprint className="h-4 w-4 text-yellow-600 mt-1" />
                  <div>
                    <span className="font-semibold">
                      Branched-Chain Amino Acids (BCAAs) &amp; Phenylalanine:
                    </span>{' '}
                    Elevated in CRC and advanced adenomas, associated with altered cancer
                    metabolism.
                  </div>
                </li>
              </ul>
              <div className="mt-3 p-2 bg-yellow-100 text-yellow-800 text-xs rounded-md">
                <strong>Clinical Insight:</strong> Monitoring these metabolites, along with
                microbial gene profiles, may improve early CRC detection and guide dietary
                or therapeutic interventions to reduce carcinogenic potentials.
              </div>
            </AnalysisDropdown>

            <AnalysisDropdown
              title="Research & Future Directions"
              icon={Crown}
              bgColor="bg-blue-50"
              textColor="text-blue-700"
            >
              <p className="text-blue-700 mb-3">
                Ongoing research refines our understanding of the microbiome’s role in CRC,
                aiming for precision interventions.
              </p>
              <ul className="list-none space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <Microscope className="h-4 w-4 text-blue-500 mt-1" />
                  <div>
                    <span className="font-semibold">Strain-Level Analysis:</span> Future
                    sequencing efforts delve deeper into strain-specific genes (e.g.,
                    variants of cutC) that may have stronger links to CRC.
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <Microscope className="h-4 w-4 text-blue-500 mt-1" />
                  <div>
                    <span className="font-semibold">Multi-Omics Approaches:</span>{' '}
                    Integrating metagenomics with metabolomics, proteomics, and
                    transcriptomics will provide a more holistic view of CRC progression and
                    better biomarkers.
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <Microscope className="h-4 w-4 text-blue-500 mt-1" />
                  <div>
                    <span className="font-semibold">
                      Diet &amp; Lifestyle Interventions:
                    </span>{' '}
                    Understanding functional pathways can guide personalized dietary advice
                    and the use of pre/probiotics to mitigate CRC risk.
                  </div>
                </li>
              </ul>
              <div className="mt-3 p-2 bg-blue-100 text-blue-800 text-xs rounded-md">
                <strong>Clinical Insight:</strong> As evidence evolves, clinical protocols
                will adapt, potentially incorporating microbiome modulation into standard
                CRC prevention and management strategies.
              </div>
            </AnalysisDropdown>
          </div>
        </CardContent>
      </Card>

      {/* FAQ Section */}
      <Card className="bg-white border-t-4 border-t-green-600">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <HelpCircle className="h-5 w-5 text-green-600" />
            Frequently Asked Questions
          </CardTitle>
          <CardDescription className="mt-2">
            Clarifications for common patient concerns
          </CardDescription>
        </CardHeader>
        <CardContent className="text-sm text-gray-700 leading-relaxed space-y-4">
          <div>
            <p className="font-medium">
              Q: Do I need a colonoscopy if my test is positive?
            </p>
            <p>
              A: A positive result strongly suggests discussing colonoscopy or other
              diagnostic imaging with your physician.
            </p>
          </div>
          <div>
            <p className="font-medium">Q: Are there insurance implications?</p>
            <p>
              A: Check with your insurer. Many cover recommended colorectal cancer
              screening, but policies vary.
            </p>
          </div>
          <div>
            <p className="font-medium">
              Q: Can I improve my gut health before re-testing?
            </p>
            <p>
              A: Dietary changes, exercise, and probiotics may help, though they don’t
              replace the need for confirmatory testing if indicated.
            </p>
          </div>
          <div>
            <p className="font-medium">Q: How accurate is this test?</p>
            <p>
              A: While not diagnostic, it has demonstrated high sensitivity and good
              specificity. Research is ongoing to improve precision.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Resources & References */}
      <Card className="bg-white border-t-4 border-t-indigo-600">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BookOpen className="h-5 w-5 text-indigo-600" />
            Resources &amp; References
          </CardTitle>
          <CardDescription className="mt-2">
            Further reading on the science behind MicrobiomeScreen™
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6 text-sm text-gray-700 leading-relaxed">
          <div className="space-y-2">
            <p>
            <span className="font-medium">Test Methodology:</span> 
              Next-generation sequencing (NGS) of stool samples identifies taxa and functional genes. 
              Bioinformatics pipelines correlate microbial abundances with CRC risk signatures.
            </p>
            <p>
              <span className="font-medium">Limitations:</span> 
              Not a substitute for colonoscopy. Factors influencing CRC risk (genetics, non-microbial lifestyle) may not be captured.
            </p>
          </div>
          <div>
            <p className="font-medium mb-3">Peer-Reviewed Literature &amp; Guidelines:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1 bg-gray-50 p-3 rounded-md shadow-sm">
                <div className="flex items-start gap-2">
                  <Star className="h-4 w-4 text-indigo-500 mt-0.5 flex-shrink-0" />
                  <p className="text-sm leading-relaxed">
                    Chen, W., et al. (2022). “Gut Microbiome Signatures of Colorectal Cancer.” 
                    <em> Gastroenterology</em>, 162(4), 1232-1245.
                  </p>
                </div>
              </div>
              <div className="space-y-1 bg-gray-50 p-3 rounded-md shadow-sm">
                <div className="flex items-start gap-2">
                  <Star className="h-4 w-4 text-indigo-500 mt-0.5 flex-shrink-0" />
                  <p className="text-sm leading-relaxed">
                    Liang, Q., et al. (2021). “Microbial Markers for Early Detection of Colorectal Neoplasia.” 
                    <em> Nature Medicine</em>, 27(10), 1834-1842.
                  </p>
                </div>
              </div>
              <div className="space-y-1 bg-gray-50 p-3 rounded-md shadow-sm">
                <div className="flex items-start gap-2">
                  <Star className="h-4 w-4 text-indigo-500 mt-0.5 flex-shrink-0" />
                  <p className="text-sm leading-relaxed">
                    Wirbel, J., et al. (2019). “Meta-analysis of fecal metagenomes reveals global microbial signatures specific for colorectal cancer.” 
                    <em> Nature Medicine</em>, 25(4), 679-689.
                  </p>
                </div>
              </div>
              <div className="space-y-1 bg-gray-50 p-3 rounded-md shadow-sm">
                <div className="flex items-start gap-2">
                  <Star className="h-4 w-4 text-indigo-500 mt-0.5 flex-shrink-0" />
                  <p className="text-sm leading-relaxed">
                    Yachida, S., et al. (2019). “Metagenomic and metabolomic analyses reveal distinct stage-specific phenotypes of the gut microbiota in colorectal cancer.” 
                    <em> Nature Medicine</em>, 25(6), 968-976.
                  </p>
                </div>
              </div>
              <div className="space-y-1 bg-gray-50 p-3 rounded-md shadow-sm">
                <div className="flex items-start gap-2">
                  <Star className="h-4 w-4 text-indigo-500 mt-0.5 flex-shrink-0" />
                  <p className="text-sm leading-relaxed">
                    Feng, Q., et al. (2015). “Gut microbiome development along the colorectal adenoma-carcinoma sequence.” 
                    <em> Nature Communications</em>, 6, 6528.
                  </p>
                </div>
              </div>
              <div className="space-y-1 bg-gray-50 p-3 rounded-md shadow-sm">
                <div className="flex items-start gap-2">
                  <Star className="h-4 w-4 text-indigo-500 mt-0.5 flex-shrink-0" />
                  <p className="text-sm leading-relaxed">
                    Zackular, J.P., et al. (2014). “The human gut microbiome as a screening tool for colorectal cancer.” 
                    <em> Cancer Prevention Research</em>, 7(11), 1112-1121.
                  </p>
                </div>
              </div>
              <div className="space-y-1 bg-gray-50 p-3 rounded-md shadow-sm">
                <div className="flex items-start gap-2">
                  <Star className="h-4 w-4 text-indigo-500 mt-0.5 flex-shrink-0" />
                  <p className="text-sm leading-relaxed">
                    Thomas, A.M., et al. (2019). “Metagenomic analysis of colorectal cancer datasets identifies cross-cohort microbial diagnostic signatures and a link with choline degradation.” 
                    <em> Nature Medicine</em>, 25(4), 667-678.
                  </p>
                </div>
              </div>
              <div className="space-y-1 bg-gray-50 p-3 rounded-md shadow-sm">
                <div className="flex items-start gap-2">
                  <Star className="h-4 w-4 text-indigo-500 mt-0.5 flex-shrink-0" />
                  <p className="text-sm leading-relaxed">
                    Dai, Z., et al. (2018). “Multi-cohort analysis of colorectal cancer metagenome identified altered bacteria across populations and universal bacterial markers.” 
                    <em> Microbiome</em>, 6(1), 70.
                  </p>
                </div>
              </div>
              <div className="space-y-1 bg-gray-50 p-3 rounded-md shadow-sm">
                <div className="flex items-start gap-2">
                  <Star className="h-4 w-4 text-indigo-500 mt-0.5 flex-shrink-0" />
                  <p className="text-sm leading-relaxed">
                    Flemer, B., et al. (2017). “Tumour-associated and non-tumour-associated microbiota in colorectal cancer.” 
                    <em> Gut</em>, 66(4), 633-643.
                  </p>
                </div>
              </div>
              <div className="space-y-1 bg-gray-50 p-3 rounded-md shadow-sm">
                <div className="flex items-start gap-2">
                  <Star className="h-4 w-4 text-indigo-500 mt-0.5 flex-shrink-0" />
                  <p className="text-sm leading-relaxed">
                    Baxter, N.T., et al. (2016). “Microbiota-based model improves the sensitivity of fecal immunochemical test for detecting colonic lesions.” 
                    <em> Genome Medicine</em>, 8(1), 37.
                  </p>
                </div>
              </div>
              <div className="space-y-1 bg-gray-50 p-3 rounded-md shadow-sm">
                <div className="flex items-start gap-2">
                  <Star className="h-4 w-4 text-indigo-500 mt-0.5 flex-shrink-0" />
                  <p className="text-sm leading-relaxed">
                    Kostic, A.D., et al. (2012). “Genomic analysis identifies association of Fusobacterium with colorectal carcinoma.” 
                    <em> Genome Research</em>, 22(2), 292-298.
                  </p>
                </div>
              </div>
              <div className="space-y-1 bg-gray-50 p-3 rounded-md shadow-sm">
                <div className="flex items-start gap-2">
                  <Star className="h-4 w-4 text-indigo-500 mt-0.5 flex-shrink-0" />
                  <p className="text-sm leading-relaxed">
                    Yu, J., et al. (2017). “Metagenomic analysis of faecal microbiome as a tool towards targeted non-invasive biomarkers for colorectal cancer.” 
                    <em> Gut</em>, 66(1), 70-78.
                  </p>
                </div>
              </div>
              <div className="space-y-1 bg-gray-50 p-3 rounded-md shadow-sm">
                <div className="flex items-start gap-2">
                  <Star className="h-4 w-4 text-indigo-500 mt-0.5 flex-shrink-0" />
                  <p className="text-sm leading-relaxed">
                    Zeller, G., et al. (2014). “Potential of fecal microbiota for early-stage detection of colorectal cancer.” 
                    <em> Molecular Systems Biology</em>, 10(11), 766.                  </p>
                </div>
              </div>
              {/* (Add more references as desired) */}
            </div>
          </div>
          <p>
            Additional materials, including patient support and educational resources, can
            be found at the
            <a
              href="https://www.microbiomescreen.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline ml-1 hover:text-blue-800 transition-colors"
            >
              MicrobiomeScreen™ official website
            </a>
            .
          </p>
        </CardContent>
      </Card>

      {/* Data Privacy & Compliance */}
      <Card className="bg-white border-t-4 border-t-blue-600">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Shield className="h-5 w-5 text-blue-600" />
            Data Privacy &amp; Compliance
          </CardTitle>
          <CardDescription className="mt-2">
            Your health information remains secure and confidential
          </CardDescription>
        </CardHeader>
        <CardContent className="text-sm text-gray-700 leading-relaxed space-y-2">
          <p>
            <span className="font-medium">HIPAA Compliance:</span> We adhere to strict
            privacy regulations, ensuring the confidentiality of your information.
          </p>
          <p>
            <span className="font-medium">Data Encryption &amp; Storage:</span> Secure data
            handling protocols prevent unauthorized access.
          </p>
          <p>
            <span className="font-medium">Use of Results:</span> Shared only with
            authorized healthcare providers or as required by law.
          </p>
        </CardContent>
      </Card>

      {/* Footer */}
      <div
        className="text-center text-gray-500 pt-1 space-y-1"
        style={{ fontSize: '0.5rem' }}
      >
        <p>MicrobiomeScreen™ is a registered trademark of BioTech Diagnostics, Inc.</p>
        <p>
          For questions, contact your healthcare provider or call (800) 555-1234 (Mon-Fri,
          9am-5pm EST).
        </p>
        <p className="mt-3">
          Laboratory Director: Jane Smith, MD, PhD • CLIA #: 99D9999999
        </p>
        <p>
          Testing conducted in CLIA-certified and CAP-accredited laboratories. Results are
          validated by qualified clinical professionals.
        </p>
        <p className="mt-2">© 2024 BioTech Diagnostics, Inc. All rights reserved.</p>
      </div>
    </div>
  );
};

export default MicrobiomeCRCReport;
