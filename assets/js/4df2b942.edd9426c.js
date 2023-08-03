"use strict";(self.webpackChunkbeta_BNB_Docs=self.webpackChunkbeta_BNB_Docs||[]).push([[5487],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>u});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),m=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=m(e.components);return a.createElement(c.Provider,{value:t},e.children)},d="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=m(n),p=r,u=d["".concat(c,".").concat(p)]||d[p]||k[p]||o;return n?a.createElement(u,l(l({ref:t},s),{},{components:n})):a.createElement(u,l({ref:t},s))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=p;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[d]="string"==typeof e?e:r,l[1]=i;for(var m=2;m<o;m++)l[m]=n[m];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},61355:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>k,frontMatter:()=>o,metadata:()=>i,toc:()=>m});var a=n(83117),r=(n(67294),n(3905));const o={},l="TimeLock",i={unversionedId:"beaconchain/timelock",id:"beaconchain/timelock",title:"TimeLock",description:"As explained in BEP9, some business plans decide to lock certain amount tokens for pre-defined periods of time, and the only vest in the future according to the schedules. For example, some projects may lock some allocation of the issued tokens as a commitment by the founding team; some business scenarios also need to lock some tokens as collateral for value.",source:"@site/docs/beaconchain/timelock.md",sourceDirName:"beaconchain",slug:"/beaconchain/timelock",permalink:"/docs/beaconchain/timelock",draft:!1,editUrl:"https://github.com/bnb-chain/bnb-chain.github.io/blob/master/docs/beaconchain/timelock.md",tags:[],version:"current",frontMatter:{}},c={},m=[{value:"TimeLock",id:"timelock-1",level:2},{value:"Command line",id:"command-line",level:3},{value:"Parameters",id:"parameters",level:3},{value:"Fee",id:"fee",level:3},{value:"Example",id:"example",level:3},{value:"TimeUnlock",id:"timeunlock",level:2},{value:"Parameters",id:"parameters-1",level:3},{value:"Fee",id:"fee-1",level:3},{value:"Example",id:"example-1",level:3},{value:"TimeRelock",id:"timerelock",level:2},{value:"Parameters",id:"parameters-2",level:3},{value:"Fee",id:"fee-2",level:3},{value:"Example",id:"example-2",level:3},{value:"QueryTimeLock",id:"querytimelock",level:2},{value:"Parameters",id:"parameters-3",level:3},{value:"Example",id:"example-3",level:3},{value:"QueryTimeLocks",id:"querytimelocks",level:2},{value:"QueryTimeLock Parameters",id:"querytimelock-parameters",level:3},{value:"Example",id:"example-4",level:3}],s={toc:m},d="wrapper";function k(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"timelock"},"TimeLock"),(0,r.kt)("p",null,"As explained in ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/bnb-chain/BEPs/blob/master/BEPs/BEP9.md"},"BEP9"),", some business plans decide to lock certain amount tokens for pre-defined periods of time, and the only vest in the future according to the schedules. For example, some projects may lock some allocation of the issued tokens as a commitment by the founding team; some business scenarios also need to lock some tokens as collateral for value."),(0,r.kt)("h2",{id:"timelock-1"},"TimeLock"),(0,r.kt)("p",null,"You can only lock tokens on your own account. TimeLock will transfer locked tokens to a purely-code-controlled escrow account and before the lock time expires. A purely-code-controlled escrow account is a kind of account which is derived from a hard-coded string in BNB Beacon Chain  protocol. This kind of account doesn't have its own private key and it's only controlled by code of the protocol. The code for calculating escrow account is the same that is used in ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/cosmos/cosmos-sdk/blob/82a2c5d6d86ffd761f0162b93f0aaa57b7f66fe7/x/supply/internal/types/account.go#L40"},"cosmos-sdk"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'TimeLockCoinsAccAddr = sdk.AccAddress(crypto.AddressHash([]byte("BinanceChainTimeLockCoins")))\n')),(0,r.kt)("p",null,"The account for mainnet is: ",(0,r.kt)("strong",{parentName:"p"},"bnb1hn8ym9xht925jkncjpf7lhjnax6z8nv24fv2yq")," and the account for testnet is: ",(0,r.kt)("strong",{parentName:"p"},"tbnb1hn8ym9xht925jkncjpf7lhjnax6z8nv2mu9wy3"),"\nThe specific user will not be able to claim them back, including restrictions where they cannot use, transfer or spend these tokens."),(0,r.kt)("h3",{id:"command-line"},"Command line"),(0,r.kt)("p",null,"You must use ",(0,r.kt)("inlineCode",{parentName:"p"},"--broadcast")," to submit your transaction to the blockchain, otherwise it will return an unsigned transaction."),(0,r.kt)("h3",{id:"parameters"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"th"},"Field")),(0,r.kt)("th",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"th"},"Type")),(0,r.kt)("th",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"th"},"Description")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Description"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Description of the lock operation. Max length of description is 128 bytes.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Amount"),(0,r.kt)("td",{parentName:"tr",align:"left"},"[]Coin"),(0,r.kt)("td",{parentName:"tr",align:"left"},"A set of tokens to be locked")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"LockTime"),(0,r.kt)("td",{parentName:"tr",align:"left"},"int64"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The time when these tokens can be unlocked. LockTime is a future timestamp (seconds elapsed from January 1st, 1970 at UTC) and max LockTime should be before 10 years from now.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"broadcast"),(0,r.kt)("td",{parentName:"tr",align:"left"},"bool"),(0,r.kt)("td",{parentName:"tr",align:"left"},"if you want to submit your transaction to the blockchain")))),(0,r.kt)("h3",{id:"fee"},"Fee"),(0,r.kt)("p",null,"0.01 BNB will be charged on TimeLock transactions."),(0,r.kt)("h3",{id:"example"},"Example"),(0,r.kt)("p",null,"On testnet, you can lock 1BNB for 1 day."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'./tbnbcli token time-lock --amount "100000000:BNB" --from <key-name> --description " test timelock" --lock-time <lock-timestamp> --chain-id Binance-Chain-Ganges --trust-node --node http://data-seed-pre-0-s3.bnbchain.org:80 --broadcast\n')),(0,r.kt)("p",null,"On mainnet, you can lock 1BNB for 1 day."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'./bnbcli token time-lock --amount "100000000:BNB" --from <key-name> --description " test timelock" --lock-time <lock-timestamp> --chain-id Binance-Chain-Tigris --node http://dataseed1.bnbchain.org:80 --broadcast\n')),(0,r.kt)("h2",{id:"timeunlock"},"TimeUnlock"),(0,r.kt)("p",null,"TimeUnlock will claim the locked tokens back when the specified lock time has passed."),(0,r.kt)("h3",{id:"parameters-1"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"th"},"Field")),(0,r.kt)("th",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"th"},"Type")),(0,r.kt)("th",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"th"},"Description")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"address"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"the address you want to query")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"time-lock-id"),(0,r.kt)("td",{parentName:"tr",align:"left"},"int64"),(0,r.kt)("td",{parentName:"tr",align:"left"},"the id of your locking, it's incremental")))),(0,r.kt)("h3",{id:"fee-1"},"Fee"),(0,r.kt)("p",null,"0.01 BNB will be charged on ReLock transactions."),(0,r.kt)("h3",{id:"example-1"},"Example"),(0,r.kt)("p",null,"On testnet, you can unlock tokens"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"./tbnbcli token time-unlock --from <your-address> --time-lock-id <lock-id> --chain-id Binance-Chain-Ganges --trust-node --node http://data-seed-pre-0-s3.bnbchain.org:80\n")),(0,r.kt)("p",null,"On mainnet, you can unlock tokens."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"./bnbcli token time-unlock --from <key-name> --time-lock-id <lock-id> --chain-id Binance-Chain-Tigris --node http://dataseed1.bnbchain.org:80\n")),(0,r.kt)("p",null,"Example output for trying to unlock tokens whose locking period is not expired:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'ERROR: {"codespace":7,"code":7,"abci_code":458759,"message":"Can not unlock: lock time(2019-06-28 09:26:54 +0000 UTC) is after now(2019-06-27 08:31:54.680643156 +0000 UTC)"}\n')),(0,r.kt)("h2",{id:"timerelock"},"TimeRelock"),(0,r.kt)("p",null,"TimeRelock can extend lock times, increase the amount of locked tokens or modify the description of an existing lock record."),(0,r.kt)("p",null,"PLease note that you either increase the ",(0,r.kt)("inlineCode",{parentName:"p"},"expire time")," or amount of your lock of tokens which are not unlocked."),(0,r.kt)("h3",{id:"parameters-2"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"th"},"Field")),(0,r.kt)("th",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"th"},"Type")),(0,r.kt)("th",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"th"},"Description")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"time-lock-id"),(0,r.kt)("td",{parentName:"tr",align:"left"},"int64"),(0,r.kt)("td",{parentName:"tr",align:"left"},"the id of your locking, it's incremental")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Amount"),(0,r.kt)("td",{parentName:"tr",align:"left"},"[]Coin"),(0,r.kt)("td",{parentName:"tr",align:"left"},"A set of tokens to be locked")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"LockTime"),(0,r.kt)("td",{parentName:"tr",align:"left"},"int64"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The time when these tokens can be unlocked. LockTime is a future timestamp(seconds elapsed from January 1st, 1970 at UTC) and max LockTime should be before 10 years from now.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"broadcast"),(0,r.kt)("td",{parentName:"tr",align:"left"},"bool"),(0,r.kt)("td",{parentName:"tr",align:"left"},"if you want to submit your transaction to the blockchain")))),(0,r.kt)("h3",{id:"fee-2"},"Fee"),(0,r.kt)("p",null,"0.01 BNB will be charged on UnLock transactions."),(0,r.kt)("h3",{id:"example-2"},"Example"),(0,r.kt)("p",null,"On testnet, you can relock tokens"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"./tbnbcli token time-relock --time-lock-id <lock-id> --increase-amount-to <amount of tokens> --from <key-name> --chain-id Binance-Chain-Ganges --node=data-seed-pre-2-s1.bnbchain.org:80 --broadcast\n")),(0,r.kt)("p",null,"On mainnet, you can relock tokens"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"./bnbcli token time-relock --time-lock-id <lock-id> --increase-amount-to <amount of tokens> --from <key-name> --chain-id Binance-Chain-Tigris --node http://dataseed1.bnbchain.org:80 --broadcast\n")),(0,r.kt)("p",null,"Output if you don't add more tokens or don't extend your locking period, you will get the following error:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'ERROR: {"codespace":7,"code":6,"abci_code":458758,"message":"Invalid lock amount: new locked coins(100000000BNB) should be more than original locked coins(100000000BNB)"}\n')),(0,r.kt)("h2",{id:"querytimelock"},"QueryTimeLock"),(0,r.kt)("p",null,"QueryTimeLock will query a lock record of a given address by the id. If this locking is ended, then no info will be returned."),(0,r.kt)("h3",{id:"parameters-3"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"th"},"Field")),(0,r.kt)("th",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"th"},"Type")),(0,r.kt)("th",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"th"},"Description")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"time-lock-id"),(0,r.kt)("td",{parentName:"tr",align:"left"},"int64"),(0,r.kt)("td",{parentName:"tr",align:"left"},"the id of your locking, it's incremental")))),(0,r.kt)("h3",{id:"example-3"},"Example"),(0,r.kt)("p",null,"On testnet, you can query lock history by ID:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"./tbnbcli token query-time-lock --from <your-key-name> --time-lock-id <lock-id> --chain-id Binance-Chain-Ganges --trust-node --node http://data-seed-pre-0-s3.bnbchain.org:80\n")),(0,r.kt)("p",null,"On mainnet, you can query lock history:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"./bnbcli token query-time-lock --from <your-key-name> --time-lock-id <lock-id> --chain-id Binance-Chain-Tigris --trust-node --node http://dataseed1.bnbchain.org:80\n")),(0,r.kt)("p",null,"Example output:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'[\n  {\n    "id": "1",\n    "description": " test timelock",\n    "amount": [\n      {\n        "denom": "BNB",\n        "amount": "100000000"\n      }\n    ],\n    "lock_time": "2019-06-27T01:59:52Z"\n  }\n]\n')),(0,r.kt)("h2",{id:"querytimelocks"},"QueryTimeLocks"),(0,r.kt)("p",null,"QueryTimeLocks will query all lock records of a given address."),(0,r.kt)("h3",{id:"querytimelock-parameters"},"QueryTimeLock Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"th"},"Field")),(0,r.kt)("th",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"th"},"Type")),(0,r.kt)("th",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"th"},"Description")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"address"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"the address you want to query")))),(0,r.kt)("h3",{id:"example-4"},"Example"),(0,r.kt)("p",null,"On testnet, you can query lock history by address:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"./tbnbcli token query-time-locks --address <your-address> --chain-id Binance-Chain-Ganges --trust-node --node http://data-seed-pre-0-s3.bnbchain.org:80\n")),(0,r.kt)("p",null,"On mainnet, you can query lock history by address:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"./bnbcli token query-time-locks --address <your-address> --chain-id Binance-Chain-Tigris --trust-node --node http://dataseed1.bnbchain.org:80\n")),(0,r.kt)("p",null,"Example output:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'[\n  {\n    "id": "1",\n    "description": " test timelock",\n    "amount": [\n      {\n        "denom": "BNB",\n        "amount": "100000000"\n      }\n    ],\n    "lock_time": "2019-06-27T01:59:52Z"\n  },\n  {\n    "id": "2",\n    "description": " test timelock",\n    "amount": [\n      {\n        "denom": "BNB",\n        "amount": "100000000"\n      }\n    ],\n    "lock_time": "2019-06-28T09:26:54Z"\n  }\n]\n')))}k.isMDXComponent=!0}}]);