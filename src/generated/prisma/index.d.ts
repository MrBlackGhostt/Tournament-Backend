
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Game
 * 
 */
export type Game = $Result.DefaultSelection<Prisma.$GamePayload>
/**
 * Model Org
 * 
 */
export type Org = $Result.DefaultSelection<Prisma.$OrgPayload>
/**
 * Model OrgManager
 * 
 */
export type OrgManager = $Result.DefaultSelection<Prisma.$OrgManagerPayload>
/**
 * Model Profile
 * 
 */
export type Profile = $Result.DefaultSelection<Prisma.$ProfilePayload>
/**
 * Model Tournament
 * 
 */
export type Tournament = $Result.DefaultSelection<Prisma.$TournamentPayload>
/**
 * Model Team
 * 
 */
export type Team = $Result.DefaultSelection<Prisma.$TeamPayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model UserGame
 * 
 */
export type UserGame = $Result.DefaultSelection<Prisma.$UserGamePayload>

/**
 * Enums
 */
export namespace $Enums {
  export const UserRole: {
  ADMIN: 'ADMIN',
  MANAGER: 'MANAGER',
  MODERATOR: 'MODERATOR',
  ACE: 'ACE',
  USER: 'USER'
};

export type UserRole = (typeof UserRole)[keyof typeof UserRole]

}

export type UserRole = $Enums.UserRole

