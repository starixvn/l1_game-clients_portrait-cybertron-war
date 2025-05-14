import gc from "@sg/game-client-base";
import * as ClassicSlot from "db://shared-classic-slot/scripts/handlers";
import { LogStore } from "db://shared-components/game/scripts/stores/log-store";
import { sharedContainer } from "../../scripts/shared-container";
import { settings } from "./game-settings";
import { NullBetResponseHandlers } from "./handlers/null-bet-response-handlers";
import { NullRoundTimeHandlers } from "./handlers/null-round-time-handlers";

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
