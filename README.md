# Tap Tourney

## Destroy your friends and become their Ruler.
Basically we're seeing how far we can take the simple concept of a tapping game. 

The actual game (tapping or clicking the button) will be the core functionality of the app (besides core social features like live chat and leaderboard), but the fun will come from embellishing it to a ridiculous degree. 

The game is divided into seasons, and the first iteration (MVP) is the pilot.

It will start very simple - 
- Users will have 2/3 days to get the most taps within 15 seconds.
- Whoever has the highest score by the end of the 2/3 days wins.
- The winner is crowned Tap Tyrant and is granted 1 of 3 boons.
- The boons will be somewhat crpytic, but will correspond to an idea or technology we implement
    - eg: mixing up the game format, making a cast system, video chat, store, multiplayer, whatever
- The next season starts with the added functionality

Think of it as a playground for technology and ideas that we can subject people to. Also, it could   be a way to work on stuff we normally aren't interested in on it's own. 

Inspired by Blaseball.

## MVP
Login - User makes an account and can sign in, remembers users so they don't have to do this every time

Simple button game - records number of clicks / taps whatever within a certain time frame.
Leaderboard - Shows the top 3 players with the most 

Live Chat - Chat that updates in real time

## Technologies
- React
- Amplify for managing resources
- AWS Cognito for sign in / up 
- AWS AppSync for score keeping
- Tailwind CSS
- Gitflow 
- Jest for testing