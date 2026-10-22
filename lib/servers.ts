export interface ServerData {
  id: string;
  name: string;
  tag: string;
  region: string;
  players: string;
  ping: number;
  description: string;
  iconBg: string;
  avatars: {
    initials: string;
    gradient: string;
  }[];
}

export const SERVERS_DATA: ServerData[] = [
  {
    id: "server-1",
    name: "Nusantara Prime",
    tag: "SOCIAL",
    region: "Jakarta (ID)",
    players: "18,420",
    ping: 24,
    description:
      "Server sentral ramah keluarga dengan area alun-alun interaktif, pasar barter aman, dan event komunitas mingguan berhadiah lencana.",
    iconBg: "from-pink-500 via-rose-500 to-pink-600",
    avatars: [
      { initials: "NR", gradient: "from-pink-500 to-purple-600" },
      { initials: "BA", gradient: "from-emerald-400 to-teal-600" },
      { initials: "RY", gradient: "from-amber-400 to-orange-500" },
      { initials: "KI", gradient: "from-cyan-400 to-blue-600" },
      { initials: "MA", gradient: "from-violet-500 to-fuchsia-600" },
    ],
  },
  {
    id: "server-2",
    name: "Singa Gateway",
    tag: "TRADE",
    region: "Singapore (SG)",
    players: "14,350",
    ping: 18,
    description:
      "Hub pertukaran item dan perdagangan tersibuk di Asia Tenggara dengan latensi terendah, proteksi penipuan, dan zona lelang terbuka.",
    iconBg: "from-emerald-500 via-teal-500 to-cyan-600",
    avatars: [
      { initials: "SG", gradient: "from-emerald-500 to-green-600" },
      { initials: "TX", gradient: "from-blue-500 to-indigo-600" },
      { initials: "VL", gradient: "from-fuchsia-500 to-pink-600" },
      { initials: "JO", gradient: "from-amber-400 to-yellow-600" },
      { initials: "CY", gradient: "from-cyan-400 to-teal-600" },
    ],
  },
  {
    id: "server-3",
    name: "Borneo Nexus",
    tag: "CASUAL",
    region: "Balikpapan (ID)",
    players: "8,920",
    ping: 32,
    description:
      "Tempat santai untuk berkumpul bersama teman, menjelajahi hutan pulau virtual yang asri, serta membangun rumah impian tanpa tekanan.",
    iconBg: "from-amber-500 via-orange-500 to-rose-500",
    avatars: [
      { initials: "BN", gradient: "from-orange-400 to-red-500" },
      { initials: "AR", gradient: "from-teal-400 to-emerald-600" },
      { initials: "DS", gradient: "from-purple-400 to-indigo-600" },
      { initials: "LE", gradient: "from-pink-400 to-rose-600" },
      { initials: "ZK", gradient: "from-sky-400 to-blue-600" },
    ],
  },
  {
    id: "server-4",
    name: "Siam Sanctuary",
    tag: "ROLEPLAY",
    region: "Bangkok (TH)",
    players: "7,410",
    ping: 48,
    description:
      "Dunia bermain peran imersif dengan tema kuil dan kota terapung, pekerjaan kota adat, serta komunitas pencerita yang ramah pendatang baru.",
    iconBg: "from-purple-500 via-indigo-500 to-violet-600",
    avatars: [
      { initials: "SS", gradient: "from-purple-500 to-pink-500" },
      { initials: "TH", gradient: "from-cyan-400 to-blue-500" },
      { initials: "PK", gradient: "from-emerald-400 to-teal-600" },
      { initials: "NM", gradient: "from-amber-400 to-orange-500" },
      { initials: "FA", gradient: "from-rose-400 to-red-600" },
    ],
  },
  {
    id: "server-5",
    name: "Manila Haven",
    tag: "SURVIVAL",
    region: "Manila (PH)",
    players: "5,840",
    ping: 68,
    description:
      "Tantangan eksplorasi pulau kepulauan dengan siklus cuaca tropis dinamis, pencarian harta karun maritim, dan kompetisi klan sehat.",
    iconBg: "from-cyan-500 via-blue-500 to-indigo-600",
    avatars: [
      { initials: "MH", gradient: "from-cyan-500 to-sky-600" },
      { initials: "CR", gradient: "from-rose-500 to-pink-600" },
      { initials: "AN", gradient: "from-amber-400 to-orange-600" },
      { initials: "GB", gradient: "from-emerald-400 to-teal-500" },
      { initials: "LU", gradient: "from-purple-400 to-indigo-500" },
    ],
  },
  {
    id: "server-6",
    name: "Malacca Straits",
    tag: "EXPLORATION",
    region: "Kuala Lumpur (MY)",
    players: "4,620",
    ping: 94,
    description:
      "Rute petualangan pesisir dengan armada kapal layar bersama, eksplorasi kepulauan rempah fantasi, dan ekspedisi bawah laut mistis.",
    iconBg: "from-rose-500 via-pink-600 to-purple-600",
    avatars: [
      { initials: "MS", gradient: "from-rose-500 to-red-600" },
      { initials: "KL", gradient: "from-blue-500 to-cyan-500" },
      { initials: "MY", gradient: "from-amber-400 to-yellow-600" },
      { initials: "ZA", gradient: "from-emerald-400 to-green-600" },
      { initials: "HA", gradient: "from-indigo-400 to-violet-600" },
    ],
  },
];

