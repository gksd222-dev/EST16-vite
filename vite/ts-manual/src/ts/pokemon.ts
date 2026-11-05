// PokeAPI /api/v2/pokemon/3 응답을 바탕으로 추출한 타입입니다.
// 빈 배열(held_items, past_types)은 PokeAPI의 일반 구조를 참고해 보완했습니다.

export interface NamedAPIResource {
  name: string;
  url: string;
}

export interface Pokemon {
  id: number;
  name: string;
  base_experience: number;
  height: number;
  is_default: boolean;
  order: number;
  weight: number;
  abilities: PokemonAbility[];
  past_abilities: PokemonPastAbility[];
  forms: NamedAPIResource[];
  game_indices: PokemonGameIndex[];
  held_items: PokemonHeldItem[];
  location_area_encounters: string;
  moves: PokemonMove[];
  species: NamedAPIResource;
  sprites: PokemonSprites;
  cries: PokemonCries;
  stats: PokemonStat[];
  past_stats: PokemonPastStat[];
  types: PokemonType[];
  past_types: PokemonPastType[];
}

export interface PokemonAbility {
  is_hidden: boolean;
  slot: number;
  ability: NamedAPIResource;
}

export interface PokemonPastAbility {
  generation: NamedAPIResource;
  abilities: Array<{
    is_hidden: boolean;
    slot: number;
    ability: NamedAPIResource | null;
  }>;
}

export interface PokemonGameIndex {
  game_index: number;
  version: NamedAPIResource;
}

export interface PokemonHeldItem {
  item: NamedAPIResource;
  version_details: Array<{ rarity: number; version: NamedAPIResource }>;
}

export interface PokemonMove {
  move: NamedAPIResource;
  version_group_details: Array<{
    level_learned_at: number;
    version_group: NamedAPIResource;
    move_learn_method: NamedAPIResource;
    order: number | null;
  }>;
}

export interface PokemonCries {
  latest: string;
  legacy: string;
}

export interface PokemonStat {
  base_stat: number;
  effort: number;
  stat: NamedAPIResource;
}

export interface PokemonPastStat {
  generation: NamedAPIResource;
  stats: PokemonStat[];
}

export interface PokemonType {
  slot: number;
  type: NamedAPIResource;
}

export interface PokemonPastType {
  generation: NamedAPIResource;
  types: PokemonType[];
}

