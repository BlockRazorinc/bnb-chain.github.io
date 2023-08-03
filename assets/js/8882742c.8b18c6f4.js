"use strict";(self.webpackChunkbeta_BNB_Docs=self.webpackChunkbeta_BNB_Docs||[]).push([[1327],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),p=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},k=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=p(n),k=a,h=c["".concat(s,".").concat(k)]||c[k]||m[k]||r;return n?o.createElement(h,l(l({ref:t},u),{},{components:n})):o.createElement(h,l({ref:t},u))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,l=new Array(r);l[0]=k;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[c]="string"==typeof e?e:a,l[1]=i;for(var p=2;p<r;p++)l[p]=n[p];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}k.displayName="MDXCreateElement"},8419:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>r,metadata:()=>i,toc:()=>p});var o=n(83117),a=(n(67294),n(3905));const r={},l=void 0,i={unversionedId:"wallets/tutorial/bep8",id:"wallets/tutorial/bep8",title:"bep8",description:"In this article, we are going to take a tour about how to manage your BEP8 tokens in BNB Chain Testnet web wallet.",source:"@site/docs/wallets/tutorial/bep8.md",sourceDirName:"wallets/tutorial",slug:"/wallets/tutorial/bep8",permalink:"/docs/wallets/tutorial/bep8",draft:!1,editUrl:"https://github.com/bnb-chain/bnb-chain.github.io/blob/master/docs/wallets/tutorial/bep8.md",tags:[],version:"current",frontMatter:{}},s={},p=[{value:"What is BEP8 Token",id:"what-is-bep8-token",level:2},{value:"Issue BEP8 Token",id:"issue-bep8-token",level:2},{value:"List BEP8 Token",id:"list-bep8-token",level:2},{value:"Trade BEP8 Token",id:"trade-bep8-token",level:2},{value:"Manage the Supply of BEP8 Tokens",id:"manage-the-supply-of-bep8-tokens",level:2}],u={toc:p},c="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"In this article, we are going to take a tour about how to manage your BEP8 tokens in BNB Chain Testnet ",(0,a.kt)("a",{parentName:"p",href:"https://testnet.binance.org/en/tokens"},"web wallet"),"."),(0,a.kt)("h2",{id:"what-is-bep8-token"},"What is BEP8 Token"),(0,a.kt)("p",null,"Since the ",(0,a.kt)("a",{parentName:"p",href:"https://community.binance.org/topic/2828"},"Nightingale upgrade")," of BNB Chain testnet, a new token protocol ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/bnb-chain/BEPs/blob/master/BEPs/BEP8.md"},"BEP8")," is introduced. BEP8 protocol targets a different marketplace and provides several potential business cases in areas like micro-financing."),(0,a.kt)("p",null,"Currently, the cost to get a BEP2 token listed on Binance DEX is quite expensive, as it takes more system resources, which is more suitable for the mature and large scale projects with enough recognition in the markets.  At the same time, more micro-financing cases like copyright owners, peer production, and community incentive points are looking for flexible tokenization and trading platforms to support their current works and share their potential future success.  New BEP8 tokens market is introduced to meet these demands and will increase the liquidity of utility tokens, which is similar to Small and Medium Enterprise (SME) board in the traditional stock markets"),(0,a.kt)("h2",{id:"issue-bep8-token"},"Issue BEP8 Token"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Go to issue ",(0,a.kt)("a",{parentName:"li",href:"https://testnet.binance.org/en/tokens"},"page"),", click at \u201cIssue Token\u201d button")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://lh6.googleusercontent.com/oncU08EeRRDZTvp83CurYlE1uh695kGpaNkapFgkTC5cfWJKHkptzmLkx2EKnhRgz9TZFTgyMBUz5GeZUYFskLGlimM7zMkcn-gexTErxryARD9bOjC-FUGytw8UEFo2FgIH3IPW",alt:"img"})),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"Choose BEP8, which is also called MiniToken")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://lh4.googleusercontent.com/OwbEzux0-HWV9L0VWPrtBAOvhG-owvQbPfaRhnCzF0fIRQSWzTfQxYVvggdKi624arMDTl_VD6gyEG4b_fLmB6siCmMoQq5mYLb1KXLeMNzp00rE3O4VWwYRhNkpvpsTQnEJGiZy",alt:"img"})),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"Fill the form to provide information about your token.")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://lh5.googleusercontent.com/sUI0AaTZ3paH5dxeRm83l5ZAH8VYZ48bibo_P-fGAaMHXsHR0G9_giQ3V5JTwXAEic7LEZOpWrutnj_gTls9wXsOdqzukZGb24gHuqXiLyly_E6K1DdW46gi0VcNARgipzpKug0a",alt:"img"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Token Name"),": Token Name length must between 3 and 32"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Token Symbol"),": Symbol length must between 2 and 5"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Maximum Supply"),": BEP8 tokens can be categorized by its maximum supply, which could be either 10K or 1million. You have to pay for more for a larger maximum supply."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Supply"),": This amount of token will appear under the balance of token issuer"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Mintable"),": Whether this token can be inflationary."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Token URI"),': you can paste URL of your project\u2019s website or the URI points to a JSON file that conforms to the "Mini-BEP2 Metadata JSON Schema". ',(0,a.kt)("a",{parentName:"li",href:"https://docs.bnbchain.org/docs/beaconchain/learn/BEP8/#set-token-uri"},"https://docs.bnbchain.org/docs/beaconchain/learn/BEP8/#set-token-uri"))),(0,a.kt)("ol",{start:4},(0,a.kt)("li",{parentName:"ol"},"Confirm Token Info")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://lh6.googleusercontent.com/fBfSXxquRX2jxQ6yxH-ZWMyFoPbFY-e211kBEBuYvV4EEBajbBP2LeUeG3e_GxZ2BI91dULqDzbovVIJS8ktvZGP5uO-20fKaRkZ2TQqT3OC_dFs9rDxoXiMp0tOd041vlJp4vwR",alt:"img"})),(0,a.kt)("p",null,"You should wait for a little time before this token appears at your token list."),(0,a.kt)("h2",{id:"list-bep8-token"},"List BEP8 Token"),(0,a.kt)("p",null,"The listing process is different from BEP2 token list. BEP8 token issuer can list the BEP8 token without the agreement of BNB Beacon Chain validators. The BEP8 token can only be listed against BNB or BUSD and they cannot be listed as a quote symbol."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Click on the list button")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://lh4.googleusercontent.com/AX1YK2vECeTKBO-MnSud2L29R_-q-UZg7kQquF51fu-GQZHxu1Kv2mXYY_vFyFYgvqK7IJMySNvr1x-0AmLs4m320vuCp_yKbcur1XKQ-9QG-DZHOd-mpm3Ykv9Z1hLsKVKhPWlZ",alt:"img"})),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"Fill Price")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"List against BUSD")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://lh3.googleusercontent.com/mICjk5Ell929GEvgKgEmSmnUt_nCqkHUOJTv9FI93cGchyNHvulMxysqBFTS39WuPMRALbKVyK_fx6relNd4tXh0gDWAKlnjXJnOunYaQBlQU4yQBAjCge_jJ4gIIx4QKO7cj9pP",alt:"img"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"List against BNB")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://lh3.googleusercontent.com/iSYkKN1UgLTaZ39mqnEuzhfcyPKS9X370dx52c66bAv6-CxnNCfyJeu2FQafFJDVfA9DdU11Vw5ZxP-p-9z7o3B637E1vcHjviA2WKSctqtCv99UM9kzuhfe8JjDoKvRXRh0-F7M",alt:"img"})),(0,a.kt)("h2",{id:"trade-bep8-token"},"Trade BEP8 Token"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Go to ",(0,a.kt)("a",{parentName:"li",href:"https://testnet.binance.org/en/trade/mini/ABC-524M_BNB"},"BEP8 Token exchange"))),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://lh4.googleusercontent.com/ExmXaWy9NlsjZnOUFY3L_SnBADNLkiXn7hea95BTlECKmzoc8KT7DiEHT0VCj0NRiTF-5fki8zVA0_gNNqnCBZyaanD908RiV5DuRB_s4h9TU_gvhxozTaxbvy_rYLoY3K391lFZ",alt:"img"})),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"Place your orders")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://lh3.googleusercontent.com/kjI__AIls9kvnIz0CYTWHTuRwXGz2YwQf3IuRS3Y6lopunTvyTJ7ucsBNqcGSE4bWkeZebHVlC2Z6Vss2BfAUDQsbiqM77r-mUGIE6871WYjq9kS9U-VFncrGxE7Zqt4p8xEcTWb",alt:"img"})),(0,a.kt)("h2",{id:"manage-the-supply-of-bep8-tokens"},"Manage the Supply of BEP8 Tokens"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Mint Tokens\nClick on ",(0,a.kt)("inlineCode",{parentName:"li"},"Mint")," button and input amount\n",(0,a.kt)("img",{parentName:"li",src:"https://lh3.googleusercontent.com/wt4IKUxV2gxzdRQqGiOXA0QN-VoeKqYiqYbifo1EP4P1kR-ucGkv2KCka50loerOGFFErBBFinTZDG6cr5eeEBV0elr3mDdjD9L5Zd4WJTHBgXBhgEzzFMR58dw4LcyKrDhX-Jd7",alt:"img"}))),(0,a.kt)("p",null,"Please note that the total supply cannot exceed maximum supply."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Freeze Tokens\nClick on ",(0,a.kt)("inlineCode",{parentName:"li"},"Freeze")," button and input amount\n",(0,a.kt)("img",{parentName:"li",src:"https://lh5.googleusercontent.com/ztXqTJxQ7HWmEUBTOhR1I11k-sVlLlKwCBjanVbNh3CGHdXJH3xU2_AfM0Xgaeq5PqPUVa07yDvmV9DpihGpcipuJr1x2sHC_WZ19K4oaxP4JUXBO3tmhChQMFp2pdSlsXJ2H_eF",alt:"img"})),(0,a.kt)("li",{parentName:"ul"},"Unfreeze Tokens\nClick on ",(0,a.kt)("inlineCode",{parentName:"li"},"Unfreeze")," button and input amount\n",(0,a.kt)("img",{parentName:"li",src:"https://lh4.googleusercontent.com/MWYG9ONKMGamRt3EZIxxxdP03C4vFOcwk3zL2pBiqFuzDBUNovHGcp5Ypo6FriUX50RAmI_zIroX209jWiFTazS_pHPfNm-vUYMO2fnRTRBA3O1Wn8lkBbzvKrIBhj_y6PnpyzDr",alt:"img"})),(0,a.kt)("li",{parentName:"ul"},"Burn Tokens\nClick on ",(0,a.kt)("inlineCode",{parentName:"li"},"Burn")," button and input amount\n",(0,a.kt)("img",{parentName:"li",src:"https://lh6.googleusercontent.com/2htVnYFl21yQsYZAzG7zbRdVChbd6PGPhe4sfxnZEnJgCOytNKJ1RuWk1dxxB5JPoPMQuAruvdRx8hbXdffB7lZry3NQ0oGfdjSO2eAfT68WoKI5_3ulPYb_xDcFwKPWMYoBenEo",alt:"img"}))))}m.isMDXComponent=!0}}]);