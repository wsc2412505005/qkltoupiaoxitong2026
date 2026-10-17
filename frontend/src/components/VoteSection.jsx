import "./VoteSection.css";

function VoteSection({
  account,
  hasVoted,
  candidates = [],
  selectedId = "",
  onSelectCandidate,
  onVote,
  onConnectWallet,
}) {
  // 未连接钱包、已投过票、或未选择候选人时，投票按钮都不可用
  const isVoteDisabled = !account || hasVoted || selectedId === "";

  return (
    <div className="vote-section">
      <div className="section-label">我要投票</div>
      {/* 候选人下拉框 */}
      <select
        className="candidate-select"
        value={selectedId}
        disabled={!account || hasVoted}
        onChange={(event) => onSelectCandidate?.(event.target.value)}
      >
        <option value="">选择候选人...</option>
        {candidates.map((candidate) => (
          <option key={candidate.id} value={candidate.id}>
            {candidate.name}
          </option>
        ))}
      </select>
      {/* 投票操作按钮：不可用时灰显 */}
      <button
        className={`vote-btn ${isVoteDisabled ? "disabled" : "active"}`}
        type="button"
        disabled={isVoteDisabled}
        onClick={() => onVote?.()}
      >
        {hasVoted ? "已投票" : "投票"}
      </button>
      {/* 链接钱包按钮 */}
      <button
        className="connect-wallet-btn"
        type="button"
        onClick={() => onConnectWallet?.()}
      >
        {account ? "断开连接" : "连接钱包"}
      </button>
    </div>
  );
}

export default VoteSection;
