/* eslint-disable */
import * as Long from "long";
import * as _m0 from "protobufjs/minimal";

export const protobufPackage = "fp2";

export enum ModelType {
  ModelType_Unkown = 0,
  ModelType_Character = 1,
  ModelType_Weapon = 2,
  ModelType_Orb = 3,
  ModelType_Armor = 4,
  ModelType_Game = 5,
  ModelType_Player = 6,
  ModelType_Picture = 7,
  ModelType_RefArmor = 50,
  ModelType_RefGameTerm = 51,
  ModelType_RefOrb = 52,
  ModelType_RefSkill = 53,
  ModelType_RefWeapon = 54,
  UNRECOGNIZED = -1,
}

export function modelTypeFromJSON(object: any): ModelType {
  switch (object) {
    case 0:
    case "ModelType_Unkown":
      return ModelType.ModelType_Unkown;
    case 1:
    case "ModelType_Character":
      return ModelType.ModelType_Character;
    case 2:
    case "ModelType_Weapon":
      return ModelType.ModelType_Weapon;
    case 3:
    case "ModelType_Orb":
      return ModelType.ModelType_Orb;
    case 4:
    case "ModelType_Armor":
      return ModelType.ModelType_Armor;
    case 5:
    case "ModelType_Game":
      return ModelType.ModelType_Game;
    case 6:
    case "ModelType_Player":
      return ModelType.ModelType_Player;
    case 7:
    case "ModelType_Picture":
      return ModelType.ModelType_Picture;
    case 50:
    case "ModelType_RefArmor":
      return ModelType.ModelType_RefArmor;
    case 51:
    case "ModelType_RefGameTerm":
      return ModelType.ModelType_RefGameTerm;
    case 52:
    case "ModelType_RefOrb":
      return ModelType.ModelType_RefOrb;
    case 53:
    case "ModelType_RefSkill":
      return ModelType.ModelType_RefSkill;
    case 54:
    case "ModelType_RefWeapon":
      return ModelType.ModelType_RefWeapon;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ModelType.UNRECOGNIZED;
  }
}

