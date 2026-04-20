import type { SystemId } from "./systems";

export interface AnatomicalStructure {
  id: string;
  meshName: string;
  system: SystemId;
  name: { fr: string; en: string };
  description: { fr: string; en: string };
  function: { fr: string; en: string };
  position: [number, number, number];
  scale: [number, number, number];
  shape: "sphere" | "ellipsoid" | "cylinder" | "box" | "capsule" | "cone";
}

export const STRUCTURES: AnatomicalStructure[] = [
  {
    id: "brain",
    meshName: "cerebrum",
    system: "nervous",
    name: { fr: "Cerveau", en: "Brain" },
    description: {
      fr: "Organe principal du système nerveux central, logé dans la boîte crânienne.",
      en: "The primary organ of the central nervous system, housed within the skull.",
    },
    function: {
      fr: "Contrôle la pensée, la mémoire, les émotions, les mouvements volontaires et l'interprétation des sens.",
      en: "Controls thought, memory, emotion, voluntary movement, and interpretation of the senses.",
    },
    position: [0, 2.8, 0],
    scale: [0.65, 0.55, 0.7],
    shape: "ellipsoid",
  },
  {
    id: "spinal-cord",
    meshName: "medullaSpinalis",
    system: "nervous",
    name: { fr: "Moelle épinière", en: "Spinal cord" },
    description: {
      fr: "Prolongement du tronc cérébral qui descend à l'intérieur de la colonne vertébrale.",
      en: "Extension of the brainstem running down inside the vertebral column.",
    },
    function: {
      fr: "Transmet les signaux nerveux entre le cerveau et le reste du corps, et coordonne les réflexes.",
      en: "Transmits nerve signals between the brain and the body, and coordinates reflexes.",
    },
    position: [0, 1.2, -0.15],
    scale: [0.1, 2.2, 0.1],
    shape: "capsule",
  },
  {
    id: "skull",
    meshName: "cranium",
    system: "skeletal",
    name: { fr: "Crâne", en: "Skull" },
    description: {
      fr: "Structure osseuse qui protège le cerveau et forme le visage.",
      en: "Bony structure that protects the brain and forms the face.",
    },
    function: {
      fr: "Protège le cerveau et les organes des sens ; soutient les structures faciales.",
      en: "Protects the brain and sensory organs; supports facial structures.",
    },
    position: [0, 2.8, 0],
    scale: [0.75, 0.9, 0.8],
    shape: "ellipsoid",
  },
  {
    id: "mandible",
    meshName: "mandibula",
    system: "skeletal",
    name: { fr: "Mandibule", en: "Mandible" },
    description: {
      fr: "Mâchoire inférieure, seul os mobile du crâne.",
      en: "Lower jawbone, the only movable bone of the skull.",
    },
    function: {
      fr: "Permet la mastication, la parole et porte les dents inférieures.",
      en: "Enables chewing, speech, and holds the lower teeth.",
    },
    position: [0, 2.35, 0.25],
    scale: [0.45, 0.15, 0.4],
    shape: "ellipsoid",
  },
  {
    id: "ribcage",
    meshName: "thoraxOsseus",
    system: "skeletal",
    name: { fr: "Cage thoracique", en: "Rib cage" },
    description: {
      fr: "Ensemble de 12 paires de côtes, du sternum et des vertèbres thoraciques.",
      en: "A set of 12 pairs of ribs, the sternum, and the thoracic vertebrae.",
    },
    function: {
      fr: "Protège les poumons et le cœur, soutient la respiration.",
      en: "Protects the lungs and heart, supports breathing.",
    },
    position: [0, 1.35, 0.05],
    scale: [0.95, 1.0, 0.65],
    shape: "ellipsoid",
  },
  {
    id: "spine",
    meshName: "columnaVertebralis",
    system: "skeletal",
    name: { fr: "Colonne vertébrale", en: "Vertebral column" },
    description: {
      fr: "Empilement de 33 vertèbres qui constitue l'axe du squelette.",
      en: "A stack of 33 vertebrae forming the axial skeleton.",
    },
    function: {
      fr: "Soutient le tronc, protège la moelle épinière, permet le mouvement.",
      en: "Supports the trunk, protects the spinal cord, enables movement.",
    },
    position: [0, 1.2, -0.2],
    scale: [0.14, 2.2, 0.14],
    shape: "capsule",
  },
  {
    id: "pelvis",
    meshName: "pelvis",
    system: "skeletal",
    name: { fr: "Bassin", en: "Pelvis" },
    description: {
      fr: "Ceinture osseuse formée des deux os iliaques, du sacrum et du coccyx.",
      en: "Bony girdle formed by the two hip bones, the sacrum, and the coccyx.",
    },
    function: {
      fr: "Supporte le poids du tronc, protège les organes pelviens.",
      en: "Supports the weight of the trunk and protects pelvic organs.",
    },
    position: [0, 0.0, 0],
    scale: [0.8, 0.35, 0.55],
    shape: "ellipsoid",
  },
  {
    id: "femur-left",
    meshName: "femurSinister",
    system: "skeletal",
    name: { fr: "Fémur gauche", en: "Left femur" },
    description: {
      fr: "Os le plus long et le plus solide du corps humain.",
      en: "The longest and strongest bone in the human body.",
    },
    function: {
      fr: "Supporte le poids lors de la station debout et de la marche.",
      en: "Bears weight during standing and walking.",
    },
    position: [-0.25, -0.8, 0],
    scale: [0.13, 1.1, 0.13],
    shape: "capsule",
  },
  {
    id: "femur-right",
    meshName: "femurDexter",
    system: "skeletal",
    name: { fr: "Fémur droit", en: "Right femur" },
    description: {
      fr: "Os le plus long et le plus solide du corps humain.",
      en: "The longest and strongest bone in the human body.",
    },
    function: {
      fr: "Supporte le poids lors de la station debout et de la marche.",
      en: "Bears weight during standing and walking.",
    },
    position: [0.25, -0.8, 0],
    scale: [0.13, 1.1, 0.13],
    shape: "capsule",
  },
  {
    id: "humerus-left",
    meshName: "humerusSinister",
    system: "skeletal",
    name: { fr: "Humérus gauche", en: "Left humerus" },
    description: {
      fr: "Os long du bras qui s'articule avec l'omoplate et le coude.",
      en: "Long bone of the upper arm, articulating with the scapula and elbow.",
    },
    function: { fr: "Permet les mouvements du bras.", en: "Enables arm movement." },
    position: [-0.75, 1.55, 0],
    scale: [0.1, 0.8, 0.1],
    shape: "capsule",
  },
  {
    id: "humerus-right",
    meshName: "humerusDexter",
    system: "skeletal",
    name: { fr: "Humérus droit", en: "Right humerus" },
    description: {
      fr: "Os long du bras qui s'articule avec l'omoplate et le coude.",
      en: "Long bone of the upper arm, articulating with the scapula and elbow.",
    },
    function: { fr: "Permet les mouvements du bras.", en: "Enables arm movement." },
    position: [0.75, 1.55, 0],
    scale: [0.1, 0.8, 0.1],
    shape: "capsule",
  },
  {
    id: "heart",
    meshName: "cor",
    system: "circulatory",
    name: { fr: "Cœur", en: "Heart" },
    description: {
      fr: "Organe musculaire creux situé entre les deux poumons, dans le médiastin.",
      en: "A hollow muscular organ located between the lungs, in the mediastinum.",
    },
    function: {
      fr: "Pompe le sang dans tout l'organisme pour oxygéner les tissus et éliminer les déchets.",
      en: "Pumps blood throughout the body to oxygenate tissues and remove waste.",
    },
    position: [-0.1, 1.55, 0.15],
    scale: [0.28, 0.32, 0.25],
    shape: "ellipsoid",
  },
  {
    id: "aorta",
    meshName: "aorta",
    system: "circulatory",
    name: { fr: "Aorte", en: "Aorta" },
    description: {
      fr: "Plus grosse artère du corps, naissant du ventricule gauche du cœur.",
      en: "The largest artery in the body, originating from the left ventricle of the heart.",
    },
    function: {
      fr: "Distribue le sang oxygéné du cœur vers tous les organes.",
      en: "Distributes oxygenated blood from the heart to all organs.",
    },
    position: [0, 1.3, 0.05],
    scale: [0.07, 1.3, 0.07],
    shape: "capsule",
  },
  {
    id: "lung-left",
    meshName: "pulmoSinister",
    system: "respiratory",
    name: { fr: "Poumon gauche", en: "Left lung" },
    description: {
      fr: "Plus petit que le droit pour laisser place au cœur ; composé de deux lobes.",
      en: "Smaller than the right to make space for the heart; composed of two lobes.",
    },
    function: {
      fr: "Assure les échanges gazeux entre l'air inspiré et le sang.",
      en: "Handles gas exchange between inhaled air and the blood.",
    },
    position: [-0.38, 1.55, 0.05],
    scale: [0.32, 0.55, 0.3],
    shape: "ellipsoid",
  },
  {
    id: "lung-right",
    meshName: "pulmoDexter",
    system: "respiratory",
    name: { fr: "Poumon droit", en: "Right lung" },
    description: {
      fr: "Plus volumineux que le gauche ; composé de trois lobes.",
      en: "Larger than the left; composed of three lobes.",
    },
    function: {
      fr: "Assure les échanges gazeux entre l'air inspiré et le sang.",
      en: "Handles gas exchange between inhaled air and the blood.",
    },
    position: [0.38, 1.55, 0.05],
    scale: [0.34, 0.6, 0.3],
    shape: "ellipsoid",
  },
  {
    id: "trachea",
    meshName: "trachea",
    system: "respiratory",
    name: { fr: "Trachée", en: "Trachea" },
    description: {
      fr: "Conduit aérien reliant le larynx aux bronches.",
      en: "Airway connecting the larynx to the bronchi.",
    },
    function: {
      fr: "Achemine l'air vers les poumons et inversement.",
      en: "Channels air to and from the lungs.",
    },
    position: [0, 2.1, 0.1],
    scale: [0.08, 0.45, 0.08],
    shape: "capsule",
  },
  {
    id: "diaphragm",
    meshName: "diaphragma",
    system: "respiratory",
    name: { fr: "Diaphragme", en: "Diaphragm" },
    description: {
      fr: "Muscle en forme de dôme qui sépare le thorax de l'abdomen.",
      en: "Dome-shaped muscle separating the thorax from the abdomen.",
    },
    function: {
      fr: "Principal muscle de la respiration ; sa contraction provoque l'inspiration.",
      en: "Primary muscle of respiration; its contraction produces inhalation.",
    },
    position: [0, 1.05, 0],
    scale: [0.85, 0.12, 0.55],
    shape: "ellipsoid",
  },
  {
    id: "liver",
    meshName: "hepar",
    system: "digestive",
    name: { fr: "Foie", en: "Liver" },
    description: {
      fr: "Plus grande glande de l'organisme, située sous le diaphragme à droite.",
      en: "The largest gland in the body, located under the diaphragm on the right.",
    },
    function: {
      fr: "Métabolisme, détoxification, production de la bile, stockage du glycogène.",
      en: "Metabolism, detoxification, bile production, glycogen storage.",
    },
    position: [0.2, 0.85, 0.12],
    scale: [0.55, 0.22, 0.45],
    shape: "ellipsoid",
  },
  {
    id: "stomach",
    meshName: "gaster",
    system: "digestive",
    name: { fr: "Estomac", en: "Stomach" },
    description: {
      fr: "Organe creux en forme de J situé entre l'œsophage et le duodénum.",
      en: "Hollow J-shaped organ between the esophagus and the duodenum.",
    },
    function: {
      fr: "Stocke les aliments, les brasse et initie la digestion par des sucs gastriques.",
      en: "Stores food, mixes it, and initiates digestion with gastric juices.",
    },
    position: [-0.2, 0.8, 0.12],
    scale: [0.3, 0.3, 0.25],
    shape: "ellipsoid",
  },
  {
    id: "small-intestine",
    meshName: "intestinumTenue",
    system: "digestive",
    name: { fr: "Intestin grêle", en: "Small intestine" },
    description: {
      fr: "Tube d'environ 6 mètres comprenant le duodénum, le jéjunum et l'iléon.",
      en: "Roughly 6-meter tube comprising the duodenum, jejunum, and ileum.",
    },
    function: {
      fr: "Site principal de la digestion et de l'absorption des nutriments.",
      en: "Main site of digestion and nutrient absorption.",
    },
    position: [0, 0.4, 0.1],
    scale: [0.5, 0.4, 0.4],
    shape: "ellipsoid",
  },
  {
    id: "large-intestine",
    meshName: "intestinumCrassum",
    system: "digestive",
    name: { fr: "Gros intestin", en: "Large intestine" },
    description: {
      fr: "Dernière partie du tube digestif, incluant le côlon et le rectum.",
      en: "Final part of the digestive tract, including the colon and rectum.",
    },
    function: {
      fr: "Absorbe l'eau et les électrolytes, forme et élimine les fèces.",
      en: "Absorbs water and electrolytes, forms and eliminates feces.",
    },
    position: [0, 0.5, 0.05],
    scale: [0.65, 0.5, 0.45],
    shape: "ellipsoid",
  },
  {
    id: "pancreas",
    meshName: "pancreas",
    system: "digestive",
    name: { fr: "Pancréas", en: "Pancreas" },
    description: {
      fr: "Glande mixte située derrière l'estomac.",
      en: "Mixed gland located behind the stomach.",
    },
    function: {
      fr: "Sécrète des enzymes digestives et des hormones (insuline, glucagon).",
      en: "Secretes digestive enzymes and hormones (insulin, glucagon).",
    },
    position: [-0.05, 0.75, 0],
    scale: [0.35, 0.08, 0.15],
    shape: "ellipsoid",
  },
  {
    id: "kidney-left",
    meshName: "renSinister",
    system: "urinary",
    name: { fr: "Rein gauche", en: "Left kidney" },
    description: {
      fr: "Organe en forme de haricot situé dans la région lombaire.",
      en: "Bean-shaped organ located in the lumbar region.",
    },
    function: {
      fr: "Filtre le sang, produit l'urine, régule la pression artérielle et l'équilibre hydrique.",
      en: "Filters blood, produces urine, regulates blood pressure and fluid balance.",
    },
    position: [-0.3, 0.7, -0.15],
    scale: [0.15, 0.25, 0.15],
    shape: "ellipsoid",
  },
  {
    id: "kidney-right",
    meshName: "renDexter",
    system: "urinary",
    name: { fr: "Rein droit", en: "Right kidney" },
    description: {
      fr: "Organe en forme de haricot situé légèrement plus bas que le gauche.",
      en: "Bean-shaped organ located slightly lower than the left.",
    },
    function: {
      fr: "Filtre le sang, produit l'urine, régule la pression artérielle et l'équilibre hydrique.",
      en: "Filters blood, produces urine, regulates blood pressure and fluid balance.",
    },
    position: [0.3, 0.65, -0.15],
    scale: [0.15, 0.25, 0.15],
    shape: "ellipsoid",
  },
  {
    id: "bladder",
    meshName: "vesicaUrinaria",
    system: "urinary",
    name: { fr: "Vessie", en: "Urinary bladder" },
    description: {
      fr: "Organe musculaire creux du petit bassin.",
      en: "Hollow muscular organ of the lesser pelvis.",
    },
    function: {
      fr: "Stocke l'urine avant son évacuation par l'urètre.",
      en: "Stores urine before it is expelled through the urethra.",
    },
    position: [0, 0.1, 0.1],
    scale: [0.22, 0.18, 0.2],
    shape: "ellipsoid",
  },
  {
    id: "thyroid",
    meshName: "glandulaThyroidea",
    system: "endocrine",
    name: { fr: "Thyroïde", en: "Thyroid gland" },
    description: {
      fr: "Glande en forme de papillon située à la base du cou.",
      en: "Butterfly-shaped gland at the base of the neck.",
    },
    function: {
      fr: "Produit les hormones thyroïdiennes qui régulent le métabolisme.",
      en: "Produces thyroid hormones that regulate metabolism.",
    },
    position: [0, 2.15, 0.2],
    scale: [0.15, 0.06, 0.08],
    shape: "ellipsoid",
  },
  {
    id: "adrenal-left",
    meshName: "glandulaSuprarenalisSinistra",
    system: "endocrine",
    name: { fr: "Surrénale gauche", en: "Left adrenal gland" },
    description: {
      fr: "Petite glande triangulaire située au pôle supérieur du rein.",
      en: "Small triangular gland sitting atop the kidney.",
    },
    function: {
      fr: "Sécrète l'adrénaline, le cortisol et l'aldostérone.",
      en: "Secretes adrenaline, cortisol, and aldosterone.",
    },
    position: [-0.3, 0.92, -0.15],
    scale: [0.09, 0.08, 0.09],
    shape: "ellipsoid",
  },
  {
    id: "adrenal-right",
    meshName: "glandulaSuprarenalisDextra",
    system: "endocrine",
    name: { fr: "Surrénale droite", en: "Right adrenal gland" },
    description: {
      fr: "Petite glande triangulaire située au pôle supérieur du rein.",
      en: "Small triangular gland sitting atop the kidney.",
    },
    function: {
      fr: "Sécrète l'adrénaline, le cortisol et l'aldostérone.",
      en: "Secretes adrenaline, cortisol, and aldosterone.",
    },
    position: [0.3, 0.87, -0.15],
    scale: [0.09, 0.08, 0.09],
    shape: "ellipsoid",
  },
  {
    id: "spleen",
    meshName: "lien",
    system: "lymphatic",
    name: { fr: "Rate", en: "Spleen" },
    description: {
      fr: "Organe lymphoïde situé dans l'hypocondre gauche.",
      en: "Lymphoid organ in the left hypochondrium.",
    },
    function: {
      fr: "Filtre le sang, recycle les globules rouges, soutient l'immunité.",
      en: "Filters blood, recycles red blood cells, supports immunity.",
    },
    position: [-0.4, 0.95, -0.05],
    scale: [0.14, 0.2, 0.14],
    shape: "ellipsoid",
  },
  {
    id: "thymus",
    meshName: "thymus",
    system: "lymphatic",
    name: { fr: "Thymus", en: "Thymus" },
    description: {
      fr: "Organe lymphoïde situé derrière le sternum, plus développé chez l'enfant.",
      en: "Lymphoid organ behind the sternum, larger in children.",
    },
    function: {
      fr: "Maturation des lymphocytes T, acteurs clefs de l'immunité adaptative.",
      en: "Matures T lymphocytes, key players of adaptive immunity.",
    },
    position: [0, 1.85, 0.22],
    scale: [0.16, 0.15, 0.08],
    shape: "ellipsoid",
  },
  {
    id: "pectoralis-left",
    meshName: "pectoralisMajorSinister",
    system: "muscular",
    name: { fr: "Grand pectoral gauche", en: "Left pectoralis major" },
    description: {
      fr: "Muscle large et épais de la partie antérieure du thorax.",
      en: "Large, thick muscle of the anterior chest.",
    },
    function: {
      fr: "Adduction, rotation interne et flexion du bras.",
      en: "Adducts, medially rotates, and flexes the arm.",
    },
    position: [-0.3, 1.75, 0.32],
    scale: [0.35, 0.3, 0.08],
    shape: "box",
  },
  {
    id: "pectoralis-right",
    meshName: "pectoralisMajorDexter",
    system: "muscular",
    name: { fr: "Grand pectoral droit", en: "Right pectoralis major" },
    description: {
      fr: "Muscle large et épais de la partie antérieure du thorax.",
      en: "Large, thick muscle of the anterior chest.",
    },
    function: {
      fr: "Adduction, rotation interne et flexion du bras.",
      en: "Adducts, medially rotates, and flexes the arm.",
    },
    position: [0.3, 1.75, 0.32],
    scale: [0.35, 0.3, 0.08],
    shape: "box",
  },
  {
    id: "rectus-abdominis",
    meshName: "rectusAbdominis",
    system: "muscular",
    name: { fr: "Droit de l'abdomen", en: "Rectus abdominis" },
    description: {
      fr: "Muscle long et plat de la paroi abdominale antérieure.",
      en: "Long, flat muscle of the anterior abdominal wall.",
    },
    function: {
      fr: "Flexion du tronc, stabilisation du bassin.",
      en: "Flexes the trunk, stabilizes the pelvis.",
    },
    position: [0, 0.75, 0.32],
    scale: [0.3, 0.9, 0.08],
    shape: "box",
  },
  {
    id: "biceps-left",
    meshName: "bicepsBrachiiSinister",
    system: "muscular",
    name: { fr: "Biceps brachial gauche", en: "Left biceps brachii" },
    description: {
      fr: "Muscle à deux chefs de la face antérieure du bras.",
      en: "Two-headed muscle on the anterior upper arm.",
    },
    function: {
      fr: "Flexion du coude et supination de l'avant-bras.",
      en: "Flexes the elbow and supinates the forearm.",
    },
    position: [-0.75, 1.55, 0.11],
    scale: [0.09, 0.45, 0.09],
    shape: "capsule",
  },
  {
    id: "biceps-right",
    meshName: "bicepsBrachiiDexter",
    system: "muscular",
    name: { fr: "Biceps brachial droit", en: "Right biceps brachii" },
    description: {
      fr: "Muscle à deux chefs de la face antérieure du bras.",
      en: "Two-headed muscle on the anterior upper arm.",
    },
    function: {
      fr: "Flexion du coude et supination de l'avant-bras.",
      en: "Flexes the elbow and supinates the forearm.",
    },
    position: [0.75, 1.55, 0.11],
    scale: [0.09, 0.45, 0.09],
    shape: "capsule",
  },
  {
    id: "quadriceps-left",
    meshName: "quadricepsFemorisSinister",
    system: "muscular",
    name: { fr: "Quadriceps gauche", en: "Left quadriceps" },
    description: {
      fr: "Groupe musculaire à quatre chefs de la face antérieure de la cuisse.",
      en: "Four-headed muscle group on the front of the thigh.",
    },
    function: {
      fr: "Extension du genou et flexion de la hanche.",
      en: "Extends the knee and flexes the hip.",
    },
    position: [-0.25, -0.8, 0.15],
    scale: [0.15, 1.0, 0.13],
    shape: "capsule",
  },
  {
    id: "quadriceps-right",
    meshName: "quadricepsFemorisDexter",
    system: "muscular",
    name: { fr: "Quadriceps droit", en: "Right quadriceps" },
    description: {
      fr: "Groupe musculaire à quatre chefs de la face antérieure de la cuisse.",
      en: "Four-headed muscle group on the front of the thigh.",
    },
    function: {
      fr: "Extension du genou et flexion de la hanche.",
      en: "Extends the knee and flexes the hip.",
    },
    position: [0.25, -0.8, 0.15],
    scale: [0.15, 1.0, 0.13],
    shape: "capsule",
  },
  {
    id: "skin",
    meshName: "cutis",
    system: "integumentary",
    name: { fr: "Peau", en: "Skin" },
    description: {
      fr: "Enveloppe cutanée externe composée de l'épiderme, du derme et de l'hypoderme.",
      en: "Outer covering composed of the epidermis, dermis, and hypodermis.",
    },
    function: {
      fr: "Protection, thermorégulation, sensation tactile, synthèse de vitamine D.",
      en: "Protection, thermoregulation, tactile sensation, vitamin D synthesis.",
    },
    position: [0, 1.0, 0],
    scale: [1.0, 3.2, 0.55],
    shape: "capsule",
  },
];

export const STRUCTURES_BY_MESH: Record<string, AnatomicalStructure> =
  Object.fromEntries(STRUCTURES.map((s) => [s.meshName, s]));

export const STRUCTURES_BY_ID: Record<string, AnatomicalStructure> =
  Object.fromEntries(STRUCTURES.map((s) => [s.id, s]));
