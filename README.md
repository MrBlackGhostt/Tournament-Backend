pnpm init
pnpm add express @prisma/client
pnpm add -D typescript ts-node @types/node @types/express prisma

<!-- Make the tsconfig -->

pnpm exec tsc init

<!-- initiate the primsa  -->

pnpm exec prisma init

<!-- TO migrate the schema update -->

pnpm run db:migrate --name <name here>

<!-- To generate the client -->

pnpm run db:generate

<!-- These are the type we imorting form the express for hte Request and Response -->

import type { Request, Response } from "express";

<!-- Install nodemon for the devdependency  -->

pnpm add nodemon

"dev": "nodemon --watch src --ext ts --exec

<!-- Put this in dev script as wanted to run by nodemon and put the --exec ts so it look for extension for ts file for nodemon to watch as by default the nodemon do not watch the ts file  -->

<!-- USe the Express-rate-limiter to put the rate limit -->

pnpm add express-rate-limit

3. Implement CRUD for Related Core Models
   • Start with Tournament (key domain entity).
   • Then move to Game, Team, Org, and Profile.
   • Why now? With users and auth done, you can assign relations, enforce permissions, and build your domain logic.

Tournament are search on the basis of ORG, NAME, GAME, NoOfTeam, Empty or not