export function modelTypeToJSON(object: ModelType): string {
  switch (object) {
    case ModelType.ModelType_Unkown:
      return "ModelType_Unkown";
    case ModelType.ModelType_Character:
      return "ModelType_Character";
    case ModelType.ModelType_Weapon:
      return "ModelType_Weapon";
    case ModelType.ModelType_Orb:
      return "ModelType_Orb";
    case ModelType.ModelType_Armor:
      return "ModelType_Armor";
    case ModelType.ModelType_Game:
      return "ModelType_Game";
    case ModelType.ModelType_Player:
      return "ModelType_Player";
    case ModelType.ModelType_Picture:
      return "ModelType_Picture";
    case ModelType.ModelType_RefArmor:
      return "ModelType_RefArmor";
    case ModelType.ModelType_RefGameTerm:
      return "ModelType_RefGameTerm";
    case ModelType.ModelType_RefOrb:
      return "ModelType_RefOrb";
    case ModelType.ModelType_RefSkill:
      return "ModelType_RefSkill";
    case ModelType.ModelType_RefWeapon:
      return "ModelType_RefWeapon";
    case ModelType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum UpdateType {
  UT_Save = 0,
  UT_Delete = 1,
  UNRECOGNIZED = -1,
}

export function updateTypeFromJSON(object: any): UpdateType {
  switch (object) {
    case 0:
    case "UT_Save":
      return UpdateType.UT_Save;
    case 1:
    case "UT_Delete":
      return UpdateType.UT_Delete;
    case -1:
    case "UNRECOGNIZED":
    default:
      return UpdateType.UNRECOGNIZED;
  }
}

export function updateTypeToJSON(object: UpdateType): string {
  switch (object) {
    case UpdateType.UT_Save:
      return "UT_Save";
    case UpdateType.UT_Delete:
      return "UT_Delete";
    case UpdateType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum AttributeAllocationMethod {
  AttributeAllocationMethod_UNK = 0,
  AttributeAllocationMethod_Roo = 1,
  AttributeAllocationMethod_Point50 = 2,
  AttributeAllocationMethod_Point60 = 3,
  AttributeAllocationMethod_Point70 = 4,
  AttributeAllocationMethod_Maunal = 5,
  UNRECOGNIZED = -1,
}

export function attributeAllocationMethodFromJSON(
  object: any
): AttributeAllocationMethod {
  switch (object) {
    case 0:
    case "AttributeAllocationMethod_UNK":
      return AttributeAllocationMethod.AttributeAllocationMethod_UNK;
    case 1:
    case "AttributeAllocationMethod_Roo":
      return AttributeAllocationMethod.AttributeAllocationMethod_Roo;
    case 2:
    case "AttributeAllocationMethod_Point50":
      return AttributeAllocationMethod.AttributeAllocationMethod_Point50;
    case 3:
    case "AttributeAllocationMethod_Point60":
      return AttributeAllocationMethod.AttributeAllocationMethod_Point60;
    case 4:
    case "AttributeAllocationMethod_Point70":
      return AttributeAllocationMethod.AttributeAllocationMethod_Point70;
    case 5:
    case "AttributeAllocationMethod_Maunal":
      return AttributeAllocationMethod.AttributeAllocationMethod_Maunal;
    case -1:
    case "UNRECOGNIZED":
    default:
      return AttributeAllocationMethod.UNRECOGNIZED;
  }
}

export function attributeAllocationMethodToJSON(
  object: AttributeAllocationMethod
): string {
  switch (object) {
    case AttributeAllocationMethod.AttributeAllocationMethod_UNK:
      return "AttributeAllocationMethod_UNK";
    case AttributeAllocationMethod.AttributeAllocationMethod_Roo:
      return "AttributeAllocationMethod_Roo";
    case AttributeAllocationMethod.AttributeAllocationMethod_Point50:
      return "AttributeAllocationMethod_Point50";
    case AttributeAllocationMethod.AttributeAllocationMethod_Point60:
      return "AttributeAllocationMethod_Point60";
    case AttributeAllocationMethod.AttributeAllocationMethod_Point70:
      return "AttributeAllocationMethod_Point70";
    case AttributeAllocationMethod.AttributeAllocationMethod_Maunal:
      return "AttributeAllocationMethod_Maunal";
    case AttributeAllocationMethod.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum TurnStatus {
  TurnStatus_Unknown = 0,
  TurnStatus_Pending = 1,
  TurnStatus_Held = 2,
  TurnStatus_Acted = 3,
  TurnStatus_Reacted = 4,
  TurnStatus_Reacted_Borrowed = 5,
  TurnStatus_Borrowed = 6,
  TurnStatus_UnableToAct = 7,
  UNRECOGNIZED = -1,
}

export function turnStatusFromJSON(object: any): TurnStatus {
  switch (object) {
    case 0:
    case "TurnStatus_Unknown":
      return TurnStatus.TurnStatus_Unknown;
    case 1:
    case "TurnStatus_Pending":
      return TurnStatus.TurnStatus_Pending;
    case 2:
    case "TurnStatus_Held":
      return TurnStatus.TurnStatus_Held;
    case 3:
    case "TurnStatus_Acted":
      return TurnStatus.TurnStatus_Acted;
    case 4:
    case "TurnStatus_Reacted":
      return TurnStatus.TurnStatus_Reacted;
    case 5:
    case "TurnStatus_Reacted_Borrowed":
      return TurnStatus.TurnStatus_Reacted_Borrowed;
    case 6:
    case "TurnStatus_Borrowed":
      return TurnStatus.TurnStatus_Borrowed;
    case 7:
    case "TurnStatus_UnableToAct":
      return TurnStatus.TurnStatus_UnableToAct;
    case -1:
    case "UNRECOGNIZED":
    default:
      return TurnStatus.UNRECOGNIZED;
  }
}

export function turnStatusToJSON(object: TurnStatus): string {
  switch (object) {
    case TurnStatus.TurnStatus_Unknown:
      return "TurnStatus_Unknown";
    case TurnStatus.TurnStatus_Pending:
      return "TurnStatus_Pending";
    case TurnStatus.TurnStatus_Held:
      return "TurnStatus_Held";
    case TurnStatus.TurnStatus_Acted:
      return "TurnStatus_Acted";
    case TurnStatus.TurnStatus_Reacted:
      return "TurnStatus_Reacted";
    case TurnStatus.TurnStatus_Reacted_Borrowed:
      return "TurnStatus_Reacted_Borrowed";
    case TurnStatus.TurnStatus_Borrowed:
      return "TurnStatus_Borrowed";
    case TurnStatus.TurnStatus_UnableToAct:
      return "TurnStatus_UnableToAct";
    case TurnStatus.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum EntityType {
  EntityType_Unknown = 0,
  EntityType_Character = 1,
  EntityType_Creature = 2,
  EntityType_Other = 3,
  UNRECOGNIZED = -1,
}

export function entityTypeFromJSON(object: any): EntityType {
  switch (object) {
    case 0:
    case "EntityType_Unknown":
      return EntityType.EntityType_Unknown;
    case 1:
    case "EntityType_Character":
      return EntityType.EntityType_Character;
    case 2:
    case "EntityType_Creature":
      return EntityType.EntityType_Creature;
    case 3:
    case "EntityType_Other":
      return EntityType.EntityType_Other;
    case -1:
    case "UNRECOGNIZED":
    default:
      return EntityType.UNRECOGNIZED;
  }
}

export function entityTypeToJSON(object: EntityType): string {
  switch (object) {
    case EntityType.EntityType_Unknown:
      return "EntityType_Unknown";
    case EntityType.EntityType_Character:
      return "EntityType_Character";
    case EntityType.EntityType_Creature:
      return "EntityType_Creature";
    case EntityType.EntityType_Other:
      return "EntityType_Other";
    case EntityType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum PrimaryAttributeVal {
  PrimaryAttributeVal_UNK = 0,
  PrimaryAttributeVal_BOD = 1,
  PrimaryAttributeVal_WILL = 2,
  PrimaryAttributeVal_REF = 3,
  PrimaryAttributeVal_VIT = 4,
  PrimaryAttributeVal_INT = 5,
  PrimaryAttributeVal_LUCK = 6,
  PrimaryAttributeVal_TECH = 7,
  PrimaryAttributeVal_ATTR = 8,
  PrimaryAttributeVal_ESS = 9,
  PrimaryAttributeVal_PER = 10,
  UNRECOGNIZED = -1,
}

export function primaryAttributeValFromJSON(object: any): PrimaryAttributeVal {
  switch (object) {
    case 0:
    case "PrimaryAttributeVal_UNK":
      return PrimaryAttributeVal.PrimaryAttributeVal_UNK;
    case 1:
    case "PrimaryAttributeVal_BOD":
      return PrimaryAttributeVal.PrimaryAttributeVal_BOD;
    case 2:
    case "PrimaryAttributeVal_WILL":
      return PrimaryAttributeVal.PrimaryAttributeVal_WILL;
    case 3:
    case "PrimaryAttributeVal_REF":
      return PrimaryAttributeVal.PrimaryAttributeVal_REF;
    case 4:
    case "PrimaryAttributeVal_VIT":
      return PrimaryAttributeVal.PrimaryAttributeVal_VIT;
    case 5:
    case "PrimaryAttributeVal_INT":
      return PrimaryAttributeVal.PrimaryAttributeVal_INT;
    case 6:
    case "PrimaryAttributeVal_LUCK":
      return PrimaryAttributeVal.PrimaryAttributeVal_LUCK;
    case 7:
    case "PrimaryAttributeVal_TECH":
      return PrimaryAttributeVal.PrimaryAttributeVal_TECH;
    case 8:
    case "PrimaryAttributeVal_ATTR":
      return PrimaryAttributeVal.PrimaryAttributeVal_ATTR;
    case 9:
    case "PrimaryAttributeVal_ESS":
      return PrimaryAttributeVal.PrimaryAttributeVal_ESS;
    case 10:
    case "PrimaryAttributeVal_PER":
      return PrimaryAttributeVal.PrimaryAttributeVal_PER;
    case -1:
    case "UNRECOGNIZED":
    default:
      return PrimaryAttributeVal.UNRECOGNIZED;
  }
}

export function primaryAttributeValToJSON(object: PrimaryAttributeVal): string {
  switch (object) {
    case PrimaryAttributeVal.PrimaryAttributeVal_UNK:
      return "PrimaryAttributeVal_UNK";
    case PrimaryAttributeVal.PrimaryAttributeVal_BOD:
      return "PrimaryAttributeVal_BOD";
    case PrimaryAttributeVal.PrimaryAttributeVal_WILL:
      return "PrimaryAttributeVal_WILL";
    case PrimaryAttributeVal.PrimaryAttributeVal_REF:
      return "PrimaryAttributeVal_REF";
    case PrimaryAttributeVal.PrimaryAttributeVal_VIT:
      return "PrimaryAttributeVal_VIT";
    case PrimaryAttributeVal.PrimaryAttributeVal_INT:
      return "PrimaryAttributeVal_INT";
    case PrimaryAttributeVal.PrimaryAttributeVal_LUCK:
      return "PrimaryAttributeVal_LUCK";
    case PrimaryAttributeVal.PrimaryAttributeVal_TECH:
      return "PrimaryAttributeVal_TECH";
    case PrimaryAttributeVal.PrimaryAttributeVal_ATTR:
      return "PrimaryAttributeVal_ATTR";
    case PrimaryAttributeVal.PrimaryAttributeVal_ESS:
      return "PrimaryAttributeVal_ESS";
    case PrimaryAttributeVal.PrimaryAttributeVal_PER:
      return "PrimaryAttributeVal_PER";
    case PrimaryAttributeVal.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum AttackType {
  AttackType_Unknown = 0,
  AttackType_Melee = 1,
  AttackType_Ranged = 2,
  UNRECOGNIZED = -1,
}

export function attackTypeFromJSON(object: any): AttackType {
  switch (object) {
    case 0:
    case "AttackType_Unknown":
      return AttackType.AttackType_Unknown;
    case 1:
    case "AttackType_Melee":
      return AttackType.AttackType_Melee;
    case 2:
    case "AttackType_Ranged":
      return AttackType.AttackType_Ranged;
    case -1:
    case "UNRECOGNIZED":
    default:
      return AttackType.UNRECOGNIZED;
  }
}

export function attackTypeToJSON(object: AttackType): string {
  switch (object) {
    case AttackType.AttackType_Unknown:
      return "AttackType_Unknown";
    case AttackType.AttackType_Melee:
      return "AttackType_Melee";
    case AttackType.AttackType_Ranged:
      return "AttackType_Ranged";
    case AttackType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum DefenseType {
  Unknown = 0,
  None = 1,
  Dodge = 2,
  Block = 3,
  Parry = 4,
  UNRECOGNIZED = -1,
}

export function defenseTypeFromJSON(object: any): DefenseType {
  switch (object) {
    case 0:
    case "Unknown":
      return DefenseType.Unknown;
    case 1:
    case "None":
      return DefenseType.None;
    case 2:
    case "Dodge":
      return DefenseType.Dodge;
    case 3:
    case "Block":
      return DefenseType.Block;
    case 4:
    case "Parry":
      return DefenseType.Parry;
    case -1:
    case "UNRECOGNIZED":
    default:
      return DefenseType.UNRECOGNIZED;
  }
}

export function defenseTypeToJSON(object: DefenseType): string {
  switch (object) {
    case DefenseType.Unknown:
      return "Unknown";
    case DefenseType.None:
      return "None";
    case DefenseType.Dodge:
      return "Dodge";
    case DefenseType.Block:
      return "Block";
    case DefenseType.Parry:
      return "Parry";
    case DefenseType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum WoundState {
  WoundState_Unknown = 0,
  WoundState_None = 1,
  WoundState_Light = 2,
  WoundState_Serious = 3,
  WoundState_Critical = 4,
  WoundState_Mortal = 5,
  UNRECOGNIZED = -1,
}

export function woundStateFromJSON(object: any): WoundState {
  switch (object) {
    case 0:
    case "WoundState_Unknown":
      return WoundState.WoundState_Unknown;
    case 1:
    case "WoundState_None":
      return WoundState.WoundState_None;
    case 2:
    case "WoundState_Light":
      return WoundState.WoundState_Light;
    case 3:
    case "WoundState_Serious":
      return WoundState.WoundState_Serious;
    case 4:
    case "WoundState_Critical":
      return WoundState.WoundState_Critical;
    case 5:
    case "WoundState_Mortal":
      return WoundState.WoundState_Mortal;
    case -1:
    case "UNRECOGNIZED":
    default:
      return WoundState.UNRECOGNIZED;
  }
}

export function woundStateToJSON(object: WoundState): string {
  switch (object) {
    case WoundState.WoundState_Unknown:
      return "WoundState_Unknown";
    case WoundState.WoundState_None:
      return "WoundState_None";
    case WoundState.WoundState_Light:
      return "WoundState_Light";
    case WoundState.WoundState_Serious:
      return "WoundState_Serious";
    case WoundState.WoundState_Critical:
      return "WoundState_Critical";
    case WoundState.WoundState_Mortal:
      return "WoundState_Mortal";
    case WoundState.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum Rarity {
  Rarity_UNK = 0,
  Rarity_COMMON = 1,
  Rarity_UNCOMMON = 2,
  Rarity_RARE = 3,
  Rarity_LEGONDARY = 4,
  Rarity_MYTHIC = 5,
  Rarity_OTHER = 6,
  UNRECOGNIZED = -1,
}

export function rarityFromJSON(object: any): Rarity {
  switch (object) {
    case 0:
    case "Rarity_UNK":
      return Rarity.Rarity_UNK;
    case 1:
    case "Rarity_COMMON":
      return Rarity.Rarity_COMMON;
    case 2:
    case "Rarity_UNCOMMON":
      return Rarity.Rarity_UNCOMMON;
    case 3:
    case "Rarity_RARE":
      return Rarity.Rarity_RARE;
    case 4:
    case "Rarity_LEGONDARY":
      return Rarity.Rarity_LEGONDARY;
    case 5:
    case "Rarity_MYTHIC":
      return Rarity.Rarity_MYTHIC;
    case 6:
    case "Rarity_OTHER":
      return Rarity.Rarity_OTHER;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Rarity.UNRECOGNIZED;
  }
}

export function rarityToJSON(object: Rarity): string {
  switch (object) {
    case Rarity.Rarity_UNK:
      return "Rarity_UNK";
    case Rarity.Rarity_COMMON:
      return "Rarity_COMMON";
    case Rarity.Rarity_UNCOMMON:
      return "Rarity_UNCOMMON";
    case Rarity.Rarity_RARE:
      return "Rarity_RARE";
    case Rarity.Rarity_LEGONDARY:
      return "Rarity_LEGONDARY";
    case Rarity.Rarity_MYTHIC:
      return "Rarity_MYTHIC";
    case Rarity.Rarity_OTHER:
      return "Rarity_OTHER";
    case Rarity.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum BooleanValue {
  BooleanValue_UNK = 0,
  BooleanValue_False = 1,
  BooleanValue_True = 2,
  UNRECOGNIZED = -1,
}

export function booleanValueFromJSON(object: any): BooleanValue {
  switch (object) {
    case 0:
    case "BooleanValue_UNK":
      return BooleanValue.BooleanValue_UNK;
    case 1:
    case "BooleanValue_False":
      return BooleanValue.BooleanValue_False;
    case 2:
    case "BooleanValue_True":
      return BooleanValue.BooleanValue_True;
    case -1:
    case "UNRECOGNIZED":
    default:
      return BooleanValue.UNRECOGNIZED;
  }
}

export function booleanValueToJSON(object: BooleanValue): string {
  switch (object) {
    case BooleanValue.BooleanValue_UNK:
      return "BooleanValue_UNK";
    case BooleanValue.BooleanValue_False:
      return "BooleanValue_False";
    case BooleanValue.BooleanValue_True:
      return "BooleanValue_True";
    case BooleanValue.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum MonetaryDenomination {
  MonetaryDenomination_UNK = 0,
  MonetaryDenomination_CP = 1,
  MonetaryDenomination_SP = 2,
  MonetaryDenomination_GP = 3,
  MonetaryDenomination_PP = 4,
  MonetaryDenomination_OTHER = 5,
  UNRECOGNIZED = -1,
}

export function monetaryDenominationFromJSON(
  object: any
): MonetaryDenomination {
  switch (object) {
    case 0:
    case "MonetaryDenomination_UNK":
      return MonetaryDenomination.MonetaryDenomination_UNK;
    case 1:
    case "MonetaryDenomination_CP":
      return MonetaryDenomination.MonetaryDenomination_CP;
    case 2:
    case "MonetaryDenomination_SP":
      return MonetaryDenomination.MonetaryDenomination_SP;
    case 3:
    case "MonetaryDenomination_GP":
      return MonetaryDenomination.MonetaryDenomination_GP;
    case 4:
    case "MonetaryDenomination_PP":
      return MonetaryDenomination.MonetaryDenomination_PP;
    case 5:
    case "MonetaryDenomination_OTHER":
      return MonetaryDenomination.MonetaryDenomination_OTHER;
    case -1:
    case "UNRECOGNIZED":
    default:
      return MonetaryDenomination.UNRECOGNIZED;
  }
}

export function monetaryDenominationToJSON(
  object: MonetaryDenomination
): string {
  switch (object) {
    case MonetaryDenomination.MonetaryDenomination_UNK:
      return "MonetaryDenomination_UNK";
    case MonetaryDenomination.MonetaryDenomination_CP:
      return "MonetaryDenomination_CP";
    case MonetaryDenomination.MonetaryDenomination_SP:
      return "MonetaryDenomination_SP";
    case MonetaryDenomination.MonetaryDenomination_GP:
      return "MonetaryDenomination_GP";
    case MonetaryDenomination.MonetaryDenomination_PP:
      return "MonetaryDenomination_PP";
    case MonetaryDenomination.MonetaryDenomination_OTHER:
      return "MonetaryDenomination_OTHER";
    case MonetaryDenomination.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum GameTermType {
  GameTermType_UNK = 0,
  GameTermType_Rarity = 1,
  GameTermType_Weapon_Quality = 2,
  GameTermType_Monetary_Denomintation = 3,
  GameTermType_Wound_state = 4,
  UNRECOGNIZED = -1,
}

export function gameTermTypeFromJSON(object: any): GameTermType {
  switch (object) {
    case 0:
    case "GameTermType_UNK":
      return GameTermType.GameTermType_UNK;
    case 1:
    case "GameTermType_Rarity":
      return GameTermType.GameTermType_Rarity;
    case 2:
    case "GameTermType_Weapon_Quality":
      return GameTermType.GameTermType_Weapon_Quality;
    case 3:
    case "GameTermType_Monetary_Denomintation":
      return GameTermType.GameTermType_Monetary_Denomintation;
    case 4:
    case "GameTermType_Wound_state":
      return GameTermType.GameTermType_Wound_state;
    case -1:
    case "UNRECOGNIZED":
    default:
      return GameTermType.UNRECOGNIZED;
  }
}

export function gameTermTypeToJSON(object: GameTermType): string {
  switch (object) {
    case GameTermType.GameTermType_UNK:
      return "GameTermType_UNK";
    case GameTermType.GameTermType_Rarity:
      return "GameTermType_Rarity";
    case GameTermType.GameTermType_Weapon_Quality:
      return "GameTermType_Weapon_Quality";
    case GameTermType.GameTermType_Monetary_Denomintation:
      return "GameTermType_Monetary_Denomintation";
    case GameTermType.GameTermType_Wound_state:
      return "GameTermType_Wound_state";
    case GameTermType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum Quality {
  Quality_UNK = 0,
  Quality_Trash = 1,
  Quality_Poor = 2,
  Quality_Standard = 3,
  Quality_Master = 4,
  Quality_Magic = 5,
  Quality_Artifact = 6,
  UNRECOGNIZED = -1,
}

export function qualityFromJSON(object: any): Quality {
  switch (object) {
    case 0:
    case "Quality_UNK":
      return Quality.Quality_UNK;
    case 1:
    case "Quality_Trash":
      return Quality.Quality_Trash;
    case 2:
    case "Quality_Poor":
      return Quality.Quality_Poor;
    case 3:
    case "Quality_Standard":
      return Quality.Quality_Standard;
    case 4:
    case "Quality_Master":
      return Quality.Quality_Master;
    case 5:
    case "Quality_Magic":
      return Quality.Quality_Magic;
    case 6:
    case "Quality_Artifact":
      return Quality.Quality_Artifact;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Quality.UNRECOGNIZED;
  }
}

export function qualityToJSON(object: Quality): string {
  switch (object) {
    case Quality.Quality_UNK:
      return "Quality_UNK";
    case Quality.Quality_Trash:
      return "Quality_Trash";
    case Quality.Quality_Poor:
      return "Quality_Poor";
    case Quality.Quality_Standard:
      return "Quality_Standard";
    case Quality.Quality_Master:
      return "Quality_Master";
    case Quality.Quality_Magic:
      return "Quality_Magic";
    case Quality.Quality_Artifact:
      return "Quality_Artifact";
    case Quality.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum ActionType {
  ActionType_Unknown = 0,
  ActionType_Standard = 1,
  ActionType_Defensive_Reaction = 2,
  UNRECOGNIZED = -1,
}

export function actionTypeFromJSON(object: any): ActionType {
  switch (object) {
    case 0:
    case "ActionType_Unknown":
      return ActionType.ActionType_Unknown;
    case 1:
    case "ActionType_Standard":
      return ActionType.ActionType_Standard;
    case 2:
    case "ActionType_Defensive_Reaction":
      return ActionType.ActionType_Defensive_Reaction;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ActionType.UNRECOGNIZED;
  }
}

export function actionTypeToJSON(object: ActionType): string {
  switch (object) {
    case ActionType.ActionType_Unknown:
      return "ActionType_Unknown";
    case ActionType.ActionType_Standard:
      return "ActionType_Standard";
    case ActionType.ActionType_Defensive_Reaction:
      return "ActionType_Defensive_Reaction";
    case ActionType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum ReferenceType {
  ReferenceType_Unknown = 0,
  ReferenceType_Skill = 1,
  ReferenceType_Ability = 2,
  ReferenceType_GameTerm = 3,
  ReferenceType_Weapon = 4,
  ReferenceType_Armor = 5,
  ReferenceType_Gear = 6,
  ReferenceType_Orb = 7,
  UNRECOGNIZED = -1,
}

export function referenceTypeFromJSON(object: any): ReferenceType {
  switch (object) {
    case 0:
    case "ReferenceType_Unknown":
      return ReferenceType.ReferenceType_Unknown;
    case 1:
    case "ReferenceType_Skill":
      return ReferenceType.ReferenceType_Skill;
    case 2:
    case "ReferenceType_Ability":
      return ReferenceType.ReferenceType_Ability;
    case 3:
    case "ReferenceType_GameTerm":
      return ReferenceType.ReferenceType_GameTerm;
    case 4:
    case "ReferenceType_Weapon":
      return ReferenceType.ReferenceType_Weapon;
    case 5:
    case "ReferenceType_Armor":
      return ReferenceType.ReferenceType_Armor;
    case 6:
    case "ReferenceType_Gear":
      return ReferenceType.ReferenceType_Gear;
    case 7:
    case "ReferenceType_Orb":
      return ReferenceType.ReferenceType_Orb;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ReferenceType.UNRECOGNIZED;
  }
}

export function referenceTypeToJSON(object: ReferenceType): string {
  switch (object) {
    case ReferenceType.ReferenceType_Unknown:
      return "ReferenceType_Unknown";
    case ReferenceType.ReferenceType_Skill:
      return "ReferenceType_Skill";
    case ReferenceType.ReferenceType_Ability:
      return "ReferenceType_Ability";
    case ReferenceType.ReferenceType_GameTerm:
      return "ReferenceType_GameTerm";
    case ReferenceType.ReferenceType_Weapon:
      return "ReferenceType_Weapon";
    case ReferenceType.ReferenceType_Armor:
      return "ReferenceType_Armor";
    case ReferenceType.ReferenceType_Gear:
      return "ReferenceType_Gear";
    case ReferenceType.ReferenceType_Orb:
      return "ReferenceType_Orb";
    case ReferenceType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum ModificationType {
  MT_UNK = 0,
  MT_WoundLevelsLight = 1,
  MT_WoundLevelsSerious = 2,
  MT_WoundLevelsCritical = 3,
  MT_WoundLevelsMortal = 4,
  MT_AttributeBOD = 6,
  MT_AttributeWILL = 7,
  MT_AttributeREF = 8,
  MT_AttributeVIT = 9,
  MT_AttributeINT = 10,
  MT_AttributeLUCK = 11,
  MT_AttributeTECH = 12,
  MT_AttributeATTR = 13,
  MT_AttributeESS = 14,
  MT_AttributePER = 15,
  MT_AttributeTempBOD = 16,
  MT_AttributeTempWILL = 17,
  MT_AttributeTempREF = 18,
  MT_AttributeTempVIT = 19,
  MT_AttributeTempINT = 20,
  MT_AttributeTempLUCK = 21,
  MT_AttributeTempTECH = 22,
  MT_AttributeTempATTR = 23,
  MT_AttributeTempESS = 24,
  MT_AttributeTempPER = 25,
  MT_Mana = 26,
  MT_ManaRegen = 27,
  MT_Stamina = 28,
  MT_StaminaRegen = 29,
  MT_Initiative = 30,
  MT_Awarness = 31,
  MT_Mana_Temp = 32,
  MT_ManaRegen_Temp = 33,
  MT_Stamina_Temp = 34,
  MT_StaminaREgen_Temp = 35,
  MT_Initiative_Temp = 36,
  MT_Awarness_Temp = 37,
  MT_Actions = 38,
  MT_DefensiveReactions = 39,
  MT_Skill = 50,
  UNRECOGNIZED = -1,
}

export function modificationTypeFromJSON(object: any): ModificationType {
  switch (object) {
    case 0:
    case "MT_UNK":
      return ModificationType.MT_UNK;
    case 1:
    case "MT_WoundLevelsLight":
      return ModificationType.MT_WoundLevelsLight;
    case 2:
    case "MT_WoundLevelsSerious":
      return ModificationType.MT_WoundLevelsSerious;
    case 3:
    case "MT_WoundLevelsCritical":
      return ModificationType.MT_WoundLevelsCritical;
    case 4:
    case "MT_WoundLevelsMortal":
      return ModificationType.MT_WoundLevelsMortal;
    case 6:
    case "MT_AttributeBOD":
      return ModificationType.MT_AttributeBOD;
    case 7:
    case "MT_AttributeWILL":
      return ModificationType.MT_AttributeWILL;
    case 8:
    case "MT_AttributeREF":
      return ModificationType.MT_AttributeREF;
    case 9:
    case "MT_AttributeVIT":
      return ModificationType.MT_AttributeVIT;
    case 10:
    case "MT_AttributeINT":
      return ModificationType.MT_AttributeINT;
    case 11:
    case "MT_AttributeLUCK":
      return ModificationType.MT_AttributeLUCK;
    case 12:
    case "MT_AttributeTECH":
      return ModificationType.MT_AttributeTECH;
    case 13:
    case "MT_AttributeATTR":
      return ModificationType.MT_AttributeATTR;
    case 14:
    case "MT_AttributeESS":
      return ModificationType.MT_AttributeESS;
    case 15:
    case "MT_AttributePER":
      return ModificationType.MT_AttributePER;
    case 16:
    case "MT_AttributeTempBOD":
      return ModificationType.MT_AttributeTempBOD;
    case 17:
    case "MT_AttributeTempWILL":
      return ModificationType.MT_AttributeTempWILL;
    case 18:
    case "MT_AttributeTempREF":
      return ModificationType.MT_AttributeTempREF;
    case 19:
    case "MT_AttributeTempVIT":
      return ModificationType.MT_AttributeTempVIT;
    case 20:
    case "MT_AttributeTempINT":
      return ModificationType.MT_AttributeTempINT;
    case 21:
    case "MT_AttributeTempLUCK":
      return ModificationType.MT_AttributeTempLUCK;
    case 22:
    case "MT_AttributeTempTECH":
      return ModificationType.MT_AttributeTempTECH;
    case 23:
    case "MT_AttributeTempATTR":
      return ModificationType.MT_AttributeTempATTR;
    case 24:
    case "MT_AttributeTempESS":
      return ModificationType.MT_AttributeTempESS;
    case 25:
    case "MT_AttributeTempPER":
      return ModificationType.MT_AttributeTempPER;
    case 26:
    case "MT_Mana":
      return ModificationType.MT_Mana;
    case 27:
    case "MT_ManaRegen":
      return ModificationType.MT_ManaRegen;
    case 28:
    case "MT_Stamina":
      return ModificationType.MT_Stamina;
    case 29:
    case "MT_StaminaRegen":
      return ModificationType.MT_StaminaRegen;
    case 30:
    case "MT_Initiative":
      return ModificationType.MT_Initiative;
    case 31:
    case "MT_Awarness":
      return ModificationType.MT_Awarness;
    case 32:
    case "MT_Mana_Temp":
      return ModificationType.MT_Mana_Temp;
    case 33:
    case "MT_ManaRegen_Temp":
      return ModificationType.MT_ManaRegen_Temp;
    case 34:
    case "MT_Stamina_Temp":
      return ModificationType.MT_Stamina_Temp;
    case 35:
    case "MT_StaminaREgen_Temp":
      return ModificationType.MT_StaminaREgen_Temp;
    case 36:
    case "MT_Initiative_Temp":
      return ModificationType.MT_Initiative_Temp;
    case 37:
    case "MT_Awarness_Temp":
      return ModificationType.MT_Awarness_Temp;
    case 38:
    case "MT_Actions":
      return ModificationType.MT_Actions;
    case 39:
    case "MT_DefensiveReactions":
      return ModificationType.MT_DefensiveReactions;
    case 50:
    case "MT_Skill":
      return ModificationType.MT_Skill;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ModificationType.UNRECOGNIZED;
  }
}

export function modificationTypeToJSON(object: ModificationType): string {
  switch (object) {
    case ModificationType.MT_UNK:
      return "MT_UNK";
    case ModificationType.MT_WoundLevelsLight:
      return "MT_WoundLevelsLight";
    case ModificationType.MT_WoundLevelsSerious:
      return "MT_WoundLevelsSerious";
    case ModificationType.MT_WoundLevelsCritical:
      return "MT_WoundLevelsCritical";
    case ModificationType.MT_WoundLevelsMortal:
      return "MT_WoundLevelsMortal";
    case ModificationType.MT_AttributeBOD:
      return "MT_AttributeBOD";
    case ModificationType.MT_AttributeWILL:
      return "MT_AttributeWILL";
    case ModificationType.MT_AttributeREF:
      return "MT_AttributeREF";
    case ModificationType.MT_AttributeVIT:
      return "MT_AttributeVIT";
    case ModificationType.MT_AttributeINT:
      return "MT_AttributeINT";
    case ModificationType.MT_AttributeLUCK:
      return "MT_AttributeLUCK";
    case ModificationType.MT_AttributeTECH:
      return "MT_AttributeTECH";
    case ModificationType.MT_AttributeATTR:
      return "MT_AttributeATTR";
    case ModificationType.MT_AttributeESS:
      return "MT_AttributeESS";
    case ModificationType.MT_AttributePER:
      return "MT_AttributePER";
    case ModificationType.MT_AttributeTempBOD:
      return "MT_AttributeTempBOD";
    case ModificationType.MT_AttributeTempWILL:
      return "MT_AttributeTempWILL";
    case ModificationType.MT_AttributeTempREF:
      return "MT_AttributeTempREF";
    case ModificationType.MT_AttributeTempVIT:
      return "MT_AttributeTempVIT";
    case ModificationType.MT_AttributeTempINT:
      return "MT_AttributeTempINT";
    case ModificationType.MT_AttributeTempLUCK:
      return "MT_AttributeTempLUCK";
    case ModificationType.MT_AttributeTempTECH:
      return "MT_AttributeTempTECH";
    case ModificationType.MT_AttributeTempATTR:
      return "MT_AttributeTempATTR";
    case ModificationType.MT_AttributeTempESS:
      return "MT_AttributeTempESS";
    case ModificationType.MT_AttributeTempPER:
      return "MT_AttributeTempPER";
    case ModificationType.MT_Mana:
      return "MT_Mana";
    case ModificationType.MT_ManaRegen:
      return "MT_ManaRegen";
    case ModificationType.MT_Stamina:
      return "MT_Stamina";
    case ModificationType.MT_StaminaRegen:
      return "MT_StaminaRegen";
    case ModificationType.MT_Initiative:
      return "MT_Initiative";
    case ModificationType.MT_Awarness:
      return "MT_Awarness";
    case ModificationType.MT_Mana_Temp:
      return "MT_Mana_Temp";
    case ModificationType.MT_ManaRegen_Temp:
      return "MT_ManaRegen_Temp";
    case ModificationType.MT_Stamina_Temp:
      return "MT_Stamina_Temp";
    case ModificationType.MT_StaminaREgen_Temp:
      return "MT_StaminaREgen_Temp";
    case ModificationType.MT_Initiative_Temp:
      return "MT_Initiative_Temp";
    case ModificationType.MT_Awarness_Temp:
      return "MT_Awarness_Temp";
    case ModificationType.MT_Actions:
      return "MT_Actions";
    case ModificationType.MT_DefensiveReactions:
      return "MT_DefensiveReactions";
    case ModificationType.MT_Skill:
      return "MT_Skill";
    case ModificationType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum OrbType {
  OrbType_Unk = 0,
  OrbType_Spell = 1,
  OrbType_Summon = 2,
  OrbType_Enhancement = 3,
  UNRECOGNIZED = -1,
}

export function orbTypeFromJSON(object: any): OrbType {
  switch (object) {
    case 0:
    case "OrbType_Unk":
      return OrbType.OrbType_Unk;
    case 1:
    case "OrbType_Spell":
      return OrbType.OrbType_Spell;
    case 2:
    case "OrbType_Summon":
      return OrbType.OrbType_Summon;
    case 3:
    case "OrbType_Enhancement":
      return OrbType.OrbType_Enhancement;
    case -1:
    case "UNRECOGNIZED":
    default:
      return OrbType.UNRECOGNIZED;
  }
}

export function orbTypeToJSON(object: OrbType): string {
  switch (object) {
    case OrbType.OrbType_Unk:
      return "OrbType_Unk";
    case OrbType.OrbType_Spell:
      return "OrbType_Spell";
    case OrbType.OrbType_Summon:
      return "OrbType_Summon";
    case OrbType.OrbType_Enhancement:
      return "OrbType_Enhancement";
    case OrbType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum DiceRollReason {
  DiceRollReason_Unknown = 0,
  DiceRollReason_Initiative = 1,
  DiceRollReason_Attack = 2,
  DiceRollReason_Defense = 3,
  DiceRollReason_Skill = 4,
  DiceRollReason_Ability = 5,
  DiceRollReason_Awareness = 6,
  DiceRollReason_Other = 7,
  UNRECOGNIZED = -1,
}

export function diceRollReasonFromJSON(object: any): DiceRollReason {
  switch (object) {
    case 0:
    case "DiceRollReason_Unknown":
      return DiceRollReason.DiceRollReason_Unknown;
    case 1:
    case "DiceRollReason_Initiative":
      return DiceRollReason.DiceRollReason_Initiative;
    case 2:
    case "DiceRollReason_Attack":
      return DiceRollReason.DiceRollReason_Attack;
    case 3:
    case "DiceRollReason_Defense":
      return DiceRollReason.DiceRollReason_Defense;
    case 4:
    case "DiceRollReason_Skill":
      return DiceRollReason.DiceRollReason_Skill;
    case 5:
    case "DiceRollReason_Ability":
      return DiceRollReason.DiceRollReason_Ability;
    case 6:
    case "DiceRollReason_Awareness":
      return DiceRollReason.DiceRollReason_Awareness;
    case 7:
    case "DiceRollReason_Other":
      return DiceRollReason.DiceRollReason_Other;
    case -1:
    case "UNRECOGNIZED":
    default:
      return DiceRollReason.UNRECOGNIZED;
  }
}

export function diceRollReasonToJSON(object: DiceRollReason): string {
  switch (object) {
    case DiceRollReason.DiceRollReason_Unknown:
      return "DiceRollReason_Unknown";
    case DiceRollReason.DiceRollReason_Initiative:
      return "DiceRollReason_Initiative";
    case DiceRollReason.DiceRollReason_Attack:
      return "DiceRollReason_Attack";
    case DiceRollReason.DiceRollReason_Defense:
      return "DiceRollReason_Defense";
    case DiceRollReason.DiceRollReason_Skill:
      return "DiceRollReason_Skill";
    case DiceRollReason.DiceRollReason_Ability:
      return "DiceRollReason_Ability";
    case DiceRollReason.DiceRollReason_Awareness:
      return "DiceRollReason_Awareness";
    case DiceRollReason.DiceRollReason_Other:
      return "DiceRollReason_Other";
    case DiceRollReason.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

/** Top level message that is sent and recieved. */
export interface Fp2Message {
  MessageID: string;
  RespondingToID: string;
  Sender: string;
  ErrorResponse: ErrorResponse | undefined;
  /** BAD NAMING */
  Attack: Attack | undefined;
  AttackResult: AttackResult | undefined;
  DefenseChallenge: DefenseChallenge | undefined;
  DefenseChallengeResponse: DefenseChallengeResponse | undefined;
  UpdateRequest: UpdateRequest | undefined;
  /** BAD NAMING */
  Chat: Chat | undefined;
  ListGamesRequest: ListGamesRequest | undefined;
  ListGamesResponse: ListGamesResponse | undefined;
  GetActiveGameRequest: GetActiveGameRequest | undefined;
  GetActiveGameResponse: GetActiveGameResponse | undefined;
  /** BAD NAMING */
  ModelChangedEvent: ModelChangedEvent | undefined;
  GetRequest: GetRequest | undefined;
  GetResponse: GetResponse | undefined;
  GetAllRequest: GetAllRequest | undefined;
  GetAllResponse: GetAllResponse | undefined;
  ListRequest: ListRequest | undefined;
  ListResponse: ListReponse | undefined;
  BatchUpdateRequest: BatchUpdateRequest | undefined;
  DiceRollBroadcast: DiceRollBroadcast | undefined;
  DiceRollResponse: DiceRollResponse | undefined;
  SetActiveGameRequest: SetActiveGameRequest | undefined;
  GetPictureRequest: GetPictureRequest | undefined;
  GetPictureResponse: GetPictureResponse | undefined;
}

export interface ErrorResponse {
  Error: string;
  ErrorCode: number;
  ErroredMessage: Fp2Message | undefined;
}

export interface GetRequest {
  Type: ModelType;
  ID: string;
}

export interface GetResponse {
  Type: ModelType;
  Model: Model | undefined;
}

export interface GetAllRequest {
  Type: ModelType;
}

export interface GetAllResponse {
  Type: ModelType;
  Items: Model[];
}

export interface ListRequest {
  Type: ModelType;
  filter: string;
}

export interface ListReponse {
  Type: ModelType;
  filter: string;
  Items: IDName[];
}

export interface IDName {
  ID: string;
  Name: string;
}

export interface GetPictureRequest {
  ID: string;
  Type: ModelType;
  GameID: string;
  Tag: string;
}

export interface GetPictureResponse {
  Picture: Picture | undefined;
}

/**
 * Used to send multuple updates. Batched updates will delay the calculaiion
 * process until all updates have been saved and there will be only a single
 * update per affected object instead of possibly n updates. It is possible
 * to include the same object multiple times. In that case the last object
 * instance will be the one that gets saved. No attempt at patching with
 * this approach
 */
export interface BatchUpdateRequest {
  Updates: UpdateRequest[];
}

/**
 * Sent from the Client to the Server when the client has made a change
 * This may be too general, but is good for now. No attempt at patching with
 * this approach
 */
export interface UpdateRequest {
  Type: UpdateType;
  UpdateReason: number;
  Model: Model | undefined;
}

/**
 * Sent to the Client when a model has changed. This is either from
 * a save or from a calculation. No attempt at patching with
 * this approach
 */
export interface ModelChangedEvent {
  Type: UpdateType;
  UpdateReason: number;
  Model: Model | undefined;
}

export interface Model {
  Character: Character | undefined;
  Weapon: Weapon | undefined;
  Orb: Orb | undefined;
  Armor: Armor | undefined;
  Game: Game | undefined;
  Player: Player | undefined;
  Picture: Picture | undefined;
  RefArmor: RefArmor | undefined;
  RefGameTerm: RefGameTerm | undefined;
  RefOrb: RefOrb | undefined;
  RefSkill: RefSkill | undefined;
  RefWeapon: RefWeapon | undefined;
}

/** Represents a Character */
export interface Character {
  ID: string;
  Name: string;
  Metadata: CharacterMetadata | undefined;
  Options: CharacterOptions | undefined;
  Attributes: CharacterAttributes | undefined;
  Health: CharacterHealth | undefined;
  Skills: Skill[];
  Weapons: Weapon[];
  Armors: Armor[];
  Affinities: Affinty[];
  Orbs: Orb[];
  ActionCount: number;
  DefensiveReactions: number;
  ManualModifications: Modification[];
  ManualRoll: boolean;
  Token: string;
}

export interface Affinty {
  School: string;
  Points: number;
}

export interface Picture {
  ID: string;
  Type: ModelType;
  GameID: string;
  Tag: string;
  Data: string;
}

export interface CharacterCreation {
  AttributeAllocationMethod: AttributeAllocationMethod;
  AttributePointsRemaining: number;
  SkillPoints: number;
  SkillPointsRemaining: number;
  StartingMoney: MonetaryAmount | undefined;
  AffinityPoints: number;
  AffinityPointsRemaining: number;
}

export interface CharacterMetadata {
  PlayerName: string;
  Backstory: string;
  Height: string;
  Weight: string;
  Race: string;
  EyeColor: string;
  HairColor: string;
}

export interface GameSession {
  DiceLog: DiceRollLog | undefined;
  ChatLog: ChatLog | undefined;
}

export interface ChatLog {
  Rolls: DiceRollResults[];
}

export interface DiceRollLog {
  Rolls: DiceRollResults[];
}

export interface Encounter {
  ID: string;
  Name: string;
  Active: boolean;
  CurrentRound: number;
  CurrentTurn: number;
  InitiativeOrders: InitiativeOrder[];
  Characters: string[];
  Rounds: Round[];
  LocalEntities: Character[];
  StartTime: number;
}

export interface Round {
  RoundNumber: number;
  Turns: Turn[];
  DefensiveReactions: DefensiveReaction[];
  BorrowedReactions: DefensiveReaction[];
}

export interface Turn {
  Order: number;
  CharacterId: string;
  Actions: number;
  Status: TurnStatus;
}

export interface DefensiveReaction {
  EntityID: string;
  TurnIndex: number;
}

export interface EntityReference {
  ID: string;
  Type: EntityType;
}

export interface InitiativeOrder {
  EntityID: string;
  Value: number;
  DiceRollResults: DiceRollResults | undefined;
}

export interface ChallengeDiceRoll {
  ID: string;
  ChallengeType: string;
  RollRequested: string;
  Text: string;
}

export interface ChallengeDiceRollResult {
  ChallengeID: string;
  Result: string;
}

export interface PlayerOptions {}

export interface CharacterOptions {
  RollMyOwnDice: boolean;
}

export interface CharacterAttributes {
  BOD: PrimaryAttribute | undefined;
  WILL: PrimaryAttribute | undefined;
  REF: PrimaryAttribute | undefined;
  VIT: PrimaryAttribute | undefined;
  INT: PrimaryAttribute | undefined;
  LUCK: PrimaryAttribute | undefined;
  TECH: PrimaryAttribute | undefined;
  ATTR: PrimaryAttribute | undefined;
  ESS: PrimaryAttribute | undefined;
  PER: PrimaryAttribute | undefined;
  Mana: ConsumableAttribute | undefined;
  Stamina: ConsumableAttribute | undefined;
  Initiative: CalculatedValue | undefined;
  Awarness: CalculatedValue | undefined;
}

export interface PrimaryAttribute {
  RawValue: number;
  SetValue: number;
  CalcValue: number;
}

export interface ConsumableAttribute {
  MaxValue: number;
  SetValue: number;
  RegenPerRound: number;
  RegenPerMinute: number;
}

export interface CalculatedValue {
  Value: number;
}

export interface Attack {
  Attacker: string;
  Target: string;
  AttackType: AttackType;
  Description: string;
  Weapon: string;
}

export interface AttackResult {
  Attack: Attack | undefined;
  Defense: DefenseOption | undefined;
  /** Need to put a dice result in here? */
  AttackTotal: number;
  /** Need to put a dice result in here? */
  DefenseTotal: number;
  /** Need to put a dice result in here? */
  AttackDamage: number;
  ShieldSP: number;
  ArmorSP: number;
  ShieldDamaged: boolean;
  ArmorDamaged: boolean;
  DamageInflicted: number;
}

export interface DefenseChallenge {
  Attack: Attack | undefined;
  DefenseOptions: DefenseOption[];
}

export interface DefenseChallengeResponse {
  Challenge: DefenseChallenge | undefined;
  Choice: DefenseOption | undefined;
}

export interface DefenseOption {
  DefenseType: DefenseType;
  DefenseItem: string;
  Description: string;
  DefenseTotal: number;
}

export interface CharacterHealth {
  LightLevels: number;
  SeriousLevels: number;
  CriticalLevels: number;
  MortalLevels: number;
  CurrentWounds: number;
  CurrentWoundState: WoundState;
  MortalN: number;
}

export interface Skill {
  ID: string;
  Level: number;
  IPs: number;
  Mod: number;
  Total: number;
}

export interface CalculatedCharacterSkill {
  Skill: Skill | undefined;
  AttrBase: number;
  Mods: number;
  Value: number;
}

export interface RefSkill {
  ID: string;
  Name: string;
  Description: string;
  AttributeType: PrimaryAttributeVal;
  Restrictions: string;
  Abilities: Ability[];
}

export interface Ability {
  ID: string;
  Name: string;
  Description: string;
  SkillLevelUnlock: string;
  /** How to model cost */
  CanAttackWith: boolean;
  /** How to model defense */
  CanDefendWith: boolean;
}

export interface MonetaryAmount {
  CP: number;
  SP: number;
  GP: number;
  PP: number;
}

export interface IconPicture {
  Icon: string;
  Picture: string;
}

export interface RefWeapon {
  ID: string;
  Name: string;
  Description: string;
  Damage1H: string;
  Damage2H: string;
  BaseWeaponAccuracy: number;
  DefenseModifier: number;
  DefenseType: DefenseType;
  Cost: MonetaryAmount | undefined;
  Rarity: Rarity;
  RangeFt: number;
  RequiredSkill: string;
  Melee: boolean;
  Ranged: boolean;
  Wield1Hand: boolean;
  Wield2Hand: boolean;
  Picture: IconPicture | undefined;
  CanBlock: boolean;
  CanParry: boolean;
  ParryMod: number;
  BlockMod: number;
  BlockSP: number;
  CanDegrade: boolean;
  Modifications: Modification[];
}

export interface RefGameTerm {
  ID: string;
  Name: string;
  Description: string;
  Type: string;
  /** Value of the Enum (like Rarity) */
  EnumValue: number;
}

export interface Weapon {
  ID: string;
  /** CUstom Name */
  Name: string;
  Notes: string;
  RefID: string;
  Quality: Quality;
  Picture: IconPicture | undefined;
  Carried: boolean;
  Equipped: boolean;
  ParryMod: number;
  BlockMod: number;
  BlockSP: number;
  WeaponAccuracy: number;
  Degraded: boolean;
  Modifications: Modification[];
}

export interface RefArmor {
  ID: string;
  Name: string;
  Description: string;
  SP: number;
  CanDegrade: boolean;
  Material: string;
  Cost: MonetaryAmount | undefined;
  CanStack: boolean;
  RefPenalty: number;
  Modifications: Modification[];
}

export interface Armor {
  ID: string;
  /** CUstom Name */
  Name: string;
  Notes: string;
  RefID: string;
  Picture: IconPicture | undefined;
  Equipped: boolean;
  Degraded: boolean;
  SP: number;
  Quality: Quality;
  CanDegrade: BooleanValue;
  Modifications: Modification[];
}

export interface DiceRollResults {
  Rolls: DiceRollResult[];
  Total: number;
  Modifiers: RollModifier[];
}

export interface DiceRollResult {
  Dice: Die | undefined;
  Results: DieRollResult[];
}

export interface DieRollResult {
  /** Total value of the roll */
  Value: number;
  /** If this roll was exploded */
  Exploded: boolean;
  /** If the roll was rerolled */
  ReRolled: boolean;
  /** Individual Die Values, only more than 1 on exploded, or Advantage */
  DieValues: number[];
}

export interface DiceRoll {
  Dice: Die[];
  Modifiers: RollModifier[];
  Reason: DiceRollReason;
  EntityID: string;
}

export interface Die {
  Amount: number;
  Sides: number;
  Explode: boolean;
  ReRollMin: boolean;
  Tag: string;
  Negative: boolean;
}

export interface RollModifier {
  Modifier: number;
  Tag: string;
  Multiply: boolean;
  Divide: boolean;
}

export interface PerformAction {
  Attack: Attack | undefined;
  ActionType: ActionType;
  Actions: number;
  CharacterID: string;
}

export interface Modification {
  Type: ModificationType;
  Amount: number;
  Category: string;
  IDAffected: string;
}

export interface Effect {
  Modification: Modification | undefined;
  Reason: string;
  Expires: string;
}

export interface Orb {
  ID: string;
  Name: string;
  Notes: string;
  RefID: string;
  Level: number;
  IPs: number;
  slotted: boolean;
}

export interface RefOrb {
  ID: string;
  Name: string;
  Description: string;
  Type: OrbType;
  Rarity: Rarity;
  Picture: IconPicture | undefined;
  SpellAttributeType: PrimaryAttributeVal;
  SpellSchool: string;
  Abilities: Ability[];
}

export interface Chat {
  Contents: string;
}

export interface Game {
  ID: string;
  Name: string;
  Players: Player[];
  GameTime: number;
}

export interface Player {
  id: string;
  name: string;
  GM: boolean;
}

export interface ListGamesRequest {
  IDNameOnly: boolean;
}

export interface ListGamesResponse {
  Games: Game[];
}

export interface StartGameRequest {
  ID: string;
}

export interface StartGameBroadcast {
  Game: Game | undefined;
  Characters: Character[];
  Encounters: Encounter[];
}

export interface GetActiveGameRequest {}

export interface GetActiveGameResponse {
  Game: Game | undefined;
  Players: Player[];
  Characters: Character[];
  Encounters: Encounter[];
}

export interface SetActiveGameRequest {
  ID: string;
}

/**
 * Requests that dice is rolled for a player. This is meant to be
 * used when a player wants to roll their own dice. This will timeout
 * and then the server will autoroll the dice. The intenion is that
 * any one "playing" a character will be able to respond
 */
export interface DiceRollBroadcast {
  /** The Request ID for the Roll */
  ID: string;
  /** The dice to roll */
  DiceRoll: DiceRoll | undefined;
  /** Text explaining the reason, for display */
  Text: string;
  /** Which player should roll */
  ForPlayerID: string;
  /** How many seconds until timeout */
  Timeout: number;
}

export interface DiceRollResponse {
  /** The original Request */
  Request: DiceRollBroadcast | undefined;
  /** The result of the dice roll */
  Result: DiceRollResults | undefined;
}

function createBaseFp2Message(): Fp2Message {
  return {
    MessageID: "",
    RespondingToID: "",
    Sender: "",
    ErrorResponse: undefined,
    Attack: undefined,
    AttackResult: undefined,
    DefenseChallenge: undefined,
    DefenseChallengeResponse: undefined,
    UpdateRequest: undefined,
    Chat: undefined,
    ListGamesRequest: undefined,
    ListGamesResponse: undefined,
    GetActiveGameRequest: undefined,
    GetActiveGameResponse: undefined,
    ModelChangedEvent: undefined,
    GetRequest: undefined,
    GetResponse: undefined,
    GetAllRequest: undefined,
    GetAllResponse: undefined,
    ListRequest: undefined,
    ListResponse: undefined,
    BatchUpdateRequest: undefined,
    DiceRollBroadcast: undefined,
    DiceRollResponse: undefined,
    SetActiveGameRequest: undefined,
    GetPictureRequest: undefined,
    GetPictureResponse: undefined,
  };
}

export const Fp2Message = {
  encode(
    message: Fp2Message,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.MessageID !== "") {
      writer.uint32(10).string(message.MessageID);
    }
    if (message.RespondingToID !== "") {
      writer.uint32(18).string(message.RespondingToID);
    }
    if (message.Sender !== "") {
      writer.uint32(26).string(message.Sender);
    }
    if (message.ErrorResponse !== undefined) {
      ErrorResponse.encode(
        message.ErrorResponse,
        writer.uint32(42).fork()
      ).ldelim();
    }
    if (message.Attack !== undefined) {
      Attack.encode(message.Attack, writer.uint32(50).fork()).ldelim();
    }
    if (message.AttackResult !== undefined) {
      AttackResult.encode(
        message.AttackResult,
        writer.uint32(58).fork()
      ).ldelim();
    }
    if (message.DefenseChallenge !== undefined) {
      DefenseChallenge.encode(
        message.DefenseChallenge,
        writer.uint32(66).fork()
      ).ldelim();
    }
    if (message.DefenseChallengeResponse !== undefined) {
      DefenseChallengeResponse.encode(
        message.DefenseChallengeResponse,
        writer.uint32(74).fork()
      ).ldelim();
    }
    if (message.UpdateRequest !== undefined) {
      UpdateRequest.encode(
        message.UpdateRequest,
        writer.uint32(98).fork()
      ).ldelim();
    }
    if (message.Chat !== undefined) {
      Chat.encode(message.Chat, writer.uint32(106).fork()).ldelim();
    }
    if (message.ListGamesRequest !== undefined) {
      ListGamesRequest.encode(
        message.ListGamesRequest,
        writer.uint32(114).fork()
      ).ldelim();
    }
    if (message.ListGamesResponse !== undefined) {
      ListGamesResponse.encode(
        message.ListGamesResponse,
        writer.uint32(122).fork()
      ).ldelim();
    }
    if (message.GetActiveGameRequest !== undefined) {
      GetActiveGameRequest.encode(
        message.GetActiveGameRequest,
        writer.uint32(130).fork()
      ).ldelim();
    }
    if (message.GetActiveGameResponse !== undefined) {
      GetActiveGameResponse.encode(
        message.GetActiveGameResponse,
        writer.uint32(138).fork()
      ).ldelim();
    }
    if (message.ModelChangedEvent !== undefined) {
      ModelChangedEvent.encode(
        message.ModelChangedEvent,
        writer.uint32(162).fork()
      ).ldelim();
    }
    if (message.GetRequest !== undefined) {
      GetRequest.encode(message.GetRequest, writer.uint32(170).fork()).ldelim();
    }
    if (message.GetResponse !== undefined) {
      GetResponse.encode(
        message.GetResponse,
        writer.uint32(178).fork()
      ).ldelim();
    }
    if (message.GetAllRequest !== undefined) {
      GetAllRequest.encode(
        message.GetAllRequest,
        writer.uint32(186).fork()
      ).ldelim();
    }
    if (message.GetAllResponse !== undefined) {
      GetAllResponse.encode(
        message.GetAllResponse,
        writer.uint32(194).fork()
      ).ldelim();
    }
    if (message.ListRequest !== undefined) {
      ListRequest.encode(
        message.ListRequest,
        writer.uint32(202).fork()
      ).ldelim();
    }
    if (message.ListResponse !== undefined) {
      ListReponse.encode(
        message.ListResponse,
        writer.uint32(210).fork()
      ).ldelim();
    }
    if (message.BatchUpdateRequest !== undefined) {
      BatchUpdateRequest.encode(
        message.BatchUpdateRequest,
        writer.uint32(218).fork()
      ).ldelim();
    }
    if (message.DiceRollBroadcast !== undefined) {
      DiceRollBroadcast.encode(
        message.DiceRollBroadcast,
        writer.uint32(226).fork()
      ).ldelim();
    }
    if (message.DiceRollResponse !== undefined) {
      DiceRollResponse.encode(
        message.DiceRollResponse,
        writer.uint32(234).fork()
      ).ldelim();
    }
    if (message.SetActiveGameRequest !== undefined) {
      SetActiveGameRequest.encode(
        message.SetActiveGameRequest,
        writer.uint32(242).fork()
      ).ldelim();
    }
    if (message.GetPictureRequest !== undefined) {
      GetPictureRequest.encode(
        message.GetPictureRequest,
        writer.uint32(250).fork()
      ).ldelim();
    }
    if (message.GetPictureResponse !== undefined) {
      GetPictureResponse.encode(
        message.GetPictureResponse,
        writer.uint32(258).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Fp2Message {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFp2Message();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.MessageID = reader.string();
          break;
        case 2:
          message.RespondingToID = reader.string();
          break;
        case 3:
          message.Sender = reader.string();
          break;
        case 5:
          message.ErrorResponse = ErrorResponse.decode(reader, reader.uint32());
          break;
        case 6:
          message.Attack = Attack.decode(reader, reader.uint32());
          break;
        case 7:
          message.AttackResult = AttackResult.decode(reader, reader.uint32());
          break;
        case 8:
          message.DefenseChallenge = DefenseChallenge.decode(
            reader,
            reader.uint32()
          );
          break;
        case 9:
          message.DefenseChallengeResponse = DefenseChallengeResponse.decode(
            reader,
            reader.uint32()
          );
          break;
        case 12:
          message.UpdateRequest = UpdateRequest.decode(reader, reader.uint32());
          break;
        case 13:
          message.Chat = Chat.decode(reader, reader.uint32());
          break;
        case 14:
          message.ListGamesRequest = ListGamesRequest.decode(
            reader,
            reader.uint32()
          );
          break;
        case 15:
          message.ListGamesResponse = ListGamesResponse.decode(
            reader,
            reader.uint32()
          );
          break;
        case 16:
          message.GetActiveGameRequest = GetActiveGameRequest.decode(
            reader,
            reader.uint32()
          );
          break;
        case 17:
          message.GetActiveGameResponse = GetActiveGameResponse.decode(
            reader,
            reader.uint32()
          );
          break;
        case 20:
          message.ModelChangedEvent = ModelChangedEvent.decode(
            reader,
            reader.uint32()
          );
          break;
        case 21:
          message.GetRequest = GetRequest.decode(reader, reader.uint32());
          break;
        case 22:
          message.GetResponse = GetResponse.decode(reader, reader.uint32());
          break;
        case 23:
          message.GetAllRequest = GetAllRequest.decode(reader, reader.uint32());
          break;
        case 24:
          message.GetAllResponse = GetAllResponse.decode(
            reader,
            reader.uint32()
          );
          break;
        case 25:
          message.ListRequest = ListRequest.decode(reader, reader.uint32());
          break;
        case 26:
          message.ListResponse = ListReponse.decode(reader, reader.uint32());
          break;
        case 27:
          message.BatchUpdateRequest = BatchUpdateRequest.decode(
            reader,
            reader.uint32()
          );
          break;
        case 28:
          message.DiceRollBroadcast = DiceRollBroadcast.decode(
            reader,
            reader.uint32()
          );
          break;
        case 29:
          message.DiceRollResponse = DiceRollResponse.decode(
            reader,
            reader.uint32()
          );
          break;
        case 30:
          message.SetActiveGameRequest = SetActiveGameRequest.decode(
            reader,
            reader.uint32()
          );
          break;
        case 31:
          message.GetPictureRequest = GetPictureRequest.decode(
            reader,
            reader.uint32()
          );
          break;
        case 32:
          message.GetPictureResponse = GetPictureResponse.decode(
            reader,
            reader.uint32()
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Fp2Message {
    return {
      MessageID: isSet(object.MessageID) ? String(object.MessageID) : "",
      RespondingToID: isSet(object.RespondingToID)
        ? String(object.RespondingToID)
        : "",
      Sender: isSet(object.Sender) ? String(object.Sender) : "",
      ErrorResponse: isSet(object.ErrorResponse)
        ? ErrorResponse.fromJSON(object.ErrorResponse)
        : undefined,
      Attack: isSet(object.Attack) ? Attack.fromJSON(object.Attack) : undefined,
      AttackResult: isSet(object.AttackResult)
        ? AttackResult.fromJSON(object.AttackResult)
        : undefined,
      DefenseChallenge: isSet(object.DefenseChallenge)
        ? DefenseChallenge.fromJSON(object.DefenseChallenge)
        : undefined,
      DefenseChallengeResponse: isSet(object.DefenseChallengeResponse)
        ? DefenseChallengeResponse.fromJSON(object.DefenseChallengeResponse)
        : undefined,
      UpdateRequest: isSet(object.UpdateRequest)
        ? UpdateRequest.fromJSON(object.UpdateRequest)
        : undefined,
      Chat: isSet(object.Chat) ? Chat.fromJSON(object.Chat) : undefined,
      ListGamesRequest: isSet(object.ListGamesRequest)
        ? ListGamesRequest.fromJSON(object.ListGamesRequest)
        : undefined,
      ListGamesResponse: isSet(object.ListGamesResponse)
        ? ListGamesResponse.fromJSON(object.ListGamesResponse)
        : undefined,
      GetActiveGameRequest: isSet(object.GetActiveGameRequest)
        ? GetActiveGameRequest.fromJSON(object.GetActiveGameRequest)
        : undefined,
      GetActiveGameResponse: isSet(object.GetActiveGameResponse)
        ? GetActiveGameResponse.fromJSON(object.GetActiveGameResponse)
        : undefined,
      ModelChangedEvent: isSet(object.ModelChangedEvent)
        ? ModelChangedEvent.fromJSON(object.ModelChangedEvent)
        : undefined,
      GetRequest: isSet(object.GetRequest)
        ? GetRequest.fromJSON(object.GetRequest)
        : undefined,
      GetResponse: isSet(object.GetResponse)
        ? GetResponse.fromJSON(object.GetResponse)
        : undefined,
      GetAllRequest: isSet(object.GetAllRequest)
        ? GetAllRequest.fromJSON(object.GetAllRequest)
        : undefined,
      GetAllResponse: isSet(object.GetAllResponse)
        ? GetAllResponse.fromJSON(object.GetAllResponse)
        : undefined,
      ListRequest: isSet(object.ListRequest)
        ? ListRequest.fromJSON(object.ListRequest)
        : undefined,
      ListResponse: isSet(object.ListResponse)
        ? ListReponse.fromJSON(object.ListResponse)
        : undefined,
      BatchUpdateRequest: isSet(object.BatchUpdateRequest)
        ? BatchUpdateRequest.fromJSON(object.BatchUpdateRequest)
        : undefined,
      DiceRollBroadcast: isSet(object.DiceRollBroadcast)
        ? DiceRollBroadcast.fromJSON(object.DiceRollBroadcast)
        : undefined,
      DiceRollResponse: isSet(object.DiceRollResponse)
        ? DiceRollResponse.fromJSON(object.DiceRollResponse)
        : undefined,
      SetActiveGameRequest: isSet(object.SetActiveGameRequest)
        ? SetActiveGameRequest.fromJSON(object.SetActiveGameRequest)
        : undefined,
      GetPictureRequest: isSet(object.GetPictureRequest)
        ? GetPictureRequest.fromJSON(object.GetPictureRequest)
        : undefined,
      GetPictureResponse: isSet(object.GetPictureResponse)
        ? GetPictureResponse.fromJSON(object.GetPictureResponse)
        : undefined,
    };
  },

  toJSON(message: Fp2Message): unknown {
    const obj: any = {};
    message.MessageID !== undefined && (obj.MessageID = message.MessageID);
    message.RespondingToID !== undefined &&
      (obj.RespondingToID = message.RespondingToID);
    message.Sender !== undefined && (obj.Sender = message.Sender);
    message.ErrorResponse !== undefined &&
      (obj.ErrorResponse = message.ErrorResponse
        ? ErrorResponse.toJSON(message.ErrorResponse)
        : undefined);
    message.Attack !== undefined &&
      (obj.Attack = message.Attack ? Attack.toJSON(message.Attack) : undefined);
    message.AttackResult !== undefined &&
      (obj.AttackResult = message.AttackResult
        ? AttackResult.toJSON(message.AttackResult)
        : undefined);
    message.DefenseChallenge !== undefined &&
      (obj.DefenseChallenge = message.DefenseChallenge
        ? DefenseChallenge.toJSON(message.DefenseChallenge)
        : undefined);
    message.DefenseChallengeResponse !== undefined &&
      (obj.DefenseChallengeResponse = message.DefenseChallengeResponse
        ? DefenseChallengeResponse.toJSON(message.DefenseChallengeResponse)
        : undefined);
    message.UpdateRequest !== undefined &&
      (obj.UpdateRequest = message.UpdateRequest
        ? UpdateRequest.toJSON(message.UpdateRequest)
        : undefined);
    message.Chat !== undefined &&
      (obj.Chat = message.Chat ? Chat.toJSON(message.Chat) : undefined);
    message.ListGamesRequest !== undefined &&
      (obj.ListGamesRequest = message.ListGamesRequest
        ? ListGamesRequest.toJSON(message.ListGamesRequest)
        : undefined);
    message.ListGamesResponse !== undefined &&
      (obj.ListGamesResponse = message.ListGamesResponse
        ? ListGamesResponse.toJSON(message.ListGamesResponse)
        : undefined);
    message.GetActiveGameRequest !== undefined &&
      (obj.GetActiveGameRequest = message.GetActiveGameRequest
        ? GetActiveGameRequest.toJSON(message.GetActiveGameRequest)
        : undefined);
    message.GetActiveGameResponse !== undefined &&
      (obj.GetActiveGameResponse = message.GetActiveGameResponse
        ? GetActiveGameResponse.toJSON(message.GetActiveGameResponse)
        : undefined);
    message.ModelChangedEvent !== undefined &&
      (obj.ModelChangedEvent = message.ModelChangedEvent
        ? ModelChangedEvent.toJSON(message.ModelChangedEvent)
        : undefined);
    message.GetRequest !== undefined &&
      (obj.GetRequest = message.GetRequest
        ? GetRequest.toJSON(message.GetRequest)
        : undefined);
    message.GetResponse !== undefined &&
      (obj.GetResponse = message.GetResponse
        ? GetResponse.toJSON(message.GetResponse)
        : undefined);
    message.GetAllRequest !== undefined &&
      (obj.GetAllRequest = message.GetAllRequest
        ? GetAllRequest.toJSON(message.GetAllRequest)
        : undefined);
    message.GetAllResponse !== undefined &&
      (obj.GetAllResponse = message.GetAllResponse
        ? GetAllResponse.toJSON(message.GetAllResponse)
        : undefined);
    message.ListRequest !== undefined &&
      (obj.ListRequest = message.ListRequest
        ? ListRequest.toJSON(message.ListRequest)
        : undefined);
    message.ListResponse !== undefined &&
      (obj.ListResponse = message.ListResponse
        ? ListReponse.toJSON(message.ListResponse)
        : undefined);
    message.BatchUpdateRequest !== undefined &&
      (obj.BatchUpdateRequest = message.BatchUpdateRequest
        ? BatchUpdateRequest.toJSON(message.BatchUpdateRequest)
        : undefined);
    message.DiceRollBroadcast !== undefined &&
      (obj.DiceRollBroadcast = message.DiceRollBroadcast
        ? DiceRollBroadcast.toJSON(message.DiceRollBroadcast)
        : undefined);
    message.DiceRollResponse !== undefined &&
      (obj.DiceRollResponse = message.DiceRollResponse
        ? DiceRollResponse.toJSON(message.DiceRollResponse)
        : undefined);
    message.SetActiveGameRequest !== undefined &&
      (obj.SetActiveGameRequest = message.SetActiveGameRequest
        ? SetActiveGameRequest.toJSON(message.SetActiveGameRequest)
        : undefined);
    message.GetPictureRequest !== undefined &&
      (obj.GetPictureRequest = message.GetPictureRequest
        ? GetPictureRequest.toJSON(message.GetPictureRequest)
        : undefined);
    message.GetPictureResponse !== undefined &&
      (obj.GetPictureResponse = message.GetPictureResponse
        ? GetPictureResponse.toJSON(message.GetPictureResponse)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Fp2Message>, I>>(
    object: I
  ): Fp2Message {
    const message = createBaseFp2Message();
    message.MessageID = object.MessageID ?? "";
    message.RespondingToID = object.RespondingToID ?? "";
    message.Sender = object.Sender ?? "";
    message.ErrorResponse =
      object.ErrorResponse !== undefined && object.ErrorResponse !== null
        ? ErrorResponse.fromPartial(object.ErrorResponse)
        : undefined;
    message.Attack =
      object.Attack !== undefined && object.Attack !== null
        ? Attack.fromPartial(object.Attack)
        : undefined;
    message.AttackResult =
      object.AttackResult !== undefined && object.AttackResult !== null
        ? AttackResult.fromPartial(object.AttackResult)
        : undefined;
    message.DefenseChallenge =
      object.DefenseChallenge !== undefined && object.DefenseChallenge !== null
        ? DefenseChallenge.fromPartial(object.DefenseChallenge)
        : undefined;
    message.DefenseChallengeResponse =
      object.DefenseChallengeResponse !== undefined &&
      object.DefenseChallengeResponse !== null
        ? DefenseChallengeResponse.fromPartial(object.DefenseChallengeResponse)
        : undefined;
    message.UpdateRequest =
      object.UpdateRequest !== undefined && object.UpdateRequest !== null
        ? UpdateRequest.fromPartial(object.UpdateRequest)
        : undefined;
    message.Chat =
      object.Chat !== undefined && object.Chat !== null
        ? Chat.fromPartial(object.Chat)
        : undefined;
    message.ListGamesRequest =
      object.ListGamesRequest !== undefined && object.ListGamesRequest !== null
        ? ListGamesRequest.fromPartial(object.ListGamesRequest)
        : undefined;
    message.ListGamesResponse =
      object.ListGamesResponse !== undefined &&
      object.ListGamesResponse !== null
        ? ListGamesResponse.fromPartial(object.ListGamesResponse)
        : undefined;
    message.GetActiveGameRequest =
      object.GetActiveGameRequest !== undefined &&
      object.GetActiveGameRequest !== null
        ? GetActiveGameRequest.fromPartial(object.GetActiveGameRequest)
        : undefined;
    message.GetActiveGameResponse =
      object.GetActiveGameResponse !== undefined &&
      object.GetActiveGameResponse !== null
        ? GetActiveGameResponse.fromPartial(object.GetActiveGameResponse)
        : undefined;
    message.ModelChangedEvent =
      object.ModelChangedEvent !== undefined &&
      object.ModelChangedEvent !== null
        ? ModelChangedEvent.fromPartial(object.ModelChangedEvent)
        : undefined;
    message.GetRequest =
      object.GetRequest !== undefined && object.GetRequest !== null
        ? GetRequest.fromPartial(object.GetRequest)
        : undefined;
    message.GetResponse =
      object.GetResponse !== undefined && object.GetResponse !== null
        ? GetResponse.fromPartial(object.GetResponse)
        : undefined;
    message.GetAllRequest =
      object.GetAllRequest !== undefined && object.GetAllRequest !== null
        ? GetAllRequest.fromPartial(object.GetAllRequest)
        : undefined;
    message.GetAllResponse =
      object.GetAllResponse !== undefined && object.GetAllResponse !== null
        ? GetAllResponse.fromPartial(object.GetAllResponse)
        : undefined;
    message.ListRequest =
      object.ListRequest !== undefined && object.ListRequest !== null
        ? ListRequest.fromPartial(object.ListRequest)
        : undefined;
    message.ListResponse =
      object.ListResponse !== undefined && object.ListResponse !== null
        ? ListReponse.fromPartial(object.ListResponse)
        : undefined;
    message.BatchUpdateRequest =
      object.BatchUpdateRequest !== undefined &&
      object.BatchUpdateRequest !== null
        ? BatchUpdateRequest.fromPartial(object.BatchUpdateRequest)
        : undefined;
    message.DiceRollBroadcast =
      object.DiceRollBroadcast !== undefined &&
      object.DiceRollBroadcast !== null
        ? DiceRollBroadcast.fromPartial(object.DiceRollBroadcast)
        : undefined;
    message.DiceRollResponse =
      object.DiceRollResponse !== undefined && object.DiceRollResponse !== null
        ? DiceRollResponse.fromPartial(object.DiceRollResponse)
        : undefined;
    message.SetActiveGameRequest =
      object.SetActiveGameRequest !== undefined &&
      object.SetActiveGameRequest !== null
        ? SetActiveGameRequest.fromPartial(object.SetActiveGameRequest)
        : undefined;
    message.GetPictureRequest =
      object.GetPictureRequest !== undefined &&
      object.GetPictureRequest !== null
        ? GetPictureRequest.fromPartial(object.GetPictureRequest)
        : undefined;
    message.GetPictureResponse =
      object.GetPictureResponse !== undefined &&
      object.GetPictureResponse !== null
        ? GetPictureResponse.fromPartial(object.GetPictureResponse)
        : undefined;
    return message;
  },
};

function createBaseErrorResponse(): ErrorResponse {
  return { Error: "", ErrorCode: 0, ErroredMessage: undefined };
}

export const ErrorResponse = {
  encode(
    message: ErrorResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.Error !== "") {
      writer.uint32(10).string(message.Error);
    }
    if (message.ErrorCode !== 0) {
      writer.uint32(16).int32(message.ErrorCode);
    }
    if (message.ErroredMessage !== undefined) {
      Fp2Message.encode(
        message.ErroredMessage,
        writer.uint32(26).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ErrorResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseErrorResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.Error = reader.string();
          break;
        case 2:
          message.ErrorCode = reader.int32();
          break;
        case 3:
          message.ErroredMessage = Fp2Message.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ErrorResponse {
    return {
      Error: isSet(object.Error) ? String(object.Error) : "",
      ErrorCode: isSet(object.ErrorCode) ? Number(object.ErrorCode) : 0,
      ErroredMessage: isSet(object.ErroredMessage)
        ? Fp2Message.fromJSON(object.ErroredMessage)
        : undefined,
    };
  },

  toJSON(message: ErrorResponse): unknown {
    const obj: any = {};
    message.Error !== undefined && (obj.Error = message.Error);
    message.ErrorCode !== undefined &&
      (obj.ErrorCode = Math.round(message.ErrorCode));
    message.ErroredMessage !== undefined &&
      (obj.ErroredMessage = message.ErroredMessage
        ? Fp2Message.toJSON(message.ErroredMessage)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ErrorResponse>, I>>(
    object: I
  ): ErrorResponse {
    const message = createBaseErrorResponse();
    message.Error = object.Error ?? "";
    message.ErrorCode = object.ErrorCode ?? 0;
    message.ErroredMessage =
      object.ErroredMessage !== undefined && object.ErroredMessage !== null
        ? Fp2Message.fromPartial(object.ErroredMessage)
        : undefined;
    return message;
  },
};

function createBaseGetRequest(): GetRequest {
  return { Type: 0, ID: "" };
}

export const GetRequest = {
  encode(
    message: GetRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.Type !== 0) {
      writer.uint32(8).int32(message.Type);
    }
    if (message.ID !== "") {
      writer.uint32(18).string(message.ID);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.Type = reader.int32() as any;
          break;
        case 2:
          message.ID = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetRequest {
    return {
      Type: isSet(object.Type) ? modelTypeFromJSON(object.Type) : 0,
      ID: isSet(object.ID) ? String(object.ID) : "",
    };
  },

  toJSON(message: GetRequest): unknown {
    const obj: any = {};
    message.Type !== undefined && (obj.Type = modelTypeToJSON(message.Type));
    message.ID !== undefined && (obj.ID = message.ID);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetRequest>, I>>(
    object: I
  ): GetRequest {
    const message = createBaseGetRequest();
    message.Type = object.Type ?? 0;
    message.ID = object.ID ?? "";
    return message;
  },
};

function createBaseGetResponse(): GetResponse {
  return { Type: 0, Model: undefined };
}

export const GetResponse = {
  encode(
    message: GetResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.Type !== 0) {
      writer.uint32(8).int32(message.Type);
    }
    if (message.Model !== undefined) {
      Model.encode(message.Model, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.Type = reader.int32() as any;
          break;
        case 2:
          message.Model = Model.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetResponse {
    return {
      Type: isSet(object.Type) ? modelTypeFromJSON(object.Type) : 0,
      Model: isSet(object.Model) ? Model.fromJSON(object.Model) : undefined,
    };
  },

  toJSON(message: GetResponse): unknown {
    const obj: any = {};
    message.Type !== undefined && (obj.Type = modelTypeToJSON(message.Type));
    message.Model !== undefined &&
      (obj.Model = message.Model ? Model.toJSON(message.Model) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetResponse>, I>>(
    object: I
  ): GetResponse {
    const message = createBaseGetResponse();
    message.Type = object.Type ?? 0;
    message.Model =
      object.Model !== undefined && object.Model !== null
        ? Model.fromPartial(object.Model)
        : undefined;
    return message;
  },
};

function createBaseGetAllRequest(): GetAllRequest {
  return { Type: 0 };
}

export const GetAllRequest = {
  encode(
    message: GetAllRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.Type !== 0) {
      writer.uint32(8).int32(message.Type);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetAllRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetAllRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.Type = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetAllRequest {
    return {
      Type: isSet(object.Type) ? modelTypeFromJSON(object.Type) : 0,
    };
  },

  toJSON(message: GetAllRequest): unknown {
    const obj: any = {};
    message.Type !== undefined && (obj.Type = modelTypeToJSON(message.Type));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetAllRequest>, I>>(
    object: I
  ): GetAllRequest {
    const message = createBaseGetAllRequest();
    message.Type = object.Type ?? 0;
    return message;
  },
};

function createBaseGetAllResponse(): GetAllResponse {
  return { Type: 0, Items: [] };
}

export const GetAllResponse = {
  encode(
    message: GetAllResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.Type !== 0) {
      writer.uint32(8).int32(message.Type);
    }
    for (const v of message.Items) {
      Model.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetAllResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetAllResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.Type = reader.int32() as any;
          break;
        case 2:
          message.Items.push(Model.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetAllResponse {
    return {
      Type: isSet(object.Type) ? modelTypeFromJSON(object.Type) : 0,
      Items: Array.isArray(object?.Items)
        ? object.Items.map((e: any) => Model.fromJSON(e))
        : [],
    };
  },

  toJSON(message: GetAllResponse): unknown {
    const obj: any = {};
    message.Type !== undefined && (obj.Type = modelTypeToJSON(message.Type));
    if (message.Items) {
      obj.Items = message.Items.map((e) => (e ? Model.toJSON(e) : undefined));
    } else {
      obj.Items = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetAllResponse>, I>>(
    object: I
  ): GetAllResponse {
    const message = createBaseGetAllResponse();
    message.Type = object.Type ?? 0;
    message.Items = object.Items?.map((e) => Model.fromPartial(e)) || [];
    return message;
  },
};

function createBaseListRequest(): ListRequest {
  return { Type: 0, filter: "" };
}

export const ListRequest = {
  encode(
    message: ListRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.Type !== 0) {
      writer.uint32(8).int32(message.Type);
    }
    if (message.filter !== "") {
      writer.uint32(18).string(message.filter);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.Type = reader.int32() as any;
          break;
        case 2:
          message.filter = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ListRequest {
    return {
      Type: isSet(object.Type) ? modelTypeFromJSON(object.Type) : 0,
      filter: isSet(object.filter) ? String(object.filter) : "",
    };
  },

  toJSON(message: ListRequest): unknown {
    const obj: any = {};
    message.Type !== undefined && (obj.Type = modelTypeToJSON(message.Type));
    message.filter !== undefined && (obj.filter = message.filter);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ListRequest>, I>>(
    object: I
  ): ListRequest {
    const message = createBaseListRequest();
    message.Type = object.Type ?? 0;
    message.filter = object.filter ?? "";
    return message;
  },
};

function createBaseListReponse(): ListReponse {
  return { Type: 0, filter: "", Items: [] };
}

export const ListReponse = {
  encode(
    message: ListReponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.Type !== 0) {
      writer.uint32(8).int32(message.Type);
    }
    if (message.filter !== "") {
      writer.uint32(18).string(message.filter);
    }
    for (const v of message.Items) {
      IDName.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListReponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListReponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.Type = reader.int32() as any;
          break;
        case 2:
          message.filter = reader.string();
          break;
        case 3:
          message.Items.push(IDName.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ListReponse {
    return {
      Type: isSet(object.Type) ? modelTypeFromJSON(object.Type) : 0,
      filter: isSet(object.filter) ? String(object.filter) : "",
      Items: Array.isArray(object?.Items)
        ? object.Items.map((e: any) => IDName.fromJSON(e))
        : [],
    };
  },

  toJSON(message: ListReponse): unknown {
    const obj: any = {};
    message.Type !== undefined && (obj.Type = modelTypeToJSON(message.Type));
    message.filter !== undefined && (obj.filter = message.filter);
    if (message.Items) {
      obj.Items = message.Items.map((e) => (e ? IDName.toJSON(e) : undefined));
    } else {
      obj.Items = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ListReponse>, I>>(
    object: I
  ): ListReponse {
    const message = createBaseListReponse();
    message.Type = object.Type ?? 0;
    message.filter = object.filter ?? "";
    message.Items = object.Items?.map((e) => IDName.fromPartial(e)) || [];
    return message;
  },
};

function createBaseIDName(): IDName {
  return { ID: "", Name: "" };
}

export const IDName = {
  encode(
    message: IDName,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.ID !== "") {
      writer.uint32(10).string(message.ID);
    }
    if (message.Name !== "") {
      writer.uint32(18).string(message.Name);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): IDName {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseIDName();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.ID = reader.string();
          break;
        case 2:
          message.Name = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): IDName {
    return {
      ID: isSet(object.ID) ? String(object.ID) : "",
      Name: isSet(object.Name) ? String(object.Name) : "",
    };
  },

  toJSON(message: IDName): unknown {
    const obj: any = {};
    message.ID !== undefined && (obj.ID = message.ID);
    message.Name !== undefined && (obj.Name = message.Name);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<IDName>, I>>(object: I): IDName {
    const message = createBaseIDName();
    message.ID = object.ID ?? "";
    message.Name = object.Name ?? "";
    return message;
  },
};

function createBaseGetPictureRequest(): GetPictureRequest {
  return { ID: "", Type: 0, GameID: "", Tag: "" };
}

export const GetPictureRequest = {
  encode(
    message: GetPictureRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.ID !== "") {
      writer.uint32(10).string(message.ID);
    }
    if (message.Type !== 0) {
      writer.uint32(16).int32(message.Type);
    }
    if (message.GameID !== "") {
      writer.uint32(26).string(message.GameID);
    }
    if (message.Tag !== "") {
      writer.uint32(34).string(message.Tag);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetPictureRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetPictureRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.ID = reader.string();
          break;
        case 2:
          message.Type = reader.int32() as any;
          break;
        case 3:
          message.GameID = reader.string();
          break;
        case 4:
          message.Tag = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetPictureRequest {
    return {
      ID: isSet(object.ID) ? String(object.ID) : "",
      Type: isSet(object.Type) ? modelTypeFromJSON(object.Type) : 0,
      GameID: isSet(object.GameID) ? String(object.GameID) : "",
      Tag: isSet(object.Tag) ? String(object.Tag) : "",
    };
  },

  toJSON(message: GetPictureRequest): unknown {
    const obj: any = {};
    message.ID !== undefined && (obj.ID = message.ID);
    message.Type !== undefined && (obj.Type = modelTypeToJSON(message.Type));
    message.GameID !== undefined && (obj.GameID = message.GameID);
    message.Tag !== undefined && (obj.Tag = message.Tag);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetPictureRequest>, I>>(
    object: I
  ): GetPictureRequest {
    const message = createBaseGetPictureRequest();
    message.ID = object.ID ?? "";
    message.Type = object.Type ?? 0;
    message.GameID = object.GameID ?? "";
    message.Tag = object.Tag ?? "";
    return message;
  },
};

function createBaseGetPictureResponse(): GetPictureResponse {
  return { Picture: undefined };
}

export const GetPictureResponse = {
  encode(
    message: GetPictureResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.Picture !== undefined) {
      Picture.encode(message.Picture, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetPictureResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetPictureResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.Picture = Picture.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetPictureResponse {
    return {
      Picture: isSet(object.Picture)
        ? Picture.fromJSON(object.Picture)
        : undefined,
    };
  },

  toJSON(message: GetPictureResponse): unknown {
    const obj: any = {};
    message.Picture !== undefined &&
      (obj.Picture = message.Picture
        ? Picture.toJSON(message.Picture)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetPictureResponse>, I>>(
    object: I
  ): GetPictureResponse {
    const message = createBaseGetPictureResponse();
    message.Picture =
      object.Picture !== undefined && object.Picture !== null
        ? Picture.fromPartial(object.Picture)
        : undefined;
    return message;
  },
};

function createBaseBatchUpdateRequest(): BatchUpdateRequest {
  return { Updates: [] };
}

export const BatchUpdateRequest = {
  encode(
    message: BatchUpdateRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.Updates) {
      UpdateRequest.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BatchUpdateRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBatchUpdateRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          message.Updates.push(UpdateRequest.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): BatchUpdateRequest {
    return {
      Updates: Array.isArray(object?.Updates)
        ? object.Updates.map((e: any) => UpdateRequest.fromJSON(e))
        : [],
    };
  },

  toJSON(message: BatchUpdateRequest): unknown {
    const obj: any = {};
    if (message.Updates) {
      obj.Updates = message.Updates.map((e) =>
        e ? UpdateRequest.toJSON(e) : undefined
      );
    } else {
      obj.Updates = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<BatchUpdateRequest>, I>>(
    object: I
  ): BatchUpdateRequest {
    const message = createBaseBatchUpdateRequest();
    message.Updates =
      object.Updates?.map((e) => UpdateRequest.fromPartial(e)) || [];
    return message;
  },
};

function createBaseUpdateRequest(): UpdateRequest {
  return { Type: 0, UpdateReason: 0, Model: undefined };
}

export const UpdateRequest = {
  encode(
    message: UpdateRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.Type !== 0) {
      writer.uint32(8).int32(message.Type);
    }
    if (message.UpdateReason !== 0) {
      writer.uint32(16).int32(message.UpdateReason);
    }
    if (message.Model !== undefined) {
      Model.encode(message.Model, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.Type = reader.int32() as any;
          break;
        case 2:
          message.UpdateReason = reader.int32();
          break;
        case 3:
          message.Model = Model.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UpdateRequest {
    return {
      Type: isSet(object.Type) ? updateTypeFromJSON(object.Type) : 0,
      UpdateReason: isSet(object.UpdateReason)
        ? Number(object.UpdateReason)
        : 0,
      Model: isSet(object.Model) ? Model.fromJSON(object.Model) : undefined,
    };
  },

  toJSON(message: UpdateRequest): unknown {
    const obj: any = {};
    message.Type !== undefined && (obj.Type = updateTypeToJSON(message.Type));
    message.UpdateReason !== undefined &&
      (obj.UpdateReason = Math.round(message.UpdateReason));
    message.Model !== undefined &&
      (obj.Model = message.Model ? Model.toJSON(message.Model) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<UpdateRequest>, I>>(
    object: I
  ): UpdateRequest {
    const message = createBaseUpdateRequest();
    message.Type = object.Type ?? 0;
    message.UpdateReason = object.UpdateReason ?? 0;
    message.Model =
      object.Model !== undefined && object.Model !== null
        ? Model.fromPartial(object.Model)
        : undefined;
    return message;
  },
};

function createBaseModelChangedEvent(): ModelChangedEvent {
  return { Type: 0, UpdateReason: 0, Model: undefined };
}

export const ModelChangedEvent = {
  encode(
    message: ModelChangedEvent,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.Type !== 0) {
      writer.uint32(8).int32(message.Type);
    }
    if (message.UpdateReason !== 0) {
      writer.uint32(16).int32(message.UpdateReason);
    }
    if (message.Model !== undefined) {
      Model.encode(message.Model, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ModelChangedEvent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseModelChangedEvent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.Type = reader.int32() as any;
          break;
        case 2:
          message.UpdateReason = reader.int32();
          break;
        case 3:
          message.Model = Model.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ModelChangedEvent {
    return {
      Type: isSet(object.Type) ? updateTypeFromJSON(object.Type) : 0,
      UpdateReason: isSet(object.UpdateReason)
        ? Number(object.UpdateReason)
        : 0,
      Model: isSet(object.Model) ? Model.fromJSON(object.Model) : undefined,
    };
  },

  toJSON(message: ModelChangedEvent): unknown {
    const obj: any = {};
    message.Type !== undefined && (obj.Type = updateTypeToJSON(message.Type));
    message.UpdateReason !== undefined &&
      (obj.UpdateReason = Math.round(message.UpdateReason));
    message.Model !== undefined &&
      (obj.Model = message.Model ? Model.toJSON(message.Model) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ModelChangedEvent>, I>>(
    object: I
  ): ModelChangedEvent {
    const message = createBaseModelChangedEvent();
    message.Type = object.Type ?? 0;
    message.UpdateReason = object.UpdateReason ?? 0;
    message.Model =
      object.Model !== undefined && object.Model !== null
        ? Model.fromPartial(object.Model)
        : undefined;
    return message;
  },
};

function createBaseModel(): Model {
  return {
    Character: undefined,
    Weapon: undefined,
    Orb: undefined,
    Armor: undefined,
    Game: undefined,
    Player: undefined,
    Picture: undefined,
    RefArmor: undefined,
    RefGameTerm: undefined,
    RefOrb: undefined,
    RefSkill: undefined,
    RefWeapon: undefined,
  };
}

export const Model = {
  encode(message: Model, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.Character !== undefined) {
      Character.encode(message.Character, writer.uint32(10).fork()).ldelim();
    }
    if (message.Weapon !== undefined) {
      Weapon.encode(message.Weapon, writer.uint32(18).fork()).ldelim();
    }
    if (message.Orb !== undefined) {
      Orb.encode(message.Orb, writer.uint32(26).fork()).ldelim();
    }
    if (message.Armor !== undefined) {
      Armor.encode(message.Armor, writer.uint32(34).fork()).ldelim();
    }
    if (message.Game !== undefined) {
      Game.encode(message.Game, writer.uint32(42).fork()).ldelim();
    }
    if (message.Player !== undefined) {
      Player.encode(message.Player, writer.uint32(50).fork()).ldelim();
    }
    if (message.Picture !== undefined) {
      Picture.encode(message.Picture, writer.uint32(58).fork()).ldelim();
    }
    if (message.RefArmor !== undefined) {
      RefArmor.encode(message.RefArmor, writer.uint32(402).fork()).ldelim();
    }
    if (message.RefGameTerm !== undefined) {
      RefGameTerm.encode(
        message.RefGameTerm,
        writer.uint32(410).fork()
      ).ldelim();
    }
    if (message.RefOrb !== undefined) {
      RefOrb.encode(message.RefOrb, writer.uint32(418).fork()).ldelim();
    }
    if (message.RefSkill !== undefined) {
      RefSkill.encode(message.RefSkill, writer.uint32(426).fork()).ldelim();
    }
    if (message.RefWeapon !== undefined) {
      RefWeapon.encode(message.RefWeapon, writer.uint32(434).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Model {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseModel();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.Character = Character.decode(reader, reader.uint32());
          break;
        case 2:
          message.Weapon = Weapon.decode(reader, reader.uint32());
          break;
        case 3:
          message.Orb = Orb.decode(reader, reader.uint32());
          break;
        case 4:
          message.Armor = Armor.decode(reader, reader.uint32());
          break;
        case 5:
          message.Game = Game.decode(reader, reader.uint32());
          break;
        case 6:
          message.Player = Player.decode(reader, reader.uint32());
          break;
        case 7:
          message.Picture = Picture.decode(reader, reader.uint32());
          break;
        case 50:
          message.RefArmor = RefArmor.decode(reader, reader.uint32());
          break;
        case 51:
          message.RefGameTerm = RefGameTerm.decode(reader, reader.uint32());
          break;
        case 52:
          message.RefOrb = RefOrb.decode(reader, reader.uint32());
          break;
        case 53:
          message.RefSkill = RefSkill.decode(reader, reader.uint32());
          break;
        case 54:
          message.RefWeapon = RefWeapon.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Model {
    return {
      Character: isSet(object.Character)
        ? Character.fromJSON(object.Character)
        : undefined,
      Weapon: isSet(object.Weapon) ? Weapon.fromJSON(object.Weapon) : undefined,
      Orb: isSet(object.Orb) ? Orb.fromJSON(object.Orb) : undefined,
      Armor: isSet(object.Armor) ? Armor.fromJSON(object.Armor) : undefined,
      Game: isSet(object.Game) ? Game.fromJSON(object.Game) : undefined,
      Player: isSet(object.Player) ? Player.fromJSON(object.Player) : undefined,
      Picture: isSet(object.Picture)
        ? Picture.fromJSON(object.Picture)
        : undefined,
      RefArmor: isSet(object.RefArmor)
        ? RefArmor.fromJSON(object.RefArmor)
        : undefined,
      RefGameTerm: isSet(object.RefGameTerm)
        ? RefGameTerm.fromJSON(object.RefGameTerm)
        : undefined,
      RefOrb: isSet(object.RefOrb) ? RefOrb.fromJSON(object.RefOrb) : undefined,
      RefSkill: isSet(object.RefSkill)
        ? RefSkill.fromJSON(object.RefSkill)
        : undefined,
      RefWeapon: isSet(object.RefWeapon)
        ? RefWeapon.fromJSON(object.RefWeapon)
        : undefined,
    };
  },

  toJSON(message: Model): unknown {
    const obj: any = {};
    message.Character !== undefined &&
      (obj.Character = message.Character
        ? Character.toJSON(message.Character)
        : undefined);
    message.Weapon !== undefined &&
      (obj.Weapon = message.Weapon ? Weapon.toJSON(message.Weapon) : undefined);
    message.Orb !== undefined &&
      (obj.Orb = message.Orb ? Orb.toJSON(message.Orb) : undefined);
    message.Armor !== undefined &&
      (obj.Armor = message.Armor ? Armor.toJSON(message.Armor) : undefined);
    message.Game !== undefined &&
      (obj.Game = message.Game ? Game.toJSON(message.Game) : undefined);
    message.Player !== undefined &&
      (obj.Player = message.Player ? Player.toJSON(message.Player) : undefined);
    message.Picture !== undefined &&
      (obj.Picture = message.Picture
        ? Picture.toJSON(message.Picture)
        : undefined);
    message.RefArmor !== undefined &&
      (obj.RefArmor = message.RefArmor
        ? RefArmor.toJSON(message.RefArmor)
        : undefined);
    message.RefGameTerm !== undefined &&
      (obj.RefGameTerm = message.RefGameTerm
        ? RefGameTerm.toJSON(message.RefGameTerm)
        : undefined);
    message.RefOrb !== undefined &&
      (obj.RefOrb = message.RefOrb ? RefOrb.toJSON(message.RefOrb) : undefined);
    message.RefSkill !== undefined &&
      (obj.RefSkill = message.RefSkill
        ? RefSkill.toJSON(message.RefSkill)
        : undefined);
    message.RefWeapon !== undefined &&
      (obj.RefWeapon = message.RefWeapon
        ? RefWeapon.toJSON(message.RefWeapon)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Model>, I>>(object: I): Model {
    const message = createBaseModel();
    message.Character =
      object.Character !== undefined && object.Character !== null
        ? Character.fromPartial(object.Character)
        : undefined;
    message.Weapon =
      object.Weapon !== undefined && object.Weapon !== null
        ? Weapon.fromPartial(object.Weapon)
        : undefined;
    message.Orb =
      object.Orb !== undefined && object.Orb !== null
        ? Orb.fromPartial(object.Orb)
        : undefined;
    message.Armor =
      object.Armor !== undefined && object.Armor !== null
        ? Armor.fromPartial(object.Armor)
        : undefined;
    message.Game =
      object.Game !== undefined && object.Game !== null
        ? Game.fromPartial(object.Game)
        : undefined;
    message.Player =
      object.Player !== undefined && object.Player !== null
        ? Player.fromPartial(object.Player)
        : undefined;
    message.Picture =
      object.Picture !== undefined && object.Picture !== null
        ? Picture.fromPartial(object.Picture)
        : undefined;
    message.RefArmor =
      object.RefArmor !== undefined && object.RefArmor !== null
        ? RefArmor.fromPartial(object.RefArmor)
        : undefined;
    message.RefGameTerm =
      object.RefGameTerm !== undefined && object.RefGameTerm !== null
        ? RefGameTerm.fromPartial(object.RefGameTerm)
        : undefined;
    message.RefOrb =
      object.RefOrb !== undefined && object.RefOrb !== null
        ? RefOrb.fromPartial(object.RefOrb)
        : undefined;
    message.RefSkill =
      object.RefSkill !== undefined && object.RefSkill !== null
        ? RefSkill.fromPartial(object.RefSkill)
        : undefined;
    message.RefWeapon =
      object.RefWeapon !== undefined && object.RefWeapon !== null
        ? RefWeapon.fromPartial(object.RefWeapon)
        : undefined;
    return message;
  },
};

function createBaseCharacter(): Character {
  return {
    ID: "",
    Name: "",
    Metadata: undefined,
    Options: undefined,
    Attributes: undefined,
    Health: undefined,
    Skills: [],
    Weapons: [],
    Armors: [],
    Affinities: [],
    Orbs: [],
    ActionCount: 0,
    DefensiveReactions: 0,
    ManualModifications: [],
    ManualRoll: false,
    Token: "",
  };
}

export const Character = {
  encode(
    message: Character,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.ID !== "") {
      writer.uint32(10).string(message.ID);
    }
    if (message.Name !== "") {
      writer.uint32(18).string(message.Name);
    }
    if (message.Metadata !== undefined) {
      CharacterMetadata.encode(
        message.Metadata,
        writer.uint32(26).fork()
      ).ldelim();
    }
    if (message.Options !== undefined) {
      CharacterOptions.encode(
        message.Options,
        writer.uint32(34).fork()
      ).ldelim();
    }
    if (message.Attributes !== undefined) {
      CharacterAttributes.encode(
        message.Attributes,
        writer.uint32(42).fork()
      ).ldelim();
    }
    if (message.Health !== undefined) {
      CharacterHealth.encode(message.Health, writer.uint32(50).fork()).ldelim();
    }
    for (const v of message.Skills) {
      Skill.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    for (const v of message.Weapons) {
      Weapon.encode(v!, writer.uint32(66).fork()).ldelim();
    }
    for (const v of message.Armors) {
      Armor.encode(v!, writer.uint32(74).fork()).ldelim();
    }
    for (const v of message.Affinities) {
      Affinty.encode(v!, writer.uint32(82).fork()).ldelim();
    }
    for (const v of message.Orbs) {
      Orb.encode(v!, writer.uint32(90).fork()).ldelim();
    }
    if (message.ActionCount !== 0) {
      writer.uint32(96).int32(message.ActionCount);
    }
    if (message.DefensiveReactions !== 0) {
      writer.uint32(104).int32(message.DefensiveReactions);
    }
    for (const v of message.ManualModifications) {
      Modification.encode(v!, writer.uint32(114).fork()).ldelim();
    }
    if (message.ManualRoll === true) {
      writer.uint32(120).bool(message.ManualRoll);
    }
    if (message.Token !== "") {
      writer.uint32(130).string(message.Token);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Character {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCharacter();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.ID = reader.string();
          break;
        case 2:
          message.Name = reader.string();
          break;
        case 3:
          message.Metadata = CharacterMetadata.decode(reader, reader.uint32());
          break;
        case 4:
          message.Options = CharacterOptions.decode(reader, reader.uint32());
          break;
        case 5:
          message.Attributes = CharacterAttributes.decode(
            reader,
            reader.uint32()
          );
          break;
        case 6:
          message.Health = CharacterHealth.decode(reader, reader.uint32());
          break;
        case 7:
          message.Skills.push(Skill.decode(reader, reader.uint32()));
          break;
        case 8:
          message.Weapons.push(Weapon.decode(reader, reader.uint32()));
          break;
        case 9:
          message.Armors.push(Armor.decode(reader, reader.uint32()));
          break;
        case 10:
          message.Affinities.push(Affinty.decode(reader, reader.uint32()));
          break;
        case 11:
          message.Orbs.push(Orb.decode(reader, reader.uint32()));
          break;
        case 12:
          message.ActionCount = reader.int32();
          break;
        case 13:
          message.DefensiveReactions = reader.int32();
          break;
        case 14:
          message.ManualModifications.push(
            Modification.decode(reader, reader.uint32())
          );
          break;
        case 15:
          message.ManualRoll = reader.bool();
          break;
        case 16:
          message.Token = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Character {
    return {
      ID: isSet(object.ID) ? String(object.ID) : "",
      Name: isSet(object.Name) ? String(object.Name) : "",
      Metadata: isSet(object.Metadata)
        ? CharacterMetadata.fromJSON(object.Metadata)
        : undefined,
      Options: isSet(object.Options)
        ? CharacterOptions.fromJSON(object.Options)
        : undefined,
      Attributes: isSet(object.Attributes)
        ? CharacterAttributes.fromJSON(object.Attributes)
        : undefined,
      Health: isSet(object.Health)
        ? CharacterHealth.fromJSON(object.Health)
        : undefined,
      Skills: Array.isArray(object?.Skills)
        ? object.Skills.map((e: any) => Skill.fromJSON(e))
        : [],
      Weapons: Array.isArray(object?.Weapons)
        ? object.Weapons.map((e: any) => Weapon.fromJSON(e))
        : [],
      Armors: Array.isArray(object?.Armors)
        ? object.Armors.map((e: any) => Armor.fromJSON(e))
        : [],
      Affinities: Array.isArray(object?.Affinities)
        ? object.Affinities.map((e: any) => Affinty.fromJSON(e))
        : [],
      Orbs: Array.isArray(object?.Orbs)
        ? object.Orbs.map((e: any) => Orb.fromJSON(e))
        : [],
      ActionCount: isSet(object.ActionCount) ? Number(object.ActionCount) : 0,
      DefensiveReactions: isSet(object.DefensiveReactions)
        ? Number(object.DefensiveReactions)
        : 0,
      ManualModifications: Array.isArray(object?.ManualModifications)
        ? object.ManualModifications.map((e: any) => Modification.fromJSON(e))
        : [],
      ManualRoll: isSet(object.ManualRoll) ? Boolean(object.ManualRoll) : false,
      Token: isSet(object.Token) ? String(object.Token) : "",
    };
  },

  toJSON(message: Character): unknown {
    const obj: any = {};
    message.ID !== undefined && (obj.ID = message.ID);
    message.Name !== undefined && (obj.Name = message.Name);
    message.Metadata !== undefined &&
      (obj.Metadata = message.Metadata
        ? CharacterMetadata.toJSON(message.Metadata)
        : undefined);
    message.Options !== undefined &&
      (obj.Options = message.Options
        ? CharacterOptions.toJSON(message.Options)
        : undefined);
    message.Attributes !== undefined &&
      (obj.Attributes = message.Attributes
        ? CharacterAttributes.toJSON(message.Attributes)
        : undefined);
    message.Health !== undefined &&
      (obj.Health = message.Health
        ? CharacterHealth.toJSON(message.Health)
        : undefined);
    if (message.Skills) {
      obj.Skills = message.Skills.map((e) => (e ? Skill.toJSON(e) : undefined));
    } else {
      obj.Skills = [];
    }
    if (message.Weapons) {
      obj.Weapons = message.Weapons.map((e) =>
        e ? Weapon.toJSON(e) : undefined
      );
    } else {
      obj.Weapons = [];
    }
    if (message.Armors) {
      obj.Armors = message.Armors.map((e) => (e ? Armor.toJSON(e) : undefined));
    } else {
      obj.Armors = [];
    }
    if (message.Affinities) {
      obj.Affinities = message.Affinities.map((e) =>
        e ? Affinty.toJSON(e) : undefined
      );
    } else {
      obj.Affinities = [];
    }
    if (message.Orbs) {
      obj.Orbs = message.Orbs.map((e) => (e ? Orb.toJSON(e) : undefined));
    } else {
      obj.Orbs = [];
    }
    message.ActionCount !== undefined &&
      (obj.ActionCount = Math.round(message.ActionCount));
    message.DefensiveReactions !== undefined &&
      (obj.DefensiveReactions = Math.round(message.DefensiveReactions));
    if (message.ManualModifications) {
      obj.ManualModifications = message.ManualModifications.map((e) =>
        e ? Modification.toJSON(e) : undefined
      );
    } else {
      obj.ManualModifications = [];
    }
    message.ManualRoll !== undefined && (obj.ManualRoll = message.ManualRoll);
    message.Token !== undefined && (obj.Token = message.Token);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Character>, I>>(
    object: I
  ): Character {
    const message = createBaseCharacter();
    message.ID = object.ID ?? "";
    message.Name = object.Name ?? "";
    message.Metadata =
      object.Metadata !== undefined && object.Metadata !== null
        ? CharacterMetadata.fromPartial(object.Metadata)
        : undefined;
    message.Options =
      object.Options !== undefined && object.Options !== null
        ? CharacterOptions.fromPartial(object.Options)
        : undefined;
    message.Attributes =
      object.Attributes !== undefined && object.Attributes !== null
        ? CharacterAttributes.fromPartial(object.Attributes)
        : undefined;
    message.Health =
      object.Health !== undefined && object.Health !== null
        ? CharacterHealth.fromPartial(object.Health)
        : undefined;
    message.Skills = object.Skills?.map((e) => Skill.fromPartial(e)) || [];
    message.Weapons = object.Weapons?.map((e) => Weapon.fromPartial(e)) || [];
    message.Armors = object.Armors?.map((e) => Armor.fromPartial(e)) || [];
    message.Affinities =
      object.Affinities?.map((e) => Affinty.fromPartial(e)) || [];
    message.Orbs = object.Orbs?.map((e) => Orb.fromPartial(e)) || [];
    message.ActionCount = object.ActionCount ?? 0;
    message.DefensiveReactions = object.DefensiveReactions ?? 0;
    message.ManualModifications =
      object.ManualModifications?.map((e) => Modification.fromPartial(e)) || [];
    message.ManualRoll = object.ManualRoll ?? false;
    message.Token = object.Token ?? "";
    return message;
  },
};

function createBaseAffinty(): Affinty {
  return { School: "", Points: 0 };
}

export const Affinty = {
  encode(
    message: Affinty,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.School !== "") {
      writer.uint32(10).string(message.School);
    }
    if (message.Points !== 0) {
      writer.uint32(16).int32(message.Points);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Affinty {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAffinty();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.School = reader.string();
          break;
        case 2:
          message.Points = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Affinty {
    return {
      School: isSet(object.School) ? String(object.School) : "",
      Points: isSet(object.Points) ? Number(object.Points) : 0,
    };
  },

  toJSON(message: Affinty): unknown {
    const obj: any = {};
    message.School !== undefined && (obj.School = message.School);
    message.Points !== undefined && (obj.Points = Math.round(message.Points));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Affinty>, I>>(object: I): Affinty {
    const message = createBaseAffinty();
    message.School = object.School ?? "";
    message.Points = object.Points ?? 0;
    return message;
  },
};

function createBasePicture(): Picture {
  return { ID: "", Type: 0, GameID: "", Tag: "", Data: "" };
}

export const Picture = {
  encode(
    message: Picture,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.ID !== "") {
      writer.uint32(10).string(message.ID);
    }
    if (message.Type !== 0) {
      writer.uint32(16).int32(message.Type);
    }
    if (message.GameID !== "") {
      writer.uint32(26).string(message.GameID);
    }
    if (message.Tag !== "") {
      writer.uint32(34).string(message.Tag);
    }
    if (message.Data !== "") {
      writer.uint32(794).string(message.Data);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Picture {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePicture();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.ID = reader.string();
          break;
        case 2:
          message.Type = reader.int32() as any;
          break;
        case 3:
          message.GameID = reader.string();
          break;
        case 4:
          message.Tag = reader.string();
          break;
        case 99:
          message.Data = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Picture {
    return {
      ID: isSet(object.ID) ? String(object.ID) : "",
      Type: isSet(object.Type) ? modelTypeFromJSON(object.Type) : 0,
      GameID: isSet(object.GameID) ? String(object.GameID) : "",
      Tag: isSet(object.Tag) ? String(object.Tag) : "",
      Data: isSet(object.Data) ? String(object.Data) : "",
    };
  },

  toJSON(message: Picture): unknown {
    const obj: any = {};
    message.ID !== undefined && (obj.ID = message.ID);
    message.Type !== undefined && (obj.Type = modelTypeToJSON(message.Type));
    message.GameID !== undefined && (obj.GameID = message.GameID);
    message.Tag !== undefined && (obj.Tag = message.Tag);
    message.Data !== undefined && (obj.Data = message.Data);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Picture>, I>>(object: I): Picture {
    const message = createBasePicture();
    message.ID = object.ID ?? "";
    message.Type = object.Type ?? 0;
    message.GameID = object.GameID ?? "";
    message.Tag = object.Tag ?? "";
    message.Data = object.Data ?? "";
    return message;
  },
};

function createBaseCharacterCreation(): CharacterCreation {
  return {
    AttributeAllocationMethod: 0,
    AttributePointsRemaining: 0,
    SkillPoints: 0,
    SkillPointsRemaining: 0,
    StartingMoney: undefined,
    AffinityPoints: 0,
    AffinityPointsRemaining: 0,
  };
}

export const CharacterCreation = {
  encode(
    message: CharacterCreation,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.AttributeAllocationMethod !== 0) {
      writer.uint32(8).int32(message.AttributeAllocationMethod);
    }
    if (message.AttributePointsRemaining !== 0) {
      writer.uint32(16).int32(message.AttributePointsRemaining);
    }
    if (message.SkillPoints !== 0) {
      writer.uint32(24).int32(message.SkillPoints);
    }
    if (message.SkillPointsRemaining !== 0) {
      writer.uint32(32).int32(message.SkillPointsRemaining);
    }
    if (message.StartingMoney !== undefined) {
      MonetaryAmount.encode(
        message.StartingMoney,
        writer.uint32(42).fork()
      ).ldelim();
    }
    if (message.AffinityPoints !== 0) {
      writer.uint32(48).int32(message.AffinityPoints);
    }
    if (message.AffinityPointsRemaining !== 0) {
      writer.uint32(56).int32(message.AffinityPointsRemaining);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CharacterCreation {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCharacterCreation();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.AttributeAllocationMethod = reader.int32() as any;
          break;
        case 2:
          message.AttributePointsRemaining = reader.int32();
          break;
        case 3:
          message.SkillPoints = reader.int32();
          break;
        case 4:
          message.SkillPointsRemaining = reader.int32();
          break;
        case 5:
          message.StartingMoney = MonetaryAmount.decode(
            reader,
            reader.uint32()
          );
          break;
        case 6:
          message.AffinityPoints = reader.int32();
          break;
        case 7:
          message.AffinityPointsRemaining = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CharacterCreation {
    return {
      AttributeAllocationMethod: isSet(object.AttributeAllocationMethod)
        ? attributeAllocationMethodFromJSON(object.AttributeAllocationMethod)
        : 0,
      AttributePointsRemaining: isSet(object.AttributePointsRemaining)
        ? Number(object.AttributePointsRemaining)
        : 0,
      SkillPoints: isSet(object.SkillPoints) ? Number(object.SkillPoints) : 0,
      SkillPointsRemaining: isSet(object.SkillPointsRemaining)
        ? Number(object.SkillPointsRemaining)
        : 0,
      StartingMoney: isSet(object.StartingMoney)
        ? MonetaryAmount.fromJSON(object.StartingMoney)
        : undefined,
      AffinityPoints: isSet(object.AffinityPoints)
        ? Number(object.AffinityPoints)
        : 0,
      AffinityPointsRemaining: isSet(object.AffinityPointsRemaining)
        ? Number(object.AffinityPointsRemaining)
        : 0,
    };
  },

  toJSON(message: CharacterCreation): unknown {
    const obj: any = {};
    message.AttributeAllocationMethod !== undefined &&
      (obj.AttributeAllocationMethod = attributeAllocationMethodToJSON(
        message.AttributeAllocationMethod
      ));
    message.AttributePointsRemaining !== undefined &&
      (obj.AttributePointsRemaining = Math.round(
        message.AttributePointsRemaining
      ));
    message.SkillPoints !== undefined &&
      (obj.SkillPoints = Math.round(message.SkillPoints));
    message.SkillPointsRemaining !== undefined &&
      (obj.SkillPointsRemaining = Math.round(message.SkillPointsRemaining));
    message.StartingMoney !== undefined &&
      (obj.StartingMoney = message.StartingMoney
        ? MonetaryAmount.toJSON(message.StartingMoney)
        : undefined);
    message.AffinityPoints !== undefined &&
      (obj.AffinityPoints = Math.round(message.AffinityPoints));
    message.AffinityPointsRemaining !== undefined &&
      (obj.AffinityPointsRemaining = Math.round(
        message.AffinityPointsRemaining
      ));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CharacterCreation>, I>>(
    object: I
  ): CharacterCreation {
    const message = createBaseCharacterCreation();
    message.AttributeAllocationMethod = object.AttributeAllocationMethod ?? 0;
    message.AttributePointsRemaining = object.AttributePointsRemaining ?? 0;
    message.SkillPoints = object.SkillPoints ?? 0;
    message.SkillPointsRemaining = object.SkillPointsRemaining ?? 0;
    message.StartingMoney =
      object.StartingMoney !== undefined && object.StartingMoney !== null
        ? MonetaryAmount.fromPartial(object.StartingMoney)
        : undefined;
    message.AffinityPoints = object.AffinityPoints ?? 0;
    message.AffinityPointsRemaining = object.AffinityPointsRemaining ?? 0;
    return message;
  },
};

function createBaseCharacterMetadata(): CharacterMetadata {
  return {
    PlayerName: "",
    Backstory: "",
    Height: "",
    Weight: "",
    Race: "",
    EyeColor: "",
    HairColor: "",
  };
}

export const CharacterMetadata = {
  encode(
    message: CharacterMetadata,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.PlayerName !== "") {
      writer.uint32(10).string(message.PlayerName);
    }
    if (message.Backstory !== "") {
      writer.uint32(18).string(message.Backstory);
    }
    if (message.Height !== "") {
      writer.uint32(26).string(message.Height);
    }
    if (message.Weight !== "") {
      writer.uint32(34).string(message.Weight);
    }
    if (message.Race !== "") {
      writer.uint32(42).string(message.Race);
    }
    if (message.EyeColor !== "") {
      writer.uint32(50).string(message.EyeColor);
    }
    if (message.HairColor !== "") {
      writer.uint32(58).string(message.HairColor);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CharacterMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCharacterMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.PlayerName = reader.string();
          break;
        case 2:
          message.Backstory = reader.string();
          break;
        case 3:
          message.Height = reader.string();
          break;
        case 4:
          message.Weight = reader.string();
          break;
        case 5:
          message.Race = reader.string();
          break;
        case 6:
          message.EyeColor = reader.string();
          break;
        case 7:
          message.HairColor = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CharacterMetadata {
    return {
      PlayerName: isSet(object.PlayerName) ? String(object.PlayerName) : "",
      Backstory: isSet(object.Backstory) ? String(object.Backstory) : "",
      Height: isSet(object.Height) ? String(object.Height) : "",
      Weight: isSet(object.Weight) ? String(object.Weight) : "",
      Race: isSet(object.Race) ? String(object.Race) : "",
      EyeColor: isSet(object.EyeColor) ? String(object.EyeColor) : "",
      HairColor: isSet(object.HairColor) ? String(object.HairColor) : "",
    };
  },

  toJSON(message: CharacterMetadata): unknown {
    const obj: any = {};
    message.PlayerName !== undefined && (obj.PlayerName = message.PlayerName);
    message.Backstory !== undefined && (obj.Backstory = message.Backstory);
    message.Height !== undefined && (obj.Height = message.Height);
    message.Weight !== undefined && (obj.Weight = message.Weight);
    message.Race !== undefined && (obj.Race = message.Race);
    message.EyeColor !== undefined && (obj.EyeColor = message.EyeColor);
    message.HairColor !== undefined && (obj.HairColor = message.HairColor);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CharacterMetadata>, I>>(
    object: I
  ): CharacterMetadata {
    const message = createBaseCharacterMetadata();
    message.PlayerName = object.PlayerName ?? "";
    message.Backstory = object.Backstory ?? "";
    message.Height = object.Height ?? "";
    message.Weight = object.Weight ?? "";
    message.Race = object.Race ?? "";
    message.EyeColor = object.EyeColor ?? "";
    message.HairColor = object.HairColor ?? "";
    return message;
  },
};

function createBaseGameSession(): GameSession {
  return { DiceLog: undefined, ChatLog: undefined };
}

export const GameSession = {
  encode(
    message: GameSession,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.DiceLog !== undefined) {
      DiceRollLog.encode(message.DiceLog, writer.uint32(10).fork()).ldelim();
    }
    if (message.ChatLog !== undefined) {
      ChatLog.encode(message.ChatLog, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GameSession {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGameSession();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.DiceLog = DiceRollLog.decode(reader, reader.uint32());
          break;
        case 2:
          message.ChatLog = ChatLog.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GameSession {
    return {
      DiceLog: isSet(object.DiceLog)
        ? DiceRollLog.fromJSON(object.DiceLog)
        : undefined,
      ChatLog: isSet(object.ChatLog)
        ? ChatLog.fromJSON(object.ChatLog)
        : undefined,
    };
  },

  toJSON(message: GameSession): unknown {
    const obj: any = {};
    message.DiceLog !== undefined &&
      (obj.DiceLog = message.DiceLog
        ? DiceRollLog.toJSON(message.DiceLog)
        : undefined);
    message.ChatLog !== undefined &&
      (obj.ChatLog = message.ChatLog
        ? ChatLog.toJSON(message.ChatLog)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GameSession>, I>>(
    object: I
  ): GameSession {
    const message = createBaseGameSession();
    message.DiceLog =
      object.DiceLog !== undefined && object.DiceLog !== null
        ? DiceRollLog.fromPartial(object.DiceLog)
        : undefined;
    message.ChatLog =
      object.ChatLog !== undefined && object.ChatLog !== null
        ? ChatLog.fromPartial(object.ChatLog)
        : undefined;
    return message;
  },
};

function createBaseChatLog(): ChatLog {
  return { Rolls: [] };
}

export const ChatLog = {
  encode(
    message: ChatLog,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.Rolls) {
      DiceRollResults.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ChatLog {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseChatLog();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.Rolls.push(DiceRollResults.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ChatLog {
    return {
      Rolls: Array.isArray(object?.Rolls)
        ? object.Rolls.map((e: any) => DiceRollResults.fromJSON(e))
        : [],
    };
  },

  toJSON(message: ChatLog): unknown {
    const obj: any = {};
    if (message.Rolls) {
      obj.Rolls = message.Rolls.map((e) =>
        e ? DiceRollResults.toJSON(e) : undefined
      );
    } else {
      obj.Rolls = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ChatLog>, I>>(object: I): ChatLog {
    const message = createBaseChatLog();
    message.Rolls =
      object.Rolls?.map((e) => DiceRollResults.fromPartial(e)) || [];
    return message;
  },
};

function createBaseDiceRollLog(): DiceRollLog {
  return { Rolls: [] };
}

export const DiceRollLog = {
  encode(
    message: DiceRollLog,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.Rolls) {
      DiceRollResults.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DiceRollLog {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDiceRollLog();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.Rolls.push(DiceRollResults.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DiceRollLog {
    return {
      Rolls: Array.isArray(object?.Rolls)
        ? object.Rolls.map((e: any) => DiceRollResults.fromJSON(e))
        : [],
    };
  },

  toJSON(message: DiceRollLog): unknown {
    const obj: any = {};
    if (message.Rolls) {
      obj.Rolls = message.Rolls.map((e) =>
        e ? DiceRollResults.toJSON(e) : undefined
      );
    } else {
      obj.Rolls = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<DiceRollLog>, I>>(
    object: I
  ): DiceRollLog {
    const message = createBaseDiceRollLog();
    message.Rolls =
      object.Rolls?.map((e) => DiceRollResults.fromPartial(e)) || [];
    return message;
  },
};

function createBaseEncounter(): Encounter {
  return {
    ID: "",
    Name: "",
    Active: false,
    CurrentRound: 0,
    CurrentTurn: 0,
    InitiativeOrders: [],
    Characters: [],
    Rounds: [],
    LocalEntities: [],
    StartTime: 0,
  };
}

export const Encounter = {
  encode(
    message: Encounter,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.ID !== "") {
      writer.uint32(10).string(message.ID);
    }
    if (message.Name !== "") {
      writer.uint32(18).string(message.Name);
    }
    if (message.Active === true) {
      writer.uint32(24).bool(message.Active);
    }
    if (message.CurrentRound !== 0) {
      writer.uint32(32).int32(message.CurrentRound);
    }
    if (message.CurrentTurn !== 0) {
      writer.uint32(40).int32(message.CurrentTurn);
    }
    for (const v of message.InitiativeOrders) {
      InitiativeOrder.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    for (const v of message.Characters) {
      writer.uint32(58).string(v!);
    }
    for (const v of message.Rounds) {
      Round.encode(v!, writer.uint32(66).fork()).ldelim();
    }
    for (const v of message.LocalEntities) {
      Character.encode(v!, writer.uint32(74).fork()).ldelim();
    }
    if (message.StartTime !== 0) {
      writer.uint32(80).int64(message.StartTime);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Encounter {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEncounter();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.ID = reader.string();
          break;
        case 2:
          message.Name = reader.string();
          break;
        case 3:
          message.Active = reader.bool();
          break;
        case 4:
          message.CurrentRound = reader.int32();
          break;
        case 5:
          message.CurrentTurn = reader.int32();
          break;
        case 6:
          message.InitiativeOrders.push(
            InitiativeOrder.decode(reader, reader.uint32())
          );
          break;
        case 7:
          message.Characters.push(reader.string());
          break;
        case 8:
          message.Rounds.push(Round.decode(reader, reader.uint32()));
          break;
        case 9:
          message.LocalEntities.push(Character.decode(reader, reader.uint32()));
          break;
        case 10:
          message.StartTime = longToNumber(reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Encounter {
    return {
      ID: isSet(object.ID) ? String(object.ID) : "",
      Name: isSet(object.Name) ? String(object.Name) : "",
      Active: isSet(object.Active) ? Boolean(object.Active) : false,
      CurrentRound: isSet(object.CurrentRound)
        ? Number(object.CurrentRound)
        : 0,
      CurrentTurn: isSet(object.CurrentTurn) ? Number(object.CurrentTurn) : 0,
      InitiativeOrders: Array.isArray(object?.InitiativeOrders)
        ? object.InitiativeOrders.map((e: any) => InitiativeOrder.fromJSON(e))
        : [],
      Characters: Array.isArray(object?.Characters)
        ? object.Characters.map((e: any) => String(e))
        : [],
      Rounds: Array.isArray(object?.Rounds)
        ? object.Rounds.map((e: any) => Round.fromJSON(e))
        : [],
      LocalEntities: Array.isArray(object?.LocalEntities)
        ? object.LocalEntities.map((e: any) => Character.fromJSON(e))
        : [],
      StartTime: isSet(object.StartTime) ? Number(object.StartTime) : 0,
    };
  },

  toJSON(message: Encounter): unknown {
    const obj: any = {};
    message.ID !== undefined && (obj.ID = message.ID);
    message.Name !== undefined && (obj.Name = message.Name);
    message.Active !== undefined && (obj.Active = message.Active);
    message.CurrentRound !== undefined &&
      (obj.CurrentRound = Math.round(message.CurrentRound));
    message.CurrentTurn !== undefined &&
      (obj.CurrentTurn = Math.round(message.CurrentTurn));
    if (message.InitiativeOrders) {
      obj.InitiativeOrders = message.InitiativeOrders.map((e) =>
        e ? InitiativeOrder.toJSON(e) : undefined
      );
    } else {
      obj.InitiativeOrders = [];
    }
    if (message.Characters) {
      obj.Characters = message.Characters.map((e) => e);
    } else {
      obj.Characters = [];
    }
    if (message.Rounds) {
      obj.Rounds = message.Rounds.map((e) => (e ? Round.toJSON(e) : undefined));
    } else {
      obj.Rounds = [];
    }
    if (message.LocalEntities) {
      obj.LocalEntities = message.LocalEntities.map((e) =>
        e ? Character.toJSON(e) : undefined
      );
    } else {
      obj.LocalEntities = [];
    }
    message.StartTime !== undefined &&
      (obj.StartTime = Math.round(message.StartTime));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Encounter>, I>>(
    object: I
  ): Encounter {
    const message = createBaseEncounter();
    message.ID = object.ID ?? "";
    message.Name = object.Name ?? "";
    message.Active = object.Active ?? false;
    message.CurrentRound = object.CurrentRound ?? 0;
    message.CurrentTurn = object.CurrentTurn ?? 0;
    message.InitiativeOrders =
      object.InitiativeOrders?.map((e) => InitiativeOrder.fromPartial(e)) || [];
    message.Characters = object.Characters?.map((e) => e) || [];
    message.Rounds = object.Rounds?.map((e) => Round.fromPartial(e)) || [];
    message.LocalEntities =
      object.LocalEntities?.map((e) => Character.fromPartial(e)) || [];
    message.StartTime = object.StartTime ?? 0;
    return message;
  },
};

function createBaseRound(): Round {
  return {
    RoundNumber: 0,
    Turns: [],
    DefensiveReactions: [],
    BorrowedReactions: [],
  };
}

export const Round = {
  encode(message: Round, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.RoundNumber !== 0) {
      writer.uint32(8).int32(message.RoundNumber);
    }
    for (const v of message.Turns) {
      Turn.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.DefensiveReactions) {
      DefensiveReaction.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.BorrowedReactions) {
      DefensiveReaction.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Round {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRound();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.RoundNumber = reader.int32();
          break;
        case 2:
          message.Turns.push(Turn.decode(reader, reader.uint32()));
          break;
        case 3:
          message.DefensiveReactions.push(
            DefensiveReaction.decode(reader, reader.uint32())
          );
          break;
        case 4:
          message.BorrowedReactions.push(
            DefensiveReaction.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Round {
    return {
      RoundNumber: isSet(object.RoundNumber) ? Number(object.RoundNumber) : 0,
      Turns: Array.isArray(object?.Turns)
        ? object.Turns.map((e: any) => Turn.fromJSON(e))
        : [],
      DefensiveReactions: Array.isArray(object?.DefensiveReactions)
        ? object.DefensiveReactions.map((e: any) =>
            DefensiveReaction.fromJSON(e)
          )
        : [],
      BorrowedReactions: Array.isArray(object?.BorrowedReactions)
        ? object.BorrowedReactions.map((e: any) =>
            DefensiveReaction.fromJSON(e)
          )
        : [],
    };
  },

  toJSON(message: Round): unknown {
    const obj: any = {};
    message.RoundNumber !== undefined &&
      (obj.RoundNumber = Math.round(message.RoundNumber));
    if (message.Turns) {
      obj.Turns = message.Turns.map((e) => (e ? Turn.toJSON(e) : undefined));
    } else {
      obj.Turns = [];
    }
    if (message.DefensiveReactions) {
      obj.DefensiveReactions = message.DefensiveReactions.map((e) =>
        e ? DefensiveReaction.toJSON(e) : undefined
      );
    } else {
      obj.DefensiveReactions = [];
    }
    if (message.BorrowedReactions) {
      obj.BorrowedReactions = message.BorrowedReactions.map((e) =>
        e ? DefensiveReaction.toJSON(e) : undefined
      );
    } else {
      obj.BorrowedReactions = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Round>, I>>(object: I): Round {
    const message = createBaseRound();
    message.RoundNumber = object.RoundNumber ?? 0;
    message.Turns = object.Turns?.map((e) => Turn.fromPartial(e)) || [];
    message.DefensiveReactions =
      object.DefensiveReactions?.map((e) => DefensiveReaction.fromPartial(e)) ||
      [];
    message.BorrowedReactions =
      object.BorrowedReactions?.map((e) => DefensiveReaction.fromPartial(e)) ||
      [];
    return message;
  },
};

function createBaseTurn(): Turn {
  return { Order: 0, CharacterId: "", Actions: 0, Status: 0 };
}

export const Turn = {
  encode(message: Turn, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.Order !== 0) {
      writer.uint32(9).double(message.Order);
    }
    if (message.CharacterId !== "") {
      writer.uint32(18).string(message.CharacterId);
    }
    if (message.Actions !== 0) {
      writer.uint32(24).int32(message.Actions);
    }
    if (message.Status !== 0) {
      writer.uint32(32).int32(message.Status);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Turn {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTurn();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.Order = reader.double();
          break;
        case 2:
          message.CharacterId = reader.string();
          break;
        case 3:
          message.Actions = reader.int32();
          break;
        case 4:
          message.Status = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Turn {
    return {
      Order: isSet(object.Order) ? Number(object.Order) : 0,
      CharacterId: isSet(object.CharacterId) ? String(object.CharacterId) : "",
      Actions: isSet(object.Actions) ? Number(object.Actions) : 0,
      Status: isSet(object.Status) ? turnStatusFromJSON(object.Status) : 0,
    };
  },

  toJSON(message: Turn): unknown {
    const obj: any = {};
    message.Order !== undefined && (obj.Order = message.Order);
    message.CharacterId !== undefined &&
      (obj.CharacterId = message.CharacterId);
    message.Actions !== undefined &&
      (obj.Actions = Math.round(message.Actions));
    message.Status !== undefined &&
      (obj.Status = turnStatusToJSON(message.Status));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Turn>, I>>(object: I): Turn {
    const message = createBaseTurn();
    message.Order = object.Order ?? 0;
    message.CharacterId = object.CharacterId ?? "";
    message.Actions = object.Actions ?? 0;
    message.Status = object.Status ?? 0;
    return message;
  },
};

function createBaseDefensiveReaction(): DefensiveReaction {
  return { EntityID: "", TurnIndex: 0 };
}

export const DefensiveReaction = {
  encode(
    message: DefensiveReaction,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.EntityID !== "") {
      writer.uint32(10).string(message.EntityID);
    }
    if (message.TurnIndex !== 0) {
      writer.uint32(16).int32(message.TurnIndex);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DefensiveReaction {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDefensiveReaction();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.EntityID = reader.string();
          break;
        case 2:
          message.TurnIndex = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DefensiveReaction {
    return {
      EntityID: isSet(object.EntityID) ? String(object.EntityID) : "",
      TurnIndex: isSet(object.TurnIndex) ? Number(object.TurnIndex) : 0,
    };
  },

  toJSON(message: DefensiveReaction): unknown {
    const obj: any = {};
    message.EntityID !== undefined && (obj.EntityID = message.EntityID);
    message.TurnIndex !== undefined &&
      (obj.TurnIndex = Math.round(message.TurnIndex));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<DefensiveReaction>, I>>(
    object: I
  ): DefensiveReaction {
    const message = createBaseDefensiveReaction();
    message.EntityID = object.EntityID ?? "";
    message.TurnIndex = object.TurnIndex ?? 0;
    return message;
  },
};

function createBaseEntityReference(): EntityReference {
  return { ID: "", Type: 0 };
}

export const EntityReference = {
  encode(
    message: EntityReference,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.ID !== "") {
      writer.uint32(10).string(message.ID);
    }
    if (message.Type !== 0) {
      writer.uint32(16).int32(message.Type);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EntityReference {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEntityReference();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.ID = reader.string();
          break;
        case 2:
          message.Type = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EntityReference {
    return {
      ID: isSet(object.ID) ? String(object.ID) : "",
      Type: isSet(object.Type) ? entityTypeFromJSON(object.Type) : 0,
    };
  },

  toJSON(message: EntityReference): unknown {
    const obj: any = {};
    message.ID !== undefined && (obj.ID = message.ID);
    message.Type !== undefined && (obj.Type = entityTypeToJSON(message.Type));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EntityReference>, I>>(
    object: I
  ): EntityReference {
    const message = createBaseEntityReference();
    message.ID = object.ID ?? "";
    message.Type = object.Type ?? 0;
    return message;
  },
};

function createBaseInitiativeOrder(): InitiativeOrder {
  return { EntityID: "", Value: 0, DiceRollResults: undefined };
}

export const InitiativeOrder = {
  encode(
    message: InitiativeOrder,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.EntityID !== "") {
      writer.uint32(10).string(message.EntityID);
    }
    if (message.Value !== 0) {
      writer.uint32(24).int32(message.Value);
    }
    if (message.DiceRollResults !== undefined) {
      DiceRollResults.encode(
        message.DiceRollResults,
        writer.uint32(34).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): InitiativeOrder {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseInitiativeOrder();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.EntityID = reader.string();
          break;
        case 3:
          message.Value = reader.int32();
          break;
        case 4:
          message.DiceRollResults = DiceRollResults.decode(
            reader,
            reader.uint32()
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): InitiativeOrder {
    return {
      EntityID: isSet(object.EntityID) ? String(object.EntityID) : "",
      Value: isSet(object.Value) ? Number(object.Value) : 0,
      DiceRollResults: isSet(object.DiceRollResults)
        ? DiceRollResults.fromJSON(object.DiceRollResults)
        : undefined,
    };
  },

  toJSON(message: InitiativeOrder): unknown {
    const obj: any = {};
    message.EntityID !== undefined && (obj.EntityID = message.EntityID);
    message.Value !== undefined && (obj.Value = Math.round(message.Value));
    message.DiceRollResults !== undefined &&
      (obj.DiceRollResults = message.DiceRollResults
        ? DiceRollResults.toJSON(message.DiceRollResults)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<InitiativeOrder>, I>>(
    object: I
  ): InitiativeOrder {
    const message = createBaseInitiativeOrder();
    message.EntityID = object.EntityID ?? "";
    message.Value = object.Value ?? 0;
    message.DiceRollResults =
      object.DiceRollResults !== undefined && object.DiceRollResults !== null
        ? DiceRollResults.fromPartial(object.DiceRollResults)
        : undefined;
    return message;
  },
};

function createBaseChallengeDiceRoll(): ChallengeDiceRoll {
  return { ID: "", ChallengeType: "", RollRequested: "", Text: "" };
}

export const ChallengeDiceRoll = {
  encode(
    message: ChallengeDiceRoll,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.ID !== "") {
      writer.uint32(10).string(message.ID);
    }
    if (message.ChallengeType !== "") {
      writer.uint32(18).string(message.ChallengeType);
    }
    if (message.RollRequested !== "") {
      writer.uint32(26).string(message.RollRequested);
    }
    if (message.Text !== "") {
      writer.uint32(34).string(message.Text);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ChallengeDiceRoll {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseChallengeDiceRoll();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.ID = reader.string();
          break;
        case 2:
          message.ChallengeType = reader.string();
          break;
        case 3:
          message.RollRequested = reader.string();
          break;
        case 4:
          message.Text = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ChallengeDiceRoll {
    return {
      ID: isSet(object.ID) ? String(object.ID) : "",
      ChallengeType: isSet(object.ChallengeType)
        ? String(object.ChallengeType)
        : "",
      RollRequested: isSet(object.RollRequested)
        ? String(object.RollRequested)
        : "",
      Text: isSet(object.Text) ? String(object.Text) : "",
    };
  },

  toJSON(message: ChallengeDiceRoll): unknown {
    const obj: any = {};
    message.ID !== undefined && (obj.ID = message.ID);
    message.ChallengeType !== undefined &&
      (obj.ChallengeType = message.ChallengeType);
    message.RollRequested !== undefined &&
      (obj.RollRequested = message.RollRequested);
    message.Text !== undefined && (obj.Text = message.Text);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ChallengeDiceRoll>, I>>(
    object: I
  ): ChallengeDiceRoll {
    const message = createBaseChallengeDiceRoll();
    message.ID = object.ID ?? "";
    message.ChallengeType = object.ChallengeType ?? "";
    message.RollRequested = object.RollRequested ?? "";
    message.Text = object.Text ?? "";
    return message;
  },
};

function createBaseChallengeDiceRollResult(): ChallengeDiceRollResult {
  return { ChallengeID: "", Result: "" };
}

export const ChallengeDiceRollResult = {
  encode(
    message: ChallengeDiceRollResult,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.ChallengeID !== "") {
      writer.uint32(10).string(message.ChallengeID);
    }
    if (message.Result !== "") {
      writer.uint32(18).string(message.Result);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ChallengeDiceRollResult {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseChallengeDiceRollResult();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.ChallengeID = reader.string();
          break;
        case 2:
          message.Result = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ChallengeDiceRollResult {
    return {
      ChallengeID: isSet(object.ChallengeID) ? String(object.ChallengeID) : "",
      Result: isSet(object.Result) ? String(object.Result) : "",
    };
  },

  toJSON(message: ChallengeDiceRollResult): unknown {
    const obj: any = {};
    message.ChallengeID !== undefined &&
      (obj.ChallengeID = message.ChallengeID);
    message.Result !== undefined && (obj.Result = message.Result);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ChallengeDiceRollResult>, I>>(
    object: I
  ): ChallengeDiceRollResult {
    const message = createBaseChallengeDiceRollResult();
    message.ChallengeID = object.ChallengeID ?? "";
    message.Result = object.Result ?? "";
    return message;
  },
};

function createBasePlayerOptions(): PlayerOptions {
  return {};
}

export const PlayerOptions = {
  encode(
    _: PlayerOptions,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PlayerOptions {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePlayerOptions();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): PlayerOptions {
    return {};
  },

  toJSON(_: PlayerOptions): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<PlayerOptions>, I>>(
    _: I
  ): PlayerOptions {
    const message = createBasePlayerOptions();
    return message;
  },
};

function createBaseCharacterOptions(): CharacterOptions {
  return { RollMyOwnDice: false };
}

export const CharacterOptions = {
  encode(
    message: CharacterOptions,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.RollMyOwnDice === true) {
      writer.uint32(8).bool(message.RollMyOwnDice);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CharacterOptions {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCharacterOptions();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.RollMyOwnDice = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CharacterOptions {
    return {
      RollMyOwnDice: isSet(object.RollMyOwnDice)
        ? Boolean(object.RollMyOwnDice)
        : false,
    };
  },

  toJSON(message: CharacterOptions): unknown {
    const obj: any = {};
    message.RollMyOwnDice !== undefined &&
      (obj.RollMyOwnDice = message.RollMyOwnDice);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CharacterOptions>, I>>(
    object: I
  ): CharacterOptions {
    const message = createBaseCharacterOptions();
    message.RollMyOwnDice = object.RollMyOwnDice ?? false;
    return message;
  },
};

function createBaseCharacterAttributes(): CharacterAttributes {
  return {
    BOD: undefined,
    WILL: undefined,
    REF: undefined,
    VIT: undefined,
    INT: undefined,
    LUCK: undefined,
    TECH: undefined,
    ATTR: undefined,
    ESS: undefined,
    PER: undefined,
    Mana: undefined,
    Stamina: undefined,
    Initiative: undefined,
    Awarness: undefined,
  };
}

export const CharacterAttributes = {
  encode(
    message: CharacterAttributes,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.BOD !== undefined) {
      PrimaryAttribute.encode(message.BOD, writer.uint32(10).fork()).ldelim();
    }
    if (message.WILL !== undefined) {
      PrimaryAttribute.encode(message.WILL, writer.uint32(18).fork()).ldelim();
    }
    if (message.REF !== undefined) {
      PrimaryAttribute.encode(message.REF, writer.uint32(26).fork()).ldelim();
    }
    if (message.VIT !== undefined) {
      PrimaryAttribute.encode(message.VIT, writer.uint32(34).fork()).ldelim();
    }
    if (message.INT !== undefined) {
      PrimaryAttribute.encode(message.INT, writer.uint32(42).fork()).ldelim();
    }
    if (message.LUCK !== undefined) {
      PrimaryAttribute.encode(message.LUCK, writer.uint32(50).fork()).ldelim();
    }
    if (message.TECH !== undefined) {
      PrimaryAttribute.encode(message.TECH, writer.uint32(58).fork()).ldelim();
    }
    if (message.ATTR !== undefined) {
      PrimaryAttribute.encode(message.ATTR, writer.uint32(66).fork()).ldelim();
    }
    if (message.ESS !== undefined) {
      PrimaryAttribute.encode(message.ESS, writer.uint32(74).fork()).ldelim();
    }
    if (message.PER !== undefined) {
      PrimaryAttribute.encode(message.PER, writer.uint32(82).fork()).ldelim();
    }
    if (message.Mana !== undefined) {
      ConsumableAttribute.encode(
        message.Mana,
        writer.uint32(90).fork()
      ).ldelim();
    }
    if (message.Stamina !== undefined) {
      ConsumableAttribute.encode(
        message.Stamina,
        writer.uint32(98).fork()
      ).ldelim();
    }
    if (message.Initiative !== undefined) {
      CalculatedValue.encode(
        message.Initiative,
        writer.uint32(106).fork()
      ).ldelim();
    }
    if (message.Awarness !== undefined) {
      CalculatedValue.encode(
        message.Awarness,
        writer.uint32(114).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CharacterAttributes {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCharacterAttributes();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.BOD = PrimaryAttribute.decode(reader, reader.uint32());
          break;
        case 2:
          message.WILL = PrimaryAttribute.decode(reader, reader.uint32());
          break;
        case 3:
          message.REF = PrimaryAttribute.decode(reader, reader.uint32());
          break;
        case 4:
          message.VIT = PrimaryAttribute.decode(reader, reader.uint32());
          break;
        case 5:
          message.INT = PrimaryAttribute.decode(reader, reader.uint32());
          break;
        case 6:
          message.LUCK = PrimaryAttribute.decode(reader, reader.uint32());
          break;
        case 7:
          message.TECH = PrimaryAttribute.decode(reader, reader.uint32());
          break;
        case 8:
          message.ATTR = PrimaryAttribute.decode(reader, reader.uint32());
          break;
        case 9:
          message.ESS = PrimaryAttribute.decode(reader, reader.uint32());
          break;
        case 10:
          message.PER = PrimaryAttribute.decode(reader, reader.uint32());
          break;
        case 11:
          message.Mana = ConsumableAttribute.decode(reader, reader.uint32());
          break;
        case 12:
          message.Stamina = ConsumableAttribute.decode(reader, reader.uint32());
          break;
        case 13:
          message.Initiative = CalculatedValue.decode(reader, reader.uint32());
          break;
        case 14:
          message.Awarness = CalculatedValue.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CharacterAttributes {
    return {
      BOD: isSet(object.BOD)
        ? PrimaryAttribute.fromJSON(object.BOD)
        : undefined,
      WILL: isSet(object.WILL)
        ? PrimaryAttribute.fromJSON(object.WILL)
        : undefined,
      REF: isSet(object.REF)
        ? PrimaryAttribute.fromJSON(object.REF)
        : undefined,
      VIT: isSet(object.VIT)
        ? PrimaryAttribute.fromJSON(object.VIT)
        : undefined,
      INT: isSet(object.INT)
        ? PrimaryAttribute.fromJSON(object.INT)
        : undefined,
      LUCK: isSet(object.LUCK)
        ? PrimaryAttribute.fromJSON(object.LUCK)
        : undefined,
      TECH: isSet(object.TECH)
        ? PrimaryAttribute.fromJSON(object.TECH)
        : undefined,
      ATTR: isSet(object.ATTR)
        ? PrimaryAttribute.fromJSON(object.ATTR)
        : undefined,
      ESS: isSet(object.ESS)
        ? PrimaryAttribute.fromJSON(object.ESS)
        : undefined,
      PER: isSet(object.PER)
        ? PrimaryAttribute.fromJSON(object.PER)
        : undefined,
      Mana: isSet(object.Mana)
        ? ConsumableAttribute.fromJSON(object.Mana)
        : undefined,
      Stamina: isSet(object.Stamina)
        ? ConsumableAttribute.fromJSON(object.Stamina)
        : undefined,
      Initiative: isSet(object.Initiative)
        ? CalculatedValue.fromJSON(object.Initiative)
        : undefined,
      Awarness: isSet(object.Awarness)
        ? CalculatedValue.fromJSON(object.Awarness)
        : undefined,
    };
  },

  toJSON(message: CharacterAttributes): unknown {
    const obj: any = {};
    message.BOD !== undefined &&
      (obj.BOD = message.BOD
        ? PrimaryAttribute.toJSON(message.BOD)
        : undefined);
    message.WILL !== undefined &&
      (obj.WILL = message.WILL
        ? PrimaryAttribute.toJSON(message.WILL)
        : undefined);
    message.REF !== undefined &&
      (obj.REF = message.REF
        ? PrimaryAttribute.toJSON(message.REF)
        : undefined);
    message.VIT !== undefined &&
      (obj.VIT = message.VIT
        ? PrimaryAttribute.toJSON(message.VIT)
        : undefined);
    message.INT !== undefined &&
      (obj.INT = message.INT
        ? PrimaryAttribute.toJSON(message.INT)
        : undefined);
    message.LUCK !== undefined &&
      (obj.LUCK = message.LUCK
        ? PrimaryAttribute.toJSON(message.LUCK)
        : undefined);
    message.TECH !== undefined &&
      (obj.TECH = message.TECH
        ? PrimaryAttribute.toJSON(message.TECH)
        : undefined);
    message.ATTR !== undefined &&
      (obj.ATTR = message.ATTR
        ? PrimaryAttribute.toJSON(message.ATTR)
        : undefined);
    message.ESS !== undefined &&
      (obj.ESS = message.ESS
        ? PrimaryAttribute.toJSON(message.ESS)
        : undefined);
    message.PER !== undefined &&
      (obj.PER = message.PER
        ? PrimaryAttribute.toJSON(message.PER)
        : undefined);
    message.Mana !== undefined &&
      (obj.Mana = message.Mana
        ? ConsumableAttribute.toJSON(message.Mana)
        : undefined);
    message.Stamina !== undefined &&
      (obj.Stamina = message.Stamina
        ? ConsumableAttribute.toJSON(message.Stamina)
        : undefined);
    message.Initiative !== undefined &&
      (obj.Initiative = message.Initiative
        ? CalculatedValue.toJSON(message.Initiative)
        : undefined);
    message.Awarness !== undefined &&
      (obj.Awarness = message.Awarness
        ? CalculatedValue.toJSON(message.Awarness)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CharacterAttributes>, I>>(
    object: I
  ): CharacterAttributes {
    const message = createBaseCharacterAttributes();
    message.BOD =
      object.BOD !== undefined && object.BOD !== null
        ? PrimaryAttribute.fromPartial(object.BOD)
        : undefined;
    message.WILL =
      object.WILL !== undefined && object.WILL !== null
        ? PrimaryAttribute.fromPartial(object.WILL)
        : undefined;
    message.REF =
      object.REF !== undefined && object.REF !== null
        ? PrimaryAttribute.fromPartial(object.REF)
        : undefined;
    message.VIT =
      object.VIT !== undefined && object.VIT !== null
        ? PrimaryAttribute.fromPartial(object.VIT)
        : undefined;
    message.INT =
      object.INT !== undefined && object.INT !== null
        ? PrimaryAttribute.fromPartial(object.INT)
        : undefined;
    message.LUCK =
      object.LUCK !== undefined && object.LUCK !== null
        ? PrimaryAttribute.fromPartial(object.LUCK)
        : undefined;
    message.TECH =
      object.TECH !== undefined && object.TECH !== null
        ? PrimaryAttribute.fromPartial(object.TECH)
        : undefined;
    message.ATTR =
      object.ATTR !== undefined && object.ATTR !== null
        ? PrimaryAttribute.fromPartial(object.ATTR)
        : undefined;
    message.ESS =
      object.ESS !== undefined && object.ESS !== null
        ? PrimaryAttribute.fromPartial(object.ESS)
        : undefined;
    message.PER =
      object.PER !== undefined && object.PER !== null
        ? PrimaryAttribute.fromPartial(object.PER)
        : undefined;
    message.Mana =
      object.Mana !== undefined && object.Mana !== null
        ? ConsumableAttribute.fromPartial(object.Mana)
        : undefined;
    message.Stamina =
      object.Stamina !== undefined && object.Stamina !== null
        ? ConsumableAttribute.fromPartial(object.Stamina)
        : undefined;
    message.Initiative =
      object.Initiative !== undefined && object.Initiative !== null
        ? CalculatedValue.fromPartial(object.Initiative)
        : undefined;
    message.Awarness =
      object.Awarness !== undefined && object.Awarness !== null
        ? CalculatedValue.fromPartial(object.Awarness)
        : undefined;
    return message;
  },
};

function createBasePrimaryAttribute(): PrimaryAttribute {
  return { RawValue: 0, SetValue: 0, CalcValue: 0 };
}

export const PrimaryAttribute = {
  encode(
    message: PrimaryAttribute,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.RawValue !== 0) {
      writer.uint32(16).int32(message.RawValue);
    }
    if (message.SetValue !== 0) {
      writer.uint32(24).int32(message.SetValue);
    }
    if (message.CalcValue !== 0) {
      writer.uint32(32).int32(message.CalcValue);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PrimaryAttribute {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePrimaryAttribute();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          message.RawValue = reader.int32();
          break;
        case 3:
          message.SetValue = reader.int32();
          break;
        case 4:
          message.CalcValue = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PrimaryAttribute {
    return {
      RawValue: isSet(object.RawValue) ? Number(object.RawValue) : 0,
      SetValue: isSet(object.SetValue) ? Number(object.SetValue) : 0,
      CalcValue: isSet(object.CalcValue) ? Number(object.CalcValue) : 0,
    };
  },

  toJSON(message: PrimaryAttribute): unknown {
    const obj: any = {};
    message.RawValue !== undefined &&
      (obj.RawValue = Math.round(message.RawValue));
    message.SetValue !== undefined &&
      (obj.SetValue = Math.round(message.SetValue));
    message.CalcValue !== undefined &&
      (obj.CalcValue = Math.round(message.CalcValue));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<PrimaryAttribute>, I>>(
    object: I
  ): PrimaryAttribute {
    const message = createBasePrimaryAttribute();
    message.RawValue = object.RawValue ?? 0;
    message.SetValue = object.SetValue ?? 0;
    message.CalcValue = object.CalcValue ?? 0;
    return message;
  },
};

function createBaseConsumableAttribute(): ConsumableAttribute {
  return { MaxValue: 0, SetValue: 0, RegenPerRound: 0, RegenPerMinute: 0 };
}

export const ConsumableAttribute = {
  encode(
    message: ConsumableAttribute,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.MaxValue !== 0) {
      writer.uint32(8).int32(message.MaxValue);
    }
    if (message.SetValue !== 0) {
      writer.uint32(16).int32(message.SetValue);
    }
    if (message.RegenPerRound !== 0) {
      writer.uint32(29).float(message.RegenPerRound);
    }
    if (message.RegenPerMinute !== 0) {
      writer.uint32(37).float(message.RegenPerMinute);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ConsumableAttribute {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseConsumableAttribute();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.MaxValue = reader.int32();
          break;
        case 2:
          message.SetValue = reader.int32();
          break;
        case 3:
          message.RegenPerRound = reader.float();
          break;
        case 4:
          message.RegenPerMinute = reader.float();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ConsumableAttribute {
    return {
      MaxValue: isSet(object.MaxValue) ? Number(object.MaxValue) : 0,
      SetValue: isSet(object.SetValue) ? Number(object.SetValue) : 0,
      RegenPerRound: isSet(object.RegenPerRound)
        ? Number(object.RegenPerRound)
        : 0,
      RegenPerMinute: isSet(object.RegenPerMinute)
        ? Number(object.RegenPerMinute)
        : 0,
    };
  },

  toJSON(message: ConsumableAttribute): unknown {
    const obj: any = {};
    message.MaxValue !== undefined &&
      (obj.MaxValue = Math.round(message.MaxValue));
    message.SetValue !== undefined &&
      (obj.SetValue = Math.round(message.SetValue));
    message.RegenPerRound !== undefined &&
      (obj.RegenPerRound = message.RegenPerRound);
    message.RegenPerMinute !== undefined &&
      (obj.RegenPerMinute = message.RegenPerMinute);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ConsumableAttribute>, I>>(
    object: I
  ): ConsumableAttribute {
    const message = createBaseConsumableAttribute();
    message.MaxValue = object.MaxValue ?? 0;
    message.SetValue = object.SetValue ?? 0;
    message.RegenPerRound = object.RegenPerRound ?? 0;
    message.RegenPerMinute = object.RegenPerMinute ?? 0;
    return message;
  },
};

function createBaseCalculatedValue(): CalculatedValue {
  return { Value: 0 };
}

export const CalculatedValue = {
  encode(
    message: CalculatedValue,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.Value !== 0) {
      writer.uint32(8).int32(message.Value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CalculatedValue {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCalculatedValue();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.Value = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CalculatedValue {
    return {
      Value: isSet(object.Value) ? Number(object.Value) : 0,
    };
  },

  toJSON(message: CalculatedValue): unknown {
    const obj: any = {};
    message.Value !== undefined && (obj.Value = Math.round(message.Value));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CalculatedValue>, I>>(
    object: I
  ): CalculatedValue {
    const message = createBaseCalculatedValue();
    message.Value = object.Value ?? 0;
    return message;
  },
};

function createBaseAttack(): Attack {
  return {
    Attacker: "",
    Target: "",
    AttackType: 0,
    Description: "",
    Weapon: "",
  };
}

export const Attack = {
  encode(
    message: Attack,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.Attacker !== "") {
      writer.uint32(10).string(message.Attacker);
    }
    if (message.Target !== "") {
      writer.uint32(18).string(message.Target);
    }
    if (message.AttackType !== 0) {
      writer.uint32(24).int32(message.AttackType);
    }
    if (message.Description !== "") {
      writer.uint32(34).string(message.Description);
    }
    if (message.Weapon !== "") {
      writer.uint32(42).string(message.Weapon);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Attack {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAttack();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.Attacker = reader.string();
          break;
        case 2:
          message.Target = reader.string();
          break;
        case 3:
          message.AttackType = reader.int32() as any;
          break;
        case 4:
          message.Description = reader.string();
          break;
        case 5:
          message.Weapon = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Attack {
    return {
      Attacker: isSet(object.Attacker) ? String(object.Attacker) : "",
      Target: isSet(object.Target) ? String(object.Target) : "",
      AttackType: isSet(object.AttackType)
        ? attackTypeFromJSON(object.AttackType)
        : 0,
      Description: isSet(object.Description) ? String(object.Description) : "",
      Weapon: isSet(object.Weapon) ? String(object.Weapon) : "",
    };
  },

  toJSON(message: Attack): unknown {
    const obj: any = {};
    message.Attacker !== undefined && (obj.Attacker = message.Attacker);
    message.Target !== undefined && (obj.Target = message.Target);
    message.AttackType !== undefined &&
      (obj.AttackType = attackTypeToJSON(message.AttackType));
    message.Description !== undefined &&
      (obj.Description = message.Description);
    message.Weapon !== undefined && (obj.Weapon = message.Weapon);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Attack>, I>>(object: I): Attack {
    const message = createBaseAttack();
    message.Attacker = object.Attacker ?? "";
    message.Target = object.Target ?? "";
    message.AttackType = object.AttackType ?? 0;
    message.Description = object.Description ?? "";
    message.Weapon = object.Weapon ?? "";
    return message;
  },
};

function createBaseAttackResult(): AttackResult {
  return {
    Attack: undefined,
    Defense: undefined,
    AttackTotal: 0,
    DefenseTotal: 0,
    AttackDamage: 0,
    ShieldSP: 0,
    ArmorSP: 0,
    ShieldDamaged: false,
    ArmorDamaged: false,
    DamageInflicted: 0,
  };
}

export const AttackResult = {
  encode(
    message: AttackResult,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.Attack !== undefined) {
      Attack.encode(message.Attack, writer.uint32(10).fork()).ldelim();
    }
    if (message.Defense !== undefined) {
      DefenseOption.encode(message.Defense, writer.uint32(18).fork()).ldelim();
    }
    if (message.AttackTotal !== 0) {
      writer.uint32(24).int32(message.AttackTotal);
    }
    if (message.DefenseTotal !== 0) {
      writer.uint32(32).int32(message.DefenseTotal);
    }
    if (message.AttackDamage !== 0) {
      writer.uint32(40).int32(message.AttackDamage);
    }
    if (message.ShieldSP !== 0) {
      writer.uint32(48).int32(message.ShieldSP);
    }
    if (message.ArmorSP !== 0) {
      writer.uint32(56).int32(message.ArmorSP);
    }
    if (message.ShieldDamaged === true) {
      writer.uint32(64).bool(message.ShieldDamaged);
    }
    if (message.ArmorDamaged === true) {
      writer.uint32(72).bool(message.ArmorDamaged);
    }
    if (message.DamageInflicted !== 0) {
      writer.uint32(80).int32(message.DamageInflicted);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AttackResult {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAttackResult();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.Attack = Attack.decode(reader, reader.uint32());
          break;
        case 2:
          message.Defense = DefenseOption.decode(reader, reader.uint32());
          break;
        case 3:
          message.AttackTotal = reader.int32();
          break;
        case 4:
          message.DefenseTotal = reader.int32();
          break;
        case 5:
          message.AttackDamage = reader.int32();
          break;
        case 6:
          message.ShieldSP = reader.int32();
          break;
        case 7:
          message.ArmorSP = reader.int32();
          break;
        case 8:
          message.ShieldDamaged = reader.bool();
          break;
        case 9:
          message.ArmorDamaged = reader.bool();
          break;
        case 10:
          message.DamageInflicted = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AttackResult {
    return {
      Attack: isSet(object.Attack) ? Attack.fromJSON(object.Attack) : undefined,
      Defense: isSet(object.Defense)
        ? DefenseOption.fromJSON(object.Defense)
        : undefined,
      AttackTotal: isSet(object.AttackTotal) ? Number(object.AttackTotal) : 0,
      DefenseTotal: isSet(object.DefenseTotal)
        ? Number(object.DefenseTotal)
        : 0,
      AttackDamage: isSet(object.AttackDamage)
        ? Number(object.AttackDamage)
        : 0,
      ShieldSP: isSet(object.ShieldSP) ? Number(object.ShieldSP) : 0,
      ArmorSP: isSet(object.ArmorSP) ? Number(object.ArmorSP) : 0,
      ShieldDamaged: isSet(object.ShieldDamaged)
        ? Boolean(object.ShieldDamaged)
        : false,
      ArmorDamaged: isSet(object.ArmorDamaged)
        ? Boolean(object.ArmorDamaged)
        : false,
      DamageInflicted: isSet(object.DamageInflicted)
        ? Number(object.DamageInflicted)
        : 0,
    };
  },

  toJSON(message: AttackResult): unknown {
    const obj: any = {};
    message.Attack !== undefined &&
      (obj.Attack = message.Attack ? Attack.toJSON(message.Attack) : undefined);
    message.Defense !== undefined &&
      (obj.Defense = message.Defense
        ? DefenseOption.toJSON(message.Defense)
        : undefined);
    message.AttackTotal !== undefined &&
      (obj.AttackTotal = Math.round(message.AttackTotal));
    message.DefenseTotal !== undefined &&
      (obj.DefenseTotal = Math.round(message.DefenseTotal));
    message.AttackDamage !== undefined &&
      (obj.AttackDamage = Math.round(message.AttackDamage));
    message.ShieldSP !== undefined &&
      (obj.ShieldSP = Math.round(message.ShieldSP));
    message.ArmorSP !== undefined &&
      (obj.ArmorSP = Math.round(message.ArmorSP));
    message.ShieldDamaged !== undefined &&
      (obj.ShieldDamaged = message.ShieldDamaged);
    message.ArmorDamaged !== undefined &&
      (obj.ArmorDamaged = message.ArmorDamaged);
    message.DamageInflicted !== undefined &&
      (obj.DamageInflicted = Math.round(message.DamageInflicted));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<AttackResult>, I>>(
    object: I
  ): AttackResult {
    const message = createBaseAttackResult();
    message.Attack =
      object.Attack !== undefined && object.Attack !== null
        ? Attack.fromPartial(object.Attack)
        : undefined;
    message.Defense =
      object.Defense !== undefined && object.Defense !== null
        ? DefenseOption.fromPartial(object.Defense)
        : undefined;
    message.AttackTotal = object.AttackTotal ?? 0;
    message.DefenseTotal = object.DefenseTotal ?? 0;
    message.AttackDamage = object.AttackDamage ?? 0;
    message.ShieldSP = object.ShieldSP ?? 0;
    message.ArmorSP = object.ArmorSP ?? 0;
    message.ShieldDamaged = object.ShieldDamaged ?? false;
    message.ArmorDamaged = object.ArmorDamaged ?? false;
    message.DamageInflicted = object.DamageInflicted ?? 0;
    return message;
  },
};

function createBaseDefenseChallenge(): DefenseChallenge {
  return { Attack: undefined, DefenseOptions: [] };
}

export const DefenseChallenge = {
  encode(
    message: DefenseChallenge,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.Attack !== undefined) {
      Attack.encode(message.Attack, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.DefenseOptions) {
      DefenseOption.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DefenseChallenge {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDefenseChallenge();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.Attack = Attack.decode(reader, reader.uint32());
          break;
        case 2:
          message.DefenseOptions.push(
            DefenseOption.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DefenseChallenge {
    return {
      Attack: isSet(object.Attack) ? Attack.fromJSON(object.Attack) : undefined,
      DefenseOptions: Array.isArray(object?.DefenseOptions)
        ? object.DefenseOptions.map((e: any) => DefenseOption.fromJSON(e))
        : [],
    };
  },

  toJSON(message: DefenseChallenge): unknown {
    const obj: any = {};
    message.Attack !== undefined &&
      (obj.Attack = message.Attack ? Attack.toJSON(message.Attack) : undefined);
    if (message.DefenseOptions) {
      obj.DefenseOptions = message.DefenseOptions.map((e) =>
        e ? DefenseOption.toJSON(e) : undefined
      );
    } else {
      obj.DefenseOptions = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<DefenseChallenge>, I>>(
    object: I
  ): DefenseChallenge {
    const message = createBaseDefenseChallenge();
    message.Attack =
      object.Attack !== undefined && object.Attack !== null
        ? Attack.fromPartial(object.Attack)
        : undefined;
    message.DefenseOptions =
      object.DefenseOptions?.map((e) => DefenseOption.fromPartial(e)) || [];
    return message;
  },
};

function createBaseDefenseChallengeResponse(): DefenseChallengeResponse {
  return { Challenge: undefined, Choice: undefined };
}

export const DefenseChallengeResponse = {
  encode(
    message: DefenseChallengeResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.Challenge !== undefined) {
      DefenseChallenge.encode(
        message.Challenge,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.Choice !== undefined) {
      DefenseOption.encode(message.Choice, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): DefenseChallengeResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDefenseChallengeResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.Challenge = DefenseChallenge.decode(reader, reader.uint32());
          break;
        case 2:
          message.Choice = DefenseOption.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DefenseChallengeResponse {
    return {
      Challenge: isSet(object.Challenge)
        ? DefenseChallenge.fromJSON(object.Challenge)
        : undefined,
      Choice: isSet(object.Choice)
        ? DefenseOption.fromJSON(object.Choice)
        : undefined,
    };
  },

  toJSON(message: DefenseChallengeResponse): unknown {
    const obj: any = {};
    message.Challenge !== undefined &&
      (obj.Challenge = message.Challenge
        ? DefenseChallenge.toJSON(message.Challenge)
        : undefined);
    message.Choice !== undefined &&
      (obj.Choice = message.Choice
        ? DefenseOption.toJSON(message.Choice)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<DefenseChallengeResponse>, I>>(
    object: I
  ): DefenseChallengeResponse {
    const message = createBaseDefenseChallengeResponse();
    message.Challenge =
      object.Challenge !== undefined && object.Challenge !== null
        ? DefenseChallenge.fromPartial(object.Challenge)
        : undefined;
    message.Choice =
      object.Choice !== undefined && object.Choice !== null
        ? DefenseOption.fromPartial(object.Choice)
        : undefined;
    return message;
  },
};

function createBaseDefenseOption(): DefenseOption {
  return { DefenseType: 0, DefenseItem: "", Description: "", DefenseTotal: 0 };
}

export const DefenseOption = {
  encode(
    message: DefenseOption,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.DefenseType !== 0) {
      writer.uint32(8).int32(message.DefenseType);
    }
    if (message.DefenseItem !== "") {
      writer.uint32(18).string(message.DefenseItem);
    }
    if (message.Description !== "") {
      writer.uint32(26).string(message.Description);
    }
    if (message.DefenseTotal !== 0) {
      writer.uint32(32).int32(message.DefenseTotal);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DefenseOption {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDefenseOption();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.DefenseType = reader.int32() as any;
          break;
        case 2:
          message.DefenseItem = reader.string();
          break;
        case 3:
          message.Description = reader.string();
          break;
        case 4:
          message.DefenseTotal = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DefenseOption {
    return {
      DefenseType: isSet(object.DefenseType)
        ? defenseTypeFromJSON(object.DefenseType)
        : 0,
      DefenseItem: isSet(object.DefenseItem) ? String(object.DefenseItem) : "",
      Description: isSet(object.Description) ? String(object.Description) : "",
      DefenseTotal: isSet(object.DefenseTotal)
        ? Number(object.DefenseTotal)
        : 0,
    };
  },

  toJSON(message: DefenseOption): unknown {
    const obj: any = {};
    message.DefenseType !== undefined &&
      (obj.DefenseType = defenseTypeToJSON(message.DefenseType));
    message.DefenseItem !== undefined &&
      (obj.DefenseItem = message.DefenseItem);
    message.Description !== undefined &&
      (obj.Description = message.Description);
    message.DefenseTotal !== undefined &&
      (obj.DefenseTotal = Math.round(message.DefenseTotal));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<DefenseOption>, I>>(
    object: I
  ): DefenseOption {
    const message = createBaseDefenseOption();
    message.DefenseType = object.DefenseType ?? 0;
    message.DefenseItem = object.DefenseItem ?? "";
    message.Description = object.Description ?? "";
    message.DefenseTotal = object.DefenseTotal ?? 0;
    return message;
  },
};

function createBaseCharacterHealth(): CharacterHealth {
  return {
    LightLevels: 0,
    SeriousLevels: 0,
    CriticalLevels: 0,
    MortalLevels: 0,
    CurrentWounds: 0,
    CurrentWoundState: 0,
    MortalN: 0,
  };
}

export const CharacterHealth = {
  encode(
    message: CharacterHealth,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.LightLevels !== 0) {
      writer.uint32(8).int32(message.LightLevels);
    }
    if (message.SeriousLevels !== 0) {
      writer.uint32(16).int32(message.SeriousLevels);
    }
    if (message.CriticalLevels !== 0) {
      writer.uint32(24).int32(message.CriticalLevels);
    }
    if (message.MortalLevels !== 0) {
      writer.uint32(32).int32(message.MortalLevels);
    }
    if (message.CurrentWounds !== 0) {
      writer.uint32(40).int32(message.CurrentWounds);
    }
    if (message.CurrentWoundState !== 0) {
      writer.uint32(48).int32(message.CurrentWoundState);
    }
    if (message.MortalN !== 0) {
      writer.uint32(56).int32(message.MortalN);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CharacterHealth {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCharacterHealth();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.LightLevels = reader.int32();
          break;
        case 2:
          message.SeriousLevels = reader.int32();
          break;
        case 3:
          message.CriticalLevels = reader.int32();
          break;
        case 4:
          message.MortalLevels = reader.int32();
          break;
        case 5:
          message.CurrentWounds = reader.int32();
          break;
        case 6:
          message.CurrentWoundState = reader.int32() as any;
          break;
        case 7:
          message.MortalN = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CharacterHealth {
    return {
      LightLevels: isSet(object.LightLevels) ? Number(object.LightLevels) : 0,
      SeriousLevels: isSet(object.SeriousLevels)
        ? Number(object.SeriousLevels)
        : 0,
      CriticalLevels: isSet(object.CriticalLevels)
        ? Number(object.CriticalLevels)
        : 0,
      MortalLevels: isSet(object.MortalLevels)
        ? Number(object.MortalLevels)
        : 0,
      CurrentWounds: isSet(object.CurrentWounds)
        ? Number(object.CurrentWounds)
        : 0,
      CurrentWoundState: isSet(object.CurrentWoundState)
        ? woundStateFromJSON(object.CurrentWoundState)
        : 0,
      MortalN: isSet(object.MortalN) ? Number(object.MortalN) : 0,
    };
  },

  toJSON(message: CharacterHealth): unknown {
    const obj: any = {};
    message.LightLevels !== undefined &&
      (obj.LightLevels = Math.round(message.LightLevels));
    message.SeriousLevels !== undefined &&
      (obj.SeriousLevels = Math.round(message.SeriousLevels));
    message.CriticalLevels !== undefined &&
      (obj.CriticalLevels = Math.round(message.CriticalLevels));
    message.MortalLevels !== undefined &&
      (obj.MortalLevels = Math.round(message.MortalLevels));
    message.CurrentWounds !== undefined &&
      (obj.CurrentWounds = Math.round(message.CurrentWounds));
    message.CurrentWoundState !== undefined &&
      (obj.CurrentWoundState = woundStateToJSON(message.CurrentWoundState));
    message.MortalN !== undefined &&
      (obj.MortalN = Math.round(message.MortalN));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CharacterHealth>, I>>(
    object: I
  ): CharacterHealth {
    const message = createBaseCharacterHealth();
    message.LightLevels = object.LightLevels ?? 0;
    message.SeriousLevels = object.SeriousLevels ?? 0;
    message.CriticalLevels = object.CriticalLevels ?? 0;
    message.MortalLevels = object.MortalLevels ?? 0;
    message.CurrentWounds = object.CurrentWounds ?? 0;
    message.CurrentWoundState = object.CurrentWoundState ?? 0;
    message.MortalN = object.MortalN ?? 0;
    return message;
  },
};

function createBaseSkill(): Skill {
  return { ID: "", Level: 0, IPs: 0, Mod: 0, Total: 0 };
}

export const Skill = {
  encode(message: Skill, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.ID !== "") {
      writer.uint32(10).string(message.ID);
    }
    if (message.Level !== 0) {
      writer.uint32(16).int32(message.Level);
    }
    if (message.IPs !== 0) {
      writer.uint32(24).int32(message.IPs);
    }
    if (message.Mod !== 0) {
      writer.uint32(32).int32(message.Mod);
    }
    if (message.Total !== 0) {
      writer.uint32(40).int32(message.Total);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Skill {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSkill();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.ID = reader.string();
          break;
        case 2:
          message.Level = reader.int32();
          break;
        case 3:
          message.IPs = reader.int32();
          break;
        case 4:
          message.Mod = reader.int32();
          break;
        case 5:
          message.Total = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Skill {
    return {
      ID: isSet(object.ID) ? String(object.ID) : "",
      Level: isSet(object.Level) ? Number(object.Level) : 0,
      IPs: isSet(object.IPs) ? Number(object.IPs) : 0,
      Mod: isSet(object.Mod) ? Number(object.Mod) : 0,
      Total: isSet(object.Total) ? Number(object.Total) : 0,
    };
  },

  toJSON(message: Skill): unknown {
    const obj: any = {};
    message.ID !== undefined && (obj.ID = message.ID);
    message.Level !== undefined && (obj.Level = Math.round(message.Level));
    message.IPs !== undefined && (obj.IPs = Math.round(message.IPs));
    message.Mod !== undefined && (obj.Mod = Math.round(message.Mod));
    message.Total !== undefined && (obj.Total = Math.round(message.Total));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Skill>, I>>(object: I): Skill {
    const message = createBaseSkill();
    message.ID = object.ID ?? "";
    message.Level = object.Level ?? 0;
    message.IPs = object.IPs ?? 0;
    message.Mod = object.Mod ?? 0;
    message.Total = object.Total ?? 0;
    return message;
  },
};

function createBaseCalculatedCharacterSkill(): CalculatedCharacterSkill {
  return { Skill: undefined, AttrBase: 0, Mods: 0, Value: 0 };
}

export const CalculatedCharacterSkill = {
  encode(
    message: CalculatedCharacterSkill,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.Skill !== undefined) {
      Skill.encode(message.Skill, writer.uint32(10).fork()).ldelim();
    }
    if (message.AttrBase !== 0) {
      writer.uint32(16).int32(message.AttrBase);
    }
    if (message.Mods !== 0) {
      writer.uint32(24).int32(message.Mods);
    }
    if (message.Value !== 0) {
      writer.uint32(32).int32(message.Value);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): CalculatedCharacterSkill {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCalculatedCharacterSkill();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.Skill = Skill.decode(reader, reader.uint32());
          break;
        case 2:
          message.AttrBase = reader.int32();
          break;
        case 3:
          message.Mods = reader.int32();
          break;
        case 4:
          message.Value = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CalculatedCharacterSkill {
    return {
      Skill: isSet(object.Skill) ? Skill.fromJSON(object.Skill) : undefined,
      AttrBase: isSet(object.AttrBase) ? Number(object.AttrBase) : 0,
      Mods: isSet(object.Mods) ? Number(object.Mods) : 0,
      Value: isSet(object.Value) ? Number(object.Value) : 0,
    };
  },

  toJSON(message: CalculatedCharacterSkill): unknown {
    const obj: any = {};
    message.Skill !== undefined &&
      (obj.Skill = message.Skill ? Skill.toJSON(message.Skill) : undefined);
    message.AttrBase !== undefined &&
      (obj.AttrBase = Math.round(message.AttrBase));
    message.Mods !== undefined && (obj.Mods = Math.round(message.Mods));
    message.Value !== undefined && (obj.Value = Math.round(message.Value));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CalculatedCharacterSkill>, I>>(
    object: I
  ): CalculatedCharacterSkill {
    const message = createBaseCalculatedCharacterSkill();
    message.Skill =
      object.Skill !== undefined && object.Skill !== null
        ? Skill.fromPartial(object.Skill)
        : undefined;
    message.AttrBase = object.AttrBase ?? 0;
    message.Mods = object.Mods ?? 0;
    message.Value = object.Value ?? 0;
    return message;
  },
};

function createBaseRefSkill(): RefSkill {
  return {
    ID: "",
    Name: "",
    Description: "",
    AttributeType: 0,
    Restrictions: "",
    Abilities: [],
  };
}

export const RefSkill = {
  encode(
    message: RefSkill,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.ID !== "") {
      writer.uint32(10).string(message.ID);
    }
    if (message.Name !== "") {
      writer.uint32(18).string(message.Name);
    }
    if (message.Description !== "") {
      writer.uint32(26).string(message.Description);
    }
    if (message.AttributeType !== 0) {
      writer.uint32(32).int32(message.AttributeType);
    }
    if (message.Restrictions !== "") {
      writer.uint32(42).string(message.Restrictions);
    }
    for (const v of message.Abilities) {
      Ability.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RefSkill {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRefSkill();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.ID = reader.string();
          break;
        case 2:
          message.Name = reader.string();
          break;
        case 3:
          message.Description = reader.string();
          break;
        case 4:
          message.AttributeType = reader.int32() as any;
          break;
        case 5:
          message.Restrictions = reader.string();
          break;
        case 6:
          message.Abilities.push(Ability.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RefSkill {
    return {
      ID: isSet(object.ID) ? String(object.ID) : "",
      Name: isSet(object.Name) ? String(object.Name) : "",
      Description: isSet(object.Description) ? String(object.Description) : "",
      AttributeType: isSet(object.AttributeType)
        ? primaryAttributeValFromJSON(object.AttributeType)
        : 0,
      Restrictions: isSet(object.Restrictions)
        ? String(object.Restrictions)
        : "",
      Abilities: Array.isArray(object?.Abilities)
        ? object.Abilities.map((e: any) => Ability.fromJSON(e))
        : [],
    };
  },

  toJSON(message: RefSkill): unknown {
    const obj: any = {};
    message.ID !== undefined && (obj.ID = message.ID);
    message.Name !== undefined && (obj.Name = message.Name);
    message.Description !== undefined &&
      (obj.Description = message.Description);
    message.AttributeType !== undefined &&
      (obj.AttributeType = primaryAttributeValToJSON(message.AttributeType));
    message.Restrictions !== undefined &&
      (obj.Restrictions = message.Restrictions);
    if (message.Abilities) {
      obj.Abilities = message.Abilities.map((e) =>
        e ? Ability.toJSON(e) : undefined
      );
    } else {
      obj.Abilities = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<RefSkill>, I>>(object: I): RefSkill {
    const message = createBaseRefSkill();
    message.ID = object.ID ?? "";
    message.Name = object.Name ?? "";
    message.Description = object.Description ?? "";
    message.AttributeType = object.AttributeType ?? 0;
    message.Restrictions = object.Restrictions ?? "";
    message.Abilities =
      object.Abilities?.map((e) => Ability.fromPartial(e)) || [];
    return message;
  },
};

function createBaseAbility(): Ability {
  return {
    ID: "",
    Name: "",
    Description: "",
    SkillLevelUnlock: "",
    CanAttackWith: false,
    CanDefendWith: false,
  };
}

export const Ability = {
  encode(
    message: Ability,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.ID !== "") {
      writer.uint32(10).string(message.ID);
    }
    if (message.Name !== "") {
      writer.uint32(18).string(message.Name);
    }
    if (message.Description !== "") {
      writer.uint32(26).string(message.Description);
    }
    if (message.SkillLevelUnlock !== "") {
      writer.uint32(34).string(message.SkillLevelUnlock);
    }
    if (message.CanAttackWith === true) {
      writer.uint32(40).bool(message.CanAttackWith);
    }
    if (message.CanDefendWith === true) {
      writer.uint32(48).bool(message.CanDefendWith);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Ability {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAbility();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.ID = reader.string();
          break;
        case 2:
          message.Name = reader.string();
          break;
        case 3:
          message.Description = reader.string();
          break;
        case 4:
          message.SkillLevelUnlock = reader.string();
          break;
        case 5:
          message.CanAttackWith = reader.bool();
          break;
        case 6:
          message.CanDefendWith = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Ability {
    return {
      ID: isSet(object.ID) ? String(object.ID) : "",
      Name: isSet(object.Name) ? String(object.Name) : "",
      Description: isSet(object.Description) ? String(object.Description) : "",
      SkillLevelUnlock: isSet(object.SkillLevelUnlock)
        ? String(object.SkillLevelUnlock)
        : "",
      CanAttackWith: isSet(object.CanAttackWith)
        ? Boolean(object.CanAttackWith)
        : false,
      CanDefendWith: isSet(object.CanDefendWith)
        ? Boolean(object.CanDefendWith)
        : false,
    };
  },

  toJSON(message: Ability): unknown {
    const obj: any = {};
    message.ID !== undefined && (obj.ID = message.ID);
    message.Name !== undefined && (obj.Name = message.Name);
    message.Description !== undefined &&
      (obj.Description = message.Description);
    message.SkillLevelUnlock !== undefined &&
      (obj.SkillLevelUnlock = message.SkillLevelUnlock);
    message.CanAttackWith !== undefined &&
      (obj.CanAttackWith = message.CanAttackWith);
    message.CanDefendWith !== undefined &&
      (obj.CanDefendWith = message.CanDefendWith);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Ability>, I>>(object: I): Ability {
    const message = createBaseAbility();
    message.ID = object.ID ?? "";
    message.Name = object.Name ?? "";
    message.Description = object.Description ?? "";
    message.SkillLevelUnlock = object.SkillLevelUnlock ?? "";
    message.CanAttackWith = object.CanAttackWith ?? false;
    message.CanDefendWith = object.CanDefendWith ?? false;
    return message;
  },
};

function createBaseMonetaryAmount(): MonetaryAmount {
  return { CP: 0, SP: 0, GP: 0, PP: 0 };
}

export const MonetaryAmount = {
  encode(
    message: MonetaryAmount,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.CP !== 0) {
      writer.uint32(8).int32(message.CP);
    }
    if (message.SP !== 0) {
      writer.uint32(16).int32(message.SP);
    }
    if (message.GP !== 0) {
      writer.uint32(24).int32(message.GP);
    }
    if (message.PP !== 0) {
      writer.uint32(32).int32(message.PP);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MonetaryAmount {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMonetaryAmount();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.CP = reader.int32();
          break;
        case 2:
          message.SP = reader.int32();
          break;
        case 3:
          message.GP = reader.int32();
          break;
        case 4:
          message.PP = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MonetaryAmount {
    return {
      CP: isSet(object.CP) ? Number(object.CP) : 0,
      SP: isSet(object.SP) ? Number(object.SP) : 0,
      GP: isSet(object.GP) ? Number(object.GP) : 0,
      PP: isSet(object.PP) ? Number(object.PP) : 0,
    };
  },

  toJSON(message: MonetaryAmount): unknown {
    const obj: any = {};
    message.CP !== undefined && (obj.CP = Math.round(message.CP));
    message.SP !== undefined && (obj.SP = Math.round(message.SP));
    message.GP !== undefined && (obj.GP = Math.round(message.GP));
    message.PP !== undefined && (obj.PP = Math.round(message.PP));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MonetaryAmount>, I>>(
    object: I
  ): MonetaryAmount {
    const message = createBaseMonetaryAmount();
    message.CP = object.CP ?? 0;
    message.SP = object.SP ?? 0;
    message.GP = object.GP ?? 0;
    message.PP = object.PP ?? 0;
    return message;
  },
};

function createBaseIconPicture(): IconPicture {
  return { Icon: "", Picture: "" };
}

export const IconPicture = {
  encode(
    message: IconPicture,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.Icon !== "") {
      writer.uint32(10).string(message.Icon);
    }
    if (message.Picture !== "") {
      writer.uint32(18).string(message.Picture);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): IconPicture {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseIconPicture();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.Icon = reader.string();
          break;
        case 2:
          message.Picture = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): IconPicture {
    return {
      Icon: isSet(object.Icon) ? String(object.Icon) : "",
      Picture: isSet(object.Picture) ? String(object.Picture) : "",
    };
  },

  toJSON(message: IconPicture): unknown {
    const obj: any = {};
    message.Icon !== undefined && (obj.Icon = message.Icon);
    message.Picture !== undefined && (obj.Picture = message.Picture);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<IconPicture>, I>>(
    object: I
  ): IconPicture {
    const message = createBaseIconPicture();
    message.Icon = object.Icon ?? "";
    message.Picture = object.Picture ?? "";
    return message;
  },
};

function createBaseRefWeapon(): RefWeapon {
  return {
    ID: "",
    Name: "",
    Description: "",
    Damage1H: "",
    Damage2H: "",
    BaseWeaponAccuracy: 0,
    DefenseModifier: 0,
    DefenseType: 0,
    Cost: undefined,
    Rarity: 0,
    RangeFt: 0,
    RequiredSkill: "",
    Melee: false,
    Ranged: false,
    Wield1Hand: false,
    Wield2Hand: false,
    Picture: undefined,
    CanBlock: false,
    CanParry: false,
    ParryMod: 0,
    BlockMod: 0,
    BlockSP: 0,
    CanDegrade: false,
    Modifications: [],
  };
}

export const RefWeapon = {
  encode(
    message: RefWeapon,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.ID !== "") {
      writer.uint32(10).string(message.ID);
    }
    if (message.Name !== "") {
      writer.uint32(18).string(message.Name);
    }
    if (message.Description !== "") {
      writer.uint32(26).string(message.Description);
    }
    if (message.Damage1H !== "") {
      writer.uint32(34).string(message.Damage1H);
    }
    if (message.Damage2H !== "") {
      writer.uint32(42).string(message.Damage2H);
    }
    if (message.BaseWeaponAccuracy !== 0) {
      writer.uint32(48).int32(message.BaseWeaponAccuracy);
    }
    if (message.DefenseModifier !== 0) {
      writer.uint32(56).int32(message.DefenseModifier);
    }
    if (message.DefenseType !== 0) {
      writer.uint32(64).int32(message.DefenseType);
    }
    if (message.Cost !== undefined) {
      MonetaryAmount.encode(message.Cost, writer.uint32(74).fork()).ldelim();
    }
    if (message.Rarity !== 0) {
      writer.uint32(80).int32(message.Rarity);
    }
    if (message.RangeFt !== 0) {
      writer.uint32(88).int32(message.RangeFt);
    }
    if (message.RequiredSkill !== "") {
      writer.uint32(98).string(message.RequiredSkill);
    }
    if (message.Melee === true) {
      writer.uint32(104).bool(message.Melee);
    }
    if (message.Ranged === true) {
      writer.uint32(120).bool(message.Ranged);
    }
    if (message.Wield1Hand === true) {
      writer.uint32(128).bool(message.Wield1Hand);
    }
    if (message.Wield2Hand === true) {
      writer.uint32(136).bool(message.Wield2Hand);
    }
    if (message.Picture !== undefined) {
      IconPicture.encode(message.Picture, writer.uint32(146).fork()).ldelim();
    }
    if (message.CanBlock === true) {
      writer.uint32(152).bool(message.CanBlock);
    }
    if (message.CanParry === true) {
      writer.uint32(160).bool(message.CanParry);
    }
    if (message.ParryMod !== 0) {
      writer.uint32(168).int32(message.ParryMod);
    }
    if (message.BlockMod !== 0) {
      writer.uint32(176).int32(message.BlockMod);
    }
    if (message.BlockSP !== 0) {
      writer.uint32(184).int32(message.BlockSP);
    }
    if (message.CanDegrade === true) {
      writer.uint32(192).bool(message.CanDegrade);
    }
    for (const v of message.Modifications) {
      Modification.encode(v!, writer.uint32(202).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RefWeapon {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRefWeapon();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.ID = reader.string();
          break;
        case 2:
          message.Name = reader.string();
          break;
        case 3:
          message.Description = reader.string();
          break;
        case 4:
          message.Damage1H = reader.string();
          break;
        case 5:
          message.Damage2H = reader.string();
          break;
        case 6:
          message.BaseWeaponAccuracy = reader.int32();
          break;
        case 7:
          message.DefenseModifier = reader.int32();
          break;
        case 8:
          message.DefenseType = reader.int32() as any;
          break;
        case 9:
          message.Cost = MonetaryAmount.decode(reader, reader.uint32());
          break;
        case 10:
          message.Rarity = reader.int32() as any;
          break;
        case 11:
          message.RangeFt = reader.int32();
          break;
        case 12:
          message.RequiredSkill = reader.string();
          break;
        case 13:
          message.Melee = reader.bool();
          break;
        case 15:
          message.Ranged = reader.bool();
          break;
        case 16:
          message.Wield1Hand = reader.bool();
          break;
        case 17:
          message.Wield2Hand = reader.bool();
          break;
        case 18:
          message.Picture = IconPicture.decode(reader, reader.uint32());
          break;
        case 19:
          message.CanBlock = reader.bool();
          break;
        case 20:
          message.CanParry = reader.bool();
          break;
        case 21:
          message.ParryMod = reader.int32();
          break;
        case 22:
          message.BlockMod = reader.int32();
          break;
        case 23:
          message.BlockSP = reader.int32();
          break;
        case 24:
          message.CanDegrade = reader.bool();
          break;
        case 25:
          message.Modifications.push(
            Modification.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RefWeapon {
    return {
      ID: isSet(object.ID) ? String(object.ID) : "",
      Name: isSet(object.Name) ? String(object.Name) : "",
      Description: isSet(object.Description) ? String(object.Description) : "",
      Damage1H: isSet(object.Damage1H) ? String(object.Damage1H) : "",
      Damage2H: isSet(object.Damage2H) ? String(object.Damage2H) : "",
      BaseWeaponAccuracy: isSet(object.BaseWeaponAccuracy)
        ? Number(object.BaseWeaponAccuracy)
        : 0,
      DefenseModifier: isSet(object.DefenseModifier)
        ? Number(object.DefenseModifier)
        : 0,
      DefenseType: isSet(object.DefenseType)
        ? defenseTypeFromJSON(object.DefenseType)
        : 0,
      Cost: isSet(object.Cost)
        ? MonetaryAmount.fromJSON(object.Cost)
        : undefined,
      Rarity: isSet(object.Rarity) ? rarityFromJSON(object.Rarity) : 0,
      RangeFt: isSet(object.RangeFt) ? Number(object.RangeFt) : 0,
      RequiredSkill: isSet(object.RequiredSkill)
        ? String(object.RequiredSkill)
        : "",
      Melee: isSet(object.Melee) ? Boolean(object.Melee) : false,
      Ranged: isSet(object.Ranged) ? Boolean(object.Ranged) : false,
      Wield1Hand: isSet(object.Wield1Hand) ? Boolean(object.Wield1Hand) : false,
      Wield2Hand: isSet(object.Wield2Hand) ? Boolean(object.Wield2Hand) : false,
      Picture: isSet(object.Picture)
        ? IconPicture.fromJSON(object.Picture)
        : undefined,
      CanBlock: isSet(object.CanBlock) ? Boolean(object.CanBlock) : false,
      CanParry: isSet(object.CanParry) ? Boolean(object.CanParry) : false,
      ParryMod: isSet(object.ParryMod) ? Number(object.ParryMod) : 0,
      BlockMod: isSet(object.BlockMod) ? Number(object.BlockMod) : 0,
      BlockSP: isSet(object.BlockSP) ? Number(object.BlockSP) : 0,
      CanDegrade: isSet(object.CanDegrade) ? Boolean(object.CanDegrade) : false,
      Modifications: Array.isArray(object?.Modifications)
        ? object.Modifications.map((e: any) => Modification.fromJSON(e))
        : [],
    };
  },

  toJSON(message: RefWeapon): unknown {
    const obj: any = {};
    message.ID !== undefined && (obj.ID = message.ID);
    message.Name !== undefined && (obj.Name = message.Name);
    message.Description !== undefined &&
      (obj.Description = message.Description);
    message.Damage1H !== undefined && (obj.Damage1H = message.Damage1H);
    message.Damage2H !== undefined && (obj.Damage2H = message.Damage2H);
    message.BaseWeaponAccuracy !== undefined &&
      (obj.BaseWeaponAccuracy = Math.round(message.BaseWeaponAccuracy));
    message.DefenseModifier !== undefined &&
      (obj.DefenseModifier = Math.round(message.DefenseModifier));
    message.DefenseType !== undefined &&
      (obj.DefenseType = defenseTypeToJSON(message.DefenseType));
    message.Cost !== undefined &&
      (obj.Cost = message.Cost
        ? MonetaryAmount.toJSON(message.Cost)
        : undefined);
    message.Rarity !== undefined && (obj.Rarity = rarityToJSON(message.Rarity));
    message.RangeFt !== undefined &&
      (obj.RangeFt = Math.round(message.RangeFt));
    message.RequiredSkill !== undefined &&
      (obj.RequiredSkill = message.RequiredSkill);
    message.Melee !== undefined && (obj.Melee = message.Melee);
    message.Ranged !== undefined && (obj.Ranged = message.Ranged);
    message.Wield1Hand !== undefined && (obj.Wield1Hand = message.Wield1Hand);
    message.Wield2Hand !== undefined && (obj.Wield2Hand = message.Wield2Hand);
    message.Picture !== undefined &&
      (obj.Picture = message.Picture
        ? IconPicture.toJSON(message.Picture)
        : undefined);
    message.CanBlock !== undefined && (obj.CanBlock = message.CanBlock);
    message.CanParry !== undefined && (obj.CanParry = message.CanParry);
    message.ParryMod !== undefined &&
      (obj.ParryMod = Math.round(message.ParryMod));
    message.BlockMod !== undefined &&
      (obj.BlockMod = Math.round(message.BlockMod));
    message.BlockSP !== undefined &&
      (obj.BlockSP = Math.round(message.BlockSP));
    message.CanDegrade !== undefined && (obj.CanDegrade = message.CanDegrade);
    if (message.Modifications) {
      obj.Modifications = message.Modifications.map((e) =>
        e ? Modification.toJSON(e) : undefined
      );
    } else {
      obj.Modifications = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<RefWeapon>, I>>(
    object: I
  ): RefWeapon {
    const message = createBaseRefWeapon();
    message.ID = object.ID ?? "";
    message.Name = object.Name ?? "";
    message.Description = object.Description ?? "";
    message.Damage1H = object.Damage1H ?? "";
    message.Damage2H = object.Damage2H ?? "";
    message.BaseWeaponAccuracy = object.BaseWeaponAccuracy ?? 0;
    message.DefenseModifier = object.DefenseModifier ?? 0;
    message.DefenseType = object.DefenseType ?? 0;
    message.Cost =
      object.Cost !== undefined && object.Cost !== null
        ? MonetaryAmount.fromPartial(object.Cost)
        : undefined;
    message.Rarity = object.Rarity ?? 0;
    message.RangeFt = object.RangeFt ?? 0;
    message.RequiredSkill = object.RequiredSkill ?? "";
    message.Melee = object.Melee ?? false;
    message.Ranged = object.Ranged ?? false;
    message.Wield1Hand = object.Wield1Hand ?? false;
    message.Wield2Hand = object.Wield2Hand ?? false;
    message.Picture =
      object.Picture !== undefined && object.Picture !== null
        ? IconPicture.fromPartial(object.Picture)
        : undefined;
    message.CanBlock = object.CanBlock ?? false;
    message.CanParry = object.CanParry ?? false;
    message.ParryMod = object.ParryMod ?? 0;
    message.BlockMod = object.BlockMod ?? 0;
    message.BlockSP = object.BlockSP ?? 0;
    message.CanDegrade = object.CanDegrade ?? false;
    message.Modifications =
      object.Modifications?.map((e) => Modification.fromPartial(e)) || [];
    return message;
  },
};

function createBaseRefGameTerm(): RefGameTerm {
  return { ID: "", Name: "", Description: "", Type: "", EnumValue: 0 };
}

export const RefGameTerm = {
  encode(
    message: RefGameTerm,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.ID !== "") {
      writer.uint32(10).string(message.ID);
    }
    if (message.Name !== "") {
      writer.uint32(18).string(message.Name);
    }
    if (message.Description !== "") {
      writer.uint32(26).string(message.Description);
    }
    if (message.Type !== "") {
      writer.uint32(34).string(message.Type);
    }
    if (message.EnumValue !== 0) {
      writer.uint32(40).int32(message.EnumValue);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RefGameTerm {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRefGameTerm();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.ID = reader.string();
          break;
        case 2:
          message.Name = reader.string();
          break;
        case 3:
          message.Description = reader.string();
          break;
        case 4:
          message.Type = reader.string();
          break;
        case 5:
          message.EnumValue = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RefGameTerm {
    return {
      ID: isSet(object.ID) ? String(object.ID) : "",
      Name: isSet(object.Name) ? String(object.Name) : "",
      Description: isSet(object.Description) ? String(object.Description) : "",
      Type: isSet(object.Type) ? String(object.Type) : "",
      EnumValue: isSet(object.EnumValue) ? Number(object.EnumValue) : 0,
    };
  },

  toJSON(message: RefGameTerm): unknown {
    const obj: any = {};
    message.ID !== undefined && (obj.ID = message.ID);
    message.Name !== undefined && (obj.Name = message.Name);
    message.Description !== undefined &&
      (obj.Description = message.Description);
    message.Type !== undefined && (obj.Type = message.Type);
    message.EnumValue !== undefined &&
      (obj.EnumValue = Math.round(message.EnumValue));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<RefGameTerm>, I>>(
    object: I
  ): RefGameTerm {
    const message = createBaseRefGameTerm();
    message.ID = object.ID ?? "";
    message.Name = object.Name ?? "";
    message.Description = object.Description ?? "";
    message.Type = object.Type ?? "";
    message.EnumValue = object.EnumValue ?? 0;
    return message;
  },
};

function createBaseWeapon(): Weapon {
  return {
    ID: "",
    Name: "",
    Notes: "",
    RefID: "",
    Quality: 0,
    Picture: undefined,
    Carried: false,
    Equipped: false,
    ParryMod: 0,
    BlockMod: 0,
    BlockSP: 0,
    WeaponAccuracy: 0,
    Degraded: false,
    Modifications: [],
  };
}

export const Weapon = {
  encode(
    message: Weapon,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.ID !== "") {
      writer.uint32(10).string(message.ID);
    }
    if (message.Name !== "") {
      writer.uint32(18).string(message.Name);
    }
    if (message.Notes !== "") {
      writer.uint32(26).string(message.Notes);
    }
    if (message.RefID !== "") {
      writer.uint32(34).string(message.RefID);
    }
    if (message.Quality !== 0) {
      writer.uint32(40).int32(message.Quality);
    }
    if (message.Picture !== undefined) {
      IconPicture.encode(message.Picture, writer.uint32(50).fork()).ldelim();
    }
    if (message.Carried === true) {
      writer.uint32(56).bool(message.Carried);
    }
    if (message.Equipped === true) {
      writer.uint32(64).bool(message.Equipped);
    }
    if (message.ParryMod !== 0) {
      writer.uint32(72).int32(message.ParryMod);
    }
    if (message.BlockMod !== 0) {
      writer.uint32(80).int32(message.BlockMod);
    }
    if (message.BlockSP !== 0) {
      writer.uint32(88).int32(message.BlockSP);
    }
    if (message.WeaponAccuracy !== 0) {
      writer.uint32(104).int32(message.WeaponAccuracy);
    }
    if (message.Degraded === true) {
      writer.uint32(112).bool(message.Degraded);
    }
    for (const v of message.Modifications) {
      Modification.encode(v!, writer.uint32(122).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Weapon {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseWeapon();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.ID = reader.string();
          break;
        case 2:
          message.Name = reader.string();
          break;
        case 3:
          message.Notes = reader.string();
          break;
        case 4:
          message.RefID = reader.string();
          break;
        case 5:
          message.Quality = reader.int32() as any;
          break;
        case 6:
          message.Picture = IconPicture.decode(reader, reader.uint32());
          break;
        case 7:
          message.Carried = reader.bool();
          break;
        case 8:
          message.Equipped = reader.bool();
          break;
        case 9:
          message.ParryMod = reader.int32();
          break;
        case 10:
          message.BlockMod = reader.int32();
          break;
        case 11:
          message.BlockSP = reader.int32();
          break;
        case 13:
          message.WeaponAccuracy = reader.int32();
          break;
        case 14:
          message.Degraded = reader.bool();
          break;
        case 15:
          message.Modifications.push(
            Modification.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Weapon {
    return {
      ID: isSet(object.ID) ? String(object.ID) : "",
      Name: isSet(object.Name) ? String(object.Name) : "",
      Notes: isSet(object.Notes) ? String(object.Notes) : "",
      RefID: isSet(object.RefID) ? String(object.RefID) : "",
      Quality: isSet(object.Quality) ? qualityFromJSON(object.Quality) : 0,
      Picture: isSet(object.Picture)
        ? IconPicture.fromJSON(object.Picture)
        : undefined,
      Carried: isSet(object.Carried) ? Boolean(object.Carried) : false,
      Equipped: isSet(object.Equipped) ? Boolean(object.Equipped) : false,
      ParryMod: isSet(object.ParryMod) ? Number(object.ParryMod) : 0,
      BlockMod: isSet(object.BlockMod) ? Number(object.BlockMod) : 0,
      BlockSP: isSet(object.BlockSP) ? Number(object.BlockSP) : 0,
      WeaponAccuracy: isSet(object.WeaponAccuracy)
        ? Number(object.WeaponAccuracy)
        : 0,
      Degraded: isSet(object.Degraded) ? Boolean(object.Degraded) : false,
      Modifications: Array.isArray(object?.Modifications)
        ? object.Modifications.map((e: any) => Modification.fromJSON(e))
        : [],
    };
  },

  toJSON(message: Weapon): unknown {
    const obj: any = {};
    message.ID !== undefined && (obj.ID = message.ID);
    message.Name !== undefined && (obj.Name = message.Name);
    message.Notes !== undefined && (obj.Notes = message.Notes);
    message.RefID !== undefined && (obj.RefID = message.RefID);
    message.Quality !== undefined &&
      (obj.Quality = qualityToJSON(message.Quality));
    message.Picture !== undefined &&
      (obj.Picture = message.Picture
        ? IconPicture.toJSON(message.Picture)
        : undefined);
    message.Carried !== undefined && (obj.Carried = message.Carried);
    message.Equipped !== undefined && (obj.Equipped = message.Equipped);
    message.ParryMod !== undefined &&
      (obj.ParryMod = Math.round(message.ParryMod));
    message.BlockMod !== undefined &&
      (obj.BlockMod = Math.round(message.BlockMod));
    message.BlockSP !== undefined &&
      (obj.BlockSP = Math.round(message.BlockSP));
    message.WeaponAccuracy !== undefined &&
      (obj.WeaponAccuracy = Math.round(message.WeaponAccuracy));
    message.Degraded !== undefined && (obj.Degraded = message.Degraded);
    if (message.Modifications) {
      obj.Modifications = message.Modifications.map((e) =>
        e ? Modification.toJSON(e) : undefined
      );
    } else {
      obj.Modifications = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Weapon>, I>>(object: I): Weapon {
    const message = createBaseWeapon();
    message.ID = object.ID ?? "";
    message.Name = object.Name ?? "";
    message.Notes = object.Notes ?? "";
    message.RefID = object.RefID ?? "";
    message.Quality = object.Quality ?? 0;
    message.Picture =
      object.Picture !== undefined && object.Picture !== null
        ? IconPicture.fromPartial(object.Picture)
        : undefined;
    message.Carried = object.Carried ?? false;
    message.Equipped = object.Equipped ?? false;
    message.ParryMod = object.ParryMod ?? 0;
    message.BlockMod = object.BlockMod ?? 0;
    message.BlockSP = object.BlockSP ?? 0;
    message.WeaponAccuracy = object.WeaponAccuracy ?? 0;
    message.Degraded = object.Degraded ?? false;
    message.Modifications =
      object.Modifications?.map((e) => Modification.fromPartial(e)) || [];
    return message;
  },
};

function createBaseRefArmor(): RefArmor {
  return {
    ID: "",
    Name: "",
    Description: "",
    SP: 0,
    CanDegrade: false,
    Material: "",
    Cost: undefined,
    CanStack: false,
    RefPenalty: 0,
    Modifications: [],
  };
}

export const RefArmor = {
  encode(
    message: RefArmor,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.ID !== "") {
      writer.uint32(10).string(message.ID);
    }
    if (message.Name !== "") {
      writer.uint32(18).string(message.Name);
    }
    if (message.Description !== "") {
      writer.uint32(26).string(message.Description);
    }
    if (message.SP !== 0) {
      writer.uint32(32).int32(message.SP);
    }
    if (message.CanDegrade === true) {
      writer.uint32(40).bool(message.CanDegrade);
    }
    if (message.Material !== "") {
      writer.uint32(50).string(message.Material);
    }
    if (message.Cost !== undefined) {
      MonetaryAmount.encode(message.Cost, writer.uint32(58).fork()).ldelim();
    }
    if (message.CanStack === true) {
      writer.uint32(64).bool(message.CanStack);
    }
    if (message.RefPenalty !== 0) {
      writer.uint32(72).int32(message.RefPenalty);
    }
    for (const v of message.Modifications) {
      Modification.encode(v!, writer.uint32(82).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RefArmor {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRefArmor();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.ID = reader.string();
          break;
        case 2:
          message.Name = reader.string();
          break;
        case 3:
          message.Description = reader.string();
          break;
        case 4:
          message.SP = reader.int32();
          break;
        case 5:
          message.CanDegrade = reader.bool();
          break;
        case 6:
          message.Material = reader.string();
          break;
        case 7:
          message.Cost = MonetaryAmount.decode(reader, reader.uint32());
          break;
        case 8:
          message.CanStack = reader.bool();
          break;
        case 9:
          message.RefPenalty = reader.int32();
          break;
        case 10:
          message.Modifications.push(
            Modification.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RefArmor {
    return {
      ID: isSet(object.ID) ? String(object.ID) : "",
      Name: isSet(object.Name) ? String(object.Name) : "",
      Description: isSet(object.Description) ? String(object.Description) : "",
      SP: isSet(object.SP) ? Number(object.SP) : 0,
      CanDegrade: isSet(object.CanDegrade) ? Boolean(object.CanDegrade) : false,
      Material: isSet(object.Material) ? String(object.Material) : "",
      Cost: isSet(object.Cost)
        ? MonetaryAmount.fromJSON(object.Cost)
        : undefined,
      CanStack: isSet(object.CanStack) ? Boolean(object.CanStack) : false,
      RefPenalty: isSet(object.RefPenalty) ? Number(object.RefPenalty) : 0,
      Modifications: Array.isArray(object?.Modifications)
        ? object.Modifications.map((e: any) => Modification.fromJSON(e))
        : [],
    };
  },

  toJSON(message: RefArmor): unknown {
    const obj: any = {};
    message.ID !== undefined && (obj.ID = message.ID);
    message.Name !== undefined && (obj.Name = message.Name);
    message.Description !== undefined &&
      (obj.Description = message.Description);
    message.SP !== undefined && (obj.SP = Math.round(message.SP));
    message.CanDegrade !== undefined && (obj.CanDegrade = message.CanDegrade);
    message.Material !== undefined && (obj.Material = message.Material);
    message.Cost !== undefined &&
      (obj.Cost = message.Cost
        ? MonetaryAmount.toJSON(message.Cost)
        : undefined);
    message.CanStack !== undefined && (obj.CanStack = message.CanStack);
    message.RefPenalty !== undefined &&
      (obj.RefPenalty = Math.round(message.RefPenalty));
    if (message.Modifications) {
      obj.Modifications = message.Modifications.map((e) =>
        e ? Modification.toJSON(e) : undefined
      );
    } else {
      obj.Modifications = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<RefArmor>, I>>(object: I): RefArmor {
    const message = createBaseRefArmor();
    message.ID = object.ID ?? "";
    message.Name = object.Name ?? "";
    message.Description = object.Description ?? "";
    message.SP = object.SP ?? 0;
    message.CanDegrade = object.CanDegrade ?? false;
    message.Material = object.Material ?? "";
    message.Cost =
      object.Cost !== undefined && object.Cost !== null
        ? MonetaryAmount.fromPartial(object.Cost)
        : undefined;
    message.CanStack = object.CanStack ?? false;
    message.RefPenalty = object.RefPenalty ?? 0;
    message.Modifications =
      object.Modifications?.map((e) => Modification.fromPartial(e)) || [];
    return message;
  },
};

function createBaseArmor(): Armor {
  return {
    ID: "",
    Name: "",
    Notes: "",
    RefID: "",
    Picture: undefined,
    Equipped: false,
    Degraded: false,
    SP: 0,
    Quality: 0,
    CanDegrade: 0,
    Modifications: [],
  };
}

export const Armor = {
  encode(message: Armor, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.ID !== "") {
      writer.uint32(10).string(message.ID);
    }
    if (message.Name !== "") {
      writer.uint32(18).string(message.Name);
    }
    if (message.Notes !== "") {
      writer.uint32(26).string(message.Notes);
    }
    if (message.RefID !== "") {
      writer.uint32(34).string(message.RefID);
    }
    if (message.Picture !== undefined) {
      IconPicture.encode(message.Picture, writer.uint32(50).fork()).ldelim();
    }
    if (message.Equipped === true) {
      writer.uint32(64).bool(message.Equipped);
    }
    if (message.Degraded === true) {
      writer.uint32(72).bool(message.Degraded);
    }
    if (message.SP !== 0) {
      writer.uint32(80).int32(message.SP);
    }
    if (message.Quality !== 0) {
      writer.uint32(88).int32(message.Quality);
    }
    if (message.CanDegrade !== 0) {
      writer.uint32(96).int32(message.CanDegrade);
    }
    for (const v of message.Modifications) {
      Modification.encode(v!, writer.uint32(106).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Armor {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseArmor();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.ID = reader.string();
          break;
        case 2:
          message.Name = reader.string();
          break;
        case 3:
          message.Notes = reader.string();
          break;
        case 4:
          message.RefID = reader.string();
          break;
        case 6:
          message.Picture = IconPicture.decode(reader, reader.uint32());
          break;
        case 8:
          message.Equipped = reader.bool();
          break;
        case 9:
          message.Degraded = reader.bool();
          break;
        case 10:
          message.SP = reader.int32();
          break;
        case 11:
          message.Quality = reader.int32() as any;
          break;
        case 12:
          message.CanDegrade = reader.int32() as any;
          break;
        case 13:
          message.Modifications.push(
            Modification.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Armor {
    return {
      ID: isSet(object.ID) ? String(object.ID) : "",
      Name: isSet(object.Name) ? String(object.Name) : "",
      Notes: isSet(object.Notes) ? String(object.Notes) : "",
      RefID: isSet(object.RefID) ? String(object.RefID) : "",
      Picture: isSet(object.Picture)
        ? IconPicture.fromJSON(object.Picture)
        : undefined,
      Equipped: isSet(object.Equipped) ? Boolean(object.Equipped) : false,
      Degraded: isSet(object.Degraded) ? Boolean(object.Degraded) : false,
      SP: isSet(object.SP) ? Number(object.SP) : 0,
      Quality: isSet(object.Quality) ? qualityFromJSON(object.Quality) : 0,
      CanDegrade: isSet(object.CanDegrade)
        ? booleanValueFromJSON(object.CanDegrade)
        : 0,
      Modifications: Array.isArray(object?.Modifications)
        ? object.Modifications.map((e: any) => Modification.fromJSON(e))
        : [],
    };
  },

  toJSON(message: Armor): unknown {
    const obj: any = {};
    message.ID !== undefined && (obj.ID = message.ID);
    message.Name !== undefined && (obj.Name = message.Name);
    message.Notes !== undefined && (obj.Notes = message.Notes);
    message.RefID !== undefined && (obj.RefID = message.RefID);
    message.Picture !== undefined &&
      (obj.Picture = message.Picture
        ? IconPicture.toJSON(message.Picture)
        : undefined);
    message.Equipped !== undefined && (obj.Equipped = message.Equipped);
    message.Degraded !== undefined && (obj.Degraded = message.Degraded);
    message.SP !== undefined && (obj.SP = Math.round(message.SP));
    message.Quality !== undefined &&
      (obj.Quality = qualityToJSON(message.Quality));
    message.CanDegrade !== undefined &&
      (obj.CanDegrade = booleanValueToJSON(message.CanDegrade));
    if (message.Modifications) {
      obj.Modifications = message.Modifications.map((e) =>
        e ? Modification.toJSON(e) : undefined
      );
    } else {
      obj.Modifications = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Armor>, I>>(object: I): Armor {
    const message = createBaseArmor();
    message.ID = object.ID ?? "";
    message.Name = object.Name ?? "";
    message.Notes = object.Notes ?? "";
    message.RefID = object.RefID ?? "";
    message.Picture =
      object.Picture !== undefined && object.Picture !== null
        ? IconPicture.fromPartial(object.Picture)
        : undefined;
    message.Equipped = object.Equipped ?? false;
    message.Degraded = object.Degraded ?? false;
    message.SP = object.SP ?? 0;
    message.Quality = object.Quality ?? 0;
    message.CanDegrade = object.CanDegrade ?? 0;
    message.Modifications =
      object.Modifications?.map((e) => Modification.fromPartial(e)) || [];
    return message;
  },
};

function createBaseDiceRollResults(): DiceRollResults {
  return { Rolls: [], Total: 0, Modifiers: [] };
}

export const DiceRollResults = {
  encode(
    message: DiceRollResults,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.Rolls) {
      DiceRollResult.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.Total !== 0) {
      writer.uint32(16).int32(message.Total);
    }
    for (const v of message.Modifiers) {
      RollModifier.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DiceRollResults {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDiceRollResults();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.Rolls.push(DiceRollResult.decode(reader, reader.uint32()));
          break;
        case 2:
          message.Total = reader.int32();
          break;
        case 3:
          message.Modifiers.push(RollModifier.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DiceRollResults {
    return {
      Rolls: Array.isArray(object?.Rolls)
        ? object.Rolls.map((e: any) => DiceRollResult.fromJSON(e))
        : [],
      Total: isSet(object.Total) ? Number(object.Total) : 0,
      Modifiers: Array.isArray(object?.Modifiers)
        ? object.Modifiers.map((e: any) => RollModifier.fromJSON(e))
        : [],
    };
  },

  toJSON(message: DiceRollResults): unknown {
    const obj: any = {};
    if (message.Rolls) {
      obj.Rolls = message.Rolls.map((e) =>
        e ? DiceRollResult.toJSON(e) : undefined
      );
    } else {
      obj.Rolls = [];
    }
    message.Total !== undefined && (obj.Total = Math.round(message.Total));
    if (message.Modifiers) {
      obj.Modifiers = message.Modifiers.map((e) =>
        e ? RollModifier.toJSON(e) : undefined
      );
    } else {
      obj.Modifiers = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<DiceRollResults>, I>>(
    object: I
  ): DiceRollResults {
    const message = createBaseDiceRollResults();
    message.Rolls =
      object.Rolls?.map((e) => DiceRollResult.fromPartial(e)) || [];
    message.Total = object.Total ?? 0;
    message.Modifiers =
      object.Modifiers?.map((e) => RollModifier.fromPartial(e)) || [];
    return message;
  },
};

function createBaseDiceRollResult(): DiceRollResult {
  return { Dice: undefined, Results: [] };
}

export const DiceRollResult = {
  encode(
    message: DiceRollResult,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.Dice !== undefined) {
      Die.encode(message.Dice, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.Results) {
      DieRollResult.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DiceRollResult {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDiceRollResult();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 3:
          message.Dice = Die.decode(reader, reader.uint32());
          break;
        case 2:
          message.Results.push(DieRollResult.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DiceRollResult {
    return {
      Dice: isSet(object.Dice) ? Die.fromJSON(object.Dice) : undefined,
      Results: Array.isArray(object?.Results)
        ? object.Results.map((e: any) => DieRollResult.fromJSON(e))
        : [],
    };
  },

  toJSON(message: DiceRollResult): unknown {
    const obj: any = {};
    message.Dice !== undefined &&
      (obj.Dice = message.Dice ? Die.toJSON(message.Dice) : undefined);
    if (message.Results) {
      obj.Results = message.Results.map((e) =>
        e ? DieRollResult.toJSON(e) : undefined
      );
    } else {
      obj.Results = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<DiceRollResult>, I>>(
    object: I
  ): DiceRollResult {
    const message = createBaseDiceRollResult();
    message.Dice =
      object.Dice !== undefined && object.Dice !== null
        ? Die.fromPartial(object.Dice)
        : undefined;
    message.Results =
      object.Results?.map((e) => DieRollResult.fromPartial(e)) || [];
    return message;
  },
};

function createBaseDieRollResult(): DieRollResult {
  return { Value: 0, Exploded: false, ReRolled: false, DieValues: [] };
}

export const DieRollResult = {
  encode(
    message: DieRollResult,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.Value !== 0) {
      writer.uint32(8).int32(message.Value);
    }
    if (message.Exploded === true) {
      writer.uint32(16).bool(message.Exploded);
    }
    if (message.ReRolled === true) {
      writer.uint32(24).bool(message.ReRolled);
    }
    writer.uint32(34).fork();
    for (const v of message.DieValues) {
      writer.int32(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DieRollResult {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDieRollResult();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.Value = reader.int32();
          break;
        case 2:
          message.Exploded = reader.bool();
          break;
        case 3:
          message.ReRolled = reader.bool();
          break;
        case 4:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.DieValues.push(reader.int32());
            }
          } else {
            message.DieValues.push(reader.int32());
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DieRollResult {
    return {
      Value: isSet(object.Value) ? Number(object.Value) : 0,
      Exploded: isSet(object.Exploded) ? Boolean(object.Exploded) : false,
      ReRolled: isSet(object.ReRolled) ? Boolean(object.ReRolled) : false,
      DieValues: Array.isArray(object?.DieValues)
        ? object.DieValues.map((e: any) => Number(e))
        : [],
    };
  },

  toJSON(message: DieRollResult): unknown {
    const obj: any = {};
    message.Value !== undefined && (obj.Value = Math.round(message.Value));
    message.Exploded !== undefined && (obj.Exploded = message.Exploded);
    message.ReRolled !== undefined && (obj.ReRolled = message.ReRolled);
    if (message.DieValues) {
      obj.DieValues = message.DieValues.map((e) => Math.round(e));
    } else {
      obj.DieValues = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<DieRollResult>, I>>(
    object: I
  ): DieRollResult {
    const message = createBaseDieRollResult();
    message.Value = object.Value ?? 0;
    message.Exploded = object.Exploded ?? false;
    message.ReRolled = object.ReRolled ?? false;
    message.DieValues = object.DieValues?.map((e) => e) || [];
    return message;
  },
};

function createBaseDiceRoll(): DiceRoll {
  return { Dice: [], Modifiers: [], Reason: 0, EntityID: "" };
}

export const DiceRoll = {
  encode(
    message: DiceRoll,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.Dice) {
      Die.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.Modifiers) {
      RollModifier.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.Reason !== 0) {
      writer.uint32(24).int32(message.Reason);
    }
    if (message.EntityID !== "") {
      writer.uint32(34).string(message.EntityID);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DiceRoll {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDiceRoll();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.Dice.push(Die.decode(reader, reader.uint32()));
          break;
        case 2:
          message.Modifiers.push(RollModifier.decode(reader, reader.uint32()));
          break;
        case 3:
          message.Reason = reader.int32() as any;
          break;
        case 4:
          message.EntityID = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DiceRoll {
    return {
      Dice: Array.isArray(object?.Dice)
        ? object.Dice.map((e: any) => Die.fromJSON(e))
        : [],
      Modifiers: Array.isArray(object?.Modifiers)
        ? object.Modifiers.map((e: any) => RollModifier.fromJSON(e))
        : [],
      Reason: isSet(object.Reason) ? diceRollReasonFromJSON(object.Reason) : 0,
      EntityID: isSet(object.EntityID) ? String(object.EntityID) : "",
    };
  },

  toJSON(message: DiceRoll): unknown {
    const obj: any = {};
    if (message.Dice) {
      obj.Dice = message.Dice.map((e) => (e ? Die.toJSON(e) : undefined));
    } else {
      obj.Dice = [];
    }
    if (message.Modifiers) {
      obj.Modifiers = message.Modifiers.map((e) =>
        e ? RollModifier.toJSON(e) : undefined
      );
    } else {
      obj.Modifiers = [];
    }
    message.Reason !== undefined &&
      (obj.Reason = diceRollReasonToJSON(message.Reason));
    message.EntityID !== undefined && (obj.EntityID = message.EntityID);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<DiceRoll>, I>>(object: I): DiceRoll {
    const message = createBaseDiceRoll();
    message.Dice = object.Dice?.map((e) => Die.fromPartial(e)) || [];
    message.Modifiers =
      object.Modifiers?.map((e) => RollModifier.fromPartial(e)) || [];
    message.Reason = object.Reason ?? 0;
    message.EntityID = object.EntityID ?? "";
    return message;
  },
};

function createBaseDie(): Die {
  return {
    Amount: 0,
    Sides: 0,
    Explode: false,
    ReRollMin: false,
    Tag: "",
    Negative: false,
  };
}

export const Die = {
  encode(message: Die, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.Amount !== 0) {
      writer.uint32(8).int32(message.Amount);
    }
    if (message.Sides !== 0) {
      writer.uint32(16).int32(message.Sides);
    }
    if (message.Explode === true) {
      writer.uint32(24).bool(message.Explode);
    }
    if (message.ReRollMin === true) {
      writer.uint32(32).bool(message.ReRollMin);
    }
    if (message.Tag !== "") {
      writer.uint32(42).string(message.Tag);
    }
    if (message.Negative === true) {
      writer.uint32(48).bool(message.Negative);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Die {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDie();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.Amount = reader.int32();
          break;
        case 2:
          message.Sides = reader.int32();
          break;
        case 3:
          message.Explode = reader.bool();
          break;
        case 4:
          message.ReRollMin = reader.bool();
          break;
        case 5:
          message.Tag = reader.string();
          break;
        case 6:
          message.Negative = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Die {
    return {
      Amount: isSet(object.Amount) ? Number(object.Amount) : 0,
      Sides: isSet(object.Sides) ? Number(object.Sides) : 0,
      Explode: isSet(object.Explode) ? Boolean(object.Explode) : false,
      ReRollMin: isSet(object.ReRollMin) ? Boolean(object.ReRollMin) : false,
      Tag: isSet(object.Tag) ? String(object.Tag) : "",
      Negative: isSet(object.Negative) ? Boolean(object.Negative) : false,
    };
  },

  toJSON(message: Die): unknown {
    const obj: any = {};
    message.Amount !== undefined && (obj.Amount = Math.round(message.Amount));
    message.Sides !== undefined && (obj.Sides = Math.round(message.Sides));
    message.Explode !== undefined && (obj.Explode = message.Explode);
    message.ReRollMin !== undefined && (obj.ReRollMin = message.ReRollMin);
    message.Tag !== undefined && (obj.Tag = message.Tag);
    message.Negative !== undefined && (obj.Negative = message.Negative);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Die>, I>>(object: I): Die {
    const message = createBaseDie();
    message.Amount = object.Amount ?? 0;
    message.Sides = object.Sides ?? 0;
    message.Explode = object.Explode ?? false;
    message.ReRollMin = object.ReRollMin ?? false;
    message.Tag = object.Tag ?? "";
    message.Negative = object.Negative ?? false;
    return message;
  },
};

function createBaseRollModifier(): RollModifier {
  return { Modifier: 0, Tag: "", Multiply: false, Divide: false };
}

export const RollModifier = {
  encode(
    message: RollModifier,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.Modifier !== 0) {
      writer.uint32(8).int32(message.Modifier);
    }
    if (message.Tag !== "") {
      writer.uint32(18).string(message.Tag);
    }
    if (message.Multiply === true) {
      writer.uint32(24).bool(message.Multiply);
    }
    if (message.Divide === true) {
      writer.uint32(32).bool(message.Divide);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RollModifier {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRollModifier();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.Modifier = reader.int32();
          break;
        case 2:
          message.Tag = reader.string();
          break;
        case 3:
          message.Multiply = reader.bool();
          break;
        case 4:
          message.Divide = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RollModifier {
    return {
      Modifier: isSet(object.Modifier) ? Number(object.Modifier) : 0,
      Tag: isSet(object.Tag) ? String(object.Tag) : "",
      Multiply: isSet(object.Multiply) ? Boolean(object.Multiply) : false,
      Divide: isSet(object.Divide) ? Boolean(object.Divide) : false,
    };
  },

  toJSON(message: RollModifier): unknown {
    const obj: any = {};
    message.Modifier !== undefined &&
      (obj.Modifier = Math.round(message.Modifier));
    message.Tag !== undefined && (obj.Tag = message.Tag);
    message.Multiply !== undefined && (obj.Multiply = message.Multiply);
    message.Divide !== undefined && (obj.Divide = message.Divide);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<RollModifier>, I>>(
    object: I
  ): RollModifier {
    const message = createBaseRollModifier();
    message.Modifier = object.Modifier ?? 0;
    message.Tag = object.Tag ?? "";
    message.Multiply = object.Multiply ?? false;
    message.Divide = object.Divide ?? false;
    return message;
  },
};

function createBasePerformAction(): PerformAction {
  return { Attack: undefined, ActionType: 0, Actions: 0, CharacterID: "" };
}

export const PerformAction = {
  encode(
    message: PerformAction,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.Attack !== undefined) {
      Attack.encode(message.Attack, writer.uint32(10).fork()).ldelim();
    }
    if (message.ActionType !== 0) {
      writer.uint32(16).int32(message.ActionType);
    }
    if (message.Actions !== 0) {
      writer.uint32(24).int32(message.Actions);
    }
    if (message.CharacterID !== "") {
      writer.uint32(34).string(message.CharacterID);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PerformAction {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePerformAction();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.Attack = Attack.decode(reader, reader.uint32());
          break;
        case 2:
          message.ActionType = reader.int32() as any;
          break;
        case 3:
          message.Actions = reader.int32();
          break;
        case 4:
          message.CharacterID = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PerformAction {
    return {
      Attack: isSet(object.Attack) ? Attack.fromJSON(object.Attack) : undefined,
      ActionType: isSet(object.ActionType)
        ? actionTypeFromJSON(object.ActionType)
        : 0,
      Actions: isSet(object.Actions) ? Number(object.Actions) : 0,
      CharacterID: isSet(object.CharacterID) ? String(object.CharacterID) : "",
    };
  },

  toJSON(message: PerformAction): unknown {
    const obj: any = {};
    message.Attack !== undefined &&
      (obj.Attack = message.Attack ? Attack.toJSON(message.Attack) : undefined);
    message.ActionType !== undefined &&
      (obj.ActionType = actionTypeToJSON(message.ActionType));
    message.Actions !== undefined &&
      (obj.Actions = Math.round(message.Actions));
    message.CharacterID !== undefined &&
      (obj.CharacterID = message.CharacterID);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<PerformAction>, I>>(
    object: I
  ): PerformAction {
    const message = createBasePerformAction();
    message.Attack =
      object.Attack !== undefined && object.Attack !== null
        ? Attack.fromPartial(object.Attack)
        : undefined;
    message.ActionType = object.ActionType ?? 0;
    message.Actions = object.Actions ?? 0;
    message.CharacterID = object.CharacterID ?? "";
    return message;
  },
};

function createBaseModification(): Modification {
  return { Type: 0, Amount: 0, Category: "", IDAffected: "" };
}

export const Modification = {
  encode(
    message: Modification,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.Type !== 0) {
      writer.uint32(8).int32(message.Type);
    }
    if (message.Amount !== 0) {
      writer.uint32(16).int32(message.Amount);
    }
    if (message.Category !== "") {
      writer.uint32(26).string(message.Category);
    }
    if (message.IDAffected !== "") {
      writer.uint32(34).string(message.IDAffected);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Modification {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseModification();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.Type = reader.int32() as any;
          break;
        case 2:
          message.Amount = reader.int32();
          break;
        case 3:
          message.Category = reader.string();
          break;
        case 4:
          message.IDAffected = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Modification {
    return {
      Type: isSet(object.Type) ? modificationTypeFromJSON(object.Type) : 0,
      Amount: isSet(object.Amount) ? Number(object.Amount) : 0,
      Category: isSet(object.Category) ? String(object.Category) : "",
      IDAffected: isSet(object.IDAffected) ? String(object.IDAffected) : "",
    };
  },

  toJSON(message: Modification): unknown {
    const obj: any = {};
    message.Type !== undefined &&
      (obj.Type = modificationTypeToJSON(message.Type));
    message.Amount !== undefined && (obj.Amount = Math.round(message.Amount));
    message.Category !== undefined && (obj.Category = message.Category);
    message.IDAffected !== undefined && (obj.IDAffected = message.IDAffected);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Modification>, I>>(
    object: I
  ): Modification {
    const message = createBaseModification();
    message.Type = object.Type ?? 0;
    message.Amount = object.Amount ?? 0;
    message.Category = object.Category ?? "";
    message.IDAffected = object.IDAffected ?? "";
    return message;
  },
};

function createBaseEffect(): Effect {
  return { Modification: undefined, Reason: "", Expires: "" };
}

export const Effect = {
  encode(
    message: Effect,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.Modification !== undefined) {
      Modification.encode(
        message.Modification,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.Reason !== "") {
      writer.uint32(18).string(message.Reason);
    }
    if (message.Expires !== "") {
      writer.uint32(26).string(message.Expires);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Effect {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEffect();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.Modification = Modification.decode(reader, reader.uint32());
          break;
        case 2:
          message.Reason = reader.string();
          break;
        case 3:
          message.Expires = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Effect {
    return {
      Modification: isSet(object.Modification)
        ? Modification.fromJSON(object.Modification)
        : undefined,
      Reason: isSet(object.Reason) ? String(object.Reason) : "",
      Expires: isSet(object.Expires) ? String(object.Expires) : "",
    };
  },

  toJSON(message: Effect): unknown {
    const obj: any = {};
    message.Modification !== undefined &&
      (obj.Modification = message.Modification
        ? Modification.toJSON(message.Modification)
        : undefined);
    message.Reason !== undefined && (obj.Reason = message.Reason);
    message.Expires !== undefined && (obj.Expires = message.Expires);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Effect>, I>>(object: I): Effect {
    const message = createBaseEffect();
    message.Modification =
      object.Modification !== undefined && object.Modification !== null
        ? Modification.fromPartial(object.Modification)
        : undefined;
    message.Reason = object.Reason ?? "";
    message.Expires = object.Expires ?? "";
    return message;
  },
};

function createBaseOrb(): Orb {
  return {
    ID: "",
    Name: "",
    Notes: "",
    RefID: "",
    Level: 0,
    IPs: 0,
    slotted: false,
  };
}

export const Orb = {
  encode(message: Orb, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.ID !== "") {
      writer.uint32(10).string(message.ID);
    }
    if (message.Name !== "") {
      writer.uint32(18).string(message.Name);
    }
    if (message.Notes !== "") {
      writer.uint32(26).string(message.Notes);
    }
    if (message.RefID !== "") {
      writer.uint32(34).string(message.RefID);
    }
    if (message.Level !== 0) {
      writer.uint32(40).int32(message.Level);
    }
    if (message.IPs !== 0) {
      writer.uint32(48).int32(message.IPs);
    }
    if (message.slotted === true) {
      writer.uint32(56).bool(message.slotted);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Orb {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOrb();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.ID = reader.string();
          break;
        case 2:
          message.Name = reader.string();
          break;
        case 3:
          message.Notes = reader.string();
          break;
        case 4:
          message.RefID = reader.string();
          break;
        case 5:
          message.Level = reader.int32();
          break;
        case 6:
          message.IPs = reader.int32();
          break;
        case 7:
          message.slotted = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Orb {
    return {
      ID: isSet(object.ID) ? String(object.ID) : "",
      Name: isSet(object.Name) ? String(object.Name) : "",
      Notes: isSet(object.Notes) ? String(object.Notes) : "",
      RefID: isSet(object.RefID) ? String(object.RefID) : "",
      Level: isSet(object.Level) ? Number(object.Level) : 0,
      IPs: isSet(object.IPs) ? Number(object.IPs) : 0,
      slotted: isSet(object.slotted) ? Boolean(object.slotted) : false,
    };
  },

  toJSON(message: Orb): unknown {
    const obj: any = {};
    message.ID !== undefined && (obj.ID = message.ID);
    message.Name !== undefined && (obj.Name = message.Name);
    message.Notes !== undefined && (obj.Notes = message.Notes);
    message.RefID !== undefined && (obj.RefID = message.RefID);
    message.Level !== undefined && (obj.Level = Math.round(message.Level));
    message.IPs !== undefined && (obj.IPs = Math.round(message.IPs));
    message.slotted !== undefined && (obj.slotted = message.slotted);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Orb>, I>>(object: I): Orb {
    const message = createBaseOrb();
    message.ID = object.ID ?? "";
    message.Name = object.Name ?? "";
    message.Notes = object.Notes ?? "";
    message.RefID = object.RefID ?? "";
    message.Level = object.Level ?? 0;
    message.IPs = object.IPs ?? 0;
    message.slotted = object.slotted ?? false;
    return message;
  },
};

function createBaseRefOrb(): RefOrb {
  return {
    ID: "",
    Name: "",
    Description: "",
    Type: 0,
    Rarity: 0,
    Picture: undefined,
    SpellAttributeType: 0,
    SpellSchool: "",
    Abilities: [],
  };
}

export const RefOrb = {
  encode(
    message: RefOrb,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.ID !== "") {
      writer.uint32(10).string(message.ID);
    }
    if (message.Name !== "") {
      writer.uint32(18).string(message.Name);
    }
    if (message.Description !== "") {
      writer.uint32(26).string(message.Description);
    }
    if (message.Type !== 0) {
      writer.uint32(32).int32(message.Type);
    }
    if (message.Rarity !== 0) {
      writer.uint32(40).int32(message.Rarity);
    }
    if (message.Picture !== undefined) {
      IconPicture.encode(message.Picture, writer.uint32(50).fork()).ldelim();
    }
    if (message.SpellAttributeType !== 0) {
      writer.uint32(56).int32(message.SpellAttributeType);
    }
    if (message.SpellSchool !== "") {
      writer.uint32(66).string(message.SpellSchool);
    }
    for (const v of message.Abilities) {
      Ability.encode(v!, writer.uint32(8802).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RefOrb {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRefOrb();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.ID = reader.string();
          break;
        case 2:
          message.Name = reader.string();
          break;
        case 3:
          message.Description = reader.string();
          break;
        case 4:
          message.Type = reader.int32() as any;
          break;
        case 5:
          message.Rarity = reader.int32() as any;
          break;
        case 6:
          message.Picture = IconPicture.decode(reader, reader.uint32());
          break;
        case 7:
          message.SpellAttributeType = reader.int32() as any;
          break;
        case 8:
          message.SpellSchool = reader.string();
          break;
        case 1100:
          message.Abilities.push(Ability.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RefOrb {
    return {
      ID: isSet(object.ID) ? String(object.ID) : "",
      Name: isSet(object.Name) ? String(object.Name) : "",
      Description: isSet(object.Description) ? String(object.Description) : "",
      Type: isSet(object.Type) ? orbTypeFromJSON(object.Type) : 0,
      Rarity: isSet(object.Rarity) ? rarityFromJSON(object.Rarity) : 0,
      Picture: isSet(object.Picture)
        ? IconPicture.fromJSON(object.Picture)
        : undefined,
      SpellAttributeType: isSet(object.SpellAttributeType)
        ? primaryAttributeValFromJSON(object.SpellAttributeType)
        : 0,
      SpellSchool: isSet(object.SpellSchool) ? String(object.SpellSchool) : "",
      Abilities: Array.isArray(object?.Abilities)
        ? object.Abilities.map((e: any) => Ability.fromJSON(e))
        : [],
    };
  },

  toJSON(message: RefOrb): unknown {
    const obj: any = {};
    message.ID !== undefined && (obj.ID = message.ID);
    message.Name !== undefined && (obj.Name = message.Name);
    message.Description !== undefined &&
      (obj.Description = message.Description);
    message.Type !== undefined && (obj.Type = orbTypeToJSON(message.Type));
    message.Rarity !== undefined && (obj.Rarity = rarityToJSON(message.Rarity));
    message.Picture !== undefined &&
      (obj.Picture = message.Picture
        ? IconPicture.toJSON(message.Picture)
        : undefined);
    message.SpellAttributeType !== undefined &&
      (obj.SpellAttributeType = primaryAttributeValToJSON(
        message.SpellAttributeType
      ));
    message.SpellSchool !== undefined &&
      (obj.SpellSchool = message.SpellSchool);
    if (message.Abilities) {
      obj.Abilities = message.Abilities.map((e) =>
        e ? Ability.toJSON(e) : undefined
      );
    } else {
      obj.Abilities = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<RefOrb>, I>>(object: I): RefOrb {
    const message = createBaseRefOrb();
    message.ID = object.ID ?? "";
    message.Name = object.Name ?? "";
    message.Description = object.Description ?? "";
    message.Type = object.Type ?? 0;
    message.Rarity = object.Rarity ?? 0;
    message.Picture =
      object.Picture !== undefined && object.Picture !== null
        ? IconPicture.fromPartial(object.Picture)
        : undefined;
    message.SpellAttributeType = object.SpellAttributeType ?? 0;
    message.SpellSchool = object.SpellSchool ?? "";
    message.Abilities =
      object.Abilities?.map((e) => Ability.fromPartial(e)) || [];
    return message;
  },
};

function createBaseChat(): Chat {
  return { Contents: "" };
}

export const Chat = {
  encode(message: Chat, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.Contents !== "") {
      writer.uint32(10).string(message.Contents);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Chat {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseChat();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.Contents = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Chat {
    return {
      Contents: isSet(object.Contents) ? String(object.Contents) : "",
    };
  },

  toJSON(message: Chat): unknown {
    const obj: any = {};
    message.Contents !== undefined && (obj.Contents = message.Contents);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Chat>, I>>(object: I): Chat {
    const message = createBaseChat();
    message.Contents = object.Contents ?? "";
    return message;
  },
};

function createBaseGame(): Game {
  return { ID: "", Name: "", Players: [], GameTime: 0 };
}

export const Game = {
  encode(message: Game, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.ID !== "") {
      writer.uint32(10).string(message.ID);
    }
    if (message.Name !== "") {
      writer.uint32(18).string(message.Name);
    }
    for (const v of message.Players) {
      Player.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.GameTime !== 0) {
      writer.uint32(32).int64(message.GameTime);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Game {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGame();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.ID = reader.string();
          break;
        case 2:
          message.Name = reader.string();
          break;
        case 3:
          message.Players.push(Player.decode(reader, reader.uint32()));
          break;
        case 4:
          message.GameTime = longToNumber(reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Game {
    return {
      ID: isSet(object.ID) ? String(object.ID) : "",
      Name: isSet(object.Name) ? String(object.Name) : "",
      Players: Array.isArray(object?.Players)
        ? object.Players.map((e: any) => Player.fromJSON(e))
        : [],
      GameTime: isSet(object.GameTime) ? Number(object.GameTime) : 0,
    };
  },

  toJSON(message: Game): unknown {
    const obj: any = {};
    message.ID !== undefined && (obj.ID = message.ID);
    message.Name !== undefined && (obj.Name = message.Name);
    if (message.Players) {
      obj.Players = message.Players.map((e) =>
        e ? Player.toJSON(e) : undefined
      );
    } else {
      obj.Players = [];
    }
    message.GameTime !== undefined &&
      (obj.GameTime = Math.round(message.GameTime));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Game>, I>>(object: I): Game {
    const message = createBaseGame();
    message.ID = object.ID ?? "";
    message.Name = object.Name ?? "";
    message.Players = object.Players?.map((e) => Player.fromPartial(e)) || [];
    message.GameTime = object.GameTime ?? 0;
    return message;
  },
};

function createBasePlayer(): Player {
  return { id: "", name: "", GM: false };
}

export const Player = {
  encode(
    message: Player,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.GM === true) {
      writer.uint32(24).bool(message.GM);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Player {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePlayer();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.name = reader.string();
          break;
        case 3:
          message.GM = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Player {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      name: isSet(object.name) ? String(object.name) : "",
      GM: isSet(object.GM) ? Boolean(object.GM) : false,
    };
  },

  toJSON(message: Player): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.name !== undefined && (obj.name = message.name);
    message.GM !== undefined && (obj.GM = message.GM);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Player>, I>>(object: I): Player {
    const message = createBasePlayer();
    message.id = object.id ?? "";
    message.name = object.name ?? "";
    message.GM = object.GM ?? false;
    return message;
  },
};

function createBaseListGamesRequest(): ListGamesRequest {
  return { IDNameOnly: false };
}

export const ListGamesRequest = {
  encode(
    message: ListGamesRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.IDNameOnly === true) {
      writer.uint32(8).bool(message.IDNameOnly);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListGamesRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListGamesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.IDNameOnly = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ListGamesRequest {
    return {
      IDNameOnly: isSet(object.IDNameOnly) ? Boolean(object.IDNameOnly) : false,
    };
  },

  toJSON(message: ListGamesRequest): unknown {
    const obj: any = {};
    message.IDNameOnly !== undefined && (obj.IDNameOnly = message.IDNameOnly);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ListGamesRequest>, I>>(
    object: I
  ): ListGamesRequest {
    const message = createBaseListGamesRequest();
    message.IDNameOnly = object.IDNameOnly ?? false;
    return message;
  },
};

function createBaseListGamesResponse(): ListGamesResponse {
  return { Games: [] };
}

export const ListGamesResponse = {
  encode(
    message: ListGamesResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.Games) {
      Game.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListGamesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListGamesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.Games.push(Game.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ListGamesResponse {
    return {
      Games: Array.isArray(object?.Games)
        ? object.Games.map((e: any) => Game.fromJSON(e))
        : [],
    };
  },

  toJSON(message: ListGamesResponse): unknown {
    const obj: any = {};
    if (message.Games) {
      obj.Games = message.Games.map((e) => (e ? Game.toJSON(e) : undefined));
    } else {
      obj.Games = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ListGamesResponse>, I>>(
    object: I
  ): ListGamesResponse {
    const message = createBaseListGamesResponse();
    message.Games = object.Games?.map((e) => Game.fromPartial(e)) || [];
    return message;
  },
};

function createBaseStartGameRequest(): StartGameRequest {
  return { ID: "" };
}

export const StartGameRequest = {
  encode(
    message: StartGameRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.ID !== "") {
      writer.uint32(10).string(message.ID);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): StartGameRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStartGameRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.ID = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): StartGameRequest {
    return {
      ID: isSet(object.ID) ? String(object.ID) : "",
    };
  },

  toJSON(message: StartGameRequest): unknown {
    const obj: any = {};
    message.ID !== undefined && (obj.ID = message.ID);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<StartGameRequest>, I>>(
    object: I
  ): StartGameRequest {
    const message = createBaseStartGameRequest();
    message.ID = object.ID ?? "";
    return message;
  },
};

function createBaseStartGameBroadcast(): StartGameBroadcast {
  return { Game: undefined, Characters: [], Encounters: [] };
}

export const StartGameBroadcast = {
  encode(
    message: StartGameBroadcast,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.Game !== undefined) {
      Game.encode(message.Game, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.Characters) {
      Character.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.Encounters) {
      Encounter.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): StartGameBroadcast {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStartGameBroadcast();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.Game = Game.decode(reader, reader.uint32());
          break;
        case 4:
          message.Characters.push(Character.decode(reader, reader.uint32()));
          break;
        case 5:
          message.Encounters.push(Encounter.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): StartGameBroadcast {
    return {
      Game: isSet(object.Game) ? Game.fromJSON(object.Game) : undefined,
      Characters: Array.isArray(object?.Characters)
        ? object.Characters.map((e: any) => Character.fromJSON(e))
        : [],
      Encounters: Array.isArray(object?.Encounters)
        ? object.Encounters.map((e: any) => Encounter.fromJSON(e))
        : [],
    };
  },

  toJSON(message: StartGameBroadcast): unknown {
    const obj: any = {};
    message.Game !== undefined &&
      (obj.Game = message.Game ? Game.toJSON(message.Game) : undefined);
    if (message.Characters) {
      obj.Characters = message.Characters.map((e) =>
        e ? Character.toJSON(e) : undefined
      );
    } else {
      obj.Characters = [];
    }
    if (message.Encounters) {
      obj.Encounters = message.Encounters.map((e) =>
        e ? Encounter.toJSON(e) : undefined
      );
    } else {
      obj.Encounters = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<StartGameBroadcast>, I>>(
    object: I
  ): StartGameBroadcast {
    const message = createBaseStartGameBroadcast();
    message.Game =
      object.Game !== undefined && object.Game !== null
        ? Game.fromPartial(object.Game)
        : undefined;
    message.Characters =
      object.Characters?.map((e) => Character.fromPartial(e)) || [];
    message.Encounters =
      object.Encounters?.map((e) => Encounter.fromPartial(e)) || [];
    return message;
  },
};

function createBaseGetActiveGameRequest(): GetActiveGameRequest {
  return {};
}

export const GetActiveGameRequest = {
  encode(
    _: GetActiveGameRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GetActiveGameRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetActiveGameRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): GetActiveGameRequest {
    return {};
  },

  toJSON(_: GetActiveGameRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetActiveGameRequest>, I>>(
    _: I
  ): GetActiveGameRequest {
    const message = createBaseGetActiveGameRequest();
    return message;
  },
};

function createBaseGetActiveGameResponse(): GetActiveGameResponse {
  return { Game: undefined, Players: [], Characters: [], Encounters: [] };
}

export const GetActiveGameResponse = {
  encode(
    message: GetActiveGameResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.Game !== undefined) {
      Game.encode(message.Game, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.Players) {
      Player.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.Characters) {
      Character.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.Encounters) {
      Encounter.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GetActiveGameResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetActiveGameResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.Game = Game.decode(reader, reader.uint32());
          break;
        case 2:
          message.Players.push(Player.decode(reader, reader.uint32()));
          break;
        case 4:
          message.Characters.push(Character.decode(reader, reader.uint32()));
          break;
        case 5:
          message.Encounters.push(Encounter.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetActiveGameResponse {
    return {
      Game: isSet(object.Game) ? Game.fromJSON(object.Game) : undefined,
      Players: Array.isArray(object?.Players)
        ? object.Players.map((e: any) => Player.fromJSON(e))
        : [],
      Characters: Array.isArray(object?.Characters)
        ? object.Characters.map((e: any) => Character.fromJSON(e))
        : [],
      Encounters: Array.isArray(object?.Encounters)
        ? object.Encounters.map((e: any) => Encounter.fromJSON(e))
        : [],
    };
  },

  toJSON(message: GetActiveGameResponse): unknown {
    const obj: any = {};
    message.Game !== undefined &&
      (obj.Game = message.Game ? Game.toJSON(message.Game) : undefined);
    if (message.Players) {
      obj.Players = message.Players.map((e) =>
        e ? Player.toJSON(e) : undefined
      );
    } else {
      obj.Players = [];
    }
    if (message.Characters) {
      obj.Characters = message.Characters.map((e) =>
        e ? Character.toJSON(e) : undefined
      );
    } else {
      obj.Characters = [];
    }
    if (message.Encounters) {
      obj.Encounters = message.Encounters.map((e) =>
        e ? Encounter.toJSON(e) : undefined
      );
    } else {
      obj.Encounters = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetActiveGameResponse>, I>>(
    object: I
  ): GetActiveGameResponse {
    const message = createBaseGetActiveGameResponse();
    message.Game =
      object.Game !== undefined && object.Game !== null
        ? Game.fromPartial(object.Game)
        : undefined;
    message.Players = object.Players?.map((e) => Player.fromPartial(e)) || [];
    message.Characters =
      object.Characters?.map((e) => Character.fromPartial(e)) || [];
    message.Encounters =
      object.Encounters?.map((e) => Encounter.fromPartial(e)) || [];
    return message;
  },
};

function createBaseSetActiveGameRequest(): SetActiveGameRequest {
  return { ID: "" };
}

export const SetActiveGameRequest = {
  encode(
    message: SetActiveGameRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.ID !== "") {
      writer.uint32(10).string(message.ID);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): SetActiveGameRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSetActiveGameRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.ID = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SetActiveGameRequest {
    return {
      ID: isSet(object.ID) ? String(object.ID) : "",
    };
  },

  toJSON(message: SetActiveGameRequest): unknown {
    const obj: any = {};
    message.ID !== undefined && (obj.ID = message.ID);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<SetActiveGameRequest>, I>>(
    object: I
  ): SetActiveGameRequest {
    const message = createBaseSetActiveGameRequest();
    message.ID = object.ID ?? "";
    return message;
  },
};

function createBaseDiceRollBroadcast(): DiceRollBroadcast {
  return { ID: "", DiceRoll: undefined, Text: "", ForPlayerID: "", Timeout: 0 };
}

export const DiceRollBroadcast = {
  encode(
    message: DiceRollBroadcast,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.ID !== "") {
      writer.uint32(10).string(message.ID);
    }
    if (message.DiceRoll !== undefined) {
      DiceRoll.encode(message.DiceRoll, writer.uint32(18).fork()).ldelim();
    }
    if (message.Text !== "") {
      writer.uint32(26).string(message.Text);
    }
    if (message.ForPlayerID !== "") {
      writer.uint32(34).string(message.ForPlayerID);
    }
    if (message.Timeout !== 0) {
      writer.uint32(40).int32(message.Timeout);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DiceRollBroadcast {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDiceRollBroadcast();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.ID = reader.string();
          break;
        case 2:
          message.DiceRoll = DiceRoll.decode(reader, reader.uint32());
          break;
        case 3:
          message.Text = reader.string();
          break;
        case 4:
          message.ForPlayerID = reader.string();
          break;
        case 5:
          message.Timeout = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DiceRollBroadcast {
    return {
      ID: isSet(object.ID) ? String(object.ID) : "",
      DiceRoll: isSet(object.DiceRoll)
        ? DiceRoll.fromJSON(object.DiceRoll)
        : undefined,
      Text: isSet(object.Text) ? String(object.Text) : "",
      ForPlayerID: isSet(object.ForPlayerID) ? String(object.ForPlayerID) : "",
      Timeout: isSet(object.Timeout) ? Number(object.Timeout) : 0,
    };
  },

  toJSON(message: DiceRollBroadcast): unknown {
    const obj: any = {};
    message.ID !== undefined && (obj.ID = message.ID);
    message.DiceRoll !== undefined &&
      (obj.DiceRoll = message.DiceRoll
        ? DiceRoll.toJSON(message.DiceRoll)
        : undefined);
    message.Text !== undefined && (obj.Text = message.Text);
    message.ForPlayerID !== undefined &&
      (obj.ForPlayerID = message.ForPlayerID);
    message.Timeout !== undefined &&
      (obj.Timeout = Math.round(message.Timeout));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<DiceRollBroadcast>, I>>(
    object: I
  ): DiceRollBroadcast {
    const message = createBaseDiceRollBroadcast();
    message.ID = object.ID ?? "";
    message.DiceRoll =
      object.DiceRoll !== undefined && object.DiceRoll !== null
        ? DiceRoll.fromPartial(object.DiceRoll)
        : undefined;
    message.Text = object.Text ?? "";
    message.ForPlayerID = object.ForPlayerID ?? "";
    message.Timeout = object.Timeout ?? 0;
    return message;
  },
};

function createBaseDiceRollResponse(): DiceRollResponse {
  return { Request: undefined, Result: undefined };
}

export const DiceRollResponse = {
  encode(
    message: DiceRollResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.Request !== undefined) {
      DiceRollBroadcast.encode(
        message.Request,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.Result !== undefined) {
      DiceRollResults.encode(message.Result, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DiceRollResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDiceRollResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.Request = DiceRollBroadcast.decode(reader, reader.uint32());
          break;
        case 2:
          message.Result = DiceRollResults.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DiceRollResponse {
    return {
      Request: isSet(object.Request)
        ? DiceRollBroadcast.fromJSON(object.Request)
        : undefined,
      Result: isSet(object.Result)
        ? DiceRollResults.fromJSON(object.Result)
        : undefined,
    };
  },

  toJSON(message: DiceRollResponse): unknown {
    const obj: any = {};
    message.Request !== undefined &&
      (obj.Request = message.Request
        ? DiceRollBroadcast.toJSON(message.Request)
        : undefined);
    message.Result !== undefined &&
      (obj.Result = message.Result
        ? DiceRollResults.toJSON(message.Result)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<DiceRollResponse>, I>>(
    object: I
  ): DiceRollResponse {
    const message = createBaseDiceRollResponse();
    message.Request =
      object.Request !== undefined && object.Request !== null
        ? DiceRollBroadcast.fromPartial(object.Request)
        : undefined;
    message.Result =
      object.Result !== undefined && object.Result !== null
        ? DiceRollResults.fromPartial(object.Result)
        : undefined;
    return message;
  },
};

declare var self: any | undefined;
declare var window: any | undefined;
declare var global: any | undefined;
var globalThis: any = (() => {
  if (typeof globalThis !== "undefined") return globalThis;
  if (typeof self !== "undefined") return self;
  if (typeof window !== "undefined") return window;
  if (typeof global !== "undefined") return global;
  throw "Unable to locate global object";
})();

type Builtin =
  | Date
  | Function
  | Uint8Array
  | string
  | number
  | boolean
  | undefined;

export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin
  ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & Record<
        Exclude<keyof I, KeysOfUnion<P>>,
        never
      >;

function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  return long.toNumber();
}

// If you get a compile-error about 'Constructor<Long> and ... have no overlap',
// add '--ts_proto_opt=esModuleInterop=true' as a flag when calling 'protoc'.
if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
