pnpm init
pnpm add express @prisma/client
pnpm add -D typescript ts-node @types/node @types/express prisma

<!-- Make the tsconfig -->

pnpm exec tsc init

<!-- initiate the primsa  -->

pnpm exec prisma init
