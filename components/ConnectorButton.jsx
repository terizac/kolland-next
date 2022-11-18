import { useContext, useEffect, useState } from "react";

export default function ConnectorButton({ customText }) {
  // const [{ data: connectData }, connect] = useConnect({ fetchEns: true });
  const { logout, getAccounts } = useContext(Web3AuthContext);
  const [accounts, setAccounts] = useState(null);

  useEffect(() => {
    const init = async () => {
      const accounts = await getAccounts();
      setAccounts(accounts);
    };
    init();
  }, [accounts]);

  return (
    <>
      <div className="text-white">{accounts}</div>
      <div
        className="btn b-2 ml-[20px] radius-btn xl:w-[180px] h-[48px] text-[16px] text-[400] flex justify-center items-center text-white"
        onClick={logout}
      >
        Logout
      </div>
    </>
  );
}
