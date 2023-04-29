import { Avatar, Chip } from "@mui/material";

type SkillChipProps = {
  name: string;
  icon?: string;
};

const SkillChip = (props: SkillChipProps) => {
  return (
    <Chip
      label={props.name}
      variant="outlined"
      avatar={<Avatar src={props.icon} />}
      sx={[
        { m: 1, bgcolor: "#fff", color: "primary.contrastText" },
        {
          "&:hover": {
            transform: "scale(1.2)",
          },
        },
      ]}
    />
  );
};

export default SkillChip;
