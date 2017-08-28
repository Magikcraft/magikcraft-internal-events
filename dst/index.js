"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PlayerEventTypes;
(function (PlayerEventTypes) {
    PlayerEventTypes["PLAYAPP_USER_HEARTBEAT"] = "PLAYAPP_USER_HEARTBEAT";
    PlayerEventTypes["PLAYER_JOINED_MINECRAFT_SERVER"] = "PLAYER_JOINED_MINECRAFT_SERVER";
    PlayerEventTypes["PLAYER_QUIT_MINECRAFT_SERVER"] = "PLAYER_QUIT_MINECRAFT_SERVER";
    PlayerEventTypes["PLAYER_UPSERT_LORE"] = "PLAYER_UPSERT_LORE";
    PlayerEventTypes["PLAYER_CAST_SPELL"] = "PLAYER_CAST_SPELL";
    PlayerEventTypes["PLAYER_WAS_AT"] = "PLAYER_WAS_AT";
})(PlayerEventTypes = exports.PlayerEventTypes || (exports.PlayerEventTypes = {}));
// export enum PlayerEventTypes {
//     PLAYAPPUSERHEARTBEAT,
//     PLAYER_JOINED_MINECRAFT_SERVER,
//     PLAYER_QUIT_MINECRAFT_SERVER,
//     PLAYER_UPSERT_LORE,
//     PLAYER_CAST_SPELL,
//     PLAYER_WAS_AT,
// }
// export interface PlayerEventTypes {
//     PLAYAPPUSERHEARTBEAT: string,
//     PLAYER_JOINED_MINECRAFT_SERVER: string,
//     PLAYER_QUIT_MINECRAFT_SERVER: string,
//     PLAYER_UPSERT_LORE: string,
//     PLAYER_CAST_SPELL: string,
//     PLAYER_WAS_AT: string,
// } 
