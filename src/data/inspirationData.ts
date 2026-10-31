// Reference photography from Wikimedia Commons (CC BY 2.0 / CC0). Not SD Classic projects.
export interface InspirationImage {
  n: number;
  caption: string;
  w: number;
  h: number;
  tw: number;
  th: number;
  artist: string;
  license: string;
  licenseUrl: string;
  source: string;
}

export const INSPIRATION: Record<string, InspirationImage[]> = {
  turnkey: [
    { n: 1, caption: 'Living Room', w: 1600, h: 1068, tw: 640, th: 427, artist: 'Shixart1985', license: 'CC BY 2.0', licenseUrl: 'https://creativecommons.org/licenses/by/2.0/', source: 'https://commons.wikimedia.org/wiki/File:Modern_living_room_with_stylish_furniture_and_a_view_of_the_outdoors_in_a_cozy_apartment_setting.jpg' },
    { n: 2, caption: 'Open Living & Kitchen', w: 1600, h: 1068, tw: 640, th: 427, artist: 'Shixart1985', license: 'CC BY 2.0', licenseUrl: 'https://creativecommons.org/licenses/by/2.0/', source: 'https://commons.wikimedia.org/wiki/File:A_stylish_living_area_features_a_modern_kitchen,_comfortable_seating,_and_large_windows_allowing_ample_natural_ligh.jpg' },
    { n: 3, caption: 'Dining Area', w: 1600, h: 1068, tw: 640, th: 427, artist: 'Shixart1985', license: 'CC BY 2.0', licenseUrl: 'https://creativecommons.org/licenses/by/2.0/', source: 'https://commons.wikimedia.org/wiki/File:Modern_dining_area_with_stylish_table_and_chairs_in_cozy_interior_design.jpg' },
    { n: 4, caption: 'Kitchen & Dining', w: 1600, h: 1068, tw: 640, th: 427, artist: 'Shixart1985', license: 'CC BY 2.0', licenseUrl: 'https://creativecommons.org/licenses/by/2.0/', source: 'https://commons.wikimedia.org/wiki/File:Modern_kitchen_and_dining_area_in_a_simple_home_setting_showing_light_colors_and_minimal_decor.jpg' },
    { n: 5, caption: 'Kitchen & Dining', w: 1600, h: 1068, tw: 640, th: 427, artist: 'Shixart1985', license: 'CC BY 2.0', licenseUrl: 'https://creativecommons.org/licenses/by/2.0/', source: 'https://commons.wikimedia.org/wiki/File:Modern_kitchen_and_dining_area_with_stylish_furnishings_and_natural_light_in_a_contemporary_home_setting.jpg' },
    { n: 6, caption: 'Living & Kitchen', w: 1600, h: 1068, tw: 640, th: 427, artist: 'Shixart1985', license: 'CC BY 2.0', licenseUrl: 'https://creativecommons.org/licenses/by/2.0/', source: 'https://commons.wikimedia.org/wiki/File:Modern_luxury_living_room_with_kitchen_interior.jpg' },
    { n: 7, caption: 'Kitchen', w: 1600, h: 1063, tw: 640, th: 425, artist: 'Jeremy Levine from Los Angeles, United States', license: 'CC BY 2.0', licenseUrl: 'https://creativecommons.org/licenses/by/2.0/', source: 'https://commons.wikimedia.org/wiki/File:Sustainable_Kitchen_-_Flickr_-_Jeremy_Levine_Design.jpg' },
    { n: 8, caption: 'Bedroom', w: 1600, h: 1068, tw: 640, th: 427, artist: 'Shixart1985', license: 'CC BY 2.0', licenseUrl: 'https://creativecommons.org/licenses/by/2.0/', source: 'https://commons.wikimedia.org/wiki/File:Modern_bedroom_design_in_a_stylish_hotel_room_featuring_geometric_patterns_and_soft_linens.jpg' },
  ],
  commercial: [
    { n: 1, caption: 'Open Office', w: 1600, h: 1067, tw: 640, th: 427, artist: 'Hassocks5489', license: 'CC0', licenseUrl: 'https://creativecommons.org/publicdomain/zero/1.0/', source: 'https://commons.wikimedia.org/wiki/File:Former_Spencer_Street_United_Reformed_Church,_Spencer_Street,_Leamington_Spa_(NHLE_Code_1381538)_(April_2026)_(Interior)_(13).jpg' },
    { n: 2, caption: 'Workstations', w: 1600, h: 1067, tw: 640, th: 427, artist: 'Hassocks5489', license: 'CC0', licenseUrl: 'https://creativecommons.org/publicdomain/zero/1.0/', source: 'https://commons.wikimedia.org/wiki/File:Former_Spencer_Street_United_Reformed_Church,_Spencer_Street,_Leamington_Spa_(NHLE_Code_1381538)_(April_2026)_(Interior)_(19).jpg' },
    { n: 3, caption: 'Lounge & Meeting Area', w: 1600, h: 1067, tw: 640, th: 427, artist: 'Hassocks5489', license: 'CC0', licenseUrl: 'https://creativecommons.org/publicdomain/zero/1.0/', source: 'https://commons.wikimedia.org/wiki/File:Former_Spencer_Street_United_Reformed_Church,_Spencer_Street,_Leamington_Spa_(NHLE_Code_1381538)_(April_2026)_(Interior)_(23).jpg' },
    { n: 4, caption: 'Workspace', w: 1600, h: 1067, tw: 640, th: 427, artist: 'Hassocks5489', license: 'CC0', licenseUrl: 'https://creativecommons.org/publicdomain/zero/1.0/', source: 'https://commons.wikimedia.org/wiki/File:Former_Spencer_Street_United_Reformed_Church,_Spencer_Street,_Leamington_Spa_(NHLE_Code_1381538)_(April_2026)_(Interior)_(3).jpg' },
    { n: 5, caption: 'Central Staircase', w: 1600, h: 991, tw: 640, th: 396, artist: 'Hassocks5489', license: 'CC0', licenseUrl: 'https://creativecommons.org/publicdomain/zero/1.0/', source: 'https://commons.wikimedia.org/wiki/File:Former_Spencer_Street_United_Reformed_Church,_Spencer_Street,_Leamington_Spa_(NHLE_Code_1381538)_(April_2026)_(Interior)_(31).jpg' },
    { n: 6, caption: 'Mezzanine Workspace', w: 1600, h: 1067, tw: 640, th: 427, artist: 'Hassocks5489', license: 'CC0', licenseUrl: 'https://creativecommons.org/publicdomain/zero/1.0/', source: 'https://commons.wikimedia.org/wiki/File:Former_Spencer_Street_United_Reformed_Church,_Spencer_Street,_Leamington_Spa_(NHLE_Code_1381538)_(April_2026)_(Interior)_(5).jpg' },
  ],
};
