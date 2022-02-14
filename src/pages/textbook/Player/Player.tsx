import React, {useEffect, useState, FC} from "react";
import PlayerButton from "../../../components/button/PlayerButton";
import {PlayerProps} from '../../../services/types';

const Player: FC<PlayerProps> = (playerProps) => {
    const {url} = playerProps;
    const [audio] = useState(new Audio(url));

    return <PlayerButton buttonName={"\u25B6"} onClick={() => audio.play()}/>
}
export default Player;
