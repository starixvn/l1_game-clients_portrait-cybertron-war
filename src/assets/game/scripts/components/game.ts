import { _decorator, Label } from "cc";
import { startGame } from "db://shared-components/shared/scripts/startup";
import Observer from "observer";

import GameComponent from "db://shared-components/game/scripts/components/game-component";
import { siteConfigs } from "../../../scripts/site-configs";
import { containerOptions, settings } from "../game-settings";
import "./../../../resources/i18n";

startGame(settings.name, containerOptions, siteConfigs, settings.namespaces);

const { ccclass, property } = _decorator;
const { observer, render, handle } = Observer;

export interface IWinInstantResult {
    betWin: number;
    bigWin: true;
}

@ccclass
@observer(settings.name)
export default class Game extends GameComponent {
    @property({ type: Label, visible: false, override: true })
    lblMinBet: Label = null;

    @property({ type: Label, visible: false, override: true })
    lblMaxBet: Label = null;

    override namespace = settings.name;
    protected override enableEventShowHideGame = false;
    override containerOptions = containerOptions;

    // @render(BetStore, (store) => store.roundId)
    renderlblRound(roundId: number) {
        this.lblRoundId && roundId !== 0 && (this.lblRoundId.string = `#${roundId}`);
    }

    override renderRoundId(roundId: number) {
        // override to not use round id from round store
    }
}
