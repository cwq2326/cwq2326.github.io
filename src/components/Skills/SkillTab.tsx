import { CardContent, Stack, Typography } from '@mui/material';

import SkillChip from './SkillChip';

type SkillTabProps = {
  name: string;
  skill: {
    name: string;
    icon: string;
  }[];
};

const SkillTab = (props: SkillTabProps) => {
  return (
    <CardContent
      sx={{
        display: 'flex',
        flexDirection: {
          xs: 'column',
          md: 'row',
        },
        alignItems: {
          xs: 'flex-start',
          md: 'center',
        },
      }}
    >
      <Typography
        variant="h3"
        sx={{
          lineHeight: 'normal',
          width: { md: '6rem' },
          fontSize: { xs: '1.2rem', md: '1.1rem' },
          paddingBottom: { xs: '1rem', md: '0' },
          mx: 'auto'
        }}
      >
        {props.name}
      </Typography>
      <Stack
        direction="row"
        spacing={0}
        sx={{ width: { sm: '80%' }, flexWrap: 'wrap', ml: { md: 5 } }}
      >
        {props.skill.map((el: any, idx: number) => (
          <SkillChip name={el.name} icon={el.icon} key={idx} idx={idx} />
        ))}
      </Stack>
    </CardContent>
  );
};

export default SkillTab;
