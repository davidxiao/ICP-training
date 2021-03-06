import type { Principal } from '@dfinity/principal';
export interface Message {
  'id' : bigint,
  'authorId' : Principal,
  'text' : string,
  'time' : Time,
  'author' : [] | [string],
}
export type Time = bigint;
export interface _SERVICE {
  'follow' : (arg_0: Principal) => Promise<undefined>,
  'follows' : () => Promise<Array<Principal>>,
  'get_name' : () => Promise<[] | [string]>,
  'post' : (arg_0: string) => Promise<undefined>,
  'posts' : (arg_0: Time) => Promise<Array<Message>>,
  'set_name' : (arg_0: string) => Promise<undefined>,
  'timeline' : (arg_0: Time) => Promise<Array<Message>>,
}
