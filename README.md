# fix flying mount
Attempt to fix camera angle bug when unmounted from flying mounts using Tera Proxy

So far, I know of only one person who had this bug where the camera angles focuses on character from a outwards persepective (ie: it fucks up camera angle when landing). If anyone has similar issues please try it out and tell me if it works. Bug only happens on landing and descent.

Work in Progress

Approaches:
1. Intercept flying packets and blocks it from reachig client when type7/8 (descent/landing) is detected. Same command is sent to client instead using proxy

Report:
4/6/17- Does not work, still bugs out but bug is fixed if char is in seelie (????)