export const UserRole: typeof $Enums.UserRole

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Games
 * const games = await prisma.game.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Games
   * const games = await prisma.game.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.game`: Exposes CRUD operations for the **Game** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Games
    * const games = await prisma.game.findMany()
    * ```
    */
  get game(): Prisma.GameDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.org`: Exposes CRUD operations for the **Org** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Orgs
    * const orgs = await prisma.org.findMany()
    * ```
    */
  get org(): Prisma.OrgDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.orgManager`: Exposes CRUD operations for the **OrgManager** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more OrgManagers
    * const orgManagers = await prisma.orgManager.findMany()
    * ```
    */
  get orgManager(): Prisma.OrgManagerDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.profile`: Exposes CRUD operations for the **Profile** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Profiles
    * const profiles = await prisma.profile.findMany()
    * ```
    */
  get profile(): Prisma.ProfileDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tournament`: Exposes CRUD operations for the **Tournament** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tournaments
    * const tournaments = await prisma.tournament.findMany()
    * ```
    */
  get tournament(): Prisma.TournamentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.team`: Exposes CRUD operations for the **Team** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Teams
    * const teams = await prisma.team.findMany()
    * ```
    */
  get team(): Prisma.TeamDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userGame`: Exposes CRUD operations for the **UserGame** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserGames
    * const userGames = await prisma.userGame.findMany()
    * ```
    */
  get userGame(): Prisma.UserGameDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.16.3
   * Query Engine version: bb420e667c1820a8c05a38023385f6cc7ef8e83a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Game: 'Game',
    Org: 'Org',
    OrgManager: 'OrgManager',
    Profile: 'Profile',
    Tournament: 'Tournament',
    Team: 'Team',
    User: 'User',
    UserGame: 'UserGame'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "game" | "org" | "orgManager" | "profile" | "tournament" | "team" | "user" | "userGame"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Game: {
        payload: Prisma.$GamePayload<ExtArgs>
        fields: Prisma.GameFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GameFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GameFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamePayload>
          }
          findFirst: {
            args: Prisma.GameFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GameFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamePayload>
          }
          findMany: {
            args: Prisma.GameFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamePayload>[]
          }
          create: {
            args: Prisma.GameCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamePayload>
          }
          createMany: {
            args: Prisma.GameCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GameCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamePayload>[]
          }
          delete: {
            args: Prisma.GameDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamePayload>
          }
          update: {
            args: Prisma.GameUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamePayload>
          }
          deleteMany: {
            args: Prisma.GameDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GameUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.GameUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamePayload>[]
          }
          upsert: {
            args: Prisma.GameUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamePayload>
          }
          aggregate: {
            args: Prisma.GameAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGame>
          }
          groupBy: {
            args: Prisma.GameGroupByArgs<ExtArgs>
            result: $Utils.Optional<GameGroupByOutputType>[]
          }
          count: {
            args: Prisma.GameCountArgs<ExtArgs>
            result: $Utils.Optional<GameCountAggregateOutputType> | number
          }
        }
      }
      Org: {
        payload: Prisma.$OrgPayload<ExtArgs>
        fields: Prisma.OrgFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OrgFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrgPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OrgFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrgPayload>
          }
          findFirst: {
            args: Prisma.OrgFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrgPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OrgFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrgPayload>
          }
          findMany: {
            args: Prisma.OrgFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrgPayload>[]
          }
          create: {
            args: Prisma.OrgCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrgPayload>
          }
          createMany: {
            args: Prisma.OrgCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OrgCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrgPayload>[]
          }
          delete: {
            args: Prisma.OrgDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrgPayload>
          }
          update: {
            args: Prisma.OrgUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrgPayload>
          }
          deleteMany: {
            args: Prisma.OrgDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OrgUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OrgUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrgPayload>[]
          }
          upsert: {
            args: Prisma.OrgUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrgPayload>
          }
          aggregate: {
            args: Prisma.OrgAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrg>
          }
          groupBy: {
            args: Prisma.OrgGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrgGroupByOutputType>[]
          }
          count: {
            args: Prisma.OrgCountArgs<ExtArgs>
            result: $Utils.Optional<OrgCountAggregateOutputType> | number
          }
        }
      }
      OrgManager: {
        payload: Prisma.$OrgManagerPayload<ExtArgs>
        fields: Prisma.OrgManagerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OrgManagerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrgManagerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OrgManagerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrgManagerPayload>
          }
          findFirst: {
            args: Prisma.OrgManagerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrgManagerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OrgManagerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrgManagerPayload>
          }
          findMany: {
            args: Prisma.OrgManagerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrgManagerPayload>[]
          }
          create: {
            args: Prisma.OrgManagerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrgManagerPayload>
          }
          createMany: {
            args: Prisma.OrgManagerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OrgManagerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrgManagerPayload>[]
          }
          delete: {
            args: Prisma.OrgManagerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrgManagerPayload>
          }
          update: {
            args: Prisma.OrgManagerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrgManagerPayload>
          }
          deleteMany: {
            args: Prisma.OrgManagerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OrgManagerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OrgManagerUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrgManagerPayload>[]
          }
          upsert: {
            args: Prisma.OrgManagerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrgManagerPayload>
          }
          aggregate: {
            args: Prisma.OrgManagerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrgManager>
          }
          groupBy: {
            args: Prisma.OrgManagerGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrgManagerGroupByOutputType>[]
          }
          count: {
            args: Prisma.OrgManagerCountArgs<ExtArgs>
            result: $Utils.Optional<OrgManagerCountAggregateOutputType> | number
          }
        }
      }
      Profile: {
        payload: Prisma.$ProfilePayload<ExtArgs>
        fields: Prisma.ProfileFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProfileFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProfileFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          findFirst: {
            args: Prisma.ProfileFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProfileFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          findMany: {
            args: Prisma.ProfileFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>[]
          }
          create: {
            args: Prisma.ProfileCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          createMany: {
            args: Prisma.ProfileCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProfileCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>[]
          }
          delete: {
            args: Prisma.ProfileDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          update: {
            args: Prisma.ProfileUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          deleteMany: {
            args: Prisma.ProfileDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProfileUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProfileUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>[]
          }
          upsert: {
            args: Prisma.ProfileUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          aggregate: {
            args: Prisma.ProfileAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProfile>
          }
          groupBy: {
            args: Prisma.ProfileGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProfileGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProfileCountArgs<ExtArgs>
            result: $Utils.Optional<ProfileCountAggregateOutputType> | number
          }
        }
      }
      Tournament: {
        payload: Prisma.$TournamentPayload<ExtArgs>
        fields: Prisma.TournamentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TournamentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TournamentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TournamentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TournamentPayload>
          }
          findFirst: {
            args: Prisma.TournamentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TournamentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TournamentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TournamentPayload>
          }
          findMany: {
            args: Prisma.TournamentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TournamentPayload>[]
          }
          create: {
            args: Prisma.TournamentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TournamentPayload>
          }
          createMany: {
            args: Prisma.TournamentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TournamentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TournamentPayload>[]
          }
          delete: {
            args: Prisma.TournamentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TournamentPayload>
          }
          update: {
            args: Prisma.TournamentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TournamentPayload>
          }
          deleteMany: {
            args: Prisma.TournamentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TournamentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TournamentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TournamentPayload>[]
          }
          upsert: {
            args: Prisma.TournamentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TournamentPayload>
          }
          aggregate: {
            args: Prisma.TournamentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTournament>
          }
          groupBy: {
            args: Prisma.TournamentGroupByArgs<ExtArgs>
            result: $Utils.Optional<TournamentGroupByOutputType>[]
          }
          count: {
            args: Prisma.TournamentCountArgs<ExtArgs>
            result: $Utils.Optional<TournamentCountAggregateOutputType> | number
          }
        }
      }
      Team: {
        payload: Prisma.$TeamPayload<ExtArgs>
        fields: Prisma.TeamFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TeamFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TeamFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>
          }
          findFirst: {
            args: Prisma.TeamFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TeamFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>
          }
          findMany: {
            args: Prisma.TeamFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>[]
          }
          create: {
            args: Prisma.TeamCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>
          }
          createMany: {
            args: Prisma.TeamCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TeamCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>[]
          }
          delete: {
            args: Prisma.TeamDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>
          }
          update: {
            args: Prisma.TeamUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>
          }
          deleteMany: {
            args: Prisma.TeamDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TeamUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TeamUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>[]
          }
          upsert: {
            args: Prisma.TeamUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>
          }
          aggregate: {
            args: Prisma.TeamAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTeam>
          }
          groupBy: {
            args: Prisma.TeamGroupByArgs<ExtArgs>
            result: $Utils.Optional<TeamGroupByOutputType>[]
          }
          count: {
            args: Prisma.TeamCountArgs<ExtArgs>
            result: $Utils.Optional<TeamCountAggregateOutputType> | number
          }
        }
      }
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      UserGame: {
        payload: Prisma.$UserGamePayload<ExtArgs>
        fields: Prisma.UserGameFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserGameFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserGamePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserGameFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserGamePayload>
          }
          findFirst: {
            args: Prisma.UserGameFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserGamePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserGameFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserGamePayload>
          }
          findMany: {
            args: Prisma.UserGameFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserGamePayload>[]
          }
          create: {
            args: Prisma.UserGameCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserGamePayload>
          }
          createMany: {
            args: Prisma.UserGameCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserGameCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserGamePayload>[]
          }
          delete: {
            args: Prisma.UserGameDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserGamePayload>
          }
          update: {
            args: Prisma.UserGameUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserGamePayload>
          }
          deleteMany: {
            args: Prisma.UserGameDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserGameUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserGameUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserGamePayload>[]
          }
          upsert: {
            args: Prisma.UserGameUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserGamePayload>
          }
          aggregate: {
            args: Prisma.UserGameAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserGame>
          }
          groupBy: {
            args: Prisma.UserGameGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGameGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserGameCountArgs<ExtArgs>
            result: $Utils.Optional<UserGameCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    game?: GameOmit
    org?: OrgOmit
    orgManager?: OrgManagerOmit
    profile?: ProfileOmit
    tournament?: TournamentOmit
    team?: TeamOmit
    user?: UserOmit
    userGame?: UserGameOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type GameCountOutputType
   */

  export type GameCountOutputType = {
    onGoingTournament: number
    users: number
  }

  export type GameCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    onGoingTournament?: boolean | GameCountOutputTypeCountOnGoingTournamentArgs
    users?: boolean | GameCountOutputTypeCountUsersArgs
  }

  // Custom InputTypes
  /**
   * GameCountOutputType without action
   */
  export type GameCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameCountOutputType
     */
    select?: GameCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * GameCountOutputType without action
   */
  export type GameCountOutputTypeCountOnGoingTournamentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TournamentWhereInput
  }

  /**
   * GameCountOutputType without action
   */
  export type GameCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserGameWhereInput
  }


  /**
   * Count Type OrgCountOutputType
   */

  export type OrgCountOutputType = {
    managers: number
  }

  export type OrgCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    managers?: boolean | OrgCountOutputTypeCountManagersArgs
  }

  // Custom InputTypes
  /**
   * OrgCountOutputType without action
   */
  export type OrgCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrgCountOutputType
     */
    select?: OrgCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * OrgCountOutputType without action
   */
  export type OrgCountOutputTypeCountManagersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrgManagerWhereInput
  }


  /**
   * Count Type ProfileCountOutputType
   */

  export type ProfileCountOutputType = {
    gamePlay: number
  }

  export type ProfileCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    gamePlay?: boolean | ProfileCountOutputTypeCountGamePlayArgs
  }

  // Custom InputTypes
  /**
   * ProfileCountOutputType without action
   */
  export type ProfileCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfileCountOutputType
     */
    select?: ProfileCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProfileCountOutputType without action
   */
  export type ProfileCountOutputTypeCountGamePlayArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserGameWhereInput
  }


  /**
   * Count Type TournamentCountOutputType
   */

  export type TournamentCountOutputType = {
    teams: number
  }

  export type TournamentCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    teams?: boolean | TournamentCountOutputTypeCountTeamsArgs
  }

  // Custom InputTypes
  /**
   * TournamentCountOutputType without action
   */
  export type TournamentCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TournamentCountOutputType
     */
    select?: TournamentCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TournamentCountOutputType without action
   */
  export type TournamentCountOutputTypeCountTeamsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TeamWhereInput
  }


  /**
   * Count Type TeamCountOutputType
   */

  export type TeamCountOutputType = {
    users: number
    tournaments: number
  }

  export type TeamCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | TeamCountOutputTypeCountUsersArgs
    tournaments?: boolean | TeamCountOutputTypeCountTournamentsArgs
  }

  // Custom InputTypes
  /**
   * TeamCountOutputType without action
   */
  export type TeamCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamCountOutputType
     */
    select?: TeamCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TeamCountOutputType without action
   */
  export type TeamCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProfileWhereInput
  }

  /**
   * TeamCountOutputType without action
   */
  export type TeamCountOutputTypeCountTournamentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TournamentWhereInput
  }


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    managerIn: number
    orgJoin: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    managerIn?: boolean | UserCountOutputTypeCountManagerInArgs
    orgJoin?: boolean | UserCountOutputTypeCountOrgJoinArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountManagerInArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrgManagerWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountOrgJoinArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrgWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Game
   */

  export type AggregateGame = {
    _count: GameCountAggregateOutputType | null
    _min: GameMinAggregateOutputType | null
    _max: GameMaxAggregateOutputType | null
  }

  export type GameMinAggregateOutputType = {
    id: string | null
    gameName: string | null
  }

  export type GameMaxAggregateOutputType = {
    id: string | null
    gameName: string | null
  }

  export type GameCountAggregateOutputType = {
    id: number
    gameName: number
    _all: number
  }


  export type GameMinAggregateInputType = {
    id?: true
    gameName?: true
  }

  export type GameMaxAggregateInputType = {
    id?: true
    gameName?: true
  }

  export type GameCountAggregateInputType = {
    id?: true
    gameName?: true
    _all?: true
  }

  export type GameAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Game to aggregate.
     */
    where?: GameWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Games to fetch.
     */
    orderBy?: GameOrderByWithRelationInput | GameOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GameWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Games from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Games.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Games
    **/
    _count?: true | GameCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GameMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GameMaxAggregateInputType
  }

  export type GetGameAggregateType<T extends GameAggregateArgs> = {
        [P in keyof T & keyof AggregateGame]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGame[P]>
      : GetScalarType<T[P], AggregateGame[P]>
  }




  export type GameGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GameWhereInput
    orderBy?: GameOrderByWithAggregationInput | GameOrderByWithAggregationInput[]
    by: GameScalarFieldEnum[] | GameScalarFieldEnum
    having?: GameScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GameCountAggregateInputType | true
    _min?: GameMinAggregateInputType
    _max?: GameMaxAggregateInputType
  }

  export type GameGroupByOutputType = {
    id: string
    gameName: string
    _count: GameCountAggregateOutputType | null
    _min: GameMinAggregateOutputType | null
    _max: GameMaxAggregateOutputType | null
  }

  type GetGameGroupByPayload<T extends GameGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GameGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GameGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GameGroupByOutputType[P]>
            : GetScalarType<T[P], GameGroupByOutputType[P]>
        }
      >
    >


  export type GameSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    gameName?: boolean
    onGoingTournament?: boolean | Game$onGoingTournamentArgs<ExtArgs>
    users?: boolean | Game$usersArgs<ExtArgs>
    _count?: boolean | GameCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["game"]>

  export type GameSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    gameName?: boolean
  }, ExtArgs["result"]["game"]>

  export type GameSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    gameName?: boolean
  }, ExtArgs["result"]["game"]>

  export type GameSelectScalar = {
    id?: boolean
    gameName?: boolean
  }

  export type GameOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "gameName", ExtArgs["result"]["game"]>
  export type GameInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    onGoingTournament?: boolean | Game$onGoingTournamentArgs<ExtArgs>
    users?: boolean | Game$usersArgs<ExtArgs>
    _count?: boolean | GameCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type GameIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type GameIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $GamePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Game"
    objects: {
      onGoingTournament: Prisma.$TournamentPayload<ExtArgs>[]
      users: Prisma.$UserGamePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      gameName: string
    }, ExtArgs["result"]["game"]>
    composites: {}
  }

  type GameGetPayload<S extends boolean | null | undefined | GameDefaultArgs> = $Result.GetResult<Prisma.$GamePayload, S>

  type GameCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GameFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GameCountAggregateInputType | true
    }

  export interface GameDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Game'], meta: { name: 'Game' } }
    /**
     * Find zero or one Game that matches the filter.
     * @param {GameFindUniqueArgs} args - Arguments to find a Game
     * @example
     * // Get one Game
     * const game = await prisma.game.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GameFindUniqueArgs>(args: SelectSubset<T, GameFindUniqueArgs<ExtArgs>>): Prisma__GameClient<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Game that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GameFindUniqueOrThrowArgs} args - Arguments to find a Game
     * @example
     * // Get one Game
     * const game = await prisma.game.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GameFindUniqueOrThrowArgs>(args: SelectSubset<T, GameFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GameClient<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Game that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameFindFirstArgs} args - Arguments to find a Game
     * @example
     * // Get one Game
     * const game = await prisma.game.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GameFindFirstArgs>(args?: SelectSubset<T, GameFindFirstArgs<ExtArgs>>): Prisma__GameClient<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Game that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameFindFirstOrThrowArgs} args - Arguments to find a Game
     * @example
     * // Get one Game
     * const game = await prisma.game.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GameFindFirstOrThrowArgs>(args?: SelectSubset<T, GameFindFirstOrThrowArgs<ExtArgs>>): Prisma__GameClient<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Games that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Games
     * const games = await prisma.game.findMany()
     * 
     * // Get first 10 Games
     * const games = await prisma.game.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const gameWithIdOnly = await prisma.game.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GameFindManyArgs>(args?: SelectSubset<T, GameFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Game.
     * @param {GameCreateArgs} args - Arguments to create a Game.
     * @example
     * // Create one Game
     * const Game = await prisma.game.create({
     *   data: {
     *     // ... data to create a Game
     *   }
     * })
     * 
     */
    create<T extends GameCreateArgs>(args: SelectSubset<T, GameCreateArgs<ExtArgs>>): Prisma__GameClient<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Games.
     * @param {GameCreateManyArgs} args - Arguments to create many Games.
     * @example
     * // Create many Games
     * const game = await prisma.game.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GameCreateManyArgs>(args?: SelectSubset<T, GameCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Games and returns the data saved in the database.
     * @param {GameCreateManyAndReturnArgs} args - Arguments to create many Games.
     * @example
     * // Create many Games
     * const game = await prisma.game.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Games and only return the `id`
     * const gameWithIdOnly = await prisma.game.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GameCreateManyAndReturnArgs>(args?: SelectSubset<T, GameCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Game.
     * @param {GameDeleteArgs} args - Arguments to delete one Game.
     * @example
     * // Delete one Game
     * const Game = await prisma.game.delete({
     *   where: {
     *     // ... filter to delete one Game
     *   }
     * })
     * 
     */
    delete<T extends GameDeleteArgs>(args: SelectSubset<T, GameDeleteArgs<ExtArgs>>): Prisma__GameClient<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Game.
     * @param {GameUpdateArgs} args - Arguments to update one Game.
     * @example
     * // Update one Game
     * const game = await prisma.game.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GameUpdateArgs>(args: SelectSubset<T, GameUpdateArgs<ExtArgs>>): Prisma__GameClient<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Games.
     * @param {GameDeleteManyArgs} args - Arguments to filter Games to delete.
     * @example
     * // Delete a few Games
     * const { count } = await prisma.game.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GameDeleteManyArgs>(args?: SelectSubset<T, GameDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Games.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Games
     * const game = await prisma.game.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GameUpdateManyArgs>(args: SelectSubset<T, GameUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Games and returns the data updated in the database.
     * @param {GameUpdateManyAndReturnArgs} args - Arguments to update many Games.
     * @example
     * // Update many Games
     * const game = await prisma.game.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Games and only return the `id`
     * const gameWithIdOnly = await prisma.game.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends GameUpdateManyAndReturnArgs>(args: SelectSubset<T, GameUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Game.
     * @param {GameUpsertArgs} args - Arguments to update or create a Game.
     * @example
     * // Update or create a Game
     * const game = await prisma.game.upsert({
     *   create: {
     *     // ... data to create a Game
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Game we want to update
     *   }
     * })
     */
    upsert<T extends GameUpsertArgs>(args: SelectSubset<T, GameUpsertArgs<ExtArgs>>): Prisma__GameClient<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Games.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameCountArgs} args - Arguments to filter Games to count.
     * @example
     * // Count the number of Games
     * const count = await prisma.game.count({
     *   where: {
     *     // ... the filter for the Games we want to count
     *   }
     * })
    **/
    count<T extends GameCountArgs>(
      args?: Subset<T, GameCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GameCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Game.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends GameAggregateArgs>(args: Subset<T, GameAggregateArgs>): Prisma.PrismaPromise<GetGameAggregateType<T>>

    /**
     * Group by Game.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends GameGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GameGroupByArgs['orderBy'] }
        : { orderBy?: GameGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, GameGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGameGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Game model
   */
  readonly fields: GameFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Game.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GameClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    onGoingTournament<T extends Game$onGoingTournamentArgs<ExtArgs> = {}>(args?: Subset<T, Game$onGoingTournamentArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TournamentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    users<T extends Game$usersArgs<ExtArgs> = {}>(args?: Subset<T, Game$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserGamePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Game model
   */
  interface GameFieldRefs {
    readonly id: FieldRef<"Game", 'String'>
    readonly gameName: FieldRef<"Game", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Game findUnique
   */
  export type GameFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Game
     */
    omit?: GameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameInclude<ExtArgs> | null
    /**
     * Filter, which Game to fetch.
     */
    where: GameWhereUniqueInput
  }

  /**
   * Game findUniqueOrThrow
   */
  export type GameFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Game
     */
    omit?: GameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameInclude<ExtArgs> | null
    /**
     * Filter, which Game to fetch.
     */
    where: GameWhereUniqueInput
  }

  /**
   * Game findFirst
   */
  export type GameFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Game
     */
    omit?: GameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameInclude<ExtArgs> | null
    /**
     * Filter, which Game to fetch.
     */
    where?: GameWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Games to fetch.
     */
    orderBy?: GameOrderByWithRelationInput | GameOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Games.
     */
    cursor?: GameWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Games from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Games.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Games.
     */
    distinct?: GameScalarFieldEnum | GameScalarFieldEnum[]
  }

  /**
   * Game findFirstOrThrow
   */
  export type GameFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Game
     */
    omit?: GameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameInclude<ExtArgs> | null
    /**
     * Filter, which Game to fetch.
     */
    where?: GameWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Games to fetch.
     */
    orderBy?: GameOrderByWithRelationInput | GameOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Games.
     */
    cursor?: GameWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Games from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Games.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Games.
     */
    distinct?: GameScalarFieldEnum | GameScalarFieldEnum[]
  }

  /**
   * Game findMany
   */
  export type GameFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Game
     */
    omit?: GameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameInclude<ExtArgs> | null
    /**
     * Filter, which Games to fetch.
     */
    where?: GameWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Games to fetch.
     */
    orderBy?: GameOrderByWithRelationInput | GameOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Games.
     */
    cursor?: GameWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Games from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Games.
     */
    skip?: number
    distinct?: GameScalarFieldEnum | GameScalarFieldEnum[]
  }

  /**
   * Game create
   */
  export type GameCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Game
     */
    omit?: GameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameInclude<ExtArgs> | null
    /**
     * The data needed to create a Game.
     */
    data: XOR<GameCreateInput, GameUncheckedCreateInput>
  }

  /**
   * Game createMany
   */
  export type GameCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Games.
     */
    data: GameCreateManyInput | GameCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Game createManyAndReturn
   */
  export type GameCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Game
     */
    omit?: GameOmit<ExtArgs> | null
    /**
     * The data used to create many Games.
     */
    data: GameCreateManyInput | GameCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Game update
   */
  export type GameUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Game
     */
    omit?: GameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameInclude<ExtArgs> | null
    /**
     * The data needed to update a Game.
     */
    data: XOR<GameUpdateInput, GameUncheckedUpdateInput>
    /**
     * Choose, which Game to update.
     */
    where: GameWhereUniqueInput
  }

  /**
   * Game updateMany
   */
  export type GameUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Games.
     */
    data: XOR<GameUpdateManyMutationInput, GameUncheckedUpdateManyInput>
    /**
     * Filter which Games to update
     */
    where?: GameWhereInput
    /**
     * Limit how many Games to update.
     */
    limit?: number
  }

  /**
   * Game updateManyAndReturn
   */
  export type GameUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Game
     */
    omit?: GameOmit<ExtArgs> | null
    /**
     * The data used to update Games.
     */
    data: XOR<GameUpdateManyMutationInput, GameUncheckedUpdateManyInput>
    /**
     * Filter which Games to update
     */
    where?: GameWhereInput
    /**
     * Limit how many Games to update.
     */
    limit?: number
  }

  /**
   * Game upsert
   */
  export type GameUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Game
     */
    omit?: GameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameInclude<ExtArgs> | null
    /**
     * The filter to search for the Game to update in case it exists.
     */
    where: GameWhereUniqueInput
    /**
     * In case the Game found by the `where` argument doesn't exist, create a new Game with this data.
     */
    create: XOR<GameCreateInput, GameUncheckedCreateInput>
    /**
     * In case the Game was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GameUpdateInput, GameUncheckedUpdateInput>
  }

  /**
   * Game delete
   */
  export type GameDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Game
     */
    omit?: GameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameInclude<ExtArgs> | null
    /**
     * Filter which Game to delete.
     */
    where: GameWhereUniqueInput
  }

  /**
   * Game deleteMany
   */
  export type GameDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Games to delete
     */
    where?: GameWhereInput
    /**
     * Limit how many Games to delete.
     */
    limit?: number
  }

  /**
   * Game.onGoingTournament
   */
  export type Game$onGoingTournamentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tournament
     */
    select?: TournamentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tournament
     */
    omit?: TournamentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TournamentInclude<ExtArgs> | null
    where?: TournamentWhereInput
    orderBy?: TournamentOrderByWithRelationInput | TournamentOrderByWithRelationInput[]
    cursor?: TournamentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TournamentScalarFieldEnum | TournamentScalarFieldEnum[]
  }

  /**
   * Game.users
   */
  export type Game$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserGame
     */
    select?: UserGameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserGame
     */
    omit?: UserGameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserGameInclude<ExtArgs> | null
    where?: UserGameWhereInput
    orderBy?: UserGameOrderByWithRelationInput | UserGameOrderByWithRelationInput[]
    cursor?: UserGameWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserGameScalarFieldEnum | UserGameScalarFieldEnum[]
  }

  /**
   * Game without action
   */
  export type GameDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Game
     */
    omit?: GameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameInclude<ExtArgs> | null
  }


  /**
   * Model Org
   */

  export type AggregateOrg = {
    _count: OrgCountAggregateOutputType | null
    _min: OrgMinAggregateOutputType | null
    _max: OrgMaxAggregateOutputType | null
  }

  export type OrgMinAggregateOutputType = {
    id: string | null
    name: string | null
    adminId: string | null
  }

  export type OrgMaxAggregateOutputType = {
    id: string | null
    name: string | null
    adminId: string | null
  }

  export type OrgCountAggregateOutputType = {
    id: number
    name: number
    adminId: number
    _all: number
  }


  export type OrgMinAggregateInputType = {
    id?: true
    name?: true
    adminId?: true
  }

  export type OrgMaxAggregateInputType = {
    id?: true
    name?: true
    adminId?: true
  }

  export type OrgCountAggregateInputType = {
    id?: true
    name?: true
    adminId?: true
    _all?: true
  }

  export type OrgAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Org to aggregate.
     */
    where?: OrgWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orgs to fetch.
     */
    orderBy?: OrgOrderByWithRelationInput | OrgOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OrgWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orgs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orgs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Orgs
    **/
    _count?: true | OrgCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrgMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrgMaxAggregateInputType
  }

  export type GetOrgAggregateType<T extends OrgAggregateArgs> = {
        [P in keyof T & keyof AggregateOrg]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrg[P]>
      : GetScalarType<T[P], AggregateOrg[P]>
  }




  export type OrgGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrgWhereInput
    orderBy?: OrgOrderByWithAggregationInput | OrgOrderByWithAggregationInput[]
    by: OrgScalarFieldEnum[] | OrgScalarFieldEnum
    having?: OrgScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrgCountAggregateInputType | true
    _min?: OrgMinAggregateInputType
    _max?: OrgMaxAggregateInputType
  }

  export type OrgGroupByOutputType = {
    id: string
    name: string
    adminId: string
    _count: OrgCountAggregateOutputType | null
    _min: OrgMinAggregateOutputType | null
    _max: OrgMaxAggregateOutputType | null
  }

  type GetOrgGroupByPayload<T extends OrgGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrgGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrgGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrgGroupByOutputType[P]>
            : GetScalarType<T[P], OrgGroupByOutputType[P]>
        }
      >
    >


  export type OrgSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    adminId?: boolean
    admin?: boolean | UserDefaultArgs<ExtArgs>
    managers?: boolean | Org$managersArgs<ExtArgs>
    _count?: boolean | OrgCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["org"]>

  export type OrgSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    adminId?: boolean
    admin?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["org"]>

  export type OrgSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    adminId?: boolean
    admin?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["org"]>

  export type OrgSelectScalar = {
    id?: boolean
    name?: boolean
    adminId?: boolean
  }

  export type OrgOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "adminId", ExtArgs["result"]["org"]>
  export type OrgInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    admin?: boolean | UserDefaultArgs<ExtArgs>
    managers?: boolean | Org$managersArgs<ExtArgs>
    _count?: boolean | OrgCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type OrgIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    admin?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type OrgIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    admin?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $OrgPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Org"
    objects: {
      admin: Prisma.$UserPayload<ExtArgs>
      managers: Prisma.$OrgManagerPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      adminId: string
    }, ExtArgs["result"]["org"]>
    composites: {}
  }

  type OrgGetPayload<S extends boolean | null | undefined | OrgDefaultArgs> = $Result.GetResult<Prisma.$OrgPayload, S>

  type OrgCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OrgFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OrgCountAggregateInputType | true
    }

  export interface OrgDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Org'], meta: { name: 'Org' } }
    /**
     * Find zero or one Org that matches the filter.
     * @param {OrgFindUniqueArgs} args - Arguments to find a Org
     * @example
     * // Get one Org
     * const org = await prisma.org.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OrgFindUniqueArgs>(args: SelectSubset<T, OrgFindUniqueArgs<ExtArgs>>): Prisma__OrgClient<$Result.GetResult<Prisma.$OrgPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Org that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OrgFindUniqueOrThrowArgs} args - Arguments to find a Org
     * @example
     * // Get one Org
     * const org = await prisma.org.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OrgFindUniqueOrThrowArgs>(args: SelectSubset<T, OrgFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OrgClient<$Result.GetResult<Prisma.$OrgPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Org that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrgFindFirstArgs} args - Arguments to find a Org
     * @example
     * // Get one Org
     * const org = await prisma.org.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OrgFindFirstArgs>(args?: SelectSubset<T, OrgFindFirstArgs<ExtArgs>>): Prisma__OrgClient<$Result.GetResult<Prisma.$OrgPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Org that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrgFindFirstOrThrowArgs} args - Arguments to find a Org
     * @example
     * // Get one Org
     * const org = await prisma.org.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OrgFindFirstOrThrowArgs>(args?: SelectSubset<T, OrgFindFirstOrThrowArgs<ExtArgs>>): Prisma__OrgClient<$Result.GetResult<Prisma.$OrgPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Orgs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrgFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Orgs
     * const orgs = await prisma.org.findMany()
     * 
     * // Get first 10 Orgs
     * const orgs = await prisma.org.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const orgWithIdOnly = await prisma.org.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OrgFindManyArgs>(args?: SelectSubset<T, OrgFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrgPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Org.
     * @param {OrgCreateArgs} args - Arguments to create a Org.
     * @example
     * // Create one Org
     * const Org = await prisma.org.create({
     *   data: {
     *     // ... data to create a Org
     *   }
     * })
     * 
     */
    create<T extends OrgCreateArgs>(args: SelectSubset<T, OrgCreateArgs<ExtArgs>>): Prisma__OrgClient<$Result.GetResult<Prisma.$OrgPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Orgs.
     * @param {OrgCreateManyArgs} args - Arguments to create many Orgs.
     * @example
     * // Create many Orgs
     * const org = await prisma.org.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OrgCreateManyArgs>(args?: SelectSubset<T, OrgCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Orgs and returns the data saved in the database.
     * @param {OrgCreateManyAndReturnArgs} args - Arguments to create many Orgs.
     * @example
     * // Create many Orgs
     * const org = await prisma.org.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Orgs and only return the `id`
     * const orgWithIdOnly = await prisma.org.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OrgCreateManyAndReturnArgs>(args?: SelectSubset<T, OrgCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrgPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Org.
     * @param {OrgDeleteArgs} args - Arguments to delete one Org.
     * @example
     * // Delete one Org
     * const Org = await prisma.org.delete({
     *   where: {
     *     // ... filter to delete one Org
     *   }
     * })
     * 
     */
    delete<T extends OrgDeleteArgs>(args: SelectSubset<T, OrgDeleteArgs<ExtArgs>>): Prisma__OrgClient<$Result.GetResult<Prisma.$OrgPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Org.
     * @param {OrgUpdateArgs} args - Arguments to update one Org.
     * @example
     * // Update one Org
     * const org = await prisma.org.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OrgUpdateArgs>(args: SelectSubset<T, OrgUpdateArgs<ExtArgs>>): Prisma__OrgClient<$Result.GetResult<Prisma.$OrgPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Orgs.
     * @param {OrgDeleteManyArgs} args - Arguments to filter Orgs to delete.
     * @example
     * // Delete a few Orgs
     * const { count } = await prisma.org.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OrgDeleteManyArgs>(args?: SelectSubset<T, OrgDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Orgs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrgUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Orgs
     * const org = await prisma.org.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OrgUpdateManyArgs>(args: SelectSubset<T, OrgUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Orgs and returns the data updated in the database.
     * @param {OrgUpdateManyAndReturnArgs} args - Arguments to update many Orgs.
     * @example
     * // Update many Orgs
     * const org = await prisma.org.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Orgs and only return the `id`
     * const orgWithIdOnly = await prisma.org.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends OrgUpdateManyAndReturnArgs>(args: SelectSubset<T, OrgUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrgPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Org.
     * @param {OrgUpsertArgs} args - Arguments to update or create a Org.
     * @example
     * // Update or create a Org
     * const org = await prisma.org.upsert({
     *   create: {
     *     // ... data to create a Org
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Org we want to update
     *   }
     * })
     */
    upsert<T extends OrgUpsertArgs>(args: SelectSubset<T, OrgUpsertArgs<ExtArgs>>): Prisma__OrgClient<$Result.GetResult<Prisma.$OrgPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Orgs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrgCountArgs} args - Arguments to filter Orgs to count.
     * @example
     * // Count the number of Orgs
     * const count = await prisma.org.count({
     *   where: {
     *     // ... the filter for the Orgs we want to count
     *   }
     * })
    **/
    count<T extends OrgCountArgs>(
      args?: Subset<T, OrgCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrgCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Org.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrgAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OrgAggregateArgs>(args: Subset<T, OrgAggregateArgs>): Prisma.PrismaPromise<GetOrgAggregateType<T>>

    /**
     * Group by Org.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrgGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends OrgGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrgGroupByArgs['orderBy'] }
        : { orderBy?: OrgGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, OrgGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrgGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Org model
   */
  readonly fields: OrgFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Org.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OrgClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    admin<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    managers<T extends Org$managersArgs<ExtArgs> = {}>(args?: Subset<T, Org$managersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrgManagerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Org model
   */
  interface OrgFieldRefs {
    readonly id: FieldRef<"Org", 'String'>
    readonly name: FieldRef<"Org", 'String'>
    readonly adminId: FieldRef<"Org", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Org findUnique
   */
  export type OrgFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Org
     */
    select?: OrgSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Org
     */
    omit?: OrgOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrgInclude<ExtArgs> | null
    /**
     * Filter, which Org to fetch.
     */
    where: OrgWhereUniqueInput
  }

  /**
   * Org findUniqueOrThrow
   */
  export type OrgFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Org
     */
    select?: OrgSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Org
     */
    omit?: OrgOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrgInclude<ExtArgs> | null
    /**
     * Filter, which Org to fetch.
     */
    where: OrgWhereUniqueInput
  }

  /**
   * Org findFirst
   */
  export type OrgFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Org
     */
    select?: OrgSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Org
     */
    omit?: OrgOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrgInclude<ExtArgs> | null
    /**
     * Filter, which Org to fetch.
     */
    where?: OrgWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orgs to fetch.
     */
    orderBy?: OrgOrderByWithRelationInput | OrgOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Orgs.
     */
    cursor?: OrgWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orgs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orgs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Orgs.
     */
    distinct?: OrgScalarFieldEnum | OrgScalarFieldEnum[]
  }

  /**
   * Org findFirstOrThrow
   */
  export type OrgFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Org
     */
    select?: OrgSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Org
     */
    omit?: OrgOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrgInclude<ExtArgs> | null
    /**
     * Filter, which Org to fetch.
     */
    where?: OrgWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orgs to fetch.
     */
    orderBy?: OrgOrderByWithRelationInput | OrgOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Orgs.
     */
    cursor?: OrgWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orgs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orgs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Orgs.
     */
    distinct?: OrgScalarFieldEnum | OrgScalarFieldEnum[]
  }

  /**
   * Org findMany
   */
  export type OrgFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Org
     */
    select?: OrgSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Org
     */
    omit?: OrgOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrgInclude<ExtArgs> | null
    /**
     * Filter, which Orgs to fetch.
     */
    where?: OrgWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orgs to fetch.
     */
    orderBy?: OrgOrderByWithRelationInput | OrgOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Orgs.
     */
    cursor?: OrgWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orgs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orgs.
     */
    skip?: number
    distinct?: OrgScalarFieldEnum | OrgScalarFieldEnum[]
  }

  /**
   * Org create
   */
  export type OrgCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Org
     */
    select?: OrgSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Org
     */
    omit?: OrgOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrgInclude<ExtArgs> | null
    /**
     * The data needed to create a Org.
     */
    data: XOR<OrgCreateInput, OrgUncheckedCreateInput>
  }

  /**
   * Org createMany
   */
  export type OrgCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Orgs.
     */
    data: OrgCreateManyInput | OrgCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Org createManyAndReturn
   */
  export type OrgCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Org
     */
    select?: OrgSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Org
     */
    omit?: OrgOmit<ExtArgs> | null
    /**
     * The data used to create many Orgs.
     */
    data: OrgCreateManyInput | OrgCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrgIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Org update
   */
  export type OrgUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Org
     */
    select?: OrgSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Org
     */
    omit?: OrgOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrgInclude<ExtArgs> | null
    /**
     * The data needed to update a Org.
     */
    data: XOR<OrgUpdateInput, OrgUncheckedUpdateInput>
    /**
     * Choose, which Org to update.
     */
    where: OrgWhereUniqueInput
  }

  /**
   * Org updateMany
   */
  export type OrgUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Orgs.
     */
    data: XOR<OrgUpdateManyMutationInput, OrgUncheckedUpdateManyInput>
    /**
     * Filter which Orgs to update
     */
    where?: OrgWhereInput
    /**
     * Limit how many Orgs to update.
     */
    limit?: number
  }

  /**
   * Org updateManyAndReturn
   */
  export type OrgUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Org
     */
    select?: OrgSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Org
     */
    omit?: OrgOmit<ExtArgs> | null
    /**
     * The data used to update Orgs.
     */
    data: XOR<OrgUpdateManyMutationInput, OrgUncheckedUpdateManyInput>
    /**
     * Filter which Orgs to update
     */
    where?: OrgWhereInput
    /**
     * Limit how many Orgs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrgIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Org upsert
   */
  export type OrgUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Org
     */
    select?: OrgSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Org
     */
    omit?: OrgOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrgInclude<ExtArgs> | null
    /**
     * The filter to search for the Org to update in case it exists.
     */
    where: OrgWhereUniqueInput
    /**
     * In case the Org found by the `where` argument doesn't exist, create a new Org with this data.
     */
    create: XOR<OrgCreateInput, OrgUncheckedCreateInput>
    /**
     * In case the Org was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrgUpdateInput, OrgUncheckedUpdateInput>
  }

  /**
   * Org delete
   */
  export type OrgDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Org
     */
    select?: OrgSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Org
     */
    omit?: OrgOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrgInclude<ExtArgs> | null
    /**
     * Filter which Org to delete.
     */
    where: OrgWhereUniqueInput
  }

  /**
   * Org deleteMany
   */
  export type OrgDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Orgs to delete
     */
    where?: OrgWhereInput
    /**
     * Limit how many Orgs to delete.
     */
    limit?: number
  }

  /**
   * Org.managers
   */
  export type Org$managersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrgManager
     */
    select?: OrgManagerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrgManager
     */
    omit?: OrgManagerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrgManagerInclude<ExtArgs> | null
    where?: OrgManagerWhereInput
    orderBy?: OrgManagerOrderByWithRelationInput | OrgManagerOrderByWithRelationInput[]
    cursor?: OrgManagerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrgManagerScalarFieldEnum | OrgManagerScalarFieldEnum[]
  }

  /**
   * Org without action
   */
  export type OrgDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Org
     */
    select?: OrgSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Org
     */
    omit?: OrgOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrgInclude<ExtArgs> | null
  }


  /**
   * Model OrgManager
   */

  export type AggregateOrgManager = {
    _count: OrgManagerCountAggregateOutputType | null
    _min: OrgManagerMinAggregateOutputType | null
    _max: OrgManagerMaxAggregateOutputType | null
  }

  export type OrgManagerMinAggregateOutputType = {
    id: string | null
    orgId: string | null
    userId: string | null
  }

  export type OrgManagerMaxAggregateOutputType = {
    id: string | null
    orgId: string | null
    userId: string | null
  }

  export type OrgManagerCountAggregateOutputType = {
    id: number
    orgId: number
    userId: number
    _all: number
  }


  export type OrgManagerMinAggregateInputType = {
    id?: true
    orgId?: true
    userId?: true
  }

  export type OrgManagerMaxAggregateInputType = {
    id?: true
    orgId?: true
    userId?: true
  }

  export type OrgManagerCountAggregateInputType = {
    id?: true
    orgId?: true
    userId?: true
    _all?: true
  }

  export type OrgManagerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OrgManager to aggregate.
     */
    where?: OrgManagerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrgManagers to fetch.
     */
    orderBy?: OrgManagerOrderByWithRelationInput | OrgManagerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OrgManagerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrgManagers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrgManagers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned OrgManagers
    **/
    _count?: true | OrgManagerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrgManagerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrgManagerMaxAggregateInputType
  }

  export type GetOrgManagerAggregateType<T extends OrgManagerAggregateArgs> = {
        [P in keyof T & keyof AggregateOrgManager]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrgManager[P]>
      : GetScalarType<T[P], AggregateOrgManager[P]>
  }




  export type OrgManagerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrgManagerWhereInput
    orderBy?: OrgManagerOrderByWithAggregationInput | OrgManagerOrderByWithAggregationInput[]
    by: OrgManagerScalarFieldEnum[] | OrgManagerScalarFieldEnum
    having?: OrgManagerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrgManagerCountAggregateInputType | true
    _min?: OrgManagerMinAggregateInputType
    _max?: OrgManagerMaxAggregateInputType
  }

  export type OrgManagerGroupByOutputType = {
    id: string
    orgId: string
    userId: string
    _count: OrgManagerCountAggregateOutputType | null
    _min: OrgManagerMinAggregateOutputType | null
    _max: OrgManagerMaxAggregateOutputType | null
  }

  type GetOrgManagerGroupByPayload<T extends OrgManagerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrgManagerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrgManagerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrgManagerGroupByOutputType[P]>
            : GetScalarType<T[P], OrgManagerGroupByOutputType[P]>
        }
      >
    >


  export type OrgManagerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orgId?: boolean
    userId?: boolean
    org?: boolean | OrgDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["orgManager"]>

  export type OrgManagerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orgId?: boolean
    userId?: boolean
    org?: boolean | OrgDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["orgManager"]>

  export type OrgManagerSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orgId?: boolean
    userId?: boolean
    org?: boolean | OrgDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["orgManager"]>

  export type OrgManagerSelectScalar = {
    id?: boolean
    orgId?: boolean
    userId?: boolean
  }

  export type OrgManagerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "orgId" | "userId", ExtArgs["result"]["orgManager"]>
  export type OrgManagerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    org?: boolean | OrgDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type OrgManagerIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    org?: boolean | OrgDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type OrgManagerIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    org?: boolean | OrgDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $OrgManagerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "OrgManager"
    objects: {
      org: Prisma.$OrgPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      orgId: string
      userId: string
    }, ExtArgs["result"]["orgManager"]>
    composites: {}
  }

  type OrgManagerGetPayload<S extends boolean | null | undefined | OrgManagerDefaultArgs> = $Result.GetResult<Prisma.$OrgManagerPayload, S>

  type OrgManagerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OrgManagerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OrgManagerCountAggregateInputType | true
    }

  export interface OrgManagerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['OrgManager'], meta: { name: 'OrgManager' } }
    /**
     * Find zero or one OrgManager that matches the filter.
     * @param {OrgManagerFindUniqueArgs} args - Arguments to find a OrgManager
     * @example
     * // Get one OrgManager
     * const orgManager = await prisma.orgManager.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OrgManagerFindUniqueArgs>(args: SelectSubset<T, OrgManagerFindUniqueArgs<ExtArgs>>): Prisma__OrgManagerClient<$Result.GetResult<Prisma.$OrgManagerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one OrgManager that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OrgManagerFindUniqueOrThrowArgs} args - Arguments to find a OrgManager
     * @example
     * // Get one OrgManager
     * const orgManager = await prisma.orgManager.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OrgManagerFindUniqueOrThrowArgs>(args: SelectSubset<T, OrgManagerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OrgManagerClient<$Result.GetResult<Prisma.$OrgManagerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OrgManager that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrgManagerFindFirstArgs} args - Arguments to find a OrgManager
     * @example
     * // Get one OrgManager
     * const orgManager = await prisma.orgManager.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OrgManagerFindFirstArgs>(args?: SelectSubset<T, OrgManagerFindFirstArgs<ExtArgs>>): Prisma__OrgManagerClient<$Result.GetResult<Prisma.$OrgManagerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OrgManager that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrgManagerFindFirstOrThrowArgs} args - Arguments to find a OrgManager
     * @example
     * // Get one OrgManager
     * const orgManager = await prisma.orgManager.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OrgManagerFindFirstOrThrowArgs>(args?: SelectSubset<T, OrgManagerFindFirstOrThrowArgs<ExtArgs>>): Prisma__OrgManagerClient<$Result.GetResult<Prisma.$OrgManagerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more OrgManagers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrgManagerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all OrgManagers
     * const orgManagers = await prisma.orgManager.findMany()
     * 
     * // Get first 10 OrgManagers
     * const orgManagers = await prisma.orgManager.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const orgManagerWithIdOnly = await prisma.orgManager.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OrgManagerFindManyArgs>(args?: SelectSubset<T, OrgManagerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrgManagerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a OrgManager.
     * @param {OrgManagerCreateArgs} args - Arguments to create a OrgManager.
     * @example
     * // Create one OrgManager
     * const OrgManager = await prisma.orgManager.create({
     *   data: {
     *     // ... data to create a OrgManager
     *   }
     * })
     * 
     */
    create<T extends OrgManagerCreateArgs>(args: SelectSubset<T, OrgManagerCreateArgs<ExtArgs>>): Prisma__OrgManagerClient<$Result.GetResult<Prisma.$OrgManagerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many OrgManagers.
     * @param {OrgManagerCreateManyArgs} args - Arguments to create many OrgManagers.
     * @example
     * // Create many OrgManagers
     * const orgManager = await prisma.orgManager.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OrgManagerCreateManyArgs>(args?: SelectSubset<T, OrgManagerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many OrgManagers and returns the data saved in the database.
     * @param {OrgManagerCreateManyAndReturnArgs} args - Arguments to create many OrgManagers.
     * @example
     * // Create many OrgManagers
     * const orgManager = await prisma.orgManager.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many OrgManagers and only return the `id`
     * const orgManagerWithIdOnly = await prisma.orgManager.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OrgManagerCreateManyAndReturnArgs>(args?: SelectSubset<T, OrgManagerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrgManagerPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a OrgManager.
     * @param {OrgManagerDeleteArgs} args - Arguments to delete one OrgManager.
     * @example
     * // Delete one OrgManager
     * const OrgManager = await prisma.orgManager.delete({
     *   where: {
     *     // ... filter to delete one OrgManager
     *   }
     * })
     * 
     */
    delete<T extends OrgManagerDeleteArgs>(args: SelectSubset<T, OrgManagerDeleteArgs<ExtArgs>>): Prisma__OrgManagerClient<$Result.GetResult<Prisma.$OrgManagerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one OrgManager.
     * @param {OrgManagerUpdateArgs} args - Arguments to update one OrgManager.
     * @example
     * // Update one OrgManager
     * const orgManager = await prisma.orgManager.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OrgManagerUpdateArgs>(args: SelectSubset<T, OrgManagerUpdateArgs<ExtArgs>>): Prisma__OrgManagerClient<$Result.GetResult<Prisma.$OrgManagerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more OrgManagers.
     * @param {OrgManagerDeleteManyArgs} args - Arguments to filter OrgManagers to delete.
     * @example
     * // Delete a few OrgManagers
     * const { count } = await prisma.orgManager.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OrgManagerDeleteManyArgs>(args?: SelectSubset<T, OrgManagerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OrgManagers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrgManagerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many OrgManagers
     * const orgManager = await prisma.orgManager.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OrgManagerUpdateManyArgs>(args: SelectSubset<T, OrgManagerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OrgManagers and returns the data updated in the database.
     * @param {OrgManagerUpdateManyAndReturnArgs} args - Arguments to update many OrgManagers.
     * @example
     * // Update many OrgManagers
     * const orgManager = await prisma.orgManager.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more OrgManagers and only return the `id`
     * const orgManagerWithIdOnly = await prisma.orgManager.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends OrgManagerUpdateManyAndReturnArgs>(args: SelectSubset<T, OrgManagerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrgManagerPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one OrgManager.
     * @param {OrgManagerUpsertArgs} args - Arguments to update or create a OrgManager.
     * @example
     * // Update or create a OrgManager
     * const orgManager = await prisma.orgManager.upsert({
     *   create: {
     *     // ... data to create a OrgManager
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the OrgManager we want to update
     *   }
     * })
     */
    upsert<T extends OrgManagerUpsertArgs>(args: SelectSubset<T, OrgManagerUpsertArgs<ExtArgs>>): Prisma__OrgManagerClient<$Result.GetResult<Prisma.$OrgManagerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of OrgManagers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrgManagerCountArgs} args - Arguments to filter OrgManagers to count.
     * @example
     * // Count the number of OrgManagers
     * const count = await prisma.orgManager.count({
     *   where: {
     *     // ... the filter for the OrgManagers we want to count
     *   }
     * })
    **/
    count<T extends OrgManagerCountArgs>(
      args?: Subset<T, OrgManagerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrgManagerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a OrgManager.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrgManagerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OrgManagerAggregateArgs>(args: Subset<T, OrgManagerAggregateArgs>): Prisma.PrismaPromise<GetOrgManagerAggregateType<T>>

    /**
     * Group by OrgManager.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrgManagerGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends OrgManagerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrgManagerGroupByArgs['orderBy'] }
        : { orderBy?: OrgManagerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, OrgManagerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrgManagerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the OrgManager model
   */
  readonly fields: OrgManagerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for OrgManager.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OrgManagerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    org<T extends OrgDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OrgDefaultArgs<ExtArgs>>): Prisma__OrgClient<$Result.GetResult<Prisma.$OrgPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the OrgManager model
   */
  interface OrgManagerFieldRefs {
    readonly id: FieldRef<"OrgManager", 'String'>
    readonly orgId: FieldRef<"OrgManager", 'String'>
    readonly userId: FieldRef<"OrgManager", 'String'>
  }
    

  // Custom InputTypes
  /**
   * OrgManager findUnique
   */
  export type OrgManagerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrgManager
     */
    select?: OrgManagerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrgManager
     */
    omit?: OrgManagerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrgManagerInclude<ExtArgs> | null
    /**
     * Filter, which OrgManager to fetch.
     */
    where: OrgManagerWhereUniqueInput
  }

  /**
   * OrgManager findUniqueOrThrow
   */
  export type OrgManagerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrgManager
     */
    select?: OrgManagerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrgManager
     */
    omit?: OrgManagerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrgManagerInclude<ExtArgs> | null
    /**
     * Filter, which OrgManager to fetch.
     */
    where: OrgManagerWhereUniqueInput
  }

  /**
   * OrgManager findFirst
   */
  export type OrgManagerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrgManager
     */
    select?: OrgManagerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrgManager
     */
    omit?: OrgManagerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrgManagerInclude<ExtArgs> | null
    /**
     * Filter, which OrgManager to fetch.
     */
    where?: OrgManagerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrgManagers to fetch.
     */
    orderBy?: OrgManagerOrderByWithRelationInput | OrgManagerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OrgManagers.
     */
    cursor?: OrgManagerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrgManagers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrgManagers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OrgManagers.
     */
    distinct?: OrgManagerScalarFieldEnum | OrgManagerScalarFieldEnum[]
  }

  /**
   * OrgManager findFirstOrThrow
   */
  export type OrgManagerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrgManager
     */
    select?: OrgManagerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrgManager
     */
    omit?: OrgManagerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrgManagerInclude<ExtArgs> | null
    /**
     * Filter, which OrgManager to fetch.
     */
    where?: OrgManagerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrgManagers to fetch.
     */
    orderBy?: OrgManagerOrderByWithRelationInput | OrgManagerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OrgManagers.
     */
    cursor?: OrgManagerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrgManagers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrgManagers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OrgManagers.
     */
    distinct?: OrgManagerScalarFieldEnum | OrgManagerScalarFieldEnum[]
  }

  /**
   * OrgManager findMany
   */
  export type OrgManagerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrgManager
     */
    select?: OrgManagerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrgManager
     */
    omit?: OrgManagerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrgManagerInclude<ExtArgs> | null
    /**
     * Filter, which OrgManagers to fetch.
     */
    where?: OrgManagerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrgManagers to fetch.
     */
    orderBy?: OrgManagerOrderByWithRelationInput | OrgManagerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing OrgManagers.
     */
    cursor?: OrgManagerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrgManagers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrgManagers.
     */
    skip?: number
    distinct?: OrgManagerScalarFieldEnum | OrgManagerScalarFieldEnum[]
  }

  /**
   * OrgManager create
   */
  export type OrgManagerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrgManager
     */
    select?: OrgManagerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrgManager
     */
    omit?: OrgManagerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrgManagerInclude<ExtArgs> | null
    /**
     * The data needed to create a OrgManager.
     */
    data: XOR<OrgManagerCreateInput, OrgManagerUncheckedCreateInput>
  }

  /**
   * OrgManager createMany
   */
  export type OrgManagerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many OrgManagers.
     */
    data: OrgManagerCreateManyInput | OrgManagerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * OrgManager createManyAndReturn
   */
  export type OrgManagerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrgManager
     */
    select?: OrgManagerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the OrgManager
     */
    omit?: OrgManagerOmit<ExtArgs> | null
    /**
     * The data used to create many OrgManagers.
     */
    data: OrgManagerCreateManyInput | OrgManagerCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrgManagerIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * OrgManager update
   */
  export type OrgManagerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrgManager
     */
    select?: OrgManagerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrgManager
     */
    omit?: OrgManagerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrgManagerInclude<ExtArgs> | null
    /**
     * The data needed to update a OrgManager.
     */
    data: XOR<OrgManagerUpdateInput, OrgManagerUncheckedUpdateInput>
    /**
     * Choose, which OrgManager to update.
     */
    where: OrgManagerWhereUniqueInput
  }

  /**
   * OrgManager updateMany
   */
  export type OrgManagerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update OrgManagers.
     */
    data: XOR<OrgManagerUpdateManyMutationInput, OrgManagerUncheckedUpdateManyInput>
    /**
     * Filter which OrgManagers to update
     */
    where?: OrgManagerWhereInput
    /**
     * Limit how many OrgManagers to update.
     */
    limit?: number
  }

  /**
   * OrgManager updateManyAndReturn
   */
  export type OrgManagerUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrgManager
     */
    select?: OrgManagerSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the OrgManager
     */
    omit?: OrgManagerOmit<ExtArgs> | null
    /**
     * The data used to update OrgManagers.
     */
    data: XOR<OrgManagerUpdateManyMutationInput, OrgManagerUncheckedUpdateManyInput>
    /**
     * Filter which OrgManagers to update
     */
    where?: OrgManagerWhereInput
    /**
     * Limit how many OrgManagers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrgManagerIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * OrgManager upsert
   */
  export type OrgManagerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrgManager
     */
    select?: OrgManagerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrgManager
     */
    omit?: OrgManagerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrgManagerInclude<ExtArgs> | null
    /**
     * The filter to search for the OrgManager to update in case it exists.
     */
    where: OrgManagerWhereUniqueInput
    /**
     * In case the OrgManager found by the `where` argument doesn't exist, create a new OrgManager with this data.
     */
    create: XOR<OrgManagerCreateInput, OrgManagerUncheckedCreateInput>
    /**
     * In case the OrgManager was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrgManagerUpdateInput, OrgManagerUncheckedUpdateInput>
  }

  /**
   * OrgManager delete
   */
  export type OrgManagerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrgManager
     */
    select?: OrgManagerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrgManager
     */
    omit?: OrgManagerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrgManagerInclude<ExtArgs> | null
    /**
     * Filter which OrgManager to delete.
     */
    where: OrgManagerWhereUniqueInput
  }

  /**
   * OrgManager deleteMany
   */
  export type OrgManagerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OrgManagers to delete
     */
    where?: OrgManagerWhereInput
    /**
     * Limit how many OrgManagers to delete.
     */
    limit?: number
  }

  /**
   * OrgManager without action
   */
  export type OrgManagerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrgManager
     */
    select?: OrgManagerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrgManager
     */
    omit?: OrgManagerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrgManagerInclude<ExtArgs> | null
  }


  /**
   * Model Profile
   */

  export type AggregateProfile = {
    _count: ProfileCountAggregateOutputType | null
    _min: ProfileMinAggregateOutputType | null
    _max: ProfileMaxAggregateOutputType | null
  }

  export type ProfileMinAggregateOutputType = {
    userId: string | null
    userTeam: string | null
  }

  export type ProfileMaxAggregateOutputType = {
    userId: string | null
    userTeam: string | null
  }

  export type ProfileCountAggregateOutputType = {
    userId: number
    userTeam: number
    _all: number
  }


  export type ProfileMinAggregateInputType = {
    userId?: true
    userTeam?: true
  }

  export type ProfileMaxAggregateInputType = {
    userId?: true
    userTeam?: true
  }

  export type ProfileCountAggregateInputType = {
    userId?: true
    userTeam?: true
    _all?: true
  }

  export type ProfileAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Profile to aggregate.
     */
    where?: ProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Profiles to fetch.
     */
    orderBy?: ProfileOrderByWithRelationInput | ProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Profiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Profiles
    **/
    _count?: true | ProfileCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProfileMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProfileMaxAggregateInputType
  }

  export type GetProfileAggregateType<T extends ProfileAggregateArgs> = {
        [P in keyof T & keyof AggregateProfile]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProfile[P]>
      : GetScalarType<T[P], AggregateProfile[P]>
  }




  export type ProfileGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProfileWhereInput
    orderBy?: ProfileOrderByWithAggregationInput | ProfileOrderByWithAggregationInput[]
    by: ProfileScalarFieldEnum[] | ProfileScalarFieldEnum
    having?: ProfileScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProfileCountAggregateInputType | true
    _min?: ProfileMinAggregateInputType
    _max?: ProfileMaxAggregateInputType
  }

  export type ProfileGroupByOutputType = {
    userId: string
    userTeam: string
    _count: ProfileCountAggregateOutputType | null
    _min: ProfileMinAggregateOutputType | null
    _max: ProfileMaxAggregateOutputType | null
  }

  type GetProfileGroupByPayload<T extends ProfileGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProfileGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProfileGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProfileGroupByOutputType[P]>
            : GetScalarType<T[P], ProfileGroupByOutputType[P]>
        }
      >
    >


  export type ProfileSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    userTeam?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    gamePlay?: boolean | Profile$gamePlayArgs<ExtArgs>
    teams?: boolean | TeamDefaultArgs<ExtArgs>
    _count?: boolean | ProfileCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["profile"]>

  export type ProfileSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    userTeam?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    teams?: boolean | TeamDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["profile"]>

  export type ProfileSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    userTeam?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    teams?: boolean | TeamDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["profile"]>

  export type ProfileSelectScalar = {
    userId?: boolean
    userTeam?: boolean
  }

  export type ProfileOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"userId" | "userTeam", ExtArgs["result"]["profile"]>
  export type ProfileInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    gamePlay?: boolean | Profile$gamePlayArgs<ExtArgs>
    teams?: boolean | TeamDefaultArgs<ExtArgs>
    _count?: boolean | ProfileCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProfileIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    teams?: boolean | TeamDefaultArgs<ExtArgs>
  }
  export type ProfileIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    teams?: boolean | TeamDefaultArgs<ExtArgs>
  }

  export type $ProfilePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Profile"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      gamePlay: Prisma.$UserGamePayload<ExtArgs>[]
      teams: Prisma.$TeamPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      userId: string
      userTeam: string
    }, ExtArgs["result"]["profile"]>
    composites: {}
  }

  type ProfileGetPayload<S extends boolean | null | undefined | ProfileDefaultArgs> = $Result.GetResult<Prisma.$ProfilePayload, S>

  type ProfileCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProfileFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProfileCountAggregateInputType | true
    }

  export interface ProfileDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Profile'], meta: { name: 'Profile' } }
    /**
     * Find zero or one Profile that matches the filter.
     * @param {ProfileFindUniqueArgs} args - Arguments to find a Profile
     * @example
     * // Get one Profile
     * const profile = await prisma.profile.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProfileFindUniqueArgs>(args: SelectSubset<T, ProfileFindUniqueArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Profile that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProfileFindUniqueOrThrowArgs} args - Arguments to find a Profile
     * @example
     * // Get one Profile
     * const profile = await prisma.profile.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProfileFindUniqueOrThrowArgs>(args: SelectSubset<T, ProfileFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Profile that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileFindFirstArgs} args - Arguments to find a Profile
     * @example
     * // Get one Profile
     * const profile = await prisma.profile.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProfileFindFirstArgs>(args?: SelectSubset<T, ProfileFindFirstArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Profile that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileFindFirstOrThrowArgs} args - Arguments to find a Profile
     * @example
     * // Get one Profile
     * const profile = await prisma.profile.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProfileFindFirstOrThrowArgs>(args?: SelectSubset<T, ProfileFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Profiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Profiles
     * const profiles = await prisma.profile.findMany()
     * 
     * // Get first 10 Profiles
     * const profiles = await prisma.profile.findMany({ take: 10 })
     * 
     * // Only select the `userId`
     * const profileWithUserIdOnly = await prisma.profile.findMany({ select: { userId: true } })
     * 
     */
    findMany<T extends ProfileFindManyArgs>(args?: SelectSubset<T, ProfileFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Profile.
     * @param {ProfileCreateArgs} args - Arguments to create a Profile.
     * @example
     * // Create one Profile
     * const Profile = await prisma.profile.create({
     *   data: {
     *     // ... data to create a Profile
     *   }
     * })
     * 
     */
    create<T extends ProfileCreateArgs>(args: SelectSubset<T, ProfileCreateArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Profiles.
     * @param {ProfileCreateManyArgs} args - Arguments to create many Profiles.
     * @example
     * // Create many Profiles
     * const profile = await prisma.profile.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProfileCreateManyArgs>(args?: SelectSubset<T, ProfileCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Profiles and returns the data saved in the database.
     * @param {ProfileCreateManyAndReturnArgs} args - Arguments to create many Profiles.
     * @example
     * // Create many Profiles
     * const profile = await prisma.profile.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Profiles and only return the `userId`
     * const profileWithUserIdOnly = await prisma.profile.createManyAndReturn({
     *   select: { userId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProfileCreateManyAndReturnArgs>(args?: SelectSubset<T, ProfileCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Profile.
     * @param {ProfileDeleteArgs} args - Arguments to delete one Profile.
     * @example
     * // Delete one Profile
     * const Profile = await prisma.profile.delete({
     *   where: {
     *     // ... filter to delete one Profile
     *   }
     * })
     * 
     */
    delete<T extends ProfileDeleteArgs>(args: SelectSubset<T, ProfileDeleteArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Profile.
     * @param {ProfileUpdateArgs} args - Arguments to update one Profile.
     * @example
     * // Update one Profile
     * const profile = await prisma.profile.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProfileUpdateArgs>(args: SelectSubset<T, ProfileUpdateArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Profiles.
     * @param {ProfileDeleteManyArgs} args - Arguments to filter Profiles to delete.
     * @example
     * // Delete a few Profiles
     * const { count } = await prisma.profile.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProfileDeleteManyArgs>(args?: SelectSubset<T, ProfileDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Profiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Profiles
     * const profile = await prisma.profile.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProfileUpdateManyArgs>(args: SelectSubset<T, ProfileUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Profiles and returns the data updated in the database.
     * @param {ProfileUpdateManyAndReturnArgs} args - Arguments to update many Profiles.
     * @example
     * // Update many Profiles
     * const profile = await prisma.profile.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Profiles and only return the `userId`
     * const profileWithUserIdOnly = await prisma.profile.updateManyAndReturn({
     *   select: { userId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProfileUpdateManyAndReturnArgs>(args: SelectSubset<T, ProfileUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Profile.
     * @param {ProfileUpsertArgs} args - Arguments to update or create a Profile.
     * @example
     * // Update or create a Profile
     * const profile = await prisma.profile.upsert({
     *   create: {
     *     // ... data to create a Profile
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Profile we want to update
     *   }
     * })
     */
    upsert<T extends ProfileUpsertArgs>(args: SelectSubset<T, ProfileUpsertArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Profiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileCountArgs} args - Arguments to filter Profiles to count.
     * @example
     * // Count the number of Profiles
     * const count = await prisma.profile.count({
     *   where: {
     *     // ... the filter for the Profiles we want to count
     *   }
     * })
    **/
    count<T extends ProfileCountArgs>(
      args?: Subset<T, ProfileCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProfileCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Profile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProfileAggregateArgs>(args: Subset<T, ProfileAggregateArgs>): Prisma.PrismaPromise<GetProfileAggregateType<T>>

    /**
     * Group by Profile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProfileGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProfileGroupByArgs['orderBy'] }
        : { orderBy?: ProfileGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProfileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProfileGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Profile model
   */
  readonly fields: ProfileFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Profile.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProfileClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    gamePlay<T extends Profile$gamePlayArgs<ExtArgs> = {}>(args?: Subset<T, Profile$gamePlayArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserGamePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    teams<T extends TeamDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TeamDefaultArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Profile model
   */
  interface ProfileFieldRefs {
    readonly userId: FieldRef<"Profile", 'String'>
    readonly userTeam: FieldRef<"Profile", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Profile findUnique
   */
  export type ProfileFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter, which Profile to fetch.
     */
    where: ProfileWhereUniqueInput
  }

  /**
   * Profile findUniqueOrThrow
   */
  export type ProfileFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter, which Profile to fetch.
     */
    where: ProfileWhereUniqueInput
  }

  /**
   * Profile findFirst
   */
  export type ProfileFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter, which Profile to fetch.
     */
    where?: ProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Profiles to fetch.
     */
    orderBy?: ProfileOrderByWithRelationInput | ProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Profiles.
     */
    cursor?: ProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Profiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Profiles.
     */
    distinct?: ProfileScalarFieldEnum | ProfileScalarFieldEnum[]
  }

  /**
   * Profile findFirstOrThrow
   */
  export type ProfileFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter, which Profile to fetch.
     */
    where?: ProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Profiles to fetch.
     */
    orderBy?: ProfileOrderByWithRelationInput | ProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Profiles.
     */
    cursor?: ProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Profiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Profiles.
     */
    distinct?: ProfileScalarFieldEnum | ProfileScalarFieldEnum[]
  }

  /**
   * Profile findMany
   */
  export type ProfileFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter, which Profiles to fetch.
     */
    where?: ProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Profiles to fetch.
     */
    orderBy?: ProfileOrderByWithRelationInput | ProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Profiles.
     */
    cursor?: ProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Profiles.
     */
    skip?: number
    distinct?: ProfileScalarFieldEnum | ProfileScalarFieldEnum[]
  }

  /**
   * Profile create
   */
  export type ProfileCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * The data needed to create a Profile.
     */
    data: XOR<ProfileCreateInput, ProfileUncheckedCreateInput>
  }

  /**
   * Profile createMany
   */
  export type ProfileCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Profiles.
     */
    data: ProfileCreateManyInput | ProfileCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Profile createManyAndReturn
   */
  export type ProfileCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * The data used to create many Profiles.
     */
    data: ProfileCreateManyInput | ProfileCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Profile update
   */
  export type ProfileUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * The data needed to update a Profile.
     */
    data: XOR<ProfileUpdateInput, ProfileUncheckedUpdateInput>
    /**
     * Choose, which Profile to update.
     */
    where: ProfileWhereUniqueInput
  }

  /**
   * Profile updateMany
   */
  export type ProfileUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Profiles.
     */
    data: XOR<ProfileUpdateManyMutationInput, ProfileUncheckedUpdateManyInput>
    /**
     * Filter which Profiles to update
     */
    where?: ProfileWhereInput
    /**
     * Limit how many Profiles to update.
     */
    limit?: number
  }

  /**
   * Profile updateManyAndReturn
   */
  export type ProfileUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * The data used to update Profiles.
     */
    data: XOR<ProfileUpdateManyMutationInput, ProfileUncheckedUpdateManyInput>
    /**
     * Filter which Profiles to update
     */
    where?: ProfileWhereInput
    /**
     * Limit how many Profiles to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Profile upsert
   */
  export type ProfileUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * The filter to search for the Profile to update in case it exists.
     */
    where: ProfileWhereUniqueInput
    /**
     * In case the Profile found by the `where` argument doesn't exist, create a new Profile with this data.
     */
    create: XOR<ProfileCreateInput, ProfileUncheckedCreateInput>
    /**
     * In case the Profile was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProfileUpdateInput, ProfileUncheckedUpdateInput>
  }

  /**
   * Profile delete
   */
  export type ProfileDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter which Profile to delete.
     */
    where: ProfileWhereUniqueInput
  }

  /**
   * Profile deleteMany
   */
  export type ProfileDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Profiles to delete
     */
    where?: ProfileWhereInput
    /**
     * Limit how many Profiles to delete.
     */
    limit?: number
  }

  /**
   * Profile.gamePlay
   */
  export type Profile$gamePlayArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserGame
     */
    select?: UserGameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserGame
     */
    omit?: UserGameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserGameInclude<ExtArgs> | null
    where?: UserGameWhereInput
    orderBy?: UserGameOrderByWithRelationInput | UserGameOrderByWithRelationInput[]
    cursor?: UserGameWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserGameScalarFieldEnum | UserGameScalarFieldEnum[]
  }

  /**
   * Profile without action
   */
  export type ProfileDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
  }


  /**
   * Model Tournament
   */

  export type AggregateTournament = {
    _count: TournamentCountAggregateOutputType | null
    _avg: TournamentAvgAggregateOutputType | null
    _sum: TournamentSumAggregateOutputType | null
    _min: TournamentMinAggregateOutputType | null
    _max: TournamentMaxAggregateOutputType | null
  }

  export type TournamentAvgAggregateOutputType = {
    noOfTeam: number | null
    noOfPlayerInTeam: number | null
  }

  export type TournamentSumAggregateOutputType = {
    noOfTeam: number | null
    noOfPlayerInTeam: number | null
  }

  export type TournamentMinAggregateOutputType = {
    id: string | null
    noOfTeam: number | null
    gameName: string | null
    noOfPlayerInTeam: number | null
  }

  export type TournamentMaxAggregateOutputType = {
    id: string | null
    noOfTeam: number | null
    gameName: string | null
    noOfPlayerInTeam: number | null
  }

  export type TournamentCountAggregateOutputType = {
    id: number
    noOfTeam: number
    gameName: number
    noOfPlayerInTeam: number
    _all: number
  }


  export type TournamentAvgAggregateInputType = {
    noOfTeam?: true
    noOfPlayerInTeam?: true
  }

  export type TournamentSumAggregateInputType = {
    noOfTeam?: true
    noOfPlayerInTeam?: true
  }

  export type TournamentMinAggregateInputType = {
    id?: true
    noOfTeam?: true
    gameName?: true
    noOfPlayerInTeam?: true
  }

  export type TournamentMaxAggregateInputType = {
    id?: true
    noOfTeam?: true
    gameName?: true
    noOfPlayerInTeam?: true
  }

  export type TournamentCountAggregateInputType = {
    id?: true
    noOfTeam?: true
    gameName?: true
    noOfPlayerInTeam?: true
    _all?: true
  }

  export type TournamentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tournament to aggregate.
     */
    where?: TournamentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tournaments to fetch.
     */
    orderBy?: TournamentOrderByWithRelationInput | TournamentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TournamentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tournaments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tournaments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tournaments
    **/
    _count?: true | TournamentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TournamentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TournamentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TournamentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TournamentMaxAggregateInputType
  }

  export type GetTournamentAggregateType<T extends TournamentAggregateArgs> = {
        [P in keyof T & keyof AggregateTournament]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTournament[P]>
      : GetScalarType<T[P], AggregateTournament[P]>
  }




  export type TournamentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TournamentWhereInput
    orderBy?: TournamentOrderByWithAggregationInput | TournamentOrderByWithAggregationInput[]
    by: TournamentScalarFieldEnum[] | TournamentScalarFieldEnum
    having?: TournamentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TournamentCountAggregateInputType | true
    _avg?: TournamentAvgAggregateInputType
    _sum?: TournamentSumAggregateInputType
    _min?: TournamentMinAggregateInputType
    _max?: TournamentMaxAggregateInputType
  }

  export type TournamentGroupByOutputType = {
    id: string
    noOfTeam: number
    gameName: string
    noOfPlayerInTeam: number
    _count: TournamentCountAggregateOutputType | null
    _avg: TournamentAvgAggregateOutputType | null
    _sum: TournamentSumAggregateOutputType | null
    _min: TournamentMinAggregateOutputType | null
    _max: TournamentMaxAggregateOutputType | null
  }

  type GetTournamentGroupByPayload<T extends TournamentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TournamentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TournamentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TournamentGroupByOutputType[P]>
            : GetScalarType<T[P], TournamentGroupByOutputType[P]>
        }
      >
    >


  export type TournamentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    noOfTeam?: boolean
    gameName?: boolean
    noOfPlayerInTeam?: boolean
    game?: boolean | GameDefaultArgs<ExtArgs>
    teams?: boolean | Tournament$teamsArgs<ExtArgs>
    _count?: boolean | TournamentCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tournament"]>

  export type TournamentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    noOfTeam?: boolean
    gameName?: boolean
    noOfPlayerInTeam?: boolean
    game?: boolean | GameDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tournament"]>

  export type TournamentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    noOfTeam?: boolean
    gameName?: boolean
    noOfPlayerInTeam?: boolean
    game?: boolean | GameDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tournament"]>

  export type TournamentSelectScalar = {
    id?: boolean
    noOfTeam?: boolean
    gameName?: boolean
    noOfPlayerInTeam?: boolean
  }

  export type TournamentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "noOfTeam" | "gameName" | "noOfPlayerInTeam", ExtArgs["result"]["tournament"]>
  export type TournamentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    game?: boolean | GameDefaultArgs<ExtArgs>
    teams?: boolean | Tournament$teamsArgs<ExtArgs>
    _count?: boolean | TournamentCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TournamentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    game?: boolean | GameDefaultArgs<ExtArgs>
  }
  export type TournamentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    game?: boolean | GameDefaultArgs<ExtArgs>
  }

  export type $TournamentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Tournament"
    objects: {
      game: Prisma.$GamePayload<ExtArgs>
      teams: Prisma.$TeamPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      noOfTeam: number
      gameName: string
      noOfPlayerInTeam: number
    }, ExtArgs["result"]["tournament"]>
    composites: {}
  }

  type TournamentGetPayload<S extends boolean | null | undefined | TournamentDefaultArgs> = $Result.GetResult<Prisma.$TournamentPayload, S>

  type TournamentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TournamentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TournamentCountAggregateInputType | true
    }

  export interface TournamentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Tournament'], meta: { name: 'Tournament' } }
    /**
     * Find zero or one Tournament that matches the filter.
     * @param {TournamentFindUniqueArgs} args - Arguments to find a Tournament
     * @example
     * // Get one Tournament
     * const tournament = await prisma.tournament.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TournamentFindUniqueArgs>(args: SelectSubset<T, TournamentFindUniqueArgs<ExtArgs>>): Prisma__TournamentClient<$Result.GetResult<Prisma.$TournamentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Tournament that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TournamentFindUniqueOrThrowArgs} args - Arguments to find a Tournament
     * @example
     * // Get one Tournament
     * const tournament = await prisma.tournament.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TournamentFindUniqueOrThrowArgs>(args: SelectSubset<T, TournamentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TournamentClient<$Result.GetResult<Prisma.$TournamentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tournament that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TournamentFindFirstArgs} args - Arguments to find a Tournament
     * @example
     * // Get one Tournament
     * const tournament = await prisma.tournament.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TournamentFindFirstArgs>(args?: SelectSubset<T, TournamentFindFirstArgs<ExtArgs>>): Prisma__TournamentClient<$Result.GetResult<Prisma.$TournamentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tournament that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TournamentFindFirstOrThrowArgs} args - Arguments to find a Tournament
     * @example
     * // Get one Tournament
     * const tournament = await prisma.tournament.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TournamentFindFirstOrThrowArgs>(args?: SelectSubset<T, TournamentFindFirstOrThrowArgs<ExtArgs>>): Prisma__TournamentClient<$Result.GetResult<Prisma.$TournamentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tournaments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TournamentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tournaments
     * const tournaments = await prisma.tournament.findMany()
     * 
     * // Get first 10 Tournaments
     * const tournaments = await prisma.tournament.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tournamentWithIdOnly = await prisma.tournament.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TournamentFindManyArgs>(args?: SelectSubset<T, TournamentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TournamentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Tournament.
     * @param {TournamentCreateArgs} args - Arguments to create a Tournament.
     * @example
     * // Create one Tournament
     * const Tournament = await prisma.tournament.create({
     *   data: {
     *     // ... data to create a Tournament
     *   }
     * })
     * 
     */
    create<T extends TournamentCreateArgs>(args: SelectSubset<T, TournamentCreateArgs<ExtArgs>>): Prisma__TournamentClient<$Result.GetResult<Prisma.$TournamentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tournaments.
     * @param {TournamentCreateManyArgs} args - Arguments to create many Tournaments.
     * @example
     * // Create many Tournaments
     * const tournament = await prisma.tournament.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TournamentCreateManyArgs>(args?: SelectSubset<T, TournamentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tournaments and returns the data saved in the database.
     * @param {TournamentCreateManyAndReturnArgs} args - Arguments to create many Tournaments.
     * @example
     * // Create many Tournaments
     * const tournament = await prisma.tournament.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tournaments and only return the `id`
     * const tournamentWithIdOnly = await prisma.tournament.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TournamentCreateManyAndReturnArgs>(args?: SelectSubset<T, TournamentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TournamentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Tournament.
     * @param {TournamentDeleteArgs} args - Arguments to delete one Tournament.
     * @example
     * // Delete one Tournament
     * const Tournament = await prisma.tournament.delete({
     *   where: {
     *     // ... filter to delete one Tournament
     *   }
     * })
     * 
     */
    delete<T extends TournamentDeleteArgs>(args: SelectSubset<T, TournamentDeleteArgs<ExtArgs>>): Prisma__TournamentClient<$Result.GetResult<Prisma.$TournamentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Tournament.
     * @param {TournamentUpdateArgs} args - Arguments to update one Tournament.
     * @example
     * // Update one Tournament
     * const tournament = await prisma.tournament.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TournamentUpdateArgs>(args: SelectSubset<T, TournamentUpdateArgs<ExtArgs>>): Prisma__TournamentClient<$Result.GetResult<Prisma.$TournamentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tournaments.
     * @param {TournamentDeleteManyArgs} args - Arguments to filter Tournaments to delete.
     * @example
     * // Delete a few Tournaments
     * const { count } = await prisma.tournament.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TournamentDeleteManyArgs>(args?: SelectSubset<T, TournamentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tournaments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TournamentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tournaments
     * const tournament = await prisma.tournament.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TournamentUpdateManyArgs>(args: SelectSubset<T, TournamentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tournaments and returns the data updated in the database.
     * @param {TournamentUpdateManyAndReturnArgs} args - Arguments to update many Tournaments.
     * @example
     * // Update many Tournaments
     * const tournament = await prisma.tournament.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tournaments and only return the `id`
     * const tournamentWithIdOnly = await prisma.tournament.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TournamentUpdateManyAndReturnArgs>(args: SelectSubset<T, TournamentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TournamentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Tournament.
     * @param {TournamentUpsertArgs} args - Arguments to update or create a Tournament.
     * @example
     * // Update or create a Tournament
     * const tournament = await prisma.tournament.upsert({
     *   create: {
     *     // ... data to create a Tournament
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tournament we want to update
     *   }
     * })
     */
    upsert<T extends TournamentUpsertArgs>(args: SelectSubset<T, TournamentUpsertArgs<ExtArgs>>): Prisma__TournamentClient<$Result.GetResult<Prisma.$TournamentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tournaments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TournamentCountArgs} args - Arguments to filter Tournaments to count.
     * @example
     * // Count the number of Tournaments
     * const count = await prisma.tournament.count({
     *   where: {
     *     // ... the filter for the Tournaments we want to count
     *   }
     * })
    **/
    count<T extends TournamentCountArgs>(
      args?: Subset<T, TournamentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TournamentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tournament.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TournamentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TournamentAggregateArgs>(args: Subset<T, TournamentAggregateArgs>): Prisma.PrismaPromise<GetTournamentAggregateType<T>>

    /**
     * Group by Tournament.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TournamentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TournamentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TournamentGroupByArgs['orderBy'] }
        : { orderBy?: TournamentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TournamentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTournamentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Tournament model
   */
  readonly fields: TournamentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Tournament.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TournamentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    game<T extends GameDefaultArgs<ExtArgs> = {}>(args?: Subset<T, GameDefaultArgs<ExtArgs>>): Prisma__GameClient<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    teams<T extends Tournament$teamsArgs<ExtArgs> = {}>(args?: Subset<T, Tournament$teamsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Tournament model
   */
  interface TournamentFieldRefs {
    readonly id: FieldRef<"Tournament", 'String'>
    readonly noOfTeam: FieldRef<"Tournament", 'Int'>
    readonly gameName: FieldRef<"Tournament", 'String'>
    readonly noOfPlayerInTeam: FieldRef<"Tournament", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Tournament findUnique
   */
  export type TournamentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tournament
     */
    select?: TournamentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tournament
     */
    omit?: TournamentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TournamentInclude<ExtArgs> | null
    /**
     * Filter, which Tournament to fetch.
     */
    where: TournamentWhereUniqueInput
  }

  /**
   * Tournament findUniqueOrThrow
   */
  export type TournamentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tournament
     */
    select?: TournamentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tournament
     */
    omit?: TournamentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TournamentInclude<ExtArgs> | null
    /**
     * Filter, which Tournament to fetch.
     */
    where: TournamentWhereUniqueInput
  }

  /**
   * Tournament findFirst
   */
  export type TournamentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tournament
     */
    select?: TournamentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tournament
     */
    omit?: TournamentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TournamentInclude<ExtArgs> | null
    /**
     * Filter, which Tournament to fetch.
     */
    where?: TournamentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tournaments to fetch.
     */
    orderBy?: TournamentOrderByWithRelationInput | TournamentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tournaments.
     */
    cursor?: TournamentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tournaments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tournaments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tournaments.
     */
    distinct?: TournamentScalarFieldEnum | TournamentScalarFieldEnum[]
  }

  /**
   * Tournament findFirstOrThrow
   */
  export type TournamentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tournament
     */
    select?: TournamentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tournament
     */
    omit?: TournamentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TournamentInclude<ExtArgs> | null
    /**
     * Filter, which Tournament to fetch.
     */
    where?: TournamentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tournaments to fetch.
     */
    orderBy?: TournamentOrderByWithRelationInput | TournamentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tournaments.
     */
    cursor?: TournamentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tournaments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tournaments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tournaments.
     */
    distinct?: TournamentScalarFieldEnum | TournamentScalarFieldEnum[]
  }

  /**
   * Tournament findMany
   */
  export type TournamentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tournament
     */
    select?: TournamentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tournament
     */
    omit?: TournamentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TournamentInclude<ExtArgs> | null
    /**
     * Filter, which Tournaments to fetch.
     */
    where?: TournamentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tournaments to fetch.
     */
    orderBy?: TournamentOrderByWithRelationInput | TournamentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tournaments.
     */
    cursor?: TournamentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tournaments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tournaments.
     */
    skip?: number
    distinct?: TournamentScalarFieldEnum | TournamentScalarFieldEnum[]
  }

  /**
   * Tournament create
   */
  export type TournamentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tournament
     */
    select?: TournamentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tournament
     */
    omit?: TournamentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TournamentInclude<ExtArgs> | null
    /**
     * The data needed to create a Tournament.
     */
    data: XOR<TournamentCreateInput, TournamentUncheckedCreateInput>
  }

  /**
   * Tournament createMany
   */
  export type TournamentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tournaments.
     */
    data: TournamentCreateManyInput | TournamentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Tournament createManyAndReturn
   */
  export type TournamentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tournament
     */
    select?: TournamentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Tournament
     */
    omit?: TournamentOmit<ExtArgs> | null
    /**
     * The data used to create many Tournaments.
     */
    data: TournamentCreateManyInput | TournamentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TournamentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Tournament update
   */
  export type TournamentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tournament
     */
    select?: TournamentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tournament
     */
    omit?: TournamentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TournamentInclude<ExtArgs> | null
    /**
     * The data needed to update a Tournament.
     */
    data: XOR<TournamentUpdateInput, TournamentUncheckedUpdateInput>
    /**
     * Choose, which Tournament to update.
     */
    where: TournamentWhereUniqueInput
  }

  /**
   * Tournament updateMany
   */
  export type TournamentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tournaments.
     */
    data: XOR<TournamentUpdateManyMutationInput, TournamentUncheckedUpdateManyInput>
    /**
     * Filter which Tournaments to update
     */
    where?: TournamentWhereInput
    /**
     * Limit how many Tournaments to update.
     */
    limit?: number
  }

  /**
   * Tournament updateManyAndReturn
   */
  export type TournamentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tournament
     */
    select?: TournamentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Tournament
     */
    omit?: TournamentOmit<ExtArgs> | null
    /**
     * The data used to update Tournaments.
     */
    data: XOR<TournamentUpdateManyMutationInput, TournamentUncheckedUpdateManyInput>
    /**
     * Filter which Tournaments to update
     */
    where?: TournamentWhereInput
    /**
     * Limit how many Tournaments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TournamentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Tournament upsert
   */
  export type TournamentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tournament
     */
    select?: TournamentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tournament
     */
    omit?: TournamentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TournamentInclude<ExtArgs> | null
    /**
     * The filter to search for the Tournament to update in case it exists.
     */
    where: TournamentWhereUniqueInput
    /**
     * In case the Tournament found by the `where` argument doesn't exist, create a new Tournament with this data.
     */
    create: XOR<TournamentCreateInput, TournamentUncheckedCreateInput>
    /**
     * In case the Tournament was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TournamentUpdateInput, TournamentUncheckedUpdateInput>
  }

  /**
   * Tournament delete
   */
  export type TournamentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tournament
     */
    select?: TournamentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tournament
     */
    omit?: TournamentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TournamentInclude<ExtArgs> | null
    /**
     * Filter which Tournament to delete.
     */
    where: TournamentWhereUniqueInput
  }

  /**
   * Tournament deleteMany
   */
  export type TournamentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tournaments to delete
     */
    where?: TournamentWhereInput
    /**
     * Limit how many Tournaments to delete.
     */
    limit?: number
  }

  /**
   * Tournament.teams
   */
  export type Tournament$teamsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    where?: TeamWhereInput
    orderBy?: TeamOrderByWithRelationInput | TeamOrderByWithRelationInput[]
    cursor?: TeamWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TeamScalarFieldEnum | TeamScalarFieldEnum[]
  }

  /**
   * Tournament without action
   */
  export type TournamentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tournament
     */
    select?: TournamentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tournament
     */
    omit?: TournamentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TournamentInclude<ExtArgs> | null
  }


  /**
   * Model Team
   */

  export type AggregateTeam = {
    _count: TeamCountAggregateOutputType | null
    _avg: TeamAvgAggregateOutputType | null
    _sum: TeamSumAggregateOutputType | null
    _min: TeamMinAggregateOutputType | null
    _max: TeamMaxAggregateOutputType | null
  }

  export type TeamAvgAggregateOutputType = {
    noOfPlayer: number | null
  }

  export type TeamSumAggregateOutputType = {
    noOfPlayer: number | null
  }

  export type TeamMinAggregateOutputType = {
    id: string | null
    noOfPlayer: number | null
  }

  export type TeamMaxAggregateOutputType = {
    id: string | null
    noOfPlayer: number | null
  }

  export type TeamCountAggregateOutputType = {
    id: number
    noOfPlayer: number
    _all: number
  }


  export type TeamAvgAggregateInputType = {
    noOfPlayer?: true
  }

  export type TeamSumAggregateInputType = {
    noOfPlayer?: true
  }

  export type TeamMinAggregateInputType = {
    id?: true
    noOfPlayer?: true
  }

  export type TeamMaxAggregateInputType = {
    id?: true
    noOfPlayer?: true
  }

  export type TeamCountAggregateInputType = {
    id?: true
    noOfPlayer?: true
    _all?: true
  }

  export type TeamAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Team to aggregate.
     */
    where?: TeamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Teams to fetch.
     */
    orderBy?: TeamOrderByWithRelationInput | TeamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TeamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Teams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Teams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Teams
    **/
    _count?: true | TeamCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TeamAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TeamSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TeamMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TeamMaxAggregateInputType
  }

  export type GetTeamAggregateType<T extends TeamAggregateArgs> = {
        [P in keyof T & keyof AggregateTeam]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTeam[P]>
      : GetScalarType<T[P], AggregateTeam[P]>
  }




  export type TeamGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TeamWhereInput
    orderBy?: TeamOrderByWithAggregationInput | TeamOrderByWithAggregationInput[]
    by: TeamScalarFieldEnum[] | TeamScalarFieldEnum
    having?: TeamScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TeamCountAggregateInputType | true
    _avg?: TeamAvgAggregateInputType
    _sum?: TeamSumAggregateInputType
    _min?: TeamMinAggregateInputType
    _max?: TeamMaxAggregateInputType
  }

  export type TeamGroupByOutputType = {
    id: string
    noOfPlayer: number
    _count: TeamCountAggregateOutputType | null
    _avg: TeamAvgAggregateOutputType | null
    _sum: TeamSumAggregateOutputType | null
    _min: TeamMinAggregateOutputType | null
    _max: TeamMaxAggregateOutputType | null
  }

  type GetTeamGroupByPayload<T extends TeamGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TeamGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TeamGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TeamGroupByOutputType[P]>
            : GetScalarType<T[P], TeamGroupByOutputType[P]>
        }
      >
    >


  export type TeamSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    noOfPlayer?: boolean
    users?: boolean | Team$usersArgs<ExtArgs>
    tournaments?: boolean | Team$tournamentsArgs<ExtArgs>
    _count?: boolean | TeamCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["team"]>

  export type TeamSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    noOfPlayer?: boolean
  }, ExtArgs["result"]["team"]>

  export type TeamSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    noOfPlayer?: boolean
  }, ExtArgs["result"]["team"]>

  export type TeamSelectScalar = {
    id?: boolean
    noOfPlayer?: boolean
  }

  export type TeamOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "noOfPlayer", ExtArgs["result"]["team"]>
  export type TeamInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | Team$usersArgs<ExtArgs>
    tournaments?: boolean | Team$tournamentsArgs<ExtArgs>
    _count?: boolean | TeamCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TeamIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type TeamIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $TeamPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Team"
    objects: {
      users: Prisma.$ProfilePayload<ExtArgs>[]
      tournaments: Prisma.$TournamentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      noOfPlayer: number
    }, ExtArgs["result"]["team"]>
    composites: {}
  }

  type TeamGetPayload<S extends boolean | null | undefined | TeamDefaultArgs> = $Result.GetResult<Prisma.$TeamPayload, S>

  type TeamCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TeamFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TeamCountAggregateInputType | true
    }

  export interface TeamDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Team'], meta: { name: 'Team' } }
    /**
     * Find zero or one Team that matches the filter.
     * @param {TeamFindUniqueArgs} args - Arguments to find a Team
     * @example
     * // Get one Team
     * const team = await prisma.team.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TeamFindUniqueArgs>(args: SelectSubset<T, TeamFindUniqueArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Team that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TeamFindUniqueOrThrowArgs} args - Arguments to find a Team
     * @example
     * // Get one Team
     * const team = await prisma.team.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TeamFindUniqueOrThrowArgs>(args: SelectSubset<T, TeamFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Team that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamFindFirstArgs} args - Arguments to find a Team
     * @example
     * // Get one Team
     * const team = await prisma.team.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TeamFindFirstArgs>(args?: SelectSubset<T, TeamFindFirstArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Team that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamFindFirstOrThrowArgs} args - Arguments to find a Team
     * @example
     * // Get one Team
     * const team = await prisma.team.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TeamFindFirstOrThrowArgs>(args?: SelectSubset<T, TeamFindFirstOrThrowArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Teams that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Teams
     * const teams = await prisma.team.findMany()
     * 
     * // Get first 10 Teams
     * const teams = await prisma.team.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const teamWithIdOnly = await prisma.team.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TeamFindManyArgs>(args?: SelectSubset<T, TeamFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Team.
     * @param {TeamCreateArgs} args - Arguments to create a Team.
     * @example
     * // Create one Team
     * const Team = await prisma.team.create({
     *   data: {
     *     // ... data to create a Team
     *   }
     * })
     * 
     */
    create<T extends TeamCreateArgs>(args: SelectSubset<T, TeamCreateArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Teams.
     * @param {TeamCreateManyArgs} args - Arguments to create many Teams.
     * @example
     * // Create many Teams
     * const team = await prisma.team.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TeamCreateManyArgs>(args?: SelectSubset<T, TeamCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Teams and returns the data saved in the database.
     * @param {TeamCreateManyAndReturnArgs} args - Arguments to create many Teams.
     * @example
     * // Create many Teams
     * const team = await prisma.team.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Teams and only return the `id`
     * const teamWithIdOnly = await prisma.team.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TeamCreateManyAndReturnArgs>(args?: SelectSubset<T, TeamCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Team.
     * @param {TeamDeleteArgs} args - Arguments to delete one Team.
     * @example
     * // Delete one Team
     * const Team = await prisma.team.delete({
     *   where: {
     *     // ... filter to delete one Team
     *   }
     * })
     * 
     */
    delete<T extends TeamDeleteArgs>(args: SelectSubset<T, TeamDeleteArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Team.
     * @param {TeamUpdateArgs} args - Arguments to update one Team.
     * @example
     * // Update one Team
     * const team = await prisma.team.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TeamUpdateArgs>(args: SelectSubset<T, TeamUpdateArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Teams.
     * @param {TeamDeleteManyArgs} args - Arguments to filter Teams to delete.
     * @example
     * // Delete a few Teams
     * const { count } = await prisma.team.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TeamDeleteManyArgs>(args?: SelectSubset<T, TeamDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Teams.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Teams
     * const team = await prisma.team.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TeamUpdateManyArgs>(args: SelectSubset<T, TeamUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Teams and returns the data updated in the database.
     * @param {TeamUpdateManyAndReturnArgs} args - Arguments to update many Teams.
     * @example
     * // Update many Teams
     * const team = await prisma.team.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Teams and only return the `id`
     * const teamWithIdOnly = await prisma.team.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TeamUpdateManyAndReturnArgs>(args: SelectSubset<T, TeamUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Team.
     * @param {TeamUpsertArgs} args - Arguments to update or create a Team.
     * @example
     * // Update or create a Team
     * const team = await prisma.team.upsert({
     *   create: {
     *     // ... data to create a Team
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Team we want to update
     *   }
     * })
     */
    upsert<T extends TeamUpsertArgs>(args: SelectSubset<T, TeamUpsertArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Teams.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamCountArgs} args - Arguments to filter Teams to count.
     * @example
     * // Count the number of Teams
     * const count = await prisma.team.count({
     *   where: {
     *     // ... the filter for the Teams we want to count
     *   }
     * })
    **/
    count<T extends TeamCountArgs>(
      args?: Subset<T, TeamCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TeamCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Team.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TeamAggregateArgs>(args: Subset<T, TeamAggregateArgs>): Prisma.PrismaPromise<GetTeamAggregateType<T>>

    /**
     * Group by Team.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TeamGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TeamGroupByArgs['orderBy'] }
        : { orderBy?: TeamGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TeamGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTeamGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Team model
   */
  readonly fields: TeamFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Team.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TeamClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends Team$usersArgs<ExtArgs> = {}>(args?: Subset<T, Team$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    tournaments<T extends Team$tournamentsArgs<ExtArgs> = {}>(args?: Subset<T, Team$tournamentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TournamentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Team model
   */
  interface TeamFieldRefs {
    readonly id: FieldRef<"Team", 'String'>
    readonly noOfPlayer: FieldRef<"Team", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Team findUnique
   */
  export type TeamFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * Filter, which Team to fetch.
     */
    where: TeamWhereUniqueInput
  }

  /**
   * Team findUniqueOrThrow
   */
  export type TeamFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * Filter, which Team to fetch.
     */
    where: TeamWhereUniqueInput
  }

  /**
   * Team findFirst
   */
  export type TeamFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * Filter, which Team to fetch.
     */
    where?: TeamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Teams to fetch.
     */
    orderBy?: TeamOrderByWithRelationInput | TeamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Teams.
     */
    cursor?: TeamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Teams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Teams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Teams.
     */
    distinct?: TeamScalarFieldEnum | TeamScalarFieldEnum[]
  }

  /**
   * Team findFirstOrThrow
   */
  export type TeamFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * Filter, which Team to fetch.
     */
    where?: TeamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Teams to fetch.
     */
    orderBy?: TeamOrderByWithRelationInput | TeamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Teams.
     */
    cursor?: TeamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Teams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Teams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Teams.
     */
    distinct?: TeamScalarFieldEnum | TeamScalarFieldEnum[]
  }

  /**
   * Team findMany
   */
  export type TeamFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * Filter, which Teams to fetch.
     */
    where?: TeamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Teams to fetch.
     */
    orderBy?: TeamOrderByWithRelationInput | TeamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Teams.
     */
    cursor?: TeamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Teams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Teams.
     */
    skip?: number
    distinct?: TeamScalarFieldEnum | TeamScalarFieldEnum[]
  }

  /**
   * Team create
   */
  export type TeamCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * The data needed to create a Team.
     */
    data: XOR<TeamCreateInput, TeamUncheckedCreateInput>
  }

  /**
   * Team createMany
   */
  export type TeamCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Teams.
     */
    data: TeamCreateManyInput | TeamCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Team createManyAndReturn
   */
  export type TeamCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * The data used to create many Teams.
     */
    data: TeamCreateManyInput | TeamCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Team update
   */
  export type TeamUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * The data needed to update a Team.
     */
    data: XOR<TeamUpdateInput, TeamUncheckedUpdateInput>
    /**
     * Choose, which Team to update.
     */
    where: TeamWhereUniqueInput
  }

  /**
   * Team updateMany
   */
  export type TeamUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Teams.
     */
    data: XOR<TeamUpdateManyMutationInput, TeamUncheckedUpdateManyInput>
    /**
     * Filter which Teams to update
     */
    where?: TeamWhereInput
    /**
     * Limit how many Teams to update.
     */
    limit?: number
  }

  /**
   * Team updateManyAndReturn
   */
  export type TeamUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * The data used to update Teams.
     */
    data: XOR<TeamUpdateManyMutationInput, TeamUncheckedUpdateManyInput>
    /**
     * Filter which Teams to update
     */
    where?: TeamWhereInput
    /**
     * Limit how many Teams to update.
     */
    limit?: number
  }

  /**
   * Team upsert
   */
  export type TeamUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * The filter to search for the Team to update in case it exists.
     */
    where: TeamWhereUniqueInput
    /**
     * In case the Team found by the `where` argument doesn't exist, create a new Team with this data.
     */
    create: XOR<TeamCreateInput, TeamUncheckedCreateInput>
    /**
     * In case the Team was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TeamUpdateInput, TeamUncheckedUpdateInput>
  }

  /**
   * Team delete
   */
  export type TeamDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * Filter which Team to delete.
     */
    where: TeamWhereUniqueInput
  }

  /**
   * Team deleteMany
   */
  export type TeamDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Teams to delete
     */
    where?: TeamWhereInput
    /**
     * Limit how many Teams to delete.
     */
    limit?: number
  }

  /**
   * Team.users
   */
  export type Team$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    where?: ProfileWhereInput
    orderBy?: ProfileOrderByWithRelationInput | ProfileOrderByWithRelationInput[]
    cursor?: ProfileWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProfileScalarFieldEnum | ProfileScalarFieldEnum[]
  }

  /**
   * Team.tournaments
   */
  export type Team$tournamentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tournament
     */
    select?: TournamentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tournament
     */
    omit?: TournamentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TournamentInclude<ExtArgs> | null
    where?: TournamentWhereInput
    orderBy?: TournamentOrderByWithRelationInput | TournamentOrderByWithRelationInput[]
    cursor?: TournamentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TournamentScalarFieldEnum | TournamentScalarFieldEnum[]
  }

  /**
   * Team without action
   */
  export type TeamDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
  }


  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    username: string | null
    password: string | null
    email: string | null
    role: $Enums.UserRole | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    username: string | null
    password: string | null
    email: string | null
    role: $Enums.UserRole | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    username: number
    password: number
    email: number
    role: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    username?: true
    password?: true
    email?: true
    role?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    username?: true
    password?: true
    email?: true
    role?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    username?: true
    password?: true
    email?: true
    role?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    username: string
    password: string
    email: string
    role: $Enums.UserRole
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    password?: boolean
    email?: boolean
    role?: boolean
    managerIn?: boolean | User$managerInArgs<ExtArgs>
    orgJoin?: boolean | User$orgJoinArgs<ExtArgs>
    profile?: boolean | User$profileArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    password?: boolean
    email?: boolean
    role?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    password?: boolean
    email?: boolean
    role?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    username?: boolean
    password?: boolean
    email?: boolean
    role?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "username" | "password" | "email" | "role", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    managerIn?: boolean | User$managerInArgs<ExtArgs>
    orgJoin?: boolean | User$orgJoinArgs<ExtArgs>
    profile?: boolean | User$profileArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      managerIn: Prisma.$OrgManagerPayload<ExtArgs>[]
      orgJoin: Prisma.$OrgPayload<ExtArgs>[]
      profile: Prisma.$ProfilePayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      username: string
      password: string
      email: string
      role: $Enums.UserRole
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    managerIn<T extends User$managerInArgs<ExtArgs> = {}>(args?: Subset<T, User$managerInArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrgManagerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    orgJoin<T extends User$orgJoinArgs<ExtArgs> = {}>(args?: Subset<T, User$orgJoinArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrgPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    profile<T extends User$profileArgs<ExtArgs> = {}>(args?: Subset<T, User$profileArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly username: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'UserRole'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.managerIn
   */
  export type User$managerInArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrgManager
     */
    select?: OrgManagerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrgManager
     */
    omit?: OrgManagerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrgManagerInclude<ExtArgs> | null
    where?: OrgManagerWhereInput
    orderBy?: OrgManagerOrderByWithRelationInput | OrgManagerOrderByWithRelationInput[]
    cursor?: OrgManagerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrgManagerScalarFieldEnum | OrgManagerScalarFieldEnum[]
  }

  /**
   * User.orgJoin
   */
  export type User$orgJoinArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Org
     */
    select?: OrgSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Org
     */
    omit?: OrgOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrgInclude<ExtArgs> | null
    where?: OrgWhereInput
    orderBy?: OrgOrderByWithRelationInput | OrgOrderByWithRelationInput[]
    cursor?: OrgWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrgScalarFieldEnum | OrgScalarFieldEnum[]
  }

  /**
   * User.profile
   */
  export type User$profileArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    where?: ProfileWhereInput
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model UserGame
   */

  export type AggregateUserGame = {
    _count: UserGameCountAggregateOutputType | null
    _min: UserGameMinAggregateOutputType | null
    _max: UserGameMaxAggregateOutputType | null
  }

  export type UserGameMinAggregateOutputType = {
    gameName: string | null
    userGameId: string | null
    userIgn: string | null
  }

  export type UserGameMaxAggregateOutputType = {
    gameName: string | null
    userGameId: string | null
    userIgn: string | null
  }

  export type UserGameCountAggregateOutputType = {
    gameName: number
    userGameId: number
    userIgn: number
    _all: number
  }


  export type UserGameMinAggregateInputType = {
    gameName?: true
    userGameId?: true
    userIgn?: true
  }

  export type UserGameMaxAggregateInputType = {
    gameName?: true
    userGameId?: true
    userIgn?: true
  }

  export type UserGameCountAggregateInputType = {
    gameName?: true
    userGameId?: true
    userIgn?: true
    _all?: true
  }

  export type UserGameAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserGame to aggregate.
     */
    where?: UserGameWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserGames to fetch.
     */
    orderBy?: UserGameOrderByWithRelationInput | UserGameOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserGameWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserGames from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserGames.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserGames
    **/
    _count?: true | UserGameCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserGameMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserGameMaxAggregateInputType
  }

  export type GetUserGameAggregateType<T extends UserGameAggregateArgs> = {
        [P in keyof T & keyof AggregateUserGame]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserGame[P]>
      : GetScalarType<T[P], AggregateUserGame[P]>
  }




  export type UserGameGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserGameWhereInput
    orderBy?: UserGameOrderByWithAggregationInput | UserGameOrderByWithAggregationInput[]
    by: UserGameScalarFieldEnum[] | UserGameScalarFieldEnum
    having?: UserGameScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserGameCountAggregateInputType | true
    _min?: UserGameMinAggregateInputType
    _max?: UserGameMaxAggregateInputType
  }

  export type UserGameGroupByOutputType = {
    gameName: string
    userGameId: string
    userIgn: string
    _count: UserGameCountAggregateOutputType | null
    _min: UserGameMinAggregateOutputType | null
    _max: UserGameMaxAggregateOutputType | null
  }

  type GetUserGameGroupByPayload<T extends UserGameGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGameGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGameGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGameGroupByOutputType[P]>
            : GetScalarType<T[P], UserGameGroupByOutputType[P]>
        }
      >
    >


  export type UserGameSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    gameName?: boolean
    userGameId?: boolean
    userIgn?: boolean
    name?: boolean | GameDefaultArgs<ExtArgs>
    ign?: boolean | ProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userGame"]>

  export type UserGameSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    gameName?: boolean
    userGameId?: boolean
    userIgn?: boolean
    name?: boolean | GameDefaultArgs<ExtArgs>
    ign?: boolean | ProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userGame"]>

  export type UserGameSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    gameName?: boolean
    userGameId?: boolean
    userIgn?: boolean
    name?: boolean | GameDefaultArgs<ExtArgs>
    ign?: boolean | ProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userGame"]>

  export type UserGameSelectScalar = {
    gameName?: boolean
    userGameId?: boolean
    userIgn?: boolean
  }

  export type UserGameOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"gameName" | "userGameId" | "userIgn", ExtArgs["result"]["userGame"]>
  export type UserGameInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name?: boolean | GameDefaultArgs<ExtArgs>
    ign?: boolean | ProfileDefaultArgs<ExtArgs>
  }
  export type UserGameIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name?: boolean | GameDefaultArgs<ExtArgs>
    ign?: boolean | ProfileDefaultArgs<ExtArgs>
  }
  export type UserGameIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name?: boolean | GameDefaultArgs<ExtArgs>
    ign?: boolean | ProfileDefaultArgs<ExtArgs>
  }

  export type $UserGamePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserGame"
    objects: {
      name: Prisma.$GamePayload<ExtArgs>
      ign: Prisma.$ProfilePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      gameName: string
      userGameId: string
      userIgn: string
    }, ExtArgs["result"]["userGame"]>
    composites: {}
  }

  type UserGameGetPayload<S extends boolean | null | undefined | UserGameDefaultArgs> = $Result.GetResult<Prisma.$UserGamePayload, S>

  type UserGameCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserGameFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserGameCountAggregateInputType | true
    }

  export interface UserGameDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserGame'], meta: { name: 'UserGame' } }
    /**
     * Find zero or one UserGame that matches the filter.
     * @param {UserGameFindUniqueArgs} args - Arguments to find a UserGame
     * @example
     * // Get one UserGame
     * const userGame = await prisma.userGame.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserGameFindUniqueArgs>(args: SelectSubset<T, UserGameFindUniqueArgs<ExtArgs>>): Prisma__UserGameClient<$Result.GetResult<Prisma.$UserGamePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserGame that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserGameFindUniqueOrThrowArgs} args - Arguments to find a UserGame
     * @example
     * // Get one UserGame
     * const userGame = await prisma.userGame.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserGameFindUniqueOrThrowArgs>(args: SelectSubset<T, UserGameFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserGameClient<$Result.GetResult<Prisma.$UserGamePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserGame that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGameFindFirstArgs} args - Arguments to find a UserGame
     * @example
     * // Get one UserGame
     * const userGame = await prisma.userGame.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserGameFindFirstArgs>(args?: SelectSubset<T, UserGameFindFirstArgs<ExtArgs>>): Prisma__UserGameClient<$Result.GetResult<Prisma.$UserGamePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserGame that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGameFindFirstOrThrowArgs} args - Arguments to find a UserGame
     * @example
     * // Get one UserGame
     * const userGame = await prisma.userGame.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserGameFindFirstOrThrowArgs>(args?: SelectSubset<T, UserGameFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserGameClient<$Result.GetResult<Prisma.$UserGamePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserGames that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGameFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserGames
     * const userGames = await prisma.userGame.findMany()
     * 
     * // Get first 10 UserGames
     * const userGames = await prisma.userGame.findMany({ take: 10 })
     * 
     * // Only select the `gameName`
     * const userGameWithGameNameOnly = await prisma.userGame.findMany({ select: { gameName: true } })
     * 
     */
    findMany<T extends UserGameFindManyArgs>(args?: SelectSubset<T, UserGameFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserGamePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserGame.
     * @param {UserGameCreateArgs} args - Arguments to create a UserGame.
     * @example
     * // Create one UserGame
     * const UserGame = await prisma.userGame.create({
     *   data: {
     *     // ... data to create a UserGame
     *   }
     * })
     * 
     */
    create<T extends UserGameCreateArgs>(args: SelectSubset<T, UserGameCreateArgs<ExtArgs>>): Prisma__UserGameClient<$Result.GetResult<Prisma.$UserGamePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserGames.
     * @param {UserGameCreateManyArgs} args - Arguments to create many UserGames.
     * @example
     * // Create many UserGames
     * const userGame = await prisma.userGame.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserGameCreateManyArgs>(args?: SelectSubset<T, UserGameCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserGames and returns the data saved in the database.
     * @param {UserGameCreateManyAndReturnArgs} args - Arguments to create many UserGames.
     * @example
     * // Create many UserGames
     * const userGame = await prisma.userGame.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserGames and only return the `gameName`
     * const userGameWithGameNameOnly = await prisma.userGame.createManyAndReturn({
     *   select: { gameName: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserGameCreateManyAndReturnArgs>(args?: SelectSubset<T, UserGameCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserGamePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserGame.
     * @param {UserGameDeleteArgs} args - Arguments to delete one UserGame.
     * @example
     * // Delete one UserGame
     * const UserGame = await prisma.userGame.delete({
     *   where: {
     *     // ... filter to delete one UserGame
     *   }
     * })
     * 
     */
    delete<T extends UserGameDeleteArgs>(args: SelectSubset<T, UserGameDeleteArgs<ExtArgs>>): Prisma__UserGameClient<$Result.GetResult<Prisma.$UserGamePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserGame.
     * @param {UserGameUpdateArgs} args - Arguments to update one UserGame.
     * @example
     * // Update one UserGame
     * const userGame = await prisma.userGame.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserGameUpdateArgs>(args: SelectSubset<T, UserGameUpdateArgs<ExtArgs>>): Prisma__UserGameClient<$Result.GetResult<Prisma.$UserGamePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserGames.
     * @param {UserGameDeleteManyArgs} args - Arguments to filter UserGames to delete.
     * @example
     * // Delete a few UserGames
     * const { count } = await prisma.userGame.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserGameDeleteManyArgs>(args?: SelectSubset<T, UserGameDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserGames.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGameUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserGames
     * const userGame = await prisma.userGame.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserGameUpdateManyArgs>(args: SelectSubset<T, UserGameUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserGames and returns the data updated in the database.
     * @param {UserGameUpdateManyAndReturnArgs} args - Arguments to update many UserGames.
     * @example
     * // Update many UserGames
     * const userGame = await prisma.userGame.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserGames and only return the `gameName`
     * const userGameWithGameNameOnly = await prisma.userGame.updateManyAndReturn({
     *   select: { gameName: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserGameUpdateManyAndReturnArgs>(args: SelectSubset<T, UserGameUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserGamePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserGame.
     * @param {UserGameUpsertArgs} args - Arguments to update or create a UserGame.
     * @example
     * // Update or create a UserGame
     * const userGame = await prisma.userGame.upsert({
     *   create: {
     *     // ... data to create a UserGame
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserGame we want to update
     *   }
     * })
     */
    upsert<T extends UserGameUpsertArgs>(args: SelectSubset<T, UserGameUpsertArgs<ExtArgs>>): Prisma__UserGameClient<$Result.GetResult<Prisma.$UserGamePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserGames.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGameCountArgs} args - Arguments to filter UserGames to count.
     * @example
     * // Count the number of UserGames
     * const count = await prisma.userGame.count({
     *   where: {
     *     // ... the filter for the UserGames we want to count
     *   }
     * })
    **/
    count<T extends UserGameCountArgs>(
      args?: Subset<T, UserGameCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserGameCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserGame.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGameAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserGameAggregateArgs>(args: Subset<T, UserGameAggregateArgs>): Prisma.PrismaPromise<GetUserGameAggregateType<T>>

    /**
     * Group by UserGame.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGameGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGameGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGameGroupByArgs['orderBy'] }
        : { orderBy?: UserGameGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGameGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGameGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserGame model
   */
  readonly fields: UserGameFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserGame.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserGameClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    name<T extends GameDefaultArgs<ExtArgs> = {}>(args?: Subset<T, GameDefaultArgs<ExtArgs>>): Prisma__GameClient<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    ign<T extends ProfileDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProfileDefaultArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the UserGame model
   */
  interface UserGameFieldRefs {
    readonly gameName: FieldRef<"UserGame", 'String'>
    readonly userGameId: FieldRef<"UserGame", 'String'>
    readonly userIgn: FieldRef<"UserGame", 'String'>
  }
    

  // Custom InputTypes
  /**
   * UserGame findUnique
   */
  export type UserGameFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserGame
     */
    select?: UserGameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserGame
     */
    omit?: UserGameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserGameInclude<ExtArgs> | null
    /**
     * Filter, which UserGame to fetch.
     */
    where: UserGameWhereUniqueInput
  }

  /**
   * UserGame findUniqueOrThrow
   */
  export type UserGameFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserGame
     */
    select?: UserGameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserGame
     */
    omit?: UserGameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserGameInclude<ExtArgs> | null
    /**
     * Filter, which UserGame to fetch.
     */
    where: UserGameWhereUniqueInput
  }

  /**
   * UserGame findFirst
   */
  export type UserGameFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserGame
     */
    select?: UserGameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserGame
     */
    omit?: UserGameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserGameInclude<ExtArgs> | null
    /**
     * Filter, which UserGame to fetch.
     */
    where?: UserGameWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserGames to fetch.
     */
    orderBy?: UserGameOrderByWithRelationInput | UserGameOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserGames.
     */
    cursor?: UserGameWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserGames from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserGames.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserGames.
     */
    distinct?: UserGameScalarFieldEnum | UserGameScalarFieldEnum[]
  }

  /**
   * UserGame findFirstOrThrow
   */
  export type UserGameFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserGame
     */
    select?: UserGameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserGame
     */
    omit?: UserGameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserGameInclude<ExtArgs> | null
    /**
     * Filter, which UserGame to fetch.
     */
    where?: UserGameWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserGames to fetch.
     */
    orderBy?: UserGameOrderByWithRelationInput | UserGameOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserGames.
     */
    cursor?: UserGameWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserGames from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserGames.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserGames.
     */
    distinct?: UserGameScalarFieldEnum | UserGameScalarFieldEnum[]
  }

  /**
   * UserGame findMany
   */
  export type UserGameFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserGame
     */
    select?: UserGameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserGame
     */
    omit?: UserGameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserGameInclude<ExtArgs> | null
    /**
     * Filter, which UserGames to fetch.
     */
    where?: UserGameWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserGames to fetch.
     */
    orderBy?: UserGameOrderByWithRelationInput | UserGameOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserGames.
     */
    cursor?: UserGameWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserGames from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserGames.
     */
    skip?: number
    distinct?: UserGameScalarFieldEnum | UserGameScalarFieldEnum[]
  }

  /**
   * UserGame create
   */
  export type UserGameCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserGame
     */
    select?: UserGameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserGame
     */
    omit?: UserGameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserGameInclude<ExtArgs> | null
    /**
     * The data needed to create a UserGame.
     */
    data: XOR<UserGameCreateInput, UserGameUncheckedCreateInput>
  }

  /**
   * UserGame createMany
   */
  export type UserGameCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserGames.
     */
    data: UserGameCreateManyInput | UserGameCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserGame createManyAndReturn
   */
  export type UserGameCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserGame
     */
    select?: UserGameSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserGame
     */
    omit?: UserGameOmit<ExtArgs> | null
    /**
     * The data used to create many UserGames.
     */
    data: UserGameCreateManyInput | UserGameCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserGameIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserGame update
   */
  export type UserGameUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserGame
     */
    select?: UserGameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserGame
     */
    omit?: UserGameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserGameInclude<ExtArgs> | null
    /**
     * The data needed to update a UserGame.
     */
    data: XOR<UserGameUpdateInput, UserGameUncheckedUpdateInput>
    /**
     * Choose, which UserGame to update.
     */
    where: UserGameWhereUniqueInput
  }

  /**
   * UserGame updateMany
   */
  export type UserGameUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserGames.
     */
    data: XOR<UserGameUpdateManyMutationInput, UserGameUncheckedUpdateManyInput>
    /**
     * Filter which UserGames to update
     */
    where?: UserGameWhereInput
    /**
     * Limit how many UserGames to update.
     */
    limit?: number
  }

  /**
   * UserGame updateManyAndReturn
   */
  export type UserGameUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserGame
     */
    select?: UserGameSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserGame
     */
    omit?: UserGameOmit<ExtArgs> | null
    /**
     * The data used to update UserGames.
     */
    data: XOR<UserGameUpdateManyMutationInput, UserGameUncheckedUpdateManyInput>
    /**
     * Filter which UserGames to update
     */
    where?: UserGameWhereInput
    /**
     * Limit how many UserGames to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserGameIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserGame upsert
   */
  export type UserGameUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserGame
     */
    select?: UserGameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserGame
     */
    omit?: UserGameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserGameInclude<ExtArgs> | null
    /**
     * The filter to search for the UserGame to update in case it exists.
     */
    where: UserGameWhereUniqueInput
    /**
     * In case the UserGame found by the `where` argument doesn't exist, create a new UserGame with this data.
     */
    create: XOR<UserGameCreateInput, UserGameUncheckedCreateInput>
    /**
     * In case the UserGame was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserGameUpdateInput, UserGameUncheckedUpdateInput>
  }

  /**
   * UserGame delete
   */
  export type UserGameDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserGame
     */
    select?: UserGameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserGame
     */
    omit?: UserGameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserGameInclude<ExtArgs> | null
    /**
     * Filter which UserGame to delete.
     */
    where: UserGameWhereUniqueInput
  }

  /**
   * UserGame deleteMany
   */
  export type UserGameDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserGames to delete
     */
    where?: UserGameWhereInput
    /**
     * Limit how many UserGames to delete.
     */
    limit?: number
  }

  /**
   * UserGame without action
   */
  export type UserGameDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserGame
     */
    select?: UserGameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserGame
     */
    omit?: UserGameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserGameInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const GameScalarFieldEnum: {
    id: 'id',
    gameName: 'gameName'
  };

  export type GameScalarFieldEnum = (typeof GameScalarFieldEnum)[keyof typeof GameScalarFieldEnum]


  export const OrgScalarFieldEnum: {
    id: 'id',
    name: 'name',
    adminId: 'adminId'
  };

  export type OrgScalarFieldEnum = (typeof OrgScalarFieldEnum)[keyof typeof OrgScalarFieldEnum]


  export const OrgManagerScalarFieldEnum: {
    id: 'id',
    orgId: 'orgId',
    userId: 'userId'
  };

  export type OrgManagerScalarFieldEnum = (typeof OrgManagerScalarFieldEnum)[keyof typeof OrgManagerScalarFieldEnum]


  export const ProfileScalarFieldEnum: {
    userId: 'userId',
    userTeam: 'userTeam'
  };

  export type ProfileScalarFieldEnum = (typeof ProfileScalarFieldEnum)[keyof typeof ProfileScalarFieldEnum]


  export const TournamentScalarFieldEnum: {
    id: 'id',
    noOfTeam: 'noOfTeam',
    gameName: 'gameName',
    noOfPlayerInTeam: 'noOfPlayerInTeam'
  };

  export type TournamentScalarFieldEnum = (typeof TournamentScalarFieldEnum)[keyof typeof TournamentScalarFieldEnum]


  export const TeamScalarFieldEnum: {
    id: 'id',
    noOfPlayer: 'noOfPlayer'
  };

  export type TeamScalarFieldEnum = (typeof TeamScalarFieldEnum)[keyof typeof TeamScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    username: 'username',
    password: 'password',
    email: 'email',
    role: 'role'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const UserGameScalarFieldEnum: {
    gameName: 'gameName',
    userGameId: 'userGameId',
    userIgn: 'userIgn'
  };

  export type UserGameScalarFieldEnum = (typeof UserGameScalarFieldEnum)[keyof typeof UserGameScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'UserRole'
   */
  export type EnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole'>
    


  /**
   * Reference to a field of type 'UserRole[]'
   */
  export type ListEnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type GameWhereInput = {
    AND?: GameWhereInput | GameWhereInput[]
    OR?: GameWhereInput[]
    NOT?: GameWhereInput | GameWhereInput[]
    id?: StringFilter<"Game"> | string
    gameName?: StringFilter<"Game"> | string
    onGoingTournament?: TournamentListRelationFilter
    users?: UserGameListRelationFilter
  }

  export type GameOrderByWithRelationInput = {
    id?: SortOrder
    gameName?: SortOrder
    onGoingTournament?: TournamentOrderByRelationAggregateInput
    users?: UserGameOrderByRelationAggregateInput
  }

  export type GameWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    gameName?: string
    AND?: GameWhereInput | GameWhereInput[]
    OR?: GameWhereInput[]
    NOT?: GameWhereInput | GameWhereInput[]
    onGoingTournament?: TournamentListRelationFilter
    users?: UserGameListRelationFilter
  }, "id" | "gameName">

  export type GameOrderByWithAggregationInput = {
    id?: SortOrder
    gameName?: SortOrder
    _count?: GameCountOrderByAggregateInput
    _max?: GameMaxOrderByAggregateInput
    _min?: GameMinOrderByAggregateInput
  }

  export type GameScalarWhereWithAggregatesInput = {
    AND?: GameScalarWhereWithAggregatesInput | GameScalarWhereWithAggregatesInput[]
    OR?: GameScalarWhereWithAggregatesInput[]
    NOT?: GameScalarWhereWithAggregatesInput | GameScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Game"> | string
    gameName?: StringWithAggregatesFilter<"Game"> | string
  }

  export type OrgWhereInput = {
    AND?: OrgWhereInput | OrgWhereInput[]
    OR?: OrgWhereInput[]
    NOT?: OrgWhereInput | OrgWhereInput[]
    id?: StringFilter<"Org"> | string
    name?: StringFilter<"Org"> | string
    adminId?: StringFilter<"Org"> | string
    admin?: XOR<UserScalarRelationFilter, UserWhereInput>
    managers?: OrgManagerListRelationFilter
  }

  export type OrgOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    adminId?: SortOrder
    admin?: UserOrderByWithRelationInput
    managers?: OrgManagerOrderByRelationAggregateInput
  }

  export type OrgWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    adminId?: string
    AND?: OrgWhereInput | OrgWhereInput[]
    OR?: OrgWhereInput[]
    NOT?: OrgWhereInput | OrgWhereInput[]
    admin?: XOR<UserScalarRelationFilter, UserWhereInput>
    managers?: OrgManagerListRelationFilter
  }, "id" | "name" | "adminId">

  export type OrgOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    adminId?: SortOrder
    _count?: OrgCountOrderByAggregateInput
    _max?: OrgMaxOrderByAggregateInput
    _min?: OrgMinOrderByAggregateInput
  }

  export type OrgScalarWhereWithAggregatesInput = {
    AND?: OrgScalarWhereWithAggregatesInput | OrgScalarWhereWithAggregatesInput[]
    OR?: OrgScalarWhereWithAggregatesInput[]
    NOT?: OrgScalarWhereWithAggregatesInput | OrgScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Org"> | string
    name?: StringWithAggregatesFilter<"Org"> | string
    adminId?: StringWithAggregatesFilter<"Org"> | string
  }

  export type OrgManagerWhereInput = {
    AND?: OrgManagerWhereInput | OrgManagerWhereInput[]
    OR?: OrgManagerWhereInput[]
    NOT?: OrgManagerWhereInput | OrgManagerWhereInput[]
    id?: StringFilter<"OrgManager"> | string
    orgId?: StringFilter<"OrgManager"> | string
    userId?: StringFilter<"OrgManager"> | string
    org?: XOR<OrgScalarRelationFilter, OrgWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type OrgManagerOrderByWithRelationInput = {
    id?: SortOrder
    orgId?: SortOrder
    userId?: SortOrder
    org?: OrgOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type OrgManagerWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_orgId?: OrgManagerUserIdOrgIdCompoundUniqueInput
    AND?: OrgManagerWhereInput | OrgManagerWhereInput[]
    OR?: OrgManagerWhereInput[]
    NOT?: OrgManagerWhereInput | OrgManagerWhereInput[]
    orgId?: StringFilter<"OrgManager"> | string
    userId?: StringFilter<"OrgManager"> | string
    org?: XOR<OrgScalarRelationFilter, OrgWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "userId_orgId">

  export type OrgManagerOrderByWithAggregationInput = {
    id?: SortOrder
    orgId?: SortOrder
    userId?: SortOrder
    _count?: OrgManagerCountOrderByAggregateInput
    _max?: OrgManagerMaxOrderByAggregateInput
    _min?: OrgManagerMinOrderByAggregateInput
  }

  export type OrgManagerScalarWhereWithAggregatesInput = {
    AND?: OrgManagerScalarWhereWithAggregatesInput | OrgManagerScalarWhereWithAggregatesInput[]
    OR?: OrgManagerScalarWhereWithAggregatesInput[]
    NOT?: OrgManagerScalarWhereWithAggregatesInput | OrgManagerScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"OrgManager"> | string
    orgId?: StringWithAggregatesFilter<"OrgManager"> | string
    userId?: StringWithAggregatesFilter<"OrgManager"> | string
  }

  export type ProfileWhereInput = {
    AND?: ProfileWhereInput | ProfileWhereInput[]
    OR?: ProfileWhereInput[]
    NOT?: ProfileWhereInput | ProfileWhereInput[]
    userId?: StringFilter<"Profile"> | string
    userTeam?: StringFilter<"Profile"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    gamePlay?: UserGameListRelationFilter
    teams?: XOR<TeamScalarRelationFilter, TeamWhereInput>
  }

  export type ProfileOrderByWithRelationInput = {
    userId?: SortOrder
    userTeam?: SortOrder
    user?: UserOrderByWithRelationInput
    gamePlay?: UserGameOrderByRelationAggregateInput
    teams?: TeamOrderByWithRelationInput
  }

  export type ProfileWhereUniqueInput = Prisma.AtLeast<{
    userId?: string
    AND?: ProfileWhereInput | ProfileWhereInput[]
    OR?: ProfileWhereInput[]
    NOT?: ProfileWhereInput | ProfileWhereInput[]
    userTeam?: StringFilter<"Profile"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    gamePlay?: UserGameListRelationFilter
    teams?: XOR<TeamScalarRelationFilter, TeamWhereInput>
  }, "userId">

  export type ProfileOrderByWithAggregationInput = {
    userId?: SortOrder
    userTeam?: SortOrder
    _count?: ProfileCountOrderByAggregateInput
    _max?: ProfileMaxOrderByAggregateInput
    _min?: ProfileMinOrderByAggregateInput
  }

  export type ProfileScalarWhereWithAggregatesInput = {
    AND?: ProfileScalarWhereWithAggregatesInput | ProfileScalarWhereWithAggregatesInput[]
    OR?: ProfileScalarWhereWithAggregatesInput[]
    NOT?: ProfileScalarWhereWithAggregatesInput | ProfileScalarWhereWithAggregatesInput[]
    userId?: StringWithAggregatesFilter<"Profile"> | string
    userTeam?: StringWithAggregatesFilter<"Profile"> | string
  }

  export type TournamentWhereInput = {
    AND?: TournamentWhereInput | TournamentWhereInput[]
    OR?: TournamentWhereInput[]
    NOT?: TournamentWhereInput | TournamentWhereInput[]
    id?: StringFilter<"Tournament"> | string
    noOfTeam?: IntFilter<"Tournament"> | number
    gameName?: StringFilter<"Tournament"> | string
    noOfPlayerInTeam?: IntFilter<"Tournament"> | number
    game?: XOR<GameScalarRelationFilter, GameWhereInput>
    teams?: TeamListRelationFilter
  }

  export type TournamentOrderByWithRelationInput = {
    id?: SortOrder
    noOfTeam?: SortOrder
    gameName?: SortOrder
    noOfPlayerInTeam?: SortOrder
    game?: GameOrderByWithRelationInput
    teams?: TeamOrderByRelationAggregateInput
  }

  export type TournamentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TournamentWhereInput | TournamentWhereInput[]
    OR?: TournamentWhereInput[]
    NOT?: TournamentWhereInput | TournamentWhereInput[]
    noOfTeam?: IntFilter<"Tournament"> | number
    gameName?: StringFilter<"Tournament"> | string
    noOfPlayerInTeam?: IntFilter<"Tournament"> | number
    game?: XOR<GameScalarRelationFilter, GameWhereInput>
    teams?: TeamListRelationFilter
  }, "id">

  export type TournamentOrderByWithAggregationInput = {
    id?: SortOrder
    noOfTeam?: SortOrder
    gameName?: SortOrder
    noOfPlayerInTeam?: SortOrder
    _count?: TournamentCountOrderByAggregateInput
    _avg?: TournamentAvgOrderByAggregateInput
    _max?: TournamentMaxOrderByAggregateInput
    _min?: TournamentMinOrderByAggregateInput
    _sum?: TournamentSumOrderByAggregateInput
  }

  export type TournamentScalarWhereWithAggregatesInput = {
    AND?: TournamentScalarWhereWithAggregatesInput | TournamentScalarWhereWithAggregatesInput[]
    OR?: TournamentScalarWhereWithAggregatesInput[]
    NOT?: TournamentScalarWhereWithAggregatesInput | TournamentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Tournament"> | string
    noOfTeam?: IntWithAggregatesFilter<"Tournament"> | number
    gameName?: StringWithAggregatesFilter<"Tournament"> | string
    noOfPlayerInTeam?: IntWithAggregatesFilter<"Tournament"> | number
  }

  export type TeamWhereInput = {
    AND?: TeamWhereInput | TeamWhereInput[]
    OR?: TeamWhereInput[]
    NOT?: TeamWhereInput | TeamWhereInput[]
    id?: StringFilter<"Team"> | string
    noOfPlayer?: IntFilter<"Team"> | number
    users?: ProfileListRelationFilter
    tournaments?: TournamentListRelationFilter
  }

  export type TeamOrderByWithRelationInput = {
    id?: SortOrder
    noOfPlayer?: SortOrder
    users?: ProfileOrderByRelationAggregateInput
    tournaments?: TournamentOrderByRelationAggregateInput
  }

  export type TeamWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TeamWhereInput | TeamWhereInput[]
    OR?: TeamWhereInput[]
    NOT?: TeamWhereInput | TeamWhereInput[]
    noOfPlayer?: IntFilter<"Team"> | number
    users?: ProfileListRelationFilter
    tournaments?: TournamentListRelationFilter
  }, "id">

  export type TeamOrderByWithAggregationInput = {
    id?: SortOrder
    noOfPlayer?: SortOrder
    _count?: TeamCountOrderByAggregateInput
    _avg?: TeamAvgOrderByAggregateInput
    _max?: TeamMaxOrderByAggregateInput
    _min?: TeamMinOrderByAggregateInput
    _sum?: TeamSumOrderByAggregateInput
  }

  export type TeamScalarWhereWithAggregatesInput = {
    AND?: TeamScalarWhereWithAggregatesInput | TeamScalarWhereWithAggregatesInput[]
    OR?: TeamScalarWhereWithAggregatesInput[]
    NOT?: TeamScalarWhereWithAggregatesInput | TeamScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Team"> | string
    noOfPlayer?: IntWithAggregatesFilter<"Team"> | number
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    username?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    managerIn?: OrgManagerListRelationFilter
    orgJoin?: OrgListRelationFilter
    profile?: XOR<ProfileNullableScalarRelationFilter, ProfileWhereInput> | null
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    email?: SortOrder
    role?: SortOrder
    managerIn?: OrgManagerOrderByRelationAggregateInput
    orgJoin?: OrgOrderByRelationAggregateInput
    profile?: ProfileOrderByWithRelationInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    username?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    managerIn?: OrgManagerListRelationFilter
    orgJoin?: OrgListRelationFilter
    profile?: XOR<ProfileNullableScalarRelationFilter, ProfileWhereInput> | null
  }, "id" | "username" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    email?: SortOrder
    role?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    username?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    role?: EnumUserRoleWithAggregatesFilter<"User"> | $Enums.UserRole
  }

  export type UserGameWhereInput = {
    AND?: UserGameWhereInput | UserGameWhereInput[]
    OR?: UserGameWhereInput[]
    NOT?: UserGameWhereInput | UserGameWhereInput[]
    gameName?: StringFilter<"UserGame"> | string
    userGameId?: StringFilter<"UserGame"> | string
    userIgn?: StringFilter<"UserGame"> | string
    name?: XOR<GameScalarRelationFilter, GameWhereInput>
    ign?: XOR<ProfileScalarRelationFilter, ProfileWhereInput>
  }

  export type UserGameOrderByWithRelationInput = {
    gameName?: SortOrder
    userGameId?: SortOrder
    userIgn?: SortOrder
    name?: GameOrderByWithRelationInput
    ign?: ProfileOrderByWithRelationInput
  }

  export type UserGameWhereUniqueInput = Prisma.AtLeast<{
    gameName?: string
    userGameId?: string
    userIgn?: string
    AND?: UserGameWhereInput | UserGameWhereInput[]
    OR?: UserGameWhereInput[]
    NOT?: UserGameWhereInput | UserGameWhereInput[]
    name?: XOR<GameScalarRelationFilter, GameWhereInput>
    ign?: XOR<ProfileScalarRelationFilter, ProfileWhereInput>
  }, "gameName" | "userGameId" | "userIgn">

  export type UserGameOrderByWithAggregationInput = {
    gameName?: SortOrder
    userGameId?: SortOrder
    userIgn?: SortOrder
    _count?: UserGameCountOrderByAggregateInput
    _max?: UserGameMaxOrderByAggregateInput
    _min?: UserGameMinOrderByAggregateInput
  }

  export type UserGameScalarWhereWithAggregatesInput = {
    AND?: UserGameScalarWhereWithAggregatesInput | UserGameScalarWhereWithAggregatesInput[]
    OR?: UserGameScalarWhereWithAggregatesInput[]
    NOT?: UserGameScalarWhereWithAggregatesInput | UserGameScalarWhereWithAggregatesInput[]
    gameName?: StringWithAggregatesFilter<"UserGame"> | string
    userGameId?: StringWithAggregatesFilter<"UserGame"> | string
    userIgn?: StringWithAggregatesFilter<"UserGame"> | string
  }

  export type GameCreateInput = {
    id?: string
    gameName: string
    onGoingTournament?: TournamentCreateNestedManyWithoutGameInput
    users?: UserGameCreateNestedManyWithoutNameInput
  }

  export type GameUncheckedCreateInput = {
    id?: string
    gameName: string
    onGoingTournament?: TournamentUncheckedCreateNestedManyWithoutGameInput
    users?: UserGameUncheckedCreateNestedManyWithoutNameInput
  }

  export type GameUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    gameName?: StringFieldUpdateOperationsInput | string
    onGoingTournament?: TournamentUpdateManyWithoutGameNestedInput
    users?: UserGameUpdateManyWithoutNameNestedInput
  }

  export type GameUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    gameName?: StringFieldUpdateOperationsInput | string
    onGoingTournament?: TournamentUncheckedUpdateManyWithoutGameNestedInput
    users?: UserGameUncheckedUpdateManyWithoutNameNestedInput
  }

  export type GameCreateManyInput = {
    id?: string
    gameName: string
  }

  export type GameUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    gameName?: StringFieldUpdateOperationsInput | string
  }

  export type GameUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    gameName?: StringFieldUpdateOperationsInput | string
  }

  export type OrgCreateInput = {
    id?: string
    name: string
    admin: UserCreateNestedOneWithoutOrgJoinInput
    managers?: OrgManagerCreateNestedManyWithoutOrgInput
  }

  export type OrgUncheckedCreateInput = {
    id?: string
    name: string
    adminId: string
    managers?: OrgManagerUncheckedCreateNestedManyWithoutOrgInput
  }

  export type OrgUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    admin?: UserUpdateOneRequiredWithoutOrgJoinNestedInput
    managers?: OrgManagerUpdateManyWithoutOrgNestedInput
  }

  export type OrgUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    adminId?: StringFieldUpdateOperationsInput | string
    managers?: OrgManagerUncheckedUpdateManyWithoutOrgNestedInput
  }

  export type OrgCreateManyInput = {
    id?: string
    name: string
    adminId: string
  }

  export type OrgUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type OrgUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    adminId?: StringFieldUpdateOperationsInput | string
  }

  export type OrgManagerCreateInput = {
    id?: string
    org: OrgCreateNestedOneWithoutManagersInput
    user: UserCreateNestedOneWithoutManagerInInput
  }

  export type OrgManagerUncheckedCreateInput = {
    id?: string
    orgId: string
    userId: string
  }

  export type OrgManagerUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    org?: OrgUpdateOneRequiredWithoutManagersNestedInput
    user?: UserUpdateOneRequiredWithoutManagerInNestedInput
  }

  export type OrgManagerUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type OrgManagerCreateManyInput = {
    id?: string
    orgId: string
    userId: string
  }

  export type OrgManagerUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type OrgManagerUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type ProfileCreateInput = {
    user: UserCreateNestedOneWithoutProfileInput
    gamePlay?: UserGameCreateNestedManyWithoutIgnInput
    teams: TeamCreateNestedOneWithoutUsersInput
  }

  export type ProfileUncheckedCreateInput = {
    userId: string
    userTeam: string
    gamePlay?: UserGameUncheckedCreateNestedManyWithoutIgnInput
  }

  export type ProfileUpdateInput = {
    user?: UserUpdateOneRequiredWithoutProfileNestedInput
    gamePlay?: UserGameUpdateManyWithoutIgnNestedInput
    teams?: TeamUpdateOneRequiredWithoutUsersNestedInput
  }

  export type ProfileUncheckedUpdateInput = {
    userId?: StringFieldUpdateOperationsInput | string
    userTeam?: StringFieldUpdateOperationsInput | string
    gamePlay?: UserGameUncheckedUpdateManyWithoutIgnNestedInput
  }

  export type ProfileCreateManyInput = {
    userId: string
    userTeam: string
  }

  export type ProfileUpdateManyMutationInput = {

  }

  export type ProfileUncheckedUpdateManyInput = {
    userId?: StringFieldUpdateOperationsInput | string
    userTeam?: StringFieldUpdateOperationsInput | string
  }

  export type TournamentCreateInput = {
    id?: string
    noOfTeam: number
    noOfPlayerInTeam: number
    game: GameCreateNestedOneWithoutOnGoingTournamentInput
    teams?: TeamCreateNestedManyWithoutTournamentsInput
  }

  export type TournamentUncheckedCreateInput = {
    id?: string
    noOfTeam: number
    gameName: string
    noOfPlayerInTeam: number
    teams?: TeamUncheckedCreateNestedManyWithoutTournamentsInput
  }

  export type TournamentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    noOfTeam?: IntFieldUpdateOperationsInput | number
    noOfPlayerInTeam?: IntFieldUpdateOperationsInput | number
    game?: GameUpdateOneRequiredWithoutOnGoingTournamentNestedInput
    teams?: TeamUpdateManyWithoutTournamentsNestedInput
  }

  export type TournamentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    noOfTeam?: IntFieldUpdateOperationsInput | number
    gameName?: StringFieldUpdateOperationsInput | string
    noOfPlayerInTeam?: IntFieldUpdateOperationsInput | number
    teams?: TeamUncheckedUpdateManyWithoutTournamentsNestedInput
  }

  export type TournamentCreateManyInput = {
    id?: string
    noOfTeam: number
    gameName: string
    noOfPlayerInTeam: number
  }

  export type TournamentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    noOfTeam?: IntFieldUpdateOperationsInput | number
    noOfPlayerInTeam?: IntFieldUpdateOperationsInput | number
  }

  export type TournamentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    noOfTeam?: IntFieldUpdateOperationsInput | number
    gameName?: StringFieldUpdateOperationsInput | string
    noOfPlayerInTeam?: IntFieldUpdateOperationsInput | number
  }

  export type TeamCreateInput = {
    id?: string
    noOfPlayer: number
    users?: ProfileCreateNestedManyWithoutTeamsInput
    tournaments?: TournamentCreateNestedManyWithoutTeamsInput
  }

  export type TeamUncheckedCreateInput = {
    id?: string
    noOfPlayer: number
    users?: ProfileUncheckedCreateNestedManyWithoutTeamsInput
    tournaments?: TournamentUncheckedCreateNestedManyWithoutTeamsInput
  }

  export type TeamUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    noOfPlayer?: IntFieldUpdateOperationsInput | number
    users?: ProfileUpdateManyWithoutTeamsNestedInput
    tournaments?: TournamentUpdateManyWithoutTeamsNestedInput
  }

  export type TeamUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    noOfPlayer?: IntFieldUpdateOperationsInput | number
    users?: ProfileUncheckedUpdateManyWithoutTeamsNestedInput
    tournaments?: TournamentUncheckedUpdateManyWithoutTeamsNestedInput
  }

  export type TeamCreateManyInput = {
    id?: string
    noOfPlayer: number
  }

  export type TeamUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    noOfPlayer?: IntFieldUpdateOperationsInput | number
  }

  export type TeamUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    noOfPlayer?: IntFieldUpdateOperationsInput | number
  }

  export type UserCreateInput = {
    id?: string
    username: string
    password: string
    email: string
    role?: $Enums.UserRole
    managerIn?: OrgManagerCreateNestedManyWithoutUserInput
    orgJoin?: OrgCreateNestedManyWithoutAdminInput
    profile?: ProfileCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    username: string
    password: string
    email: string
    role?: $Enums.UserRole
    managerIn?: OrgManagerUncheckedCreateNestedManyWithoutUserInput
    orgJoin?: OrgUncheckedCreateNestedManyWithoutAdminInput
    profile?: ProfileUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    managerIn?: OrgManagerUpdateManyWithoutUserNestedInput
    orgJoin?: OrgUpdateManyWithoutAdminNestedInput
    profile?: ProfileUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    managerIn?: OrgManagerUncheckedUpdateManyWithoutUserNestedInput
    orgJoin?: OrgUncheckedUpdateManyWithoutAdminNestedInput
    profile?: ProfileUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    username: string
    password: string
    email: string
    role?: $Enums.UserRole
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
  }

  export type UserGameCreateInput = {
    userGameId: string
    name: GameCreateNestedOneWithoutUsersInput
    ign: ProfileCreateNestedOneWithoutGamePlayInput
  }

  export type UserGameUncheckedCreateInput = {
    gameName: string
    userGameId: string
    userIgn: string
  }

  export type UserGameUpdateInput = {
    userGameId?: StringFieldUpdateOperationsInput | string
    name?: GameUpdateOneRequiredWithoutUsersNestedInput
    ign?: ProfileUpdateOneRequiredWithoutGamePlayNestedInput
  }

  export type UserGameUncheckedUpdateInput = {
    gameName?: StringFieldUpdateOperationsInput | string
    userGameId?: StringFieldUpdateOperationsInput | string
    userIgn?: StringFieldUpdateOperationsInput | string
  }

  export type UserGameCreateManyInput = {
    gameName: string
    userGameId: string
    userIgn: string
  }

  export type UserGameUpdateManyMutationInput = {
    userGameId?: StringFieldUpdateOperationsInput | string
  }

  export type UserGameUncheckedUpdateManyInput = {
    gameName?: StringFieldUpdateOperationsInput | string
    userGameId?: StringFieldUpdateOperationsInput | string
    userIgn?: StringFieldUpdateOperationsInput | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type TournamentListRelationFilter = {
    every?: TournamentWhereInput
    some?: TournamentWhereInput
    none?: TournamentWhereInput
  }

  export type UserGameListRelationFilter = {
    every?: UserGameWhereInput
    some?: UserGameWhereInput
    none?: UserGameWhereInput
  }

  export type TournamentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserGameOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type GameCountOrderByAggregateInput = {
    id?: SortOrder
    gameName?: SortOrder
  }

  export type GameMaxOrderByAggregateInput = {
    id?: SortOrder
    gameName?: SortOrder
  }

  export type GameMinOrderByAggregateInput = {
    id?: SortOrder
    gameName?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type OrgManagerListRelationFilter = {
    every?: OrgManagerWhereInput
    some?: OrgManagerWhereInput
    none?: OrgManagerWhereInput
  }

  export type OrgManagerOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OrgCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    adminId?: SortOrder
  }

  export type OrgMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    adminId?: SortOrder
  }

  export type OrgMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    adminId?: SortOrder
  }

  export type OrgScalarRelationFilter = {
    is?: OrgWhereInput
    isNot?: OrgWhereInput
  }

  export type OrgManagerUserIdOrgIdCompoundUniqueInput = {
    userId: string
    orgId: string
  }

  export type OrgManagerCountOrderByAggregateInput = {
    id?: SortOrder
    orgId?: SortOrder
    userId?: SortOrder
  }

  export type OrgManagerMaxOrderByAggregateInput = {
    id?: SortOrder
    orgId?: SortOrder
    userId?: SortOrder
  }

  export type OrgManagerMinOrderByAggregateInput = {
    id?: SortOrder
    orgId?: SortOrder
    userId?: SortOrder
  }

  export type TeamScalarRelationFilter = {
    is?: TeamWhereInput
    isNot?: TeamWhereInput
  }

  export type ProfileCountOrderByAggregateInput = {
    userId?: SortOrder
    userTeam?: SortOrder
  }

  export type ProfileMaxOrderByAggregateInput = {
    userId?: SortOrder
    userTeam?: SortOrder
  }

  export type ProfileMinOrderByAggregateInput = {
    userId?: SortOrder
    userTeam?: SortOrder
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type GameScalarRelationFilter = {
    is?: GameWhereInput
    isNot?: GameWhereInput
  }

  export type TeamListRelationFilter = {
    every?: TeamWhereInput
    some?: TeamWhereInput
    none?: TeamWhereInput
  }

  export type TeamOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TournamentCountOrderByAggregateInput = {
    id?: SortOrder
    noOfTeam?: SortOrder
    gameName?: SortOrder
    noOfPlayerInTeam?: SortOrder
  }

  export type TournamentAvgOrderByAggregateInput = {
    noOfTeam?: SortOrder
    noOfPlayerInTeam?: SortOrder
  }

  export type TournamentMaxOrderByAggregateInput = {
    id?: SortOrder
    noOfTeam?: SortOrder
    gameName?: SortOrder
    noOfPlayerInTeam?: SortOrder
  }

  export type TournamentMinOrderByAggregateInput = {
    id?: SortOrder
    noOfTeam?: SortOrder
    gameName?: SortOrder
    noOfPlayerInTeam?: SortOrder
  }

  export type TournamentSumOrderByAggregateInput = {
    noOfTeam?: SortOrder
    noOfPlayerInTeam?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type ProfileListRelationFilter = {
    every?: ProfileWhereInput
    some?: ProfileWhereInput
    none?: ProfileWhereInput
  }

  export type ProfileOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TeamCountOrderByAggregateInput = {
    id?: SortOrder
    noOfPlayer?: SortOrder
  }

  export type TeamAvgOrderByAggregateInput = {
    noOfPlayer?: SortOrder
  }

  export type TeamMaxOrderByAggregateInput = {
    id?: SortOrder
    noOfPlayer?: SortOrder
  }

  export type TeamMinOrderByAggregateInput = {
    id?: SortOrder
    noOfPlayer?: SortOrder
  }

  export type TeamSumOrderByAggregateInput = {
    noOfPlayer?: SortOrder
  }

  export type EnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type OrgListRelationFilter = {
    every?: OrgWhereInput
    some?: OrgWhereInput
    none?: OrgWhereInput
  }

  export type ProfileNullableScalarRelationFilter = {
    is?: ProfileWhereInput | null
    isNot?: ProfileWhereInput | null
  }

  export type OrgOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    email?: SortOrder
    role?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    email?: SortOrder
    role?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    email?: SortOrder
    role?: SortOrder
  }

  export type EnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type ProfileScalarRelationFilter = {
    is?: ProfileWhereInput
    isNot?: ProfileWhereInput
  }

  export type UserGameCountOrderByAggregateInput = {
    gameName?: SortOrder
    userGameId?: SortOrder
    userIgn?: SortOrder
  }

  export type UserGameMaxOrderByAggregateInput = {
    gameName?: SortOrder
    userGameId?: SortOrder
    userIgn?: SortOrder
  }

  export type UserGameMinOrderByAggregateInput = {
    gameName?: SortOrder
    userGameId?: SortOrder
    userIgn?: SortOrder
  }

  export type TournamentCreateNestedManyWithoutGameInput = {
    create?: XOR<TournamentCreateWithoutGameInput, TournamentUncheckedCreateWithoutGameInput> | TournamentCreateWithoutGameInput[] | TournamentUncheckedCreateWithoutGameInput[]
    connectOrCreate?: TournamentCreateOrConnectWithoutGameInput | TournamentCreateOrConnectWithoutGameInput[]
    createMany?: TournamentCreateManyGameInputEnvelope
    connect?: TournamentWhereUniqueInput | TournamentWhereUniqueInput[]
  }

  export type UserGameCreateNestedManyWithoutNameInput = {
    create?: XOR<UserGameCreateWithoutNameInput, UserGameUncheckedCreateWithoutNameInput> | UserGameCreateWithoutNameInput[] | UserGameUncheckedCreateWithoutNameInput[]
    connectOrCreate?: UserGameCreateOrConnectWithoutNameInput | UserGameCreateOrConnectWithoutNameInput[]
    createMany?: UserGameCreateManyNameInputEnvelope
    connect?: UserGameWhereUniqueInput | UserGameWhereUniqueInput[]
  }

  export type TournamentUncheckedCreateNestedManyWithoutGameInput = {
    create?: XOR<TournamentCreateWithoutGameInput, TournamentUncheckedCreateWithoutGameInput> | TournamentCreateWithoutGameInput[] | TournamentUncheckedCreateWithoutGameInput[]
    connectOrCreate?: TournamentCreateOrConnectWithoutGameInput | TournamentCreateOrConnectWithoutGameInput[]
    createMany?: TournamentCreateManyGameInputEnvelope
    connect?: TournamentWhereUniqueInput | TournamentWhereUniqueInput[]
  }

  export type UserGameUncheckedCreateNestedManyWithoutNameInput = {
    create?: XOR<UserGameCreateWithoutNameInput, UserGameUncheckedCreateWithoutNameInput> | UserGameCreateWithoutNameInput[] | UserGameUncheckedCreateWithoutNameInput[]
    connectOrCreate?: UserGameCreateOrConnectWithoutNameInput | UserGameCreateOrConnectWithoutNameInput[]
    createMany?: UserGameCreateManyNameInputEnvelope
    connect?: UserGameWhereUniqueInput | UserGameWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type TournamentUpdateManyWithoutGameNestedInput = {
    create?: XOR<TournamentCreateWithoutGameInput, TournamentUncheckedCreateWithoutGameInput> | TournamentCreateWithoutGameInput[] | TournamentUncheckedCreateWithoutGameInput[]
    connectOrCreate?: TournamentCreateOrConnectWithoutGameInput | TournamentCreateOrConnectWithoutGameInput[]
    upsert?: TournamentUpsertWithWhereUniqueWithoutGameInput | TournamentUpsertWithWhereUniqueWithoutGameInput[]
    createMany?: TournamentCreateManyGameInputEnvelope
    set?: TournamentWhereUniqueInput | TournamentWhereUniqueInput[]
    disconnect?: TournamentWhereUniqueInput | TournamentWhereUniqueInput[]
    delete?: TournamentWhereUniqueInput | TournamentWhereUniqueInput[]
    connect?: TournamentWhereUniqueInput | TournamentWhereUniqueInput[]
    update?: TournamentUpdateWithWhereUniqueWithoutGameInput | TournamentUpdateWithWhereUniqueWithoutGameInput[]
    updateMany?: TournamentUpdateManyWithWhereWithoutGameInput | TournamentUpdateManyWithWhereWithoutGameInput[]
    deleteMany?: TournamentScalarWhereInput | TournamentScalarWhereInput[]
  }

  export type UserGameUpdateManyWithoutNameNestedInput = {
    create?: XOR<UserGameCreateWithoutNameInput, UserGameUncheckedCreateWithoutNameInput> | UserGameCreateWithoutNameInput[] | UserGameUncheckedCreateWithoutNameInput[]
    connectOrCreate?: UserGameCreateOrConnectWithoutNameInput | UserGameCreateOrConnectWithoutNameInput[]
    upsert?: UserGameUpsertWithWhereUniqueWithoutNameInput | UserGameUpsertWithWhereUniqueWithoutNameInput[]
    createMany?: UserGameCreateManyNameInputEnvelope
    set?: UserGameWhereUniqueInput | UserGameWhereUniqueInput[]
    disconnect?: UserGameWhereUniqueInput | UserGameWhereUniqueInput[]
    delete?: UserGameWhereUniqueInput | UserGameWhereUniqueInput[]
    connect?: UserGameWhereUniqueInput | UserGameWhereUniqueInput[]
    update?: UserGameUpdateWithWhereUniqueWithoutNameInput | UserGameUpdateWithWhereUniqueWithoutNameInput[]
    updateMany?: UserGameUpdateManyWithWhereWithoutNameInput | UserGameUpdateManyWithWhereWithoutNameInput[]
    deleteMany?: UserGameScalarWhereInput | UserGameScalarWhereInput[]
  }

  export type TournamentUncheckedUpdateManyWithoutGameNestedInput = {
    create?: XOR<TournamentCreateWithoutGameInput, TournamentUncheckedCreateWithoutGameInput> | TournamentCreateWithoutGameInput[] | TournamentUncheckedCreateWithoutGameInput[]
    connectOrCreate?: TournamentCreateOrConnectWithoutGameInput | TournamentCreateOrConnectWithoutGameInput[]
    upsert?: TournamentUpsertWithWhereUniqueWithoutGameInput | TournamentUpsertWithWhereUniqueWithoutGameInput[]
    createMany?: TournamentCreateManyGameInputEnvelope
    set?: TournamentWhereUniqueInput | TournamentWhereUniqueInput[]
    disconnect?: TournamentWhereUniqueInput | TournamentWhereUniqueInput[]
    delete?: TournamentWhereUniqueInput | TournamentWhereUniqueInput[]
    connect?: TournamentWhereUniqueInput | TournamentWhereUniqueInput[]
    update?: TournamentUpdateWithWhereUniqueWithoutGameInput | TournamentUpdateWithWhereUniqueWithoutGameInput[]
    updateMany?: TournamentUpdateManyWithWhereWithoutGameInput | TournamentUpdateManyWithWhereWithoutGameInput[]
    deleteMany?: TournamentScalarWhereInput | TournamentScalarWhereInput[]
  }

  export type UserGameUncheckedUpdateManyWithoutNameNestedInput = {
    create?: XOR<UserGameCreateWithoutNameInput, UserGameUncheckedCreateWithoutNameInput> | UserGameCreateWithoutNameInput[] | UserGameUncheckedCreateWithoutNameInput[]
    connectOrCreate?: UserGameCreateOrConnectWithoutNameInput | UserGameCreateOrConnectWithoutNameInput[]
    upsert?: UserGameUpsertWithWhereUniqueWithoutNameInput | UserGameUpsertWithWhereUniqueWithoutNameInput[]
    createMany?: UserGameCreateManyNameInputEnvelope
    set?: UserGameWhereUniqueInput | UserGameWhereUniqueInput[]
    disconnect?: UserGameWhereUniqueInput | UserGameWhereUniqueInput[]
    delete?: UserGameWhereUniqueInput | UserGameWhereUniqueInput[]
    connect?: UserGameWhereUniqueInput | UserGameWhereUniqueInput[]
    update?: UserGameUpdateWithWhereUniqueWithoutNameInput | UserGameUpdateWithWhereUniqueWithoutNameInput[]
    updateMany?: UserGameUpdateManyWithWhereWithoutNameInput | UserGameUpdateManyWithWhereWithoutNameInput[]
    deleteMany?: UserGameScalarWhereInput | UserGameScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutOrgJoinInput = {
    create?: XOR<UserCreateWithoutOrgJoinInput, UserUncheckedCreateWithoutOrgJoinInput>
    connectOrCreate?: UserCreateOrConnectWithoutOrgJoinInput
    connect?: UserWhereUniqueInput
  }

  export type OrgManagerCreateNestedManyWithoutOrgInput = {
    create?: XOR<OrgManagerCreateWithoutOrgInput, OrgManagerUncheckedCreateWithoutOrgInput> | OrgManagerCreateWithoutOrgInput[] | OrgManagerUncheckedCreateWithoutOrgInput[]
    connectOrCreate?: OrgManagerCreateOrConnectWithoutOrgInput | OrgManagerCreateOrConnectWithoutOrgInput[]
    createMany?: OrgManagerCreateManyOrgInputEnvelope
    connect?: OrgManagerWhereUniqueInput | OrgManagerWhereUniqueInput[]
  }

  export type OrgManagerUncheckedCreateNestedManyWithoutOrgInput = {
    create?: XOR<OrgManagerCreateWithoutOrgInput, OrgManagerUncheckedCreateWithoutOrgInput> | OrgManagerCreateWithoutOrgInput[] | OrgManagerUncheckedCreateWithoutOrgInput[]
    connectOrCreate?: OrgManagerCreateOrConnectWithoutOrgInput | OrgManagerCreateOrConnectWithoutOrgInput[]
    createMany?: OrgManagerCreateManyOrgInputEnvelope
    connect?: OrgManagerWhereUniqueInput | OrgManagerWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutOrgJoinNestedInput = {
    create?: XOR<UserCreateWithoutOrgJoinInput, UserUncheckedCreateWithoutOrgJoinInput>
    connectOrCreate?: UserCreateOrConnectWithoutOrgJoinInput
    upsert?: UserUpsertWithoutOrgJoinInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutOrgJoinInput, UserUpdateWithoutOrgJoinInput>, UserUncheckedUpdateWithoutOrgJoinInput>
  }

  export type OrgManagerUpdateManyWithoutOrgNestedInput = {
    create?: XOR<OrgManagerCreateWithoutOrgInput, OrgManagerUncheckedCreateWithoutOrgInput> | OrgManagerCreateWithoutOrgInput[] | OrgManagerUncheckedCreateWithoutOrgInput[]
    connectOrCreate?: OrgManagerCreateOrConnectWithoutOrgInput | OrgManagerCreateOrConnectWithoutOrgInput[]
    upsert?: OrgManagerUpsertWithWhereUniqueWithoutOrgInput | OrgManagerUpsertWithWhereUniqueWithoutOrgInput[]
    createMany?: OrgManagerCreateManyOrgInputEnvelope
    set?: OrgManagerWhereUniqueInput | OrgManagerWhereUniqueInput[]
    disconnect?: OrgManagerWhereUniqueInput | OrgManagerWhereUniqueInput[]
    delete?: OrgManagerWhereUniqueInput | OrgManagerWhereUniqueInput[]
    connect?: OrgManagerWhereUniqueInput | OrgManagerWhereUniqueInput[]
    update?: OrgManagerUpdateWithWhereUniqueWithoutOrgInput | OrgManagerUpdateWithWhereUniqueWithoutOrgInput[]
    updateMany?: OrgManagerUpdateManyWithWhereWithoutOrgInput | OrgManagerUpdateManyWithWhereWithoutOrgInput[]
    deleteMany?: OrgManagerScalarWhereInput | OrgManagerScalarWhereInput[]
  }

  export type OrgManagerUncheckedUpdateManyWithoutOrgNestedInput = {
    create?: XOR<OrgManagerCreateWithoutOrgInput, OrgManagerUncheckedCreateWithoutOrgInput> | OrgManagerCreateWithoutOrgInput[] | OrgManagerUncheckedCreateWithoutOrgInput[]
    connectOrCreate?: OrgManagerCreateOrConnectWithoutOrgInput | OrgManagerCreateOrConnectWithoutOrgInput[]
    upsert?: OrgManagerUpsertWithWhereUniqueWithoutOrgInput | OrgManagerUpsertWithWhereUniqueWithoutOrgInput[]
    createMany?: OrgManagerCreateManyOrgInputEnvelope
    set?: OrgManagerWhereUniqueInput | OrgManagerWhereUniqueInput[]
    disconnect?: OrgManagerWhereUniqueInput | OrgManagerWhereUniqueInput[]
    delete?: OrgManagerWhereUniqueInput | OrgManagerWhereUniqueInput[]
    connect?: OrgManagerWhereUniqueInput | OrgManagerWhereUniqueInput[]
    update?: OrgManagerUpdateWithWhereUniqueWithoutOrgInput | OrgManagerUpdateWithWhereUniqueWithoutOrgInput[]
    updateMany?: OrgManagerUpdateManyWithWhereWithoutOrgInput | OrgManagerUpdateManyWithWhereWithoutOrgInput[]
    deleteMany?: OrgManagerScalarWhereInput | OrgManagerScalarWhereInput[]
  }

  export type OrgCreateNestedOneWithoutManagersInput = {
    create?: XOR<OrgCreateWithoutManagersInput, OrgUncheckedCreateWithoutManagersInput>
    connectOrCreate?: OrgCreateOrConnectWithoutManagersInput
    connect?: OrgWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutManagerInInput = {
    create?: XOR<UserCreateWithoutManagerInInput, UserUncheckedCreateWithoutManagerInInput>
    connectOrCreate?: UserCreateOrConnectWithoutManagerInInput
    connect?: UserWhereUniqueInput
  }

  export type OrgUpdateOneRequiredWithoutManagersNestedInput = {
    create?: XOR<OrgCreateWithoutManagersInput, OrgUncheckedCreateWithoutManagersInput>
    connectOrCreate?: OrgCreateOrConnectWithoutManagersInput
    upsert?: OrgUpsertWithoutManagersInput
    connect?: OrgWhereUniqueInput
    update?: XOR<XOR<OrgUpdateToOneWithWhereWithoutManagersInput, OrgUpdateWithoutManagersInput>, OrgUncheckedUpdateWithoutManagersInput>
  }

  export type UserUpdateOneRequiredWithoutManagerInNestedInput = {
    create?: XOR<UserCreateWithoutManagerInInput, UserUncheckedCreateWithoutManagerInInput>
    connectOrCreate?: UserCreateOrConnectWithoutManagerInInput
    upsert?: UserUpsertWithoutManagerInInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutManagerInInput, UserUpdateWithoutManagerInInput>, UserUncheckedUpdateWithoutManagerInInput>
  }

  export type UserCreateNestedOneWithoutProfileInput = {
    create?: XOR<UserCreateWithoutProfileInput, UserUncheckedCreateWithoutProfileInput>
    connectOrCreate?: UserCreateOrConnectWithoutProfileInput
    connect?: UserWhereUniqueInput
  }

  export type UserGameCreateNestedManyWithoutIgnInput = {
    create?: XOR<UserGameCreateWithoutIgnInput, UserGameUncheckedCreateWithoutIgnInput> | UserGameCreateWithoutIgnInput[] | UserGameUncheckedCreateWithoutIgnInput[]
    connectOrCreate?: UserGameCreateOrConnectWithoutIgnInput | UserGameCreateOrConnectWithoutIgnInput[]
    createMany?: UserGameCreateManyIgnInputEnvelope
    connect?: UserGameWhereUniqueInput | UserGameWhereUniqueInput[]
  }

  export type TeamCreateNestedOneWithoutUsersInput = {
    create?: XOR<TeamCreateWithoutUsersInput, TeamUncheckedCreateWithoutUsersInput>
    connectOrCreate?: TeamCreateOrConnectWithoutUsersInput
    connect?: TeamWhereUniqueInput
  }

  export type UserGameUncheckedCreateNestedManyWithoutIgnInput = {
    create?: XOR<UserGameCreateWithoutIgnInput, UserGameUncheckedCreateWithoutIgnInput> | UserGameCreateWithoutIgnInput[] | UserGameUncheckedCreateWithoutIgnInput[]
    connectOrCreate?: UserGameCreateOrConnectWithoutIgnInput | UserGameCreateOrConnectWithoutIgnInput[]
    createMany?: UserGameCreateManyIgnInputEnvelope
    connect?: UserGameWhereUniqueInput | UserGameWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutProfileNestedInput = {
    create?: XOR<UserCreateWithoutProfileInput, UserUncheckedCreateWithoutProfileInput>
    connectOrCreate?: UserCreateOrConnectWithoutProfileInput
    upsert?: UserUpsertWithoutProfileInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutProfileInput, UserUpdateWithoutProfileInput>, UserUncheckedUpdateWithoutProfileInput>
  }

  export type UserGameUpdateManyWithoutIgnNestedInput = {
    create?: XOR<UserGameCreateWithoutIgnInput, UserGameUncheckedCreateWithoutIgnInput> | UserGameCreateWithoutIgnInput[] | UserGameUncheckedCreateWithoutIgnInput[]
    connectOrCreate?: UserGameCreateOrConnectWithoutIgnInput | UserGameCreateOrConnectWithoutIgnInput[]
    upsert?: UserGameUpsertWithWhereUniqueWithoutIgnInput | UserGameUpsertWithWhereUniqueWithoutIgnInput[]
    createMany?: UserGameCreateManyIgnInputEnvelope
    set?: UserGameWhereUniqueInput | UserGameWhereUniqueInput[]
    disconnect?: UserGameWhereUniqueInput | UserGameWhereUniqueInput[]
    delete?: UserGameWhereUniqueInput | UserGameWhereUniqueInput[]
    connect?: UserGameWhereUniqueInput | UserGameWhereUniqueInput[]
    update?: UserGameUpdateWithWhereUniqueWithoutIgnInput | UserGameUpdateWithWhereUniqueWithoutIgnInput[]
    updateMany?: UserGameUpdateManyWithWhereWithoutIgnInput | UserGameUpdateManyWithWhereWithoutIgnInput[]
    deleteMany?: UserGameScalarWhereInput | UserGameScalarWhereInput[]
  }

  export type TeamUpdateOneRequiredWithoutUsersNestedInput = {
    create?: XOR<TeamCreateWithoutUsersInput, TeamUncheckedCreateWithoutUsersInput>
    connectOrCreate?: TeamCreateOrConnectWithoutUsersInput
    upsert?: TeamUpsertWithoutUsersInput
    connect?: TeamWhereUniqueInput
    update?: XOR<XOR<TeamUpdateToOneWithWhereWithoutUsersInput, TeamUpdateWithoutUsersInput>, TeamUncheckedUpdateWithoutUsersInput>
  }

  export type UserGameUncheckedUpdateManyWithoutIgnNestedInput = {
    create?: XOR<UserGameCreateWithoutIgnInput, UserGameUncheckedCreateWithoutIgnInput> | UserGameCreateWithoutIgnInput[] | UserGameUncheckedCreateWithoutIgnInput[]
    connectOrCreate?: UserGameCreateOrConnectWithoutIgnInput | UserGameCreateOrConnectWithoutIgnInput[]
    upsert?: UserGameUpsertWithWhereUniqueWithoutIgnInput | UserGameUpsertWithWhereUniqueWithoutIgnInput[]
    createMany?: UserGameCreateManyIgnInputEnvelope
    set?: UserGameWhereUniqueInput | UserGameWhereUniqueInput[]
    disconnect?: UserGameWhereUniqueInput | UserGameWhereUniqueInput[]
    delete?: UserGameWhereUniqueInput | UserGameWhereUniqueInput[]
    connect?: UserGameWhereUniqueInput | UserGameWhereUniqueInput[]
    update?: UserGameUpdateWithWhereUniqueWithoutIgnInput | UserGameUpdateWithWhereUniqueWithoutIgnInput[]
    updateMany?: UserGameUpdateManyWithWhereWithoutIgnInput | UserGameUpdateManyWithWhereWithoutIgnInput[]
    deleteMany?: UserGameScalarWhereInput | UserGameScalarWhereInput[]
  }

  export type GameCreateNestedOneWithoutOnGoingTournamentInput = {
    create?: XOR<GameCreateWithoutOnGoingTournamentInput, GameUncheckedCreateWithoutOnGoingTournamentInput>
    connectOrCreate?: GameCreateOrConnectWithoutOnGoingTournamentInput
    connect?: GameWhereUniqueInput
  }

  export type TeamCreateNestedManyWithoutTournamentsInput = {
    create?: XOR<TeamCreateWithoutTournamentsInput, TeamUncheckedCreateWithoutTournamentsInput> | TeamCreateWithoutTournamentsInput[] | TeamUncheckedCreateWithoutTournamentsInput[]
    connectOrCreate?: TeamCreateOrConnectWithoutTournamentsInput | TeamCreateOrConnectWithoutTournamentsInput[]
    connect?: TeamWhereUniqueInput | TeamWhereUniqueInput[]
  }

  export type TeamUncheckedCreateNestedManyWithoutTournamentsInput = {
    create?: XOR<TeamCreateWithoutTournamentsInput, TeamUncheckedCreateWithoutTournamentsInput> | TeamCreateWithoutTournamentsInput[] | TeamUncheckedCreateWithoutTournamentsInput[]
    connectOrCreate?: TeamCreateOrConnectWithoutTournamentsInput | TeamCreateOrConnectWithoutTournamentsInput[]
    connect?: TeamWhereUniqueInput | TeamWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type GameUpdateOneRequiredWithoutOnGoingTournamentNestedInput = {
    create?: XOR<GameCreateWithoutOnGoingTournamentInput, GameUncheckedCreateWithoutOnGoingTournamentInput>
    connectOrCreate?: GameCreateOrConnectWithoutOnGoingTournamentInput
    upsert?: GameUpsertWithoutOnGoingTournamentInput
    connect?: GameWhereUniqueInput
    update?: XOR<XOR<GameUpdateToOneWithWhereWithoutOnGoingTournamentInput, GameUpdateWithoutOnGoingTournamentInput>, GameUncheckedUpdateWithoutOnGoingTournamentInput>
  }

  export type TeamUpdateManyWithoutTournamentsNestedInput = {
    create?: XOR<TeamCreateWithoutTournamentsInput, TeamUncheckedCreateWithoutTournamentsInput> | TeamCreateWithoutTournamentsInput[] | TeamUncheckedCreateWithoutTournamentsInput[]
    connectOrCreate?: TeamCreateOrConnectWithoutTournamentsInput | TeamCreateOrConnectWithoutTournamentsInput[]
    upsert?: TeamUpsertWithWhereUniqueWithoutTournamentsInput | TeamUpsertWithWhereUniqueWithoutTournamentsInput[]
    set?: TeamWhereUniqueInput | TeamWhereUniqueInput[]
    disconnect?: TeamWhereUniqueInput | TeamWhereUniqueInput[]
    delete?: TeamWhereUniqueInput | TeamWhereUniqueInput[]
    connect?: TeamWhereUniqueInput | TeamWhereUniqueInput[]
    update?: TeamUpdateWithWhereUniqueWithoutTournamentsInput | TeamUpdateWithWhereUniqueWithoutTournamentsInput[]
    updateMany?: TeamUpdateManyWithWhereWithoutTournamentsInput | TeamUpdateManyWithWhereWithoutTournamentsInput[]
    deleteMany?: TeamScalarWhereInput | TeamScalarWhereInput[]
  }

  export type TeamUncheckedUpdateManyWithoutTournamentsNestedInput = {
    create?: XOR<TeamCreateWithoutTournamentsInput, TeamUncheckedCreateWithoutTournamentsInput> | TeamCreateWithoutTournamentsInput[] | TeamUncheckedCreateWithoutTournamentsInput[]
    connectOrCreate?: TeamCreateOrConnectWithoutTournamentsInput | TeamCreateOrConnectWithoutTournamentsInput[]
    upsert?: TeamUpsertWithWhereUniqueWithoutTournamentsInput | TeamUpsertWithWhereUniqueWithoutTournamentsInput[]
    set?: TeamWhereUniqueInput | TeamWhereUniqueInput[]
    disconnect?: TeamWhereUniqueInput | TeamWhereUniqueInput[]
    delete?: TeamWhereUniqueInput | TeamWhereUniqueInput[]
    connect?: TeamWhereUniqueInput | TeamWhereUniqueInput[]
    update?: TeamUpdateWithWhereUniqueWithoutTournamentsInput | TeamUpdateWithWhereUniqueWithoutTournamentsInput[]
    updateMany?: TeamUpdateManyWithWhereWithoutTournamentsInput | TeamUpdateManyWithWhereWithoutTournamentsInput[]
    deleteMany?: TeamScalarWhereInput | TeamScalarWhereInput[]
  }

  export type ProfileCreateNestedManyWithoutTeamsInput = {
    create?: XOR<ProfileCreateWithoutTeamsInput, ProfileUncheckedCreateWithoutTeamsInput> | ProfileCreateWithoutTeamsInput[] | ProfileUncheckedCreateWithoutTeamsInput[]
    connectOrCreate?: ProfileCreateOrConnectWithoutTeamsInput | ProfileCreateOrConnectWithoutTeamsInput[]
    createMany?: ProfileCreateManyTeamsInputEnvelope
    connect?: ProfileWhereUniqueInput | ProfileWhereUniqueInput[]
  }

  export type TournamentCreateNestedManyWithoutTeamsInput = {
    create?: XOR<TournamentCreateWithoutTeamsInput, TournamentUncheckedCreateWithoutTeamsInput> | TournamentCreateWithoutTeamsInput[] | TournamentUncheckedCreateWithoutTeamsInput[]
    connectOrCreate?: TournamentCreateOrConnectWithoutTeamsInput | TournamentCreateOrConnectWithoutTeamsInput[]
    connect?: TournamentWhereUniqueInput | TournamentWhereUniqueInput[]
  }

  export type ProfileUncheckedCreateNestedManyWithoutTeamsInput = {
    create?: XOR<ProfileCreateWithoutTeamsInput, ProfileUncheckedCreateWithoutTeamsInput> | ProfileCreateWithoutTeamsInput[] | ProfileUncheckedCreateWithoutTeamsInput[]
    connectOrCreate?: ProfileCreateOrConnectWithoutTeamsInput | ProfileCreateOrConnectWithoutTeamsInput[]
    createMany?: ProfileCreateManyTeamsInputEnvelope
    connect?: ProfileWhereUniqueInput | ProfileWhereUniqueInput[]
  }

  export type TournamentUncheckedCreateNestedManyWithoutTeamsInput = {
    create?: XOR<TournamentCreateWithoutTeamsInput, TournamentUncheckedCreateWithoutTeamsInput> | TournamentCreateWithoutTeamsInput[] | TournamentUncheckedCreateWithoutTeamsInput[]
    connectOrCreate?: TournamentCreateOrConnectWithoutTeamsInput | TournamentCreateOrConnectWithoutTeamsInput[]
    connect?: TournamentWhereUniqueInput | TournamentWhereUniqueInput[]
  }

  export type ProfileUpdateManyWithoutTeamsNestedInput = {
    create?: XOR<ProfileCreateWithoutTeamsInput, ProfileUncheckedCreateWithoutTeamsInput> | ProfileCreateWithoutTeamsInput[] | ProfileUncheckedCreateWithoutTeamsInput[]
    connectOrCreate?: ProfileCreateOrConnectWithoutTeamsInput | ProfileCreateOrConnectWithoutTeamsInput[]
    upsert?: ProfileUpsertWithWhereUniqueWithoutTeamsInput | ProfileUpsertWithWhereUniqueWithoutTeamsInput[]
    createMany?: ProfileCreateManyTeamsInputEnvelope
    set?: ProfileWhereUniqueInput | ProfileWhereUniqueInput[]
    disconnect?: ProfileWhereUniqueInput | ProfileWhereUniqueInput[]
    delete?: ProfileWhereUniqueInput | ProfileWhereUniqueInput[]
    connect?: ProfileWhereUniqueInput | ProfileWhereUniqueInput[]
    update?: ProfileUpdateWithWhereUniqueWithoutTeamsInput | ProfileUpdateWithWhereUniqueWithoutTeamsInput[]
    updateMany?: ProfileUpdateManyWithWhereWithoutTeamsInput | ProfileUpdateManyWithWhereWithoutTeamsInput[]
    deleteMany?: ProfileScalarWhereInput | ProfileScalarWhereInput[]
  }

  export type TournamentUpdateManyWithoutTeamsNestedInput = {
    create?: XOR<TournamentCreateWithoutTeamsInput, TournamentUncheckedCreateWithoutTeamsInput> | TournamentCreateWithoutTeamsInput[] | TournamentUncheckedCreateWithoutTeamsInput[]
    connectOrCreate?: TournamentCreateOrConnectWithoutTeamsInput | TournamentCreateOrConnectWithoutTeamsInput[]
    upsert?: TournamentUpsertWithWhereUniqueWithoutTeamsInput | TournamentUpsertWithWhereUniqueWithoutTeamsInput[]
    set?: TournamentWhereUniqueInput | TournamentWhereUniqueInput[]
    disconnect?: TournamentWhereUniqueInput | TournamentWhereUniqueInput[]
    delete?: TournamentWhereUniqueInput | TournamentWhereUniqueInput[]
    connect?: TournamentWhereUniqueInput | TournamentWhereUniqueInput[]
    update?: TournamentUpdateWithWhereUniqueWithoutTeamsInput | TournamentUpdateWithWhereUniqueWithoutTeamsInput[]
    updateMany?: TournamentUpdateManyWithWhereWithoutTeamsInput | TournamentUpdateManyWithWhereWithoutTeamsInput[]
    deleteMany?: TournamentScalarWhereInput | TournamentScalarWhereInput[]
  }

  export type ProfileUncheckedUpdateManyWithoutTeamsNestedInput = {
    create?: XOR<ProfileCreateWithoutTeamsInput, ProfileUncheckedCreateWithoutTeamsInput> | ProfileCreateWithoutTeamsInput[] | ProfileUncheckedCreateWithoutTeamsInput[]
    connectOrCreate?: ProfileCreateOrConnectWithoutTeamsInput | ProfileCreateOrConnectWithoutTeamsInput[]
    upsert?: ProfileUpsertWithWhereUniqueWithoutTeamsInput | ProfileUpsertWithWhereUniqueWithoutTeamsInput[]
    createMany?: ProfileCreateManyTeamsInputEnvelope
    set?: ProfileWhereUniqueInput | ProfileWhereUniqueInput[]
    disconnect?: ProfileWhereUniqueInput | ProfileWhereUniqueInput[]
    delete?: ProfileWhereUniqueInput | ProfileWhereUniqueInput[]
    connect?: ProfileWhereUniqueInput | ProfileWhereUniqueInput[]
    update?: ProfileUpdateWithWhereUniqueWithoutTeamsInput | ProfileUpdateWithWhereUniqueWithoutTeamsInput[]
    updateMany?: ProfileUpdateManyWithWhereWithoutTeamsInput | ProfileUpdateManyWithWhereWithoutTeamsInput[]
    deleteMany?: ProfileScalarWhereInput | ProfileScalarWhereInput[]
  }

  export type TournamentUncheckedUpdateManyWithoutTeamsNestedInput = {
    create?: XOR<TournamentCreateWithoutTeamsInput, TournamentUncheckedCreateWithoutTeamsInput> | TournamentCreateWithoutTeamsInput[] | TournamentUncheckedCreateWithoutTeamsInput[]
    connectOrCreate?: TournamentCreateOrConnectWithoutTeamsInput | TournamentCreateOrConnectWithoutTeamsInput[]
    upsert?: TournamentUpsertWithWhereUniqueWithoutTeamsInput | TournamentUpsertWithWhereUniqueWithoutTeamsInput[]
    set?: TournamentWhereUniqueInput | TournamentWhereUniqueInput[]
    disconnect?: TournamentWhereUniqueInput | TournamentWhereUniqueInput[]
    delete?: TournamentWhereUniqueInput | TournamentWhereUniqueInput[]
    connect?: TournamentWhereUniqueInput | TournamentWhereUniqueInput[]
    update?: TournamentUpdateWithWhereUniqueWithoutTeamsInput | TournamentUpdateWithWhereUniqueWithoutTeamsInput[]
    updateMany?: TournamentUpdateManyWithWhereWithoutTeamsInput | TournamentUpdateManyWithWhereWithoutTeamsInput[]
    deleteMany?: TournamentScalarWhereInput | TournamentScalarWhereInput[]
  }

  export type OrgManagerCreateNestedManyWithoutUserInput = {
    create?: XOR<OrgManagerCreateWithoutUserInput, OrgManagerUncheckedCreateWithoutUserInput> | OrgManagerCreateWithoutUserInput[] | OrgManagerUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OrgManagerCreateOrConnectWithoutUserInput | OrgManagerCreateOrConnectWithoutUserInput[]
    createMany?: OrgManagerCreateManyUserInputEnvelope
    connect?: OrgManagerWhereUniqueInput | OrgManagerWhereUniqueInput[]
  }

  export type OrgCreateNestedManyWithoutAdminInput = {
    create?: XOR<OrgCreateWithoutAdminInput, OrgUncheckedCreateWithoutAdminInput> | OrgCreateWithoutAdminInput[] | OrgUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: OrgCreateOrConnectWithoutAdminInput | OrgCreateOrConnectWithoutAdminInput[]
    createMany?: OrgCreateManyAdminInputEnvelope
    connect?: OrgWhereUniqueInput | OrgWhereUniqueInput[]
  }

  export type ProfileCreateNestedOneWithoutUserInput = {
    create?: XOR<ProfileCreateWithoutUserInput, ProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutUserInput
    connect?: ProfileWhereUniqueInput
  }

  export type OrgManagerUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<OrgManagerCreateWithoutUserInput, OrgManagerUncheckedCreateWithoutUserInput> | OrgManagerCreateWithoutUserInput[] | OrgManagerUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OrgManagerCreateOrConnectWithoutUserInput | OrgManagerCreateOrConnectWithoutUserInput[]
    createMany?: OrgManagerCreateManyUserInputEnvelope
    connect?: OrgManagerWhereUniqueInput | OrgManagerWhereUniqueInput[]
  }

  export type OrgUncheckedCreateNestedManyWithoutAdminInput = {
    create?: XOR<OrgCreateWithoutAdminInput, OrgUncheckedCreateWithoutAdminInput> | OrgCreateWithoutAdminInput[] | OrgUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: OrgCreateOrConnectWithoutAdminInput | OrgCreateOrConnectWithoutAdminInput[]
    createMany?: OrgCreateManyAdminInputEnvelope
    connect?: OrgWhereUniqueInput | OrgWhereUniqueInput[]
  }

  export type ProfileUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<ProfileCreateWithoutUserInput, ProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutUserInput
    connect?: ProfileWhereUniqueInput
  }

  export type EnumUserRoleFieldUpdateOperationsInput = {
    set?: $Enums.UserRole
  }

  export type OrgManagerUpdateManyWithoutUserNestedInput = {
    create?: XOR<OrgManagerCreateWithoutUserInput, OrgManagerUncheckedCreateWithoutUserInput> | OrgManagerCreateWithoutUserInput[] | OrgManagerUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OrgManagerCreateOrConnectWithoutUserInput | OrgManagerCreateOrConnectWithoutUserInput[]
    upsert?: OrgManagerUpsertWithWhereUniqueWithoutUserInput | OrgManagerUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: OrgManagerCreateManyUserInputEnvelope
    set?: OrgManagerWhereUniqueInput | OrgManagerWhereUniqueInput[]
    disconnect?: OrgManagerWhereUniqueInput | OrgManagerWhereUniqueInput[]
    delete?: OrgManagerWhereUniqueInput | OrgManagerWhereUniqueInput[]
    connect?: OrgManagerWhereUniqueInput | OrgManagerWhereUniqueInput[]
    update?: OrgManagerUpdateWithWhereUniqueWithoutUserInput | OrgManagerUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: OrgManagerUpdateManyWithWhereWithoutUserInput | OrgManagerUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: OrgManagerScalarWhereInput | OrgManagerScalarWhereInput[]
  }

  export type OrgUpdateManyWithoutAdminNestedInput = {
    create?: XOR<OrgCreateWithoutAdminInput, OrgUncheckedCreateWithoutAdminInput> | OrgCreateWithoutAdminInput[] | OrgUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: OrgCreateOrConnectWithoutAdminInput | OrgCreateOrConnectWithoutAdminInput[]
    upsert?: OrgUpsertWithWhereUniqueWithoutAdminInput | OrgUpsertWithWhereUniqueWithoutAdminInput[]
    createMany?: OrgCreateManyAdminInputEnvelope
    set?: OrgWhereUniqueInput | OrgWhereUniqueInput[]
    disconnect?: OrgWhereUniqueInput | OrgWhereUniqueInput[]
    delete?: OrgWhereUniqueInput | OrgWhereUniqueInput[]
    connect?: OrgWhereUniqueInput | OrgWhereUniqueInput[]
    update?: OrgUpdateWithWhereUniqueWithoutAdminInput | OrgUpdateWithWhereUniqueWithoutAdminInput[]
    updateMany?: OrgUpdateManyWithWhereWithoutAdminInput | OrgUpdateManyWithWhereWithoutAdminInput[]
    deleteMany?: OrgScalarWhereInput | OrgScalarWhereInput[]
  }

  export type ProfileUpdateOneWithoutUserNestedInput = {
    create?: XOR<ProfileCreateWithoutUserInput, ProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutUserInput
    upsert?: ProfileUpsertWithoutUserInput
    disconnect?: ProfileWhereInput | boolean
    delete?: ProfileWhereInput | boolean
    connect?: ProfileWhereUniqueInput
    update?: XOR<XOR<ProfileUpdateToOneWithWhereWithoutUserInput, ProfileUpdateWithoutUserInput>, ProfileUncheckedUpdateWithoutUserInput>
  }

  export type OrgManagerUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<OrgManagerCreateWithoutUserInput, OrgManagerUncheckedCreateWithoutUserInput> | OrgManagerCreateWithoutUserInput[] | OrgManagerUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OrgManagerCreateOrConnectWithoutUserInput | OrgManagerCreateOrConnectWithoutUserInput[]
    upsert?: OrgManagerUpsertWithWhereUniqueWithoutUserInput | OrgManagerUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: OrgManagerCreateManyUserInputEnvelope
    set?: OrgManagerWhereUniqueInput | OrgManagerWhereUniqueInput[]
    disconnect?: OrgManagerWhereUniqueInput | OrgManagerWhereUniqueInput[]
    delete?: OrgManagerWhereUniqueInput | OrgManagerWhereUniqueInput[]
    connect?: OrgManagerWhereUniqueInput | OrgManagerWhereUniqueInput[]
    update?: OrgManagerUpdateWithWhereUniqueWithoutUserInput | OrgManagerUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: OrgManagerUpdateManyWithWhereWithoutUserInput | OrgManagerUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: OrgManagerScalarWhereInput | OrgManagerScalarWhereInput[]
  }

  export type OrgUncheckedUpdateManyWithoutAdminNestedInput = {
    create?: XOR<OrgCreateWithoutAdminInput, OrgUncheckedCreateWithoutAdminInput> | OrgCreateWithoutAdminInput[] | OrgUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: OrgCreateOrConnectWithoutAdminInput | OrgCreateOrConnectWithoutAdminInput[]
    upsert?: OrgUpsertWithWhereUniqueWithoutAdminInput | OrgUpsertWithWhereUniqueWithoutAdminInput[]
    createMany?: OrgCreateManyAdminInputEnvelope
    set?: OrgWhereUniqueInput | OrgWhereUniqueInput[]
    disconnect?: OrgWhereUniqueInput | OrgWhereUniqueInput[]
    delete?: OrgWhereUniqueInput | OrgWhereUniqueInput[]
    connect?: OrgWhereUniqueInput | OrgWhereUniqueInput[]
    update?: OrgUpdateWithWhereUniqueWithoutAdminInput | OrgUpdateWithWhereUniqueWithoutAdminInput[]
    updateMany?: OrgUpdateManyWithWhereWithoutAdminInput | OrgUpdateManyWithWhereWithoutAdminInput[]
    deleteMany?: OrgScalarWhereInput | OrgScalarWhereInput[]
  }

  export type ProfileUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<ProfileCreateWithoutUserInput, ProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutUserInput
    upsert?: ProfileUpsertWithoutUserInput
    disconnect?: ProfileWhereInput | boolean
    delete?: ProfileWhereInput | boolean
    connect?: ProfileWhereUniqueInput
    update?: XOR<XOR<ProfileUpdateToOneWithWhereWithoutUserInput, ProfileUpdateWithoutUserInput>, ProfileUncheckedUpdateWithoutUserInput>
  }

  export type GameCreateNestedOneWithoutUsersInput = {
    create?: XOR<GameCreateWithoutUsersInput, GameUncheckedCreateWithoutUsersInput>
    connectOrCreate?: GameCreateOrConnectWithoutUsersInput
    connect?: GameWhereUniqueInput
  }

  export type ProfileCreateNestedOneWithoutGamePlayInput = {
    create?: XOR<ProfileCreateWithoutGamePlayInput, ProfileUncheckedCreateWithoutGamePlayInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutGamePlayInput
    connect?: ProfileWhereUniqueInput
  }

  export type GameUpdateOneRequiredWithoutUsersNestedInput = {
    create?: XOR<GameCreateWithoutUsersInput, GameUncheckedCreateWithoutUsersInput>
    connectOrCreate?: GameCreateOrConnectWithoutUsersInput
    upsert?: GameUpsertWithoutUsersInput
    connect?: GameWhereUniqueInput
    update?: XOR<XOR<GameUpdateToOneWithWhereWithoutUsersInput, GameUpdateWithoutUsersInput>, GameUncheckedUpdateWithoutUsersInput>
  }

  export type ProfileUpdateOneRequiredWithoutGamePlayNestedInput = {
    create?: XOR<ProfileCreateWithoutGamePlayInput, ProfileUncheckedCreateWithoutGamePlayInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutGamePlayInput
    upsert?: ProfileUpsertWithoutGamePlayInput
    connect?: ProfileWhereUniqueInput
    update?: XOR<XOR<ProfileUpdateToOneWithWhereWithoutGamePlayInput, ProfileUpdateWithoutGamePlayInput>, ProfileUncheckedUpdateWithoutGamePlayInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedEnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type NestedEnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type TournamentCreateWithoutGameInput = {
    id?: string
    noOfTeam: number
    noOfPlayerInTeam: number
    teams?: TeamCreateNestedManyWithoutTournamentsInput
  }

  export type TournamentUncheckedCreateWithoutGameInput = {
    id?: string
    noOfTeam: number
    noOfPlayerInTeam: number
    teams?: TeamUncheckedCreateNestedManyWithoutTournamentsInput
  }

  export type TournamentCreateOrConnectWithoutGameInput = {
    where: TournamentWhereUniqueInput
    create: XOR<TournamentCreateWithoutGameInput, TournamentUncheckedCreateWithoutGameInput>
  }

  export type TournamentCreateManyGameInputEnvelope = {
    data: TournamentCreateManyGameInput | TournamentCreateManyGameInput[]
    skipDuplicates?: boolean
  }

  export type UserGameCreateWithoutNameInput = {
    userGameId: string
    ign: ProfileCreateNestedOneWithoutGamePlayInput
  }

  export type UserGameUncheckedCreateWithoutNameInput = {
    userGameId: string
    userIgn: string
  }

  export type UserGameCreateOrConnectWithoutNameInput = {
    where: UserGameWhereUniqueInput
    create: XOR<UserGameCreateWithoutNameInput, UserGameUncheckedCreateWithoutNameInput>
  }

  export type UserGameCreateManyNameInputEnvelope = {
    data: UserGameCreateManyNameInput | UserGameCreateManyNameInput[]
    skipDuplicates?: boolean
  }

  export type TournamentUpsertWithWhereUniqueWithoutGameInput = {
    where: TournamentWhereUniqueInput
    update: XOR<TournamentUpdateWithoutGameInput, TournamentUncheckedUpdateWithoutGameInput>
    create: XOR<TournamentCreateWithoutGameInput, TournamentUncheckedCreateWithoutGameInput>
  }

  export type TournamentUpdateWithWhereUniqueWithoutGameInput = {
    where: TournamentWhereUniqueInput
    data: XOR<TournamentUpdateWithoutGameInput, TournamentUncheckedUpdateWithoutGameInput>
  }

  export type TournamentUpdateManyWithWhereWithoutGameInput = {
    where: TournamentScalarWhereInput
    data: XOR<TournamentUpdateManyMutationInput, TournamentUncheckedUpdateManyWithoutGameInput>
  }

  export type TournamentScalarWhereInput = {
    AND?: TournamentScalarWhereInput | TournamentScalarWhereInput[]
    OR?: TournamentScalarWhereInput[]
    NOT?: TournamentScalarWhereInput | TournamentScalarWhereInput[]
    id?: StringFilter<"Tournament"> | string
    noOfTeam?: IntFilter<"Tournament"> | number
    gameName?: StringFilter<"Tournament"> | string
    noOfPlayerInTeam?: IntFilter<"Tournament"> | number
  }

  export type UserGameUpsertWithWhereUniqueWithoutNameInput = {
    where: UserGameWhereUniqueInput
    update: XOR<UserGameUpdateWithoutNameInput, UserGameUncheckedUpdateWithoutNameInput>
    create: XOR<UserGameCreateWithoutNameInput, UserGameUncheckedCreateWithoutNameInput>
  }

  export type UserGameUpdateWithWhereUniqueWithoutNameInput = {
    where: UserGameWhereUniqueInput
    data: XOR<UserGameUpdateWithoutNameInput, UserGameUncheckedUpdateWithoutNameInput>
  }

  export type UserGameUpdateManyWithWhereWithoutNameInput = {
    where: UserGameScalarWhereInput
    data: XOR<UserGameUpdateManyMutationInput, UserGameUncheckedUpdateManyWithoutNameInput>
  }

  export type UserGameScalarWhereInput = {
    AND?: UserGameScalarWhereInput | UserGameScalarWhereInput[]
    OR?: UserGameScalarWhereInput[]
    NOT?: UserGameScalarWhereInput | UserGameScalarWhereInput[]
    gameName?: StringFilter<"UserGame"> | string
    userGameId?: StringFilter<"UserGame"> | string
    userIgn?: StringFilter<"UserGame"> | string
  }

  export type UserCreateWithoutOrgJoinInput = {
    id?: string
    username: string
    password: string
    email: string
    role?: $Enums.UserRole
    managerIn?: OrgManagerCreateNestedManyWithoutUserInput
    profile?: ProfileCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutOrgJoinInput = {
    id?: string
    username: string
    password: string
    email: string
    role?: $Enums.UserRole
    managerIn?: OrgManagerUncheckedCreateNestedManyWithoutUserInput
    profile?: ProfileUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutOrgJoinInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutOrgJoinInput, UserUncheckedCreateWithoutOrgJoinInput>
  }

  export type OrgManagerCreateWithoutOrgInput = {
    id?: string
    user: UserCreateNestedOneWithoutManagerInInput
  }

  export type OrgManagerUncheckedCreateWithoutOrgInput = {
    id?: string
    userId: string
  }

  export type OrgManagerCreateOrConnectWithoutOrgInput = {
    where: OrgManagerWhereUniqueInput
    create: XOR<OrgManagerCreateWithoutOrgInput, OrgManagerUncheckedCreateWithoutOrgInput>
  }

  export type OrgManagerCreateManyOrgInputEnvelope = {
    data: OrgManagerCreateManyOrgInput | OrgManagerCreateManyOrgInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutOrgJoinInput = {
    update: XOR<UserUpdateWithoutOrgJoinInput, UserUncheckedUpdateWithoutOrgJoinInput>
    create: XOR<UserCreateWithoutOrgJoinInput, UserUncheckedCreateWithoutOrgJoinInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutOrgJoinInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutOrgJoinInput, UserUncheckedUpdateWithoutOrgJoinInput>
  }

  export type UserUpdateWithoutOrgJoinInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    managerIn?: OrgManagerUpdateManyWithoutUserNestedInput
    profile?: ProfileUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutOrgJoinInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    managerIn?: OrgManagerUncheckedUpdateManyWithoutUserNestedInput
    profile?: ProfileUncheckedUpdateOneWithoutUserNestedInput
  }

  export type OrgManagerUpsertWithWhereUniqueWithoutOrgInput = {
    where: OrgManagerWhereUniqueInput
    update: XOR<OrgManagerUpdateWithoutOrgInput, OrgManagerUncheckedUpdateWithoutOrgInput>
    create: XOR<OrgManagerCreateWithoutOrgInput, OrgManagerUncheckedCreateWithoutOrgInput>
  }

  export type OrgManagerUpdateWithWhereUniqueWithoutOrgInput = {
    where: OrgManagerWhereUniqueInput
    data: XOR<OrgManagerUpdateWithoutOrgInput, OrgManagerUncheckedUpdateWithoutOrgInput>
  }

  export type OrgManagerUpdateManyWithWhereWithoutOrgInput = {
    where: OrgManagerScalarWhereInput
    data: XOR<OrgManagerUpdateManyMutationInput, OrgManagerUncheckedUpdateManyWithoutOrgInput>
  }

  export type OrgManagerScalarWhereInput = {
    AND?: OrgManagerScalarWhereInput | OrgManagerScalarWhereInput[]
    OR?: OrgManagerScalarWhereInput[]
    NOT?: OrgManagerScalarWhereInput | OrgManagerScalarWhereInput[]
    id?: StringFilter<"OrgManager"> | string
    orgId?: StringFilter<"OrgManager"> | string
    userId?: StringFilter<"OrgManager"> | string
  }

  export type OrgCreateWithoutManagersInput = {
    id?: string
    name: string
    admin: UserCreateNestedOneWithoutOrgJoinInput
  }

  export type OrgUncheckedCreateWithoutManagersInput = {
    id?: string
    name: string
    adminId: string
  }

  export type OrgCreateOrConnectWithoutManagersInput = {
    where: OrgWhereUniqueInput
    create: XOR<OrgCreateWithoutManagersInput, OrgUncheckedCreateWithoutManagersInput>
  }

  export type UserCreateWithoutManagerInInput = {
    id?: string
    username: string
    password: string
    email: string
    role?: $Enums.UserRole
    orgJoin?: OrgCreateNestedManyWithoutAdminInput
    profile?: ProfileCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutManagerInInput = {
    id?: string
    username: string
    password: string
    email: string
    role?: $Enums.UserRole
    orgJoin?: OrgUncheckedCreateNestedManyWithoutAdminInput
    profile?: ProfileUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutManagerInInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutManagerInInput, UserUncheckedCreateWithoutManagerInInput>
  }

  export type OrgUpsertWithoutManagersInput = {
    update: XOR<OrgUpdateWithoutManagersInput, OrgUncheckedUpdateWithoutManagersInput>
    create: XOR<OrgCreateWithoutManagersInput, OrgUncheckedCreateWithoutManagersInput>
    where?: OrgWhereInput
  }

  export type OrgUpdateToOneWithWhereWithoutManagersInput = {
    where?: OrgWhereInput
    data: XOR<OrgUpdateWithoutManagersInput, OrgUncheckedUpdateWithoutManagersInput>
  }

  export type OrgUpdateWithoutManagersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    admin?: UserUpdateOneRequiredWithoutOrgJoinNestedInput
  }

  export type OrgUncheckedUpdateWithoutManagersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    adminId?: StringFieldUpdateOperationsInput | string
  }

  export type UserUpsertWithoutManagerInInput = {
    update: XOR<UserUpdateWithoutManagerInInput, UserUncheckedUpdateWithoutManagerInInput>
    create: XOR<UserCreateWithoutManagerInInput, UserUncheckedCreateWithoutManagerInInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutManagerInInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutManagerInInput, UserUncheckedUpdateWithoutManagerInInput>
  }

  export type UserUpdateWithoutManagerInInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    orgJoin?: OrgUpdateManyWithoutAdminNestedInput
    profile?: ProfileUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutManagerInInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    orgJoin?: OrgUncheckedUpdateManyWithoutAdminNestedInput
    profile?: ProfileUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserCreateWithoutProfileInput = {
    id?: string
    username: string
    password: string
    email: string
    role?: $Enums.UserRole
    managerIn?: OrgManagerCreateNestedManyWithoutUserInput
    orgJoin?: OrgCreateNestedManyWithoutAdminInput
  }

  export type UserUncheckedCreateWithoutProfileInput = {
    id?: string
    username: string
    password: string
    email: string
    role?: $Enums.UserRole
    managerIn?: OrgManagerUncheckedCreateNestedManyWithoutUserInput
    orgJoin?: OrgUncheckedCreateNestedManyWithoutAdminInput
  }

  export type UserCreateOrConnectWithoutProfileInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutProfileInput, UserUncheckedCreateWithoutProfileInput>
  }

  export type UserGameCreateWithoutIgnInput = {
    userGameId: string
    name: GameCreateNestedOneWithoutUsersInput
  }

  export type UserGameUncheckedCreateWithoutIgnInput = {
    gameName: string
    userGameId: string
  }

  export type UserGameCreateOrConnectWithoutIgnInput = {
    where: UserGameWhereUniqueInput
    create: XOR<UserGameCreateWithoutIgnInput, UserGameUncheckedCreateWithoutIgnInput>
  }

  export type UserGameCreateManyIgnInputEnvelope = {
    data: UserGameCreateManyIgnInput | UserGameCreateManyIgnInput[]
    skipDuplicates?: boolean
  }

  export type TeamCreateWithoutUsersInput = {
    id?: string
    noOfPlayer: number
    tournaments?: TournamentCreateNestedManyWithoutTeamsInput
  }

  export type TeamUncheckedCreateWithoutUsersInput = {
    id?: string
    noOfPlayer: number
    tournaments?: TournamentUncheckedCreateNestedManyWithoutTeamsInput
  }

  export type TeamCreateOrConnectWithoutUsersInput = {
    where: TeamWhereUniqueInput
    create: XOR<TeamCreateWithoutUsersInput, TeamUncheckedCreateWithoutUsersInput>
  }

  export type UserUpsertWithoutProfileInput = {
    update: XOR<UserUpdateWithoutProfileInput, UserUncheckedUpdateWithoutProfileInput>
    create: XOR<UserCreateWithoutProfileInput, UserUncheckedCreateWithoutProfileInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutProfileInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutProfileInput, UserUncheckedUpdateWithoutProfileInput>
  }

  export type UserUpdateWithoutProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    managerIn?: OrgManagerUpdateManyWithoutUserNestedInput
    orgJoin?: OrgUpdateManyWithoutAdminNestedInput
  }

  export type UserUncheckedUpdateWithoutProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    managerIn?: OrgManagerUncheckedUpdateManyWithoutUserNestedInput
    orgJoin?: OrgUncheckedUpdateManyWithoutAdminNestedInput
  }

  export type UserGameUpsertWithWhereUniqueWithoutIgnInput = {
    where: UserGameWhereUniqueInput
    update: XOR<UserGameUpdateWithoutIgnInput, UserGameUncheckedUpdateWithoutIgnInput>
    create: XOR<UserGameCreateWithoutIgnInput, UserGameUncheckedCreateWithoutIgnInput>
  }

  export type UserGameUpdateWithWhereUniqueWithoutIgnInput = {
    where: UserGameWhereUniqueInput
    data: XOR<UserGameUpdateWithoutIgnInput, UserGameUncheckedUpdateWithoutIgnInput>
  }

  export type UserGameUpdateManyWithWhereWithoutIgnInput = {
    where: UserGameScalarWhereInput
    data: XOR<UserGameUpdateManyMutationInput, UserGameUncheckedUpdateManyWithoutIgnInput>
  }

  export type TeamUpsertWithoutUsersInput = {
    update: XOR<TeamUpdateWithoutUsersInput, TeamUncheckedUpdateWithoutUsersInput>
    create: XOR<TeamCreateWithoutUsersInput, TeamUncheckedCreateWithoutUsersInput>
    where?: TeamWhereInput
  }

  export type TeamUpdateToOneWithWhereWithoutUsersInput = {
    where?: TeamWhereInput
    data: XOR<TeamUpdateWithoutUsersInput, TeamUncheckedUpdateWithoutUsersInput>
  }

  export type TeamUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    noOfPlayer?: IntFieldUpdateOperationsInput | number
    tournaments?: TournamentUpdateManyWithoutTeamsNestedInput
  }

  export type TeamUncheckedUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    noOfPlayer?: IntFieldUpdateOperationsInput | number
    tournaments?: TournamentUncheckedUpdateManyWithoutTeamsNestedInput
  }

  export type GameCreateWithoutOnGoingTournamentInput = {
    id?: string
    gameName: string
    users?: UserGameCreateNestedManyWithoutNameInput
  }

  export type GameUncheckedCreateWithoutOnGoingTournamentInput = {
    id?: string
    gameName: string
    users?: UserGameUncheckedCreateNestedManyWithoutNameInput
  }

  export type GameCreateOrConnectWithoutOnGoingTournamentInput = {
    where: GameWhereUniqueInput
    create: XOR<GameCreateWithoutOnGoingTournamentInput, GameUncheckedCreateWithoutOnGoingTournamentInput>
  }

  export type TeamCreateWithoutTournamentsInput = {
    id?: string
    noOfPlayer: number
    users?: ProfileCreateNestedManyWithoutTeamsInput
  }

  export type TeamUncheckedCreateWithoutTournamentsInput = {
    id?: string
    noOfPlayer: number
    users?: ProfileUncheckedCreateNestedManyWithoutTeamsInput
  }

  export type TeamCreateOrConnectWithoutTournamentsInput = {
    where: TeamWhereUniqueInput
    create: XOR<TeamCreateWithoutTournamentsInput, TeamUncheckedCreateWithoutTournamentsInput>
  }

  export type GameUpsertWithoutOnGoingTournamentInput = {
    update: XOR<GameUpdateWithoutOnGoingTournamentInput, GameUncheckedUpdateWithoutOnGoingTournamentInput>
    create: XOR<GameCreateWithoutOnGoingTournamentInput, GameUncheckedCreateWithoutOnGoingTournamentInput>
    where?: GameWhereInput
  }

  export type GameUpdateToOneWithWhereWithoutOnGoingTournamentInput = {
    where?: GameWhereInput
    data: XOR<GameUpdateWithoutOnGoingTournamentInput, GameUncheckedUpdateWithoutOnGoingTournamentInput>
  }

  export type GameUpdateWithoutOnGoingTournamentInput = {
    id?: StringFieldUpdateOperationsInput | string
    gameName?: StringFieldUpdateOperationsInput | string
    users?: UserGameUpdateManyWithoutNameNestedInput
  }

  export type GameUncheckedUpdateWithoutOnGoingTournamentInput = {
    id?: StringFieldUpdateOperationsInput | string
    gameName?: StringFieldUpdateOperationsInput | string
    users?: UserGameUncheckedUpdateManyWithoutNameNestedInput
  }

  export type TeamUpsertWithWhereUniqueWithoutTournamentsInput = {
    where: TeamWhereUniqueInput
    update: XOR<TeamUpdateWithoutTournamentsInput, TeamUncheckedUpdateWithoutTournamentsInput>
    create: XOR<TeamCreateWithoutTournamentsInput, TeamUncheckedCreateWithoutTournamentsInput>
  }

  export type TeamUpdateWithWhereUniqueWithoutTournamentsInput = {
    where: TeamWhereUniqueInput
    data: XOR<TeamUpdateWithoutTournamentsInput, TeamUncheckedUpdateWithoutTournamentsInput>
  }

  export type TeamUpdateManyWithWhereWithoutTournamentsInput = {
    where: TeamScalarWhereInput
    data: XOR<TeamUpdateManyMutationInput, TeamUncheckedUpdateManyWithoutTournamentsInput>
  }

  export type TeamScalarWhereInput = {
    AND?: TeamScalarWhereInput | TeamScalarWhereInput[]
    OR?: TeamScalarWhereInput[]
    NOT?: TeamScalarWhereInput | TeamScalarWhereInput[]
    id?: StringFilter<"Team"> | string
    noOfPlayer?: IntFilter<"Team"> | number
  }

  export type ProfileCreateWithoutTeamsInput = {
    user: UserCreateNestedOneWithoutProfileInput
    gamePlay?: UserGameCreateNestedManyWithoutIgnInput
  }

  export type ProfileUncheckedCreateWithoutTeamsInput = {
    userId: string
    gamePlay?: UserGameUncheckedCreateNestedManyWithoutIgnInput
  }

  export type ProfileCreateOrConnectWithoutTeamsInput = {
    where: ProfileWhereUniqueInput
    create: XOR<ProfileCreateWithoutTeamsInput, ProfileUncheckedCreateWithoutTeamsInput>
  }

  export type ProfileCreateManyTeamsInputEnvelope = {
    data: ProfileCreateManyTeamsInput | ProfileCreateManyTeamsInput[]
    skipDuplicates?: boolean
  }

  export type TournamentCreateWithoutTeamsInput = {
    id?: string
    noOfTeam: number
    noOfPlayerInTeam: number
    game: GameCreateNestedOneWithoutOnGoingTournamentInput
  }

  export type TournamentUncheckedCreateWithoutTeamsInput = {
    id?: string
    noOfTeam: number
    gameName: string
    noOfPlayerInTeam: number
  }

  export type TournamentCreateOrConnectWithoutTeamsInput = {
    where: TournamentWhereUniqueInput
    create: XOR<TournamentCreateWithoutTeamsInput, TournamentUncheckedCreateWithoutTeamsInput>
  }

  export type ProfileUpsertWithWhereUniqueWithoutTeamsInput = {
    where: ProfileWhereUniqueInput
    update: XOR<ProfileUpdateWithoutTeamsInput, ProfileUncheckedUpdateWithoutTeamsInput>
    create: XOR<ProfileCreateWithoutTeamsInput, ProfileUncheckedCreateWithoutTeamsInput>
  }

  export type ProfileUpdateWithWhereUniqueWithoutTeamsInput = {
    where: ProfileWhereUniqueInput
    data: XOR<ProfileUpdateWithoutTeamsInput, ProfileUncheckedUpdateWithoutTeamsInput>
  }

  export type ProfileUpdateManyWithWhereWithoutTeamsInput = {
    where: ProfileScalarWhereInput
    data: XOR<ProfileUpdateManyMutationInput, ProfileUncheckedUpdateManyWithoutTeamsInput>
  }

  export type ProfileScalarWhereInput = {
    AND?: ProfileScalarWhereInput | ProfileScalarWhereInput[]
    OR?: ProfileScalarWhereInput[]
    NOT?: ProfileScalarWhereInput | ProfileScalarWhereInput[]
    userId?: StringFilter<"Profile"> | string
    userTeam?: StringFilter<"Profile"> | string
  }

  export type TournamentUpsertWithWhereUniqueWithoutTeamsInput = {
    where: TournamentWhereUniqueInput
    update: XOR<TournamentUpdateWithoutTeamsInput, TournamentUncheckedUpdateWithoutTeamsInput>
    create: XOR<TournamentCreateWithoutTeamsInput, TournamentUncheckedCreateWithoutTeamsInput>
  }

  export type TournamentUpdateWithWhereUniqueWithoutTeamsInput = {
    where: TournamentWhereUniqueInput
    data: XOR<TournamentUpdateWithoutTeamsInput, TournamentUncheckedUpdateWithoutTeamsInput>
  }

  export type TournamentUpdateManyWithWhereWithoutTeamsInput = {
    where: TournamentScalarWhereInput
    data: XOR<TournamentUpdateManyMutationInput, TournamentUncheckedUpdateManyWithoutTeamsInput>
  }

  export type OrgManagerCreateWithoutUserInput = {
    id?: string
    org: OrgCreateNestedOneWithoutManagersInput
  }

  export type OrgManagerUncheckedCreateWithoutUserInput = {
    id?: string
    orgId: string
  }

  export type OrgManagerCreateOrConnectWithoutUserInput = {
    where: OrgManagerWhereUniqueInput
    create: XOR<OrgManagerCreateWithoutUserInput, OrgManagerUncheckedCreateWithoutUserInput>
  }

  export type OrgManagerCreateManyUserInputEnvelope = {
    data: OrgManagerCreateManyUserInput | OrgManagerCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type OrgCreateWithoutAdminInput = {
    id?: string
    name: string
    managers?: OrgManagerCreateNestedManyWithoutOrgInput
  }

  export type OrgUncheckedCreateWithoutAdminInput = {
    id?: string
    name: string
    managers?: OrgManagerUncheckedCreateNestedManyWithoutOrgInput
  }

  export type OrgCreateOrConnectWithoutAdminInput = {
    where: OrgWhereUniqueInput
    create: XOR<OrgCreateWithoutAdminInput, OrgUncheckedCreateWithoutAdminInput>
  }

  export type OrgCreateManyAdminInputEnvelope = {
    data: OrgCreateManyAdminInput | OrgCreateManyAdminInput[]
    skipDuplicates?: boolean
  }

  export type ProfileCreateWithoutUserInput = {
    gamePlay?: UserGameCreateNestedManyWithoutIgnInput
    teams: TeamCreateNestedOneWithoutUsersInput
  }

  export type ProfileUncheckedCreateWithoutUserInput = {
    userTeam: string
    gamePlay?: UserGameUncheckedCreateNestedManyWithoutIgnInput
  }

  export type ProfileCreateOrConnectWithoutUserInput = {
    where: ProfileWhereUniqueInput
    create: XOR<ProfileCreateWithoutUserInput, ProfileUncheckedCreateWithoutUserInput>
  }

  export type OrgManagerUpsertWithWhereUniqueWithoutUserInput = {
    where: OrgManagerWhereUniqueInput
    update: XOR<OrgManagerUpdateWithoutUserInput, OrgManagerUncheckedUpdateWithoutUserInput>
    create: XOR<OrgManagerCreateWithoutUserInput, OrgManagerUncheckedCreateWithoutUserInput>
  }

  export type OrgManagerUpdateWithWhereUniqueWithoutUserInput = {
    where: OrgManagerWhereUniqueInput
    data: XOR<OrgManagerUpdateWithoutUserInput, OrgManagerUncheckedUpdateWithoutUserInput>
  }

  export type OrgManagerUpdateManyWithWhereWithoutUserInput = {
    where: OrgManagerScalarWhereInput
    data: XOR<OrgManagerUpdateManyMutationInput, OrgManagerUncheckedUpdateManyWithoutUserInput>
  }

  export type OrgUpsertWithWhereUniqueWithoutAdminInput = {
    where: OrgWhereUniqueInput
    update: XOR<OrgUpdateWithoutAdminInput, OrgUncheckedUpdateWithoutAdminInput>
    create: XOR<OrgCreateWithoutAdminInput, OrgUncheckedCreateWithoutAdminInput>
  }

  export type OrgUpdateWithWhereUniqueWithoutAdminInput = {
    where: OrgWhereUniqueInput
    data: XOR<OrgUpdateWithoutAdminInput, OrgUncheckedUpdateWithoutAdminInput>
  }

  export type OrgUpdateManyWithWhereWithoutAdminInput = {
    where: OrgScalarWhereInput
    data: XOR<OrgUpdateManyMutationInput, OrgUncheckedUpdateManyWithoutAdminInput>
  }

  export type OrgScalarWhereInput = {
    AND?: OrgScalarWhereInput | OrgScalarWhereInput[]
    OR?: OrgScalarWhereInput[]
    NOT?: OrgScalarWhereInput | OrgScalarWhereInput[]
    id?: StringFilter<"Org"> | string
    name?: StringFilter<"Org"> | string
    adminId?: StringFilter<"Org"> | string
  }

  export type ProfileUpsertWithoutUserInput = {
    update: XOR<ProfileUpdateWithoutUserInput, ProfileUncheckedUpdateWithoutUserInput>
    create: XOR<ProfileCreateWithoutUserInput, ProfileUncheckedCreateWithoutUserInput>
    where?: ProfileWhereInput
  }

  export type ProfileUpdateToOneWithWhereWithoutUserInput = {
    where?: ProfileWhereInput
    data: XOR<ProfileUpdateWithoutUserInput, ProfileUncheckedUpdateWithoutUserInput>
  }

  export type ProfileUpdateWithoutUserInput = {
    gamePlay?: UserGameUpdateManyWithoutIgnNestedInput
    teams?: TeamUpdateOneRequiredWithoutUsersNestedInput
  }

  export type ProfileUncheckedUpdateWithoutUserInput = {
    userTeam?: StringFieldUpdateOperationsInput | string
    gamePlay?: UserGameUncheckedUpdateManyWithoutIgnNestedInput
  }

  export type GameCreateWithoutUsersInput = {
    id?: string
    gameName: string
    onGoingTournament?: TournamentCreateNestedManyWithoutGameInput
  }

  export type GameUncheckedCreateWithoutUsersInput = {
    id?: string
    gameName: string
    onGoingTournament?: TournamentUncheckedCreateNestedManyWithoutGameInput
  }

  export type GameCreateOrConnectWithoutUsersInput = {
    where: GameWhereUniqueInput
    create: XOR<GameCreateWithoutUsersInput, GameUncheckedCreateWithoutUsersInput>
  }

  export type ProfileCreateWithoutGamePlayInput = {
    user: UserCreateNestedOneWithoutProfileInput
    teams: TeamCreateNestedOneWithoutUsersInput
  }

  export type ProfileUncheckedCreateWithoutGamePlayInput = {
    userId: string
    userTeam: string
  }

  export type ProfileCreateOrConnectWithoutGamePlayInput = {
    where: ProfileWhereUniqueInput
    create: XOR<ProfileCreateWithoutGamePlayInput, ProfileUncheckedCreateWithoutGamePlayInput>
  }

  export type GameUpsertWithoutUsersInput = {
    update: XOR<GameUpdateWithoutUsersInput, GameUncheckedUpdateWithoutUsersInput>
    create: XOR<GameCreateWithoutUsersInput, GameUncheckedCreateWithoutUsersInput>
    where?: GameWhereInput
  }

  export type GameUpdateToOneWithWhereWithoutUsersInput = {
    where?: GameWhereInput
    data: XOR<GameUpdateWithoutUsersInput, GameUncheckedUpdateWithoutUsersInput>
  }

  export type GameUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    gameName?: StringFieldUpdateOperationsInput | string
    onGoingTournament?: TournamentUpdateManyWithoutGameNestedInput
  }

  export type GameUncheckedUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    gameName?: StringFieldUpdateOperationsInput | string
    onGoingTournament?: TournamentUncheckedUpdateManyWithoutGameNestedInput
  }

  export type ProfileUpsertWithoutGamePlayInput = {
    update: XOR<ProfileUpdateWithoutGamePlayInput, ProfileUncheckedUpdateWithoutGamePlayInput>
    create: XOR<ProfileCreateWithoutGamePlayInput, ProfileUncheckedCreateWithoutGamePlayInput>
    where?: ProfileWhereInput
  }

  export type ProfileUpdateToOneWithWhereWithoutGamePlayInput = {
    where?: ProfileWhereInput
    data: XOR<ProfileUpdateWithoutGamePlayInput, ProfileUncheckedUpdateWithoutGamePlayInput>
  }

  export type ProfileUpdateWithoutGamePlayInput = {
    user?: UserUpdateOneRequiredWithoutProfileNestedInput
    teams?: TeamUpdateOneRequiredWithoutUsersNestedInput
  }

  export type ProfileUncheckedUpdateWithoutGamePlayInput = {
    userId?: StringFieldUpdateOperationsInput | string
    userTeam?: StringFieldUpdateOperationsInput | string
  }

  export type TournamentCreateManyGameInput = {
    id?: string
    noOfTeam: number
    noOfPlayerInTeam: number
  }

  export type UserGameCreateManyNameInput = {
    userGameId: string
    userIgn: string
  }

  export type TournamentUpdateWithoutGameInput = {
    id?: StringFieldUpdateOperationsInput | string
    noOfTeam?: IntFieldUpdateOperationsInput | number
    noOfPlayerInTeam?: IntFieldUpdateOperationsInput | number
    teams?: TeamUpdateManyWithoutTournamentsNestedInput
  }

  export type TournamentUncheckedUpdateWithoutGameInput = {
    id?: StringFieldUpdateOperationsInput | string
    noOfTeam?: IntFieldUpdateOperationsInput | number
    noOfPlayerInTeam?: IntFieldUpdateOperationsInput | number
    teams?: TeamUncheckedUpdateManyWithoutTournamentsNestedInput
  }

  export type TournamentUncheckedUpdateManyWithoutGameInput = {
    id?: StringFieldUpdateOperationsInput | string
    noOfTeam?: IntFieldUpdateOperationsInput | number
    noOfPlayerInTeam?: IntFieldUpdateOperationsInput | number
  }

  export type UserGameUpdateWithoutNameInput = {
    userGameId?: StringFieldUpdateOperationsInput | string
    ign?: ProfileUpdateOneRequiredWithoutGamePlayNestedInput
  }

  export type UserGameUncheckedUpdateWithoutNameInput = {
    userGameId?: StringFieldUpdateOperationsInput | string
    userIgn?: StringFieldUpdateOperationsInput | string
  }

  export type UserGameUncheckedUpdateManyWithoutNameInput = {
    userGameId?: StringFieldUpdateOperationsInput | string
    userIgn?: StringFieldUpdateOperationsInput | string
  }

  export type OrgManagerCreateManyOrgInput = {
    id?: string
    userId: string
  }

  export type OrgManagerUpdateWithoutOrgInput = {
    id?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutManagerInNestedInput
  }

  export type OrgManagerUncheckedUpdateWithoutOrgInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type OrgManagerUncheckedUpdateManyWithoutOrgInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type UserGameCreateManyIgnInput = {
    gameName: string
    userGameId: string
  }

  export type UserGameUpdateWithoutIgnInput = {
    userGameId?: StringFieldUpdateOperationsInput | string
    name?: GameUpdateOneRequiredWithoutUsersNestedInput
  }

  export type UserGameUncheckedUpdateWithoutIgnInput = {
    gameName?: StringFieldUpdateOperationsInput | string
    userGameId?: StringFieldUpdateOperationsInput | string
  }

  export type UserGameUncheckedUpdateManyWithoutIgnInput = {
    gameName?: StringFieldUpdateOperationsInput | string
    userGameId?: StringFieldUpdateOperationsInput | string
  }

  export type TeamUpdateWithoutTournamentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    noOfPlayer?: IntFieldUpdateOperationsInput | number
    users?: ProfileUpdateManyWithoutTeamsNestedInput
  }

  export type TeamUncheckedUpdateWithoutTournamentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    noOfPlayer?: IntFieldUpdateOperationsInput | number
    users?: ProfileUncheckedUpdateManyWithoutTeamsNestedInput
  }

  export type TeamUncheckedUpdateManyWithoutTournamentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    noOfPlayer?: IntFieldUpdateOperationsInput | number
  }

  export type ProfileCreateManyTeamsInput = {
    userId: string
  }

  export type ProfileUpdateWithoutTeamsInput = {
    user?: UserUpdateOneRequiredWithoutProfileNestedInput
    gamePlay?: UserGameUpdateManyWithoutIgnNestedInput
  }

  export type ProfileUncheckedUpdateWithoutTeamsInput = {
    userId?: StringFieldUpdateOperationsInput | string
    gamePlay?: UserGameUncheckedUpdateManyWithoutIgnNestedInput
  }

  export type ProfileUncheckedUpdateManyWithoutTeamsInput = {
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type TournamentUpdateWithoutTeamsInput = {
    id?: StringFieldUpdateOperationsInput | string
    noOfTeam?: IntFieldUpdateOperationsInput | number
    noOfPlayerInTeam?: IntFieldUpdateOperationsInput | number
    game?: GameUpdateOneRequiredWithoutOnGoingTournamentNestedInput
  }

  export type TournamentUncheckedUpdateWithoutTeamsInput = {
    id?: StringFieldUpdateOperationsInput | string
    noOfTeam?: IntFieldUpdateOperationsInput | number
    gameName?: StringFieldUpdateOperationsInput | string
    noOfPlayerInTeam?: IntFieldUpdateOperationsInput | number
  }

  export type TournamentUncheckedUpdateManyWithoutTeamsInput = {
    id?: StringFieldUpdateOperationsInput | string
    noOfTeam?: IntFieldUpdateOperationsInput | number
    gameName?: StringFieldUpdateOperationsInput | string
    noOfPlayerInTeam?: IntFieldUpdateOperationsInput | number
  }

  export type OrgManagerCreateManyUserInput = {
    id?: string
    orgId: string
  }

  export type OrgCreateManyAdminInput = {
    id?: string
    name: string
  }

  export type OrgManagerUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    org?: OrgUpdateOneRequiredWithoutManagersNestedInput
  }

  export type OrgManagerUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
  }

  export type OrgManagerUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
  }

  export type OrgUpdateWithoutAdminInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    managers?: OrgManagerUpdateManyWithoutOrgNestedInput
  }

  export type OrgUncheckedUpdateWithoutAdminInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    managers?: OrgManagerUncheckedUpdateManyWithoutOrgNestedInput
  }

  export type OrgUncheckedUpdateManyWithoutAdminInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}