import { useEffect, useState } from "react";
import { Web3Auth } from "@web3auth/web3auth";
import { OpenloginAdapter } from "@web3auth/openlogin-adapter";
import { CHAIN_NAMESPACES, SafeEventEmitterProvider } from "@web3auth/base";
import RPC from "./evm";

const clientId = "BGr8gtjO01Be55tkljpYQFezrNPmsX2HWkbQb7AVIMuwAJopinjr-opENMExFz1ycYBqsPD2mzO7D030dezssM0"; // get from https://dashboard.web3auth.io

function App() {
  const [web3auth, setWeb3auth] = useState<Web3Auth | null>(null);
  const [provider, setProvider] = useState<SafeEventEmitterProvider | null>(null);

  useEffect(() => {
    const init = async () => {
      try {
        const web3auth = new Web3Auth({
          clientId,
          chainConfig: {
            chainNamespace: "eip155", // goerli
            chainId: "0x5", // 0x5 goerli
            rpcTarget: "https://goerli.infura.io/v3/8515c675b42942949e2154ccb15a96ce", // 私はinfura経由でpolygon-mumbaiにアップしておりますが、テスト環境はお任せします。
          },
        });

        // custom auth
        // const openloginAdapter = new OpenloginAdapter({
        //   adapterSettings: {
        //     clientId,
        //     network: "testnet",
        //     uxMode: "popup",
        //     loginConfig: {
        //       // Google login
        //       google: {
        //         name: "any name",
        //         verifier: "dct-google-test",
        //         typeOfLogin: "google",
        //         clientId: "334639506789-vl4ti8njc3v8tvflp26db08a9qbnpgej.apps.googleusercontent.com",
        //       },
        //     },
        //   },
        // });
        // web3auth.configureAdapter(openloginAdapter);

        setWeb3auth(web3auth);

        await web3auth.initModal();
        if (web3auth.provider) {
          setProvider(web3auth.provider);
        }
      } catch (error) {
        console.error(error);
      }
    };

    init();
  }, []);

  const login = async () => {
    if (!web3auth) {
      console.log("web3auth not initialized yet..");
      return;
    }
    const web3authProvider = await web3auth.connect();
    const user = await web3auth.getUserInfo();
    console.log(user);
    // if wallet connect, receive the res of API prepare?method=wallet req: address res: msg + timestamp
    // then signMessage and send it to API login?method=wallet req: address + signature res: accessToken, refreshToken

    // aggregateVerifier: "tkey-google"
    // dappShare: ""
    // email: "intheblackworld@gmail.com"
    // idToken: "eyJhbGciOiJFUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IlRZT2dnXy01RU9FYmxhWS1WVlJZcVZhREFncHRuZktWNDUzNU1aUEMwdzAifQ.eyJpYXQiOjE2NjUyMTkwNjcsImF1ZCI6IkJHcjhndGpPMDFCZTU1dGtsanBZUUZlenJOUG1zWDJIV2tiUWI3QVZJTXV3QUpvcGluanItb3BFTk1FeEZ6MXljWUJxc1BEMm16TzdEMDMwZGV6c3NNMCIsIm5vbmNlIjoiMDM5NjQ1MGQ0NDE3NDkxNGJlMzI2OWI3NzdhODE3ODAwYzc2OTY3NjJiOWM5NTI3YzZlMDBmMGJhNTllOTA1NDA1IiwiaXNzIjoiaHR0cHM6Ly9hcGkub3BlbmxvZ2luLmNvbSIsIndhbGxldHMiOlt7InB1YmxpY19rZXkiOiIwMzQ3NjBmNThjODgwMDMwM2NjOWI3YzQ2MTZiMGFmN2E2Y2U1NTA1YzNjZTA4ODgwY2NiMGMwNDU0ODdkZTk0OWQiLCJ0eXBlIjoid2ViM2F1dGhfYXBwX2tleSIsImN1cnZlIjoic2VjcDI1NmsxIn1dLCJlbWFpbCI6ImludGhlYmxhY2t3b3JsZEBnbWFpbC5jb20iLCJuYW1lIjoi5LiB5a626bqSIiwicHJvZmlsZUltYWdlIjoiaHR0cHM6Ly9saDMuZ29vZ2xldXNlcmNvbnRlbnQuY29tL2EvQUxtNXd1MzQ1dXFGbjV3UGt5SEtZSUU5aW9DZGVxQlg4Q3RaMXd5eVVPekk9czk2LWMiLCJ2ZXJpZmllciI6InRvcnVzIiwidmVyaWZpZXJJZCI6ImludGhlYmxhY2t3b3JsZEBnbWFpbC5jb20iLCJhZ2dyZWdhdGVWZXJpZmllciI6InRrZXktZ29vZ2xlIiwiZXhwIjoxNjY1MzA1NDY3fQ.kYmoPBFKu4Q5cG9bZnI-96y9P06XFJ4HSUyTECdHLCuifNvJ5uPc8mcvd7P2SfePXsVJLNVB1HT_c-z5XRzahw"
    // name: "丁家麒"
    // oAuthAccessToken: ""
    // oAuthIdToken: ""
    // profileImage: "https://lh3.googleusercontent.com/a/ALm5wu345uqFn5wPkyHKYIE9ioCdeqBX8CtZ1wyyUOzI=s96-c"
    // typeOfLogin: "google"
    // verifier: "torus"
    // verifierId: "intheblackworld@gmail.com"

    setProvider(web3authProvider);
  };

  const getUserInfo = async () => {
    if (!web3auth) {
      console.log("web3auth not initialized yet");
      return;
    }
    const user = await web3auth.getUserInfo();
    console.log(user);
  };

  const logout = async () => {
    if (!web3auth) {
      console.log("web3auth not initialized yet");
      return;
    }
    await web3auth.logout();
    setProvider(null);
  };

  const getChainId = async () => {
    if (!provider) {
      console.log("provider not initialized yet");
      return;
    }
    const rpc = new RPC(provider);
    const chainId = await rpc.getChainId();
    console.log(chainId);
  };
  const getAccounts = async () => {
    if (!provider) {
      console.log("provider not initialized yet");
      return;
    }
    const rpc = new RPC(provider);
    const address = await rpc.getAccounts();
    console.log(address);
  };

  const getBalance = async () => {
    if (!provider) {
      console.log("provider not initialized yet");
      return;
    }

    console.log(provider)
    const rpc = new RPC(provider);
    const balance = await rpc.getBalance();
    console.log(balance);
  };

  const signMessage = async (msg) => {
    if (!provider) {
      console.log("provider not initialized yet");
      return;
    }
    const rpc = new RPC(provider);
    const signedMessage = await rpc.signMessage(msg);
    console.log(signedMessage);
  };

  const getPrivateKey = async () => {
    if (!provider) {
      console.log("provider not initialized yet");
      return;
    }
    const rpc = new RPC(provider);
    const privateKey = await rpc.getPrivateKey();
    console.log(privateKey);
  };
  const loggedInView = (
    <>
      <button onClick={getUserInfo} className="card">
        Get User Info
      </button>
      <button onClick={getChainId} className="card">
        Get Chain ID
      </button>
      <button onClick={getAccounts} className="card">
        Get Accounts
      </button>
      <button onClick={getBalance} className="card">
        Get Balance
      </button>
      <button onClick={signMessage} className="card">
        Sign Message
      </button>
      <button onClick={getPrivateKey} className="card">
        Get Private Key
      </button>
      <button onClick={logout} className="card">
        Log Out
      </button>

      <div id="console" style={{ whiteSpace: "pre-line" }}>
        <p style={{ whiteSpace: "pre-line" }}></p>
      </div>
    </>
  );

  const unloggedInView = (
    <button onClick={login} className="card">
      Login
    </button>
  );

  return (
    <div className="container">
      <h1 className="title">
        <a target="_blank" href="http://web3auth.io/" rel="noreferrer">
          Web3Auth
        </a>
        & ReactJS Example
      </h1>

      <div className="grid">{provider ? loggedInView : unloggedInView}</div>

      <footer className="footer">
        <a href="https://github.com/Web3Auth/Web3Auth/tree/master/examples/react-app" target="_blank" rel="noopener noreferrer">
          Source code
        </a>
      </footer>
    </div>
  );
}

export default App;
