export type Location = {
  id: string;
  name: string;
  city: string;
  address: string;
  hours: string;
  phone: string;
  mapsUrl?: string;
  isMainBranch?: boolean;
};

export const locations: Location[] = [
  // DAVAO CITY
  {
    id: "davao-cabantian",
    name: "Cabantian Branch",
    city: "Davao City",
    address: "Cabantian Road, Buhangin, Davao City",
    hours: "9:00 AM – 7:00 PM",
    phone: "+63 946 287 0032",
    mapsUrl: "https://maps.google.com/?q=Cabantian+Road+Buhangin+Davao+City",
  },
  {
    id: "davao-manggahan",
    name: "Manggahan Branch",
    city: "Davao City",
    address: "Manggahan, Crossing Bayabas, Toril, Davao City",
    hours: "8:00 AM – 9:00 PM",
    phone: "+63 985 503 3385",
    mapsUrl: "https://maps.google.com/?q=Manggahan+Toril+Davao+City",
  },
  {
    id: "davao-gl-bakeshop",
    name: "GL Bakeshop by Lucia Dulce",
    city: "Davao City",
    address: "Beside Choice Mart, Davao-Bukidnon Rd, Talomo, Davao City",
    hours: "4:00 AM – 9:00 PM",
    phone: "+63 970 986 7993",
    mapsUrl: "https://g.co/kgs/kPu3D3K",
    isMainBranch: true,
  },

  // TAGUM
  {
    id: "tagum-bonifacio",
    name: "Bonifacio Branch",
    city: "Tagum",
    address: "Bonifacio St, Tagum City",
    hours: "7:00 AM – 9:00 PM",
    phone: "+63 970 888 8724",
    mapsUrl: "https://maps.google.com/?q=Bonifacio+St+Tagum+City",
    isMainBranch: true,
  },
  {
    id: "tagum-la-filipina",
    name: "La Filipina Branch",
    city: "Tagum",
    address: "Prk 2-A Brgy La Filipina, Tagum City",
    hours: "10:00 AM – 9:00 PM",
    phone: "+63 981 373 4675",
    mapsUrl: "https://maps.google.com/?q=La+Filipina+Tagum+City",
  },
  {
    id: "tagum-nccc-mall",
    name: "NCCC Mall Tagum",
    city: "Tagum",
    address: "1 Del Norte, Tagum City",
    hours: "9:00 AM – 8:00 PM",
    phone: "+63 912 957 7865",
    mapsUrl: "https://maps.google.com/?q=NCCC+Mall+Tagum",
  },

  // DIGOS
  {
    id: "digos-aplaya",
    name: "Aplaya Branch",
    city: "Digos",
    address: "1983 1st Crumb St, Digos City",
    hours: "7:00 AM – 9:00 PM",
    phone: "+63 963 079 1393",
    mapsUrl: "https://maps.google.com/?q=Aplaya+Digos+City",
    isMainBranch: true,
  },
  {
    id: "digos-sta-ana",
    name: "Sta. Ana Branch",
    city: "Digos",
    address: "Block 342 Lot 3, Sta. Ana Tres De Mayo, Digos City",
    hours: "4:00 AM – 9:00 PM",
    phone: "+63 951 041 6536",
    mapsUrl: "https://maps.google.com/?q=Sta+Ana+Tres+De+Mayo+Digos+City",
  },

  // DAVAO DEL SUR
  {
    id: "davao-del-sur-inawayan",
    name: "Inawayan Branch",
    city: "Davao Del Sur",
    address: "Purok Parrot, Inawayan, Santa Cruz, Davao Del Sur",
    hours: "5:00 AM – 9:00 PM",
    phone: "+63 963 093 1683",
    mapsUrl: "https://maps.google.com/?q=Inawayan+Santa+Cruz+Davao+Del+Sur",
  },
];

export const locationCities = [...new Set(locations.map((l) => l.city))];

export const getLocationsByCity = (city: string) =>
  locations.filter((l) => l.city === city);
