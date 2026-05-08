🌟 Cursor Vibe Jam 2026
The Annual Vibe Coding Game Jam

Sponsored by Cursor, Bolt.new and Gilf.app

Deadline to enter: May 1, 2026 @ 13:37 UTC, so you have 1 month!

P.S. You can already submit your game here now and keep working on it until the deadline

- anyone can enter with their game
- add the JS snippet at the bottom here to your game (games without are disqualified)
- at least 90% code has to be written by AI
- only new games created during the jam period will be accepted (do not submit games that existed prior to April 1, 2026)
- game has to be accessible on web without any login or signup and free-to-play (preferably its own domain or subdomain)
- multiplayer games preferred but this is not required!
- can use any engine but usually ThreeJS is recommended
- NO loading screens and heavy downloads (!!!) has to be almost instantly in the game (except maybe ask username if you want)
- one entry per person (focus on making one really good game!)

The jury: me, @s13k_, and I will ask some real game dev and AI people to jury again too

REAL CASH PRIZES:
🏆 Gold: $20,000
🥈 Silver: $10,000
🥉 Bronze: $5,000

Sponsors very welcome, just DM @levelsio on X!

It will be interesting to see the difference in quality with last year, and the Vibe Jam can be kind of like a fun benchmark for AI coding I think

(!) IMPORTANT add this code to your game's HTML to show you're an entrant:
<script async src="https://vibejam.cc/2026/widget.js"></script>

We use this to track entrants and also how popular each game is. Make sure your game is on a single domain (like fly.pieter.com or blabla.bolt.new, it's all fine as long as it has its own domain) because that's how we track the games.
ADD A PORTAL TO YOUR GAME (OPTIONAL BUT FUN AND YOU'LL GET PLAYERS)

How to add a start and exit portal 
Make an exit portal in your game they can walk/fly/drive into, you can add a label like Vibe Jam Portal. This way players can play and go to the next game like a Vibe Jam 2026 Webring! Your game will be added if you have a portal.

And if they enter the portal it should redirect the page here (if it doesn't work yet no worries, I am building it then, will work when deadline hits! :D)

https://vibejam.cc/portal/2026

You can send GET query params (like ?username=bla&color=red&speed=0.2&ref=bla.com) that get forwarded like:
- username= (username/name of player)
- color= (color of player in hex or just red/green/yellow)
- speed= (meters per second)
- ref= (url of which game you come from)

You can use the ?ref= param to add a portal BACK to the game they came from

The URL would look like jam.pieter.com/portal/2026?username=levelsio&color=red&speed=5&ref=fly.pieter.com

Then the game you portal too can use that information to put the player in the new game with full continuity!

If you want also:
- avatar_url=
- team=
- hp= (health points; in 1..100 range)
- speed_x= (meters per second)
- speed_y= (meters per second)
- speed_z= (meters per second)
- rotation_x= (radians)
- rotation_y= (radians)
- rotation_z= (radians)

The portal redirector will always add ?portal=true so you can use that to figure out if user comes from a portal and instantly put them in your game coming out of another portal without any start screens

Add a start portal:
(!) IMPORTANT: when receiving a user (with ?portal=true in your URL) and ?ref= make a portal where the user spawns out of and they can return back to the previous game if they go back into that portal. When returning them make sure to send all the ?query parameters again too

All parameters except portal are optional and may or may not be present - do not rely on their presence

IMPORTANT: make sure your game instantly loads (no loading screens, no input screens) so the continuity is nice for players

SAMPLE CODE: for ThreeJS here's my sample code to make a start and exit portal:
https://gist.github.com/levelsio/ffdbfe356b421b97a31664ded4bc961d

RULES:
- anyone can enter with their game
- at least 90% of code has to be written by AI 
- it should be started today or after today, don't submit old games
- game has to be accessible on web without any login or signup and free-to-play (preferrably its own domain or subdomain)
- multiplayer games preferred but not required!
- can use any engine but usually 
@ThreeJS
 is recommended
- NO loading screens and heavy downloads (!!!) has to be almost instantly in the game (except maybe ask username if you want)
- add the HTML code on the Google form in the reply below to show you're an entrant
- one entry per person (focus on making one really good game!)