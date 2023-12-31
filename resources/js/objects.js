// OBJECT STRUCTURES WHICH WILL BE USED OFTEN
export function BaseStats(total, hp, att, def, spAtt, spDef, sp) {
    this.base_total = total;
    this.hp = hp;
    this.attack = att;
    this.defense = def;
    this.sp_attack = spAtt;
    this.sp_defense = spDef;
    this.speed = sp;
}

export function Pokemon(pokeName) {
    this.name = pokeName;
    this.image = "image_path";
    this.hasSeveralForms = false;
    this.number = 0;
    this.type1 = "type1";
    this.type2 = "type2";
    this.classification = "class";
    this.height = 0.0;
    this.weight = 0.0;
    this.captureRate = 0.0;
    this.baseEggSteps = 0;
    this.abilities = [];
    this.experienceGrowth = 0.0;
    this.damageAgainst = [];
    this.baseStatsTotal = 0;
    this.stats = new BaseStats(0,0,0,0,0,0, 0);
    this.generation = "gen";
    this.isLegendary = false;
}