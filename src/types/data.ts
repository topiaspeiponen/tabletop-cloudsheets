export enum GameSystems {
    DND5E = 'Dungeons & Dragons 5th edition',
    PF2E = 'Pathfinder 2nd edition'
}

export interface CharacterSheet {
    id: string;
    character: CharacterDND5E | CharacterPF2E
}

export interface CharacterDND5E {
    gameSystem: GameSystems.DND5E,
    playerName?: string;
    characterName?: string;
    race?: string;
    classLevel?: number;
    background?: string;
    alignment?: string;
    experience?: number;
    currentHP?: number;
    maxHP?: number;
    tempHP?: number;
    ac?: number;
    initiative?: number;
    speed?: string;
    strength?: number;
    strengthMod?: number;
    strengthST?: number;
    constitution?: number;
    constitutionMod?: number;
    constitutionST?: number;
    dexterity?: number;
    dexterityMod?: number;
    dexterityST?: number;
    intelligence?: number;
    intelligenceMod?: number;
    intelligenceST?: number;
    wisdom?: number;
    wisdomMod?: number;
    wisdomST?: number;
    charisma?: number;
    charismaMod?: number;
    charismaST?: number;
    acrobatics?: number;
    animalHandling?: number;
    arcana?: number;
    athletics?: number;
    deception?: number;
    history?: number;
    insight?: number;
    intimidation?: number;
    investigation?: number;
    medicine?: number;
    nature?: number;
    perception?: number;
    performance?: number;
    persuasion?: number;
    religion?: number;
    sleightOfHand?: number;
    stealth?: number;
    survival?: number;
    passivePerception?: number;
    hitDiceTotal?: number;
    hitDiceCurrent?: string;
    deathSaves?: {
        successes: {
            1: boolean;
            2: boolean;
            3: boolean;
        }
        failures: {
            1: boolean;
            2: boolean;
            3: boolean;
        }
    },
    weapon1?: weaponDND5E;
    weapon2?: weaponDND5E;
    weapon3?: weaponDND5E;
    attacksAndSpellcasting?: string;
    proficienciesAndLang?: string;
    cp?: number;
    sp?: number;
    ep?: number;
    gp?: number;
    pp?: number;
    equipment?: string;
    personalityTraits?: string;
    ideals?: string;
    bonds?: string;
    flaws?: string;
    featuresAndTraits?: string;
}

export interface weaponDND5E {
    name: string;
    atkBonus: number;
    damageAndType: string;
}

export interface SpellsDND5E {
    0: SpellCategoryDND5E,
    1: SpellCategoryDND5E,
    2: SpellCategoryDND5E,
    3: SpellCategoryDND5E,
    4: SpellCategoryDND5E,
    5: SpellCategoryDND5E,
    6: SpellCategoryDND5E,
    7: SpellCategoryDND5E,
    8: SpellCategoryDND5E,
    9: SpellCategoryDND5E
}

export interface SpellCategoryDND5E {
    slotsTotal: number;
    slotsExpended: number;
    spellList: Array<{
        name: string;
        prepared: boolean;
    }>
}

export interface CharacterPF2E {
    gameSystem: GameSystems.PF2E,
}