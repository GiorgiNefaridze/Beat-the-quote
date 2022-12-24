import { styled } from "@mui/material/styles";
import HelpIcon from "@mui/icons-material/Help";
import Tooltip, { TooltipProps, tooltipClasses } from "@mui/material/Tooltip";

const HtmlTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: "black",
    color: "black",
    maxWidth: 220,
    fontSize: theme.typography.pxToRem(12),
    cursor: "pointer",
    display: "flex",
    flexDirection: "column",
    gap: " 4px 0",
  },
}));

const PointSystem = () => {
  return (
    <div>
      <HtmlTooltip
        title={
          <>
            <h4>Easy = 2 points</h4>
            <h4>Medium = 5 points</h4>
            <h4>Hard = 8 points</h4>
          </>
        }
      >
        <HelpIcon style={{ cursor: "pointer" }} />
      </HtmlTooltip>
    </div>
  );
};

export default PointSystem;