export type PokemonSprites = {
  other: {
    home: {
      front_shiny: string | null;
      front_female: string | null;
      front_default: string | null;
      front_shiny_female: string | null;
    };
    showdown: {
      back_shiny: string | null;
      back_female: string | null;
      front_shiny: string | null;
      back_default: string | null;
      front_female: string | null;
      front_default: string | null;
      back_shiny_female: string | null;
      front_shiny_female: string | null;
    };
    dream_world: {
      front_female: string | null;
      front_default: string | null;
    };
    "official-artwork": {
      versions: {
        "generation-i": {
          "red-and-blue": {
            front_default: string | null;
          };
          "red-and-green": {
            front_default: string | null;
          };
        };
        "generation-ii": {
          "gold-and-silver": {
            front_default: string | null;
          };
        };
      };
      front_shiny: string | null;
      front_default: string | null;
    };
  };
  versions: {
    "generation-i": {
      yellow: {
        back_gbc: string | null;
        back_gray: string | null;
        front_gbc: string | null;
        front_gray: string | null;
        back_default: string | null;
        front_default: string | null;
        back_transparent: string | null;
        front_transparent: string | null;
        back_transparent_gray: string | null;
        front_transparent_gray: string | null;
      };
      "red-blue": {
        back_gray: string | null;
        front_gray: string | null;
        back_default: string | null;
        front_default: string | null;
        back_transparent: string | null;
        front_transparent: string | null;
        back_transparent_gray: string | null;
        front_transparent_gray: string | null;
      };
      "red-green-japan": {
        back_gray: string | null;
        front_gray: string | null;
        back_default: string | null;
        front_default: string | null;
      };
    };
    "generation-v": {
      icons: {
        animated: {
          front_default: string | null;
        };
        front_default: string | null;
      };
      "black-white": {
        animated: {
          back_shiny: string | null;
          back_female: string | null;
          front_shiny: string | null;
          back_default: string | null;
          front_female: string | null;
          front_default: string | null;
          back_shiny_female: string | null;
          front_shiny_female: string | null;
        };
        back_shiny: string | null;
        back_female: string | null;
        front_shiny: string | null;
        back_default: string | null;
        front_female: string | null;
        front_default: string | null;
        back_shiny_female: string | null;
        front_shiny_female: string | null;
      };
    };
    "generation-ii": {
      gold: {
        back_shiny: string | null;
        front_shiny: string | null;
        back_default: string | null;
        front_default: string | null;
        back_transparent: string | null;
        front_transparent: string | null;
        back_shiny_transparent: string | null;
        front_shiny_transparent: string | null;
      };
      silver: {
        back_shiny: string | null;
        front_shiny: string | null;
        back_default: string | null;
        front_default: string | null;
        back_transparent: string | null;
        front_transparent: string | null;
        back_shiny_transparent: string | null;
        front_shiny_transparent: string | null;
      };
      crystal: {
        animated: {
          front_shiny: string | null;
          front_default: string | null;
        };
        back_shiny: string | null;
        front_shiny: string | null;
        back_default: string | null;
        front_default: string | null;
        back_transparent: string | null;
        front_transparent: string | null;
        back_shiny_transparent: string | null;
        front_shiny_transparent: string | null;
      };
    };
    "generation-iv": {
      icons: {
        front_default: string | null;
      };
      platinum: {
        animated: {
          front_shiny: string | null;
          front_female: string | null;
          front_default: string | null;
          front_shiny_female: string | null;
        };
        back_shiny: string | null;
        back_female: string | null;
        front_shiny: string | null;
        back_default: string | null;
        front_female: string | null;
        front_default: string | null;
        back_shiny_female: string | null;
        front_shiny_female: string | null;
      };
      "diamond-pearl": {
        animated: {
          front_shiny: string | null;
          front_female: string | null;
          front_default: string | null;
          front_shiny_female: string | null;
        };
        back_shiny: string | null;
        back_female: string | null;
        front_shiny: string | null;
        back_default: string | null;
        front_female: string | null;
        front_default: string | null;
        back_shiny_female: string | null;
        front_shiny_female: string | null;
      };
      "heartgold-soulsilver": {
        animated: {
          front_shiny: string | null;
          front_female: string | null;
          front_default: string | null;
          front_shiny_female: string | null;
        };
        back_shiny: string | null;
        back_female: string | null;
        front_shiny: string | null;
        back_default: string | null;
        front_female: string | null;
        front_default: string | null;
        back_shiny_female: string | null;
        front_shiny_female: string | null;
      };
    };
    "generation-ix": {
      champions: {
        icons: {
          front_shiny: string | null;
          front_default: string | null;
        };
        back_shiny: string | null;
        back_female: string | null;
        front_shiny: string | null;
        back_default: string | null;
        front_female: string | null;
        front_default: string | null;
        back_shiny_female: string | null;
        front_shiny_female: string | null;
      };
      "legends-za": {
        icons: {
          front_shiny: string | null;
          front_female: string | null;
          front_default: string | null;
          front_shiny_female: string | null;
        };
        back_shiny: string | null;
        back_female: string | null;
        front_shiny: string | null;
        back_default: string | null;
        front_female: string | null;
        front_default: string | null;
        back_shiny_female: string | null;
        front_shiny_female: string | null;
      };
      "scarlet-violet": {
        icons: {
          front_female: string | null;
          front_default: string | null;
        };
        back_shiny: string | null;
        back_female: string | null;
        front_shiny: string | null;
        back_default: string | null;
        front_female: string | null;
        front_default: string | null;
        back_shiny_female: string | null;
        front_shiny_female: string | null;
      };
    };
    "generation-vi": {
      "x-y": {
        back_shiny: string | null;
        back_female: string | null;
        front_shiny: string | null;
        back_default: string | null;
        front_female: string | null;
        front_default: string | null;
        back_shiny_female: string | null;
        front_shiny_female: string | null;
      };
      icons: {
        front_female: string | null;
        front_default: string | null;
      };
      "omega-ruby-alpha-sapphire": {
        back_shiny: string | null;
        back_female: string | null;
        front_shiny: string | null;
        back_default: string | null;
        front_female: string | null;
        front_default: string | null;
        back_shiny_female: string | null;
        front_shiny_female: string | null;
      };
    };
    "generation-iii": {
      icons: {
        front_default: string | null;
      };
      emerald: {
        animated: {
          back_shiny: string | null;
          front_shiny: string | null;
          back_default: string | null;
          front_default: string | null;
        };
        back_shiny: string | null;
        front_shiny: string | null;
        back_default: string | null;
        front_default: string | null;
      };
      "ruby-sapphire": {
        back_shiny: string | null;
        front_shiny: string | null;
        back_default: string | null;
        front_default: string | null;
      };
      "firered-leafgreen": {
        back_shiny: string | null;
        front_shiny: string | null;
        back_default: string | null;
        front_default: string | null;
      };
    };
    "generation-vii": {
      icons: {
        front_female: string | null;
        front_default: string | null;
      };
      "ultra-sun-ultra-moon": {
        back_shiny: string | null;
        back_female: string | null;
        front_shiny: string | null;
        back_default: string | null;
        front_female: string | null;
        front_default: string | null;
        back_shiny_female: string | null;
        front_shiny_female: string | null;
      };
      "lets-go-pikachu-lets-go-eevee": {
        icons: {
          front_default: string | null;
        };
        back_shiny: string | null;
        back_female: string | null;
        front_shiny: string | null;
        back_default: string | null;
        front_female: string | null;
        front_default: string | null;
        back_shiny_female: string | null;
        front_shiny_female: string | null;
      };
    };
    "generation-viii": {
      "sword-shield": {
        icons: {
          front_female: string | null;
          front_default: string | null;
        };
        back_shiny: string | null;
        back_female: string | null;
        front_shiny: string | null;
        back_default: string | null;
        front_female: string | null;
        front_default: string | null;
        back_shiny_female: string | null;
        front_shiny_female: string | null;
      };
      "legends-arceus": {
        icons: {
          front_shiny: string | null;
          front_female: string | null;
          front_default: string | null;
          front_shiny_female: string | null;
        };
        back_shiny: string | null;
        back_female: string | null;
        front_shiny: string | null;
        back_default: string | null;
        front_female: string | null;
        front_default: string | null;
        back_shiny_female: string | null;
        front_shiny_female: string | null;
      };
      "brilliant-diamond-shining-pearl": {
        icons: {
          front_default: string | null;
        };
        back_shiny: string | null;
        back_female: string | null;
        front_shiny: string | null;
        back_default: string | null;
        front_female: string | null;
        front_default: string | null;
        back_shiny_female: string | null;
        front_shiny_female: string | null;
      };
    };
  };
  back_shiny: string | null;
  back_female: string | null;
  front_shiny: string | null;
  back_default: string | null;
  front_female: string | null;
  front_default: string | null;
  back_shiny_female: string | null;
  front_shiny_female: string | null;
};