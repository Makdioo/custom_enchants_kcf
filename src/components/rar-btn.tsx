interface RarBtnProps {
  label: any;
  color: string;
  active: boolean;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export function RarBtn({ label, color, active, onClick }: RarBtnProps) {
  return (
    <button
      onClick={onClick}
      style={{
        padding: "4px 12px",
        border: "1px solid",
        borderColor: active ? color : "#1a1a2a",
        borderRadius: 20,
        cursor: "pointer",
        fontSize: 11,
        fontWeight: 700,
        letterSpacing: 0.3,
        color: active ? color : "#3a3a4a",
        background: active ? `${color}18` : "transparent",
        boxShadow: active ? `0 0 12px ${color}44` : "none",
        transition: "all .15s",
      }}
    >
      {label}
    </button>
  );
}
