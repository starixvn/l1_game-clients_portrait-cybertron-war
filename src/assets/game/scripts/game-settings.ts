import gc from "@sg/game-client-base";
import { LogStore } from "db://shared-components/game/scripts/stores/log-store";

import * as ClassicSlot from "db://shared-classic-slot/scripts/handlers";
import { sharedContainer } from "../../scripts/shared-container";
import { NullBetResponseHandlers } from "./handlers/null-bet-response-handlers";
import { NullRoundTimeHandlers } from "./handlers/null-round-time-handlers";

const GAME_NAME = "OnePiece";
export const settings = {
    id: 74,
    name: GAME_NAME,
    observerNamespace: GAME_NAME,
    tolgeeNamespaces: [GAME_NAME],
    durations: {
        // dont need these durations configs for this game
        wholeRound: 14,
        lockingBet: 3,
        placingBet: 10,
        generatingResult: 0,
        startRound: 1,

        bigWinNotice: 5,
        normalWinNotice: 3,
        loseNotice: 1,
    },
    numberOfRoundHistory: 11,
    validateBalanceWhenBet: true,
};

export const containerOptions: gc.IContainerOptions = {
    globalContainer: sharedContainer,
    onContainerCreated: (container) => {
        container.bind(gc.GameConfigs.GameSetting).toConstantValue(settings);
        container.bind(LogStore).to(LogStore);

        container.bind(gc.Rounds.RoundTimeHandlers).to(NullRoundTimeHandlers);
        container.bind(gc.Bet.BetResponseHandlers).to(NullBetResponseHandlers);
    },
    features: [ClassicSlot, gc.BetDetailsNew, ...gc.defaultFeatures],
};
