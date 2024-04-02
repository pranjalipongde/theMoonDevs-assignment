import { ChangeEvent } from "react";

interface BurnButtonBarProps {
  burnAmount: string;
  onChangeBurnAmount: (e: ChangeEvent<HTMLInputElement>) => void;
  executeBurn: () => void;
  txButton: BurnTxProgress;
  txProgress: boolean;
  burnTxHash: string | null;
  walletChain: any; // Adjust the type according to your data structure
}

const BurnButtonBar: React.FC<BurnButtonBarProps> = ({
  burnAmount,
  onChangeBurnAmount,
  executeBurn,
  txButton,
  txProgress,
  burnTxHash,
  walletChain,
}) => {
  return (
    <div className="burn_bar">
      {/* Burn amount input */}
      <div className="input_value_box">
        <p className="input_muted">Enter amount to Burn</p>
        <input
          className="input_value"
          type="text"
          value={burnAmount}
          placeholder="0.00"
          onChange={onChangeBurnAmount}
        />
      </div>
      {/* Burn button */}
      <Button
        variant="outlined"
        onClick={executeBurn}
        startIcon={
          txProgress ? (
            <CircularProgress size={20} color="inherit" />
          ) : (
            <AppIcon
              url="/icons/fire.svg"
              fill={IconFilter.primary}
              size={1.5}
              margin={0}
            />
          )
        }
      >
        <span>{txButton}</span>
      </Button>
      {/* Burn transaction link */}
      {burnTxHash && (
        <div className="tx_links">
          <AppTooltip
            title={`Check burn Transaction on chain ${walletChain?.blockExplorers?.default?.name}`}
          >
            <AppExtLink
              url={`${walletChain?.blockExplorers?.default?.url}/tx/${burnTxHash}`}
              className="header_link"
            >
              Burn Tx: {prettyEthAddress(burnTxHash ?? zeroAddress)}
            </AppExtLink>
          </AppTooltip>
        </div>
      )}
    </div>
  );
};

export default BurnButtonBar;
