import { DataStore } from 'aws-amplify';
import { useState } from 'react';
import { GameScreen, HomeButton, HomeScreen, LeaderboardRecordCollection } from './ui-components';
import "./App.css"
import Timer from './Timer';
import { Game } from './models';

type AppProps = {
  userId: string,
  preferred_username: string
}

const get3SecondTimeStamp = (): Date => {
  const time = new Date();
  time.setSeconds(time.getSeconds() + 3);
  return time;
}

const App = ({ userId, preferred_username }: AppProps) => {
  const [score, setScore] = useState<number>(0);
  const [gameOn, setGameOn] = useState<boolean>(false);
  const [buttonDisabled, setButtonDisabled] = useState<boolean>(true);
  const [expiryTimeStamp, setExpiryTimeStamp] = useState<Date>(get3SecondTimeStamp());
  const [preGameCountdown, setPreGameCountdown] = useState<boolean>(true);

  const beginGame = () => {
    setPreGameCountdown(false);
    setButtonDisabled(false);
  }

  const endGame = async () => {
    setButtonDisabled(true);
    try {
      await DataStore.save(
        new Game({
          score: score,
          userId: userId,
          preferred_username: preferred_username
        })
      )

    }
    catch (error) {
    }
  }

  const openGame = () => {
    setGameOn(true);
    setPreGameCountdown(true);
    setScore(0);
    setExpiryTimeStamp(get3SecondTimeStamp());
  }

  const closeGame = () => {
    setGameOn(false);
  }

  const gameButtonOverrides = {
    disabled: buttonDisabled,
    onClick: () => setScore(score + 1)
  }

  return (
    gameOn ?
      <>
        <GameScreen
          score={score}
          timerSlot={
            <Timer
              expiryTimeStamp={expiryTimeStamp}
              beginGame={beginGame}
              endGame={endGame}
            />
          }
          homeButtonSlot={
            buttonDisabled && !preGameCountdown ?
              <HomeButton
                overrides={{
                  "Button35431073": {
                    onClick: () => closeGame()
                  },
                  "Button35361058": {
                    onClick: () => openGame()
                  }
                }}
              />
              :
              null
          }
          overrides={{
            "Button": gameButtonOverrides
          }}
        />

      </>
      :
      <HomeScreen
        recordsSlot={gameOn ? null : <LeaderboardRecordCollection itemsPerPage={5} />}
        overrides={{ "Button": { onClick: () => openGame() } }}
      />
  );
}

export default App;
