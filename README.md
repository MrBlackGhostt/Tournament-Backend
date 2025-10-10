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
