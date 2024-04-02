import AppToast from "../components/AppToast";
import BurnButtonBar from "../components/BurnButtonBar";
import BurnStatsContainer from "../components/BurnStatsContainer";
import ChainSelector from "../components/ChainSelector";
import TransactionTable from "../components/TransactionTable";

const BurnPage = (
  {
    /* pass necessary props here */
  }
) => {
  return (
    <div>
      {/* Other JSX code */}
      <BurnButtonBar
        burnAmount={burnAmount}
        onChangeBurnAmount={onChangeBurnAmount}
        executeBurn={executeBurn}
        txButton={txButton}
        txProgress={txProgress}
        burnTxHash={burnTxHash}
        walletChain={walletChain}
      />
      <BurnStatsContainer />
      <TransactionTable />
      <ChainSelector />
      <AppToast />
    </div>
  );
};

export default BurnPage;
