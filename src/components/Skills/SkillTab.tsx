import { CardContent, Divider, Stack, Typography } from "@mui/material";
import SkillChip from "./SkillChip";

const SkillTab = (props: any) => {
  return (
    <CardContent
      sx={{
        display: "flex",
        flexDirection: {
          xs: "column",
          md: "row",
        },
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Typography
        variant="h6"
        sx={{
          lineHeight: "normal",
          width: { md: "5rem" },
          fontSize: { sm: "1.5rem", md: "1rem" },
          paddingBottom: { xs: "1rem", md: "0" },
        }}
      >
        {props.name}
      </Typography>
      <Stack
        direction="row"
        spacing={0}
        sx={{ width: { sm: "80%" }, flexWrap: "wrap", ml: { md: 3 } }}
      >
        {props.skill.map((element: any) => (
          <SkillChip name={element.name} icon={element.icon} />
        ))}
      </Stack>
    </CardContent>
  );
};

export default SkillTab;
