# Training Notes:

## lesson one

cost by cycles from canister: 1x10\*\*12 cycles = 1SDR(~1.4 USD)

#### Create a simple service

> Note: `dfx new --no-frontend` still generates frontend canister(ending with asset), but NOT install it, controlled by `dfx.json`

1. `$dfx new hello`

2. `$cd hello && dfx start`

3. `$dfx deploy`

4. browser to : `http://localhost:8000/?canisterId=ryjl3-tyaaa-aaaaa-aaaba-cai` or to `http://ryjl3-tyaaa-aaaaa-aaaba-cai.localhost:8000`

#### how to get cycles from CLI

##### get principalId

`$dfx identity get-principal`

`$uwq3b-73cwl-qbb43-rkigp-zx7yn-h6nuy-cqutw-sa7sb-s3ja2-vjcnm-wae`

##### create wallet(confused what's --no-wallet)

`$dfx canister --network ic --no-wallet call fg7gi-vyaaa-aaaal-qadca-cai redeem '("xxx-xxx-xxx")'`

`$(principal "mtesr-eiaaa-aaaal-qafmq-cai")`

##### associate principal with wallet

`$dfx identity --network=ic set-wallet mtesr-eiaaa-aaaal-qafmq-cai`

`$Setting wallet for identity 'default' on network 'ic' to id 'mtesr-eiaaa-aaaal-qafmq-cai' Wallet set successfully.`

##### check wallet balance

`$dfx wallet --network=ic balance`

`$14899987801880 cycles.`

##### deploy canister(s) with specified cycles

`$dfx deploy --network=ic --with-cycles=4899987801880`

$ ...

$ Installing code for canister hello, with canister_id icrm2-aiaaa-aaaal-qafuq-cai

$ Installing code for canister hello_assets, with canister_id ilshg-waaaa-aaaal-qafva-cai

$ ...

$ Deployed canisters.

##### check balance again

`$dfx wallet --network=ic balance`

`$5098118771107 cycles`

##### browser to `https://ilshg-waaaa-aaaal-qafva-cai.ic0.app`

#### stop canisters

`$dfx canister --network=ic stop --all`

$ Stopping code for canister hello, with canister_id icrm2-aiaaa-aaaal-qafuq-cai

$ Stopping code for canister hello_assets, with canister_id ilshg-waaaa-aaaal-qafva-cai

#### delete canister

`$ dfx canister --network=ic delete --all`

Beginning withdrawl of 4789987185812 cycles to canister mtesr-eiaaa-aaaal-qafmq-cai.

Setting the controller to identity princpal.

Installing temporary wallet in canister hello to enable transfer of cycles.

Transfering 4789987185812 cycles to canister mtesr-eiaaa-aaaal-qafmq-cai.

Deleting code for canister hello, with canister_id m5g7z-7yaaa-aaaal-qafnq-cai

Beginning withdrawl of 4787589608382 cycles to canister mtesr-eiaaa-aaaal-qafmq-cai.

Setting the controller to identity princpal.

Installing temporary wallet in canister hello_assets to enable transfer of cycles.

Transfering 4787589608382 cycles to canister mtesr-eiaaa-aaaal-qafmq-cai.

Deleting code for canister hello_assets, with canister_id mibou-6qaaa-aaaal-qafoa-cai

#### check cycles in canisters

`$dfx wallet --network=ic balance`

`$14675675311831 cycles`

#### get wallet id

`$dfx identity --network ic get-wallet`

Tasks:

get more familiar with tools like dfx,

get deep knowledge about the tooling,

## Lesson 2

### Motoko

canister
